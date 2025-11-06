import {useParams, Link, useNavigate} from "react-router-dom";
import {
    ChevronLeft,
    Calendar,
    Clock,
    MapPin,
    User,
    Users,
    Share2,
    Bookmark,
    Download,
    Twitter,
    Linkedin,
    Mail
} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Card} from "@/components/ui/card";
import {agendaItems} from "@/content/agenda";
import {featuredSpeakers, otherSpeakers} from "@/content/speakers";
import {FooterSection} from "@/components/sections/FooterSection";
import {PageHeader} from "@/components/pro/PageHeader";
import {useState, useMemo} from "react";
import {cn} from "@/lib/utils";

const SessionDetailPage = () => {
    const {sessionId} = useParams();
    const navigate = useNavigate();
    const [isBookmarked, setIsBookmarked] = useState(false);

    // Find the session by creating a URL-safe ID from the title
    const session = agendaItems.find(item => {
        const urlId = item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        return urlId === sessionId;
    });

    // Get all speakers
    const allSpeakers = useMemo(() => {
        return [...featuredSpeakers, ...otherSpeakers];
    }, []);

    // Find speaker details
    const speaker = session?.speaker ? allSpeakers.find(s => s.name === session.speaker) : null;

    // Get related sessions (same track, same day, or same speaker)
    const relatedSessions = useMemo(() => {
        if (!session) return [];

        return agendaItems
            .filter(item =>
                item.title !== session.title &&
                (item.track === session.track ||
                    item.day === session.day ||
                    item.speaker === session.speaker)
            )
            .slice(0, 3);
    }, [session]);

    // Get type badge styling - LIGHT THEME
    const getTypeBadge = (type: string) => {
        const badges: Record<string, { label: string; className: string }> = {
            keynote: {label: "Keynote", className: "bg-primary text-white"},
            session: {label: "Session", className: "bg-secondary text-white"},
            workshop: {label: "Workshop", className: "bg-green-500 text-white"},
            panel: {label: "Panel", className: "bg-purple-500 text-white"},
            break: {label: "Break", className: "bg-slate-400 text-white"},
            closing: {label: "Closing", className: "bg-orange-500 text-white"}
        };
        return badges[type] || badges.session;
    };

    // Get track info
    const getTrackInfo = (track: string) => {
        const tracks: Record<string, { label: string; icon: string }> = {
            technical: {label: "Technical Track", icon: "💻"},
            workshop: {label: "Workshop Track", icon: "🛠️"},
            business: {label: "Business Track", icon: "💼"},
            all: {label: "All Attendees", icon: "🎯"}
        };
        return tracks[track] || tracks.all;
    };

    // Add to calendar handler
    const handleAddToCalendar = () => {
        if (!session) return;

        // In a real app, you'd generate proper ICS format
        alert(`Add to Calendar feature:\n\n${session.title}\n${session.time} - ${session.endTime}\n${session.location}`);
    };

    // Share handler
    const handleShare = async () => {
        if (!session) return;

        const shareData = {
            title: session.title,
            text: session.description,
            url: window.location.href
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                // User cancelled or error occurred
            }
        } else {
            // Fallback: Copy to clipboard
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    if (!session) {
        return (
            <div className="min-h-screen bg-background">
                <div className="container mx-auto px-4 py-20 text-center">
                    <h1 className="text-4xl font-bold mb-4">Session Not Found</h1>
                    <p className="text-muted-foreground mb-8">The session you're looking for doesn't exist.</p>
                    <Button onClick={() => navigate('/agenda')} variant="default">
                        <ChevronLeft className="w-4 h-4 mr-2"/>
                        Back to Agenda
                    </Button>
                </div>
            </div>
        );
    }

    const Icon = session.icon;
    const typeBadge = getTypeBadge(session.type);
    const trackInfo = getTrackInfo(session.track);

    return (
        <div className="min-h-screen bg-background">
            {/* Back Button - Fixed */}
            <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-lg border-b border-border">
                <div className="container mx-auto px-4 py-3">
                    <Button
                        onClick={() => navigate('/agenda')}
                        variant="ghost"
                    >
                        <ChevronLeft className="w-4 h-4 mr-2"/>
                        Back to Agenda
                    </Button>
                </div>
            </div>

            {/* Hero Header - Using PageHeader Component */}
            <PageHeader
                title={session.title}
                subtitle={`${session.time} - ${session.endTime} • ${session.duration}`}
                description={session.description}
                icon={Icon}
                badge={{
                    text: typeBadge.label,
                    icon: Icon,
                }}
            >
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                    <Button
                        onClick={handleAddToCalendar}
                        size="lg"
                        className="bg-white/20 border-2 border-white/40 text-white hover:bg-white/30 hover:border-white/60 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                        <Calendar className="w-4 h-4 mr-2"/>
                        Add to Calendar
                    </Button>
                    <Button
                        onClick={() => setIsBookmarked(!isBookmarked)}
                        size="lg"
                        className={cn(
                            "bg-white/20 border-2 border-white/40 text-white hover:bg-white/30 hover:border-white/60 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300",
                            isBookmarked && "bg-white/30 border-white/60"
                        )}
                    >
                        <Bookmark className={cn("w-4 h-4 mr-2", isBookmarked && "fill-current")}/>
                        {isBookmarked ? 'Bookmarked' : 'Bookmark'}
                    </Button>
                    <Button
                        onClick={handleShare}
                        size="lg"
                        className="bg-white/20 border-2 border-white/40 text-white hover:bg-white/30 hover:border-white/60 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                        <Share2 className="w-4 h-4 mr-2"/>
                        Share
                    </Button>
                </div>
            </PageHeader>

            {/* Session Meta Badges */}
            <section className="py-4 px-4 sm:px-6 lg:px-8 bg-muted/30">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-wrap items-center gap-3">
                        <Badge className={cn("border", typeBadge.className)}>
                            {typeBadge.label}
                        </Badge>
                        <Badge variant="outline">
                            {trackInfo.icon} {trackInfo.label}
                        </Badge>
                        <Badge variant="outline">
                            📅 Day {session.day}
                        </Badge>
                        <Badge variant="outline">
                            <MapPin className="w-3 h-3 mr-1"/>
                            {session.location}
                        </Badge>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Left Column - Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Description Card */}
                            <Card className="glass-card border-2 p-6 sm:p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={cn("p-3 rounded-xl", typeBadge.className)}>
                                        <Icon className="w-6 h-6"/>
                                    </div>
                                    <h2 className="text-2xl font-bold">About This Session</h2>
                                </div>
                                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                                    {session.description}
                                </p>

                                {/* What You'll Learn */}
                                <div className="mt-6 pt-6 border-t">
                                    <h3 className="text-lg font-semibold mb-3">What You'll Learn</h3>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary mt-1">✓</span>
                                            <span>Key concepts and best practices</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary mt-1">✓</span>
                                            <span>Real-world examples and use cases</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary mt-1">✓</span>
                                            <span>Practical tips you can apply immediately</span>
                                        </li>
                                    </ul>
                                </div>
                            </Card>

                            {/* Speaker Card */}
                            {speaker && (
                                <Card className="glass-card border-2 p-6 sm:p-8">
                                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                        <User className="w-6 h-6 text-primary"/>
                                        About the Speaker
                                    </h2>

                                    <div className="flex flex-col sm:flex-row gap-6">
                                        {/* Speaker Avatar */}
                                        <div className="flex-shrink-0">
                                            <img
                                                src={speaker.image}
                                                alt={speaker.name}
                                                className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl object-cover ring-4 ring-primary/30"
                                            />
                                        </div>

                                        {/* Speaker Info */}
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-1">
                                                {speaker.name}
                                            </h3>
                                            <p className="text-primary font-medium mb-1">
                                                {speaker.title}
                                            </p>
                                            {speaker.company && (
                                                <p className="text-muted-foreground text-sm mb-3">
                                                    {speaker.company}
                                                </p>
                                            )}

                                            {speaker.bio && (
                                                <p className="text-muted-foreground text-sm sm:text-base mb-4">
                                                    {speaker.bio}
                                                </p>
                                            )}

                                            {/* Social Links */}
                                            {speaker.social && (
                                                <div className="flex flex-wrap gap-2">
                                                    {speaker.social.twitter && (
                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            onClick={() => window.open(speaker.social!.twitter, '_blank')}
                                                        >
                                                            <Twitter className="w-4 h-4 mr-1"/>
                                                            Twitter
                                                        </Button>
                                                    )}
                                                    {speaker.social.linkedin && (
                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            onClick={() => window.open(speaker.social!.linkedin, '_blank')}
                                                        >
                                                            <Linkedin className="w-4 h-4 mr-1"/>
                                                            LinkedIn
                                                        </Button>
                                                    )}
                                                    {speaker.social.email && (
                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            onClick={() => window.location.href = `mailto:${speaker.social!.email}`}
                                                        >
                                                            <Mail className="w-4 h-4 mr-1"/>
                                                            Email
                                                        </Button>
                                                    )}
                                                </div>
                                            )}

                                            {/* Link to speaker page */}
                                            <Link to={`/speakers/${speaker.name.toLowerCase().replace(/\s+/g, '-')}`}>
                                                <Button
                                                    size="sm"
                                                    variant="ghost"
                                                    className="mt-3 text-primary hover:text-primary/80 px-0"
                                                >
                                                    View Full Profile →
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </Card>
                            )}
                        </div>

                        {/* Right Column - Sidebar */}
                        <div className="space-y-6">
                            {/* Quick Info Card */}
                            <Card className="glass-card border-2 p-6">
                                <h3 className="text-lg font-bold mb-4">Session Details</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Type</span>
                                        <span className="font-medium">{typeBadge.label}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Track</span>
                                        <span className="font-medium">{trackInfo.label}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Day</span>
                                        <span className="font-medium">Day {session.day}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Duration</span>
                                        <span className="font-medium">{session.duration}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Location</span>
                                        <span className="font-medium text-right">{session.location}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Time</span>
                                        <span
                                            className="font-medium text-right">{session.time} - {session.endTime}</span>
                                    </div>
                                </div>

                                <Button
                                    className="w-full mt-6 bg-gradient-hero text-white"
                                    onClick={handleAddToCalendar}
                                >
                                    <Download className="w-4 h-4 mr-2"/>
                                    Download Session Info
                                </Button>
                            </Card>

                            {/* Related Sessions */}
                            {relatedSessions.length > 0 && (
                                <Card className="glass-card border-2 p-6">
                                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                        <Users className="w-5 h-5 text-primary"/>
                                        Related Sessions
                                    </h3>
                                    <div className="space-y-3">
                                        {relatedSessions.map((relatedSession, idx) => {
                                            const relatedIcon = relatedSession.icon;
                                            const relatedId = relatedSession.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

                                            return (
                                                <Link
                                                    key={idx}
                                                    to={`/agenda/${relatedId}`}
                                                    className="block p-3 rounded-lg bg-muted/30 hover:bg-muted/50 border border-border hover:border-primary/30 transition-all group"
                                                >
                                                    <div className="flex items-start gap-3">
                                                        <div
                                                            className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                                                            <relatedIcon className="w-4 h-4 text-primary"/>
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <h4 className="text-sm font-semibold mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                                                                {relatedSession.title}
                                                            </h4>
                                                            <div
                                                                className="flex items-center gap-2 text-xs text-muted-foreground">
                                                                <Clock className="w-3 h-3"/>
                                                                <span>{relatedSession.time}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>

                                    <Link to="/agenda">
                                        <Button
                                            variant="ghost"
                                            className="w-full mt-4 text-primary hover:text-primary/80"
                                        >
                                            View Full Agenda →
                                        </Button>
                                    </Link>
                                </Card>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <FooterSection/>
        </div>
    );
};

export default SessionDetailPage;
