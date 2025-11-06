import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {siteConfig, type EventMode} from "@/config/site.config"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Event Mode Utilities
 * Helper functions for managing lite vs pro event modes
 */

/**
 * Get the current event mode from config
 */
export function getEventMode(): EventMode {
    return siteConfig.eventMode.mode;
}

/**
 * Check if current event is in lite mode (single-page)
 */
export function isLiteMode(): boolean {
    return siteConfig.eventMode.mode === 'lite';
}

/**
 * Check if current event is in pro mode (multi-route)
 */
export function isProMode(): boolean {
    return siteConfig.eventMode.mode === 'pro';
}

/**
 * Recommend event mode based on event scale
 * This helps organizers choose the right architecture
 */
export function getRecommendedMode(): EventMode {
    const {scale} = siteConfig.eventMode;

    // Pro mode recommended if:
    // - Multi-day event
    // - 20+ speakers
    // - 2+ parallel tracks
    // - 30+ sessions
    const shouldUsePro =
        scale.duration === 'multi-day' ||
        scale.speakerCount >= 20 ||
        scale.parallelTracks >= 2 ||
        scale.sessionCount >= 30;

    return shouldUsePro ? 'pro' : 'lite';
}

/**
 * Check if current mode matches recommended mode
 */
export function isModeOptimal(): boolean {
    return siteConfig.eventMode.mode === getRecommendedMode();
}

/**
 * Get mode mismatch warning message
 */
export function getModeMismatchWarning(): string | null {
    if (isModeOptimal()) return null;

    const recommended = getRecommendedMode();
    const current = siteConfig.eventMode.mode;

    if (recommended === 'pro' && current === 'lite') {
        return '⚠️ Your event scale suggests using "pro" mode for better performance and UX. Consider switching to multi-route architecture.';
    }

    if (recommended === 'lite' && current === 'pro') {
        return 'ℹ️ Your event is small enough for "lite" mode. Consider using single-page architecture for simpler setup.';
    }

    return null;
}

/**
 * Check if a pro feature is enabled
 */
export function isProFeatureEnabled(feature: keyof typeof siteConfig.eventMode.features): boolean {
    return siteConfig.eventMode.features[feature];
}

/**
 * Get navigation structure based on event mode
 */
export function getNavigationRoutes() {
    const mode = getEventMode();

    if (mode === 'lite') {
        // Single-page with anchor links
        return [
            {label: 'About', href: '#about', type: 'anchor'},
            {label: 'Speakers', href: '#speakers', type: 'anchor'},
            {label: 'Agenda', href: '#agenda', type: 'anchor'},
            {label: 'Sponsors', href: '#sponsors', type: 'anchor'},
            {label: 'Venue', href: '#venue', type: 'anchor'},
        ];
    } else {
        // Multi-route with dedicated pages
        return [
            {label: 'Home', href: '/', type: 'route'},
            {label: 'Speakers', href: '/speakers', type: 'route'},
            {label: 'Schedule', href: '/agenda', type: 'route'},
            {label: 'Sponsors', href: '/sponsors', type: 'route'},
            {label: 'Venue', href: '/venue', type: 'route'},
        ];
    }
}
