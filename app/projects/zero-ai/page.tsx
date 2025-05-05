"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, BarChart, PresentationIcon, Code, Shield } from "lucide-react"

export default function ZeroAIPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const slides = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slide.%201-Mwu9mm3KkhrokuyMw9TFpgoZJG66tr.png",
      alt: "Zero AI - The AI Companion for Communities and Your Network",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slide%202-qnqi7E2gv5RsXSxYbB0N596uIuZpSA.png",
      alt: "Critical Community-Building Tools Are Missing",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slide%203-yWsFsmYq3cC1IBGaATz1I3D5MA0KPO.png",
      alt: "Meaningful Connections are Hard to Establish and Maintain",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slide%204-zTDybxEWeXqVal2FMxLz1tzVi05TMm.png",
      alt: "Your Intelligent AI Companion",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slide%205-5TDXQahXUIOm3XuuN77oAC9WlVSW3g.png",
      alt: "ZeroAI Transforms Communities",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slide%206-yfZoObjbsmPBRGv8wP0wV5lUBdRkHw.png",
      alt: "Zero Knows!",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slide%207-pUHvH1GtqFQfiAXs0D9QyyyZ0SBEOt.png",
      alt: "Circles: Monetizable Community Spaces",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slide%208-p5YEKQhhYsVF0Pz5U0J4eQoFClf8Fb.png",
      alt: "ZeroAI Consolidates and Data-Enriches Your Contacts",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slide%209-d5960iE80NJ80ta7ZOFUILAC2UGvxk.png",
      alt: "Transforming Communities Through AI",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slide%2010-NKC74P1QUqvYrm4jYxx1VcZ8WyYHro.png",
      alt: "Data Security",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slide%2011-GW91iEeiv8zgpo1qVhOmpoiSbLtC8E.png",
      alt: "Revenue Share With Communities",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slide%2012-kfqwNlhhQC0RLhOXHhRLANFcqz4x2v.png",
      alt: "Alpha Test: The Vine",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slide%2013-Qgqg7z9QwWeCiABu4Y2vgZu58uoH4H.png",
      alt: "Go to Market Strategy & Growth",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slide%2014-Rdvlno9fPX2wtjl7sSIYOhooCWVxRU.png",
      alt: "Timeline",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slide%2015-jij3XrQ9XesS7LF8hDVLkyvcpqZWtc.png",
      alt: "Market Opportunity",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slide%2016-fXuy8t2IIyQI2lPD5640H15ULGYCNn.png",
      alt: "Funding",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slide%2017-mRMyB85rDVb08A2RDagiehVNeyJAP7.png",
      alt: "Meet The Team",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slide%2018-0sCLmWgTItvoppgkbsS4Zh5zjT8CeJ.png",
      alt: "Meet Our Team",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slide%2019-eOxeUbUiTVOxRlLNaJxqYe8rqz8WVJ.png",
      alt: "Thank You",
    },
  ]

  const totalSlides = slides.length

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }, [totalSlides])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide()
      if (e.key === "ArrowLeft") prevSlide()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide])

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide()
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide()
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
          Zero AI
        </h1>
        <p className="text-xl text-gray-300 mb-4">
          A seed-stage pitch deck designed to showcase Zero AI's product vision, UX thinking, and design-driven approach
          to securing investor interest.
        </p>

        <div className="flex gap-3 mb-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-900/30 text-blue-300 text-sm border border-blue-800/50">
            <BarChart className="w-4 h-4 mr-2 text-blue-400" />
            Pitch Deck
          </div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-900/30 text-blue-300 text-sm border border-blue-800/50">
            <PresentationIcon className="w-4 h-4 mr-2 text-blue-400" />
            Presentation Design
          </div>
        </div>

        {/* Hero Carousel */}
        <div className="relative w-full mb-12">
          <div
            className="relative w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden border border-blue-900/50 shadow-lg shadow-blue-900/20 bg-[#050A20] cursor-pointer"
            onClick={nextSlide}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={slides[currentSlide].src || "/placeholder.svg"}
                  alt={slides[currentSlide].alt}
                  fill
                  className="object-contain"
                  priority={currentSlide < 3}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              onClick={(e) => {
                e.stopPropagation()
                prevSlide()
              }}
              className="bg-blue-900/50 hover:bg-blue-800/70 text-white p-2 rounded-full ml-2 backdrop-blur-sm z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={(e) => {
                e.stopPropagation()
                nextSlide()
              }}
              className="bg-blue-900/50 hover:bg-blue-800/70 text-white p-2 rounded-full mr-2 backdrop-blur-sm z-10"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Slide Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-900/70 text-blue-100 px-4 py-1.5 rounded-full text-sm backdrop-blur-sm border border-blue-700/50">
            Slide {currentSlide + 1} of {totalSlides}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-12">
          <div className="bg-gradient-to-br from-[#0A1A40] to-[#051030] p-8 rounded-xl border border-blue-900/30 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-300">Behind the Deck</h2>
            <p className="text-gray-300 mb-4">
              I collaborated with the CPO and Lead Product Designer to craft a user-centered, visually engaging pitch
              deck that played a key role in securing $3M in seed funding. My focus was on clear visual hierarchy,
              intuitive UI storytelling, and highlighting Zero AI's core innovations in a way that resonated with both
              users and investors.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-[#0A1A40] to-[#051030] p-8 rounded-xl border border-blue-900/30 shadow-lg">
            <div className="flex items-center mb-4">
              <Code className="w-8 h-8 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-blue-300">Design Approach</h2>
            </div>
            <p className="text-gray-300">
              For Zero AI's pitch deck, I focused on creating a cohesive visual language that communicated both the
              technical capabilities and human-centered benefits of the platform. A deep blue palette with vibrant
              accent colors was chosen to reflect trust, innovation, and clarity, while a clean layout helped guide the
              story from problem to solution.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#0A1A40] to-[#051030] p-8 rounded-xl border border-blue-900/30 shadow-lg">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-blue-300">Technical Storytelling</h2>
            </div>
            <p className="text-gray-300">
              Each slide was crafted to balance information and visual clarity — combining product mockups, clear
              messaging, and conceptual illustrations to showcase Zero AI's value. The goal was to present complex ideas
              in a way that was accessible, polished, and investor-ready.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#0A1A40] to-[#051030] p-8 rounded-xl border border-blue-900/30 shadow-lg mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">Key Learnings</h2>
          <p className="text-gray-300 mb-4">
            Building this pitch deck highlighted the importance of connecting product features to real-world impact.
            Investors respond not just to technology, but to the clarity of the story and the design's ability to make
            that story feel both credible and inspiring.
          </p>
          <p className="text-gray-300">
            This project also reinforced how effective design can bridge the gap between technical depth and emotional
            resonance — especially when introducing new AI products to varied stakeholders.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#0A1A40] to-[#051030] p-8 rounded-xl border border-blue-900/30 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-blue-300">Design Process</h2>
          <ol className="space-y-8">
            <ProcessStep
              number="01"
              title="Research & Discovery"
              description="Collaborated with the CPO and Product Design Lead to identify key product differentiators and strategic messaging priorities."
            />
            <ProcessStep
              number="02"
              title="Narrative Structure"
              description="Helped shape the storytelling arc — from identifying core user pain points to illustrating the solution, opportunity, and product fit."
            />
            <ProcessStep
              number="03"
              title="Visual Design System"
              description="Established a consistent visual system with branded colors, modern type, and visual hierarchy suited for investor presentations."
            />
            <ProcessStep
              number="04"
              title="UI Mockups & Integration"
              description="Created simplified UI representations to spotlight core product features in a clear, focused way."
            />
            <ProcessStep
              number="05"
              title="Refinement & Feedback Loops"
              description="Iterated based on feedback from leadership, refining both slide structure and visual clarity to ensure the narrative felt polished and persuasive."
            />
          </ol>
        </div>
      </motion.div>
    </div>
  )
}

function ProcessStep({ number, title, description }) {
  return (
    <li className="flex">
      <div className="mr-4 flex-shrink-0">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-900/50 text-blue-300 font-bold border border-blue-800/50">
          {number}
        </span>
      </div>
      <div>
        <h3 className="text-lg font-bold text-blue-100 mb-1">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </li>
  )
}
