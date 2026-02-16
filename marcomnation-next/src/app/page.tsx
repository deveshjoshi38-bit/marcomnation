import AurigaHero from "@/components/home/auriga-hero";
import TrustBar from "@/components/home/trust-bar";
import CoreValues from "@/components/home/core-values";
import ServicesOverview from "@/components/home/services-overview";
import FeaturedWork from "@/components/featured-work";
import WhyChooseUs from "@/components/home/why-choose-us";
import EvolutionStory from "@/components/home/evolution-story";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-black text-white">
      <AurigaHero />
      <TrustBar />
      <CoreValues />
      <ServicesOverview />
      <FeaturedWork />
      <WhyChooseUs />
      <EvolutionStory />
    </main>
  );
}
