import {useState, useMemo} from "react";
import {Calendar, Clock, MapPin, User, Download, ChevronRight, Zap} from "lucide-react";
import {PageHeader} from "@/components/pro/PageHeader";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {FooterSection} from "@/components/sections/FooterSection";
import {agendaItems, tracks} from "@/content";
import {featuredSpeakers, otherSpeakers} from "@/content";
import {cn} from "@/lib/utils";

/**
 * Agenda Page - Pro Mode
 * Ultra-advanced multi-day, multi-track schedule with beautiful animations
 */
const AgendaPage = () => {
    // Get configuration from localStorage (set by debug toggle)
    const eventDays = parseInt(localStorage.getItem('eventDays') || '1') as 1 | 2 | 3;
    const eventTracks = parseInt(localStorage.getItem('eventTracks') || '1') as 1 | 2 | 3;

    const [selectedDay, setSelectedDay] = useState<number>(1);
    const [selectedTrack, setSelectedTrack] = useState<string>("all");

    // Combine all speakers for avatar lookup
    const allSpeakers = useMemo(() => {
        return [...featuredSpeakers, ...otherSpeakers];
    }, []);

    // Helper function to get speaker avatar
    const getSpeakerAvatar = (speakerName?: string) => {
        if (!speakerName) return null;
        const speaker = allSpeakers.find(s => s.name === speakerName);
        return speaker?.image || null;
    };

    // Generate days array based on configuration
    const days = useMemo(() => {
        return Array.from({length: eventDays}, (_, i) => ({
            day: i + 1,
            label: `Day ${i + 1}`,
            date: `March ${15 + i}, 2025`
        }));
    }, [eventDays]);

    // Track labels for multi-track view
    const trackLabels = [
        {id: "technical", label: "Technical Track", color: "blue", icon: "💻"},
        {id: "workshop", label: "Workshop Track", color: "green", icon: "🛠️"},
        {id: "business", label: "Business Track", color: "purple", icon: "💼"},
    ];

    // Filter tracks based on configuration
    const availableTracks = useMemo(() => {
        const allTracks = [
            {id: "all", label: "All Tracks", color: "primary"},
            {id: "technical", label: "Technical", color: "blue"},
            {id: "workshop", label: "Workshop", color: "green"},
            {id: "business", label: "Business", color: "purple"},
        ];

        if (eventTracks === 1) {
            return [allTracks[0], allTracks[1]]; // All + Technical only
        } else if (eventTracks === 2) {
            return allTracks.slice(0, 3); // All + Technical + Workshop
        }
        return allTracks; // All tracks
    }, [eventTracks]);

    // Calculate sticky top positions based on what's visible
    const dayTabsHeight = eventDays > 1 ? 88 : 0; // Height of day tabs section
    const navHeight = 64; // Height of navigation bar
    const trackFilterTop = navHeight + dayTabsHeight;

    // Filter agenda items by day and track
    const filteredSessions = useMemo(() => {
        // Filter by selected day
        let filtered = agendaItems.filter(item => item.day === selectedDay);

        // Filter by track
        if (selectedTrack !== "all") {
            filtered = filtered.filter(
                item => item.track === selectedTrack || item.track === "all"
            );
        }

        return filtered;
    }, [selectedDay, selectedTrack]);

    // Group sessions by time for multi-track layout
    const sessionsByTime = useMemo(() => {
        const grouped = new Map<string, typeof filteredSessions>();

        filteredSessions.forEach(session => {
            const existing = grouped.get(session.time) || [];
            existing.push(session);
            grouped.set(session.time, existing);
        });

        // Sort sessions within each time slot by track order
        const trackOrder = {technical: 0, workshop: 1, business: 2, all: 3};

        return Array.from(grouped.entries()).map(([time, sessions]) => ({
            time,
            sessions: sessions.sort((a, b) => {
                const orderA = trackOrder[a.track as keyof typeof trackOrder] ?? 99;
                const orderB = trackOrder[b.track as keyof typeof trackOrder] ?? 99;
                return orderA - orderB;
            })
        }));
    }, [filteredSessions]);

    // Get session style based on type
    const getSessionStyle = (type: string) => {
        const styles = {
            keynote: {
                border: "border-primary/40",
                bg: "bg-gradient-to-br from-primary/5 to-primary/10",
                badge: "bg-primary text-white",
                glow: "group-hover:shadow-[0_0_30px_rgba(2,86,155,0.3)]"
            },
            session: {
                border: "border-secondary/40",
                bg: "bg-gradient-to-br from-secondary/5 to-blue-500/10",
                badge: "bg-secondary text-white",
                glow: "group-hover:shadow-[0_0_30px_rgba(19,185,253,0.2)]"
            },
            workshop: {
                border: "border-green-500/40",
                bg: "bg-gradient-to-br from-green-50 to-emerald-50",
                badge: "bg-green-500 text-white",
                glow: "group-hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]"
            },
            panel: {
                border: "border-purple-500/40",
                bg: "bg-gradient-to-br from-purple-50 to-violet-50",
                badge: "bg-purple-500 text-white",
                glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
            },
            break: {
                border: "border-slate-300",
                bg: "bg-gradient-to-br from-slate-50 to-slate-100",
                badge: "bg-slate-400 text-white",
                glow: ""
            },
            closing: {
                border: "border-orange-500/40",
                bg: "bg-gradient-to-br from-orange-50 to-amber-50",
                badge: "bg-orange-500 text-white",
                glow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]"
            }
        };
        return styles[type as keyof typeof styles] || styles.session;
    };

    // Download ICS
    const handleDownloadSchedule = () => {
        // TODO: Implement ICS download
        console.log("Download schedule");
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Header */}
            <PageHeader
                title="Event Schedule"
                subtitle={`${eventDays}-Day Conference • ${eventTracks === 1 ? 'Single' : eventTracks} Track${eventTracks > 1 ? 's' : ''}`}
                description="Plan your perfect conference experience"
                icon={Calendar}
                badge={{
                    text: `${filteredSessions.length}+ Sessions`,
                    icon: Calendar,
                }}
            >
                {/* Download Button - FIXED THEMING */}
                <Button
                    onClick={handleDownloadSchedule}
                    size="lg"
                    variant="default"
                    className="bg-white/20 border-2 border-white/40 text-white hover:bg-white/30 hover:border-white/60 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                    <Download className="w-4 h-4 mr-2"/>
                    Download Schedule
                </Button>
            </PageHeader>

            {/* Day Tabs */}
            {eventDays > 1 && (
                <section
                    className="sticky top-16 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-md">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                        <Tabs value={selectedDay.toString()} onValueChange={(v) => setSelectedDay(parseInt(v))}>
                            <TabsList
                                className="grid w-full max-w-2xl mx-auto h-auto"
                                style={{gridTemplateColumns: `repeat(${eventDays}, 1fr)`}}
                            >
                                {days.map((day) => (
                                    <TabsTrigger
                                        key={day.day}
                                        value={day.day.toString()}
                                        className="data-[state=active]:bg-gradient-hero data-[state=active]:text-white transition-all duration-300 py-3"
                                    >
                                        <div className="flex flex-col items-center">
                                            <span className="font-bold text-base sm:text-lg">{day.label}</span>
                                            <span className="text-[10px] sm:text-xs opacity-80">{day.date}</span>
                                        </div>
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </Tabs>
                    </div>
                </section>
            )}

            {/* Track Filters */}
            <section
                className="sticky z-30 bg-background/90 backdrop-blur-md border-b border-border"
                style={{top: `${trackFilterTop}px`}}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                        {availableTracks.map((track, idx) => (
                            <button
                                key={track.id}
                                onClick={() => setSelectedTrack(track.id)}
                                className={cn(
                                    "px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 border-2 backdrop-blur-sm hover:-translate-y-0.5",
                                    selectedTrack === track.id
                                        ? "bg-gradient-hero text-white border-primary shadow-glow scale-105"
                                        : "bg-card/60 text-muted-foreground border-border hover:border-primary/30 hover:bg-card hover:text-foreground hover:scale-105",
                                    "animate-fade-in-up"
                                )}
                                style={{animationDelay: `${idx * 50}ms`}}
                            >
                                {track.label}
                            </button>
                        ))}
                    </div>

                    {/* Results count */}
                    <div className="text-center mt-2 text-xs sm:text-sm text-muted-foreground">
                        Showing {filteredSessions.length} sessions
                        {selectedTrack !== "all" && ` in ${availableTracks.find(t => t.id === selectedTrack)?.label}`}
                    </div>
                </div>
            </section>

            {/* Schedule Content */}
            <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {eventTracks === 1 || selectedTrack !== "all" ? (
                        /* Single Track Layout - Timeline View (also used when filtering by specific track) */
                        <div className="max-w-4xl mx-auto">
                            <div className="relative">
                                {/* Vertical Timeline Line */}
                                <div
                                    className="hidden md:block absolute left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary rounded-full shadow-glow"/>

                                <div className="space-y-4 sm:space-y-6">
                                    {filteredSessions.map((session, index) => {
                                        const Icon = session.icon;
                                        const style = getSessionStyle(session.type);
                                        // Get track label for display
                                        const sessionTrack = trackLabels.find(t => t.id === session.track);

                                        return (
                                            <div
                                                key={index}
                                                className="relative animate-fade-in-up group"
                                                style={{animationDelay: `${index * 80}ms`}}
                                            >
                                                <div className="flex gap-4 sm:gap-6 items-start">
                                                    {/* Time Badge - More Compact */}
                                                    <div className="flex-shrink-0 relative z-10">
                                                        <div className={cn(
                                                            "w-20 sm:w-24 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center border-3 sm:border-4 border-background shadow-lg sm:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-2 p-2 sm:p-3",
                                                            style.badge
                                                        )}>
                                                            <Icon className="w-4 h-4 sm:w-5 sm:h-5 mb-1"/>
                                                            <span
                                                                className="text-xs sm:text-sm font-bold whitespace-nowrap">{session.time}</span>
                                                            <span
                                                                className="text-[10px] sm:text-xs opacity-90">{session.duration}</span>
                                                        </div>
                                                    </div>

                                                    {/* Session Card */}
                                                    <div className={cn(
                                                        "flex-1 glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 border-2 transition-all duration-500 cursor-pointer",
                                                        style.border,
                                                        style.bg,
                                                        style.glow,
                                                        "hover:scale-[1.02] hover:-translate-y-1"
                                                    )}>
                                                        {/* Shine effect */}
                                                        <div
                                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none rounded-2xl sm:rounded-3xl"/>

                                                        <div className="relative z-10">
                                                            <div
                                                                className="flex items-start justify-between gap-3 mb-2">
                                                                <div className="flex-1">
                                                                    <div
                                                                        className="flex items-center gap-2 mb-2 flex-wrap">
                                                                        <Badge
                                                                            className={cn("text-[10px] sm:text-xs", style.badge)}>
                                                                            {session.type}
                                                                        </Badge>
                                                                        {/* Show track badge when filtering by specific track or multi-track config */}
                                                                        {(eventTracks > 1 || selectedTrack !== "all") && sessionTrack && session.track !== "all" && (
                                                                            <Badge variant="outline"
                                                                                   className="text-[10px] sm:text-xs">
                                                                                {sessionTrack.icon} {sessionTrack.label}
                                                                            </Badge>
                                                                        )}
                                                                    </div>
                                                                    <h3 className="text-base sm:text-xl font-bold mb-1 sm:mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                                                                        {session.title}
                                                                        <ChevronRight
                                                                            className="w-4 h-4 sm:w-5 sm:h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"/>
                                                                    </h3>
                                                                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                                                                        {session.description}
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            {/* Metadata - More Compact */}
                                                            <div
                                                                className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
                                                                {session.speaker && (
                                                                    <div
                                                                        className="flex items-center gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-muted/30">
                                                                        {getSpeakerAvatar(session.speaker) ? (
                                                                            <img
                                                                                src={getSpeakerAvatar(session.speaker)!}
                                                                                alt={session.speaker}
                                                                                className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover ring-2 ring-background"
                                                                            />
                                                                        ) : (
                                                                            <User className="w-3 h-3 sm:w-4 sm:h-4"/>
                                                                        )}
                                                                        <span
                                                                            className="font-medium text-xs sm:text-sm">{session.speaker}</span>
                                                                    </div>
                                                                )}
                                                                <div
                                                                    className="flex items-center gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-muted/30">
                                                                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4"/>
                                                                    <span
                                                                        className="text-xs sm:text-sm">{session.location}</span>
                                                                </div>
                                                                <div
                                                                    className="flex items-center gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-muted/30">
                                                                    <Clock className="w-3 h-3 sm:w-4 sm:h-4"/>
                                                                    <span
                                                                        className="text-xs sm:text-sm">{session.duration}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* Multi-Track Layout - Grid View - REDESIGNED FOR COMPACTNESS */
                        <div className="space-y-6 sm:space-y-8">
                            {/* Track Headers - Always Visible - DYNAMICALLY MATCH AVAILABLE TRACKS */}
                            {selectedTrack === "all" && (
                                <div className="hidden lg:grid gap-4 px-4"
                                     style={{gridTemplateColumns: `120px repeat(${eventTracks}, 1fr)`}}>
                                    <div></div>
                                    {/* Empty space for time column */}
                                    {trackLabels.slice(0, eventTracks).map((track, idx) => (
                                        <div
                                            key={track.id}
                                            className="text-center py-3 px-4 rounded-xl bg-gradient-to-br from-card to-muted/30 border-2 border-border animate-fade-in-up"
                                            style={{animationDelay: `${idx * 100}ms`}}
                                        >
                                            <div className="text-2xl mb-1">{track.icon}</div>
                                            <div className="font-bold text-sm">{track.label}</div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {sessionsByTime.map((timeSlot, idx) => (
                                <div
                                    key={timeSlot.time}
                                    className="animate-fade-in-up"
                                    style={{animationDelay: `${idx * 100}ms`}}
                                >
                                    {/* Time + Sessions Grid - FIXED: Dynamic columns based on available tracks */}
                                    <div className="grid gap-3 sm:gap-4"
                                         style={{gridTemplateColumns: window.innerWidth >= 1024 ? `120px repeat(${eventTracks}, 1fr)` : '1fr'}}>
                                        {/* Time Header - Sticky on desktop */}
                                        <div className="lg:sticky lg:top-40 lg:self-start">
                                            <div
                                                className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-gradient-hero text-white shadow-lg lg:flex-col lg:items-center lg:justify-center lg:h-full">
                                                <Clock className="w-4 h-4 sm:w-5 sm:h-5"/>
                                                <div className="font-bold text-sm sm:text-base lg:text-center">
                                                    {timeSlot.time}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Sessions - Create placeholder divs for empty tracks to maintain column alignment */}
                                        {trackLabels.slice(0, eventTracks).map((trackLabel, trackIdx) => {
                                            // Find session for this specific track at this time
                                            const session = timeSlot.sessions.find(s => s.track === trackLabel.id || s.track === 'all');

                                            if (!session) {
                                                // Empty placeholder to maintain grid alignment
                                                return (
                                                    <div key={`empty-${trackIdx}`} className="hidden lg:block">
                                                        {/* Empty space to maintain column structure */}
                                                    </div>
                                                );
                                            }

                                            const Icon = session.icon;
                                            const style = getSessionStyle(session.type);
                                            const sessionTrack = trackLabels.find(t => t.id === session.track);

                                            return (
                                                <div
                                                    key={`${session.title}-${trackIdx}`}
                                                    className={cn(
                                                        "glass-card rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 transition-all duration-500 cursor-pointer group relative overflow-hidden",
                                                        style.border,
                                                        style.bg,
                                                        style.glow,
                                                        "hover:scale-[1.02] hover:-translate-y-1"
                                                    )}
                                                >
                                                    {/* Shine effect */}
                                                    <div
                                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"/>

                                                    <div className="relative z-10">
                                                        {/* Icon + Badge - Compact header */}
                                                        <div
                                                            className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
                                                            <div className="flex items-center gap-2">
                                                                <div className={cn(
                                                                    "w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 flex-shrink-0",
                                                                    style.badge
                                                                )}>
                                                                    <Icon className="w-4 h-4 sm:w-5 sm:h-5"/>
                                                                </div>
                                                                <Badge
                                                                    className={cn("text-[10px] sm:text-xs px-2 py-0.5", style.badge)}>
                                                                    {session.type}
                                                                </Badge>
                                                            </div>
                                                            {/* Track indicator badge - desktop only */}
                                                            {sessionTrack && (
                                                                <div
                                                                    className="hidden lg:flex items-center gap-1 text-xs text-muted-foreground bg-muted/30 px-2 py-1 rounded-md">
                                                                    <span>{sessionTrack.icon}</span>
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* Title - Compact */}
                                                        <h3 className="text-sm sm:text-base font-bold mb-1.5 sm:mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                                                            {session.title}
                                                        </h3>

                                                        {/* Description - Compact */}
                                                        <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3 line-clamp-2 leading-relaxed">
                                                            {session.description}
                                                        </p>

                                                        {/* Metadata - Super Compact */}
                                                        <div
                                                            className="space-y-1 text-[10px] sm:text-xs text-muted-foreground">
                                                            {session.speaker && (
                                                                <div className="flex items-center gap-1.5">
                                                                    {getSpeakerAvatar(session.speaker) ? (
                                                                        <img
                                                                            src={getSpeakerAvatar(session.speaker)!}
                                                                            alt={session.speaker}
                                                                            className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover ring-2 ring-background"
                                                                        />
                                                                    ) : (
                                                                        <User className="w-3 h-3 flex-shrink-0"/>
                                                                    )}
                                                                    <span
                                                                        className="font-medium truncate">{session.speaker}</span>
                                                                </div>
                                                            )}
                                                            <div className="flex items-center gap-1.5">
                                                                <MapPin className="w-3 h-3 flex-shrink-0"/>
                                                                <span className="truncate">{session.location}</span>
                                                            </div>
                                                            <div className="flex items-center gap-1.5">
                                                                <Clock className="w-3 h-3 flex-shrink-0"/>
                                                                <span>{session.duration}</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Mobile Track Label - FIXED TO USE ACTUAL SESSION TRACK */}
                                                    {sessionTrack && (
                                                        <div className="lg:hidden mt-2 pt-2 border-t border-border/30">
                                                            <div
                                                                className="text-[10px] text-muted-foreground flex items-center gap-1 font-medium">
                                                                <span>{sessionTrack.icon}</span>
                                                                <span>{sessionTrack.label}</span>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Empty State */}
                    {filteredSessions.length === 0 && (
                        <div className="text-center py-12 sm:py-16">
                            <div
                                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                                <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-muted-foreground"/>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold mb-2">No sessions found</h3>
                            <p className="text-sm sm:text-base text-muted-foreground mb-6">
                                Try selecting a different day or track
                            </p>
                            <Button onClick={() => setSelectedTrack("all")}>
                                View All Tracks
                            </Button>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
                <div className="max-w-4xl mx-auto text-center">
                    <div
                        className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border-2 border-primary/20 hover:border-primary/30 transition-all duration-500 animate-float">
                        <Zap className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-primary animate-pulse"/>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Don't Miss a Single Session!</h2>
                        <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                            Register now to get full access to all {filteredSessions.length}+ sessions
                            across {eventDays} day{eventDays > 1 ? 's' : ''}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                            <Button size="lg" className="bg-gradient-hero text-white hover:shadow-glow">
                                Register for Event
                            </Button>
                            <Button size="lg" variant="outline" onClick={handleDownloadSchedule}>
                                <Download className="w-4 h-4 mr-2"/>
                                Download Full Schedule
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <FooterSection/>
        </div>
    );
};

export default AgendaPage;
