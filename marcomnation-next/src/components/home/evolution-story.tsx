"use client"

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger, ScrambleTextPlugin } from "@/lib/gsap";

export default function EvolutionStory() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const leftColRef = useRef<HTMLDivElement>(null);
    const rightColRef = useRef<HTMLDivElement>(null);

    const text1Ref = useRef<HTMLParagraphElement>(null);
    const text2Ref = useRef<HTMLParagraphElement>(null);
    const text3Ref = useRef<HTMLParagraphElement>(null);

    useGSAP(() => {
        if (!sectionRef.current || !leftColRef.current) return;

        // Pin the left column
        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            pin: leftColRef.current,
            pinSpacing: false,
        });

        // Scramble animation for text reveals as they enter view
        const texts = [text1Ref.current, text2Ref.current, text3Ref.current];
        texts.forEach((text, i) => {
            if (!text) return;
            const originalContent = text.innerHTML;
            gsap.to(text, {
                scrambleText: {
                    text: originalContent,
                    chars: "01ST_ARCHIVE_BLUEPRINT_X",
                    revealDelay: 0.1,
                    speed: 0.4,
                    newClass: "text-brand-tech"
                },
                scrollTrigger: {
                    trigger: text,
                    start: "top 70%",
                    once: true
                }
            });
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="relative bg-brand-black border-t border-white/5 blueprint-grid min-h-screen">
            <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row gap-24">

                {/* Left Column (Pinned) */}
                <div ref={leftColRef} className="md:w-1/2 h-screen flex flex-col justify-center py-24">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-8 h-px bg-brand-tech" />
                        <span className="font-mono text-brand-tech uppercase tracking-[0.4em] text-[10px]">Transmission Sequence 05</span>
                    </div>

                    <h2 className="text-5xl md:text-8xl font-serif italic lowercase mb-8 tracking-tighter text-white leading-[0.9]">
                        From Traditional Excellence <br />
                        <span className="text-brand-tech not-italic">to AI Acceleration.</span>
                    </h2>

                    <div className="mt-12 space-y-4 opacity-30 font-mono text-[8px] tracking-widest uppercase">
                        <div className="flex justify-between w-48 border-b border-white/10 pb-2">
                            <span>STATUS</span>
                            <span className="text-brand-tech">EVOLVING</span>
                        </div>
                        <div className="flex justify-between w-48 border-b border-white/10 pb-2">
                            <span>ARCHIVE</span>
                            <span>2018-2026</span>
                        </div>
                    </div>
                </div>

                {/* Right Column (Scrolling Narrative) */}
                <div ref={rightColRef} className="md:w-1/2 py-24 md:py-[35vh] space-y-[40vh]">
                    <div className="space-y-12 text-xl md:text-3xl text-gray-500 font-mono tracking-tight leading-relaxed lowercase">
                        <p ref={text1Ref} className="min-h-[4em] transition-colors hover:text-white duration-500">
                            Marcomnation was founded on a commitment to quality — web development, photography, video production, and digital marketing executed with traditional precision. We've delivered campaigns for Ford, Alienware, Harley Davidson, and Vivo.
                        </p>

                        <p ref={text2Ref} className="min-h-[4em] text-white">
                            <span className="text-white font-bold not-italic font-serif block text-4xl mb-6">The Evolution_</span>
                            Our R&D division now integrates Veo 3 for cinematic video generation, Suno for adaptive soundtracks, and proprietary AI workflows that reduce production cycles by 70%.
                        </p>

                        <div className="pt-24">
                            <p ref={text3Ref} className="text-white border-l border-brand-tech/30 pl-8 py-2 text-2xl md:text-4xl italic font-serif">
                                Tech meets Cinema isn't marketing copy — it's our operational framework.
                            </p>

                            <div className="mt-20">
                                <Link href="/contact-us">
                                    <button className="group flex items-center gap-8 bg-transparent text-white border border-white/10 hover:border-brand-tech rounded-none px-12 py-8 text-xs font-mono uppercase tracking-[0.5em] transition-all overflow-hidden relative">
                                        <span className="relative z-10">START_TRANSFORMATION</span>
                                        <ArrowRight className="z-10 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                        <div className="absolute inset-0 bg-brand-tech translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tech-marker bottom-12 right-12 text-right">COORD_REF: 40.7128N<br />L_SYS: ALPHA_PRIME</div>
        </section>
    );
}
