import { actionGeneric, makeFunctionReference, mutationGeneric, queryGeneric } from 'convex/server'
import { v } from 'convex/values'

const sanitize = (value: string) => value.trim().replace(/\s+/g, ' ')
const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')

type SubmitMessageArgs = {
  name: string
  email: string
  message: string
}

const submitMessageRef = makeFunctionReference<'mutation', SubmitMessageArgs, { ok: boolean }>(
  'contact:submitMessage',
)

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

export const submitMessageAndNotify = actionGeneric({
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

    // Persist first so contact data is not lost even if email delivery fails.
    await ctx.runMutation(submitMessageRef, payload)

    const resendApiKey = process.env.RESEND_API_KEY?.trim()
    const toEmail = process.env.CONTACT_TO_EMAIL?.trim()
    const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim()

    if (!resendApiKey || !toEmail || !fromEmail) {
      return {
        ok: true,
        notified: false,
        warning:
          'Message saved, but email notification is skipped. Set RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL.',
      }
    }

    const subject = `New portfolio message from ${payload.name}`
    const text = `Name: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`
    const html = `
      <h2>New Portfolio Contact</h2>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Message:</strong></p>
      <pre style="white-space: pre-wrap; font-family: inherit;">${escapeHtml(payload.message)}</pre>
    `

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: payload.email,
        subject,
        text,
        html,
      }),
    })

    if (!response.ok) {
      const errorBody = await response.text()
      console.error('Resend email send failed:', errorBody)
      return {
        ok: true,
        notified: false,
        warning: 'Message saved, but email notification failed.',
      }
    }

    return { ok: true, notified: true }
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
