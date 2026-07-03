# Quick Start

Get your portfolio live in 5 minutes using AI assistance.

---

## Step 1: Fill Your Information

Copy this template and fill in your details:

```
My name is [YOUR NAME]. I'm a [JOB TITLE] with [YEARS] years of experience.

Headline: "[YOUR PROFESSIONAL HEADLINE]"

Bio: "[2-3 sentences about your journey and what you do]"

GitHub: [USERNAME] | LinkedIn: [SLUG] | Medium: [HANDLE]

What I do:
- [Expertise Area 1]: [Tools/skills]
- [Expertise Area 2]: [Tools/skills]

Experience: [COMPANY] as [ROLE] — [brief description]

Certifications: [CERT 1], [CERT 2]

Awards: [AWARD 1], [AWARD 2]

Projects: [PROJECT 1 — brief description], [PROJECT 2 — brief description]

Articles: [ARTICLE TITLE 1 — topic], [ARTICLE TITLE 2 — topic]

Theme: [slate-amber | indigo-violet | emerald-teal | rose-fuchsia | blue-cyan]
```

---

## Step 2: Use Copilot/AI

1. Copy the contents of `docs/COPILOT_PROMPT.md`
2. Open Copilot Chat (Ctrl+Shift+I in VS Code)
3. Paste the prompt
4. Paste your information from Step 1
5. AI updates all JSON files automatically

---

## Step 3: Deploy

```bash
npm run build
npm run deploy
```

Your portfolio is now live.

---

## Example

```
My name is Jane Developer. I'm a Senior SRE with 8 years of experience.

Headline: "Cloud Native Architect | DevOps Expert"

Bio: "Specialized in Kubernetes, AWS, and infrastructure automation.
Love mentoring engineers and building scalable systems."

GitHub: janedev | LinkedIn: jane-developer | Medium: janedev

What I do:
- Cloud Infrastructure: Kubernetes, AWS, Terraform
- DevOps & CI/CD: GitHub Actions, Jenkins, ArgoCD
- Monitoring: Prometheus, Grafana, Datadog

Experience: Google as Technical Architect — led platform migration for 10K+ pods

Certifications: AWS Solutions Architect, CKA, Hashicorp Terraform

Awards: Cloud Innovation Award 2024, DevOps Excellence 2023

Projects: K8s Dashboard — real-time monitoring for 10K+ pods

Articles: "Kubernetes Cost Optimization" — DevOps, "GitOps in Practice" — AI & LLM

Theme: emerald-teal
```

---

## Theme Options

| Theme | Description |
|-------|-------------|
| `slate-amber` | Professional, bold |
| `indigo-violet` | Modern, tech-forward |
| `emerald-teal` | Fresh, nature-tech |
| `rose-fuchsia` | Bold, memorable |
| `blue-cyan` | Classic, clean |

Change themes in `src/config.json` or use the palette icon in the nav.
