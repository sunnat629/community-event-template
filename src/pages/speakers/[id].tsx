import {useParams, Link, useNavigate} from "react-router-dom";
import {ChevronLeft, Twitter, Linkedin, Mail, Globe, Calendar, Clock, MapPin, ExternalLink} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {SpeakerCard} from "@/components/shared/SpeakerCard";
import {FooterSection} from "@/components/sections/FooterSection";
import {featuredSpeakers, otherSpeakers, agendaItems} from "@/content";
import {useMemo} from "react";

/**
 * Speaker Detail Page - Pro Mode
 * Individual speaker profile with full bio, sessions, and social links
 */
const SpeakerDetailPage = () => {
    const {id} = useParams<{ id: string }>();
    const navigate = useNavigate();

    // Combine all speakers
    const allSpeakers = useMemo(() => {
        return [...featuredSpeakers, ...otherSpeakers];
    }, []);

    // Find speaker by slug (convert name to slug format)
    const speaker = useMemo(() => {
        if (!id) return null;
        const slug = id.toLowerCase().replace(/-/g, ' ');
        return allSpeakers.find(s => s.name.toLowerCase() === slug);
    }, [id, allSpeakers]);

    // Find sessions by this speaker
    const speakerSessions = useMemo(() => {
        if (!speaker) return [];
        return agendaItems.filter(item => item.speaker === speaker.name);
    }, [speaker]);

    // Get related speakers (same company or similar topics)
    const relatedSpeakers = useMemo(() => {
        if (!speaker) return [];
        return allSpeakers
            .filter(s =>
                s.name !== speaker.name &&
                (s.company === speaker.company || s.topic.toLowerCase().includes(speaker.topic.split(' ')[0].toLowerCase()))
            )
            .slice(0, 3);
    }, [speaker, allSpeakers]);

    // 404 handling
    if (!speaker) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center px-4">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Speaker Not Found</h1>
                    <p className="text-muted-foreground mb-8">
                        The speaker you're looking for doesn't exist or has been removed.
                    </p>
                    <Link to="/speakers">
                        <Button size="lg">
                            <ChevronLeft className="w-4 h-4 mr-2"/>
                            Back to All Speakers
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Breadcrumbs */}
            <div className="bg-gradient-subtle border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="flex items-center gap-2 text-sm">
                        <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                            Home
                        </Link>
                        <span className="text-muted-foreground">/</span>
                        <Link to="/speakers" className="text-muted-foreground hover:text-primary transition-colors">
                            Speakers
                        </Link>
                        <span className="text-muted-foreground">/</span>
                        <span className="text-foreground font-medium">{speaker.name}</span>
                    </nav>
                </div>
            </div>

            {/* Back Button */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <Button
                    variant="ghost"
                    onClick={() => navigate(-1)}
                    className="group"
                >
                    <ChevronLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"/>
                    Back to Speakers
                </Button>
            </div>

            {/* Speaker Hero Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 items-start">
                        {/* Left Column - Avatar and Social */}
                        <div className="md:col-span-1">
                            <div className="sticky top-24">
                                {/* Avatar */}
                                <div className="relative mb-6 animate-fade-in-up">
                                    <div
                                        className="w-full aspect-square rounded-3xl overflow-hidden border-4 border-primary/30 shadow-2xl">
                                        <img
                                            src={speaker.image}
                                            alt={speaker.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    {/* Floating badge */}
                                    {speaker.featured && (
                                        <div
                                            className="absolute -top-3 -right-3 px-4 py-2 bg-gradient-hero text-white text-sm font-bold rounded-full shadow-lg animate-float">
                                            Featured Speaker
                                        </div>
                                    )}
                                </div>

                                {/* Social Links */}
                                {speaker.social && Object.keys(speaker.social).length > 0 && (
                                    <div
                                        className="glass-card rounded-2xl p-6 border-2 border-border animate-fade-in-up"
                                        style={{animationDelay: '100ms'}}>
                                        <h3 className="text-lg font-bold mb-4">Connect</h3>
                                        <div className="space-y-3">
                                            {speaker.social.twitter && (
                                                <a
                                                    href={speaker.social.twitter}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-muted hover:bg-primary/10 hover:border-primary/30 border-2 border-transparent transition-all duration-200 group"
                                                >
                                                    <Twitter className="w-5 h-5 text-primary"/>
                                                    <span className="flex-1 font-medium">Twitter</span>
                                                    <ExternalLink
                                                        className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors"/>
                                                </a>
                                            )}
                                            {speaker.social.linkedin && (
                                                <a
                                                    href={speaker.social.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-muted hover:bg-primary/10 hover:border-primary/30 border-2 border-transparent transition-all duration-200 group"
                                                >
                                                    <Linkedin className="w-5 h-5 text-primary"/>
                                                    <span className="flex-1 font-medium">LinkedIn</span>
                                                    <ExternalLink
                                                        className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors"/>
                                                </a>
                                            )}
                                            {speaker.social.email && (
                                                <a
                                                    href={`mailto:${speaker.social.email}`}
                                                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-muted hover:bg-primary/10 hover:border-primary/30 border-2 border-transparent transition-all duration-200 group"
                                                >
                                                    <Mail className="w-5 h-5 text-primary"/>
                                                    <span className="flex-1 font-medium">Email</span>
                                                    <ExternalLink
                                                        className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors"/>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Column - Info */}
                        <div className="md:col-span-2 space-y-6">
                            {/* Header */}
                            <div className="animate-fade-in-up">
                                <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-hero">
                                    {speaker.name}
                                </h1>
                                <p className="text-2xl text-primary font-semibold mb-2">
                                    {speaker.title}
                                </p>
                                {speaker.company && (
                                    <div className="flex items-center gap-2 text-lg text-muted-foreground mb-6">
                                        <Globe className="w-5 h-5"/>
                                        <span>{speaker.company}</span>
                                    </div>
                                )}
                            </div>

                            {/* Speaking Topic */}
                            <div className="glass-card rounded-2xl p-6 border-2 border-primary/20 animate-fade-in-up"
                                 style={{animationDelay: '100ms'}}>
                                <div className="flex items-start gap-4">
                                    <div
                                        className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0">
                                        <Calendar className="w-6 h-6 text-white"/>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                                            Speaking On
                                        </h3>
                                        <p className="text-xl font-bold text-foreground">
                                            {speaker.topic}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Bio */}
                            {speaker.bio && (
                                <div className="glass-card rounded-2xl p-8 border-2 border-border animate-fade-in-up"
                                     style={{animationDelay: '200ms'}}>
                                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                        About {speaker.name.split(' ')[0]}
                                    </h2>
                                    <div className="prose prose-lg max-w-none">
                                        <p className="text-muted-foreground leading-relaxed">
                                            {speaker.bio}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Sessions by this speaker */}
                            {speakerSessions.length > 0 && (
                                <div className="animate-fade-in-up" style={{animationDelay: '300ms'}}>
                                    <h2 className="text-2xl font-bold mb-6">Sessions</h2>
                                    <div className="space-y-4">
                                        {speakerSessions.map((session, index) => (
                                            <div
                                                key={index}
                                                className="glass-card rounded-2xl p-6 border-2 border-border hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] group cursor-pointer"
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div
                                                        className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0">
                                                        <session.icon className="w-7 h-7 text-white"/>
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <Badge variant="secondary" className="text-xs">
                                                                {session.type}
                                                            </Badge>
                                                            <span
                                                                className="text-sm font-bold text-primary">{session.time}</span>
                                                            <span className="text-xs text-muted-foreground">•</span>
                                                            <span
                                                                className="text-xs text-muted-foreground">{session.duration}</span>
                                                        </div>
                                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                                            {session.title}
                                                        </h3>
                                                        <p className="text-muted-foreground mb-3">
                                                            {session.description}
                                                        </p>
                                                        <div
                                                            className="flex items-center gap-4 text-sm text-muted-foreground">
                                                            <div className="flex items-center gap-1">
                                                                <MapPin className="w-4 h-4"/>
                                                                <span>{session.location}</span>
                                                            </div>
                                                            <div className="flex items-center gap-1">
                                                                <Clock className="w-4 h-4"/>
                                                                <span>{session.duration}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Speakers */}
            {relatedSpeakers.length > 0 && (
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center">You May Also Like</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedSpeakers.map((relatedSpeaker, index) => (
                                <div
                                    key={relatedSpeaker.name}
                                    className="animate-fade-in-up"
                                    style={{animationDelay: `${index * 100}ms`}}
                                >
                                    <SpeakerCard
                                        speaker={relatedSpeaker}
                                        variant="compact"
                                        onClick={() => {
                                            const slug = relatedSpeaker.name.toLowerCase().replace(/\s+/g, '-');
                                            navigate(`/speakers/${slug}`);
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <div
                        className="glass-card rounded-3xl p-8 sm:p-12 border-2 border-primary/20 hover:border-primary/30 transition-all duration-500">
                        <h2 className="text-3xl font-bold mb-4">
                            Don't Miss {speaker.name.split(' ')[0]}'s Talk!
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Register now to attend this session and connect with industry experts.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-gradient-hero text-white hover:shadow-glow">
                                Register for Event
                            </Button>
                            <Link to="/speakers">
                                <Button size="lg" variant="outline">
                                    View All Speakers
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <FooterSection/>
        </div>
    );
};

export default SpeakerDetailPage;
