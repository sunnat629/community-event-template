# Content Management System

This directory contains all editable content for the Flutter Guild Connect event website. Update these files to change
text, speakers, schedule, and more **without touching component code**.

---

## 📁 File Structure

```
src/content/
├── README.md           # This file
├── index.ts            # Main export (import from here)
├── siteConfig.ts       # 🌟 Site-wide properties (event title, tagline, etc.)
├── heroSection.ts      # Hero section content & button URLs
├── eventDetails.ts     # Event date, venue, format
├── agenda.ts           # Event schedule & timeline
├── speakers.ts         # Speaker information
├── organizers.ts       # Event organizers
├── partners.ts         # Partners & sponsors
├── ctaUrls.ts          # All CTA URLs in one place
├── venuePreview.ts     # 📍 Venue preview configuration
├── heroBackgrounds.ts  # 🎨 Hero backgrounds configuration
└── ...
```

---

## 🚀 Quick Start

### Import Content in Components

```typescript
// Import everything from one place
import { heroContent, agendaItems, speakers, partners } from '@/content';

// Or import specific items
import { heroContent } from '@/content/heroSection';
import { agendaItems } from '@/content/agenda';
```

---

## 🌟 Site Configuration (`siteConfig.ts`) - START HERE!

**The single source of truth for your event branding and site-wide properties.**

Update the event title, tagline, and other global properties in ONE place:

```typescript
export const siteConfig: SiteConfig = {
  // Event branding - Change these to update throughout the site
  eventTitle: "Flutter Guild 2026",        // ← Main event title
  eventTagline: "Code. Connect. Create.",  // ← Event tagline/motto
  eventYear: "2026",                       // ← Event year
  
  // SEO metadata
  siteDescription: "Join Bangladesh's...", // ← Meta description
  siteKeywords: "Flutter, Flutter Bangladesh...", // ← SEO keywords
  
  // Social media
  ogImageUrl: "https://...",               // ← Open Graph image
  twitterHandle: "@YourHandle",            // ← Twitter handle
  
  // Organization
  organizerName: "Your Organization"       // ← Organizer name
};
```

**What This Updates Automatically:**

- ✅ Browser tab title (dynamically updated)
- ✅ Hero section title and tagline
- ✅ Footer branding (both footer components)
- ✅ Meta tags (title, description, OG tags)
- ✅ All references to the event title across sections
- ✅ Copyright text with event name

**🎯 To change your event title from "Flutter Guild 2026" to something else:**

1. Open `src/content/siteConfig.ts`
2. Update `eventTitle` and `eventTagline`
3. Save the file
4. That's it! ✨ All components update automatically

---

## 📍 Venue Preview (`venuePreview.ts`) - Pro Mode Home

**Beautiful venue showcase for the Pro mode home page.**

Update the venue preview card with your event location and venue image:

```typescript
export const venuePreview: VenuePreview = {
  // Venue background image - Use a high-quality venue photo
  image: "/path/to/venue-image.jpg",     // ← IMPORTANT: Replace with actual venue photo
  
  // Badge text
  badge: "Live Event",                   // ← Badge text (e.g., "Live Event", "In Person")
  
  // Main heading
  title: "Join Us In Person",            // ← Section title
  
  // Venue details
  venueName: "Brain Station 23 HQ",      // ← Venue name
  address: {
    line1: "Plot 1/A, Road 113",         // ← Address line 1
    line2: "Gulshan-2, Dhaka-1212",      // ← Address line 2
    country: "Bangladesh"                 // ← Country
  },
  
  // Quick information
  quickInfo: {
    time: "9 AM - 6 PM",                 // ← Event timing
    capacity: "500+ Capacity"             // ← Venue capacity
  },
  
  // Call-to-action
  ctaText: "View Venue Details & Map",   // ← Button text
  ctaLink: "/venue"                       // ← Button link
};
```

**What This Updates:**

- ✅ Pro mode home page venue section
- ✅ Venue card background image with gradient overlay
- ✅ Venue name and address
- ✅ Event timing and capacity
- ✅ Call-to-action button

**🎯 How to Update Venue Image:**

1. **Add your venue photo** to the `public` folder (e.g., `public/venue-photo.jpg`)
2. **Open** `src/content/venuePreview.ts`
3. **Update** the `image` field: `image: "/venue-photo.jpg"`
4. **Save** - The venue card will now show your image with a beautiful gradient overlay!

