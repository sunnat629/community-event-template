/**
 * Theme System Type Definitions
 *
 * This file defines the complete type system for the event site template.
 * All themes must conform to these interfaces to ensure type safety and consistency.
 */

// ========================================
// Metadata Types
// ========================================

export interface ThemeMetadata {
    /** Unique identifier for the theme */
    id: string;
    /** Display name of the theme */
    name: string;
    /** Brief description of the theme style */
    description: string;
    /** Theme author */
    author: string;
    /** Semantic version */
    version: string;
    /** Preview image URL (optional) */
    preview?: string;
    /** Tags for categorization */
    tags?: string[];
}

// ========================================
// Color System
// ========================================

export interface ThemeColors {
    // Primary brand colors
    primary: {
        DEFAULT: string;
        foreground: string;
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
    };

    // Secondary brand colors
    secondary: {
        DEFAULT: string;
        foreground: string;
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
    };

    // Accent colors
    accent: {
        DEFAULT: string;
        foreground: string;
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
    };

    // Base colors
    background: string;
    foreground: string;

    // UI element colors
    card: {
        DEFAULT: string;
        foreground: string;
    };

    popover: {
        DEFAULT: string;
        foreground: string;
    };

    muted: {
        DEFAULT: string;
        foreground: string;
    };

    // Status colors
    destructive: {
        DEFAULT: string;
        foreground: string;
    };

    success: {
        DEFAULT: string;
        foreground: string;
    };

    warning: {
        DEFAULT: string;
        foreground: string;
    };

    info: {
        DEFAULT: string;
        foreground: string;
    };

    // Borders and separators
    border: string;
    input: string;
    ring: string;

    // Chart colors (for data visualization)
    chart: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
    };
}

// ========================================
// Typography System
// ========================================

export interface ThemeFontFamily {
    sans: string[];
    heading: string[];
    mono: string[];
}

export interface ThemeFontSize {
    xs: [string, { lineHeight: string }];
    sm: [string, { lineHeight: string }];
    base: [string, { lineHeight: string }];
    lg: [string, { lineHeight: string }];
    xl: [string, { lineHeight: string }];
    '2xl': [string, { lineHeight: string }];
    '3xl': [string, { lineHeight: string }];
    '4xl': [string, { lineHeight: string }];
    '5xl': [string, { lineHeight: string }];
    '6xl': [string, { lineHeight: string }];
    '7xl': [string, { lineHeight: string }];
    '8xl': [string, { lineHeight: string }];
    '9xl': [string, { lineHeight: string }];
}

export interface ThemeFontWeight {
    thin: number;
    extralight: number;
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
    extrabold: number;
    black: number;
}

export interface ThemeTypography {
    fontFamily: ThemeFontFamily;
    fontSize: ThemeFontSize;
    fontWeight: ThemeFontWeight;
}

// ========================================
// Spacing System
// ========================================

export interface ThemeSpacing {
    /** Padding for main sections */
    sectionPadding: {
        mobile: string;
        tablet: string;
        desktop: string;
    };

    /** Max width for content containers */
    containerMaxWidth: string;

    /** Horizontal padding for containers */
    containerPadding: {
        mobile: string;
        tablet: string;
        desktop: string;
    };

    /** Gap between grid items */
    gridGap: {
        mobile: string;
        tablet: string;
        desktop: string;
    };

    /** Card padding */
    cardPadding: {
        small: string;
        medium: string;
        large: string;
    };
}

// ========================================
// Border Radius System
// ========================================

export interface ThemeBorderRadius {
    none: string;
    sm: string;
    DEFAULT: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    full: string;
}

// ========================================
// Shadow System
// ========================================

export interface ThemeShadows {
    sm: string;
    DEFAULT: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    inner: string;
    none: string;
}

// ========================================
// Animation System
// ========================================

export interface ThemeAnimations {
    /** Enable/disable animations globally */
    enabled: boolean;

    /** Animation durations */
    duration: {
        fast: string;
        normal: string;
        slow: string;
    };

    /** Easing functions */
    easing: {
        linear: string;
        easeIn: string;
        easeOut: string;
        easeInOut: string;
        bounce: string;
    };

    /** Custom keyframes */
    keyframes?: Record<string, Record<string, Record<string, string>>>;
}

// ========================================
// Component Theming
// ========================================

export interface ComponentVariant {
    base: string;
    variants?: Record<string, Record<string, string>>;
    defaultVariant?: string;
}

export interface ThemeComponents {
    button: ComponentVariant;
    card: ComponentVariant;
    badge: ComponentVariant;
    input: ComponentVariant;
    section: ComponentVariant;
    heading: ComponentVariant;
    navigation: ComponentVariant;
}

// ========================================
// Gradient System
// ========================================

export interface ThemeGradients {
    hero: string;
    primary: string;
    secondary: string;
    accent: string;
    subtle: string;
    dark: string;
}

// ========================================
// Main Theme Interface
// ========================================

export interface Theme {
    /** Theme metadata and information */
    metadata: ThemeMetadata;

    /** Color system */
    colors: ThemeColors;

    /** Typography system */
    typography: ThemeTypography;

    /** Spacing system */
    spacing: ThemeSpacing;

    /** Border radius system */
    borderRadius: ThemeBorderRadius;

    /** Shadow system */
    shadows: ThemeShadows;

    /** Animation system */
    animations: ThemeAnimations;

    /** Component-specific theming */
    components: ThemeComponents;

    /** Gradient definitions */
    gradients: ThemeGradients;
}

// ========================================
// Theme Registry
// ========================================

export interface ThemeRegistry {
    [themeId: string]: Theme;
}

// ========================================
// Theme Configuration
// ========================================

export interface ThemeConfig {
    /** Active theme ID */
    activeTheme: string;

    /** Allow theme switching at runtime */
    allowSwitching: boolean;

    /** Remember user's theme preference */
    persistPreference: boolean;

    /** Custom theme overrides */
    overrides?: Partial<Theme>;
}

// ========================================
// Utility Types
// ========================================

/** Deep partial type for theme overrides */
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/** Theme override type */
export type ThemeOverride = DeepPartial<Theme>;

/** Color palette helper */
export type ColorPalette = {
    [key: number]: string;
};

// ========================================
// Constants
// ========================================

export const THEME_STORAGE_KEY = 'event-site-theme';
export const DEFAULT_THEME_ID = 'default';
