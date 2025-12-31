"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useState, useRef } from "react"
import { Send, Mail, MapPin, Linkedin, Github, Twitter, MessageSquare, Zap } from "lucide-react"

export function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
        type: "general",
    })
    const [isSubmitted, setIsSubmitted] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const springX = useSpring(mouseX, { stiffness: 100, damping: 30 })
    const springY = useSpring(mouseY, { stiffness: 100, damping: 30 })

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.1)
        mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.1)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        // Simulate submission
        setIsSubmitted(true)
        setTimeout(() => setIsSubmitted(false), 5000)
        console.log("Form submitted:", formState)
    }

    return (
        <section
            id="contact"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative py-32 px-8 md:px-12 bg-[#050505] overflow-hidden"
        >
            {/* Interactive Background Elements */}
            <motion.div
                style={{ x: springX, y: springY }}
                className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none"
            />
            <motion.div
                style={{ x: useTransform(springX, (v) => -v), y: useTransform(springY, (v) => -v) }}
                className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none"
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16 relative z-10"
            >
                <div className="flex items-center gap-2 mb-4">
                    <span className="w-10 h-px bg-[#2563eb]" />
                    <p className="font-mono text-xs tracking-[0.3em] text-[#2563eb] uppercase">Get In Touch</p>
                </div>
                <h2 className="font-sans text-4xl md:text-6xl font-light italic mb-2">Let's start a conversation</h2>
                <p className="font-sans text-lg text-white/40 max-w-2xl">
                    Whether you have a project in mind or just want to say hi, I'm always open to new opportunities.
                </p>
            </motion.div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-16 relative z-10">
                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="md:col-span-3"
                >
                    <div className="bg-[#0A0A0A] border border-white/10 p-8 md:p-10 rounded-2xl shadow-3xl">
                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid sm:grid-cols-2 gap-8">
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            className="w-full bg-transparent border-b border-white/20 py-4 font-sans text-white focus:border-[#2563eb] transition-colors outline-none peer"
                                            required
                                        />
                                        <label className="absolute left-0 top-4 font-mono text-xs tracking-wider text-muted-foreground uppercase transition-all pointer-events-none peer-focus:-top-4 peer-valid:-top-4 peer-focus:text-[#2563eb]">
                                            Full Name
                                        </label>
                                    </div>

                                    <div className="relative group">
                                        <input
                                            type="email"
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            className="w-full bg-transparent border-b border-white/20 py-4 font-sans text-white focus:border-[#2563eb] transition-colors outline-none peer"
                                            required
                                        />
                                        <label className="absolute left-0 top-4 font-mono text-xs tracking-wider text-muted-foreground uppercase transition-all pointer-events-none peer-focus:-top-4 peer-valid:-top-4 peer-focus:text-[#2563eb]">
                                            Email Address
                                        </label>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <p className="font-mono text-[10px] tracking-widest text-[#2563eb] uppercase">I'm interested in...</p>
                                    <div className="flex flex-wrap gap-3">
                                        {['Web Dev', 'Media', 'Strategy', 'Other'].map((type) => (
                                            <button
                                                key={type}
                                                type="button"
                                                onClick={() => setFormState({ ...formState, type: type.toLowerCase() })}
                                                className={`px-6 py-2 rounded-full font-mono text-xs border transition-all ${formState.type === type.toLowerCase()
                                                    ? "bg-[#2563eb] border-[#2563eb] text-white"
                                                    : "bg-transparent border-white/10 text-white/40 hover:border-white/30"
                                                    }`}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="relative group">
                                    <textarea
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        rows={4}
                                        className="w-full bg-transparent border-b border-white/20 py-4 font-sans text-white focus:border-[#2563eb] transition-colors outline-none resize-none peer"
                                        required
                                    />
                                    <label className="absolute left-0 top-4 font-mono text-xs tracking-wider text-muted-foreground uppercase transition-all pointer-events-none peer-focus:-top-4 peer-valid:-top-4 peer-focus:text-[#2563eb]">
                                        Your Message
                                    </label>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="group w-full md:w-auto px-10 py-4 bg-[#2563eb] hover:bg-[#1e40af] text-white rounded-lg flex items-center justify-center gap-3 transition-colors duration-300"
                                >
                                    <span className="font-mono text-sm tracking-widest uppercase">Send Message</span>
                                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </motion.button>
                            </form>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-[400px] flex flex-col items-center justify-center text-center space-y-6"
                            >
                                <div className="w-20 h-20 bg-[#2563eb]/10 rounded-full flex items-center justify-center">
                                    <Zap className="w-10 h-10 text-[#2563eb]" />
                                </div>
                                <div>
                                    <h3 className="font-sans text-2xl font-semibold mb-2">Message Sent!</h3>
                                    <p className="font-sans text-white/40">Thank you for reaching out. I'll get back to you shortly.</p>
                                </div>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="font-mono text-xs text-[#2563eb] hover:underline"
                                >
                                    Send another one
                                </button>
                            </motion.div>
                        )}
                    </div>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="md:col-span-2 space-y-12"
                >
                    <div className="space-y-8">
                        <div className="group flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#2563eb]/10 group-hover:border-[#2563eb]/30 transition-all">
                                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-[#2563eb] transition-colors" />
                            </div>
                            <div>
                                <p className="font-mono text-[10px] tracking-widest text-[#2563eb] uppercase mb-1">Email Me</p>
                                <a href="mailto:krishna@example.com" className="font-sans text-lg hover:text-[#2563eb] transition-colors">
                                    krishna@example.com
                                </a>
                            </div>
                        </div>

                        <div className="group flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#2563eb]/10 group-hover:border-[#2563eb]/30 transition-all">
                                <MapPin className="w-5 h-5 text-muted-foreground group-hover:text-[#2563eb] transition-colors" />
                            </div>
                            <div>
                                <p className="font-mono text-[10px] tracking-widest text-[#2563eb] uppercase mb-1">Location</p>
                                <p className="font-sans text-lg">Pune, India</p>
                            </div>
                        </div>

                        <div className="group flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#2563eb]/10 group-hover:border-[#2563eb]/30 transition-all">
                                <MessageSquare className="w-5 h-5 text-muted-foreground group-hover:text-[#2563eb] transition-colors" />
                            </div>
                            <div>
                                <p className="font-mono text-[10px] tracking-widest text-[#2563eb] uppercase mb-1">Social</p>
                                <div className="flex gap-4 mt-1">
                                    <a href="#" className="text-muted-foreground hover:text-white transition-colors" title="LinkedIn"><Linkedin className="w-5 h-5" /></a>
                                    <a href="#" className="text-muted-foreground hover:text-white transition-colors" title="GitHub"><Github className="w-5 h-5" /></a>
                                    <a href="#" className="text-muted-foreground hover:text-white transition-colors" title="Twitter"><Twitter className="w-5 h-5" /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 bg-gradient-to-br from-[#2563eb]/10 to-transparent border border-[#2563eb]/20 rounded-2xl">
                        <h4 className="font-sans text-lg font-semibold mb-2 flex items-center gap-2">
                            <Zap className="w-4 h-4 text-[#2563eb]" />
                            Current Focus
                        </h4>
                        <p className="font-sans text-sm text-white/50 leading-relaxed">
                            Always scouting for innovative brands and high-energy projects where I can apply my dual-expertise in engineering and media.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

