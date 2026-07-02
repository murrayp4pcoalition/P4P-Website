# Murray Partners 4 Prevention Website - Project Instructions

## Project Overview

**Project Name:** Murray Partners 4 Prevention (P4P) Coalition Website
**Version:** 2.8.0
**Created:** February 11, 2026
**Last Updated:** July 2, 2026 (Session 16)
**Status:** 🚀 LIVE at murrayp4p.com - Production CMS (Staff Self-Sufficient!)

### Quick Links
- **Production URL:** https://murrayp4p.com/
- **Power Hub CMS:** https://murrayp4p.com/power-hub
- **Parenting Suite (HIDDEN):** https://murrayp4p.com/resources/parenting-suite
- **GitHub Repo:** https://github.com/murrayp4pcoalition/P4P-Website (PRIVATE)
- **Vercel Dashboard:** https://vercel.com/murrayp4pcoalitions-projects/p4-p-website
- **Vercel Account:** murrayp4pcoalition (separate from Brett's account)

### Coalition Account Credentials
- **GitHub:** murrayp4pcoalition / murrayp4pcoalition@gmail.com
- **Vercel:** Connected via GitHub OAuth
- **Supabase:** murrayp4pcoalition@gmail.com

### Project Location
```
/Users/brettlechtenberg/dev/P4P-Website/
```

> ⚠️ **Do NOT work in `~/Desktop/Claude Projects/P4P-Website`.** That copy is iCloud-synced, corrupts git, and freezes sessions. The active home is `~/dev/P4P-Website`.

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.6 | App Router, SSR |
| React | 19.2.4 | UI Framework |
| Tailwind CSS | 3.4.19 | Styling |
| Framer Motion | 12.34.0 | Animations |
| Lucide React | 0.563.0 | Icons |
| TypeScript | 5.9.3 | Type Safety |

---

## Color Scheme

| Color | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| Black | `#1C1C1C` | `--p4p-black` | Primary background |
| Deep Black | `#0F0F0F` | `--p4p-black-deep` | Aurora background |
| Orange | `#F27A21` | `--p4p-orange` | Accent, CTAs, gradients |
| Orange Light | `#F9A45A` | `--p4p-orange-light` | Hover states, highlights |
| White | `#FFFFFF` | `--p4p-white` | Text, highlights |
| Charcoal | `#2A2A2A` | `--p4p-charcoal` | Secondary background |

---

## Site Structure

```
📁 P4P-Website
├── app/
│   ├── page.tsx           # Home page (with hero image)
│   ├── layout.tsx         # Root layout with Navigation
│   ├── globals.css        # Global styles + design system
│   ├── about/page.tsx     # About Us page
│   ├── team/page.tsx      # Coalition Team (Chamber-style)
│   ├── members/page.tsx   # Coalition Members Directory (like MACC)
│   ├── events/page.tsx    # Community Events
│   ├── contact/page.tsx   # Contact form
│   ├── get-involved/page.tsx  # Volunteer/Donate/Partner
│   ├── terms/page.tsx     # Terms & Conditions (Jan 1, 2026)
│   ├── privacy/page.tsx   # Privacy Policy (Jan 1, 2026)
│   ├── resources/         # 🆕 v2.6.0 — Resources hub + dynamic template
│   │   ├── page.tsx                  # /resources — hub of visible resources
│   │   ├── parenting-suite/page.tsx  # Bespoke GIFT CONNECT page (reads parenting-suite.json)
│   │   └── [slug]/page.tsx           # Generic template (reads content/resources/<slug>.json)
│   ├── power-hub/         # Embedded CMS (hidden from public)
│   │   ├── page.tsx       # Login page
│   │   ├── layout.tsx     # noindex/nofollow metadata
│   │   └── dashboard/
│   │       ├── page.tsx           # Dashboard home
│   │       ├── layout.tsx         # Sidebar + auth check
│   │       ├── content/page.tsx   # Content files list (lists root + content/resources/)
│   │       ├── content/[...file]/page.tsx  # JSON editor (catch-all — supports subfolders)
│   │       └── settings/page.tsx  # Site info & links
│   ├── api/contact/       # Contact form API (GHL webhook)
│   │   └── route.ts              # POST handler → GoHighLevel
│   └── api/power-hub/     # CMS API routes
│       ├── auth/route.ts          # Login/verify token
│       ├── content/route.ts       # Read/write JSON files (walks content/ + content/resources/)
│       └── deploy/route.ts        # Git push to deploy
├── components/
│   ├── Navigation.tsx     # Main nav with mobile menu
│   ├── Footer.tsx         # Footer with links + social
│   ├── Hero.tsx           # Home page hero (reads from content/home.json)
│   ├── Partners.tsx       # Partner grid (reads from content/home.json)
│   ├── ContactCTA.tsx     # Contact call-to-action banner
│   ├── PageHeader.tsx     # Reusable page header
│   └── animations/        # Framer Motion wrappers
│       ├── FadeIn.tsx
│       ├── ScaleIn.tsx
│       └── StaggerChildren.tsx
├── content/               # JSON content files (editable via Power Hub)
│   ├── home.json              # Hero, Partners, Stats data
│   ├── about.json             # About page content
│   ├── team.json, members.json, events.json, contact.json, get-involved.json, legal.json, site.json
│   ├── parenting-suite.json   # 🆕 v2.6.0 — GIFT CONNECT page content (was lib/parenting-suite-config.ts)
│   ├── resources-index.json   # 🆕 v2.6.0 — Master Resources list (drives nav + /resources hub)
│   └── resources/             # 🆕 v2.6.0 — Per-slug content for /resources/[slug] generic pages
│       └── <slug>.json
├── public/
│   └── images/
│       ├── p4p-logo.png   # Downloaded from current site
│       └── hero/
│           └── p4p-hero.jpg  # Hero background image
└── config files (tailwind, tsconfig, next.config, etc.)
```

---

## Common Commands

```bash
# Navigate to project
cd ~/dev/P4P-Website

# Development
npm run dev          # Start dev server (usually localhost:3000)

# Build & Deploy
npm run build        # Build for production locally to catch errors
# DO NOT use `vercel --prod` from the CLI — deploy is GitHub-driven on the
# coalition's Vercel team. Pushing to main is the deploy.

# Git operations — auth is pinned to murrayp4pcoalition via custom credential
# helper, regardless of which `gh` user is globally active.
git add -A && git commit -m "message" && git push
```

---

## Design System

### Visual Features
- **Hero Background:** Full-screen image with gradient overlays
- **Aurora Background:** Animated orange glow effects
- **Glassmorphism:** Backdrop blur cards with subtle borders
- **Animations:** Framer Motion fade-in, scale, stagger effects
- **Responsive:** Mobile-first with breakpoints at sm/md/lg/xl

### CSS Classes
```css
.glass          /* Basic glass effect */
.glass-strong   /* Stronger glass effect */
.glass-card     /* Glass card with hover effects */
.btn-primary    /* Orange gradient button */
.btn-secondary  /* Transparent outline button */
.btn-glow       /* Orange button with glow shadow */
.input-glass    /* Glass-style form inputs */
.text-gradient  /* Orange gradient text */
.aurora-bg      /* Animated background */
```

---

## 🔐 Power Hub CMS (NEW in v2.0.0)

The Power Hub is an embedded content management system that allows non-technical users to edit website content without touching code.

### Access
- **URL:** https://murrayp4p.com/power-hub
- **Username:** `p4padmin`
- **Password:** `p4p2026`
- **Hidden:** robots: noindex, nofollow (won't appear in search engines)

### Features
| Feature | Description |
|---------|-------------|
| **Login** | Secure dark-themed login page |
| **Dashboard** | Quick actions, content file list with timestamps |
| **Content Editor** | Visual JSON editor for nested objects/arrays |
| **Deploy Button** | One-click git push triggers Vercel rebuild |
| **Settings** | Site info, quick links to live pages |

### How It Works
```
Site Owner → Login → Edit JSON content → Save → Deploy → Vercel auto-builds → Live site updates
```

### Content Files
Content is stored in `/content/*.json` files:
- `home.json` - Hero text, partner logos, stats
- `about.json` - Mission, values, focus areas

Components read from these JSON files:
```typescript
import homeContent from '@/content/home.json';
const { hero } = homeContent;
```

### Environment Variables (Optional)
Set in `.env.local` or Vercel dashboard:
```
PORTAL_USERNAME=p4padmin    # Default if not set
PORTAL_PASSWORD=p4p2026     # Default if not set
```

---

## 📚 Resources System (NEW in v2.6.0 — May 5, 2026)

Resources pages are now fully Power-Hub-managed. Staff can add a new resource page from the Power Hub without code.

### Architecture
```
content/resources-index.json       ← Master list (drives nav + /resources hub cards)
content/parenting-suite.json       ← Bespoke GIFT CONNECT page content
content/resources/<slug>.json      ← Generic resource page content (one file per slug)

app/resources/page.tsx             ← /resources hub (lists all `visible` resources, sorted by `order`)
app/resources/parenting-suite/...  ← Bespoke page — reads parenting-suite.json
app/resources/[slug]/page.tsx      ← Generic template — reads content/resources/<slug>.json
```

### How to add a new resource page (staff workflow)
1. Power Hub → Content → `resources-index` → add an entry with `slug`, `navLabel`, `cardTitle`, `cardDescription`, `kind: "generic"`, `visible: true`, `order`. Save & Deploy.
2. Power Hub → Content → add a new file at `resources/<slug>.json` with `metadata`, `hero`, `sections[]`, optional `contact.email`. Save & Deploy.
3. Page is live at `/resources/<slug>` and appears in both the Resources nav dropdown and the `/resources` hub.

### Generic template section types
Defined in `app/resources/[slug]/page.tsx`:
- `richText` — heading + paragraphs (plain text, blank-line splits paragraphs)
- `featureGrid` — heading + array of `{ icon, title, description }`
- `stats` — heading + array of `{ number, label }`
- `callout` — heading + body + optional CTA

Icon names are whitelisted in the template (BookOpen, Heart, Users, Star, etc.). Unknown names fall back to BookOpen.

### Power Hub editor route
The editor lives at `/power-hub/dashboard/content/[...file]` (catch-all). Subfolder paths like `resources/youth-programs` route cleanly through Next.js. The list page walks both `content/` and `content/resources/`.

### Migration notes
- `lib/parenting-suite-config.ts` is now a deprecation shim that re-exports from `content/parenting-suite.json`. Safe to delete after one clean deploy if no other importers appear.
- The bespoke `/resources/parenting-suite` route is preserved — Next.js prefers static routes over dynamic ones, plus the dynamic template has an explicit `notFound()` guard for that slug.

---

## What's Built vs What's Needed

### ✅ Complete (v2.0.0)
- [x] All 9 public pages with structure and styling
- [x] **Power Hub CMS** - embedded content management at /power-hub
- [x] **Content JSON** - home.json and about.json for editable content
- [x] Hero background images on ALL pages
- [x] Stable Vercel production URL (p4p-website.vercel.app)
- [x] P4P logo placeholders in all member organization cards
- [x] Navigation with mobile responsive menu (optimized 85vw width)
- [x] Footer with social links
- [x] Partner organizations section
- [x] Members directory page with search/filter
- [x] Glassmorphic design system
- [x] Framer Motion animations
- [x] Terms & Conditions page
- [x] Privacy Policy page
- [x] **Comprehensive mobile optimization** (320px - 1920px+)
- [x] Minimum 44px touch targets on all interactive elements
- [x] GitHub repo connected (11 commits)
- [x] Vercel deployment working

### ⏳ Needs Real Content (Placeholders Currently)
- [ ] Members page: Add real coalition member organizations
- [ ] Team page: Replace placeholder officers/members with real P4P team
- [ ] About page: Verify/update mission statement and focus areas
- [ ] Events page: Replace sample events with real P4P events
- [ ] Partner/Member logos: Add actual organization logos
- [x] Contact form: Connected to GoHighLevel webhook (creates contacts with all fields)
- [ ] Social media links: Update to real P4P social profiles

### 🚀 Future Enhancements
- [ ] News/blog section
- [ ] Event calendar integration
- [ ] Donation payment integration
- [ ] Newsletter signup (GHL integration)
- [ ] Team member photos

---

## Reference Site

This site was built to match the visual style of the **Murray Chamber of Commerce** website:

- **MACC Production:** https://macc-website-2.vercel.app/
- **MACC Reference:** https://web-seven-beta-31.vercel.app/
- **MACC GitHub:** https://github.com/BrettLechtenbrerg/MACC-Website
- **MACC Project:** `/Users/brettlechtenberg/dev/macc-web/`

---

## Deployment Notes

**IMPORTANT:** Always deploy using Vercel CLI, not the dashboard upload:
```bash
vercel --prod --yes
```

This avoids issues with standard uploads and ensures proper builds.

---

## Contact Info

- **P4P Email:** director@murrayp4p.com
- **Current Site:** https://murrayp4p.com/

---

## Session History

### February 11, 2026 - Session 1: Initial Build
- Created complete website from scratch
- Matched MACC website tech stack and visual design
- Adapted color scheme from purple/orange to black/orange
- Downloaded logo from current GoHighLevel site
- Could not scrape Team/About pages (403 blocked) - used placeholders
- Deployed to Vercel successfully

### February 11, 2026 - Session 2: Members Directory
- Added Coalition Members directory page (`/members`)
- Modeled after MACC directory with search, filters, grid/list view
- Member cards: image, name, category, description, address, phone, website
- Tier system: Founding Partner, Partner, Supporter
- 9 placeholder member organizations

### February 11, 2026 - Session 3: Legal Pages
- Added Terms & Conditions page (`/terms`)
- Added Privacy Policy page (`/privacy`)
- Both pages effective January 1, 2026
- **Total Pages: 9**

### February 11, 2026 - Session 4: Hero Image
- Added hero background image (p4p-hero.jpg)
- Updated Hero component with image and gradient overlays
- Matches Murray Chamber website hero style
- Deployed to Vercel production
- Created restart prompt and documentation
- **Version: 1.1.0**

### February 11, 2026 - Session 5: Page Images, Stable URL & Mobile Optimization
- **Stable Vercel URL:** Created permanent alias `p4p-website.vercel.app`
- **Page Background Images:** Added hero images to all 6 content pages:
  - About: Community diversity image
  - Team: Business collaboration image
  - Members: Partnership image
  - Events: Community gathering image
  - Contact: Communication image
  - Get Involved: Volunteering image
- **Member Logo Placeholders:** All 9 member org cards now show P4P logo until real logos provided
- **Comprehensive Mobile Optimization:**
  - Contact page social links: flex-wrap, responsive padding/text
  - Members page filters: Better stacking, grouped controls, responsive widths
  - Navigation mobile menu: Responsive 85vw width (max 384px)
  - All interactive elements: Minimum 44x44px touch targets
  - Added aria-labels for accessibility
- **Git:** 10 total commits, all pushed
- **Vercel:** Deployed and aliased to stable URL
- **Documentation:** Updated CLAUDE.md and RESTART-PROMPT.md
- **Version: 1.2.0** - Production Ready!

### February 14, 2026 - Session 6: Power Hub CMS
- **🆕 Power Hub CMS:** Built complete embedded content management system
  - Login page at `/power-hub` with secure authentication
  - Dashboard with quick actions and content file list
  - Visual JSON editor for nested objects and arrays
  - One-click deploy button (git push → Vercel rebuild)
  - Settings page with site info and quick links
- **Content JSON System:**
  - Created `/content/home.json` (hero, partners, stats)
  - Created `/content/about.json` (mission, values, focus areas)
  - Updated Hero.tsx and Partners.tsx to read from JSON
  - Updated about/page.tsx to read from JSON
- **API Routes:**
  - `/api/power-hub/auth` - Login and token verification
  - `/api/power-hub/content` - Read/write JSON content files
  - `/api/power-hub/deploy` - Git add, commit, push
- **Security:**
  - Hidden from search engines (robots: noindex, nofollow)
  - Token-based authentication with localStorage
  - Environment variable support for credentials
- **Credentials:** p4padmin / p4p2026
- **Git:** 11 total commits, all pushed
- **Version: 2.0.0** - Major Feature Release!

### March 10, 2026 - Session 7: Infrastructure Migration
- **Issue:** Original GitHub repo (BrettLechtenbrerg/P4P-Website) was deleted/inaccessible
- **Solution:** Migrated to coalition's own infrastructure:
  - Created new GitHub account: `murrayp4pcoalition`
  - Created PRIVATE repo: `murrayp4pcoalition/P4P-Website`
  - Set up new Vercel account linked to coalition GitHub
  - Pushed all 20+ local commits to new repo
  - Added Supabase environment variables to Vercel
  - Deployed successfully to `p4-p-website.vercel.app`
- **All code preserved:** No work was lost - everything was on local machine
- **New URLs:**
  - Production: https://p4-p-website.vercel.app
  - Power Hub: https://p4-p-website.vercel.app/power-hub
  - GitHub: https://github.com/murrayp4pcoalition/P4P-Website
- **Git:** All commits migrated to new repo
- **Version: 2.0.1** - Infrastructure Migration

### March 22, 2026 - Session 8: Custom Domain Live
- **Production Domain:** Site now live at https://murrayp4p.com/
- **Updated Documentation:** All references to p4-p-website.vercel.app updated to murrayp4p.com
- **Files Updated:**
  - CLAUDE.md - Production URL, Power Hub URL
  - README.md - Live site URL
  - RESTART-PROMPT.md - All page URLs
  - P4P-QUICK-REFERENCE.md - All page URLs
- **Deployment Workflow Confirmed:** Git push → GitHub → Vercel auto-deploy (no CLI)
- **Version: 2.1.0** - Production Domain

### March 22, 2026 - Session 9: GoHighLevel Contact Form Integration
- **🆕 GHL Webhook Integration:** Contact form now sends leads to GoHighLevel CRM
  - Created `/api/contact` route to handle form submissions
  - Webhook URL: `https://services.leadconnectorhq.com/hooks/X059zzO350KHgB9dXvPT/webhook-trigger/...`
  - Splits full name into firstName/lastName for GHL compatibility
  - Sends: firstName, lastName, email, phone, source, tags, subject, message, notes
- **Phone Number Field Added:** Contact form now collects phone numbers
- **GHL Workflow Created:** "Coalition Contact" workflow in GHL
  - Trigger: Inbound Webhook
  - Action 1: Create/Update Contact (maps all fields)
  - Action 2: Add Tag ("coalition contact", subject)
- **Field Mapping Reference:**
  - `{{inboundWebhookRequest.firstName}}` → First Name
  - `{{inboundWebhookRequest.lastName}}` → Last Name
  - `{{inboundWebhookRequest.email}}` → Email
  - `{{inboundWebhookRequest.phone}}` → Phone
  - `{{inboundWebhookRequest.source}}` → Contact Source
- **GitHub:** Added BrettLechtenbrerg as collaborator (for push access)
- **Git:** 3 new commits pushed
- **Live & Tested:** Form submissions create contacts in GHL with all fields
- **Version: 2.2.0** - GHL Integration

### April 6, 2026 - Session 10: Power Hub Enhancements & Full CMS Coverage
- **Git Cleanup:** Removed broken branch refs, synced with GitHub
- **Events Page Updated:** Added all 9 monthly coalition meetings (April - December 2026)
  - Time: 4:00 PM - 5 PM
  - Location: Murray City School District Office (5102 S. Commerce Dr.)
  - Fourth Tuesday of each month
- **Power Hub Improvements:**
  - Fixed GitHub token authentication (new token generated)
  - "Add New Item" button moved to TOP of arrays (always visible)
  - Contextual labels: "Add New Event", "Add New Member", etc.
  - New items start with empty values (not duplicating old data)
- **Media Library Fixed:**
  - Verified Vercel Blob storage connection
  - Migrated 11 existing images to Media Library
  - All partner logos now available in Power Hub
- **Full CMS Coverage - NEW `site.json`:**
  - Created content/site.json for site-wide settings
  - Organization name, tagline, email, logo
  - Social media links (Facebook, Instagram, Twitter, LinkedIn, YouTube)
  - Contact CTA banner (headline, description, buttons)
  - Footer navigation links
  - Updated Footer.tsx and ContactCTA.tsx to read from JSON
- **Content Files Now Editable via Power Hub:**
  - `home.json` - Hero, Partners, Stats
  - `about.json` - About page content
  - `contact.json` - Contact page content
  - `events.json` - Events and calendar
  - `get-involved.json` - Volunteer, Donate, Partner
  - `team.json` - Team members
  - `members.json` - Coalition members directory
  - `legal.json` - Terms, Privacy, Legal policies
  - `site.json` - Footer, Social links, CTA banner
- **Git:** 5 commits pushed (all synced)
- **Version: 2.3.0** - Full CMS Coverage

### April 7, 2026 - Session 11: Power Hub Production Ready & Content Updates
- **Fixed Deployment Crash:** Events page crashed when empty events existed
  - Added `parseDateParts()` helper for safe date parsing
  - Added filter to skip events with empty title/date
  - Removed empty event objects from events.json
- **Power Hub Now Works in Production:**
  - Added GitHub environment variables to Vercel:
    - `GITHUB_TOKEN` - New PAT (classic) for API access
    - `GITHUB_OWNER` - murrayp4pcoalition
    - `GITHUB_REPO` - P4P-Website
    - `GITHUB_BRANCH` - main
  - Content API uses GitHub REST API (not git CLI)
  - Staff can now edit content independently without Brett
- **Events Page Updated:** 15 upcoming events with "Event" badge
  - April 6: Pinwheels for Child Abuse Awareness Month
  - April 7: Murray Coalition presentation to City Council
  - April 8: Murray Youth Community Council Meeting
  - April 28: Murray P4P Coalition Meeting
  - May 18: MHS Awards/Scholarship Banquet
  - May 19: Murray P4P Coalition Meeting
  - June 13: Community Block Party
  - July 4: 4th of July Parade - Hand Out Flags
  - Plus monthly coalition meetings through December
- **Team Page Updated:**
  - Coalition Staff: Sheri Van Bibber (Director), Sierra Marsh (Chair), Tori Jensen (Admin), Murray Chamber Foundation (Treasurer)
  - Key Leaders: 34 community leaders
  - Board Members: 64 members alphabetically
- **Git:** 5 new commits pushed
- **Staff Self-Sufficient:** P4P team can now manage all content via Power Hub
- **Version: 2.4.0** - Production CMS

### April 16, 2026 - Session 12: GIFT CONNECT Parenting Suite Page
- **New Page:** `/resources/parenting-suite` - Promotes GIFT CONNECT Parenting Suite
  - **Status:** HIDDEN (not in navigation, accessible via direct URL only)
  - **URL:** https://murrayp4p.com/resources/parenting-suite
- **Page Features (9 Sections):**
  - Section A: Hero with background image, video thumbnail with play button
  - Section B: About the Parenting Suite
  - Section C: Download section with QR codes (App Store + Google Play)
  - Section D: Meet the Tools (Sammie, Geno, Stacey cards + Text Sammie)
  - Section E: Watch the Video (same thumbnail as hero)
  - Section F: Everything Included (10 feature icons)
  - Section G: Why Birth to Three Matters (stats)
  - Section H: Support, Privacy, Disclaimer panels
  - Section I: Closing CTA
- **Technical Implementation:**
  - Config file: `/lib/parenting-suite-config.ts` (all URLs in one place)
  - Placeholder SVGs: `/components/parenting-suite/placeholders/`
  - Video thumbnail: `/public/images/parenting-suite/video-thumbnail.png`
  - Hero background: `/public/images/parenting-suite/hero-bg.jpg`
- **GIFT CONNECT Brand Colors:**
  - Navy: `#1E3560` (primary)
  - Persimmon: `#E8682A` (accent)
  - Gold: `#F5A623` (accent only - not on white)
- **Video:** Vimeo ID 1171939931 with custom thumbnail + play button
- **Git:** 5 new commits pushed
- **Version: 2.5.0** - Parenting Suite Page (Hidden)

### May 5, 2026 - Session 13: Resources System Wired into Power Hub (PM)
- **Goal:** Make the Parenting Suite content editable by staff, and stand up a Resources framework for future pages without code edits.
- **Built:**
  - Extracted Parenting Suite content from `lib/parenting-suite-config.ts` into `content/parenting-suite.json` (links, video, features, stats, contact, SMS toggle, metadata).
  - Converted `lib/parenting-suite-config.ts` into a thin deprecation shim that re-exports the JSON.
  - Added `content/resources-index.json` — master list of resources (slug, navLabel, cardTitle, cardDescription, kind, visible, order).
  - Built `/resources` hub page at `app/resources/page.tsx` (lists every visible resource as a card, sorted by `order`).
  - Built generic resource template at `app/resources/[slug]/page.tsx` with `richText`, `featureGrid`, `stats`, `callout` section types and a whitelisted icon map.
  - Switched Power Hub editor route from `[file]` to catch-all `[...file]` so subfolder paths (e.g. `resources/youth-programs`) route cleanly through Next.js.
  - Extended Power Hub content API to walk both `content/` and `content/resources/`.
  - Added tailored FILE_HELP entries for `parenting-suite` and `resources-index` in the Power Hub editor so non-technical staff have step-by-step guides.
  - Made the Navigation `Resources` dropdown data-driven from `resources-index.json` (visibility/order honored).
- **Build status:** TypeScript clean, build passes (the pre-existing `supabaseUrl is required` env-var requirement is unchanged).
- **Smoke-tested:** /resources ✔, /resources/parenting-suite ✔, /resources/<unknown> → 404 ✔, generic template via temporary `test-smoke.json` ✔.
- **Version: 2.6.0** - Power-Hub-managed Resources system
- **Commit:** `c46b383`

### May 5, 2026 - Session 14: Doc refresh
- Updated `NEXT_SESSION.md`, `RESTART-PROMPT.md`, `CLAUDE.md`, `P4P-QUICK-REFERENCE.md` to reflect v2.6.0 (Resources system, Power Hub catch-all editor, new content files, corrected the stale `vercel --prod --yes` instruction).
- No code changes.

### June 23, 2026 - Session 15: Family & Parenting Resources page
- **New page:** `/resources/family-resources` — a directory of 11 community/parenting resources sourced from the P4P “Family Resources” PDF (988, Parent Guidance, SL County Youth Services, USU Extension, The Social Institute, Parents Empowered, CHAT, Family Support Center, Project YES, Murray Children's Pantry, MCSD Family Resources). Registered in `resources-index.json` (nav + hub, order 2).
- **Generic template upgrades** (`app/resources/[slug]/page.tsx`):
  - `featureGrid` items now support optional `href` + `linkLabel` (outbound resource cards), `logo`, and `qr`.
  - `featureGrid` supports optional `columns: 2 | 3` (family-resources uses 2 for wider cards).
  - Card layout: logo top-left on a white chip (falls back to orange icon), QR bottom-right on a white chip, link text truncates so it never pushes the QR out.
- **QR codes:** generated one SVG per program under `public/images/family-resources/qr/` (web URL, or `tel:` for 988 and the pantry). Generated locally with Python `qrcode`.
- **Logos:** 11 program logos supplied by P4P live in `public/images/family-resources/logos/`.
- **Bug fix:** `app/events/page.tsx` — typed the JSON-derived arrays so an emptied `pastEvents` (from a Power Hub edit) no longer breaks the production build via TS `never[]` inference. This had likely been failing recent staff deploys.
- **Bug fix:** `/resources` hub and `/resources/[slug]` had `.aurora-bg` (position:fixed; overflow:hidden) on `<main>`, which made the pages unscrollable. Removed; aurora already renders globally in `layout.tsx`.
- **Version: 2.7.0** - Family & Parenting Resources directory

### July 2, 2026 - Session 16: Smart Events + Full Text Editability + Save Conflict Fix
- **Events auto-sort by date:** `app/events/page.tsx` now sorts events chronologically at render time. Power Hub appends new events to the bottom of the JSON — order in the file no longer matters.
- **Events auto-archive:** upcoming and past lists are merged and re-split by comparing each event's date to today (local midnight). Past events move to "Past Events" automatically — staff never touch `pastEvents` again. Past section hides when empty. Unparseable dates stay in Upcoming so events are never silently lost. Note: the split is computed at build time, so an event flips to Past on the next deploy after its date passes (any Power Hub save triggers one).
- **Power Hub save conflict auto-recovery:** `app/api/power-hub/content/route.ts` — when a save hits a stale-SHA 409 ("does not match") because the file changed on GitHub after the editor loaded it, the API refetches the current SHA and retries once (last save wins). Staff never see the cryptic error again.
- **Full text editability sweep:** every remaining hardcoded visitor-facing string moved into content JSON:
  - `site.json` → `seo` (tab title, search description, social share text), `footerHeadings`, `legalLinkLabel`
  - `home.json` → `headlineHighlight` (orange gradient phrase in hero), `partners.sectionLabel`, `partners.visitWebsiteLabel`
  - `about.json` → `whoWeAre.visionTitle`, `whoWeAre.primaryButton/secondaryButton`, `valuesSection`, `focusAreasSection`
  - `events.json` → `sections.upcoming` / `sections.past` (label + title)
  - `contact.json` → `contactInfo.emailCardTitle`, `form.labels`, `form.placeholders`, `form.submitButton`, `form.sendingText`, `form.errorMessage`
  - `get-involved.json` → `detailsHeading`
  - `resources-index.json` → `hub` (badge, title, description, emptyMessage, learnMoreLabel) — drives /resources header + metadata
- Components updated to read the new fields: `layout.tsx` (site metadata), `Hero`, `Partners`, `Footer`, about/events/contact/get-involved pages, resources hub.
- **Kept in code on purpose:** members-page category list + tier labels (filter machinery tied to Power Hub data values — editing would break filtering).
- **Content:** added July 5 "Potluck America" event (staff's mid-session Power Hub save merged cleanly via the new auto-retry); removed a leftover empty event object.
- **Verified live:** murrayp4p.com/events auto-sorted + June 23 auto-archived; home + resources rendering JSON-driven labels.
- **Version: 2.8.0** - Smart Events & Total CMS Coverage
