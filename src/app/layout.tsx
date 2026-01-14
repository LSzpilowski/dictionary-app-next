import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "sonner";
import "@/styles/globals.css"
import { fontSans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    default: "Dictionary App - English Word Lookup & Learning",
    template: "%s | Dictionary App",
  },
  description: "Search and learn English words with definitions, phonetics, examples, and related images. A simple and elegant dictionary application for language learning.",
  keywords: ["dictionary", "english dictionary", "word lookup", "definitions", "phonetics", "language learning"],
  authors: [{ name: "Dictionary App" }],
  openGraph: {
    title: "Dictionary App - English Word Lookup & Learning",
    description: "Search and learn English words with definitions, phonetics, and examples",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dictionary App",
    description: "Search and learn English words with definitions and examples",
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
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body
        className={cn(fontSans.className, "min-h-screen antialiased w-full")}
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