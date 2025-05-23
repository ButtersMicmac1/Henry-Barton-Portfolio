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
        <div id="app-root">
          {/* Error boundary would be ideal here, but we'll keep it simple */}
          {children}
        </div>
        <CursorTrail />
        <Script id="handle-hash-navigation" strategy="afterInteractive">
          {`
            try {
              function handleHashNavigation() {
                const hash = window.location.hash;
                if (hash) {
                  setTimeout(() => {
                    const element = document.getElementById(hash.substring(1));
                    if (element) {
                      element.scrollInView({ behavior: 'smooth' });
                    }
                  }, 500);
                }
              }
              
              window.addEventListener('load', handleHashNavigation);
              window.addEventListener('hashchange', handleHashNavigation);
            } catch (e) {
              console.error("Error in hash navigation script:", e);
            }
          `}
        </Script>
      </body>
    </html>
  )
}
