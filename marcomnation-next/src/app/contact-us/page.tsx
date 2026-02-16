"use client"

import FadeIn from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactUsPage() {
    return (
        <main className="min-h-screen bg-brand-black text-white pt-32 font-mono blueprint-grid uppercase text-[10px] tracking-widest overflow-hidden">
            <div className="px-6 py-24 border-b border-white/10 relative">
                <div className="absolute top-0 right-[25%] h-full w-px tech-line-v opacity-10" />
                <div className="max-w-[1400px] mx-auto">
                    <FadeIn>
                        <div className="text-brand-tech mb-8 flex items-center gap-4">
                            <span className="w-8 h-px bg-brand-tech" />
                            <span>SY_REF: 04 / TRANSMISSION</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-12 leading-[1.1]">
                            <span className="text-metallic">Initiate </span> <span className="text-metallic-red not-italic">protocol.</span>
                        </h1>
                    </FadeIn>
                </div>
            </div>

            <section className="px-6 py-32 relative">
                <div className="tech-marker top-12 left-12">DATA_LINK: ESTABLISH</div>
                <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-24">

                    <FadeIn className="space-y-24">
                        <div className="space-y-12">
                            {[
                                { icon: MapPin, label: "HQ_LOCATION", val: "New Jersey, USA" },
                                { icon: Mail, label: "SECURE_MAIL", val: "hello@marcomnation.com" },
                                { icon: Phone, label: "PRIORITY_LINE", val: "+1 (555) 000-0000" }
                            ].map(item => (
                                <div key={item.label} className="flex items-start gap-8 group">
                                    <div className="w-12 h-12 border border-brand-tech/30 flex items-center justify-center text-brand-tech group-hover:bg-brand-tech group-hover:text-white transition-all duration-500">
                                        <item.icon className="w-4 h-4" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-gray-600 text-[8px] tracking-[0.4em]">{item.label}</div>
                                        <div className="text-xl md:text-2xl font-serif italic lowercase text-white">{item.val}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-12 border border-white/10 bg-brand-tech/[0.02] relative group">
                            <div className="tech-marker -top-2 -right-2 bg-brand-black px-2">STATUS: READY</div>
                            <h3 className="text-white mb-6 bg-white/[0.02] inline-block px-3 py-1 border border-white/5 tracking-[0.3em]">Operational_Hours</h3>
                            <div className="space-y-4 text-gray-500 normal-case tracking-normal">
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span>Mon — Fri</span>
                                    <span className="text-white">09:00 — 18:00 EST</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Weekend</span>
                                    <span className="italic">Emergency_Only</span>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="bg-brand-void border border-white/10 p-12 md:p-16 relative">
                            <div className="absolute -top-px -left-px w-8 h-px bg-brand-tech" />
                            <div className="absolute -top-px -left-px h-8 w-px bg-brand-tech" />

                            <form className="space-y-10">
                                <div className="space-y-4">
                                    <label className="text-[8px] text-brand-tech tracking-[0.5em]">AUTH_NAME</label>
                                    <Input placeholder="IDENTIFY_YOURSELF" className="bg-transparent border-white/10 rounded-none focus:border-brand-tech placeholder:text-gray-800 text-xs" />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[8px] text-brand-tech tracking-[0.5em]">DATA_MAIL</label>
                                    <Input placeholder="TRANSMISSION_ID" className="bg-transparent border-white/10 rounded-none focus:border-brand-tech placeholder:text-gray-800 text-xs" />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[8px] text-brand-tech tracking-[0.5em]">PROTOCOL_TYPE</label>
                                    <Select>
                                        <SelectTrigger className="bg-transparent border-white/10 rounded-none text-xs text-gray-400 capitalize">
                                            <SelectValue placeholder="SELECT_SERVICE" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-brand-void border-white/10 text-white rounded-none">
                                            <SelectItem value="dev">Platform Engineering</SelectItem>
                                            <SelectItem value="video">Cinematic Production</SelectItem>
                                            <SelectItem value="marketing">Growth Protocols</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[8px] text-brand-tech tracking-[0.5em]">PAYLOAD_DETAILS</label>
                                    <Textarea placeholder="DESCRIBE_OBJECTIVES" className="bg-transparent border-white/10 rounded-none focus:border-brand-tech min-h-[150px] placeholder:text-gray-800 text-xs" />
                                </div>

                                <Button className="w-full bg-brand-tech text-white hover:bg-white hover:text-brand-tech rounded-none py-8 text-xs font-mono tracking-[0.4em] transition-all border border-brand-tech">
                                    SEND_TRANSMISSION
                                </Button>
                            </form>
                        </div>
                    </FadeIn>

                </div>
            </section>
        </main>
    );
}
