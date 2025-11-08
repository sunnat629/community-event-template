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
        facebook?: string;
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
        name: "Mohi Us Sunnat",
        title: "Sr Software Engineer",
        company: "Sunnat629 Labs",
        topic: "Building Community Through Events",
        image: "https://avatars.githubusercontent.com/u/5854791?v=4", // Sunnat629's GitHub avatar
        bio: "Passionate Flutter advocate and community organizer with experience building tech events and open-source projects.",
        social: {
            twitter: "https://twitter.com/sunnat629",
            linkedin: "https://linkedin.com/in/sunnat629",
            email: "me@sunnat629.dev"
        },
        featured: true
    },
    {
        name: "Faysal Ahmed",
        title: "Senior AI Engineer",
        company: "AI & Backend Specialist",
        topic: "Building AI-Driven Systems and Solutions",
        image: "https://avatars.githubusercontent.com/u/10289348?v=4",
        bio: "Faysal Ahmed is a Senior AI Engineer with experience across backend, frontend, and DevOps. He specializes in building AI-driven systems, including chatbots, RAG solutions, and scalable data platforms. He has built solutions that have been instrumental in legal AI queries and process automation within government ministries.",
        social: {
            linkedin: "https://www.linkedin.com/in/faysal515/",
            email: "faysal515.ae@gmail.com"
        },
        featured: true
    },
    {
        name: "Syed Monowarul Islam",
        title: "Co-Founder & Senior Software Engineer",
        company: "Sunnat629 Labs",
        topic: "Quality Assurance and Community Building",
        image: "https://avatars.githubusercontent.com/u/7632242?v=4",
        bio: "Syed Monowarul Islam works as a Senior Software Engineer in QA at Tiger IT Bangladesh LTD. He's also the Co-founder of Sunnat629 Labs, where developers come together to learn new skills, share ideas, and grow in their tech journeys.",
        social: {
            linkedin: "https://www.linkedin.com/in/smizibon/",
            facebook: "https://www.facebook.com/zibon.dhaka",
            email: "zibon@outlook.com"
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
