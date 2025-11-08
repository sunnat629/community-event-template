// Site Configuration
// Central location for site-wide properties like event title, tagline, and metadata
// Update these values once to reflect changes across the entire website

export interface SiteConfig {
    // Event branding
    eventTitle: string;
    eventTagline: string;
    eventYear: string;

    // SEO metadata
    siteDescription: string;
    siteKeywords: string;

    // Social media
    ogImageUrl: string;
    twitterHandle: string;

    // Organization
    organizerName: string;
}

export const siteConfig: SiteConfig = {
    // Event branding - Change these to update throughout the site
    eventTitle: "Flutter Guild 2026",
    eventTagline: "Code. Connect. Create.",
    eventYear: "2026",

    // SEO metadata
    siteDescription: "Join Bangladesh's premier Flutter community event. Connect with developers, learn from experts, and build the future together.",
    siteKeywords: "Flutter, Flutter Bangladesh, Flutter Guild, Mobile Development, Dart, Developer Conference, Tech Community",

    // Social media
    ogImageUrl: "/android-chrome-512x512.png",
    twitterHandle: "@FlutterGuild",

    // Organization
    organizerName: "Sunnat629 Labs"
};

// Helper functions for common combinations
export const getSiteTitle = () => `${siteConfig.eventTitle} — ${siteConfig.eventTagline}`;
export const getCopyrightText = (year: number = new Date().getFullYear()) =>
    `© ${year} ${siteConfig.eventTitle}. All rights reserved.`;
