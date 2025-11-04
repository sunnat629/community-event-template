import {Building2, Award, Star, Users, LucideIcon} from "lucide-react";

// Partners & Sponsors Configuration
// Update this file to change partner and sponsor information

export interface Partner {
    name: string;
    role: string;
    icon: LucideIcon;
}

export const partners: Partner[] = [
    {
        name: "Brain Station 23",
        role: "Venue Partner",
        icon: Building2
    },
    {
        name: "DSI",
        role: "Platinum Sponsor",
        icon: Award
    },
    {
        name: "Cheq",
        role: "Gold Sponsor",
        icon: Star
    },
    {
        name: "Flutter Bangladesh",
        role: "Co-Organizer",
        icon: Users
    }
];
