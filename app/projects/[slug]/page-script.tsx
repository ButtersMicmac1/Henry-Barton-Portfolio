"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function PageScript() {
  const router = useRouter()

  useEffect(() => {
    // Check if we came from another page with a hash
    const handleHashNavigation = () => {
      const hash = window.location.hash
      if (hash) {
        const element = document.getElementById(hash.substring(1))
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" })
          }, 100)
        }
      }
    }

    window.addEventListener("load", handleHashNavigation)
    return () => window.removeEventListener("load", handleHashNavigation)
  }, [router])

  return null
}
