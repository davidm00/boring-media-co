# Boring Media Co. — Copilot Instructions (Agent Cheatsheet)

These instructions are optimized for an AI coding agent working in this repo.
The goal is to ship small, high-quality changes quickly while preserving the repo’s conventions.

## Quick Commands

```bash
npm run dev           # Local dev server (Next.js)
npm run build         # Production build
npm run start         # Run production server locally
npm run lint          # ESLint (Next.js config)
npm run test          # Jest (single run)
npm run test:watch    # Jest watch mode
npm run test:coverage # Coverage report
```

## Stack + Constraints

- Next.js App Router (Next 16.x), React 19, TypeScript
- Tailwind CSS v4 (`@import "tailwindcss";` + `@theme` tokens)
- Framer Motion (client components only)
- Jest + Testing Library for unit tests

## Repo Map (Where Things Live)

- `src/app/` — App Router entrypoints
  - `layout.tsx` — global layout + metadata
  - `page.tsx` — homepage composition
  - `globals.css` — Tailwind import, font faces, CSS variables, global utilities
- `src/components/sections/` — page sections (Hero, Services, Work, ValueProp, CTA, Footer, etc.)
- `src/components/ui/` — reusable UI primitives (Button, Card, Logo)
- `src/lib/`
  - `strings.ts` — all user-facing copy, links, asset paths
  - `theme.ts` — design tokens (typography scale, colors, spacing, motion constants)
  - `styles.ts` — semantic Tailwind “recipes” (class string constants)
  - `motion.ts` — Framer Motion presets + viewport configs
- `public/` — static assets (logos, icons, work images, fonts)
- `src/__tests__/` — Jest tests

## Golden Rules (Non-Negotiables)

1. **No hardcoded user-facing strings in components.**
   - Put all UI copy, URLs, IDs, aria-label text, and asset paths in `src/lib/strings.ts`.
   - Components import `Strings` and render from there.

2. **Use the typography system (don’t invent ad-hoc sizes).**
   - Prefer `theme.typography.*` via `styles.*`.
   - Keep hierarchy consistent: `h1/h2/h3/h4`, `body/bodyLg/small`, and `prose` width.
   - For long paragraphs, apply `styles.prose` (65ch max width).

3. **Use semantic styles recipes for repeated patterns.**
   - Shared layout/typography/button/card patterns belong in `src/lib/styles.ts`.
   - If a class pattern is used once, keep it local to avoid over-abstraction.

4. **Use motion presets for consistency.**
   - Import from `src/lib/motion.ts` (e.g., `fadeUp`, `fadeUpStagger`, `viewport`).
   - Don’t create new one-off animation configs unless there’s a clear new pattern.

5. **Prefer minimal diffs.**
   - Don’t reformat unrelated code.
   - Don’t rename files or APIs unless required.

## Styling & Typography (How To Do It Here)

### Design Tokens

- Global CSS variables and Tailwind tokens live in `src/app/globals.css` under `@theme inline`.
- `src/lib/theme.ts` is the source of truth for the “design contract” used by the app.
- Brand colors:
  - `boring-blue` `#345bd1`
  - `boring-gray` `#d7d8db`
- Text colors (disciplined):
  - Primary `#171717`
  - Secondary `#525252`
  - Muted `#737373`

### Typography Discipline

Use the established scale in `src/lib/theme.ts` (don’t drift):

- Headings: `h1`, `h2`, `h3`, `h4` (tight tracking + explicit line heights)
- Body: `body`, `bodyLg`, `small`
- Prose width: `prose` (`max-w-[65ch]`)

In components:

- Prefer `styles.sectionTitle`, `styles.heroTitle`, `styles.bodyLg`, `styles.body`, etc.
- Prefer `styles.textPrimary`, `styles.textSecondary`, `styles.textMuted` over raw `text-gray-*` for light backgrounds.
- On dark backgrounds, use `styles.textLight` where appropriate.

### Tailwind Usage

- Tailwind v4 is in use; keep utility usage straightforward.
- Don’t introduce inline styles.
- Avoid “class soup” in multiple components: extract stable patterns into `styles.ts`.

### Common Utilities

- `.hero-glow` is defined in `globals.css` for the hero background glow.
- `.prose-width` exists, but the preferred approach is `styles.prose` / `theme.typography.prose`.

## Components & Conventions

### Casing + Naming

- React components: `PascalCase` (files and component names).
- Helpers/constants: `camelCase`.
- Export `styles`, `theme`, `viewport`, and motion presets as named exports.

### Client vs Server Components

- Default to Server Components in App Router.
- Add `"use client"` only when needed (Framer Motion, state, effects, event handlers).

### Sections

- Sections in `src/components/sections/` should be mostly presentational.
- Layout composition happens in `src/app/page.tsx`.

### UI Primitives

- Reusable UI belongs in `src/components/ui/`.
- Prefer composition over prop explosions.

## Copy / Voice Guidelines

This brand voice is intentionally “boring” in the best way:

- Clear, specific, and grounded. Avoid vague agency-speak.
- Avoid unverifiable claims (no fake stats or guaranteed outcomes).
- Prefer short sentences and concrete deliverables.
- Consistency matters: “Clear scope. Clear timelines. …” style rhythm is encouraged.

If you change copy, update `src/lib/strings.ts` and ensure tone matches adjacent sections.

## External Integrations

### Tally

- The contact CTA uses Tally embed attributes like `data-tally-open`.
- The form ID is centralized at `Strings.Links.tallyFormId`.

## Assets

- Static assets live in `public/`.
- Reference assets via `Strings.Assets.*` or `Strings.*` paths, not hardcoded strings.
- Logos/icons live under `public/logos/`.

## Testing

- Jest + Testing Library.
- Tests live in `src/__tests__/`.
- Preferred workflow:
  1. Update code
  2. Run `npm run test`
  3. Run `npm run build` to catch TS/Next build issues

When adding features:

- Add/adjust tests for UI primitives and small pure helpers.
- Keep tests resilient to minor markup changes; prefer role/text queries.

## PR-Quality Checklist (Before You Stop)

- `npm run lint` clean (or explain any existing warnings)
- `npm run test` passes
- `npm run build` passes
- No new hardcoded strings (everything routed through `Strings`)
- Typography uses `theme/styles` tokens (no arbitrary `text-*` sizes)
- Motion uses `motion.ts` presets where possible
- Accessibility: sensible `aria-label`s, button labels, and image `alt`

## Agent Workflow (How To Work Efficiently)

1. Search for existing patterns before introducing new abstractions.
2. Prefer editing `strings.ts`, `styles.ts`, `theme.ts`, and `motion.ts` first, then refactoring components to consume them.
3. Keep changes scoped; do not “drive-by refactor” unrelated files.
4. Run tests and build before declaring the task done.
