/**
 * Semantic Tailwind class recipes for the Boring Media Co. website.
 * These are reusable class strings, not components.
 */

import { theme } from './theme';

export const styles = {
  // ─────────────────────────────────────────────
  // Section Layout
  // ─────────────────────────────────────────────
  section: theme.spacing.sectionY,
  sectionWide: theme.spacing.sectionYLarge,
  sectionContainer: `max-w-7xl mx-auto ${theme.spacing.containerX}`,
  sectionContainerNarrow: `max-w-6xl mx-auto ${theme.spacing.containerXLarge}`,
  sectionHeader: 'text-center mb-12 sm:mb-16',

  // ─────────────────────────────────────────────
  // Typography (disciplined scale)
  // ─────────────────────────────────────────────
  sectionTitle: theme.typography.h2,
  sectionTitleDark: `${theme.typography.h2} ${theme.colors.text.primary}`,
  sectionSubtitle: `${theme.typography.body} ${theme.colors.text.secondary}`,

  heroTitle: theme.typography.h1,
  heroSubtitle: `${theme.typography.bodyLg} ${theme.colors.text.muted}`,

  cardTitle: theme.typography.h4,
  cardDescription: `${theme.typography.body} ${theme.colors.text.secondary}`,

  bodyLg: theme.typography.bodyLg,
  body: theme.typography.body,
  small: theme.typography.small,
  prose: theme.typography.prose,

  // Consistent grays for light/dark contexts
  textPrimary: theme.colors.text.primary,
  textSecondary: theme.colors.text.secondary,
  textMuted: theme.colors.text.muted,
  textLight: 'text-gray-300', // for dark backgrounds

  // ─────────────────────────────────────────────
  // Buttons
  // ─────────────────────────────────────────────
  primaryButton: `px-8 py-4 bg-boring-blue text-white ${theme.radius.button} font-semibold hover:scale-105 transition-transform duration-300`,
  primaryButtonInline: `inline-flex items-center gap-2 px-8 py-4 bg-boring-blue text-white ${theme.radius.button} font-semibold hover:scale-105 transition-transform duration-300`,
  secondaryButton: `px-8 py-4 bg-white text-black ${theme.radius.button} font-semibold hover:scale-105 transition-transform duration-300`,

  // ─────────────────────────────────────────────
  // Cards
  // ─────────────────────────────────────────────
  card: `bg-white ${theme.radius.card} p-6 sm:p-8`,
  cardHover: 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300',
  cardHoverSoft: 'shadow-sm hover:shadow-md transition-shadow duration-300',

  // ─────────────────────────────────────────────
  // Icons
  // ─────────────────────────────────────────────
  iconBadge: `w-14 h-14 ${theme.radius.icon} bg-boring-gray flex items-center justify-center group-hover:bg-boring-blue/10 transition-colors duration-300`,
  iconImage: 'opacity-70 group-hover:opacity-100 transition-opacity duration-300',

  // ─────────────────────────────────────────────
  // Gallery / Work
  // ─────────────────────────────────────────────
  galleryArrow: `w-12 h-12 ${theme.radius.full} bg-white/90 hover:bg-white ${theme.shadow.lg} flex items-center justify-center transition-all duration-300`,
  paginationDot: `w-2.5 h-2.5 ${theme.radius.full} transition-all duration-300`,
  paginationDotInactive: 'bg-gray-300 hover:bg-gray-400',
  paginationDotActive: 'bg-boring-blue w-8',

  // ─────────────────────────────────────────────
  // Accent Elements
  // ─────────────────────────────────────────────
  accentDivider: 'h-px bg-gradient-to-r from-transparent via-boring-blue to-transparent max-w-4xl mx-auto',
  accentLine: 'h-px w-48 bg-gradient-to-r from-transparent via-boring-blue to-transparent',

  // ─────────────────────────────────────────────
  // Footer
  // ─────────────────────────────────────────────
  footerTitle: theme.typography.h4,
  footerLink: 'text-gray-400 hover:text-white transition-colors',

  // ─────────────────────────────────────────────
  // Transitions (utility fragments)
  // ─────────────────────────────────────────────
  transitionAll: 'transition-all duration-300',
  transitionTransform: 'transition-transform duration-300',
  transitionColors: 'transition-colors duration-300',
  transitionOpacity: 'transition-opacity duration-300',
  transitionShadow: 'transition-shadow duration-300',
} as const;

export type Styles = typeof styles;
