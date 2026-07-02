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

- Local build note: `npm run build` needs Supabase env vars to collect page data. For a local-only smoke build use dummy values:
  ```bash
  NEXT_PUBLIC_SUPABASE_URL="https://dummy.supabase.co" \
  NEXT_PUBLIC_SUPABASE_ANON_KEY="dummy" \
  SUPABASE_SERVICE_ROLE_KEY="dummy" npm run build
  ```

**Site structure (current — v2.8.0):**
- `/` (home), `/about`, `/team`, `/members`, `/events`, `/contact`, `/get-involved`, `/legal`
- `/resources` (hub), `/resources/parenting-suite` (bespoke), `/resources/family-resources` (11-card directory), `/resources/[slug]` (generic CMS template)
- `/power-hub` (CMS, hidden from search engines)

**Events system (v2.8.0):**
- Events auto-sort by date and auto-split into Upcoming/Past by comparing to today — staff just add events anywhere in Power Hub, the page handles order and archiving. `pastEvents` in `events.json` is legacy input; both arrays are merged and re-split at render.
- The split is computed at build time — an event flips to Past on the next deploy after its date passes (any Power Hub save triggers a deploy).
- Power Hub saves auto-recover from stale-SHA conflicts (refetch + retry once, last save wins) — `app/api/power-hub/content/route.ts`.

**Total CMS coverage (v2.8.0):** every visitor-facing string is JSON-driven, including site SEO/meta (`site.json` → `seo`), footer headings, hero gradient phrase (`home.json` → `headlineHighlight`), section headings on about/events, contact form labels/placeholders/buttons, and the `/resources` hub header (`resources-index.json` → `hub`). Members-page category list + tier labels intentionally stay in code (filter machinery).

**Resources system (v2.6.0, May 5 2026):**
- `content/resources-index.json` is the master list. Drives the nav dropdown AND the `/resources` hub cards. Edit `visible`, `order`, `navLabel`, `cardTitle`, `cardDescription` in Power Hub.
- `content/parenting-suite.json` holds the bespoke Parenting Suite page content (links, video, features, stats, copy, SMS toggle).
- `content/resources/<slug>.json` holds generic resource pages rendered by `app/resources/[slug]/page.tsx`. Section types: `richText`, `featureGrid`, `stats`, `callout`. Icon names are whitelisted in the template.
- Power Hub editor uses a catch-all route `[...file]` so subfolders (e.g. `resources/youth-programs`) work cleanly. The editor list now walks `content/` AND `content/resources/`.
- `lib/parenting-suite-config.ts` is now a deprecation shim that re-exports from JSON. Safe to delete after one clean deploy if no other importers appear.

**Last sessions:**
- July 2, 2026 — Session 16: Events auto-sort + auto-archive (past events move themselves), Power Hub stale-SHA save auto-recovery, full editability sweep (~30 hardcoded strings → JSON across site/home/about/events/contact/get-involved/resources-index). Added July 5 Potluck America event. v2.8.0.
- June 23, 2026 — Built `/resources/family-resources` (directory of 11 community/parenting resources from the P4P PDF). Added per-card outbound links, program logos (top-left white chip), and scannable QR codes (bottom-right) to the generic `featureGrid` template; added `columns: 2|3` option. Fixed two bugs: unscrollable resources pages (stray `.aurora-bg` on `<main>`) and a build-breaking `never[]` in `app/events/page.tsx` from an emptied `pastEvents`. QR assets in `public/images/family-resources/qr/`, logos in `.../logos/`. v2.7.0.
- May 5, 2026 (PM) — Wired Resources into Power Hub: extracted Parenting Suite to JSON, added `content/resources-index.json`, built `/resources` hub + `/resources/[slug]` generic template, switched Power Hub editor to catch-all route, added tailored FILE_HELP entries for `parenting-suite` and `resources-index`. Commit `c46b383`.
- May 5, 2026 (AM) — Project relocated from `~/Desktop/Claude Projects/` to `~/dev/P4P-Website`. Standardized docs (`AGENTS.md`, `NEXT_SESSION.md`, `.env.local.example`). Pinned per-repo GitHub credential helper so push always works as `murrayp4pcoalition`.
- April 16, 2026 — GIFT CONNECT Parenting Suite page (video, QR codes, app-store links), Resources dropdown in nav, brand polish + animations.

**Troubleshooting (only if push fails):**
- 403 on push → run `gh auth status`. If `murrayp4pcoalition` is missing, run `gh auth login` and sign in as that account on https://github.com/login/device.
- Wrong author on commits → `git config user.email` should return `murrayp4pcoalition@gmail.com`. If not, re-run the two `git config` commands above.

---

**What would you like to work on today?**
