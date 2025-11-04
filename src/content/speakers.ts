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

// Featured speakers (displayed prominently with large cards)
export const featuredSpeakers: Speaker[] = [
    {
        name: "Dr. Sarah Chen",
        title: "Google Developer Expert - Flutter",
        company: "Google",
        topic: "The Future of Flutter: 2025 and Beyond",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        bio: "Dr. Sarah Chen is a renowned Flutter expert and Google Developer Expert with over 10 years of experience in mobile development. She has contributed to numerous open-source projects and spoken at conferences worldwide.",
        social: {
            twitter: "https://twitter.com/sarahchen",
            linkedin: "https://linkedin.com/in/sarahchen",
            email: "sarah@flutterguild.com"
        },
        featured: true
    },
    {
        name: "Mohammed Rahman",
        title: "Senior Flutter Architect",
        company: "Brain Station 23",
        topic: "Scalable Architecture Patterns",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        bio: "Mohammed is a senior architect specializing in building scalable Flutter applications. He leads the mobile development team at Brain Station 23 and mentors aspiring developers.",
        social: {
            twitter: "https://twitter.com/morahman",
            linkedin: "https://linkedin.com/in/mohammed-rahman",
            email: "mohammed@flutterguild.com"
        },
        featured: true
    },
    {
        name: "Priya Sharma",
        title: "Lead Mobile Developer",
        company: "DSI",
        topic: "Advanced State Management with Riverpod",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
        bio: "Priya is a passionate Flutter developer and state management expert. She has built multiple production apps and actively contributes to the Flutter community through blogs and tutorials.",
        social: {
            twitter: "https://twitter.com/priyasharma",
            linkedin: "https://linkedin.com/in/priya-sharma",
            email: "priya@flutterguild.com"
        },
        featured: true
    }
];

// Additional speakers (displayed in compact grid)
export const otherSpeakers: Speaker[] = [
    {
        name: "Ashik Ahmed",
        title: "Flutter Community Leader",
        topic: "Building Real-time Apps",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
        bio: "Ashik is a community organizer and Flutter enthusiast who loves sharing knowledge and helping developers succeed.",
        social: {
            twitter: "https://twitter.com/ashikahmed",
            linkedin: "https://linkedin.com/in/ashik-ahmed"
        }
    },
    {
        name: "Nusrat Jahan",
        title: "Mobile App Security Expert",
        topic: "Securing Flutter Applications",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
        bio: "Nusrat specializes in mobile security and helps developers build secure Flutter applications.",
        social: {
            twitter: "https://twitter.com/nusratjahan",
            linkedin: "https://linkedin.com/in/nusrat-jahan"
        }
    },
    {
        name: "Tanvir Hasan",
        title: "Firebase Integration Specialist",
        topic: "Cloud-first Flutter Apps",
        image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
        bio: "Tanvir is a cloud architecture expert who specializes in integrating Firebase with Flutter applications.",
        social: {
            twitter: "https://twitter.com/tanvirhasan",
            linkedin: "https://linkedin.com/in/tanvir-hasan"
        }
    },
    {
        name: "Fatema Khatun",
        title: "UX Designer & Flutter Dev",
        topic: "Design Systems in Flutter",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
        bio: "Fatema combines UX design expertise with Flutter development to create beautiful user experiences.",
        social: {
            linkedin: "https://linkedin.com/in/fatema-khatun"
        }
    },
    {
        name: "Rakib Islam",
        title: "Performance Optimization Lead",
        topic: "Flutter Performance Deep Dive",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        bio: "Rakib focuses on performance optimization and helps teams build lightning-fast Flutter applications.",
        social: {
            twitter: "https://twitter.com/rakibislam",
            linkedin: "https://linkedin.com/in/rakib-islam"
        }
    },
    {
        name: "Sadia Rahman",
        title: "Testing & Quality Expert",
        topic: "Testing Strategies for Flutter",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
        bio: "Sadia is a quality assurance specialist who advocates for comprehensive testing in Flutter projects.",
        social: {
            linkedin: "https://linkedin.com/in/sadia-rahman"
        }
    }
];
