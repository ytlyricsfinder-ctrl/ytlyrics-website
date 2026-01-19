import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YTLyrics - Real-time Lyrics for YouTube Videos",
  description: "Get instant, synced lyrics for any YouTube video. AI-powered song detection with karaoke mode and multilingual support. Privacy-first Chrome extension.",
  keywords: ["YouTube lyrics", "real-time lyrics", "synced lyrics", "karaoke YouTube", "Chrome extension", "lyrics extension"],
  authors: [{ name: "YTLyrics" }],
  openGraph: {
    title: "YTLyrics - Real-time Lyrics for YouTube Videos",
    description: "Get instant, synced lyrics for any YouTube video with AI-powered detection.",
    url: "https://ytlyrics.com",
    siteName: "YTLyrics",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "YTLyrics Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YTLyrics - Real-time Lyrics for YouTube Videos",
    description: "Get instant, synced lyrics for any YouTube video with AI-powered detection.",
    images: ["/og-image.png"],
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
  verification: {
    // Add your Google Search Console verification code here when ready
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1032013142432814"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
