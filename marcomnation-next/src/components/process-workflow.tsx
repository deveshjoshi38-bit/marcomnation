"use client"

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, Lightbulb, Zap, Rocket, Layers } from "lucide-react";

const steps = [
    {
        id: "ideation",
        title: "Ideation",
        icon: Lightbulb,
        description: "Prompt engineering & strategic concepting.",
        link: "/services/ideation"
    },
    {
        id: "production",
        title: "AI Production",
        icon: Zap,
        description: "Generative video (Veo) & asset creation.",
        link: "/services/production"
    },
    {
        id: "refinement",
        title: "Refinement",
        icon: Layers,
        description: "Expert human polish & compositing.",
        link: "/services/refinement"
    },
    {
        id: "deployment",
        title: "Deployment",
        icon: Rocket,
        description: "Multi-channel distribution & optimization.",
        link: "/services/deployment"
    }
];

export default function ProcessWorkflow() {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">The <span className="text-brand-cyan">Neural Workflow</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Our proprietary pipeline merging human creativity with machine speed.
                        Click any node to explore the deep mechanics.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-magenta/50 to-transparent -translate-y-[2.5rem] z-0"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative z-10"
                        >
                            <Link href={step.link} className="group block h-full">
                                <div className="glass-panel p-8 rounded-2xl h-full transition-all duration-300 group-hover:border-brand-cyan/50 group-hover:bg-white/10 relative overflow-hidden">
                                    {/* Active Glow */}
                                    <div className="absolute inset-0 bg-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                    <div className="flex flex-col items-center text-center relative z-10">
                                        <div className="w-16 h-16 rounded-full bg-brand-black border border-white/20 flex items-center justify-center mb-6 group-hover:border-brand-cyan group-hover:text-brand-cyan transition-colors shadow-lg shadow-black/50">
                                            <step.icon className="w-8 h-8" />
                                        </div>

                                        <h3 className="text-xl font-bold mb-2 group-hover:text-brand-cyan transition-colors">{step.title}</h3>
                                        <p className="text-sm text-gray-400 mb-6">{step.description}</p>

                                        <div className="mt-auto inline-flex items-center text-xs font-mono text-brand-magenta uppercase tracking-widest group-hover:text-white transition-colors">
                                            Deep Dive <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
