import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const CONFIG_PATH = path.join(ROOT, "src", "config.json");
const PROJECTS_PATH = path.join(ROOT, "src", "data", "projects.json");
const OVERRIDES_PATH = path.join(ROOT, "src", "data", "projectOverrides.json");

function readJson(filePath, fallback) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch {
    return fallback;
  }
}

function titleFromRepoName(name) {
  return name
    .replace(/[-_]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function toProject(repo, override = {}) {
  const languageAndTopics = unique([repo.language, ...(repo.topics || [])]);
  return {
    title: override.title || titleFromRepoName(repo.name),
    description: override.description || repo.description || "",
    image: override.image,
    featured: override.featured ?? false,
    keyFeatures: override.keyFeatures,
    technologies: override.technologies || languageAndTopics,
    github: repo.html_url,
    link: override.link || repo.homepage || repo.html_url,
    sections: override.sections,
    quickStart: override.quickStart,
    repo: repo.name,
  };
}

function stripUndefined(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(([, value]) => value !== undefined)
  );
}

async function fetchRepos(username, token) {
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "sritaj-portfolio",
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  const url = `https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&sort=updated`;
  const res = await fetch(url, { headers });
  if (!res.ok) {
    throw new Error(`GitHub API ${res.status}: ${await res.text()}`);
  }
  return res.json();
}

async function run() {
  const config = readJson(CONFIG_PATH, {});
  const githubCfg = config.sources?.github || {};
  if (githubCfg.enabled === false) {
    console.log("GitHub source disabled in config. Skipping.");
    return;
  }

  const username = config.personal?.github;
  if (!username) {
    console.warn("No personal.github in config. Skipping GitHub update.");
    return;
  }

  const suffix = (githubCfg.projectNameSuffix || "Forge").toLowerCase();
  const exclude = new Set((githubCfg.exclude || []).map((n) => n.toLowerCase()));
  const maxItems = githubCfg.maxItems || 12;
  const overrides = readJson(OVERRIDES_PATH, {});
  const existing = readJson(PROJECTS_PATH, []);

  try {
    console.log(`Fetching GitHub repos for ${username}...`);
    const repos = await fetchRepos(username, process.env.GITHUB_TOKEN);
    const matched = repos
      .filter((repo) => !repo.fork && !repo.archived && !repo.private)
      .filter((repo) => repo.name.toLowerCase().endsWith(suffix))
      .filter((repo) => !exclude.has(repo.name.toLowerCase()))
      .filter((repo) => {
        const override = overrides[repo.name.toLowerCase()] || {};
        return Boolean(override.description || repo.description);
      })
      .slice(0, maxItems);

    const preferredOrder = ["testforge", "githubreadmeforge", "portforge", "instapostsforge"];

    const projects = matched
      .map((repo) => {
        const override = overrides[repo.name.toLowerCase()] || {};
        return stripUndefined(toProject(repo, override));
      })
      .sort((a, b) => {
        if (Boolean(a.featured) !== Boolean(b.featured)) return b.featured ? 1 : -1;
        const indexA = preferredOrder.indexOf(a.repo?.toLowerCase());
        const indexB = preferredOrder.indexOf(b.repo?.toLowerCase());
        if (indexA !== -1 && indexB !== -1) return indexA - indexB;
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;
        return a.title.localeCompare(b.title);
      });

    if (projects.length === 0) {
      console.warn("No Forge repos found. Keeping existing projects.json.");
      return;
    }

    fs.writeFileSync(PROJECTS_PATH, JSON.stringify(projects, null, 2) + "\n", "utf-8");
    console.log(`Wrote ${projects.length} project(s) to src/data/projects.json`);
  } catch (err) {
    console.warn(`GitHub update failed (${err.message}). Keeping existing projects.json.`);
    if (!existing.length) {
      console.warn("projects.json is also empty.");
    }
  }
}

run();
