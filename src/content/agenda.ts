import {
    Coffee,
    Code,
    Users,
    Presentation,
    Award,
    Zap,
    LucideIcon,
    Briefcase,
    Wrench,
    TrendingUp,
    Lightbulb,
    Target,
    Rocket
} from "lucide-react";

// Event Agenda Configuration
// Update this file to change the event schedule

export interface AgendaItem {
    time: string;
    endTime: string;
    title: string;
    description: string;
    speaker?: string;
    icon: LucideIcon;
    type: "keynote" | "session" | "workshop" | "panel" | "break" | "closing";
    track: "all" | "technical" | "workshop" | "business";
    duration: string;
    location: string;
    day: 1 | 2 | 3; // Add day field for multi-day events
}

export const agendaItems: AgendaItem[] = [
    // ===== DAY 1 =====
    {
        time: "9:00 AM",
        endTime: "10:00 AM",
        title: "Registration & Breakfast",
        description: "Check-in, networking, and morning refreshments",
        icon: Coffee,
        type: "break",
        track: "all",
        duration: "60 min",
        location: "Main Hall",
        day: 1
    },
    {
        time: "10:00 AM",
        endTime: "11:00 AM",
        title: "Opening Keynote: The Future of Flutter",
        description: "Discover what's next in Flutter development and cross-platform innovation",
        speaker: "Dr. Sarah Chen",
        icon: Presentation,
        type: "keynote",
        track: "all",
        duration: "60 min",
        location: "Main Auditorium",
        day: 1
    },
    {
        time: "11:15 AM",
        endTime: "12:15 PM",
        title: "Advanced State Management with Riverpod",
        description: "Deep dive into scalable state management patterns and best practices",
        speaker: "Priya Sharma",
        icon: Code,
        type: "session",
        track: "technical",
        duration: "60 min",
        location: "Tech Track Room A",
        day: 1
    },
    {
        time: "11:15 AM",
        endTime: "12:15 PM",
        title: "Hands-on: Building Your First Flutter App",
        description: "Workshop for beginners - create a complete app from scratch",
        speaker: "Mohammed Rahman",
        icon: Wrench,
        type: "workshop",
        track: "workshop",
        duration: "60 min",
        location: "Workshop Lab B",
        day: 1
    },
    {
        time: "11:15 AM",
        endTime: "12:15 PM",
        title: "Monetization Strategies for Mobile Apps",
        description: "Learn proven methods to generate revenue from your Flutter applications",
        speaker: "Emily Zhang",
        icon: TrendingUp,
        type: "session",
        track: "business",
        duration: "60 min",
        location: "Business Track Room C",
        day: 1
    },
    {
        time: "12:30 PM",
        endTime: "1:30 PM",
        title: "Networking Lunch",
        description: "Enjoy lunch while connecting with fellow developers and industry leaders",
        icon: Coffee,
        type: "break",
        track: "all",
        duration: "60 min",
        location: "Dining Area",
        day: 1
    },
    {
        time: "1:30 PM",
        endTime: "2:30 PM",
        title: "Flutter Performance Optimization",
        description: "Techniques to make your Flutter apps lightning fast",
        speaker: "Alex Johnson",
        icon: Zap,
        type: "session",
        track: "technical",
        duration: "60 min",
        location: "Tech Track Room A",
        day: 1
    },
    {
        time: "1:30 PM",
        endTime: "2:30 PM",
        title: "Firebase Integration Workshop",
        description: "Build real-time applications with Firebase and Flutter",
        speaker: "Tanvir Hasan",
        icon: Wrench,
        type: "workshop",
        track: "workshop",
        duration: "60 min",
        location: "Workshop Lab B",
        day: 1
    },
    {
        time: "1:30 PM",
        endTime: "2:30 PM",
        title: "Building a Flutter Development Agency",
        description: "Business insights from successful agency founders",
        speaker: "Lisa Martinez",
        icon: Briefcase,
        type: "session",
        track: "business",
        duration: "60 min",
        location: "Business Track Room C",
        day: 1
    },
    {
        time: "2:45 PM",
        endTime: "3:45 PM",
        title: "Panel: Career Growth in Flutter Development",
        description: "Industry experts share insights on building a successful Flutter career",
        speaker: "Expert Panel",
        icon: Users,
        type: "panel",
        track: "all",
        duration: "60 min",
        location: "Main Auditorium",
        day: 1
    },
    {
        time: "4:00 PM",
        endTime: "5:00 PM",
        title: "Clean Architecture in Flutter",
        description: "Structure large-scale applications for maintainability",
        speaker: "David Kumar",
        icon: Code,
        type: "session",
        track: "technical",
        duration: "60 min",
        location: "Tech Track Room A",
        day: 1
    },
    {
        time: "4:00 PM",
        endTime: "5:00 PM",
        title: "UI/UX Design Workshop for Flutter",
        description: "Create beautiful, user-friendly interfaces",
        speaker: "Sophie Brown",
        icon: Wrench,
        type: "workshop",
        track: "workshop",
        duration: "60 min",
        location: "Workshop Lab B",
        day: 1
    },
    {
        time: "4:00 PM",
        endTime: "5:00 PM",
        title: "Marketing Your Flutter App",
        description: "Strategies to reach your target audience and grow downloads",
        speaker: "Carlos Rodriguez",
        icon: Target,
        type: "session",
        track: "business",
        duration: "60 min",
        location: "Business Track Room C",
        day: 1
    },

    // ===== DAY 2 =====
    {
        time: "9:00 AM",
        endTime: "10:00 AM",
        title: "Morning Coffee & Networking",
        description: "Start day 2 with coffee and conversations",
        icon: Coffee,
        type: "break",
        track: "all",
        duration: "60 min",
        location: "Main Hall",
        day: 2
    },
    {
        time: "10:00 AM",
        endTime: "11:00 AM",
        title: "Day 2 Keynote: Flutter in Enterprise",
        description: "How Fortune 500 companies are using Flutter at scale",
        speaker: "Jennifer Lee",
        icon: Presentation,
        type: "keynote",
        track: "all",
        duration: "60 min",
        location: "Main Auditorium",
        day: 2
    },
    {
        time: "11:15 AM",
        endTime: "12:15 PM",
        title: "GraphQL & Flutter Best Practices",
        description: "Modern API integration patterns for Flutter apps",
        speaker: "Robert Singh",
        icon: Code,
        type: "session",
        track: "technical",
        duration: "60 min",
        location: "Tech Track Room A",
        day: 2
    },
    {
        time: "11:15 AM",
        endTime: "12:15 PM",
        title: "Testing Workshop: Unit, Widget & Integration",
        description: "Comprehensive testing strategies for Flutter",
        speaker: "Nina Patel",
        icon: Wrench,
        type: "workshop",
        track: "workshop",
        duration: "60 min",
        location: "Workshop Lab B",
        day: 2
    },
    {
        time: "11:15 AM",
        endTime: "12:15 PM",
        title: "Fundraising for Flutter Startups",
        description: "Navigate the investor landscape and secure funding",
        speaker: "Michael Chen",
        icon: TrendingUp,
        type: "session",
        track: "business",
        duration: "60 min",
        location: "Business Track Room C",
        day: 2
    },
    {
        time: "12:30 PM",
        endTime: "1:30 PM",
        title: "Networking Lunch - Day 2",
        description: "Continue building connections over lunch",
        icon: Coffee,
        type: "break",
        track: "all",
        duration: "60 min",
        location: "Dining Area",
        day: 2
    },
    {
        time: "1:30 PM",
        endTime: "2:30 PM",
        title: "Advanced Animation Techniques",
        description: "Create stunning, performant animations in Flutter",
        speaker: "Jessica Wang",
        icon: Zap,
        type: "session",
        track: "technical",
        duration: "60 min",
        location: "Tech Track Room A",
        day: 2
    },
    {
        time: "1:30 PM",
        endTime: "2:30 PM",
        title: "CI/CD Pipeline Workshop",
        description: "Automate your Flutter app deployment process",
        speaker: "Omar Abdullah",
        icon: Wrench,
        type: "workshop",
        track: "workshop",
        duration: "60 min",
        location: "Workshop Lab B",
        day: 2
    },
    {
        time: "1:30 PM",
        endTime: "2:30 PM",
        title: "SaaS Business Models with Flutter",
        description: "Building successful subscription-based products",
        speaker: "Amanda Foster",
        icon: Rocket,
        type: "session",
        track: "business",
        duration: "60 min",
        location: "Business Track Room C",
        day: 2
    },

    // ===== DAY 3 =====
    {
        time: "9:00 AM",
        endTime: "10:00 AM",
        title: "Final Day Breakfast",
        description: "Last day networking and refreshments",
        icon: Coffee,
        type: "break",
        track: "all",
        duration: "60 min",
        location: "Main Hall",
        day: 3
    },
    {
        time: "10:00 AM",
        endTime: "11:00 AM",
        title: "Closing Keynote: The Future is Cross-Platform",
        description: "Vision for the next generation of mobile development",
        speaker: "Dr. James Wilson",
        icon: Presentation,
        type: "keynote",
        track: "all",
        duration: "60 min",
        location: "Main Auditorium",
        day: 3
    },
    {
        time: "11:15 AM",
        endTime: "12:15 PM",
        title: "Flutter Web & Desktop Production Ready",
        description: "Real-world experiences building for multiple platforms",
        speaker: "Aisha Rahman",
        icon: Code,
        type: "session",
        track: "technical",
        duration: "60 min",
        location: "Tech Track Room A",
        day: 3
    },
    {
        time: "11:15 AM",
        endTime: "12:15 PM",
        title: "Accessibility in Flutter Apps",
        description: "Building inclusive applications for everyone",
        speaker: "Marcus Thompson",
        icon: Wrench,
        type: "workshop",
        track: "workshop",
        duration: "60 min",
        location: "Workshop Lab B",
        day: 3
    },
    {
        time: "11:15 AM",
        endTime: "12:15 PM",
        title: "Scaling Your Flutter Business",
        description: "Growth strategies for established Flutter companies",
        speaker: "Patricia O'Connor",
        icon: TrendingUp,
        type: "session",
        track: "business",
        duration: "60 min",
        location: "Business Track Room C",
        day: 3
    },
    {
        time: "12:30 PM",
        endTime: "1:00 PM",
        title: "Lightning Talks & Community Showcases",
        description: "Quick insights, community projects, and inspiring stories",
        speaker: "Ashik Ahmed",
        icon: Lightbulb,
        type: "session",
        track: "all",
        duration: "30 min",
        location: "Main Hall",
        day: 3
    },
    {
        time: "1:00 PM",
        endTime: "2:00 PM",
        title: "Closing Ceremony & Awards",
        description: "Wrap-up, prize distribution, group photo, and final networking",
        icon: Award,
        type: "closing",
        track: "all",
        duration: "60 min",
        location: "Main Auditorium",
        day: 3
    }
];

// Track filter options
export const tracks = [
    {id: "all", label: "All Tracks", color: "primary"},
    {id: "technical", label: "Technical", color: "blue"},
    {id: "workshop", label: "Workshop", color: "green"},
    {id: "business", label: "Business", color: "purple"}
];
