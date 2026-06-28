# Plug-and-Play Guide

How to fork this portfolio and make it your own.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Fork & Clone](#step-1-fork--clone)
3. [Install Dependencies](#step-2-install-dependencies)
4. [Edit Your Info](#step-3-edit-your-info)
5. [Add Your Content](#step-4-add-your-content)
6. [Change Theme](#step-5-change-theme)
7. [Add Your Photo](#step-6-add-your-photo)
8. [Custom Domain (Optional)](#step-7-custom-domain-optional)
9. [Test Locally](#step-8-test-locally)
10. [Deploy to GitHub Pages](#step-9-deploy-to-github-pages)
11. [Deploy to Netlify](#deploy-to-netlify)
12. [Deploy to Vercel](#deploy-to-vercel)
13. [SEO & Meta Tags](#seo--meta-tags)
14. [Performance](#performance)
15. [Customization](#customization)
16. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you start, make sure you have:

- **Node.js** v18+ ([Download](https://nodejs.org/))
- **npm** v9+ (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))
- **GitHub account**
- **Code editor** (VS Code recommended)

Verify installations:
```bash
node --version    # Should show v18.x.x or higher
npm --version     # Should show 9.x.x or higher
git --version     # Any recent version
```

---

## Step 1: Fork & Clone

### Fork the Repository

1. Go to [github.com/sritajkumarpatel/sritaj-portfolio](https://github.com/sritajkumarpatel/sritaj-portfolio)
2. Click the **Fork** button (top right)
3. Name your fork (e.g., `your-name-portfolio`)
4. Click **Create fork**

### Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
```

---

## Step 2: Install Dependencies

```bash
npm install
```

This installs all required packages. Takes 1-2 minutes.

### Verify Installation

```bash
npm run dev
```

You should see:
```
  VITE v5.x.x  ready in xxx ms

  → Local:   http://localhost:5173/
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Step 3: Edit Your Info

Open `src/config.json`:

```json
{
  "personal": {
    "name": "Your Full Name",
    "email": "your@email.com",
    "github": "your-github-username",
    "linkedin": "your-linkedin-slug",
    "medium": "your-medium-username"
  },
  "bio": {
    "headline": "Your catchy headline",
    "subtitle": "2-3 sentences about yourself and what you do"
  },
  "titles": [
    "Senior Software Engineer",
    "Full Stack Developer",
    "Cloud Architect",
    "Open Source Contributor"
  ],
  "deployment": {
    "githubRepoName": "your-repo-name"
  },
  "theme": {
    "primary": "slate",
    "accent": "amber",
    "mode": "dark"
  }
}
```

### Where These Appear

| Field | Location |
|-------|----------|
| `name` | Navigation bar, footer |
| `email` | Email button link (mailto:) |
| `github` | GitHub button link |
| `linkedin` | LinkedIn button link |
| `medium` | Medium button link |
| `headline` | Hero section subtitle |
| `subtitle` | Hero section description |
| `titles` | Typewriter effect cycles through |
| `deployment.githubRepoName` | Footer repo link |

### LinkedIn URL Format

If your LinkedIn is `linkedin.com/in/john-doe`, use:
```json
"linkedin": "john-doe"
```

---

## Step 4: Add Your Content

All content lives in JSON files in `src/data/`.

### `aboutMe.json`

```json
{
  "shortBio": "One sentence about you",
  "fullBio": "2-3 paragraphs about your journey, what you do, and your philosophy.",
  "sections": [
    {
      "title": "Core Competencies",
      "type": "twocolumn",
      "subsections": [
        {
          "heading": "Frontend",
          "items": ["React", "TypeScript", "Tailwind CSS"]
        },
        {
          "heading": "Backend",
          "items": ["Node.js", "Python", "PostgreSQL"]
        }
      ]
    },
    {
      "title": "My Philosophy",
      "type": "text",
      "content": "Your philosophy paragraph here."
    }
  ]
}
```

**Section Types:**
- `"twocolumn"` — Two-column grid
- `"text"` — Plain paragraph
- `"text-list"` — Paragraph with labeled items

### `experience.json`

```json
[
  {
    "company": "Company Name",
    "duration": "Jan 2020 - Present",
    "location": "San Francisco, CA",
    "current": true,
    "roles": [
      { "title": "Senior Engineer", "period": "2022 - Present" },
      { "title": "Software Engineer", "period": "2020 - 2022" }
    ],
    "currentRolesAndResponsibilities": [
      "Led team of 5 engineers",
      "Architected microservices platform"
    ],
    "highlights": [
      "Reduced load time by 60%"
    ],
    "awards": [
      { "name": "Employee of the Year", "description": "For outstanding contribution" }
    ]
  }
]
```

### `projects.json`

```json
[
  {
    "title": "Project Name",
    "description": "What this project does and why it matters.",
    "featured": true,
    "github": "https://github.com/username/repo",
    "link": "https://live-demo.com",
    "technologies": ["React", "Node.js", "PostgreSQL"],
    "keyFeatures": [
      { "label": "Real-time sync", "description": "WebSocket-based updates" },
      { "label": "Auth", "description": "OAuth2 with refresh tokens" }
    ],
    "sections": ["keyFeatures", "technologies"]
  }
]
```

### `techStacks.json`

**Simple format:**
```json
{
  "Frontend": ["React", "Vue", "Angular"],
  "Backend": ["Node.js", "Python", "Go"],
  "DevOps": ["Docker", "Kubernetes", "AWS"]
}
```

**With proficiency (shows animated bars):**
```json
{
  "Frontend": [
    { "name": "React", "proficiency": 90 },
    { "name": "Vue", "proficiency": 75 },
    { "name": "Angular", "proficiency": 60 }
  ]
}
```

Proficiency values: 0-100 (recommended: 50-95).

### `certifications.json`

```json
[
  {
    "name": "AWS Solutions Architect",
    "issuer": "Amazon Web Services",
    "year": "2023",
    "logoFile": "aws.png",
    "logoUrl": ""
  }
]
```

**Logo options:**
- `logoFile` — Filename in `src/assets/certifications/`
- `logoUrl` — External URL (takes priority)

### `awards.json`

```json
[
  {
    "title": "Employee of the Year",
    "year": "2024",
    "quarter": "Q4",
    "company": "Your Company",
    "description": "For exceptional contribution to the platform migration project."
  }
]
```

### `githubRepos.json`

```json
[
  {
    "name": "repo-name",
    "description": "What this repo does",
    "stars": 42,
    "url": "https://github.com/username/repo-name"
  }
]
```

### `mediumArticles.json`

```json
[
  {
    "title": "Article Title",
    "description": "Brief description",
    "link": "https://medium.com/article-url",
    "pubDate": "2024-01-15"
  }
]
```

---

## Step 5: Change Theme

In `src/config.json`:

```json
{
  "theme": {
    "primary": "slate",
    "accent": "amber",
    "mode": "dark"
  }
}
```

### Available Presets

| Preset | Primary | Accent | Best For |
|--------|---------|--------|----------|
| **slate-amber** | Slate | Amber | Professional, bold |
| **indigo-violet** | Indigo | Violet | Modern, tech-forward |
| **emerald-teal** | Emerald | Teal | Fresh, nature-tech |
| **rose-fuchsia** | Rose | Fuchsia | Bold, memorable |
| **blue-cyan** | Blue | Cyan | Classic, clean |
| **slate-cyan** | Slate | Cyan | Minimal, elegant |
| **indigo-amber** | Indigo | Amber | Warm, professional |

### Color Modes

- `"mode": "dark"` — Cool charcoal (`#0f1218`)
- `"mode": "light"` — Warm beige (`#f5f0e8`)

### Live Preview

Users can also toggle themes and modes live using the palette and sun/moon icons in the navigation.

---

## Step 6: Add Your Photo

### Option A: Initials (Default)

No changes needed — shows your initials in a gradient circle.

### Option B: Profile Photo

1. Place your photo in `public/images/`
   - Supported: `.jpg`, `.png`, `.webp`
   - Recommended: 400x400px square

2. Open `src/components/Hero.jsx`

3. Find this section:
```jsx
<div
  className="w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center text-5xl md:text-6xl font-bold"
  style={{
    background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
    color: "var(--color-bg-primary)",
  }}
>
  {config.personal.name.split(" ").map(n => n[0]).join("")}
</div>
```

4. Replace with:
```jsx
<img
  src="/images/your-photo.jpg"
  alt={config.personal.name}
  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
  style={{
    boxShadow: "0 0 40px rgba(var(--color-primary-rgb), 0.3)",
  }}
/>
```

---

## Step 7: Custom Domain (Optional)

### GitHub Pages Custom Domain

1. Buy a domain (e.g., from Namecheap, GoDaddy)
2. Create a file `public/CNAME` with your domain:
```
yourdomain.com
```

3. Configure DNS at your domain registrar:

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | YOUR-USERNAME.github.io |

4. In GitHub repo → Settings → Pages → Custom domain, enter your domain
5. Enable **Enforce HTTPS**

### Update Base Path

For custom domains, update `vite.config.js`:

```js
base: "/",  // Root path for custom domains
```

For GitHub Pages subdirectory:
```js
base: "/your-repo-name/",  // Keep as-is
```

---

## Step 8: Test Locally

### Development Server

```bash
npm run dev
```

Changes auto-reload in browser.

### Production Build Preview

```bash
npm run build
npm run preview
```

Opens at [http://localhost:4173](http://localhost:4173).

**Always test with `preview` before deploying** — it shows the actual production build.

### Run Linter

```bash
npm run lint
```

Fix any errors before committing.

---

## Step 9: Deploy to GitHub Pages

### Option A: GitHub Actions (Recommended)

**One-time setup:**

1. Go to your repo → **Settings** → **Pages**
2. Under **Build and deployment** → **Source**, select **GitHub Actions**

**That's it!** Every push to `main` auto-deploys.

**Check deployment status:**
- Go to repo → **Actions** tab
- Click the latest workflow run
- Wait for green checkmark

### Option B: Manual Deploy

```bash
npm run build
npm run deploy
```

Uses `gh-pages` package to push `dist/` to a `gh-pages` branch.

### Custom Workflow

Edit `.github/workflows/static.yml` to change:
- **Branch trigger:** `branches: ["main"]` → `branches: ["master"]`
- **Node version:** `node-version: "20"` → `node-version: "18"`
- **Build command:** `npm run build` → `yarn build`

---

## Deploy to Netlify

1. Push your repo to GitHub
2. Go to [netlify.com](https://netlify.com) → **Add new site**
3. Choose **Import an existing project**
4. Select your GitHub repo
5. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **Deploy site**

### Netlify Environment Variables

Site settings → **Build & deploy** → **Environment**:
- `GITHUB_TOKEN` — For fetching repos

---

## Deploy to Vercel

1. Push your repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add new project**
3. Import your GitHub repo
4. Framework: **Vite** (auto-detected)
5. Click **Deploy**

Vercel auto-detects Vite and configures everything.

---

## SEO & Meta Tags

### Update `index.html`

Open `index.html` in the root directory:

```html
<title>Your Name — Portfolio</title>
<meta name="description" content="Senior Software Engineer specializing in..." />
<meta name="keywords" content="portfolio, software engineer, react, node.js" />

<!-- Open Graph (Social Sharing) -->
<meta property="og:title" content="Your Name — Portfolio" />
<meta property="og:description" content="Senior Software Engineer..." />
<meta property="og:image" content="/images/og-image.png" />
<meta property="og:url" content="https://yourdomain.com" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Your Name — Portfolio" />
<meta name="twitter:description" content="Senior Software Engineer..." />
<meta name="twitter:image" content="/images/og-image.png" />
```

### Create `public/robots.txt`

```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

### Favicon

Replace `public/favicon.svg` with your own icon. Recommended: 32x32 or 16x16 SVG.

---

## Performance

### Lighthouse Scores

Aim for:
- **Performance:** 90+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 90+

### Optimization Tips

1. **Images:** Compress with [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
2. **Lazy loading:** Images below the fold load automatically
3. **Code splitting:** Vite handles this automatically
4. **Bundle size:** Check with `npm run build` (aim for <200KB gzipped)

### Check Build Size

```bash
npm run build
# Check the output for gzip sizes
```

---

## Customization

### Add New Sections

1. Create `src/components/YourSection.jsx`
2. Import in `src/App.jsx`
3. Add ref wrapper:
```jsx
<div ref={(el) => (sectionRefs.current["your-section"] = el)}>
  <YourSection />
</div>
```
4. Add to `SECTION_IDS` array:
```jsx
const SECTION_IDS = ["hero", "about", "your-section", ...];
```
5. Add nav item in `src/components/Nav.jsx`:
```jsx
const NAV_ITEMS = [
  { id: "hero", label: "Home", icon: Home },
  { id: "your-section", label: "Your Section" },
  ...
];
```

### Add Custom Colors

1. Open `src/context/ThemeContext.jsx`
2. Add to `COLORS` object:
```jsx
const COLORS = {
  // ... existing
  coral: {
    50: "#fff5f5",
    100: "#ffe0e0",
    // ... full palette
    900: "#4a1010",
  },
};
```

3. Add preset:
```jsx
const PRESETS = {
  // ... existing
  "coral-teal": { primary: "coral", accent: "teal" },
};
```

### Add Custom Fonts

1. Add Google Fonts link to `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

2. Update `tailwind.config.cjs`:
```js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
};
```

### Add Contact Form

1. Create `src/components/Contact.jsx`
2. Use a service like [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/)
3. Add form endpoint to `.env`:
```bash
VITE_FORMSPREE_ID=your_form_id
```

---

## Troubleshooting

| Issue | Cause | Fix |
|-------|-------|-----|
| **Blank page** | Wrong base path | Check `vite.config.js` `base` matches repo name |
| **404 on GitHub Pages** | Pages not enabled | Settings → Pages → Source: GitHub Actions |
| **Styles missing** | CSS variables not defined | Check `ThemeContext.jsx` has all color variables |
| **Build fails** | Node version too low | Upgrade to Node.js v18+ |
| **Images not loading** | Wrong path | Use `/images/file.jpg` (absolute) or `./images/file.jpg` (relative) |
| **Typewriter blank** | Titles array empty | Check `config.json` has titles |
| **GitHub repos empty** | Missing token | Add `GITHUB_TOKEN` to `.env` |
| **Deploy fails** | gh-pages not installed | Run `npm install gh-pages --save-dev` |
| **CSS not applying** | Tailwind not processing | Run `npm run dev` to restart |
| **Flickering theme** | Theme not persisted | Check localStorage isn't blocked |

### Nuclear Option (Fresh Start)

```bash
rm -rf node_modules
npm install
npm run build
npm run dev
```

---

## Need Help?

1. Check the [source code](https://github.com/sritajkumarpatel/sritaj-portfolio) — well-commented
2. Open an issue on GitHub
3. Check component files — each has clear structure

---

## License

MIT — Feel free to fork and customize!
