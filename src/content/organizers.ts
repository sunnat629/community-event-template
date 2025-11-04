import {Rocket, Users, LucideIcon} from "lucide-react";

// Organizers Configuration
// Update this file to change organizer information

export interface Organizer {
    name: string;
    description: string;
    icon: LucideIcon;
}

export const organizers: Organizer[] = [
    {
        name: "Sunnat629 Labs",
        description: "Innovation lab focused on empowering developers and building cutting-edge mobile solutions with Flutter.",
        icon: Rocket
    },
    {
        name: "Flutter Bangladesh",
        description: "Bangladesh's largest Flutter community, connecting thousands of developers across the country.",
        icon: Users
    }
];
