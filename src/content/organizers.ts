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
    name: "Sunnat629 Labs",
    description: "Innovation lab focused on empowering developers and building cutting-edge mobile solutions with Flutter.",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=200&fit=crop", // Replace with actual logo
    social: {
        website: "https://sunnat629labs.com",
        facebook: "https://facebook.com/sunnat629labs",
        twitter: "https://twitter.com/sunnat629labs",
        linkedin: "https://linkedin.com/company/sunnat629labs",
        github: "https://github.com/sunnat629",
        instagram: "https://instagram.com/sunnat629labs"
    }
};

// Co-Organizers - displayed with slightly smaller cards
export const coOrganizers: Organizer[] = [
    {
        name: "Flutter Bangladesh",
        description: "Bangladesh's largest Flutter community, connecting thousands of developers across the country.",
        logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop", // Replace with actual logo
        social: {
            website: "https://flutterbangladesh.com",
            facebook: "https://facebook.com/flutterbangladesh",
            twitter: "https://twitter.com/flutterbangladesh",
            linkedin: "https://linkedin.com/company/flutter-bangladesh",
            youtube: "https://youtube.com/@flutterbangladesh",
            github: "https://github.com/flutter-bangladesh"
        }
    }
];

// Keep for backward compatibility
export const organizers: Organizer[] = [mainOrganizer, ...coOrganizers];
