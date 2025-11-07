# 📋 TODO - Community Event Template

> **Project Status:** 81% Complete | Production Ready | Open for Contributions

Welcome, contributor! This document outlines remaining tasks, contribution guidelines, and how you can help make this
template even better.

---

## 🎯 Quick Start for Contributors

### **Prerequisites**

```bash
Node.js >= 18.x
npm >= 9.x
Git
```

### **Setup**

```bash
# 1. Fork the repository on GitHub
# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/community-event-template.git
cd community-event-template

# 3. Install dependencies
npm install

# 4. Create a feature branch
git checkout -b feature/your-feature-name

# 5. Run development server
npm run dev

# 6. Open http://localhost:5173
```

### **Before You Start**

1. ✅ Read this entire TODO.md
2. ✅ Check existing issues on GitHub
3. ✅ Comment on the issue you want to work on
4. ✅ Wait for assignment confirmation
5. ✅ Start coding!

---

## 📊 Project Overview

### **What's Complete (81%)**

- ✅ Pro Mode & Lite Mode system
- ✅ All 9 core pages (Home, Speakers, Agenda, Sponsors, Venue, Team)
- ✅ Detail pages (Speaker, Session, Sponsor)
- ✅ Navigation system (desktop + mobile)
- ✅ Motion animations
- ✅ Responsive design
- ✅ Search & filters (per-section)
- ✅ Footer redesign

### **What's Remaining (19%)**

See tasks below! 👇

---

## 🚀 HIGH PRIORITY TASKS

### **1. Global Search System** ⭐⭐⭐

**Effort:** 8 hours | **Difficulty:** Medium | **Impact:** High

**Description:**  
Implement a global search that searches across speakers, sessions, and sponsors simultaneously.

**Requirements:**

- [ ] Search modal component with keyboard shortcut (Cmd+K / Ctrl+K)
- [ ] Real-time search across all content types
- [ ] Show categorized results (Speakers / Sessions / Sponsors)
- [ ] Keyboard navigation (↑↓ to navigate, Enter to select)
- [ ] Highlight matched text in results
- [ ] Recent searches history
- [ ] Empty state when no results
- [ ] Mobile-friendly design

**Technical Details:**

```typescript
// Location: src/components/shared/GlobalSearch.tsx
// Features:
// - Use Fuse.js for fuzzy search
// - Keyboard event listener for Cmd+K
// - Dialog component from shadcn/ui
// - Search across: speakers.ts, agenda.ts, partners.ts
```

**Files to Create/Modify:**

- `src/components/shared/GlobalSearch.tsx` (new)
- `src/components/shared/SearchModal.tsx` (new)
- `src/hooks/useKeyboardShortcut.ts` (new)
- `src/lib/search.ts` (new - search logic)
- `src/App.tsx` (add global search)

**Acceptance Criteria:**

- Cmd+K opens search modal
- Typing shows real-time results
- Results are categorized by type
- Clicking result navigates to page
- ESC closes modal
- Works on mobile

**Resources:**

