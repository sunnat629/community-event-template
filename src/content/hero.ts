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
    flutter: "Join the premier Flutter community event. Connect with passionate Flutter developers, learn from Google experts, and build production-ready mobile experiences together.",
    android: "Join the premier Android community event. Connect with Kotlin engineers, learn from Android experts, and ship world-class native apps together.",
    ios: "Join the premier iOS community event. Connect with Swift developers, learn best practices from Apple experts, and craft beautifully polished apps together.",
    ai: "Join the leading AI & ML summit. Connect with data scientists, learn from AI pioneers, and create intelligent solutions that transform the future.",
    qa: "Join the premier QA & Testing conference. Connect with quality leaders, master modern testing strategies, and deliver reliable software at scale.",
    unity: "Join the flagship Game Dev summit. Connect with Unity creators, hone your game design craft, and launch immersive gaming experiences together.",
    cloud: "Join the leading Cloud & DevOps summit. Connect with cloud engineers, master scalable infrastructure, and automate deployments with confidence.",
    generic: "Join the premier tech community event. Connect with passionate developers, learn from industry experts, and build innovative solutions together."
};

export const getHeroContent = (): HeroContent => {
    const themeConfig = getThemeConfig();
    const description = heroDescriptions[themeConfig.eventType] || heroDescriptions.generic;

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