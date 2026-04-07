# P4P Website - Complete Restart Prompt

**Copy everything below the line into a new Claude Code conversation:**

---

## P4P Website - Resume Development

I want to work on the **Murray Partners 4 Prevention (P4P) Coalition Website**.

**Read the project instructions first:**
```
/Users/brettlechtenberg/Desktop/Claude Projects/P4P-Website/CLAUDE.md
```

**Project Location:**
```
/Users/brettlechtenberg/Desktop/Claude Projects/P4P-Website/
```

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

## What's Built (v2.4.0)

### Pages
- 9 public pages (Home, About, Team, Members, Events, Contact, Get Involved, Legal)
- Power Hub CMS at /power-hub (hidden from search engines)

### Features
- ✅ Power Hub CMS - Staff can edit ALL content independently
- ✅ GitHub API integration - No git CLI needed on server
- ✅ GoHighLevel contact form integration
- ✅ JSON-based content system (9 content files)
- ✅ Glassmorphic black/orange design
- ✅ Mobile-optimized (320px - 1920px+)
- ✅ Framer Motion animations

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

### Current Content Status (as of April 7, 2026)
- ✅ Events: 15 upcoming events (April - December 2026)
- ✅ Team: 4 Staff, 34 Key Leaders, 64 Board Members
- ✅ All content editable via Power Hub

---

## Quick Commands

```bash
# Navigate to project
cd "/Users/brettlechtenberg/Desktop/Claude Projects/P4P-Website"

# Build (test before deploy)
npm run build

# Push changes (uses cached git credentials)
git add -A && git commit -m "message" && git push origin main
```

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
cd "/Users/brettlechtenberg/Desktop/Claude Projects/P4P-Website"
git config user.name "murrayp4pcoalition"
git config user.email "murrayp4pcoalition@gmail.com"
```

---

**What would you like to work on today?**
