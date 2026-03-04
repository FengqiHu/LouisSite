import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  contactMessages: defineTable({
    name: v.string(),
    email: v.string(),
    message: v.string(),
    createdAt: v.number(),
  }).index('by_createdAt', ['createdAt']),
  visitorLogs: defineTable({
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
    createdAt: v.number(),
  })
    .index('by_createdAt', ['createdAt'])
    .index('by_ip', ['ip']),
})
