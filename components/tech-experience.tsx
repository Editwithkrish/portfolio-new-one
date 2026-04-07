"use client"

import { motion } from "framer-motion"
import type React from "react"

interface ExperienceItem {
    title: string
    company: string
    period: string
    description: string[]
    logo?: string
}

const currentRoles: ExperienceItem[] = [
    {
        title: "Co-Founder & COO",
        company: "BuildShot",
        period: "Jul 2025  Present",
        description: [
            "Leading operations, execution strategy, and internal systems",
            "Working closely with product & tech teams to ship fast and scale efficiently",
            "Driving growth-focused decision-making in an early-stage startup",
        ],
        logo: "/logos/basebrain.png",
    },
    {
        title: "Social Media Lead",
        company: "Cloud Computing Club, MIT ADT University",
        period: "Jul 2025  Present",
        description: [
            "Managing content strategy, branding, and digital presence",
            "Driving engagement through technical + educational content",
            "Leading a creative team for consistent output",
        ],
        logo: "/logos/ccc.jpg",
    },
    {
        title: "Social Media Lead",
        company: "Innovation & Entrepreneurship Club, MIT ADT",
        period: "Aug 2025  Present",
        description: [
            "Building the club's online identity and startup-focused content",
            "Promoting events, initiatives, and founder stories",
        ],
        logo: "/logos/iec.jpg",
    },
]

const pastExperience: ExperienceItem[] = [
    {
        title: "SDE Intern",
        company: "Alexa Hire",
        period: "Sep 2025  Oct 2025",
        description: [
            "Worked on software development tasks in a production environment",
        ],
        logo: "https://alexahire.com/images/alexa-hire-logo.jpg",
    },
    {
        title: "Freelancer",
        company: "Independent",
        period: "Jun 2022  Present",
        description: [
            "Built full-stack web applications for clients using Next.js, MongoDB, MERN",
            "Delivered end-to-end solutions from design to deployment",
        ],
    },
    {
        title: "Social Media Lead",
        company: "Innovation & Entrepreneurship Club, MIT ADT",
        period: "Aug 2024  Present",
        description: [
            "Managing content strategy and building the club's online identity",
        ],
        logo: "/logos/iec.jpg",
    },
]

const achievements = [
    {
        title: "2nd Place",
        event: "VIT Software Hackathon",
    },
    {
        title: "3rd Place",
        event: "COEP Game Development Hackathon",
    },
]

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="border-t border-white/5 py-6 md:py-8"
        >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                    {/* Logo */}
                    <div className="w-12 h-12 border border-white/10 rounded flex items-center justify-center bg-white/5 overflow-hidden min-w-[48px]">
                        {item.logo ? (
                            <img
                                src={item.logo}
                                alt={`${item.company} logo`}
                                className="w-full h-full object-contain p-2 filter grayscale brightness-200"
                            />
                        ) : (
                            <span className="font-mono text-[8px] text-muted-foreground uppercase">{item.company.substring(0, 3)}</span>
                        )}
                    </div>
                    <div>
                        <h3 className="font-sans text-xl font-light tracking-tight">{item.title}</h3>
                        <p className="font-mono text-xs text-muted-foreground tracking-wide">{item.company}</p>
                    </div>
                </div>
                <div className="md:text-right">
                    <p className="font-mono text-xs tracking-widest text-muted-foreground">{item.period}</p>
                </div>
            </div>
        </motion.div>
    )
}

export function TechExperience() {
    return (
        <section className="relative py-24 px-8 md:px-12 bg-[#050505]">
            <div className="max-w-5xl mx-auto">
                {/* Current */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-4">LEADERSHIP</p>
                    <h2 className="font-sans text-3xl md:text-4xl font-light italic">Current Roles</h2>
                </motion.div>

                <div className="mb-20">
                    {currentRoles.map((item, index) => (
                        <ExperienceCard key={index} item={item} index={index} />
                    ))}
                </div>

                {/* Achievements */}
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-4">RECOGNITION</p>
                            <h2 className="font-sans text-3xl md:text-4xl font-light italic">Achievements</h2>
                        </motion.div>
                        <div className="space-y-4">
                            {achievements.map((item, index) => (
                                <div key={index} className="flex gap-4 items-baseline border-b border-white/5 pb-4">
                                    <span className="font-mono text-xs text-accent">{item.title}</span>
                                    <span className="font-sans text-sm text-white/70">{item.event}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Past Experience merged */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-4">EXPERIENCE</p>
                            <h2 className="font-sans text-3xl md:text-4xl font-light italic">Previous</h2>
                        </motion.div>
                        <div className="space-y-4">
                            {pastExperience.map((item, index) => (
                                <div key={index} className="flex justify-between items-baseline border-b border-white/5 pb-4">
                                    <div>
                                        <p className="font-sans text-sm text-white/90">{item.title}</p>
                                        <p className="font-mono text-[10px] text-muted-foreground">{item.company}</p>
                                    </div>
                                    <p className="font-mono text-[10px] text-muted-foreground whitespace-nowrap">{item.period.split('  ')[0]}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/5" />
        </section>
    )
}

