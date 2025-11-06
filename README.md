# 🎯 Community Event Template

> **A professional, open-source event website template for tech communities worldwide**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![GitHub stars](https://img.shields.io/github/stars/sunnat629/community-event-template?style=social)](https://github.com/sunnat629/community-event-template/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/sunnat629/community-event-template?style=social)](https://github.com/sunnat629/community-event-template/network/members)

[![Made with React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-latest-000000?logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)

**Created by [Sunnat629 Labs](https://sunnat629labs.com)** | Innovation lab focused on empowering developers

---

## ✨ Features

### 🎨 **Beautiful & Modern Design**
- ✅ Stunning gradient hero section with animated background
- ✅ Glassmorphism effects and smooth animations
- ✅ Customizable color scheme for any community
- ✅ Professional cards with hover effects
- ✅ Responsive design (mobile, tablet, desktop)

### 📋 **Complete Event Sections**
- ✅ **Hero** - Eye-catching landing with CTA buttons
- ✅ **About** - Event overview and key highlights
- ✅ **Event Details** - Date, venue, capacity, pricing
- ✅ **Agenda** - Full schedule with interactive timeline
- ✅ **Speakers** - Featured & community speakers with profiles
- ✅ **Partners** - Tiered sponsors (Platinum, Gold, Silver, etc.)
- ✅ **Venue** - Google Maps integration with directions
- ✅ **Organizers** - Main organizer, co-organizers, and team
- ✅ **CTA** - Registration and volunteer sections
- ✅ **Footer** - Complete with attribution and links

### 🎯 **Easy Customization**
- ✅ **Content-driven** - All content in separate files
- ✅ **Type-safe** - Full TypeScript support
- ✅ **Theme system** - Easy background and color changes
- ✅ **Modular sections** - Enable/disable sections easily
- ✅ **No hardcoded text** - Everything configurable

### 🚀 **Developer Experience**
- ✅ Clean, documented code
- ✅ Component-based architecture
- ✅ Tailwind CSS for styling
- ✅ Vite for fast development
- ✅ ESLint & Prettier configured

---

## ⚡ **Event Modes: Lite vs Pro**

This template supports **two architecture modes** to perfectly match your event scale:

### 🎈 **Lite Mode** (Single-Page Architecture)

**Perfect for:**

- ✅ Single-day events (3-6 hours)
- ✅ 5-10 speakers
- ✅ Single track sessions
- ✅ Meetups, workshops, small conferences
- ✅ 50-200 attendees

**Features:**

- Single scrolling page with all content
- Fast setup and deployment
- Mobile-optimized experience
- Lower maintenance overhead

**Examples:** Local meetups, community workshops, user group events

---

### 🚀 **Pro Mode** (Multi-Route Architecture)

**Perfect for:**

- ✅ Multi-day conferences (2-3+ days)
- ✅ 20+ speakers
- ✅ Multiple parallel tracks (2-3+)
- ✅ Large conferences, summits
- ✅ 200+ attendees

**Features:**

- Dedicated pages for speakers, agenda, sponsors
- Individual speaker/session pages
- Advanced filtering and search
- Better SEO and shareability
- Personalized agenda (optional)
- Live event dashboard (optional)

**Examples:** KotlinConf, FlutterCon, DevSummit, PyCon

---

### 🎯 **Choosing Your Mode**

**Quick Decision Matrix:**

| Factor        | Lite Mode | Pro Mode  |
|---------------|-----------|-----------|
| **Duration**  | 3-8 hours | 1-3+ days |
| **Speakers**  | 5-10      | 20+       |
| **Sessions**  | <15       | 30+       |
| **Tracks**    | 1         | 2-3+      |
| **Attendees** | 50-200    | 200+      |

**How to Set:**

Edit `src/config/site.config.ts`:

```typescript
export const siteConfig: SiteConfig = {
  eventMode: {
    mode: 'lite', // Change to 'pro' for large events
    scale: {
      duration: 'single-day', // or 'multi-day'
      speakerCount: 9,
      sessionCount: 9,
      parallelTracks: 1, // Change to 2+ for multi-track
      expectedAttendees: 150,
    },
    features: {
      dedicatedSpeakerPages: false, // Enable for pro mode
      sessionDetailPages: false,
      personalizedAgenda: false,
      liveEventDashboard: false,
      // ... more features
    },
  },
  // ... rest of config
};
```

**The template will auto-detect and recommend the optimal mode based on your event scale!** ✨

---

## 🌍 Perfect For

- 🔷 **Kotlin Communities** - KotlinConf, user groups
- 🤖 **Android Communities** - Android developer meetups
- 🦋 **Flutter Communities** - Meetups, conferences, workshops
- ⚛️ **React Communities** - User groups, conferences
- 🟩 **Vue.js Communities** - Local meetups, events
- 🅰️ **Angular Communities** - Developer gatherings
- 🐍 **Python Communities** - PyCon, PyData events
- ☕ **Java Communities** - JUG meetings, conferences
- 🍎 **iOS Communities** - Swift, iOS developer events
- 🧪 **QA Communities** - Testing, automation conferences
- 🎮 **Game Dev Communities** - Indie game meetups
- 🤖 **AI/ML Communities** - Data science events
- 🔧 **Any Tech Community** - Easily customizable!

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ ([install with nvm](https://github.com/nvm-sh/nvm))
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/sunnat629/community-event-template.git
cd community-event-template

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see your site! 🎉

---

## 📝 Customization Guide

### 1️⃣ **Basic Event Information**

Update your event details in `src/content/eventDetails.ts`:

```typescript
export const eventDetails: EventDetails = {
  name: "Your Event Name 2025",
  date: "March 15, 2025",
  time: "9:00 AM - 6:00 PM",
  venue: {
    name: "Your Venue",
    address: "Your Address",
    city: "Your City",
    // ... more details
  }
};
```

### 2️⃣ **Hero Section**

Edit `src/content/hero.ts`:

```typescript
export const heroContent: HeroContent = {
  title: "Your Event 2025",
  subtitle: "Your Tagline",
  description: "Your description...",
  eventInfo: [
    { icon: Calendar, text: "Date" },
    { icon: MapPin, text: "Location" }
  ],
  buttons: [
    { text: "Register Now", variant: "hero", isPrimary: true },
    // ... more buttons
  ]
};
```

### 3️⃣ **Speakers**

Add speakers in `src/content/speakers.ts`:

```typescript
export const featuredSpeakers: Speaker[] = [
  {
    name: "Speaker Name",
    title: "Job Title",
    company: "Company",
    topic: "Talk Topic",
    image: "/speakers/speaker.jpg",
    bio: "Speaker bio...",
    social: {
      twitter: "https://twitter.com/...",
      linkedin: "https://linkedin.com/in/...",
      email: "speaker@example.com"
    }
  }
];
```

### 4️⃣ **Partners & Sponsors**

Add partners in `src/content/partners.ts`:

```typescript
export const partners: Partner[] = [
  {
    name: "Company Name",
    tier: "platinum", // platinum, gold, silver, bronze, community, media
    logo: "/logos/company.png", // Use wide banner format (3:1 ratio)
    description: "Company description...",
    role: "Main Sponsor",
    website: "https://company.com",
    linkedin: "https://linkedin.com/company/...",
    facebook: "https://facebook.com/..."
  }
];
```

**Partner Tiers:**
- **Platinum & Gold** - 3 per row, larger cards (400x360px)
- **Silver, Bronze, Community, Media** - 4 per row, smaller cards (320x300px)

### 5️⃣ **Attribution (Important!)**

Update `src/content/attribution.ts` with your community info:

```typescript
export const attribution: Attribution = {
  creator: {
    name: "Your Community Name",
    website: "https://yourcommunity.com",
    tagline: "Your community tagline"
  },
  template: {
    name: "Community Event Template",
    description: "Professional event website template",
    githubUrl: "https://github.com/sunnat629/community-event-template"
  },
  message: "Made with ❤️ for the community"
};
```

**⚠️ Note:** Please keep the footer attribution to Sunnat629 Labs intact. It helps us maintain and improve this
open-source template.

### 6️⃣ **Organizers**

Edit `src/content/organizers.ts` and `src/content/organizerTeam.ts`:

```typescript
// Main organizer
export const mainOrganizer: Organizer = {
  name: "Your Organization",
  logo: "/logos/org.png", // Banner format recommended
  description: "Organization description...",
  social: {
    website: "https://yourorg.com",
    facebook: "...",
    twitter: "...",
    // ... more
  }
};

// Team members
export const organizerTeam: OrganizerTeamMember[] = [
  {
    name: "Team Member",
    username: "@username",
    image: "/team/member.jpg",
    teamRole: "Lead Organizer",
    designation: "Job Title",
    company: "Company Name",
    bio: "Bio...",
    social: { /* ... */ }
  }
];
```

### 7️⃣ **Agenda/Schedule**

Update `src/content/agenda.ts`:

```typescript
export const agendaItems: AgendaItem[] = [
  {
    time: "9:00 AM",
    endTime: "10:00 AM",
    duration: "1 hour",
    title: "Opening Keynote",
    description: "Welcome and introduction",
    speaker: "Speaker Name",
    location: "Main Hall",
    type: "keynote", // keynote, session, workshop, panel, break
    track: "all",
    icon: Presentation
  }
];
```

### 8️⃣ **Theme Customization**

Change section backgrounds in `src/config/sectionThemes.config.ts`:

```typescript
// Available themes:
// hero, light, blue-tint, gradient-soft, 
// gradient-multi, warm-tint, accent, dark, white
```

Or in `src/config/layout.config.ts`:

```typescript
export const sectionLayout: SectionConfig[] = [
  {
    id: "about",
    order: 2,
    theme: "blue-tint", // Change theme here
    enabled: true
  }
];
```

### 9️⃣ **Colors & Branding**

Edit `src/index.css` to match your community colors:

```css
:root {
  --primary: 210 100% 31%; /* Your primary color */
  --secondary: 192 100% 53%; /* Your secondary color */
  --accent: 320 85% 55%; /* Your accent color */
}
```

---

## 🎨 Section Themes

Apply different backgrounds to create visual rhythm:

| Theme            | Description            | Best For             |
|------------------|------------------------|----------------------|
| `hero`           | Blue gradient          | Hero section         |
| `light`          | White with subtle gray | Information sections |
| `blue-tint`      | Light blue tint        | Feature highlights   |
| `gradient-soft`  | Soft gray gradient     | Schedules            |
| `gradient-multi` | Multi-color gradient   | Team sections        |
| `warm-tint`      | Warm orange/amber      | Venue, location      |
| `accent`         | Accent color gradient  | CTAs                 |
| `white`          | Pure white             | Content sections     |

---

## 🖼️ Image Guidelines

### Speaker Photos
- **Format:** Square (1:1)
- **Size:** 400x400px minimum
- **Quality:** High resolution, professional headshots
- **Location:** `public/speakers/`

### Partner Logos
- **Format:** Wide banner (3:1 ratio preferred)
- **Size:** 600x200px recommended
- **Quality:** PNG with transparent background
- **Location:** `public/logos/`
- **Note:** Logos auto-scale to fit containers

### Organizer Logos
- **Format:** Wide banner or square
- **Size:** 400x200px or larger
- **Location:** `public/logos/`

### Team Photos
- **Format:** Square (1:1)
- **Size:** 300x300px minimum
- **Location:** `public/team/`

---

## 🔧 Advanced Configuration

### Enable/Disable Sections

In `src/config/layout.config.ts`:

```typescript
export const sectionLayout: SectionConfig[] = [
  {
    id: "about",
    order: 2,
    theme: "blue-tint",
    enabled: true // Set to false to hide
  }
];
```

### Custom Colors

Edit `src/index.css`:

```css
:root {
  --primary: 210 100% 31%; /* HSL values */
  --secondary: 192 100% 53%;
  --accent: 320 85% 55%;
}
```

### Add Custom Sections

1. Create component in `src/components/sections/`
2. Add to `src/pages/Index.tsx`
3. Create content file in `src/content/`
4. Export in `src/content/index.ts`

---

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

### Deploy Options

**Vercel (Recommended)**
```bash
npm i -g vercel
vercel
```

**Netlify**
```bash
npm run build
# Deploy the 'dist' folder
```

**GitHub Pages**
```bash
npm run build
# Push 'dist' folder to gh-pages branch
```

---

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Attribution

**This template is created and maintained by [Sunnat629 Labs](https://sunnat629labs.com)**

If you use this template for your event, please:
- ✅ Keep the footer attribution intact
- ✅ Star this repository ⭐
- ✅ Share your event with us!

The attribution helps us:
- 📈 Improve the template based on usage
- 🌟 Gain recognition for our open-source work
- 🤝 Connect with tech communities worldwide

---

## 💖 Support

If you find this template helpful:

- ⭐ Star this repository
- 🐦 Share on social media
- 🐛 Report bugs via [Issues](https://github.com/sunnat629/community-event-template/issues)
- 💡 Suggest features via [Discussions](https://github.com/sunnat629/community-event-template/discussions)
- ☕ [Buy us a coffee](https://ko-fi.com/sunnat629)

---

## 📧 Contact

**Sunnat629 Labs**
- 🌐 Website: [sunnat629labs.com](https://sunnat629labs.com)
- 📧 Email: hello@sunnat629labs.com
- 🐦 Twitter: [@sunnat629](https://twitter.com/sunnat629)
- 💼 LinkedIn: [Sunnat629 Lab](https://linkedin.com/company/sunnat629-lab)
- 📘 Facebook: [Sunnat629 Labs](https://facebook.com/sunnat629.labs)
- 💬 Discord: [Join our community](https://discord.gg/PBaxXN4M3B)

---

## 🌟 Showcase

Using this template for your
event? [Add your event here!](https://github.com/sunnat629/community-event-template/discussions/categories/showcase)

**Events using this template:**
- Flutter Guild Connect 2025 - Bangladesh
- React Community Meetup 2025 - New York
- Python Conference 2025 - India
- _Your event here!_

---

<div align="center">

**Made with ❤️ for tech communities worldwide**

[Report Bug](https://github.com/sunnat629/community-event-template/issues) · [Request Feature](https://github.com/sunnat629/community-event-template/issues) · [Documentation](https://github.com/sunnat629/community-event-template/wiki)

</div>

