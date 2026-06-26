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
  slug: 'side-hustle-ideas',
  title: 'Side Hustle Ideas',
  h1: 'Side Hustle Ideas You Can Run Alongside a Full-Time Job',
  audience: 'beginners',
  seoTitle: 'Side Hustle Ideas (2026): 6 Validated, Low-Time Ideas',
  seoDescription:
    'Six validated side hustle ideas with real demand, difficulty, monetisation and a starter stack. Built for limited evenings and weekends.',
  updated: '2026-06-27',
  intro:
    'A side hustle has to survive a tired Tuesday evening and a busy weekend, so it must be simple to pick up and put down without breaking. Each idea here is chosen for a fast route to a first payment, low ongoing time, and no need to quit the day job. Start with the one that overlaps a skill or audience you already have.',
  ideas: [
    {
      name: 'Resume rescue for career switchers',
      pitch:
        'A focused service that rewrites CVs and LinkedIn profiles for people moving into a new industry, mapping their old experience onto the language of the target role.',
      problem:
        'Career switchers get filtered out because their CV describes the job they are leaving, not the one they want, and generic templates do not fix that translation gap.',
      demand: 'High',
      difficulty: 'Low',
      timeToMvp: '1 week',
      monetisation:
        'Charge £90 for a CV rewrite and £140 for a CV plus LinkedIn bundle, delivered as a tracked-changes document within three days.',
      stack: ['Google Docs', 'Stripe', 'Calendly'],
      firstStep:
        'Rewrite three real CVs for free in a career-change community, then ask each person for a short before-and-after testimonial.',
      tools: [
        { name: 'Stripe', url: 'https://stripe.com' },
        { name: 'Calendly', url: 'https://calendly.com' },
      ],
    },
    {
      name: 'Niche Notion template shop',
      pitch:
        'Design and sell Notion templates for one specific job, such as freelance videographers or private music teachers, covering their whole admin workflow in one workspace.',
      problem:
        'Generic productivity templates ignore the real moving parts of a specific trade, so buyers spend hours bending them to fit instead of just working.',
      demand: 'Medium',
      difficulty: 'Low',
      timeToMvp: '2 weeks',
      monetisation:
        'Sell templates at £15 to £39 each through a storefront, with a premium tier that adds setup notes and a short walkthrough video.',
      stack: ['Notion', 'Gumroad', 'Loom'],
      firstStep:
        'Build one template for a niche you understand and post a short demo in a community for that trade to gauge real interest.',
      tools: [
        { name: 'Gumroad', url: 'https://gumroad.com' },
        { name: 'Notion', url: 'https://notion.so' },
      ],
    },
    {
      name: 'Weekend drone property shoots',
      pitch:
        'Offer aerial photos and short video tours of homes and small commercial sites for estate agents and holiday-let owners, shot on weekends and edited in the evenings.',
      problem:
        'Smaller agents and landlords want striking listing imagery but cannot justify a full production crew, and most listings still use flat phone photos.',
      demand: 'Medium',
      difficulty: 'Medium',
      timeToMvp: '3 weeks',
      monetisation:
        'Charge £120 to £250 per shoot depending on edit length, and offer a discounted retainer for agents who need several listings a month.',
      stack: ['DJI Fly', 'CapCut', 'Stripe'],
      firstStep:
        'Shoot two local properties for free, build a one-page portfolio, and email five nearby agents with the clips attached.',
      tools: [
        { name: 'Stripe', url: 'https://stripe.com' },
        { name: 'CapCut', url: 'https://www.capcut.com' },
      ],
    },
    {
      name: 'Faceless short-form clip studio',
      pitch:
        'Repurpose long podcasts and webinars into captioned vertical clips for busy creators and coaches who do not have time to cut their own footage.',
      problem:
        'Creators sit on hours of recorded content that never becomes short clips, because editing and captioning each one is slow and easy to keep postponing.',
      demand: 'High',
      difficulty: 'Low',
      timeToMvp: '1 week',
      monetisation:
        'Sell a monthly package of ten edited clips for £300 to £500, billed up front so you only work once payment clears.',
      stack: ['Opus Clip', 'CapCut', 'Stripe'],
      firstStep:
        'Cut three clips from a creator you admire, send them unprompted, and offer the rest of the episode as a paid package.',
      tools: [
        { name: 'Opus Clip', url: 'https://www.opus.pro' },
        { name: 'Stripe', url: 'https://stripe.com' },
      ],
    },
    {
      name: 'Local plant and aquarium holiday care',
      pitch:
        'A trusted local service that waters plants, feeds fish and tends small gardens while owners are away, booked in advance around your own free hours.',
      problem:
        'Pet sitters are easy to find but specialist plant and aquarium owners worry about handing valuable, fragile collections to someone who does not understand them.',
      demand: 'Emerging',
      difficulty: 'Low',
      timeToMvp: '1 week',
      monetisation:
        'Charge £15 to £25 per visit with a small surcharge for aquarium work, taking deposits to lock in holiday-season bookings early.',
      stack: ['Cal.com', 'Stripe', 'WhatsApp Business'],
      firstStep:
        'Offer one free week of care to a neighbour with plants or a tank, photograph the routine, and use it as your proof and pricing test.',
      tools: [
        { name: 'Cal.com', url: 'https://cal.com' },
        { name: 'Stripe', url: 'https://stripe.com' },
      ],
    },
    {
      name: 'Print-on-demand for hobby clubs',
      pitch:
        'Design and run print-on-demand merchandise for amateur clubs and societies, such as rowing crews or board-game groups, handling artwork, store and fulfilment for them.',
      problem:
        'Clubs want their own kit and stickers but have no one willing to manage designs, suppliers and order collection, so it never happens.',
      demand: 'Medium',
      difficulty: 'Low',
      timeToMvp: '2 weeks',
      monetisation:
        'Add a £4 to £8 margin per item on top of print costs, and run short timed campaigns so you only order once members have paid.',
      stack: ['Printful', 'Shopify', 'Canva'],
      firstStep:
        'Pitch one local club a single design, take pre-orders for two weeks, and only place the print order once enough members commit.',
      tools: [
        { name: 'Printful', url: 'https://www.printful.com' },
        { name: 'Shopify', url: 'https://shopify.com' },
      ],
    },
  ],
};
