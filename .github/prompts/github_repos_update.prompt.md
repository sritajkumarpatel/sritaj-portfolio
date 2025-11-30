---
agent: agent
---

Update the GitHub repositories data file using the latest repositories from the GitHub API, via the existing update script. After running, report the number of new repositories added. If no new repositories are found, output "Nothing new found."

Instructions:

- Run `npm install` to ensure required dependencies are installed (none specifically required unless node fetch polyfill is needed; Node 18+ includes fetch).
- Run `npm run update:github` or `node scripts/update-github.js` to fetch the user's repos from the GitHub API (https://api.github.com/users/sritajkumarpatel/repos?per_page=100&sort=updated&type=owner).
- The script will print exactly one of the following messages after completion:
  - `Added X new repository(ies).` (X is the number of new repositories added)
  - `Nothing new found.`
- If new repositories were added, the script updates `src/data/githubRepos.json`. Commit and push the changes if you want them to appear on the site.

Script behavior summary (what the script does step-by-step):

1. Fetch the repo list using the GitHub API (supports `GITHUB_TOKEN` env var in Authorization header to avoid rate limits).
2. Exclude repos listed in the default `EXCLUDE` array (`sritaj-portfolio` by default).
3. Normalize each repo `link` by removing query parameters, hash fragments, and trailing slashes.
4. Read the existing JSON at `src/data/githubRepos.json` (creates it if not present).
5. Merge and reorder repos by updated date, deduplicating and keeping the newest 20 entries.
6. If the normalized link list differs from the existing file, update the JSON and print `Added X new repository(ies).`; otherwise print `Nothing new found.`.

Agent-run instructions:

- The agent should run the `npm run update:github` command in a shell available to the runner and capture STDOUT.
- If STDOUT contains `Added X new repository(ies).`, return the message and list the changed items (title + link); if `Nothing new found.`, return that message.
- If the agent cannot write files or commit, instruct the user to run the command locally and commit the changes manually.
