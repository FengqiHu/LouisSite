import { httpActionGeneric, httpRouter, makeFunctionReference } from 'convex/server'

type SubmitMessageArgs = {
  name: string
  email: string
  message: string
}

const submitMessage = makeFunctionReference<'mutation', SubmitMessageArgs, { ok: boolean }>(
  'contact:submitMessage',
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

      await ctx.runMutation(submitMessage, payload)

      return jsonResponse(200, { ok: true })
    } catch {
      return jsonResponse(400, { ok: false, error: 'Invalid request payload.' })
    }
  }),
})

export default http
