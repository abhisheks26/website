"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import BentoCard from "@/portfolio/home/BentoCard";

const CATEGORIES = ["All", "Podcast", "Short-Form", "Long-Form"];

const ALL_PROJECTS = [
    // ── Podcasts ──
    { category: "Podcast", title: "Why a VFX Company is Producing India's Most Expensive Film Ramayana | TCP Ep#35", author: "The Content Playbook Podcast", videoId: "5mRRDJSsMlE", type: "youtube" },
    { category: "Podcast", title: "Putting Each Other On the Spot (Things Got Uncomfortable) | TCP #34", author: "The Content Playbook Podcast", videoId: "wW6bi-Dx3iQ", type: "youtube" },
    { category: "Podcast", title: "You should leave India ASAP ft. Ravi Handa @desifirepodcast", author: "Kachori Capitalists Podcast", videoId: "moPSxspMENo", type: "youtube" },
    { category: "Podcast", title: "Best vs Worst YouTube Jobs To Start In 2026 | TCP #33", author: "The Content Playbook Podcast", videoId: "zLA84HToqb0", type: "youtube" },
    { category: "Podcast", title: "How He Earns ₹500,000/Month Shooting YouTube Videos ft. @SurajBoddu | TCP #16", author: "The Content Playbook Podcast", videoId: "MVO65md_ND8", type: "youtube" },
    { category: "Podcast", title: "This Company Makes CRORES Predicting Blockbusters | TCP #26", author: "The Content Playbook Podcast", videoId: "wKqqJa41g2g", type: "youtube" },
    { category: "Podcast", title: "How Shark Tank Found HIM on Instagram w/ Sahib Aggarwal | TCP #31", author: "The Content Playbook Podcast", videoId: "0sCb_FuU_Vs", type: "youtube" },
    { category: "Podcast", title: "Thousands Of Indian Families Have Stopped Sending Kids To School", author: "Kachori Capitalists Podcast", videoId: "iGrDpC7Tx4w", type: "youtube" },

    // ── Long-Form ──
    { category: "Long-Form", title: "Hero Destini 125 vs Suzuki Access 2025 | Top 125cc Scooter You Can Buy", author: "Point55 Media", videoId: "lKb-13SIlNk", type: "youtube" },
    { category: "Long-Form", title: "Day in the Life of a SaaS Founder: Meeting Customer IRL", author: "Travel With Vedant", videoId: "PWfF1w_h5EE", type: "youtube" },

    // ── Short-Form ──
    { category: "Short-Form", title: "Instagram Reel", url: "https://www.instagram.com/p/DEfrR7Myql0/embed", postUrl: "https://www.instagram.com/reel/DEfrR7Myql0/", type: "instagram", account: "@thecontentplaybook_" },
    { category: "Short-Form", title: "Instagram Reel", url: "https://www.instagram.com/p/DQooRjmgHfN/embed", postUrl: "https://www.instagram.com/reel/DQooRjmgHfN/", type: "instagram", account: "@thecontentplaybook_" },
    { category: "Short-Form", title: "Karan Johar Revealed This Secret Company", videoId: "sWk0bdQ3Ft0", postUrl: "https://www.youtube.com/shorts/sWk0bdQ3Ft0", type: "youtube-short", account: "The Content Playbook" },
    { category: "Short-Form", title: "Why Nikhil Kamath can't reach Tier 3 India", videoId: "rQWwPVhSse8", postUrl: "https://www.youtube.com/shorts/rQWwPVhSse8", type: "youtube-short", account: "The Content Playbook" },
    { category: "Short-Form", title: "Instagram Reel", url: "https://www.instagram.com/p/DMAw-SgvsrD/embed", postUrl: "https://www.instagram.com/reel/DMAw-SgvsrD/", type: "instagram", account: "@thecontentplaybook_" },
    { category: "Short-Form", title: "Samay Raina Turned the Jokes on Them!", videoId: "pYoKzyQEMQQ", postUrl: "https://www.youtube.com/shorts/pYoKzyQEMQQ", type: "youtube-short", account: "The Content Playbook" },
];

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
                        key={idx}
                        delay={idx * 0.06}
                        className="!p-0 relative shrink-0 snap-start"
                        style={{ width: "min(220px, 70vw)", height: "min(390px, 65vh)" }}
                    >
                        <iframe
                            src={
                                vid.type === "youtube-short"
                                    ? `https://www.youtube.com/embed/${vid.videoId}`
                                    : vid.url
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

export default function ProjectsClient() {
    const [filter, setFilter] = useState("All");

    const podcasts = ALL_PROJECTS.filter(p => p.category === "Podcast");
    const shortForm = ALL_PROJECTS.filter(p => p.category === "Short-Form");
    const longForm = ALL_PROJECTS.filter(p => p.category === "Long-Form");

    const showPodcasts = filter === "All" || filter === "Podcast";
    const showShortForm = filter === "All" || filter === "Short-Form";
    const showLongForm = filter === "All" || filter === "Long-Form";

    const categoryCounts = {
        "All": ALL_PROJECTS.length,
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
