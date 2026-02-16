"use client"

import { useRef } from "react";
import { ShieldCheck, Layers, Clock, Headset, Star, DollarSign, Globe, Lock } from "lucide-react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

const reasons = [
    { title: "Quality Standards", icon: ShieldCheck, desc: "Strict quality parameters backed by extensive research.", ref: "Q_01" },
    { title: "Multidisciplinary", icon: Layers, desc: "Full-stack capability under one roof.", ref: "M_02" },
    { title: "On-Time Delivery", icon: Clock, desc: "Projects remain streamlined via agile sprints.", ref: "D_03" },
    { title: "24/7 Support", icon: Headset, desc: "Real humans, real-time responses.", ref: "S_04" },
    { title: "Top-Notch Experts", icon: Star, desc: "Senior engineers and certified strategists.", ref: "E_05" },
    { title: "Affordability", icon: DollarSign, desc: "Transparent pricing, no hidden fees.", ref: "A_06" },
    { title: "Global Presence", icon: Globe, desc: "Clients in US, UK, Canada, Dubai, India.", ref: "G_07" },
    { title: "Safe & Secure", icon: Lock, desc: "GDPR compliant, SOC 2 compliant workflows.", ref: "L_08" },
];

function FeatureCard({ item, index }: { item: typeof reasons[0], index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);
    const refTextRef = useRef<HTMLSpanElement>(null);
    const beamsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const card = cardRef.current;
        const glow = glowRef.current;
        const refText = refTextRef.current;
        const beams = beamsRef.current;
        if (!card || !glow) return;

        // Entrance animation for beams - Triggered by Scroll
        if (beams) {
            gsap.from(beams.children, {
                scale: 0,
                opacity: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: beams,
                    start: "top 85%",
                }
            });
        }

        const xTo = gsap.quickTo(card, "rotationY", { duration: 0.4, ease: "power2.out" });
        const yTo = gsap.quickTo(card, "rotationX", { duration: 0.4, ease: "power2.out" });
        const zTo = gsap.quickTo(card, "z", { duration: 0.4, ease: "power2.out" });
        const glowX = gsap.quickTo(glow, "xPercent", { duration: 0.4, ease: "power2.out" });
        const glowY = gsap.quickTo(glow, "yPercent", { duration: 0.4, ease: "power2.out" });

        const onMouseMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateY = ((x - centerX) / centerX) * 8;
            const rotateX = ((centerY - y) / centerY) * 8;

            xTo(rotateY);
            yTo(rotateX);

            card.style.setProperty("--mouse-x", `${(x / rect.width) * 100}%`);
            card.style.setProperty("--mouse-y", `${(y / rect.height) * 100}%`);

            const px = (x / rect.width) * 100 - 50;
            const py = (y / rect.height) * 100 - 50;
            glowX(px);
            glowY(py);
        };

        const onMouseEnter = () => {
            gsap.to(glow, { opacity: 0.8, scale: 1.2, duration: 0.4 });
            zTo(20);

            if (refText) {
                const originalText = item.ref;
                const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
                let iterations = 0;

                const interval = setInterval(() => {
                    refText.innerText = originalText
                        .split("")
                        .map((char, i) => {
                            if (i < iterations) return originalText[i];
                            return chars[Math.floor(Math.random() * chars.length)];
                        })
                        .join("");

                    if (iterations >= originalText.length) clearInterval(interval);
                    iterations += 1 / 3;
                }, 30);
            }
        };

        const onMouseLeave = () => {
            xTo(0);
            yTo(0);
            zTo(0);
            gsap.to(glow, { opacity: 0, scale: 1, duration: 0.6 });
            if (refText) refText.innerText = item.ref;
        };

        card.addEventListener("mousemove", onMouseMove);
        card.addEventListener("mouseenter", onMouseEnter);
        card.addEventListener("mouseleave", onMouseLeave);

        return () => {
            card.removeEventListener("mousemove", onMouseMove);
            card.removeEventListener("mouseenter", onMouseEnter);
            card.removeEventListener("mouseleave", onMouseLeave);
        };
    }, { scope: cardRef });

    return (
        <div className="relative group" data-cursor="magnetic">
            {/* Ambient Corner Beams (Visible by default, hidden on hover) */}
            <div ref={beamsRef}>
                <div className="absolute top-0 left-0 w-8 h-px bg-brand-tech opacity-50 group-hover:opacity-0 transition-opacity duration-500" />
                <div className="absolute top-0 left-0 h-8 w-px bg-brand-tech opacity-50 group-hover:opacity-0 transition-opacity duration-500" />

                <div className="absolute top-0 right-0 w-8 h-px bg-brand-tech opacity-50 group-hover:opacity-0 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 h-8 w-px bg-brand-tech opacity-50 group-hover:opacity-0 transition-opacity duration-500" />

                <div className="absolute bottom-0 left-0 w-8 h-px bg-brand-tech opacity-50 group-hover:opacity-0 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 h-8 w-px bg-brand-tech opacity-50 group-hover:opacity-0 transition-opacity duration-500" />

                <div className="absolute bottom-0 right-0 w-8 h-px bg-brand-tech opacity-50 group-hover:opacity-0 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 h-8 w-px bg-brand-tech opacity-50 group-hover:opacity-0 transition-opacity duration-500" />
            </div>

            {/* The "Beam Light" Glow - Base Ambient (Behind) */}
            <div
                ref={glowRef}
                className="absolute inset-0 pointer-events-none opacity-0 z-0 bg-[radial-gradient(circle_at_center,var(--color-brand-tech)_0%,transparent_70%)] filter blur-3xl mix-blend-screen transition-opacity"
                style={{ width: "160%", height: "160%", left: "-30%", top: "-30%" }}
            />

            <div
                ref={cardRef}
                style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
                className="relative z-10 p-6 bg-brand-black border border-white/5 group-hover:border-brand-tech/50 transition-all h-full flex flex-col justify-between"
            >
                {/* Harsh Overlap (On Top) */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-40 z-20 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),var(--color-brand-tech)_0%,transparent_60%)] mix-blend-color-dodge transition-opacity duration-300"
                />

                <div className="relative z-10">
                    <div className="text-brand-tech mb-4 flex justify-between items-start text-glow">
                        <div className="w-8 h-8 border border-brand-tech/30 flex items-center justify-center group-hover:bg-brand-tech group-hover:text-white transition-all duration-500 shadow-[0_0_10px_rgba(86,67,253,0.3)]">
                            <item.icon className="w-4 h-4" />
                        </div>
                        <span ref={refTextRef} className="font-mono text-[6px] text-gray-700 tracking-[0.5em]">{item.ref}</span>
                    </div>
                    <h3 className="text-lg font-serif italic text-white lowercase mb-3 leading-tight group-hover:text-brand-tech transition-colors">{item.title}</h3>
                    <p className="text-[10px] text-gray-500 font-mono lowercase normal-case leading-relaxed">{item.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 relative z-10">
                    <div className="flex justify-between items-center text-[7px] font-mono text-gray-700 tracking-widest uppercase">
                        <span>STATUS: ACTIVE</span>
                        <div
                            className="w-1.5 h-1.5 rounded-full bg-brand-tech opacity-0 group-hover:opacity-100 transition-opacity animate-pulse shadow-[0_0_8px_var(--color-brand-tech)]"
                            style={{ animationDelay: `${Math.random() * 2}s` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function WhyChooseUs() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const scannerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!scannerRef.current) return;

        gsap.to(scannerRef.current, {
            y: "400px",
            opacity: 0,
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            }
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="py-24 px-6 bg-brand-black relative overflow-hidden">
            {/* Background Scanning Line */}
            <div
                ref={scannerRef}
                className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-transparent via-brand-tech/10 to-transparent pointer-events-none z-0"
            />

            <div className="tech-marker top-12 right-12">DATA_ARCH: PROTOCOLS</div>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-16 flex items-center gap-12">
                    <div className="flex-grow h-px bg-white/10" />
                    <div className="text-center px-6">
                        <h2 className="text-5xl md:text-6xl font-serif italic lowercase text-white mb-2 tracking-tighter">
                            leave no page <span className="text-brand-tech not-italic">unturned.</span>
                        </h2>
                        <p className="text-[10px] font-mono tracking-[0.5em] uppercase text-gray-600 mt-4">Guidance through every vector of your journey.</p>
                    </div>
                    <div className="flex-grow h-px bg-white/10" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {reasons.map((item, i) => (
                        <FeatureCard key={item.title} item={item} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
