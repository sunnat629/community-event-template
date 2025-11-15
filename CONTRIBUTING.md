# Contributing to Community Event Template

First of all, thank you for considering contributing to the Community Event Template! We're excited to have you join our
community. This document provides guidelines and instructions for contributing.

## 📚 Important Documentation

Before you start contributing, please familiarize yourself with these key documents:

- **[Future Development Plan](docs/FUTURE_PLAN.md)** - Our roadmap for new features, themes, and improvements
- **[Theme System Architecture](docs/THEME_SYSTEM_ARCHITECTURE.md)** - Technical details about the theme system
- **[README.md](README.md)** - Project overview and quick start guide

These documents will help you understand:

- What features we're planning to add
- How the theme system works
- Where you can contribute most effectively
- Technical architecture and design decisions

---

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please be respectful, inclusive, and
constructive in all interactions.

---

## How Can I Contribute?

There are many ways you can contribute to this project:

### 🎨 Contributing New Themes

We're actively looking for contributors to help create themes for different tech platforms! Check out
our [Future Development Plan](docs/FUTURE_PLAN.md) to see which themes are planned:

**High Priority Themes:**

- iOS Theme
- AI/ML Theme
- QA/Testing Theme
- Cloud/DevOps Theme

**How to contribute a theme:**

1. Read the [Theme System Architecture](docs/THEME_SYSTEM_ARCHITECTURE.md)
2. Choose a theme from the roadmap in [FUTURE_PLAN.md](docs/FUTURE_PLAN.md)
3. Open a discussion issue to claim the theme
4. Research official brand guidelines
5. Follow the theme contribution template in FUTURE_PLAN.md
6. Submit your PR with:
    - Theme colors (verified Hex/Pantone codes)
    - Light & dark mode variants
    - WCAG AA accessibility compliance
    - Screenshots on all pages
    - Documentation updates

### 🐛 Reporting Bugs

