# 🎯 Plug-and-Play Portfolio

Your portfolio is now **fully customizable** with just one file! Follow these step-by-step instructions to make it yours.

---

## 🛠 Technologies

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react&logoColor=white) **UI Framework**

![Vite](https://img.shields.io/badge/Vite-5.4.21-646CFF?style=flat&logo=vite&logoColor=white) **Build Tool**

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-06B6D4?style=flat&logo=tailwindcss&logoColor=white) **Styling**

![Lucide React](https://img.shields.io/badge/Lucide_React-0.263.1-FF00FF?style=flat) **Icons**

![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Hosting-181717?style=flat&logo=github&logoColor=white) **Hosting**

---

## ⚡ Step 1: Fork & Setup

### 1.1 Clone the Repository
```bash
git clone https://github.com/sritajkumarpatel/sritaj-portfolio.git your-portfolio
cd your-portfolio
```

### 1.2 Install Dependencies
```bash
npm install
```

### 1.3 Run Locally (Optional - for testing)
```bash
npm run dev
```

---

## 📝 Step 2: Customize Your Identity

### Edit `src/config.json`

This is the **main file** you need to edit. Update all your personal information:

```json
{
  "personal": {
    "name": "Your Name",
    "email": "your.email@example.com",
    "github": "your-github-username",
    "linkedin": "your-linkedin-profile-name",
    "medium": "your-medium-username"
  },
  "bio": {
    "headline": "Your Professional Headline",
    "subtitle": "Your detailed bio/about section"
  },
  "titles": [
    "Your Job Title 1",
    "Your Job Title 2",
    "Your Job Title 3"
  ],
  "deployment": {
    "githubRepoName": "your-repo-name"
  },
  "theme": {
    "primary": "purple",
    "accent": "pink"
  }
}
```

**Example:**
```json
{
  "personal": {
    "name": "Jane Developer",
    "email": "jane@example.com",
    "github": "janedev",
    "linkedin": "jane-developer",
    "medium": "janedev"
  },
  "bio": {
    "headline": "Full Stack Developer & Cloud Architect",
    "subtitle": "Passionate about building scalable applications. 5+ years of experience with modern tech stacks."
  },
  "titles": [
    "Full Stack Developer",
    "Cloud Architect"
  ],
  "deployment": {
    "githubRepoName": "jane-portfolio"
  },
  "theme": {
    "primary": "blue",
    "accent": "cyan"
  }
}
```

---

## 📊 Step 3: Add Your Content

All content files are in `src/data/`. Edit them with your information:

### 3.1 About Me (`src/data/aboutMe.json`)
Your full biography, competencies, and philosophy sections.

**Structure:**
```json
{
  "fullBio": "Your longer bio text...",
  "sections": [
    {
      "title": "Section Name",
      "type": "text",
      "content": "Your content here"
    },
    {
      "title": "Skills",
      "type": "text-list",
      "items": ["Skill 1", "Skill 2"]
    }
  ]
}
```

### 3.2 Awards & Recognition (`src/data/awards.json`)
All your awards in one place.

**Structure:**
```json
[
  {
    "title": "Award Name",
    "year": 2024,
    "quarter": "Q1",
    "company": "Company Name",
    "description": "Award description"
  }
]
```

### 3.3 Work Experience (`src/data/experience.json`)
Your job history with roles, responsibilities, and achievements.

### 3.4 Certifications (`src/data/certifications.json`)
Your certifications, degrees, and credentials.

### 3.5 Tech Stack (`src/data/techStacks.json`)
Your technical skills and proficiencies.

### 3.6 Projects (`src/data/projects.json`)
Your portfolio projects. **Empty by default** — add projects here to showcase them.

**Structure:**
```json
[
  {
    "title": "Project Name",
    "description": "Short description",
    "technologies": ["React", "Node", "Tailwind"],
    "link": "https://project-link.com",
    "github": "https://github.com/user/repo"
  }
]
```

### 3.7 GitHub Repos (`src/data/githubRepos.json`)
Your GitHub projects. Can be manually edited or auto-fetched with:
```bash
npm run update:github
# Requires GITHUB_TOKEN in .env
```

### 3.8 Medium Articles (`src/data/mediumArticles.json`)
Your Medium articles. Can be manually edited or auto-fetched with:
```bash
npm run update:medium
```

---

## 🔧 Step 4: Update Deployment Settings

### 4.1 Update `vite.config.js`
Change the `base` path to match your repository name:

```javascript
export default defineConfig({
  base: '/your-repo-name/',  // Change this
  plugins: [react()],
})
```

**Note:** If your repo is named `sritaj-portfolio`, this is already set correctly.

### 4.2 Update `index.html` (Optional)
Update the favicon, title, and meta tags:
```html
<meta name="description" content="Your portfolio description">
<title>Your Name - Portfolio</title>
```

---

## 🚀 Step 5: Build & Deploy

### 5.1 Build Locally (Verify everything works)
```bash
npm run build
```

### 5.2 Preview the Build
```bash
npm run preview
```

### 5.3 Deploy to GitHub Pages
```bash
npm run deploy
```

**First time deploying?** Make sure:
1. Your repository is on GitHub
2. GitHub Pages is enabled (Settings → Pages → Source: `gh-pages`)
3. You've updated `deployment.githubRepoName` in `config.json`

---

## 🛠 Key Technologies

- **React 18** - UI framework with hooks
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library
- **GitHub Pages** - Free hosting

---

## ✨ Features

✅ Fully customizable via JSON  
✅ Modern, responsive design  
✅ Dark theme with gradient effects  
✅ Automatic content updates (GitHub/Medium)  
✅ GitHub Pages deployment ready  
✅ SEO-friendly structure  
✅ Zero hardcoded content  

---

## 🐛 Troubleshooting

### Build fails with "Cannot find module"
```bash
npm install
npm run build
```

### Dev server won't start
```bash
# Clear node_modules and reinstall
rm -r node_modules
npm install
npm run dev
```

### Deployment URL shows broken paths
1. Check `vite.config.js` `base` matches your repo name
2. Verify GitHub Pages is enabled in repository settings
3. Clear browser cache and try again

### Icons not showing
Make sure `lucide-react` is installed:
```bash
npm install lucide-react
```

---

## 📚 File Structure

```
src/
├── config.json                    # Your personal info (EDIT THIS FIRST)
├── data/
│   ├── aboutMe.json             # Your bio & philosophy
│   ├── awards.json              # Your awards & recognition
│   ├── certifications.json       # Your certs & credentials
│   ├── experience.json           # Your work history
│   ├── projects.json            # Your portfolio projects
│   ├── techStacks.json          # Your tech skills
│   ├── githubRepos.json         # Your GitHub projects
│   └── mediumArticles.json      # Your Medium articles
├── components/                   # React components (don't edit)
├── App.jsx                       # Main app (don't edit)
├── main.jsx                      # Bootstrap (don't edit)
└── index.css                     # Tailwind styles
```

---

## 🎨 Styling Checklist

If you want to customize colors or styling:

- **Tailwind Classes** - Edit components in `src/components/` or `src/index.css`
- **Custom CSS** - Add to `src/index.css` (includes `.glass-card`, gradients, etc.)
- **Colors** - Update theme colors in `config.json` (primary, accent)
- **Fonts** - Modify `tailwind.config.cjs` for custom font families

---

## 💡 Pro Tips

1. **Start with `config.json`** - This is 80% of the customization
2. **Use JSON validators** - Paste your JSON into a validator if something breaks
3. **Test locally first** - Always run `npm run dev` to preview changes
4. **Keep backups** - Commit to Git frequently with meaningful messages
5. **Update GitHub token** - Add `GITHUB_TOKEN` to `.env` to auto-fetch your repos

---

## 🤝 Contributing & Support

If you find issues or want to improve this template, feel free to:
- Open an issue on GitHub
- Submit a pull request
- Fork and customize freely!

---

**Ready? Start by editing `src/config.json`!** 🚀
