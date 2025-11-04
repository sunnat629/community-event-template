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
    X
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

// Import agenda data from centralized content
import {agendaItems, tracks} from "@/content";

const getTypeStyles = (type: string) => {
  switch (type) {
      case "keynote":
          return {
              badge: "bg-gradient-hero text-white shadow-glow",
              card: "border-primary/30 hover:border-primary/50",
              glow: "group-hover:shadow-[0_0_30px_rgba(2,86,155,0.3)]"
          };
      case "session":
          return {
              badge: "bg-secondary/20 text-secondary border-2 border-secondary/30",
              card: "border-secondary/20 hover:border-secondary/40",
              glow: "group-hover:shadow-[0_0_30px_rgba(19,185,253,0.2)]"
          };
      case "workshop":
          return {
              badge: "bg-accent/20 text-accent border-2 border-accent/30",
              card: "border-accent/20 hover:border-accent/40",
              glow: "group-hover:shadow-[0_0_30px_rgba(19,185,253,0.25)]"
          };
      case "panel":
          return {
              badge: "bg-purple-500/20 text-purple-600 border-2 border-purple-500/30",
              card: "border-purple-500/20 hover:border-purple-500/40",
              glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
          };
      case "break":
          return {
              badge: "bg-muted/50 text-muted-foreground border-2 border-border",
              card: "border-border hover:border-border",
              glow: ""
          };
      case "closing":
          return {
              badge: "bg-gradient-accent text-white shadow-md",
              card: "border-primary/30 hover:border-primary/50",
              glow: "group-hover:shadow-[0_0_30px_rgba(2,86,155,0.3)]"
          };
      default:
          return {
              badge: "bg-muted text-muted-foreground",
              card: "border-border",
              glow: ""
          };
  }
};

