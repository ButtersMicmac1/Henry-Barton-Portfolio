import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Script from "next/script"
import CursorTrail from "@/components/cursor-trail"

export const metadata: Metadata = {
  title: "Henry Barton - Designer | Futurist | Innovator",
  description:
    "Portfolio of Henry Barton, a UX/UI Designer specializing in mobile-first design, AI experiences, and strategic design.",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <CursorTrail />
        {children}
        <Script id="handle-hash-navigation" strategy="afterInteractive">
          {`
            function handleHashNavigation() {
              const hash = window.location.hash;
              if (hash) {
                setTimeout(() => {
                  const element = document.getElementById(hash.substring(1));
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 500);
              }
            }
            
            window.addEventListener('load', handleHashNavigation);
            window.addEventListener('hashchange', handleHashNavigation);
          `}
        </Script>
      </body>
    </html>
  )
}
