import {Building2, Award, Star, Users, LucideIcon, Sparkles, Globe} from "lucide-react";

// Partners & Sponsors Configuration
// Update this file to change partner and sponsor information

export interface Partner {
    name: string;
    role: string;
    tier: 'platinum' | 'gold' | 'silver' | 'bronze' | 'community' | 'media';
    shortDescription: string;
    description: string;
    logo: string; // URL to logo image (required)
    icon: LucideIcon; // Fallback icon
    website?: string;
    facebook?: string;
    linkedin?: string;
    benefits?: string[];
}

export const partners: Partner[] = [
    // Platinum Tier - Largest cards
    {
        name: "Brain Station 23",
        role: "Venue Partner",
        tier: "platinum",
        shortDescription: "Leading software and IT solutions company providing world-class technology services",
        description: "Leading software and IT solutions company providing world-class technology services. Proud venue partner for Flutter Guild Connect 2025.",
        logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=400&fit=crop",
        icon: Building2,
        website: "https://brainstation-23.com",
        facebook: "https://facebook.com/brainstation23",
        linkedin: "https://linkedin.com/company/brainstation23",
        benefits: [
            "Venue Hosting",
            "Technical Infrastructure",
            "Recruitment Opportunities",
            "Brand Visibility"
        ]
    },
    {
        name: "DSI",
        role: "Platinum Sponsor",
        tier: "platinum",
        shortDescription: "Leading digital innovation company empowering businesses with cutting-edge technology",
        description: "Dohatec New Media is a leading digital innovation company in Bangladesh, empowering businesses with cutting-edge technology solutions.",
        logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=400&fit=crop",
        icon: Award,
        website: "https://dsinnovators.com",
        facebook: "https://facebook.com/dsinnovators",
        linkedin: "https://linkedin.com/company/dsinnovators",
        benefits: [
            "Main Stage Sponsor",
            "Workshop Support",
            "Swag & Prizes",
            "Premium Booth"
        ]
    },

    // Gold Tier - Medium cards
    {
        name: "Cheq",
        role: "Gold Sponsor",
        tier: "gold",
        shortDescription: "Innovative fintech solution revolutionizing digital payments in Bangladesh",
        description: "Innovative fintech solution revolutionizing digital payments in Bangladesh.",
        logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=400&fit=crop",
        icon: Star,
        website: "https://cheq.com.bd",
        facebook: "https://facebook.com/cheqbd",
        linkedin: "https://linkedin.com/company/cheq",
        benefits: [
            "Coffee Break Sponsor",
            "Networking Session",
            "Standard Booth"
        ]
    },
    {
        name: "Tech Valley",
        role: "Gold Sponsor",
        tier: "gold",
        shortDescription: "Technology park fostering innovation and entrepreneurship in tech ecosystem",
        description: "Technology park fostering innovation and entrepreneurship in the tech ecosystem.",
        logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop",
        icon: Star,
        website: "https://techvalley.com.bd",
        facebook: "https://facebook.com/techvalley",
        linkedin: "https://linkedin.com/company/tech-valley",
        benefits: [
            "Lunch Sponsor",
            "Networking Support",
            "Brand Presence"
        ]
    },

    // Silver Tier
    {
        name: "CodeCraft Studio",
        role: "Silver Sponsor",
        tier: "silver",
        shortDescription: "Creative software development studio specializing in mobile applications",
        description: "Creative software development studio specializing in mobile applications.",
        logo: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&h=400&fit=crop",
        icon: Sparkles,
        website: "https://codecraft.studio",
        linkedin: "https://linkedin.com/company/codecraft-studio"
    },
    {
        name: "DevHub",
        role: "Silver Sponsor",
        tier: "silver",
        shortDescription: "Community-driven platform connecting developers across Bangladesh",
        description: "Community-driven platform connecting developers across Bangladesh.",
        logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop",
        icon: Users,
        website: "https://devhub.com.bd",
        facebook: "https://facebook.com/devhub"
    },

    // Community Partners
    {
        name: "Flutter Bangladesh",
        role: "Community Partner",
        tier: "community",
        shortDescription: "Bangladesh's largest Flutter community connecting thousands of developers",
        description: "Bangladesh's largest Flutter community, connecting thousands of developers across the country.",
        logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop",
        icon: Users,
        website: "https://flutter.com.bd",
        facebook: "https://facebook.com/flutterbangladesh",
        linkedin: "https://linkedin.com/company/flutter-bangladesh"
    },
    {
        name: "Dhaka Dev Meetup",
        role: "Community Partner",
        tier: "community",
        shortDescription: "Monthly meetup bringing together developers, designers, and tech enthusiasts",
        description: "Monthly meetup bringing together developers, designers, and tech enthusiasts.",
        logo: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=400&fit=crop",
        icon: Users,
        website: "https://dhakadev.com",
        facebook: "https://facebook.com/dhakadev"
    },
    {
        name: "Tech Community BD",
        role: "Community Partner",
        tier: "community",
        shortDescription: "Largest tech community connecting thousands of professionals nationwide",
        description: "Largest tech community in Bangladesh connecting thousands of professionals.",
        logo: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=400&fit=crop",
        icon: Users,
        website: "https://techcommunity.bd",
        linkedin: "https://linkedin.com/company/tech-community-bd"
    },

    // Media Partners
    {
        name: "Tech Tribune",
        role: "Media Partner",
        tier: "media",
        shortDescription: "Leading technology news and media platform covering latest in tech",
        description: "Leading technology news and media platform covering the latest in tech.",
        logo: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=400&fit=crop",
        icon: Globe,
        website: "https://techtribune.com.bd",
        facebook: "https://facebook.com/techtribune"
    },
    {
        name: "Digital Times",
        role: "Media Partner",
        tier: "media",
        shortDescription: "Digital media outlet focusing on technology and innovation news",
        description: "Digital media outlet focusing on technology and innovation news.",
        logo: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=400&h=400&fit=crop",
        icon: Globe,
        website: "https://digitaltimes.bd",
        facebook: "https://facebook.com/digitaltimes"
    }
];

