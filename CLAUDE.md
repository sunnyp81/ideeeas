# ideeeas.com — repo brain

Astro 5 + Tailwind 4 static content site. A growing library of **validated startup & side-project ideas**, each with demand / difficulty / monetisation / starter stack / first step.

## Why this domain
Aged brandable ("ideeeas" = ideas) Sunny already owned. Real legacy authority in the builders/design/startup-tech niche: a **DR90 dofollow link from Smashing Magazine**, DR89 TheNextWeb (nofollow), wwwhatsnew, theoldreader, cssmania, tableless.com.br. ~199 real referring domains but value concentrated in ~10. Original ~2010 startup ("share your idea with two images and one tweet"). Built 2026-06-27 to inherit that topical relevance.

## Design (current: vibrant neon terminal)
Live look is **vibrant neon terminal** (dark tech base, made to pop): near-black `#07070e` canvas with corner aurora glows over a faint grid, **JetBrains Mono** everywhere, multi-hue neon palette in `src/data/neon.js` (`pickNeon(i)` → cyan/magenta/lime/violet/orange/blue/mint/yellow) giving each collection/card its own colour identity. `global.css` primitives: `.term-box` (uses per-item `--c` CSS var for border tint + `.legend` + hover glow bloom), `.term-hover`, `.btn-neon` (animated gradient fill + glow) / `.btn-wire` (neon outline), `.grad-text` (animated cyan→violet→magenta), `.glow` (currentColor text-shadow), `.prompt`, `.caret`, `.rule` (rainbow divider), `.spark-link`. Pages pass `style={--c:${pickNeon(i)}}` to colour cards; IdeaCard colours its demand tag + ASCII difficulty meter per card. Earlier concepts in git history: paper+spark-orange → dark-glass kinetic → neo-brutalist (rejected "ew") → mono amber/green terminal. To re-skin: swap `global.css` tokens/utilities + per-component classes (+ fonts in `Base.astro`). Favicon + OG match.

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
