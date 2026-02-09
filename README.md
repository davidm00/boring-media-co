# Boring Media Co.

Marketing website for Boring Media Co. Built with Next.js App Router, Tailwind CSS v4, and Framer Motion.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Commands

```bash
npm run dev           # Local dev server
npm run build         # Production build
npm run start         # Run production server locally
npm run lint          # ESLint
npm run test          # Jest (single run)
npm run test:watch    # Jest watch mode
npm run test:coverage # Coverage
```

## Tech Stack

- Next.js (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion
- Jest + Testing Library

## Project Structure

- `src/app/`
	- `layout.tsx` — global layout + metadata
	- `page.tsx` — homepage composition
	- `globals.css` — Tailwind import, font faces, CSS variables, global utilities
- `src/components/sections/` — homepage sections (Hero, Services, Work, ValueProp, CTA, Footer, etc.)
- `src/components/ui/` — reusable UI primitives (Button, Card, Logo)
- `src/lib/`
	- `strings.ts` — all UI copy, links, asset paths (source of truth)
	- `theme.ts` — design tokens (colors, spacing, typography, motion constants)
	- `styles.ts` — semantic Tailwind class “recipes” used by components
	- `motion.ts` — Framer Motion presets (variants + viewport configs)
- `public/` — static assets (logos, icons, fonts, work images)
- `src/__tests__/` — unit tests

## Development Conventions

### 1) Strings: no hardcoded copy

All user-facing strings live in `src/lib/strings.ts`:

- UI copy
- URLs + external IDs (ex: Tally form ID)
- Asset paths (logos/icons/work images)
- Accessibility labels

Components should render from `Strings.*` instead of hardcoding text.

### 2) Styling architecture

This repo uses a small “design system” layer on top of Tailwind:

- `src/lib/theme.ts` defines the design contract (brand colors, typography scale, spacing, motion constants).
- `src/lib/styles.ts` exposes semantic class strings (recipes) used across components.
- `src/lib/motion.ts` centralizes Framer Motion variants and viewport settings.

Rule of thumb:

- If a class pattern is repeated in multiple places, extract it into `styles.ts`.
- If it’s used once, keep it local to the component (avoid over-abstracting).

### 3) Typography discipline

Use the established scale from `theme.typography` via `styles.*`.
Avoid inventing new `text-*` sizes in components.

For long paragraphs, apply `styles.prose` (65ch max width) to improve readability.

### 4) Motion discipline

Prefer the presets in `src/lib/motion.ts` (`fadeUp`, `fadeUpStagger`, `viewport`, etc.).
Create new variants only when you’re introducing a new reusable motion pattern.

### 5) Client vs Server components

- Default to Server Components.
- Add `"use client"` only when needed (Framer Motion, state, effects, event handlers).

## Testing

- Jest config uses Next’s `next/jest`.
- Aliases: `@/` maps to `src/`.
- Preferred workflow for changes:
	1. `npm run lint`
	2. `npm run test`
	3. `npm run build`

## Notes

- The “Social Proof” section exists but may be intentionally disabled in `src/app/page.tsx` until production-ready.
