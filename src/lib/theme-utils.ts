import {Theme} from '@/themes';

/**
 * Theme Utility Functions
 *
 * Helper functions for converting themes to CSS variables and applying them to the DOM.
 */

/**
 * Convert a color object to CSS variable definitions
 */
function colorToCSSVariables(colorObj: Record<string, unknown>, prefix: string): Record<string, string> {
    const vars: Record<string, string> = {};

    Object.entries(colorObj).forEach(([key, value]) => {
        if (typeof value === 'string') {
            // Handle simple color values
            const varName = key === 'DEFAULT' ? prefix : `${prefix}-${key}`;
            vars[varName] = value;
        } else if (typeof value === 'object' && value !== null) {
            // Handle nested color objects (like primary.50, primary.100, etc.)
            Object.entries(value).forEach(([nestedKey, nestedValue]) => {
                if (typeof nestedValue === 'string') {
                    const varName = nestedKey === 'DEFAULT'
                        ? `${prefix}-${key}`
                        : `${prefix}-${key}-${nestedKey}`;
                    vars[varName] = nestedValue;
                }
            });
        }
    });

    return vars;
}

/**
 * Convert theme to CSS variables
 */
export function themeToCSSVariables(theme: Theme): Record<string, string> {
    const vars: Record<string, string> = {};

    // Colors
    const {colors} = theme;

    // Primary colors
    Object.entries(colors.primary).forEach(([key, value]) => {
        const varName = key === 'DEFAULT' ? '--primary' : `--primary-${key}`;
        vars[varName] = value;
    });

    // Secondary colors
    Object.entries(colors.secondary).forEach(([key, value]) => {
        const varName = key === 'DEFAULT' ? '--secondary' : `--secondary-${key}`;
        vars[varName] = value;
    });

    // Accent colors
    Object.entries(colors.accent).forEach(([key, value]) => {
        const varName = key === 'DEFAULT' ? '--accent' : `--accent-${key}`;
        vars[varName] = value;
    });

    // Base colors
    vars['--background'] = colors.background;
    vars['--foreground'] = colors.foreground;

    // UI element colors
    vars['--card'] = colors.card.DEFAULT;
    vars['--card-foreground'] = colors.card.foreground;
    vars['--popover'] = colors.popover.DEFAULT;
    vars['--popover-foreground'] = colors.popover.foreground;
    vars['--muted'] = colors.muted.DEFAULT;
    vars['--muted-foreground'] = colors.muted.foreground;

    // Status colors
    vars['--destructive'] = colors.destructive.DEFAULT;
    vars['--destructive-foreground'] = colors.destructive.foreground;
    vars['--success'] = colors.success.DEFAULT;
    vars['--success-foreground'] = colors.success.foreground;
    vars['--warning'] = colors.warning.DEFAULT;
    vars['--warning-foreground'] = colors.warning.foreground;
    vars['--info'] = colors.info.DEFAULT;
    vars['--info-foreground'] = colors.info.foreground;

    // Borders
    vars['--border'] = colors.border;
    vars['--input'] = colors.input;
    vars['--ring'] = colors.ring;

    // Chart colors
    Object.entries(colors.chart).forEach(([key, value]) => {
        vars[`--chart-${key}`] = value;
    });

    // Border radius
    vars['--radius'] = theme.borderRadius.DEFAULT;

    // Gradients
    vars['--gradient-hero'] = theme.gradients.hero;
    vars['--gradient-primary'] = theme.gradients.primary;
    vars['--gradient-secondary'] = theme.gradients.secondary;
    vars['--gradient-accent'] = theme.gradients.accent;
    vars['--gradient-subtle'] = theme.gradients.subtle;
    vars['--gradient-dark'] = theme.gradients.dark;

    // Shadows
    vars['--shadow-sm'] = theme.shadows.sm;
    vars['--shadow-md'] = theme.shadows.md;
    vars['--shadow-lg'] = theme.shadows.lg;
    vars['--shadow-xl'] = theme.shadows.xl;
    vars['--shadow-2xl'] = theme.shadows['2xl'];

    // Animation durations
    vars['--duration-fast'] = theme.animations.duration.fast;
    vars['--duration-normal'] = theme.animations.duration.normal;
    vars['--duration-slow'] = theme.animations.duration.slow;

    // Animation easings
    vars['--ease-linear'] = theme.animations.easing.linear;
    vars['--ease-in'] = theme.animations.easing.easeIn;
    vars['--ease-out'] = theme.animations.easing.easeOut;
    vars['--ease-in-out'] = theme.animations.easing.easeInOut;
    vars['--ease-bounce'] = theme.animations.easing.bounce;

    return vars;
}

