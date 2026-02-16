"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/fade-in";
import { useRef, useEffect } from "react";
import { gsap, useGSAP, ScrollTrigger, ScrambleTextPlugin } from "@/lib/gsap";

const leaders = [
    { id: "CEO_01", name: "Naval Tripathi", role: "Founder & CEO", title: "Visionary Leadership", desc: "Strategic direction, global client relationships, and the long-term AI-integration roadmap for the studio.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop" },
    { id: "CTO_02", name: "Devesh Joshi", role: "Founder & CTO", title: "Engineering Excellence", desc: "Architect of our AI-driven development stack and proprietary production infrastructure. 15+ years in full-stack excellence.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop" },
    { id: "FILM_03", name: "Arun Paharia", role: "Head of Film & Cinema", title: "Cinematic Protocol", desc: "Leads our high-end production unit, blending traditional cinematography with advanced generative AI video workflows.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop" },
    { id: "GROW_04", name: "Divya Joshi", role: "Head of Growth & Partnership", title: "Strategic Expansion", desc: "Driving global partnerships and scaling our AI-delivery model across international markets and platforms.", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=800&h=800&fit=crop" }
];

const coreTeams = [
    { name: "Development Team", expertise: "Full-stack JavaScript, React Native, Next.js, Python, Node.js, DevOps", philosophy: "Clean code, scalable architecture, pixel-perfect implementations" },
    { name: "Production Team", expertise: "Cinematography, Photography, Veo AI generation, Adobe Creative Suite", philosophy: "Every frame tells a story — traditional craft meets AI acceleration" },
    { name: "Marketing Team", expertise: "PPC, SEO, Content Strategy, YouTube optimization, Analytics", philosophy: "Data informs, creativity converts" },
    { name: "Design Team", expertise: "UI/UX, Brand Identity, Midjourney prompting, Figma to production", philosophy: "Beauty is functional, functionality is beautiful" }
];

function LeaderCard({ leader, index }: { leader: typeof leaders[0], index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const scannerRef = useRef<HTMLDivElement>(null);
    const glintRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLHeadingElement>(null);
    const roleRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!cardRef.current || !scannerRef.current || !glintRef.current) return;

        const card = cardRef.current;
        const scanner = scannerRef.current;
        const glint = glintRef.current;

        // 3D Tilt & Glint Logic
        const xTo = gsap.quickTo(card, "rotateY", { duration: 0.6, ease: "power2.out" });
        const yTo = gsap.quickTo(card, "rotateX", { duration: 0.6, ease: "power2.out" });
        const glintX = gsap.quickTo(glint, "xPercent", { duration: 0.8, ease: "power2.out" });
        const glintY = gsap.quickTo(glint, "yPercent", { duration: 0.8, ease: "power2.out" });

        const handleMouseMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            xTo(x * 12);
            yTo(-y * 12);
            glintX(x * 100);
            glintY(y * 100);
        };

        const handleMouseEnter = () => {
            // Scanner Sweep
            gsap.fromTo(scanner,
                { top: "-10%", opacity: 0 },
                { top: "110%", opacity: 1, duration: 1.2, ease: "power2.inOut" }
            );

            // Scramble Reveals
            if (nameRef.current) {
                gsap.to(nameRef.current, {
                    scrambleText: { text: leader.name, chars: "01X_CORE", speed: 0.5 },
                    duration: 0.8
                });
            }
            if (roleRef.current) {
                gsap.to(roleRef.current, {
                    scrambleText: { text: leader.role, chars: "01X_PROTO", speed: 0.5 },
                    duration: 0.8
                });
            }
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
            glintX(0);
            glintY(0);
        };

        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            card.removeEventListener("mousemove", handleMouseMove);
            card.removeEventListener("mouseenter", handleMouseEnter);
            card.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, { scope: cardRef });

    return (
        <div
            ref={cardRef}
            className="squad-card opacity-0 bg-brand-black p-10 h-full flex flex-col items-start border border-white/10 hover:border-brand-tech/50 transition-colors group relative overflow-hidden"
            style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        >
            {/* Tactical Glint Surface */}
            <div ref={glintRef} className="absolute inset-x-[-50%] inset-y-[-50%] pointer-events-none bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.1)_0%,transparent_70%)] z-10 opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Biometric Scanner Line */}
            <div ref={scannerRef} className="absolute inset-x-0 h-px bg-brand-tech shadow-[0_0_15px_var(--color-brand-tech)] z-30 pointer-events-none opacity-0" />

            <div className="absolute top-4 right-4 text-[6px] text-gray-700 font-mono">NODE_COORD_{leader.id}</div>

            <div className="aspect-square w-full bg-white/[0.02] border border-white/5 mb-8 grayscale group-hover:grayscale-0 transition-all duration-1000 overflow-hidden relative group-hover:border-brand-tech/30">
                <Image src={leader.image} alt={leader.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center opacity-10 text-[8px] font-mono tracking-[1em] pointer-events-none uppercase">BIO_METRIC_SCAN</div>
            </div>

            {/* Identity Block */}
            <div className="flex flex-col gap-2 w-full mb-6 relative z-20">
                <h3 ref={nameRef} className="font-serif italic lowercase text-4xl text-white group-hover:text-brand-tech transition-colors leading-[0.8] tracking-tighter min-h-[1.2em]">
                    {leader.name}
                </h3>
                <div ref={roleRef} className="text-brand-tech tracking-[0.4em] text-[8px] border-b border-brand-tech/20 pb-2 uppercase pt-1">
                    {leader.role}
                </div>
            </div>

            {/* Value Proposition */}
            <div className="flex-1 w-full space-y-4 pt-4 border-t border-white/5 relative z-20">
                <div className="flex items-center gap-3">
                    <span className="text-[7px] text-gray-600 font-mono uppercase tracking-[0.2em]">Deployment:</span>
                    <span className="text-[8px] text-white/40 font-mono uppercase tracking-widest">{leader.title}</span>
                </div>
                <p className="normal-case tracking-normal text-gray-400 text-[11px] leading-relaxed italic opacity-80">
                    "{leader.desc}"
                </p>
            </div>

            {/* Clearance Metadata */}
            <div className="mt-10 pt-6 flex items-center justify-between w-full border-t border-white/5 opacity-40 group-hover:opacity-100 transition-opacity relative z-20">
                <div className="flex items-center gap-4">
                    <Lock className="w-3 h-3 text-brand-tech" />
                    <span className="text-[7px] font-mono text-gray-500 tracking-widest uppercase">Clearance S-01</span>
                </div>
                <Linkedin className="w-3 h-3 text-gray-600 hover:text-brand-tech cursor-pointer transition-colors" />
            </div>
        </div>
    );
}

