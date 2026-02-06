import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Strings } from "@/lib/strings";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: Strings.Meta.title,
  description: Strings.Meta.description,
  keywords: [...Strings.Meta.keywords],
  metadataBase: new URL("https://boringmedia.co"),
  openGraph: {
    title: Strings.Meta.title,
    description: Strings.Meta.description,
    url: "https://boringmedia.co",
    siteName: "Boring Media Co.",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logos/bmc-blk-logo.svg",
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
    images: ["/logos/bmc-blk-logo.svg"],
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
    icon: "/logos/boring-b-icon.svg",
    apple: "/logos/boring-b-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-boring-blue focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
