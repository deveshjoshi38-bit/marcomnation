"use client"

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AurigaLoader({ onComplete }: { onComplete?: () => void }) {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsVisible(false);
                        onComplete?.();
                    }, 800);
                    return 100;
                }
                // Artificial easing for a more technical feel
                const remaining = 100 - prev;
                const jump = Math.max(1, Math.floor(Math.random() * (remaining / 5)));
                return prev + jump;
            });
        }, 150);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[100] bg-brand-black flex flex-col items-center justify-center p-6 overflow-hidden"
                >
                    {/* Background Structural Lines */}
                    <div className="absolute inset-0 blueprint-grid opacity-20" />
                    <div className="absolute top-1/2 left-0 w-full h-px tech-line-h" />
                    <div className="absolute left-1/2 top-0 h-full w-px tech-line-v" />

                    {/* Core Content */}
                    <div className="relative z-10 w-full max-w-md">
                        <div className="flex justify-between items-end mb-4 font-mono text-[10px] tracking-[0.4em] text-brand-tech">
                            <span>INITIALIZING_PROTOCOL</span>
                            <span>v.2026.01</span>
                        </div>

                        <div className="h-1px w-full bg-white/5 relative overflow-hidden">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-brand-tech"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                            />
                        </div>

                        <div className="mt-8 flex justify-between items-start">
                            <div className="font-serif text-8xl text-white leading-none tracking-tighter italic">
                                {progress}<span className="text-brand-tech text-4xl not-italic">%</span>
                            </div>

                            <div className="text-right space-y-2 font-mono text-[8px] text-gray-500 uppercase">
                                <div>L_SYS: ALPHA_NODE</div>
                                <div>S_STATUS: OK</div>
                                <div>COORD: 40.7128° N, 74.0060° W</div>
                            </div>
                        </div>

                        {/* Geometric Animation */}
                        <div className="mt-20 flex justify-center">
                            <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-40">
                                <motion.rect
                                    x="10" y="10" width="40" height="40"
                                    stroke="var(--color-brand-tech)"
                                    strokeWidth="1"
                                    fill="none"
                                    animate={{
                                        rotate: Number(progress) * 3.6,
                                        scale: [1, 1.1, 1],
                                        opacity: [0.2, 0.5, 0.2]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <motion.circle
                                    cx="30" cy="30" r="15"
                                    stroke="var(--color-brand-tech)"
                                    strokeWidth="1"
                                    fill="none"
                                    animate={{
                                        scale: [1.2, 0.8, 1.2],
                                        opacity: [0.1, 0.4, 0.1]
                                    }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                            </svg>
                        </div>
                    </div>

                    <div className="absolute bottom-12 left-12 font-mono text-[8px] text-brand-tech/30 uppercase vertical-text tracking-[0.5em]">
                        MARCOMNATION_DYNAMICS
                    </div>
                </motion.div>
            )
            }
        </AnimatePresence >
    );
}
