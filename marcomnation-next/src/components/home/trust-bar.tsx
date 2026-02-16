"use client"

export default function TrustBar() {
    return (
        <section className="py-4 border-y border-white/5 bg-white/5 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 overflow-hidden">
                <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-xs md:text-sm font-mono text-gray-400 uppercase tracking-widest text-center">
                    <span>Trusted by global leaders across United States, United Kingdom, Dubai, Canada, and India</span>
                    <span className="hidden md:inline text-brand-tech">•</span>
                    <span>24/7 Operations</span>
                    <span className="hidden md:inline text-brand-tech">•</span>
                    <span>50+ Deployments</span>
                    <span className="hidden md:inline text-brand-tech">•</span>
                    <span>100% Transparency</span>
                </div>
            </div>
        </section>
    );
}
