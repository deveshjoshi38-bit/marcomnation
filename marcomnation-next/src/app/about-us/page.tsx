"use client"

import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import Link from "next/link";
import WhyChooseUsGrid from "@/components/about/why-choose-us-grid";
import Timeline from "@/components/timeline";
import FadeIn from "@/components/fade-in";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-brand-black text-white pt-32 font-mono blueprint-grid uppercase text-[10px] tracking-widest overflow-hidden">
            {/* Structural Headers */}
            <div className="relative px-6 py-24 border-b border-white/10 overflow-hidden">
                <div className="absolute top-0 right-[20%] h-full w-px tech-line-v opacity-10" />
                <div className="max-w-[1400px] mx-auto">
                    <FadeIn>
                        <div className="text-brand-tech mb-8 flex items-center gap-4">
                            <span className="w-8 h-px bg-brand-tech" />
                            <span>SY_REF: 01 / ARCHITECTURE</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-12 leading-[1.1]">
                            <span className="text-metallic">A digital landscape to </span> <br />
                            <span className="text-metallic-red not-italic">transform</span> <span className="text-metallic">your brand.</span>
                        </h1>
                    </FadeIn>
                </div>
            </div>

            {/* Primary Narrative */}
            <section className="px-6 py-32 border-b border-white/10 relative">
                <div className="tech-marker top-12 left-12">DATA_STREAM: NARRATIVE</div>
                <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-24">
                    <FadeIn direction="right" className="md:col-span-4">
                        <div className="text-gray-600 mb-8 border-l border-brand-tech/30 pl-8 py-4">
                            THE_BLUEPRINT
                            <div className="mt-4 text-[8px] normal-case tracking-normal text-gray-700">COORD: 40.7128N</div>
                        </div>
                    </FadeIn>
                    <FadeIn className="md:col-span-8">
                        <p className="text-2xl md:text-4xl font-serif lowercase normal-case italic tracking-tight leading-tight mb-16 text-gray-300">
                            Marcomnation serves as a one-stop solution across industries for all business requirements to elevate brand presence. We specialize in website and application development, video production, photography, and digital marketing.
                        </p>
                        <p className="text-gray-500 normal-case tracking-normal mb-12 max-w-2xl font-mono text-sm leading-relaxed">
                            We assure to convert your vision from conceptualization to a fantasy fulfilled — a plain-sailing expedition from ideation to market dominance through proprietary electromagnetic workflows.
                        </p>
                        <Link href="/contact-us">
                            <Button className="bg-brand-tech text-white border border-brand-tech hover:bg-white hover:text-brand-tech rounded-none px-12 py-8 text-xs font-mono tracking-[0.4em] transition-all">
                                INITIATE_PROTOCOL
                            </Button>
                        </Link>
                    </FadeIn>
                </div>
            </section>

            <WhyChooseUsGrid />

            {/* Evolution Timeline */}
            <section className="px-6 py-32 border-b border-white/10 relative">
                <div className="absolute inset-0 bg-brand-tech/[0.01] pointer-events-none" />
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex justify-between items-end mb-24 border-b border-white/10 pb-12">
                        <div className="space-y-4">
                            <div className="text-brand-tech">DATA_SET: EVOLUTION</div>
                            <h2 className="text-5xl md:text-7xl font-serif lowercase italic">our timelines</h2>
                        </div>
                        <div className="text-brand-tech text-right font-mono">2020 // 2026</div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden">
                        {[
                            { year: "2020-24", title: "Traditional Foundation", desc: "Years of proven excellence in app development, photography, and marketing across global nodes." },
                            { year: "2025", title: "AI Acceleration", desc: "Integration of Veo 3 cinematic generation and proprietary prompt frameworks for 10x output." },
                            { year: "2026", title: "Strategic Dominance", desc: "70% faster production. Director-level output. Scalable content engines for elite brands." }
                        ].map((item, i) => (
                            <div key={item.year} className="bg-brand-black p-16 hover:bg-brand-tech transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-gray-800 opacity-50">NODE_REV_{i + 1}</div>
                                <div className="text-brand-tech group-hover:text-white mb-12 border-b border-white/10 pb-4 inline-block">{item.year}</div>
                                <h3 className="text-2xl font-bold uppercase mb-6 tracking-tighter group-hover:text-white">{item.title}</h3>
                                <p className="normal-case tracking-normal text-gray-500 text-sm italic group-hover:text-white/80">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-48 px-6 text-center relative border-b border-white/10">
                <div className="tech-marker top-12 left-1/2 -translate-x-1/2">END_OF_MISSION</div>
                <FadeIn>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-16 leading-[1.1]">
                        Join the <br /> <span className="text-brand-tech not-italic">constellation.</span>
                    </h2>
                    <Link href="/contact-us">
                        <Button className="bg-white text-black hover:bg-brand-tech hover:text-white rounded-none px-16 py-10 text-xl font-mono uppercase tracking-[0.5em] transition-all border border-white">
                            LINK_START
                        </Button>
                    </Link>
                </FadeIn>
            </section>
        </main>
    );
}
