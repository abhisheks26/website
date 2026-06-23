"use client";

import { useRef } from "react";
import BentoCard from "./BentoCard";
import ScrollButtons from "./ScrollButtons";

export default function WorkBento({ projects = [] }) {
    const reelsRef = useRef(null);
    const podcastsRef = useRef(null);
    const longFormRef = useRef(null);

    const home = projects.filter(p => p.show_on_home);
    const reels = home.filter(p => p.type === "instagram");
    const shorts = home.filter(p => p.type === "youtube-short");
    const podcasts = home.filter(p => p.category === "Podcast");
    const longForm = home.filter(p => p.category === "Long-Form");

    return (
        <section id="work" className="w-full px-4 md:px-8">
            <div className="w-full max-w-[1280px] mx-auto">
                {/* Section Label */}
                <div className="mb-6 flex items-baseline gap-4">
                    <h2 className="font-serif text-2xl sm:text-3xl md:text-[2.618rem] font-bold text-text-primary">
                        My <span className="text-accent-purple italic">Work.</span>
                    </h2>
                </div>

                {/* Short-Form Section */}
                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="font-mono text-[10px] sm:text-xs text-accent-primary uppercase tracking-[0.15em] sm:tracking-[0.2em]">Short-Form</span>
                        <div className="flex-1 h-px bg-border/30"></div>
                        <ScrollButtons scrollRef={reelsRef} />
                    </div>
                    <div ref={reelsRef} className="flex gap-3 md:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                        {reels.map((vid, idx) => (
                            <BentoCard
                                key={vid.id}
                                delay={idx * 0.06}
                                className="!p-0 relative shrink-0 snap-start overflow-hidden"
                                style={{ width: "min(220px, 70vw)", height: "min(390px, 65vh)" }}
                            >
                                <iframe
                                    src={vid.embed_url}
                                    title={vid.title}
                                    className="absolute inset-0 w-full h-full border-0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    loading="lazy"
                                    scrolling="no"
                                ></iframe>
                            </BentoCard>
                        ))}
                        {shorts.map((vid, idx) => (
                            <BentoCard
                                key={vid.id}
                                delay={(reels.length + idx) * 0.06}
                                className="!p-0 relative shrink-0 snap-start"
                                style={{ width: "min(220px, 70vw)", height: "min(390px, 65vh)" }}
                            >
                                <iframe
                                    src={`https://www.youtube.com/embed/${vid.video_id}`}
                                    title={vid.title}
                                    className="absolute inset-0 w-full h-full border-0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </BentoCard>
                        ))}
                    </div>
                </div>

                {/* Podcasts Row */}
                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="font-mono text-[10px] sm:text-xs text-accent-primary uppercase tracking-[0.15em] sm:tracking-[0.2em]">Podcasts</span>
                        <div className="flex-1 h-px bg-border/30"></div>
                        <ScrollButtons scrollRef={podcastsRef} />
                    </div>
                    <div ref={podcastsRef} className="flex gap-3 md:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                        {podcasts.map((pod, idx) => (
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
                                <div className="p-3 sm:p-4">
                                    <h3 className="font-serif text-xs sm:text-sm md:text-base font-bold text-text-primary line-clamp-1 mb-1" title={pod.title}>
                                        {pod.title}
                                    </h3>
                                    <p className="text-text-secondary text-[10px] sm:text-xs font-mono tracking-wide">{pod.author}</p>
                                </div>
                            </BentoCard>
                        ))}
                    </div>
                </div>

                {/* Long-Form Row */}
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <span className="font-mono text-[10px] sm:text-xs text-accent-primary uppercase tracking-[0.15em] sm:tracking-[0.2em]">Long-Form</span>
                        <div className="flex-1 h-px bg-border/30"></div>
                        <ScrollButtons scrollRef={longFormRef} />
                    </div>
                    <div ref={longFormRef} className="flex gap-3 md:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                        {longForm.map((project, idx) => (
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
                                <div className="p-3 sm:p-5">
                                    <h3 className="font-serif text-sm sm:text-base md:text-lg font-bold text-text-primary line-clamp-2 mb-1" title={project.title}>
                                        {project.title}
                                    </h3>
                                    <p className="text-text-secondary text-[10px] sm:text-xs font-mono tracking-wide">{project.author}</p>
                                </div>
                            </BentoCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