**💡 Pro Tips:**

- Use a **high-resolution** venue photo (at least 1200x800px)
- Photos with **good lighting** work best
- The image will have a **gradient overlay** (primary/secondary colors)
- **Landscape orientation** photos work better for this card layout
- Consider photos showing the venue's **interior** or **exterior ambiance**

---

## 🎨 Hero Backgrounds (`heroBackgrounds.ts`) - All Pro Pages

**Unified hero section backgrounds across all dedicated pages for a cohesive, professional look.**

Each page (Speakers, Agenda, Sponsors, Venue, Team) has a stunning hero section with a themed background image.
Customize all hero backgrounds from ONE central file:

```typescript
export const heroBackgrounds: HeroBackgrounds = {
  // Home page hero
  home: {
    image: "/hero-bg.jpg",              // ← Your main hero image
    overlayOpacity: 88,                 // ← 88-90 recommended
    blurAmount: 1                        // ← Subtle blur (0.5-2)
  },

  // Speakers page - Conference/presentation theme
  speakers: {
    image: "https://...",               // ← Conference/audience photo
    overlayOpacity: 90,
    blurAmount: 1
  },

  // Agenda page - Planning/schedule theme
  agenda: {
    image: "https://...",               // ← Modern workspace/planning
    overlayOpacity: 90,
    blurAmount: 1
  },

  // Sponsors page - Partnership theme
  sponsors: {
    image: "https://...",               // ← Handshake/partnership photo
    overlayOpacity: 90,
    blurAmount: 1
  },

  // Venue page - Location/building theme
  venue: {
    image: "https://...",               // ← Building/location photo
    overlayOpacity: 88,
    blurAmount: 1
  },

  // Team page - Collaboration theme
  team: {
    image: "https://...",               // ← Team/people photo
    overlayOpacity: 90,
    blurAmount: 1
  }
};
```

**What This Updates:**

- ✅ Hero section background for **all Pro mode pages**
- ✅ Consistent height and styling across pages
- ✅ Gradient overlay with your theme colors
- ✅ Responsive zoom effect on hover
- ✅ Professional, polished appearance

**🎯 How to Customize Hero Backgrounds:**

1. **Find or take photos** for each page theme:
    - **Speakers**: Conference room, audience, presentation
    - **Agenda**: Calendar, planning, workspace
    - **Sponsors**: Handshake, partnership, business meeting
    - **Venue**: Building exterior/interior, location
    - **Team**: People collaborating, teamwork

2. **Add images to** `public` folder or **use URLs** (Unsplash, your CDN)

3. **Open** `src/content/heroBackgrounds.ts`

4. **Update image URLs**:
   ```typescript
   speakers: {
     image: "/images/speakers-hero.jpg",  // Local file
     overlayOpacity: 90,
     blurAmount: 1
   }
   ```

5. **Adjust overlay** if needed:
    - `88-90`: Perfect balance (recommended)
    - `85-87`: More image visible
    - `91-95`: Text more readable

6. **Save** - All hero sections update automatically!

**💡 Pro Tips:**

- **Consistency**: Use photos with similar lighting/mood
- **Resolution**: Minimum 1920x1080px for each image
- **Orientation**: Landscape (16:9 or 21:9 ratio)
- **Overlay**: Keep between 88-90 for best results
- **Blur**: 1px is optimal, don't exceed 2px
- **Theme**: Images should match their page purpose
- **Quality**: Use high-quality, professional photos
- **Colors**: Choose photos that complement your brand colors

**🎨 Hero Design System:**

All hero sections now share:

- ✅ **Fixed height**: Consistent across all pages
- ✅ **Gradient overlay**: Your theme colors (primary → secondary)
- ✅ **White text**: Always readable with overlay
- ✅ **Subtle blur**: 1px backdrop blur for depth
- ✅ **Hover effect**: Image zooms slightly on hover
- ✅ **Responsive**: Works perfectly on all devices
- ✅ **Badges**: Themed badges with icons
- ✅ **Professional**: Enterprise-grade appearance

**📸 Where to Find Hero Images:**