// Get partners by tier
export const getPartnersByTier = (tier: Partner['tier']) => {
    return partners.filter(p => p.tier === tier);
};

// Get tier color scheme
export const getTierColors = (tier: Partner['tier']) => {
    switch (tier) {
        case 'platinum':
            return {
                gradient: 'from-slate-300 to-slate-100',
                border: 'border-slate-400',
                glow: 'shadow-[0_0_40px_rgba(148,163,184,0.4)]',
                badge: 'bg-gradient-to-r from-slate-400 to-slate-300 text-white'
            };
        case 'gold':
            return {
                gradient: 'from-yellow-400 to-yellow-200',
                border: 'border-yellow-500',
                glow: 'shadow-[0_0_30px_rgba(234,179,8,0.4)]',
                badge: 'bg-gradient-to-r from-yellow-500 to-yellow-400 text-white'
            };
        case 'silver':
            return {
                gradient: 'from-gray-300 to-gray-100',
                border: 'border-gray-400',
                glow: 'shadow-[0_0_20px_rgba(156,163,175,0.3)]',
                badge: 'bg-gradient-to-r from-gray-400 to-gray-300 text-white'
            };
        case 'bronze':
            return {
                gradient: 'from-orange-400 to-orange-200',
                border: 'border-orange-500',
                glow: 'shadow-[0_0_20px_rgba(249,115,22,0.3)]',
                badge: 'bg-gradient-to-r from-orange-500 to-orange-400 text-white'
            };
        case 'community':
            return {
                gradient: 'from-primary to-secondary',
                border: 'border-primary',
                glow: 'shadow-[0_0_20px_rgba(2,86,155,0.3)]',
                badge: 'bg-gradient-hero text-white'
            };
        case 'media':
            return {
                gradient: 'from-purple-400 to-purple-200',
                border: 'border-purple-500',
                glow: 'shadow-[0_0_20px_rgba(168,85,247,0.3)]',
                badge: 'bg-gradient-to-r from-purple-500 to-purple-400 text-white'
            };
    }
};
