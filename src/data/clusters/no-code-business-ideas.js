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
  slug: 'no-code-business-ideas',
  title: 'No-Code Business Ideas',
  h1: 'No-Code Business Ideas You Can Ship Without an Engineer',
  audience: 'founders',
  seoTitle: 'No-Code Business Ideas (2026): 6 Validated, Buildable Ideas',
  seoDescription:
    'Six validated no-code business ideas built with Bubble, Softr, Glide, Airtable, Make and Webflow. Real demand, difficulty, monetisation and a starter stack.',
  updated: '2026-06-27',
  intro:
    'No-code tools are now good enough to run a real business on, not just a prototype. The six ideas below are each buildable by a non-engineer in weeks, target a buyer who already pays for solutions, and lean on Bubble, Softr, Glide, Airtable, Make and Webflow so you spend your time on customers rather than code.',
  ideas: [
    {
      name: 'Booking and roster portal for small clinics',
      pitch: 'A branded client portal where physio, dental or beauty clinics manage appointments, intake forms and staff rosters, built on Softr over an Airtable base.',
      problem: 'Tiny health and wellness businesses juggle paper diaries and three apps, so they double-book and lose no-show fees.',
      demand: 'High',
      difficulty: 'Low',
      timeToMvp: '2-3 weeks',
      monetisation: 'Per-clinic subscription, 40 to 90 GBP per month, sold one practice at a time.',
      stack: ['Softr', 'Airtable', 'Make', 'Stripe'],
      firstStep: 'Set one local clinic up free for a month and track the no-show fees it recovers.',
      tools: [
        { name: 'Softr', url: 'https://softr.io' },
        { name: 'Airtable', url: 'https://airtable.com' },
      ],
    },
    {
      name: 'Field-service job app for trades',
      pitch: 'A mobile app for plumbers, electricians and gardeners to log jobs, capture photos, get sign-off and raise invoices on site, built in Glide.',
      problem: 'Sole traders forget to invoice or lose proof of work, so cash leaks and disputes drag on.',
      demand: 'High',
      difficulty: 'Low',
      timeToMvp: '2-4 weeks',
      monetisation: 'Per-seat subscription, 15 to 30 GBP per user per month, plus a setup fee.',
      stack: ['Glide', 'Airtable', 'Zapier', 'Stripe'],
      firstStep: 'Shadow one trades business for a week and rebuild their exact job sheet inside Glide.',
      tools: [
        { name: 'Glide', url: 'https://glideapps.com' },
        { name: 'Zapier', url: 'https://zapier.com' },
      ],
    },
    {
      name: 'Members directory and community for niche associations',
      pitch: 'A paid members area plus searchable directory for small trade bodies, alumni groups and hobby associations, built on Webflow with a Memberstack gate.',
      problem: 'Niche associations run on spreadsheets and an old forum, so members churn and dues collection is chaos.',
      demand: 'Medium',
      difficulty: 'Medium',
      timeToMvp: '3-5 weeks',
      monetisation: 'Build fee, 1,500 to 4,000 GBP, plus a monthly management retainer per association.',
      stack: ['Webflow', 'Memberstack', 'Airtable', 'Make'],
      firstStep: 'Migrate one small association member list and run their next renewal cycle through it.',
      tools: [
        { name: 'Webflow', url: 'https://webflow.com' },
        { name: 'Make', url: 'https://make.com' },
      ],
    },
    {
      name: 'Productised internal dashboards for agencies',
      pitch: 'A service that builds client-reporting and project dashboards for marketing agencies on Softr and Airtable, sold as a fixed package they rebrand.',
      problem: 'Agencies waste billable hours hand-building client reports and have nowhere clean to show live progress.',
      demand: 'Medium',
      difficulty: 'Low',
      timeToMvp: '1-3 weeks',
      monetisation: 'Fixed build fee, 800 to 2,000 GBP, plus an optional care plan per dashboard.',
      stack: ['Softr', 'Airtable', 'Make', 'Stripe'],
      firstStep: 'Build one reporting dashboard for a friendly agency and let them show it to their next client.',
      tools: [
        { name: 'Softr', url: 'https://softr.io' },
        { name: 'Airtable', url: 'https://airtable.com' },
      ],
    },
    {
      name: 'Rental inventory and deposit tracker for hire businesses',
      pitch: 'An app for equipment, party and tool hire firms to track stock, bookings, condition photos and deposits, built in Bubble.',
      problem: 'Hire businesses lose kit and argue over deposits because availability and condition live in someone head.',
      demand: 'Medium',
      difficulty: 'Medium',
      timeToMvp: '4-6 weeks',
      monetisation: 'Per-business subscription, 50 to 120 GBP per month, tiered by inventory size.',
      stack: ['Bubble', 'Airtable', 'Make', 'Stripe'],
      firstStep: 'Digitise one party-hire firm full inventory and run their busiest weekend through the tool.',
      tools: [
        { name: 'Bubble', url: 'https://bubble.io' },
        { name: 'Stripe', url: 'https://stripe.com' },
      ],
    },
    {
      name: 'Lead-capture microsites for local service providers',
      pitch: 'A done-for-you offer building fast, conversion-focused landing sites with quote forms for tradespeople and local services, built in Webflow and wired to their inbox.',
      problem: 'Local providers rely on a dated Facebook page, so they miss enquiries and cannot run paid ads anywhere sensible.',
      demand: 'High',
      difficulty: 'Low',
      timeToMvp: '1-2 weeks',
      monetisation: 'Build fee, 600 to 1,200 GBP, plus a hosting and edits retainer of 30 to 60 GBP per month.',
      stack: ['Webflow', 'Make', 'Zapier', 'Stripe'],
      firstStep: 'Build one microsite on spec for a busy local trader and split-test it against their old page.',
      tools: [
        { name: 'Webflow', url: 'https://webflow.com' },
        { name: 'Zapier', url: 'https://zapier.com' },
      ],
    },
  ],
};
