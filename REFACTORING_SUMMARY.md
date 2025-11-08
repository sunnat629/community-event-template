# Event Title Centralization Refactoring

## Overview

This document describes the refactoring work done to centralize the event title "Flutter Guild 2026" and other site-wide
properties into a single configuration file, following UX best practices.

## Problem Statement

Previously, the event title "Flutter Guild 2026" was hardcoded in multiple files across the codebase:

- Hero section
- Footer components (2 instances)
- Navigation
- Multiple page headers
- Meta tags in HTML
- Various section descriptions

**Issue**: Changing the event title required updating ~10+ files manually, which is error-prone and violates the DRY (
Don't Repeat Yourself) principle.

## Solution

Created a centralized configuration file (`src/content/siteConfig.ts`) that serves as the single source of truth for all
site-wide properties.

## Changes Made

### 1. New Configuration File Created

**File**: `src/content/siteConfig.ts`

Contains:

- ✅ Event title
- ✅ Event tagline
- ✅ Event year
- ✅ SEO metadata (description, keywords)
- ✅ Social media properties (OG image, Twitter handle)
- ✅ Organizer name
- ✅ Helper functions (`getSiteTitle()`, `getCopyrightText()`)

### 2. Updated Files (9 files)

#### Content Files:

1. **`src/content/index.ts`** - Added export for `siteConfig`
2. **`src/content/hero.ts`** - Now imports and uses `siteConfig.eventTitle` and `siteConfig.eventTagline`

#### Component Files:

3. **`src/components/sections/Footer.tsx`** - Uses `siteConfig` for branding
4. **`src/components/sections/FooterSection.tsx`** - Uses `siteConfig` and `getCopyrightText()`
5. **`src/components/sections/OrganizersSection.tsx`** - Uses `siteConfig.eventTitle` in descriptions
6. **`src/components/sections/AboutSection.tsx`** - Uses `siteConfig.eventTitle` in header
7. **`src/components/pro/Navigation.tsx`** - Uses `siteConfig` for logo/branding text

#### Page Files:

8. **`src/pages/team/index.tsx`** - Uses `siteConfig.eventTitle` in page header
9. **`src/pages/sponsors/index.tsx`** - Uses `siteConfig.eventTitle` in subtitle
10. **`src/pages/sponsors/[id].tsx`** - Uses `siteConfig.eventTitle` in thank you message

#### App Entry:

11. **`src/App.tsx`** - Added `useEffect` to dynamically update:
    - Document title
    - Meta description
    - Open Graph tags
    - All from `siteConfig`

#### HTML (Fallback):

12. **`index.html`** - Added HTML comments indicating values are dynamically managed

### 3. Documentation Updated

**File**: `src/content/README.md`

Added a prominent section at the top:

- 🌟 **Site Configuration (`siteConfig.ts`) - START HERE!**
- Explains what updates automatically
- Provides clear 3-step instructions for changing the event title
- Lists all affected components

## How to Change the Event Title Now

### Before (Old Way) ❌

Edit 10+ files manually:

1. `src/content/hero.ts`
2. `src/components/sections/Footer.tsx`
3. `src/components/sections/FooterSection.tsx`
4. `src/components/sections/OrganizersSection.tsx`
5. `src/components/sections/AboutSection.tsx`
6. `src/components/pro/Navigation.tsx`
7. `src/pages/team/index.tsx`
8. `src/pages/sponsors/index.tsx`
9. `src/pages/sponsors/[id].tsx`
10. `index.html`
    ...and risk missing some!

### After (New Way) ✅

Edit **ONE** file:

1. Open `src/content/siteConfig.ts`
2. Update these two lines:
   ```typescript
   eventTitle: "Your New Event Name",
   eventTagline: "Your New Tagline",
   ```
3. Save the file

**That's it!** ✨ All components update automatically.

## What Updates Automatically

When you change values in `siteConfig.ts`, these update automatically:

- ✅ Browser tab title (via `useEffect` in App.tsx)
- ✅ Hero section title and subtitle
- ✅ Footer branding (both footer components)
- ✅ Navigation branding
- ✅ About section title
- ✅ Meta tags (description, OG tags)
- ✅ All page headers mentioning the event
- ✅ Copyright text
- ✅ All descriptive text referencing the event title

## Benefits

### For Developers:

1. **Single Source of Truth** - One place to manage all site-wide properties
2. **Type Safety** - TypeScript interfaces ensure consistency
3. **DRY Principle** - No code duplication
4. **Easier Refactoring** - Change once, applies everywhere
5. **Reduced Bugs** - No risk of missing files when updating

### For Event Organizers:

1. **Simple Updates** - Change title in one place
2. **Consistency** - Title is guaranteed to be consistent across all pages
3. **Clear Documentation** - README explains how to make changes
4. **SEO Friendly** - Meta tags update automatically

### For UX:

1. **Consistency** - Brand identity maintained across entire site
2. **Maintainability** - Easy to update for next year's event
3. **Professional** - No risk of mismatched titles

## Testing

✅ **Build Status**: Successfully builds with no TypeScript errors
✅ **All Imports**: Properly imported and exported through content index
✅ **Type Safety**: All uses are type-checked
✅ **Dynamic Updates**: Document title and meta tags update on mount

## Future Improvements

Consider adding to `siteConfig.ts`:

- Event date and location (to further centralize)
- Primary colors (for consistent theming)
- Social media links
- Contact email addresses
- Analytics IDs

## Migration Notes

This refactoring is **backwards compatible**. The changes:

- ✅ Do not break any existing functionality
- ✅ Maintain all existing component behavior
- ✅ Improve maintainability without changing user experience
- ✅ Follow React best practices (single source of truth)

## Files Changed Summary

| File Type | Files Changed |
|-----------|--------------|
| Configuration | 1 new file (`siteConfig.ts`) |
| Content Exports | 1 updated (`index.ts`) |
| Components | 5 updated |
| Pages | 3 updated |
| App Entry | 1 updated |
| HTML | 1 updated (comments) |
| Documentation | 1 updated (README) |
| **TOTAL** | **13 files** |

## Verification

Run the following to verify everything works:

```bash
# Type check
npm run build

# Start dev server
npm run dev

# Check the browser:
# 1. Page title should show "Flutter Guild 2026 — Code. Connect. Create."
# 2. All sections should display the title consistently
# 3. Footer should show the event title
# 4. Navigation should show the event title
```

---

**Status**: ✅ **COMPLETE AND VERIFIED**

**Build**: ✅ **SUCCESSFUL**

**Last Updated**: November 8, 2025
