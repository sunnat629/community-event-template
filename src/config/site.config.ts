/**
 * Site Configuration
 *
 * Global site settings including metadata, SEO, social links, and analytics.
 * Update these values for your event.
 */

export interface SiteConfig {
    // Site metadata
    name: string;
    description: string;
    url: string;

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
    // Site metadata
    name: 'Flutter Guild Connect 2025',
    description: 'The premier Flutter community event in Bangladesh',
    url: 'https://flutter-guild.dev', // Update with your actual domain

    // SEO Configuration
    seo: {
        title: 'Flutter Guild Connect 2025 | Premier Flutter Event in Bangladesh',
        description: 'Join Flutter developers, Google experts, and industry leaders for a day of learning, networking, and community building at Flutter Guild Connect 2025.',
        keywords: [
            'Flutter',
            'FlutterGuild',
            'Flutter Bangladesh',
            'Flutter Conference',
            'Mobile Development',
            'Cross-platform',
            'Dart',
            'Google Flutter',
            'Tech Event',
            'Developer Conference',
        ],
        ogImage: '/og-image.jpg', // Create this image (1200x630px)
        twitterCard: 'summary_large_image',
        twitterCreator: '@flutterguild', // Update with your Twitter handle
    },

    // Social media links
    social: {
        twitter: 'https://twitter.com/flutterguild',
        facebook: 'https://facebook.com/flutterguild',
        linkedin: 'https://linkedin.com/company/flutter-guild',
        instagram: 'https://instagram.com/flutterguild',
        youtube: 'https://youtube.com/@flutterguild',
        github: 'https://github.com/flutter-guild',
        discord: 'https://discord.gg/flutterguild',
    },

    // Analytics (optional - add your tracking IDs)
    analytics: {
        // googleAnalyticsId: 'G-XXXXXXXXXX',
        // facebookPixelId: 'XXXXXXXXXX',
        // plausibleDomain: 'flutter-guild.dev',
    },

    // Contact information
    contact: {
        email: 'hello@flutter-guild.dev',
        phone: '+880 1XXX-XXXXXX', // Update with actual contact
    },

    // Feature flags
    features: {
        newsletter: true,
        ticketing: true,
        blog: false,
        sponsors: true,
    },
};
