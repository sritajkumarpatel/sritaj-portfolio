# AI Agent & Contributor Guidelines (`AGENTS.md`)

This document serves as the universal instruction guide for any AI assistant (GitHub Copilot, Claude Code, Cursor, Antigravity, ChatGPT, Windsurf, Roo, etc.) and human contributors working on this repository.

---

## 1. Project Overview

- **Owner**: Sritaj Patel — Automation Architect & AI Engineer
- **Type**: High-performance single-page portfolio web application
- **Production Host**: Vercel (`https://sritajkumarpatel.vercel.app/`)
- **Core Technologies**:
  - **Framework**: React 18 (SPA, no React Router)
  - **Bundler & Tooling**: Vite 6 (`vite.config.js`)
  - **Styling**: TailwindCSS 3 + custom CSS variables in `src/index.css`
  - **Icons & Motion**: Lucide React, React Icons, Framer Motion
  - **Data Sources**: Static JSON files in `src/data/` and `src/config.json`
  - **Automation Scripts**: Node.js scripts for Medium RSS and GitHub API data synchronization

---

## 2. Architecture & Data Flow

This application is strictly **data-driven**. UI components should contain zero hardcoded biographical or portfolio content.

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

## 3. Automated Data Synchronization

The repository features two Node.js data synchronization scripts in `scripts/`:

1. **`scripts/update-medium.js`**:
   - Fetches the RSS feed for `@sritajpatel` via `rss-parser`.
   - Extracts unique 12-character post hex IDs from URLs/GUIDs to prevent duplicate entries.
   - Preserves custom publication URLs (`generativeai.pub`, `blog.gopenai.com`), reading times, and assigned topics.
2. **`scripts/update-github.js`**:
   - Queries the GitHub REST API for public, non-fork repositories matching the `*Forge` naming convention.
   - Filters out placeholder stubs.
   - Merges curated case-study enhancements from `src/data/projectOverrides.json`.
   - Sorts `featured: true` items first.

### Automation Triggers
- **Local / CI Build**: A `"prebuild"` npm hook runs both sync scripts automatically before Vite compiles the bundle.
- **GitHub Actions**: `.github/workflows/sync-sources.yml` runs on every push to `main` and on a monthly schedule (`0 0 1 * *`), committing any new articles or repositories back to `main`.
- **Vercel Deployment**: Every commit pushed to `main` automatically triggers a fresh Vercel build and deploy.

---

## 4. Development & Build Commands

Any AI agent interacting with this repo must use the following commands:

```bash
# Install dependencies
npm install

# Start local development server (http://localhost:5173)
npm run dev

# Run data sync scripts manually
npm run update:medium
npm run update:github

# Full production build (auto-runs prebuild sync, then vite build)
npm run build

# Preview production build locally
npm run preview
```

---

## 5. Coding Standards & Conventions

When modifying or adding features, all AI models must observe these rules:

1. **Content Stays in JSON**:
   - Never hardcode personal text, URLs, roles, or project descriptions in `.jsx` files.
   - Always update the corresponding JSON file in `src/data/` or `src/config.json`.
2. **Design System & Styling**:
   - Use Tailwind CSS utility classes aligned with existing styles.
   - Maintain the modern dark aesthetic with glassmorphism (`.glass-card`).
   - Use CSS color variables (`var(--color-primary)`, `var(--color-accent)`) rather than hardcoded hex values in component styling so theme switching remains functional.
3. **External Links**:
   - All external anchor tags must include `target="_blank" rel="noopener noreferrer"`.
4. **Clean Component Architecture**:
   - Keep components focused and modular inside `src/components/`.
   - Avoid adding unnecessary npm packages or heavyweight dependencies.
   - Maintain React 18 compatibility.
5. **Validation Before Finishing**:
   - Always verify changes compile cleanly with `npm run build`.
   - Check that JSON files have valid syntax and commas.
