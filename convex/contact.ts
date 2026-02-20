import { mutationGeneric, queryGeneric } from 'convex/server'
import { v } from 'convex/values'

const sanitize = (value: string) => value.trim().replace(/\s+/g, ' ')

export const submitMessage = mutationGeneric({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const payload = {
      name: sanitize(args.name),
      email: args.email.trim().toLowerCase(),
      message: args.message.trim(),
    }

    if (!payload.name || !payload.email || !payload.message) {
      throw new Error('Name, email, and message are required.')
    }

    if (payload.message.length > 4000) {
      throw new Error('Message is too long.')
    }

    await ctx.db.insert('contactMessages', {
      ...payload,
      createdAt: Date.now(),
    })

    return { ok: true }
  },
})

export const latestMessages = queryGeneric({
  args: {
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const limit = Math.max(1, Math.min(args.limit ?? 25, 100))
    return await ctx.db
      .query('contactMessages')
      .withIndex('by_createdAt')
      .order('desc')
      .take(limit)
  },
})
