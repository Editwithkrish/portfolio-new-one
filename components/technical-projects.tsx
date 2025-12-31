"use client"

import { motion } from "framer-motion"
import { ExternalLink, Globe, Code2, Layout } from "lucide-react"
import Image from "next/image"

const technicalProjects = [
    {
        title: "AlexaHire",
        description: "A comprehensive recruitment platform streamlining the hiring process for modern enterprises.",
        url: "https://alexahire.com/",
        tags: ["Next.js", "TypeScript", "Recruitment", "SaaS"],
        image: "/alexahire.png",
        color: "#2563eb"
    },
    {
        title: "EL Innovative",
        description: "Digital presence for EL Innovative, showcasing cutting-edge technological solutions and services.",
        url: "https://www.elinnovative.com/",
        tags: ["React", "Business", "Innovation", "Web"],
        image: "/elinnovative.png",
        color: "#10b981"
    },
    {
        title: "Interiors by Nayana",
        description: "A premium interior design portfolio showcasing high-end residential and commercial projects.",
        url: "https://interiors-by-nayana.vercel.app/",
        tags: ["Next.js", "Design", "Portfolio", "Framer Motion"],
        image: "/interiors-nayana.png",
        color: "#f59e0b"
    },
    {
        title: "PP Woods",
        description: "E-commerce and catalog platform for premium timber and wood products with a focus on quality.",
        url: "https://www.ppwoods.in/",
        tags: ["Next.js", "E-commerce", "Manufacturing"],
        image: "/ppwoods.png",
        color: "#8b4513"
    },
    {
        title: "Life Map",
        description: "A life planning and goal tracking application designed to help users visualize their future path.",
        url: "https://life-map-xi.vercel.app/",
        tags: ["Web App", "Visualization", "Tool"],
        image: "/lifemap.png",
        color: "#7c3aed"
    },
    {
        title: "Lernova",
        description: "An educational platform transformed to provide seamless online learning experiences for students.",
        url: "https://lernova.vercel.app/",
        tags: ["EdTech", "LMS", "Educational"],
        image: "/lernova.png",
        color: "#db2777"
    }
]

export function TechnicalProjects() {
    return (
        <section id="technical-projects" className="relative py-32 px-8 md:px-12 bg-[#050505]">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-24"
            >
                <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">TECHNICAL SHOWCASE</p>
                <h2 className="font-sans text-3xl md:text-5xl font-light italic mb-4">Built Products</h2>
                <p className="font-sans text-base text-white/60 max-w-2xl">
                    A collection of high-performance web applications, e-commerce platforms, and digital solutions I've architected and developed.
                </p>
            </motion.div>

            {/* Projects Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {technicalProjects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="group relative bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:border-white/20"
                    >
                        {/* Image/Thumbnail Container */}
                        <div className="relative aspect-video overflow-hidden">
                            <div
                                className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"
                            />
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
                            />

                            {/* Hover Icon Overlays */}
                            <motion.div
                                className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white hover:text-black transition-all"
                                >
                                    <Globe className="w-5 h-5" />
                                </a>
                            </motion.div>
                        </div>

                        {/* Project Content */}
                        <div className="p-6 space-y-4">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="font-sans text-xl font-semibold text-white group-hover:text-white/90">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-2 mt-2">
                                        {project.tags.slice(0, 2).map((tag) => (
                                            <span key={tag} className="font-mono text-[10px] tracking-wider uppercase text-muted-foreground bg-white/5 px-2 py-0.5 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-white/20"
                                    style={{ color: project.color }}
                                >
                                    <Layout className="w-5 h-5" />
                                </div>
                            </div>

                            <p className="font-sans text-sm text-white/60 line-clamp-2">
                                {project.description}
                            </p>

                            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-mono text-xs tracking-widest text-[#2563eb] hover:text-[#2563eb]/80 transition-colors inline-flex items-center gap-2 group/link"
                                >
                                    VIEW SITE
                                    <ExternalLink className="w-3 h-3 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                                </a>
                                <Code2 className="w-4 h-4 text-white/20" />
                            </div>
                        </div>

                        {/* Bottom Color Accent */}
                        <div
                            className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                            style={{ backgroundColor: project.color }}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />
        </section>
    )
}
