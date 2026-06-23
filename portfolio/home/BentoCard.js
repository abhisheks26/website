"use client";

import { motion } from "framer-motion";

export default function BentoCard({
    children,
    className = "",
    style = {},
    variant = "default",
    delay = 0,
    href = null,
}) {
    const variantClass =
        variant === "accent"
            ? "bento-item--accent"
            : variant === "glass"
            ? "bento-item--glass"
            : "";

    const Tag = href ? motion.a : motion.div;
    const linkProps = href
        ? { href, target: "_blank", rel: "noopener noreferrer" }
        : {};

    return (
        <Tag
            {...linkProps}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
            className={`bento-item ${variantClass} p-4 sm:p-6 ${className}`}
            style={style}
        >
            {children}
        </Tag>
    );
}
