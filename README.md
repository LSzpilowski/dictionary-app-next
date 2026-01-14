
Concise technical README for developers working on `dictionary-app-next`.

---

## Project Summary

Small dictionary web app built with Next.js (App Router). It looks up English words using the free Dictionary API and fetches related images from Pexels. The codebase is TypeScript-first and uses Tailwind CSS for styling.

Key features:
- Word lookup (`dictionaryapi.dev`)
- Image gallery (Pexels)
- Recent search history (localStorage)
- Dark / light theme toggle
- Skeleton loading, toasts, copy-to-clipboard
- Mobile-first responsive UI

---

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript (strict mode)
- Tailwind CSS
- Axios (dictionary API) + native fetch (Pexels)
- Sonner (toasts)
- Embla Carousel (images)
- Lucide React (icons)

---

## Notable implemented improvements

This branch contains multiple modernizations and UX improvements, including:
- Security: moved API keys to `.env.local` and dependency updates
- TypeScript: `strict` enabled and target ES2020
- Performance: debounced search (500ms) and in-memory cache (5 minutes)
- UX: skeleton loaders, recent searches, copy buttons, image counter, theme toggle
- Accessibility: ARIA attributes and focus-ring utilities
- PWA/manifest updates and SEO optimizations

If you want a detailed changelog, see `CHANGELOG.md`.

---

## Environment variables

Create a `.env.local` at project root with the following value:

```env
NEXT_PUBLIC_PEXELS_API_KEY=your_pexels_api_key_here
```

The app will run without a Pexels key but image fetching will be disabled and an error toast will appear.

---

## Local development

Install dependencies and run dev server (use npm; repo originally used pnpm but npm is supported):

```bash
npm install
npm run dev
# Open http://localhost:3000
```

Useful scripts (in `package.json`):
- `dev` — development server (`next dev`)
- `build` — production build (`next build`)
- `start` — start production server (`next start`)
- `lint` — run Next.js ESLint integration (`next lint`)

Notes:
- ESLint: the project uses `eslint-config-next`. If you see an ESLint warning about unknown options (`useEslintrc`, `extensions`) this originates from internal Next.js options and does not block the build. We updated `eslint` to v9 and installed `eslint-plugin-import` to satisfy peer deps.

---

## Architecture & important files

- `src/app/` — Next.js App Router pages and layout
  - `page.tsx` — main entry (renders `Dictionary` component)
  - `layout.tsx` — application layout and providers
- `src/app/components/Dictionary.tsx` — main search component, handles state, caching and API requests
- `src/app/components/Dictionary/*` — subcomponents: `results.tsx`, `meanings.tsx`, `phonetics.tsx`, `photos.tsx`, `exampleResults.tsx`
- `src/components/` — shared UI pieces (buttons, cards, inputs, skeleton loader, theme toggle, copy button)
- `src/hooks/useDebounceAndCache.ts` — debounce + in-memory cache hook
- `src/styles/globals.css` — Tailwind directives and custom utility classes
- `src/types/index.ts` — shared TypeScript interfaces

---

## Runtime behavior & dev tips

- Search requests are debounced and cached. Cache TTL is 5 minutes.
- Recent searches are stored in `localStorage` (max 5 items). Use the clear button in the UI to reset.
- Suggested words in the empty state are randomly selected client-side (to avoid SSR hydration errors). The UI displays exactly 4 suggestions.

---

## Building & CI

Build locally:

```bash
npm run build
```

The build runs type checking and ESLint via Next.js. If CI enforces stricter ESLint rules, ensure `eslint` and plugins are in sync with the versions in `devDependencies`.

---

## Tests

There are currently no automated tests included. Recommended next steps:
- Add unit tests for `useDebounceAndCache` and `Dictionary` behaviour (mock APIs)
- Add a small e2e test for search flow (Cypress / Playwright)

---

## Deployment

Deploy on Vercel or any Node-capable host. Ensure the `NEXT_PUBLIC_PEXELS_API_KEY` environment variable is configured in your deployment settings.

---

## Contributing

- Use the `LS-1` branch for ongoing work in this session. Create feature branches off `main` for new changes.
- Run `npm run lint` and `npm run build` before opening a PR.

---

If you want, I can also:
- Add unit tests and basic CI config
- Add a short CONTRIBUTING.md with pre-commit hooks and lint rules
