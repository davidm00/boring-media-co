import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Strings } from "@/lib/strings";

export const metadata: Metadata = {
  title: Strings.Meta.title,
  description: Strings.Meta.description,
  keywords: [...Strings.Meta.keywords],
  metadataBase: new URL(Strings.Brand.url),
  openGraph: {
    title: Strings.Meta.title,
    description: Strings.Meta.description,
    url: Strings.Brand.url,
    siteName: Strings.Brand.name,
    locale: Strings.Brand.locale,
    type: "website",
    images: [
      {
        url: Strings.Meta.ogImage,
        width: 1200,
        height: 630,
        alt: Strings.Meta.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: Strings.Meta.title,
    description: Strings.Meta.description,
    images: [Strings.Meta.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: Strings.Assets.favicons.ico, sizes: "32x32" },
      { url: Strings.Assets.favicons.png16, sizes: "16x16", type: "image/png" },
      { url: Strings.Assets.favicons.png32, sizes: "32x32", type: "image/png" },
      { url: Strings.Assets.logos.icon, type: "image/svg+xml" },
    ],
    apple: Strings.Assets.favicons.apple,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://tally.so/widgets/embed.js"
          strategy="lazyOnload"
        />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-boring-blue focus:text-white focus:rounded-lg"
        >
          {Strings.Accessibility.skipToContent}
        </a>
        {children}
      </body>
    </html>
  );
}
