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
    track: "all" | "technical" | "workshop";
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
        title: "Opening Keynote",
        description: "Welcome address and event overview",
        speaker: "Mohi Us Sunnat",
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
        title: "Session 1",
        description: "Technical talk and demonstration",
        speaker: "Mohi Us Sunnat",
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
        title: "Workshop 1",
        description: "Hands-on workshop and practical exercises",
        speaker: "Mohi Us Sunnat",
        icon: Wrench,
        type: "workshop",
        track: "workshop",
        duration: "60 min",
        location: "Workshop Lab B",
        day: 1
    },
    {
        time: "12:30 PM",
        endTime: "1:30 PM",
        title: "Networking Lunch",
        description: "Enjoy lunch while connecting with fellow attendees",
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
        title: "Session 2",
        description: "Advanced technical topics and best practices",
        speaker: "Mohi Us Sunnat",
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
        title: "Workshop 2",
        description: "Interactive workshop session",
        speaker: "Mohi Us Sunnat",
        icon: Wrench,
        type: "workshop",
        track: "workshop",
        duration: "60 min",
        location: "Workshop Lab B",
        day: 1
    },
    {
        time: "2:45 PM",
        endTime: "3:45 PM",
        title: "Panel Discussion",
        description: "Q&A and discussion with attendees",
        speaker: "Mohi Us Sunnat",
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
        title: "Session 3",
        description: "Deep dive into specific topics",
        speaker: "Mohi Us Sunnat",
        icon: Code,
        type: "session",
        track: "technical",
        duration: "60 min",
        location: "Tech Track Room A",
        day: 1
    },
    {
        time: "5:00 PM",
        endTime: "6:00 PM",
        title: "Closing Session - Day 1",
        description: "Day wrap-up and networking",
        speaker: "Mohi Us Sunnat",
        icon: Award,
        type: "closing",
        track: "all",
        duration: "60 min",
        location: "Main Auditorium",
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
        title: "Keynote 2",
        description: "Welcome address and event overview",
        speaker: "Mohi Us Sunnat",
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
        title: "Session 4",
        description: "Technical talk and demonstration",
        speaker: "Mohi Us Sunnat",
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
        title: "Workshop 3",
        description: "Hands-on workshop and practical exercises",
        speaker: "Mohi Us Sunnat",
        icon: Wrench,
        type: "workshop",
        track: "workshop",
        duration: "60 min",
        location: "Workshop Lab B",
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
        title: "Session 5",
        description: "Advanced technical topics and best practices",
        speaker: "Mohi Us Sunnat",
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
        title: "Workshop 4",
        description: "Interactive workshop session",
        speaker: "Mohi Us Sunnat",
        icon: Wrench,
        type: "workshop",
        track: "workshop",
        duration: "60 min",
        location: "Workshop Lab B",
        day: 2
    },
    {
        time: "2:45 PM",
        endTime: "3:45 PM",
        title: "Panel Discussion 2",
        description: "Q&A and discussion with attendees",
        speaker: "Mohi Us Sunnat",
        icon: Users,
        type: "panel",
        track: "all",
        duration: "60 min",
        location: "Main Auditorium",
        day: 2
    },
    {
        time: "4:00 PM",
        endTime: "5:00 PM",
        title: "Session 6",
        description: "Deep dive into specific topics",
        speaker: "Mohi Us Sunnat",
        icon: Code,
        type: "session",
        track: "technical",
        duration: "60 min",
        location: "Tech Track Room A",
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
        title: "Closing Keynote",
        description: "Vision for the next generation of mobile development",
        speaker: "Mohi Us Sunnat",
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
        title: "Session 7",
        description: "Real-world experiences building for multiple platforms",
        speaker: "Mohi Us Sunnat",
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
        title: "Workshop 5",
        description: "Building inclusive applications for everyone",
        speaker: "Mohi Us Sunnat",
        icon: Wrench,
        type: "workshop",
        track: "workshop",
        duration: "60 min",
        location: "Workshop Lab B",
        day: 3
    },
    {
        time: "12:30 PM",
        endTime: "1:00 PM",
        title: "Lightning Talks & Community Showcases",
        description: "Quick insights, community projects, and inspiring stories",
        speaker: "Mohi Us Sunnat",
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
        speaker: "Mohi Us Sunnat",
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
    {id: "workshop", label: "Workshop", color: "green"}
];
