# ideeeas.com — repo brain

Astro 5 + Tailwind 4 static content site. A growing library of **validated startup & side-project ideas**, each with demand / difficulty / monetisation / starter stack / first step.

## Why this domain
Aged brandable ("ideeeas" = ideas) Sunny already owned. Real legacy authority in the builders/design/startup-tech niche: a **DR90 dofollow link from Smashing Magazine**, DR89 TheNextWeb (nofollow), wwwhatsnew, theoldreader, cssmania, tableless.com.br. ~199 real referring domains but value concentrated in ~10. Original ~2010 startup ("share your idea with two images and one tweet"). Built 2026-06-27 to inherit that topical relevance.

## Architecture
- Content lives in `src/data/clusters/*.js` — one default-export object per file (schema documented at top of `ai-saas-ideas.js`). `src/data/clusters.js` globs them all (eager) and sorts by title.
- `src/pages/ideas/[slug].astro` renders each cluster (Article + ItemList + BreadcrumbList JSON-LD). `ideas/index.astro` lists all. `index.astro` = homepage hub.
- Static pages: `about.astro`, `how-to-validate-a-startup-idea.astro` (HowTo schema), `404.astro`.
- Shell: `layouts/Base.astro` (meta/OG/canonical), `components/` Header/Footer/IdeaCard/Subscribe.
- **To add a collection:** drop a new `src/data/clusters/<slug>.js` matching the schema. No routing edits needed.

## Content state (2026-06-27 launch)
16 collections, **96 ideas**. Seed pair (ai-saas, side-project-for-devs) hand-written; other 14 via parallel agents. Niche is **broad** (founders/developers/creators/beginners).

## Rules baked in
- **NO em/en dashes** anywhere (Sunny hard rule). Scan before commit: `grep -rnoP '\x{2014}|\x{2013}' src/` must be 0.
- British English. Outbound tool links are `rel="sponsored nofollow"` (affiliate-ready, not yet real affiliate IDs).
- Quality-first, NOT mass programmatic — avoids the thin-page demotion trap. Scale clusters slowly with real reasoning.

## Monetisation path
1. Affiliate links on every idea (Vercel/Supabase/Stripe/Beehiiv etc.) — swap placeholder URLs for real affiliate links.
2. Display ads once traffic warms (Ezoic/AdSense).
3. Email capture (`components/Subscribe.astro`) — StaticForms, **access_key is a placeholder `STATICFORMS_ACCESS_KEY`**, wire before go-live.

## Deploy
- `npm run dev` / `npm run build` / `npm run preview`. Build output `dist`.
- Deploy via GitHub (repo `sunnyp81/ideeeas`). CF Pages: build `npm run build`, output `dist`, NODE_VERSION=22. `npm run deploy` does a wrangler direct upload to project `ideeeas` if authed.

## OPEN / TODO before go-live
- [ ] Upload `disavow.txt` (83 toxic .shop/.top PBN domains from the Ahrefs export) in GSC — spam wave is actively hitting the domain.
- [ ] Wire real StaticForms access key in `Subscribe.astro`.
- [ ] Real affiliate IDs on tool links.
- [ ] Point ideeeas.com DNS at the deploy; submit sitemap to GSC + Bing.
- [ ] Replace SVG-derived `public/og-default.png` with a Satori-generated OG if desired.
- [ ] Land the legacy Smashing/TNW relevance: add an internal link plan + consider reclaiming the old homepage URL pattern.
