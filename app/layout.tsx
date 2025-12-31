import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Krishna Jha | Full-Stack Developer & Creative Media Producer",
  description: "Co-Founder & COO at BaseBrain. Specialized in building high-performance web applications and cinematic creative content.",
  openGraph: {
    title: "Krishna Jha | Portfolio",
    description: "Full-Stack Developer & Creative Media Producer based in India.",
    url: "https://krishnajha.vercel.app",
    siteName: "Krishna Jha Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Krishna Jha - Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishna Jha | Portfolio",
    description: "Full-Stack Developer & Creative Media Producer.",
    images: ["/profile.png"],
  },
}

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">
        <div className="noise-overlay" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
