# Event Agenda - Visual Guide

## 🎨 What You'll See

This guide describes the visual appearance and user experience of the redesigned Event Agenda section.

---

## Section Header

### Visual Elements

```
┌─────────────────────────────────────────────┐
│                                             │
│   [📅 Full Day Event] <-- Badge             │
│                                             │
│        Event Agenda                         │
│    ━━━━━━━━━━━━━━━                         │
│    Gradient Text                            │
│                                             │
│  A carefully curated day of learning...     │
│                                             │
│  [⬇️ Download Full Agenda] <-- Button      │
│                                             │
└─────────────────────────────────────────────┘
```

### Colors & Style

- **Badge**: Light primary background with primary text
- **Heading**: 4xl-6xl size with gradient (primary → secondary)
- **Button**: Gradient hero background, white text, shadow glow

---

## Filter Tabs

### Layout

```
┌──────────────────────────────────────────────────────────┐
│  [All Sessions] [Technical] [Workshops] [Career] [Community]  │
│   ▲ Active      Inactive                                      │
└──────────────────────────────────────────────────────────┘
```

### States

**Active Tab:**

- Gradient hero background (blue → light blue)
- White text
- Glow shadow
- Scale: 1.05

**Inactive Tab:**

- Semi-transparent card background
- Muted text
- Border only
- Hover: scales to 1.05 with primary border

---

## Timeline Items (Desktop)

### Layout Structure

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  [Icon]  ────────────────────────────────────────          │
│  Badge   │  TITLE                      [⏰ 9:00 AM]   │   │
│  60min   │  Description text here...    10:00 AM      │   │
│          │  [👤 Speaker] [📍 Location]               │   │
│          └───────────────────────────────────────────┘   │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Visual Details

**Badge (Left Side)**

- Size: 96px × 96px
- Rounded: 2xl
- Contains: Icon + duration
- Colors: Type-specific (keynote=gradient, session=secondary, etc.)
- Animation: Rotate 3° on hover

**Card (Right Side)**

- Glass morphism effect
- Rounded: 3xl
- Padding: 8
- Border: 2px, type-specific color
- Shadow: Type-specific glow on hover
- Lift: -4px on hover

**Time Badge (Top Right)**

- Gradient hero background
- White text
- Displays: Start time (bold) + End time (small)
- Icon: Clock

---

## Timeline Items (Mobile)

### Layout Structure

```
┌──────────────────────────────┐
│                              │
│  [Icon] [⏰ 9:00-10:00]     │
│  Badge   TITLE               │
│                              │
│  Description text...         │
│                              │
│  [👤] [📍] [⏱️]             │
│  Tags/Metadata               │
│                              │
└──────────────────────────────┘
```

### Compact Design

- Vertical stacking
- Smaller badge (64px × 64px)
- Time inline with title
- Wrapped metadata chips
- Full width cards

---

## Session Type Colors

### Visual Identity

**🎤 Keynote**

```
Badge:    [Gradient Hero] Blue → Light Blue
Card:     Primary border with glow
Glow:     Blue shadow (rgba(2,86,155,0.3))
```

**💻 Technical Session**

```
Badge:    [Secondary] Light background
Card:     Secondary border
Glow:     Light blue shadow
```

**🛠️ Workshop**

```
Badge:    [Accent] Teal tones
Card:     Accent border
Glow:     Teal shadow
```

**👥 Panel Discussion**

```
Badge:    [Purple] Purple tones
Card:     Purple border
Glow:     Purple shadow
```

**☕ Break**

```
Badge:    [Muted] Gray tones
Card:     Subtle border
Glow:     None
```

**🏆 Closing**

```
Badge:    [Gradient Accent] Colorful
Card:     Primary border
Glow:     Blue shadow
```

---

## Interactive States

### Hover Effects

**Card Hover:**

1. Lift up (-4px translateY)
2. Scale slightly (1.02)
3. Glow shadow appears
4. Border color intensifies
5. Badge rotates 3°
6. ChevronRight icon slides in from right

**Filter Tab Hover:**

1. Scale to 1.05
2. Border changes to primary/30
3. Background becomes opaque
4. Text color darkens

**Button Hover:**

