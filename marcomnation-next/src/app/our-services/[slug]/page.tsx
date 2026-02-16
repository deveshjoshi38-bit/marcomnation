"use client"

import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const deepDiveContent: Record<string, { title: string; subtitle: string; challenge: string; approach: string; tech: string[]; results: string }> = {
    ideation: {
        title: "Strategic Ideation",
        subtitle: "Where data meets imagination.",
        challenge: "Traditional brainstorming is slow and biased.",
        approach: "We use LLMs to generate 100+ lateral concepts in minutes, filtered by human strategists.",
        tech: ["GPT-4o", "Claude 3.5", "Midjourney V6"],
        results: "10x concept volume, zero creative block."
    },
    production: {
        title: "AI Production",
        subtitle: "Cinematic fidelity at scale.",
        challenge: "Video production is expensive and linear.",
        approach: "Veo and Sora pipelines allow for iterative scene generation and unlimited variants.",
        tech: ["Google Veo", "Runway Gen-3", "Suno AI"],
        results: "Broadcast quality. 1/10th the time."
    },
    refinement: {
        title: "Expert Refinement",
        subtitle: "The human touch.",
        challenge: "Raw AI output lacks specific brand soul.",
        approach: "Our VFX artists composit and color-grade AI assets for seamless integration.",
        tech: ["After Effects", "DaVinci Resolve", "Nuke"],
        results: "Flawless, undetectable CGI integration."
    },
    deployment: {
        title: "Global Deployment",
        subtitle: "Visible everywhere.",
        challenge: "Great content dies without distribution.",
        approach: "Algorithmic placement and automated A/B testing of creative variants.",
        tech: ["Programmatic Ads", "Dynamic Creative", "Vercel Edge"],
        results: "Maximum ROI via personalized delivery."
    }
};

export default function ServiceDeepDive() {
    const params = useParams();
    const slug = params.slug as string;
    const content = deepDiveContent[slug] || deepDiveContent["production"]; // Fallback

    return (
        <main className="min-h-screen bg-brand-black text-white">
            <div className="absolute top-6 left-6 z-50">
                <Link href="/services">
                    <Button variant="ghost" className="text-gray-400 hover:text-white">
                        <ArrowLeft className="mr-2 w-4 h-4" /> Back to Workflow
                    </Button>
                </Link>
            </div>

            <PageHeader
                title={content.title}
                subtitle={content.subtitle}
                tagline="Deep Dive"
            />

            <section className="px-6 pb-32">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="glass-panel p-10 rounded-3xl">
                        <h3 className="text-brand-magenta font-mono uppercase tracking-widest mb-4">The Challenge</h3>
                        <p className="text-2xl font-light leading-relaxed">{content.challenge}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="glass-panel p-8 rounded-2xl">
                            <h3 className="text-brand-cyan font-mono uppercase tracking-widest mb-4">Our Approach</h3>
                            <p className="text-gray-400 leading-relaxed">{content.approach}</p>
                        </div>

                        <div className="glass-panel p-8 rounded-2xl">
                            <h3 className="text-brand-cyan font-mono uppercase tracking-widest mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {content.tech.map(t => (
                                    <span key={t} className="px-3 py-1 bg-white/10 rounded-full text-sm">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="glass-panel p-10 rounded-3xl border-brand-cyan/20 bg-brand-cyan/5">
                        <h3 className="text-white font-mono uppercase tracking-widest mb-4">The Impact</h3>
                        <p className="text-xl font-bold text-white">{content.results}</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
