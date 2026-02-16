"use client"

import { motion } from "framer-motion";

interface PageHeaderProps {
    title: string;
    subtitle: string;
    tagline?: string;
}

export default function PageHeader({ title, subtitle, tagline }: PageHeaderProps) {
    return (
        <section className="relative pt-40 pb-20 px-6 overflow-hidden bg-brand-black blueprint-grid border-b border-white/10">
            {/* Background Ambience */}
            <div className="hero-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                {tagline && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8 inline-block"
                    >
                        <span className="px-4 py-1 border border-brand-tech/30 bg-brand-tech/5 text-brand-tech text-[10px] font-mono tracking-[0.4em] uppercase">
                            {tagline}
                        </span>
                    </motion.div>
                )}

                <motion.h1
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-6xl md:text-8xl font-serif italic lowercase mb-8 tracking-tighter text-white"
                >
                    {title.split(" ").map((word, i) => (
                        <span key={i} className={i % 2 !== 0 ? "text-brand-tech pr-3" : "pr-3 text-white"}>{word}</span>
                    ))}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl text-gray-400 font-mono tracking-tight max-w-2xl mx-auto leading-relaxed normal-case"
                >
                    {subtitle}
                </motion.p>
            </div>

            <div className="tech-marker bottom-4 left-6">PAGE_COORD: {title.toUpperCase().replace(/\s+/g, '_')}</div>
        </section>
    );
}
