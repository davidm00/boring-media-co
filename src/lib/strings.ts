/**
 * Centralized strings for the Boring Media Co. website.
 * All UI text is stored here for easy maintenance and future localization.
 */

export const Strings = {
  Meta: {
    title: 'Boring Media Co. | Marketing Without Surprises',
    description: 'Social media, photo & video, paid advertising, and web built for consistent growth.',
    keywords: ['marketing agency', 'social media', 'paid advertising', 'web development'],
  },

  Nav: {
    services: 'Services',
    work: 'Work',
    about: 'About',
    contact: 'Contact',
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
        icon: '/logos/icon-social-media.svg',
      },
      photoVideo: {
        title: 'Photo & Video',
        description: 'Professional visuals that capture attention and tell your story.',
        icon: '/logos/icon-photo-video.svg',
      },
      paidAdvertising: {
        title: 'Paid Advertising',
        description: 'Strategic campaigns that maximize ROI and minimize waste.',
        icon: '/logos/icon-paid-ads.svg',
      },
      webDevelopment: {
        title: 'Web Development',
        description: 'Fast, beautiful websites built to convert visitors into customers.',
        icon: '/logos/icon-web-dev.svg',
      },
    },
  },

  ValueProp: {
    title: 'Why Boring?',
    subtitle: 'Because marketing shouldn\'t be a rollercoaster.',
    description: 'We believe in strategy over surprises. Our approach delivers consistent, measurable results without the drama. No vanity metrics. No flashy promises. Just steady growth that compounds over time.',
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

  Work: {
    title: 'Our Work',
    subtitle: 'Projects that prove boring works.',
    comingSoon: 'Coming Soon',
    comingSoonDescription: 'We\'re putting the finishing touches on some exciting case studies.',
    placeholder: {
      title: 'Case Study',
      description: 'Detailed results coming soon.',
    },
  },

  CTA: {
    headline: 'Ready for marketing without surprises?',
    subheadline: 'Let\'s build something that actually works.',
    button: 'Get Started',
  },

  Footer: {
    tagline: 'Marketing Without Surprises',
    copyright: `© ${new Date().getFullYear()} Boring Media Co. All rights reserved.`,
    contact: {
      title: 'Contact',
      email: 'hello@boringmedia.co',
    },
    services: {
      title: 'Services',
    },
    social: {
      title: 'Follow Us',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      twitter: 'Twitter',
    },
  },
} as const

// Type helper for accessing nested strings
export type StringsType = typeof Strings