export const AgendaSection = () => {
    const [selectedTrack, setSelectedTrack] = useState("all");
    const [selectedItem, setSelectedItem] = useState<typeof agendaItems[0] | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const filteredItems = agendaItems.filter(
        item => selectedTrack === "all" || item.track === selectedTrack || item.track === "all"
    );

    // Function to download agenda as ICS file
    const downloadAgenda = () => {
        // Create ICS content
        const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Flutter Guild Connect//Event Agenda//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:Flutter Guild Connect Event
X-WR-TIMEZONE:Asia/Dhaka
X-WR-CALDESC:Flutter Guild Connect Event Schedule
${agendaItems.map(item => {
            // For demo, using a sample date (you would replace with actual event date)
            const eventDate = "20250315"; // YYYYMMDD format
            const startTime = item.time.replace(/[: ]/g, '').replace('AM', '').replace('PM', '');
            const endTime = item.endTime.replace(/[: ]/g, '').replace('AM', '').replace('PM', '');

            return `BEGIN:VEVENT
UID:${item.title.replace(/\s+/g, '-').toLowerCase()}@flutterguildconnect.com
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

        // Create blob and download
        const blob = new Blob([icsContent], {type: 'text/calendar'});
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'flutter-guild-connect-agenda.ics';
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

    return (
    <section id="agenda" className="section-padding bg-gradient-subtle relative overflow-hidden">
        {/* Enhanced background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float"/>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
             style={{animationDelay: "1s"}}/>
        <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl"/>
      
      <div className="section-container relative z-10">
          {/* Section header with enhanced styling */}
          <div className="text-center mb-12 animate-fade-in-up">
              <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Calendar className="w-4 h-4 text-primary"/>
                  <span className="text-sm font-semibold text-primary">Full Day Event</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-hero">
                  Event Agenda
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
                  A carefully curated day of learning, building, and connecting with the Flutter community
          </p>

            {/* Download Agenda Button */}
            <Button
                onClick={downloadAgenda}
                className="bg-gradient-hero text-white hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
                size="lg"
            >
                <Download className="w-4 h-4 mr-2"/>
                Download Full Agenda
            </Button>
        </div>

          {/* Track filter tabs with improved design */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fade-in-up"
               style={{animationDelay: "100ms"}}>
              {tracks.map((track) => (
                  <button
                      key={track.id}
                      onClick={() => setSelectedTrack(track.id)}
                      className={`
                px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300
                border-2 backdrop-blur-sm
                ${selectedTrack === track.id
                  ? 'bg-gradient-hero text-white border-primary shadow-glow scale-105'
                  : 'bg-card/60 text-muted-foreground border-border hover:border-primary/30 hover:bg-card hover:text-foreground hover:scale-105'
              }
              `}
            >
                {track.label}
            </button>
          ))}
        </div>

          {/* Enhanced timeline with better visual hierarchy */}
          <div className="max-w-6xl mx-auto">
          <div className="relative">
              {/* Enhanced vertical timeline line with gradient */}
              <div
                  className="hidden md:block absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary rounded-full shadow-[0_0_10px_rgba(2,86,155,0.3)]"/>

              <div className="space-y-8">
                  {filteredItems.map((item, index) => {
                const Icon = item.icon;
                  const styles = getTypeStyles(item.type);

                  return (
                  <div 
                    key={index}
                    className="relative animate-fade-in-up group"
                    style={{animationDelay: `${index * 80}ms`}}
                  >
                      {/* Desktop layout */}
                      <div className="hidden md:flex gap-8 items-start">
                          {/* Time badge - enhanced design */}
                          <div className="flex-shrink-0 relative z-10">
                              <div className={`
                          w-24 h-24 rounded-2xl flex flex-col items-center justify-center
                          border-4 border-background shadow-xl
                          transition-all duration-500 group-hover:scale-110 group-hover:rotate-3
                          ${styles.badge}
                        `}>
                            <Icon className="w-8 h-8 mb-1"/>
                            <span className="text-xs font-bold opacity-80">{item.duration}</span>
                        </div>
                      </div>

                        {/* Content card - enhanced with more details */}
                        <div
                            onClick={() => openItemDetails(item)}
                            className={`
                          flex-1 glass-card rounded-3xl p-8
                          border-2 transition-all duration-500
                          ${styles.card} ${styles.glow}
                          hover:scale-[1.02] hover:-translate-y-1
                          cursor-pointer
                        `}>
                            <div className="flex items-start justify-between gap-6 mb-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <ChevronRight
                                            className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"/>
                                    </div>
                                    <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                                        {item.description}
                                    </p>

                              {/* Additional metadata */}
                              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                  {item.speaker && (
                                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/30">
                                          <Users className="w-4 h-4"/>
                                          <span className="font-medium">{item.speaker}</span>
                                </div>
                              )}
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/30">
                                    <MapPin className="w-4 h-4"/>
                                    <span>{item.location}</span>
                                </div>
                            </div>
                          </div>

                            {/* Time display - improved visibility */}
                            <div className="flex flex-col items-end flex-shrink-0">
                                <div
                                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-hero text-white shadow-md">
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

                      {/* Mobile layout - improved */}
                      <div className="md:hidden">
                          <div
                              onClick={() => openItemDetails(item)}
                              className={`
                          glass-card rounded-2xl p-6 border-2 transition-all duration-300
                          ${styles.card}
                          hover:scale-[1.01] cursor-pointer
                        `}>
                              {/* Header with icon and time */}
                              <div className="flex items-start gap-4 mb-4">
                          <div className={`
                            w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0
                            ${styles.badge}
                          `}>
                              <Icon className="w-7 h-7"/>
                          </div>
                            <div className="flex-1 min-w-0">
                                <div
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-hero text-white inline-flex mb-2 shadow-md">
                                    <Clock className="w-4 h-4"/>
                                    <span className="font-bold text-sm">{item.time} - {item.endTime}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            </div>
                        </div>

                          {/* Description */}
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                              {item.description}
                          </p>

                          {/* Metadata */}
                          <div className="flex flex-wrap gap-2 text-sm">
                              {item.speaker && (
                                  <div
                                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted/40 text-muted-foreground">
                                      <Users className="w-3.5 h-3.5"/>
                                      <span>{item.speaker}</span>
                                  </div>
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

            {/* Call to action footer */}
            <div className="mt-16 text-center animate-fade-in-up" style={{animationDelay: "600ms"}}>
                <div
                    className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-3xl bg-gradient-hero text-white shadow-glow-lg">
                    <div className="flex-1 text-left">
                        <h3 className="text-2xl font-bold mb-2">Don't Miss Out!</h3>
                        <p className="text-white/90">Register now to secure your spot at this incredible event</p>
                    </div>
                    <button
                        className="px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl whitespace-nowrap">
                        Register Now
                    </button>
            </div>
          </div>
        </div>
      </div>

        {/* Agenda Item Detail Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                {selectedItem && (
                    <>
                        <DialogHeader>
                            <div className="flex items-start gap-4 mb-4">
                                {(() => {
                                    const Icon = selectedItem.icon;
                                    const styles = getTypeStyles(selectedItem.type);
                                    return (
                                        <div
                                            className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${styles.badge}`}>
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
                            {/* Description */}
                            <div>
                                <h4 className="font-bold text-lg mb-2 text-foreground">About This Session</h4>
                                <p className="text-muted-foreground leading-relaxed">{selectedItem.description}</p>
                            </div>

                            {/* Details Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {selectedItem.speaker && (
                                    <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/30">
                                        <Users className="w-5 h-5 text-primary mt-0.5"/>
                                        <div>
                                            <div className="font-semibold text-sm text-muted-foreground mb-1">Speaker
                                            </div>
                                            <div className="font-bold text-foreground">{selectedItem.speaker}</div>
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/30">
                                    <MapPin className="w-5 h-5 text-primary mt-0.5"/>
                                    <div>
                                        <div className="font-semibold text-sm text-muted-foreground mb-1">Location</div>
                                        <div className="font-bold text-foreground">{selectedItem.location}</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/30">
                                    <Clock className="w-5 h-5 text-primary mt-0.5"/>
                                    <div>
                                        <div className="font-semibold text-sm text-muted-foreground mb-1">Duration</div>
                                        <div className="font-bold text-foreground">{selectedItem.duration}</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/30">
                                    <Calendar className="w-5 h-5 text-primary mt-0.5"/>
                                    <div>
                                        <div className="font-semibold text-sm text-muted-foreground mb-1">Session Type
                                        </div>
                                        <div className="font-bold text-foreground capitalize">{selectedItem.type}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                <Button
                                    className="flex-1 bg-gradient-hero text-white hover:shadow-glow"
                                    size="lg"
                                >
                                    <Bell className="w-4 h-4 mr-2"/>
                                    Set Reminder
                                </Button>
                                <Button
                                    variant="outline"
                                    className="flex-1 border-2"
                                    size="lg"
                                >
                                    <Share2 className="w-4 h-4 mr-2"/>
                                    Share
                                </Button>
                            </div>

                            {/* Tips Section (conditional based on session type) */}
                            {selectedItem.type === 'workshop' && (
                                <div className="p-4 rounded-xl bg-accent/10 border-2 border-accent/20">
                                    <h4 className="font-bold text-accent mb-2 flex items-center gap-2">
                                        <Zap className="w-4 h-4"/>
                                        Workshop Tips
                                    </h4>
                                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                                        <li>Bring your laptop with Flutter SDK installed</li>
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
    </section>
  );
};
