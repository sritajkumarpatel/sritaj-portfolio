# Sritaj Patel — Portfolio & Engineering Showcase

A modern, high-performance personal portfolio and engineering showcase for **Sritaj Patel**, Automation Architect & AI Engineer with 11+ years building intelligent automation systems, QA architectures, and Agentic AI workflows.

**[🌐 Live Demo — sritajkumarpatel.vercel.app](https://sritajkumarpatel.vercel.app/)**

---

## Overview

This portfolio is built with React 18, Vite 6, Tailwind CSS, and Framer Motion. It features a clean editorial aesthetic, dynamic theme customization, and automated data pipelines that continuously sync latest Medium publications and GitHub projects.

### Key Highlights

- **Dynamic Theme Engine**: 7 curated color palettes with dark/light mode toggle. All glassmorphism borders, shadows, and hover states dynamically derive from CSS custom variables (`--color-primary-rgb`, `--color-accent-rgb`).
- **Automated Data Sync**: 
  - Syncs published Medium articles with post-ID deduplication, topic categorization, and reading time calculation.
  - Syncs public repositories ending in `*Forge` from GitHub with rich case-study overlays (`projectOverrides.json`).
- **Interactive Case Studies**: Curated project cards with modal deep-dives, architecture highlights, technologies, and copy-ready quick-start commands.
- **Editorial Typography & Motion**: Clean typography pairing (Space Grotesk for headings and Inter for body), rotating title cycler, and Framer Motion transitions that fully respect `prefers-reduced-motion`.
- **Standalone Root Hosting**: Built for root domain deployment on Vercel with SPA rewrites and clean URL handling.

---

## Sections

1. **Hero**: Profile photo, rotating title cycler, bio headline, social links, key career stats, and core tools.
2. **About**: Engineering background, architecture philosophy, core competencies, and career milestones.
3. **Experience**: Timeline from 2015 to Present with roles, achievements, nested responsibilities, and awards.
4. **What I Work With**: Expandable domain accordions covering Agentic AI, Automation, Architecture, Languages, and CI/CD pipelines.
5. **Thoughts & Ideas**: Medium articles categorized by topic (AI & LLM, Automation, Architecture, Leadership, Development).
6. **Curated Work (Projects)**: Portfolio tools and AI frameworks (PortForge, TestForge, GitHub Readme Forge, InstaPosts Forge) with modal deep-dives.
7. **Awards & Recognition**: Honors and spot awards across career milestones.
8. **Certifications**: Industry credentials with verified issuer logos (Scrum Alliance, Scrum.org, Microsoft Azure AI, DevOps Institute).
9. **Education**: Academic degrees and institutions.
10. **Footer**: Quick navigation and social links.

---

## Tech Stack

| Layer | Technologies |
|---|---|
| **Core** | React 18, JavaScript (ES Modules) |
| **Build & Tooling** | Vite 6, PostCSS, Autoprefixer |
| **Styling** | Tailwind CSS 3, Custom CSS Tokens, Glassmorphism |
| **Motion** | Framer Motion 12 |
| **Icons** | Lucide React, React Icons (Simple Icons) |
| **Deployment** | Vercel (Root `/`), GitHub Actions |

---

## Getting Started

### Prerequisites

- Node.js v18+ 
- npm v9+

### Local Setup

```bash
# Clone the repository
git clone https://github.com/sritajkumarpatel/sritaj-portfolio.git
cd sritaj-portfolio

# Install dependencies
npm install

# Start local dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## NPM Scripts

| Script | Command | Purpose |
|---|---|---|
| `npm run dev` | `vite` | Start local development server with HMR |
| `npm run build` | `vite build` | Build optimized production bundle to `dist/` (auto-runs `prebuild` sync) |
| `npm run preview` | `vite preview` | Locally preview the production build |
| `npm run update:medium` | `node scripts/update-medium.js` | Fetch latest Medium stories into `src/data/mediumArticles.json` |
| `npm run update:github` | `node scripts/update-github.js` | Fetch and merge GitHub `*Forge` repos into `src/data/projects.json` |

---

## Project Structure

```
src/
├── config.json                 # Personal info, data sources, sections, theme presets
├── context/
│   └── ThemeContext.jsx         # Theme provider & CSS custom variable engine
├── data/
│   ├── aboutMe.json             # Bio, competencies, and engineering philosophy
│   ├── awards.json              # Industry and organizational awards
│   ├── certifications.json      # Professional credentials and issuer logo paths
│   ├── education.json           # Academic background
│   ├── experience.json          # Work history, roles, and achievements
│   ├── mediumArticles.json      # Synced Medium publications with topic tags
│   ├── projectOverrides.json    # Case-study overlays (images, features, quickStart)
│   ├── projects.json            # Curated projects list
│   └── techStacks.json          # Technical skills organized by domain
├── components/
│   ├── About.jsx
│   ├── Awards.jsx
│   ├── Certifications.jsx
│   ├── Education.jsx
│   ├── Experience.jsx           # Timeline with current position pulse indicator
│   ├── Footer.jsx
│   ├── Hero.jsx                 # Title cycler, stats counter, social links
│   ├── MediumArticles.jsx       # Articles grid with topic filters
│   ├── Nav.jsx                  # Header with theme preset picker and mobile drawer
│   ├── ProjectModal.jsx         # Case-study modal with quick-start steps
│   ├── Projects.jsx             # Curated case-studies grid
│   ├── Section.jsx              # Reusable section container
│   └── TechStack.jsx            # Interactive expertise accordions
├── assets/
│   └── certifications/          # Issuer logos (Azure, Scrum Alliance, IIIT-B, etc.)
├── App.jsx                      # Main layout and section orchestrator
├── main.jsx                     # Application bootstrap
└── index.css                    # Design tokens, fonts, and glassmorphic utilities

public/
├── images/                      # Profile photography and project screenshots
├── robots.txt                   # Search crawler directives
└── sitemap.xml                  # XML sitemap
```

---

## Automation & CI/CD

- **Vercel Automatic Deployments**: Connected directly to the GitHub repository. Any push to `main` triggers a build where `prebuild` syncs live data before assembling static assets.
- **Automated Data Refresh Workflow** (`.github/workflows/sync-sources.yml`):
  - Triggers on push to `main`.
  - Runs on a monthly schedule (`0 0 1 * *`) to check for newly published articles and projects.
  - Can be dispatched manually via the GitHub Actions UI.
  - Commits updated JSON files back to `main`, triggering Vercel to redeploy the fresh content automatically.

---

## License

This project is open-source and available under the [MIT License](LICENSE).
