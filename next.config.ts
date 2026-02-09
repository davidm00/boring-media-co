import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const contentSecurityPolicyReportOnly = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  // Allow form submissions to Tally when their widget is used.
  "form-action 'self' https://tally.so",
  // Next.js typically injects some inline styles/scripts; keep this permissive
  // while we collect CSP reports, then tighten later.
  "script-src 'self' 'unsafe-inline' https://tally.so",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self' https://tally.so",
  "frame-src https://tally.so",
  "upgrade-insecure-requests",
  "report-uri /api/csp-report",
].join("; ");

const securityHeaders: Array<{ key: string; value: string }> = [
  // Only effective on HTTPS; safe for Vercel + custom domains.
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
  // Allow popups (safer default for external links / embedded tools).
  { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  {
    key: "Permissions-Policy",
    value: [
      "accelerometer=()",
      "autoplay=()",
      "camera=()",
      "clipboard-read=()",
      "clipboard-write=()",
      "geolocation=()",
      "gyroscope=()",
      "magnetometer=()",
      "microphone=()",
      "payment=()",
      "usb=()",
      "screen-wake-lock=()",
      "web-share=()",
    ].join(", "),
  },
];

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  poweredByHeader: false,

  async headers() {
    const headers = [...securityHeaders];

    if (isProd) {
      headers.push({
        key: "Content-Security-Policy-Report-Only",
        value: contentSecurityPolicyReportOnly,
      });
    }

    return [
      {
        source: "/:path*",
        headers,
      },
    ];
  },
};

export default nextConfig;
