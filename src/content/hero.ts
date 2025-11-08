// Hero Section Configuration
// Update this file to customize the hero section content

import {Calendar, MapPin, LucideIcon} from "lucide-react";
import {siteConfig} from "./siteConfig";

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

export const heroContent: HeroContent = {
    title: siteConfig.eventTitle,
    subtitle: siteConfig.eventTagline,
    description: "Join Bangladesh's premier Flutter community event. Connect with passionate developers, learn from industry experts, and build the future together.",
    eventInfo: [
        {
            icon: Calendar,
            text: "Coming Soon 2025"
        },
        {
            icon: MapPin,
            text: "Dhaka, Bangladesh"
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