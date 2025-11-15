// Event Details Configuration
// Update this file to change event details throughout the site

export interface EventDetails {
    date: {
        display: string;
        announcement: string;
        details: string;
    };
    venue: {
        city: string;
        location: string;
        details: string;
        address: string;
        mapUrl: string;
        coordinates: {
            lat: number;
            lng: number;
        };
        capacity: string;
        format: string;
        price: string;
        venueDetails: {
            name: string;
            fullAddress: string;
            landmark: string;
            directions: string[];
            parking: string;
            accessibility: string[];
            facilities: string[];
            contact: {
                phone?: string;
                email?: string;
            };
        };
    };
    format: {
        type: string;
        description: string;
    };
    audience: {
        primary: string;
        description: string;
    };
    included: {
        title: string;
        description: string;
    }[];
}

export const eventDetails: EventDetails = {
    date: {
        display: "Coming Soon 2026",
        announcement: "To be announced soon",
        details: "Stay tuned for the official date announcement"
    },
    venue: {
        city: "Tech City, Innovation District",
        location: "Location to be announced",
        details: "",
        address: "Tech City, Innovation District",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.0643419245!2d90.25487654999999!3d23.780753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd",
        coordinates: {
            lat: 23.8103,
            lng: 90.4125
        },
        capacity: "TBA",
        format: "In-Person Event",
        price: "TBA",
        venueDetails: {
            name: "To Be Announced",
            fullAddress: "Tech City, Innovation District - Exact location coming soon",
            landmark: "Location details will be announced soon",
            directions: [
                "Venue location will be shared once confirmed",
                "Detailed directions will be provided closer to the event",
                "We'll share transportation options when venue is finalized",
                "Stay tuned for venue announcement"
            ],
            parking: "Parking information will be shared once venue is confirmed",
            accessibility: [
                "We're committed to ensuring accessibility for all attendees",
                "Specific accessibility features will be confirmed with venue selection",
                "Please contact us with any specific accessibility requirements",
                "We'll accommodate all reasonable accessibility needs"
            ],
            facilities: [
                "High-speed WiFi",
                "Air-conditioned halls",
                "Prayer facilities",
                "Refreshment areas",
                "Professional AV equipment",
                "Comfortable seating"
            ],
            contact: {
                email: "info@techcommunity-event.com"
            }
        }
    },
    format: {
        type: "Full-day in-person event",
        description: "Keynotes, technical sessions, workshops, and networking"
    },
    audience: {
        primary: "Developers, engineers, and tech enthusiasts",
        description: "All skill levels welcome—from beginners to experts"
    },
    included: [
        {
            title: "High-Speed WiFi",
            description: "Stay connected throughout the event"
        },
        {
            title: "Refreshments",
            description: "Coffee, tea, and snacks all day"
        },
        {
            title: "Networking",
            description: "Connect with peers and industry leaders"
        }
    ]
};