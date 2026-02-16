"use client"

import React, { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger, ScrollSmoother } from "@/lib/gsap";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Only run on non-touch devices for best performance with ScrollSmoother
        // Though ScrollSmoother handles touch fine, we usually don't need it there
        const smoother = ScrollSmoother.create({
            wrapper: wrapperRef.current,
            content: contentRef.current,
            smooth: 1.5,
            effects: true,
            normalizeScroll: true,
        });

        return () => {
            smoother.kill();
        };
    }, { scope: wrapperRef });

    return (
        <div id="smooth-wrapper" ref={wrapperRef} className="overflow-hidden w-full h-full fixed inset-0">
            <div id="smooth-content" ref={contentRef} className="relative w-full overflow-visible">
                {children}
            </div>
        </div>
    );
}
