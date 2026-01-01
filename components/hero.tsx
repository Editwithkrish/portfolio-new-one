"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import Image from "next/image"
import { SentientSphere } from "./sentient-sphere"
import BlurText from "./BlurText"

interface HeroProps {
  onPortfolioChange?: (type: 'tech' | 'media') => void
}

export function Hero({ onPortfolioChange }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [isHoveringImage, setIsHoveringImage] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (imageRef.current && isHoveringImage) {
      const rect = imageRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      mouseX.set((e.clientX - centerX) * 0.05)
      mouseY.set((e.clientY - centerY) * 0.05)
    }
  }

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#050505]"
      onMouseMove={handleMouseMove}
    >
      {/* 3D Sphere Background */}
      <div className="absolute inset-0">
        <SentientSphere />
      </div>

      {/* Main Content */}
      <motion.div style={{ opacity, scale }} className="relative z-10 h-full flex items-center justify-center p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 max-w-6xl mx-auto">

          {/* Profile Image with Magnetic Effect */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ x: springX, y: springY }}
            onMouseEnter={() => setIsHoveringImage(true)}
            onMouseLeave={() => {
              setIsHoveringImage(false)
              mouseX.set(0)
              mouseY.set(0)
            }}
            className="relative group perspective-1000"
          >
            {/* Glowing Border Effect */}
            <div className="absolute -inset-1 bg-red-600 rounded-full opacity-75 group-hover:opacity-100 blur-xl transition-all duration-500 animate-pulse" />

            {/* Image Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl">
              <Image
                src="/profile.png"
                alt="Krishna Jha"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />


            </div>
          </motion.div>

          {/* Name and Info */}
          <div className="text-center md:text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.p
                className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-3 uppercase"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Welcome
              </motion.p>

              <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
                <BlurText
                  text="KRISHNA"
                  delay={150}
                  animateBy="letters"
                  direction="top"
                  className="inline-block bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
                />
                <br />
                <BlurText
                  text="JHA"
                  delay={150}
                  animateBy="letters"
                  direction="bottom"
                  className="inline-block text-red-600 italic font-light hover:scale-105 transition-transform duration-300"
                />
              </h1>

              <div className="space-y-2">
                <motion.p
                  className="font-sans text-lg md:text-xl text-white/80"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  Full-Stack Developer
                </motion.p>
                <motion.p
                  className="font-sans text-lg md:text-xl text-white/80"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  Creative Media Producer
                </motion.p>
                <motion.p
                  className="font-mono text-sm text-muted-foreground tracking-wide"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  Co-Founder & COO | Startup Operator
                </motion.p>
              </div>
            </motion.div>

            {/* Portfolio Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                data-cursor-hover
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(37, 99, 235, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onPortfolioChange?.('tech')}
                className="relative px-8 py-4 bg-red-600 rounded-full font-mono text-sm tracking-widest uppercase text-white shadow-lg shadow-red-600/20 hover:shadow-red-600/50 transition-all duration-500"
              >
                Tech Portfolio
                <motion.span
                  className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.button>

              <motion.button
                data-cursor-hover
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16, 185, 129, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onPortfolioChange?.('media')}
                className="relative px-8 py-4 bg-transparent border border-red-600/50 hover:bg-red-600/10 rounded-full font-mono text-sm tracking-widest uppercase text-white shadow-lg transition-all duration-500"
              >
                Media Portfolio
                <motion.span
                  className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
