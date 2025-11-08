# Quick Start: Change Event Title

## 🎯 Want to change "Flutter Guild 2026" to your event name?

### It's now super simple - just 3 steps!

---

## Step 1: Open the config file

Open: **`src/content/siteConfig.ts`**

## Step 2: Update these values

```typescript
export const siteConfig: SiteConfig = {
  // 👇 CHANGE THESE TWO LINES
  eventTitle: "Flutter Guild 2026",        // ← Your event name
  eventTagline: "Code. Connect. Create.",  // ← Your tagline
  eventYear: "2026",                       // ← Your event year
  
  // Optionally update these too:
  siteDescription: "Join Bangladesh's premier Flutter community event...",
  organizerName: "Your Organization Name"
};
```

## Step 3: Save and done! ✨

That's it! The title now updates automatically in:

- ✅ Browser tab title
- ✅ Hero section
- ✅ Footer
- ✅ Navigation
- ✅ About section
- ✅ All page headers
- ✅ Meta tags for SEO
- ✅ Copyright text

---

## Example: Change to "DevFest Bangladesh 2025"

```typescript
export const siteConfig: SiteConfig = {
  eventTitle: "DevFest Bangladesh 2025",
  eventTagline: "Connect. Build. Inspire.",
  eventYear: "2025",
  // ... rest stays the same
};
```

Save → Refresh browser → Done! 🎉

---

## Where is this used?

The title automatically appears in:

| Location | Example |
|----------|---------|
| **Hero Section** | "Flutter Guild 2026" (large heading) |
| **Navigation** | Logo text + subtitle |
| **Footer** | Branding section |
| **About Section** | "About Flutter Guild 2026" |
| **Meta Tags** | `<title>Flutter Guild 2026 — Code. Connect. Create.</title>` |
| **Team Page** | "The amazing people making Flutter Guild 2026 possible" |
| **Sponsors Page** | "Supporting Flutter Guild 2026" |

---

## Need more help?

📖 See [`src/content/README.md`](src/content/README.md) for full documentation

📋 See [`REFACTORING_SUMMARY.md`](REFACTORING_SUMMARY.md) for technical details

---

**Pro Tip**: After changing the title, run `npm run build` to verify everything compiles correctly!
