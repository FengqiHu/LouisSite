import { httpActionGeneric, httpRouter, makeFunctionReference } from 'convex/server'

type SubmitMessageArgs = {
  name: string
  email: string
  message: string
}

type TrackVisitArgs = {
  ip: string
  path: string
  userAgent?: string
  referer?: string
}

const submitMessageAndNotify = makeFunctionReference<
  'action',
  SubmitMessageArgs,
  { ok: boolean; notified?: boolean; warning?: string }
>('contact:submitMessageAndNotify')

const trackVisit = makeFunctionReference<'action', TrackVisitArgs, { ok: boolean; enriched?: boolean }>(
  'visits:trackVisit',
)

const corsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'POST, OPTIONS',
  'access-control-allow-headers': 'content-type',
  'content-type': 'application/json; charset=utf-8',
}

const jsonResponse = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: corsHeaders,
  })

const forwardedForPattern = /for=(?:"?\[?([^;"\],]+)\]?"?)/i

const normalizeIp = (value: string) => {
  let candidate = value.trim().replace(/^"|"$/g, '')
  if (!candidate || candidate.toLowerCase() === 'unknown') {
    return null
  }

  if (candidate.includes(',')) {
    candidate = candidate.split(',')[0]?.trim() ?? ''
  }

  if (candidate.startsWith('[')) {
    const endBracket = candidate.indexOf(']')
    if (endBracket > 1) {
      candidate = candidate.slice(1, endBracket)
    }
  }

  if (/^\d{1,3}(?:\.\d{1,3}){3}:\d+$/.test(candidate)) {
    candidate = candidate.split(':')[0] ?? candidate
  }

  return candidate || null
}

const extractClientIp = (request: Request) => {
  const directHeaders = [
    'x-forwarded-for',
    'x-real-ip',
    'cf-connecting-ip',
    'fly-client-ip',
    'true-client-ip',
    'fastly-client-ip',
    'x-client-ip',
  ]

  for (const header of directHeaders) {
    const value = request.headers.get(header)
    if (!value) {
      continue
    }

    const ip = normalizeIp(value)
    if (ip) {
      return ip
    }
  }

  const forwarded = request.headers.get('forwarded')
  if (forwarded) {
    const match = forwarded.match(forwardedForPattern)
    if (match?.[1]) {
      const ip = normalizeIp(match[1])
      if (ip) {
        return ip
      }
    }
  }

  return 'unknown'
}

const http = httpRouter()

http.route({
  path: '/contact',
  method: 'OPTIONS',
  handler: httpActionGeneric(async () => jsonResponse(200, { ok: true })),
})

http.route({
  path: '/contact',
  method: 'POST',
  handler: httpActionGeneric(async (ctx, request) => {
    try {
      const body = (await request.json()) as Partial<SubmitMessageArgs>

      const payload = {
        name: typeof body.name === 'string' ? body.name : '',
        email: typeof body.email === 'string' ? body.email : '',
        message: typeof body.message === 'string' ? body.message : '',
      }

      const result = await ctx.runAction(submitMessageAndNotify, payload)
      return jsonResponse(200, result)
    } catch {
      return jsonResponse(400, { ok: false, error: 'Invalid request payload.' })
    }
  }),
})

http.route({
  path: '/track-visit',
  method: 'OPTIONS',
  handler: httpActionGeneric(async () => jsonResponse(200, { ok: true })),
})

http.route({
  path: '/track-visit',
  method: 'POST',
  handler: httpActionGeneric(async (ctx, request) => {
    try {
      const body = (await request.json()) as {
        path?: unknown
        referer?: unknown
      }

      const path = typeof body.path === 'string' ? body.path : '/'
      const headerReferer = request.headers.get('referer')
      const referer = typeof body.referer === 'string' ? body.referer : headerReferer ?? undefined

      const payload = {
        ip: extractClientIp(request),
        path,
        referer,
        userAgent: request.headers.get('user-agent') ?? undefined,
      }

      const result = await ctx.runAction(trackVisit, payload)
      return jsonResponse(200, result)
    } catch {
      return jsonResponse(400, { ok: false, error: 'Invalid request payload.' })
    }
  }),
})

export default http
