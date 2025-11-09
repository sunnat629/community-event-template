// Site Configuration
// Central location for site-wide properties like event title, tagline, and metadata
// Update these values once to reflect changes across the entire website

export interface SiteConfig {
    // Event branding
    eventTitle: string;
    eventTagline: string;
    eventYear: string;
    eventType: 'flutter' | 'android' | 'ios' | 'ai' | 'qa' | 'unity' | 'cloud' | 'generic';

    // SEO metadata
    siteDescription: string;
    siteKeywords: string;

    // Social media
    ogImageUrl: string;
    twitterHandle: string;

    // Organization
    organizerName: string;
}

// Theme-based configurations
export const themeConfigs = {
    flutter: {
        eventTitle: "Flutter Guild 2026",
        eventTagline: "Code. Connect. Create.",
        siteDescription: "Join Bangladesh's premier Flutter community event. Connect with developers, learn from experts, and build the future together.",
        siteKeywords: "Flutter, Flutter Bangladesh, Flutter Guild, Mobile Development, Dart, Developer Conference, Tech Community",
        twitterHandle: "@FlutterGuild",
    },
    android: {
        eventTitle: "Android Summit 2026",
        eventTagline: "Build. Connect. Grow.",
        siteDescription: "Join Bangladesh's premier Android community event. Connect with Kotlin developers, learn from Android experts, and build the future together.",
        siteKeywords: "Android, Kotlin, Android Bangladesh, Mobile Development, Android Studio, Developer Conference, Tech Community",
        twitterHandle: "@AndroidSummit",
    },
    ios: {
        eventTitle: "iOS Conference 2026",
        eventTagline: "Design. Develop. Delight.",
        siteDescription: "Join Bangladesh's premier iOS community event. Connect with Swift developers, learn from Apple experts, and build the future together.",
        siteKeywords: "iOS, Swift, SwiftUI, iOS Bangladesh, Mobile Development, Xcode, Developer Conference, Tech Community",
        twitterHandle: "@iOSConference",
    },
    ai: {
        eventTitle: "AI & ML Summit 2026",
        eventTagline: "Learn. Innovate. Transform.",
        siteDescription: "Join Bangladesh's premier AI & Machine Learning event. Connect with data scientists, learn from ML experts, and build the future together.",
        siteKeywords: "AI, Machine Learning, Data Science, AI Bangladesh, ML Conference, Deep Learning, Tech Community",
        twitterHandle: "@AIMLSummit",
    },
    qa: {
        eventTitle: "QA & Testing Summit 2026",
        eventTagline: "Test. Verify. Deliver.",
        siteDescription: "Join Bangladesh's premier QA & Testing event. Connect with testing professionals, learn from QA experts, and ensure quality together.",
        siteKeywords: "QA, Testing, Quality Assurance, Test Automation, QA Bangladesh, Testing Conference, Tech Community",
        twitterHandle: "@QASummit",
    },
    unity: {
        eventTitle: "Game Dev Summit 2026",
        eventTagline: "Create. Play. Inspire.",
        siteDescription: "Join Bangladesh's premier game development event. Connect with game developers, learn from Unity experts, and build games together.",
        siteKeywords: "Game Development, Unity, Game Design, Unity Bangladesh, Gaming Conference, Tech Community",
        twitterHandle: "@GameDevSummit",
    },
    cloud: {
        eventTitle: "Cloud & DevOps Summit 2026",
        eventTagline: "Deploy. Scale. Optimize.",
        siteDescription: "Join Bangladesh's premier Cloud & DevOps event. Connect with cloud engineers, learn from DevOps experts, and build scalable systems together.",
        siteKeywords: "Cloud Computing, DevOps, AWS, Azure, GCP, Cloud Bangladesh, DevOps Conference, Tech Community",
        twitterHandle: "@CloudSummit",
    },
    generic: {
        eventTitle: "Tech Community Event 2026",
        eventTagline: "Code. Connect. Create.",
        siteDescription: "Join Bangladesh's premier tech community event. Connect with developers, learn from experts, and build the future together.",
        siteKeywords: "Technology, Software Development, Tech Bangladesh, Developer Conference, Tech Community",
        twitterHandle: "@TechEvent",
    }
};

// Get current theme from localStorage or default to flutter
const getCurrentTheme = (): keyof typeof themeConfigs => {
    if (typeof window === 'undefined') return 'flutter'; // SSR safety
    const androidTheme = localStorage.getItem('androidTheme') === 'true';
    return androidTheme ? 'android' : 'flutter';
};

// Get configuration based on current theme
export const getThemeConfig = () => {
    const currentTheme = getCurrentTheme();
    return themeConfigs[currentTheme];
};

export const siteConfig: SiteConfig = {
    // Event branding - dynamically loaded based on theme
    ...getThemeConfig(),
    eventYear: "2026",
    eventType: getCurrentTheme(),

    // Social media
    ogImageUrl: "/android-chrome-512x512.png",

    // Organization
    organizerName: "Sunnat629 Labs"
};

// Helper functions for common combinations
export const getSiteTitle = () => {
    const config = getThemeConfig();
    return `${config.eventTitle} — ${config.eventTagline}`;
};

export const getCopyrightText = (year: number = new Date().getFullYear()) => {
    const config = getThemeConfig();
    return `© ${year} ${config.eventTitle}. All rights reserved.`;
};
