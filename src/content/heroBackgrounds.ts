// Hero Background Images Configuration
// Centralized configuration for hero section background images across all pages
// Update these URLs to customize the background images for each page

export interface HeroBackground {
    image: string;              // Background image URL
    overlayOpacity?: number;    // Gradient overlay opacity (0-100), default: 88
    blurAmount?: number;        // Backdrop blur in pixels (0-10), default: 1
}

export interface HeroBackgrounds {
    home: HeroBackground;
    speakers: HeroBackground;
    agenda: HeroBackground;
    sponsors: HeroBackground;
    venue: HeroBackground;
    team: HeroBackground;
}

export const heroBackgrounds: HeroBackgrounds = {
    // Home page hero - Main event visual
    home: {
        image: "/hero-bg.jpg", // Default home hero background
        overlayOpacity: 88,    // Consistent with other pages
        blurAmount: 1
    },

    // Speakers page hero - Conference/presentation theme (same as agenda style)
    speakers: {
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop", // Conference audience
        overlayOpacity: 90,    // Slightly higher for text readability
        blurAmount: 1
    },

    // Agenda/Schedule page hero - Time/planning theme (REFERENCE STYLE)
    agenda: {
        image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2073&auto=format&fit=crop", // Modern workspace/planning
        overlayOpacity: 90,    // Perfect balance - readable + image visible
        blurAmount: 1
    },

    // Sponsors page hero - Partnership/business theme (match agenda style)
    sponsors: {
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop", // Handshake/partnership
        overlayOpacity: 90,    // Consistent overlay for professionalism
        blurAmount: 1
    },

    // Venue page hero - Location/architecture theme (match agenda style)
    venue: {
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop", // Modern office building
        overlayOpacity: 75,    // Lower opacity to showcase the venue interior
        blurAmount: 0.5         // Minimal blur to see venue details
    },

    // Team page hero - People/collaboration theme (match agenda style)
    team: {
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop", // Team collaboration
        overlayOpacity: 90,    // Consistent with other pages
        blurAmount: 1
    }
};

/**
 * Helper function to get background styles for a page
 * @param page - Page name (home, speakers, agenda, etc.)
 * @returns CSS style object for background
 */
export const getHeroBackgroundStyles = (page: keyof HeroBackgrounds) => {
    const bg = heroBackgrounds[page];
    return {
        backgroundImage: `url(${bg.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };
};

/**
 * Helper function to get overlay class for a page
 * @param page - Page name
 * @returns Tailwind class string for gradient overlay
 */
export const getHeroOverlayClass = (page: keyof HeroBackgrounds) => {
    const bg = heroBackgrounds[page];
    const opacity = bg.overlayOpacity || 88;
    return `bg-gradient-to-br from-primary/${opacity} via-primary/${Math.max(opacity - 10, 70)} to-secondary/${Math.max(opacity - 5, 75)}`;
};

/**
 * Helper function to get blur class for a page
 * @param page - Page name
 * @returns Tailwind class string for backdrop blur
 */
export const getHeroBlurClass = (page: keyof HeroBackgrounds) => {
    const bg = heroBackgrounds[page];
    const blur = bg.blurAmount || 1;
    return `backdrop-blur-[${blur}px]`;
};
