import {useState, useMemo} from "react";
import {Calendar, Clock, MapPin, User, Download, Filter, ChevronRight, Zap} from "lucide-react";
import {PageHeader} from "@/components/pro/PageHeader";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Tabs, TabsList, TabsTrigger, TabsContent} from "@/components/ui/tabs";
import {agendaItems, tracks} from "@/content";
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

    // Generate days array based on configuration
    const days = useMemo(() => {
        return Array.from({length: eventDays}, (_, i) => ({
            day: i + 1,
            label: `Day ${i + 1}`,
            date: `March ${15 + i}, 2025`
        }));
    }, [eventDays]);

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

    // Filter agenda items by day and track
    const filteredSessions = useMemo(() => {
        // For demo, distribute agenda items across days
        const sessionsPerDay = Math.ceil(agendaItems.length / eventDays);
        const dayStart = (selectedDay - 1) * sessionsPerDay;
        const dayEnd = selectedDay * sessionsPerDay;

        let filtered = agendaItems.slice(dayStart, dayEnd);

        if (selectedTrack !== "all") {
            filtered = filtered.filter(
                item => item.track === selectedTrack || item.track === "all"
            );
        }

        return filtered;
    }, [selectedDay, selectedTrack, eventDays]);

    // Group sessions by time for multi-track layout
    const sessionsByTime = useMemo(() => {
        const grouped = new Map<string, typeof filteredSessions>();

        filteredSessions.forEach(session => {
            const existing = grouped.get(session.time) || [];
            existing.push(session);
            grouped.set(session.time, existing);
        });

        return Array.from(grouped.entries()).map(([time, sessions]) => ({
            time,
            sessions
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
                {/* Download Button */}
                <Button
                    onClick={handleDownloadSchedule}
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                >
                    <Download className="w-4 h-4 mr-2"/>
                    Download Schedule
                </Button>
            </PageHeader>

            {/* Day Tabs */}
            {eventDays > 1 && (
                <section
                    className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border shadow-md">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <Tabs value={selectedDay.toString()} onValueChange={(v) => setSelectedDay(parseInt(v))}>
                            <TabsList className="grid w-full max-w-2xl mx-auto"
                                      style={{gridTemplateColumns: `repeat(${eventDays}, 1fr)`}}>
                                {days.map((day) => (
                                    <TabsTrigger
                                        key={day.day}
                                        value={day.day.toString()}
                                        className="data-[state=active]:bg-gradient-hero data-[state=active]:text-white"
                                    >
                                        <div className="flex flex-col items-center py-2">
                                            <span className="font-bold text-lg">{day.label}</span>
                                            <span className="text-xs opacity-80">{day.date}</span>
                                        </div>
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </Tabs>
                    </div>
                </section>
            )}

            {/* Track Filters */}
            <section className={cn(
                "sticky z-30 bg-background/90 backdrop-blur-sm border-b border-border",
                eventDays > 1 ? "top-32" : "top-16"
            )}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-wrap justify-center gap-3">
                        {availableTracks.map((track, idx) => (
                            <button
                                key={track.id}
                                onClick={() => setSelectedTrack(track.id)}
                                className={cn(
                                    "px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border-2 backdrop-blur-sm hover:-translate-y-1",
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
                    <div className="text-center mt-4 text-sm text-muted-foreground">
                        Showing {filteredSessions.length} sessions
                        {selectedTrack !== "all" && ` in ${availableTracks.find(t => t.id === selectedTrack)?.label}`}
                    </div>
                </div>
            </section>

            {/* Schedule Content */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {eventTracks === 1 ? (
                        /* Single Track Layout - Timeline View */
                        <div className="max-w-4xl mx-auto">
                            <div className="relative">
                                {/* Vertical Timeline Line */}
                                <div
                                    className="hidden md:block absolute left-16 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary rounded-full shadow-glow"/>

                                <div className="space-y-6">
                                    {filteredSessions.map((session, index) => {
                                        const Icon = session.icon;
                                        const style = getSessionStyle(session.type);

                                        return (
                                            <div
                                                key={index}
                                                className="relative animate-fade-in-up group"
                                                style={{animationDelay: `${index * 80}ms`}}
                                            >
                                                <div className="flex gap-6 items-start">
                                                    {/* Time Badge */}
                                                    <div className="flex-shrink-0 relative z-10">
                                                        <div className={cn(
                                                            "w-32 rounded-2xl flex flex-col items-center justify-center border-4 border-background shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 p-4",
                                                            style.badge
                                                        )}>
                                                            <Icon className="w-6 h-6 mb-1"/>
                                                            <span className="text-sm font-bold">{session.time}</span>
                                                            <span
                                                                className="text-xs opacity-90">{session.duration}</span>
                                                        </div>
                                                    </div>

                                                    {/* Session Card */}
                                                    <div className={cn(
                                                        "flex-1 glass-card rounded-3xl p-6 border-2 transition-all duration-500 cursor-pointer",
                                                        style.border,
                                                        style.bg,
                                                        style.glow,
                                                        "hover:scale-[1.02] hover:-translate-y-1"
                                                    )}>
                                                        {/* Shine effect */}
                                                        <div
                                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none rounded-3xl"/>

                                                        <div className="relative z-10">
                                                            <div
                                                                className="flex items-start justify-between gap-4 mb-3">
                                                                <div className="flex-1">
                                                                    <Badge className={cn("mb-2", style.badge)}>
                                                                        {session.type}
                                                                    </Badge>
                                                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                                                                        {session.title}
                                                                        <ChevronRight
                                                                            className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"/>
                                                                    </h3>
                                                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                                                        {session.description}
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            {/* Metadata */}
                                                            <div
                                                                className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-4">
                                                                {session.speaker && (
                                                                    <div
                                                                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/30">
                                                                        <User className="w-4 h-4"/>
                                                                        <span
                                                                            className="font-medium">{session.speaker}</span>
                                                                    </div>
                                                                )}
                                                                <div
                                                                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/30">
                                                                    <MapPin className="w-4 h-4"/>
                                                                    <span>{session.location}</span>
                                                                </div>
                                                                <div
                                                                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/30">
                                                                    <Clock className="w-4 h-4"/>
                                                                    <span>{session.duration}</span>
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
                        /* Multi-Track Layout - Grid View */
                        <div className="space-y-8">
                            {sessionsByTime.map((timeSlot, idx) => (
                                <div
                                    key={timeSlot.time}
                                    className="animate-fade-in-up"
                                    style={{animationDelay: `${idx * 100}ms`}}
                                >
                                    {/* Time Header */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <div
                                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-hero text-white shadow-lg">
                                            <Clock className="w-5 h-5"/>
                                            <span className="font-bold text-lg">{timeSlot.time}</span>
                                        </div>
                                        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"/>
                                    </div>

                                    {/* Sessions Grid */}
                                    <div
                                        className="grid gap-6"
                                        style={{gridTemplateColumns: `repeat(${Math.min(timeSlot.sessions.length, eventTracks)}, 1fr)`}}
                                    >
                                        {timeSlot.sessions.slice(0, eventTracks).map((session, sessionIdx) => {
                                            const Icon = session.icon;
                                            const style = getSessionStyle(session.type);

                                            return (
                                                <div
                                                    key={sessionIdx}
                                                    className={cn(
                                                        "glass-card rounded-3xl p-6 border-2 transition-all duration-500 cursor-pointer group",
                                                        style.border,
                                                        style.bg,
                                                        style.glow,
                                                        "hover:scale-[1.03] hover:-translate-y-2"
                                                    )}
                                                >
                                                    {/* Shine effect */}
                                                    <div
                                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none rounded-3xl"/>

                                                    <div className="relative z-10">
                                                        {/* Icon */}
                                                        <div className={cn(
                                                            "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6",
                                                            style.badge
                                                        )}>
                                                            <Icon className="w-6 h-6"/>
                                                        </div>

                                                        {/* Badge */}
                                                        <Badge className={cn("mb-3", style.badge)}>
                                                            {session.type}
                                                        </Badge>

                                                        {/* Title */}
                                                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                                            {session.title}
                                                        </h3>

                                                        {/* Description */}
                                                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                                                            {session.description}
                                                        </p>

                                                        {/* Metadata */}
                                                        <div className="space-y-2 text-xs text-muted-foreground">
                                                            {session.speaker && (
                                                                <div className="flex items-center gap-2">
                                                                    <User className="w-3.5 h-3.5"/>
                                                                    <span
                                                                        className="font-medium truncate">{session.speaker}</span>
                                                                </div>
                                                            )}
                                                            <div className="flex items-center gap-2">
                                                                <MapPin className="w-3.5 h-3.5"/>
                                                                <span className="truncate">{session.location}</span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <Clock className="w-3.5 h-3.5"/>
                                                                <span>{session.duration}</span>
                                                            </div>
                                                        </div>
                                                    </div>
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
                        <div className="text-center py-16">
                            <div
                                className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                                <Calendar className="w-10 h-10 text-muted-foreground"/>
                            </div>
                            <h3 className="text-xl font-bold mb-2">No sessions found</h3>
                            <p className="text-muted-foreground mb-6">
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
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
                <div className="max-w-4xl mx-auto text-center">
                    <div
                        className="glass-card rounded-3xl p-8 sm:p-12 border-2 border-primary/20 hover:border-primary/30 transition-all duration-500 animate-float">
                        <Zap className="w-16 h-16 mx-auto mb-6 text-primary animate-pulse"/>
                        <h2 className="text-3xl font-bold mb-4">Don't Miss a Single Session!</h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Register now to get full access to all {filteredSessions.length}+ sessions
                            across {eventDays} day{eventDays > 1 ? 's' : ''}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
    );
};

export default AgendaPage;
