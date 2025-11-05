import {Calendar, MapPin, Users, Clock, Wifi, Coffee, Sparkles, CheckCircle2, Award, Zap} from "lucide-react";
import {eventDetails} from "@/content";
import {SectionWrapper} from "@/components/ui/SectionWrapper";

export const EventDetailsSection = () => {
    const details = eventDetails;

    // Image URLs for card backgrounds
    const cardImages = {
        date: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=600&fit=crop&q=80",
        venue: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80",
        audience: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop&q=80",
        format: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&q=80"
    };

    return (
        <SectionWrapper id="event-details" theme="white">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"/>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float"
                 style={{animationDelay: "2s"}}/>

            {/* Section Header */}
            <div className="text-center mb-16 animate-fade-in-up">
                <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6 hover:scale-105 transition-transform duration-300">
                    <Sparkles className="w-4 h-4 text-secondary animate-pulse"/>
                    <span className="text-sm font-semibold text-secondary">Event Information</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-hero">
                    Event Details
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Mark your calendars for an unforgettable day of Flutter excellence
                </p>
            </div>

            {/* Main Info Cards with Images */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
                {/* Date Card */}
                <div
                    className="group relative h-[320px] rounded-3xl overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl animate-fade-in-up cursor-pointer"
                    style={{animationDelay: "100ms"}}
                >
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0">
                        <img
                            src={cardImages.date}
                            alt="Event Date"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Gradient Overlay */}
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-blue-600/90 group-hover:from-primary/95 group-hover:via-primary/85 group-hover:to-blue-600/95 transition-all duration-500"/>
                        {/* Shine effect */}
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"/>
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-between p-8 text-white">
                        <div>
                            <div
                                className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                <Calendar className="w-8 h-8 text-white"/>
                            </div>
                            <h3 className="text-3xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300">Date</h3>
                        </div>
                        <div>
                            <p className="text-2xl font-bold mb-2">
                                {details.date.display}
                            </p>
                            <p className="text-white/90 text-sm leading-relaxed">
                                {details.date.details}
                            </p>
                        </div>
                    </div>

                    {/* Floating badge */}
                    <div
                        className="absolute top-4 right-4 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/30 animate-pulse">
                        Coming Soon
                    </div>
                </div>

                {/* Venue Card */}
                <div
                    className="group relative h-[320px] rounded-3xl overflow-hidden border-2 border-secondary/20 hover:border-secondary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl animate-fade-in-up cursor-pointer"
                    style={{animationDelay: "200ms"}}
                >
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0">
                        <img
                            src={cardImages.venue}
                            alt="Event Venue"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Gradient Overlay */}
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-teal-600/80 to-cyan-600/90 group-hover:from-secondary/95 group-hover:via-teal-600/85 group-hover:to-cyan-600/95 transition-all duration-500"/>
                        {/* Shine effect */}
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"/>
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-between p-8 text-white">
                        <div>
                            <div
                                className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                <MapPin className="w-8 h-8 text-white"/>
                            </div>
                            <h3 className="text-3xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300">Venue</h3>
                        </div>
                        <div>
                            <p className="text-2xl font-bold mb-2">
                                {details.venue.city}
                            </p>
                            <p className="text-white/90 text-sm leading-relaxed">
                                {details.venue.venueDetails.name}
                            </p>
                        </div>
                    </div>

                    {/* Floating badge */}
                    <div
                        className="absolute top-4 right-4 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/30 flex items-center gap-1.5">
                        <MapPin className="w-3 h-3"/>
                        Dhaka
                    </div>
                </div>

                {/* Audience Card */}
                <div
                    className="group relative h-[320px] rounded-3xl overflow-hidden border-2 border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl animate-fade-in-up cursor-pointer"
                    style={{animationDelay: "300ms"}}
                >
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0">
                        <img
                            src={cardImages.audience}
                            alt="Target Audience"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Gradient Overlay */}
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-purple-600/90 via-violet-600/80 to-fuchsia-600/90 group-hover:from-purple-600/95 group-hover:via-violet-600/85 group-hover:to-fuchsia-600/95 transition-all duration-500"/>
                        {/* Shine effect */}
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"/>
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-between p-8 text-white">
                        <div>
                            <div
                                className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                <Users className="w-8 h-8 text-white"/>
                            </div>
                            <h3 className="text-3xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300">Target
                                Audience</h3>
                        </div>
                        <div>
                            <p className="text-lg font-bold mb-2">
                                {details.audience.primary}
                            </p>
                            <p className="text-white/90 text-sm leading-relaxed">
                                {details.audience.description}
                            </p>
                        </div>
                    </div>

                    {/* Floating badge */}
                    <div
                        className="absolute top-4 right-4 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/30 flex items-center gap-1.5">
                        <Users className="w-3 h-3"/>
                        200+
                    </div>
                </div>

                {/* Format Card */}
                <div
                    className="group relative h-[320px] rounded-3xl overflow-hidden border-2 border-orange-500/20 hover:border-orange-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl animate-fade-in-up cursor-pointer"
                    style={{animationDelay: "400ms"}}
                >
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0">
                        <img
                            src={cardImages.format}
                            alt="Event Format"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Gradient Overlay */}
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-orange-600/90 via-amber-600/80 to-yellow-600/90 group-hover:from-orange-600/95 group-hover:via-amber-600/85 group-hover:to-yellow-600/95 transition-all duration-500"/>
                        {/* Shine effect */}
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"/>
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-between p-8 text-white">
                        <div>
                            <div
                                className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                <Clock className="w-8 h-8 text-white"/>
                            </div>
                            <h3 className="text-3xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300">Format</h3>
                        </div>
                        <div>
                            <p className="text-2xl font-bold mb-2">
                                {details.format.type}
                            </p>
                            <p className="text-white/90 text-sm leading-relaxed">
                                {details.format.description}
                            </p>
                        </div>
                    </div>

                    {/* Floating badge */}
                    <div
                        className="absolute top-4 right-4 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/30 flex items-center gap-1.5">
                        <Clock className="w-3 h-3"/>
                        9 AM - 6 PM
                    </div>
                </div>
            </div>

            {/* What's Included - Redesigned */}
            <div className="relative animate-fade-in-up" style={{animationDelay: "500ms"}}>
                <div
                    className="glass-card rounded-3xl p-8 sm:p-12 border-2 border-primary/20 overflow-hidden group hover:border-primary/40 transition-all duration-500 hover:shadow-2xl">
                    {/* Background gradient animation */}
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>

                    {/* Floating orbs */}
                    <div
                        className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"/>
                    <div
                        className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float"
                        style={{animationDelay: "1s"}}/>

                    <div className="relative z-10">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-subtle border border-border hover:border-primary/30 transition-all duration-300">
                                <Award className="w-4 h-4 text-primary animate-pulse"/>
                                <span className="text-sm font-bold text-primary">Included Benefits</span>
                            </div>
                            <h3 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-hero">
                                What's Included
                            </h3>
                            <p className="text-muted-foreground text-lg">
                                Everything you need for an amazing experience
                            </p>
                        </div>

                        {/* Benefits Grid */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {details.included.map((item, index) => (
                                <div
                                    key={item.title}
                                    className="group/item glass-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl animate-fade-in-up"
                                    style={{animationDelay: `${600 + index * 100}ms`}}
                                >
                                    <div className="flex items-start gap-4">
                                        {/* Icon */}
                                        <div
                                            className="w-12 h-12 flex-shrink-0 bg-gradient-hero rounded-xl flex items-center justify-center shadow-lg group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300">
                                            {item.title.includes("WiFi") && <Wifi className="w-6 h-6 text-white"/>}
                                            {item.title.includes("Refreshments") &&
                                                <Coffee className="w-6 h-6 text-white"/>}
                                            {item.title.includes("Networking") &&
                                                <Users className="w-6 h-6 text-white"/>}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h4 className="font-bold text-lg mb-2 group-hover/item:text-primary transition-colors duration-300 flex items-center gap-2">
                                                {item.title}
                                                <CheckCircle2
                                                    className="w-4 h-4 text-green-500 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"/>
                                            </h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Additional Features */}
                        <div className="mt-8 pt-8 border-t border-border/50">
                            <div className="flex flex-wrap justify-center gap-4">
                                {[
                                    {icon: Award, text: "Certificate of Participation"},
                                    {icon: Zap, text: "Swag & Prizes"},
                                    {icon: Users, text: "Exclusive Community Access"},
                                    {icon: Sparkles, text: "Career Opportunities"}
                                ].map((feature, index) => {
                                    const Icon = feature.icon;
                                    return (
                                        <div
                                            key={feature.text}
                                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-subtle border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                                            style={{animationDelay: `${900 + index * 80}ms`}}
                                        >
                                            <Icon className="w-4 h-4 text-primary"/>
                                            <span className="text-sm font-medium text-foreground">{feature.text}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};