- **Unsplash** (free): https://unsplash.com
- **Pexels** (free): https://pexels.com
- **Your event photos**: Use from previous events
- **Venue photos**: Ask venue for high-res images
- **Stock photos**: Use licensed corporate images

---

## 🎠 Auto-Rotating Carousels (Pro Mode)

**Professional horizontal carousels with auto-rotation**

### Featured Speakers Carousel

- **Component**: `FeaturedSpeakersCarousel` (`src/components/shared/FeaturedSpeakersCarousel.tsx`)
- **Location**: Pro Mode Home Page - Featured Speakers section
- **Auto-rotation**: 4 seconds per slide
- **Features**:
    - Horizontal scrolling carousel
    - Auto-rotation with pause on hover
    - Previous/Next navigation buttons
    - Keyboard navigation (← →)
    - Responsive: 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)
    - Smooth animations with scale effect
    - Auto-rotate indicator badge

### Premium Sponsors Carousel

- **Component**: `PremiumSponsorsCarousel` (`src/components/shared/PremiumSponsorsCarousel.tsx`)
- **Location**: Pro Mode Home Page - Partners & Sponsors section
- **Auto-rotation**: 3.5 seconds per slide
- **Displays**: Only Platinum and Gold sponsors
- **Features**:
    - Horizontal scrolling carousel
    - Auto-rotation with pause on hover
    - Previous/Next navigation buttons
    - Keyboard navigation (← →)
    - Responsive: 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)
    - Smooth animations with scale effect
    - Auto-rotate indicator badge

### 🎯 Carousel Behavior

**Auto-rotation:**

- Automatically advances every 3.5-4 seconds
- **Pauses on hover** - User can read content
- **Stops on interaction** - User clicks/drags carousel
- **Resumes after** - User moves mouse away

**Keyboard Navigation:**

- Press `←` (Left Arrow) to go to previous slide
- Press `→` (Right Arrow) to go to next slide

**Touch/Drag:**

- Swipe left/right on mobile devices
- Drag with mouse on desktop

### 🎨 UX Benefits

1. **Auto-rotation** - Showcases all speakers/sponsors automatically
2. **Pause on hover** - Respects user's reading time
3. **Smooth animations** - Professional, polished experience
4. **Keyboard accessible** - Better accessibility
5. **Mobile-friendly** - Touch gestures work perfectly
6. **Visual indicator** - Shows carousel is auto-rotating

**Pro Tip:** The carousels automatically show all speakers/sponsors. No need to manually update - just add content to
`speakers.ts` or `partners.ts`!

---

## 📝 How to Update Content

### 1. Hero Section (`heroSection.ts`)

Update main title, tagline, description, and button labels/URLs:

```typescript
export const heroContent = {
  title: "Flutter Guild 2026",           // ← Main event title
  tagline: "Code. Connect. Create.",     // ← Subtitle
  description: "Join Bangladesh's...",   // ← Main description
  
  eventInfo: {
    date: "Coming Soon 2025",            // ← Event date
    location: "Dhaka, Bangladesh"        // ← Event location
  },
  
  buttons: {
    register: {
      label: "Register Now",
      url: "#register"                   // ← Update with real URL
    },
    // ... more buttons
  }
};
```

**What This Updates:**

- Hero section title and text
- Event date/location badges
- All hero CTA button labels and URLs

---

### 2. Event Details (`eventDetails.ts`)

Update event information displayed in the Event Details section:

```typescript
export const eventDetails = {
  date: {
    display: "Coming Soon 2025",         // ← Date shown to users
    announcement: "To be announced...",  // ← Additional date info
  },
  
  venue: {
    city: "Dhaka, Bangladesh",           // ← City/Country
    location: "Exact location...",       // ← Venue details
  },
  
  format: {
    type: "Full-day in-person event",    // ← Event format
    description: "Keynotes, workshops..." // ← What's included
  },
  
  included: [                            // ← What attendees get
    {
      title: "High-Speed WiFi",
      description: "Stay connected..."
    },
    // ... add more items
  ]
};
```

**What This Updates:**

- Event Details section cards
- Date, venue, format, audience info
- "What's Included" items

---

### 3. Event Agenda (`agenda.ts`)

Update the event schedule:

