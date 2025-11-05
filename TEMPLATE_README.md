# 🎨 Event Site Template System

Transform this Flutter Guild Connect site into **your own event website** in minutes! This template system allows you to
customize colors, themes, content, and features without touching the core code.

## ✨ What's Included

- **🎨 Multiple Themes** - Switch between vibrant, minimal, and custom themes
- **⚙️ Easy Configuration** - Update event details in simple config files
- **🎯 Feature Flags** - Enable/disable sections without code changes
- **📱 Fully Responsive** - Beautiful on all devices
- **♿ Accessible** - WCAG compliant components
- **🚀 Fast** - Optimized performance
- **📝 Well Documented** - Clear guides for everything

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/your-username/flutter-guild-connect.git
cd flutter-guild-connect
npm install
```

### 2. Update Event Content

Edit `src/content/` files with your event details:

```typescript
// src/content/eventDetails.ts
export const eventDetails = {
  date: {
    display: "March 15, 2025",
    // ... more details
  }
  // ... update with your event info
}
```

### 3. Choose a Theme

Edit `src/config/theme.config.ts`:

```typescript
export const themeConfig = {
  activeTheme: 'minimal', // or 'default'
  // ...
}
```

### 4. Configure Features

Edit `src/config/features.config.ts` to enable/disable sections:

```typescript
export const featuresConfig = {
  sections: {
    speakers: true,
    sponsors: false, // Disable if not needed
    // ...
  }
}
```

### 5. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your site!

## 📚 Documentation

### Available Themes

#### 🌈 Default (Vibrant)

- **Style**: Colorful, energetic, modern
- **Best for**: Tech conferences, developer events, community meetups
- **Colors**: Flutter blue (#02569B), bright accents
- **ID**: `default`

#### ⚪ Minimal (Clean)

- **Style**: Simple, elegant, lots of whitespace
- **Best for**: Professional events, corporate conferences, workshops
- **Colors**: Charcoal, warm grays, subtle accents
- **ID**: `minimal`

### Configuration Files

```
src/
├── config/
│   ├── theme.config.ts     # Theme selection & behavior
│   ├── site.config.ts      # Site metadata & SEO
│   └── features.config.ts  # Enable/disable features
├── content/
│   ├── eventDetails.ts     # Date, venue, format
│   ├── speakers.ts         # Speaker information
│   ├── agenda.ts           # Schedule/timeline
│   ├── sponsors.ts         # Sponsor information
│   └── organizers.ts       # Team information
└── themes/
    ├── default.theme.ts    # Vibrant theme
    ├── minimal.theme.ts    # Minimal theme
    └── types.ts            # TypeScript definitions
```

## 🎨 Creating a Custom Theme

### Method 1: Override Existing Theme

```typescript
// src/config/theme.config.ts
export const themeConfig = {
  activeTheme: 'default',
  overrides: {
    colors: {
      primary: {
        DEFAULT: 'hsl(280 80% 50%)', // Purple
        // ... other shades
      }
    }
  }
}
```

### Method 2: Create New Theme

1. Create `src/themes/my-theme.theme.ts`:

```typescript
import { Theme } from './types';

export const myTheme: Theme = {
  metadata: {
    id: 'my-theme',
    name: 'My Custom Theme',
    description: 'My awesome theme',
    author: 'Your Name',
    version: '1.0.0',
    tags: ['custom'],
  },
  
  colors: {
    primary: {
      DEFAULT: 'hsl(280 80% 50%)',
      foreground: 'hsl(0 0% 100%)',
      // ... full color palette
    },
    // ... rest of colors
  },
  
  // ... typography, spacing, etc.
};
```

2. Register in `src/themes/index.ts`:

```typescript
import { myTheme } from './my-theme.theme';

