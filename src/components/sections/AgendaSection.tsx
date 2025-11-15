import {
    Clock,
    Coffee,
    Code,
    Users,
    Presentation,
    Award,
    Zap,
    MapPin,
    Calendar,
    ChevronRight,
    Download,
    Bell,
    Share2,
    X,
    User,
    Mail,
    Linkedin,
    Twitter
} from "lucide-react";
import {useState} from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {SectionWrapper} from "@/components/ui/SectionWrapper";

// Import agenda and speakers data from centralized content
import {agendaItems, tracks} from "@/content";
import {featuredSpeakers, otherSpeakers} from "@/content";

// Speaker details interface (extended from content)
interface SpeakerDetails {
    name: string;
    title: string;
    topic: string;
    bio: string;
    image: string;
    social?: {
        twitter?: string;
        linkedin?: string;
        email?: string;
    };
}

// Build speaker database from imported speakers
const buildSpeakerDatabase = (): Record<string, SpeakerDetails> => {
    const database: Record<string, SpeakerDetails> = {
        "TBA": {
            name: "To Be Announced",
            title: "Stay tuned for speaker announcement",
            topic: "Exciting topics coming soon!",
            bio: "We're currently finalizing our amazing speaker lineup. Check back soon for updates!",
            image: "👤",
            social: {}
        },
        "Expert Panel": {
            name: "Expert Panel",
            title: "Industry Leaders & Community Experts",
            topic: "Panel Discussion on Career Growth",
            bio: "Join our panel of experienced developers and industry leaders as they share insights on building a successful career in technology. The panel includes professionals from leading tech companies and active community contributors.",
            image: "👥",
            social: {}
        }
    };

    // Add all featured speakers with their actual data
    featuredSpeakers.forEach(speaker => {
        database[speaker.name] = {
            name: speaker.name,
            title: speaker.title,
            topic: speaker.topic,
            bio: speaker.bio || `${speaker.name} is an experienced developer and thought leader in the community. As a ${speaker.title}, they bring valuable insights and practical knowledge to help developers grow their skills.`,
            image: speaker.image,
            social: speaker.social || {}
        };
    });

    // Add all other speakers with their actual data
    otherSpeakers.forEach(speaker => {
        database[speaker.name] = {
            name: speaker.name,
            title: speaker.title,
            topic: speaker.topic,
            bio: speaker.bio || `${speaker.name} is passionate about technology and specializes in ${speaker.topic}. They actively contribute to the tech community and share their expertise through talks and workshops.`,
            image: speaker.image,
            social: speaker.social || {}
        };
    });

    return database;
};

const speakerDatabase = buildSpeakerDatabase();

const getTypeStyles = (type: string) => {
    switch (type) {
        case "keynote":
            return {
                badge: "bg-gradient-to-br from-primary to-primary-light text-white shadow-xl",
                card: "border-primary/30 hover:border-primary/50 bg-primary/5",
                glow: "group-hover:shadow-[0_0_30px_rgba(46,184,138,0.3)]"
            };
        case "session":
            return {
                badge: "bg-gradient-to-br from-secondary to-blue-400 text-white shadow-xl",
                card: "border-secondary/30 hover:border-secondary/50 bg-secondary/5",
                glow: "group-hover:shadow-[0_0_30px_rgba(163,211,249,0.2)]"
            };
        case "workshop":
            return {
                badge: "bg-gradient-to-br from-emerald-500 to-teal-400 text-white shadow-xl",
                card: "border-emerald-500/30 hover:border-emerald-500/50 bg-emerald-50",
                glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]"
            };
        case "panel":
            return {
                badge: "bg-gradient-to-br from-purple-500 to-purple-400 text-white shadow-xl",
                card: "border-purple-500/30 hover:border-purple-500/50 bg-purple-50",
                glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
            };
        case "break":
            return {
                badge: "bg-gradient-to-br from-slate-400 to-slate-300 text-white shadow-lg",
                card: "border-slate-300 hover:border-slate-400 bg-slate-50",
                glow: ""
            };
        case "closing":
            return {
                badge: "bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow-xl",
                card: "border-orange-500/30 hover:border-orange-500/50 bg-orange-50",
                glow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]"
            };
        default:
            return {
                badge: "bg-gradient-to-br from-gray-400 to-gray-300 text-white shadow-lg",
                card: "border-border bg-card",
                glow: ""
            };
    }
};

