---
agent: agent
---

Update the Medium articles data file using the latest articles from the Medium API or JSON source, via the existing update script. After running, report the number of new articles added. If no new articles are found, output "Nothing new found."

Instructions:

- Run `npm install` to ensure required dependencies are installed (rss-parser).
- Run `npm run update:medium` or `node scripts/update-medium.js` to fetch the Medium RSS feed (https://medium.com/feed/@sritajp).
- The script will print exactly one of the following messages after completion:
  - `Added X new article(s).` (X is the number of new articles added)
  - `Nothing new found.`
- If new articles were added, the script updates `src/data/mediumArticles.json`. Commit and push the changes if you want them to appear on the site.

Script behavior summary (what the script does step-by-step):

1.  Fetch the RSS feed using `rss-parser`.
2.  Normalize the `link` for each feed item by removing query parameters, hash fragments, and trailing slashes.
3.  Read the existing JSON at `src/data/mediumArticles.json` (creates it if not present).
4.  Merge feed items with existing items, deduplicating by normalized link and keeping newest-first order.
5.  Keep the final list to a maximum of 20 items.
6.  If the normalized link list differs from the existing file, update the JSON and print `Added X new article(s).`; otherwise print `Nothing new found.`.

Expected output examples:

- No new articles: `Nothing new found.`
- Some new articles: `Added 2 new article(s).`

Agent-run instructions (if the prompt is used in GitHub Copilot or a script runner):

- The agent should run the `npm run update:medium` command in a shell available to the runner and capture STDOUT.
- If STDOUT contains `Added X new article(s).`, return the message and list the changed items (title + link); if `Nothing new found.`, return that message.
- If the agent cannot write files or commit, instruct the user to run the command locally and commit the changes manually.