export const themes: ThemeRegistry = {
  // ... existing themes
  [myTheme.metadata.id]: myTheme,
};
```

3. Activate in `src/config/theme.config.ts`:

```typescript
export const themeConfig = {
  activeTheme: 'my-theme',
  // ...
};
```

## 📝 Content Management

### Event Details

```typescript
// src/content/eventDetails.ts
export const eventDetails = {
  date: {
    display: "March 15, 2025",
    details: "Save the date for an incredible day!"
  },
  venue: {
    city: "Your City",
    venueDetails: {
      name: "Your Venue",
      address: "123 Main St",
      capacity: 200
    }
  },
  // ...
}
```

### Speakers

```typescript
// src/content/speakers.ts
export const speakers: Speaker[] = [
  {
    name: "Jane Doe",
    title: "Tech Lead",
    company: "Tech Corp",
    bio: "Expert in Flutter development...",
    image: "/speakers/jane.jpg",
    social: {
      twitter: "https://twitter.com/janedoe",
      linkedin: "https://linkedin.com/in/janedoe"
    },
    sessions: [{
      title: "Building Beautiful Apps",
      time: "10:00 AM",
      description: "..."
    }]
  },
  // ... more speakers
];
```

### Sponsors

```typescript
// src/content/partners.ts
export const sponsors: Sponsor[] = [
  {
    name: "Company Name",
    logo: "/sponsors/company.png",
    tier: "platinum",
    website: "https://company.com",
    description: "Leading tech company..."
  },
  // ... more sponsors
];
```

## ⚙️ Site Configuration

### SEO & Metadata

```typescript
// src/config/site.config.ts
export const siteConfig = {
  name: 'Your Event Name 2025',
  description: 'Your event description',
  url: 'https://yourevent.com',
  
  seo: {
    title: 'Your Event | Tagline',
    description: 'Detailed description for search engines',
    keywords: ['keyword1', 'keyword2'],
    ogImage: '/og-image.jpg',
    twitterCard: 'summary_large_image',
  },
  
  social: {
    twitter: 'https://twitter.com/yourevent',
    // ... other platforms
  },
  
  analytics: {
    googleAnalyticsId: 'G-XXXXXXXXXX', // Optional
  },
};
```

### Feature Flags

```typescript
// src/config/features.config.ts
export const featuresConfig = {
  sections: {
    hero: true,
    speakers: true,
    sponsors: false,      // Disable if no sponsors yet
    newsletter: true,
    // ...
  },
  
  components: {
    themeToggle: true,    // Show theme switcher (dev mode)
    animations: true,
    // ...
  },
};
```

## 🎯 Common Customizations

### Change Primary Color

```typescript
// Method 1: Theme override (quick)
themeConfig.overrides = {
  colors: {
    primary: {
      DEFAULT: 'hsl(280 80% 50%)', // Your color
      // Generate shades using https://uicolors.app
    }
  }
};

// Method 2: Create custom theme (recommended)
// See "Creating a Custom Theme" section
```

### Disable a Section

```typescript
// src/config/features.config.ts
featuresConfig.sections.sponsors = false;
```

### Add Your Logo

1. Place logo in `public/logo.png`
2. Update navigation component to use your logo
3. Update favicon and other branding assets

### Update Fonts

```typescript
// In your custom theme
typography: {
  fontFamily: {
    sans: ['Your Font', 'sans-serif'],
    heading: ['Your Heading Font', 'sans-serif'],
  }
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy

### GitHub Pages

```bash
npm run build
# Upload dist/ folder to gh-pages branch
```

## 📦 What's Next

Current Status: **Phase 1 Complete** ✅

- [x] Theme system foundation
- [x] Type-safe configuration
- [x] Default & Minimal themes
- [x] Content management structure

### Coming Soon

- [ ] Theme Provider (React Context)
- [ ] Live theme switcher UI
- [ ] Corporate theme
- [ ] Dark mode theme
- [ ] CLI tool for setup
- [ ] More documentation
- [ ] Video tutorials
- [ ] Example sites

## 🤝 Contributing

Want to contribute a theme or feature?

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-theme`
3. Commit your changes: `git commit -m 'Add my-theme'`
4. Push to the branch: `git push origin feature/my-theme`
5. Open a Pull Request

## 📄 License

MIT License - feel free to use for your events!

## 🙏 Credits

- Built with [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)

## 💬 Support

- 📧 Email: hello@flutter-guild.dev
- 💬 Discord: [Join our community](https://discord.gg/flutterguild)
- 🐦 Twitter: [@flutterguild](https://twitter.com/flutterguild)

---

Made with ❤️ by the Flutter Guild Team
