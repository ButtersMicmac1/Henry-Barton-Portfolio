import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}



import './globals.css'