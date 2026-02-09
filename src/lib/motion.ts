/**
 * Framer Motion presets for the Boring Media Co. website.
 * Centralized animation configs for consistent motion behavior.
 */

import { theme } from './theme';

// ─────────────────────────────────────────────
// Viewport Settings
// ─────────────────────────────────────────────
export const viewport = {
  default: { once: true, margin: '-80px' },
  tight: { once: true, margin: '-50px' },
  loose: { once: true, margin: '-60px' },
  gallery: { once: true, margin: '-10%' },
  none: { once: true },
} as const;

// ─────────────────────────────────────────────
// Animation Variants
// ─────────────────────────────────────────────

/** Fade up from below (most common) */
export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: theme.motion.duration.normal, ease: theme.motion.ease },
};

/** Simple fade in */
export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: theme.motion.duration.normal, ease: theme.motion.ease },
};

/** Fade in with slight scale */
export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: theme.motion.duration.fast, ease: theme.motion.ease },
};

/** Fade in from left */
export const fadeLeft = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: theme.motion.duration.normal, ease: theme.motion.ease },
};

/** Fade in from right */
export const fadeRight = {
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: theme.motion.duration.fast, ease: theme.motion.ease },
};

/** Scale line (e.g., accent dividers) */
export const scaleLine = {
  initial: { scaleX: 0 },
  animate: { scaleX: 1 },
  transition: { duration: theme.motion.duration.slower, delay: 0.5 },
};

/** Hero logo entrance */
export const heroLogo = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: theme.motion.duration.slowest, ease: theme.motion.ease },
};

/** Hero glow fade in */
export const heroGlow = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.5, delay: 0.3 },
};

// ─────────────────────────────────────────────
// Staggered Animation Helpers
// ─────────────────────────────────────────────

/** Create a delayed fadeUp for staggered items */
export const fadeUpStagger = (index: number, stagger = theme.motion.stagger.normal) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: theme.motion.duration.fast,
    delay: index * stagger,
    ease: theme.motion.ease,
  },
});

/** Create a delayed fadeRight for staggered items */
export const fadeRightStagger = (index: number, stagger = theme.motion.stagger.slow) => ({
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  transition: {
    duration: theme.motion.duration.fast,
    delay: index * stagger,
    ease: theme.motion.ease,
  },
});

/** Create a delayed scaleIn for gallery items */
export const scaleInStagger = (index: number, stagger = theme.motion.stagger.fast) => ({
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  transition: {
    duration: theme.motion.duration.fast,
    delay: index * stagger,
    ease: theme.motion.ease,
  },
});

// ─────────────────────────────────────────────
// Hero-specific animations (with fixed delays)
// ─────────────────────────────────────────────

export const heroAnimations = {
  headline: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: theme.motion.duration.slow, delay: 0.4, ease: theme.motion.ease },
  },
  subheadline: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: theme.motion.duration.slow, delay: 0.6, ease: theme.motion.ease },
  },
  cta: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: theme.motion.duration.slow, delay: 0.8, ease: theme.motion.ease },
  },
};

// ─────────────────────────────────────────────
// CTA-specific animations (with staggered delays)
// ─────────────────────────────────────────────

export const ctaAnimations = {
  headline: {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: theme.motion.duration.normal, ease: theme.motion.ease },
  },
  subheadline: {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: theme.motion.duration.normal, delay: 0.12, ease: theme.motion.ease },
  },
  button: {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: theme.motion.duration.normal, delay: 0.24, ease: theme.motion.ease },
  },
};
