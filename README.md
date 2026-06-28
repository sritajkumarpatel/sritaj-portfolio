# Plug-and-Play Portfolio

A modern, customizable portfolio website built with React, Vite, and Tailwind CSS. Single-page scrollable layout with smooth transitions, animated backgrounds, and visual skill indicators.

---

## Quick Start

```bash
git clone https://github.com/sritajkumarpatel/sritaj-portfolio.git your-portfolio
cd your-portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view your portfolio.

---

## Features

- Single-page scroll with scroll-spy navigation
- 7 color themes with dark/light mode
- Animated floating background
- Typewriter effect with rotating titles
- Visual skill bars with proficiency levels
- Career timeline with connected dots
- Project cards with gradient headers
- Award badges with trophy graphics
- Project modal for full details
- Skeleton loading states
- Scroll progress indicator
- Back to top button
- Fully customizable via JSON files

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI Framework |
| Vite 5 | Build Tool |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| GitHub Pages | Hosting |

---

## NPM Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm run lint` | Run linter |
| `npm run update:github` | Fetch GitHub repos |
| `npm run update:medium` | Fetch Medium articles |

---

## Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher
- **Git**

Check your versions:
```bash
node --version
npm --version
git --version
```

---

## Project Structure

```
src/
├── config.json              # Personal info & theme (EDIT FIRST)
├── context/
│   └── ThemeContext.jsx      # Theme provider
├── data/
│   ├── aboutMe.json
│   ├── awards.json
│   ├── certifications.json
│   ├── experience.json
│   ├── githubRepos.json
│   ├── mediumArticles.json
│   ├── projects.json
│   ├── techStacks.json
│   └── visualConcepts.json
├── components/
│   ├── AnimatedBackground.jsx
│   ├── About.jsx
│   ├── Awards.jsx
│   ├── Certifications.jsx
│   ├── Experience.jsx
│   ├── Footer.jsx
│   ├── GithubRepos.jsx
│   ├── Hero.jsx
│   ├── MediumArticles.jsx
│   ├── Nav.jsx
│   ├── ProjectCard.jsx
│   ├── ProjectModal.jsx
│   ├── Projects.jsx
│   ├── Section.jsx
│   ├── Skeleton.jsx
│   ├── TechStack.jsx
│   └── VisualConcepts.jsx
├── assets/
│   └── certifications/      # Certification logos
├── App.jsx
├── main.jsx
└── index.css

public/
└── images/                  # Your photos & screenshots
```

---

## Environment Variables

Create a `.env` file in the root directory:

```bash
# GitHub API (for auto-fetching repos)
GITHUB_TOKEN=your_github_token

# Optional: Custom domain
# CUSTOM_DOMAIN=yourdomain.com
```

### Getting a GitHub Token

1. Go to [GitHub Settings → Developer settings → Personal access tokens](https://github.com/settings/tokens)
2. Click **Generate new token (classic)**
3. Select scope: `repo` (full control of private repositories)
4. Copy the token to `.env`

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome | Latest 2 versions |
| Firefox | Latest 2 versions |
| Safari | Latest 2 versions |
| Edge | Latest 2 versions |

---

## Want to Use This as a Template?

**[Read the Plug-and-Play Guide](./PLUG_AND_PLAY.md)**

Step-by-step instructions on how to customize this portfolio for your own use — change colors, add your info, deploy to GitHub Pages.

---

## License

MIT
