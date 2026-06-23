"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import BentoCard from "@/portfolio/home/BentoCard";

const CATEGORIES = ["All", "Podcast", "Short-Form", "Long-Form"];

function ShortFormRow({ items }) {
    return (
        <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs text-accent-primary uppercase tracking-[0.2em]">Short-Form</span>
                <div className="flex-1 h-px bg-border/30"></div>
                <span className="font-mono text-xs text-text-secondary">{items.length} videos</span>
            </div>
            <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                {items.map((vid, idx) => (
                    <BentoCard
                        key={vid.id}
                        delay={idx * 0.06}
                        className="!p-0 relative shrink-0 snap-start"
                        style={{ width: "min(220px, 70vw)", height: "min(390px, 65vh)" }}
                    >
                        <iframe
                            src={
                                vid.type === "youtube-short"
                                    ? `https://www.youtube.com/embed/${vid.video_id}`
                                    : vid.embed_url
                            }
                            title={vid.title}
                            className="absolute inset-0 w-full h-full border-0"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            loading="lazy"
                            scrolling="no"
                        ></iframe>
                    </BentoCard>
                ))}
            </div>
        </div>
    );
}

function PodcastRow({ items }) {
    return (
        <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs text-accent-primary uppercase tracking-[0.2em]">Podcasts</span>
                <div className="flex-1 h-px bg-border/30"></div>
                <span className="font-mono text-xs text-text-secondary">{items.length} episodes</span>
            </div>
            <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                {items.map((pod, idx) => (
                    <BentoCard
                        key={pod.id}
                        delay={idx * 0.06}
                        className="!p-0 flex flex-col shrink-0 snap-start"
                        style={{ width: "min(380px, 85vw)" }}
                    >
                        <div className="relative w-full aspect-video">
                            <iframe
                                src={`https://www.youtube.com/embed/${pod.video_id}`}
                                title={pod.title}
                                className="absolute inset-0 w-full h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                        <div className="p-4">
                            <h3 className="font-serif text-sm md:text-base font-bold text-text-primary line-clamp-1 mb-1" title={pod.title}>
                                {pod.title}
                            </h3>
                            <p className="text-text-secondary text-xs font-mono tracking-wide">{pod.author}</p>
                        </div>
                    </BentoCard>
                ))}
            </div>
        </div>
    );
}

function LongFormRow({ items }) {
    return (
        <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs text-accent-primary uppercase tracking-[0.2em]">Long-Form</span>
                <div className="flex-1 h-px bg-border/30"></div>
                <span className="font-mono text-xs text-text-secondary">{items.length} videos</span>
            </div>
            <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                {items.map((project, idx) => (
                    <BentoCard
                        key={project.id}
                        delay={idx * 0.06}
                        variant="accent"
                        className="!p-0 flex flex-col shrink-0 snap-start"
                        style={{ width: "min(480px, 85vw)" }}
                    >
                        <div className="relative w-full aspect-video">
                            <iframe
                                src={`https://www.youtube.com/embed/${project.video_id}`}
                                title={project.title}
                                className="absolute inset-0 w-full h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                        <div className="p-5">
                            <h3 className="font-serif text-base md:text-lg font-bold text-text-primary line-clamp-2 mb-1" title={project.title}>
                                {project.title}
                            </h3>
                            <p className="text-text-secondary text-xs font-mono tracking-wide">{project.author}</p>
                        </div>
                    </BentoCard>
                ))}
            </div>
        </div>
    );
}

export default function ProjectsClient({ projects = [] }) {
    const [filter, setFilter] = useState("All");

    const podcasts = projects.filter(p => p.category === "Podcast");
    const shortForm = projects.filter(p => p.category === "Short-Form");
    const longForm = projects.filter(p => p.category === "Long-Form");

    const showPodcasts = filter === "All" || filter === "Podcast";
    const showShortForm = filter === "All" || filter === "Short-Form";
    const showLongForm = filter === "All" || filter === "Long-Form";

    const categoryCounts = {
        "All": projects.length,
        "Podcast": podcasts.length,
        "Short-Form": shortForm.length,
        "Long-Form": longForm.length,
    };

    return (
        <section className="w-full py-8 px-4 md:px-8">
            <div className="w-full max-w-[1280px] mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-baseline gap-4 mb-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="font-serif text-3xl md:text-[2.618rem] font-bold text-text-primary"
                        >
                            My <span className="text-accent-purple italic">Work</span>
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-text-secondary text-base md:text-lg max-w-2xl leading-[1.618] font-light mb-6"
                    >
                        A curated collection of podcasts, short-form content, and long-form stories — all edited, color graded, and brought to life.
                    </motion.p>

                    {/* Filter Pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap gap-2"
                    >
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-5 py-2 rounded-full text-xs font-mono font-semibold tracking-[0.15em] uppercase transition-all border ${
                                    filter === cat
                                        ? "bg-accent text-white border-accent"
                                        : "bg-secondary text-text-secondary border-border hover:border-accent hover:text-accent"
                                }`}
                            >
                                {cat} ({categoryCounts[cat]})
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* Content Rows */}
                {showShortForm && <ShortFormRow items={shortForm} />}
                {showPodcasts && <PodcastRow items={podcasts} />}
                {showLongForm && <LongFormRow items={longForm} />}
            </div>
        </section>
    );
}
