"use client"

import { motion } from "framer-motion"

const timelineEvents = [
    {
        year: "2025",
        title: "Co-Founded BaseBrain",
        role: "Co-Founder & COO",
        description: "Leading operations, execution strategy, and product coordination in an AI-powered development platform.",
        type: "startup",
    },
    {
        year: "2025",
        title: "SDE Intern at Alexa Hire",
        role: "Software Development Engineer",
        description: "Worked on production software development tasks and real-world engineering workflows.",
        type: "tech",
    },
    {
        year: "2025",
        title: "Freelance Web Developer",
        role: "Full-Stack Developer",
        description: "Built scalable web applications using Next.js, MongoDB, and MERN stack for various clients.",
        type: "tech",
    },
    {
        year: "2025",
        title: "Video Editor at Ad Sharks Media",
        role: "Freelance Video Editor",
        description: "Created performance-driven content for brands with focus on retention and conversion.",
        type: "media",
    },
    {
        year: "2025",
        title: "Assistant Video Editor at Rooter.gg",
        role: "Video Editor",
        description: "Edited esports and high-volume gaming content in a fast-paced production environment.",
        type: "media",
    },
    {
        year: "2024",
        title: "Social Media Leadership Roles",
        role: "Community Leader",
        description: "Leading content strategy for Cloud Computing Club and Innovation & Entrepreneurship Club at MIT ADT.",
        type: "community",
    },
    {
        year: "2024",
        title: "Hackathon Achievements",
        role: "Competitive Developer",
        description: "2nd place at VIT Software Hackathon, 3rd place at COEP Game Development Hackathon.",
        type: "achievement",
    },
    {
        year: "2023",
        title: "Built Finscan & Codemaxxers",
        role: "Co-Founder",
        description: "Launched financial technology solutions and developer community platforms.",
        type: "startup",
    },
    {
        year: "2022-2023",
        title: "Video Editor at GrowitBuddy",
        role: "Long-term Video Editor",
        description: "Edited educational and growth-focused content, building strong storytelling fundamentals.",
        type: "media",
    },
    {
        year: "2022",
        title: "Started at MIT ADT University",
        role: "B.Tech Computer Science",
        description: "Began journey in Computer Science with focus on software development and innovation.",
        type: "education",
    },
]

const typeColors = {
    startup: "bg-[#2563eb]",
    tech: "bg-[#10b981]",
    media: "bg-[#f59e0b]",
    community: "bg-[#8b5cf6]",
    achievement: "bg-[#ec4899]",
    education: "bg-white",
}

export function Timeline() {
    return (
        <section id="timeline" className="relative py-32 px-8 md:px-12 bg-[#050505]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16"
            >
                <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">JOURNEY</p>
                <h2 className="font-sans text-3xl md:text-5xl font-light italic">Timeline</h2>
            </motion.div>

            <div className="max-w-5xl">
                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-24 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

                    {timelineEvents.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-36 pb-16 group"
                        >
                            {/* Year Badge */}
                            <div className="absolute left-0 md:left-0 top-0 w-20 text-right md:text-left">
                                <span className="font-mono text-xs tracking-widest text-muted-foreground">
                                    {event.year}
                                </span>
                            </div>

                            {/* Dot */}
                            <div
                                className={`absolute left-[-4px] md:left-[92px] top-1 w-2 h-2 ${typeColors[event.type as keyof typeof typeColors]
                                    } rounded-full group-hover:scale-150 transition-transform`}
                            />

                            {/* Content */}
                            <div className="border border-white/10 p-6 hover:bg-white/5 transition-colors">
                                <h3 className="font-sans text-xl md:text-2xl font-light mb-1">{event.title}</h3>
                                <p className="font-mono text-xs text-muted-foreground tracking-wide mb-3">{event.role}</p>
                                <p className="font-sans text-sm text-white/70 leading-relaxed">{event.description}</p>

                                {/* Type Badge */}
                                <div className="mt-4">
                                    <span
                                        className={`inline-block px-2 py-1 ${typeColors[event.type as keyof typeof typeColors]
                                            }/20 border border-${event.type === 'education' ? 'white' : typeColors[event.type as keyof typeof typeColors]}/30 rounded text-[10px] font-mono tracking-wider uppercase`}
                                    >
                                        {event.type}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="border-t border-white/10 mt-12" />
        </section>
    )
}