```typescript
export const agendaItems: AgendaItem[] = [
  {
    time: "9:00 AM",                     // ← Start time
    endTime: "10:00 AM",                 // ← End time
    title: "Registration & Breakfast",   // ← Session title
    description: "Check-in, networking...", // ← Description
    speaker: "TBA",                      // ← Speaker (optional)
    type: "break",                       // ← Type (keynote, session, etc.)
    track: "all",                        // ← Track filter
    duration: "60 min",                  // ← Duration
    location: "Main Hall"                // ← Location
  },
  // ... add more agenda items
];
```

**Session Types:**

- `keynote` - Opening/closing keynotes
- `session` - Technical talks
- `workshop` - Hands-on workshops
- `panel` - Panel discussions
- `break` - Breaks and meals
- `closing` - Closing ceremony

**Tracks:**

- `all` - Shows in all filters
- `technical` - Technical track
- `workshop` - Workshop track
- `career` - Career track
- `community` - Community track

**What This Updates:**

- Entire agenda timeline
- Filter options
- All session details

---

### 4. Speakers (`speakers.ts`)

Update speaker information:

```typescript
// Featured speakers (large cards)
export const featuredSpeakers: Speaker[] = [
  {
    name: "Dr. Sarah Chen",              // ← Speaker name
    title: "Google Developer Expert",    // ← Job title
    topic: "The Future of Flutter...",   // ← Talk topic
    image: "👩‍💻",                       // ← Emoji or image URL
    featured: true
  },
  // ... add more featured speakers (max 3 recommended)
];

// Other speakers (compact cards)
export const otherSpeakers: Speaker[] = [
  {
    name: "Ashik Ahmed",
    title: "Flutter Community Leader",
    topic: "Building Real-time Apps",
    image: "👨‍🎓"
  },
  // ... add more speakers
];
```

**What This Updates:**

- Featured Speakers section (3 large cards)
- More Amazing Speakers section (grid of cards)

**Tips:**

- Use emojis for quick setup: 👨‍💻👩‍💻👨‍💼👩‍🔬
- Or use image URLs: `"https://example.com/photo.jpg"`
- Keep featured speakers to 3 for best layout

---

### 5. Organizers (`organizers.ts`)

Update event organizers:

```typescript
export const organizers: Organizer[] = [
  {
    name: "Sunnat629 Labs",                    // ← Organizer name
    description: "Innovation lab focused...",  // ← Description
    icon: Rocket                               // ← Icon from lucide-react
  },
  {
    name: "Flutter Bangladesh",
    description: "Bangladesh's largest...",
    icon: Users
  }
  // ... add more organizers
];
```

**Available Icons:**

- `Rocket` - Tech companies/labs
- `Users` - Communities
- `Building2` - Organizations
- `Award` - Special organizers

**What This Updates:**

- Organized By section
- All organizer cards displayed dynamically

---

### 6. Partners & Sponsors (`partners.ts`)

Update partners and sponsors:

```typescript
export const partners: Partner[] = [
  { 
    name: "Brain Station 23",           // ← Company name
    role: "Venue Partner",              // ← Sponsor tier/role
    icon: Building2                     // ← Icon from lucide-react
  },
  // ... add more partners
];
```

**Available Icons:**

- `Building2` - Buildings/companies
- `Award` - Platinum/premium sponsors
- `Star` - Gold sponsors
- `Users` - Community partners
- `Sparkles` - Special partners

**What This Updates:**

- Partners & Sponsors grid
- Company names and roles

---

### 7. CTA URLs (`ctaUrls.ts`)

Central location for all button/link URLs:

```typescript
export const ctaUrls = {
  // Registration
  register: "#register",                           // ← Update with Google Form, etc.
  
  // Speaker applications
  callForSpeakers: "#call-for-speakers",          // ← Speaker submission form
  submitTalkProposal: "#submit-talk",
  
  // Sponsorship
  becomeASponsor: "#sponsor",                     // ← Sponsorship page
  viewSponsorPackage: "#sponsor-package",         // ← PDF or page
  contactSponsorshipTeam: "mailto:sponsors@...",  // ← Email
  
  // Volunteering
  becomeAVolunteer: "#volunteer",                 // ← Volunteer form
  
  // Social media
  joinCommunity: "https://discord.gg/...",        // ← Discord invite
  twitter: "https://twitter.com/...",
  linkedin: "https://linkedin.com/company/...",
};
```

