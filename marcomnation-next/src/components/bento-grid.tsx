"use client"

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Video, Code2, Camera, Zap, BarChart, Film } from "lucide-react";
import Link from "next/link";

const features = [
    {
        title: "Visual Intelligence",
        description: "From Alienware product shoots to Ford campaigns. Supercharged with Veo AI variants.",
        icon: Video,
        className: "md:col-span-2",
    },
    {
        title: "Digital Ecosystems",
        description: "Immersive interfaces with AI video embeds. Tech + storytelling.",
        icon: Code2,
        className: "md:col-span-1",
    },
    {
        title: "Dynamic Assets",
        description: "Generative design systems that evolve with market trends.",
        icon: Camera,
        className: "md:col-span-1",
    },
    {
        title: "Adaptive Identity",
        description: "End-to-end ideation to AI-accelerated execution.",
        icon: Zap,
        className: "md:col-span-2",
    },
    {
        title: "Growth Engines",
        description: "PPC/SEO + YouTube AI optimization (Suno + Veo).",
        icon: BarChart,
        className: "md:col-span-1",
    },
    {
        title: "Future Filmmaking",
        description: "Developing prompt-driven cinematic pipelines.",
        icon: Film,
        className: "md:col-span-1",
    },
];

export default function BentoGrid() {
    return (
        <section id="features" className="py-24 px-6 relative bg-brand-black">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-glass-border to-transparent"></div>

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-brand-magenta font-mono text-xs tracking-widest uppercase mb-4 block">Core Capabilities</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-magenta">New Era</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Merging traditional cinematic excellence with frontier AI technology.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={cn(
                                "glass-panel p-0 rounded-3xl relative group overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(97,222,237,0.15)] hover:border-brand-cyan/30",
                                feature.className
                            )}
                        >
                            <Link href="/services" className="block p-8 h-full">
                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-brand-cyan group-hover:text-white group-hover:bg-brand-cyan/20 transition-colors">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                                    <p className="text-gray-400 leading-relaxed font-light text-sm">{feature.description}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
