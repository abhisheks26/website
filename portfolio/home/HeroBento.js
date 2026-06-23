"use client";

import Image from "next/image";
import SocialLinks from "@/shared/SocialLinks";
import BentoCard from "./BentoCard";
import { MEDIA_BASE } from "@/lib/constants";

export default function HeroBento() {
    return (
        <section className="w-full pt-8 px-4 md:px-8">
            <div className="w-full max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-12 gap-3 sm:gap-4" style={{ gridAutoRows: "minmax(80px, auto)" }}>
                {/* Identity Card - Large */}
                <BentoCard
                    variant="accent"
                    delay={0}
                    className="!p-5 sm:!p-8 md:!p-10 flex flex-col justify-between col-span-2 md:col-span-8 md:row-span-4"
                >
                    <div>
                        <div className="inline-flex py-1 sm:py-1.5 px-2.5 sm:px-4 rounded-full bg-accent-primary/10 border border-accent-primary/15 text-accent-primary font-mono text-[8px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.25em] mb-3 sm:mb-6">
                            Creative Video Editor
                        </div>

                        <h1 className="font-serif text-xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-text-primary leading-[1.08] tracking-tight mb-3 sm:mb-6">
                            Crafting{" "}
                            <span className="text-accent-purple italic">Visual Stories.</span>
                            {" "}
                        </h1>

                        <p className="text-text-secondary text-[11px] sm:text-sm md:text-lg max-w-xl leading-[1.5] sm:leading-[1.618] font-light">
                            I transform raw footage into compelling narratives — from cinematic YouTube documentaries to viral shorts and engaging podcasts.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 sm:gap-3 mt-4 sm:mt-8">
                        <div className="text-text-primary font-semibold text-xs sm:text-base md:text-lg">Abhishek Sarkate</div>
                        <div className="flex gap-2 sm:gap-3">
                            <a href="#work" className="btn btn-primary rounded-full px-4 sm:px-6 py-2 sm:py-2.5 text-[10px] sm:text-xs tracking-wider whitespace-nowrap">
                                View Work
                            </a>
                            <a href="/blog" className="btn btn-secondary rounded-full px-4 sm:px-6 py-2 sm:py-2.5 text-[10px] sm:text-xs tracking-wider">
                                Blog
                            </a>
                        </div>
                    </div>
                </BentoCard>

                {/* Avatar Card - Based in Mumbai */}
                <BentoCard
                    delay={0.06}
                    className="!p-0 relative min-h-[260px] sm:min-h-[320px] col-span-2 md:col-span-4 md:row-span-4"
                >
                    <Image
                        src={`${MEDIA_BASE}/shared/avatar.jpg`}
                        alt="Abhishek Sarkate"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 z-10" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 60%, transparent 100%)" }}>
                        <div className="flex items-center gap-1.5 sm:gap-2" style={{ textShadow: "0 2px 8px rgba(255,255,255,0.6)" }}>
                            <i className="fa-solid fa-location-dot text-white text-xs sm:text-sm"></i>
                            <span className="font-mono text-[10px] sm:text-sm text-white font-medium uppercase tracking-[0.2em]">Based in Mumbai</span>
                        </div>
                    </div>
                </BentoCard>

                {/* Stat Card - Experience */}
                <BentoCard
                    variant="glass"
                    delay={0.12}
                    className="flex flex-col justify-between col-span-1 md:col-span-4 md:row-span-2"
                >
                    <div className="text-accent-primary/40 text-right">
                        <i className="fa-regular fa-calendar text-sm sm:text-lg"></i>
                    </div>
                    <div>
                        <div className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-text-primary leading-none">4+</div>
                        <div className="font-mono text-[9px] sm:text-xs text-text-secondary uppercase tracking-[0.15em] sm:tracking-[0.2em] mt-1 sm:mt-2">Years Experience</div>
                    </div>
                </BentoCard>

                {/* Stat Card - Views */}
                <BentoCard
                    variant="glass"
                    delay={0.18}
                    className="flex flex-col justify-between col-span-1 md:col-span-4 md:row-span-2"
                >
                    <div className="text-accent-primary/40 text-right">
                        <i className="fa-regular fa-eye text-sm sm:text-lg"></i>
                    </div>
                    <div>
                        <div className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-text-primary leading-none">23M+</div>
                        <div className="font-mono text-[9px] sm:text-xs text-text-secondary uppercase tracking-[0.15em] sm:tracking-[0.2em] mt-1 sm:mt-2">Total Views</div>
                    </div>
                </BentoCard>

                {/* Social Links Card */}
                <BentoCard
                    delay={0.24}
                    className="flex flex-col justify-between col-span-2 md:col-span-4 md:row-span-2"
                >
                    <div className="font-mono text-[9px] sm:text-xs text-text-secondary uppercase tracking-[0.15em] sm:tracking-[0.2em]">Connect</div>
                    <SocialLinks size="text-lg sm:text-2xl" gap="gap-3 sm:gap-5" />
                </BentoCard>

            </div>
        </section>
    );
}
