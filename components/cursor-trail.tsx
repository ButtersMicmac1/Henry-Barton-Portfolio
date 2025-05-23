"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

export default function CursorTrail() {
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([])
  const [isMobile, setIsMobile] = useState(false)
  const requestRef = useRef<number | null>(null)
  const previousTimeRef = useRef<number | null>(null)
  const mousePositionRef = useRef({ x: 0, y: 0 })

  // Check if device is mobile
  useEffect(() => {
    try {
      const checkMobile = () => {
        setIsMobile(window.innerWidth <= 768)
      }

      checkMobile()
      window.addEventListener("resize", checkMobile)

      return () => {
        window.removeEventListener("resize", checkMobile)
      }
    } catch (error) {
      console.error("Error in CursorTrail mobile check:", error)
      setIsMobile(true) // Default to mobile to avoid issues
    }
  }, [])

  // Handle mouse movement
  useEffect(() => {
    if (isMobile) return

    try {
      const handleMouseMove = (e: MouseEvent) => {
        mousePositionRef.current = { x: e.clientX, y: e.clientY }
      }

      window.addEventListener("mousemove", handleMouseMove)

      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
      }
    } catch (error) {
      console.error("Error in CursorTrail mouse movement:", error)
    }
  }, [isMobile])

  // Animation loop using requestAnimationFrame
  const animate = (time: number) => {
    try {
      if (previousTimeRef.current === null) {
        previousTimeRef.current = time
      }

      const deltaTime = time - (previousTimeRef.current || 0)

      // Only update trail every 16ms (approximately 60fps)
      if (deltaTime > 16) {
        previousTimeRef.current = time

        const { x, y } = mousePositionRef.current

        setTrail((prevTrail) => {
          const newPoint = { x, y, id: Date.now() }
          const newTrail = [newPoint, ...prevTrail]
          return newTrail.slice(0, 12) // Keep only 12 points in the trail
        })
      }

      requestRef.current = requestAnimationFrame(animate)
    } catch (error) {
      console.error("Error in CursorTrail animation:", error)
    }
  }

  // Start and stop the animation loop
  useEffect(() => {
    try {
      if (!isMobile) {
        requestRef.current = requestAnimationFrame(animate)
      }

      return () => {
        if (requestRef.current) {
          cancelAnimationFrame(requestRef.current)
        }
      }
    } catch (error) {
      console.error("Error in CursorTrail animation setup:", error)
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {trail.map((point, index) => {
        // Calculate decreasing opacity for trail effect
        const pointOpacity = 0.4 * (1 - index / 12)
        const size = Math.max(5, 15 - index * 0.8)

        return (
          <motion.div
            key={point.id}
            className="absolute rounded-full mix-blend-lighten"
            style={{
              left: point.x,
              top: point.y,
              transform: "translate(-50%, -50%)",
              background: `radial-gradient(circle, rgba(194, 124, 255, ${pointOpacity}) 0%, rgba(255, 62, 143, ${pointOpacity * 0.7}) 70%, transparent 100%)`,
              width: `${size}px`,
              height: `${size}px`,
              filter: "blur(3px)",
            }}
            initial={{ scale: 1.2, opacity: pointOpacity }}
            animate={{ scale: 1, opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          />
        )
      })}
    </div>
  )
}
