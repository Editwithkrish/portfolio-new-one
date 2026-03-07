"use client"

import { motion } from "framer-motion"

export function ProfileAbout() {
    return (
        <section className="relative py-32 px-8 md:px-12 bg-[#050505]">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16"
            >
                <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">IDENTITY</p>
                <h2 className="font-sans text-3xl md:text-5xl font-light italic">About Me</h2>
            </motion.div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-5xl"
            >
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left Column - Personal Info */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-sans text-2xl md:text-3xl font-light tracking-tight mb-2">
                                Krishna Jha
                            </h3>
                            <p className="font-mono text-sm text-muted-foreground tracking-wide">
                                Co-Founder & COO @ BuildShot
                            </p>
                        </div>

                        <div className="border-t border-white/10 pt-6">
                            <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground mb-2">LOCATION</p>
                            <p className="font-sans text-lg">Pune, Maharashtra, India</p>
                        </div>

                        <div className="border-t border-white/10 pt-6">
                            <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground mb-2">EDUCATION</p>
                            <p className="font-sans text-lg">B.Tech in Computer Science</p>
                            <p className="font-mono text-sm text-muted-foreground">MIT ADT University</p>
                        </div>
                    </div>

                    {/* Right Column - Bio */}
                    <div className="space-y-6">
                        <p className="font-sans text-base md:text-lg leading-relaxed text-white/80">
                            I am currently the <span className="text-white font-medium">Co-Founder & COO at BuildShot</span>, where I handle execution, operations, and product coordination while scaling systems from the ground up.
                        </p>

                        <div className="border-t border-white/10 pt-6">
                            <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground mb-4">CORE DISCIPLINES</p>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Startup Operations",
                                    "Social Media Strategy",
                                    "UI/UX Design",
                                    "Team Leadership",
                                ].map((skill) => (
                                    <span
                                        key={skill}
                                        className="font-mono text-[10px] tracking-wider px-3 py-1.5 border border-white/20 rounded-full text-muted-foreground hover:bg-white/5 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
