"use client"

import { motion } from "framer-motion";

const stats = [
    { label: "Clients", value: "50+" },
    { label: "Global Hubs", value: "4" },
    { label: "Support", value: "24/7" },
    { label: "Transparency", value: "100%" },
];

export default function StatsBar() {
    return (
        <section className="py-10 border-y border-white/5 bg-white/5 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-mono">{stat.value}</div>
                            <div className="text-xs text-brand-cyan uppercase tracking-widest">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
