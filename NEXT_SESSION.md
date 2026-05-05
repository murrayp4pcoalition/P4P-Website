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
- **Git auth is pinned per-repo** via a custom credential helper (`~/.local/bin/gh-credential-for-user murrayp4pcoalition`). `git push` will always authenticate as the coalition account, regardless of which `gh` user is globally active. Do NOT change `credential.helper` in this repo.
- Git identity for this repo MUST be the coalition account, not Brett's personal:
  ```bash
  git config user.name "murrayp4pcoalition"
  git config user.email "murrayp4pcoalition@gmail.com"
  ```
- Tech stack: **Next.js 16 + React 19 + TypeScript + Tailwind CSS 3.4** (NOT v4) + Framer Motion + Lucide React.
- Brand: Black `#1C1C1C` + Orange `#F27A21`, glassmorphic cards, animated aurora background.
- No PAT tokens in code. `GITHUB_TOKEN` lives in Vercel env vars only.

**Site structure (current — v2.6.0):**
- `/` (home), `/about`, `/team`, `/members`, `/events`, `/contact`, `/get-involved`, `/legal`
- `/resources` (hub), `/resources/parenting-suite` (bespoke), `/resources/[slug]` (generic CMS template)
- `/power-hub` (CMS, hidden from search engines)

**Resources system (v2.6.0, May 5 2026):**
- `content/resources-index.json` is the master list. Drives the nav dropdown AND the `/resources` hub cards. Edit `visible`, `order`, `navLabel`, `cardTitle`, `cardDescription` in Power Hub.
- `content/parenting-suite.json` holds the bespoke Parenting Suite page content (links, video, features, stats, copy, SMS toggle).
- `content/resources/<slug>.json` holds generic resource pages rendered by `app/resources/[slug]/page.tsx`. Section types: `richText`, `featureGrid`, `stats`, `callout`. Icon names are whitelisted in the template.
- Power Hub editor uses a catch-all route `[...file]` so subfolders (e.g. `resources/youth-programs`) work cleanly. The editor list now walks `content/` AND `content/resources/`.
- `lib/parenting-suite-config.ts` is now a deprecation shim that re-exports from JSON. Safe to delete after one clean deploy if no other importers appear.

**Last sessions:**
- May 5, 2026 (PM) — Wired Resources into Power Hub: extracted Parenting Suite to JSON, added `content/resources-index.json`, built `/resources` hub + `/resources/[slug]` generic template, switched Power Hub editor to catch-all route, added tailored FILE_HELP entries for `parenting-suite` and `resources-index`. Commit `c46b383`.
- May 5, 2026 (AM) — Project relocated from `~/Desktop/Claude Projects/` to `~/dev/P4P-Website`. Standardized docs (`AGENTS.md`, `NEXT_SESSION.md`, `.env.local.example`). Pinned per-repo GitHub credential helper so push always works as `murrayp4pcoalition`.
- April 16, 2026 — GIFT CONNECT Parenting Suite page (video, QR codes, app-store links), Resources dropdown in nav, brand polish + animations.

**Troubleshooting (only if push fails):**
- 403 on push → run `gh auth status`. If `murrayp4pcoalition` is missing, run `gh auth login` and sign in as that account on https://github.com/login/device.
- Wrong author on commits → `git config user.email` should return `murrayp4pcoalition@gmail.com`. If not, re-run the two `git config` commands above.

---

**What would you like to work on today?**