- [Fuse.js Documentation](https://fusejs.io/)
- [Keyboard Event Handling](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)
- [shadcn/ui Dialog](https://ui.shadcn.com/docs/components/dialog)

---

### **2. URL State Management** ⭐⭐

**Effort:** 6 hours | **Difficulty:** Medium | **Impact:** Medium

**Description:**  
Make filters shareable via URL parameters so users can bookmark and share filtered views.

**Requirements:**

- [ ] Agenda filters in URL (`?day=1&track=technical`)
- [ ] Speaker search in URL (`?search=john&company=dsi`)
- [ ] Browser back/forward support
- [ ] Persist state on page refresh
- [ ] Update URL without page reload

**Technical Details:**

```typescript
// Use React Router's useSearchParams
// Location: Modify existing pages

// Example for Agenda page:
const [searchParams, setSearchParams] = useSearchParams()
const selectedDay = searchParams.get('day') || 'all'
const selectedTrack = searchParams.get('track') || 'all'

// Update URL when filters change
const updateFilters = (day: string, track: string) => {
  setSearchParams({ day, track })
}
```

**Files to Modify:**

- `src/pages/agenda/index.tsx` (add URL params)
- `src/pages/speakers/index.tsx` (add URL params)
- `src/lib/utils.ts` (add URL helper functions)

**Acceptance Criteria:**

- Filters are reflected in URL
- Sharing URL loads with same filters
- Browser back button works correctly
- URL is human-readable
- Default state when no params

**Resources:**

- [React Router useSearchParams](https://reactrouter.com/en/main/hooks/use-search-params)
- [URL API](https://developer.mozilla.org/en-US/docs/Web/API/URL)

---

### **3. Performance Optimization** ⭐⭐

**Effort:** 6 hours | **Difficulty:** Hard | **Impact:** High

**Description:**  
Optimize bundle size and improve loading performance.

**Current State:**

- Bundle: 724KB (206KB gzipped)
- Target: <500KB (<150KB gzipped)

**Tasks:**

- [ ] Implement code splitting with React.lazy()
- [ ] Lazy load route components
- [ ] Optimize images (WebP format, lazy loading)
- [ ] Add loading skeletons
- [ ] Analyze bundle with rollup-plugin-visualizer
- [ ] Remove unused dependencies
- [ ] Implement dynamic imports

**Technical Details:**

```typescript
// Example: Lazy load routes
import { lazy, Suspense } from 'react'
import { LoadingSpinner } from '@/components/ui/loading'

const SpeakersPage = lazy(() => import('./pages/speakers/index'))
const AgendaPage = lazy(() => import('./pages/agenda/index'))

// Wrap routes in Suspense
<Suspense fallback={<LoadingSpinner />}>
  <Routes>
    <Route path="/speakers" element={<SpeakersPage />} />
  </Routes>
</Suspense>
```

**Files to Create/Modify:**

- `src/App.tsx` (add lazy loading)
- `src/components/ui/loading-skeleton.tsx` (new)
- `src/components/ui/loading-spinner.tsx` (new)
- `vite.config.ts` (add bundle analysis)
- `package.json` (review dependencies)

**Acceptance Criteria:**

- Bundle size reduced to <500KB
- Initial load time < 2s
- Route transitions smooth
- Loading states present
- Lighthouse score > 90

**Resources:**

- [React.lazy() Documentation](https://react.dev/reference/react/lazy)
- [Vite Code Splitting](https://vitejs.dev/guide/features.html#code-splitting)
- [Web.dev Performance](https://web.dev/performance/)

---

## 🎨 MEDIUM PRIORITY TASKS

### **4. Loading States & Skeletons** ⭐

**Effort:** 4 hours | **Difficulty:** Easy | **Impact:** Medium

**Description:**  
Add skeleton screens and loading states for better perceived performance.

**Requirements:**

- [ ] Skeleton for speaker cards
- [ ] Skeleton for agenda items
- [ ] Skeleton for sponsor cards
- [ ] Loading spinner component
- [ ] Progress bar for navigation
- [ ] Shimmer effect animation

**Files to Create:**

- `src/components/ui/skeleton.tsx`
- `src/components/shared/SpeakerCardSkeleton.tsx`
- `src/components/shared/AgendaItemSkeleton.tsx`
- `src/components/ui/loading-spinner.tsx`

**Resources:**

- [shadcn/ui Skeleton](https://ui.shadcn.com/docs/components/skeleton)

---

### **5. Error Boundaries** ⭐

**Effort:** 3 hours | **Difficulty:** Easy | **Impact:** Medium

**Description:**  
Implement React error boundaries for graceful error handling.

**Requirements:**

- [ ] Global error boundary
- [ ] Route-level error boundaries
- [ ] Error logging (console/service)
- [ ] User-friendly error pages
- [ ] Retry mechanism

**Files to Create:**

- `src/components/ErrorBoundary.tsx`
- `src/pages/ErrorPage.tsx`
- `src/lib/errorLogger.ts`

**Resources:**

- [React Error Boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)

---

### **6. SEO Optimization** ⭐

**Effort:** 4 hours | **Difficulty:** Easy | **Impact:** High

**Description:**  
Add proper meta tags, Open Graph images, and structured data.

**Requirements:**

- [ ] Meta tags for all pages
- [ ] Open Graph tags (Facebook/LinkedIn)
- [ ] Twitter Card tags
- [ ] Canonical URLs
- [ ] JSON-LD structured data
- [ ] sitemap.xml generation

**Files to Create/Modify:**

- `src/components/SEO.tsx` (new)
- `public/sitemap.xml` (new)
- `public/robots.txt` (update)
- Add meta tags to all page components

**Resources:**

- [Open Graph Protocol](https://ogp.me/)
- [Schema.org Events](https://schema.org/Event)

---

### **7. Accessibility Audit** ⭐⭐

**Effort:** 5 hours | **Difficulty:** Medium | **Impact:** High

**Description:**  
Ensure WCAG 2.1 AA compliance throughout the application.

**Tasks:**

- [ ] Add ARIA labels where needed
- [ ] Ensure keyboard navigation works
- [ ] Test with screen reader (NVDA/JAWS)
- [ ] Fix color contrast issues
- [ ] Add focus indicators
- [ ] Semantic HTML audit
- [ ] Alt text for all images

**Tools:**

- [axe DevTools](https://www.deque.com/axe/devtools/)
- [Lighthouse Accessibility](https://developer.chrome.com/docs/lighthouse/)
- [WAVE Tool](https://wave.webaim.org/)

**Acceptance Criteria:**

- Lighthouse Accessibility score > 95
- All interactive elements keyboard accessible
- Proper heading hierarchy
- Screen reader friendly

---

## 🔧 LOW PRIORITY / ENHANCEMENTS

### **8. FAQ Page**

**Effort:** 3 hours | **Difficulty:** Easy

- [ ] Create FAQ content structure
- [ ] Accordion component for Q&A
- [ ] Search within FAQs
- [ ] Categories (General, Registration, Venue, etc.)

**Files to Create:**

- `src/pages/faq/index.tsx`
- `src/content/faq.ts`

---

### **9. Newsletter Signup**

**Effort:** 2 hours | **Difficulty:** Easy

- [ ] Email input component
- [ ] Form validation
- [ ] Integration placeholder (Mailchimp/ConvertKit)
- [ ] Success/error states
- [ ] Privacy policy link

**Files to Create:**

- `src/components/shared/NewsletterForm.tsx`

---

### **10. Analytics Integration**

**Effort:** 2 hours | **Difficulty:** Easy

- [ ] Google Analytics 4 setup
- [ ] Event tracking (button clicks, page views)
- [ ] Privacy-friendly configuration
- [ ] Cookie consent banner (optional)

**Files to Create:**

- `src/lib/analytics.ts`
- `src/components/CookieConsent.tsx` (optional)

---

### **11. Dark Mode Support**

**Effort:** 6 hours | **Difficulty:** Medium

- [ ] Dark theme colors
- [ ] Theme toggle component
- [ ] Persist theme preference
- [ ] Update all components
- [ ] Test contrast in dark mode

**Files to Create/Modify:**

- `src/components/ThemeToggle.tsx`
- `src/styles/themes.css`
- Update all component styles

---

### **12. Internationalization (i18n)**

**Effort:** 12 hours | **Difficulty:** Hard

- [ ] Setup i18next
- [ ] Extract all text to translation files
- [ ] Language switcher component
- [ ] Support for Bengali/English
- [ ] RTL support (if needed)

**Files to Create:**

- `src/i18n/` (directory)
- `src/locales/en.json`
- `src/locales/bn.json`

---

## 📝 CONTRIBUTION GUIDELINES

### **How to Contribute**

1. **Pick a Task**
    - Choose from TODO list above
    - Check if issue exists on GitHub
    - If not, create an issue first

2. **Get Assigned**
    - Comment on the issue
    - Wait for maintainer approval
    - Get assigned before starting

3. **Create Branch**
   ```bash
   git checkout -b feature/task-name
   # or
   git checkout -b fix/bug-description
   ```

4. **Write Code**
    - Follow existing code style
    - Add comments where needed
    - Keep commits small and focused
    - Write clear commit messages

5. **Test Your Changes**
   ```bash
   npm run build      # Ensure build succeeds
   npm run dev        # Test locally
   # Test on mobile viewport
   # Test keyboard navigation
   ```

6. **Commit Guidelines**
   ```bash
   # Format: type(scope): description
   
   git commit -m "feat(search): add global search with Cmd+K"
   git commit -m "fix(navigation): resolve mobile menu overflow"
   git commit -m "docs(readme): update installation steps"
   git commit -m "style(footer): adjust spacing and colors"
   git commit -m "refactor(agenda): extract filter logic to hook"
   git commit -m "perf(images): add lazy loading"
   
   # Types: feat, fix, docs, style, refactor, perf, test, chore
   ```

7. **Push & Create PR**
   ```bash
   git push origin feature/task-name
   # Then create Pull Request on GitHub
   ```

8. **PR Template**
   ```markdown
   ## Description
   Brief description of changes
   
   ## Related Issue
   Closes #123
   
   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Breaking change
   - [ ] Documentation update
   
   ## Testing
   - [ ] Build passes
   - [ ] Tested locally
   - [ ] Mobile responsive
   - [ ] No console errors
   
   ## Screenshots (if applicable)
   [Add screenshots]
   ```

---

### **Code Style Guidelines**

**TypeScript/React:**

```typescript
// ✅ Good: Clear component with proper types
interface SpeakerCardProps {
  speaker: Speaker;
  featured?: boolean;
  onClick?: () => void;
}

export const SpeakerCard: React.FC<SpeakerCardProps> = ({ 
  speaker, 
  featured = false,
  onClick 
}) => {
  // Component logic
  return (
    <div className="speaker-card">
      {/* JSX */}
    </div>
  );
};

// ❌ Avoid: Unclear props, no types
export const SpeakerCard = (props) => {
  return <div>...</div>
}
```

**File Naming:**

```
✅ PascalCase for components: SpeakerCard.tsx
✅ camelCase for utilities: formatDate.ts
✅ kebab-case for CSS: speaker-card.css
✅ lowercase for content: speakers.ts
```

**Comments:**

```typescript
// ✅ Clear, concise comments
// Filter speakers by company name
const filteredSpeakers = speakers.filter(s => s.company === companyName);

// ❌ Avoid obvious comments
// This is a function
function doSomething() { }
```

**Imports:**

```typescript
// ✅ Organized imports
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { SpeakerCard } from "@/components/shared/SpeakerCard";
import { speakers } from "@/content/speakers";
import { formatDate } from "@/lib/utils";

// ❌ Avoid mixed/unorganized
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import React from "react";
```

---

### **Testing Checklist**

Before submitting PR, verify:

- [ ] **Build succeeds** (`npm run build`)
- [ ] **No TypeScript errors** (`npx tsc --noEmit`)
- [ ] **No console errors** in browser
- [ ] **Works on mobile** (< 768px width)
- [ ] **Works on tablet** (768-1024px width)
- [ ] **Works on desktop** (> 1024px width)
- [ ] **Keyboard accessible** (Tab navigation works)
- [ ] **Fast load time** (< 3s on 3G)
- [ ] **Animations smooth** (60fps)
- [ ] **Images load properly**
- [ ] **Links work correctly**
- [ ] **Forms validate properly**

---

## 🏗️ Project Structure

```
community-event-template/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── pro/         # Pro mode specific
│   │   ├── sections/    # Page sections
│   │   ├── shared/      # Reusable components
│   │   └── ui/          # Base UI components
│   ├── content/         # Event data (speakers, agenda, etc.)
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utilities and helpers
│   ├── pages/           # Page components
│   │   ├── speakers/    # Speakers list + detail
│   │   ├── agenda/      # Agenda + session detail
│   │   ├── sponsors/    # Sponsors list + detail
│   │   ├── venue/       # Venue page
│   │   └── team/        # Team page
│   ├── styles/          # Global CSS
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── CONTRIBUTING.md      # Detailed contribution guide
├── TODO.md              # This file
└── README.md            # Project readme
```

---

## 🎓 Learning Resources

### **For Beginners**

- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)

### **For Intermediate**

- [React Router](https://reactrouter.com/)
- [Motion (Framer Motion)](https://motion.dev/)
- [Vite Guide](https://vitejs.dev/guide/)

### **For Advanced**

- [React Performance](https://react.dev/learn/render-and-commit)
- [Web Accessibility](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web Performance](https://web.dev/explore/fast)

---

## 💬 Communication

### **Questions?**

- 💬 **GitHub Discussions:** Ask questions, share ideas
- 🐛 **GitHub Issues:** Report bugs, request features
- 📧 **Email:** [Maintainer email]
- 🌐 **Website:** [Project website]

### **Response Time**

- Issues: Within 24-48 hours
- PRs: Within 2-3 days
- Discussions: Within 1 week

---

## 🏆 Recognition

Contributors will be:

- ✅ Listed in CONTRIBUTORS.md
- ✅ Mentioned in release notes
- ✅ Given credit in documentation
- ✅ Invited to maintainer team (for significant contributions)

---

## 📜 License

This project is open source under the MIT License. By contributing, you agree that your contributions will be licensed
under the same license.

---

## 🙏 Thank You!

Thank you for considering contributing to this project! Every contribution, no matter how small, makes a difference.
Whether you're fixing a typo, adding a feature, or improving documentation - you're helping make event organization
easier for communities worldwide.

**Happy Coding!** 🚀✨

---

**Last Updated:** December 2024  
**Maintainer:** Mohammad Noor ([@sunnat629](https://github.com/sunnat629))  
**Project Status:** Active Development | Accepting Contributions
