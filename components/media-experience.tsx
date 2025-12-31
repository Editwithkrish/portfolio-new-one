"use client"

import { motion } from "framer-motion"
import type React from "react"

interface MediaExperience {
    title: string
    company: string
    period: string
    description: string[]
}

const mediaExperience: MediaExperience[] = [
    {
        title: "Freelance Video Editor",
        company: "Ad Sharks Media",
        period: "Jul 2025 – Sep 2025",
        description: [
            "Edited performance-driven content for brands and agencies",
            "Focused on retention, pacing, and conversion-friendly storytelling",
        ],
    },
    {
        title: "Assistant Video Editor",
        company: "Rooter.gg",
        period: "Feb 2025 – Jun 2025",
        description: [
            "Edited esports and high-volume content",
            "Worked in a fast-paced, deadline-heavy production pipeline",
        ],
    },
    {
        title: "Video Editor",
        company: "GrowitBuddy",
        period: "Feb 2022 – Jul 2023",
        description: [
            "Long-term role editing educational and growth-focused content",
            "Built strong fundamentals in storytelling, motion, and pacing",
        ],
    },
]

const pastWorks = [
    {
        client: "Cinemastic",
        type: "YouTube Content Creator",
        projectCount: "15+ Videos",
        description: "Edited cinematic analysis and film critique content",
    },
    {
        client: "Prakhar Ke Pravachan",
        type: "YouTube Content Creator",
        projectCount: "20+ Videos",
        description: "Edited educational and commentary content focused on engagement",
    },
    {
        client: "Ad Sharks Media",
        type: "Marketing Agency",
        projectCount: "30+ Projects",
        description: "Performance marketing videos for various brands",
    },
    {
        client: "Rooter.gg",
        type: "Esports Platform",
        projectCount: "100+ Edits",
        description: "High-volume gaming and esports content production",
    },
]

function MediaExperienceCard({ item, index }: { item: MediaExperience; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="border-t border-white/10 py-8 md:py-10"
        >
            <div className="grid md:grid-cols-12 gap-6">
                {/* Left: Time & Logo placeholder */}
                <div className="md:col-span-3 space-y-4">
                    <p className="font-mono text-xs tracking-widest text-muted-foreground">{item.period}</p>
                    {/* Logo Placeholder */}
                    <div className="w-16 h-16 border border-white/20 rounded flex items-center justify-center bg-white/5">
                        <span className="font-mono text-[8px] text-muted-foreground text-center px-2">LOGO</span>
                    </div>
                </div>

                {/* Right: Content */}
                <div className="md:col-span-9 space-y-4">
                    <div>
                        <h3 className="font-sans text-xl md:text-2xl font-light tracking-tight mb-1">{item.title}</h3>
                        <p className="font-mono text-sm text-muted-foreground tracking-wide">{item.company}</p>
                    </div>

                    <ul className="space-y-2">
                        {item.description.map((desc, i) => (
                            <li key={i} className="font-sans text-sm md:text-base text-white/70 leading-relaxed flex gap-3">
                                <span className="text-muted-foreground mt-1.5">—</span>
                                <span>{desc}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}

export function MediaExperience() {
    return (
        <section className="relative py-32 px-8 md:px-12 bg-[#050505]">
            {/* Media Experience */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-12"
            >
                <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">CREATIVE</p>
                <h2 className="font-sans text-3xl md:text-5xl font-light italic">Media & Creative Experience</h2>
            </motion.div>

            <div className="max-w-5xl mb-24">
                {mediaExperience.map((item, index) => (
                    <MediaExperienceCard key={index} item={item} index={index} />
                ))}
            </div>

            {/* Past Works Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-12"
            >
                <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">PORTFOLIO</p>
                <h2 className="font-sans text-3xl md:text-5xl font-light italic">Past Works & Collaborations</h2>
            </motion.div>

            <div className="max-w-5xl">
                <div className="grid md:grid-cols-2 gap-6">
                    {pastWorks.map((work, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="border border-white/10 p-6 group hover:bg-white/5 transition-colors duration-300"
                        >
                            {/* Logo Placeholder */}
                            <div className="w-12 h-12 border border-white/20 rounded flex items-center justify-center bg-white/5 mb-4">
                                <span className="font-mono text-[8px] text-muted-foreground">LOGO</span>
                            </div>

                            <h3 className="font-sans text-xl md:text-2xl font-light tracking-tight mb-1">{work.client}</h3>
                            <p className="font-mono text-xs text-muted-foreground tracking-wide mb-2">{work.type}</p>
                            <div className="inline-block px-3 py-1 border border-white/20 rounded-full mb-4">
                                <span className="font-mono text-[10px] tracking-wider text-muted-foreground">{work.projectCount}</span>
                            </div>
                            <p className="font-sans text-sm text-white/70 leading-relaxed">{work.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Skills Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-24 mb-12"
            >
                <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">TOOLKIT</p>
                <h2 className="font-sans text-3xl md:text-5xl font-light italic mb-8">Creative Tools & Skills</h2>
                <div className="flex flex-wrap gap-2">
                    {[
                        "Adobe Premiere Pro",
                        "After Effects",
                        "DaVinci Resolve",
                        "Final Cut Pro",
                        "Motion Graphics",
                        "Color Grading",
                        "Sound Design",
                        "Cinematography",
                        "Storytelling",
                        "Social Media Content",
                    ].map((skill) => (
                        <span
                            key={skill}
                            className="font-mono text-[10px] tracking-wider px-3 py-1.5 border border-white/20 rounded-full text-muted-foreground hover:bg-white/5 transition-colors"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* Bottom Border */}
            <div className="border-t border-white/10 mt-12" />
        </section>
    )
}
