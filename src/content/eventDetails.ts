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
        display: "Coming Soon 2025",
        announcement: "To be announced soon",
        details: "Stay tuned for the official date announcement"
    },
    venue: {
        city: "Dhaka, Bangladesh",
        location: "Exact location to be revealed soon",
        details: "",
        address: "Plot 7, Road 9, Niketan",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0914502474687!2d90.40844631498157!3d23.778634084577676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a1f5c5f5f5%3A0x1f5f5f5f5f5f5f5!2sBrain%20Station%2023!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd",
        coordinates: {
            lat: 23.778634,
            lng: 90.410445
        },
        capacity: "200+ Attendees",
        format: "In-Person Event",
        price: "Free",
        venueDetails: {
            name: "Brain Station 23 Headquarters",
            fullAddress: "Plot 7, Road 9, Niketan, Gulshan-1, Dhaka 1212, Bangladesh",
            landmark: "Near Gulshan 1 Circle, opposite to North South University",
            directions: [
                "From Gulshan 1 Circle: 5 minutes walk via Road 9",
                "From Mohakhali: Take Road 9 towards Niketan (10 mins drive)",
                "From Banani: Via Kemal Ataturk Avenue to Gulshan (15 mins)",
                "From Airport: 30-40 minutes via Airport Road and Gulshan Avenue"
            ],
            parking: "Limited parking available on premises. Street parking available nearby. We recommend using ride-sharing services.",
            accessibility: [
                "Wheelchair accessible entrance and elevator",
                "Accessible restrooms on each floor",
                "Reserved seating for attendees with mobility needs",
                "Sign language interpretation available upon request"
            ],
            facilities: [
                "High-speed WiFi throughout the venue",
                "Air-conditioned conference halls",
                "Prayer rooms available",
                "Cafeteria and refreshment areas",
                "Backup power supply",
                "Professional AV equipment"
            ],
            contact: {
                phone: "+880 1234-567890",
                email: "venue@flutterguild.com"
            }
        }
    },
    format: {
        type: "Full-day in-person event",
        description: "Keynotes, technical sessions, workshops, and networking"
    },
    audience: {
        primary: "Flutter developers, mobile engineers, tech enthusiasts",
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
