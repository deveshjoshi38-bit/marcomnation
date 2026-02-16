"use client"

import FadeIn from "@/components/fade-in";
import { ArrowRight, Code, Video, Megaphone, Smartphone } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Platform Engineering",
        description: "Specialized in high-performance web and mobile infrastructure using Next.js, React Native, and distributed systems.",
        icon: Code,
        stack: "NEXT.JS / TS / NODE",
        link: "/our-services?s=dev"
    },
    {
        title: "Cinematic Production",
        description: "High-end video production and photography merged with Veo 3 AI generation for rapid cinematic deployment.",
        icon: Video,
        stack: "RED / VEO / ADOBE",
        link: "/our-services?s=prod"
    },
    {
        title: "Growth Protocols",
        description: "Data-driven marketing strategies, SEO optimization, and brand scaling through performance-led execution.",
        icon: Megaphone,
        stack: "META / GOOGLE / SEO",
        link: "/our-services?s=growth"
    },
    {
        title: "Mobile Architecture",
        description: "Crafting seamless mobile experiences that bridge the gap between technical complexity and user delight.",
        icon: Smartphone,
        stack: "RN / EXPO / FIREBASE",
        link: "/our-services?s=mobile"
    }
];

export default function ServicesOverview() {
    return (
        <section className="py-24 px-6 bg-brand-black border-y border-white/10 blueprint-grid relative">
            <div className="absolute top-0 right-[25%] h-full w-px tech-line-v opacity-10" />

            <div className="max-w-[1400px] mx-auto">
                <div className="flex items-center gap-4 mb-24">
                    <div className="w-12 h-px bg-brand-tech" />
                    <h2 className="text-[10px] font-mono uppercase tracking-[0.5em] text-brand-tech">Capabilities_Matrix</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 overflow-hidden text-white">
                    {services.map((service, index) => (
                        <FadeIn key={service.title} delay={index * 0.1} className="bg-brand-black">
                            <div
                                className="group relative p-12 md:p-16 overflow-hidden hover:bg-brand-tech/[0.02] transition-all h-full flex flex-col items-start border-white/5"
                            >
                                <div className="tech-marker top-4 right-4 text-[6px]">REF_ID: CORE_{index + 1}</div>

                                <div className="relative z-10 flex flex-col h-full items-start">
                                    <div className="w-16 h-16 border border-brand-tech/30 flex items-center justify-center mb-12 text-brand-tech group-hover:bg-brand-tech group-hover:text-white transition-all duration-500">
                                        <service.icon className="w-6 h-6" />
                                    </div>

                                    <h3 className="text-4xl md:text-5xl font-serif italic mb-6 lowercase tracking-tighter">
                                        {service.title.split(" ").map((word, i) => (
                                            <span key={i} className={i % 2 !== 0 ? "text-brand-tech pr-2" : "pr-2"}>{word}</span>
                                        ))}
                                    </h3>
                                    <p className="text-gray-500 font-mono text-sm leading-relaxed mb-12 flex-grow lowercase">
                                        {service.description}
                                    </p>

                                    <div className="mt-auto w-full pt-8 border-t border-white/5">
                                        <div className="flex justify-between items-center group/link">
                                            <div className="text-[8px] font-mono text-gray-600 uppercase">Infrastructure: {service.stack}</div>
                                            <Link href={service.link} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/link:border-brand-tech group-hover/link:bg-brand-tech transition-all">
                                                <ArrowRight className="w-4 h-4 text-white" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
