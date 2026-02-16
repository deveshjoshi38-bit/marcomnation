"use client"

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { gsap, useGSAP, SplitText, ScrollTrigger } from "@/lib/gsap";
import { useRef } from "react";

const works = [
    {
        title: "Alienware_OS",
        category: "Visual Intelligence",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
        ref: "ALPHA_01",
        accent: "var(--color-brand-tech)"
    },
    {
        title: "Ford_Vanguard",
        category: "Video Production",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop",
        ref: "BETA_02",
        accent: "white"
    },
    {
        title: "Vivo_Synapse",
        category: "Events",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=800&fit=crop",
        ref: "GAMMA_03",
        accent: "var(--color-brand-tech)"
    }
];

export default function FeaturedWork() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        const cards = gsap.utils.toArray<HTMLElement>(".stacked-card");

        cards.forEach((card, i) => {
            if (i === cards.length - 1) return; // Don't animate the last card up

            ScrollTrigger.create({
                trigger: card,
                start: "top 100px",
                pin: true,
                pinSpacing: false,
                endTrigger: containerRef.current,
                end: "bottom bottom",
            });

            // Hide the card completely as the next one takes over to prevent text overlap
            gsap.to(card, {
                scale: 0.95,
                opacity: 0,
                y: -100,
                scrollTrigger: {
                    trigger: cards[i + 1],
                    start: "top center",
                    end: "top top",
                    scrub: true,
                }
            });
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="bg-brand-black border-t border-white/10 blueprint-grid py-24 px-6 md:px-0">
            <div className="max-w-[1400px] mx-auto mb-24 px-6">
                <div className="tech-marker mb-12">DATA_SET: FEATURED_PROTOCOLS</div>
                <h2 className="text-5xl md:text-8xl font-serif italic lowercase tracking-tighter text-white">
                    Selected <span className="text-brand-tech not-italic">Production_</span>
                </h2>
            </div>

            <div className="space-y-[40vh] pb-[20vh]">
                {works.map((work, index) => (
                    <div
                        key={work.title}
                        className="stacked-card w-full h-[70vh] md:h-[80vh] flex items-center justify-center px-6"
                    >
                        <div className="relative w-full max-w-6xl h-full group cursor-pointer overflow-hidden border border-white/10 bg-brand-black">
                            <Image
                                src={work.image}
                                alt={work.title}
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />

                            <div className="absolute top-12 left-12">
                                <span className="font-mono text-[10px] text-brand-tech tracking-[0.5em] uppercase">{work.ref}</span>
                            </div>

                            <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row justify-between items-end gap-8">
                                <div className="max-w-xl">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-px bg-brand-tech" />
                                        <span className="font-mono text-xs text-brand-tech uppercase tracking-widest">{work.category} / 2026</span>
                                    </div>
                                    <h3 className="text-4xl md:text-7xl font-serif italic text-white lowercase leading-none">
                                        {work.title}
                                    </h3>
                                </div>

                                <Link href="/our-portfolio" className="flex-shrink-0">
                                    <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-tech group-hover:text-white transition-all transform group-hover:rotate-45">
                                        <ArrowRight className="w-8 h-8" />
                                    </div>
                                </Link>
                            </div>

                            {/* Corner Tech Accents */}
                            <div className="absolute top-0 right-0 w-12 h-px bg-brand-tech opacity-30" />
                            <div className="absolute top-0 right-0 w-px h-12 bg-brand-tech opacity-30" />
                        </div>
                    </div>
                ))}

                {/* Final CTA Full Card - Standardized with Metallic Red Feel */}
                <div className="stacked-card w-full h-[70vh] md:h-[80vh] flex items-center justify-center px-6">
                    <div className="relative w-full max-w-6xl h-full group cursor-pointer overflow-hidden border border-brand-tech/30 bg-brand-black">
                        {/* Metallic Red Tech Mesh Background */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,9,20,0.15)_0%,transparent_100%)] opacity-50" />
                        <div className="absolute inset-0 blueprint-grid opacity-10" />

                        {/* The "Metallic" Surface - Animated Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-[#1a0101] to-brand-black group-hover:via-[#2a0101] transition-all duration-1000" />

                        <div className="absolute top-12 left-12">
                            <span className="font-mono text-[10px] text-brand-tech tracking-[0.5em] uppercase animate-pulse">ARCHIVE.ACCESS_GRANTED</span>
                        </div>

                        <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row justify-between items-end gap-8">
                            <div className="max-w-2xl">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-px bg-brand-tech" />
                                    <span className="font-mono text-xs text-brand-tech uppercase tracking-widest">Protocol / FINAL</span>
                                </div>
                                <h3 className="text-4xl md:text-8xl font-serif italic text-white lowercase leading-none">
                                    view all <br />
                                    <span className="text-metallic-red not-italic animate-shimmer">work_</span>
                                </h3>
                            </div>

                            <Link href="/our-portfolio" className="flex-shrink-0">
                                <div className="w-24 h-24 rounded-full border-2 border-brand-tech/50 flex flex-col items-center justify-center group-hover:bg-brand-tech group-hover:text-white transition-all transform group-hover:scale-110 shadow-[0_0_20px_rgba(229,9,20,0.3)]">
                                    <span className="font-mono text-[8px] tracking-widest mb-1 opacity-60">INIT_</span>
                                    <ArrowRight className="w-8 h-8" />
                                </div>
                            </Link>
                        </div>

                        {/* Corner Accents */}
                        <div className="absolute top-0 right-0 w-24 h-px bg-brand-tech/40" />
                        <div className="absolute top-0 right-0 w-px h-24 bg-brand-tech/40" />
                    </div>
                </div>
            </div>
        </section>
    );
}
