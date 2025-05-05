"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Home, Layers, Phone } from "lucide-react"
import Loading from "@/components/loading"

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000) // Show loading for 1 second

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null
  if (loading) return <Loading />

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-8"
        >
          <Link href="/#work" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/#home" className="text-gray-400 hover:text-white transition-colors flex items-center">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Link>
            <Link href="/#work" className="text-gray-400 hover:text-white transition-colors flex items-center">
              <Layers className="mr-2 h-4 w-4" />
              Projects
            </Link>
            <Link href="/#contact" className="text-gray-400 hover:text-white transition-colors flex items-center">
              <Phone className="mr-2 h-4 w-4" />
              Contact
            </Link>
          </nav>
        </motion.div>
        {children}
      </div>
    </div>
  )
}
