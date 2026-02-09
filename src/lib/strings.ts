/**
 * Centralized strings for the Boring Media Co. website.
 * All UI text, links, and asset paths are stored here for easy
 * maintenance and future localization.
 */

export const Strings = {
  // ─────────────────────────────────────────────
  // Global / Brand
  // ─────────────────────────────────────────────
  Brand: {
    name: 'Boring Media Co.',
    tagline: 'Marketing Without Surprises',
    url: 'https://boringmedia.co',
    locale: 'en_US',
  },

  // ─────────────────────────────────────────────
  // SEO & Meta Tags (layout.tsx <head>)
  // ─────────────────────────────────────────────
  Meta: {
    title: 'Boring Media Co. | Marketing Without Surprises or Drama',
    description: 'A marketing agency delivering predictable results through social media, photo & video, paid advertising, and web development. Just consistent growth.',
    keywords: ['marketing agency', 'social media', 'paid advertising', 'web development'],
    ogImage: '/logos/boring-media-co-blk-letters.png',
  },

  // ─────────────────────────────────────────────
  // Accessibility
  // ─────────────────────────────────────────────
  Accessibility: {
    skipToContent: 'Skip to main content',
  },

  // ─────────────────────────────────────────────
  // Navigation (future nav bar)
  // ─────────────────────────────────────────────
  Nav: {
    services: 'Services',
    work: 'Work',
    about: 'About',
    contact: 'Contact',
  },

  // ─────────────────────────────────────────────
  // Asset Paths (logos, icons, favicons)
  // ─────────────────────────────────────────────
  Assets: {
    logos: {
      black: '/logos/bmc-blk-logo.svg',
      white: '/logos/boring-logo-white-subtitle.svg',
      icon: '/logos/boring-b-icon.svg',
    },
    favicons: {
      ico: '/favicon.ico',
      png16: '/favicon-16x16.png',
      png32: '/favicon-32x32.png',
      apple: '/apple-touch-icon.png',
    },
    icons: {
      photoVideo: '/logos/icon-photo-video.svg',
      webDev: '/logos/icon-web-dev.svg',
      socialMedia: '/logos/icon-social-media.svg',
      paidAds: '/logos/icon-paid-ads.svg',
    },
  },

  // ─────────────────────────────────────────────
  // External Links (social, forms)
  // ─────────────────────────────────────────────
  Links: {
    tallyFormId: 'jaQo1E',
    instagram: 'https://www.instagram.com/boringmediacompany?igsh=cXY0ZmoxN2l2d281&utm_source=qr',
    facebook: 'https://www.facebook.com/share/16kTxzNT6b/?mibextid=wwXIfr',
  },

  // ─────────────────────────────────────────────
  // Hero Section (full-screen intro)
  // ─────────────────────────────────────────────
  Hero: {
    headline: 'Marketing Without Surprises',
    subheadline: 'Predictable results. Consistent growth. Refreshingly boring.',
    ctaButton: "Let's Talk",
  },

  // ─────────────────────────────────────────────
  // Value Proposition Section (why choose us)
  // ─────────────────────────────────────────────
  ValueProp: {
    title: 'Why Boring?',
    subtitle: 'Because marketing shouldn\'t be a rollercoaster.',
    description: 'We believe in strategy over surprises. Our approach delivers consistent, measurable results without the drama. No vanity metrics. No flashy promises. Just steady growth that compounds over time.',
    transitionCta: 'See what that means in practice',
    points: [
      {
        title: 'Predictable',
        description: 'Clear timelines, transparent pricing, consistent delivery.',
      },
      {
        title: 'Reliable',
        description: 'We show up, we deliver, we repeat. Month after month.',
      },
      {
        title: 'Effective',
        description: 'Results that matter to your bottom line, not just your ego.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Services Section (what we offer)
  // ─────────────────────────────────────────────
  Services: {
    title: 'What We Do',
    subtitle: 'Full-service creative, web, and digital marketing—built to work together, scale with you, and actually move the needle.',
    intro: 'Instead of juggling multiple vendors, we provide a cohesive, end-to-end solution for your brand\'s online presence. Everything is structured with clear deliverables and a focus on real-world performance, not fluff.',
    bottomCta: 'Most clients combine 2–3 services for maximum impact. Let\'s figure out what works best for you.',
    ctaButton: 'Let\'s Talk',
    items: {
      photography: {
        title: 'Photography',
        description: 'From quick brand refreshes to full content days—clean, professional, usage-ready images for websites, social media, and advertising. All shoots include editing, color correction, and flexible add-ons.',
        icon: '/logos/icon-photo-video.svg',
      },
      videography: {
        title: 'Videography',
        description: 'High-performing video content from short-form Reels, TikToks, and Shorts to long-form brand videos. Includes concept development, filming, editing, captions, and platform optimization.',
        icon: '/logos/icon-photo-video.svg',
      },
      webDevelopment: {
        title: 'Web Development',
        description: 'Fast, modern, mobile-responsive websites using custom-coded technology. From simple starter sites to fully custom platforms with whatever you need.',
        icon: '/logos/icon-web-dev.svg',
      },
      socialMedia: {
        title: 'Social Media',
        description: 'Stay active, consistent, and strategic across platforms. Content creation, posting, caption writing, hashtag optimization, performance insights, and engagement moderation.',
        icon: '/logos/icon-social-media.svg',
      },
      hosting: {
        title: 'Hosting & Maintenance',
        description: 'Flexible monthly plans handling security, updates, backups, and performance monitoring. No long-term contracts—just reliable infrastructure and peace of mind.',
        icon: '/logos/icon-web-dev.svg',
      },
    },
  },

  // ─────────────────────────────────────────────
  // Work / Portfolio Section (gallery carousel)
  // ─────────────────────────────────────────────
  Work: {
    title: 'Our Work',
    subtitle: 'Projects that prove boring works.',
    prevAriaLabel: 'Previous project',
    nextAriaLabel: 'Next project',
    dotAriaLabel: 'Go to project',
    projects: [
      { id: 1, image: '/work/CORE_lending.png', alt: 'CORE Lending campaign' },
      { id: 2, image: '/work/JCH_charity.png', alt: 'Johnson City Honda charity event' },
      { id: 3, image: '/work/RT_powersports.png', alt: 'R/T Powersports adventure' },
      { id: 4, image: '/work/CGH_honda.png', alt: 'Cape Girardeau Honda promotion' },
      { id: 5, image: '/work/PPH_ad.png', alt: 'Providence Powerhouse advertisement' },
      { id: 6, image: '/work/CORE_lending_news.png', alt: 'CORE Lending news feature' },
    ],
  },

  // ─────────────────────────────────────────────
  // Social Proof Section (client testimonials)
  // ─────────────────────────────────────────────
  SocialProof: {
    title: 'What Our Clients Say',
    subtitle: 'Results over promises. Every time.',
    testimonials: [
      {
        quote: 'Boring Media delivered exactly what they promised—no surprises, just results. Our engagement is up 300% and we finally have a consistent brand presence.',
        author: 'Sarah Mitchell',
        role: 'Marketing Director',
        company: 'CORE Lending',
      },
      {
        quote: 'Finally, an agency that shows up when they say they will. They took our vision and executed it flawlessly. The work speaks for itself.',
        author: 'James Chen',
        role: 'General Manager',
        company: 'Galleria BMW',
      },
      {
        quote: 'We\'ve worked with flashy agencies before. Boring Media is different—they focus on what actually moves the needle. Best decision we made.',
        author: 'Amanda Torres',
        role: 'Founder',
        company: 'Providence Powerhouse',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // CTA Section (final call to action)
  // ─────────────────────────────────────────────
  CTA: {
    headline: 'Ready for marketing without surprises?',
    subheadline: 'Let\'s build something that actually works.',
    button: 'Get Started',
  },

  // ─────────────────────────────────────────────
  // Footer (site footer with contact & social)
  // ─────────────────────────────────────────────
  Footer: {
    tagline: 'Marketing Without Surprises',
    copyright: `© ${new Date().getFullYear()} Boring Media Co. All rights reserved.`,
    contact: {
      title: 'Contact',
      email: 'info@boringmedia.co',
      phone: '(985) 238-5215',
    },
    services: {
      title: 'Services',
    },
    social: {
      title: 'Follow Us',
      instagram: 'Instagram',
      facebook: 'Facebook',
    },
  },
} as const

// Type helper for accessing nested strings
export type StringsType = typeof Strings
