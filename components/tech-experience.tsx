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
        company: "BaseBrain",
        period: "Jul 2025 – Present",
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
        period: "Jul 2025 – Present",
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
        period: "Aug 2025 – Present",
        description: [
            "Building the club's online identity and startup-focused content",
            "Promoting events, initiatives, and founder stories",
        ],
        logo: "/logos/iec.jpg",
    },
]

const technicalExperience: ExperienceItem[] = [
    {
        title: "SDE Intern",
        company: "Alexa Hire",
        period: "Sep 2025 – Oct 2025",
        description: [
            "Worked on software development tasks in a production environment",
            "Gained hands-on experience with real-world engineering workflows",
        ],
    },
    {
        title: "Freelancer",
        company: "Independent",
        period: "Jun 2022 – Present",
        description: [
            "Built full-stack web applications for clients using Next.js, MongoDB, MERN",
            "Worked with over 5+ media agecy and over 100+ happy clients",
            "Delivered end-to-end solutions from design to deployment",
        ],
    },
]

const campusRoles: ExperienceItem[] = [
    {
        title: "Design Team Member",
        company: "GeeksforGeeks MIT-ADT",
        period: "Aug 2024 – Jul 2025",
        description: ["Graphic design for events, socials, and promotions"],
        logo: "/logos/gfg.png",
    },
    {
        title: "Social Media Team Member",
        company: "Institution's Innovation Council, MIT ADT",
        period: "Aug 2024 – Jul 2025",
        description: [
            "Video editing & cinematography for innovation initiatives",
            "Helped promote entrepreneurship and tech culture on campus",
        ],
        logo: "/logos/iic.png",
    },
]

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="border-t border-white/10 py-8 md:py-10"
        >
            <div className="grid md:grid-cols-12 gap-6">
                {/* Left: Time & Logo */}
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

export function TechExperience() {
    return (
        <section className="relative py-32 px-8 md:px-12 bg-[#050505]">
            {/* Current Roles */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-12"
            >
                <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">PRESENT</p>
                <h2 className="font-sans text-3xl md:text-5xl font-light italic">Current Roles</h2>
            </motion.div>

            <div className="max-w-5xl mb-24">
                {currentRoles.map((item, index) => (
                    <ExperienceCard key={index} item={item} index={index} />
                ))}
            </div>

            {/* Technical Experience */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-12"
            >
                <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">ENGINEERING</p>
                <h2 className="font-sans text-3xl md:text-5xl font-light italic">Technical Experience</h2>
            </motion.div>

            <div className="max-w-5xl mb-24">
                {technicalExperience.map((item, index) => (
                    <ExperienceCard key={index} item={item} index={index} />
                ))}
            </div>

            {/* Campus Roles */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-12"
            >
                <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">COMMUNITY</p>
                <h2 className="font-sans text-3xl md:text-5xl font-light italic">Campus & Community Roles</h2>
            </motion.div>

            <div className="max-w-5xl">
                {campusRoles.map((item, index) => (
                    <ExperienceCard key={index} item={item} index={index} />
                ))}
            </div>

            {/* Bottom Border */}
            <div className="border-t border-white/10 mt-12" />
        </section>
    )
}
