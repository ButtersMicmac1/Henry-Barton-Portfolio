"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Linkedin, Calendar, FileText } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Projects", href: "#work", id: "work" },
    { name: "Contact", href: "#contact", id: "contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      // Close menu first
      setIsOpen(false)

      // Then scroll to section
      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth" })
      }, 100)
    }
  }

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, link: { href: string; id: string }) => {
    e.preventDefault()

    if (isHomePage) {
      // If on homepage, scroll to section
      scrollToSection(link.id)
    } else {
      // If not on homepage, navigate to homepage with hash
      setIsOpen(false)
      router.push(`/${link.href}`)
    }
  }

  const iconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2, rotate: 5 },
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link
          href={isHomePage ? "#home" : "/#home"}
          className="text-2xl font-bold text-white"
          onClick={(e) => isHomePage && handleNavigation(e, { href: "#home", id: "home" })}
        >
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 px-2 py-1 rounded-md">HB</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
              onClick={(e) => handleNavigation(e, link)}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <motion.a
            href="https://calendly.com/henrybarton/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300"
            aria-label="Schedule a meeting"
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
          >
            <Calendar size={24} />
          </motion.a>
          <motion.a
            href="https://drive.google.com/file/d/1Kfk-LW3fZfIuxrUyhyXSR4eKhkbsJ_1n/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300"
            aria-label="View CV"
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
          >
            <FileText size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/hbarton"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
          >
            <Linkedin size={24} />
          </motion.a>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <motion.a
            href="https://calendly.com/henrybarton/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300"
            aria-label="Schedule a meeting"
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
          >
            <Calendar size={24} />
          </motion.a>
          <motion.a
            href="https://drive.google.com/file/d/1Kfk-LW3fZfIuxrUyhyXSR4eKhkbsJ_1n/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300"
            aria-label="View CV"
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
          >
            <FileText size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/hbarton"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
          >
            <Linkedin size={24} />
          </motion.a>
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className="container mx-auto px-4 py-4"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center mb-4"
                >
                  <button
                    className="text-gray-300 hover:text-white py-2 transition-colors duration-300 text-lg w-full"
                    onClick={() => {
                      if (isHomePage) {
                        scrollToSection(link.id)
                      } else {
                        setIsOpen(false)
                        router.push(`/${link.href}`)
                      }
                    }}
                  >
                    {link.name}
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
