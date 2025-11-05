// Organizer Team Configuration
// Update this file to change team member information

export interface OrganizerTeamMember {
    name: string;
    username: string; // Digital signature like @Sunnat629
    teamRole: string; // Role in the organizing team (e.g., "Lead Organizer", "Technical Lead")
    designation: string; // Professional designation
    company: string; // Company name
    image: string; // Profile image URL
    bio?: string; // Short bio about the person
    social: {
        twitter?: string;
        linkedin?: string;
        github?: string;
        email?: string;
    };
}

// Core Organizing Team Members
export const organizerTeam: OrganizerTeamMember[] = [
    {
        name: "Sunnat629",
        username: "@Sunnat629",
        teamRole: "Lead Organizer & Founder",
        designation: "Senior Flutter Developer",
        company: "Sunnat629 Labs",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        bio: "Passionate Flutter developer and community builder. Founded Sunnat629 Labs to empower developers.",
        social: {
            twitter: "https://twitter.com/sunnat629",
            linkedin: "https://linkedin.com/in/sunnat629",
            github: "https://github.com/sunnat629",
            email: "sunnat629@flutterguild.com"
        }
    },
    {
        name: "Nusrat Jahan",
        username: "@NusratDev",
        teamRole: "Technical Coordinator",
        designation: "Mobile App Developer",
        company: "Brain Station 23",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
        bio: "Technical enthusiast coordinating all tech aspects of Flutter Guild.",
        social: {
            linkedin: "https://linkedin.com/in/nusrat-jahan-dev",
            github: "https://github.com/nusratdev",
            email: "nusrat@flutterguild.com"
        }
    },
    {
        name: "Mohammed Rahman",
        username: "@MoRahman",
        teamRole: "Community Manager",
        designation: "Flutter Architect",
        company: "DSI",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        bio: "Building bridges within the Flutter community across Bangladesh.",
        social: {
            twitter: "https://twitter.com/mo-rahman",
            linkedin: "https://linkedin.com/in/mohammed-rahman",
            email: "mohammed@flutterguild.com"
        }
    },
    {
        name: "Fatema Khatun",
        username: "@FatemaFlutter",
        teamRole: "Design Lead",
        designation: "UX/UI Designer",
        company: "Pathao",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
        bio: "Crafting beautiful experiences for Flutter Guild attendees.",
        social: {
            twitter: "https://twitter.com/fatemaflutter",
            linkedin: "https://linkedin.com/in/fatema-khatun",
            email: "fatema@flutterguild.com"
        }
    },
    {
        name: "Ashik Ahmed",
        username: "@AshikDev",
        teamRole: "Outreach Coordinator",
        designation: "Software Engineer",
        company: "bKash",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
        bio: "Connecting speakers, sponsors, and community members.",
        social: {
            linkedin: "https://linkedin.com/in/ashik-ahmed",
            github: "https://github.com/ashikdev",
            email: "ashik@flutterguild.com"
        }
    },
    {
        name: "Sadia Rahman",
        username: "@SadiaFlutter",
        teamRole: "Logistics Coordinator",
        designation: "Project Manager",
        company: "Grameenphone",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
        bio: "Ensuring smooth operations on event day and beyond.",
        social: {
            linkedin: "https://linkedin.com/in/sadia-rahman",
            twitter: "https://twitter.com/sadiaflutter",
            email: "sadia@flutterguild.com"
        }
    }
];
