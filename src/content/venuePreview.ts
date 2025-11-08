// Venue Preview Configuration for Pro Mode Home Page
// Update this file to customize the venue preview card

export interface VenuePreview {
    image: string;              // Background image URL for the venue
    badge: string;              // Badge text (e.g., "Live Event")
    title: string;              // Main title
    venueName: string;          // Venue name
    address: {
        line1: string;          // Address line 1
        line2: string;          // Address line 2
        country: string;        // Country
    };
    quickInfo: {
        time: string;           // Event time
        capacity: string;       // Venue capacity
    };
    ctaText: string;            // Call-to-action button text
    ctaLink: string;            // CTA button link
}

export const venuePreview: VenuePreview = {
    // Venue background image - Use a high-quality venue photo
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070&auto=format&fit=crop",

    // Badge text
    badge: "Live Event",

    // Main heading
    title: "Join Us In Person",

    // Venue details
    venueName: "To Be Announced",
    address: {
        line1: "Dhaka",
        line2: "Location details coming soon",
        country: "Bangladesh"
    },

    // Quick information
    quickInfo: {
        time: "9 AM - 6 PM",
        capacity: "TBA"
    },

    // Call-to-action
    ctaText: "View Venue Details & Map",
    ctaLink: "/venue"
};
