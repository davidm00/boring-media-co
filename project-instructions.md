Here's your Next.js prompt:

---

**Project: Boring Media Co. Website - Next.js Implementation**

Initialize a Next.js 14+ project with TypeScript for the Boring Media Co. marketing website.

**Setup:**
```bash
npx create-next-app@latest boring-media-co
```

**During setup, choose:**
- TypeScript: Yes
- ESLint: Yes
- Tailwind CSS: Yes
- `src/` directory: Yes
- App Router: Yes
- Import alias (@/*): Yes

```bash
cd boring-media-co
npm install framer-motion
```

**Project Structure:**
```
/src
  /app
    layout.tsx          ← Root layout (replaces App.tsx)
    page.tsx            ← Homepage
    globals.css         ← Global styles
  /components
    /sections
      Hero.tsx
      Services.tsx
      ValueProp.tsx
      Work.tsx
      CTA.tsx
      Footer.tsx
    /ui
      Button.tsx
      Card.tsx
      Logo.tsx
  /public
    /logos
      (place all provided SVGs and PNGs here)
```

**Tailwind Config (`tailwind.config.ts`):**
```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'boring-blue': '#345bd1',
        'boring-gray': '#d7d8db',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
```

**Root Layout (`/src/app/layout.tsx`):**
```tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Boring Media Co. | Marketing Without Surprises',
  description: 'Social media, photo & video, paid advertising, and web built for consistent growth.',
  keywords: ['marketing agency', 'social media', 'paid advertising', 'web development'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
```

**Homepage (`/src/app/page.tsx`):**
```tsx
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import ValueProp from '@/components/sections/ValueProp'
import Work from '@/components/sections/Work'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <ValueProp />
      <Work />
      <CTA />
      <Footer />
    </main>
  )
}
```

**Global Styles (`/src/app/globals.css`):**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply bg-white text-gray-900;
  }
}
```

---

## Component Implementation Guidelines

**All Interactive Components Need `'use client'`:**

When your component uses:
- `useState`, `useEffect`, or any hooks
- Event handlers (`onClick`, `onHover`, etc.)
- Framer Motion animations
- Browser APIs

Add this at the **top** of the file:
```tsx
'use client'
```

**Example - Button Component (`/src/components/ui/Button.tsx`):**
```tsx
'use client'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  className?: string
}

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick,
  className = ''
}: ButtonProps) {
  const baseStyles = "px-8 py-3 rounded-lg font-semibold transition-all duration-300"
  const variants = {
    primary: "bg-boring-blue text-white hover:bg-blue-600 hover:scale-105",
    secondary: "border-2 border-boring-blue text-boring-blue hover:bg-boring-blue hover:text-white"
  }
  
  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
```

**Example - Logo Component (`/src/components/ui/Logo.tsx`):**
```tsx
import Image from 'next/image'

interface LogoProps {
  variant: 'black' | 'white'
  width?: number
  height?: number
}

export default function Logo({ variant, width = 150, height = 50 }: LogoProps) {
  const src = variant === 'black' 
    ? '/logos/BMC_Blk_Logo.svg' 
    : '/logos/BMC_Wht_Logo.svg'
  
  return (
    <Image
      src={src}
      alt="Boring Media Co."
      width={width}
      height={height}
      priority
    />
  )
}
```

**Example - Animated Section (`/src/components/sections/Services.tsx`):**
```tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    icon: '/logos/1.svg',
    title: 'Social Media',
    description: 'Consistent content that builds your brand and drives engagement.'
  },
  {
    icon: '/logos/2.svg',
    title: 'Photo & Video',
    description: 'Professional visuals that capture attention and tell your story.'
  },
  {
    icon: '/logos/3.svg',
    title: 'Paid Advertising',
    description: 'Strategic campaigns that maximize ROI and minimize waste.'
  },
  {
    icon: '/logos/6.svg',
    title: 'Web Development',
    description: 'Fast, beautiful websites built to convert visitors into customers.'
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          What We Do
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                <Image 
                  src={service.icon} 
                  alt={service.title}
                  width={60}
                  height={60}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Example - Hero Section (`/src/components/sections/Hero.tsx`):**
```tsx
'use client'

import { motion } from 'framer-motion'
import Logo from '@/components/ui/Logo'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Logo variant="white" width={200} height={80} />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Marketing Without Surprises
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-12"
        >
          Predictable results. Consistent growth. Refreshingly boring.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button variant="primary">Let's Talk</Button>
        </motion.div>
      </div>
    </section>
  )
}
```

---

## Key Next.js Specifics:

**1. Image Optimization:**
- Always use `next/image` instead of `<img>`
- Put images in `/public` folder
- Reference as `/logos/file.svg` (not `/public/logos/file.svg`)
- Add `priority` prop to hero images
- Specify width/height or use `fill` with parent container

**2. Client vs Server Components:**
- **Server components (default)**: No `'use client'` needed, can't use hooks/events
- **Client components**: Add `'use client'` at top, can use hooks/events/animations
- Rule of thumb: Only make components client when they need interactivity

**3. Metadata & SEO:**
Already set in `layout.tsx`, but you can add per-page:
```tsx
export const metadata = {
  title: 'About | Boring Media Co.',
  description: 'Learn about our approach...'
}
```

**4. Routing:**
- No need for `<Link>` in this single-page site
- For smooth scroll to sections: use regular `<a href="#services">`
- If you add pages later: import `Link` from `next/link`

---

## Animation Guidelines:

**Scroll Reveals:**
```tsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
viewport={{ once: true, margin: "-100px" }}
```

**Hover Effects:**
```tsx
whileHover={{ scale: 1.02 }}
transition={{ duration: 0.3 }}
```

**Stagger Children:**
```tsx
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
))}
```

---

## Sections to Build:

1. **Hero** (`'use client'` - has animations)
   - Full viewport, black background
   - White logo, large headline
   - "Let's Talk" CTA button

2. **Services** (`'use client'` - has animations + hover)
   - Grid: 1 col mobile → 4 col desktop
   - Service cards with icons from 1.svg, 2.svg, 3.svg, 6.svg
   - Hover effects

3. **ValueProp** (`'use client'` - has animations)
   - Split layout or centered
   - Explain "Marketing Without Surprises"
   - Emphasis on consistency, transparency, results

4. **Work** (`'use client'` - has animations)
   - Placeholder project grid
   - Can be simple "Coming Soon" cards for now

5. **CTA** (`'use client'` - has button)
   - Bold headline
   - "Ready for marketing without surprises?"
   - Contact button

6. **Footer** (can be server component)
   - Logo, services nav, contact info
   - Copyright, social links
   - Clean, minimal

---

## Color Strategy:

- **Black/White**: Primary colors (80% of site)
- **#345bd1 (boring-blue)**: CTAs, accents, hover states
- **#d7d8db (boring-gray)**: Subtle backgrounds, borders
- **High contrast**: Ensure text readability

---

## Development Commands:

```bash
npm run dev          # Start dev server (localhost:3000)
npm run build        # Build for production
npm run start        # Run production build locally
```

---

## Deployment to Vercel:

1. Push code to GitHub
2. Import repo in Vercel
3. Auto-detects Next.js, deploys
4. Add your Porkbun domain in Vercel settings
5. Update DNS records in Porkbun

---

## Assets to Place in `/public/logos/`:
- Boring_Media_Co__blk_letters.png
- BMC_Blk_Logo.svg
- BMC_Wht_Logo.svg
- 1.svg (Social Media icon)
- 2.svg (Photo & Video icon)
- 3.svg (Paid Advertising icon)
- 6.svg (Web Development icon)

---

**Design Philosophy:**
Clean, confident, modern. Let whitespace breathe. Bold typography. Subtle animations that enhance, not distract. The site should feel premium and different - not another generic agency template.

**Final Goal:**
A single-page marketing site that makes visitors think "these people actually get it" and compels them to reach out. Fast, beautiful, and built to convert.

---

That's your complete Next.js implementation guide. The code will feel 95% like React, just with better file organization and automatic optimizations.

---

## Centralized Strings (Localization-Ready)

All UI text is stored in `/src/lib/strings.ts` for easy maintenance and future localization.

**Structure:**
```ts
// /src/lib/strings.ts
export const Strings = {
  Meta: {
    title: 'Boring Media Co. | Marketing Without Surprises',
    description: 'Social media, photo & video, paid advertising, and web built for consistent growth.',
  },
  Hero: {
    headline: 'Marketing Without Surprises',
    subheadline: 'Predictable results. Consistent growth. Refreshingly boring.',
    ctaButton: "Let's Talk",
  },
  Services: {
    title: 'What We Do',
    items: {
      socialMedia: {
        title: 'Social Media',
        description: 'Consistent content that builds your brand and drives engagement.',
      },
      // ... other services
    },
  },
  // ... other sections
}
```

**Usage in components:**
```tsx
import { Strings } from '@/lib/strings'

<h1>{Strings.Hero.headline}</h1>
```

---

## Development Phases & Testing

Development follows a phased approach with **mandatory testing** after each phase. See `PHASES.md` for full details.

### Phase Overview
1. **Phase 1: Project Setup** - Initialize project, configure Tailwind, copy assets
2. **Phase 2: Core UI Components** - Button, Logo, Card with unit tests
3. **Phase 3: Section Components** - Hero, Services, ValueProp, Work, CTA, Footer
4. **Phase 4: Page Integration** - Wire sections, responsive testing
5. **Phase 5: Polish & Optimization** - Accessibility, performance, SEO

### Testing Requirements
- **Unit Tests**: All UI components must have unit tests
- **Integration Tests**: Page-level rendering tests
- **Build Verification**: `npm run build` must pass before each phase completion
- **Lighthouse Audit**: Performance, accessibility, SEO scores > 90 for production

### Test Stack
- **Jest** + **React Testing Library** for component tests
- **Lighthouse** for performance audits

---

## Asset Naming Convention

All assets use **kebab-case** (lowercase with dashes):
- `bmc-blk-logo.svg`
- `bmc-wht-logo.svg`
- `boring-media-co-blk-letters.png`
- `1.svg`, `2.svg`, `3.svg`, `6.svg` (service icons)