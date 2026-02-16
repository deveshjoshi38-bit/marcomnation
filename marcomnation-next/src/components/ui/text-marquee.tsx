"use client"

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface TextMarqueeProps {
    text: string;
    className?: string;
    speed?: number;
    repeat?: number;
}

export default function TextMarquee({
    text,
    className,
    speed = 20,
    repeat = 4
}: TextMarqueeProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const textElement = textRef.current;

        if (!container || !textElement) return;

        // Clone the text content enough times to fill width + buffer
        // We're using a simple CSS animation or GSAP tween approach
        // For GSAP infinite loop:

        const content = textElement.innerHTML;
        textElement.innerHTML = content.repeat(repeat);

        const ctx = gsap.context(() => {
            const totalWidth = textElement.scrollWidth / 2; // Assuming we double it effectively in motion

            // Allow simple continuous scroll
            // We'll treat the textElement as a long strip

            gsap.to(textElement, {
                xPercent: -50,
                ease: "none",
                duration: speed,
                repeat: -1,
            });
        }, container);

        return () => ctx.revert();
    }, [text, speed, repeat]);

    return (
        <div ref={containerRef} className={cn("overflow-hidden whitespace-nowrap bg-brand-black", className)}>
            {/* We need two copies for seamless loop if using xPercent -50 method on a container 
                 Actually, simpler: Just repeat the text inside one big element and move it. 
             */}
            <div ref={textRef} className="inline-block relative will-change-transform">
                {/* We'll inject repeated text via JS or just map here if we want to be React-pure, 
                    but JS injection ensures we control the exact structure for GSAP.
                    Let's just render the text multiple times here for simplicity/SSR safety. 
                */}
                {[...Array(repeat)].map((_, i) => (
                    <span key={i} className="inline-block px-4">
                        {text} <span className="text-brand-tech/30 mx-4">•</span>
                    </span>
                ))}
                {/* Duplicate the set for the loop buffer */}
                {[...Array(repeat)].map((_, i) => (
                    <span key={`dup-${i}`} className="inline-block px-4">
                        {text} <span className="text-brand-tech/30 mx-4">•</span>
                    </span>
                ))}
            </div>
        </div>
    );
}