1. Shadow intensifies (glow-lg)
2. Scale to 1.05
3. Background gradient shifts

### Click Effects

**Card Click:**

- Opens detail dialog
- Smooth modal transition
- Backdrop blur appears

**Filter Click:**

- Instant state change
- Smooth color transition
- Items re-filter with stagger animation

**Button Click:**

- Ripple effect (optional)
- Scale down to 0.98, then back
- Action executes (download, navigate, etc.)

---

## Detail Dialog

### Layout

```
┌────────────────────────────────────────────┐
│  [X]                                       │
│                                            │
│  [Icon] TITLE                              │
│  Badge  ⏰ 9:00 AM - 10:00 AM (60 min)    │
│                                            │
│  ───────────────────────────────           │
│                                            │
│  About This Session                        │
│  Description text here...                  │
│                                            │
│  ┌──────────┬──────────┐                  │
│  │👤 Speaker│📍Location│                  │
│  │   TBA    │Main Hall │                  │
│  └──────────┴──────────┘                  │
│                                            │
│  [🔔 Set Reminder]  [📤 Share]            │
│                                            │
│  💡 Workshop Tips (if workshop)            │
│  • Bring laptop with Flutter SDK           │
│  • Stable internet connection              │
│                                            │
└────────────────────────────────────────────┘
```

### Visual Details

**Header:**

- Icon badge (same as timeline)
- Large title (2xl)
- Time range with clock icon
- Muted foreground color for metadata

**Content:**

- Sectioned with headings
- Metadata grid (2 columns on desktop)
- Rounded cards for each metadata item
- Icons with labels

**Actions:**

- Two full-width buttons
- Primary: gradient hero
- Secondary: outlined
- Both have icons

**Tips (Workshop only):**

- Accent background (accent/10)
- Accent border
- Bullet list
- Icon header

---

## Animations Timeline

### On Page Load

```
0ms     → Background orbs start floating
100ms   → Header fades in with slide-up
200ms   → Filter tabs fade in
300ms   → Timeline line draws from top
350ms   → First agenda item fades in
430ms   → Second agenda item fades in
510ms   → Third agenda item fades in
...     → Continue staggered (80ms apart)
```

### On Hover

```
0ms     → Cursor enters card
0-300ms → Smooth transition of all effects
300ms   → All hover effects complete
```

### On Click

```
0ms     → Click registered
0-200ms → Scale down slightly
200ms   → Dialog opens with fade + scale-in
```

### On Filter Change

```
0ms     → Filter clicked
0-300ms → Tab color transitions
100ms   → Items start fading out
400ms   → New items start fading in (staggered)
```

---

## Responsive Behavior

### Desktop (≥1024px)

- Full horizontal timeline
- Large badges (96px)
- Two-column metadata
- Side-by-side buttons
- Maximum width: 1152px (max-w-6xl)

### Tablet (768px - 1023px)

- Timeline maintains
- Medium badges (96px)
- Cards adjust padding
- Metadata wraps naturally

### Mobile (<768px)

- Vertical stacking
- Compact badges (64px)
- Single column everything
- Touch-optimized (44px targets)
- Full-width cards

---

## Background Elements

### Decorative Orbs

```
Position            Color        Size     Animation
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Top Right           Secondary    96px     Float (default)
Bottom Left         Primary      96px     Float (1s delay)
Center              Accent       600px    Static blur
```

### Timeline Line (Desktop)

- Position: Left at 48px
- Width: 1px → 4px
- Colors: Gradient (primary → secondary → primary)
- Shadow: Blue glow
- Height: Full section

---

## Accessibility Features

### Visual Indicators

**Focus States:**

- 4px ring in primary color
- Ring opacity: 50%
- Offset: 2px
- All interactive elements

**Contrast:**

- Text: 4.5:1 minimum
- Icons: 3:1 minimum
- Badges: Clear distinction

**Motion:**

- Smooth, not jarring
- 200-300ms duration
- Reduced motion support (CSS)

### Screen Reader Elements

- Semantic HTML (section, article, nav)
- ARIA labels on icons
- Descriptive button text
- Proper heading hierarchy

---

## Color Palette Used

### Brand Colors

