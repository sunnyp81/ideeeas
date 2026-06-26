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
  slug: 'weekend-project-ideas',
  title: 'Weekend Project Ideas',
  h1: 'Weekend Project Ideas You Can Ship in One or Two Weekends',
  audience: 'makers',
  seoTitle: 'Weekend Project Ideas (2026): 6 You Can Ship Fast',
  seoDescription:
    'Six small weekend project ideas with real demand, difficulty, monetisation and a starter stack. Each shippable in one or two weekends.',
  updated: '2026-06-27',
  intro:
    'The best weekend projects are tiny on purpose: one clear job, one clear buyer, and a scope you can actually finish before Monday. Each idea here is small enough to launch in a weekend or two, yet still has a believable path to its first pound. Ship the ugly version, then let real usage tell you what to build next.',
  ideas: [
    {
      name: 'Single-purpose countdown widget',
      pitch:
        'A tiny embeddable countdown that creators drop onto sales pages and launch sites, themed and tracked without touching code.',
      problem:
        'Marketers want urgency timers that match their brand, but most free widgets look cheap and cannot be customised quickly.',
      demand: 'Medium',
      difficulty: 'Low',
      timeToMvp: '1 weekend',
      monetisation:
        'Sell a £9 lifetime licence for the styled, no-watermark version, with a free watermarked tier to drive traffic.',
      stack: ['Astro', 'Cloudflare', 'Stripe'],
      firstStep:
        'Build one customisable timer, embed it on a demo page, and share it where indie creators gather to gauge interest.',
      tools: [
        { name: 'Cloudflare', url: 'https://cloudflare.com' },
        { name: 'Stripe', url: 'https://stripe.com' },
      ],
    },
    {
      name: 'Photo metadata cleaner',
      pitch:
        'A local web app that strips location and device metadata from photos before people share them online, all in the browser.',
      problem:
        'People unknowingly leak home locations and timestamps in shared images, and existing tools feel technical or untrustworthy.',
      demand: 'Emerging',
      difficulty: 'Low',
      timeToMvp: '1 weekend',
      monetisation:
        'Keep single images free, then charge a £4 monthly fee for batch cleaning and a one-click privacy report.',
      stack: ['Vue', 'Cloudflare', 'Stripe'],
      firstStep:
        'Ship a browser-only single-image cleaner, post it to a privacy community, and measure repeat use before adding batch mode.',
      tools: [
        { name: 'Cloudflare', url: 'https://cloudflare.com' },
        { name: 'Stripe', url: 'https://stripe.com' },
      ],
    },
    {
      name: 'Recipe-to-shopping-list converter',
      pitch:
        'Paste any recipe URL and get a clean, combined shopping list with quantities merged across several recipes for the week.',
      problem:
        'Home cooks waste time copying ingredients by hand and buying duplicates because nothing merges multiple recipes for them.',
      demand: 'Medium',
      difficulty: 'Medium',
      timeToMvp: '2 weekends',
      monetisation:
        'Free for single recipes, with a £3 monthly plan for weekly meal plans, saved lists and pantry exclusions.',
      stack: ['SvelteKit', 'Supabase', 'Stripe'],
      firstStep:
        'Support one popular recipe site cleanly, share it in a meal-prep group, and see how many people return next week.',
      tools: [
        { name: 'Supabase', url: 'https://supabase.com' },
        { name: 'Stripe', url: 'https://stripe.com' },
      ],
    },
    {
      name: 'Booking-link clash checker',
      pitch:
        'A small tool that watches several shared booking links and warns you the moment two of them could be booked into the same slot.',
      problem:
        'Freelancers juggling separate calendars and booking pages get double-booked, which burns trust with new clients.',
      demand: 'Medium',
      difficulty: 'Medium',
      timeToMvp: '2 weekends',
      monetisation:
        'Charge a flat £5 monthly fee per user, since the cost of one avoided double-booking pays for a year of the tool.',
      stack: ['Next.js', 'Google Calendar API', 'Stripe'],
      firstStep:
        'Connect two of your own calendars, trigger a real clash alert, then offer it to three freelancers you know.',
      tools: [
        { name: 'Vercel', url: 'https://vercel.com' },
        { name: 'Stripe', url: 'https://stripe.com' },
      ],
    },
    {
      name: 'Print-ready label maker',
      pitch:
        'A no-code label designer for small sellers that outputs perfectly aligned sheets of product, jar or address labels for home printers.',
      problem:
        'Makers selling jams, candles or crafts fight with wonky templates in word processors every time they need a batch of labels.',
      demand: 'Medium',
      difficulty: 'Low',
      timeToMvp: '2 weekends',
      monetisation:
        'Offer a free single-sheet export, then a £7 monthly plan for saved designs, brand fonts and bulk sheet exports.',
      stack: ['Astro', 'Cloudflare', 'Stripe'],
      firstStep:
        'Nail one common label sheet size, test a real printed sheet for alignment, and demo it to a few market sellers.',
      tools: [
        { name: 'Cloudflare', url: 'https://cloudflare.com' },
        { name: 'Stripe', url: 'https://stripe.com' },
      ],
    },
    {
      name: 'Tiny habit accountability bot',
      pitch:
        'A messaging bot that checks in on one daily habit, logs streaks, and nudges a chosen friend when you miss two days running.',
      problem:
        'Most habit apps are silent and easy to ignore, so motivation fades because nobody actually notices when you slip.',
      demand: 'Emerging',
      difficulty: 'Medium',
      timeToMvp: '2 weekends',
      monetisation:
        'Free for one habit, then a £3 monthly plan for multiple habits, custom nudge times and a private accountability partner.',
      stack: ['Node.js', 'Telegram Bot API', 'Stripe'],
      firstStep:
        'Run the bot on yourself and two friends for a week, then check whether the streak nudges actually changed behaviour.',
      tools: [
        { name: 'Telegram', url: 'https://telegram.org' },
        { name: 'Stripe', url: 'https://stripe.com' },
      ],
    },
  ],
};
