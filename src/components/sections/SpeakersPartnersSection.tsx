import {
    Mic,
    Sparkles,
    Building2,
    Star,
    Award,
    Users,
    Mail,
    Linkedin,
    Twitter,
    User,
    ChevronRight,
    ExternalLink,
    Globe,
    Facebook
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {useState} from "react";
import {featuredSpeakers, otherSpeakers, Speaker, Partner} from "@/content";
import {partners} from "@/content";

// Speaker details interface
// Removed empty interface

export const SpeakersPartnersSection = () => {
    const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
    const [isSpeakerDialogOpen, setIsSpeakerDialogOpen] = useState(false);
    const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
    const [isPartnerDialogOpen, setIsPartnerDialogOpen] = useState(false);

    const openSpeakerDialog = (speaker: Speaker) => {
        setSelectedSpeaker(speaker);
        setIsSpeakerDialogOpen(true);
    };

    const openPartnerDialog = (partner: Partner) => {
        setSelectedPartner(partner);
        setIsPartnerDialogOpen(true);
    };

    // Get tier-specific styles
    const getTierStyles = (tier: string) => {
        switch (tier) {
            case 'platinum':
                return {
                    border: 'border-4 border-purple-500/50 hover:border-purple-400',
                    bg: 'bg-gradient-to-br from-purple-500/10 via-card to-purple-400/5',
                    glow: 'shadow-xl shadow-purple-500/20 hover:shadow-2xl hover:shadow-purple-400/40',
                    badge: 'bg-gradient-to-r from-purple-600 to-purple-400',
                    ring: 'ring-4 ring-purple-500/20',
                    size: 'large'
                };
            case 'gold':
                return {
                    border: 'border-4 border-yellow-500/50 hover:border-yellow-400',
                    bg: 'bg-gradient-to-br from-yellow-500/10 via-card to-yellow-400/5',
                    glow: 'shadow-xl shadow-yellow-500/20 hover:shadow-2xl hover:shadow-yellow-400/40',
                    badge: 'bg-gradient-to-r from-yellow-600 to-yellow-400',
                    ring: 'ring-4 ring-yellow-500/20',
                    size: 'large'
                };
            case 'silver':
                return {
                    border: 'border-2 border-slate-400/50 hover:border-slate-300',
                    bg: 'bg-gradient-to-br from-slate-400/10 via-card to-slate-300/5',
                    glow: 'shadow-lg shadow-slate-400/10 hover:shadow-xl hover:shadow-slate-300/20',
                    badge: 'bg-gradient-to-r from-slate-500 to-slate-400',
                    ring: 'ring-2 ring-slate-400/20',
                    size: 'medium'
                };
            case 'bronze':
                return {
                    border: 'border-2 border-orange-700/50 hover:border-orange-600',
                    bg: 'bg-gradient-to-br from-orange-700/10 via-card to-orange-600/5',
                    glow: 'shadow-lg shadow-orange-700/10 hover:shadow-xl hover:shadow-orange-600/20',
                    badge: 'bg-gradient-to-r from-orange-700 to-orange-600',
                    ring: 'ring-2 ring-orange-700/20',
                    size: 'medium'
                };
            case 'community':
                return {
                    border: 'border-2 border-green-500/50 hover:border-green-400',
                    bg: 'bg-gradient-to-br from-green-500/10 via-card to-green-400/5',
                    glow: 'shadow-lg shadow-green-500/10 hover:shadow-xl hover:shadow-green-400/20',
                    badge: 'bg-gradient-to-r from-green-600 to-green-400',
                    ring: 'ring-2 ring-green-500/20',
                    size: 'small'
                };
            case 'media':
                return {
                    border: 'border-2 border-blue-500/50 hover:border-blue-400',
                    bg: 'bg-gradient-to-br from-blue-500/10 via-card to-blue-400/5',
                    glow: 'shadow-lg shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-400/20',
                    badge: 'bg-gradient-to-r from-blue-600 to-blue-400',
                    ring: 'ring-2 ring-blue-500/20',
                    size: 'small'
                };
            default:
                return {
                    border: 'border-2 border-border hover:border-primary/30',
                    bg: 'bg-card',
                    glow: 'shadow-lg hover:shadow-xl',
                    badge: 'bg-gradient-hero',
                    ring: '',
                    size: 'small'
                };
        }
    };

    // Group partners by tier
    const premiumPartners = partners.filter(p => ['platinum', 'gold'].includes(p.tier));
    const otherPartners = partners.filter(p => !['platinum', 'gold'].includes(p.tier));

    return (
        <section id="speakers-partners" className="section-padding relative overflow-hidden bg-gradient-subtle">
            {/* Enhanced background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float"/>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"
                 style={{animationDelay: "1s"}}/>
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl animate-pulse"
                style={{animationDuration: "4s"}}/>

            <div className="section-container relative z-10">
                {/* Featured Speakers */}
                <div className="mb-24">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 hover:scale-105 transition-transform duration-300">
                            <Mic className="w-4 h-4 text-primary animate-pulse"/>
                            <span className="text-sm font-semibold text-primary">Industry Experts</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-hero">
                            Featured Speakers
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Learn from industry experts and thought leaders shaping the Flutter ecosystem
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {featuredSpeakers.map((speaker, index) => (
                            <div
                                key={speaker.name}
                                className="animate-fade-in-up"
                                style={{animationDelay: `${index * 150}ms`}}
                            >
                                <button
                                    type="button"
                                    onClick={() => openSpeakerDialog(speaker)}
                                    className="relative w-full text-left group"
                                >
                                    {/* Main card with enhanced hover effects */}
                                    <div
                                        className="glass-card rounded-3xl p-8 border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl bg-gradient-to-br from-card to-primary/5 overflow-hidden h-[480px] flex flex-col focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30"
                                    >
                                        {/* Shine effect */}
                                        <div
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"/>

                                        {/* Avatar with glow */}
                                        <div className="relative mb-6">
                                            <div
                                                className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl group-hover:border-primary/60 transition-all duration-500">
                                                <img
                                                    src={speaker.image}
                                                    alt={speaker.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            {/* Floating glow ring */}
                                            <div
                                                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"/>

                                            {/* Badge for company */}
                                            {speaker.company && (
                                                <div
                                                    className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-2 px-4 py-1.5 bg-gradient-hero text-white text-xs font-bold rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-4">
                                                    {speaker.company}
                                                </div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="text-center relative z-10">
                                            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 flex items-center justify-center gap-2">
                                                {speaker.name}
                                                <ChevronRight
                                                    className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"/>
                                            </h3>
                                            <p className="text-primary font-semibold mb-4 text-base">
                                                {speaker.title}
                                            </p>

                                            {/* Topic card */}
                                            <div
                                                className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-4 border border-primary/20 group-hover:border-primary/40 transition-all duration-300 group-hover:scale-105">
                                                <p className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wide">Speaking
                                                    on:</p>
                                                <p className="text-foreground font-semibold text-sm leading-relaxed">{speaker.topic}</p>
                                            </div>

                                            {/* Social icons - appear on hover */}
                                            {speaker.social && (
                                                <div
                                                    className="flex justify-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-0 translate-y-2">
                                                    {speaker.social.twitter && (
                                                        <div
                                                            className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110">
                                                            <Twitter className="w-4 h-4"/>
                                                        </div>
                                                    )}
                                                    {speaker.social.linkedin && (
                                                        <div
                                                            className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110">
                                                            <Linkedin className="w-4 h-4"/>
                                                        </div>
                                                    )}
                                                    {speaker.social.email && (
                                                        <div
                                                            className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110">
                                                            <Mail className="w-4 h-4"/>
                                                        </div>
                                                    )}
                                                </div>
                                            )}

                                            {/* Click hint */}
                                            <p className="text-xs text-muted-foreground mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                Click to view profile
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Other Speakers - Redesigned */}
                <div className="mb-24">
                    <div className="text-center mb-12 animate-fade-in-up">
                        <h3 className="text-3xl sm:text-4xl font-bold mb-4">More Amazing Speakers</h3>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Technical sessions, workshops, and lightning talks from community experts
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {otherSpeakers.map((speaker, index) => (
                            <div
                                key={speaker.name}
                                className="animate-fade-in-up"
                                style={{animationDelay: `${index * 80}ms`}}
                            >
                                <button
                                    type="button"
                                    onClick={() => openSpeakerDialog(speaker)}
                                    className="w-full text-left group"
                                >
                                    <div
                                        className="glass-card rounded-2xl p-6 border-2 border-border hover:border-secondary/50 transition-colors duration-300 shadow-lg bg-gradient-to-br from-card to-secondary/5 relative overflow-hidden focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-secondary/30"
                                    >
                                        {/* Shine effect */}
                                        <div
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"/>

                                        <div className="flex items-start gap-4 mb-4 relative z-10">
                                            {/* Avatar - removed scale and rotate to prevent hover jumping */}
                                            <div className="relative flex-shrink-0">
                                                <div
                                                    className="w-20 h-20 rounded-xl overflow-hidden border-2 border-secondary/30 shadow-lg group-hover:border-secondary/60 transition-colors duration-300">
                                                    <img
                                                        src={speaker.image}
                                                        alt={speaker.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>

                                            {/* Info */}
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-lg font-bold mb-1 group-hover:text-secondary transition-colors duration-300 flex items-center gap-1">
                                                    {speaker.name}
                                                    <ChevronRight
                                                        className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"/>
                                                </h4>
                                                <p className="text-sm text-muted-foreground font-medium mb-2">{speaker.title}</p>
                                            </div>
                                        </div>

                                        {/* Topic */}
                                        <div
                                            className="bg-gradient-subtle rounded-lg p-3 border border-border/50 group-hover:border-secondary/30 transition-all duration-300 relative z-10 mb-3">
                                            <p className="text-xs font-semibold text-muted-foreground mb-1">Topic:</p>
                                            <p className="text-sm text-foreground font-medium">{speaker.topic}</p>
                                        </div>

                                        {/* Social icons - compact */}
                                        {speaker.social && (
                                            <div
                                                className="flex gap-2 relative z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                {speaker.social.twitter && (
                                                    <div
                                                        className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-200">
                                                        <Twitter className="w-3 h-3"/>
                                                    </div>
                                                )}
                                                {speaker.social.linkedin && (
                                                    <div
                                                        className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-200">
                                                        <Linkedin className="w-3 h-3"/>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="text-center animate-fade-in-up">
                        <Button variant="premium" size="lg"
                                className="btn-glow hover:scale-110 transition-all duration-300">
                            Submit Your Talk Proposal
                            <Sparkles className="ml-2 w-5 h-5 animate-pulse"/>
                        </Button>
                    </div>
                </div>

                {/* Partners & Sponsors */}
                <div>
                    <div className="text-center mb-16 animate-fade-in-up">
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6 hover:scale-105 transition-transform duration-300">
                            <Award className="w-4 h-4 text-secondary animate-pulse"/>
                            <span className="text-sm font-semibold text-secondary">Supporting Our Community</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-hero">
                            Partners & Sponsors
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Empowering the Flutter community in Bangladesh together
                        </p>
                    </div>

                    {/* Partners & Sponsors - Professional Card Design */}
                    {premiumPartners.length > 0 && (
                        <div className="mb-8">
                            <div className="flex flex-wrap justify-center items-stretch gap-6 max-w-7xl mx-auto">
                                {premiumPartners.map((partner, index) => {
                                    const tierStyles = getTierStyles(partner.tier);

                                    return (
                                        <div
                                            key={partner.name}
                                            className="animate-fade-in-up"
                                            style={{animationDelay: `${index * 150}ms`}}
                                        >
                                            <div
                                                className={`group relative rounded-xl border overflow-hidden ${tierStyles.border} ${tierStyles.bg} ${tierStyles.glow} hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 w-[320px] h-[440px] flex flex-col bg-card`}>

                                                {/* Shine effect on hover */}
                                                <div
                                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"/>

                                                {/* Logo Container */}
                                                <div
                                                    className="relative h-48 flex items-center justify-center p-6 bg-gradient-to-br from-muted/30 to-muted/10 border-b border-border/50">
                                                    <img
                                                        src={partner.logo}
                                                        alt={`${partner.name} logo`}
                                                        className="max-w-[180px] max-h-[140px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-110"
                                                    />
                                                    {/* Tier badge overlay */}
                                                    <div
                                                        className={`absolute top-3 right-3 px-3 py-1 ${tierStyles.badge} text-white text-xs font-semibold rounded-md shadow-lg`}>
                                                        {partner.tier.toUpperCase()}
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className="flex-1 p-5 flex flex-col">
                                                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                                                        {partner.name}
                                                    </h3>

                                                    {/* Description */}
                                                    {partner.description && (
                                                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-1">
                                                            {partner.description}
                                                        </p>
                                                    )}

                                                    {/* View Details Button */}
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="w-full border-2 text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 font-semibold"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            openPartnerDialog(partner);
                                                        }}
                                                    >
                                                        View Details
                                                        <ChevronRight
                                                            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"/>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Other Partners - Same Professional Design */}
                    {otherPartners.length > 0 && (
                        <div className="mb-12">
                            <div className="flex flex-wrap justify-center items-stretch gap-6 max-w-7xl mx-auto">
                                {otherPartners.map((partner, index) => {
                                    const tierStyles = getTierStyles(partner.tier);

                                    return (
                                        <div
                                            key={partner.name}
                                            className="animate-fade-in-up"
                                            style={{animationDelay: `${(premiumPartners.length + index) * 100}ms`}}
                                        >
                                            <div
                                                className={`group relative rounded-xl border overflow-hidden ${tierStyles.border} ${tierStyles.bg} ${tierStyles.glow} hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 w-[320px] h-[440px] flex flex-col bg-card`}>

                                                {/* Shine effect on hover */}
                                                <div
                                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"/>

                                                {/* Logo Container */}
                                                <div
                                                    className="relative h-48 flex items-center justify-center p-6 bg-gradient-to-br from-muted/30 to-muted/10 border-b border-border/50">
                                                    <img
                                                        src={partner.logo}
                                                        alt={`${partner.name} logo`}
                                                        className="max-w-[180px] max-h-[140px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-110"
                                                    />
                                                    {/* Tier badge overlay */}
                                                    <div
                                                        className={`absolute top-3 right-3 px-3 py-1 ${tierStyles.badge} text-white text-xs font-semibold rounded-md shadow-lg`}>
                                                        {partner.tier.toUpperCase()}
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className="flex-1 p-5 flex flex-col">
                                                    <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                                                        {partner.name}
                                                    </h4>

                                                    {/* Description */}
                                                    {partner.description && (
                                                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-1">
                                                            {partner.description}
                                                        </p>
                                                    )}

                                                    {/* View Details Button */}
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="w-full border-2 text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 font-semibold"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            openPartnerDialog(partner);
                                                        }}
                                                    >
                                                        View Details
                                                        <ChevronRight
                                                            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"/>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    <div
                        className="glass-card rounded-3xl p-8 sm:p-12 text-center border-2 border-border/50 hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl animate-fade-in-up">
                        <div className="max-w-3xl mx-auto">
                            <h3 className="text-3xl font-bold mb-4">Become a Sponsor</h3>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Join us in building Bangladesh's Flutter community. Multiple sponsorship tiers
                                available with exclusive benefits and brand visibility.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="premium" size="lg"
                                        className="btn-glow hover:scale-110 transition-all duration-300">
                                    View Sponsor Package
                                    <ExternalLink className="ml-2 w-4 h-4"/>
                                </Button>
                                <Button variant="glass" size="lg"
                                        className="hover:scale-105 transition-all duration-300">
                                    Contact Sponsorship Team
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Speaker Details Dialog */}
            <Dialog open={isSpeakerDialogOpen} onOpenChange={setIsSpeakerDialogOpen}>
                <DialogContent className="max-w-lg animate-scale-in max-h-[90vh] overflow-y-auto">
                    {selectedSpeaker && (
                        <>
                            <DialogHeader>
                                <div className="flex flex-col items-center text-center mb-6">
                                    {/* Speaker avatar with glow effect */}
                                    <div className="relative mb-6">
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
                                    </div>

                                    <DialogTitle className="text-3xl mb-2">{selectedSpeaker.name}</DialogTitle>
                                    <p className="text-primary font-semibold text-lg">{selectedSpeaker.title}</p>
                                    {selectedSpeaker.company && (
                                        <p className="text-muted-foreground text-sm mt-1">@ {selectedSpeaker.company}</p>
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
                                {selectedSpeaker.bio && (
                                    <div>
                                        <h4 className="font-bold text-lg mb-2 text-foreground">About</h4>
                                        <p className="text-muted-foreground leading-relaxed">{selectedSpeaker.bio}</p>
                                    </div>
                                )}

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
                                    size="lg">
                                    <User className="w-4 h-4 mr-2"/>
                                    View Full Profile
                                </Button>
                            </DialogDescription>
                        </>
                    )}
                </DialogContent>
            </Dialog>

            {/* Partner Details Dialog - NEW */}
            <Dialog open={isPartnerDialogOpen} onOpenChange={setIsPartnerDialogOpen}>
                <DialogContent className="max-w-2xl animate-scale-in max-h-[90vh] overflow-y-auto">
                    {selectedPartner && (
                        <>
                            <DialogHeader>
                                <div className="flex flex-col items-center text-center mb-6">
                                    {/* Partner logo with tier-based styling */}
                                    <div className="relative mb-6">
                                        <div
                                            className={`w-32 h-32 rounded-3xl overflow-hidden bg-white shadow-2xl animate-float border-4 ${getTierStyles(selectedPartner.tier).border}`}>
                                            <img
                                                src={selectedPartner.logo}
                                                alt={`${selectedPartner.name} logo`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        {/* Tier badge */}
                                        <div
                                            className={`absolute -top-2 -right-2 px-3 py-1.5 ${getTierStyles(selectedPartner.tier).badge} text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg animate-pulse`}>
                                            {selectedPartner.tier} Partner
                                        </div>
                                        {/* Glow effect */}
                                        <div
                                            className={`absolute inset-0 rounded-3xl blur-2xl opacity-50 animate-pulse ${getTierStyles(selectedPartner.tier).bg}`}/>
                                    </div>

                                    <DialogTitle className="text-3xl mb-2">{selectedPartner.name}</DialogTitle>
                                    <p className="text-primary font-bold text-xl">{selectedPartner.role}</p>
                                </div>
                            </DialogHeader>

                            <DialogDescription className="text-base text-foreground space-y-6">
                                {/* Description */}
                                {selectedPartner.description && (
                                    <div
                                        className={`p-6 rounded-2xl ${getTierStyles(selectedPartner.tier).bg} ${getTierStyles(selectedPartner.tier).border} ${getTierStyles(selectedPartner.tier).glow}`}>
                                        <h4 className="font-bold text-lg mb-3 text-foreground flex items-center gap-2">
                                            <Building2 className="w-5 h-5"/>
                                            About
                                        </h4>
                                        <p className="text-muted-foreground leading-relaxed text-base">
                                            {selectedPartner.description}
                                        </p>
                                    </div>
                                )}

                                {/* Partnership highlight */}
                                <div
                                    className="p-6 rounded-2xl bg-gradient-subtle border-2 border-primary/20">
                                    <h4 className="font-bold text-lg mb-3 text-foreground flex items-center gap-2">
                                        <Award className="w-5 h-5 text-primary"/>
                                        Partnership Benefits
                                    </h4>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary mt-1">✓</span>
                                            <span>Brand visibility across all event materials</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary mt-1">✓</span>
                                            <span>Direct engagement with Flutter community</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary mt-1">✓</span>
                                            <span>Networking opportunities with industry leaders</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Connect links */}
                                {(selectedPartner.website || selectedPartner.linkedin || selectedPartner.facebook) && (
                                    <div>
                                        <h4 className="font-bold text-lg mb-3 text-foreground flex items-center gap-2">
                                            <Globe className="w-5 h-5"/>
                                            Connect
                                        </h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                            {selectedPartner.website && (
                                                <Button
                                                    variant="outline"
                                                    size="lg"
                                                    className="w-full hover:scale-105 transition-all duration-300"
                                                    onClick={() => window.open(selectedPartner.website, '_blank')}
                                                >
                                                    <Globe className="w-4 h-4 mr-2"/>
                                                    Website
                                                </Button>
                                            )}
                                            {selectedPartner.linkedin && (
                                                <Button
                                                    variant="outline"
                                                    size="lg"
                                                    className="w-full hover:scale-105 transition-all duration-300"
                                                    onClick={() => window.open(selectedPartner.linkedin, '_blank')}
                                                >
                                                    <Linkedin className="w-4 h-4 mr-2"/>
                                                    LinkedIn
                                                </Button>
                                            )}
                                            {selectedPartner.facebook && (
                                                <Button
                                                    variant="outline"
                                                    size="lg"
                                                    className="w-full hover:scale-105 transition-all duration-300"
                                                    onClick={() => window.open(selectedPartner.facebook, '_blank')}
                                                >
                                                    <Facebook className="w-4 h-4 mr-2"/>
                                                    Facebook
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Action button */}
                                <Button
                                    className={`w-full ${getTierStyles(selectedPartner.tier).badge} text-white hover:shadow-glow-lg hover:scale-105 transition-all duration-300`}
                                    size="lg"
                                    onClick={() => window.open(selectedPartner.website || '#', '_blank')}
                                >
                                    <ExternalLink className="w-4 h-4 mr-2"/>
                                    Visit {selectedPartner.name}
                                </Button>
                            </DialogDescription>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
};
