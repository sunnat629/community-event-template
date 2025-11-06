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

    // Get type badge styling
    const getTypeBadge = (type: string) => {
        const badges: Record<string, { label: string; className: string }> = {
            keynote: {label: "Keynote", className: "bg-blue-500/20 text-blue-300 border-blue-500/30"},
            session: {label: "Session", className: "bg-purple-500/20 text-purple-300 border-purple-500/30"},
            workshop: {label: "Workshop", className: "bg-green-500/20 text-green-300 border-green-500/30"},
            panel: {label: "Panel", className: "bg-orange-500/20 text-orange-300 border-orange-500/30"},
            break: {label: "Break", className: "bg-gray-500/20 text-gray-300 border-gray-500/30"},
            closing: {label: "Closing", className: "bg-pink-500/20 text-pink-300 border-pink-500/30"}
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

        // Create a simple ICS file content
        const eventTitle = session.title;
        const eventDescription = session.description;
        const eventLocation = session.location;

        // In a real app, you'd generate proper ICS format
        alert(`Add to Calendar feature:\n\n${eventTitle}\n${session.time} - ${session.endTime}\n${eventLocation}`);
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
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
                <div className="container mx-auto px-4 py-20 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Session Not Found</h1>
                    <p className="text-gray-400 mb-8">The session you're looking for doesn't exist.</p>
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
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
            {/* Back Button - Fixed */}
            <div className="sticky top-16 z-40 bg-gray-900/50 backdrop-blur-lg border-b border-white/5">
                <div className="container mx-auto px-4 py-3">
                    <Button
                        onClick={() => navigate('/agenda')}
                        variant="ghost"
                        className="text-white hover:bg-white/10"
                    >
                        <ChevronLeft className="w-4 h-4 mr-2"/>
                        Back to Agenda
                    </Button>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative py-12 sm:py-16 overflow-hidden">
                {/* Background Gradient */}
                <div
                    className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent opacity-50"/>
                <div
                    className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"/>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        {/* Type Badge & Track */}
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <Badge className={cn("border", typeBadge.className)}>
                                {typeBadge.label}
                            </Badge>
                            <Badge variant="outline" className="border-white/20 text-white">
                                {trackInfo.icon} {trackInfo.label}
                            </Badge>
                            <Badge variant="outline" className="border-white/20 text-white">
                                📅 Day {session.day}
                            </Badge>
                        </div>

                        {/* Session Title */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                            {session.title}
                        </h1>

                        {/* Session Meta */}
                        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-300 mb-6">
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-primary"/>
                                <span className="text-sm sm:text-base">
                                    {session.time} - {session.endTime}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-primary"/>
                                <span className="text-sm sm:text-base">{session.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary"/>
                                <span className="text-sm sm:text-base">{session.location}</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-3">
                            <Button
                                onClick={handleAddToCalendar}
                                className="bg-primary hover:bg-primary/90"
                            >
                                <Calendar className="w-4 h-4 mr-2"/>
                                Add to Calendar
                            </Button>
                            <Button
                                onClick={() => setIsBookmarked(!isBookmarked)}
                                variant="outline"
                                className={cn(
                                    "border-white/20 text-white hover:bg-white/10",
                                    isBookmarked && "bg-white/20 border-white/40"
                                )}
                            >
                                <Bookmark className={cn("w-4 h-4 mr-2", isBookmarked && "fill-current")}/>
                                {isBookmarked ? 'Bookmarked' : 'Bookmark'}
                            </Button>
                            <Button
                                onClick={handleShare}
                                variant="outline"
                                className="border-white/20 text-white hover:bg-white/10"
                            >
                                <Share2 className="w-4 h-4 mr-2"/>
                                Share
                            </Button>
                        </div>
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
                            <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-6 sm:p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 rounded-xl bg-primary/20 border border-primary/30">
                                        <Icon className="w-6 h-6 text-primary"/>
                                    </div>
                                    <h2 className="text-2xl font-bold text-white">About This Session</h2>
                                </div>
                                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                                    {session.description}
                                </p>

                                {/* Additional session details could go here */}
                                <div className="mt-6 pt-6 border-t border-white/10">
                                    <h3 className="text-lg font-semibold text-white mb-3">What You'll Learn</h3>
                                    <ul className="space-y-2 text-gray-300">
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
                                <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-6 sm:p-8">
                                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
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
                                            <h3 className="text-xl font-bold text-white mb-1">
                                                {speaker.name}
                                            </h3>
                                            <p className="text-primary font-medium mb-1">
                                                {speaker.title}
                                            </p>
                                            {speaker.company && (
                                                <p className="text-gray-400 text-sm mb-3">
                                                    {speaker.company}
                                                </p>
                                            )}

                                            {speaker.bio && (
                                                <p className="text-gray-300 text-sm sm:text-base mb-4">
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
                                                            className="border-white/20 text-white hover:bg-white/10"
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
                                                            className="border-white/20 text-white hover:bg-white/10"
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
                                                            className="border-white/20 text-white hover:bg-white/10"
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
                            <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-6">
                                <h3 className="text-lg font-bold text-white mb-4">Session Details</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Type</span>
                                        <span className="text-white font-medium">{typeBadge.label}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Track</span>
                                        <span className="text-white font-medium">{trackInfo.label}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Day</span>
                                        <span className="text-white font-medium">Day {session.day}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Duration</span>
                                        <span className="text-white font-medium">{session.duration}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Location</span>
                                        <span className="text-white font-medium text-right">{session.location}</span>
                                    </div>
                                </div>

                                <Button
                                    className="w-full mt-6 bg-primary hover:bg-primary/90"
                                    onClick={handleAddToCalendar}
                                >
                                    <Download className="w-4 h-4 mr-2"/>
                                    Download Session Info
                                </Button>
                            </Card>

                            {/* Related Sessions */}
                            {relatedSessions.length > 0 && (
                                <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-6">
                                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
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
                                                    className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group"
                                                >
                                                    <div className="flex items-start gap-3">
                                                        <div
                                                            className="p-2 rounded-lg bg-primary/20 border border-primary/30 mt-1">
                                                            <relatedIcon className="w-4 h-4 text-primary"/>
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <h4 className="text-sm font-semibold text-white mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                                                                {relatedSession.title}
                                                            </h4>
                                                            <div
                                                                className="flex items-center gap-2 text-xs text-gray-400">
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
