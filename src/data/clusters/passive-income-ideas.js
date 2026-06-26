/**
 * Cluster schema (every file in this folder default-exports one of these):
 * {
 *   slug, title, h1, audience, seoTitle, seoDescription, updated,
 *   intro,            // 2-3 sentence lede
 *   ideas: [{
 *     name, pitch, problem,
 *     demand: 'High'|'Medium'|'Emerging',
 *     difficulty: 'Low'|'Medium'|'High',
 *     timeToMvp, monetisation, stack: [], firstStep,
 *     tools: [{ name, url }]      // tool tie-ins (affiliate-ready)
 *   }]
 * }
 */
export default {
  slug: 'passive-income-ideas',
  title: 'Passive Income Ideas',
  h1: 'Passive Income Ideas a Builder Can Actually Sustain',
  audience: 'creators',
  seoTitle: 'Passive Income Ideas (2026): 6 Validated, Low-Upkeep Ideas',
  seoDescription:
    'Six validated passive income ideas with real demand, build difficulty, monetisation and a starter stack. Digital assets that earn after the work is done.',
  updated: '2026-06-27',
  intro:
    'Passive income is never truly passive, but the right digital asset front-loads the effort and then earns with light upkeep. The ideas below favour productised templates, niche content and automated delivery, so once they are live your main job is distribution rather than fulfilment.',
  ideas: [
    {
      name: 'Notion template shop for a single profession',
      pitch: 'A tight bundle of Notion systems built for one job, such as freelance illustrators, sold as a one-off purchase with instant delivery.',
      problem: 'Generic productivity templates do not fit specialised workflows, so professionals waste hours rebuilding the same setup.',
      demand: 'High',
      difficulty: 'Low',
      timeToMvp: '2-3 weeks',
      monetisation: 'One-off digital sales from 19 to 49 pounds per bundle through a hosted storefront, no fulfilment per order.',
      stack: ['Notion', 'Gumroad', 'Astro'],
      firstStep: 'Find a profession you understand, study their complaints in a niche community, and build the one system they keep asking for.',
      tools: [
        { name: 'Gumroad', url: 'https://gumroad.com' },
        { name: 'Notion', url: 'https://www.notion.so' },
      ],
    },
    {
      name: 'Paid niche newsletter with sponsor slots',
      pitch: 'A weekly briefing for one narrow industry that earns from a paid tier and a single recurring sponsor block.',
      problem: 'Busy professionals cannot keep up with their own field and will pay for a trusted person to filter the noise.',
      demand: 'High',
      difficulty: 'Medium',
      timeToMvp: '4-6 weeks',
      monetisation: 'Paid subscriptions around 6 pounds per month plus a sponsor slot once the list passes a few thousand readers.',
      stack: ['Beehiiv', 'Astro', 'Stripe'],
      firstStep: 'Publish four free issues to test whether you can sustain the cadence before you ever ask for money.',
      tools: [
        { name: 'Beehiiv', url: 'https://www.beehiiv.com' },
        { name: 'Stripe', url: 'https://stripe.com' },
      ],
    },
    {
      name: 'Print-on-demand wall art for a defined aesthetic',
      pitch: 'A focused collection of downloadable and printed art around one clear style, listed where that audience already shops.',
      problem: 'Buyers searching for a specific aesthetic wade through generic stores and rarely find a coherent matching set.',
      demand: 'Medium',
      difficulty: 'Low',
      timeToMvp: '2-4 weeks',
      monetisation: 'Print-on-demand margin per order plus higher-margin instant digital downloads, fulfilment handled by the supplier.',
      stack: ['Printful', 'Shopify', 'Cloudflare'],
      firstStep: 'Validate one aesthetic by listing ten digital prints and seeing which single style converts before scaling the set.',
      tools: [
        { name: 'Printful', url: 'https://www.printful.com' },
        { name: 'Shopify', url: 'https://www.shopify.com' },
      ],
    },
    {
      name: 'Stock audio pack library for video editors',
      pitch: 'Curated packs of loops, transitions and sound effects for one content niche, sold as licensed downloads.',
      problem: 'Editors burn time hunting for affordable sound that fits a specific mood and licence terms they can trust.',
      demand: 'Medium',
      difficulty: 'Medium',
      timeToMvp: '4-6 weeks',
      monetisation: 'One-off pack sales from 12 to 35 pounds plus an all-access licence tier, delivered automatically on payment.',
      stack: ['Astro', 'Cloudflare R2', 'Lemon Squeezy'],
      firstStep: 'Release one free pack to a single editing community and measure downloads before producing a paid catalogue.',
      tools: [
        { name: 'Cloudflare', url: 'https://www.cloudflare.com' },
        { name: 'Lemon Squeezy', url: 'https://www.lemonsqueezy.com' },
      ],
    },
    {
      name: 'Niche programmatic comparison site',
      pitch: 'A data-driven site that compares options in one boring vertical, earning from affiliate links and display ads once indexed.',
      problem: 'People researching a purchase want a clear side-by-side answer, but most pages are thin and out of date.',
      demand: 'Medium',
      difficulty: 'Medium',
      timeToMvp: '5-7 weeks',
      monetisation: 'Affiliate commission and display revenue that compounds as organic traffic grows with minimal ongoing edits.',
      stack: ['Astro', 'Turso', 'Cloudflare Pages'],
      firstStep: 'Pick a vertical with real search demand and weak incumbents, then publish twenty solid comparison pages and watch indexing.',
      tools: [
        { name: 'Cloudflare', url: 'https://www.cloudflare.com' },
        { name: 'Turso', url: 'https://turso.tech' },
      ],
    },
    {
      name: 'Automated personalised PDF report generator',
      pitch: 'Buyers answer a short quiz and instantly receive a tailored report or plan, generated and delivered without you touching it.',
      problem: 'People want advice specific to their situation, not a generic ebook, but bespoke reports normally need a human each time.',
      demand: 'Emerging',
      difficulty: 'Medium',
      timeToMvp: '4-6 weeks',
      monetisation: 'One-off purchase from 9 to 29 pounds per personalised report, with fully automated delivery and zero per-sale work.',
      stack: ['Next.js', 'Supabase', 'Resend', 'Stripe'],
      firstStep: 'Build one quiz to report flow for a niche you know and sell ten copies manually before automating delivery.',
      tools: [
        { name: 'Resend', url: 'https://resend.com' },
        { name: 'Stripe', url: 'https://stripe.com' },
      ],
    },
  ],
};
