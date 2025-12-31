"use client"

import { motion } from "framer-motion"

const focusAreas = [
    "Scaling BaseBrain as a startup operator",
    "Building high-impact tech products",
    "Creating systems that blend engineering + media + growth",
    "Working with people who move fast and think long-term",
]

const achievements = [
    {
        title: "2nd Place",
        event: "VIT Software Hackathon",
        description: "Competitive software development",
    },
    {
        title: "3rd Place",
        event: "COEP Game Development Hackathon",
        description: "Game development competition",
    },
]

const products = [
    {
        name: "BaseBrain.dev",
        description: "AI-powered development platform",
        role: "Co-Founder & COO",
    },
    {
        name: "Finscan",
        description: "Financial technology solution",
        role: "Co-Founder",
    },
    {
        name: "Codemaxxers",
        description: "Developer community platform",
        role: "Co-Founder",
    },
]

export function FocusSection() {
    return (
        <section className="relative py-32 px-8 md:px-12 bg-[#050505]">
            {/* Current Focus */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16"
            >
                <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">NOW</p>
                <h2 className="font-sans text-3xl md:text-5xl font-light italic mb-12">What I'm Focused On</h2>

                <div className="max-w-4xl space-y-6">
                    {focusAreas.map((area, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex gap-4 items-start"
                        >
                            <span className="font-mono text-xs text-muted-foreground mt-1.5 min-w-[40px]">
                                0{index + 1}
                            </span>
                            <p className="font-sans text-lg md:text-xl font-light text-white/90">
                                {area}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>


            {/* Achievements */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-32"
            >
                <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">RECOGNITION</p>
                <h2 className="font-sans text-3xl md:text-5xl font-light italic mb-12">Hackathon Achievements</h2>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="border border-white/10 p-8 hover:border-white/30 transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#2563eb]/5 rounded-full blur-3xl group-hover:bg-[#2563eb]/10 transition-colors" />
                            <p className="font-sans text-4xl md:text-5xl font-light mb-2 relative z-10">{achievement.title}</p>
                            <p className="font-mono text-sm text-muted-foreground tracking-wide mb-2 relative z-10">{achievement.event}</p>
                            <p className="font-sans text-sm text-white/70 relative z-10">{achievement.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Bottom Border */}
            <div className="border-t border-white/10 mt-24" />
        </section>
    )
}
