"use client"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import Image from "next/image"

const videoWorks = [
    {
        title: "Cinemastic",
        client: "YouTube Content Creator",
        type: "Film Analysis & Critique",
        count: "15+ Videos",
        thumbnail: "/video-thumbnails/cinemastic.jpg",
        year: "2024",
    },
    {
        title: "Prakhar Ke Pravachan",
        client: "YouTube Content Creator",
        type: "Educational Commentary",
        count: "20+ Videos",
        thumbnail: "/video-thumbnails/prakhar.jpg",
        year: "2024",
    },
    {
        title: "Ad Sharks Media",
        client: "Marketing Agency",
        type: "Performance Marketing",
        count: "30+ Projects",
        thumbnail: "/video-thumbnails/adsharks.jpg",
        year: "2025",
    },
    {
        title: "Rooter.gg",
        client: "Esports Platform",
        type: "Gaming & Esports Content",
        count: "100+ Edits",
        thumbnail: "/video-thumbnails/rooter.jpg",
        year: "2025",
    },
]

export function VideoWorks() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springX = useSpring(mouseX, { stiffness: 150, damping: 20 })
    const springY = useSpring(mouseY, { stiffness: 150, damping: 20 })

    const handleMouseMove = (e: React.MouseEvent) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect()
            mouseX.set(e.clientX - rect.left)
            mouseY.set(e.clientY - rect.top)
        }
    }

    return (
        <section id="client-work" className="relative py-32 px-8 md:px-12 md:py-24">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-24"
            >
                <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">CLIENT WORK</p>
                <h2 className="font-sans text-3xl md:text-5xl font-light italic">My Past Work</h2>
                <p className="font-sans text-base text-white/60 mt-4 max-w-2xl">
                    Video editing projects across creators, agencies, and esports platforms
                </p>
            </motion.div>

            {/* Video Works List */}
            <div ref={containerRef} onMouseMove={handleMouseMove} className="relative">
                {videoWorks.map((work, index) => (
                    <motion.div
                        key={work.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="relative border-t border-white/10 py-8 md:py-12"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <a
                            href="#"
                            data-cursor-hover
                            className="group flex flex-col md:flex-row md:items-center justify-between gap-4"
                        >
                            {/* Year */}
                            <span className="font-mono text-xs text-muted-foreground tracking-widest order-1 md:order-none">
                                {work.year}
                            </span>

                            {/* Title & Client */}
                            <div className="flex-1">
                                <motion.h3
                                    className="font-sans text-3xl md:text-5xl lg:text-6xl font-light tracking-tight group-hover:text-white/70 transition-colors duration-300"
                                    animate={{
                                        x: hoveredIndex === index ? 20 : 0,
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    {work.title}
                                </motion.h3>
                                <p className="font-mono text-xs text-muted-foreground tracking-wide mt-2">
                                    {work.client} • {work.type}
                                </p>
                            </div>

                            {/* Count Badge */}
                            <div className="flex gap-2 flex-wrap order-2 md:order-none">
                                <span className="font-mono text-[10px] tracking-wider px-3 py-1 border border-white/20 rounded-full text-muted-foreground">
                                    {work.count}
                                </span>
                            </div>
                        </a>
                    </motion.div>
                ))}

                {/* Floating Thumbnail Preview */}
                <motion.div
                    className="absolute pointer-events-none z-50 w-80 h-48 md:w-96 md:h-56 overflow-hidden rounded-lg border border-white/20"
                    style={{
                        x: springX,
                        y: springY,
                        translateX: "-50%",
                        translateY: "-320%",
                    }}
                    animate={{
                        opacity: hoveredIndex !== null ? 1 : 0,
                        scale: hoveredIndex !== null ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.2 }}
                >
                    {hoveredIndex !== null && (
                        <motion.div
                            className="relative w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900"
                            initial={{ scale: 1.2 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* Placeholder for video thumbnail */}
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 border border-white/20 rounded-full flex items-center justify-center">
                                        <svg
                                            className="w-6 h-6 text-white/60"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                        </svg>
                                    </div>
                                    <p className="font-mono text-xs text-white/40 tracking-wider">
                                        {videoWorks[hoveredIndex].title}
                                    </p>
                                </div>
                            </div>
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-[#10b981]/10 mix-blend-overlay" />
                        </motion.div>
                    )}
                </motion.div>
            </div>

            {/* Bottom Border */}
            <div className="border-t border-white/10 mt-12" />
        </section>
    )
}