/**
 * Apply theme to DOM by setting CSS variables on :root
 */
export function applyThemeToDOM(theme: Theme): void {
    if (typeof document === 'undefined') return;

    const vars = themeToCSSVariables(theme);
    const root = document.documentElement;

    Object.entries(vars).forEach(([key, value]) => {
        root.style.setProperty(key, value);
    });

    // Add data attribute for theme identification
    root.setAttribute('data-theme', theme.metadata.id);

    // Handle animations toggle
    if (!theme.animations.enabled) {
        root.style.setProperty('--duration-fast', '0ms');
        root.style.setProperty('--duration-normal', '0ms');
        root.style.setProperty('--duration-slow', '0ms');
    }
}

/**
 * Remove all theme CSS variables from DOM
 */
export function removeThemeFromDOM(): void {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;
    const themeVars = Array.from(root.style).filter(prop =>
        prop.startsWith('--primary') ||
        prop.startsWith('--secondary') ||
        prop.startsWith('--accent') ||
        prop.startsWith('--background') ||
        prop.startsWith('--foreground') ||
        prop.startsWith('--card') ||
        prop.startsWith('--popover') ||
        prop.startsWith('--muted') ||
        prop.startsWith('--destructive') ||
        prop.startsWith('--success') ||
        prop.startsWith('--warning') ||
        prop.startsWith('--info') ||
        prop.startsWith('--border') ||
        prop.startsWith('--input') ||
        prop.startsWith('--ring') ||
        prop.startsWith('--chart') ||
        prop.startsWith('--radius') ||
        prop.startsWith('--gradient') ||
        prop.startsWith('--shadow') ||
        prop.startsWith('--duration') ||
        prop.startsWith('--ease')
    );

    themeVars.forEach(prop => {
        root.style.removeProperty(prop);
    });

    root.removeAttribute('data-theme');
}

/**
 * Get current theme ID from DOM
 */
export function getCurrentThemeFromDOM(): string | null {
    if (typeof document === 'undefined') return null;
    return document.documentElement.getAttribute('data-theme');
}

/**
 * Preload theme by applying it to a hidden element (for faster switching)
 */
export function preloadTheme(theme: Theme): void {
    if (typeof document === 'undefined') return;

    const preloadElement = document.createElement('div');
    preloadElement.style.display = 'none';
    preloadElement.setAttribute('data-theme-preload', theme.metadata.id);

    const vars = themeToCSSVariables(theme);
    Object.entries(vars).forEach(([key, value]) => {
        preloadElement.style.setProperty(key, value);
    });

    document.body.appendChild(preloadElement);

    // Remove after a brief moment (allows CSS to be parsed)
    setTimeout(() => {
        preloadElement.remove();
    }, 100);
}

/**
 * Generate CSS for all themes (useful for SSR/SSG)
 */
export function generateThemeCSS(themes: Theme[]): string {
    return themes.map(theme => {
        const vars = themeToCSSVariables(theme);
        const cssVars = Object.entries(vars)
            .map(([key, value]) => `  ${key}: ${value};`)
            .join('\n');

        return `[data-theme="${theme.metadata.id}"] {\n${cssVars}\n}`;
    }).join('\n\n');
}

/**
 * Merge two themes (useful for theme overrides)
 */
export function mergeThemes(baseTheme: Theme, overrides: Partial<Theme>): Theme {
    return {
        ...baseTheme,
        ...overrides,
        metadata: {
            ...baseTheme.metadata,
            ...overrides.metadata,
        },
        colors: {
            ...baseTheme.colors,
            ...overrides.colors,
        },
        typography: {
            ...baseTheme.typography,
            ...overrides.typography,
        },
        spacing: {
            ...baseTheme.spacing,
            ...overrides.spacing,
        },
        borderRadius: {
            ...baseTheme.borderRadius,
            ...overrides.borderRadius,
        },
        shadows: {
            ...baseTheme.shadows,
            ...overrides.shadows,
        },
        animations: {
            ...baseTheme.animations,
            ...overrides.animations,
        },
        components: {
            ...baseTheme.components,
            ...overrides.components,
        },
        gradients: {
            ...baseTheme.gradients,
            ...overrides.gradients,
        },
    };
}
