"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Brain, Bot, Palette, BarChart2, Smartphone, Monitor, ExternalLink } from "lucide-react"

export default function LunaraPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">
          Lunara – AI Mindfulness App
        </h1>
        <p className="text-xl text-gray-300 mb-4">
          An iOS app that helps users improve mental well-being with AI-personalized exercises, mood tracking, and
          calming design.
        </p>

        <div className="flex gap-3 mb-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm">
            <Smartphone className="w-4 h-4 mr-2 text-green-400" />
            iOS App
          </div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm">
            <Monitor className="w-4 h-4 mr-2 text-green-400" />
            Hardware
          </div>
        </div>

        <a
          href="https://www.figma.com/design/If1E8fOSAyyIxOloLvAeoU/Lunara?node-id=5-288&t=T4XAtxPhc1d79TLS-1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 mb-8 rounded-md bg-gradient-to-r from-green-500 to-teal-500 text-white hover:from-green-600 hover:to-teal-600 transition-all duration-300 shadow-md"
        >
          <svg className="w-4 h-4 mr-2" viewBox="0 0 38 57" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z" />
            <path d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z" />
            <path d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0H19Z" />
            <path d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z" />
          </svg>
          View in Figma
          <ExternalLink className="w-3 h-3 ml-2" />
        </a>

        {/* Hero image - Increased height for better visibility */}
        <div className="relative w-full h-[450px] md:h-[600px] mb-12 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lunara%20Poster-ExKsLHRTup5hgVRlyvIDWUvtTdgzxL.png"
            alt="Lunara App Screenshots"
            fill
            className="object-contain"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-green-400">Overview</h2>
            <p className="text-gray-300 mb-4">
              Lunara is an AI-powered mindfulness app that helps users check in on their mood, receive personalized
              exercises, and track emotional progress over time.
            </p>
            <p className="text-gray-300">
              The app combines calming design with smart recommendations—offering gentle, daily support to reduce stress
              and build better habits.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-green-400">My Role</h2>
            <p className="text-gray-300 mb-4">
              I was the sole UX/UI designer on Lunara, leading the project from discovery through delivery.
            </p>
            <p className="text-gray-300 mb-2">This included:</p>
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              <li>Research with mindfulness app users</li>
              <li>Persona and journey mapping</li>
              <li>Paper sketches and wireframes</li>
              <li>High-fidelity iOS design</li>
              <li>Usability testing and iteration</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-green-400">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <FeatureCard
            icon={<Brain className="w-8 h-8 text-green-400" />}
            title="Mood Tracking"
            description="Daily check-ins to reflect emotions"
          />
          <FeatureCard
            icon={<Bot className="w-8 h-8 text-green-400" />}
            title="AI-Powered Exercises"
            description="Tailored sessions based on mood and behavior"
          />
          <FeatureCard
            icon={<Palette className="w-8 h-8 text-green-400" />}
            title="Custom Sessions"
            description="Choose from breathing, visualization, or affirmations"
          />
          <FeatureCard
            icon={<BarChart2 className="w-8 h-8 text-green-400" />}
            title="Progress Tracking"
            description="View emotional trends over time"
          />
          <FeatureCard
            icon={<Smartphone className="w-8 h-8 text-green-400" />}
            title="iOS-Optimized Design"
            description="Calm UI built for daily mindfulness"
          />
        </div>

        <h2 className="text-2xl font-bold mb-6 text-green-400">Wireframes</h2>
        {/* Paper wireframes - Increased height for better visibility */}
        <div className="relative w-full h-[350px] md:h-[450px] mb-12 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lunara%20Paper%20Frames.jpg-hhBIqHEOTmKC52ZXCYvvRv95yyeSyS.jpeg"
            alt="Paper wireframes for Lunara app"
            fill
            className="object-contain"
          />
        </div>

        <h2 className="text-2xl font-bold mb-6 text-green-400">Who We Designed For</h2>
        {/* User personas - Increased height for better visibility */}
        <div className="relative w-full h-[350px] md:h-[450px] mb-12 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/User%20Persona%20Lunara-sj29673b4ufbd3IH9xLVMh4O702g5O.png"
            alt="User Personas - Jordan and Naomi"
            fill
            className="object-contain"
          />
        </div>
        <div className="bg-gray-900 p-6 rounded-xl mb-12">
          <p className="text-gray-300">
            Two unique users—Jordan and Naomi—shaped Lunara's direction. Their stories reflect the need for modern,
            supportive mindfulness tools that feel personal, not clinical.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-green-400">Design Process</h2>
        <div className="bg-gray-900 p-6 rounded-xl mb-12">
          <ol className="space-y-10">
            <ProcessStep
              number="01"
              title="Research & Discovery"
              description="Users wanted more adaptive, less clinical mindfulness tools. I conducted interviews, surveys, and competitor audits to identify emotional pain points."
            />
            <ProcessStep
              number="02"
              title="Sketching & Wireframes"
              description="I mapped user flows for onboarding, mood check-ins, and personalized sessions."
              image={{
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lofi%20wireframes%20Lunara%20-3XaS0ANPrpyEpdEdfpD0rWYBjglSVi.png",
                alt: "Low-Fidelity Wireframes",
                height: 280, // Increased height
              }}
            />
            <ProcessStep
              number="03"
              title="Visual Design"
              description="Built a gentle UI with soft colors and typography that evokes trust and calm. Each screen was designed to reduce decision fatigue and guide users intuitively."
              image={{
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/High%20-%20fidelity%20Lunara-DmG898geyzh9nEVkUsXTPDUoJrsPKU.png",
                alt: "High-Fidelity Mockups",
                height: 280, // Increased height
              }}
            />
            <ProcessStep
              number="04"
              title="Testing & Iteration"
              description={
                <>
                  <p className="mb-2">
                    <strong>Round 1: Mood Check-In</strong>
                  </p>
                  <p className="mb-1">Feedback: Needed more guidance</p>
                  <p className="mb-3">Change: Added tooltips to improve clarity</p>
                  <p className="mb-2">
                    <strong>Round 2: AI-Personalized Sessions</strong>
                  </p>
                  <p className="mb-1">Feedback: Wanted control over type of exercises</p>
                  <p>Change: Added options to choose session type (breathing, affirmation, visualization)</p>
                </>
              }
              image={{
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ai%20lunara-gskeQBRxWl9IoHabX80hOvcHlumfDx.png",
                alt: "AI Lunara",
                height: 280, // Increased height
              }}
              caption="Lunara's AI gently asks how you're feeling, then offers a personalized mindfulness exercise—turning check-ins into calming, guided moments."
            />
          </ol>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-green-400">Results & Impact</h2>
        <div className="bg-gray-900 p-6 rounded-xl mb-12">
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✅</span>
              <span>Increased user confidence through personalized guidance</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✅</span>
              <span>Higher engagement with mood tracking and daily streaks</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✅</span>
              <span>Positive feedback on UI clarity and calming tone</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-green-500 transition-all duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

function ProcessStep({ number, title, description, image, caption }) {
  return (
    <li className="space-y-4">
      <div className="flex">
        <div className="mr-4 flex-shrink-0">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-900 text-green-300 font-bold">
            {number}
          </span>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
          <div className="text-gray-400">{description}</div>
        </div>
      </div>
      {image && (
        <div className="space-y-2">
          <div className="relative w-full h-[200px] md:h-[300px] mt-4 rounded-lg overflow-hidden shadow-md">
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-contain" />
          </div>
          {caption && <p className="text-sm text-gray-400 italic">{caption}</p>}
        </div>
      )}
    </li>
  )
}
