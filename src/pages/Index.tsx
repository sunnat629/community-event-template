import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { EventDetailsSection } from "@/components/sections/EventDetailsSection";
import { AgendaSection } from "@/components/sections/AgendaSection";
import { SpeakersPartnersSection } from "@/components/sections/SpeakersPartnersSection";
import { OrganizersSection } from "@/components/sections/OrganizersSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <EventDetailsSection />
      <AgendaSection />
      <SpeakersPartnersSection />
      <OrganizersSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
