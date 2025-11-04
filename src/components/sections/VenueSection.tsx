import {
    MapPin,
    Navigation,
    Car,
    Phone,
    Mail,
    Accessibility,
    Wifi,
    Zap,
    Coffee,
    CheckCircle2,
    Building2,
    Clock
} from "lucide-react";
import {Button} from "@/components/ui/button";
import {eventDetails} from "@/content";

export const VenueSection = () => {
    const venue = eventDetails.venue;

    return (
        <section id="venue"
                 className="section-padding relative overflow-hidden bg-gradient-to-b from-background to-secondary/5">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"/>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float"
                 style={{animationDelay: "1.5s"}}/>

            <div className="section-container relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 hover:scale-105 transition-transform duration-300">
                        <MapPin className="w-4 h-4 text-primary animate-pulse"/>
                        <span className="text-sm font-semibold text-primary">Event Location</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-hero">
                        Venue & Location
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Join us at the heart of Dhaka's tech hub
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
                    {/* Left Side - Venue Details */}
                    <div className="space-y-6 animate-fade-in-up" style={{animationDelay: "200ms"}}>
                        {/* Venue Name Card */}
                        <div
                            className="glass-card rounded-3xl p-8 border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl group overflow-hidden relative">
                            {/* Shine effect */}
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"/>

                            <div className="flex items-start gap-4 relative z-10">
                                <div
                                    className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center flex-shrink-0 shadow-glow group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                    <Building2 className="w-8 h-8 text-white"/>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                                        {venue.venueDetails.name}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed mb-3">
                                        {venue.venueDetails.fullAddress}
                                    </p>
                                    <div className="flex items-center gap-2 text-sm text-primary font-medium">
                                        <MapPin className="w-4 h-4"/>
                                        <span>{venue.venueDetails.landmark}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Info Cards */}
                        <div className="grid sm:grid-cols-3 gap-4">
                            <div
                                className="glass-card p-5 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-center group">
                                <div
                                    className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <Clock className="w-6 h-6 text-primary"/>
                                </div>
                                <p className="text-xs text-muted-foreground mb-1">Duration</p>
                                <p className="font-bold text-foreground">9 AM - 6 PM</p>
                            </div>

                            <div
                                className="glass-card p-5 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-center group">
                                <div
                                    className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <MapPin className="w-6 h-6 text-secondary"/>
                                </div>
                                <p className="text-xs text-muted-foreground mb-1">Capacity</p>
                                <p className="font-bold text-foreground">{venue.capacity}</p>
                            </div>

                            <div
                                className="glass-card p-5 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-center group">
                                <div
                                    className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <CheckCircle2 className="w-6 h-6 text-green-500"/>
                                </div>
                                <p className="text-xs text-muted-foreground mb-1">Entry</p>
                                <p className="font-bold text-green-500">{venue.price}</p>
                            </div>
                        </div>

                        {/* Directions */}
                        <div
                            className="glass-card rounded-2xl p-6 border border-border hover:border-secondary/30 transition-all duration-500 hover:shadow-xl group">
                            <div className="flex items-center gap-3 mb-4">
                                <div
                                    className="w-10 h-10 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Navigation className="w-5 h-5 text-secondary"/>
                                </div>
                                <h4 className="text-lg font-bold">How to Get There</h4>
                            </div>
                            <ul className="space-y-3">
                                {venue.venueDetails.directions.map((direction, index) => (
                                    <li key={index}
                                        className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group/item">
                                        <span
                                            className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-primary/20 transition-colors duration-200">
                                            <span className="text-xs font-bold text-primary">{index + 1}</span>
                                        </span>
                                        <span className="leading-relaxed">{direction}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Parking & Accessibility */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div
                                className="glass-card rounded-2xl p-5 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
                                <div className="flex items-center gap-2 mb-3">
                                    <div
                                        className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Car className="w-4 h-4 text-blue-500"/>
                                    </div>
                                    <h5 className="font-bold text-sm">Parking</h5>
                                </div>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    {venue.venueDetails.parking}
                                </p>
                            </div>

                            <div
                                className="glass-card rounded-2xl p-5 border border-border hover:border-green-500/30 transition-all duration-300 hover:shadow-lg group">
                                <div className="flex items-center gap-2 mb-3">
                                    <div
                                        className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Accessibility className="w-4 h-4 text-green-500"/>
                                    </div>
                                    <h5 className="font-bold text-sm">Accessible</h5>
                                </div>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Wheelchair accessible with elevators and reserved seating
                                </p>
                            </div>
                        </div>

                        {/* Facilities */}
                        <div
                            className="glass-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl group">
                            <div className="flex items-center gap-3 mb-4">
                                <div
                                    className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Zap className="w-5 h-5 text-primary"/>
                                </div>
                                <h4 className="text-lg font-bold">Venue Facilities</h4>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                {venue.venueDetails.facilities.map((facility, index) => (
                                    <div key={index}
                                         className="flex items-center gap-2 text-sm hover:text-primary transition-colors duration-200 group/item">
                                        <CheckCircle2
                                            className="w-4 h-4 text-green-500 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200"/>
                                        <span className="text-muted-foreground leading-snug">{facility}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact */}
                        {(venue.venueDetails.contact.phone || venue.venueDetails.contact.email) && (
                            <div className="flex flex-wrap gap-3">
                                {venue.venueDetails.contact.phone && (
                                    <Button variant="outline" size="lg"
                                            className="flex-1 hover:scale-105 transition-all duration-300">
                                        <Phone className="w-4 h-4 mr-2"/>
                                        Call Venue
                                    </Button>
                                )}
                                {venue.venueDetails.contact.email && (
                                    <Button variant="outline" size="lg"
                                            className="flex-1 hover:scale-105 transition-all duration-300">
                                        <Mail className="w-4 h-4 mr-2"/>
                                        Email Us
                                    </Button>
                                )}
                            </div>
                        )}

                        {/* CTA Button */}
                        <Button
                            variant="premium"
                            size="lg"
                            className="w-full btn-glow text-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                            onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${venue.coordinates.lat},${venue.coordinates.lng}`, '_blank')}
                        >
                            <Navigation className="w-5 h-5 mr-2"/>
                            Get Directions on Google Maps
                        </Button>
                    </div>

                    {/* Right Side - Google Maps */}
                    <div className="animate-fade-in-up" style={{animationDelay: "400ms"}}>
                        <div className="sticky top-24">
                            <div
                                className="glass-card rounded-3xl p-4 border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl group overflow-hidden">
                                {/* Map Container */}
                                <div className="relative w-full h-[600px] rounded-2xl overflow-hidden bg-muted">
                                    <iframe
                                        src={venue.mapUrl}
                                        width="100%"
                                        height="100%"
                                        style={{border: 0}}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="w-full h-full"
                                        title="Venue Location Map"
                                    />

                                    {/* Floating badge on map */}
                                    <div
                                        className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-xl border border-primary/20 animate-float">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                                            <span
                                                className="text-sm font-bold text-foreground">{venue.venueDetails.name}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Actions Below Map */}
                                <div className="grid grid-cols-2 gap-3 mt-4">
                                    <Button
                                        variant="outline"
                                        className="hover:scale-105 transition-all duration-300"
                                        onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${venue.coordinates.lat},${venue.coordinates.lng}`, '_blank')}
                                    >
                                        <Navigation className="w-4 h-4 mr-2"/>
                                        Navigate
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="hover:scale-105 transition-all duration-300"
                                        onClick={() => {
                                            navigator.clipboard.writeText(venue.venueDetails.fullAddress);
                                        }}
                                    >
                                        <MapPin className="w-4 h-4 mr-2"/>
                                        Copy Address
                                    </Button>
                                </div>
                            </div>

                            {/* Additional Info Card Below Map */}
                            <div
                                className="glass-card rounded-2xl p-6 border border-border mt-4 bg-gradient-to-br from-primary/5 to-secondary/5">
                                <h5 className="font-bold mb-3 flex items-center gap-2">
                                    <Coffee className="w-5 h-5 text-primary"/>
                                    Nearby Amenities
                                </h5>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500"/>
                                        Restaurants & cafes within walking distance
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500"/>
                                        Hotels nearby for out-of-town attendees
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500"/>
                                        Public transport accessible (Bus, Rideshare)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500"/>
                                        ATMs and convenience stores available
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};