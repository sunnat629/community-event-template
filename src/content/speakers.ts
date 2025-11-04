// Speakers Configuration
// Update this file to change speaker information

export interface Speaker {
    name: string;
    title: string;
    topic: string;
    image: string; // Emoji or image URL
    featured?: boolean;
}

// Featured speakers (displayed prominently with large cards)
export const featuredSpeakers: Speaker[] = [
    {
        name: "Dr. Sarah Chen",
        title: "Google Developer Expert - Flutter",
        topic: "The Future of Flutter: 2025 and Beyond",
        image: "👩‍💻",
        featured: true
    },
    {
        name: "Mohammed Rahman",
        title: "Senior Flutter Architect, Brain Station 23",
        topic: "Scalable Architecture Patterns",
        image: "👨‍💼",
        featured: true
    },
    {
        name: "Priya Sharma",
        title: "Lead Mobile Developer, DSI",
        topic: "Advanced State Management with Riverpod",
        image: "👩‍🔬",
        featured: true
    }
];

// Additional speakers (displayed in compact grid)
export const otherSpeakers: Speaker[] = [
    {
        name: "Ashik Ahmed",
        title: "Flutter Community Leader",
        topic: "Building Real-time Apps",
        image: "👨‍🎓"
    },
    {
        name: "Nusrat Jahan",
        title: "Mobile App Security Expert",
        topic: "Securing Flutter Applications",
        image: "👩‍💼"
    },
    {
        name: "Tanvir Hasan",
        title: "Firebase Integration Specialist",
        topic: "Cloud-first Flutter Apps",
        image: "👨‍🔧"
    },
    {
        name: "Fatema Khatun",
        title: "UX Designer & Flutter Dev",
        topic: "Design Systems in Flutter",
        image: "👩‍🎨"
    },
    {
        name: "Rakib Islam",
        title: "Performance Optimization Lead",
        topic: "Flutter Performance Deep Dive",
        image: "👨‍💻"
    },
    {
        name: "Sadia Rahman",
        title: "Testing & Quality Expert",
        topic: "Testing Strategies for Flutter",
        image: "👩‍🔬"
    }
];
