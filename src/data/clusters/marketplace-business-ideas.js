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
  slug: 'marketplace-business-ideas',
  title: 'Marketplace Business Ideas',
  h1: 'Marketplace Business Ideas That Solve the Cold-Start Problem',
  audience: 'founders',
  seoTitle: 'Marketplace Business Ideas (2026): 6 Two-Sided Plays',
  seoDescription:
    'Six validated marketplace business ideas with real demand, difficulty, monetisation and a starter stack. Each names a beachhead supply and a cold-start plan.',
  updated: '2026-06-27',
  intro:
    'Every marketplace dies or thrives on the same problem: buyers will not show up before sellers do, and sellers will not show up before buyers do. The ideas below each name a narrow beachhead supply you can hand-recruit and a tight niche where one city or one community is enough to feel liquid. Win that corner first, then widen.',
  ideas: [
    {
      name: 'Refurbished mobility equipment marketplace',
      pitch:
        'A curated marketplace for vetted, cleaned and tested mobility aids such as wheelchairs, scooters and stairlifts, connecting families clearing a home with buyers who cannot afford new.',
      problem:
        'Used mobility equipment is either thrown away or sold blindly on general sites, so buyers fear faulty kit and sellers do not know fair prices.',
      demand: 'Medium',
      difficulty: 'Medium',
      timeToMvp: '6 weeks',
      monetisation:
        'Take a 15 percent commission on each sale, with an optional paid inspection-and-clean service that justifies the trust premium.',
      stack: ['Sharetribe', 'Stripe', 'Cloudflare'],
      firstStep:
        'Hand-source twenty items from house-clearance firms and charity shops in one city, since starting on the supply side gives buyers a reason to look.',
      tools: [
        { name: 'Sharetribe', url: 'https://sharetribe.com' },
        { name: 'Stripe', url: 'https://stripe.com' },
      ],
    },
    {
      name: 'Local commercial kitchen hours marketplace',
      pitch:
        'A booking marketplace for spare hours in registered commercial kitchens, letting cafes and restaurants rent idle time to food startups, bakers and supper-club hosts.',
      problem:
        'Small food makers cannot afford their own certified kitchen, while existing venues leave expensive space empty for most of the day with no easy way to fill it.',
      demand: 'Emerging',
      difficulty: 'Medium',
      timeToMvp: '6 weeks',
      monetisation:
        'Charge a 12 to 18 percent booking fee on each rented session, plus a small listing boost for kitchens that want priority placement.',
      stack: ['Bubble', 'Stripe', 'Cal.com'],
      firstStep:
        'Sign up ten kitchens in one borough first, since locked-in supply is the hard side here and buyers are abundant once slots exist.',
      tools: [
        { name: 'Bubble', url: 'https://bubble.io' },
        { name: 'Stripe', url: 'https://stripe.com' },
      ],
    },
    {
      name: 'Vetted trades marketplace for landlords',
      pitch:
        'A marketplace matching small portfolio landlords with reliability-scored local trades for repairs, with photo-logged jobs and held payment until work is signed off.',
      problem:
        'Landlords waste hours chasing unreliable trades for small jobs, and good trades struggle to find steady, fairly paid maintenance work without undercutting on price.',
      demand: 'High',
      difficulty: 'High',
      timeToMvp: '8 weeks',
      monetisation:
        'Take a 10 percent platform fee from the trade on completed jobs, with an optional landlord subscription for priority response.',
      stack: ['Sharetribe', 'Stripe', 'Twilio'],
      firstStep:
        'Recruit fifteen trusted trades across two postcodes by hand, because reliable supply is the scarce side and landlords will follow proven reliability.',
      tools: [
        { name: 'Sharetribe', url: 'https://sharetribe.com' },
        { name: 'Stripe', url: 'https://stripe.com' },
      ],
    },
    {
      name: 'Niche manufacturing offcuts marketplace',
      pitch:
        'A marketplace where joineries, stone yards and fabricators list usable offcuts and surplus material for makers, hobbyists and small builders to buy cheaply by the lot.',
      problem:
        'Workshops pay to skip perfectly good offcuts, while makers overpay for small quantities of quality material they cannot source in bulk.',
      demand: 'Medium',
      difficulty: 'Medium',
      timeToMvp: '5 weeks',
      monetisation:
        'Take a flat 10 percent on each lot and offer paid collection-and-delivery slots that batch nearby pickups into one route.',
      stack: ['Sharetribe', 'Stripe', 'Cloudflare'],
      firstStep:
        'Visit thirty local workshops and list their offcuts for free yourself, since seeding real supply is what makes the first buyers stay.',
      tools: [
        { name: 'Sharetribe', url: 'https://sharetribe.com' },
        { name: 'Cloudflare', url: 'https://cloudflare.com' },
      ],
    },
    {
      name: 'Curated freelance grant-writer marketplace',
      pitch:
        'A vetted marketplace pairing charities and community groups with specialist grant writers, matched by funding area and verified by past awards won.',
      problem:
        'Small charities cannot tell a strong grant writer from a weak one and risk paying for failed bids, while skilled writers have no trusted place to be found.',
      demand: 'Medium',
      difficulty: 'Medium',
      timeToMvp: '6 weeks',
      monetisation:
        'Charge a 15 percent commission on each engagement, with a success bonus tier when a funded bid clears a set threshold.',
      stack: ['Bubble', 'Stripe', 'Calendly'],
      firstStep:
        'Curate twelve grant writers with documented wins before any outreach, because verified supply is the only thing that earns a cautious charity buyer.',
      tools: [
        { name: 'Bubble', url: 'https://bubble.io' },
        { name: 'Stripe', url: 'https://stripe.com' },
      ],
    },
    {
      name: 'Local allotment and garden-share marketplace',
      pitch:
        'A marketplace connecting people with unused garden or allotment space to nearby growers who want land, splitting the harvest or a small seasonal fee.',
      problem:
        'Allotment waiting lists run for years while many large gardens sit unworked, and neighbours have no safe, structured way to share the space.',
      demand: 'Emerging',
      difficulty: 'Low',
      timeToMvp: '4 weeks',
      monetisation:
        'Charge a £20 seasonal listing fee to growers and take a small fee on any paid plots, keeping space-owner sign-up free to build supply.',
      stack: ['Bubble', 'Stripe', 'Mapbox'],
      firstStep:
        'Recruit forty space owners in one town with a simple form, since landholders are the harder, trust-sensitive side and growers already queue for plots.',
      tools: [
        { name: 'Bubble', url: 'https://bubble.io' },
        { name: 'Stripe', url: 'https://stripe.com' },
      ],
    },
  ],
};
