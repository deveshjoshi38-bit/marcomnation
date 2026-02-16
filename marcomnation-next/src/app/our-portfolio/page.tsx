"use client"

import FadeIn from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const projects = [
    { title: "Project Alpha", category: "digital", tag: "WEB_OS", image: "/assets/p1.jpg" },
    { title: "Vanguard One", category: "branding", tag: "IDENTITY", image: "/assets/p2.jpg" },
    { title: "Horizon Shift", category: "video", tag: "VFX_REEL", image: "/assets/p3.jpg" },
    { title: "Core Protocol", category: "digital", tag: "SAAS_REF", image: "/assets/p4.jpg" },
    { title: "Deep Space", category: "video", tag: "CINEMATIC", image: "/assets/p5.jpg" },
    { title: "Nebula Core", category: "branding", tag: "SYSTEM", image: "/assets/p6.jpg" }
];

export default function OurPortfolioPage() {
    const [filter, setFilter] = useState("all");

    return (
        <main className="min-h-screen bg-brand-black text-white pt-32 font-mono blueprint-grid uppercase text-[10px] tracking-widest overflow-hidden">
            <div className="px-6 py-24 border-b border-white/10 relative">
                <div className="absolute top-0 right-[25%] h-full w-px tech-line-v opacity-10" />
                <div className="max-w-[1400px] mx-auto">
                    <FadeIn>
                        <div className="text-brand-tech mb-8 flex items-center gap-4">
                            <span className="w-8 h-px bg-brand-tech" />
                            <span>SY_REF: 03 / ARCHIVE</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-12 leading-[1.1]">
                            <span className="text-metallic">Selected </span> <span className="text-metallic-red not-italic">protocols.</span>
                        </h1>
                    </FadeIn>
                </div>
            </div>

            <section className="px-6 py-12 border-b border-white/10 relative">
                <div className="max-w-[1400px] mx-auto flex flex-wrap gap-8 items-center">
                    <div className="text-gray-700 font-mono tracking-widest">FILTER:</div>
                    {["all", "digital", "branding", "video"].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={cn(
                                "px-6 py-2 border transition-all relative group",
                                filter === f ? "border-brand-tech text-white bg-brand-tech/10" : "border-white/5 text-gray-500 hover:text-white"
                            )}
                        >
                            {f}
                            {filter === f && <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-brand-tech rounded-full" />}
                        </button>
                    ))}
                </div>
            </section>

            <section className="px-6 py-24 relative">
                <div className="tech-marker top-12 left-12">DATA_POD: PROJECTS</div>
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
                    {projects.filter(p => filter === "all" || p.category === filter).map((project, i) => (
                        <FadeIn key={project.title} delay={i * 0.1} className="bg-brand-black overflow-hidden group">
                            <div className="p-12 h-full flex flex-col items-start hover:bg-brand-tech/[0.03] transition-all relative border border-white/5">
                                <div className="absolute top-4 right-4 text-[6px] text-gray-700">COORD_{i + 1}_REF</div>
                                <div className="aspect-[4/3] w-full bg-white/[0.02] mb-12 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-1000 border border-white/5 group-hover:border-brand-tech/30">
                                    <div className="absolute inset-0 flex items-center justify-center opacity-10 text-[8px] tracking-[1em]">PROJECT_RECON</div>
                                </div>
                                <div className="flex justify-between items-start w-full mb-4">
                                    <h3 className="text-3xl font-serif italic lowercase text-white group-hover:text-brand-tech transition-colors">{project.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-brand-tech opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                                </div>
                                <div className="text-[8px] text-brand-tech mb-8 tracking-[0.4em] inline-block px-3 py-1 border border-brand-tech/20">{project.category} // {project.tag}</div>
                                <Link href={`/our-portfolio/${project.title.toLowerCase().replace(/\s+/g, '-')}`} className="mt-auto w-full pt-6 border-t border-white/5 flex justify-between items-center text-gray-600 hover:text-white transition-colors group/view">
                                    <span>INITIATE_CASE_STUDY</span>
                                    <div className="w-2 h-2 bg-brand-tech rounded-full opacity-30 group-hover/view:opacity-100 transition-opacity" />
                                </Link>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>

            <section className="py-48 px-6 text-center relative overflow-hidden flex flex-col items-center">
                <div className="hero-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
                <FadeIn>
                    <h2 className="text-6xl md:text-[8vw] font-serif lowercase italic mb-16 leading-none tracking-tighter text-white">
                        ready to <span className="text-brand-tech not-italic">deploy?</span>
                    </h2>
                    <Link href="/contact-us">
                        <Button className="bg-brand-tech text-white border border-brand-tech hover:bg-white hover:text-brand-tech rounded-none px-16 py-10 text-xl font-mono uppercase tracking-[0.5em] transition-all">
                            START_PROTOCOL
                        </Button>
                    </Link>
                </FadeIn>
            </section>
        </main>
    );
}
