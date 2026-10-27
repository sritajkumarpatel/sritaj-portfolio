# GitHub Copilot / AI Agent Instructions

Purpose: help AI agents and contributors be productive immediately when working in this repository.

Quick Summary

- Single-page React portfolio built with Vite and TailwindCSS.
- **Fully plug-and-play**: All content lives in JSON files (`src/config.json` and `src/data/*.json`). Zero hardcoded content.
- Main application: `src/App.jsx` imports JSON data and passes to data-driven components. `src/main.jsx` bootstraps the app.
- Styling: `src/index.css` contains Tailwind directives and project-specific fallback/custom CSS (`.glass-card`, design tokens).
- Build/deploy: Vite 6 (`npm run dev` / `npm run build`), deployed to Vercel (root `/`) or GitHub Pages via GitHub Actions.

Quick Start (dev + build)

- Install dependencies: `npm install`
- Run dev server: `npm run dev` (uses Vite)
- Build for production: `npm run build` (auto-runs `prebuild` to sync Medium & GitHub data)
- Preview production build: `npm run preview`
- Update sources manually: `npm run update:medium` and `npm run update:github`

Important Files & Why

**Configuration:**

- `src/config.json` — Central hub for personal info, titles, bio, sources (Medium & GitHub), sections, theme. Edit this first to customize for a new portfolio owner.

**Data (JSON-based):**

- `src/data/aboutMe.json` — Bio sections, competencies, and philosophy. Used by `About.jsx`.
- `src/data/awards.json` — All awards with title, year, quarter, company, description. Used by `Awards.jsx`.
- `src/data/experience.json` — Work history with roles, highlights, key achievements. Used by `Experience.jsx`.
- `src/data/certifications.json` — Certifications with issuers, dates, credentials. Used by `Certifications.jsx`.
- `src/data/techStacks.json` — Technical skills and proficiencies. Used by `TechStack.jsx`.
- `src/data/projects.json` — Portfolio projects synced from GitHub *Forge repos. Used by `Projects.jsx` and `ProjectModal.jsx`.
- `src/data/projectOverrides.json` — Case-study polish overlay (images, keyFeatures, quickStart) for projects.
- `src/data/mediumArticles.json` — Medium articles feed (auto-synced by `update-medium.js`). Used by `MediumArticles.jsx`.
- `src/data/education.json` — Education with degrees, institutions, periods, focus areas. Used by `Education.jsx`.

**Components:**

- `src/App.jsx` — Main orchestrator: imports JSON files and passes them as props to components. Navigation state managed here.
- `src/components/Nav.jsx` — Navigation bar with scroll spy, theme presets picker, and mobile menu.
- `src/components/Hero.jsx` — Hero section with dynamic rotating title cycler, bio, social links, and key stats.
- `src/components/About.jsx` — About section rendering from `aboutMe.json`.
- `src/components/Awards.jsx` — Awards section rendering from `awards.json`.
- `src/components/Experience.jsx` — Experience section rendering from `experience.json`.
- `src/components/Certifications.jsx` — Certifications rendering from `certifications.json`.
- `src/components/TechStack.jsx` — Tech skills rendering from `techStacks.json`.
- `src/components/Projects.jsx` — Projects section rendering curated case studies and linking to `ProjectModal.jsx`.
- `src/components/ProjectModal.jsx` — Reusable case study modal displaying rich features, quick start, and stack.
- `src/components/MediumArticles.jsx` — Medium articles rendering from `mediumArticles.json` with topic filters.
- `src/components/Education.jsx` — Education section rendering from `education.json`.
- `src/components/Footer.jsx` — Footer using `config.personal.name` and links.
- `src/main.jsx` — React bootstrap.

**Other:**

- `src/index.css` — Tailwind directives plus custom design tokens and `.glass-card` styling.
- `vite.config.js` — Vite config with root `/` default and `process.env.VITE_BASE` support.
- `vercel.json` — Vercel configuration for static deployment.
- `package.json` — Scripts and dependencies with automated `prebuild` sync.
- `scripts/update-medium.js` — Auto-sync Medium articles using post ID matching.
- `scripts/update-github.js` — Auto-sync *Forge repos from GitHub.

Architecture & Patterns

- **Single-page app**: No routing library. Navigation is controlled by `activeSection` state in `App.jsx`.
- **Content-as-JSON**: ALL content lives in JSON files (`src/config.json` and `src/data/*.json`). ZERO hardcoded content. Components import JSON and render it.
  - `src/config.json` contains: personal info, titles, bio text, social links, theme settings.
  - `src/data/*.json` contain all section-specific content (about, awards, experience, etc.).
- **Data-driven components**: Each component receives JSON data as a prop from `App.jsx` and renders it. Examples:
  - `<About aboutMe={aboutMe} />` — passes `aboutMe.json` to About component.
  - `<Awards awards={awards} />` — passes `awards.json` to Awards component.
  - `<Experience experience={experience} />` — passes `experience.json` to Experience component.
- **UI / styling**: Tailwind utility classes used heavily. Custom CSS in `src/index.css` (`.glass-card`, `.experience-card`, gradients). Keep consistent when adding UI.
- **Icon usage**: `lucide-react` icons imported in components as needed. Use existing icons for brand consistency.
- **Deployment**: Vite's `base` option set to `/sritaj-portfolio/`. If repo is forked/renamed, update `vite.config.js` base value.

Project-specific Conventions

- **Zero hardcoded content**: DO NOT add content directly in components. Always create or update a JSON file in `src/data/` or `src/config.json`.
- **Reuse `glass-card` CSS** for new cards/panels. Implements the visual "glass" look across elements.
- **Component naming**: PascalCase for components in `src/components/`. Keep single-purpose.
- **External links**: Use `target="_blank" rel="noopener noreferrer"` for all external links.
- **⚠️ DOCUMENTATION**: Do NOT create unnecessary `.md` files unless explicitly requested by the user. Keep documentation minimal and focused on the Quick Start, architecture, and debugging tips.

## Architecture & Data Flow

When working on this portfolio, AI agents should follow this data flow:

```
Config / Content Updates
    ↓
Read config.json & target src/data/*.json
    ↓
Update JSON data files / component styles
    ↓
Validate JSON syntax
    ↓
Run: npm run build (verifies prebuild data sync & bundle compilation)
    ↓
Confirm changes visually in browser
```

### Key Principles

1. **Content in JSON**: Keep content data-driven in `src/data/*.json` and `src/config.json`.
2. **Design System & Tokens**: Reuse `.glass-card` and CSS custom variables (`--color-primary`, `--color-accent`, `--color-accent-rgb`).
3. **Data Sync**:
   - `scripts/update-medium.js` syncs Medium stories using post ID matching.
   - `scripts/update-github.js` syncs *Forge repos and merges `src/data/projectOverrides.json`.
   - `prebuild` in `package.json` ensures fresh data on every deployment.
4. **Build Validation**: Always verify changes by running `npm run build`.
5. **Deployment**: Deploys to Vercel root `/` domain with fallback support for GitHub Pages via `VITE_BASE`.

