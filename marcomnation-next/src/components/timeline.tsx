"use client"

import { motion } from "framer-motion";

const milestones = [
    { year: "2020", title: "Genesis", description: "Founded as a boutique creative agency focusing on high-end video production." },
    { year: "2022", title: "Global Scale", description: "Expanded operations to US, UK, and Dubai. Established 24/7 delivery pipeline." },
    { year: "2024", title: "The Pivot", description: "Integrated Midjourney & GPT-4 into core workflows. 300% efficiency gain." },
    { year: "2026", title: "Tech meets Cinema", description: "Full deployment of Veo/Sora visual pipelines. Launching Marcomnation proprietary AI tools." },
];

export default function Timeline() {
    return (
        <div className="py-24 relative">
            <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-brand-cyan/50 to-transparent"></div>

            <div className="space-y-12">
                {milestones.map((item, index) => (
                    <motion.div
                        key={item.year}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                        <div className="hidden md:block w-5/12"></div>

                        <div className="absolute left-0 md:left-1/2 w-10 h-10 -translate-x-1/2 rounded-full border-4 border-brand-black bg-brand-cyan shadow-[0_0_20px_#61deed] z-10 flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>

                        <div className="w-full md:w-5/12 pl-12 md:pl-0">
                            <div className="glass-panel p-6 rounded-xl border-l-4 border-l-brand-cyan/50 md:border-l-glass-border">
                                <span className="text-4xl font-bold text-white/10 absolute right-4 top-2 font-mono">{item.year}</span>
                                <h3 className="text-xl font-bold text-brand-cyan mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
