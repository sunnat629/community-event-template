// Speakers Configuration
// Update this file to change speaker information

export interface Speaker {
    name: string;
    title: string;
    topic: string;
    image: string; // Emoji or image URL
    bio?: string;
    company?: string;
    social?: {
        twitter?: string;
        linkedin?: string;
        email?: string;
    };
    featured?: boolean;
}

// ============================================================================
// 🚀 FEATURED SPEAKERS
// ============================================================================
// Add your main/keynote speakers here
// These will be displayed prominently with large cards and auto-rotating carousel
//
// Example:
// {
//   name: "Speaker Name",
//   title: "Role/Title",
//   company: "Company Name",
//   topic: "Talk Title",
//   image: "https://yourcdn.com/speaker-photo.jpg",
//   bio: "Detailed biography...",
//   social: {
//     twitter: "https://twitter.com/username",
//     linkedin: "https://linkedin.com/in/username",
//     email: "speaker@email.com"
//   },
//   featured: true
// }
//
// ⚠️ IMPORTANT: Only add REAL speakers - no mock data!
// ============================================================================
export const featuredSpeakers: Speaker[] = [
    {
        name: "Md. Sunnat Hossain",
        title: "Lead Organizer & Flutter Developer",
        company: "Community Event Template",
        topic: "Building Community Through Events",
        image: "https://avatars.githubusercontent.com/u/17354962?v=4", // Sunnat629's GitHub avatar
        bio: "Passionate Flutter advocate and community organizer with experience building tech events and open-source projects.",
        social: {
            twitter: "https://twitter.com/sunnat629",
            linkedin: "https://linkedin.com/in/sunnat629",
            email: "sunnat629@gmail.com"
        },
        featured: true
    }
];

// ============================================================================
// 📢 OTHER SPEAKERS
// ============================================================================
// Add additional speakers here (workshops, lightning talks, etc.)
// These will be displayed in a compact grid layout
//
// ⚠️ IMPORTANT: Only add REAL speakers - no mock data!
// ============================================================================
export const otherSpeakers: Speaker[] = [];
