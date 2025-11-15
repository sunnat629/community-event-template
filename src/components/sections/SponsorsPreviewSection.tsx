import {Award, ChevronRight, Sparkles} from "lucide-react";
import {SectionWrapper} from "@/components/ui/SectionWrapper";
import {partners} from "@/content/partners";
import {motion} from "motion/react";
import {PremiumSponsorsCarousel} from "@/components/shared/PremiumSponsorsCarousel";
import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button";

/**
 * Sponsors Preview Section - For Pro Mode Home Page
 * Shows only Platinum and Gold sponsors with link to full page
 */
export const SponsorsPreviewSection = () => {
    // Only show Platinum and Gold sponsors
    const premiumSponsors = partners.filter(p => ['platinum', 'gold'].includes(p.tier));

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
                        Empowering the technology community together
                    </p>
                </div>

                {/* Premium Sponsors Carousel (Platinum & Gold) with auto-rotation */}
                {premiumSponsors.length > 0 && (
                    <div className="mb-12">
                        <PremiumSponsorsCarousel sponsors={premiumSponsors}/>
                    </div>
                )}

                {/* View All Sponsors CTA */}
                <motion.div
                    className="text-center"
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.6, delay: 0.4}}
                >
                    <Link to="/sponsors">
                        <Button
                            size="lg"
                            className="bg-gradient-hero text-white hover:shadow-glow group hover:scale-105 transition-all"
                        >
                            <Sparkles className="mr-2 w-5 h-5"/>
                            View All {partners.length} Sponsors & Partners
                            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};