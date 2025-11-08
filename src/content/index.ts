// Content Management System - Main Export File
// Import content from this file: import { speakers, eventDetails, etc. } from '@/content'

// Site Configuration (Global)
export {siteConfig, getSiteTitle, getCopyrightText} from './siteConfig';
export type {SiteConfig} from './siteConfig';

// Hero Backgrounds (All Pages)
export {heroBackgrounds, getHeroBackgroundStyles, getHeroOverlayClass, getHeroBlurClass} from './heroBackgrounds';
export type {HeroBackground, HeroBackgrounds} from './heroBackgrounds';

// Event Information
export {eventDetails} from './eventDetails';
export type {EventDetails} from './eventDetails';

// Hero Section
export {heroContent} from './hero';
export type {HeroContent, HeroButton, HeroEventInfo} from './hero';

// Venue Preview (Pro Mode)
export {venuePreview} from './venuePreview';
export type {VenuePreview} from './venuePreview';

// Speakers and Partners
export {featuredSpeakers, otherSpeakers} from './speakers';
export {partners} from './partners';
export type {Speaker} from './speakers';
export type {Partner} from './partners';

// Agenda and Schedule
export {agendaItems, tracks} from './agenda';
export type {AgendaItem} from './agenda';

// Organizers
export {mainOrganizer, coOrganizers} from './organizers';
export type {Organizer} from './organizers';

// Organizer Team
export {organizerTeam} from './organizerTeam';
export type {OrganizerTeamMember} from './organizerTeam';

// Attribution (for open-source template)
export {attribution} from './attribution';
export type {Attribution} from './attribution';