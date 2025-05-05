"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FileText, Laptop, Palette, Zap, Monitor, ComputerIcon as Desktop, ExternalLink } from "lucide-react"

export default function ResumatrixPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Resumatrix
        </h1>
        <p className="text-xl text-gray-300 mb-4">
          (AI-Powered Resume Builder) A responsive web app that simplifies resume creation through smart AI suggestions,
          customization, and intuitive design.
        </p>

        <div className="flex gap-3 mb-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm">
            <Monitor className="w-4 h-4 mr-2 text-purple-400" />
            Responsive Website
          </div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm">
            <Desktop className="w-4 h-4 mr-2 text-purple-400" />
            Hardware
          </div>
        </div>

        <a
          href="https://www.figma.com/design/3FDbqEQeSX6fStPGV97qN7/AI-Resume-Builder?node-id=0-1&t=Cn0G9SSeBlduRcoM-1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 mb-8 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-md"
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
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Resumatrix%20Poster.png-EgEH9zNLQezoup3a0KQDlHnmtV1yny.jpeg"
            alt="Resumatrix App Screenshots"
            fill
            className="object-contain"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-purple-400">Overview</h2>
            <p className="text-gray-300 mb-4">
              Resumatrix is a responsive web app designed to make resume creation fast, personalized, and stress-free.
              Users can generate high-quality resumes with the help of AI while keeping full control over tone,
              structure, and formatting.
            </p>
            <p className="text-gray-300">
              My design focused on clarity, empowerment, and ease of use — especially for job seekers who aren't
              confident with resume writing.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-purple-400">My Role</h2>
            <p className="text-gray-300 mb-4">I led the full UX/UI design process, including:</p>
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              <li>Research interviews with job seekers</li>
              <li>Persona creation and journey mapping</li>
              <li>Paper sketches & low-fidelity wireframes</li>
              <li>Responsive, high-fidelity UI design</li>
              <li>Usability testing and iteration</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-purple-400">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <FeatureCard
            icon={<FileText className="w-8 h-8 text-purple-400" />}
            title="AI Resume Builder"
            description="Smart suggestions tailored to user input"
          />
          <FeatureCard
            icon={<Palette className="w-8 h-8 text-purple-400" />}
            title="Customization Options"
            description="Control over tone, format, and layout"
          />
          <FeatureCard
            icon={<Zap className="w-8 h-8 text-purple-400" />}
            title="Secure Input"
            description="Simple and private user-controlled forms"
          />
          <FeatureCard
            icon={<Laptop className="w-8 h-8 text-purple-400" />}
            title="Download & Share"
            description="Export resumes easily in multiple formats"
          />
        </div>

        {/* Paper wireframes - Increased height for better visibility */}
        <div className="relative w-full h-[350px] md:h-[450px] mb-12 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Resumatrix%20Paper%20Frames.jpg-vGl2GncLXOFTcc0Unm9RWHnWPbVt6C.jpeg"
            alt="Paper Wireframes"
            fill
            className="object-contain"
          />
        </div>

        <h2 className="text-2xl font-bold mb-6 text-purple-400">Who We Designed For</h2>
        <p className="text-gray-300 mb-4">
          Our core users were early-career professionals and career switchers. Both groups needed resume help without
          feeling overwhelmed or boxed into a template.
        </p>
        {/* User personas - Increased height for better visibility */}
        <div className="relative w-full h-[350px] md:h-[450px] mb-12 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/User%20Personas%20Resumatrix-ehbMtZY3IXWV5TnRzf3efCCywVyqEr.png"
            alt="User Personas - Avery Johnson and Miguel Torres"
            fill
            className="object-contain"
          />
        </div>

        <h2 className="text-2xl font-bold mb-6 text-purple-400">Design Process</h2>
        <div className="bg-gray-900 p-6 rounded-xl mb-12">
          <ol className="space-y-10">
            <ProcessStep
              number="01"
              title="Research & Discovery"
              description="We interviewed users and reviewed competing resume tools. Most were too rigid, lacked AI guidance, or didn't feel empowering."
            />
            <ProcessStep
              number="02"
              title="Sketching & Wireframes"
              description="Mapped key user journeys, then sketched paper flows and designed clean, low-fidelity wireframes."
              image={{
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Resumatrix%20Lofi-VS6e3EIso2brrEPrWkdSsrQhFi9XBQ.png",
                alt: "Low-Fidelity Wireframes",
                height: 280, // Increased height
              }}
            />
            <ProcessStep
              number="03"
              title="Visual Design"
              description="Developed a calming, minimal UI with a focus on smart layout and simplicity. Created responsive screens with clear hierarchy and thoughtful spacing."
              image={{
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Resumatrix%20HiFi.png-jOoQbujQKNdu3IJrzw7C9ZMlbib1Kk.jpeg",
                alt: "High-Fidelity Mockups",
                height: 280, // Increased height
              }}
            />
            <ProcessStep
              number="04"
              title="Testing & Iteration"
              description="Round 1: Users asked for more clarity during onboarding → Added tooltips and step descriptions. Round 2: Users wanted better customization and control → Introduced tone/style options and made AI suggestions editable."
              image={{
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website%20Flow%20Chart%20Resumatrix-LWxjgp3SamCBUqE2gJTYkKpOuTRKFk.png",
                alt: "Website Flow Chart",
                height: 280, // Increased height
              }}
            />
          </ol>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-purple-400">Results & Impact</h2>
        <div className="bg-gray-900 p-6 rounded-xl mb-12">
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✅</span>
              <span>More users completed the resume-building process</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✅</span>
              <span>Reduced drop-off due to better onboarding guidance</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✅</span>
              <span>Users reported feeling more confident in their resume quality</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✅</span>
              <span>Higher success rate for downloading and sharing resumes</span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-purple-400">What I Learned</h2>
        <div className="bg-gray-900 p-6 rounded-xl mb-12">
          <p className="text-gray-300">
            AI is powerful, but clarity builds trust. The most helpful UX work was making sure users understood what the
            AI was doing — and that they could always take the wheel. Simplicity + transparency = confidence.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-purple-400">Next Steps</h2>
        <div className="bg-gray-900 p-6 rounded-xl mb-12">
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">📱</span>
              <span>Enhance mobile responsiveness and testing</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">🧠</span>
              <span>Add deeper personalization for specific industries or job types</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">🌍</span>
              <span>Improve accessibility with keyboard navigation and screen reader support</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">💬</span>
              <span>Include real examples and resume-writing tips throughout the journey</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300">
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
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-900 text-purple-300 font-bold">
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
