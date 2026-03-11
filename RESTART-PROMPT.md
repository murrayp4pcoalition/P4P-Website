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

### Live Website
| Page | URL |
|------|-----|
| **Homepage** | https://p4-p-website.vercel.app |
| **About** | https://p4-p-website.vercel.app/about |
| **Team** | https://p4-p-website.vercel.app/team |
| **Members** | https://p4-p-website.vercel.app/members |
| **Events** | https://p4-p-website.vercel.app/events |
| **Contact** | https://p4-p-website.vercel.app/contact |
| **Get Involved** | https://p4-p-website.vercel.app/get-involved |
| **Power Hub CMS** | https://p4-p-website.vercel.app/power-hub |

### GitHub (Code Repository)
- **Login URL:** https://github.com/login
- **Username:** `murrayp4pcoalition`
- **Email:** `murrayp4pcoalition@gmail.com`
- **Password:** `MurrayP4PCoalitionIs#1`
- **Repo URL:** https://github.com/murrayp4pcoalition/P4P-Website
- **Repo Type:** PRIVATE

### Vercel (Hosting & Auto-Deploy)
- **Login URL:** https://vercel.com/login
- **Login Method:** Click "Continue with GitHub" → use murrayp4pcoalition account
- **Dashboard:** https://vercel.com/murrayp4pcoalitions-projects/p4-p-website
- **Auto-Deploy:** YES - any push to main branch triggers rebuild

### Power Hub CMS (Content Management)
- **URL:** https://p4-p-website.vercel.app/power-hub
- **Username:** `p4padmin`
- **Password:** `p4p2026`

### Supabase (Database)
- **Login URL:** https://supabase.com/dashboard
- **Email:** `murrayp4pcoalition@gmail.com`
- **Password:** `MurrayP4PCoalitionIs#1`
- **Project Name:** Murray Partners 4 Prevention Coalition
- **Database Password:** `MurrayPartners4PreventionCoalitionIs#1`

### Coalition Gmail
- **Email:** `murrayp4pcoalition@gmail.com`
- **Password:** `MurrayP4PCoalitionIs#1`
- **Recovery Email:** `brett@brettlechtenberg.com`
- **Phone Verification:** `801-718-3851`

---

## How Auto-Deploy Works

```
Edit Code → Commit → Push to GitHub → Vercel Auto-Deploys → Live in ~60 seconds
```

### NO CLI AUTH NEEDED

Use this Personal Access Token (PAT) embedded in git commands:

```
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
```

### Push Command (Copy This Exactly)

```bash
cd "/Users/brettlechtenberg/Desktop/Claude Projects/P4P-Website" && git add -A && git commit -m "Your commit message here" && git push https://murrayp4pcoalition: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@github.com/murrayp4pcoalition/P4P-Website.git main
```

### Content Updates via Power Hub (No Code Needed)

1. Go to https://p4-p-website.vercel.app/power-hub
2. Login: `p4padmin` / `p4p2026`
3. Edit content in the visual editor
4. Click "Deploy" button
5. Site updates automatically

---

## What's Built (v2.0.1)

- 9 public pages (Home, About, Team, Members, Events, Contact, Get Involved, Terms, Privacy)
- Power Hub CMS for content management
- JSON-based content system
- Supabase database integration
- Glassmorphic black/orange design
- Mobile-optimized (320px - 1920px+)
- Framer Motion animations

## What Still Needs Real Content

- [ ] Team page: Real officers/members with photos
- [ ] Members page: Real coalition member organizations
- [ ] Events page: Real P4P events
- [ ] Partner logos: Actual organization logos
- [ ] Contact form: Backend integration
- [ ] Social links: Real P4P social profiles

---

## Quick Commands

```bash
# Navigate to project
cd "/Users/brettlechtenberg/Desktop/Claude Projects/P4P-Website"

# Start local dev server
npm run dev

# Build (test before deploy)
npm run build

# Push changes (auto-deploys via Vercel)
git add -A && git commit -m "message" && git push https://murrayp4pcoalition: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@github.com/murrayp4pcoalition/P4P-Website.git main
```

---

## Critical Rules

1. **NO gh CLI auth** - Use the PAT token in git push URL (avoids account conflicts)
2. **Auto-deploy is ON** - Every push to main triggers Vercel rebuild
3. **Private repo** - Only visible when logged into murrayp4pcoalition GitHub
4. **Coalition owns everything** - Separate from Brett's personal accounts
5. **Power Hub deploys too** - Uses same git push mechanism

---

**What would you like to work on today?**
