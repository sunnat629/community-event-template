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

// ============================================================================
// ud83dudc65 TEAM MEMBERS
// ============================================================================
// Add your organizing team members here
//
// Example:
// {
//   name: "Full Name",
//   role: "Organizer", // or "Committee" or "Volunteer"
//   title: "Specific Role",
//   image: "https://yourcdn.com/photo.jpg",
//   bio: "Brief biography...",
//   social: {
//     twitter: "https://twitter.com/username",
//     linkedin: "https://linkedin.com/in/username",
//     email: "email@example.com"
//   },
//   tier: "organizer" // or "committee" or "volunteer"
// }
//
// u26a0ufe0f IMPORTANT: Only add REAL team members - no mock data!
// ============================================================================
export const teamMembers: TeamMember[] = [
    {
        name: "Mohi Us Sunnat",
        role: "Lead Organizer",
        title: "Founder & Event Director",
        image: "https://cdn.jsdelivr.net/gh/sunnat629Labs/site-images@main/mohi.png",
        bio: "Passionate technology advocate and community organizer with experience building tech events and open-source projects. Founder of TechCommunity.",
        social: {
            twitter: "https://twitter.com/sunnat629",
            linkedin: "https://linkedin.com/in/sunnat629",
            email: "me@sunnat629.dev"
        },
        tier: "organizer"
    }
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