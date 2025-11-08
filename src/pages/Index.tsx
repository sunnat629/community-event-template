import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { EventDetailsSection } from "@/components/sections/EventDetailsSection";
import { AgendaSection } from "@/components/sections/AgendaSection";
import {SponsorsLiteSection} from "@/components/sections/SponsorsLiteSection";
import {VenueSection} from "@/components/sections/VenueSection";
import { OrganizersSection } from "@/components/sections/OrganizersSection";
import { CTASection } from "@/components/sections/CTASection";
import {FooterSection} from "@/components/sections/FooterSection";
import {SpeakersPartnersSection} from "@/components/sections/SpeakersPartnersSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <EventDetailsSection />
      <AgendaSection />
        <SpeakersPartnersSection/>
        <SponsorsLiteSection/>
        <VenueSection/>
      <OrganizersSection />
      <CTASection />
        <FooterSection/>
    </main>
  );
};

export default Index;