**What This Updates:**

- All button URLs across the site
- Social media links
- Contact emails

**URL Types:**

- `#anchor` - Internal page anchor
- `https://...` - External link
- `mailto:...` - Email link

---

## 🎯 Common Update Scenarios

### Scenario 1: Update Event Date

**File:** `heroSection.ts` + `eventDetails.ts`

```typescript
// heroSection.ts
eventInfo: {
  date: "March 15, 2025",  // ← Update here
  location: "Dhaka, Bangladesh"
}

// eventDetails.ts
date: {
  display: "March 15, 2025",  // ← And here
  announcement: "Save the date!",
}
```

---

### Scenario 2: Add New Speaker

**File:** `speakers.ts`

```typescript
// Add to otherSpeakers array
export const otherSpeakers: Speaker[] = [
  // ... existing speakers
  {
    name: "Your Name",
    title: "Your Title",
    topic: "Your Talk Topic",
    image: "👨‍💻"
  }
];
```

---

### Scenario 3: Update Registration URL

**File:** `ctaUrls.ts`

```typescript
export const ctaUrls = {
  register: "https://forms.google.com/your-form",  // ← Update here
  // ... rest
};
```

Then this URL is automatically used in:

- Hero section "Register Now" button
- CTA section register button
- Any other register links

---

### Scenario 4: Change Agenda Time

**File:** `agenda.ts`

```typescript
{
  time: "9:30 AM",           // ← Change start time
  endTime: "10:30 AM",       // ← Change end time
  title: "Registration",
  // ... rest stays the same
}
```

---

### Scenario 5: Add New Partner

**File:** `partners.ts`

```typescript
export const partners: Partner[] = [
  // ... existing partners
  {
    name: "New Company",
    role: "Silver Sponsor",
    icon: Star
  }
];
```

---

## ✅ Testing Your Changes

After updating content:

1. **Save the file** - Changes are automatically detected
2. **Check the browser** - Hot reload will update the page
3. **Verify all sections** - Make sure text appears correctly
4. **Test links** - Click buttons to ensure URLs work
5. **Check responsive** - View on mobile/tablet

---

## 🚨 Important Notes

### DO ✅

- Update content in these files
- Keep data structure consistent
- Use TypeScript types provided
- Test changes locally
- Commit changes to git

### DON'T ❌

- Don't edit component files directly
- Don't break TypeScript types
- Don't remove required fields
- Don't forget to test URLs
- Don't commit sensitive data

---

## 📚 TypeScript Types Reference

### `AgendaItem`

```typescript
{
  time: string;              // "9:00 AM"
  endTime: string;           // "10:00 AM"
  title: string;             // Session name
  description: string;       // Details
  speaker?: string;          // Optional speaker name
  icon: LucideIcon;          // Icon component
  type: SessionType;         // keynote | session | workshop | panel | break | closing
  track: TrackType;          // all | technical | workshop | career | community
  duration: string;          // "60 min"
  location: string;          // Venue/room name
}
```

### `Speaker`

```typescript
{
  name: string;              // Full name
  title: string;             // Job title
  topic: string;             // Talk topic
  image: string;             // Emoji or URL
  featured?: boolean;        // Optional, for featured speakers
}
```

### `Organizer`

```typescript
{
  name: string;              // Organizer name
  description: string;       // Description
  icon: LucideIcon;          // Icon component
}
```

### `Partner`

```typescript
{
  name: string;              // Company name
  role: string;              // Sponsorship tier
  icon: LucideIcon;          // Icon component
}
```

---

## 🆘 Need Help?

### Common Issues

**Q: Changes not appearing?**

- A: Make sure file is saved and dev server is running

**Q: TypeScript errors?**

- A: Check that all required fields are provided
- A: Verify data types match the interface

**Q: Icons not showing?**

- A: Import icon from lucide-react
- A: Use exact icon name (case-sensitive)

**Q: URLs not working?**

- A: Check URL format (https://, mailto:, #anchor)
- A: Test in browser after updating

---

## 📞 Support

For questions or issues:

- Check this README first
- Review TypeScript types
- Test locally before deploying
- Ask the development team

---

**Happy content editing! 🎉**

*Last updated: 2025*

