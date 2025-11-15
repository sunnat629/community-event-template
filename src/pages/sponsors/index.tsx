import {PageHeader} from "@/components/pro/PageHeader";
import {SponsorsSection} from "@/components/shared/SponsorsSection";
import {FooterSection} from "@/components/sections/FooterSection";
import {Award, Sparkles} from "lucide-react";
import {Button} from "@/components/ui/button";
import {siteConfig, heroBackgrounds} from "@/content";

export default function SponsorsPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Page Header */}
            <PageHeader
                title="Our Sponsors & Partners"
                subtitle={`Meet the amazing companies and communities supporting ${siteConfig.eventTitle}`}
                icon={Award}
                backgroundImage={heroBackgrounds.sponsors.image}
                overlayOpacity={heroBackgrounds.sponsors.overlayOpacity}
            />

            {/* Main Content */}
            <div className="section-container py-16">
                <SponsorsSection/>

                {/* Become a Sponsor CTA */}
                <div className="mt-20 text-center">
                    <div
                        className="max-w-4xl mx-auto glass-card rounded-3xl p-8 sm:p-12 border-2 border-border/50 hover:border-primary/30 transition-all duration-500">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Become a Sponsor
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Join us in building Bangladesh's technology community. Multiple sponsorship tiers
                            available with exclusive benefits and brand visibility opportunities.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-gradient-hero hover:opacity-90 transition-opacity"
                            >
                                <Sparkles className="w-4 h-4 mr-2"/>
                                View Sponsorship Packages
                            </Button>
                            <Button variant="outline" size="lg">
                                Contact Sponsorship Team
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <FooterSection/>
        </div>
    );
}
