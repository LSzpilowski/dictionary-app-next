import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "sonner";
import "@/styles/globals.css"
import { fontSans } from "@/lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://dictionary.lszpilowski.com"),
  title: {
    default: "Wordly - Dictionary & Word Lookup App",
    template: "%s | Wordly",
  },
  description: "Search and learn English words with definitions, phonetics, examples, and related images. A simple and elegant dictionary application for language learning.",
  keywords: ["dictionary", "english dictionary", "word lookup", "definitions", "phonetics", "language learning"],
  authors: [{ name: "Wordly" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Wordly - English Word Lookup & Learning",
    description: "Search and learn English words with definitions, phonetics, and examples",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Wordly - Dictionary App" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wordly - English Word Lookup & Learning",
    description: "Search and learn English words with definitions and examples",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body
        className={cn(fontSans.className, " antialiased w-full")}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}