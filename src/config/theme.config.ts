import {ThemeConfig} from '@/themes';

/**
 * Theme Configuration
 *
 * Control which theme is active and theme behavior.
 * Change `activeTheme` to switch between available themes.
 */
export const themeConfig: ThemeConfig = {
    // Active theme ID - change this to switch themes
    // Available: 'default', 'minimal'
    activeTheme: 'default',

    // Allow users to switch themes at runtime (useful for development/preview)
    allowSwitching: true,

    // Remember user's theme preference in localStorage
    persistPreference: true,

    // Custom theme overrides (optional)
    // Use this to override specific theme properties without creating a new theme
    overrides: undefined,
};

/**
 * Get the active theme ID, checking localStorage if persistence is enabled
 */
export function getActiveThemeId(): string {
    if (themeConfig.persistPreference && typeof window !== 'undefined') {
        const stored = localStorage.getItem('event-site-theme');
        if (stored) {
            return stored;
        }
    }
    return themeConfig.activeTheme;
}

/**
 * Save theme preference to localStorage
 */
export function saveThemePreference(themeId: string): void {
    if (themeConfig.persistPreference && typeof window !== 'undefined') {
        localStorage.setItem('event-site-theme', themeId);
    }
}
