"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Play, X, Info } from "lucide-react"
import { useState, useEffect } from "react"

const creativeCategories = [
    {
        title: "Valorant/BGMI Montages",
        description: "High-energy gaming montages with creative editing",
        color: "#FF4655",
        videos: [
            {
                title: "Valorant Montage #1",
                thumbnail: "/sound-wave-visualization-dark-theme.jpg",
                url: "https://youtu.be/0elWsjRavBU?si=5W8kTVU3POs-IHxz",
                duration: "3:45"
            },
            {
                title: "Valorant Montage #2",
                thumbnail: "/abstract-neural-network-visualization-dark-theme.jpg",
                url: "https://youtu.be/vimgnk5x18I?si=5BEvCR9XxxYsyFUu",
                duration: "4:20"
            }
        ]
    },
    {
        title: "Personal Edits",
        description: "Creative video edits and cinematic content",
        color: "#10b981",
        videos: [
            {
                title: "Personal Edit #1",
                thumbnail: "/abstract-memory-storage-visualization.jpg",
                url: "https://youtube.com/shorts/H0zDu9BK8pY",
                duration: "0:56"
            },
            {
                title: "Personal Edit #2",
                thumbnail: "/futuristic-data-dashboard-dark-minimal.jpg",
                url: "https://youtube.com/shorts/8wOIv389Lno",
                duration: "0:45"
            }
        ]
    },
    {
        title: "Informative Videos (Long Form)",
        description: "In-depth educational and tutorial content",
        color: "#2563eb",
        videos: [
            {
                title: "Long Form Content #1",
                thumbnail: "/alexahire.png",
                url: "https://youtu.be/RXgq-0KGas4",
                duration: "10:15"
            },
            {
                title: "Long Form Content #2",
                thumbnail: "/lernova.png",
                url: "https://youtu.be/0JSxbm2Ps_U",
                duration: "12:30"
            }
        ]
    },
    {
        title: "Informative Videos (Short Form)",
        description: "Quick tips, tricks, and educational shorts",
        color: "#f59e0b",
        videos: [
            {
                title: "Creative Short #1",
                thumbnail: "/sound-wave-visualization-dark-theme.jpg",
                url: "https://youtube.com/shorts/rqs3CAFAlok",
                duration: "0:58"
            },
            {
                title: "Creative Short #2",
                thumbnail: "/abstract-neural-network-visualization-dark-theme.jpg",
                url: "https://youtube.com/shorts/25a0Gs1V3Cc",
                duration: "0:55"
            }
        ]
    }
]

export function CreativeWorks() {
    const [hoveredVideo, setHoveredVideo] = useState<string | null>(null)
    const [selectedVideo, setSelectedVideo] = useState<{ title: string, url: string } | null>(null)

    // Disable scroll when modal is open
    useEffect(() => {
        if (selectedVideo) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [selectedVideo])

    const getVideoId = (url: string) => {
        if (url.includes('youtube.com/shorts/')) return url.split('shorts/')[1].split('?')[0]
        if (url.includes('youtube.com/watch?v=')) return url.split('v=')[1].split('&')[0]
        if (url.includes('youtu.be/')) return url.split('youtu.be/')[1].split('?')[0]
        return null
    }

    const getThumbnailUrl = (url: string) => {
        const id = getVideoId(url)
        return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : "/placeholder.jpg"
    }

    const getEmbedUrl = (url: string) => {
        const id = getVideoId(url)
        return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : url
    }

    return (
        <section className="relative py-32 px-8 md:px-12 bg-[#050505]">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-24"
            >
                <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">CREATIVE PORTFOLIO</p>
                <h2 className="font-sans text-3xl md:text-5xl font-light italic mb-4">Creative Works</h2>
                <p className="font-sans text-base text-white/60 max-w-2xl">
                    A showcase of video editing, motion graphics, and creative content production. Click any video to play directly.
                </p>
            </motion.div>

            {/* Categories Grid */}
            <div className="max-w-7xl mx-auto space-y-20">
                {creativeCategories.map((category, categoryIndex) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                        className="space-y-8"
                    >
                        {/* Category Header */}
                        <div className="flex items-start justify-between border-b border-white/10 pb-6">
                            <div>
                                <h3 className="font-sans text-2xl md:text-3xl font-light mb-2 flex items-center gap-3">
                                    <span
                                        className="w-3 h-3 rounded-full"
                                        style={{ backgroundColor: category.color }}
                                    />
                                    {category.title}
                                </h3>
                                <p className="font-mono text-sm text-muted-foreground">
                                    {category.description}
                                </p>
                            </div>
                        </div>

                        {/* Videos Grid */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {category.videos.map((video, videoIndex) => (
                                <motion.div
                                    key={video.title}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: videoIndex * 0.1 }}
                                    onMouseEnter={() => setHoveredVideo(video.title)}
                                    onMouseLeave={() => setHoveredVideo(null)}
                                    onClick={() => setSelectedVideo(video)}
                                    className="group relative bg-[#0A0A0A] border border-white/10 rounded-lg overflow-hidden hover:border-white/30 transition-all duration-500 cursor-pointer"
                                >
                                    {/* Thumbnail */}
                                    <div className="relative aspect-video overflow-hidden bg-black">
                                        <div
                                            className="absolute inset-0 bg-gradient-to-br opacity-20"
                                            style={{
                                                backgroundImage: `linear-gradient(135deg, ${category.color}40, transparent)`
                                            }}
                                        />

                                        <img
                                            src={getThumbnailUrl(video.url)}
                                            alt={video.title}
                                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                                        />

                                        {/* Play Button Overlay */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{
                                                opacity: hoveredVideo === video.title ? 1 : 0.7,
                                                scale: hoveredVideo === video.title ? 1.1 : 1
                                            }}
                                            className="absolute inset-0 flex items-center justify-center z-20"
                                        >
                                            <div
                                                className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/40"
                                                style={{
                                                    backgroundColor: `${category.color}40`
                                                }}
                                            >
                                                <Play className="w-6 h-6 text-white fill-white ml-1" />
                                            </div>
                                        </motion.div>

                                        {/* Duration Badge */}
                                        <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm px-2 py-1 rounded font-mono text-xs text-white z-20">
                                            {video.duration}
                                        </div>

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-10" />
                                    </div>

                                    {/* Video Info */}
                                    <div className="p-6">
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <h4 className="font-sans text-lg font-light text-white group-hover:text-white/90 mb-1">
                                                    {video.title}
                                                </h4>
                                                <p
                                                    className="font-mono text-xs tracking-wide"
                                                    style={{ color: category.color }}
                                                >
                                                    {category.title}
                                                </p>
                                            </div>
                                            <Play className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors flex-shrink-0" />
                                        </div>
                                    </div>

                                    {/* Hover Glow Effect */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                                        style={{
                                            background: `radial-gradient(circle at center, ${category.color}, transparent 70%)`
                                        }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                            onClick={() => setSelectedVideo(null)}
                        />

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                        >
                            <button
                                onClick={() => setSelectedVideo(null)}
                                className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-white/10 rounded-full text-white transition-colors border border-white/10"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <iframe
                                src={getEmbedUrl(selectedVideo.url)}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="border-t border-white/10 mt-24" />
        </section>
    )
}
