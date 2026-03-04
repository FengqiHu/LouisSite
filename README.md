# Louis Portfolio Rebuild

A fast React + Vite rebuild of `louishu.com` with refreshed visuals, route-based code splitting, optimized image assets, and a Convex-ready contact backend.

## Tech

- React 19 + TypeScript
- Vite 7
- React Router
- Convex backend endpoints (optional runtime integration)

## Local Run

1. Use Node 20 (project includes `.nvmrc`).
2. Install dependencies.
3. Generate optimized images from the parent folder assets.
4. Start development server.

```bash
nvm use
npm install
npm run optimize:images
npm run dev
```

If `nvm` is not installed, run commands through Node 20 directly:

```bash
npx --yes -p node@20 -p npm@10 npm install
npx --yes node@20 scripts/optimize-images.mjs
npx --yes -p node@20 -p npm@10 npm run dev
```

## Build

```bash
npm run lint
npm run build
npm run preview
```

## Convex Contact Backend

The contact form works in two modes:

- With `VITE_CONVEX_SITE_URL` configured, messages are posted to Convex route `POST /contact`.
- Without it, the form falls back to opening a `mailto:` draft.

Visitor tracking uses the same `VITE_CONVEX_SITE_URL` and sends a fire-and-forget request to
`POST /track-visit` on app load.

### Setup

1. Deploy or run Convex for this project.
2. Ensure `convex/` functions are loaded.
3. Add `.env.local`:

```bash
VITE_CONVEX_SITE_URL=https://<your-deployment>.convex.site
```

Relevant backend files:

- `convex/schema.ts`
- `convex/contact.ts`
- `convex/http.ts`
- `convex/visits.ts`

### Visitor Logs

Each visit creates one record in the `visitorLogs` table with:

- IP (raw + masked)
- path
- user agent
- referer
- location fields (`country`, `region`, `city`, `latitude`, `longitude`) when IP geolocation succeeds

To inspect recent logs:

```bash
npx convex run visits:latestVisitorLogs '{"limit":20}'
```

Privacy note: if you keep collecting IP/location data, make sure your site privacy policy discloses
this behavior and applicable retention period.

### Email Notification Setup (Resend)

Contact submissions are saved to Convex and can also trigger an email notification.

1. Create a [Resend](https://resend.com/) API key.
2. Set Convex environment variables:

```bash
npx convex env set RESEND_API_KEY re_xxxxxxxxx
npx convex env set CONTACT_TO_EMAIL hufq0611@outlook.com
npx convex env set CONTACT_FROM_EMAIL "Portfolio Contact <onboarding@resend.dev>"
```

3. Deploy Convex functions:

```bash
npx convex deploy
```

Notes:
- `CONTACT_FROM_EMAIL` must be a sender Resend accepts. In test mode, use `onboarding@resend.dev`.
- For production delivery, verify your own domain/sender in Resend.
- If env vars are missing, the message is still stored in Convex but notification email is skipped.

## Notes

- Original source images are read from the parent directory and converted into `public/images`.
- The app keeps the original page structure/content from Home, About Me, Projects, and Contact while modernizing layout and performance.
