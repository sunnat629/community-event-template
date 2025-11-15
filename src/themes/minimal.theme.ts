import {Theme} from './types';

/**
 * Minimal Theme
 *
 * Clean, elegant design with lots of whitespace and subtle colors.
 * Perfect for professional events and minimalist aesthetics.
 */
export const minimalTheme: Theme = {
    metadata: {
        id: 'minimal',
        name: 'Minimal',
        description: 'Clean and elegant design with subtle colors and lots of whitespace',
        author: 'TechCommunity Team',
        version: '1.0.0',
        tags: ['minimal', 'clean', 'elegant', 'professional', 'monochrome'],
    },

    colors: {
        // Primary - Soft Charcoal
        primary: {
            DEFAULT: 'hsl(220 13% 18%)',
            foreground: 'hsl(0 0% 100%)',
            50: 'hsl(220 13% 97%)',
            100: 'hsl(220 13% 95%)',
            200: 'hsl(220 13% 85%)',
            300: 'hsl(220 13% 75%)',
            400: 'hsl(220 13% 65%)',
            500: 'hsl(220 13% 45%)',
            600: 'hsl(220 13% 35%)',
            700: 'hsl(220 13% 28%)',
            800: 'hsl(220 13% 18%)',
            900: 'hsl(220 13% 13%)',
            950: 'hsl(220 13% 8%)',
        },

        // Secondary - Warm Gray
        secondary: {
            DEFAULT: 'hsl(20 5% 40%)',
            foreground: 'hsl(0 0% 100%)',
            50: 'hsl(20 5% 98%)',
            100: 'hsl(20 5% 95%)',
            200: 'hsl(20 5% 85%)',
            300: 'hsl(20 5% 75%)',
            400: 'hsl(20 5% 65%)',
            500: 'hsl(20 5% 50%)',
            600: 'hsl(20 5% 40%)',
            700: 'hsl(20 5% 30%)',
            800: 'hsl(20 5% 20%)',
            900: 'hsl(20 5% 15%)',
            950: 'hsl(20 5% 10%)',
        },

        // Accent - Subtle Blue-Gray
        accent: {
            DEFAULT: 'hsl(210 15% 45%)',
            foreground: 'hsl(0 0% 100%)',
            50: 'hsl(210 15% 98%)',
            100: 'hsl(210 15% 95%)',
            200: 'hsl(210 15% 85%)',
            300: 'hsl(210 15% 75%)',
            400: 'hsl(210 15% 65%)',
            500: 'hsl(210 15% 55%)',
            600: 'hsl(210 15% 45%)',
            700: 'hsl(210 15% 35%)',
            800: 'hsl(210 15% 25%)',
            900: 'hsl(210 15% 15%)',
            950: 'hsl(210 15% 10%)',
        },

        // Base colors - High contrast white background
        background: 'hsl(0 0% 100%)',
        foreground: 'hsl(220 13% 18%)',

        // UI Elements - Very subtle
        card: {
            DEFAULT: 'hsl(0 0% 100%)',
            foreground: 'hsl(220 13% 18%)',
        },

        popover: {
            DEFAULT: 'hsl(0 0% 100%)',
            foreground: 'hsl(220 13% 18%)',
        },

        muted: {
            DEFAULT: 'hsl(220 5% 98%)',
            foreground: 'hsl(220 10% 45%)',
        },

        // Status colors - Muted tones
        destructive: {
            DEFAULT: 'hsl(0 60% 55%)',
            foreground: 'hsl(0 0% 100%)',
        },

        success: {
            DEFAULT: 'hsl(142 50% 40%)',
            foreground: 'hsl(0 0% 100%)',
        },

        warning: {
            DEFAULT: 'hsl(38 70% 50%)',
            foreground: 'hsl(0 0% 100%)',
        },

        info: {
            DEFAULT: 'hsl(199 60% 45%)',
            foreground: 'hsl(0 0% 100%)',
        },

        // Borders - Very light
        border: 'hsl(220 10% 92%)',
        input: 'hsl(220 10% 88%)',
        ring: 'hsl(220 13% 18%)',

        // Chart colors - Monochrome palette
        chart: {
            1: 'hsl(220 13% 18%)',
            2: 'hsl(220 13% 35%)',
            3: 'hsl(220 13% 55%)',
            4: 'hsl(220 13% 75%)',
            5: 'hsl(220 13% 90%)',
        },
    },

    typography: {
        fontFamily: {
            sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
            heading: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
            mono: ['IBM Plex Mono', 'Monaco', 'Courier New', 'monospace'],
        },
        fontSize: {
            xs: ['0.75rem', {lineHeight: '1.2rem'}],
            sm: ['0.875rem', {lineHeight: '1.4rem'}],
            base: ['1rem', {lineHeight: '1.6rem'}],
            lg: ['1.125rem', {lineHeight: '1.8rem'}],
            xl: ['1.25rem', {lineHeight: '1.9rem'}],
            '2xl': ['1.5rem', {lineHeight: '2.1rem'}],
            '3xl': ['1.875rem', {lineHeight: '2.4rem'}],
            '4xl': ['2.25rem', {lineHeight: '2.7rem'}],
            '5xl': ['3rem', {lineHeight: '1.1'}],
            '6xl': ['3.75rem', {lineHeight: '1.1'}],
            '7xl': ['4.5rem', {lineHeight: '1.1'}],
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
            mobile: '5rem',
            tablet: '7rem',
            desktop: '9rem',
        },
        containerMaxWidth: '1200px',
        containerPadding: {
            mobile: '2rem',
            tablet: '3rem',
            desktop: '4rem',
        },
        gridGap: {
            mobile: '1.5rem',
            tablet: '2rem',
            desktop: '3rem',
        },
        cardPadding: {
            small: '1.5rem',
            medium: '2.5rem',
            large: '3.5rem',
        },
    },

    borderRadius: {
        none: '0',
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
        full: '9999px',
    },

    shadows: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.03)',
        DEFAULT: '0 1px 3px rgba(0, 0, 0, 0.05)',
        md: '0 2px 4px rgba(0, 0, 0, 0.06)',
        lg: '0 4px 8px rgba(0, 0, 0, 0.08)',
        xl: '0 8px 16px rgba(0, 0, 0, 0.1)',
        '2xl': '0 16px 32px rgba(0, 0, 0, 0.12)',
        inner: 'inset 0 1px 2px rgba(0, 0, 0, 0.05)',
        none: 'none',
    },

    animations: {
        enabled: true,
        duration: {
            fast: '150ms',
            normal: '250ms',
            slow: '400ms',
        },
        easing: {
            linear: 'linear',
            easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
            easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
            easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
            bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        },
        keyframes: {
            'fade-in': {
                from: {opacity: '0'},
                to: {opacity: '1'},
            },
            'fade-in-up': {
                from: {opacity: '0', transform: 'translateY(10px)'},
                to: {opacity: '1', transform: 'translateY(0)'},
            },
            'slide-in-right': {
                from: {opacity: '0', transform: 'translateX(10px)'},
                to: {opacity: '1', transform: 'translateX(0)'},
            },
            'float': {
                '0%, 100%': {transform: 'translateY(0)'},
                '50%': {transform: 'translateY(-5px)'},
            },
            'pulse-glow': {
                '0%, 100%': {boxShadow: '0 0 0 rgba(0, 0, 0, 0.05)'},
                '50%': {boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)'},
            },
        },
    },

    components: {
        button: {
            base: 'inline-flex items-center justify-center rounded font-medium transition-all duration-250',
            variants: {
                size: {
                    sm: 'px-3 py-1.5 text-sm',
                    md: 'px-5 py-2.5 text-base',
                    lg: 'px-7 py-3.5 text-lg',
                },
                variant: {
                    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
                    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
                    outline: 'border-2 border-primary text-primary hover:bg-primary/5',
                    ghost: 'hover:bg-muted',
                },
            },
            defaultVariant: 'primary',
        },

        card: {
            base: 'rounded-lg border transition-all duration-250',
            variants: {
                variant: {
                    default: 'bg-card border-border hover:border-primary/30 hover:shadow-md',
                    glass: 'bg-card/60 backdrop-blur-sm border-border/30',
                    gradient: 'bg-gradient-to-b from-card to-muted/20 border-border/40',
                },
                padding: {
                    none: '',
                    sm: 'p-4',
                    md: 'p-6',
                    lg: 'p-10',
                },
            },
            defaultVariant: 'default',
        },

        badge: {
            base: 'inline-flex items-center rounded-full font-medium transition-colors',
            variants: {
                variant: {
                    default: 'bg-primary/10 text-primary border border-primary/20',
                    secondary: 'bg-secondary/10 text-secondary border border-secondary/20',
                    outline: 'border border-border text-foreground',
                    success: 'bg-success/10 text-success border border-success/20',
                    warning: 'bg-warning/10 text-warning border border-warning/20',
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
            base: 'flex w-full rounded border bg-background px-3 py-2 text-sm transition-colors',
            variants: {
                variant: {
                    default: 'border-input focus:border-primary focus:ring-1 focus:ring-primary/10',
                    error: 'border-destructive focus:border-destructive focus:ring-1 focus:ring-destructive/10',
                },
            },
            defaultVariant: 'default',
        },

        section: {
            base: 'relative',
            variants: {
                variant: {
                    default: 'bg-background',
                    gradient: 'bg-gradient-to-b from-muted/30 to-background',
                    muted: 'bg-muted/20',
                },
                padding: {
                    none: '',
                    sm: 'py-16 sm:py-20',
                    md: 'py-20 sm:py-28 lg:py-36',
                    lg: 'py-28 sm:py-40 lg:py-52',
                },
            },
            defaultVariant: 'default',
        },

        heading: {
            base: 'font-semibold tracking-tight',
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
                    gradient: 'text-foreground', // No gradients in minimal theme
                    muted: 'text-muted-foreground',
                },
            },
            defaultVariant: 'default',
        },

        navigation: {
            base: 'fixed top-0 left-0 right-0 z-50 transition-all duration-250',
            variants: {
                variant: {
                    transparent: 'bg-transparent',
                    solid: 'bg-background/98 backdrop-blur-sm border-b border-border',
                    floating: 'mt-6 mx-6 rounded-lg bg-background/98 backdrop-blur-sm border border-border shadow-sm',
                },
            },
            defaultVariant: 'solid',
        },
    },

    gradients: {
        hero: 'linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(220 10% 98%) 100%)',
        primary: 'linear-gradient(180deg, hsl(220 13% 18%) 0%, hsl(220 13% 25%) 100%)',
        secondary: 'linear-gradient(180deg, hsl(20 5% 40%) 0%, hsl(20 5% 50%) 100%)',
        accent: 'linear-gradient(180deg, hsl(210 15% 45%) 0%, hsl(210 15% 55%) 100%)',
        subtle: 'linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(220 5% 98%) 100%)',
        dark: 'linear-gradient(180deg, hsl(220 13% 8%) 0%, hsl(220 13% 15%) 100%)',
    },
};