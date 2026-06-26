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
  slug: 'low-budget-business-ideas',
  title: 'Low-Budget Business Ideas',
  h1: 'Low-Budget Business Ideas You Can Start Under £1,000',
  audience: 'beginners',
  seoTitle: 'Low-Budget Business Ideas (2026): 6 Under £1,000',
  seoDescription:
    'Six validated low-budget business ideas with real demand, difficulty, monetisation and a starter stack. Each startable for under a grand.',
  updated: '2026-06-27',
  intro:
    'A small budget forces a real business model from day one: you cannot hide a weak offer behind a marketing spend you do not have. Each of these ideas can be started for well under £1,000, so your first paying customer funds the next step instead of an investor. Pick the one closest to a skill or audience you already have.',
  ideas: [
    {
      name: 'Local listing rescue service',
      pitch:
        'A done-for-you service that fixes and standardises small business listings across Google, Bing and the big directories so they actually show up in local search.',
      problem:
        'Most local trades have wrong opening hours, duplicate listings and missing categories, which quietly costs them calls every week.',
      demand: 'High',
      difficulty: 'Low',
      timeToMvp: '1 week',
      monetisation:
        'Fixed audit fee of £150, then a £40 to £60 monthly retainer to keep listings fresh and post updates.',
      stack: ['Google Business Profile', 'Notion', 'Stripe'],
      firstStep:
        'Audit five local businesses for free, screenshot the errors you find, and use those reports as your sales pitch.',
      tools: [
        { name: 'Google Business Profile', url: 'https://business.google.com' },
        { name: 'Stripe', url: 'https://stripe.com' },
      ],
    },
    {
      name: 'Niche newsletter sponsorship engine',
      pitch:
        'A tight, high-signal email newsletter for one specific trade or hobby, monetised by selling sponsor slots to suppliers who want that exact audience.',
      problem:
        'Suppliers in narrow niches struggle to reach buyers cheaply, and enthusiasts cannot find one trusted weekly source they can rely on.',
      demand: 'Medium',
      difficulty: 'Low',
      timeToMvp: '2 weeks',
      monetisation:
        'Sell a single sponsor slot per issue from £50 once you pass roughly 1,000 engaged subscribers, then raise rates as it grows.',
      stack: ['Beehiiv', 'Canva', 'Stripe'],
      firstStep:
        'Pick one niche you know, write three issues, and post them publicly to prove people will read and forward them.',
      tools: [
        { name: 'Beehiiv', url: 'https://www.beehiiv.com' },
        { name: 'Canva', url: 'https://www.canva.com' },
      ],
    },
    {
      name: 'Refurbished gear flipping shop',
      pitch:
        'Buy faulty or unloved hobby gear locally, clean and lightly repair it, then resell it with honest photos and a short warranty.',
      problem:
        'Buyers do not trust random secondhand listings, and sellers cannot be bothered to clean, test and describe items properly.',
      demand: 'Medium',
      difficulty: 'Low',
      timeToMvp: '2 weeks',
      monetisation:
        'Buy low on local marketplaces and resell at a 40 to 70 percent margin, reinvesting the float into more stock each cycle.',
      stack: ['eBay', 'Vinted', 'Stripe'],
      firstStep:
        'Spend £100 on three undervalued items, refurbish them, and track your true profit after fees and postage.',
      tools: [
        { name: 'eBay', url: 'https://www.ebay.co.uk' },
        { name: 'Vinted', url: 'https://www.vinted.co.uk' },
      ],
    },
    {
      name: 'Booking-page setup for solo trades',
      pitch:
        'Set up a clean online booking page, deposit collection and reminder texts for solo service providers like cleaners, tutors and mobile groomers.',
      problem:
        'Solo operators lose hours to phone tag and no-shows because they take bookings manually and never collect a deposit.',
      demand: 'High',
      difficulty: 'Low',
      timeToMvp: '1 week',
      monetisation:
        'Charge a £200 setup fee plus an optional £25 monthly care plan, and earn affiliate revenue on the booking tools you recommend.',
      stack: ['Cal.com', 'Stripe', 'Notion'],
      firstStep:
        'Build one polished demo booking page for a fictional cleaner and walk three real cleaners through it.',
      tools: [
        { name: 'Cal.com', url: 'https://cal.com' },
        { name: 'Stripe', url: 'https://stripe.com' },
      ],
    },
    {
      name: 'Printable workbook studio',
      pitch:
        'Design and sell printable workbooks and planners for a specific group, such as new dog owners or first-time allotment growers.',
      problem:
        'People starting something new want a simple guided structure, but most free advice is scattered across dozens of blog posts.',
      demand: 'Medium',
      difficulty: 'Low',
      timeToMvp: '2 weeks',
      monetisation:
        'Sell digital downloads at £6 to £15 each through your own store, with bundles and a paid email list for repeat buyers.',
      stack: ['Canva', 'Gumroad', 'Astro'],
      firstStep:
        'Make one free mini-workbook, give it away in a relevant community, and watch whether people ask for a paid version.',
      tools: [
        { name: 'Gumroad', url: 'https://gumroad.com' },
        { name: 'Canva', url: 'https://www.canva.com' },
      ],
    },
    {
      name: 'Pop-up repair stall',
      pitch:
        'A weekend market stall that does quick repairs on the spot, such as bike tune-ups, knife sharpening or small clothing fixes.',
      problem:
        'People keep broken items because posting them off feels like a hassle, yet they happily pay for a fast fix while they shop.',
      demand: 'Emerging',
      difficulty: 'Medium',
      timeToMvp: '2 weeks',
      monetisation:
        'Charge £5 to £25 per repair for cash on the day, then upsell a collect-and-return service for bigger jobs during the week.',
      stack: ['SumUp', 'Instagram', 'Google Sheets'],
      firstStep:
        'Book one cheap market pitch, offer a single repair type, and log demand and pricing before adding more services.',
      tools: [
        { name: 'SumUp', url: 'https://www.sumup.com' },
        { name: 'Instagram', url: 'https://www.instagram.com' },
      ],
    },
  ],
};
