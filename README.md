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

## Notes

- Original source images are read from the parent directory and converted into `public/images`.
- The app keeps the original page structure/content from Home, About Me, Projects, and Contact while modernizing layout and performance.
