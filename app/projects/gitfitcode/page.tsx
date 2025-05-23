"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Globe, Laptop, Code, Layers, Monitor, ExternalLink } from "lucide-react"

export default function GitFitCodePage() {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">
          GitFitCode
        </h1>
        <p className="text-xl text-gray-300 mb-4">
          A design and technology agency helping startups launch better digital experiences — and I designed for it
          behind the scenes.
        </p>

        <div className="flex gap-3 mb-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm">
            <Globe className="w-4 h-4 mr-2 text-indigo-400" />
            Web App
          </div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm">
            <Monitor className="w-4 h-4 mr-2 text-indigo-400" />
            Responsive Design
          </div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm">
            <Laptop className="w-4 h-4 mr-2 text-indigo-400" />
            Consulting
          </div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm">
            <Code className="w-4 h-4 mr-2 text-indigo-400" />
            UX/UI
          </div>
        </div>

        <a
          href="https://gitfitcode.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 mb-8 rounded-md bg-gradient-to-r from-indigo-500 to-blue-600 text-white hover:from-indigo-600 hover:to-blue-700 transition-all duration-300 shadow-md"
        >
          <Globe className="w-4 h-4 mr-2" />
          Website Link
          <ExternalLink className="w-3 h-3 ml-2" />
        </a>

        {/* Hero image with error handling */}
        <div className="relative w-full h-[450px] md:h-[600px] mb-12 rounded-xl overflow-hidden shadow-lg bg-gray-800">
          {!imageError ? (
            <Image
              src="/images/gitfitcode-homepage.png"
              alt="GitFitCode Homepage - Designed for Growth. Engineered to Scale."
              fill
              className="object-contain"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center p-8">
                <h3 className="text-xl font-bold text-indigo-300 mb-4">GitFitCode Homepage</h3>
                <p className="text-gray-300">Image could not be loaded</p>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-indigo-400">Overview</h2>
            <p className="text-gray-300 mb-4">
              GitFitCode is a tech and design consulting agency that partners with early-stage startups to deliver web
              platforms, internal tools, and UX/UI consulting. As their in-house designer, I helped design responsive
              websites, build scalable design systems, and polish user experiences for client launches.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-indigo-400">My Role</h2>
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              <li>UX/UI Designer for GitFitCode client and internal projects</li>
              <li>Designed full web pages and mobile flows</li>
              <li>Built modular design systems in Figma</li>
              <li>Delivered developer-ready assets and component libraries</li>
              <li>Helped speed up project launches by optimizing handoff processes</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-indigo-400">Key Deliverables</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <FeatureCard
            icon={<Monitor className="w-8 h-8 text-indigo-400" />}
            title="Responsive Web Apps"
            description="Landing pages and web applications"
          />
          <FeatureCard
            icon={<Layers className="w-8 h-8 text-indigo-400" />}
            title="Design Systems"
            description="Figma-based component libraries"
          />
          <FeatureCard
            icon={<Code className="w-8 h-8 text-indigo-400" />}
            title="User Flow Mapping"
            description="Layout wireframes and navigation"
          />
          <FeatureCard
            icon={<Globe className="w-8 h-8 text-indigo-400" />}
            title="Brand Assets"
            description="Consistent visuals across projects"
          />
        </div>

        {/* Placeholder for wireframes */}
        <div className="relative w-full h-[350px] md:h-[450px] mb-12 rounded-xl overflow-hidden shadow-lg bg-gray-800 flex items-center justify-center">
          <div className="text-center p-8">
            <h3 className="text-2xl font-bold text-indigo-300 mb-4">🚧 Currently Working On Final Visuals</h3>
            <p className="text-gray-300 max-w-lg mx-auto">(Full project visuals and prototypes coming soon.)</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-indigo-400">Design Process</h2>
        <div className="bg-gray-900 p-6 rounded-xl mb-12">
          <ol className="space-y-10">
            <ProcessStep
              number="01"
              title="Discovery & Kickoff"
              description="Reviewed project scopes, client goals, and user types during startup discovery calls."
            />
            <ProcessStep
              number="02"
              title="Research & Wireframing"
              description="Mapped flows and low-fidelity wireframes to structure navigation and page hierarchies."
              placeholder={true}
            />
            <ProcessStep
              number="03"
              title="High-Fidelity UI Design"
              description="Created scalable, mobile-responsive designs optimized for clean developer handoff."
              placeholder={true}
            />
            <ProcessStep
              number="04"
              title="Rapid Iteration with AI Tools"
              description="Used AI-assisted design workflows to build full responsive websites significantly faster than traditional timelines."
              placeholder={true}
            />
            <ProcessStep
              number="05"
              title="Final Delivery"
              description="Handed off full component libraries, layout specs, and annotated assets for development teams."
              placeholder={true}
            />
          </ol>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-indigo-400">Results & Impact</h2>
        <div className="bg-gray-900 p-6 rounded-xl mb-12">
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start">
              <span className="text-indigo-400 mr-2">⬆️</span>
              <span>
                Delivered a fully responsive client website 6x faster than initial projections (2 months scoped → 2
                weeks delivered)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-400 mr-2">♻️</span>
              <span>Reduced developer design confusion by building modular components early</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-400 mr-2">✅</span>
              <span>Improved GitFitCode's brand reputation through clean, modern UX/UI work</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-400 mr-2">🔐</span>
              <span>Supported multiple client launches and marketing pushes on tight startup deadlines</span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-indigo-400">What I Learned</h2>
        <div className="bg-gray-900 p-6 rounded-xl mb-12">
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start">
              <span className="text-indigo-400 mr-2">•</span>
              <span>Clear structure and early system building speeds up every step of the design-to-dev pipeline</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-400 mr-2">•</span>
              <span>AI tools can dramatically enhance design velocity when paired with solid UX foundations</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-400 mr-2">•</span>
              <span>Collaborative iteration across design, PM, and dev is key for fast-moving client projects</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-indigo-500 transition-all duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

function ProcessStep({ number, title, description, placeholder = false }) {
  return (
    <li className="space-y-4">
      <div className="flex">
        <div className="mr-4 flex-shrink-0">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-900 text-indigo-300 font-bold">
            {number}
          </span>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
      {placeholder && (
        <div className="relative w-full h-[200px] md:h-[300px] mt-4 rounded-lg overflow-hidden shadow-md bg-gray-800 flex items-center justify-center">
          <div className="text-center p-8">
            <h3 className="text-xl font-bold text-indigo-300 mb-2">🚧 Currently Working On Final Visuals</h3>
            <p className="text-gray-400">(Full project visuals and prototypes coming soon.)</p>
          </div>
        </div>
      )}
    </li>
  )
}
