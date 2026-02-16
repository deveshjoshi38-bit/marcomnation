"use client"

import OrbyteScrollContainer from "@/components/layout/orbyte-scroll-container";

const servicesData = [
    {
        id: "technology",
        title: "Technology",
        tagline: "Building Digital Foundations",
        description: "Transform your business with cutting-edge application and web development. We create scalable, performant solutions using modern frameworks and AI-powered tools.",
        features: [
            "Mobile App Development",
            "Web Development",
            "Backend Systems",
            "Progressive Web Apps"
        ],
        stack: "Next.js 15, React Native, Node.js, Python, GraphQL, AWS, Supabase, PostgreSQL"
    },
    {
        id: "cinema",
        title: "Cinema",
        tagline: "Visual Storytelling Mastery",
        description: "Professional film production and photography services enhanced with AI acceleration. We deliver director-level content that captivates audiences and drives engagement.",
        features: [
            "Film Production",
            "Photography",
            "Social Content",
            "AI-Enhanced Workflows"
        ],
        stack: "RED Komodo, Sony A7S III, DaVinci Resolve, Premiere Pro, Veo 3, Midjourney, Suno AI"
    },
    {
        id: "branding",
        title: "Branding",
        tagline: "Strategic Growth Catalyst",
        description: "Comprehensive digital marketing and brand strategy designed to elevate your market presence. Data-driven campaigns that deliver measurable results and sustainable growth.",
        features: [
            "Digital Marketing",
            "Brand Strategy",
            "Growth Marketing",
            "Analytics & Reporting"
        ],
        stack: "Google Ads, Meta Ads Manager, SEMrush, Ahrefs, GA4, Figma, Jasper AI"
    }
];

export default function OurServicesPage() {
    return (
        <main className="min-h-screen bg-[#090909]">
            <OrbyteScrollContainer content={servicesData} />
        </main>
    );
}
