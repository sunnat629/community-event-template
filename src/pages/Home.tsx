import {HeroSection} from "@/components/sections/HeroSection";
import {AboutSection} from "@/components/sections/AboutSection";
import {EventDetailsSection} from "@/components/sections/EventDetailsSection";
import {CTASection} from "@/components/sections/CTASection";
import {FooterSection} from "@/components/sections/FooterSection";
import {Button} from "@/components/ui/button";
import {SpeakerCard} from "@/components/shared/SpeakerCard";
import {featuredSpeakers, agendaItems, partners} from "@/content";
import {Calendar, Users, Award, MapPin, ChevronRight, Clock, Sparkles} from "lucide-react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

/**
 * Home Page - Pro Mode Landing
 * Beautiful, comprehensive landing page with previews of all sections
 */
const Home = () => {
    // Show only first 3 featured speakers as preview
    const previewSpeakers = featuredSpeakers.slice(0, 3);

    // Show only today's or upcoming sessions (first 4)
    const previewAgenda = agendaItems.slice(0, 4);

    // Show top sponsors (Platinum & Gold only)
    const previewSponsors = partners.filter(p => ['platinum', 'gold'].includes(p.tier)).slice(0, 4);

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <HeroSection/>

            {/* Quick Stats Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5}}
                            className="glass-card rounded-2xl p-6 text-center border-2 border-primary/20 hover:border-primary/40 hover:scale-105 transition-all duration-300"
                        >
                            <div
                                className="w-12 h-12 rounded-xl bg-gradient-hero mx-auto mb-4 flex items-center justify-center">
                                <Users className="w-6 h-6 text-white"/>
                            </div>
                            <div className="text-3xl font-bold text-primary mb-1">30+</div>
                            <div className="text-sm text-muted-foreground">Expert Speakers</div>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5, delay: 0.1}}
                            className="glass-card rounded-2xl p-6 text-center border-2 border-secondary/20 hover:border-secondary/40 hover:scale-105 transition-all duration-300"
                        >
                            <div
                                className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-blue-400 mx-auto mb-4 flex items-center justify-center">
                                <Calendar className="w-6 h-6 text-white"/>
                            </div>
                            <div className="text-3xl font-bold text-secondary mb-1">40+</div>
                            <div className="text-sm text-muted-foreground">Sessions</div>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5, delay: 0.2}}
                            className="glass-card rounded-2xl p-6 text-center border-2 border-accent/20 hover:border-accent/40 hover:scale-105 transition-all duration-300"
                        >
                            <div
                                className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-pink-400 mx-auto mb-4 flex items-center justify-center">
                                <Clock className="w-6 h-6 text-white"/>
                            </div>
                            <div className="text-3xl font-bold text-accent mb-1">3</div>
                            <div className="text-sm text-muted-foreground">Days</div>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5, delay: 0.3}}
                            className="glass-card rounded-2xl p-6 text-center border-2 border-orange-500/20 hover:border-orange-500/40 hover:scale-105 transition-all duration-300"
                        >
                            <div
                                className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 mx-auto mb-4 flex items-center justify-center">
                                <Award className="w-6 h-6 text-white"/>
                            </div>
                            <div className="text-3xl font-bold text-orange-500 mb-1">10+</div>
                            <div className="text-sm text-muted-foreground">Sponsors</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <AboutSection/>

            {/* Event Details Section - From Lite Mode */}
            <EventDetailsSection/>

            {/* Featured Speakers Preview */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-12"
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                    >
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 hover:scale-105 transition-transform">
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

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {previewSpeakers.map((speaker, index) => (
                            <motion.div
                                key={speaker.name}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{duration: 0.5, delay: index * 0.1}}
                            >
                                <SpeakerCard speaker={speaker} variant="featured" onClick={() => {
                                }}/>
                            </motion.div>
                        ))}
                    </div>

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
                                View All 30+ Speakers
                                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Agenda Preview */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-soft">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-12"
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                    >
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6 hover:scale-105 transition-transform">
                            <Calendar className="w-4 h-4 text-secondary animate-pulse"/>
                            <span className="text-sm font-semibold text-secondary">Event Schedule</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-hero">
                            What to Expect
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Three days packed with talks, workshops, and networking opportunities
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {previewAgenda.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{duration: 0.5, delay: index * 0.1}}
                                className="glass-card rounded-2xl p-6 border-2 border-border hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] group"
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <item.icon className="w-8 h-8 text-white"/>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-sm font-bold text-primary">{item.time}</span>
                                            <span className="text-xs text-muted-foreground">•</span>
                                            <span className="text-xs text-muted-foreground">{item.duration}</span>
                                        </div>
                                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground line-clamp-2">
                                            {item.description}
                                        </p>
                                        {item.speaker && (
                                            <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                                                <Users className="w-4 h-4"/>
                                                <span>{item.speaker}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="text-center"
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.6, delay: 0.4}}
                    >
                        <Link to="/agenda">
                            <Button size="lg" variant="outline"
                                    className="border-2 group hover:scale-105 transition-all">
                                View Full 3-Day Schedule
                                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Sponsors Preview */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-12"
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                    >
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6 hover:scale-105 transition-transform">
                            <Award className="w-4 h-4 text-secondary animate-pulse"/>
                            <span className="text-sm font-semibold text-secondary">Our Supporters</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-hero">
                            Partners & Sponsors
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Empowering the Flutter community together
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {previewSponsors.map((sponsor, index) => (
                            <motion.div
                                key={sponsor.name}
                                initial={{opacity: 0, scale: 0.9}}
                                whileInView={{opacity: 1, scale: 1}}
                                viewport={{once: true}}
                                transition={{duration: 0.5, delay: index * 0.1}}
                                whileHover={{scale: 1.05, y: -5}}
                                className="glass-card rounded-2xl p-6 border-2 border-border hover:border-primary/30 hover:shadow-xl transition-all cursor-pointer group"
                            >
                                <div className="aspect-square flex items-center justify-center mb-4">
                                    <img
                                        src={sponsor.logo}
                                        alt={sponsor.name}
                                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform"
                                    />
                                </div>
                                <h4 className="font-bold text-center group-hover:text-primary transition-colors">{sponsor.name}</h4>
                                <p className="text-xs text-center text-muted-foreground capitalize mt-1">{sponsor.tier} Partner</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="text-center"
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.6, delay: 0.4}}
                    >
                        <Link to="/sponsors">
                            <Button size="lg" variant="outline"
                                    className="border-2 group hover:scale-105 transition-all">
                                View All Sponsors
                                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Venue Preview */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                        className="glass-card rounded-3xl overflow-hidden border-2 border-primary/20 hover:border-primary/30 hover:shadow-2xl transition-all duration-500"
                    >
                        <div className="grid md:grid-cols-2">
                            <div className="relative h-64 md:h-auto bg-gradient-hero overflow-hidden group">
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center"
                                    animate={{scale: [1, 1.1, 1]}}
                                    transition={{duration: 3, repeat: Infinity}}
                                >
                                    <MapPin className="w-20 h-20 text-white/30"/>
                                </motion.div>
                            </div>

                            <div className="p-8">
                                <div
                                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
                                    <MapPin className="w-3 h-3 text-primary"/>
                                    <span className="text-xs font-semibold text-primary">Event Venue</span>
                                </div>
                                <h2 className="text-3xl font-bold mb-4">Join Us In Person</h2>
                                <p className="text-muted-foreground mb-2 font-semibold">
                                    Brain Station 23 HQ
                                </p>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Dhaka, Bangladesh
                                </p>
                                <p className="text-sm text-muted-foreground mb-6">
                                    Easy access via public transport, parking available, wheelchair accessible
                                </p>
                                <Link to="/venue">
                                    <Button className="w-full sm:w-auto group hover:scale-105 transition-all">
                                        View Venue Details & Map
                                        <ChevronRight
                                            className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection/>

            {/* Footer */}
            <FooterSection/>
        </main>
    );
};

export default Home;
