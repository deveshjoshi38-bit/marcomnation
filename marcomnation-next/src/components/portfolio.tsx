"use client"

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Alienware Product Shoot",
        category: "Product Photography",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=800&fit=crop",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Ford Endeavour Video",
        category: "Video Production",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Harley Davidson",
        category: "Photoshoot",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76fdd9e2?w=800&h=800&fit=crop",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Vivo Event Promo",
        category: "Promotional Events",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=800&fit=crop",
        className: "md:col-span-1 md:row-span-1",
    }
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-24 px-6 relative bg-brand-black">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-magenta text-glow">Works</span></h2>
                        <p className="text-gray-400 max-w-xl">
                            Showcasing the intersection of traditional craftsmanship and AI acceleration.
                        </p>
                    </div>
                    <Link href="/work" className="text-sm font-mono text-brand-cyan uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2 group">
                        View All Projects <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={cn(
                                "group relative aspect-square rounded-3xl overflow-hidden cursor-pointer border border-white/5 bg-white/5",
                                project.className
                            )}
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${project.image})` }}
                            ></div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        {project.category}
                                    </span>
                                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                </div>
                            </div>

                            {/* Hover Border Glow */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-magenta/50 rounded-3xl transition-colors duration-300 pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
