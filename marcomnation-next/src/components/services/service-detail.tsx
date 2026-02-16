"use client"

import { cn } from "@/lib/utils";
import { Satellite, Zap, Cpu, Activity, ShieldCheck, Database, Layout, Radio } from "lucide-react";
import FadeIn from "@/components/fade-in";
import { useRef, useState, useEffect } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

interface ServiceDetailProps {
    title: string;
    description: string;
    features: { title: string; desc: string }[];
    process: { title: string; desc: string }[];
    stack: { category: string; tools: string }[];
    image: string;
    align?: "left" | "right";
    id: string;
    index: number;
    isActive: boolean;
    isPast: boolean;
    isFuture: boolean;
}

export default function ServiceDetail({
    title, description, features, process, stack, id, index,
    isActive, isPast, isFuture
}: ServiceDetailProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    const techStackRef = useRef<HTMLDivElement>(null);
    const scannerRef = useRef<HTMLDivElement>(null);
    const [telemetry, setTelemetry] = useState({ hex: "0x00", coord: "00,00" });

    // Procedural Telemetry Heartbeat
    useEffect(() => {
        if (!isActive) return;
        const interval = setInterval(() => {
            setTelemetry({
                hex: "0x" + Math.floor(Math.random() * 0xFFFFFF).toString(16).toUpperCase(),
                coord: `${Math.floor(Math.random() * 99)},${Math.floor(Math.random() * 99)}`
            });
        }, 1500);
        return () => clearInterval(interval);
    }, [isActive]);

    useGSAP(() => {
        if (!innerRef.current || !scannerRef.current) return;

        if (isActive) {
            const tl = gsap.timeline();

            // 1. Initial State
            gsap.set(innerRef.current, { perspective: 1000 });

            // 2. Zoom in and Fade
            tl.to(innerRef.current, {
                scale: 1,
                opacity: 1,
                z: 0,
                filter: "blur(0px)",
                duration: 1.2,
                ease: "power3.out",
                pointerEvents: "auto",
                overwrite: "auto"
            });

            // 3. Laser Draw Lines
            tl.fromTo(".leader-line",
                { drawSVG: "0%" },
                { drawSVG: "100%", duration: 1.5, ease: "power2.inOut" },
                "-=0.5"
            );

            // 4. Data Scramble for technical text
            gsap.utils.toArray<HTMLElement>(".scramble-data").forEach((el) => {
                const originalText = el.innerText;
                gsap.to(el, {
                    duration: 1.5,
                    scrambleText: {
                        text: originalText,
                        chars: "01X_PROTO_CODE",
                        speed: 0.4,
                        revealDelay: 0.5
                    },
                    scrollTrigger: {
                        trigger: innerRef.current,
                        start: "top center"
                    }
                });
            });

            // 5. Reveal Content
            gsap.from(".reveal-item", {
                opacity: 0,
                y: 30,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out"
            });

            // 6. 3D Tilt Logic
            const handleMouseMove = (e: MouseEvent) => {
                const { clientX, clientY } = e;
                const rect = innerRef.current?.getBoundingClientRect();
                if (!rect) return;

                const x = (clientX - rect.left) / rect.width - 0.5;
                const y = (clientY - rect.top) / rect.height - 0.5;

                gsap.to(innerRef.current, {
                    rotateY: x * 10,
                    rotateX: -y * 10,
                    duration: 1,
                    ease: "power3.out"
                });
            };

            window.addEventListener("mousemove", handleMouseMove);
            return () => window.removeEventListener("mousemove", handleMouseMove);

        } else if (isPast) {
            gsap.to(innerRef.current, {
                scale: 1.5,
                opacity: 0,
                z: 200,
                filter: "blur(20px)",
                duration: 1,
                ease: "power3.inOut"
            });
        } else if (isFuture) {
            gsap.to(innerRef.current, {
                scale: 0.8,
                opacity: 0,
                z: -200,
                filter: "blur(10px)",
                duration: 1,
                ease: "power3.inOut"
            });
        }
    }, { scope: sectionRef, dependencies: [isActive, isPast, isFuture] });

    return (
        <section
            ref={sectionRef}
            id={id}
            className="absolute inset-0 w-full h-full flex items-center justify-center p-6 lg:p-12 overflow-visible pointer-events-none"
        >
            <div
                ref={innerRef}
                className="w-full max-w-[1800px] h-full flex items-center relative opacity-0 scale-90"
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Midlife Cine-Scan Line */}
                <div
                    ref={scannerRef}
                    className="absolute inset-x-0 h-px bg-brand-tech shadow-[0_0_15px_var(--color-brand-tech)] z-[60] pointer-events-none opacity-0"
                />

                {/* SVG Leader Lines (Background Layer) */}
                <svg className="absolute inset-0 w-full h-full z-0 opacity-10 pointer-events-none" style={{ filter: 'drop-shadow(0 0 2px var(--color-brand-tech))' }}>
                    <path
                        className="leader-line"
                        d="M 60% 30% L 40% 40% L 40% 60%"
                        fill="none"
                        stroke="var(--color-brand-tech)"
                        strokeWidth="0.5"
                        strokeDasharray="1000"
                    />
                    <circle cx="60%" cy="30%" r="2" fill="var(--color-brand-tech)" />
                </svg>

                {/* Asymmetric Partition: 40% Telemetry (Left), 60% Branding (Right) */}
                <div className="grid lg:grid-cols-[4fr_6fr] gap-12 lg:gap-24 items-center w-full relative z-10 px-12 lg:px-24">

                    {/* Left Side: Telemetry Zone (40%) */}
                    <div className="flex flex-col gap-8 reveal-item">
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center justify-between border-b border-white/5 pb-4 font-mono text-[7px] text-gray-500 uppercase tracking-[0.5em]">
                                <div className="flex items-center gap-4">
                                    <Radio className="w-3 h-3 text-brand-tech animate-pulse" />
                                    <span>DATA_STREAM: {telemetry.hex}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span>SYNC_POS: {telemetry.coord}</span>
                                </div>
                            </div>

                            {/* Infrastructure Card (Blueprint Style) */}
                            <div className="p-8 border border-white/10 bg-brand-tech/[0.02] backdrop-blur-xl relative group">
                                <div className="flex justify-between items-start mb-10">
                                    <div className="flex flex-col gap-2">
                                        <span className="font-mono text-[6px] text-brand-tech/40 tracking-[0.2em] uppercase scramble-data">01 // ARCHITECTURE</span>
                                        <h3 className="font-mono text-[10px] text-white tracking-[0.4em] uppercase scramble-data">INFRASTRUCTURE_DATA</h3>
                                    </div>
                                    <Cpu className="w-4 h-4 text-brand-tech/30" />
                                </div>

                                <div ref={techStackRef} className="space-y-6">
                                    {stack.map((item, i) => (
                                        <div key={i} className="flex justify-between items-end border-b border-white/[0.05] pb-2 group/item">
                                            <span className="text-[9px] font-mono text-gray-600 uppercase tracking-tighter group-hover/item:text-brand-tech transition-colors scramble-data">{item.category}</span>
                                            <span className="text-brand-tech text-right font-bold text-[9px] font-mono tech-tool scramble-data">{item.tools}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Aesthetic Serial Tag */}
                                <div className="absolute -bottom-2 -right-2 bg-brand-tech px-2 py-1 font-mono text-[6px] text-white uppercase font-bold tracking-widest scramble-data">
                                    REF_{id.toUpperCase()}
                                </div>
                            </div>

                            {/* Operational Flow (Grid Layout) */}
                            <div className="grid grid-cols-2 gap-4 reveal-item">
                                <div className="p-6 border border-white/5 bg-white/[0.01] flex flex-col gap-4">
                                    <div className="flex items-center justify-between">
                                        <span className="font-mono text-[7px] text-gray-700 tracking-widest uppercase">OPS_SEQ</span>
                                        <Activity className="w-3 h-3 text-brand-tech/20" />
                                    </div>
                                    <div className="space-y-3">
                                        {process.map((step, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <span className="text-brand-tech/40 font-mono text-[8px] font-bold">{String(i + 1).padStart(2, '0')}</span>
                                                <span className="text-white/40 text-[8px] font-mono uppercase tracking-tighter truncate">{step.title}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-6 border border-white/5 bg-white/[0.01] flex flex-col items-center justify-center gap-4 text-center">
                                    <ShieldCheck className="w-5 h-5 text-brand-tech/30" />
                                    <span className="font-mono text-[6px] text-gray-600 tracking-[0.3em] uppercase leading-relaxed">
                                        SECURE_ENCRYPTION_LINK<br />
                                        VERIFIED_BY_MARCOM
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Branding Zone (60%) */}
                    <div className="flex flex-col gap-12 lg:pl-12 reveal-item">
                        <div className="space-y-12">
                            <div className="flex items-center gap-6 text-brand-tech font-mono text-[8px] tracking-[0.8em] uppercase">
                                <span className="w-12 h-px bg-brand-tech/20" />
                                <span>PROTOCOL__{id.toUpperCase()}</span>
                            </div>

                            <h2 className="text-[10vw] lg:text-[9vw] font-serif leading-[0.75] italic lowercase transition-all tracking-tighter text-white">
                                {title.split(" ").map((word, idx) => (
                                    <span key={idx} className={idx % 2 !== 0 ? "text-brand-tech" : "pr-6"}>
                                        {word}
                                    </span>
                                ))}
                            </h2>

                            <p className="text-xl lg:text-3xl font-mono text-gray-400 leading-tight max-w-2xl lowercase italic tracking-tight opacity-70">
                                {description}
                            </p>

                            <div className="pt-16 border-t border-white/10 grid grid-cols-2 gap-12 reveal-item">
                                {features.map((f, i) => (
                                    <div key={i} className="flex flex-col gap-3 group">
                                        <div className="flex items-center gap-4">
                                            <div className="w-2 h-2 rounded-full border border-brand-tech group-hover:bg-brand-tech transition-all" />
                                            <span className="text-white text-[11px] font-mono font-bold tracking-[0.1em] uppercase group-hover:text-brand-tech transition-colors">{f.title}</span>
                                        </div>
                                        <span className="text-gray-600 font-mono text-[10px] lowercase opacity-50 tracking-tight leading-relaxed pl-6">({f.desc})</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Vertical Coordinate Label */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-32 opacity-10 font-mono text-[6px] text-gray-400 pointer-events-none translate-x-12">
                    <div className="rotate-90 origin-left">COORD_X: {index * 123.4}</div>
                    <div className="rotate-90 origin-left">COORD_Y: {Math.random() * index}</div>
                </div>
            </div>
        </section>
    );
}
