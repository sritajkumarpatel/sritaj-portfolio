import fs from "fs";
import path from "path";

const OWNER = "sritajkumarpatel";
const EXCLUDE = ["sritaj-portfolio"]; // repos to exclude
const JSON_PATH = path.join(process.cwd(), "src", "data", "githubRepos.json");
const GITHUB_API = `https://api.github.com/users/${OWNER}/repos?per_page=100&sort=updated&type=owner`;

async function run() {
  console.log("Fetching GitHub repos...");
  const headers = { Accept: "application/vnd.github+json" };
  const token = process.env.GITHUB_TOKEN || "";
  if (token) headers["Authorization"] = `Bearer ${token}`;

  let res;
  try {
    res = await fetch(GITHUB_API, { headers });
  } catch (err) {
    console.error("Failed to fetch GitHub API:", err.message || err);
    process.exit(1);
  }

  if (!res.ok) {
    console.error("GitHub API returned status", res.status, await res.text());
    process.exit(1);
  }

  const repos = await res.json();

  // Filter and map into the format we use in the site
  const filtered = repos
    .filter((r) => r.name && !EXCLUDE.includes(r.name))
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    .slice(0, 20);

  // Augment repos with topics and languages and construct a combined `tech` array.
  const mapped = await Promise.all(
    filtered.map(async (r) => {
      const repoName = r.name;
      const repoApi = `https://api.github.com/repos/${OWNER}/${repoName}`;
      const tHeaders = {
        ...headers,
        Accept: "application/vnd.github.mercy-preview+json",
      };

      let topics = [];
      try {
        const tRes = await fetch(`${repoApi}/topics`, { headers: tHeaders });
        if (tRes.ok) {
          const tBody = await tRes.json();
          topics = tBody.names || [];
        }
      } catch (e) {
        // ignore per-repo topics fetch error
      }

      // Fetch languages for the repo and sort by bytes descending
      let languages = [];
      try {
        const lRes = await fetch(`${repoApi}/languages`, { headers });
        if (lRes.ok) {
          const lBody = await lRes.json();
          languages = Object.entries(lBody)
            .sort((a, b) => b[1] - a[1])
            .map(([name]) => name);
        }
      } catch (e) {
        // ignore per-repo languages fetch error
      }

      // Build tech array: topics first, then primary language and top languages
      const tech = Array.from(
        new Set([
          ...(topics || []),
          ...(r.language ? [r.language] : []),
          ...languages,
        ])
      ).slice(0, 6);

      return {
        title: r.name,
        description: r.description || "",
        tech,
        link: r.html_url,
        stars: r.stargazers_count || 0,
      };
    })
  );

  // Read existing file
  let existing = [];
  try {
    existing = JSON.parse(fs.readFileSync(JSON_PATH, "utf-8"));
  } catch (err) {
    console.warn("Existing JSON not found or invalid. Will create new one.");
  }

  const existingLinks = new Set(
    (existing || []).map((a) => normalizeLink(a.link || ""))
  );
  const finalLinks = mapped.map((r) => normalizeLink(r.link || ""));

  // If lists are equal then nothing to do
  if (
    JSON.stringify(Array.from(existingLinks)) === JSON.stringify(finalLinks)
  ) {
    console.log("Nothing new found.");
    return;
  }

  // Write final JSON
  fs.writeFileSync(JSON_PATH, JSON.stringify(mapped, null, 2), "utf-8");

  // Compute new count
  const addedCount = mapped.reduce(
    (acc, r) => acc + (existingLinks.has(normalizeLink(r.link || "")) ? 0 : 1),
    0
  );
  if (addedCount === 0) console.log("Nothing new found.");
  else console.log(`Added ${addedCount} new repository(ies).`);
}

function normalizeLink(url) {
  try {
    const u = new URL(url);
    u.search = "";
    u.hash = "";
    return u.toString().replace(/\/$/, "");
  } catch (e) {
    return url
      .replace(/\?.*$/, "")
      .replace(/\/#.*$/, "")
      .replace(/\/$/, "");
  }
}

run();
