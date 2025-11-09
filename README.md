# 🎯 Community Event Template

> **A professional, production-ready event website template built with React + TypeScript + Tailwind CSS**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Made with React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

**Created by [Sunnat629 Labs](https://sunnat629labs.com)** | Innovation lab empowering developers worldwide 🚀

---

## ✨ Features

### 🎨 **Beautiful & Modern Design**

- ✅ Stunning gradient hero sections with animated backgrounds
- ✅ Glassmorphism effects and smooth animations
- ✅ Auto-rotating carousels for speakers and sponsors
- ✅ Professional cards with hover effects
- ✅ Fully responsive (mobile-first design)

### 📋 **Complete Event Sections**

- **Hero** - Eye-catching landing with CTA buttons
- **About** - Event overview with highlights
- **Speakers** - Featured speakers with auto-rotating carousel
- **Agenda** - Multi-day, multi-track schedule
- **Sponsors** - Tiered sponsor display (Platinum, Gold, Silver)
- **Venue** - Google Maps integration
- **Team** - Organizing team showcase
- **Footer** - Complete with attribution

### 🚀 **Two Modes for Any Event Size**

#### 🎈 **Lite Mode** - Perfect for small events

- Single-page scrolling experience
- 5-10 speakers, single day
- Fast setup and deployment
- 50-200 attendees

#### 🚀 **Pro Mode** - Built for conferences
- Dedicated pages for speakers, agenda, sponsors
- Individual detail pages
- Multi-day, multi-track support
- 200+ attendees

### ⚡ **Developer Experience**

- **Vite 7** - Lightning-fast builds (< 2 seconds)
- **TypeScript** - Full type safety
- **Code splitting** - Optimized bundle size
- **SEO ready** - Sitemap, robots.txt, meta tags
- **Production safe** - No mock data in template

---

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** ([install with nvm](https://github.com/nvm-sh/nvm))
- **npm** or yarn

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

Visit **http://localhost:5173** to see your site! 🎉

### Build for Production

```bash
npm run build
# Output in 'dist' folder
```

---

## 🎨 Demo & Testing

### Production Demo Routes

The debug toggle button is **hidden in production** to keep the live site clean. To test different modes on the
production site:

#### Test Pro Mode (Multi-page):

```
https://templates.sunnat629labs.com/demo/pro
```

Enables Pro mode and redirects to home page with navigation

#### Test Lite Mode (Single-page):

```
https://templates.sunnat629labs.com/demo/lite
```

Enables Lite mode and redirects to single-page layout

#### Development Mode:

In development (`npm run dev`), the debug button is visible in the bottom-right corner for easy mode switching.

---

## 📝 Content Management

All content is managed through simple TypeScript files in `src/content/`:

### 1️⃣ **Site Configuration** (`siteConfig.ts`)
```typescript
export const siteConfig = {
  eventTitle: "Your Event 2026",
  eventYear: 2026,
  city: "Your City",
  country: "Your Country",
  // ... more settings
};
```

### 2️⃣ **Speakers** (`speakers.ts`)
```typescript
export const featuredSpeakers: Speaker[] = [
  {
    name: "Speaker Name",
    title: "Job Title",
    company: "Company",
    topic: "Talk Title",
    image: "https://your-cdn.com/photo.jpg",
    bio: "Biography...",
    social: {
      twitter: "...",
      linkedin: "...",
      email: "..."
    },
    featured: true
  }
];
```

### 3️⃣ **Sponsors** (`partners.ts`)
```typescript
export const partners: Partner[] = [
  {
    name: "Company Name",
    slug: generateSlug("Company Name"),
    role: "Gold Sponsor",
    tier: "gold", // platinum, gold, silver, bronze
    shortDescription: "Short description",
    description: "Full description",
    logo: "https://your-cdn.com/logo.png",
    icon: Building2,
    website: "https://company.com"
  }
];
```

### 4️⃣ **Agenda** (`agenda.ts`)
```typescript
export const agendaItems: AgendaItem[] = [
  {
    time: "10:00 AM",
    endTime: "11:00 AM",
    title: "Session Title",
    description: "Description",
    speaker: "Speaker Name",
    icon: Code,
    type: "session", // keynote, session, workshop, panel, break
    track: "technical", // all, technical, workshop
    duration: "60 min",
    location: "Main Hall",
    day: 1
  }
];
```

### 5️⃣ **Team** (`team.ts`)
```typescript
export const teamMembers: TeamMember[] = [
  {
    name: "Team Member",
    role: "Lead Organizer",
    title: "Event Director",
    image: "https://your-cdn.com/photo.jpg",
    bio: "Biography...",
    social: { /* ... */ },
    tier: "organizer" // organizer, committee, volunteer
  }
];
```

### 6️⃣ **Venue** (`eventDetails.ts`)
```typescript
export const eventDetails = {
  venue: {
    city: "Dhaka, Bangladesh",
    location: "To Be Announced",
    address: "Dhaka, Bangladesh",
    capacity: "TBA",
    // ... more details
  }
};
```

---

## 🎨 Customization

### Change Theme Colors

Edit `src/index.css`:

```css
:root {
  --primary: 210 100% 31%; /* Your primary color (HSL) */
  --secondary: 192 100% 53%; /* Your secondary color */
  --accent: 320 85% 55%; /* Your accent color */
}
```

### Enable/Disable Sections

Toggle sections in `src/config/layout.config.ts`:

```typescript
{
  id: "speakers",
  order: 4,
  theme: "light",
  enabled: true // Set to false to hide
}
```

### Switch Modes (Lite/Pro)

Edit `src/config/site.config.ts`:

```typescript
eventMode: {
  mode: 'pro', // 'lite' or 'pro'
  // ... settings
}
```

---

## 📊 Performance & SEO

### Build Performance

```
✓ Built in 2.39s
✓ Bundle: 427 kB (gzipped: 112 kB)
✓ Zero errors
```

### SEO Features

- ✅ **sitemap.xml** - All pages indexed
- ✅ **robots.txt** - Search engine optimized
- ✅ **JSON-LD structured data** - Rich snippets
- ✅ **Meta tags** - Complete OG and Twitter cards
- ✅ **Mobile-friendly** - Responsive design

---

## 🌍 Perfect For

- 🦋 **Flutter Communities** - Meetups, workshops, conferences
- ⚛️ **React Communities** - User groups, conferences
- 🔷 **Kotlin Communities** - KotlinConf, developer events
- 🤖 **Android Communities** - Mobile dev meetups
- 🐍 **Python Communities** - PyCon, PyData events
- 🟩 **Vue/Angular/Any Tech Community** - Easily customizable!

---

## 📦 Deploy

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the 'dist' folder
```

### GitHub Pages
```bash
npm run build
# Deploy 'dist' to gh-pages branch
```

---

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

**Quick start:**

```bash
git checkout -b feature/your-feature
git commit -m "Add your feature"
git push origin feature/your-feature
# Open a Pull Request
```

---

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

---

## 🙏 Attribution

**Created by [Sunnat629 Labs](https://sunnat629labs.com)**

If you use this template:
- ✅ Keep the footer attribution intact
- ✅ Star this repository ⭐
- ✅ Share your event with us!

---

## 💖 Support

- ⭐ **Star this repo** if you find it helpful
- 🐛 **Report bugs** via [Issues](https://github.com/sunnat629/community-event-template/issues)
- 💡 **Suggest features** via [Discussions](https://github.com/sunnat629/community-event-template/discussions)
- 🐦 **Share** on social media

---

## 📧 Contact

**Sunnat629 Labs**
- 🌐 Website: [sunnat629labs.com](https://sunnat629labs.com)
- 🐦 Twitter: [@sunnat629](https://twitter.com/sunnat629)
- 💼 LinkedIn: [in/sunnat629](https://linkedin.com/in/sunnat629)
- 📧 Email: me@sunnat629.dev

---

<div align="center">

**Made with ❤️ for tech communities worldwide**

[Report Bug](https://github.com/sunnat629/community-event-template/issues) · [Request Feature](https://github.com/sunnat629/community-event-template/issues) · [Star ⭐](https://github.com/sunnat629/community-event-template)

</div>
