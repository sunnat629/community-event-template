import {Award} from "lucide-react";
import {SectionWrapper} from "@/components/ui/SectionWrapper";
import {partners} from "@/content/partners";
import {motion} from "motion/react";
import {SponsorCard} from "@/components/shared/SponsorCard";
import {useState} from "react";
import {SponsorDialog} from "@/components/shared/SponsorDialog";
import {Partner} from "@/content/partners";

/**
 * Sponsors Lite Section - Beautiful animated sponsor showcase for Lite mode
 */
export const SponsorsLiteSection = () => {
    const [selectedSponsor, setSelectedSponsor] = useState<Partner | null>(null);

    // Group sponsors by tier
    const premiumSponsors = partners.filter(p => ['platinum', 'gold'].includes(p.tier));
    const otherSponsors = partners.filter(p => !['platinum', 'gold'].includes(p.tier));

    // Animation variants for stagger effect
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <SectionWrapper theme="white">
            {/* Enhanced background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float"/>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"
                 style={{animationDelay: "1s"}}/>

            <div className="section-container relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6 hover:scale-105 transition-transform duration-300">
                        <Award className="w-4 h-4 text-secondary animate-pulse"/>
                        <span className="text-sm font-semibold text-secondary">Supporting Our Community</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-hero">
                        Partners & Sponsors
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Empowering the Flutter community in Bangladesh together
                    </p>
                </div>

                {/* Premium Sponsors (Platinum & Gold) - Large Cards */}
                {premiumSponsors.length > 0 && (
                    <motion.div
                        className="mb-16"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, margin: "-100px"}}
                    >
                        {/* 3 columns grid - makes premium sponsors ~1.5x larger than small cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {premiumSponsors.map((sponsor, index) => (
                                <SponsorCard
                                    key={sponsor.name}
                                    sponsor={sponsor}
                                    size="large"
                                    onClick={() => setSelectedSponsor(sponsor)}
                                    index={index}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Other Sponsors (Silver, Bronze, Community, Media) - Small Cards */}
                {otherSponsors.length > 0 && (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, margin: "-100px"}}
                    >
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                            {otherSponsors.map((sponsor, index) => (
                                <SponsorCard
                                    key={sponsor.name}
                                    sponsor={sponsor}
                                    size="small"
                                    onClick={() => setSelectedSponsor(sponsor)}
                                    index={index}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Become a Sponsor CTA */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6, delay: 0.4}}
                >
                    <div
                        className="glass-card rounded-3xl p-8 sm:p-12 border-2 border-border/50 hover:border-primary/30 transition-all duration-500 max-w-4xl mx-auto hover:scale-[1.02] hover:shadow-2xl">
                        <h3 className="text-3xl font-bold mb-4">Become a Sponsor</h3>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Join us in building Bangladesh's Flutter community. Multiple sponsorship tiers
                            available with exclusive benefits and brand visibility.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                className="px-8 py-4 bg-gradient-hero text-white font-semibold rounded-xl hover:shadow-glow transition-all duration-300 hover:scale-105">
                                View Sponsor Package
                            </button>
                            <button
                                className="px-8 py-4 bg-background border-2 border-border font-semibold rounded-xl hover:bg-muted transition-all duration-300 hover:scale-105">
                                Contact Sponsorship Team
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Sponsor Details Dialog */}
            <SponsorDialog
                sponsor={selectedSponsor}
                open={!!selectedSponsor}
                onClose={() => setSelectedSponsor(null)}
            />
        </SectionWrapper>
    );
};
