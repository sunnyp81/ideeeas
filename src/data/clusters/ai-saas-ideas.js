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
  slug: 'ai-saas-ideas',
  title: 'AI SaaS Ideas',
  h1: 'Validated AI SaaS Ideas You Could Start This Year',
  audience: 'founders',
  seoTitle: 'AI SaaS Ideas (2026): 6 Validated Ideas With Demand & Stack',
  seoDescription:
    'Six validated AI SaaS ideas with real demand signals, build difficulty, monetisation and a starter stack. No fluff, just buildable opportunities.',
  updated: '2026-06-27',
  intro:
    'AI lowered the cost of building software, which means the moat is no longer the model, it is the workflow you wrap around it. These six AI SaaS ideas each solve a narrow, painful job for a defined buyer, so you can charge from day one instead of chasing scale.',
  ideas: [
    {
      name: 'Meeting-to-CRM autofill',
      pitch: 'Turn recorded sales calls into clean CRM records, fields, next steps and follow-up drafts, without reps typing a thing.',
      problem: 'Reps hate CRM admin, so pipeline data rots. Managers then forecast on garbage.',
      demand: 'High',
      difficulty: 'Medium',
      timeToMvp: '3-5 weeks',
      monetisation: 'Per-seat SaaS, $25-40/user/mo; land via one sales team, expand by seat.',
      stack: ['Next.js', 'Whisper/transcription API', 'LLM extraction', 'HubSpot/Salesforce API'],
      firstStep: 'Manually process 10 real call recordings for one friendly sales team and show the time saved.',
      tools: [
        { name: 'Vercel', url: 'https://vercel.com' },
        { name: 'Supabase', url: 'https://supabase.com' },
      ],
    },
    {
      name: 'Compliance-grade doc redaction',
      pitch: 'Drag in PDFs and get back versions with PII, legal and financial data reliably redacted, with an audit log.',
      problem: 'Legal, healthcare and finance teams redact by hand or with brittle regex, and one miss is a breach.',
      demand: 'High',
      difficulty: 'High',
      timeToMvp: '6-8 weeks',
      monetisation: 'Usage + seat hybrid; compliance buyers pay premium and churn little.',
      stack: ['Python', 'OCR', 'NER + LLM verification', 'Postgres audit trail'],
      firstStep: 'Pick one regulated niche (e.g. legal discovery) and benchmark recall against their current process.',
      tools: [
        { name: 'Modal', url: 'https://modal.com' },
        { name: 'Supabase', url: 'https://supabase.com' },
      ],
    },
    {
      name: 'Niche AI knowledge base for support teams',
      pitch: 'A support-answer assistant trained only on one company’s docs, tickets and policies, answers cite their own sources.',
      problem: 'Generic chatbots hallucinate; teams want answers grounded strictly in their own truth.',
      demand: 'High',
      difficulty: 'Medium',
      timeToMvp: '4-6 weeks',
      monetisation: 'Flat platform fee + per-resolved-ticket; ties price to value delivered.',
      stack: ['Next.js', 'Vector DB', 'RAG pipeline', 'Zendesk/Intercom API'],
      firstStep: 'Index one mid-size help centre and measure deflection rate over two weeks.',
      tools: [
        { name: 'Pinecone', url: 'https://www.pinecone.io' },
        { name: 'Vercel AI SDK', url: 'https://sdk.vercel.ai' },
      ],
    },
    {
      name: 'AI bookkeeping categoriser for accountants',
      pitch: 'Sits on top of Xero/QuickBooks and pre-categorises transactions with explanations an accountant can approve in bulk.',
      problem: 'Bookkeepers spend hours on rote categorisation that is 90% predictable.',
      demand: 'Medium',
      difficulty: 'Medium',
      timeToMvp: '4-6 weeks',
      monetisation: 'Per-client-file pricing sold to accounting practices, not end SMBs.',
      stack: ['Next.js', 'Xero/QuickBooks API', 'LLM classifier', 'Postgres'],
      firstStep: 'Shadow one bookkeeper for a day and replicate their rules on a month of real ledgers.',
      tools: [
        { name: 'Supabase', url: 'https://supabase.com' },
        { name: 'Stripe', url: 'https://stripe.com' },
      ],
    },
    {
      name: 'Personalised cold-outreach research agent',
      pitch: 'Give it a prospect list; it researches each account and drafts a genuinely specific first line per contact.',
      problem: 'Personalisation does not scale manually, and generic merge-tags get ignored.',
      demand: 'High',
      difficulty: 'Medium',
      timeToMvp: '3-4 weeks',
      monetisation: 'Credit-based per enriched contact; expansion is automatic with usage.',
      stack: ['Next.js', 'Web search API', 'LLM', 'Queue/worker'],
      firstStep: 'Run it on 100 prospects for one agency and compare reply rate to their control.',
      tools: [
        { name: 'Vercel', url: 'https://vercel.com' },
        { name: 'Resend', url: 'https://resend.com' },
      ],
    },
    {
      name: 'Spreadsheet-native AI analyst',
      pitch: 'A side-panel that answers plain-English questions about a workbook and writes the formulas, no exports.',
      problem: 'Most operators live in spreadsheets but cannot write the analysis they need.',
      demand: 'Emerging',
      difficulty: 'Medium',
      timeToMvp: '4-6 weeks',
      monetisation: 'Freemium seat upsell; viral inside finance and ops teams.',
      stack: ['Google Sheets/Excel add-in', 'LLM with tool use', 'Sandbox compute'],
      firstStep: 'Ship a read-only add-in that answers 20 common ops questions and watch which get reused.',
      tools: [
        { name: 'Vercel AI SDK', url: 'https://sdk.vercel.ai' },
        { name: 'Clerk', url: 'https://clerk.com' },
      ],
    },
  ],
};
