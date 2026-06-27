# ideeeas.com — repo brain

Astro 5 + Tailwind 4 static content site. A growing library of **validated startup & side-project ideas**, each with demand / difficulty / monetisation / starter stack / first step.

## Why this domain
Aged brandable ("ideeeas" = ideas) Sunny already owned. Real legacy authority in the builders/design/startup-tech niche: a **DR90 dofollow link from Smashing Magazine**, DR89 TheNextWeb (nofollow), wwwhatsnew, theoldreader, cssmania, tableless.com.br. ~199 real referring domains but value concentrated in ~10. Original ~2010 startup ("share your idea with two images and one tweet"). Built 2026-06-27 to inherit that topical relevance.

## Design (current: terminal / maker mono)
Live look is **terminal/maker mono**: near-black `#0a0b0d` canvas, faint phosphor grid, **JetBrains Mono** everywhere, amber `#ffb000` + green `#3ef0a0` CRT accents. Primitives in `global.css`: `.term-box` (schematic fieldset with `.legend` label), `.term-hover`, `.btn-term`/`.btn-ghost` bracket buttons, `.prompt` (`$ ` prefix), `.caret` (blinking), `.rule` dashed divider, `.spark-link` dashed-underline. IdeaCard uses ASCII difficulty meter (`█░`) + `[HIGH/MED/NEW]` demand tags. Three earlier concepts in git history: paper+spark-orange (initial) → dark-glass kinetic (violet→cyan) → neo-brutalist colour-block (rejected: "ew"). To switch concept, swap `global.css` tokens/utilities + per-component classes + fonts in `Base.astro`. Favicon + OG match the active theme. (`src/data/palette.js` was a brutalist-only helper, now deleted.)

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

## DONE (2026-06-27)
- [x] LIVE on https://ideeeas.pages.dev (production wrangler deploy, all routes 200).
- [x] StaticForms key wired (`sf_9e906eb6c00416b9d3354749`, shared portfolio key, `_site` attribution).
- [x] Affiliate tool links use `rel="nofollow sponsored noopener noreferrer"`.
- [x] `.github/workflows/deploy.yml` added (push master = deploy, needs secrets below).

## OPEN / TODO (Sunny's manual steps)
- [ ] **Auto-deploy:** add repo secrets `CF_API_KEY` (main-acct global key) + `CF_EMAIL` (sunnypat81@gmail.com) to github.com/sunnyp81/ideeeas, OR connect the repo in CF Pages dashboard (build `npm run build`, output `dist`, NODE_VERSION=22). Until then deploy manually with `npm run deploy`.
- [ ] **Custom domain + DNS:** attach ideeeas.com to the Pages project + point DNS (CNAME → ideeeas.pages.dev, proxied) in the CF account holding the zone.
- [ ] Upload `disavow.txt` (83 toxic .shop/.top PBN domains) in GSC — spam wave actively hitting the domain.
- [ ] Swap placeholder tool URLs for real affiliate IDs.
- [ ] Submit sitemap to GSC + Bing once domain is live.
- [ ] Optional: Satori OG to replace the SVG-derived `public/og-default.png`; internal-link plan to land the legacy Smashing/TNW relevance.