export default function OurTeamPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const orbRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!gridRef.current) return;

        // Tactical Unfold: Staggered entry from "center line"
        const cards = gsap.utils.toArray<HTMLElement>(".squad-card");

        gsap.to(cards, {
            opacity: 1,
            y: 0,
            x: 0,
            rotateY: 0,
            duration: 1.5,
            stagger: 0.15,
            ease: "expo.out",
            scrollTrigger: {
                trigger: gridRef.current,
                start: "top 75%",
            }
        });

        // Initialize cards for unfold
        gsap.set(cards, {
            opacity: 0,
            y: 100,
            rotateY: 45,
            transformOrigin: "center center"
        });

        // DrawSVG for core team borders
        gsap.utils.toArray<HTMLElement>(".squad-border").forEach((border) => {
            gsap.from(border, {
                height: 0,
                duration: 1.5,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: border,
                    start: "top 80%",
                }
            });
        });

        // Culture Orb Parallax
        if (orbRef.current) {
            gsap.to(orbRef.current, {
                yPercent: -30,
                ease: "none",
                scrollTrigger: {
                    trigger: orbRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        }
    }, { scope: containerRef });

    return (
        <main ref={containerRef} className="min-h-screen bg-brand-black text-white pt-32 font-mono blueprint-grid uppercase text-[10px] tracking-widest overflow-hidden">
            <div className="px-6 py-24 border-b border-white/10 relative">
                <div className="absolute top-0 right-[25%] h-full w-px tech-line-v opacity-10" />
                <div className="max-w-[1400px] mx-auto">
                    <FadeIn>
                        <div className="text-brand-tech mb-8 flex items-center gap-4">
                            <span className="w-8 h-px bg-brand-tech" />
                            <span>SY_REF: 02 / SQUAD</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-12 leading-[1.1]">
                            <span className="text-metallic">Passionate about </span> <br />
                            <span className="text-metallic-red not-italic">our work.</span>
                        </h1>
                    </FadeIn>
                </div>
            </div>

            {/* Leadership Grid */}
            <section className="px-6 py-32 border-b border-white/10 relative">
                <div className="tech-marker top-12 left-12">DATA_POD: LEADERSHIP</div>
                <div className="max-w-[1400px] mx-auto">
                    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
                        {leaders.map((leader, i) => (
                            <LeaderCard key={leader.id} leader={leader} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Teams */}
            <section className="px-6 py-32 bg-white/[0.01] relative border-b border-white/10">
                <div className="absolute left-[15%] top-0 h-full w-px tech-line-v opacity-10" />
                <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {coreTeams.map((team, i) => (
                        <div key={team.name} className="relative h-full flex flex-col">
                            {/* Technical Draw Line */}
                            <div className="absolute -left-px top-0 w-px bg-brand-tech squad-border" style={{ height: "100%" }} />

                            <div className="pl-10 h-full relative group py-8">
                                <div className="absolute -left-1 top-0 w-2 h-2 bg-brand-tech rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                <h3 className="text-2xl font-serif italic lowercase mb-8 text-white group-hover:text-brand-tech transition-colors">{team.name}</h3>
                                <div className="text-[8px] text-gray-600 mb-6 bg-white/[0.02] inline-block px-3 py-1 border border-white/5 tracking-[0.3em]">STACK // {team.expertise}</div>
                                <p className="normal-case tracking-normal text-sm text-gray-500 italic max-w-xs opacity-70">"{team.philosophy}"</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Culture Bento */}
            <section className="py-48 px-6 text-center relative overflow-hidden bg-brand-void">
                {/* Intensified Beam Light Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl aspect-square bg-brand-tech/15 blur-[140px] rounded-full pointer-events-none z-0 mix-blend-screen" />
                <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-tech/30 to-transparent pointer-events-none z-0" />

                <div ref={orbRef} className="hero-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 z-0" />

                <FadeIn className="relative z-10">
                    <h2 className="text-6xl md:text-[12vw] font-serif lowercase italic mb-16 leading-none tracking-tighter text-white">
                        continuous <br /> <span className="text-metallic-red not-italic">optimisation.</span>
                    </h2>
                    <div className="flex flex-wrap justify-center gap-16 mb-24 opacity-30 tracking-[0.6em] text-[8px]">
                        {["REMOTE_NODE_01", "LEARNING_CYCLE", "CLIENT_CORE_FOCUS", "INNOVATION_FREQ"].map(item => (
                            <span key={item}>{item}</span>
                        ))}
                    </div>
                    <Link href="/contact-us">
                        <Button className="bg-brand-tech text-white border border-brand-tech hover:bg-white hover:text-brand-tech rounded-none px-16 py-10 text-xl font-mono uppercase tracking-[0.5em] transition-all">
                            SYNC_NOW
                        </Button>
                    </Link>
                </FadeIn>
            </section>
        </main>
    );
}
