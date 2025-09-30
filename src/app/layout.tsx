import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import type { ReactNode } from "react"

import "./globals.css"

import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { siteConfig } from "@/config/site"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: "%s — Pedro Pichardo",
  },
  description: siteConfig.description,
  keywords: [
    "Email specialist",
    "Lifecycle marketing",
    "Klaviyo",
    "Ecommerce retention",
    "Pedro Pichardo",
    "Evercurrent",
  ],
  category: "portfolio",
  creator: siteConfig.name,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} relative bg-background text-foreground font-sans antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:outline-none"
        >
          Skip to content
        </a>
        <Header />
        <div className="relative flex min-h-screen flex-col">
          <main id="main-content" className="flex-1 pt-28">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
