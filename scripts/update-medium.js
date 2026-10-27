import fs from "fs";
import path from "path";
import RSSParser from "rss-parser";

const ROOT = process.cwd();
const CONFIG_PATH = path.join(ROOT, "src", "config.json");
const JSON_PATH = path.join(ROOT, "src", "data", "mediumArticles.json");

function readJson(filePath, fallback) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch {
    return fallback;
  }
}

function stripHtml(html) {
  return String(html || "")
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function extractPostId(urlOrGuid) {
  if (!urlOrGuid) return "";
  const match = String(urlOrGuid).match(/([a-f0-9]{10,16})(?:\?|#|$)/i);
  return match ? match[1].toLowerCase() : "";
}

function normalizeTitle(t) {
  return String(t || "")
    .toLowerCase()
    .replace(/…|\.\.\./g, "")
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanMediumLink(url) {
  try {
    const u = new URL(url);
    u.search = "";
    u.hash = "";
    return u.toString().replace(/\/$/, "");
  } catch {
    return String(url || "")
      .replace(/[?#].*$/, "")
      .replace(/\/$/, "");
  }
}

function inferTopic(title, desc) {
  const text = `${title} ${desc}`.toLowerCase();
  if (/ai|llm|gpt|claude|rag|prompt|agent|mcp|langchain|gemini|openai/i.test(text)) {
    return "AI & LLM";
  }
  if (/test|playwright|selenium|automation|qa|quality/i.test(text)) {
    return "Automation";
  }
  if (/architect|platform|pipeline|ci\/cd|devops|\.net|c#/i.test(text)) {
    return "Architecture";
  }
  if (/scrum|agile|lead|team|culture|retro|ikigai/i.test(text)) {
    return "Leadership";
  }
  return "Development";
}

function estimateReadTime(text) {
  const words = String(text || "").split(/\s+/).filter(Boolean).length;
  const mins = Math.max(4, Math.round(words / 40));
  return `${mins} min`;
}

async function run() {
  const config = readJson(CONFIG_PATH, {});
  const mediumCfg = config.sources?.medium || {};
  if (mediumCfg.enabled === false) {
    console.log("Medium source disabled in config. Skipping.");
    return;
  }

  const handle = config.personal?.medium;
  if (!handle) {
    console.warn("No personal.medium in config. Skipping Medium update.");
    return;
  }

  const maxItems = mediumCfg.maxItems || 20;
  const feedUrl = `https://medium.com/feed/@${handle}`;

  console.log(`Fetching Medium feed for @${handle}...`);
  const parser = new RSSParser({
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    },
  });

  let feed;
  const maxRetries = 3;
  const retryDelayMs = 5000;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      feed = await parser.parseURL(feedUrl);
      break;
    } catch (err) {
      if (attempt === maxRetries) {
        console.warn(`Failed to fetch Medium RSS feed (${err.message}). Keeping existing JSON.`);
        return;
      }
      console.warn(
        `Attempt ${attempt}/${maxRetries} failed. Retrying in ${retryDelayMs / 1000}s...`
      );
      await new Promise((resolve) => setTimeout(resolve, retryDelayMs));
    }
  }

  const existing = readJson(JSON_PATH, []);

  // Map existing items by post ID and normalized title
  const existingById = new Map();
  for (const item of existing) {
    const id = extractPostId(item.link);
    if (id) existingById.set(id, item);
    const nTitle = normalizeTitle(item.title);
    if (nTitle) existingById.set(nTitle, item);
  }

  const feedItems = feed.items || [];
  const merged = [];
  const seenIds = new Set();
  const seenTitles = new Set();

  for (const item of feedItems) {
    const rawLink = cleanMediumLink(item.link || "");
    const id = extractPostId(item.guid) || extractPostId(rawLink);
    const nTitle = normalizeTitle(item.title);

    if (id && seenIds.has(id)) continue;
    if (nTitle && seenTitles.has(nTitle)) continue;

    const matched = (id && existingById.get(id)) || (nTitle && existingById.get(nTitle));
    const titleClean = (item.title || "").replace(/…$/, "").trim();
    const rawSnippet = stripHtml(item.contentSnippet || item.content || "");

    const finalItem = {
      title: matched?.title || titleClean,
      // Prefer custom publication link if existing had one, else clean feed link
      link: matched?.link || rawLink,
      date: item.pubDate || item.isoDate || matched?.date || "",
      description: matched?.description || rawSnippet || "",
      topic: matched?.topic || inferTopic(titleClean, rawSnippet),
      readTime: matched?.readTime || estimateReadTime(rawSnippet),
    };

    if (id) seenIds.add(id);
    if (nTitle) seenTitles.add(nTitle);
    merged.push(finalItem);
  }

  // Also include any older existing items that might not be in the latest RSS page
  for (const item of existing) {
    const id = extractPostId(item.link);
    const nTitle = normalizeTitle(item.title);
    if (id && seenIds.has(id)) continue;
    if (nTitle && seenTitles.has(nTitle)) continue;

    if (id) seenIds.add(id);
    if (nTitle) seenTitles.add(nTitle);
    merged.push(item);
  }

  const final = merged.slice(0, maxItems);

  const existingStr = JSON.stringify(existing);
  const finalStr = JSON.stringify(final);

  if (existingStr === finalStr) {
    console.log("Medium articles are up to date. No changes needed.");
    return;
  }

  fs.writeFileSync(JSON_PATH, JSON.stringify(final, null, 2) + "\n", "utf-8");
  const newCount = final.filter(
    (f) => !existing.some((e) => extractPostId(e.link) === extractPostId(f.link))
  ).length;

  if (newCount > 0) {
    console.log(`Successfully synced ${final.length} articles (${newCount} new).`);
  } else {
    console.log(`Successfully synced and updated metadata for ${final.length} articles.`);
  }
}

run();
