# Quick Start Guide

Get your portfolio live in 5 minutes using AI assistance.

---

## Step 1: Fill Your Information

Copy this template and fill in your details:

```
My name is [YOUR NAME]. I'm a [YOUR JOB TITLE] with [YEARS] years of experience.

My headline is "[YOUR PROFESSIONAL HEADLINE]".

My bio is: "[YOUR BIO/ABOUT TEXT]"

My GitHub is [GITHUB USERNAME], LinkedIn is [LINKEDIN PROFILE], Medium is [MEDIUM HANDLE].

My titles are: [TITLE 1], [TITLE 2], [TITLE 3].

My main skills: [SKILL 1], [SKILL 2], [SKILL 3], [SKILL 4], [SKILL 5].

I work at [COMPANY] as a [ROLE].

My awards: [AWARD 1], [AWARD 2].

My projects: [PROJECT 1 with brief description], [PROJECT 2 with brief description].

My preferred theme: [slate-amber | indigo-violet | emerald-teal | rose-fuchsia | blue-cyan]
```

---

## Step 2: Use Copilot/AI

1. Copy everything from `COPILOT_PROMPT.md`
2. Open Copilot Chat (Ctrl+Shift+I in VS Code)
3. Paste the prompt
4. Fill in your information from Step 1
5. Paste your information in the chat
6. AI will update all JSON files automatically

---

## Step 3: Deploy

```bash
npm run build
npm run deploy
```

Your portfolio is now live!

---

## Example

```
My name is Jane Developer. I'm a Senior SRE with 8 years of experience.

My headline is "Cloud Native Architect | DevOps Expert".

My bio is: "Specialized in Kubernetes, AWS, and infrastructure automation. Love mentoring junior engineers and building scalable systems."

My GitHub is janedev, LinkedIn is jane-developer, Medium is janedev.

My titles are: Senior SRE, Cloud Architect, DevOps Engineer.

My main skills: Kubernetes, AWS, Go, Terraform, CI/CD.

I work at Google as a Technical Architect.

My awards: Cloud Innovation Award 2024, DevOps Excellence 2023.

My projects: K8s Monitoring Dashboard - built real-time monitoring for 10K+ pods, Terraform IaC Framework - automated cloud infrastructure provisioning.

My preferred theme: slate-amber
```

---

## Theme Options

| Theme | Description |
|-------|-------------|
| `slate-amber` | Professional with amber accents (default) |
| `indigo-violet` | Modern, tech-forward |
| `emerald-teal` | Fresh, nature-tech |
| `rose-fuchsia` | Bold, memorable |
| `blue-cyan` | Classic, clean |

You can change themes anytime in `src/config.json` or use the palette icon in the navigation.