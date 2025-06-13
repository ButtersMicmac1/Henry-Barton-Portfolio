"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Linkedin, Calendar, FileText, Smartphone, Palette, Lightbulb, Users, Instagram } from "lucide-react"
import { Link as ScrollLink } from "react-scroll"
import Navbar from "@/components/navbar"
import SocialIcon from "@/components/social-icon"
import { Button } from "@/components/ui/button"
import AboutMe from "@/components/about-me"
import Loading from "@/components/loading"
import InteractiveShapes from "@/components/InteractiveShapes"
import AnimatedBoxes from "@/components/AnimatedBoxes"
import ProjectCard from "@/components/project-card"
import GitFitCodeCard from "@/components/gitfitcode-card"
import { scrollToHash } from "@/lib/scroll-to-hash"
import ContactForm from "@/components/contact-form"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      setMounted(true)
      const timer = setTimeout(() => {
        setLoading(false)
      }, 2000) // Show loading for 2 seconds

      return () => clearTimeout(timer)
    } catch (error) {
      console.error("Error in Home component useEffect:", error)
      setLoading(false)
    }
  }, [])

  // Handle hash navigation when the component mounts
  useEffect(() => {
    try {
      if (!loading) {
        scrollToHash()
      }
    } catch (error) {
      console.error("Error in scrollToHash:", error)
    }
  }, [loading])

  if (!mounted) return null
  if (loading) return <Loading />

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <InteractiveShapes />

      {/* Hero Section with Animated Boxes */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBoxes />
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3,
                },
              },
            }}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  },
                },
              }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                Hey{" "}
              </span>
              <motion.span
                className="inline-block"
                initial={{ rotate: 0 }}
                animate={{
                  rotate: [0, 15, -5, 15, 0],
                  transition: {
                    duration: 1.2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.4, 0.6, 1],
                    repeat: 0,
                  },
                }}
              >
                👋
              </motion.span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                {" "}
                It's Henry Barton
              </span>
            </motion.h1>
            <motion.h2
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  },
                },
              }}
              className="text-xl md:text-2xl mb-8 text-gray-300"
            >
              🚀 Designer | Futurist | Innovator
            </motion.h2>
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  },
                },
              }}
              className="flex flex-wrap justify-center gap-4"
            >
              <ScrollLink to="work" smooth={true} duration={500}>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                  View Projects
                </Button>
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-purple-500 text-white hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Contact Me
                </Button>
              </ScrollLink>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <AboutMe />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                My Expertise
              </span>
              <span className="ml-2 text-white">🛠️</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <ServiceCard
                icon={<Smartphone className="w-10 h-10 text-purple-500" />}
                title="Mobile-First Product Design"
                description="End-to-end UX/UI for intuitive, user-centered mobile apps that balance business goals with user needs."
              />
              <ServiceCard
                icon={<Lightbulb className="w-10 h-10 text-pink-500" />}
                title="AI-Integrated Experiences"
                description="Designing clear, human-first interfaces for AI-powered tools—from personalized wellness to smart productivity."
              />
              <ServiceCard
                icon={<Palette className="w-10 h-10 text-purple-500" />}
                title="Pitch & Brand Design"
                description="Visually compelling pitch decks, brand assets, and interfaces that communicate value and drive engagement."
              />
              <ServiceCard
                icon={<Users className="w-10 h-10 text-pink-500" />}
                title="Cross-Functional Collaboration"
                description="Working closely with product, dev, and marketing teams to align design strategy with execution and outcomes."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                What I've Built
              </span>
              <span className="ml-2 text-white">🏗️</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <ProjectCard
                title="Threadline — Async Team Dashboard"
                description="A modern async dashboard designed for remote teams to share updates, celebrate wins, and stay in sync—without the Slack noise or robotic standup bots."
                tags={["Web App", "UX/UI", "Design Systems", "Remote Work", "Dashboard"]}
                slug="threadline"
                imageSrc="/images/threadline-cover.png"
                liveUrl="https://threadline-sync.vercel.app/"
              />
              <GitFitCodeCard />
              <ProjectCard
                title="ClearSave – Fintech Savings App"
                description="Mobile-first app for goal-based saving with secure bank linking and real-time progress tracking."
                tags={["iOS", "Fintech", "UX/UI", "Design Strategy"]}
                slug="clearsave"
                imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Clear%20Save%20Port-MdbW3GeipJZfMkVaT0g5tN7ndDXvCD.png"
              />
              <ProjectCard
                title="Lunara – AI Mental Wellness App"
                description="Mindfulness app powered by AI personalization, featuring mood tracking and guided exercises."
                tags={["AI", "Mental Health", "Personalization", "Mobile Design"]}
                slug="lunara"
                imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lunara%20Poster-ExKsLHRTup5hgVRlyvIDWUvtTdgzxL.png"
              />
              <ProjectCard
                title="xResumatrix – AI Resume Builder"
                description="Responsive AI-powered web app that guides users through creating custom resumes with smart tone control."
                tags={["AI", "Web App", "Responsive Design", "UX Writing"]}
                slug="resumatrix"
                imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Resumatrix%20Poster.png-EgEH9zNLQezoup3a0KQDlHnmtV1yny.jpeg"
              />
              <ProjectCard
                title="Zero AI – Seed Pitch Deck"
                description="A high-impact pitch deck that helped secure $3M+ in funding by clearly communicating product vision, design value, and strategic positioning."
                tags={["Pitch Deck", "Strategic Design", "Visual Storytelling", "Product Thinking"]}
                slug="zero-ai"
                imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slide.%201-Mwu9mm3KkhrokuyMw9TFpgoZJG66tr.png"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Ping Me
              </span>
              <span className="ml-2 text-white">🚀</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <ContactForm />
              <div className="mt-6 text-center">
                <p className="text-gray-400 mb-2">Prefer to schedule a meeting?</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="https://calendly.com/henrybarton/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule a Meeting
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1ATUQi6ytCrbMiFlwA9xWYl-aacw1Qgpf/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    View CV
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer with Social Links */}
      <footer className="py-12 bg-gradient-to-t from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <SocialIcon icon={<Linkedin />} href="https://www.linkedin.com/in/hbarton" label="LinkedIn" />
            <SocialIcon icon={<Instagram />} href="https://www.instagram.com/henry_barton/" label="Instagram" />
          </div>
          <div className="text-center text-gray-500 text-sm">
            <ContactEmail />
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ icon, title, description }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: 90 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <div
      ref={ref}
      className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300 text-center md:text-left"
    >
      <motion.div
        className="mb-4 flex justify-center md:justify-start"
        variants={iconVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

function ContactEmail() {
  return (
    <div className="mt-2">
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=bartonhenry15@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-400 hover:text-purple-300"
      >
        bartonhenry15@gmail.com
      </a>
    </div>
  )
}
