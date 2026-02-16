"use client"

import { useState } from "react";
import SmoothScroll from "@/components/smooth-scroll";
import Navbar from "@/components/navbar";
import AurigaLoader from "@/components/auriga-loader";
import HudCursor from "@/components/hud-cursor";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);

    return (
        <>
            <HudCursor />
            <AurigaLoader onComplete={() => setLoading(false)} />
            {!loading && (
                <SmoothScroll>
                    <Navbar />
                    {children}
                </SmoothScroll>
            )}
        </>
    );
}
