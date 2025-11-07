import {HeroSection} from "@/components/sections/HeroSection";
import {AboutSection} from "@/components/sections/AboutSection";
import {EventDetailsSection} from "@/components/sections/EventDetailsSection";
import {SponsorsLiteSection} from "@/components/sections/SponsorsLiteSection";
import {VenueSection} from "@/components/sections/VenueSection";
import {CTASection} from "@/components/sections/CTASection";
import {FooterSection} from "@/components/sections/FooterSection";
import {Button} from "@/components/ui/button";
import {SpeakerCard} from "@/components/shared/SpeakerCard";
import {featuredSpeakers} from "@/content";
import {Calendar, Users, Award, Clock, ChevronRight, Sparkles, TrendingUp, Target} from "lucide-react";
import {Link} from "react-router-dom";
import {motion} from "motion/react";

/**
 * Home Page - Pro Mode Landing
 * Beautiful, modern landing page with previews and CTAs
 */
const Home = () => {
    // Show only first 3 featured speakers as preview
    const previewSpeakers = featuredSpeakers.slice(0, 3);

    return (
        <main className="min-h-screen">
            {/* Hero Section - Same as lite mode */}
            <HeroSection/>

            {/* Quick Stats Section - Enhanced with animations */}
            <section
                className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
                {/* Background decorations */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"/>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float"
                     style={{animationDelay: "1s"}}/>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        className="text-center mb-16"
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                    >
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <TrendingUp className="w-4 h-4 text-primary animate-pulse"/>
                            <span className="text-sm font-semibold text-primary">Event Highlights</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                            Bangladesh's Biggest Flutter Event
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Three days of learning, networking, and building the future
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {/* Stat Card: Speakers */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5, delay: 0.1}}
                            whileHover={{scale: 1.05, y: -5}}
                            className="glass-card rounded-2xl p-8 text-center border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl group"
                        >
                            <motion.div
                                className="w-16 h-16 rounded-2xl bg-gradient-hero mx-auto mb-6 flex items-center justify-center shadow-xl"
                                whileHover={{rotate: [0, -10, 10, -10, 0]}}
                                transition={{duration: 0.5}}
                            >
                                <Users className="w-8 h-8 text-white"/>
                            </motion.div>
                            <div
                                className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">9+
                            </div>
                            <div className="text-sm font-semibold text-muted-foreground">Expert Speakers</div>
                        </motion.div>

                        {/* Stat Card: Sessions */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5, delay: 0.2}}
                            whileHover={{scale: 1.05, y: -5}}
                            className="glass-card rounded-2xl p-8 text-center border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-2xl group"
                        >
                            <motion.div
                                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-blue-500 mx-auto mb-6 flex items-center justify-center shadow-xl"
                                whileHover={{rotate: [0, -10, 10, -10, 0]}}
                                transition={{duration: 0.5}}
                            >
                                <Calendar className="w-8 h-8 text-white"/>
                            </motion.div>
                            <div
                                className="text-4xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform">33+
                            </div>
                            <div className="text-sm font-semibold text-muted-foreground">Sessions</div>
                        </motion.div>

                        {/* Stat Card: Days */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5, delay: 0.3}}
                            whileHover={{scale: 1.05, y: -5}}
                            className="glass-card rounded-2xl p-8 text-center border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-2xl group"
                        >
                            <motion.div
                                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-pink-500 mx-auto mb-6 flex items-center justify-center shadow-xl"
                                whileHover={{rotate: [0, -10, 10, -10, 0]}}
                                transition={{duration: 0.5}}
                            >
                                <Clock className="w-8 h-8 text-white"/>
                            </motion.div>
                            <div
                                className="text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">3
                            </div>
                            <div className="text-sm font-semibold text-muted-foreground">Days</div>
                        </motion.div>

                        {/* Stat Card: Sponsors */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5, delay: 0.4}}
                            whileHover={{scale: 1.05, y: -5}}
                            className="glass-card rounded-2xl p-8 text-center border-2 border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-2xl group"
                        >
                            <motion.div
                                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 mx-auto mb-6 flex items-center justify-center shadow-xl"
                                whileHover={{rotate: [0, -10, 10, -10, 0]}}
                                transition={{duration: 0.5}}
                            >
                                <Award className="w-8 h-8 text-white"/>
                            </motion.div>
                            <div
                                className="text-4xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform">11+
                            </div>
                            <div className="text-sm font-semibold text-muted-foreground">Sponsors</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Section - Same as lite mode */}
            <AboutSection/>

            {/* Event Details Section - Same as lite mode */}
            <EventDetailsSection/>

            {/* Featured Speakers Preview */}
            <section
                className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-primary/5 to-background">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                    >
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <Users className="w-4 h-4 text-primary animate-pulse"/>
                            <span className="text-sm font-semibold text-primary">Featured Speakers</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-hero">
                            Learn From The Best
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Industry experts and thought leaders sharing their knowledge and experience
                        </p>
                    </motion.div>

                    {/* Speaker Cards Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {previewSpeakers.map((speaker, index) => (
                            <motion.div
                                key={speaker.name}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{duration: 0.5, delay: index * 0.1}}
                            >
                                <Link to={`/speakers/${speaker.name.toLowerCase().replace(/\s+/g, '-')}`}>
                                    <SpeakerCard
                                        speaker={speaker}
                                        variant="featured"
                                        onClick={() => {
                                        }}
                                    />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* View All Speakers CTA */}
                    <motion.div
                        className="text-center"
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.6, delay: 0.4}}
                    >
                        <Link to="/speakers">
                            <Button size="lg"
                                    className="bg-gradient-hero text-white hover:shadow-glow group hover:scale-105 transition-all">
                                <Sparkles className="mr-2 w-5 h-5"/>
                                View All 9+ Speakers
                                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Sponsors Section - Same as lite mode */}
            <SponsorsLiteSection/>

            {/* Venue Section - Same as lite mode */}
            <VenueSection/>

            {/* CTA Section - Same as lite mode */}
            <CTASection/>

            {/* Footer - Same as lite mode */}
            <FooterSection/>
        </main>
    );
};

export default Home;