If you find a bug, please create an issue in
our [issue tracker](https://github.com/sunnat629/community-event-template/issues) with the following information:

- A clear, descriptive title
- Steps to reproduce the issue
- Expected behavior vs. actual behavior
- Screenshots if applicable
- Any relevant environment details (browser, OS, etc.)

### 💡 Suggesting Enhancements

We welcome feature suggestions! Check [FUTURE_PLAN.md](docs/FUTURE_PLAN.md) first to see if your idea is already
planned.

To suggest a new feature:

- Create an issue with a clear, descriptive title
- Provide a detailed description of the proposed feature
- Include relevant examples, mockups, or use cases
- Explain why this feature would be useful to the project

### 🔧 Code Contributions

We welcome code contributions through pull requests:

1. Check [FUTURE_PLAN.md](docs/FUTURE_PLAN.md) for planned features
2. Fork the repository
3. Create a new branch from `main`
4. Make your changes
5. Test your changes thoroughly
6. Submit a pull request targeting the `main` branch

#### Pull Request Guidelines

- Follow the existing code style
- Include comments for any complex logic
- Add or update tests if applicable
- Update documentation if necessary
- Keep PRs focused - one feature or fix per PR
- Reference related issues in your PR description

---

## Development Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone your fork
git clone https://github.com/YOUR-USERNAME/community-event-template.git
cd community-event-template

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit **http://localhost:5173** to see your changes!

---

## Project Structure

```
src/
├── components/        # UI components
│   ├── pro/          # Pro mode components (multi-page)
│   ├── sections/     # Page sections
│   └── ui/           # Reusable UI components
├── config/            # Configuration files
│   ├── site.config.ts     # Site-wide settings
│   ├── layout.config.ts   # Layout configuration
│   └── theme.config.ts    # Theme settings
├── content/           # Content files (speakers, agenda, etc.)
│   ├── speakers.ts
│   ├── agenda.ts
│   ├── partners.ts
│   └── team.ts
├── pages/             # Page components
├── themes/            # Theme definition files
│   ├── default.theme.ts
│   └── minimal.theme.ts
├── lib/               # Utility functions
└── App.tsx            # Main application component

docs/
├── FUTURE_PLAN.md                    # Development roadmap
├── THEME_SYSTEM_ARCHITECTURE.md     # Theme system docs
└── local/                           # Additional documentation
```

---

## Commit Guidelines

We follow conventional commits for clear commit messages:

- `feat:` A new feature
- `fix:` A bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code changes that neither fix bugs nor add features
- `perf:` Performance improvements
- `test:` Adding or updating tests
- `chore:` Other changes that don't modify src or test files

**Examples:**

```bash
git commit -m "feat: add iOS theme with Apple brand colors"
git commit -m "fix: correct speaker card alignment on mobile"
git commit -m "docs: update theme contribution guidelines"
```

---

## Testing Guidelines

Before submitting your PR, please test your changes:

### For Theme Contributions

- [ ] All pages render correctly
- [ ] Light mode works
- [ ] Dark mode works (if applicable)
- [ ] Mobile responsive
- [ ] Text contrast meets WCAG AA standards
- [ ] Cross-browser tested (Chrome, Firefox, Safari, Edge)
- [ ] No console errors
- [ ] Build succeeds (`npm run build`)

### For Feature Contributions

- [ ] Feature works in both Lite and Pro modes
- [ ] All existing features still work
- [ ] No breaking changes
- [ ] Performance is acceptable
- [ ] Lighthouse score > 90
- [ ] Documentation updated

---

## Documentation

Please help keep our documentation up-to-date:

- **README.md** - Main project documentation
- **Component Documentation** - JSDoc format for components
- **Code Comments** - Explain complex logic
- **FUTURE_PLAN.md** - Update if adding new features to roadmap

---

## Theme Contribution Checklist

If you're contributing a new theme, use this checklist:

```markdown
## Theme: [Your Theme Name]

### Research & Planning
- [ ] Reviewed official brand guidelines
- [ ] Verified color codes (Hex/Pantone)
- [ ] Checked WCAG AA compliance
- [ ] Created mockups/designs

### Implementation
- [ ] Created theme config file
- [ ] Implemented light mode
- [ ] Implemented dark mode (if applicable)
- [ ] Tested all pages
- [ ] Verified responsive design

### Quality Assurance
- [ ] All colors meet contrast requirements
- [ ] Cross-browser tested
- [ ] Mobile tested (iOS/Android)
- [ ] No console errors
- [ ] Build time < 3 seconds
- [ ] Screenshots attached

### Documentation
- [ ] Updated theme list in README
- [ ] Added theme to THEME_SYSTEM_ARCHITECTURE.md
- [ ] Documented color palette
- [ ] Added usage examples
```

---

## Get Help

If you need help or have questions:

- 💬 Create a [Discussion](https://github.com/sunnat629/community-event-template/discussions)
- 📧 Reach out in the issue you're working on
- 📖 Read the [Theme System Architecture](docs/THEME_SYSTEM_ARCHITECTURE.md)
- 🗺️ Check the [Future Plan](docs/FUTURE_PLAN.md)

---

## Recognition

Significant contributors may be recognized in our README.md file at the maintainer's discretion.

---

## Code Review Process

1. **Submission**: Submit your PR with a clear description
2. **Automated Checks**: CI/CD runs tests and builds
3. **Code Review**: Maintainers review your code
4. **Feedback**: Address any requested changes
5. **Approval**: Once approved, your PR will be merged
6. **Recognition**: You'll be added to contributors list!

---

## Questions?

- Check existing [Issues](https://github.com/sunnat629/community-event-template/issues)
- Browse [Discussions](https://github.com/sunnat629/community-event-template/discussions)
- Read [FUTURE_PLAN.md](docs/FUTURE_PLAN.md) for roadmap questions
- Contact: [@sunnat629](https://github.com/sunnat629)

---

Thank you for contributing to Community Event Template! Your efforts help make this project better for tech communities
worldwide. 🚀

**Made with ❤️ by Sunnat629 Labs**