import {Building2, Award, Star, Users, LucideIcon, Sparkles, Globe} from "lucide-react";

// ============================================================================
// PARTNERS & SPONSORS CONFIGURATION
// ============================================================================
//
// 📝 HOW TO ADD A NEW SPONSOR:
//
// 1. Add a new object to the `partners` array below
// 2. Required fields:
//    - name: Full company name (e.g., "Brain Station 23", "DSI")
//    - slug: URL-friendly identifier - use generateSlug(name) or create manually
//    - role: What they're sponsoring (e.g., "Gold Sponsor", "Venue Partner")
//    - tier: 'platinum' | 'gold' | 'silver' | 'bronze' | 'community' | 'media'
//    - shortDescription: 1-2 sentence summary (for cards)
//    - description: Full description (for detail page)
//    - logo: Image URL (required - use high-quality square/rectangular logo)
//    - icon: Fallback Lucide icon (Building2, Award, Star, Users, etc.)
//
// 3. Optional fields:
//    - website: Company website URL
//    - facebook: Facebook page URL
//    - linkedin: LinkedIn company URL
//    - benefits: Array of benefit strings (for premium sponsors)
//
// 4. The detail page will automatically work at: /sponsors/{slug}
//
// 💡 EXAMPLE:
// {
//   name: "New Sponsor Inc",
//   slug: generateSlug("New Sponsor Inc"), // or "new-sponsor-inc"
//   role: "Gold Sponsor",
//   tier: "gold",
//   shortDescription: "Leading tech company in Bangladesh",
//   description: "Detailed description about the sponsor...",
//   logo: "https://example.com/logo.png",
//   icon: Building2,
//   website: "https://newsponsor.com",
//   benefits: ["Workshop Support", "Brand Visibility"]
// }
//
// ============================================================================

/**
 * Helper function to generate URL-friendly slug from sponsor name
 * Usage: generateSlug("Brain Station 23") => "brain-station-23"
 */
export const generateSlug = (name: string): string => {
    return name
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-')      // Replace spaces with hyphens
        .replace(/-+/g, '-');      // Replace multiple hyphens with single hyphen
};

export interface Partner {
    name: string;
    slug: string; // URL-friendly identifier for routing
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
    // ============================================================================
    // 🚀 ADD YOUR REAL SPONSORS HERE
    // ============================================================================
    // Copy the example below and fill in with real sponsor data:
    //
    // {
    //   name: "Company Name",
    //   slug: generateSlug("Company Name"),
    //   role: "Platinum Sponsor",
    //   tier: "platinum",
    //   shortDescription: "Short 1-2 sentence description",
    //   description: "Full detailed description...",
    //   logo: "https://yourcdn.com/logo.png",
    //   icon: Building2,
    //   website: "https://company.com",
    //   benefits: ["Benefit 1", "Benefit 2"]
    // },
    //
    // ⚠️ IMPORTANT: Always add REAL sponsors only - no mock data!
    // ============================================================================
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
