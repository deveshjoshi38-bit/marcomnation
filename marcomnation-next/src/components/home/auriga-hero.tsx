"use client"

import FadeIn from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import DotGrid from "./dot-grid";
import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

export default function AurigaHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLDivElement>(null);
    const orbRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const linesRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        // Parallax Effect
        const xToVideo = gsap.quickTo(videoRef.current, "xPercent", { duration: 0.8, ease: "power2.out" });
        const yToVideo = gsap.quickTo(videoRef.current, "yPercent", { duration: 0.8, ease: "power2.out" });
        const xToOrb = gsap.quickTo(orbRef.current, "x", { duration: 1.2, ease: "power3.out" });
        const yToOrb = gsap.quickTo(orbRef.current, "y", { duration: 1.2, ease: "power3.out" });

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const xPos = (clientX / window.innerWidth - 0.5) * 2;
            const yPos = (clientY / window.innerHeight - 0.5) * 2;

            xToVideo(xPos * 2);
            yToVideo(yPos * 2);
            xToOrb(xPos * 50);
            yToOrb(yPos * 50);
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Scroll Parallax "Pull-In" Effect
        gsap.to(videoRef.current, {
            scale: 0.8,
            filter: "blur(40px)",
            opacity: 0,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        });

        gsap.to(contentRef.current, {
            y: -100,
            opacity: 0,
            scale: 1.1,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        });

        gsap.to(orbRef.current, {
            scale: 4,
            opacity: 0,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        });

        // Scanning Line Animation
        const lines = linesRef.current?.children;
        if (lines) {
            gsap.to(lines, {
                y: "100vh",
                duration: 8,
                repeat: -1,
                ease: "none",
                stagger: {
                    each: 4,
                    repeat: -1
                }
            });
        }

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden blueprint-grid">
            {/* Dot Grid Background */}
            <DotGrid className="opacity-40" />

            {/* Background Video Layer */}
            <div ref={videoRef} className="absolute inset-0 z-0 overflow-hidden scale-110">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover bw-video opacity-40 shadow-[inset_0_0_100px_rgba(0,0,0,1)]"
                >
                    <source src="/assets/videos/hero-bg.mp4" type="video/mp4" />
                </video>
                <div className="noise-overlay noise-animate" />
                <div className="absolute inset-0 bg-brand-black/60" />
            </div>

            {/* Scanning Lines */}
            <div ref={linesRef} className="absolute inset-0 z-[1] pointer-events-none overflow-hidden opacity-20">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-tech to-transparent absolute -top-1" />
                <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-tech to-transparent absolute -top-1" />
            </div>

            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-brand-tech/5 to-transparent pointer-events-none z-[1]" />
            <div ref={orbRef} className="hero-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]" />

            {/* Structural Lines */}
            <div className="absolute top-1/4 left-0 w-full h-px tech-line-h opacity-40 z-[2]" />
            <div className="absolute bottom-1/4 left-0 w-full h-px tech-line-h opacity-40 z-[2]" />
            <div className="absolute left-[15%] top-0 h-full w-px tech-line-v opacity-40 z-[2]" />
            <div className="absolute right-[15%] top-0 h-full w-px tech-line-v opacity-40 z-[2]" />

            {/* Markers */}
            <div className="tech-marker top-8 left-[16%] z-[2]">COORD_REF: 40.7128N</div>
            <div className="tech-marker bottom-8 right-[16%] text-right z-[2]">L_SYS: ALPHA_PRIME</div>

            <div ref={contentRef} className="max-w-[1400px] mx-auto w-full relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    <div className="lg:col-span-8">
                        <FadeIn delay={0.1}>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-8 h-px bg-brand-tech" />
                                <span className="font-mono text-[10px] tracking-[0.4em] text-brand-tech uppercase">Protocol 01 // Branding</span>
                            </div>
                            <h1 className="text-6xl md:text-7xl lg:text-8xl leading-[0.9] font-serif text-white mb-8 tracking-tighter italic">
                                <span className="text-metallic">Engineering </span>
                                <span className="text-metallic-red not-italic">digital</span> <br />
                                <span className="text-metallic">verticals.</span>
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.3} className="max-w-xl">
                            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12 normal-case font-mono">
                                Marcomnation dynamics: A cinematic technical studio focused on brand elevation through electromagnetic speed and precise design execution.
                            </p>
                            <div className="flex flex-wrap gap-8">
                                <Link href="/contact-us">
                                    <Button
                                        data-cursor="magnetic"
                                        className="bg-brand-tech text-white hover:bg-brand-tech/80 rounded-none px-12 py-8 text-sm font-mono tracking-[0.3em] transition-all hover:scale-105 border border-brand-tech/50"
                                    >
                                        INITIATE_PROJECT
                                    </Button>
                                </Link>
                                <Link href="/our-portfolio" data-cursor="magnetic">
                                    <div className="flex items-center gap-4 text-xs font-mono tracking-widest text-gray-500 hover:text-white cursor-pointer transition-colors group">
                                        <span>EXPLORE_ARCHIVE</span>
                                        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-tech transition-all">
                                            <ArrowDown className="w-3 h-3" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="lg:col-span-4 hidden lg:flex flex-col items-end justify-center space-y-24 border-l border-white/5 pl-12 h-screen max-h-[600px]">
                        {[
                            { id: "01", label: "PHASE_RESEARCH", status: "COMPLETE" },
                            { id: "02", label: "PHASE_EXECUTION", status: "ACTIVE" },
                            { id: "03", label: "PHASE_DEPLOY", status: "STANDBY" }
                        ].map((node) => (
                            <div key={node.id} className="text-right">
                                <div className="text-[10px] text-brand-tech mb-2">NODE_{node.id}</div>
                                <div className="text-white font-serif italic text-2xl mb-1">{node.label}</div>
                                <div className="text-[8px] text-gray-600 font-mono tracking-widest">STATUS: {node.status}</div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Footer Meta */}
            <div className="absolute bottom-12 left-6 right-6 flex justify-between items-end font-mono text-[8px] text-gray-600">
                <div className="flex gap-12">
                    <div>LAT: 40.7128</div>
                    <div>LON: 74.0060</div>
                    <div>ALT: 25.4M</div>
                </div>
                <div className="flex gap-12 text-right">
                    <div>CORE_TEMP: 32°C</div>
                    <div>IO_LATENCY: 4MS</div>
                </div>
            </div>
        </section>
    );
}
