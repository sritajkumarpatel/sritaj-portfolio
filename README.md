# Portfolio Template

A modern, config-driven portfolio built with React, Vite, and Tailwind CSS. Fully customizable via JSON — zero coding required to make it yours.

**[Live Demo](https://sritajkumarpatel.github.io/sritaj-portfolio/)**

---

## Quick Start

```bash
git clone https://github.com/sritajkumarpatel/sritaj-portfolio.git your-portfolio
cd your-portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

---

## Features

- **Config-driven** — reorder, enable, or disable sections from `config.json`
- **Brand icons** — real tech logos via `react-icons` (Si namespace)
- **Animated counters** — numbers count up on scroll
- **Topic-categorized articles** — filter by AI, Testing, Leadership, Development
- **Expertise accordion** — expandable skill areas with context
- **7 color themes** with dark/light mode toggle
- **Smooth animations** — blur-fade reveals, staggered entrances, parallax orbs
- **Scroll-spy navigation** — auto-highlights active section
- **Responsive** — works on mobile, tablet, desktop
- **Deploy to GitHub Pages** in one command

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI Framework |
| Vite 5 | Build Tool |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Lucide React | UI Icons |
| React Icons | Brand Icons (Si/Fa) |
| GitHub Pages | Hosting |

---

## NPM Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run deploy` | Deploy to GitHub Pages |

---

## Project Structure

```
src/
├── config.json              # Personal info, sections, theme (EDIT FIRST)
├── context/
│   └── ThemeContext.jsx      # Theme provider
├── data/
│   ├── aboutMe.json          # Bio, competencies, philosophy
│   ├── awards.json           # Awards and recognition
│   ├── certifications.json   # Professional certifications
│   ├── experience.json       # Career timeline
│   ├── mediumArticles.json   # Articles with topics
│   ├── projects.json         # Portfolio projects
│   └── techStacks.json       # Skills organized by expertise
├── components/
│   ├── AnimatedBackground.jsx
│   ├── About.jsx
│   ├── Awards.jsx
│   ├── BentoGrid.jsx         # Quick snapshot (stats + daily tools)
│   ├── Certifications.jsx
│   ├── Experience.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx              # Typewriter + animated counters
│   ├── MediumArticles.jsx    # Thoughts & Ideas section
│   ├── Nav.jsx               # Scroll-spy navigation
│   ├── ProjectModal.jsx
│   ├── Projects.jsx
│   ├── Section.jsx           # Reusable animated wrapper
│   ├── Skeleton.jsx
│   └── TechStack.jsx         # Expertise accordion
├── assets/
│   └── certifications/       # Certification logo images
├── App.jsx                   # Config-driven section renderer
├── main.jsx
└── index.css

public/
└── images/                   # Profile photo, screenshots
```

---

## Configuration

All content is driven by JSON files. Edit `src/config.json` first:

```json
{
  "personal": {
    "name": "Your Name",
    "email": "you@email.com",
    "github": "your-github",
    "linkedin": "your-linkedin-slug",
    "medium": "your-medium-handle"
  },
  "bio": {
    "headline": "Your Professional Headline",
    "subtitle": "2-3 sentences about what you do."
  },
  "sections": [
    { "id": "about", "label": "About", "navLabel": "About", "enabled": true },
    { "id": "experience", "label": "Experience", "navLabel": "Experience", "enabled": true },
    { "id": "tech", "label": "What I Work With", "navLabel": "Skills", "enabled": true },
    { "id": "articles", "label": "Thoughts & Ideas", "navLabel": "Thoughts", "enabled": true },
    { "id": "projects", "label": "Projects", "navLabel": "Projects", "enabled": true },
    { "id": "awards", "label": "Awards", "navLabel": "Awards", "enabled": true },
    { "id": "certifications", "label": "Certifications", "navLabel": "Certs", "enabled": true },
    { "id": "education", "label": "Education", "navLabel": "Education", "enabled": true }
  ],
  "theme": {
    "primary": "slate",
    "accent": "amber",
    "mode": "dark"
  }
}
```

### Sections

Toggle `"enabled": false` to hide any section. Reorder the array to change page order.

### Themes

| Preset | Primary | Accent |
|--------|---------|--------|
| `slate-amber` | Slate | Amber |
| `indigo-violet` | Indigo | Violet |
| `emerald-teal` | Emerald | Teal |
| `rose-fuchsia` | Rose | Fuchsia |
| `blue-cyan` | Blue | Cyan |
| `slate-cyan` | Slate | Cyan |
| `indigo-amber` | Indigo | Amber |

---

## Data Files

| File | Format | Purpose |
|------|--------|---------|
| `aboutMe.json` | `shortBio`, `fullBio`, `whatIdo[]`, `philosophy` | About section |
| `experience.json` | Array of companies with roles, responsibilities, awards | Career timeline |
| `techStacks.json` | `expertise[]` with categories and tools | Skills section |
| `mediumArticles.json` | Articles with `topic` and `readTime` | Thoughts & Ideas |
| `projects.json` | Projects with features, technologies, links | Portfolio projects |
| `certifications.json` | Certs with issuer, year, logo | Credentials |
| `education.json` | Degrees with institution, period, focus | Education |
| `awards.json` | Awards with year, company, description | Recognition |

---

## Deploy

### GitHub Pages (Recommended)

1. Go to repo → **Settings** → **Pages**
2. Source: **GitHub Actions**
3. Push to `main` — auto-deploys

### Manual

```bash
npm run build
npm run deploy
```

### Netlify / Vercel

- Build command: `npm run build`
- Publish directory: `dist`

---

## Browser Support

Chrome, Firefox, Safari, Edge — latest 2 versions.

---

## License

MIT
