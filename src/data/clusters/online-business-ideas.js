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
  slug: 'online-business-ideas',
  title: 'Online Business Ideas',
  h1: 'Online Business Ideas With Real, Provable Demand',
  audience: 'founders',
  seoTitle: 'Online Business Ideas (2026): 6 Validated Ideas',
  seoDescription:
    'Six validated online business ideas with real demand, difficulty, monetisation and a starter stack. No fluff, just buildable opportunities.',
  updated: '2026-06-27',
  intro:
    'The cheapest businesses to start are the ones where the buyer already pays for a worse version of the outcome. Each of these six online ideas targets a job people search for today, so you can charge before you scale. Demand here is rated on observable behaviour: existing spend, recurring complaints and search volume, not wishful thinking.',
  ideas: [
    {
      name: 'Niche resale arbitrage newsletter',
      pitch:
        'A paid newsletter that surfaces underpriced collectables in one narrow category, vintage synths or film cameras for example, with the resale comps already worked out.',
      problem:
        'Flippers waste hours scanning listings and still miss deals because pricing knowledge lives in their heads, not a feed.',
      demand: 'High',
      difficulty: 'Low',
      timeToMvp: '2-3 weeks',
      monetisation:
        'Paid membership at 12 to 20 pounds a month, plus affiliate links to grading and shipping services.',
      stack: ['Ghost', 'Stripe', 'Zapier'],
      firstStep:
        'Run the deal feed free for 30 days in one category and count how many subscribers actually buy a flagged item.',
      tools: [
        { name: 'Ghost', url: 'https://ghost.org' },
        { name: 'Stripe', url: 'https://stripe.com' },
      ],
    },
    {
      name: 'Made-to-order pet portrait shop',
      pitch:
        'A storefront selling custom illustrated pet portraits with a clean upload-to-proof flow and fast turnaround.',
      problem:
        'Pet owners want personalised art but most options are slow Etsy back-and-forths with unclear pricing and inconsistent quality.',
      demand: 'High',
      difficulty: 'Low',
      timeToMvp: '2-4 weeks',
      monetisation:
        'Fixed-price digital portrait from 35 pounds, framed print upsell from 65 pounds, repeat gifting demand at holidays.',
      stack: ['Shopify', 'Printful', 'Stripe'],
      firstStep:
        'List three sample styles, run 50 pounds of targeted ads at dog owner groups and measure cost per paid order.',
      tools: [
        { name: 'Shopify', url: 'https://www.shopify.com' },
        { name: 'Printful', url: 'https://www.printful.com' },
      ],
    },
    {
      name: 'Local trades booking microsite service',
      pitch:
        'A productised service that builds and hosts a fast booking microsite for individual plumbers, electricians and gardeners on a monthly plan.',
      problem:
        'Sole traders lose jobs because their only presence is a Facebook page with no clear way to request a quote or check availability.',
      demand: 'High',
      difficulty: 'Medium',
      timeToMvp: '4-6 weeks',
      monetisation:
        'Setup fee of 250 pounds plus 30 to 50 pounds a month hosting and edits, sold one trade at a time.',
      stack: ['Astro', 'Cal.com', 'Cloudflare Pages'],
      firstStep:
        'Build one site free for a friendly local trade and track whether it produces booked jobs within a fortnight.',
      tools: [
        { name: 'Cal.com', url: 'https://cal.com' },
        { name: 'Cloudflare Pages', url: 'https://pages.cloudflare.com' },
      ],
    },
    {
      name: 'Allergen-safe recipe membership',
      pitch:
        'A subscription recipe site for one specific dietary constraint, low-histamine or coeliac-safe cooking, with weekly meal plans and shopping lists.',
      problem:
        'People with strict dietary needs spend hours cross-checking ingredients because generic recipe sites bury or mislabel allergens.',
      demand: 'Medium',
      difficulty: 'Low',
      timeToMvp: '3-5 weeks',
      monetisation:
        'Membership at 8 to 12 pounds a month, plus affiliate links to specialist food brands and kitchen tools.',
      stack: ['Astro', 'Supabase', 'Stripe'],
      firstStep:
        'Publish four weeks of free meal plans for one constraint and measure email signups and weekly return visits.',
      tools: [
        { name: 'Supabase', url: 'https://supabase.com' },
        { name: 'Stripe', url: 'https://stripe.com' },
      ],
    },
    {
      name: 'Used gear inspection report service',
      pitch:
        'A service where buyers of expensive second-hand items, e-bikes or designer watches, pay for a structured remote inspection and authenticity report before they buy.',
      problem:
        'Buyers spending hundreds on used goods have no neutral way to check condition or authenticity and fear getting scammed.',
      demand: 'Emerging',
      difficulty: 'Medium',
      timeToMvp: '3-5 weeks',
      monetisation:
        'Per-report fee of 25 to 60 pounds depending on item value, with a rush tier for time-pressured buyers.',
      stack: ['Next.js', 'Stripe', 'Cloudinary'],
      firstStep:
        'Offer the report manually in two enthusiast forums and see how many buyers pay for ten real inspections.',
      tools: [
        { name: 'Stripe', url: 'https://stripe.com' },
        { name: 'Cloudinary', url: 'https://cloudinary.com' },
      ],
    },
    {
      name: 'Hobby skill cohort courses',
      pitch:
        'Small live cohort courses teaching one practical hobby skill well, sourdough baking or pottery glazing, with feedback instead of passive video.',
      problem:
        'Self-paced video courses have terrible completion rates because learners get stuck and stop, so they never get the result they paid for.',
      demand: 'Medium',
      difficulty: 'Low',
      timeToMvp: '2-3 weeks',
      monetisation:
        'Cohort seats at 80 to 150 pounds for a four-week run, capped numbers, repeated monthly.',
      stack: ['Zoom', 'Notion', 'Stripe'],
      firstStep:
        'Sell ten seats for a single cohort before recording anything and run it live to confirm people finish and refer others.',
      tools: [
        { name: 'Notion', url: 'https://www.notion.so' },
        { name: 'Stripe', url: 'https://stripe.com' },
      ],
    },
  ],
};
