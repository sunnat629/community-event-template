import { Calendar, MapPin, Users, Clock, Wifi, Coffee } from "lucide-react";

export const EventDetailsSection = () => {
  return (
    <section id="event-details" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Event Details</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mark your calendars for an unforgettable day of Flutter excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Key Info Cards */}
          <div className="bg-card rounded-2xl p-8 shadow-md border border-border">
            <Calendar className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-3">Date</h3>
            <p className="text-lg text-muted-foreground">
              To be announced soon
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Stay tuned for the official date announcement
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-md border border-border">
            <MapPin className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-3">Venue</h3>
            <p className="text-lg text-muted-foreground">
              Dhaka, Bangladesh
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Exact location to be revealed soon
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-md border border-border">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-3">Target Audience</h3>
            <p className="text-lg text-muted-foreground">
              Flutter developers, mobile engineers, tech enthusiasts
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              All skill levels welcome—from beginners to experts
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-md border border-border">
            <Clock className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-3">Format</h3>
            <p className="text-lg text-muted-foreground">
              Full-day in-person event
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Keynotes, technical sessions, workshops, and networking
            </p>
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-gradient-hero rounded-2xl p-8 sm:p-12 text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">What's Included</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Wifi className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-1">High-Speed WiFi</h4>
                <p className="text-sm text-white/80">Stay connected throughout the event</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Coffee className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-1">Refreshments</h4>
                <p className="text-sm text-white/80">Coffee, tea, and snacks all day</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-1">Networking</h4>
                <p className="text-sm text-white/80">Connect with peers and industry leaders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
