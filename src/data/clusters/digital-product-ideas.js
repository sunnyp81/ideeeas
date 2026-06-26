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
  slug: 'digital-product-ideas',
  title: 'Digital Product Ideas',
  h1: 'Digital Product Ideas You Can Make Once and Sell Forever',
  audience: 'creators',
  seoTitle: 'Digital Product Ideas (2026): 6 Sellable Assets',
  seoDescription:
    'Six validated digital product ideas with a named buyer, a sales channel, real demand, build difficulty and pricing. Templates, systems, packs and datasets.',
  updated: '2026-06-27',
  intro:
    'The best digital products solve a narrow, repeated job for a buyer who already spends money to get it done. Each idea below names the exact buyer and the channel where they shop, so you can validate with a single pre-sell before you build the full asset.',
  ideas: [
    {
      name: 'Notion system for freelance client onboarding',
      pitch:
        'A ready-to-use Notion workspace that takes a new client from enquiry through proposal, contract checklist, kickoff and deliverable tracking in one duplicatable template.',
      problem:
        'Freelancers rebuild the same messy onboarding from scratch for every client and lose hours plus look unprofessional during the first impression.',
      demand: 'Medium',
      difficulty: 'Low',
      timeToMvp: '1-2 weeks',
      monetisation:
        'One-off sale around 29 to 49 pounds on Gumroad, sold to freelancers through design and freelancing communities and a few short demo videos.',
      stack: ['Notion', 'Gumroad'],
      firstStep:
        'Post a screen recording of the workspace in a freelancing community and offer a pre-sale at half price to the first twenty buyers.',
      tools: [
        { name: 'Notion', url: 'https://notion.so' },
        { name: 'Gumroad', url: 'https://gumroad.com' },
      ],
    },
    {
      name: 'Lightroom presets for UK property photographers',
      pitch:
        'A preset pack tuned for British interiors and grey daylight, fixing dull window light and mixed bulb colour so estate and rental listing photos look bright and true.',
      problem:
        'New property and Airbnb photographers waste time hand-editing every room and still get inconsistent, yellow-tinted results across a shoot.',
      demand: 'Medium',
      difficulty: 'Low',
      timeToMvp: '1-2 weeks',
      monetisation:
        'Pack sold around 24 pounds on Gumroad or Lemon Squeezy, marketed to property and short-let photographers via before-and-after posts.',
      stack: ['Gumroad', 'Lemon Squeezy'],
      firstStep:
        'Edit ten real listing photos with the presets, post the before-and-after set, and gauge demand before finalising the pack.',
      tools: [
        { name: 'Gumroad', url: 'https://gumroad.com' },
        { name: 'Lemon Squeezy', url: 'https://lemonsqueezy.com' },
      ],
    },
    {
      name: 'Compliance-ready policy pack for UK micro-businesses',
      pitch:
        'A bundle of plain-English, fill-in-the-blank policy documents covering data protection, health and safety basics and terms, written for sole traders and tiny limited companies.',
      problem:
        'Micro-business owners know they should have these documents but solicitor quotes feel huge and free templates are vague or clearly written for other countries.',
      demand: 'Medium',
      difficulty: 'Medium',
      timeToMvp: '2-3 weeks',
      monetisation:
        'One-off bundle around 39 to 59 pounds on Lemon Squeezy, sold to new business owners through small-business groups and accountant referrals.',
      stack: ['Lemon Squeezy', 'Google Docs'],
      firstStep:
        'Draft one polished policy template, offer it free in a small-business group in exchange for emails, and pitch the paid bundle to the most engaged.',
      tools: [
        { name: 'Lemon Squeezy', url: 'https://lemonsqueezy.com' },
        { name: 'Google Docs', url: 'https://docs.google.com' },
      ],
    },
    {
      name: 'Mini course on pricing for first-time freelancers',
      pitch:
        'A short, focused video course that walks a new freelancer through setting day rates, writing proposals that hold price and handling discount requests without panic.',
      problem:
        'First-time freelancers chronically underprice, cave on every discount ask, and burn out doing too much work for too little money.',
      demand: 'Medium',
      difficulty: 'Medium',
      timeToMvp: '3-4 weeks',
      monetisation:
        'Course priced around 79 pounds on Teachable, sold through a free pricing calculator lead magnet and freelancing newsletters.',
      stack: ['Teachable', 'Kit'],
      firstStep:
        'Run the material live once as a paid two-hour workshop, record it, and use the questions asked to shape the polished course.',
      tools: [
        { name: 'Teachable', url: 'https://teachable.com' },
        { name: 'Kit', url: 'https://kit.com' },
      ],
    },
    {
      name: 'Curated UK supplier dataset for ecommerce sellers',
      pitch:
        'A maintained spreadsheet of vetted UK and EU dropship and wholesale suppliers by product category, with minimums, lead times and contact details, updated quarterly.',
      problem:
        'New ecommerce sellers waste weeks sifting low-quality supplier directories and get burned by scammy or unresponsive sources hidden among the listings.',
      demand: 'Medium',
      difficulty: 'Medium',
      timeToMvp: '2-3 weeks',
      monetisation:
        'Sold around 35 pounds for the current edition on Gumroad, with an optional 6 pound monthly update tier for the maintained version.',
      stack: ['Gumroad', 'Airtable'],
      firstStep:
        'Verify forty suppliers in one category by hand, sell that single category list cheaply, and only expand the categories buyers ask for.',
      tools: [
        { name: 'Gumroad', url: 'https://gumroad.com' },
        { name: 'Airtable', url: 'https://airtable.com' },
      ],
    },
    {
      name: 'Pitch deck template pack for early-stage founders',
      pitch:
        'A set of editable Figma and slide templates built around proven investor deck structures, with guidance notes on what each slide must prove.',
      problem:
        'First-time founders stare at a blank slide and produce cluttered, off-structure decks that bury the story investors are scanning for.',
      demand: 'Medium',
      difficulty: 'Low',
      timeToMvp: '2 weeks',
      monetisation:
        'One-off pack around 49 pounds on Lemon Squeezy, marketed to founders through startup communities and accelerator newsletters.',
      stack: ['Figma', 'Lemon Squeezy'],
      firstStep:
        'Share one annotated slide breakdown publicly, collect emails from founders who want the full pack, and pre-sell to that list.',
      tools: [
        { name: 'Figma', url: 'https://figma.com' },
        { name: 'Lemon Squeezy', url: 'https://lemonsqueezy.com' },
      ],
    },
  ],
};
