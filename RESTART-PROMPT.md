# P4P Website - Complete Restart Prompt

**Copy everything below the line into a new Claude Code conversation:**

---

## P4P Website - Resume Development

I want to work on the **Murray Partners 4 Prevention (P4P) Coalition Website**.

**Working directory:** `/Users/brettlechtenberg/dev/P4P-Website`

**Before starting, please:**
1. `cd /Users/brettlechtenberg/dev/P4P-Website`
2. Read `CLAUDE.md` and `AGENTS.md` for full project context
3. Run `git status` and `git pull` to make sure you have the latest
4. Vercel auto-deploys on push to `main` (coalition's own Vercel team)

**Important rules for this project:**
- NEVER work in `~/Desktop/Claude Projects/P4P-Website` (old iCloud-synced copy — corrupts git and freezes sessions). The current home is `~/dev/P4P-Website`.
- Git identity for this repo must be the coalition account, not Brett's personal:
  ```bash
  git config user.name "murrayp4pcoalition"
  git config user.email "murrayp4pcoalition@gmail.com"
  ```
  (Already set locally — verify with `git config user.email`.)

---

## IMPORTANT: Coalition-Owned Infrastructure

This project uses the **coalition's own accounts** (NOT Brett's personal accounts):

| Service | Account | Notes |
|---------|---------|-------|
| GitHub | murrayp4pcoalition | Private repo |
| Vercel | murrayp4pcoalition | Linked via GitHub OAuth |
| Supabase | murrayp4pcoalition@gmail.com | Database |
| Gmail | murrayp4pcoalition@gmail.com | Coalition email |

---

## All URLs & Credentials

### Live Website (Production Domain)
| Page | URL |
|------|-----|
| **Homepage** | https://murrayp4p.com/ |
| **About** | https://murrayp4p.com/about |
| **Team** | https://murrayp4p.com/team |
| **Members** | https://murrayp4p.com/members |
| **Events** | https://murrayp4p.com/events |
| **Contact** | https://murrayp4p.com/contact |
| **Get Involved** | https://murrayp4p.com/get-involved |
| **Legal** | https://murrayp4p.com/legal |
| **Power Hub CMS** | https://murrayp4p.com/power-hub |

### GitHub (Code Repository)
- **Repo URL:** https://github.com/murrayp4pcoalition/P4P-Website
- **Repo Type:** PRIVATE
- **Username:** `murrayp4pcoalition`
- **Email:** `murrayp4pcoalition@gmail.com`

### Vercel (Hosting & Auto-Deploy)
- **Dashboard:** https://vercel.com/murrayp4pcoalitions-projects/p4-p-website
- **Environment Variables:** https://vercel.com/murrayp4pcoalitions-projects/p4-p-website/settings/environment-variables
- **Auto-Deploy:** YES - any push to main branch triggers rebuild
- **Login Method:** Click "Continue with GitHub" → use murrayp4pcoalition account

### Power Hub CMS (Content Management)
- **URL:** https://murrayp4p.com/power-hub
- **Username:** `p4padmin`
- **Password:** `p4p2026`

### Vercel Environment Variables (Required for Power Hub)
| Variable | Value |
|----------|-------|
| `GITHUB_TOKEN` | (PAT token - stored in Vercel, not in code) |
| `GITHUB_OWNER` | `murrayp4pcoalition` |
| `GITHUB_REPO` | `P4P-Website` |
| `GITHUB_BRANCH` | `main` |

---

## How Deployments Work

### Code Changes (Developer)
```
Edit Code → git add → git commit → git push origin main → Vercel Auto-Deploys
```

### Content Changes (Staff via Power Hub)
```
Login to Power Hub → Edit Content → Save & Deploy → GitHub API commits → Vercel Auto-Deploys
```

**Staff are self-sufficient** - they don't need Brett to make content updates!

---

## What's Built (v2.6.0)

