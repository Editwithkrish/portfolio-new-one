"use client"

import { motion } from "framer-motion"
import { Code2, Database, Palette, Video, Layout, Sparkles, Server, Globe, Layers, Zap } from "lucide-react"

const skills = {
    technical: [
        { name: "Next.js", icon: Globe, color: "#000000" },
        { name: "React", icon: Layers, color: "#61DAFB" },
        { name: "TypeScript", icon: Code2, color: "#3178C6" },
        { name: "Node.js", icon: Server, color: "#339933" },
        { name: "MongoDB", icon: Database, color: "#47A248" },
        { name: "PostgreSQL", icon: Database, color: "#4169E1" },
        { name: "TailwindCSS", icon: Palette, color: "#06B6D4" },
        { name: "Framer Motion", icon: Zap, color: "#FF0055" },
        { name: "Three.js", icon: Sparkles, color: "#000000" },
        { name: "WebGL", icon: Sparkles, color: "#990000" },
    ],
    creative: [
        { name: "Premiere Pro", icon: Video, color: "#9999FF" },
        { name: "After Effects", icon: Video, color: "#9999FF" },
        { name: "DaVinci Resolve", icon: Video, color: "#FF5733" },
        { name: "Final Cut Pro", icon: Video, color: "#000000" },
        { name: "Photoshop", icon: Palette, color: "#31A8FF" },
        { name: "Figma", icon: Layout, color: "#F24E1E" },
        { name: "Motion Graphics", icon: Sparkles, color: "#FF6B6B" },
        { name: "Color Grading", icon: Palette, color: "#FFD700" },
        { name: "Sound Design", icon: Zap, color: "#1DB954" },
        { name: "Cinematography", icon: Video, color: "#FFD700" },
    ],
    soft: [
        { name: "Team Leadership", icon: Sparkles, color: "#FFFFFF" },
        { name: "Project Management", icon: Layout, color: "#FFFFFF" },
        { name: "Content Strategy", icon: Code2, color: "#FFFFFF" },
        { name: "Growth Marketing", icon: Zap, color: "#FFFFFF" },
        { name: "Storytelling", icon: Sparkles, color: "#FFFFFF" },
        { name: "Communication", icon: Globe, color: "#FFFFFF" },
    ],
}

export function Skills() {
    return (
        <section id="skills" className="relative py-32 px-8 md:px-12 bg-[#050505]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16"
            >
                <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">EXPERTISE</p>
                <h2 className="font-sans text-3xl md:text-5xl font-light italic">Skills & Technologies</h2>
            </motion.div>

            <div className="max-w-7xl mx-auto space-y-16">
                {/* Technical Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="font-sans text-xl md:text-2xl font-light mb-8 flex items-center gap-3">
                        <span className="w-2 h-2 bg-[#2563eb] rounded-full" />
                        Technical Stack
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {skills.technical.map((skill, index) => {
                            const Icon = skill.icon
                            return (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: `0 0 20px ${skill.color}40`,
                                        borderColor: `${skill.color}80`
                                    }}
                                    className="group relative bg-[#0A0A0A] border border-white/10 rounded-lg p-6 flex flex-col items-center justify-center gap-3 cursor-default transition-all duration-300 hover:bg-[#111111]"
                                >
                                    {/* Icon */}
                                    <div className="relative">
                                        <div
                                            className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                                            style={{ backgroundColor: skill.color }}
                                        />
                                        <Icon
                                            className="w-8 h-8 relative z-10 transition-colors duration-300"
                                            style={{ color: skill.color }}
                                        />
                                    </div>

                                    {/* Name */}
                                    <span className="font-mono text-xs text-white/70 group-hover:text-white transition-colors text-center">
                                        {skill.name}
                                    </span>

                                    {/* Hover Indicator */}
                                    <div
                                        className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                        style={{ backgroundColor: skill.color }}
                                    />
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>

                {/* Creative Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 className="font-sans text-xl md:text-2xl font-light mb-8 flex items-center gap-3">
                        <span className="w-2 h-2 bg-[#10b981] rounded-full" />
                        Creative Tools
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {skills.creative.map((skill, index) => {
                            const Icon = skill.icon
                            return (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: `0 0 20px ${skill.color}40`,
                                        borderColor: `${skill.color}80`
                                    }}
                                    className="group relative bg-[#0A0A0A] border border-white/10 rounded-lg p-6 flex flex-col items-center justify-center gap-3 cursor-default transition-all duration-300 hover:bg-[#111111]"
                                >
                                    {/* Icon */}
                                    <div className="relative">
                                        <div
                                            className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                                            style={{ backgroundColor: skill.color }}
                                        />
                                        <Icon
                                            className="w-8 h-8 relative z-10 transition-colors duration-300"
                                            style={{ color: skill.color }}
                                        />
                                    </div>

                                    {/* Name */}
                                    <span className="font-mono text-xs text-white/70 group-hover:text-white transition-colors text-center">
                                        {skill.name}
                                    </span>

                                    {/* Hover Indicator */}
                                    <div
                                        className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                        style={{ backgroundColor: skill.color }}
                                    />
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>

                {/* Soft Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h3 className="font-sans text-xl md:text-2xl font-light mb-8 flex items-center gap-3">
                        <span className="w-2 h-2 bg-white/60 rounded-full" />
                        Professional Skills
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {skills.soft.map((skill, index) => {
                            const Icon = skill.icon
                            return (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0 0 20px rgba(255,255,255,0.2)",
                                        borderColor: "rgba(255,255,255,0.4)"
                                    }}
                                    className="group relative bg-[#0A0A0A] border border-white/10 rounded-lg p-6 flex flex-col items-center justify-center gap-3 cursor-default transition-all duration-300 hover:bg-[#111111]"
                                >
                                    {/* Icon */}
                                    <div className="relative">
                                        <div
                                            className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-white"
                                        />
                                        <Icon
                                            className="w-7 h-7 relative z-10 text-white/60 group-hover:text-white transition-colors duration-300"
                                        />
                                    </div>

                                    {/* Name */}
                                    <span className="font-mono text-xs text-white/70 group-hover:text-white transition-colors text-center">
                                        {skill.name}
                                    </span>

                                    {/* Hover Indicator */}
                                    <div
                                        className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                                    />
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>

            <div className="border-t border-white/10 mt-24" />
        </section>
    )
}
