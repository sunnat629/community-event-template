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
        name: "Mohi Us Sunnat",
        username: "@sunnat629",
        teamRole: "Lead Organizer & Founder",
        designation: "Sr Software Engineer",
        company: "TechCommunity",
        image: "https://cdn.jsdelivr.net/gh/sunnat629Labs/site-images@main/mohi.png",
        bio: "Passionate technology advocate and community organizer with experience building tech events and open-source projects.",
        social: {
            twitter: "https://twitter.com/sunnat629",
            linkedin: "https://linkedin.com/in/sunnat629",
            github: "https://github.com/sunnat629",
            email: "me@sunnat629.dev"
        }
    }
];