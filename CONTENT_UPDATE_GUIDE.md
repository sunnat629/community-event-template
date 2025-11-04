# Quick Content Update Guide

> **📍 Location**: All content files are in `src/content/`

This guide shows you exactly which file to edit for common updates.

---

## 🎯 Quick Reference

| What to Update | File to Edit | Line(s) |
|----------------|--------------|---------|
| Event title | `heroSection.ts` | Line 5 |
| Event date | `heroSection.ts` + `eventDetails.ts` | Lines 14, 8 |
| Event location | `heroSection.ts` + `eventDetails.ts` | Lines 15, 13 |
| Registration URL | `ctaUrls.ts` | Line 6 |
| Speaker submission URL | `ctaUrls.ts` | Line 10 |
| Sponsor contact URL | `ctaUrls.ts` | Line 15 |
| Add speaker | `speakers.ts` | Add to array |
| Add agenda item | `agenda.ts` | Add to array |
| Add partner | `partners.ts` | Add to array |

---

## 📝 Common Updates

### 1. Update Event Date & Location

**Files**: `src/content/heroSection.ts` + `src/content/eventDetails.ts`

```typescript
// heroSection.ts - Line 14-15
eventInfo: {
  date: "March 15, 2025",        // ← Update here
  location: "Dhaka, Bangladesh"  // ← Update here
}

// eventDetails.ts - Line 8-9
date: {
  display: "March 15, 2025",     // ← Update here too
  announcement: "Save the date!",
}
```

---

### 2. Update Button URLs

**File**: `src/content/ctaUrls.ts`

```typescript
export const ctaUrls = {
  // Main registration - Line 6
  register: "https://forms.google.com/YOUR-FORM",
  
  // Speaker applications - Line 10
  callForSpeakers: "https://forms.google.com/SPEAKER-FORM",
  
  // Sponsorship - Line 14-16
  becomeASponsor: "https://your-site.com/sponsor",
  viewSponsorPackage: "https://your-site.com/sponsor-pdf",
  contactSponsorshipTeam: "mailto:sponsors@yoursite.com",
};
```

**This automatically updates:**

- Hero section buttons
- CTA section buttons
- All register/sponsor links across the site

---

### 3. Add New Speaker

**File**: `src/content/speakers.ts`

**For Featured Speaker (large card):**

```typescript
// Add to featuredSpeakers array - Line 13
export const featuredSpeakers: Speaker[] = [
  // ... existing speakers
  {
    name: "New Speaker Name",
    title: "Job Title/Company",
    topic: "Talk Title",
    image: "👨‍💻",  // or image URL
    featured: true
  }
];
```

**For Regular Speaker (small card):**

```typescript
// Add to otherSpeakers array - Line 38
export const otherSpeakers: Speaker[] = [
  // ... existing speakers
  {
    name: "Speaker Name",
    title: "Job Title",
    topic: "Talk Topic",
    image: "👩‍💻"
  }
];
```

---

### 4. Update Agenda/Schedule

**File**: `src/content/agenda.ts`

**To add new session:**

```typescript
// Add to agendaItems array - Line 19
{
  time: "2:00 PM",
  endTime: "3:00 PM",
  title: "Your Session Title",
  description: "Session description",
  speaker: "Speaker Name",  // optional
  icon: Code,               // Coffee, Code, Users, Presentation, Award, Zap
  type: "session",          // keynote, session, workshop, panel, break, closing
  track: "technical",       // all, technical, workshop, career, community
  duration: "60 min",
  location: "Room Name"
}
```

**To update existing session:**

```typescript
// Find the session in the array and edit
{
  time: "9:30 AM",          // ← Change time
  endTime: "10:30 AM",      // ← Change end time
  title: "Updated Title",   // ← Change title
  // ... update any field you need
}
```

---

### 5. Add Partner/Sponsor

**File**: `src/content/partners.ts`

```typescript
// Add to partners array - Line 13
export const partners: Partner[] = [
  // ... existing partners
  {
    name: "Company Name",
    role: "Sponsorship Tier",  // e.g., "Gold Sponsor", "Venue Partner"
    icon: Building2            // Building2, Award, Star, Users, Sparkles
  }
];
```

**Available Icons:**

- `Building2` - General companies
- `Award` - Premium/Platinum sponsors
- `Star` - Gold/Silver sponsors
- `Users` - Community partners
- `Sparkles` - Special partners

---

### 6. Update Event Details

**File**: `src/content/eventDetails.ts`

```typescript
// Update any field in the object
export const eventDetails = {
  date: {
    display: "March 15, 2025",           // ← Visible date
    announcement: "Registration opens soon",
  },
  
  venue: {
    city: "Dhaka, Bangladesh",
    location: "Radisson Blu, Dhaka",     // ← Actual venue
  },
  
  format: {
    type: "Full-day in-person event",
    description: "Keynotes, workshops..."
  },
  
  // Add/remove items from "What's Included"
  included: [
    { title: "WiFi", description: "High-speed..." },
    { title: "Food", description: "Lunch and snacks" },
    // Add more items here
  ]
};
```

---

## 🔄 Update Workflow

1. **Find the right file** using table above
2. **Edit the content** (keep the data structure)
3. **Save the file** (Ctrl+S / Cmd+S)
4. **Check browser** (auto-reloads with changes)
5. **Test the changes** (click links, verify text)
6. **Commit to git** when ready

```bash
git add src/content/
git commit -m "Update event details"
git push
```

---

## 📁 File Structure

```
src/content/
├── README.md          ← Full documentation
├── index.ts           ← Don't edit (exports everything)
├── heroSection.ts     ← Hero text & button URLs
├── eventDetails.ts    ← Event info cards
├── agenda.ts          ← Schedule/timeline
├── speakers.ts        ← All speakers
├── partners.ts        ← Partners/sponsors
└── ctaUrls.ts         ← All URLs in one place
```

---

## ⚠️ Important Rules

### DO ✅

- Keep the data structure (don't remove required fields)
- Use quotes for text: `"text here"`
- End lines with comma: `},`
- Save file after editing
- Test changes before committing

### DON'T ❌

- Don't edit component files (`.tsx` files)
- Don't break the TypeScript syntax
- Don't remove commas or brackets
- Don't commit without testing

---

## 🆘 Common Issues

### Changes not showing?

- Save the file (Ctrl+S)
- Refresh browser (Ctrl+R)
- Check dev server is running

### Red underline (error)?

- Check for missing comma
- Check for missing quote
- Check field name spelling
- Compare with existing items

### Link not working?

- Check URL starts with `https://` or `mailto:` or `#`
- Test URL in browser first
- No spaces in URLs

---

## 📞 Need Help?

1. Check `src/content/README.md` for detailed docs
2. Look at existing examples in the files
3. Ask the development team

---

## 📊 Content Checklist

Before going live, make sure you've updated:

- [ ] Event date in both hero and details
- [ ] Event venue/location
- [ ] Registration URL (Google Form, etc.)
- [ ] Speaker submission URL
- [ ] Sponsorship contact email
- [ ] All speaker information
- [ ] Complete agenda schedule
- [ ] Partner/sponsor list
- [ ] Social media links
- [ ] Volunteer form URL

---

**Quick Tip**: Keep this guide open while editing! 📌

*Last updated: 2025*
