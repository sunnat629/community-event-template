# Contributing to Community Event Template

Thank you for your interest in contributing! This template is used by tech communities worldwide, and your contributions
help make events better for everyone.

## Ways to Contribute

- **Report Bugs** - Found an issue? Let us know!
- **Suggest Features** - Have ideas? We'd love to hear them!
- **Improve Documentation** - Help others understand the template
- **Design Improvements** - Enhance UI/UX
- **Performance Optimizations** - Make it faster
- **Add Tests** - Improve code quality
- **Translations** - Make it accessible worldwide

## Getting Started

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

## Development Workflow

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
- Follow existing code style
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
- `style:` - Code style/formatting
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding tests
- `chore:` - Maintenance tasks

**Examples:**
```bash
feat: add speaker filtering functionality
fix: resolve carousel auto-rotation issue
docs: update customization guide
style: improve button hover effects
perf: optimize image loading
```

### 4. Push & Create PR

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

## Pull Request Guidelines

### Before Submitting

- Code builds successfully (`npm run build`)
- No TypeScript errors
- No console errors in browser
- Tested on mobile and desktop
- Documentation updated (if needed)
- Follows existing code style

### PR Title Format

```
feat: Add speaker filtering
fix: Carousel navigation on mobile
docs: Update README with examples
```

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- Tested on Chrome, Firefox, Safari
- Tested responsive design
- No console errors

## Screenshots (if applicable)
[Add screenshots]

## Checklist
- [ ] Code builds without errors
- [ ] Followed code style guidelines
- [ ] Updated documentation
- [ ] Tested thoroughly
```

## Code Style Guidelines

### TypeScript

```typescript
// Use descriptive names
const speakerCount = speakers.length; 
const n = speakers.length; 

// Use types/interfaces
interface Speaker {
  name: string;
  title: string;
}

// Use arrow functions for components
export const MyComponent = () => {
  return <div>Content</div>;
};

// Add comments for complex logic
// Calculate total sessions across all days
const totalSessions = days.reduce((sum, day) => sum + day.sessions.length, 0);
```

### React Components

```tsx
// Organize imports
import React from "react";
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

## Project Structure

```
src/
├── components/
│   ├── pro/          # Pro mode components
│   ├── sections/     # Page sections
│   ├── shared/       # Shared components
│   └── ui/           # UI primitives
├── config/           # Configuration files
├── content/          # Content management
│   ├── agenda.ts
│   ├── partners.ts
│   ├── speakers.ts
│   └── ...
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── pages/            # Route pages
└── types/            # TypeScript types
```

## Testing

Before submitting:

```bash
# Build test
npm run build

# Check for TypeScript errors
npm run type-check

# Preview production build
npm run preview
```

### Manual Testing Checklist

- All pages load without errors
- Navigation works correctly
- Responsive design (mobile, tablet, desktop)
- Forms work correctly
- Images load properly
- Carousels auto-rotate
- Hover effects work
- No console errors

## Reporting Bugs

### Before Reporting

1. Check if bug already exists in [Issues](https://github.com/sunnat629/community-event-template/issues)
2. Try on latest version
3. Reproduce the bug consistently

### Bug Report Template

```markdown
**Describe the bug**
Clear description of the bug

**To Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What should happen

**Screenshots**
Add screenshots if helpful

**Environment:**
- OS: [e.g. macOS, Windows]
- Browser: [e.g. Chrome 120]
- Node version: [e.g. 18.0.0]

**Additional context**
Any other relevant information
```

## Feature Requests

### Feature Request Template

```markdown
**Feature Description**
Clear description of the feature

**Problem it Solves**
What problem does this solve?

**Proposed Solution**
How should it work?

**Alternatives Considered**
Other approaches you've thought about

**Additional Context**
Mockups, examples, references
```

## Questions & Support

- **Discussions**: [GitHub Discussions](https://github.com/sunnat629/community-event-template/discussions)
- **Email**: me@sunnat629.dev
- **Twitter**: [@sunnat629](https://twitter.com/sunnat629)

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive experience for everyone.

### Expected Behavior

- Be respectful and kind
- Accept constructive criticism
- Focus on what's best for the community
- Show empathy towards others

### Unacceptable Behavior

- Harassment or discriminatory language
- Trolling or insulting comments
- Personal or political attacks
- Publishing others' private information

## Recognition

Contributors will be:

- Listed in GitHub contributors
- Mentioned in release notes
- Credited in project documentation

## Contact

**Sunnat629 Labs**

- Website: [sunnat629labs.com](https://sunnat629labs.com)
- Email: me@sunnat629.dev
- Twitter: [@sunnat629](https://twitter.com/sunnat629)
- LinkedIn: [in/sunnat629](https://linkedin.com/in/sunnat629)

<div align="center">

**Thank you for contributing!**

Made with ❤️ for tech communities worldwide

</div>