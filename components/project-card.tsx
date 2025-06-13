"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  slug: string
  imageSrc?: string
  liveUrl?: string
}

export default function ProjectCard({ title, description, tags, slug, imageSrc, liveUrl }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false)

  const handleLiveUrlClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (liveUrl) {
      window.open(liveUrl, "_blank", "noopener noreferrer")
    }
  }

  return (
    <Link href={`/projects/${slug}`}>
      <motion.div
        className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300 h-full cursor-pointer"
        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.3)" }}
      >
        {imageSrc && (
          <div className="relative w-full h-40 mb-4 rounded-md overflow-hidden bg-gray-800">
            {!imageError ? (
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={title}
                fill
                className="object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-400 text-sm">{title}</p>
              </div>
            )}
          </div>
        )}
        <h3 className="text-xl font-bold mb-3 text-white text-center md:text-left">{title}</h3>
        <p className="text-gray-400 mb-4 text-center md:text-left">{description}</p>
        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300"
            >
              {tag}
            </span>
          ))}
        </div>
        {liveUrl && (
          <div className="flex justify-center md:justify-start">
            <button
              onClick={handleLiveUrlClick}
              className="inline-flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-md text-sm font-medium"
            >
              Visit Live Site
              <ExternalLink className="w-4 h-4 ml-2" />
            </button>
          </div>
        )}
      </motion.div>
    </Link>
  )
}
