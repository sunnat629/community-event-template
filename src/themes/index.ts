/**
 * Theme Registry
 *
 * Central export point for all available themes.
 * Import themes from here to ensure consistency across the application.
 */

import {Theme, ThemeRegistry, DEFAULT_THEME_ID} from './types';
import {defaultTheme} from './default.theme';
import {minimalTheme} from './minimal.theme';

// Theme Registry - Add new themes here
export const themes: ThemeRegistry = {
    [defaultTheme.metadata.id]: defaultTheme,
    [minimalTheme.metadata.id]: minimalTheme,
};

// Export individual themes for direct access
export {defaultTheme, minimalTheme};

// Export types
export * from './types';

/**
 * Get a theme by ID
 * @param themeId - The ID of the theme to retrieve
 * @returns The theme object or the default theme if not found
 */
export function getTheme(themeId: string): Theme {
    return themes[themeId] || themes[DEFAULT_THEME_ID];
}

/**
 * Get all available themes
 * @returns Array of all theme objects
 */
export function getAllThemes(): Theme[] {
    return Object.values(themes);
}

/**
 * Get theme metadata for all themes (useful for theme selectors)
 * @returns Array of theme metadata
 */
export function getThemeMetadata() {
    return getAllThemes().map(theme => theme.metadata);
}

/**
 * Check if a theme ID exists
 * @param themeId - The theme ID to check
 * @returns True if theme exists
 */
export function themeExists(themeId: string): boolean {
    return themeId in themes;
}

/**
 * Get the default theme
 * @returns The default theme object
 */
export function getDefaultTheme(): Theme {
    return themes[DEFAULT_THEME_ID];
}
