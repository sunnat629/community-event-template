import {Coffee, Code, Users, Presentation, Award, Zap, LucideIcon} from "lucide-react";

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
    track: "all" | "technical" | "workshop" | "career" | "community";
    duration: string;
    location: string;
}

export const agendaItems: AgendaItem[] = [
    {
        time: "9:00 AM",
        endTime: "10:00 AM",
        title: "Registration & Breakfast",
        description: "Check-in, networking, and morning refreshments",
        icon: Coffee,
        type: "break",
        track: "all",
        duration: "60 min",
        location: "Main Hall"
    },
    {
        time: "10:00 AM",
        endTime: "11:00 AM",
        title: "Opening Keynote",
        description: "The Future of Flutter: What's Next in 2025",
        speaker: "TBA",
        icon: Presentation,
        type: "keynote",
        track: "all",
        duration: "60 min",
        location: "Main Auditorium"
    },
    {
        time: "11:00 AM",
        endTime: "11:45 AM",
        title: "Advanced State Management with Riverpod",
        description: "Deep dive into scalable state management patterns and best practices",
        speaker: "TBA",
        icon: Code,
        type: "session",
        track: "technical",
        duration: "45 min",
        location: "Tech Track Room"
    },
    {
        time: "11:45 AM",
        endTime: "12:30 PM",
        title: "Building Scalable Flutter Apps with Clean Architecture",
        description: "Learn how to structure large-scale applications for maintainability and testability",
        speaker: "TBA",
        icon: Zap,
        type: "session",
        track: "technical",
        duration: "45 min",
        location: "Tech Track Room"
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
        location: "Dining Area"
    },
    {
        time: "1:30 PM",
        endTime: "2:30 PM",
        title: "Hands-on Workshop: Firebase Integration",
        description: "Build real-time applications with Firebase and Flutter from scratch",
        speaker: "TBA",
        icon: Code,
        type: "workshop",
        track: "workshop",
        duration: "60 min",
        location: "Workshop Lab"
    },
    {
        time: "2:30 PM",
        endTime: "3:30 PM",
        title: "Panel Discussion: Career Growth in Flutter Development",
        description: "Industry experts share insights on building a successful Flutter career",
        speaker: "Expert Panel",
        icon: Users,
        type: "panel",
        track: "career",
        duration: "60 min",
        location: "Panel Stage"
    },
    {
        time: "3:30 PM",
        endTime: "4:15 PM",
        title: "Lightning Talks & Community Showcases",
        description: "Quick insights, community projects, and inspiring stories",
        icon: Zap,
        type: "session",
        track: "community",
        duration: "45 min",
        location: "Main Hall"
    },
    {
        time: "4:15 PM",
        endTime: "5:00 PM",
        title: "Closing Ceremony & Awards",
        description: "Wrap-up, prize distribution, group photo, and final networking",
        icon: Award,
        type: "closing",
        track: "all",
        duration: "45 min",
        location: "Main Auditorium"
    }
];

// Track filter options
export const tracks = [
    {id: "all", label: "All Sessions", color: "primary"},
    {id: "technical", label: "Technical", color: "secondary"},
    {id: "workshop", label: "Workshops", color: "accent"},
    {id: "career", label: "Career", color: "purple"},
    {id: "community", label: "Community", color: "orange"}
];
