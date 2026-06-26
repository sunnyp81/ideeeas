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
  slug: 'micro-saas-ideas',
  title: 'Micro-SaaS Ideas',
  h1: 'Micro-SaaS Ideas a Solo Founder Can Actually Ship',
  audience: 'founders',
  seoTitle: 'Micro-SaaS Ideas (2026): 6 Validated, Solo-Buildable Ideas',
  seoDescription:
    'Six validated micro-SaaS ideas with real demand, build difficulty, monetisation and a starter stack. Tiny, focused tools one founder can run.',
  updated: '2026-06-27',
  intro:
    'Micro-SaaS wins by going narrow: one workflow, one buyer, a small but underserved market that the big platforms ignore. Each idea below targets a job people already pay for or do by hand, so you can charge from launch instead of waiting for scale.',
  ideas: [
    {
      name: 'VAT-ready mileage logger for sole traders',
      pitch: 'A phone-first app that auto-detects drives, classifies them as business or personal, and exports an HMRC-ready mileage claim.',
      problem: 'Sole traders forget to log trips and then guess at year end, losing real tax relief or risking a wrong claim.',
      demand: 'Medium',
      difficulty: 'Low',
      timeToMvp: '3-4 weeks',
      monetisation: 'Flat subscription around 4 to 6 pounds per month, billed annually before the tax deadline.',
      stack: ['Expo React Native', 'Supabase', 'Stripe'],
      firstStep: 'Post in two sole-trader and bookkeeping subreddits asking how people currently track mileage, then build for the most common gap.',
      tools: [
        { name: 'Supabase', url: 'https://supabase.com' },
        { name: 'Stripe', url: 'https://stripe.com' },
      ],
    },
    {
      name: 'Allergen menu manager for independent cafes',
      pitch: 'Caterers enter dishes once and the tool generates compliant allergen matrices, printable labels and a public allergen page.',
      problem: 'Natasha law allergen rules are strict, but small kitchens manage them in messy spreadsheets that go stale the moment a recipe changes.',
      demand: 'Medium',
      difficulty: 'Low',
      timeToMvp: '4-5 weeks',
      monetisation: 'Per-venue subscription around 15 pounds per month, sold direct to independent cafes and bakeries.',
      stack: ['Astro', 'Turso', 'Lemon Squeezy'],
      firstStep: 'Walk into five local cafes and ask to see how they record allergens today, then mock up the matrix they wish they had.',
      tools: [
        { name: 'Turso', url: 'https://turso.tech' },
        { name: 'Lemon Squeezy', url: 'https://www.lemonsqueezy.com' },
      ],
    },
    {
      name: 'Shift-swap board for small hospitality teams',
      pitch: 'A focused rota tool where staff post shifts they cannot work and managers approve swaps in one tap, with WhatsApp alerts.',
      problem: 'Small pubs and restaurants run rotas over group chats, so swaps get lost and shifts go uncovered.',
      demand: 'Medium',
      difficulty: 'Medium',
      timeToMvp: '5-6 weeks',
      monetisation: 'Per-location subscription around 20 pounds per month, with a free single-rota tier as the funnel.',
      stack: ['Next.js', 'Neon', 'Clerk', 'Stripe'],
      firstStep: 'Offer to run one venue rota manually for a fortnight and note every swap request that goes wrong.',
      tools: [
        { name: 'Neon', url: 'https://neon.tech' },
        { name: 'Clerk', url: 'https://clerk.com' },
      ],
    },
    {
      name: 'Deposit and damage tracker for equipment hire',
      pitch: 'A single workflow for small hire firms to log kit out, capture condition photos, and settle deposits with a clear paper trail.',
      problem: 'Party, tool and camera hire businesses argue with customers over damage because they have no timestamped before-and-after record.',
      demand: 'Emerging',
      difficulty: 'Medium',
      timeToMvp: '5-6 weeks',
      monetisation: 'Tiered subscription from 25 pounds per month by number of active hires, plus a small per-booking fee.',
      stack: ['Next.js', 'Supabase', 'Cloudflare R2', 'Stripe'],
      firstStep: 'Interview three local hire firms about their worst deposit dispute and design the evidence flow that would have settled it.',
      tools: [
        { name: 'Cloudflare', url: 'https://www.cloudflare.com' },
        { name: 'Supabase', url: 'https://supabase.com' },
      ],
    },
    {
      name: 'Quote-to-invoice tool for trades',
      pitch: 'Electricians and plumbers build a branded quote on site, the customer accepts it on their phone, and it converts to an invoice automatically.',
      problem: 'Tradespeople lose jobs to slow quoting and then chase payment because quote, job and invoice live in three disconnected places.',
      demand: 'High',
      difficulty: 'Medium',
      timeToMvp: '5-7 weeks',
      monetisation: 'Per-user subscription around 18 pounds per month, sold one trade at a time through referrals.',
      stack: ['Next.js', 'Neon', 'Stripe', 'Resend'],
      firstStep: 'Shadow one electrician for a day, time how long quoting takes, and prototype the on-site accept button.',
      tools: [
        { name: 'Stripe', url: 'https://stripe.com' },
        { name: 'Resend', url: 'https://resend.com' },
      ],
    },
    {
      name: 'Renewal reminder hub for insurance brokers',
      pitch: 'Brokers import policy end dates and the tool sequences reminder emails and call tasks so no client renewal slips through.',
      problem: 'Small brokerages track renewals in spreadsheets, so they miss the window and lose commission to a competitor who got there first.',
      demand: 'Medium',
      difficulty: 'Low',
      timeToMvp: '3-4 weeks',
      monetisation: 'Per-seat subscription around 30 pounds per month, justified by a single saved renewal paying for the year.',
      stack: ['Astro', 'Supabase', 'Resend', 'Stripe'],
      firstStep: 'Ask two independent brokers for an anonymised renewal list and calculate the commission they lost to late follow-up.',
      tools: [
        { name: 'Resend', url: 'https://resend.com' },
        { name: 'Supabase', url: 'https://supabase.com' },
      ],
    },
  ],
};
