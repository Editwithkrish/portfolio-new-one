"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const services = [
    {
        title: "Full-Stack Development",
        description: "End-to-end web application development using modern frameworks like Next.js, React, and Node.js",
        deliverables: [
            "Custom web applications",
            "E-commerce platforms",
            "SaaS products",
            "API integration",
            "Database design",
        ],
        icon: "⚡",
    },
    {
        title: "Video Editing & Production",
        description: "Professional video editing for creators, brands, and agencies with focus on engagement and retention",
        deliverables: [
            "YouTube content editing",
            "Social media clips",
            "Performance marketing videos",
            "Esports content",
            "Color grading & sound design",
        ],
        icon: "🎬",
    },
    {
        title: "UI/UX Design",
        description: "Designing intuitive and beautiful user interfaces that blend form with function",
        deliverables: [
            "Website design",
            "Mobile app design",
            "Design systems",
            "Prototyping",
            "User research",
        ],
        icon: "🎨",
    },
    {
        title: "Content Strategy & Growth",
        description: "Building content systems and growth strategies for startups and communities",
        deliverables: [
            "Social media strategy",
            "Content calendar",
            "Brand positioning",
            "Community building",
            "Analytics & optimization",
        ],
        icon: "📈",
    },
]

export function Services() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

    return (
        <section id="services" className="relative py-32 px-8 md:px-12 bg-[#050505]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16"
            >
                <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">OFFERINGS</p>
                <h2 className="font-sans text-3xl md:text-5xl font-light italic">Services</h2>
                <p className="font-sans text-base text-white/60 mt-4 max-w-2xl">
                    What I can help you build, create, and grow
                </p>
            </motion.div>

            <div className="max-w-6xl grid md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="border border-white/10 p-8 hover:bg-white/5 transition-all cursor-pointer group"
                        onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    >
                        <div className="flex items-start gap-4 mb-4">
                            <span className="text-4xl">{service.icon}</span>
                            <div className="flex-1">
                                <h3 className="font-sans text-2xl font-light tracking-tight mb-2 group-hover:text-white transition-colors">
                                    {service.title}
                                </h3>
                                <p className="font-sans text-sm text-white/70 leading-relaxed">{service.description}</p>
                            </div>
                        </div>

                        {/* Expandable Deliverables */}
                        <motion.div
                            initial={false}
                            animate={{
                                height: expandedIndex === index ? "auto" : 0,
                                opacity: expandedIndex === index ? 1 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div className="pt-4 border-t border-white/10 mt-4">
                                <p className="font-mono text-xs text-muted-foreground tracking-wider mb-3">DELIVERABLES</p>
                                <ul className="space-y-2">
                                    {service.deliverables.map((item, i) => (
                                        <li key={i} className="font-sans text-sm text-white/80 flex items-start gap-2">
                                            <span className="text-muted-foreground mt-1">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* Click to expand indicator */}
                        <div className="mt-4 flex items-center gap-2">
                            <span className="font-mono text-[10px] text-muted-foreground tracking-wider uppercase">
                                {expandedIndex === index ? "Click to collapse" : "Click to expand"}
                            </span>
                            <motion.span
                                animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-muted-foreground"
                            >
                                ↓
                            </motion.span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="border-t border-white/10 mt-24" />
        </section>
    )
}
