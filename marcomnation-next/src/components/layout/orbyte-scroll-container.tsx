"use client"

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import PlanetCore from "@/components/visuals/planet-core";
import { cn } from "@/lib/utils";

interface ContentBoxProps {
    title: string;
    description: string;
    progress: number;
    start: number;
    end: number;
    children?: React.ReactNode;
}

function ContentBox({ title, description, progress, start, end, children }: ContentBoxProps) {
    const isActive = progress >= start && progress <= end;
    // Normalized progress within this specific range
    const innerProgress = Math.max(0, Math.min(1, (progress - start) / (end - start)));

    // Opacity pulse: fade in then fade out
    const opacity = innerProgress < 0.2
        ? innerProgress * 5
        : innerProgress > 0.8
            ? (1 - innerProgress) * 5
            : 1;

    if (!isActive) return null;

    return (
        <div
            className="fixed inset-x-0 top-1/2 -translate-y-1/2 px-10 md:px-32 pointer-events-none flex flex-col items-start gap-6 z-20"
            style={{ opacity }}
        >
            <div className="flex items-center gap-4 text-brand-tech">
                <span className="w-12 h-px bg-brand-tech" />
                <span className="font-mono text-xs tracking-widest uppercase mb-1">module_status: calibrated</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white uppercase leading-none">
                {title}
            </h2>
            <div className="pl-6 border-l border-brand-tech/30">
                <p className="text-xl md:text-2xl text-gray-400 font-mono italic max-w-3xl leading-relaxed">
                    /** {description} */
                </p>
                {children}
            </div>
        </div>
    );
}

export default function OrbyteScrollContainer({ content }: { content: any[] }) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: scrollRef.current,
            start: "top top",
            end: "bottom bottom",
            onUpdate: (self) => {
                setProgress(self.progress);
            }
        });
    }, []);

    // Interactive Sound triggers
    const playHover = () => {
        const audio = new Audio("/sounds/hover.mp3");
        audio.volume = 0.2;
        audio.play().catch(() => { });
    };

    const tech = content.find(s => s.id === "technology");
    const cinema = content.find(s => s.id === "cinema");
    const branding = content.find(s => s.id === "branding");

    return (
        <div ref={scrollRef} className="relative h-[700vh] bg-[#090909]">
            {/* Visual Backbone */}
            <PlanetCore progress={progress} />

            {/* Kinetic Content Stages */}
            {tech && (
                <ContentBox
                    title={tech.title}
                    description={tech.description}
                    progress={progress}
                    start={0.1}
                    end={0.3}
                >
                    <div className="mt-8 flex flex-wrap gap-4 pointer-events-auto">
                        {tech.features.map((tag: string) => (
                            <button
                                key={tag}
                                onMouseEnter={playHover}
                                className="radial-button"
                            >
                                <span>{tag}</span>
                            </button>
                        ))}
                    </div>
                </ContentBox>
            )}

            {cinema && (
                <ContentBox
                    title={cinema.title}
                    description={cinema.description}
                    progress={progress}
                    start={0.35}
                    end={0.55}
                >
                    <div className="mt-8 flex flex-wrap gap-4 pointer-events-auto">
                        {cinema.features.map((tag: string) => (
                            <button
                                key={tag}
                                onMouseEnter={playHover}
                                className="radial-button"
                            >
                                <span>{tag}</span>
                            </button>
                        ))}
                    </div>
                </ContentBox>
            )}

            {branding && (
                <ContentBox
                    title={branding.title}
                    description={branding.description}
                    progress={progress}
                    start={0.6}
                    end={0.8}
                >
                    <div className="mt-8 flex flex-wrap gap-4 pointer-events-auto">
                        {branding.features.map((tag: string) => (
                            <button
                                key={tag}
                                onMouseEnter={playHover}
                                className="radial-button"
                            >
                                <span>{tag}</span>
                            </button>
                        ))}
                    </div>
                </ContentBox>
            )}

            {/* Fixed Overlay Identifiers (Orbyte Signature) */}
            <div className="fixed bottom-10 left-10 z-50 flex items-center gap-4 text-xs font-mono text-gray-500 uppercase tracking-widest hidden md:flex">
                <span>COORDINATE: {Math.round(progress * 1000)} / {Math.round(progress * 360)}°</span>
                <span className="text-brand-tech">|</span>
                <span>STATUS: STABLE</span>
            </div>
        </div>
    );
}
