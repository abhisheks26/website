"use client";

import { useRef } from "react";
import BentoCard from "./BentoCard";
import ScrollButtons from "./ScrollButtons";
import { MEDIA_BASE } from "@/lib/constants";

const skills = [
    { title: "Precision Editing", description: "Knowing exactly where and how to cut to maintain seamless flow.", icon: "✂️" },
    { title: "Color Grading", description: "Enhancing mood and visual appeal with professional grading.", icon: "🎨" },
    { title: "Podcasts & Trailers", description: "Multi-cam podcasts and high-impact intro trailers.", icon: "🎙️" },
    { title: "Short-Form Content", description: "High-retention Shorts and Reels designed to maximize engagement.", icon: "📱" },
    { title: "Clip Selection", description: "Sifting through hours of footage to find the best moments.", icon: "🎯" },
    { title: "Content Strategy", description: "Retention mechanics, hook structures, and pacing for growth.", icon: "📈" },
];

const testimonials = [
    {
        id: 1,
        author: "The Content Playbook Podcast",
        videoUrl: `${MEDIA_BASE}/testimonials/TCP_Ep18_Solo_v0.2.mp4`,
        youtubeUrl: "https://www.youtube.com/watch?v=5mRRDJSsMlE",
        avatarUrl: `${MEDIA_BASE}/testimonials/tcp_avatar.jpg`,
        quote: "The real game-changer has been Sarkate. I don't just see him as an editor, but as a visionary content partner who instinctively understands our goals.",
    },
    {
        id: 2,
        author: "The Content Playbook Podcast",
        videoUrl: `${MEDIA_BASE}/testimonials/Value.mp4`,
        youtubeUrl: "https://www.youtube.com/watch?v=wW6bi-Dx3iQ",
        avatarUrl: `${MEDIA_BASE}/testimonials/tcp_avatar.jpg`,
        quote: "Sarkate's value as our lead editor is in his ability to find the right clips and stitch them together perfectly. From music selection to optimizing for YouTube retention, he is vital.",
    },
];

export default function BottomBento() {
    const testimonialsRef = useRef(null);

    return (
        <section className="w-full px-4 md:px-8">
            <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-16">

                {/* Expertise */}
                <div>
                    <div className="mb-6 flex items-baseline gap-4">
                        <h2 className="font-serif text-2xl sm:text-3xl md:text-[2.618rem] font-bold text-text-primary">
                            My <span className="text-accent-purple italic">Expertise</span>
                        </h2>
                        <span className="font-mono text-xs text-text-secondary tracking-wide">6 core skills</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                        {skills.map((skill, idx) => (
                            <BentoCard
                                key={idx}
                                delay={idx * 0.06}
                                className="flex flex-col justify-between group/skill"
                            >
                                <div className="text-xl sm:text-3xl mb-2 sm:mb-3 group-hover/skill:scale-110 transition-transform duration-300 w-fit">{skill.icon}</div>
                                <div>
                                    <h3 className="font-serif text-xs sm:text-base md:text-lg font-bold text-text-primary mb-0.5 sm:mb-1 group-hover/skill:text-accent-primary transition-colors duration-300">
                                        {skill.title}
                                    </h3>
                                    <p className="text-text-secondary text-[10px] sm:text-xs leading-relaxed">{skill.description}</p>
                                </div>
                            </BentoCard>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <div>
                    <div className="mb-6 flex items-baseline gap-4">
                        <h2 className="font-serif text-2xl sm:text-3xl md:text-[2.618rem] font-bold text-text-primary">
                            Client <span className="text-accent-purple italic">Testimonials.</span>
                        </h2>
                        <span className="font-mono text-xs text-text-secondary tracking-wide">Hear from partners</span>
                        <div className="flex-1"></div>
                        <ScrollButtons scrollRef={testimonialsRef} />
                    </div>
                    <div ref={testimonialsRef} className="flex gap-3 md:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                        {testimonials.map((testimonial, idx) => (
                            <BentoCard
                                key={testimonial.id}
                                delay={idx * 0.06}
                                variant="accent"
                                className="!p-0 flex flex-col shrink-0 snap-start"
                                style={{ width: "min(480px, 85vw)" }}
                            >
                                <div className="relative w-full aspect-video">
                                    <video
                                        src={testimonial.videoUrl}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        controls
                                        preload="metadata"
                                    />
                                </div>
                                <div className="p-3 sm:p-5 flex flex-col flex-1">
                                    <h3 className="font-serif text-sm sm:text-base md:text-lg font-bold text-text-primary mb-2 flex-1" title={testimonial.quote}>
                                        &ldquo;{testimonial.quote}&rdquo;
                                    </h3>
                                    <div className="flex items-center gap-3 mt-2">
                                        <img
                                            src={testimonial.avatarUrl}
                                            alt={`${testimonial.author} avatar`}
                                            className="w-10 h-10 rounded-full object-cover border border-accent-primary"
                                        />
                                        <div className="flex flex-col gap-0.5">
                                            <p className="text-text-secondary text-[10px] sm:text-xs font-mono tracking-wide font-bold">
                                                {testimonial.author}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </BentoCard>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