```css
Primary:    #02569B (HSL: 207 98% 30%)
Secondary:  #13B9FD (HSL: 197 98% 54%)
Accent:     #13B9FD (HSL: 197 98% 54%)
```

### Semantic Colors

```css
Success:    #10b981 (Green)
Error:      #ef4444 (Red)
Warning:    #f59e0b (Amber)
Info:       #3b82f6 (Blue)
```

### Neutral Colors

```css
Background: #FAFAFA (HSL: 0 0% 98%)
Foreground: #1F2937 (HSL: 210 20% 15%)
Muted:      #F5F5F5 (HSL: 210 15% 96%)
Border:     #E5E5E5 (HSL: 210 15% 90%)
```

---

## Typography Scale

### Headings

```
H2 (Section):    4xl-6xl (2.25-3.75rem)
H3 (Card Title): 2xl (1.5rem)
H4 (Dialog):     xl-2xl (1.25-1.5rem)
```

### Body Text

```
Description:     lg (1.125rem)
Metadata:        sm-base (0.875-1rem)
Time Badge:      lg (1.125rem)
Duration:        xs (0.75rem)
```

### Font Weight

```
Bold:        700 (headings, emphasis)
Semibold:    600 (subheadings)
Medium:      500 (labels)
Regular:     400 (body text)
```

---

## Spacing System

### Padding

```
Cards:       p-6 to p-8 (1.5-2rem)
Badges:      p-4 (1rem)
Buttons:     px-6 py-3 (1.5rem × 0.75rem)
Metadata:    px-3 py-1.5 (0.75rem × 0.375rem)
```

### Gaps

```
Timeline Items:    8 (2rem)
Filter Tabs:       3 (0.75rem)
Metadata Items:    4 (1rem)
Button Groups:     3 (0.75rem)
```

### Margins

```
Section Bottom:    16-24 (4-6rem)
Header to Content: 12-16 (3-4rem)
Content Blocks:    6-8 (1.5-2rem)
```

---

## Shadow Hierarchy

### Elevation Levels

```
Level 0 (Flat):      No shadow
Level 1 (Card):      shadow-sm (subtle)
Level 2 (Hover):     shadow-md (noticeable)
Level 3 (Active):    shadow-lg (prominent)
Level 4 (Glow):      shadow-glow (colorful)
```

### Glow Effects

```
Default:    0 0 40px rgba(19, 185, 253, 0.3)
Hover:      0 0 60px rgba(19, 185, 253, 0.4)
Type-specific varies by session type
```

---

## Call-to-Action Section

### Visual Layout

```
┌────────────────────────────────────────────┐
│  [Gradient Background - Blue → Light Blue] │
│                                            │
│  Don't Miss Out!                           │
│  Register now to secure your spot...       │
│                                            │
│  [Register Now] ← White button             │
│                                            │
└────────────────────────────────────────────┘
```

### Style Details

- Gradient hero background
- White text
- Rounded: 3xl
- Padding: 8
- Shadow: glow-lg
- Button: White bg, primary text
- Button hover: Scale 1.05

---

## Performance Notes

### Optimizations

- CSS transforms (GPU-accelerated)
- Lazy state updates
- Minimal re-renders
- Efficient animations (60fps)
- Optimized image loading (none in this section)

### Loading States

- Skeleton loaders ready (not implemented yet)
- Stagger animation provides visual progression
- No layout shift (dimensions predetermined)

---

## Dark Mode Considerations

The design is **dark mode ready** with CSS variables:

- All colors use HSL variables
- Automatic contrast adjustment
- Inverted shadows
- Adjusted opacity values

To enable: Add `dark` class to root element.

---

## Summary

The redesigned Event Agenda section provides:

✅ **Visual Excellence** - Modern, polished, professional  
✅ **Intuitive Interaction** - Clear feedback, smooth transitions  
✅ **Information Clarity** - Well-organized, easy to scan  
✅ **Responsive Design** - Perfect on all screen sizes  
✅ **Accessible** - Keyboard, screen reader, high contrast  
✅ **Performant** - 60fps, fast rendering, optimized

---

*This visual guide complements the technical documentation in `AGENDA_REDESIGN_SUMMARY.md`*
