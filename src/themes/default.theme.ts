import {Theme} from './types';

/**
 * Default Theme - Flutter Guild Connect
 *
 * This theme represents the current vibrant, modern design
 * with Flutter brand colors and energetic gradients.
 */
export const defaultTheme: Theme = {
    metadata: {
        id: 'default',
        name: 'Flutter Guild (Default)',
        description: 'Vibrant and energetic theme with Flutter brand colors',
        author: 'Flutter Guild Team',
        version: '1.0.0',
        tags: ['vibrant', 'modern', 'flutter', 'blue'],
    },

    colors: {
        // Primary - Flutter Blue #02569B
        primary: {
            DEFAULT: 'hsl(207 98% 30%)',
            foreground: 'hsl(0 0% 100%)',
            50: 'hsl(207 98% 95%)',
            100: 'hsl(207 98% 90%)',
            200: 'hsl(207 98% 80%)',
            300: 'hsl(207 98% 70%)',
            400: 'hsl(207 98% 60%)',
            500: 'hsl(207 98% 50%)',
            600: 'hsl(207 98% 40%)',
            700: 'hsl(207 98% 30%)',
            800: 'hsl(207 98% 25%)',
            900: 'hsl(207 98% 20%)',
            950: 'hsl(207 98% 15%)',
        },

        // Secondary - Flutter Light Blue #13B9FD
        secondary: {
            DEFAULT: 'hsl(197 98% 54%)',
            foreground: 'hsl(210 20% 15%)',
            50: 'hsl(197 98% 95%)',
            100: 'hsl(197 98% 90%)',
            200: 'hsl(197 98% 80%)',
            300: 'hsl(197 98% 70%)',
            400: 'hsl(197 98% 60%)',
            500: 'hsl(197 98% 54%)',
            600: 'hsl(197 98% 45%)',
            700: 'hsl(197 98% 40%)',
            800: 'hsl(197 98% 35%)',
            900: 'hsl(197 98% 30%)',
            950: 'hsl(197 98% 25%)',
        },

        // Accent - Same as secondary for this theme
        accent: {
            DEFAULT: 'hsl(197 98% 54%)',
            foreground: 'hsl(0 0% 100%)',
            50: 'hsl(197 98% 95%)',
            100: 'hsl(197 98% 90%)',
            200: 'hsl(197 98% 80%)',
            300: 'hsl(197 98% 70%)',
            400: 'hsl(197 98% 60%)',
            500: 'hsl(197 98% 54%)',
            600: 'hsl(197 98% 45%)',
            700: 'hsl(197 98% 40%)',
            800: 'hsl(197 98% 35%)',
            900: 'hsl(197 98% 30%)',
            950: 'hsl(197 98% 25%)',
        },

        // Base colors
        background: 'hsl(0 0% 98%)',
        foreground: 'hsl(210 20% 15%)',

        // UI Elements
        card: {
            DEFAULT: 'hsl(0 0% 100%)',
            foreground: 'hsl(210 20% 15%)',
        },

        popover: {
            DEFAULT: 'hsl(0 0% 100%)',
            foreground: 'hsl(210 20% 15%)',
        },

        muted: {
            DEFAULT: 'hsl(210 15% 96%)',
            foreground: 'hsl(210 10% 50%)',
        },

        // Status colors
        destructive: {
            DEFAULT: 'hsl(0 84% 60%)',
            foreground: 'hsl(0 0% 100%)',
        },

        success: {
            DEFAULT: 'hsl(142 76% 36%)',
            foreground: 'hsl(0 0% 100%)',
        },

        warning: {
            DEFAULT: 'hsl(38 92% 50%)',
            foreground: 'hsl(0 0% 100%)',
        },

        info: {
            DEFAULT: 'hsl(199 89% 48%)',
            foreground: 'hsl(0 0% 100%)',
        },

        // Borders
        border: 'hsl(210 15% 90%)',
        input: 'hsl(210 15% 90%)',
        ring: 'hsl(207 98% 30%)',

        // Chart colors
        chart: {
            1: 'hsl(207 98% 30%)',
            2: 'hsl(197 98% 54%)',
            3: 'hsl(142 76% 36%)',
            4: 'hsl(38 92% 50%)',
            5: 'hsl(271 76% 53%)',
        },
    },

    typography: {
        fontFamily: {
            sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
            heading: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
            mono: ['Fira Code', 'Monaco', 'Courier New', 'monospace'],
        },
        fontSize: {
            xs: ['0.75rem', {lineHeight: '1rem'}],
            sm: ['0.875rem', {lineHeight: '1.25rem'}],
            base: ['1rem', {lineHeight: '1.5rem'}],
            lg: ['1.125rem', {lineHeight: '1.75rem'}],
            xl: ['1.25rem', {lineHeight: '1.75rem'}],
            '2xl': ['1.5rem', {lineHeight: '2rem'}],
            '3xl': ['1.875rem', {lineHeight: '2.25rem'}],
            '4xl': ['2.25rem', {lineHeight: '2.5rem'}],
            '5xl': ['3rem', {lineHeight: '1'}],
            '6xl': ['3.75rem', {lineHeight: '1'}],
            '7xl': ['4.5rem', {lineHeight: '1'}],
            '8xl': ['6rem', {lineHeight: '1'}],
            '9xl': ['8rem', {lineHeight: '1'}],
        },
        fontWeight: {
            thin: 100,
            extralight: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900,
        },
    },

    spacing: {
        sectionPadding: {
            mobile: '4rem',
            tablet: '5rem',
            desktop: '6rem',
        },
        containerMaxWidth: '1280px',
        containerPadding: {
            mobile: '1.5rem',
            tablet: '2rem',
            desktop: '3rem',
        },
        gridGap: {
            mobile: '1rem',
            tablet: '1.5rem',
            desktop: '2rem',
        },
        cardPadding: {
            small: '1rem',
            medium: '1.5rem',
            large: '2rem',
        },
    },

    borderRadius: {
        none: '0',
        sm: '0.375rem',
        DEFAULT: '0.75rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
        '2xl': '2rem',
        '3xl': '3rem',
        full: '9999px',
    },

    shadows: {
        sm: '0 2px 4px rgba(2, 86, 155, 0.05)',
        DEFAULT: '0 4px 8px rgba(2, 86, 155, 0.08)',
        md: '0 4px 12px rgba(2, 86, 155, 0.1)',
        lg: '0 8px 24px rgba(2, 86, 155, 0.15)',
        xl: '0 16px 48px rgba(2, 86, 155, 0.2)',
        '2xl': '0 24px 64px rgba(2, 86, 155, 0.25)',
        inner: 'inset 0 2px 4px rgba(2, 86, 155, 0.06)',
        none: 'none',
    },

    animations: {
        enabled: true,
        duration: {
            fast: '200ms',
            normal: '300ms',
            slow: '500ms',
        },
        easing: {
            linear: 'linear',
            easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
            easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
            easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
            bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        },
        keyframes: {
            'fade-in': {
                from: {opacity: '0'},
                to: {opacity: '1'},
            },
            'fade-in-up': {
                from: {opacity: '0', transform: 'translateY(20px)'},
                to: {opacity: '1', transform: 'translateY(0)'},
            },
            'slide-in-right': {
                from: {opacity: '0', transform: 'translateX(20px)'},
                to: {opacity: '1', transform: 'translateX(0)'},
            },
            'float': {
                '0%, 100%': {transform: 'translateY(0)'},
                '50%': {transform: 'translateY(-10px)'},
            },
            'pulse-glow': {
                '0%, 100%': {boxShadow: '0 0 20px rgba(19, 185, 253, 0.3)'},
                '50%': {boxShadow: '0 0 40px rgba(19, 185, 253, 0.6)'},
            },
        },
    },

    components: {
        button: {
            base: 'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300',
            variants: {
                size: {
                    sm: 'px-4 py-2 text-sm',
                    md: 'px-6 py-3 text-base',
                    lg: 'px-8 py-4 text-lg',
                },
                variant: {
                    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
                    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
                    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
                    ghost: 'hover:bg-muted hover:text-muted-foreground',
                },
            },
            defaultVariant: 'primary',
        },

        card: {
            base: 'rounded-2xl border transition-all duration-300',
            variants: {
                variant: {
                    default: 'bg-card border-border hover:shadow-lg',
                    glass: 'bg-card/80 backdrop-blur-lg border-border/50',
                    gradient: 'bg-gradient-to-br from-card to-muted border-border/30',
                },
                padding: {
                    none: '',
                    sm: 'p-4',
                    md: 'p-6',
                    lg: 'p-8',
                },
            },
            defaultVariant: 'default',
        },

        badge: {
            base: 'inline-flex items-center rounded-full font-medium transition-colors',
            variants: {
                variant: {
                    default: 'bg-primary text-primary-foreground',
                    secondary: 'bg-secondary text-secondary-foreground',
                    outline: 'border border-primary text-primary',
                    success: 'bg-success text-success-foreground',
                    warning: 'bg-warning text-warning-foreground',
                },
                size: {
                    sm: 'px-2 py-0.5 text-xs',
                    md: 'px-3 py-1 text-sm',
                    lg: 'px-4 py-1.5 text-base',
                },
            },
            defaultVariant: 'default',
        },

        input: {
            base: 'flex w-full rounded-lg border bg-background px-3 py-2 text-sm transition-colors',
            variants: {
                variant: {
                    default: 'border-input focus:border-primary focus:ring-2 focus:ring-primary/20',
                    error: 'border-destructive focus:border-destructive focus:ring-2 focus:ring-destructive/20',
                },
            },
            defaultVariant: 'default',
        },

        section: {
            base: 'relative',
            variants: {
                variant: {
                    default: 'bg-background',
                    gradient: 'bg-gradient-to-b from-secondary/5 to-background',
                    muted: 'bg-muted/30',
                },
                padding: {
                    none: '',
                    sm: 'py-12 sm:py-16',
                    md: 'py-16 sm:py-20 lg:py-24',
                    lg: 'py-24 sm:py-32 lg:py-40',
                },
            },
            defaultVariant: 'default',
        },

        heading: {
            base: 'font-bold tracking-tight',
            variants: {
                size: {
                    h1: 'text-4xl sm:text-5xl lg:text-6xl',
                    h2: 'text-3xl sm:text-4xl lg:text-5xl',
                    h3: 'text-2xl sm:text-3xl lg:text-4xl',
                    h4: 'text-xl sm:text-2xl lg:text-3xl',
                    h5: 'text-lg sm:text-xl lg:text-2xl',
                    h6: 'text-base sm:text-lg lg:text-xl',
                },
                variant: {
                    default: 'text-foreground',
                    gradient: 'bg-clip-text text-transparent bg-gradient-hero',
                    muted: 'text-muted-foreground',
                },
            },
            defaultVariant: 'default',
        },

        navigation: {
            base: 'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
            variants: {
                variant: {
                    transparent: 'bg-transparent',
                    solid: 'bg-background/95 backdrop-blur-lg border-b border-border',
                    floating: 'mt-4 mx-4 rounded-2xl bg-background/95 backdrop-blur-lg border border-border shadow-lg',
                },
            },
            defaultVariant: 'solid',
        },
    },

    gradients: {
        hero: 'linear-gradient(135deg, hsl(207 98% 30%) 0%, hsl(197 98% 54%) 100%)',
        primary: 'linear-gradient(135deg, hsl(207 98% 30%) 0%, hsl(207 98% 45%) 100%)',
        secondary: 'linear-gradient(90deg, hsl(197 98% 54%) 0%, hsl(207 98% 45%) 100%)',
        accent: 'linear-gradient(90deg, hsl(197 98% 54%) 0%, hsl(207 98% 45%) 100%)',
        subtle: 'linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(210 15% 98%) 100%)',
        dark: 'linear-gradient(135deg, hsl(210 25% 8%) 0%, hsl(210 25% 15%) 100%)',
    },
};
