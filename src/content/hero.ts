// Hero Section Configuration
// Update this file to customize the hero section content

import {Calendar, MapPin, LucideIcon} from "lucide-react";
import {getThemeConfig, siteConfig} from "./siteConfig";

export interface HeroButton {
    text: string;
    variant: "hero" | "hero-secondary";
    isPrimary?: boolean;
}

export interface HeroEventInfo {
    icon: LucideIcon;
    text: string;
}

export interface HeroContent {
    title: string;
    subtitle: string;
    description: string;
    eventInfo: HeroEventInfo[];
    buttons: HeroButton[];
}

const heroDescriptions: Record<string, string> = {
    generic: "Join the premier tech community event. Connect with passionate developers, learn from industry experts, and build innovative solutions together."
};

export const getHeroContent = (): HeroContent => {
    const themeConfig = getThemeConfig();
    const description = heroDescriptions.generic;

    return {
        title: themeConfig.eventTitle,
        subtitle: themeConfig.eventTagline,
        description,
        eventInfo: [
            {
                icon: Calendar,
                text: "Coming Soon 2026"
            },
            {
                icon: MapPin,
                text: "Tech City, Innovation District"
            }
        ],
        buttons: [
            {
                text: "Register Now",
                variant: "hero",
                isPrimary: true
            },
            {
                text: "Call for Speakers",
                variant: "hero-secondary"
            },
            {
                text: "Become a Sponsor",
                variant: "hero-secondary"
            }
        ]
    };
};

export const heroContent: HeroContent = getHeroContent();