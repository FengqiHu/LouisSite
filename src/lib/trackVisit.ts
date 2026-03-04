const trimTrailingSlash = (value: string) => value.replace(/\/+$/, '')

export const trackVisit = async () => {
  const convexSiteUrl = import.meta.env.VITE_CONVEX_SITE_URL?.trim()

  if (!convexSiteUrl || typeof window === 'undefined') {
    return
  }

  const path = `${window.location.pathname}${window.location.search}${window.location.hash}`
  const referer = document.referrer || undefined

  try {
    await fetch(`${trimTrailingSlash(convexSiteUrl)}/track-visit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path, referer }),
      keepalive: true,
    })
  } catch (error) {
    console.error('Visit tracking failed:', error)
  }
}
