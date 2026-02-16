"use client"

import React, { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function HudCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);
    const labelRef = useRef<HTMLDivElement>(null);
    const [label, setLabel] = useState("");

    useGSAP(() => {
        if (typeof window === "undefined" || !cursorRef.current) return;

        const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.4, ease: "power3" });
        const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.4, ease: "power3" });

        const ringScaleTo = gsap.quickTo(ringRef.current, "scale", { duration: 0.4, ease: "power3" });
        const ringRotateTo = gsap.quickTo(ringRef.current, "rotation", { duration: 0.4, ease: "power3" });

        const onMouseMove = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isMagnetic = target.closest('[data-cursor="magnetic"]');
            const isLink = target.closest('a, button');

            if (isMagnetic) {
                const rect = (isMagnetic as HTMLElement).getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                xTo(centerX);
                yTo(centerY);
                ringScaleTo(1.5);
                ringRotateTo(45);
                setLabel("LOCK_ON");
            } else if (isLink) {
                xTo(e.clientX);
                yTo(e.clientY);
                ringScaleTo(1.2);
                ringRotateTo(0);
                setLabel("INTERACT");
            } else {
                xTo(e.clientX);
                yTo(e.clientY);
                ringScaleTo(1);
                ringRotateTo(0);
                setLabel("");
            }
        };

        window.addEventListener("mousemove", onMouseMove);
        return () => window.removeEventListener("mousemove", onMouseMove);
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 pointer-events-none z-[9999] hidden md:flex items-center justify-center mix-blend-difference"
        >
            {/* HUD Main Ring */}
            <div
                ref={ringRef}
                className="absolute inset-0 border border-brand-tech/60 rounded-full flex items-center justify-center transition-colors"
                style={{ borderWidth: '0.5px' }}
            >
                {/* HUD Crosshairs */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-1 bg-brand-tech/60" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-1 bg-brand-tech/60" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-px bg-brand-tech/60" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-px bg-brand-tech/60" />
            </div>

            {/* Core Dot */}
            <div
                ref={dotRef}
                className="w-1 h-1 bg-brand-tech rounded-full shadow-[0_0_10px_var(--color-brand-tech)]"
            />

            {/* Dynamic Data Label */}
            {label && (
                <div
                    ref={labelRef}
                    className="absolute left-10 top-0 whitespace-nowrap font-mono text-[8px] tracking-[0.4em] text-brand-tech uppercase"
                >
                    {label} <span className="opacity-50">[{Math.random().toString(36).substring(7).toUpperCase()}]</span>
                </div>
            )}
        </div>
    );
}
