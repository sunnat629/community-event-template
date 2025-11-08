import {HeroSection} from "@/components/sections/HeroSection";
import {AboutSection} from "@/components/sections/AboutSection";
import {EventDetailsSection} from "@/components/sections/EventDetailsSection";
import {SponsorsPreviewSection} from "@/components/sections/SponsorsPreviewSection";
import {CTASection} from "@/components/sections/CTASection";
import {FooterSection} from "@/components/sections/FooterSection";
import {Button} from "@/components/ui/button";
import {FeaturedSpeakersCarousel} from "@/components/shared/FeaturedSpeakersCarousel";
import {featuredSpeakers, otherSpeakers, venuePreview} from "@/content";
import {agendaItems} from "@/content/agenda";
import {partners} from "@/content/partners";
import {Calendar, Users, Award, Clock, ChevronRight, Sparkles, TrendingUp, MapPin, Navigation} from "lucide-react";
import {Link} from "react-router-dom";
import {motion} from "motion/react";
import {useMemo} from "react";

/**
 * Home Page - Pro Mode Landing
 * Beautiful, modern landing page with previews and CTAs
 * All stats are dynamically calculated from content data
 */
const Home = () => {
    // Calculate stats dynamically from data sources
    const stats = useMemo(() => {
        // Total unique speakers (featured + others)
        const totalSpeakers = [...featuredSpeakers, ...otherSpeakers].length;

        // Total sessions from agenda
        const totalSessions = agendaItems.length;

        // Unique days from agenda items
        const uniqueDays = new Set(agendaItems.map(item => item.day || 1));
        const totalDays = uniqueDays.size;

        // Total sponsors/partners
        const totalSponsors = partners.length;

        return {
            speakers: totalSpeakers,
            sessions: totalSessions,
            days: totalDays,
            sponsors: totalSponsors
        };
    }, []);

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
                                className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">{stats.speakers}+
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
                                className="text-4xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform">{stats.sessions}+
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
                                className="text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">{stats.days}
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
                                className="text-4xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform">{stats.sponsors}+
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

                    {/* Carousel for Featured Speakers with auto-rotation */}
                    <FeaturedSpeakersCarousel speakers={featuredSpeakers}/>

                    {/* View All Speakers CTA */}
                    <motion.div
                        className="text-center mt-12"
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.6, delay: 0.4}}
                    >
                        <Link to="/speakers">
                            <Button size="lg"
                                    className="bg-gradient-hero text-white hover:shadow-glow group hover:scale-105 transition-all">
                                <Sparkles className="mr-2 w-5 h-5"/>
                                View All {stats.speakers}+ Speakers
                                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Sponsors Section - Preview only Platinum & Gold */}
            <SponsorsPreviewSection/>

            {/* Venue Preview Section - Redesigned with image background */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header - "Event Venue" */}
                    <motion.div
                        className="text-center mb-12"
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                    >
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <MapPin className="w-4 h-4 text-primary animate-pulse"/>
                            <span className="text-sm font-semibold text-primary">Event Venue</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-hero">
                            {venuePreview.title}
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Experience the event in our world-class venue
                        </p>
                    </motion.div>

                    {/* Venue Card - Image Background with Overlay */}
                    <motion.div
                        className="max-w-5xl mx-auto"
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6, delay: 0.2}}
                    >
                        <div
                            className="glass-card rounded-3xl overflow-hidden border-2 border-border hover:border-primary/40 transition-all duration-500 hover:shadow-2xl group"
                        >
                            <div className="grid md:grid-cols-2">
                                {/* Left: Image with Overlay */}
                                <div className="relative h-64 md:h-auto min-h-[400px] overflow-hidden">
                                    {/* Background Image */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{
                                            backgroundImage: `url(${venuePreview.image})`
                                        }}
                                    />

                                    {/* Gradient Overlay */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-secondary/70"/>

                                    {/* Subtle blur for depth (optional) */}
                                    <div className="absolute inset-0 backdrop-blur-[0.5px]"/>

                                    {/* Live Event Badge */}
                                    <div
                                        className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-xl animate-float z-20">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                                            <span
                                                className="text-sm font-bold text-foreground">{venuePreview.badge}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Venue Details */}
                                <div
                                    className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-background to-muted/30">
                                    {/* Venue Name */}
                                    <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                                        {venuePreview.venueName}
                                    </h3>

                                    {/* Address */}
                                    <div className="space-y-1 mb-6">
                                        <p className="text-lg text-muted-foreground">
                                            {venuePreview.address.line1}
                                        </p>
                                        <p className="text-lg text-muted-foreground">
                                            {venuePreview.address.line2}
                                        </p>
                                        <p className="text-lg text-muted-foreground">
                                            {venuePreview.address.country}
                                        </p>
                                    </div>

                                    {/* Quick Info Grid */}
                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        <div
                                            className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/30 transition-colors">
                                            <Clock className="w-5 h-5 text-primary flex-shrink-0"/>
                                            <div>
                                                <p className="text-xs text-muted-foreground">Time</p>
                                                <p className="font-semibold text-sm">{venuePreview.quickInfo.time}</p>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-4 rounded-xl bg-secondary/5 border border-secondary/10 hover:border-secondary/30 transition-colors">
                                            <Users className="w-5 h-5 text-secondary flex-shrink-0"/>
                                            <div>
                                                <p className="text-xs text-muted-foreground">Capacity</p>
                                                <p className="font-semibold text-sm">{venuePreview.quickInfo.capacity}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <Link to={venuePreview.ctaLink} className="w-full">
                                        <Button
                                            size="lg"
                                            className="w-full bg-gradient-hero hover:shadow-glow group/btn hover:scale-105 transition-all"
                                        >
                                            <Navigation className="w-5 h-5 mr-2"/>
                                            {venuePreview.ctaText}
                                            <ChevronRight
                                                className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform"/>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section - Same as lite mode */}
            <CTASection/>

            {/* Footer - Same as lite mode */}
            <FooterSection/>
        </main>
    );
};

export default Home;
