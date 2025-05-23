"use client"

export function scrollToHash() {
  // If there's a hash in the URL
  if (typeof window !== "undefined") {
    try {
      // Use setTimeout to ensure the DOM is fully loaded
      setTimeout(() => {
        if (window.location.hash) {
          const hash = window.location.hash.substring(1) // Remove the '#' character
          const element = document.getElementById(hash)

          if (element) {
            // Scroll to the element
            element.scrollIntoView({ behavior: "smooth" })
          }
        }
      }, 500) // Increased timeout to ensure DOM is ready
    } catch (error) {
      console.error("Error in scrollToHash:", error)
    }
  }
}
