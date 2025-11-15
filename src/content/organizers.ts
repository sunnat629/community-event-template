import {LucideIcon} from "lucide-react";

// Organizers Configuration
// Update this file to change organizer information

export interface Organizer {
    name: string;
    description: string;
    icon?: LucideIcon; // Optional, for backward compatibility
    logo?: string; // Logo/banner image URL
    social?: {
        website?: string;
        facebook?: string;
        twitter?: string;
        linkedin?: string;
        instagram?: string;
        youtube?: string;
        github?: string;
    };
}

// Main Organizer - displayed prominently
export const mainOrganizer: Organizer = {
    name: "TechCommunity",
    description: "Innovation lab focused on empowering developers and building cutting-edge technology solutions across various platforms.",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=200&fit=crop", // Replace with actual logo
    social: {
        website: "https://techcommunity.com",
        facebook: "https://facebook.com/techcommunity",
        twitter: "https://twitter.com/techcommunity",
        linkedin: "https://linkedin.com/company/techcommunity",
        github: "https://github.com/techcommunity",
        instagram: "https://instagram.com/techcommunity"
    }
};

// Co-Organizers - displayed with slightly smaller cards
export const coOrganizers: Organizer[] = [
    {
        name: "Web Developers Association",
        description: "A leading community of web professionals, connecting thousands of developers across the country.",
        logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop", // Replace with actual logo
        social: {
            website: "https://webdevelopers.org",
            facebook: "https://facebook.com/webdevelopers",
            twitter: "https://twitter.com/webdevelopers",
            linkedin: "https://linkedin.com/company/web-developers-association",
            youtube: "https://youtube.com/@webdevelopers",
            github: "https://github.com/webdevelopers"
        }
    }
];

// Keep for backward compatibility
export const organizers: Organizer[] = [mainOrganizer, ...coOrganizers];