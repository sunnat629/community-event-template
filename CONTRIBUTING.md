# Contributing to Community Event Template

First of all, thank you for considering contributing to the Community Event Template! This project aims to help
technology communities around the world create professional event websites quickly and easily. Your contributions will
help make this template better for everyone.

## ud83dudca1 Why Contribute?

- **Help Tech Communities:** Your contributions will help communities worldwide create better events
- **Showcase Your Skills:** Add a meaningful open-source contribution to your portfolio
- **Learn & Grow:** Work with modern web technologies like React, TypeScript, and Tailwind
- **Join a Community:** Connect with other developers passionate about community building

## ud83dudcd3 Ways to Contribute

- **Code Contributions:** Fix bugs, add new features, improve performance
- **Design Improvements:** Enhance UI/UX, create new components, add animations
- **Documentation:** Improve the README, add examples, create tutorials
- **Templates:** Create new theme variations or section layouts
- **Testing:** Identify bugs, improve test coverage
- **Accessibility:** Make the template more accessible to everyone
- **Translations:** Help localize the template for international use

## ud83dude80 Getting Started

### Prerequisites

- **Node.js 18+** - [Install with nvm](https://github.com/nvm-sh/nvm)
- **Git** - For version control
- **Code Editor** - VS Code recommended

### Fork & Clone

```bash
# Fork the repository on GitHub
# Then clone your fork:
git clone https://github.com/YOUR_USERNAME/community-event-template.git
cd community-event-template

# Add upstream remote
git remote add upstream https://github.com/sunnat629/community-event-template.git
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
# Visit http://localhost:5173
```

## ud83dudcbc Development Workflow

### 1. Create a Branch

```bash
# Sync with upstream
git fetch upstream
git checkout main
git merge upstream/main

# Create feature branch
git checkout -b feature/your-feature-name
# OR for bugs
git checkout -b fix/bug-description
```

### 2. Make Changes

- Write clean, documented code
- Follow existing code style and patterns
- Test your changes thoroughly
- Update documentation if needed

### 3. Commit Changes

```bash
git add .
git commit -m "feat: add amazing feature"
```

**Commit Message Format:**

```
<type>: <description>

[optional body]
[optional footer]
```

**Types:**

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style/formatting (no functional changes)
- `refactor:` - Code refactoring (no functional changes)
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

**Examples:**

```bash
feat: add speaker filtering functionality
fix: resolve carousel auto-rotation issue on mobile
docs: improve customization documentation
perf: optimize image loading for better performance
refactor: simplify theme configuration system
```

### 4. Push & Create PR

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub:

1. Go to your forked repository
2. Click "Compare & pull request"
3. Fill out the PR template with details about your changes
4. Submit the pull request

## ud83dudcdd Pull Request Guidelines

### Before Submitting

- **Build Check:** Ensure code builds successfully (`npm run build`)
- **Type Check:** Verify no TypeScript errors (`npm run type-check` if available)
- **Browser Test:** Test in multiple browsers if making UI changes
- **Mobile Test:** Check responsiveness on mobile devices
- **Documentation:** Update documentation if needed

### PR Title Format

```
feat: Add speaker filtering functionality
fix: Resolve carousel navigation on mobile
docs: Update README with theme customization examples
```

### PR Description Template

```markdown
## Description
Brief description of the changes

## Type of Change
- [ ] Bug fix (non-breaking change fixing an issue)
- [ ] New feature (non-breaking change adding functionality)
- [ ] Breaking change (fix or feature causing existing functionality to change)
- [ ] Documentation update

## Testing Performed
- Tested on Chrome, Firefox, Safari (list browsers tested)
- Tested on mobile and desktop
- Verified all functionality still works

## Screenshots
(If applicable, add screenshots)

## Checklist
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have updated the documentation accordingly
- [ ] My changes generate no new warnings
```

## ud83dudcda Code Style Guidelines

### TypeScript

```typescript
// Use descriptive names
const speakerCount = speakers.length; // Good
const n = speakers.length; // Avoid

// Use types/interfaces
interface Speaker {
  name: string;
  title: string;
  company?: string; // Optional properties with ?
}

// Use arrow functions for components
export const MyComponent = () => {
  return <div>Content</div>;
};

// Add comments for complex logic
// Calculate total sessions across all tracks and days
const totalSessions = days.reduce(
  (sum, day) => sum + day.sessions.length, 
  0
);
```

### React Components

```tsx
// Organize imports
import React from "react";
// External libraries first
import {motion} from "motion/react";
// Local components
import {ComponentA} from "@/components/ComponentA";
import {useHook} from "@/hooks/useHook";
import {Button} from "@/components/ui/button";

// Use functional components
export const MyComponent = () => {
  // Hooks at the top
  const [state, setState] = useState();
  
  // Helper functions
  const handleClick = () => {
    // logic
  };
  
  // Render
  return (
    <div className="container">
      <Button onClick={handleClick}>Click</Button>
    </div>
  );
};
```

### CSS/Tailwind

```tsx
// Use Tailwind utility classes
<div className="flex items-center gap-4 p-6 rounded-lg bg-card">

// Group related classes
<div className="
  flex items-center justify-center gap-4
  p-6 rounded-lg
  bg-card border-2 border-border
  hover:shadow-lg hover:scale-105
  transition-all duration-300
">

// Use custom CSS variables for colors
<div className="bg-primary text-white">
```

## ud83dudcc2 Project Structure

```
src/
u251cu2500u2500 components/
u2502   u251cu2500u2500 pro/          # Pro mode components
u2502   u251cu2500u2500 sections/     # Page sections
u2502   u251cu2500u2500 shared/       # Shared components
u2502   u2514u2500u2500 ui/           # UI primitives
u251cu2500u2500 config/           # Configuration files
u251cu2500u2500 content/          # Content management
u2502   u251cu2500u2500 agenda.ts
u2502   u251cu2500u2500 partners.ts
u2502   u251cu2500u2500 speakers.ts
u2502   u2514u2500u2500 ...
u251cu2500u2500 hooks/            # Custom React hooks
u251cu2500u2500 lib/              # Utility functions
u251cu2500u2500 pages/            # Route pages
u2514u2500u2500 types/            # TypeScript types
```

## ud83euddea Testing

Before submitting your changes:

```bash
# Build test
npm run build

# Check for TypeScript errors
npm run type-check  # If available

# Preview production build
npm run preview
```

### Manual Testing Checklist

- All pages load without errors
- Navigation works correctly
- Responsive design works on mobile, tablet, and desktop
- Forms work correctly
- Images load properly
- Carousels auto-rotate correctly
- Interactive elements (hover effects, buttons, etc.) work as expected
- No console errors are present

## ud83dudc1b Reporting Bugs

### Before Reporting

1. Check if the bug already exists in [Issues](https://github.com/sunnat629/community-event-template/issues)
2. Try using the latest version of the template
3. Try to reproduce the bug consistently

### Bug Report Template

```markdown
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
 - OS: [e.g. macOS, Windows, Linux]
 - Browser: [e.g. Chrome 120, Firefox 100, Safari 15]
 - Node version: [e.g. 18.0.0]
 - npm version: [e.g. 8.1.0]

**Additional context**
Add any other context about the problem here.
```

## ud83dudca1 Feature Requests

We welcome feature requests! Use the following template when suggesting new features:

### Feature Request Template

```markdown
**Feature Description**
A clear and concise description of the feature you'd like to see added.

**Problem it Solves**
Describe what problem this feature would solve or what value it would add.

**Proposed Solution**
Describe how you envision this feature working.

**Alternatives Considered**
Describe any alternative solutions or features you've considered.

**Additional Context**
Add any other context, mockups, examples from other sites, or references.
```

## u2753 Questions & Support

If you have questions about using or contributing to the template:

- **Discussions**: Use [GitHub Discussions](https://github.com/sunnat629/community-event-template/discussions)
- **Email**: Contact me@sunnat629.dev
- **Twitter**: Reach out to [@sunnat629](https://twitter.com/sunnat629)

## ud83dudcdc License

By contributing, you agree that your contributions will be licensed under the project's [MIT License](LICENSE).

## ud83dudd2c Code of Conduct

We are committed to providing a welcoming and inclusive experience for everyone. We expect all contributors to adhere to
the following guidelines:

### Expected Behavior

- Be respectful and considerate of others
- Accept constructive criticism gracefully
- Focus on what is best for the community
- Show empathy towards other community members

### Unacceptable Behavior

- Harassment or discriminatory language or behavior
- Trolling, insulting/derogatory comments, or personal attacks
- Public or private harassment
- Publishing others' private information without permission

## ud83cudfc6 Recognition

Contributors will be recognized in several ways:

- Listed in GitHub contributors
- Mentioned in release notes
- Credited in project documentation
- Possible invitation to become a project maintainer for significant contributions

## ud83dudcec Contact

**Mohi Us Sunnat**

- GitHub: [sunnat629](https://github.com/sunnat629)
- Twitter: [@sunnat629](https://twitter.com/sunnat629)
- LinkedIn: [in/sunnat629](https://linkedin.com/in/sunnat629)
- Email: me@sunnat629.dev

<div align="center">

**Thank you for contributing!**

Made with u2764ufe0f for tech communities worldwide

</div>