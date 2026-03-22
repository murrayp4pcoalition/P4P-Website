# Murray Partners 4 Prevention Website - Project Instructions

## Project Overview

**Project Name:** Murray Partners 4 Prevention (P4P) Coalition Website
**Version:** 2.1.0
**Created:** February 11, 2026
**Last Updated:** March 22, 2026 (Session 8)
**Status:** 🚀 LIVE at murrayp4p.com - Production with Power Hub CMS!

### Quick Links
- **Production URL:** https://murrayp4p.com/
- **Power Hub CMS:** https://murrayp4p.com/power-hub
- **GitHub Repo:** https://github.com/murrayp4pcoalition/P4P-Website (PRIVATE)
- **Vercel Dashboard:** https://vercel.com/murrayp4pcoalitions-projects/p4-p-website
- **Vercel Account:** murrayp4pcoalition (separate from Brett's account)

### Coalition Account Credentials
- **GitHub:** murrayp4pcoalition / murrayp4pcoalition@gmail.com
- **Vercel:** Connected via GitHub OAuth
- **Supabase:** murrayp4pcoalition@gmail.com

### Project Location
```
/Users/brettlechtenberg/Desktop/Claude Projects/P4P-Website/
```

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
│   ├── power-hub/         # 🆕 Embedded CMS (hidden from public)
│   │   ├── page.tsx       # Login page
│   │   ├── layout.tsx     # noindex/nofollow metadata
│   │   └── dashboard/
│   │       ├── page.tsx           # Dashboard home
│   │       ├── layout.tsx         # Sidebar + auth check
│   │       ├── content/page.tsx   # Content files list
│   │       ├── content/[file]/page.tsx  # JSON editor
│   │       └── settings/page.tsx  # Site info & links
│   └── api/power-hub/     # 🆕 CMS API routes
│       ├── auth/route.ts          # Login/verify token
│       ├── content/route.ts       # Read/write JSON files
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
├── content/               # 🆕 JSON content files (editable via Power Hub)
│   ├── home.json          # Hero, Partners, Stats data
│   └── about.json         # About page content
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
cd "/Users/brettlechtenberg/Desktop/Claude Projects/P4P-Website"

# Development
npm run dev          # Start dev server (usually localhost:3000)

# Build & Deploy
npm run build        # Build for production
vercel --prod --yes  # Deploy to Vercel (ALWAYS use CLI)

# Git operations
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
- [ ] Contact form: Connect to backend (currently shows success message)
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
- **MACC Project:** `/Users/brettlechtenberg/Desktop/Claude Projects/MACC-Website/`

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
