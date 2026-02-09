/**
 * Design tokens for the Boring Media Co. website.
 * Centralized values for colors, spacing, typography, radius, shadows, and motion.
 */

export const theme = {
  // ─────────────────────────────────────────────
  // Colors
  // ─────────────────────────────────────────────
  colors: {
    brand: {
      blue: '#345bd1',
      gray: '#d7d8db',
    },
    text: {
      primary: '#171717',
      muted: '#6b7280',    // gray-500
      light: '#9ca3af',    // gray-400
      dark: '#111827',     // gray-900
    },
    bg: {
      white: '#ffffff',
      black: '#000000',
      gray: '#d7d8db',
      darkGray: '#111827', // gray-900
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
  // Typography (Tailwind class fragments)
  // ─────────────────────────────────────────────
  typography: {
    // Headings
    h1: 'text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight',
    h2: 'text-3xl sm:text-4xl md:text-5xl font-bold',
    h3: 'text-xl sm:text-2xl font-bold',
    h4: 'font-bold text-lg',

    // Body
    bodyXl: 'text-lg sm:text-xl md:text-2xl',
    bodyLg: 'text-lg sm:text-xl',
    body: 'text-lg',
    bodySm: 'text-base sm:text-lg',
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
