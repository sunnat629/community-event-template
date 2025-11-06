import {ChevronRight, Twitter, Linkedin, Mail} from "lucide-react";
import {Speaker} from "@/content";
import {cn} from "@/lib/utils";

interface SpeakerCardProps {
    speaker: Speaker;
    variant?: 'featured' | 'compact' | 'list';
    onClick?: () => void;
    className?: string;
}

/**
 * Reusable Speaker Card Component
 * Works in both Lite (single-page) and Pro (multi-route) modes
 *
 * Variants:
 * - featured: Large card with full details (lite mode featured speakers)
 * - compact: Medium card with essential info (lite mode other speakers)
 * - list: Horizontal layout for list views (pro mode)
 */
export const SpeakerCard = ({
                                speaker,
                                variant = 'featured',
                                onClick,
                                className
                            }: SpeakerCardProps) => {

    // Featured variant (large card)
    if (variant === 'featured') {
        return (
            <button
                type="button"
                onClick={onClick}
                className={cn(
                    "relative w-full text-left group",
                    className
                )}
            >
                <div
                    className="glass-card rounded-3xl p-8 border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl bg-gradient-to-br from-card to-primary/5 overflow-hidden h-[480px] flex flex-col focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30">
                    {/* Shine effect */}
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"/>

                    {/* Avatar with glow */}
                    <div className="relative mb-6">
                        <div
                            className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl group-hover:border-primary/60 transition-all duration-500">
                            <img
                                src={speaker.image}
                                alt={speaker.name}
                                className="w-full h-full object-cover"
                                loading="lazy"
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
                            <p className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wide">
                                Speaking on:
                            </p>
                            <p className="text-foreground font-semibold text-sm leading-relaxed">
                                {speaker.topic}
                            </p>
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
        );
    }

    // Compact variant (medium card)
    if (variant === 'compact') {
        return (
            <button
                type="button"
                onClick={onClick}
                className={cn("w-full text-left group", className)}
            >
                <div
                    className="glass-card rounded-3xl p-6 border-2 border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl bg-gradient-to-br from-card to-primary/5 overflow-hidden h-[420px] flex flex-col focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30">
                    {/* Shine effect */}
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"/>

                    {/* Avatar - Centered and Round like featured */}
                    <div className="relative mb-6">
                        <div
                            className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl group-hover:border-primary/60 transition-all duration-500">
                            <img
                                src={speaker.image}
                                alt={speaker.name}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                        {/* Floating glow ring */}
                        <div
                            className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"/>

                        {/* Badge for company */}
                        {speaker.company && (
                            <div
                                className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-2 px-3 py-1 bg-gradient-hero text-white text-xs font-bold rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-4 whitespace-nowrap">
                                {speaker.company}
                            </div>
                        )}
                    </div>

                    {/* Content - Centered */}
                    <div className="text-center relative z-10 flex-1 flex flex-col">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 flex items-center justify-center gap-2">
                            {speaker.name}
                            <ChevronRight
                                className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"/>
                        </h3>
                        <p className="text-primary font-semibold mb-4 text-sm">
                            {speaker.title}
                        </p>

                        {/* Topic card */}
                        <div
                            className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-4 border border-primary/20 group-hover:border-primary/40 transition-all duration-300 group-hover:scale-105 flex-1 flex flex-col justify-center">
                            <p className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wide">
                                Speaking on:
                            </p>
                            <p className="text-foreground font-semibold text-sm leading-relaxed line-clamp-2">
                                {speaker.topic}
                            </p>
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
        );
    }

    // List variant (horizontal layout for pro mode)
    return (
        <button
            type="button"
            onClick={onClick}
            className={cn(
                "w-full text-left group hover:bg-muted/50 rounded-xl p-4 transition-colors duration-200",
                className
            )}
        >
            <div className="flex items-center gap-4">
                {/* Avatar */}
                <div
                    className="w-16 h-16 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-colors flex-shrink-0">
                    <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-bold group-hover:text-primary transition-colors flex items-center gap-2">
                        {speaker.name}
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"/>
                    </h4>
                    <p className="text-sm text-muted-foreground">{speaker.title}</p>
                    {speaker.company && (
                        <p className="text-xs text-muted-foreground mt-1">@ {speaker.company}</p>
                    )}
                </div>

                {/* Topic badge */}
                <div className="hidden md:block flex-shrink-0 max-w-xs">
                    <div className="px-3 py-1.5 bg-muted rounded-lg">
                        <p className="text-xs text-muted-foreground truncate">{speaker.topic}</p>
                    </div>
                </div>
            </div>
        </button>
    );
};
