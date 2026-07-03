# Plug-and-Play Guide

Fork this portfolio and make it your own — no coding required.

---

## Prerequisites

- **Node.js** v18+ ([nodejs.org](https://nodejs.org/))
- **npm** v9+ (comes with Node.js)
- **Git** ([git-scm.com](https://git-scm.com/))
- **GitHub account**
- **Code editor** (VS Code recommended)

```bash
node --version    # v18.x.x or higher
npm --version     # 9.x.x or higher
```

---

## Step 1: Fork & Clone

1. Go to [github.com/sritajkumarpatel/sritaj-portfolio](https://github.com/sritajkumarpatel/sritaj-portfolio)
2. Click **Fork** → name it (e.g., `your-name-portfolio`) → **Create fork**
3. Clone your fork:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
cd YOUR-REPO
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

---

## Step 2: Edit `config.json`

Open `src/config.json` — this is the single source of truth.

### Personal Info

```json
{
  "personal": {
    "name": "Your Full Name",
    "email": "your@email.com",
    "github": "your-github-username",
    "linkedin": "your-linkedin-slug",
    "medium": "your-medium-handle"
  },
  "bio": {
    "headline": "Your Professional Headline",
    "subtitle": "2-3 sentences about what you do."
  }
}
```

| Field | Where It Appears |
|-------|------------------|
| `name` | Navigation bar, footer |
| `email` | Email button (mailto:) |
| `github` | GitHub button link |
| `linkedin` | LinkedIn button link |
| `medium` | Medium button, "View more" link |
| `headline` | Hero section (first 2 words italicized) |
| `subtitle` | Hero section description |

**LinkedIn format:** If your URL is `linkedin.com/in/john-doe`, use `"linkedin": "john-doe"`.

### Sections

Control which sections appear and their order:

```json
"sections": [
  { "id": "about", "label": "About", "navLabel": "About", "enabled": true },
  { "id": "experience", "label": "Experience", "navLabel": "Experience", "enabled": true },
  { "id": "tech", "label": "What I Work With", "navLabel": "Skills", "enabled": true },
  { "id": "articles", "label": "Thoughts & Ideas", "navLabel": "Thoughts", "enabled": true },
  { "id": "projects", "label": "Projects", "navLabel": "Projects", "enabled": true },
  { "id": "awards", "label": "Awards", "navLabel": "Awards", "enabled": true },
  { "id": "certifications", "label": "Certifications", "navLabel": "Certs", "enabled": true }
]
```

- Set `"enabled": false` to hide a section
- Reorder the array to change page order
- `navLabel` controls the nav bar text

### Theme

```json
"theme": {
  "primary": "slate",
  "accent": "amber",
  "mode": "dark"
}
```

**Available presets:**

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

## Step 3: Edit Data Files

All content lives in JSON files under `src/data/`.

### `aboutMe.json`

```json
{
  "shortBio": "One sentence about you.",
  "fullBio": "2-3 paragraphs about your journey.",
  "whatIdo": [
    {
      "title": "Your Expertise Area",
      "icon": "Brain",
      "color": "#8b5cf6",
      "capabilities": [
        "Capability 1",
        "Capability 2",
        "Capability 3",
        "Capability 4"
      ]
    }
  ],
  "philosophy": "Your closing philosophy statement."
}
```

**Available icons:** `Brain`, `Shield`, `Terminal`, `Users`

**Colors:** Any hex color for the card accent.

You can have 2-4 `whatIdo` items (rendered as a 2-column grid).

### `experience.json`

```json
[
  {
    "company": "Company Name",
    "duration": "Jan 2020 - Present",
    "location": "City, Country",
    "current": true,
    "roles": [
      { "title": "Senior Engineer", "period": "2022 - Present" },
      { "title": "Engineer", "period": "2020 - 2022" }
    ],
    "currentRolesAndResponsibilities": [
      "Led team of 5 engineers",
      "Architected microservices platform"
    ],
    "highlights": [
      "Reduced load time by 60%"
    ],
    "awards": [
      { "name": "Employee of the Year", "description": "Outstanding contribution" }
    ]
  }
]
```

### `techStacks.json`

Organized by expertise area with categories:

```json
{
  "expertise": [
    {
      "id": "my-domain",
      "title": "Domain Name",
      "description": "What you do in this domain",
      "icon": "Brain",
      "color": "#8b5cf6",
      "categories": {
        "Category 1": ["Tool 1", "Tool 2"],
        "Category 2": ["Tool 3", "Tool 4"]
      }
    }
  ]
}
```

**Available icons:** `Brain`, `Shield`, `Terminal`, `Cloud`, `Eye`

Each expertise area expands on click to show its tools. The section displays as an accordion.

### `mediumArticles.json`

```json
[
  {
    "title": "Article Title",
    "link": "https://medium.com/...",
    "date": "2024-01-15",
    "description": "Brief description of the article.",
    "topic": "AI & LLM",
    "readTime": "7 min"
  }
]
```

**Topics:** `AI & LLM`, `Testing`, `Leadership`, `Development` — used for color-coded filter pills.

The section shows 1 featured + 4 articles, with a "View more on Medium" link for the rest.

### `projects.json`

```json
[
  {
    "title": "Project Name",
    "description": "What this project does.",
    "featured": true,
    "keyFeatures": ["Feature 1", "Feature 2"],
    "technologies": ["React", "Node.js"],
    "github": "https://github.com/...",
    "link": "https://live-demo.com"
  }
]
```

### `certifications.json`

```json
[
  {
    "name": "Certification Name",
    "issuer": "Issuing Organization",
    "year": "2024",
    "logoFile": "logo.png",
    "logoUrl": ""
  }
]
```

**Logos:** Place images in `src/assets/certifications/` and use `logoFile`, or provide an external `logoUrl`.

### `awards.json`

```json
[
  {
    "title": "Award Name",
    "year": "2024",
    "quarter": "Q4",
    "company": "Company Name",
    "description": "Why you received this."
  }
]
```

---

## Step 4: Add Your Photo

1. Place your photo in `public/images/profile.png` (or `.jpg`)
2. Recommended: 400x400px square, compressed

The hero and about sections automatically use this image.

---

## Step 5: Deploy

### GitHub Pages (Recommended)

1. Go to repo → **Settings** → **Pages**
2. Source: **GitHub Actions**
3. Push to `main` — auto-deploys

Check status: repo → **Actions** tab → wait for green checkmark.

### Manual Deploy

```bash
npm run build
npm run deploy
```

### Netlify

1. [netlify.com](https://netlify.com) → **Add new site** → Import from GitHub
2. Build: `npm run build` | Publish: `dist`

### Vercel

1. [vercel.com](https://vercel.com) → **Add new project** → Import from GitHub
2. Framework: Vite (auto-detected) → Deploy

---

## Custom Domain

1. Buy a domain
2. Create `public/CNAME` with your domain
3. Configure DNS:

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | YOUR-USERNAME.github.io |

4. Update `vite.config.js`: `base: "/"` for custom domains

---

## SEO

Update `index.html`:

```html
<title>Your Name — Portfolio</title>
<meta name="description" content="Your description" />
<meta property="og:title" content="Your Name — Portfolio" />
<meta property="og:description" content="Your description" />
<meta property="og:image" content="/images/og-image.png" />
```

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Blank page | Check `vite.config.js` `base` matches repo name |
| 404 on GitHub Pages | Settings → Pages → Source: GitHub Actions |
| Styles missing | Restart `npm run dev` |
| Build fails | Upgrade to Node.js v18+ |

### Fresh Start

```bash
rm -rf node_modules
npm install
npm run dev
```

---

## License

MIT — fork and customize freely.
