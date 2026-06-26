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
  slug: 'ai-business-ideas',
  title: 'AI Business Ideas',
  h1: 'AI Business Ideas Beyond Building Another Chatbot',
  audience: 'founders',
  seoTitle: 'AI Business Ideas (2026): 6 Validated, Buildable Ideas',
  seoDescription:
    'Six validated AI business ideas with real demand, difficulty, monetisation and a starter stack. Services, productised offers and marketplaces, not just SaaS.',
  updated: '2026-06-27',
  intro:
    'Most AI business ideas die because they chase a horizontal SaaS dream that needs scale before it pays. The six below are deliberately mixed: services, productised offers, automation and marketplaces, where you can take money in week one and let the model do the heavy lifting behind a narrow, painful job.',
  ideas: [
    {
      name: 'Done-for-you AI inbound triage service',
      pitch: 'A managed service that reads a B2B company inbound forms, emails and chats, then routes, replies and books qualified leads using your own AI pipeline, billed as a retainer.',
      problem: 'Small sales teams lose warm leads overnight because nobody answers fast enough, and they will not hire a night shift.',
      demand: 'High',
      difficulty: 'Medium',
      timeToMvp: '2-4 weeks',
      monetisation: 'Monthly retainer, roughly 800 to 2,500 GBP per client, priced on lead volume not seats.',
      stack: ['Make', 'LLM API', 'Shared inbox API', 'Calendar API'],
      firstStep: 'Run the triage by hand for one local agency for two weeks and show the booked-meeting lift before automating it.',
      tools: [
        { name: 'Make', url: 'https://make.com' },
        { name: 'Vercel AI SDK', url: 'https://sdk.vercel.ai' },
      ],
    },
    {
      name: 'Localised AI menu and product photography studio',
      pitch: 'A productised offer that turns a restaurant or shop phone snaps into consistent, on-brand product imagery using generative editing, delivered as a fixed pack.',
      problem: 'Independent food and retail businesses cannot afford a photographer, so their listings and delivery apps look amateur and convert badly.',
      demand: 'Medium',
      difficulty: 'Low',
      timeToMvp: '1-2 weeks',
      monetisation: 'Fixed-fee packs, 150 to 400 GBP per shoot, plus a monthly refresh subscription.',
      stack: ['Gemini image API', 'Next.js', 'Stripe', 'Cloud storage'],
      firstStep: 'Redo one cafe full menu for free, then measure their delivery-app click rate before and after.',
      tools: [
        { name: 'Stripe', url: 'https://stripe.com' },
        { name: 'Cloudinary', url: 'https://cloudinary.com' },
      ],
    },
    {
      name: 'AI grant and tender bid writer for SMEs',
      pitch: 'A semi-automated service that drafts public-sector tender and grant responses from a company past bids and the live brief, with a human editor in the loop.',
      problem: 'Small firms skip lucrative public contracts because writing a compliant bid eats a week they do not have.',
      demand: 'High',
      difficulty: 'Medium',
      timeToMvp: '4-6 weeks',
      monetisation: 'Per-bid fee, 500 to 1,500 GBP, with a success bonus on awarded contracts.',
      stack: ['Next.js', 'RAG over past bids', 'LLM API', 'Postgres'],
      firstStep: 'Win or place on one real tender for a single client to prove the conversion before scaling outreach.',
      tools: [
        { name: 'Supabase', url: 'https://supabase.com' },
        { name: 'Vercel', url: 'https://vercel.com' },
      ],
    },
    {
      name: 'Vetted AI automation marketplace for one trade',
      pitch: 'A curated marketplace where, say, dental or estate-agent practices buy pre-built, installed AI automations from approved builders, with you taking a cut and guaranteeing quality.',
      problem: 'Owners know AI could save hours but cannot tell a real automation from a hype merchant, so they freeze and buy nothing.',
      demand: 'Emerging',
      difficulty: 'High',
      timeToMvp: '6-8 weeks',
      monetisation: 'Transaction take rate of 15 to 25 percent plus a listing fee for vetted builders.',
      stack: ['Webflow', 'Airtable', 'Zapier', 'Stripe Connect'],
      firstStep: 'Hand-broker five automation installs in one vertical yourself before building any marketplace software.',
      tools: [
        { name: 'Webflow', url: 'https://webflow.com' },
        { name: 'Airtable', url: 'https://airtable.com' },
      ],
    },
    {
      name: 'AI-narrated local history and tour audio packs',
      pitch: 'A productised content business that generates and sells location-triggered audio tours for towns, museums and trails, voiced and scripted with AI, licensed to councils and venues.',
      problem: 'Smaller heritage sites and tourist towns cannot fund bespoke audio guides, so visitors get a leaflet and leave early.',
      demand: 'Emerging',
      difficulty: 'Medium',
      timeToMvp: '3-5 weeks',
      monetisation: 'One-off licence per location, 1,000 to 5,000 GBP, plus annual hosting and update fees.',
      stack: ['Next.js', 'LLM scripting', 'AI voice API', 'Geolocation'],
      firstStep: 'Build one free walking tour for a local high street and pitch the footfall data to the town council.',
      tools: [
        { name: 'ElevenLabs', url: 'https://elevenlabs.io' },
        { name: 'Mapbox', url: 'https://www.mapbox.com' },
      ],
    },
    {
      name: 'AI quality-control checker for e-commerce listings',
      pitch: 'A service plus tool that audits a shop entire catalogue for missing specs, weak titles, banned claims and image gaps, then ships fixes back ready to import.',
      problem: 'Growing online stores carry thousands of half-finished listings that quietly suppress search ranking and conversion.',
      demand: 'Medium',
      difficulty: 'Medium',
      timeToMvp: '3-5 weeks',
      monetisation: 'Per-catalogue audit fee plus a monthly monitoring subscription, 200 to 600 GBP per month.',
      stack: ['Next.js', 'Shopify API', 'LLM classifier', 'Queue worker'],
      firstStep: 'Audit one mid-size Shopify store for free and quantify the listings failing basic quality rules.',
      tools: [
        { name: 'Vercel', url: 'https://vercel.com' },
        { name: 'Supabase', url: 'https://supabase.com' },
      ],
    },
  ],
};
