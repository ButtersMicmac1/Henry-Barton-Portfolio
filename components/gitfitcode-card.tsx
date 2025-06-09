"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

export default function GitFitCodeCard() {
  const [imageError, setImageError] = useState(false)

  return (
    <a href="https://gitfitcode.com" target="_blank" rel="noopener noreferrer" className="block">
      <motion.div
        className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300 h-full cursor-pointer group"
        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.3)" }}
      >
        <div className="relative w-full h-40 mb-4 rounded-md overflow-hidden bg-gray-800">
          {!imageError ? (
            <Image
              src="/images/gitfitcode-homepage.png"
              alt="GitFitCode – Platform & Client UX/UI Support"
              fill
              className="object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-400 text-sm">GitFitCode – Platform & Client UX/UI Support</p>
            </div>
          )}
        </div>

        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white text-center md:text-left group-hover:text-purple-300 transition-colors">
            GitFitCode – Platform & Client UX/UI Support
          </h3>
          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-300 transition-colors flex-shrink-0 ml-2" />
        </div>

        <p className="text-gray-400 mb-4 text-center md:text-left">
          Currently designing at GitFitCode, a creative agency focused on branding and software design. I led the design
          and development of the live site and collaborate on UX/UI for client projects—working closely with the founder
          and dev team to ship scalable, high-performing interfaces.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
          {["Web App", "Responsive Design", "UX/UI", "Design Systems"].map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-center md:justify-start">
          <span className="inline-flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-blue-600 text-white group-hover:from-indigo-600 group-hover:to-blue-700 transition-all duration-300 shadow-md text-sm font-medium">
            Visit Live Site
            <ExternalLink className="w-4 h-4 ml-2" />
          </span>
        </div>
      </motion.div>
    </a>
  )
}
