export type MessagePayload = {
  name: string
  email: string
  message: string
}

export type MessageResult =
  | { mode: 'convex' }
  | {
      mode: 'mailto'
      href: string
    }

const toQueryValue = (value: string) => encodeURIComponent(value)

const buildMailto = ({ name, email, message }: MessagePayload) => {
  const subject = toQueryValue(`Portfolio contact from ${name}`)
  const body = toQueryValue(`Name: ${name}\nEmail: ${email}\n\n${message}`)
  return `mailto:hufq0611@outlook.com?subject=${subject}&body=${body}`
}

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, '')

export const sendMessage = async (payload: MessagePayload): Promise<MessageResult> => {
  const convexSiteUrl = import.meta.env.VITE_CONVEX_SITE_URL?.trim()

  if (!convexSiteUrl) {
    return { mode: 'mailto', href: buildMailto(payload) }
  }

  const response = await fetch(`${trimTrailingSlash(convexSiteUrl)}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error('Unable to send message to Convex endpoint.')
  }

  return { mode: 'convex' }
}
