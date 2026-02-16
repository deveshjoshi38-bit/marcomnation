"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-brand-black">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                {/* Holographic City Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-screen"
                    style={{ backgroundImage: 'url(/assets/hero-city.png)' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-brand-black/20 via-brand-black/80 to-brand-black"></div>

                {/* Veo Video Placeholder / Gradient Blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] hero-orb rounded-full animate-float opacity-60"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-6 inline-block"
                >
                    <span className="px-4 py-1.5 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan text-xs font-mono tracking-widest uppercase backdrop-blur-md">
                        Engineering Brand Excellence Through AI
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-none"
                >
                    Tech meets <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-magenta text-glow">
                        Cinema
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
                >
                    Marcomnation transforms business visions into reality through the convergence of
                    <span className="text-white font-medium"> world-class AI</span>,
                    <span className="text-white font-medium"> cinematic storytelling</span>, and
                    <span className="text-white font-medium"> engineering excellence</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <Link href="/contact-us">
                        <Button variant="neon" size="lg" className="group">
                            Start Your Project
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <Link href="/our-portfolio">
                        <Button variant="outline" size="lg" className="rounded-full px-8 border-white/20 hover:bg-white/10 group">
                            <Play className="mr-2 w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
                            View Showreel
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* Floating Elements mimicking Huly */}
            <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-10 hidden lg:block glass-panel p-4 rounded-xl max-w-xs"
            >
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <span className="text-xs font-mono text-gray-400">REC 00:04:12</span>
                </div>
                <div className="text-sm font-bold text-white mb-1">Veo Generation Active</div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-cyan w-2/3"></div>
                </div>
            </motion.div>

            <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 right-10 hidden lg:block glass-panel p-4 rounded-xl max-w-xs"
            >
                <div className="text-xs font-mono text-brand-magenta mb-2">&gt; PROMPT_GENERATED</div>
                <div className="text-sm text-gray-300">"Cinematic shot of a futuristic city with neon lights..."</div>
            </motion.div>
        </section>
    );
}
