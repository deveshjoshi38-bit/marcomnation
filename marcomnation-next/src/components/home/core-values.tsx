"use client"

import { motion } from "framer-motion";
import { Users, Heart, Zap, Lock } from "lucide-react";

const values = [
    {
        title: "Collaborative Approach",
        description: "Work closely with the dedicated team assigned to victoriously tailor-make your vision. From discovery workshops to deployment sprints, we operate as an extension of your organization.",
        icon: Users
    },
    {
        title: "Driven by Values",
        description: "Our values resonate through every line of code and frame we produce. Transparency, confidentiality, and client-centricity define our relationships and work ethics.",
        icon: Lock
    },
    {
        title: "Working with Passion",
        description: "Always on our toes for our next remarkable project. Innovation isn't a department — it's an organizational obsession that powers every deliverable.",
        icon: Zap
    },
    {
        title: "Experience Users Love",
        description: "Flawless digital experiences combining creative vision with technological precision. We merge design thinking with engineering rigor to craft products that convert.",
        icon: Heart
    }
];

export default function CoreValues() {
    return (
        <section className="py-24 px-6 bg-brand-black">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-12 border border-white/5 bg-brand-tech/[0.01] hover:bg-brand-tech/[0.03] transition-all group relative overflow-hidden"
                        >
                            <div className="tech-marker top-4 right-4 text-[6px]">V_REF: {index + 1}</div>
                            <div className="w-12 h-12 border border-brand-tech/30 flex items-center justify-center mb-10 text-brand-tech group-hover:bg-brand-tech group-hover:text-white transition-all">
                                <value.icon className="w-5 h-5" />
                            </div>
                            <h3 className="text-2xl font-serif italic lowercase text-white mb-6 group-hover:text-brand-tech transition-colors">{value.title}</h3>
                            <p className="text-gray-500 font-mono text-xs leading-relaxed lowercase mb-8">{value.description}</p>
                            <div className="w-full h-px bg-white/5 mt-auto" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
