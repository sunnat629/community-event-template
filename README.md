# ud83cudfaf Community Event Template

> **A professional, production-ready event website template built with React + TypeScript + Tailwind CSS**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Made with React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

**Created by [Sunnat629 Labs](https://github.com/sunnat629)** | Empowering tech communities worldwide ud83dude80

---

## ud83cudf1f Introducing Community Event Template

A complete, ready-to-use template for creating beautiful websites for tech community events of any size. Perfect for
meetups, conferences, workshops, and hackathons. Designed to be easily customizable with a focus on developer experience
and modern design.

### ud83cudf89 Why Use This Template?

- **Complete Solution**: Everything you need for an event website in one place
- **No Design Skills Required**: Professional design out of the box
- **Customizable**: Easy to adapt to your community brand
- **Fast Setup**: Be live in minutes, not days
- **SEO Optimized**: Built with search engines in mind
- **Open Source**: Free to use and modify

---

## ud83dudcf8 Screenshots

### Desktop View

<div align="center">
  <img src="./screenshots/Screenshot 2025-11-15 at 11.42.11.png" alt="Desktop View of Community Event Template" width="800" />
  <p><i>Desktop View - Pro Mode with full navigation</i></p>
</div>

### Mobile View

<div align="center" style="margin-top: 20px;">
  <img src="./screenshots/Screenshot 2025-11-15 at 11.45.14.png" alt="Mobile View - Home Screen" width="800" />
  <p><i>Responsive Mobile Experience</i></p>
</div>

### Feature Showcase

<div align="center" style="margin-top: 30px;">
  <div style="display: inline-block; margin: 10px;">
    <img src="./screenshots/Screenshot 2025-11-15 at 11.42.32.png" alt="Speaker Showcase" width="400" />
    <p><i>Speaker Showcase with Carousel</i></p>
  </div>
  <div style="display: inline-block; margin: 10px;">
    <img src="./screenshots/Screenshot 2025-11-15 at 11.43.01.png" alt="Agenda Timeline" width="400" />
    <p><i>Interactive Agenda Timeline</i></p>
  </div>
</div>

<div align="center" style="margin-top: 20px;">
  <img src="./screenshots/Screenshot 2025-11-15 at 11.44.56.png" alt="Sponsors Section" width="800" />
  <p><i>Sponsors Section with Tiered Display</i></p>
</div>

<div align="center" style="margin-top: 20px;">
  <img src="./screenshots/Screenshot 2025-11-15 at 11.54.41.png" alt="Dark Mode" width="800" />
  <p><i>Dark Mode Support</i></p>
</div>

---

## u2728 Features

### ud83cudfa8 **Beautiful & Modern Design**

- u2705 Stunning gradient hero sections with animated backgrounds
- u2705 Glassmorphism effects and smooth animations
- u2705 Auto-rotating carousels for speakers and sponsors
- u2705 Professional cards with hover effects
- u2705 Fully responsive (mobile-first design)

### ud83dudccb **Complete Event Sections**

- **Hero** - Eye-catching landing with CTA buttons
- **About** - Event overview with highlights
- **Speakers** - Featured speakers with auto-rotating carousel
- **Agenda** - Multi-day, multi-track schedule
- **Sponsors** - Tiered sponsor display (Platinum, Gold, Silver)
- **Venue** - Google Maps integration
- **Team** - Organizing team showcase
- **Footer** - Complete with attribution

### ud83dude80 **Two Modes for Any Event Size**

#### ud83cudf88 **Lite Mode** - Perfect for small events

- Single-page scrolling experience
- 5-10 speakers, single day
- Fast setup and deployment
- 50-200 attendees

#### ud83dude80 **Pro Mode** - Built for conferences

- Dedicated pages for speakers, agenda, sponsors
- Individual detail pages
- Multi-day, multi-track support
- 200+ attendees

### u26a1 **Developer Experience**

- **Vite 7** - Lightning-fast builds (< 2 seconds)
- **TypeScript** - Full type safety
- **Code splitting** - Optimized bundle size
- **SEO ready** - Sitemap, robots.txt, meta tags
- **Production safe** - No mock data in template

---

## ud83dude80 Quick Start

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

Visit **http://localhost:5173** to see your site! ud83cudf89

### Build for Production

```bash
npm run build
# Output in 'dist' folder
```

---

## ud83cudfa8 Demo & Testing

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

## ud83dudcdd Content Management

All content is managed through simple TypeScript files in `src/content/`:

### 1ufe0fu20e3 **Site Configuration** (`siteConfig.ts`)

```typescript
export const siteConfig = {
    eventTitle: "Your Event 2026",
    eventYear: 2026,
    city: "Your City",
    country: "Your Country",
    // ... more settings
};
```

### 2ufe0fu20e3 **Speakers** (`speakers.ts`)

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

### 3ufe0fu20e3 **Sponsors** (`partners.ts`)

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

### 4ufe0fu20e3 **Agenda** (`agenda.ts`)

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

### 5ufe0fu20e3 **Team** (`team.ts`)

```typescript
export const teamMembers: TeamMember[] = [
    {
        name: "Team Member",
        role: "Lead Organizer",
        title: "Event Director",
        image: "https://your-cdn.com/photo.jpg",
        bio: "Biography...",
        social: { /* ... */},
        tier: "organizer" // organizer, committee, volunteer
    }
];
```

### 6ufe0fu20e3 **Venue** (`eventDetails.ts`)

```typescript
export const eventDetails = {
    venue: {
        city: "Your City, Country",
        location: "Venue Name",
        address: "Full Address",
        capacity: "500 people",
        // ... more details
    }
};
```

---

## ud83cudfa8 Customization

### Change Theme Colors

Edit `src/index.css`:

```css
:root {
    --primary: 159 59% 46%; /* Mint Green (HSL) */
    --secondary: 207 90% 81%; /* Sky Blue */
    --accent: 320 85% 55%; /* Your accent color */
}
```

You can use any HSL color values to completely change the look and feel of the site.

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

## ud83dudcca Performance & SEO

### Build Performance

```
u2713 Built in 2.39s
u2713 Bundle: 427 kB (gzipped: 112 kB)
u2713 Zero errors
```

### SEO Features

- u2705 **sitemap.xml** - All pages indexed
- u2705 **robots.txt** - Search engine optimized
- u2705 **JSON-LD structured data** - Rich snippets
- u2705 **Meta tags** - Complete OG and Twitter cards
- u2705 **Mobile-friendly** - Responsive design

---

## ud83cudf0d Perfect For

- ud83cudf10 **Web Development Communities** - Meetups, conferences, hackathons
- ud83dudcf1 **Mobile Dev Communities** - Android, iOS, cross-platform events
- ud83eudd16 **AI/ML Communities** - AI conferences, hackathons
- ud83cudfae **Game Dev Communities** - Game jams, showcases
- ud83euddea **DevOps & QA Communities** - Testing conferences, CI/CD workshops
- ud83dudd10 **Cybersecurity Communities** - Security conferences, CTF events
- ud83dudc65 **Any Technology Community** - Highly adaptable for all tech groups!

---

## ud83dudce6 Deploy

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

## ud83eudd1d Contributing

We welcome contributions from the community! Whether it's fixing bugs, adding features, improving documentation, or
sharing ideas, your help is appreciated.

### Ways to Contribute

- **Star the Repository** u2b50 - Show your support
- **Fork and Create a Pull Request** - Add new features or fix bugs
- **Report Issues** - Help us identify bugs and areas for improvement
- **Suggest Features** - Share your ideas for making the template better
- **Share the Template** - Help other tech communities discover this resource

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

### Join Our Contributors

<a href="https://github.com/sunnat629/community-event-template/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=sunnat629/community-event-template" />
</a>

---

## ud83dudcc4 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## ud83dude4f Attribution

Created and maintained by [Sunnat629 Labs](https://github.com/sunnat629).

If you use this template:

- u2705 Keep the footer attribution intact
- u2705 Star this repository u2b50
- u2705 Share your event website with us!

---

## ud83dudc96 Support

- u2b50 **Star this repo** if you find it helpful
- ud83dudc1b **Report bugs** via [Issues](https://github.com/sunnat629/community-event-template/issues)
- ud83dudca1 **Suggest features** via [Discussions](https://github.com/sunnat629/community-event-template/discussions)
- ud83dudc26 **Share** on social media
- u2615 **Buy me a coffee** - [buymeacoffee.com/sunnat629](https://buymeacoffee.com/sunnat629)

<a href="https://buymeacoffee.com/sunnat629" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="50px">
</a>

---

## ud83dudce7 Contact

**Sunnat629 Labs**

- ud83cudf10 GitHub: [@sunnat629](https://github.com/sunnat629)
- ud83dudc26 Twitter: [@sunnat629](https://twitter.com/sunnat629)
- ud83dudcfc LinkedIn: [in/sunnat629](https://linkedin.com/in/sunnat629)
- ud83dudce7 Email: me@sunnat629.dev

---

<div align="center">

**Made with u2764ufe0f by Sunnat629 Labs for tech communities worldwide**

[Report Bug](https://github.com/sunnat629/community-event-template/issues)
u00b7 [Request Feature](https://github.com/sunnat629/community-event-template/issues)
u00b7 [Star u2b50](https://github.com/sunnat629/community-event-template)

</div>