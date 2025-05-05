"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Smartphone, Lock, TrendingUp, PiggyBank, Calendar, Apple, ExternalLink } from "lucide-react"

export default function ClearSavePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          ClearSave
        </h1>
        <p className="text-xl text-gray-300 mb-4">
          A mobile-first app for high-yield savings, goal tracking, and secure money management — all in one place.
        </p>

        <div className="flex gap-3 mb-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm">
            <Apple className="w-4 h-4 mr-2 text-blue-400" />
            iOS App
          </div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm">
            <Smartphone className="w-4 h-4 mr-2 text-blue-400" />
            Hardware (iPhone)
          </div>
        </div>

        <a
          href="https://www.figma.com/design/TXTwFRlHtOMJOGK7ej9p91/ClearSave-Wireframes?node-id=101-1082&t=3bAN2Kk9pIU8kTgQ-1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 mb-8 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md"
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
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Clear%20Save%20Port-MdbW3GeipJZfMkVaT0g5tN7ndDXvCD.png"
            alt="ClearSave App Screenshots"
            fill
            className="object-contain"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Overview</h2>
            <p className="text-gray-300 mb-4">
              ClearSave is a mobile-first financial app designed to help users manage money smarter. It combines
              high-yield savings, automated goals, and real-time tracking into one seamless experience.
            </p>
            <p className="text-gray-300">
              Through user research and testing, I designed ClearSave to be intuitive, secure, and emotionally
              supportive—giving people confidence in their savings journey.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">My Role</h2>
            <p className="text-gray-300 mb-4">
              I led the full UX/UI design process for ClearSave—from early discovery and sketching to interactive
              prototypes and usability testing.
            </p>
            <p className="text-gray-300 mb-2">This included:</p>
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              <li>User research (interviews, personas, journey mapping)</li>
              <li>Wireframes, low-fi + high-fi design</li>
              <li>Testing and iteration based on user feedback</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-blue-400">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <FeatureCard
            icon={<PiggyBank className="w-8 h-8 text-blue-400" />}
            title="Goal-Based Savings"
            description="Set custom financial goals with timelines."
          />
          <FeatureCard
            icon={<Lock className="w-8 h-8 text-blue-400" />}
            title="Secure Bank Linking"
            description="Plaid integration for seamless transfers."
          />
          <FeatureCard
            icon={<TrendingUp className="w-8 h-8 text-blue-400" />}
            title="Real-Time Tracking"
            description="Visual goal progress and transaction breakdowns."
          />
          <FeatureCard
            icon={<Smartphone className="w-8 h-8 text-blue-400" />}
            title="Simple, Motivating UX"
            description="Friendly flows, positive reinforcement, and clarity."
          />
          <FeatureCard
            icon={<Calendar className="w-8 h-8 text-blue-400" />}
            title="Scheduled Transfers"
            description="Automate recurring contributions toward goals."
          />
          <FeatureCard
            icon={<Smartphone className="w-8 h-8 text-blue-400" />}
            title="Mobile-First Design"
            description="Optimized for iOS and real-world usage habits."
          />
        </div>

        {/* Login/Signup screens - Increased height for better visibility */}
        <div className="relative w-full h-[350px] md:h-[450px] mb-12 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/login%3Asign-up-1hhj6hkBKI7j7Qj6YHE6ophm0zC9Vy.png"
            alt="Login and sign-up UI screens"
            fill
            className="object-contain"
          />
        </div>

        <h2 className="text-2xl font-bold mb-6 text-blue-400">Who We Designed For</h2>
        {/* User Personas - Increased height for better visibility */}
        <div className="relative w-full h-[350px] md:h-[450px] mb-12 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Third%20image%20%28User%20Personas%29-lLEsT3bL4IyFTRTHnMLU5IgBe2kfce.png"
            alt="User Personas - David Adkins and Sarah Hall"
            fill
            className="object-contain"
          />
        </div>

        <h2 className="text-2xl font-bold mb-6 text-blue-400">Design Process</h2>
        <div className="bg-gray-900 p-6 rounded-xl mb-12">
          <ol className="space-y-10">
            <ProcessStep
              number="01"
              title="Research & Discovery"
              description="Users wanted an app that combined savings, budgeting, and goal setting into one tool—without the mental burden. They craved clarity, trust, and progress tracking."
              image={{
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/User%20Journey-PoA4qzrbHvDS7zWcPYQ1MCgMIL01Ia.png",
                alt: "User Journey Map",
                height: 280, // Increased height
              }}
            />
            <ProcessStep
              number="02"
              title="Paper Prototypes"
              description="I sketched out simple, guided flows to reduce friction during onboarding and verification."
              image={{
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Paper%20Wireframes.jpg-uOOleCMV0mQta5yQkTmGCiUO1OFIiU.jpeg",
                alt: "Paper wireframes",
                height: 280, // Increased height
              }}
            />
            <ProcessStep
              number="03"
              title="Low-Fidelity Wireframes"
              description="Created grayscale screens in Figma focusing on simplicity and UX hierarchy."
              image={{
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Low%20Fi%20Clearsave-23Ikz40XjWcYL4eCuaCoGTgpoFfY23.png",
                alt: "Low-fidelity wireframes",
                height: 280, // Increased height
              }}
            />
            <ProcessStep
              number="04"
              title="High-Fidelity Design"
              description="Blue-tinted, clean UI with rounded edges and clear copy. I focused on reducing stress and guiding users step-by-step."
              image={{
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hifi%20Clearsave-HQOHppco831In2QP1ffOxkwgVwZuF8.png",
                alt: "High-fidelity designs",
                height: 280, // Increased height
              }}
            />
            <ProcessStep
              number="05"
              title="Testing & Iteration"
              description="Ran 2 testing rounds on onboarding and goal-setting flows. Simplified steps and improved success rate dramatically."
              image={{
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/User%20Testing-AR8ia3y7gK86S647mPQG2ZDlGs3TLh.png",
                alt: "User testing results",
                height: 280, // Increased height
              }}
            />
          </ol>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-blue-400">Results & Impact</h2>
        <div className="bg-gray-900 p-6 rounded-xl mb-12">
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">⬆️</span>
              <span>Reduced signup abandonment from 35% to 12%</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">♻️</span>
              <span>Increased goal-setting adoption from 45% → 72%</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✅</span>
              <span>Transfer success rate up 30%</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">🔐</span>
              <span>ID verification abandonment dropped from 20% → 8%</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">💡</span>
              <span>Users reported a 40% boost in clarity and confidence</span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-blue-400">What I Learned</h2>
        <div className="bg-gray-900 p-6 rounded-xl mb-12">
          <p className="text-gray-300 mb-4">
            Designing for financial tools is about more than function. It's about trust, emotional reassurance, and
            simplicity.
          </p>
          <p className="text-gray-300">
            The most powerful changes weren't flashy—they were removing steps, clarifying instructions, and anticipating
            confusion.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-blue-400">Next Steps</h2>
        <div className="bg-gray-900 p-6 rounded-xl mb-12">
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Add voice navigation + accessibility support</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Expand for Android + tablet users</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Introduce milestone badges and gamified savings tools</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Improve smart tips and financial advice UX</span>
            </li>
          </ul>
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
