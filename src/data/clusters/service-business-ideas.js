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
  slug: 'service-business-ideas',
  title: 'Service Business Ideas',
  h1: 'Service Business Ideas With a Clear Buyer and Scope',
  audience: 'service providers',
  seoTitle: 'Service Business Ideas (2026): 6 Productised Models',
  seoDescription:
    'Six validated service business ideas with real demand, difficulty, monetisation and a starter stack. Productised services with a clear deliverable and buyer.',
  updated: '2026-06-27',
  intro:
    'A productised service sells a fixed deliverable at a fixed price, so you stop quoting from scratch and start running a repeatable line. Each idea below names the exact buyer, the scope they pay for and a first step you can test this week with no team and almost no cost.',
  ideas: [
    {
      name: 'Local business review reply service',
      pitch:
        'A monthly retainer that monitors and writes on-brand replies to every Google review a local business gets, good or bad.',
      problem:
        'Owners know replies help reputation and local ranking, but they never find time, so reviews sit ignored for weeks.',
      demand: 'Medium',
      difficulty: 'Low',
      timeToMvp: '1 week',
      monetisation:
        'Flat retainer around 90 to 150 pounds per month per location, billed in advance.',
      stack: ['Google Business Profile', 'Stripe', 'Notion'],
      firstStep:
        'Offer three local firms a free week of replies, then convert the ones who see new review responses come in.',
      tools: [
        { name: 'Stripe', url: 'https://stripe.com' },
        { name: 'Notion', url: 'https://notion.so' },
      ],
    },
    {
      name: 'Done-for-you onboarding email flows',
      pitch:
        'A fixed package that writes and builds a five to seven email welcome sequence inside a client existing email tool.',
      problem:
        'Small ecommerce and SaaS teams collect signups but never set up the welcome flow that converts them, leaving easy revenue on the table.',
      demand: 'High',
      difficulty: 'Low',
      timeToMvp: '1-2 weeks',
      monetisation:
        'Fixed project fee from 400 to 800 pounds, with an optional monthly testing retainer afterwards.',
      stack: ['Kit', 'Stripe', 'Notion'],
      firstStep:
        'Audit one prospect signup flow for free and show the gaps, then quote the build as a fixed package.',
      tools: [
        { name: 'Kit', url: 'https://kit.com' },
        { name: 'Stripe', url: 'https://stripe.com' },
      ],
    },
    {
      name: 'One-page Webflow site sprint for trades',
      pitch:
        'A two-day sprint that delivers a fast, bookings-focused single page site for plumbers, electricians and other trades.',
      problem:
        'Tradespeople rely on word of mouth and a stale Facebook page, so they lose jobs to competitors who show up cleanly in search.',
      demand: 'Medium',
      difficulty: 'Medium',
      timeToMvp: '2-3 weeks',
      monetisation:
        'Fixed build fee around 600 to 900 pounds plus a small monthly hosting and edits care plan.',
      stack: ['Webflow', 'Stripe', 'Cal.com'],
      firstStep:
        'Build one polished sample page for a fictional local trade, then show it to five real tradespeople as the exact thing they would get.',
      tools: [
        { name: 'Webflow', url: 'https://webflow.com' },
        { name: 'Cal.com', url: 'https://cal.com' },
      ],
    },
    {
      name: 'Podcast to written assets repurposing',
      pitch:
        'Each episode a creator records becomes show notes, three social posts and a short newsletter, delivered on a fixed weekly schedule.',
      problem:
        'Podcasters publish audio then run out of energy to turn it into the text content that actually drives discovery and growth.',
      demand: 'Medium',
      difficulty: 'Low',
      timeToMvp: '1 week',
      monetisation:
        'Per-episode price around 60 to 120 pounds, sold as a monthly bundle of four episodes.',
      stack: ['Descript', 'Notion', 'Stripe'],
      firstStep:
        'Pick one podcast you admire, repurpose a recent episode for free and send it over as a sample of the weekly service.',
      tools: [
        { name: 'Descript', url: 'https://descript.com' },
        { name: 'Notion', url: 'https://notion.so' },
      ],
    },
    {
      name: 'Bookkeeping cleanup before year end',
      pitch:
        'A scoped one-off project that tidies a sole trader or small firm accounts, reconciles the year and hands over clean books ready for the accountant.',
      problem:
        'Owners dread the shoebox of receipts and messy software, and their accountant charges a fortune to untangle it at the deadline.',
      demand: 'Medium',
      difficulty: 'Medium',
      timeToMvp: '2-3 weeks',
      monetisation:
        'Fixed cleanup fee from 250 to 600 pounds per job, scoped by number of transactions.',
      stack: ['Xero', 'Stripe', 'Notion'],
      firstStep:
        'Offer a free thirty minute books health check to two small firms, then quote the cleanup as a fixed deliverable.',
      tools: [
        { name: 'Xero', url: 'https://xero.com' },
        { name: 'Stripe', url: 'https://stripe.com' },
      ],
    },
    {
      name: 'AI workflow setup for small teams',
      pitch:
        'A fixed engagement that maps one painful manual process in a small team and wires up an automation that runs it for them.',
      problem:
        'Owners hear that automation could save hours but have no time to learn the tools or stitch them together themselves.',
      demand: 'Emerging',
      difficulty: 'Medium',
      timeToMvp: '2-4 weeks',
      monetisation:
        'Fixed setup fee from 500 to 1200 pounds plus an optional monthly maintenance retainer.',
      stack: ['Zapier', 'Airtable', 'Stripe'],
      firstStep:
        'Ask three local owners which repetitive task eats the most time, then build a single working automation as a paid pilot.',
      tools: [
        { name: 'Zapier', url: 'https://zapier.com' },
        { name: 'Airtable', url: 'https://airtable.com' },
      ],
    },
  ],
};
