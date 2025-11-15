/**
 * Site Configuration
 *
 * Global site settings including metadata, SEO, social links, and analytics.
 * Update these values for your event.
 */

// Event architecture mode
export type EventMode = 'lite' | 'pro';

export interface EventModeConfig {
    /**
     * Event mode determines the architecture:
     * - 'lite': Single-page architecture for small events (3-6 hours, <10 speakers)
     * - 'pro': Multi-route architecture for large conferences (multi-day, 20+ speakers)
     */
    mode: EventMode;

    // Event scale indicators (helps auto-detect recommended mode)
    scale: {
        duration: 'single-day' | 'multi-day'; // Event duration
        durationHours?: number; // Optional: specific hours (e.g., 6 for lite, 24+ for pro)
        speakerCount: number; // Number of speakers
        sessionCount: number; // Number of sessions
        parallelTracks: number; // Number of parallel tracks (1 for lite, 2+ for pro)
        expectedAttendees: number; // Expected attendee count
    };

    // Mode-specific features
    features: {
        // Pro-only features
        dedicatedSpeakerPages: boolean; // Individual speaker profile pages
        sessionDetailPages: boolean; // Individual session pages
        personalizedAgenda: boolean; // User can create custom schedule
        liveEventDashboard: boolean; // Live updates during event
        attendeeNetworking: boolean; // Networking features
        multiDaySchedule: boolean; // Schedule spanning multiple days
    };
}

export interface SiteConfig {
    // Site metadata
    name: string;
    description: string;
    url: string;

    // Event mode configuration
    eventMode: EventModeConfig;

    // SEO
    seo: {
        title: string;
        description: string;
        keywords: string[];
        ogImage?: string;
        twitterCard?: 'summary' | 'summary_large_image';
        twitterCreator?: string;
    };

    // Social media links
    social?: {
        twitter?: string;
        facebook?: string;
        linkedin?: string;
        instagram?: string;
        youtube?: string;
        github?: string;
        discord?: string;
        slack?: string;
    };

    // Analytics
    analytics?: {
        googleAnalyticsId?: string;
        facebookPixelId?: string;
        plausibleDomain?: string;
    };

    // Contact
    contact?: {
        email?: string;
        phone?: string;
    };

    // Features
    features: {
        newsletter: boolean;
        ticketing: boolean;
        blog: boolean;
        sponsors: boolean;
    };
}

export const siteConfig: SiteConfig = {
    // Event Mode Configuration
    eventMode: {
        mode: 'lite', // Change to 'pro' for large conferences
        scale: {
            duration: 'single-day',
            durationHours: 6,
            speakerCount: 9, // Current: 3 featured + 6 other
            sessionCount: 9,
            parallelTracks: 1,
            expectedAttendees: 150,
        },
        features: {
            dedicatedSpeakerPages: false, // Enable for 'pro' mode
            sessionDetailPages: false,
            personalizedAgenda: false,
            liveEventDashboard: false,
            attendeeNetworking: false,
            multiDaySchedule: false,
        },
    },

    // Site metadata
    name: 'TechCommunity Event 2026',
    description: 'The premier technology community event in your region',
    url: 'https://techcommunity-event.com', // Update with your actual domain

    // SEO Configuration
    seo: {
        title: 'TechCommunity Event 2026 | Premier Tech Event',
        description: 'Join developers, experts, and industry leaders for a day of learning, networking, and community building at TechCommunity Event 2026.',
        keywords: [
            'Tech',
            'Technology',
            'TechCommunity',
            'Tech Conference',
            'Software Development',
            'Innovation',
            'Web Development',
            'Mobile Development',
            'Tech Event',
            'Developer Conference',
        ],
        ogImage: '/og-image.jpg', // Create this image (1200x630px)
        twitterCard: 'summary_large_image',
        twitterCreator: '@techcommunity', // Update with your Twitter handle
    },

    // Social media links
    social: {
        twitter: 'https://twitter.com/techcommunity',
        facebook: 'https://facebook.com/techcommunity',
        linkedin: 'https://linkedin.com/company/techcommunity',
        instagram: 'https://instagram.com/techcommunity',
        youtube: 'https://youtube.com/@techcommunity',
        github: 'https://github.com/techcommunity',
        discord: 'https://discord.gg/techcommunity',
    },

    // Analytics (optional - add your tracking IDs)
    analytics: {
        // googleAnalyticsId: 'G-XXXXXXXXXX',
        // facebookPixelId: 'XXXXXXXXXX',
        // plausibleDomain: 'techcommunity-event.com',
    },

    // Contact information
    contact: {
        email: 'hello@techcommunity-event.com',
        phone: '+1 555-123-4567', // Update with actual contact
    },

    // Feature flags
    features: {
        newsletter: true,
        ticketing: true,
        blog: false,
        sponsors: true,
    },
};