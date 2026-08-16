// Single source of truth for FAQ content — rendered visibly by `faq.tsx`
// and mirrored into the FAQPage JSON-LD schema in `structured-data.tsx`.
// Keep the two in sync: search engines penalize FAQPage markup that doesn't
// match what's actually shown on the page.

export type FaqItem = { q: string; a: string };
export type FaqCategory = { category: string; items: FaqItem[] };

export const FAQS: FaqCategory[] = [
  {
    category: 'About Al Mamun',
    items: [
      {
        q: 'Who is Al Mamun?',
        a: 'Al Mamun is a Flutter developer, full-stack developer, and AI engineer based in Dresden, Germany. He builds production-ready mobile apps, SaaS platforms, and AI-powered systems for startups and companies across Germany, the UAE, and Bangladesh.',
      },
      {
        q: 'Is Al Mamun based in Dresden, Germany?',
        a: 'Yes — he lives and works in Dresden, Germany, and holds visa 18G, making him open to remote and on-site roles anywhere in the country.',
      },
      {
        q: 'What is his educational background?',
        a: 'He is completing an M.Sc. in Web Engineering at TU Chemnitz, Germany, with a thesis on "Learning Buddy: An On-Demand AI Teaching Assistant" built on LLMs, RAG pipelines, and vector databases.',
      },
    ],
  },
  {
    category: 'Hiring & Services',
    items: [
      {
        q: 'Can I hire a Flutter developer in Germany?',
        a: 'Yes — Al Mamun is a Flutter developer based in Dresden, Germany, available for freelance, contract, and full-time roles building production iOS and Android apps with offline-first sync, CI/CD, and native platform integrations.',
      },
      {
        q: 'Does Al Mamun work as an AI consultant?',
        a: 'Yes. As an AI consultant, he helps companies design and ship RAG pipelines, LLM-powered agents, and automation systems — from architecture and vector database selection through to production deployment.',
      },
      {
        q: 'What full-stack development services does he offer?',
        a: 'Full-stack web development with Next.js, Node.js, FastAPI, and PostgreSQL — covering API design, authentication, payments, and deployment on Google Cloud, Azure, and DigitalOcean.',
      },
      {
        q: 'Does he work remotely or only in Dresden, Germany?',
        a: "Both. He's based in Dresden, Germany, and open to remote collaboration worldwide as well as on-site roles across Germany.",
      },
    ],
  },
];
