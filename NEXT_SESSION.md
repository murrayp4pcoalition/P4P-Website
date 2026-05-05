# P4P Website — Next Session Restart Prompt

Copy everything below the line into a new Claude Code conversation:

---

Let's resume work on the **Murray Partners 4 Prevention (P4P) Coalition** website.

**Working directory:** `/Users/brettlechtenberg/dev/P4P-Website`
**GitHub:** https://github.com/murrayp4pcoalition/P4P-Website (private)
**Vercel:** https://vercel.com/murrayp4pcoalitions-projects/p4-p-website
**Live site:** https://murrayp4p.com
**Power Hub CMS:** https://murrayp4p.com/power-hub  (user `p4padmin` / pw `p4p2026`)

**Before starting, please:**
1. `cd /Users/brettlechtenberg/dev/P4P-Website`
2. Read `CLAUDE.md` and `AGENTS.md` for full project context
3. Run `git status` and `git pull` to make sure you have the latest
4. Vercel auto-deploys on push to `main` (coalition's own Vercel team)

**Important rules for this project:**
- NEVER work in `~/Desktop/Claude Projects/P4P-Website` (old iCloud-synced copy — corrupts git and freezes sessions). The current home is `~/dev/P4P-Website`.
- Git identity for this repo MUST be the coalition account, not Brett's personal:
  ```bash
  git config user.name "murrayp4pcoalition"
  git config user.email "murrayp4pcoalition@gmail.com"
  ```
- Tech stack: **Next.js 16 + React 19 + TypeScript + Tailwind CSS 3.4** (NOT v4) + Framer Motion + Lucide React.
- Brand: Black `#1C1C1C` + Orange `#F27A21`, glassmorphic cards, animated aurora background.
- No PAT tokens in code. `GITHUB_TOKEN` lives in Vercel env vars only.

**Site structure (current — v2.5.0):**
- `/` (home), `/about`, `/team`, `/members`, `/events`, `/contact`, `/get-involved`, `/legal`
- `/power-hub` (CMS, hidden from search engines)
- `/resources/parenting-suite` (HIDDEN — not in nav, GIFT CONNECT page)

**What was completed last session (April 16, 2026):**
- ✅ GIFT CONNECT Parenting Suite page with video, QR codes, and app store links
- ✅ Resources dropdown added to navigation (Parenting link)
- ✅ Brand polish + animations on Parenting Suite page

---

**What would you like to work on today?**
