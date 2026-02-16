"use client"

import React, { useMemo, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function SpaceBackground() {
    const starCount = 60;
    const warpCount = 40;
    const containerRef = useRef<HTMLDivElement>(null);

    const stars = useMemo(() => {
        return Array.from({ length: starCount }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.5 + 0.1,
        }));
    }, []);

    const warpParticles = useMemo(() => {
        return Array.from({ length: warpCount }).map((_, i) => ({
            id: i,
            angle: Math.random() * Math.PI * 2,
            distance: Math.random() * 50 + 10,
            size: Math.random() * 1.5 + 0.5,
            duration: Math.random() * 2 + 1,
            delay: Math.random() * 2,
        }));
    }, []);

    useGSAP(() => {
        // Star blinking animation
        gsap.to(".technical-star", {
            opacity: 0.1,
            duration: "random(1, 3)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Warp Speed Logic (Particles coming at the screen)
        warpParticles.forEach((p, i) => {
            const el = document.querySelector(`.warp-${i}`);
            if (!el) return;

            gsap.set(el, { x: 0, y: 0, scale: 0, opacity: 0 });

            const animate = () => {
                const targetX = Math.cos(p.angle) * 1000;
                const targetY = Math.sin(p.angle) * 1000;

                gsap.fromTo(el,
                    { x: 0, y: 0, scale: 0, opacity: 0 },
                    {
                        x: targetX,
                        y: targetY,
                        scale: 4,
                        opacity: 0.8,
                        duration: p.duration,
                        delay: p.delay,
                        ease: "power2.in",
                        onComplete: animate
                    }
                );
            };
            animate();
        });

        // Grid Noise Pulse
        gsap.to(".blueprint-grid", {
            opacity: 0.15,
            duration: 0.1,
            repeat: -1,
            yoyo: true,
            ease: "none"
        });

    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#020202]">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="space-layer absolute inset-0 w-full h-full flex items-center justify-center">

                {/* Midlife Blueprint Grid v2 */}
                <div className="absolute inset-0 blueprint-grid opacity-10"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
                        `,
                        backgroundSize: '100px 100px'
                    }}
                />

                {/* Grid Intersection Markers (+) */}
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `radial-gradient(circle, var(--color-brand-tech) 1px, transparent 0)`,
                    backgroundSize: '100px 100px',
                    backgroundPosition: '-0.5px -0.5px'
                }} />

                {/* Static Star Field */}
                <svg width="100%" height="100%" className="absolute inset-0 opacity-20">
                    {stars.map((star) => (
                        <circle
                            key={star.id}
                            cx={`${star.x}%`}
                            cy={`${star.y}%`}
                            r={star.size * 0.5}
                            fill="var(--color-brand-tech)"
                            fillOpacity={star.opacity}
                            className="technical-star"
                        />
                    ))}
                </svg>

                {/* Warp Field */}
                <div className="relative w-4 h-4">
                    {warpParticles.map((p, i) => (
                        <div
                            key={i}
                            className={`warp-${i} absolute top-1/2 left-1/2 w-px h-px bg-brand-tech`}
                            style={{
                                boxShadow: `0 0 ${p.size * 4}px var(--color-brand-tech)`,
                                width: `${p.size}px`,
                                height: `${p.size}px`,
                                borderRadius: '50%'
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Marginal Technical Coordinates */}
            <div className="absolute inset-0 p-8 border border-white/5 pointer-events-none opacity-20 flex flex-col justify-between font-mono text-[6px] text-gray-400">
                <div className="flex justify-between items-start">
                    <div>LAT: 40.7128° N<br />LNG: 74.0060° W</div>
                    <div className="text-right">SECTOR: MARCOM_01<br />ALT: 320,000M</div>
                </div>
                <div className="flex justify-between items-end">
                    <div>VECTOR: [1.02, 0.45, -0.12]<br />TIME: {new Date().toLocaleTimeString([], { hour12: false })}</div>
                    <div className="text-right">SIGNAL_LOCK: SECURE<br />SYS_OS: MARCOM_v5.4</div>
                </div>
            </div>
        </div>
    );
}
