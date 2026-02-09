/**
 * Design tokens for the Boring Media Co. website.
 * Centralized values for colors, spacing, typography, radius, shadows, and motion.
 */

export const theme = {
  // ─────────────────────────────────────────────
  // Colors (use CSS variables for consistency)
  // ─────────────────────────────────────────────
  colors: {
    brand: {
      blue: '#345bd1',
      gray: '#d7d8db',
    },
    text: {
      primary: '#171717',      // --color-text-primary
      secondary: '#525252',    // --color-text-secondary (gray-600)
      muted: '#737373',        // --color-text-muted (gray-500)
    },
    bg: {
      white: '#ffffff',
      black: '#000000',
      gray: '#d7d8db',
      darkGray: '#111827',     // gray-900
    },
  },

  // ─────────────────────────────────────────────
  // Spacing (Tailwind class fragments)
  // ─────────────────────────────────────────────
  spacing: {
    sectionY: 'py-16 sm:py-24',
    sectionYLarge: 'py-20 sm:py-32',
    containerX: 'px-4 sm:px-6',
    containerXLarge: 'px-6 sm:px-8',
  },

  // ─────────────────────────────────────────────
  // Border Radius
  // ─────────────────────────────────────────────
  radius: {
    card: 'rounded-2xl',
    button: 'rounded-lg',
    icon: 'rounded-xl',
    full: 'rounded-full',
  },

  // ─────────────────────────────────────────────
  // Shadows
  // ─────────────────────────────────────────────
  shadow: {
    none: '',
    sm: 'shadow-sm',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    cardHover: 'hover:shadow-xl',
    cardHoverSoft: 'hover:shadow-md',
  },

  // ─────────────────────────────────────────────
  // Typography Scale (disciplined, consistent)
  // Use these exact classes for hierarchy
  // ─────────────────────────────────────────────
  typography: {
    // Headings - tight tracking, consistent line-height
    h1: 'text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]',
    h2: 'text-3xl md:text-4xl font-bold tracking-tight leading-[1.15]',
    h3: 'text-xl md:text-2xl font-semibold leading-[1.2]',
    h4: 'text-lg font-bold leading-[1.3]',

    // Body - comfortable reading
    body: 'text-base md:text-lg leading-[1.6]',
    bodyLg: 'text-lg md:text-xl leading-[1.6]',
    small: 'text-sm leading-[1.5]',

    // Prose width for long-form content
    prose: 'max-w-[65ch]',
  },

  // ─────────────────────────────────────────────
  // Motion (Framer Motion values)
  // ─────────────────────────────────────────────
  motion: {
    ease: 'easeOut' as const,
    duration: {
      fast: 0.5,
      normal: 0.6,
      slow: 0.7,
      slower: 0.8,
      slowest: 1.0,
    },
    stagger: {
      fast: 0.05,
      normal: 0.1,
      slow: 0.15,
    },
  },
} as const;

export type Theme = typeof theme;
