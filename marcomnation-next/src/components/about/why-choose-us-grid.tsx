"use client"

import { motion } from "framer-motion";
import { ShieldCheck, Layers, Clock, Headset, Star, DollarSign, Globe, Lock } from "lucide-react";

const reasons = [
    {
        title: "Impeccable Quality Standards",
        icon: ShieldCheck,
        desc: "Our attention to quality is unmatched with strict quality parameters backed by extensive research and authenticity at all levels. Every deliverable undergoes multi-stage QA before deployment."
    },
    {
        title: "Multidisciplinary Services",
        icon: Layers,
        desc: "From ideation to showcasing your business to the world, we have you covered with our wide range of development and marketing services. Full-stack capability under one roof."
    },
    {
        title: "On-Time Delivery",
        icon: Clock,
        desc: "We understand the value of time and guarantee on-time delivery hassle-free. Projects remain streamlined in every segment through agile sprint management."
    },
    {
        title: "24×7 Customer Support",
        icon: Headset,
        desc: "With an ardent support team, we're available 24/7 via phone, email, and live chat assistance. Real humans, real-time responses."
    },
    {
        title: "Top-Notch Experts",
        icon: Star,
        desc: "We have a galore of proficient creators and developers for all respective fields to help meet your specific needs. Senior engineers, certified designers, growth strategists."
    },
    {
        title: "Affordable for All Businesses",
        icon: DollarSign,
        desc: "We offer affordable quotations for all business types without letting you compromise on quality. Transparent pricing, no hidden fees."
    },
    {
        title: "Global Presence",
        icon: Globe,
        desc: "We are globally recognized for our work with a strong client base in the US, UK, Canada, Dubai, and India. Time-zone flexibility, cultural fluency."
    },
    {
        title: "Safe and Secure",
        icon: Lock,
        desc: "To maintain user faith and belief, we build every app in obedience to security practices that are par excellence. GDPR compliant, SOC 2 workflows."
    }
];

export default function WhyChooseUsGrid() {
    return (
        <section className="py-32 px-6 border-b border-white/10 relative">
            <div className="tech-marker top-12 left-12">REF_SET: DIFFERENTIATION</div>
            <div className="max-w-[1400px] mx-auto">
                <div className="flex items-center gap-6 mb-20">
                    <div className="w-16 h-px bg-brand-tech" />
                    <h2 className="text-[10px] font-mono uppercase tracking-[0.5em] text-brand-tech">Strategic_Vectors</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 overflow-hidden">
                    {reasons.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="p-12 md:p-16 bg-brand-black hover:bg-brand-tech transition-all relative group"
                        >
                            <div className="text-gray-700 font-mono text-[8px] mb-12 uppercase tracking-[0.4em] group-hover:text-white/50">SECTOR_{index + 1}</div>
                            <h3 className="font-serif italic text-3xl lowercase mb-6 group-hover:text-white transition-colors">{item.title}</h3>
                            <p className="text-gray-500 text-[11px] leading-relaxed lowercase mb-12 group-hover:text-white/80 transition-colors font-mono tracking-tight">{item.desc}</p>
                            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-brand-tech group-hover:text-white group-hover:border-white/20 transition-all">
                                <item.icon className="w-3 h-3" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
