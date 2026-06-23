"use client";

import { useState, useEffect, useCallback } from "react";

export default function ScrollButtons({ scrollRef }) {
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = useCallback(() => {
        const el = scrollRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 1);
        setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
    }, [scrollRef]);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        checkScroll();
        el.addEventListener("scroll", checkScroll, { passive: true });
        const observer = new ResizeObserver(checkScroll);
        observer.observe(el);
        return () => {
            el.removeEventListener("scroll", checkScroll);
            observer.disconnect();
        };
    }, [scrollRef, checkScroll]);

    const scroll = (direction) => {
        if (!scrollRef.current) return;
        const amount = scrollRef.current.clientWidth * 0.6;
        scrollRef.current.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
    };

    const base = "w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center transition-colors bg-secondary";
    const active = "border-border/50 text-text-secondary hover:text-accent-primary hover:border-accent-primary cursor-pointer";
    const disabled = "border-border/20 text-text-secondary/25 cursor-default";

    return (
        <div className="flex gap-1.5">
            <button
                onClick={() => canScrollLeft && scroll("left")}
                className={`${base} ${canScrollLeft ? active : disabled}`}
                aria-label="Scroll left"
                aria-disabled={!canScrollLeft}
            >
                <i className="fa-solid fa-chevron-left text-[10px] sm:text-xs"></i>
            </button>
            <button
                onClick={() => canScrollRight && scroll("right")}
                className={`${base} ${canScrollRight ? active : disabled}`}
                aria-label="Scroll right"
                aria-disabled={!canScrollRight}
            >
                <i className="fa-solid fa-chevron-right text-[10px] sm:text-xs"></i>
            </button>
        </div>
    );
}
