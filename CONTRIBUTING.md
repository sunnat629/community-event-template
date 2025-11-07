# Contributing to Community Event Template

First off, thank you for considering contributing to Community Event Template!

This project helps communities worldwide organize amazing events. Your contribution makes a real difference.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Community](#community)

---

## Code of Conduct

This project adheres to a Code of Conduct that all contributors are expected to follow. Please read it before
contributing.

**In short:**

- Be respectful and inclusive
- Welcome newcomers
- Accept constructive criticism
- Focus on what's best for the community
- Show empathy towards others

---

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues. When creating a bug report, include as many details as
possible:

**Bug Report Template:**

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- OS: [e.g., macOS, Windows, Linux]
- Browser: [e.g., Chrome 120, Firefox 115]
- Node version: [e.g., 18.17.0]
- npm version: [e.g., 9.6.7]

**Additional context**
Any other context about the problem.
```

### Suggesting Features

Feature suggestions are welcome! Before creating a feature request:

1. Check if the feature has already been suggested
2. Ensure it aligns with the project's goals
3. Provide as much detail as possible

**Feature Request Template:**

```markdown
**Is your feature request related to a problem?**
A clear description of what the problem is.

**Describe the solution you'd like**
A clear description of what you want to happen.

**Describe alternatives you've considered**
Any alternative solutions or features you've considered.

**Additional context**
Any other context or screenshots about the feature request.

**Implementation ideas (optional)**
If you have ideas about how to implement this.
```

### Contributing Code

See [Development Workflow](#development-workflow) below.

### Improving Documentation

Documentation improvements are always welcome! This includes:

- Fixing typos
- Clarifying instructions
- Adding examples
- Improving README
- Writing tutorials

---

## Getting Started

### Prerequisites

```bash
# Required
Node.js >= 18.x
npm >= 9.x
Git

# Recommended
VS Code with extensions:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
```

### Fork & Clone

1. **Fork the repository** on GitHub (top right corner)

2. **Clone your fork:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/community-event-template.git
   cd community-event-template
   ```

3. **Add upstream remote:**
   ```bash
   git remote add upstream https://github.com/sunnat629/community-event-template.git
   ```

4. **Verify remotes:**
   ```bash
   git remote -v
   # origin    https://github.com/YOUR_USERNAME/community-event-template.git (fetch)
   # origin    https://github.com/YOUR_USERNAME/community-event-template.git (push)
   # upstream  https://github.com/sunnat629/community-event-template.git (fetch)
   # upstream  https://github.com/sunnat629/community-event-template.git (push)
   ```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
# Open http://localhost:5173
```

---

## Development Workflow

### 1. Sync with Upstream

Always start by syncing with the latest code:

```bash
git checkout main
git fetch upstream
git merge upstream/main
git push origin main
```

### 2. Create a Branch

```bash
# Feature branch
git checkout -b feature/amazing-feature

# Bug fix branch
git checkout -b fix/bug-description

# Documentation branch
git checkout -b docs/update-readme
```

**Branch Naming Convention:**

- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation changes
- `style/` - Code style changes (formatting, etc.)
- `refactor/` - Code refactoring
- `perf/` - Performance improvements
- `test/` - Adding tests
- `chore/` - Build process or auxiliary tool changes

### 3. Make Your Changes

- Write clean, readable code
- Follow the [Style Guidelines](#style-guidelines)
- Add comments where necessary
- Keep commits small and focused
- Test your changes thoroughly

### 4. Commit Your Changes

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Format: type(scope): description

git commit -m "feat(search): add global search with Cmd+K shortcut"
git commit -m "fix(navigation): resolve mobile menu overflow on iOS"
git commit -m "docs(readme): update installation instructions"
git commit -m "style(footer): improve spacing and alignment"
git commit -m "refactor(agenda): extract filter logic to custom hook"
git commit -m "perf(images): implement lazy loading"
git commit -m "test(speakers): add unit tests for speaker card"
git commit -m "chore(deps): update dependencies to latest versions"
```

**Commit Types:**

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation only
- `style` - Code style (formatting, semicolons, etc.)
- `refactor` - Code change that neither fixes a bug nor adds a feature
- `perf` - Performance improvement
- `test` - Adding or updating tests
- `chore` - Maintenance tasks

**Good Commit Messages:**

```bash
feat(search): add keyboard navigation to search results
fix(agenda): correct timezone display for sessions
docs(contributing): add pull request template
style(button): update hover state colors
```

**Bad Commit Messages:**

```bash
update stuff
fix bug
WIP
asdfasdf
```

### 5. Push Your Changes

```bash
git push origin feature/amazing-feature
```

### 6. Create Pull Request

1. Go to your fork on GitHub
2. Click "Compare & pull request"
3. Fill out the PR template (see below)
4. Submit the pull request

---

## Pull Request Process

### PR Template

```markdown
## Description
<!-- Brief description of the changes -->

## Related Issue
<!-- Link to the issue this PR closes -->
Closes #123

## Type of Change
<!-- Mark with an 'x' -->
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Style update (formatting, renaming)
- [ ] Code refactoring
- [ ] Performance improvement
- [ ] Test update

## How Has This Been Tested?
<!-- Describe the tests you ran -->
- [ ] Built successfully (`npm run build`)
- [ ] No TypeScript errors (`npx tsc --noEmit`)
- [ ] Tested on desktop (Chrome/Firefox/Safari)
- [ ] Tested on mobile (iOS/Android)
- [ ] Tested keyboard navigation
- [ ] All existing tests pass

## Screenshots (if applicable)
<!-- Add screenshots to show the changes -->

## Checklist
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings or errors
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
- [ ] Any dependent changes have been merged and published

## Additional Notes
<!-- Any additional information -->
```

### PR Guidelines

1. **One PR = One Feature/Fix**
    - Keep PRs focused and small
    - Easier to review and merge
    - Reduces conflicts

2. **Update Your Branch**
   ```bash
   # If main has been updated after you created your branch
   git checkout main
   git pull upstream main
   git checkout feature/your-feature
   git rebase main
   # Resolve conflicts if any
   git push origin feature/your-feature --force-with-lease
   ```

3. **Respond to Feedback**
    - Be open to suggestions
    - Make requested changes promptly
    - Ask questions if unclear

4. **CI Must Pass**
    - All automated checks must pass
    - Fix any linting errors
    - Ensure build succeeds

---

## Style Guidelines

### TypeScript/React

```typescript
// Use TypeScript interfaces
interface SpeakerCardProps {
  speaker: Speaker;
  featured?: boolean;
  onSelect?: (id: string) => void;
}

// Use functional components with React.FC
export const SpeakerCard: React.FC<SpeakerCardProps> = ({ 
  speaker, 
  featured = false,
  onSelect 
}) => {
  // Component logic
};

// Destructure props
const { name, company, bio } = speaker;

// Use early returns
if (!speaker) return null;

// Extract complex logic to functions
const filteredSpeakers = useMemo(() => 
  speakers.filter(matchesSearchCriteria), 
  [speakers, searchQuery]
);
```

### Naming Conventions

```typescript
// Components: PascalCase
SpeakerCard.tsx
NavigationMenu.tsx

// Utilities: camelCase
formatDate.ts
searchUtils.ts

// Constants: SCREAMING_SNAKE_CASE
const MAX_SPEAKERS = 100;
const API_BASE_URL = "https://api.example.com";

// CSS/Assets: kebab-case
speaker - card.css
hero - background.jpg
```

### File Organization

```typescript
// Organize imports
// 1. External libraries
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

// 2. UI components
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// 3. Shared components
import { SpeakerCard } from "@/components/shared/SpeakerCard";
import { SearchBar } from "@/components/shared/SearchBar";

// 4. Content/Data
import { speakers } from "@/content/speakers";
import { eventConfig } from "@/config/site.config";

// 5. Utilities
import { formatDate, cn } from "@/lib/utils";

// 6. Types
import type { Speaker, Session } from "@/types";
```

### Comments

```typescript
// Explain WHY, not WHAT
// Debounce search to avoid excessive API calls
const debouncedSearch = useDebouncedValue(searchQuery, 300);

// Use JSDoc for complex functions
/**
 * Filters sessions by day and track
 * @param sessions - Array of all sessions
 * @param day - Day number (1-3) or 'all'
 * @param track - Track name or 'all'
 * @returns Filtered array of sessions
 */
export function filterSessions(
  sessions: Session[], 
  day: string, 
  track: string
): Session[] {
  // Implementation
}

// Avoid obvious comments
// This is a button
<Button>Click me</Button>
```

### Formatting

We use Prettier for consistent formatting. Key settings:

```json
{
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": false,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "arrowParens": "always"
}
```

---

## Testing

### Before Submitting PR

Run these checks locally:

```bash
# Build check
npm run build

# TypeScript check
npx tsc --noEmit

# Lint check
npm run lint

# Format check
npm run format:check
```

### Manual Testing Checklist

- Feature works as expected
- No console errors
- Responsive on mobile (< 768px)
- Responsive on tablet (768-1024px)
- Works on desktop (> 1024px)
- Keyboard navigation works
- Animations are smooth (60fps)
- Images load correctly
- Links navigate correctly
- Forms validate properly
- No performance regressions

### Browser Testing

Test on at least 2 browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## Community

### Getting Help

- GitHub Discussions: Ask questions, share ideas
- GitHub Issues: Report bugs, request features
- Email: [Maintainer email]

### Staying Updated

- Star the repository to stay informed
- Watch releases for updates
- Follow on social media [if applicable]

---

## Recognition

Contributors are recognized in several ways:

1. **CONTRIBUTORS.md** - Listed with contribution details
2. **Release Notes** - Mentioned in relevant releases
3. **README** - Major contributors featured
4. **Maintainer Team** - Outstanding contributors invited

---

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

## Thank You!

Your contribution is valuable, whether it's:

- Fixing a typo
- Adding a feature
- Improving documentation
- Enhancing design
- Adding tests

Every bit helps make this project better for everyone!

**Happy Contributing!**

---

**Questions?** Open an issue or discussion. We're here to help! 