# AI Agent & Contributor Guidelines

> Note: This repository maintains a universal AI instruction guide in [`AGENTS.md`](../AGENTS.md) at the repository root, compatible with all AI coding agents (GitHub Copilot, Claude Code, Cursor, Antigravity, ChatGPT, Windsurf, etc.).

---

## 1. Quick Summary

- **App Type**: Single-page portfolio for Sritaj Patel (Automation Architect & AI Engineer) built with React 18, Vite 6, and TailwindCSS 3.
- **Production Host**: Vercel (`https://sritajkumarpatel.vercel.app/`).
- **Data-Driven**: All biographical, project, and career content is stored in `src/config.json` and `src/data/*.json`. Components contain zero hardcoded content.
- **Automated Sync**: Scripts in `scripts/` sync Medium articles and GitHub repositories, wired to npm's `prebuild` hook and GitHub Actions (`.github/workflows/sync-sources.yml`).

---

## 2. Developer Commands

```bash
# Install dependencies
npm install

# Start local Vite development server
npm run dev

# Run data sync scripts manually
npm run update:medium
npm run update:github

# Full production build (auto-runs prebuild sync + vite build)
npm run build

# Preview build locally
npm run preview
```

---

## 3. Architecture & Data Flow

```
src/config.json & src/data/*.json
             ↓
        src/App.jsx (orchestrates data & active navigation section)
             ↓
       src/components/* (render UI based on props)
             ↓
       Vite Build (`npm run build`)
             ↓
       Vercel Static Hosting (`dist/`)
```

### Key Configuration & Data Files

| Path | Purpose | Consumed By |
|------|---------|-------------|
| `src/config.json` | Personal metadata, titles, bio, social links, navigation sections, theme | `App.jsx`, `Hero.jsx`, `Nav.jsx`, `Footer.jsx` |
| `src/data/aboutMe.json` | Bio narrative, competency pillars, and engineering philosophy | `About.jsx` |
| `src/data/experience.json` | Chronological career history, achievements, and impact bullets | `Experience.jsx` |
| `src/data/projects.json` | Synced repositories and core project data | `Projects.jsx`, `ProjectModal.jsx` |
| `src/data/projectOverrides.json` | Curated metadata overlay (rich descriptions, preview images, key features, quick start) | `scripts/update-github.js` |
| `src/data/mediumArticles.json` | Technical articles and thought leadership posts | `MediumArticles.jsx` |
| `src/data/techStacks.json` | Categorized tools, languages, frameworks, and architecture patterns | `TechStack.jsx` |
| `src/data/awards.json` | Professional accolades, hackathon wins, and quarterly awards | `Awards.jsx` |
| `src/data/certifications.json` | Industry certifications and verification links | `Certifications.jsx` |
| `src/data/education.json` | Degrees, institutions, honors, and coursework | `Education.jsx` |

---

## 4. Coding Conventions for AI Agents

1. **Keep Content in JSON**: Never hardcode personal text or links directly into `.jsx` components. Always add or edit in `src/data/` or `src/config.json`.
2. **Glassmorphic Theme**: Reuse `.glass-card` styling and custom CSS variables (`var(--color-primary)`, `var(--color-accent)`) from `src/index.css` to respect the interactive theme switcher.
3. **External Links**: Ensure all outbound links use `target="_blank" rel="noopener noreferrer"`.
4. **Build Validation**: Always execute `npm run build` to verify syntax, data integrity, and compilation before finalizing code edits.
