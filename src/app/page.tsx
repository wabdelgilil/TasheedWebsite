import HeroSection from "@/components/home/HeroSection";
import ClientsSection from "@/components/home/ClientsSection";
import ArchitecturalMasterySection from "@/components/home/ArchitecturalMasterySection";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";
import TurnkeyExperience from "@/components/home/TurnkeyExperience";
import AccreditationsSection from "@/components/home/AccreditationsSection";
import QuickContactSection from "@/components/home/QuickContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <ArchitecturalMasterySection />
      <FeaturedDestinations />
      <TurnkeyExperience />
      <AccreditationsSection />
      <QuickContactSection />
    </>
  );
}
