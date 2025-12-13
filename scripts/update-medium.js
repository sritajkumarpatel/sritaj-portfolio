import fs from "fs";
import path from "path";
import RSSParser from "rss-parser";

const FEED_URL = "https://medium.com/@sritajp";
const JSON_PATH = path.join(
  process.cwd(),
  "src",
  "data",
  "mediumArticles.json"
);

async function run() {
  console.log("Fetching Medium feed...");
  const parser = new RSSParser();
  let feed;
  const maxRetries = 3;
  const retryDelayMs = 10000; // 10 seconds between retries

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      feed = await parser.parseURL(FEED_URL);
      break; // Success, exit retry loop
    } catch (err) {
      if (attempt === maxRetries) {
        console.error("Failed to fetch Medium RSS feed:", err.message);
        process.exit(1);
      }
      console.warn(
        `Attempt ${attempt}/${maxRetries} failed. Retrying in ${retryDelayMs / 1000} seconds...`
      );
      await new Promise((resolve) => setTimeout(resolve, retryDelayMs));
    }
  }

  const items = (feed.items || []).map((i) => ({
    title: i.title || "",
    link: normalizeLink(i.link || ""),
    date: i.pubDate || i.isoDate || "",
    description: stripHtml(i.contentSnippet || i.content || ""),
  }));

  let existing = [];
  try {
    existing = JSON.parse(fs.readFileSync(JSON_PATH, "utf-8"));
  } catch (err) {
    console.warn("Existing JSON not found or invalid. Will create a new one.");
  }

  const existingLinks = new Set(
    existing.map((a) => normalizeLink(a.link || ""))
  );
  const incomingLinks = new Set();
  const uniqueItems = items.filter((i) => {
    const link = i.link || "";
    if (!link) return false;
    if (existingLinks.has(link)) return false; // already in file
    if (incomingLinks.has(link)) return false; // duplicate within feed
    incomingLinks.add(link);
    return true;
  });
  const newItems = uniqueItems;

  // Use the incoming items plus existing to create final deduped list and re-order with newest first.
  const updated = [...items, ...existing];

  // limit to a reasonable number (e.g., 20)
  // Deduplicate final list by normalized link (to avoid duplicates after merge)
  const seen = new Set();
  const final = [];
  for (const a of updated) {
    const link = normalizeLink(a.link || "");
    if (!link || seen.has(link)) continue;
    seen.add(link);
    final.push(a);
    if (final.length >= 20) break;
  }

  // Compare normalized link lists to determine whether anything changed
  const existingNormalized = JSON.stringify(
    (existing || []).map((a) => normalizeLink(a.link || ""))
  );
  const finalNormalized = JSON.stringify(
    final.map((a) => normalizeLink(a.link || ""))
  );

  if (existingNormalized === finalNormalized) {
    console.log("Nothing new found.");
    return;
  }

  fs.writeFileSync(JSON_PATH, JSON.stringify(final, null, 2), "utf-8");
  const existingSet = new Set(
    (existing || []).map((a) => normalizeLink(a.link || ""))
  );
  const addedCount = final.reduce(
    (acc, a) => acc + (existingSet.has(normalizeLink(a.link || "")) ? 0 : 1),
    0
  );
  if (addedCount === 0) {
    console.log("Nothing new found.");
  } else {
    console.log(`Added ${addedCount} new article(s).`);
  }
}

function stripHtml(html) {
  return html.replace(/<[^>]*>/g, "").trim();
}

function normalizeLink(url) {
  try {
    const u = new URL(url);
    u.search = "";
    u.hash = "";
    // remove trailing slash
    return u.toString().replace(/\/$/, "");
  } catch (e) {
    return url
      .replace(/\?.*$/, "")
      .replace(/\/#.*$/, "")
      .replace(/\/$/, "");
  }
}

run();
