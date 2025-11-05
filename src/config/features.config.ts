/**
 * Features Configuration
 *
 * Control which sections and features are enabled/disabled.
 * This allows you to customize the site without modifying code.
 */

export interface FeaturesConfig {
    // Section visibility
    sections: {
        hero: boolean;
        about: boolean;
        speakers: boolean;
        agenda: boolean;
        sponsors: boolean;
        partners: boolean;
        venue: boolean;
        eventDetails: boolean;
        organizers: boolean;
        faq: boolean;
        newsletter: boolean;
        footer: boolean;
    };

    // Component features
    components: {
        // Navigation
        stickyNav: boolean;
        mobileMenu: boolean;
        themeToggle: boolean; // Show theme switcher (for development)

        // Interactions
        smoothScroll: boolean;
        animations: boolean;

        // Forms
        newsletterForm: boolean;
        contactForm: boolean;

        // Social
        socialShare: boolean;
        socialLinks: boolean;
    };

    // External integrations
    integrations: {
        googleMaps: boolean;
        emailProvider: boolean;
        ticketingPlatform: boolean;
        liveChat: boolean;
    };
}

export const featuresConfig: FeaturesConfig = {
    // Section visibility
    sections: {
        hero: true,
        about: true,
        speakers: true,
        agenda: true,
        sponsors: true,
        partners: true,
        venue: true,
        eventDetails: true,
        organizers: true,
        faq: true,
        newsletter: true,
        footer: true,
    },

    // Component features
    components: {
        // Navigation
        stickyNav: true,
        mobileMenu: true,
        themeToggle: false, // Set to true during development to test themes

        // Interactions
        smoothScroll: true,
        animations: true,

        // Forms
        newsletterForm: true,
        contactForm: false, // Enable if you add a contact form

        // Social
        socialShare: true,
        socialLinks: true,
    },

    // External integrations
    integrations: {
        googleMaps: true,
        emailProvider: false, // Enable when you set up email service
        ticketingPlatform: false, // Enable when tickets are available
        liveChat: false, // Enable if you add live chat support
    },
};

/**
 * Check if a section is enabled
 */
export function isSectionEnabled(section: keyof FeaturesConfig['sections']): boolean {
    return featuresConfig.sections[section];
}

/**
 * Check if a component feature is enabled
 */
export function isComponentEnabled(component: keyof FeaturesConfig['components']): boolean {
    return featuresConfig.components[component];
}

/**
 * Check if an integration is enabled
 */
export function isIntegrationEnabled(integration: keyof FeaturesConfig['integrations']): boolean {
    return featuresConfig.integrations[integration];
}
