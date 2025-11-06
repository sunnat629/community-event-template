import {HeroSection} from "@/components/sections/HeroSection";
import {AboutSection} from "@/components/sections/AboutSection";
import {CTASection} from "@/components/sections/CTASection";
import {FooterSection} from "@/components/sections/FooterSection";
import {Button} from "@/components/ui/button";
import {SpeakerCard} from "@/components/shared/SpeakerCard";
import {featuredSpeakers, agendaItems} from "@/content";
import {Calendar, Users, Award, MapPin, ChevronRight, Clock} from "lucide-react";
import {Link} from "react-router-dom";

/**
 * Home Page - Pro Mode Landing
 * Shows highlights and directs users to dedicated pages
 *
 * Unlike lite mode (Index.tsx) which shows everything,
 * this landing page shows previews with CTAs to full pages.
 */
const Home = () => {
    // Show only first 3 featured speakers as preview
    const previewSpeakers = featuredSpeakers.slice(0, 3);

    // Show only today's or upcoming sessions (first 4)
    const previewAgenda = agendaItems.slice(0, 4);

    return (
        <main className="min-h-screen">
            {/* Hero Section - Same as lite mode */}
            <HeroSection/>

            {/* Quick Stats Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {/* Stat Card: Speakers */}
                        <div
                            className="glass-card rounded-2xl p-6 text-center border-2 border-primary/20 hover:border-primary/40 hover:scale-105 transition-all duration-300">
                            <div
                                className="w-12 h-12 rounded-xl bg-gradient-hero mx-auto mb-4 flex items-center justify-center">
                                <Users className="w-6 h-6 text-white"/>
                            </div>
                            <div className="text-3xl font-bold text-primary mb-1">30+</div>
                            <div className="text-sm text-muted-foreground">Expert Speakers</div>
                        </div>

                        {/* Stat Card: Sessions */}
                        <div
                            className="glass-card rounded-2xl p-6 text-center border-2 border-secondary/20 hover:border-secondary/40 hover:scale-105 transition-all duration-300">
                            <div
                                className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-blue-400 mx-auto mb-4 flex items-center justify-center">
                                <Calendar className="w-6 h-6 text-white"/>
                            </div>
                            <div className="text-3xl font-bold text-secondary mb-1">40+</div>
                            <div className="text-sm text-muted-foreground">Sessions</div>
                        </div>

                        {/* Stat Card: Days */}
                        <div
                            className="glass-card rounded-2xl p-6 text-center border-2 border-accent/20 hover:border-accent/40 hover:scale-105 transition-all duration-300">
                            <div
                                className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-pink-400 mx-auto mb-4 flex items-center justify-center">
                                <Clock className="w-6 h-6 text-white"/>
                            </div>
                            <div className="text-3xl font-bold text-accent mb-1">3</div>
                            <div className="text-sm text-muted-foreground">Days</div>
                        </div>

                        {/* Stat Card: Sponsors */}
                        <div
                            className="glass-card rounded-2xl p-6 text-center border-2 border-orange-500/20 hover:border-orange-500/40 hover:scale-105 transition-all duration-300">
                            <div
                                className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 mx-auto mb-4 flex items-center justify-center">
                                <Award className="w-6 h-6 text-white"/>
                            </div>
                            <div className="text-3xl font-bold text-orange-500 mb-1">10+</div>
                            <div className="text-sm text-muted-foreground">Sponsors</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section - Same as lite mode */}
            <AboutSection/>

            {/* Featured Speakers Preview */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <Users className="w-4 h-4 text-primary"/>
                            <span className="text-sm font-semibold text-primary">Featured Speakers</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-hero">
                            Learn From The Best
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Industry experts and thought leaders sharing their knowledge
                        </p>
                    </div>

                    {/* Speaker Cards Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {previewSpeakers.map((speaker, index) => (
                            <div
                                key={speaker.name}
                                className="animate-fade-in-up"
                                style={{animationDelay: `${index * 150}ms`}}
                            >
                                <SpeakerCard
                                    speaker={speaker}
                                    variant="featured"
                                    onClick={() => {
                                        // TODO: Navigate to speaker detail page
                                        console.log("Speaker:", speaker.name);
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* View All Speakers CTA */}
                    <div className="text-center">
                        <Link to="/speakers">
                            <Button size="lg" className="bg-gradient-hero text-white hover:shadow-glow group">
                                View All 30+ Speakers
                                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Agenda Preview */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-soft">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                            <Calendar className="w-4 h-4 text-secondary"/>
                            <span className="text-sm font-semibold text-secondary">Event Schedule</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-hero">
                            What to Expect
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Three days packed with talks, workshops, and networking
                        </p>
                    </div>

                    {/* Preview Agenda Items */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {previewAgenda.map((item, index) => (
                            <div
                                key={index}
                                className="glass-card rounded-2xl p-6 border-2 border-border hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] group"
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0">
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
                            </div>
                        ))}
                    </div>

                    {/* View Full Schedule CTA */}
                    <div className="text-center">
                        <Link to="/agenda">
                            <Button size="lg" variant="outline" className="border-2 group">
                                View Full 3-Day Schedule
                                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Venue Preview - Quick info with CTA */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="glass-card rounded-3xl overflow-hidden border-2 border-primary/20">
                        <div className="grid md:grid-cols-2">
                            {/* Venue Image */}
                            <div className="relative h-64 md:h-auto bg-gradient-hero">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <MapPin className="w-20 h-20 text-white/30"/>
                                </div>
                            </div>

                            {/* Venue Info */}
                            <div className="p-8">
                                <div
                                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
                                    <MapPin className="w-3 h-3 text-primary"/>
                                    <span className="text-xs font-semibold text-primary">Event Venue</span>
                                </div>
                                <h2 className="text-3xl font-bold mb-4">Join Us In Person</h2>
                                <p className="text-muted-foreground mb-4">
                                    Brain Station 23 HQ
                                    <br/>
                                    Dhaka, Bangladesh
                                </p>
                                <p className="text-sm text-muted-foreground mb-6">
                                    Easy access via public transport, parking available, wheelchair accessible
                                </p>
                                <Link to="/venue">
                                    <Button className="w-full sm:w-auto group">
                                        View Venue Details & Map
                                        <ChevronRight
                                            className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
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
