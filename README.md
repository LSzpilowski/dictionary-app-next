
# Wordly - Dictionary & Word Lookup App

> Modern English dictionary web application with word definitions, phonetics, examples, and related images.

[![Next.js](https://img.shields.io/badge/Next.js-16.1.4-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

## Quick Start

```bash
# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Add your Pexels API key to .env.local

# Run development server
pnpm dev

# Build for production
pnpm build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Prerequisites

- Node.js 18.x or higher
- pnpm 8.x or higher (recommended) or npm
- Pexels API key (free at [pexels.com/api](https://www.pexels.com/api/))

## Tech Stack

- **Framework:** Next.js 16.1.4 (App Router, Turbopack)
- **Language:** TypeScript 5.9.3 (strict mode)
- **UI Library:** React 19.2.3
- **Styling:** Tailwind CSS 3.4.19
- **State Management:** React Hooks + Custom Cache
- **APIs:**
  - [Dictionary API](https://dictionaryapi.dev/) - Free, no auth required
  - [Pexels API](https://www.pexels.com/api/) - 200 requests/hour, 20k/month
- **UI Components:**
  - Radix UI (primitives)
  - Lucide React (icons)
  - Sonner (toast notifications)
  - Embla Carousel (image gallery)

## Project Structure

```
dictionary-app-next/
├── public/                      # Static assets
│   ├── favicon.ico
│   ├── icon.svg
│   ├── apple-touch-icon.png
│   ├── og-image.png
│   ├── android-chrome-*.png
│   └── site.webmanifest        # PWA manifest
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout with providers
│   │   ├── page.tsx            # Home page
│   │   ├── error.tsx           # Error boundary
│   │   ├── global-error.tsx    # Layout-level error boundary
│   │   ├── theme-provider.tsx  # Theme context
│   │   └── components/
│   │       ├── Dictionary.tsx          # Main search component
│   │       ├── Footer.tsx              # App footer
│   │       └── Dictionary/
│   │           ├── results.tsx         # Word definition display
│   │           ├── meanings.tsx        # Meanings & definitions
│   │           ├── phonetics.tsx       # Pronunciation
│   │           ├── photos.tsx          # Image gallery
│   │           └── exampleResults.tsx  # Example sentences
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── carousel.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── SkeletonLoader.tsx
│   │   └── CopyButton.tsx
│   ├── hooks/
│   │   └── useDebounceAndCache.ts  # Custom caching hook
│   ├── lib/
│   │   ├── fonts.ts            # Google Fonts config
│   │   └── utils.ts            # Utility functions (cn)
│   ├── styles/
│   │   └── globals.css         # Global styles & Tailwind
│   └── types/
│       └── index.ts            # TypeScript interfaces
├── .env.local                  # Environment variables (not in repo)
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Configuration

### Environment Variables

Create `.env.local` in the project root:

```env
# Required for image search
NEXT_PUBLIC_PEXELS_API_KEY=your_pexels_api_key_here
```

**Note:** The app will work without the Pexels key, but image fetching will be disabled.

### API Rate Limits

- **Dictionary API:** No authentication, unlimited requests
- **Pexels API:** 200 requests/hour, 20,000 requests/month (free tier)

## Features

### Core Functionality
- Word search with definitions, phonetics, and examples
- Related image gallery (Pexels integration)
- Recent search history (localStorage, max 5 items)
- Dark/light theme toggle with system preference
- Copy-to-clipboard for phonetics and definitions
- Responsive design (mobile-first)

### Performance Optimizations
- In-memory cache (5-minute TTL)
- Request debouncing (500ms)
- Image lazy loading
- Skeleton loaders
- Turbopack for faster builds

### Accessibility
- ARIA attributes (role, aria-label, aria-selected)
- Semantic HTML (header, footer, main)
- Keyboard navigation
- Focus indicators

### PWA Features
- Web app manifest (installable on mobile)
- Multiple icon sizes (favicon, apple-touch, android-chrome)
- Theme color configuration

## Available Scripts

```bash
# Development
pnpm dev          # Start dev server with Turbopack

# Production
pnpm build        # Build optimized production bundle
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run ESLint (Next.js config)
```

## Architecture & Design Decisions

### State Management
- **Local State:** React useState/useEffect for component state
- **Caching:** Custom `useCache` hook with Map-based in-memory storage
- **Persistence:** localStorage for recent searches

### API Strategy
- **Native Fetch:** Replaced axios with native fetch for consistency
- **Parallel Requests:** Dictionary + Photos fetched simultaneously
- **Error Handling:** Toast notifications for user-friendly errors

### Performance
- **Debouncing:** 500ms delay prevents excessive API calls
- **Caching:** 5-minute TTL reduces redundant requests
- **Constants:** Extracted magic numbers (CACHE_TTL_MS, PEXELS_PHOTOS_PER_PAGE)

### Code Quality
- **TypeScript:** Strict mode enabled, no implicit any
- **Removed:** Unused dependencies (axios, zod, react-hook-form, react-icons)
- **Error Boundaries:** Both route-level and layout-level handlers

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project to Vercel
3. Add environment variable: `NEXT_PUBLIC_PEXELS_API_KEY`
4. Deploy

### Other Platforms

Compatible with any Node.js hosting:
- Netlify
- Railway
- Render
- AWS Amplify

Ensure environment variables are configured in your platform's settings.

## Testing

**Status:** No automated tests currently implemented.

**Recommended additions:**
- Unit tests for `useDebounceAndCache` hook
- Integration tests for `Dictionary` component (mock APIs)
- E2E tests with Playwright/Cypress

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

**Before submitting:**
- Run `pnpm build` to ensure no errors
- Check TypeScript types are correct
- Test responsive design on mobile

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Dictionary API](https://dictionaryapi.dev/) - Free dictionary API
- [Pexels](https://www.pexels.com/) - Free stock photos
- [shadcn/ui](https://ui.shadcn.com/) - UI component inspiration
- [Lucide](https://lucide.dev/) - Icon library

## Support

For issues or questions:
- Open an issue on GitHub
- Contact: [lszpilowski.com](https://www.lszpilowski.com)

---

**Built with Next.js and TypeScript**
