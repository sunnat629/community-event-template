// Layout Configuration
// Define section order, themes, and visibility in one place

import type {SectionTheme} from './sectionThemes.config';

export interface SectionConfig {
    id: string;
    component: string;
    theme: SectionTheme;
    enabled: boolean;
    order: number;
}

// Section configuration - easily reorder by changing the order number
export const sectionLayout: SectionConfig[] = [
    {
        id: 'hero',
        component: 'HeroSection',
        theme: 'hero',
        enabled: true,
        order: 1
    },
    {
        id: 'event-details',
        component: 'EventDetailsSection',
        theme: 'white',
        enabled: true,
        order: 2
    },
    {
        id: 'about',
        component: 'AboutSection',
        theme: 'blue-tint',
        enabled: true,
        order: 3
    },
    {
        id: 'organizers',
        component: 'OrganizersSection',
        theme: 'gradient-multi',
        enabled: true,
        order: 4
    },
    {
        id: 'speakers-partners',
        component: 'SpeakersPartnersSection',
        theme: 'white',
        enabled: true,
        order: 5
    },
    {
        id: 'agenda',
        component: 'AgendaSection',
        theme: 'gradient-soft',
        enabled: true,
        order: 6
    },
    {
        id: 'venue',
        component: 'VenueSection',
        theme: 'warm-tint',
        enabled: true,
        order: 7
    },
    {
        id: 'cta',
        component: 'CTASection',
        theme: 'accent',
        enabled: true,
        order: 8
    },
    {
        id: 'footer',
        component: 'Footer',
        theme: 'dark',
        enabled: true,
        order: 9
    }
];

// Helper function to get sections in order
export function getOrderedSections(): SectionConfig[] {
    return sectionLayout
        .filter(section => section.enabled)
        .sort((a, b) => a.order - b.order);
}

// Helper function to get section theme by ID
export function getSectionTheme(sectionId: string): SectionTheme {
    const section = sectionLayout.find(s => s.id === sectionId);
    return section?.theme || 'white';
}

// Helper function to update section order (for future admin panel)
export function updateSectionOrder(sectionId: string, newOrder: number): void {
    const section = sectionLayout.find(s => s.id === sectionId);
    if (section) {
        section.order = newOrder;
    }
}

// Helper function to toggle section visibility
export function toggleSection(sectionId: string): void {
    const section = sectionLayout.find(s => s.id === sectionId);
    if (section) {
        section.enabled = !section.enabled;
    }
}
