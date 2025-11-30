# GitHub Copilot / AI Agent Instructions

Purpose: help AI agents and contributors be productive immediately when working in this repository.

Quick Summary

- Single-page React portfolio built with Vite and TailwindCSS.
- Main application: `src/App.jsx` (one self-contained page component) and `src/main.jsx` bootstrapping the app.
- Styling: `src/index.css` contains Tailwind directives and project-specific fallback/custom CSS.
- Build/deploy: Vite (`npm run dev` / `npm run build`) and GitHub Pages via `gh-pages` (`npm run deploy`).

Quick Start (dev + build)

- Install dependencies: `npm install`
- Run dev server: `npm run dev` (uses Vite)
- Build for production: `npm run build`
- Preview production build: `npm run preview`
- Deploy to GitHub Pages: `npm run deploy` (uses `gh-pages -d dist`)

Important Files & Why

- `src/App.jsx` — main UI and data (nav sections, arrays for content, inlined JSX). Most edits to content/layout will be here.
- `src/main.jsx` — React bootstrap.
- `src/index.css` — Tailwind directives plus custom CSS for "glass-card", gradients, and responsive tweaks.
- `vite.config.js` — Vite config; set `base` to `/<repo-name>/` when deploying to GitHub Pages.
- `package.json` — scripts and dependencies. Note devDependencies include Tailwind & PostCSS.
- `tailwind.config.cjs` / `postcss.config.cjs` — Tailwind + PostCSS integration.
- `CHECKLIST.md` — visual and styling adjustments; useful for styling changes and pixel-perfect work.

Architecture & Patterns

- Single-page app: No routing library used; navigation is controlled by `activeSection` state in `App.jsx`.
- Content-as-data: Many sections (certifications, experience, repos, articles) are arrays at the top of `App.jsx`. Modify these arrays to add content.
- UI / styling: Tailwind utility classes are used heavily; fallback/custom styles live in `src/index.css` (e.g. `.glass-card`, `.experience-card`). Keep these consistent when adding UI elements.
- Icon usage: `lucide-react` is used for icons imported at the top of `App.jsx` (e.g., `Github`, `Mail`, `Linkedin`). Use existing icons for brand consistency.
- Deployment: Vite's `base` option is set to `/sritaj-portfolio/`. If the repository is forked or renamed, update this value.

Project-specific Conventions

- Minimal page structure in `App.jsx`: keep top-level arrays and small UI sections—better to follow that pattern when adding new sections.
- Reuse `glass-card` CSS for new cards or panels. This class implements the visual "glass" look used across elements.
- Instead of adding many new files, prefer keeping small, single-purpose components under `src/` if you split `App.jsx` in future. Follow existing naming: PascalCase for components.
- For icons and brand links, keep link structure and `target="_blank" rel="noopener noreferrer"` for external links.

How to Add a New Nav Section (example)

1. Add the section key to the nav array near the top of `App.jsx`:
   `['about','experience','certifications','tech','github','articles','projects','blog']`
2. Add a `const blogPosts = [...]` near other content arrays (top of file).
3. Add a conditional render block similar to `activeSection === 'articles'` and copy the present structure.
4. Add a nav label mapping if it's different from the key (like `experience` -> `IT Experience`).

Small code example: Add a repo to `githubRepos`

```
githubRepos.push({
  title: 'My New Repo',
  description: 'Short description',
  tech: ['React','Tailwind'],
  link: 'https://github.com/owner/repo',
  stars: 0,
});
```

Debugging Tips & Gotchas

- If Tailwind classes don't appear: ensure `tailwind.config.cjs` `content` includes files (it does: `./index.html`, `./src/**/*.{js,jsx,ts,tsx}`) and `npm run dev` was restarted after installing Tailwind.
- If deploying to GitHub Pages produce broken paths: check `vite.config.js` `base` value and confirm your repo’s name matches.
- If `npm run dev` fails: check Node version (use Node 18+), run `npm ci`/`npm install`, then re-run; Vite errors usually indicate mismatched dependency versions.
- No test or CI config present—expect contributors to add test runners and GitHub Actions if needed.

Extending the App

- Prefer small components under `src/components` rather than bloating `App.jsx`. Keep data arrays and UI mapping consistent.
- If adding routing (React Router) or SSR, be explicit about SPA changes and update `vite.config.js` base and gh-pages deployment instructions.
- When adding third-party services/calls: store API keys in environment variables and describe usage in a new `README.md` or in `CHECKLIST.md`.

Integration Points & External Links

- External content: `LinkedIn`, `Medium`, `GitHub` links are hard-coded in arrays.
- `gh-pages` is used for deployment; the deploy script pushes the `dist` directory to GitHub Pages for hosting.

Contributions & Best Practices (project specific)

- Keep the `glass-card` styling consistent; reuse the utility class and existing CSS where possible.
- Keep `App.jsx` structure predictable: arrays -> sections -> JSX rendering. If a change is large, split into a new component under `src/components`.
- Run `npm run build` and `npm run preview` before creating a PR for visual changes.

If anything is missing or needs to be updated (for example, test commands or CI), please point me to files you'd like me to read and I’ll iterate on these instructions.
