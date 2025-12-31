"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import GlassSurface from "@/components/GlassSurface"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Client Work", href: "#client-work" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 left-0 right-0 z-50 px-4 md:px-6 pointer-events-none"
      >
        <div className="max-w-5xl mx-auto pointer-events-auto">
          <GlassSurface
            height="auto"
            width="100%"
            borderRadius={100}
            backgroundOpacity={0.1}
            blur={15}
            borderWidth={0.05}
            className={`transition-all duration-500 ${isScrolled ? "scale-95 translate-y-2 opacity-100" : "scale-100 opacity-90"}`}
          >
            <nav className="flex items-center justify-between w-full px-6 py-3">
              {/* Logo */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
                className="group flex items-center gap-2"
              >
                <span className="font-mono text-xs tracking-widest text-foreground font-semibold">KJ</span>
                <span className="w-1 h-1 rounded-full bg-accent group-hover:scale-150 transition-transform duration-300" />
              </a>

              {/* Desktop Navigation */}
              <ul className="hidden md:flex items-center gap-6">
                {navLinks.map((link, index) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="group relative font-mono text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      <span className="text-accent mr-1">{String(index + 1).padStart(2, '0')}</span>
                      {link.label.toUpperCase()}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
                    </button>
                  </li>
                ))}
              </ul>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
                aria-label="Toggle menu"
              >
                <motion.span
                  animate={isMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  className="w-6 h-px bg-foreground origin-center"
                />
                <motion.span
                  animate={isMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                  className="w-6 h-px bg-foreground"
                />
                <motion.span
                  animate={isMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  className="w-6 h-px bg-foreground origin-center"
                />
              </button>
            </nav>
          </GlassSurface>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.href)}
                  className="group text-4xl font-sans tracking-tight text-foreground"
                >
                  <span className="text-accent font-mono text-sm mr-2">{String(index + 1).padStart(2, '0')}</span>
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
