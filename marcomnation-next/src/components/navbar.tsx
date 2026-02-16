"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/mobile-menu";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b",
                scrolled ? "bg-brand-black/90 backdrop-blur-md py-4 border-brand-tech/20" : "bg-transparent py-8 border-transparent"
            )}
        >
            <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="font-serif text-3xl italic tracking-tighter lowercase text-white">
                    marcom<span className="text-brand-tech">nation.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-12 items-center font-mono text-[10px] uppercase tracking-[0.4em] text-gray-400">
                    {[
                        { name: "Archive", path: "/our-portfolio" },
                        { name: "Services", path: "/our-services" },
                        { name: "Squad", path: "/our-team" },
                        { name: "Mission", path: "/about-us" },
                    ].map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            className="hover:text-brand-tech transition-colors relative group py-2"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-px bg-brand-tech transition-all group-hover:w-full" />
                        </Link>
                    ))}
                    <Link href="/contact-us">
                        <Button size="sm" className="bg-brand-tech text-white hover:bg-white hover:text-brand-tech rounded-none px-6 font-bold tracking-widest transition-all">
                            TRANSMIT
                        </Button>
                    </Link>
                </div>

                <MobileMenu />
            </div>
        </nav>
    );
}
