"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
    { href: "/about-us", label: "About" },
    { href: "/our-team", label: "Team" },
    { href: "/our-services", label: "Services" },
    { href: "/our-portfolio", label: "Portfolio" },
    { href: "/contact-us", label: "Contact" }
];

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-white hover:bg-white/10 rounded-full transition-colors z-50 relative"
            >
                {isOpen ? <X /> : <Menu />}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed inset-0 bg-brand-black/95 backdrop-blur-xl z-40 flex items-center justify-center"
                    >
                        <nav className="flex flex-col gap-8 text-center">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-4xl font-serif italic lowercase text-white hover:text-brand-tech transition-all"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/contact-us"
                                onClick={() => setIsOpen(false)}
                                className="mt-8 px-12 py-4 border border-brand-tech text-white bg-brand-tech/10 font-mono text-xs tracking-[0.4em] uppercase"
                            >
                                INITIATE_LINK
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
