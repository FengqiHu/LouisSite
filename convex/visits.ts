import { actionGeneric, makeFunctionReference, mutationGeneric, queryGeneric } from 'convex/server'
import { v } from 'convex/values'

type SaveVisitArgs = {
  ip: string
  ipMasked: string
  path: string
  userAgent?: string
  referer?: string
  country?: string
  region?: string
  city?: string
  latitude?: number
  longitude?: number
  timezone?: string
  provider?: string
}

const saveVisitRef = makeFunctionReference<'mutation', SaveVisitArgs, { ok: boolean }>(
  'visits:saveVisit',
)

const toOptionalString = (value: unknown) => {
  if (typeof value !== 'string') {
    return undefined
  }

  const trimmed = value.trim()
  return trimmed.length > 0 ? trimmed : undefined
}

const isPrivateIp = (ip: string) => {
  const normalized = ip.toLowerCase()

  if (
    normalized === 'localhost' ||
    normalized === '::1' ||
    normalized.startsWith('127.') ||
    normalized.startsWith('10.') ||
    normalized.startsWith('192.168.') ||
    normalized.startsWith('169.254.') ||
    normalized.startsWith('fc') ||
    normalized.startsWith('fd') ||
    normalized.startsWith('fe80:')
  ) {
    return true
  }

  if (normalized.startsWith('172.')) {
    const [, second] = normalized.split('.')
    const secondOctet = Number(second)
    return Number.isInteger(secondOctet) && secondOctet >= 16 && secondOctet <= 31
  }

  return false
}

const maskIp = (ip: string) => {
  const normalized = ip.trim()
  const ipv4 = normalized.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)

  if (ipv4) {
    return `${ipv4[1]}.${ipv4[2]}.${ipv4[3]}.0`
  }

  if (normalized.includes(':')) {
    const [first, second, third, fourth] = normalized.split(':')
    return [first, second, third, fourth].filter(Boolean).join(':') + '::'
  }

  return 'unknown'
}

type GeoLookup = {
  country?: string
  region?: string
  city?: string
  latitude?: number
  longitude?: number
  timezone?: string
  provider?: string
}

type IpWhoIsResponse = {
  success: boolean
  country?: string
  region?: string
  city?: string
  latitude?: number
  longitude?: number
  timezone?: {
    id?: string
  }
}

const lookupGeoByIp = async (ip: string): Promise<GeoLookup | null> => {
  if (!ip || ip === 'unknown' || isPrivateIp(ip)) {
    return null
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 2500)

  try {
    const response = await fetch(`https://ipwho.is/${encodeURIComponent(ip)}`, {
      signal: controller.signal,
    })

    if (!response.ok) {
      return null
    }

    const body = (await response.json()) as IpWhoIsResponse

    if (!body.success) {
      return null
    }

    return {
      country: toOptionalString(body.country),
      region: toOptionalString(body.region),
      city: toOptionalString(body.city),
      latitude: typeof body.latitude === 'number' ? body.latitude : undefined,
      longitude: typeof body.longitude === 'number' ? body.longitude : undefined,
      timezone: toOptionalString(body.timezone?.id),
      provider: 'ipwho.is',
    }
  } catch {
    return null
  } finally {
    clearTimeout(timeout)
  }
}

export const saveVisit = mutationGeneric({
  args: {
    ip: v.string(),
    ipMasked: v.string(),
    path: v.string(),
    userAgent: v.optional(v.string()),
    referer: v.optional(v.string()),
    country: v.optional(v.string()),
    region: v.optional(v.string()),
    city: v.optional(v.string()),
    latitude: v.optional(v.number()),
    longitude: v.optional(v.number()),
    timezone: v.optional(v.string()),
    provider: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert('visitorLogs', {
      ip: args.ip,
      ipMasked: args.ipMasked,
      path: args.path,
      userAgent: args.userAgent,
      referer: args.referer,
      country: args.country,
      region: args.region,
      city: args.city,
      latitude: args.latitude,
      longitude: args.longitude,
      timezone: args.timezone,
      provider: args.provider,
      createdAt: Date.now(),
    })

    return { ok: true }
  },
})

export const trackVisit = actionGeneric({
  args: {
    ip: v.string(),
    path: v.string(),
    userAgent: v.optional(v.string()),
    referer: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const ip = toOptionalString(args.ip) ?? 'unknown'
    const path = toOptionalString(args.path) ?? '/'
    const geo = await lookupGeoByIp(ip)

    await ctx.runMutation(saveVisitRef, {
      ip,
      ipMasked: maskIp(ip),
      path: path.slice(0, 512),
      userAgent: toOptionalString(args.userAgent),
      referer: toOptionalString(args.referer),
      ...geo,
    })

    return {
      ok: true,
      enriched: Boolean(geo),
    }
  },
})

export const latestVisitorLogs = queryGeneric({
  args: {
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const limit = Math.max(1, Math.min(args.limit ?? 50, 200))
    return await ctx.db.query('visitorLogs').withIndex('by_createdAt').order('desc').take(limit)
  },
})
