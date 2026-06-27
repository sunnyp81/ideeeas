# ideeeas.com — repo brain

Astro 5 + Tailwind 4 static content site. A growing library of **validated startup & side-project ideas**, each with demand / difficulty / monetisation / starter stack / first step.

## Why this domain
Aged brandable ("ideeeas" = ideas) Sunny already owned. Real legacy authority in the builders/design/startup-tech niche: a **DR90 dofollow link from Smashing Magazine**, DR89 TheNextWeb (nofollow), wwwhatsnew, theoldreader, cssmania, tableless.com.br. ~199 real referring domains but value concentrated in ~10. Original ~2010 startup ("share your idea with two images and one tweet"). Built 2026-06-27 to inherit that topical relevance.

## Design (current: elevated editorial, dark + teal + glass)
Latest polish pass: premium 2-col hero with a **live sample idea-card preview** in a `.panel` glass card + stat strip + `.eyebrow-pill` (glowing dot); centred **icon bento** (inline SVG per pillar via `set:html`); `.card`/`.term-box` now glassy with `.accent-top` gradient top-line + `.card-hover`/`.term-hover` lift+glow; layered gradient-mesh body bg + faint grid + vignette (`body::before`, masked); `.icon-box`, refined `.btn-neon` (gradient pill). Fonts Fraunces + Plus Jakarta Sans, single teal `#4fe0c8` accent (+ soft blue/violet cousins via `neon.js`). `.card` and legacy `.term-box` are aliased to the same rules in `global.css`.

## (superseded) elegant editorial, dark + teal
Live look (2026-06-27, latest): **Fraunces serif display** (`--font-display`, italic accent words via `.serif-i`) + **Plus Jakarta Sans** body (`--font-sans`) on the dark `#0a0c11` base with a single teal accent `#45d6c0`. Moved OFF JetBrains Mono / terminal aesthetic. `global.css`: `.eyebrow` (uppercase tracked teal label, replaces old `$`/`#` shell bits), `.term-box` (now soft rounded card, `--c` accent on `.legend` + `.term-hover` lift), `.btn-neon` (pill teal) / `.btn-wire`, `.grad-text` (teal→blue), `.serif-i` (Fraunces italic), `.glow`, `.rule`, `.spark-link`, `.chip`. IdeaCard uses a clean dot difficulty meter (`●○`) and plain labels. `neon.js pickNeon(i)` returns 3 teal-family cousins for subtle per-card tonal variation. To re-skin swap `global.css` tokens/utilities + fonts in `Base.astro`. Favicon (teal mark) + OG (serif) match.

## (superseded) refined dark tech, single teal accent
Live look is **refined dark mono terminal** (the vibrant-neon was rejected as too garish/"gay", toned right down). Near-black `#0a0c11` canvas, faint grid, one subtle teal glow top-right, **JetBrains Mono** everywhere. **Single accent** teal `#3ad6c0` + neutral greys; `src/data/neon.js` `pickNeon(i)` now returns only 3 close cousins (teal/cyan/soft-blue) for subtle tonal variation, NOT a rainbow. `global.css`: `.term-box` (neutral border, `--c` accent on `.legend` + restrained hover glow), `.btn-neon` (solid teal) / `.btn-wire`, `.grad-text` (calm single-hue teal→blue, no animation), `.glow` (light text-shadow), `.prompt`/`.caret`/`.rule`/`.spark-link`. @theme keeps token names (cyan/mint/violet/magenta/yellow/etc) but all reassigned to the cohesive teal/neutral family so templates stay on-palette; `medium` demand = muted gold `#d9b271`. Design history in git: paper+orange → dark-glass kinetic → neo-brutalist (rejected) → amber/green terminal → vibrant neon (rejected, too loud) → THIS. To re-skin: swap `global.css` tokens/utilities + per-component classes (+ fonts in `Base.astro`). Favicon + OG match.

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
