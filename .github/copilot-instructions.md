# GitHub Copilot / AI Agent Instructions

Purpose: help AI agents and contributors be productive immediately when working in this repository.

Quick Summary

- Single-page React portfolio built with Vite and TailwindCSS.
- **Fully plug-and-play**: All content lives in JSON files (`src/config.json` and `src/data/*.json`). Zero hardcoded content.
- Main application: `src/App.jsx` imports JSON data and passes to data-driven components. `src/main.jsx` bootstraps the app.
- Styling: `src/index.css` contains Tailwind directives and project-specific fallback/custom CSS.
- Build/deploy: Vite (`npm run dev` / `npm run build`) and GitHub Pages via `gh-pages` (`npm run deploy`).

Quick Start (dev + build)

- Install dependencies: `npm install`
- Run dev server: `npm run dev` (uses Vite)
- Build for production: `npm run build`
- Preview production build: `npm run preview`
- Deploy to GitHub Pages: `npm run deploy` (uses `gh-pages -d dist`)

Important Files & Why

**Configuration:**

- `src/config.json` — Central hub for personal info, titles, bio, social links, theme. Edit this first to customize for a new portfolio owner.

**Data (JSON-based):**

- `src/data/aboutMe.json` — Bio sections, competencies, and philosophy. Used by `About.jsx`.
- `src/data/awards.json` — All awards with title, year, quarter, company, description. Used by `Awards.jsx`.
- `src/data/experience.json` — Work history with roles, highlights, key achievements. Used by `Experience.jsx`.
- `src/data/certifications.json` — Certifications with issuers, dates, credentials. Used by `Certifications.jsx`.
- `src/data/techStacks.json` — Technical skills and proficiencies. Used by `TechStack.jsx`.
- `src/data/projects.json` — Portfolio projects (empty by default, ready to populate). Used by `Projects.jsx`.
- `src/data/githubRepos.json` — GitHub projects list (auto-fetched by `update-github.js` or manual). Used by `GithubRepos.jsx`.
- `src/data/mediumArticles.json` — Medium articles feed (auto-fetched by `update-medium.js` or manual). Used by `MediumArticles.jsx`.

**Components:**

- `src/App.jsx` — Main orchestrator: imports all JSON files and passes them as props to components. Navigation state managed here.
- `src/components/Nav.jsx` — Navigation bar using `config.personal.name`.
- `src/components/Hero.jsx` — Hero section using `config.bio.headline`, `config.bio.subtitle`, personal links.
- `src/components/About.jsx` — About section rendering from `aboutMe.json`.
- `src/components/Awards.jsx` — Awards section (compact centered cards) rendering from `awards.json`.
- `src/components/Experience.jsx` — Experience section rendering from `experience.json`.
- `src/components/Certifications.jsx` — Certifications rendering from `certifications.json`.
- `src/components/TechStack.jsx` — Tech skills rendering from `techStacks.json`.
- `src/components/Projects.jsx` — Projects rendering from `projects.json` (shows "Coming Soon" if empty).
- `src/components/GithubRepos.jsx` — GitHub repos rendering from `githubRepos.json`.
- `src/components/MediumArticles.jsx` — Medium articles rendering from `mediumArticles.json`.
- `src/components/Footer.jsx` — Footer using `config.personal.name` and links.
- `src/main.jsx` — React bootstrap.

**Other:**

- `src/index.css` — Tailwind directives plus custom CSS (`.glass-card`, gradients, responsive tweaks).
- `vite.config.js` — Vite config; `base` is set to `/sritaj-portfolio/`. Update if repo name changes.
- `package.json` — Scripts and dependencies. Includes `gh-pages` for deployment.
- `tailwind.config.cjs` / `postcss.config.cjs` — Tailwind + PostCSS integration.
- `scripts/update-github.js` — Auto-fetch GitHub repos (optional).
- `scripts/update-medium.js` — Auto-fetch Medium articles (optional).
- `CHECKLIST.md` — Visual and styling adjustments; useful for pixel-perfect tweaks.

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

How to Add a New Nav Section (example)

1. Add the section key to the nav array near the top of `App.jsx`:
   `['about','experience','certifications','tech','github','articles','projects','blog']`
2. Create a JSON file in `src/data/` for your content (e.g., `src/data/blogPosts.json`).
3. Import the JSON at the top of `App.jsx`: `import blogPosts from './data/blogPosts.json'`
4. Pass data to a component: `<BlogSection blogPosts={blogPosts} />`
5. Create the component in `src/components/BlogSection.jsx` that accepts and renders the prop.
6. Add conditional render block in `App.jsx` similar to `activeSection === 'articles'`.
7. Add a nav label mapping if different from the key (like `experience` -> `IT Experience`).

**Why this approach?**

- All content is in one place (JSON files)
- Components stay clean and focused on rendering
- Easy to customize for different portfolio owners
- No hardcoded content anywhere

Small code example: Add a blog post to `blogPosts.json`

```json
{
  "title": "My New Blog Post",
  "date": "2024-01-15",
  "excerpt": "Short description",
  "link": "https://example.com/post",
  "tags": ["React", "Web Dev"]
}
```

Debugging Tips & Gotchas

- If Tailwind classes don't appear: ensure `tailwind.config.cjs` `content` includes files (it does: `./index.html`, `./src/**/*.{js,jsx,ts,tsx}`) and `npm run dev` was restarted after installing Tailwind.
- If deploying to GitHub Pages produce broken paths: check `vite.config.js` `base` value and confirm your repo’s name matches.
- If `npm run dev` fails: check Node version (use Node 18+), run `npm ci`/`npm install`, then re-run; Vite errors usually indicate mismatched dependency versions.
- No test or CI config present—expect contributors to add test runners and GitHub Actions if needed.

Extending the App

- Prefer JSON files in `src/data/` over component arrays. Keep the data-to-component flow consistent.
- Create small, single-purpose components in `src/components/` that accept data as props.
- Never hardcode content in components. If you need content, create a JSON file for it.
- If adding routing (React Router) or SSR, be explicit about SPA changes and update `vite.config.js` base and gh-pages deployment instructions.
- When adding third-party services/calls: store API keys in environment variables and describe usage in `CHECKLIST.md`.

Integration Points & External Links

- External content: `LinkedIn`, `Medium`, `GitHub` links are stored in `config.json`.
- `gh-pages` is used for deployment; the deploy script pushes the `dist` directory to GitHub Pages for hosting.

Contributions & Best Practices (project specific)

- Keep the `glass-card` styling consistent; reuse the utility class and existing CSS where possible.
- Keep `App.jsx` structure predictable: JSON imports → component render mapping. If a change is large, split into a new component under `src/components`.
- Run `npm run build` and `npm run preview` before creating a PR for visual changes.

If anything is missing or needs to be updated (for example, test commands or CI), please point me to files you'd like me to read and I'll iterate on these instructions.
