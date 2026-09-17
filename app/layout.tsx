import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { JsonLd } from "@/components/json-ld"
import { SITE, AUTHOR } from "@/lib/site"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name}: Unique React components I built`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "ascii liquid",
    "liquid ascii",
    "ascii fluid simulation",
    "ascii art fluid",
    "ascii animation",
    "react ascii component",
    "text fluid simulation",
    "terminal fluid effect",
    "react components",
    "open source",
  ],
  authors: [{ name: AUTHOR.name, url: AUTHOR.url }],
  creator: AUTHOR.name,
  publisher: SITE.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_US",
    url: "/",
    title: `${SITE.name}: Unique React components I built`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name}: Unique React components I built`,
    description: SITE.description,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-white dark:bg-[#09090b] text-[#09090b] dark:text-[#fafafa]`}
        suppressHydrationWarning
      >
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": `${SITE.url}/#website`,
                url: SITE.url,
                name: SITE.name,
                description: SITE.description,
                inLanguage: "en",
                author: { "@id": `${SITE.url}/#person` },
              },
              {
                "@type": "Person",
                "@id": `${SITE.url}/#person`,
                name: AUTHOR.name,
                url: AUTHOR.url,
                knowsAbout: [
                  "React",
                  "Creative coding",
                  "Fluid simulation",
                  "ASCII art",
                  "Open source components",
                ],
              },
            ],
          }}
        />
        <ThemeProvider>
          <SiteHeader />
          <main className="min-h-[60vh]">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
