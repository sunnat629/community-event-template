# Content Management System

This directory contains all editable content for the Flutter Guild Connect event website. Update these files to change
text, speakers, schedule, and more **without touching component code**.

---

## 📁 File Structure

```
src/content/
├── README.md           # This file
├── index.ts            # Main export (import from here)
├── heroSection.ts      # Hero section content & button URLs
├── eventDetails.ts     # Event date, venue, format
├── agenda.ts           # Event schedule & timeline
├── speakers.ts         # Speaker information
├── organizers.ts       # Event organizers
├── partners.ts         # Partners & sponsors
└── ctaUrls.ts          # All CTA URLs in one place
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

