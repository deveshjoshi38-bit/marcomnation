import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-brand-black border-t border-white/10 px-6 pt-24 pb-12 font-mono uppercase text-[10px] tracking-widest text-gray-500 blueprint-grid relative">
            {/* Structural Lines */}
            <div className="absolute top-0 right-[15%] h-full w-px tech-line-v opacity-20" />

            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24 items-start">

                    <div className="md:col-span-4">
                        <Link href="/" className="font-serif text-4xl italic text-white lowercase tracking-tighter block mb-12">
                            marcom<span className="text-brand-tech">nation.</span>
                        </Link>
                        <p className="normal-case tracking-normal max-w-xs leading-relaxed mb-12 text-gray-400">
                            Engineering the next generation of digital verticals through specialized technology and cinematic vision.
                        </p>
                        <div className="flex gap-6 italic">
                            {["X", "LinkedIn", "YouTube", "Insta"].map(s => (
                                <a key={s} href="#" className="hover:text-brand-tech transition-colors">{s}</a>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-2 space-y-6">
                        <div className="text-white font-bold mb-8">Navigation</div>
                        <Link href="/our-portfolio" className="block hover:text-white transition-colors">Archive</Link>
                        <Link href="/our-services" className="block hover:text-white transition-colors">Services</Link>
                        <Link href="/our-team" className="block hover:text-white transition-colors">Squad</Link>
                        <Link href="/about-us" className="block hover:text-white transition-colors">Mission</Link>
                    </div>

                    <div className="md:col-span-3 space-y-6">
                        <div className="text-white font-bold mb-8">Node Operations</div>
                        <div className="flex justify-between border-b border-white/5 pb-2">
                            <span>HQ // NJ</span>
                            <span className="text-brand-tech">Active</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-2">
                            <span>HUB // LDN</span>
                            <span>Standby</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-2">
                            <span>HUB // DXB</span>
                            <span>Standby</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-2">
                            <span>HUB // BLR</span>
                            <span>Active</span>
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        <div className="text-white font-bold mb-8">Transmission</div>
                        <div className="p-8 border border-white/10 bg-brand-tech/5 flex flex-col items-start gap-4">
                            <p className="normal-case tracking-normal text-gray-400">Subscribe for monthly intel.</p>
                            <div className="w-full flex border-b border-white/20 pb-2">
                                <input placeholder="EMAIL_ADDRESS" className="bg-transparent border-none focus:outline-none w-full text-[10px] text-white" />
                                <ArrowRight className="w-3 h-3 text-brand-tech" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-12">
                    <div className="flex gap-12 font-bold">
                        <span>© {new Date().getFullYear()} MARCOMNATION_PROTOCOL</span>
                        <span className="text-brand-tech opacity-30">V.2026.01</span>
                    </div>
                    <div className="flex gap-8 mt-6 md:mt-0 opacity-50">
                        <span className="hover:text-white cursor-pointer transition-all">Privacy_v1</span>
                        <span className="hover:text-white cursor-pointer transition-all">Cookies_v1</span>
                        <span className="hover:text-white cursor-pointer transition-all">SLA_v1</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
