import {LucideIcon, Crown, Shield, Users, Heart} from "lucide-react";

export interface TeamMember {
    name: string;
    role: string;
    title: string;
    image: string;
    bio?: string;
    social?: {
        twitter?: string;
        linkedin?: string;
        email?: string;
    };
    tier: 'organizer' | 'committee' | 'volunteer';
}

export const teamMembers: TeamMember[] = [
    // Organizers
    {
        name: "Md. Sunnat Hossain",
        role: "Lead Organizer",
        title: "Event Director",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        bio: "Passionate Flutter advocate with 5+ years of experience organizing tech events in Bangladesh.",
        social: {
            twitter: "https://twitter.com/sunnat629",
            linkedin: "https://linkedin.com/in/sunnat629",
            email: "sunnat@flutterguild.com"
        },
        tier: "organizer"
    },
    {
        name: "Fatema Khatun",
        role: "Co-Organizer",
        title: "Community Lead",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        bio: "Community builder dedicated to growing the Flutter ecosystem in South Asia.",
        social: {
            linkedin: "https://linkedin.com/in/fatema",
            email: "fatema@flutterguild.com"
        },
        tier: "organizer"
    },

    // Committee Members
    {
        name: "Ashik Ahmed",
        role: "Technical Committee",
        title: "Technical Lead",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        bio: "Ensuring technical excellence and smooth execution of all sessions.",
        social: {
            linkedin: "https://linkedin.com/in/ashik",
            email: "ashik@flutterguild.com"
        },
        tier: "committee"
    },
    {
        name: "Nusrat Jahan",
        role: "Logistics Committee",
        title: "Logistics Coordinator",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
        bio: "Managing venue, catering, and attendee experience.",
        social: {
            linkedin: "https://linkedin.com/in/nusrat"
        },
        tier: "committee"
    },
    {
        name: "Tanvir Hasan",
        role: "Marketing Committee",
        title: "Marketing Lead",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
        bio: "Spreading the word and building excitement for the event.",
        social: {
            twitter: "https://twitter.com/tanvir",
            linkedin: "https://linkedin.com/in/tanvir"
        },
        tier: "committee"
    },
    {
        name: "Sadia Rahman",
        role: "Sponsorship Committee",
        title: "Sponsorship Lead",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
        bio: "Building partnerships with companies supporting our community.",
        social: {
            linkedin: "https://linkedin.com/in/sadia"
        },
        tier: "committee"
    },

    // Volunteers
    {
        name: "Rakib Islam",
        role: "Volunteer",
        title: "Registration Desk",
        image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop",
        tier: "volunteer"
    },
    {
        name: "Priya Sharma",
        role: "Volunteer",
        title: "Session Support",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
        tier: "volunteer"
    },
    {
        name: "Kamal Hossain",
        role: "Volunteer",
        title: "Technical Support",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
        tier: "volunteer"
    },
    {
        name: "Ayesha Khan",
        role: "Volunteer",
        title: "Hospitality",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
        tier: "volunteer"
    },
];

// Get team members by tier
export const getTeamByTier = (tier: TeamMember['tier']) => {
    return teamMembers.filter(m => m.tier === tier);
};

// Tier configuration
export const tierConfig: Record<TeamMember['tier'], { icon: LucideIcon, label: string, color: string }> = {
    organizer: {
        icon: Crown,
        label: "Organizers",
        color: "text-yellow-600"
    },
    committee: {
        icon: Shield,
        label: "Committee Members",
        color: "text-blue-600"
    },
    volunteer: {
        icon: Heart,
        label: "Volunteers",
        color: "text-pink-600"
    }
};
