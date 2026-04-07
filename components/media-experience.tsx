"use client"

import { motion } from "framer-motion"
import type React from "react"

interface MediaExperience {
    title: string
    company: string
    period: string
    description: string[]
    logo?: string
}

const mediaExperience: MediaExperience[] = [
    {
        title: "Freelance Video Editor",
        company: "Ad Sharks Media",
        period: "Jul 2025  Sep 2025",
        description: [
            "Edited performance-driven content for brands and agencies",
            "Focused on retention, pacing, and conversion-friendly storytelling",
        ],
        logo: "https://adsharksmedia.com/wp-content/uploads/2024/02/website-client-logo-size-removebg-preview-1.png",
    },
    {
        title: "Assistant Video Editor",
        company: "Rooter.gg",
        period: "Feb 2025  Jun 2025",
        description: [
            "Edited esports and high-volume content",
            "Worked in a fast-paced, deadline-heavy production pipeline",
        ],
        logo: "https://www.rooter.gg/images/rooter-logo-white.webp",
    },
    {
        title: "Video Editor",
        company: "GrowitBuddy",
        period: "Feb 2022  Jul 2023",
        description: [
            "Long-term role editing educational and growth-focused content",
            "Built strong fundamentals in storytelling, motion, and pacing",
        ],
        logo: "https://growitbuddy.com/wp-content/uploads/2023/09/Growitbuddy-Digital-Marketing-Agency-Logo1.webp",
    },
]

const pastWorks = [
    {
        client: "Cinemastic",
        type: "YouTube Content Creator",
        projectCount: "15+ Videos",
        description: "Edited cinematic analysis and film critique content",
        logo: "https://yt3.googleusercontent.com/J6DsMjHRKjTmNWjP4qcaI6stCsniYJUgj5K-jy2qSumNT3FhbIAjHhpbLr_ImAnaU85FPU805w=s900-c-k-c0x00ffffff-no-rj",
    },
    {
        client: "Prakhar Ke Pravachan",
        type: "YouTube Content Creator",
        projectCount: "20+ Videos",
        description: "Edited educational and commentary content focused on engagement",
        logo: "https://yt3.googleusercontent.com/hwSmxY9VTk182w_IaiZb_tanNCFIaZXlePToJum6d1_ajGChKUIynvhXBwyo4Au23-2NfNLObw=s900-c-k-c0x00ffffff-no-rj",
    },
    {
        client: "Ad Sharks Media",
        type: "Marketing Agency",
        projectCount: "30+ Projects",
        description: "Performance marketing videos for various brands",
        logo: "https://adsharksmedia.com/wp-content/uploads/2024/02/website-client-logo-size-removebg-preview-1.png",
    },
    {
        client: "Rooter.gg",
        type: "Esports Platform",
        projectCount: "100+ Edits",
        description: "High-volume gaming and esports content production",
        logo: "https://www.rooter.gg/images/rooter-logo-white.webp",
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
                    {/* Logo */}
                    <div className="w-16 h-16 border border-white/20 rounded flex items-center justify-center bg-white/5 overflow-hidden group">
                        {item.logo ? (
                            <img
                                src={item.logo}
                                alt={`${item.company} logo`}
                                className="w-full h-full object-contain p-2 filter grayscale brightness-200 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300"
                            />
                        ) : (
                            <span className="font-mono text-[8px] text-muted-foreground text-center px-2 uppercase">{item.company.substring(0, 3)}</span>
                        )}
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
                                <span className="text-muted-foreground mt-1.5"></span>
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
                            {/* Logo */}
                            <div className="w-12 h-12 border border-white/20 rounded flex items-center justify-center bg-white/5 mb-4 overflow-hidden">
                                {work.logo ? (
                                    <img
                                        src={work.logo}
                                        alt={`${work.client} logo`}
                                        className="w-full h-full object-contain p-2 filter grayscale brightness-200 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300"
                                    />
                                ) : (
                                    <span className="font-mono text-[8px] text-muted-foreground">LOGO</span>
                                )}
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

