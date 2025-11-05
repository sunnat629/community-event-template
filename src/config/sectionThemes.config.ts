// Section Theme Configuration
// Easily customize section backgrounds, spacing, and visual styles

export type SectionTheme =
    | 'hero'           // Dark gradient hero
    | 'light'          // White/light gray
    | 'blue-tint'      // Soft blue background
    | 'gradient-soft'  // Subtle gradient
    | 'gradient-multi' // Multi-color gradient
    | 'warm-tint'      // Warm amber/orange tint
    | 'accent'         // Accent color gradient
    | 'dark'           // Dark background
    | 'white';         // Pure white

export interface SectionThemeConfig {
    background: string;           // Tailwind classes for background
    textColor?: string;           // Override text color if needed
    divider?: 'none' | 'top' | 'bottom' | 'both'; // Section dividers
    dividerColor?: string;        // Divider gradient colors
    padding?: 'sm' | 'md' | 'lg'; // Vertical padding
}

// Theme presets - easily customizable
export const sectionThemes: Record<SectionTheme, SectionThemeConfig> = {
    hero: {
        background: 'bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/90',
        textColor: 'text-white',
        divider: 'none',
        padding: 'lg'
    },
    light: {
        background: 'bg-white',
        divider: 'none',
        padding: 'md'
    },
    'blue-tint': {
        background: 'bg-blue-50/30',
        divider: 'both',
        dividerColor: 'from-transparent via-primary/20 to-transparent',
        padding: 'md'
    },
    'gradient-soft': {
        background: 'bg-gradient-to-b from-gray-50 to-white',
        divider: 'top',
        dividerColor: 'from-transparent via-border to-transparent',
        padding: 'md'
    },
    'gradient-multi': {
        background: 'bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/20',
        divider: 'both',
        dividerColor: 'from-blue-200/30 via-purple-200/30 to-pink-200/30',
        padding: 'md'
    },
    'warm-tint': {
        background: 'bg-amber-50/20',
        divider: 'both',
        dividerColor: 'from-transparent via-amber-200/30 to-transparent',
        padding: 'md'
    },
    accent: {
        background: 'bg-gradient-to-br from-primary/10 via-secondary/10 to-purple-500/10',
        divider: 'both',
        dividerColor: 'from-primary/30 via-secondary/30 to-purple-500/30',
        padding: 'md'
    },
    dark: {
        background: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900',
        textColor: 'text-white',
        divider: 'top',
        dividerColor: 'from-transparent via-gray-700 to-transparent',
        padding: 'md'
    },
    white: {
        background: 'bg-white',
        divider: 'none',
        padding: 'md'
    }
};

// Padding presets
export const paddingPresets = {
    sm: 'py-12 sm:py-16',
    md: 'py-16 sm:py-20 lg:py-24',
    lg: 'py-20 sm:py-24 lg:py-32'
};

// Section divider component styles
export const dividerStyles = {
    top: 'absolute top-0 left-0 right-0 h-px',
    bottom: 'absolute bottom-0 left-0 right-0 h-px',
    gradient: 'bg-gradient-to-r'
};

// Helper function to get complete theme classes
export function getSectionClasses(theme: SectionTheme): string {
    const config = sectionThemes[theme];
    const padding = paddingPresets[config.padding || 'md'];

    return `${config.background} ${config.textColor || ''} ${padding} relative`;
}

// Helper function to check if divider is needed
export function hasDivider(theme: SectionTheme, position: 'top' | 'bottom'): boolean {
    const config = sectionThemes[theme];
    return config.divider === position || config.divider === 'both';
}

// Helper to get divider classes
export function getDividerClasses(theme: SectionTheme, position: 'top' | 'bottom'): string {
    const config = sectionThemes[theme];
    const positionClass = dividerStyles[position];
    const gradientClass = dividerStyles.gradient;
    const colorClass = config.dividerColor || 'from-transparent via-border to-transparent';

    return `${positionClass} ${gradientClass} ${colorClass}`;
}
