"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Globe, Laptop, Code, BarChart2, Smartphone, Monitor, ExternalLink, MessageSquare, Zap } from "lucide-react"

export default function ThreadlinePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
          Threadline
        </h1>
        <p className="text-xl text-gray-300 mb-4">
          A modern async dashboard designed for remote teams to share updates, celebrate wins, and stay in sync—without
          the Slack noise or robotic standup bots.
        </p>

        <div className="flex gap-3 mb-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm">
            <Globe className="w-4 h-4 mr-2 text-blue-400" />
            Web App
          </div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm">
            <Code className="w-4 h-4 mr-2 text-blue-400" />
            UX/UI
          </div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm">
            <BarChart2 className="w-4 h-4 mr-2 text-blue-400" />
            Dashboard
          </div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm">
            <Laptop className="w-4 h-4 mr-2 text-blue-400" />
            Design Systems
          </div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm">
            <Monitor className="w-4 h-4 mr-2 text-blue-400" />
            Remote Work
          </div>
        </div>

        <a
          href="https://threadline-sync.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 mb-8 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-md"
        >
          <Globe className="w-4 h-4 mr-2" />
          Visit Live Site
          <ExternalLink className="w-3 h-3 ml-2" />
        </a>

        {/* Hero image */}
        <div className="relative w-full h-[450px] md:h-[600px] mb-12 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/threadline-cover.png"
            alt="Threadline Dashboard - A modern async team dashboard"
            fill
            className="object-contain"
          />
        </div>

        <h2 className="text-2xl font-bold mb-6 text-blue-400">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <FeatureCard
            icon={<MessageSquare className="w-8 h-8 text-blue-400" />}
            title="Async Updates"
            description="Team updates with emoji feedback and tags"
          />
          <FeatureCard
            icon={<BarChart2 className="w-8 h-8 text-blue-400" />}
            title="Weekly Pulse"
            description="AI-generated summaries to track team momentum"
          />
          <FeatureCard
            icon={<Zap className="w-8 h-8 text-blue-400" />}
            title="Showcase"
            description="Spotlight for team wins, NPS boosts, and product launches"
          />
          <FeatureCard
            icon={<Smartphone className="w-8 h-8 text-blue-400" />}
            title="Mobile-Friendly"
            description="Fully responsive experience across breakpoints"
          />
          <FeatureCard
            icon={<Monitor className="w-8 h-8 text-blue-400" />}
            title="Mood Check-ins"
            description="Light-touch team sentiment tracking"
          />
          <FeatureCard
            icon={<Code className="w-8 h-8 text-blue-400" />}
            title="Streaks & Tags"
            description="Motivation without micromanagement"
          />
        </div>

        <h2 className="text-2xl font-bold mb-6 text-blue-400">Who We Designed For</h2>
        <div className="relative w-full h-[350px] md:h-[450px] mb-6 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/kevin-persona.png"
            alt="User Persona - Kevin Shah, Frontend Engineer"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative w-full h-[350px] md:h-[450px] mb-12 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/jada-persona.png"
            alt="User Persona - Jada Thompson, Product Manager"
            fill
            className="object-contain"
          />
        </div>

        <h2 className="text-2xl font-bold mb-6 text-blue-400">Design Process</h2>
        <div className="bg-gray-900 p-6 rounded-xl mb-12">
          <ol className="space-y-10">
            <ProcessStep
              number="01"
              title="Paper Wireframes"
              description="Sketched initial layouts focusing on update feeds, team visibility, and simple navigation."
              image={{
                src: "/images/threadline-paper-wireframes.png",
                alt: "Paper wireframes for Threadline dashboard",
                height: 280,
              }}
            />
            <ProcessStep
              number="02"
              title="Low-Fidelity Wireframes"
              description="Created grayscale screens in Figma focusing on information hierarchy and user flows."
              image={{
                src: "/images/threadline-lofi-wireframes.png",
                alt: "Low-fidelity wireframes",
                height: 280,
              }}
            />
            <ProcessStep
              number="03"
              title="Design System"
              description="Developed a cohesive design system with blue-focused color palette, typography, and reusable components."
              image={{
                src: "/images/threadline-design-system.png",
                alt: "Threadline design system",
                height: 280,
              }}
            />
            <ProcessStep
              number="04"
              title="High-Fidelity Mockups"
              description="Created polished UI with clean layouts, consistent components, and thoughtful micro-interactions."
              image={{
                src: "/images/threadline-hifi-mockups.png",
                alt: "High-fidelity mockups",
                height: 280,
              }}
            />
          </ol>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-blue-400">Competitive Research</h2>
        <div className="bg-gray-900 p-6 rounded-xl mb-12">
          <p className="text-gray-300">
            I looked at tools like Slack, Notion, and Standuply. Slack was fast but messy—updates got buried. Notion was
            flexible, but unstructured. Standup bots felt robotic. Threadline blends async structure with a more human
            feel: emoji reactions, friendly tone, and a visual pulse of team progress.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-blue-400">What I Learned</h2>
        <div className="bg-gray-900 p-6 rounded-xl mb-12">
          <p className="text-gray-300">
            Designing this in v0.dev taught me to think in components from the start. I also saw how small touches—like
            mood tracking and reactions—can make an async tool feel less like a chore and more like a team ritual.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-blue-400">Next Steps</h2>
        <div className="bg-gray-900 p-6 rounded-xl mb-12">
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Polish mobile menu behavior and transitions</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Add filters by tag, mood, or teammate</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Improve Showcase with more layout options</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Add Slack and Linear integrations</span>
            </li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <a href="/#work" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
            ← Back to All Projects
          </a>
        </div>
      </motion.div>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition-all duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

function ProcessStep({ number, title, description, image }) {
  return (
    <li className="space-y-4">
      <div className="flex">
        <div className="mr-4 flex-shrink-0">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-900 text-blue-300 font-bold">
            {number}
          </span>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
      {image && (
        <div className="relative w-full h-[200px] md:h-[300px] mt-4 rounded-lg overflow-hidden shadow-md">
          <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-contain" />
        </div>
      )}
    </li>
  )
}