### Pages
- 9 public pages (Home, About, Team, Members, Events, Contact, Get Involved, Legal)
- Power Hub CMS at /power-hub (hidden from search engines)
- **Resources hub** at /resources (lists every visible resource)
- **GIFT CONNECT Parenting Suite** at /resources/parenting-suite (bespoke page, content from JSON)
- **Generic resource template** at /resources/[slug] (CMS-driven — add a JSON, get a page)

### Features
- ✅ Power Hub CMS - Staff can edit ALL content independently
- ✅ GitHub API integration - No git CLI needed on server
- ✅ GoHighLevel contact form integration
- ✅ JSON-based content system (10+ content files; auto-discovers `content/resources/*.json`)
- ✅ Glassmorphic black/orange design
- ✅ Mobile-optimized (320px - 1920px+)
- ✅ Framer Motion animations
- ✅ GIFT CONNECT Parenting Suite page with video, QR codes, and app store links
- ✅ **NEW (v2.6.0):** Power-Hub-managed Resources system — add new resource pages from `content/resources-index.json` + a matching `content/resources/<slug>.json` without touching code

### Content Files (All Editable via Power Hub)
| File | Controls |
|------|----------|
| `home.json` | Hero, Partners, Stats |
| `about.json` | Mission, Values, Focus Areas |
| `contact.json` | Contact page content |
| `events.json` | Upcoming & Past Events |
| `team.json` | Staff, Key Leaders, Board Members |
| `members.json` | Coalition member organizations |
| `get-involved.json` | Volunteer, Donate, Partner info |
| `legal.json` | Terms, Privacy, Accessibility |
| `site.json` | Footer, Social links, CTA banner |
| `parenting-suite.json` | GIFT CONNECT page — links, video, features, stats, copy, SMS toggle |
| `resources-index.json` | Resources dropdown + `/resources` hub — add/hide/reorder resource pages |
| `resources/<slug>.json` | Generic resource page content (per-slug; rendered by `/resources/[slug]`) |

### Current Content Status (as of May 5, 2026 — v2.6.0)
- ✅ Events: 15 upcoming events (April - December 2026)
- ✅ Team: 4 Staff, 34 Key Leaders, 64 Board Members
- ✅ All content editable via Power Hub
- ✅ **Parenting Suite page:** live at /resources/parenting-suite (visible in nav under Resources)
  - Content: `/content/parenting-suite.json` (Power Hub editable)
  - `/lib/parenting-suite-config.ts` is now a deprecation shim re-exporting from JSON
  - Video thumbnail: `/public/images/parenting-suite/video-thumbnail.png`
- ✅ **Resources system:** /resources hub + /resources/[slug] generic template + nav dropdown, all driven by `/content/resources-index.json`

---

## Quick Commands

```bash
# Navigate to project
cd ~/dev/P4P-Website

# Build (test before deploy)
npm run build

# Push changes — git auth is pinned to murrayp4pcoalition via custom credential
# helper, so push works regardless of the active `gh` user.
git add -A && git commit -m "message" && git push origin main
```

> **Note:** Vercel auto-deploys on push to `main`. Do NOT use `vercel --prod`
> from the CLI — the live site is wired to GitHub on the coalition's Vercel team
> and CLI deploys can land in the wrong project.

---

## Critical Rules

1. **Cached credentials work** - Regular `git push origin main` uses Mac keychain
2. **Auto-deploy is ON** - Every push to main triggers Vercel rebuild
3. **Private repo** - Only visible when logged into murrayp4pcoalition GitHub
4. **Coalition owns everything** - Separate from Brett's personal accounts
5. **Power Hub uses GitHub API** - Environment variables in Vercel (not in code)
6. **No PAT tokens in code** - GitHub blocks commits with secrets

### If Git Identity Gets Reset
Run this to fix:
```bash
cd ~/dev/P4P-Website
git config user.name "murrayp4pcoalition"
git config user.email "murrayp4pcoalition@gmail.com"
```

---

**What would you like to work on today?**