export const AgendaSection = () => {
    const [selectedTrack, setSelectedTrack] = useState("all");
    const [selectedItem, setSelectedItem] = useState<typeof agendaItems[0] | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedSpeaker, setSelectedSpeaker] = useState<SpeakerDetails | null>(null);
    const [isSpeakerDialogOpen, setIsSpeakerDialogOpen] = useState(false);

    const filteredItems = agendaItems.filter(
        item => selectedTrack === "all" || item.track === selectedTrack || item.track === "all"
    );

    // Function to download agenda as ICS file
    const downloadAgenda = () => {
        const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//TechCommunity Event//Event Agenda//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:TechCommunity Event
X-WR-TIMEZONE:UTC
X-WR-CALDESC:TechCommunity Event Schedule
${agendaItems.map(item => {
            const eventDate = "20260315";
            const startTime = item.time.replace(/[: ]/g, '').replace('AM', '').replace('PM', '');
            const endTime = item.endTime.replace(/[: ]/g, '').replace('AM', '').replace('PM', '');

            return `BEGIN:VEVENT
UID:${item.title.replace(/\s+/g, '-').toLowerCase()}@techcommunity-event.com
DTSTAMP:${eventDate}T${startTime.padStart(6, '0')}00Z
DTSTART:${eventDate}T${startTime.padStart(6, '0')}00Z
DTEND:${eventDate}T${endTime.padStart(6, '0')}00Z
SUMMARY:${item.title}
DESCRIPTION:${item.description}
LOCATION:${item.location}
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT`;
        }).join('\n')}
END:VCALENDAR`;

        const blob = new Blob([icsContent], {type: 'text/calendar'});
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'techcommunity-event-agenda.ics';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    };

    // Function to open agenda item details
    const openItemDetails = (item: typeof agendaItems[0]) => {
        setSelectedItem(item);
        setIsDialogOpen(true);
    };

    // Function to open speaker details
    const openSpeakerDetails = (speakerName: string, e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent opening agenda item dialog
        const speaker = speakerDatabase[speakerName] || speakerDatabase["TBA"];
        setSelectedSpeaker(speaker);
        setIsSpeakerDialogOpen(true);
    };

    return (
        <SectionWrapper theme="gradient-soft">
            {/* Enhanced background decorations with animation */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float"/>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"
                 style={{animationDelay: "1s"}}/>
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl animate-pulse"
                style={{animationDuration: "4s"}}/>

            <div className="section-container relative z-10">
                {/* Section header with enhanced styling */}
                <div className="text-center mb-12 animate-fade-in-up">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 hover:scale-105 transition-transform duration-300">
                        <Calendar className="w-4 h-4 text-primary animate-pulse"/>
                        <span className="text-sm font-semibold text-primary">Full Day Event</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-hero">
                        Event Agenda
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
                        A carefully curated day of learning, building, and connecting with the technology community
                    </p>

                    {/* Download Agenda Button with enhanced animation */}
                    <Button
                        onClick={downloadAgenda}
                        className="bg-gradient-hero text-white hover:shadow-glow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                        size="lg"
                    >
                        <Download className="w-4 h-4 mr-2 animate-bounce"/>
                        Download Full Agenda
                    </Button>
                </div>

                {/* Track filter tabs with improved animation */}
                <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fade-in-up"
                     style={{animationDelay: "100ms"}}>
                    {tracks.map((track, idx) => (
                        <button
                            key={track.id}
                            onClick={() => setSelectedTrack(track.id)}
                            className={`
                px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300
                border-2 backdrop-blur-sm hover:-translate-y-1
                ${selectedTrack === track.id
                                ? 'bg-gradient-hero text-white border-primary shadow-glow scale-105'
                                : 'bg-card/60 text-muted-foreground border-border hover:border-primary/30 hover:bg-card hover:text-foreground hover:scale-105'
                            }
              `}
                            style={{animationDelay: `${idx * 50}ms`}}
                        >
                            {track.label}
                        </button>
                    ))}
                </div>

                {/* Enhanced timeline */}
                <div className="max-w-6xl mx-auto">
                    <div className="relative">
                        {/* Animated vertical timeline line */}
                        <div
                            className="hidden md:block absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary rounded-full shadow-[0_0_10px_rgba(46,184,138,0.3)] overflow-hidden">
                            <div
                                className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent animate-pulse"
                                style={{animationDuration: "3s"}}/>
                        </div>

                        <div className="space-y-8">
                            {filteredItems.map((item, index) => {
                                const Icon = item.icon;
                                const styles = getTypeStyles(item.type);

                                return (
                                    <div
                                        key={index}
                                        className="relative animate-fade-in-up group"
                                        style={{
                                            animationDelay: `${index * 80}ms`,
                                            animationFillMode: 'both'
                                        }}
                                    >
                                        {/* Desktop layout with enhanced animations */}
                                        <div className="hidden md:flex gap-8 items-start">
                                            {/* Enhanced time badge */}
                                            <div className="flex-shrink-0 relative z-10">
                                                <div className={`
                          w-24 h-24 rounded-2xl flex flex-col items-center justify-center
                          border-4 border-background shadow-xl
                          transition-all duration-500 
                          group-hover:scale-125 group-hover:rotate-6
                          ${styles.badge}
                        `}>
                                                    <Icon
                                                        className="w-8 h-8 mb-1 group-hover:scale-110 transition-transform duration-300"/>
                                                    <span
                                                        className="text-xs font-bold opacity-90">{item.duration}</span>
                                                </div>
                                                {/* Pulse ring effect on hover */}
                                                <div
                                                    className="absolute inset-0 rounded-2xl bg-current opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-700 pointer-events-none"/>
                                            </div>

                                            {/* Enhanced content card */}
                                            <div
                                                onClick={() => openItemDetails(item)}
                                                className={`
                          flex-1 glass-card rounded-3xl p-8
                          border-2 transition-all duration-500
                          ${styles.card} ${styles.glow}
                          hover:scale-[1.03] hover:-translate-y-2
                          cursor-pointer relative overflow-hidden
                        `}>
                                                {/* Shine effect on hover */}
                                                <div
                                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"/>

                                                <div
                                                    className="flex items-start justify-between gap-6 mb-4 relative z-10">
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-3 mb-2">
                                                            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                                                {item.title}
                                                            </h3>
                                                            <ChevronRight
                                                                className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2"/>
                                                        </div>
                                                        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                                                            {item.description}
                                                        </p>

                                                        {/* Enhanced metadata with speaker clickability */}
                                                        <div
                                                            className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                                            {item.speaker && (
                                                                <button
                                                                    onClick={(e) => openSpeakerDetails(item.speaker!, e)}
                                                                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/30 hover:bg-primary/20 hover:text-primary hover:scale-105 transition-all duration-300 border border-transparent hover:border-primary/30"
                                                                >
                                                                    <User className="w-4 h-4"/>
                                                                    <span className="font-medium">{item.speaker}</span>
                                                                    <ChevronRight className="w-3 h-3"/>
                                                                </button>
                                                            )}
                                                            <div
                                                                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/30 hover:scale-105 transition-transform duration-300">
                                                                <MapPin className="w-4 h-4"/>
                                                                <span>{item.location}</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Enhanced time display */}
                                                    <div className="flex flex-col items-end flex-shrink-0">
                                                        <div
                                                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-hero text-white shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                                                            <Clock className="w-5 h-5"/>
                                                            <div className="text-right">
                                                                <div className="font-bold text-lg">{item.time}</div>
                                                                <div className="text-xs opacity-90">{item.endTime}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Enhanced mobile layout */}
                                        <div className="md:hidden">
                                            <div
                                                onClick={() => openItemDetails(item)}
                                                className={`
                          glass-card rounded-2xl p-6 border-2 transition-all duration-300
                          ${styles.card}
                          hover:scale-[1.02] cursor-pointer
                        `}>
                                                <div className="flex items-start gap-4 mb-4">
                                                    {(() => {
                                                        const Icon = item.icon;
                                                        const styles = getTypeStyles(item.type);
                                                        return (
                                                            <div
                                                                className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${styles.badge} animate-scale-in`}>
                                                                <Icon className="w-7 h-7"/>
                                                            </div>
                                                        );
                                                    })()}
                                                    <div className="flex-1 min-w-0">
                                                        <div
                                                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-hero text-white inline-flex mb-2 shadow-md">
                                                            <Clock className="w-4 h-4"/>
                                                            <span
                                                                className="font-bold text-sm">{item.time} - {item.endTime}</span>
                                                        </div>
                                                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                                    </div>
                                                </div>

                                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                                    {item.description}
                                                </p>

                                                <div className="flex flex-wrap gap-2 text-sm">
                                                    {item.speaker && (
                                                        <button
                                                            onClick={(e) => openSpeakerDetails(item.speaker!, e)}
                                                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted/40 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors duration-300"
                                                        >
                                                            <User className="w-3.5 h-3.5"/>
                                                            <span>{item.speaker}</span>
                                                        </button>
                                                    )}
                                                    <div
                                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted/40 text-muted-foreground">
                                                        <MapPin className="w-3.5 h-3.5"/>
                                                        <span>{item.location}</span>
                                                    </div>
                                                    <div
                                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted/40 text-muted-foreground">
                                                        <Clock className="w-3.5 h-3.5"/>
                                                        <span>{item.duration}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Enhanced CTA footer */}
                    <div className="mt-16 text-center animate-fade-in-up" style={{animationDelay: "600ms"}}>
                        <div
                            className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-3xl bg-gradient-hero text-white shadow-glow-lg hover:shadow-glow hover:scale-105 transition-all duration-500">
                            <div className="flex-1 text-left">
                                <h3 className="text-2xl font-bold mb-2">Don't Miss Out!</h3>
                                <p className="text-white/90">Register now to secure your spot at this incredible
                                    event</p>
                            </div>
                            <button
                                className="px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-xl whitespace-nowrap">
                                Register Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Agenda Item Detail Dialog */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto animate-scale-in">
                    {selectedItem && (
                        <>
                            <DialogHeader>
                                <div className="flex items-start gap-4 mb-4">
                                    {(() => {
                                        const Icon = selectedItem.icon;
                                        const styles = getTypeStyles(selectedItem.type);
                                        return (
                                            <div
                                                className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${styles.badge} animate-scale-in`}>
                                                <Icon className="w-8 h-8"/>
                                            </div>
                                        );
                                    })()}
                                    <div className="flex-1">
                                        <DialogTitle className="text-2xl mb-2">{selectedItem.title}</DialogTitle>
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            <Clock className="w-4 h-4"/>
                                            <span
                                                className="font-semibold">{selectedItem.time} - {selectedItem.endTime}</span>
                                            <span className="text-sm">({selectedItem.duration})</span>
                                        </div>
                                    </div>
                                </div>
                            </DialogHeader>

                            <DialogDescription className="text-base text-foreground space-y-6">
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-foreground">About This Session</h4>
                                    <p className="text-muted-foreground leading-relaxed">{selectedItem.description}</p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {selectedItem.speaker && (
                                        <button
                                            onClick={() => {
                                                setIsDialogOpen(false);
                                                setTimeout(() => {
                                                    const mockEvent = {
                                                        stopPropagation: () => {
                                                        }
                                                    } as React.MouseEvent<HTMLButtonElement>;
                                                    openSpeakerDetails(selectedItem.speaker!, mockEvent);
                                                }, 300);
                                            }}
                                            className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 hover:bg-primary/10 hover:scale-105 transition-all duration-300 text-left border border-transparent hover:border-primary/30"
                                        >
                                            <User className="w-5 h-5 text-primary mt-0.5"/>
                                            <div>
                                                <div
                                                    className="font-semibold text-sm text-muted-foreground mb-1">Speaker
                                                </div>
                                                <div className="font-bold text-foreground flex items-center gap-1">
                                                    {selectedItem.speaker}
                                                    <ChevronRight className="w-4 h-4"/>
                                                </div>
                                            </div>
                                        </button>
                                    )}

                                    <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/30">
                                        <MapPin className="w-5 h-5 text-primary mt-0.5"/>
                                        <div>
                                            <div className="font-semibold text-sm text-muted-foreground mb-1">Location
                                            </div>
                                            <div className="font-bold text-foreground">{selectedItem.location}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/30">
                                        <Clock className="w-5 h-5 text-primary mt-0.5"/>
                                        <div>
                                            <div className="font-semibold text-sm text-muted-foreground mb-1">Duration
                                            </div>
                                            <div className="font-bold text-foreground">{selectedItem.duration}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/30">
                                        <Calendar className="w-5 h-5 text-primary mt-0.5"/>
                                        <div>
                                            <div className="font-semibold text-sm text-muted-foreground mb-1">Session
                                                Type
                                            </div>
                                            <div
                                                className="font-bold text-foreground capitalize">{selectedItem.type}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                    <Button className="flex-1 bg-gradient-hero text-white hover:shadow-glow" size="lg">
                                        <Bell className="w-4 h-4 mr-2"/>
                                        Set Reminder
                                    </Button>
                                    <Button variant="outline" className="flex-1 border-2" size="lg">
                                        <Share2 className="w-4 h-4 mr-2"/>
                                        Share
                                    </Button>
                                </div>

                                {selectedItem.type === 'workshop' && (
                                    <div
                                        className="p-4 rounded-xl bg-accent/10 border-2 border-accent/20 animate-fade-in">
                                        <h4 className="font-bold text-accent mb-2 flex items-center gap-2">
                                            <Zap className="w-4 h-4"/>
                                            Workshop Tips
                                        </h4>
                                        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                                            <li>Bring your laptop with development environment set up</li>
                                            <li>Ensure you have a stable internet connection</li>
                                            <li>Download required packages beforehand</li>
                                            <li>Arrive 10 minutes early for setup</li>
                                        </ul>
                                    </div>
                                )}
                            </DialogDescription>
                        </>
                    )}
                </DialogContent>
            </Dialog>

            {/* Speaker Details Dialog - New floating window */}
            <Dialog open={isSpeakerDialogOpen} onOpenChange={setIsSpeakerDialogOpen}>
                <DialogContent className="max-w-lg animate-scale-in max-h-[90vh] overflow-y-auto">
                    {selectedSpeaker && (
                        <>
                            <DialogHeader>
                                <div className="flex flex-col items-center text-center mb-6">
                                    {/* Speaker avatar with glow effect */}
                                    <div className="relative mb-6">
                                        {selectedSpeaker.image.startsWith('http') ? (
                                            <>
                                                <div
                                                    className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary shadow-2xl animate-float">
                                                    <img
                                                        src={selectedSpeaker.image}
                                                        alt={selectedSpeaker.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div
                                                    className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl animate-pulse"/>
                                            </>
                                        ) : (
                                            <>
                                                <div
                                                    className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-6xl shadow-2xl animate-float">
                                                    {selectedSpeaker.image}
                                                </div>
                                                <div
                                                    className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl animate-pulse"/>
                                            </>
                                        )}
                                    </div>

                                    <DialogTitle className="text-3xl mb-2">{selectedSpeaker.name}</DialogTitle>
                                    <p className="text-primary font-semibold text-lg">{selectedSpeaker.title}</p>
                                    {/* Show company if speaker is from the main speakers list */}
                                    {featuredSpeakers.find(s => s.name === selectedSpeaker.name)?.company && (
                                        <p className="text-muted-foreground text-sm mt-1">
                                            @ {featuredSpeakers.find(s => s.name === selectedSpeaker.name)?.company}
                                        </p>
                                    )}
                                </div>
                            </DialogHeader>

                            <DialogDescription className="text-base text-foreground space-y-6">
                                {/* Speaking topic */}
                                <div className="p-4 rounded-xl bg-gradient-subtle border-2 border-primary/20">
                                    <p className="text-sm text-muted-foreground mb-1">Speaking on:</p>
                                    <p className="font-bold text-lg text-foreground">{selectedSpeaker.topic}</p>
                                </div>

                                {/* Bio */}
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-foreground">About</h4>
                                    <p className="text-muted-foreground leading-relaxed">{selectedSpeaker.bio}</p>
                                </div>

                                {/* Social links */}
                                {selectedSpeaker.social && Object.keys(selectedSpeaker.social).length > 0 && (
                                    <div>
                                        <h4 className="font-bold text-lg mb-3 text-foreground">Connect</h4>
                                        <div className="flex gap-3">
                                            {selectedSpeaker.social.twitter && (
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="flex-1"
                                                    onClick={() => window.open(selectedSpeaker.social!.twitter, '_blank')}
                                                >
                                                    <Twitter className="w-4 h-4 mr-2"/>
                                                    Twitter
                                                </Button>
                                            )}
                                            {selectedSpeaker.social.linkedin && (
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="flex-1"
                                                    onClick={() => window.open(selectedSpeaker.social!.linkedin, '_blank')}
                                                >
                                                    <Linkedin className="w-4 h-4 mr-2"/>
                                                    LinkedIn
                                                </Button>
                                            )}
                                            {selectedSpeaker.social.email && (
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="flex-1"
                                                    onClick={() => window.location.href = `mailto:${selectedSpeaker.social!.email}`}
                                                >
                                                    <Mail className="w-4 h-4 mr-2"/>
                                                    Email
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Action button */}
                                <Button
                                    className="w-full bg-gradient-hero text-white hover:shadow-glow-lg hover:scale-105 transition-all duration-300"
                                    size="lg"
                                >
                                    <User className="w-4 h-4 mr-2"/>
                                    View Full Profile
                                </Button>
                            </DialogDescription>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </SectionWrapper>
    );
};