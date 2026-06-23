"use client";

import { useRef } from "react";
import BentoCard from "./BentoCard";
import ScrollButtons from "./ScrollButtons";

export default function WorkBento() {
    const reelsRef = useRef(null);
    const podcastsRef = useRef(null);
    const longFormRef = useRef(null);

    const reels = [
        { embedUrl: "https://www.instagram.com/p/DEfrR7Myql0/embed", id: "DEfrR7Myql0" },
        { embedUrl: "https://www.instagram.com/p/DQooRjmgHfN/embed", id: "DQooRjmgHfN" },
        { embedUrl: "https://www.instagram.com/p/DMAw-SgvsrD/embed", id: "DMAw-SgvsrD" },
    ];

    const shorts = [
        { title: "Karan Johar Revealed This Secret Company", videoId: "sWk0bdQ3Ft0" },
        { title: "Why Nikhil Kamath can't reach Tier 3 India", videoId: "rQWwPVhSse8" },
        { title: "Samay Raina Turned the Jokes on Them!", videoId: "pYoKzyQEMQQ" },
    ];

    const podcasts = [
        { title: "You should leave India ASAP ft. Ravi Handa @desifirepodcast", author: "Kachori Capitalists Podcast", videoId: "moPSxspMENo" },
        { title: "Best vs Worst YouTube Jobs To Start In 2026 | TCP #33", author: "The Content Playbook Podcast", videoId: "zLA84HToqb0" },
        { title: "How He Earns ₹500,000/Month Shooting YouTube Videos ft. @SurajBoddu | TCP #16", author: "The Content Playbook Podcast", videoId: "MVO65md_ND8" },
        { title: "This Company Makes CRORES Predicting Blockbusters | TCP #26", author: "The Content Playbook Podcast", videoId: "wKqqJa41g2g" },
        { title: "How Shark Tank Found HIM on Instagram w/ Sahib Aggarwal | TCP #31", author: "The Content Playbook Podcast", videoId: "0sCb_FuU_Vs" },
        { title: "Thousands Of Indian Families Have Stopped Sending Kids To School", author: "Kachori Capitalists Podcast", videoId: "iGrDpC7Tx4w" },
    ];

    const longForm = [
        { title: "Hero Destini 125 vs Suzuki Access 2025 | Top 125cc Scooter You Can Buy", channel: "Point55 Media", videoId: "lKb-13SIlNk" },
        { title: "Day in the Life of a SaaS Founder: Meeting Customer IRL", channel: "Travel With Vedant", videoId: "PWfF1w_h5EE" },
    ];

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
                                    src={vid.embedUrl}
                                    title={`Reel ${vid.id}`}
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
                                key={vid.videoId}
                                delay={(reels.length + idx) * 0.06}
                                className="!p-0 relative shrink-0 snap-start"
                                style={{ width: "min(220px, 70vw)", height: "min(390px, 65vh)" }}
                            >
                                <iframe
                                    src={`https://www.youtube.com/embed/${vid.videoId}`}
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
                                key={pod.videoId}
                                delay={idx * 0.06}
                                className="!p-0 flex flex-col shrink-0 snap-start"
                                style={{ width: "min(380px, 85vw)" }}
                            >
                                <div className="relative w-full aspect-video">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${pod.videoId}`}
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
                                key={project.videoId}
                                delay={idx * 0.06}
                                variant="accent"
                                className="!p-0 flex flex-col shrink-0 snap-start"
                                style={{ width: "min(480px, 85vw)" }}
                            >
                                <div className="relative w-full aspect-video">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${project.videoId}`}
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
                                    <p className="text-text-secondary text-[10px] sm:text-xs font-mono tracking-wide">{project.channel}</p>
                                </div>
                            </BentoCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
