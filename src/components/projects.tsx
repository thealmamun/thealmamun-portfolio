'use client';

import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import SectionHeader from './section-header';

const GITHUB_PROFILE = 'https://github.com/thealmamun';

// Primary language -> accent dot, same restrained 4-color system used everywhere else.
const LANG_DOT: Record<string, string> = {
  Flutter: 'bg-type',
  Python: 'bg-const',
  'Next.js': 'bg-string',
};

const PROJECTS = [
  {
    name: 'Learning Buddy',
    category: 'M.Sc. Thesis',
    platform: 'web',
    description: 'On-demand AI teaching assistant built on LLMs, RAG pipelines, and vector databases for personalised learning with real-time conversational AI and document-based knowledge retrieval.',
    tech: ['Python', 'LangChain', 'RAG', 'Qdrant', 'FastAPI', 'LLMs'],
    achievement: 'M.Sc. thesis project at TU Chemnitz',
    featured: true,
    link: 'https://vsr.informatik.tu-chemnitz.de/edu/studentprojects/2025/046/',
    github: GITHUB_PROFILE,
  },
  {
    name: 'EN.Tab',
    category: 'Enloc AG',
    platform: 'mobile',
    description: 'Digital property management platform for real-estate clients across Germany. Offline-first Flutter app with real-time data sync, CI/CD via Fastlane, and native Android SDK integrations.',
    tech: ['Flutter', 'Dart', 'Java', 'C#', 'REST APIs', 'Fastlane', 'Azure DevOps'],
    achievement: 'Production app serving real-estate clients across Germany',
    featured: true,
    link: 'https://apps.apple.com/us/app/en-tab/id6739490777',
    github: GITHUB_PROFILE,
  },
  {
    name: 'JobsNavi',
    category: 'App-Concept GmbH',
    platform: 'mobile',
    description: 'Skill-based talent-matching platform with intelligent job matching by location and skills. Built from prototype to live product with Google Cloud Functions serverless backend.',
    tech: ['Flutter', 'Firebase', 'Google Cloud', 'Node.js', 'Google Maps SDK'],
    achievement: 'Delivered prototype to live App Store product',
    featured: false,
    link: 'https://jobsnavi.de/',
    github: GITHUB_PROFILE,
  },
  {
    name: 'Alaasaq',
    category: 'Royex Technologies',
    platform: 'mobile',
    description: 'Magento-backed e-commerce Flutter app with full product catalogue, cart, checkout flows, and payment integration for UAE retail market.',
    tech: ['Flutter', 'Kotlin', 'Dart', 'Magento APIs', 'REST APIs', 'Firebase'],
    achievement: 'Live e-commerce app for UAE retail market',
    featured: false,
    link: 'https://www.royex.ae/',
    github: GITHUB_PROFILE,
  },
  {
    name: 'Swalifna',
    category: 'Royex Technologies',
    platform: 'mobile',
    description: 'Live video streaming app using Agora.io SDK for real-time multi-user broadcast sessions. Built for the Middle East market with Flutter.',
    tech: ['Flutter', 'Kotlin', 'Agora.io', 'REST APIs', 'Firebase', 'Dart'],
    achievement: 'Real-time multi-user live streaming for Middle East',
    featured: false,
    link: 'https://www.royex.ae/',
    github: GITHUB_PROFILE,
  },
  {
    name: 'Taddreb',
    category: 'Royex Technologies',
    platform: 'mobile',
    description: 'Converted Adobe XD designs into a fully functional Flutter tutor-booking app — student/tutor profiles, session scheduling, and secure payments consuming REST APIs.',
    tech: ['Flutter', 'Dart', 'Adobe XD', 'REST APIs', 'Firebase'],
    achievement: 'Design-to-code delivery for UAE education platform',
    featured: false,
    link: 'https://www.royex.ae/portfolio/tdreeb-educational-tutor-booking-app/',
    github: GITHUB_PROFILE,
  },
  {
    name: 'Fuel Solution',
    category: 'Fuel Solution',
    platform: 'mobile',
    description: 'Flutter customer app automating bulk-fuel and CNG pump ordering for a South African distributor — paperless ordering, real-time order tracking, and spending reports for 1,000+ customers.',
    tech: ['Flutter', 'Dart', 'REST APIs', 'Firebase'],
    achievement: 'Automated ordering for 1,000+ fuel & CNG customers',
    featured: false,
    link: 'https://fuelsolution.co.za/',
    github: GITHUB_PROFILE,
  },
  {
    name: 'MyAppointment',
    category: 'MyAppointment',
    platform: 'mobile',
    description: 'Flutter appointment-booking app connecting customers with registered businesses across South Africa for hassle-free scheduling, with a dedicated business-side dashboard to manage bookings.',
    tech: ['Flutter', 'Dart', 'REST APIs', 'Firebase'],
    achievement: '10,000+ downloads on Google Play',
    featured: false,
    link: 'https://play.google.com/store/apps/details?id=uth.redi.myappointment.app&hl=en_IN',
    github: GITHUB_PROFILE,
  },
  {
    name: 'WritingBuddy',
    category: 'Softaar Technologies',
    platform: 'web',
    description: 'AI thesis and research-paper writing assistant — auto-generates APA/IEEE/Harvard citations, builds outlines, and exports to PDF/DOCX/LaTeX.',
    tech: ['Flutter', 'Firebase', 'Riverpod', 'Stripe'],
    achievement: 'Founder product, Softaar Technologies — live SaaS',
    featured: false,
    link: 'https://writingbuddy.ai',
    github: GITHUB_PROFILE,
  },
  {
    name: 'ZeroApply',
    category: 'Softaar Technologies',
    platform: 'web',
    description: 'AI-powered resume builder and auto-apply platform — generates tailored resumes and cover letters, then applies to jobs automatically.',
    tech: ['Next.js', 'Firebase', 'OpenAI', 'Stripe'],
    achievement: 'Founder product, Softaar Technologies — live SaaS',
    featured: false,
    link: 'https://zeroapply.ai',
    github: GITHUB_PROFILE,
  },
  {
    name: 'TrueStore',
    category: 'Softaar Technologies',
    platform: 'web',
    description: 'AI App Store Optimization tool — generates high-converting screenshots, app icons, keyword research, and listing copy for iOS & Android apps.',
    tech: ['Next.js', 'Firebase', 'Stripe'],
    achievement: 'Founder product, Softaar Technologies — live SaaS with active billing',
    featured: false,
    link: 'https://truestore.ai',
    github: GITHUB_PROFILE,
  },
  {
    name: 'ZeroSEO',
    category: 'Softaar Technologies',
    platform: 'web',
    description: 'AI SEO autopilot — researches competitors, writes and publishes an SEO-optimized article daily, and builds real backlinks with zero manual work.',
    tech: ['Next.js', 'Firebase', 'OpenAI', 'Stripe'],
    achievement: 'Founder product, Softaar Technologies — live SaaS',
    featured: false,
    link: 'https://zeroseo.ai',
    github: GITHUB_PROFILE,
  },
  {
    name: 'SoLangu',
    category: 'Softaar Technologies',
    platform: 'mobile',
    description: 'Real-time language-exchange app — matches users for live voice practice via WebRTC, with an AI voice tutor fallback when no partner is available.',
    tech: ['Flutter', 'WebRTC', 'LiveKit', 'Firebase', 'RevenueCat'],
    achievement: 'Founder product, Softaar Technologies — published on App Store & Play Store',
    featured: false,
    link: 'https://apps.apple.com/us/app/solangu-ai-speaking-practice/id6762832986',
    github: GITHUB_PROFILE,
  },
  {
    name: 'DailyMe',
    category: 'Softaar Technologies',
    platform: 'mobile',
    description: 'Meditation and sleep app — guided sessions, breathing exercises, daily affirmations, and sleep sounds to help build healthier daily habits.',
    tech: ['Flutter', 'Firebase', 'RevenueCat', 'Riverpod'],
    achievement: 'Founder product, Softaar Technologies — published on the App Store',
    featured: false,
    link: 'https://apps.apple.com/at/app/dailyme-meditation-sleep/id6774474854',
    github: GITHUB_PROFILE,
  },
] as const;

type Platform = 'web' | 'mobile';

const TABS: { key: 'all' | Platform; label: string }[] = [
  { key: 'all', label: 'all' },
  { key: 'web', label: 'web' },
  { key: 'mobile', label: 'mobile' },
];

const PlatformIcon = ({ platform, className }: { platform: Platform; className?: string }) =>
  platform === 'mobile' ? (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <line x1="11" y1="18" x2="13" y2="18" />
    </svg>
  ) : (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M3 12h18M12 3c2.5 2.7 4 6 4 9s-1.5 6.3-4 9c-2.5-2.7-4-6-4-9s1.5-6.3 4-9z" />
    </svg>
  );

const TechChip = ({ label }: { label: string }) => (
  <span
    className="px-2.5 py-1 bg-surface border border-border text-xs font-mono rounded text-text-secondary
               transition-all duration-200 hover:border-keyword hover:text-keyword"
  >
    {label}
  </span>
);

type Project = (typeof PROJECTS)[number];

// One repo-card design for every project — the way a developer actually
// browses their own work on GitHub, not a marketing tile.
const RepoCard = ({ p, delay, inView }: { p: Project; delay: number; inView: boolean }) => (
  <div
    className={`h-full ${inView ? 'animate-scale-in' : 'opacity-0'}`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="card group h-full flex flex-col p-5">
      {p.featured && (
        <p className="flex items-center gap-1.5 font-mono text-[11px] text-text-muted mb-2.5">
          <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.5 1a.5.5 0 000 1h.5v4.29a1 1 0 01-.29.71l-2 2A1 1 0 003.41 11H7.5v3.5a.5.5 0 001 0V11h4.09a1 1 0 00.7-1.71l-2-2a1 1 0 01-.29-.7V2h.5a.5.5 0 000-1h-7z" />
          </svg>
          pinned
        </p>
      )}

      <div className="flex items-center justify-between gap-3 mb-2">
        <span className="flex items-center gap-1.5 font-mono text-xs text-text-secondary min-w-0">
          <span className={`w-2 h-2 rounded-full flex-shrink-0 ${LANG_DOT[p.tech[0]] ?? 'bg-keyword'}`} />
          <span className="truncate">{p.tech[0]}</span>
        </span>
        <span className="flex items-center gap-1 font-mono text-xs text-text-muted flex-shrink-0">
          <PlatformIcon platform={p.platform} className="w-3 h-3" />
          {p.category}
        </span>
      </div>

      <h3 className="font-bold text-base mb-2 transition-colors duration-200 group-hover:text-keyword">
        {p.name}
      </h3>

      <p className="text-sm text-text-secondary leading-relaxed mb-3 line-clamp-3">{p.description}</p>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {p.tech.slice(0, 4).map((t) => <TechChip key={t} label={t} />)}
        {p.tech.length > 4 && (
          <span className="px-2 py-1 text-xs font-mono text-text-muted">+{p.tech.length - 4}</span>
        )}
      </div>

      <p className="text-xs font-mono text-string mb-4">✓ {p.achievement}</p>

      <div className="flex items-center gap-4 mt-auto pt-1 font-mono text-xs">
        <a
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-text-secondary hover:text-keyword transition-colors"
        >
          View <span aria-hidden>↗</span>
        </a>
        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-secondary hover:text-keyword transition-colors"
        >
          Source
        </a>
      </div>
    </div>
  </div>
);

const ProjectsSection = ({ id }: { id: string }) => {
  const { ref, inView } = useInView();
  const [tab, setTab] = useState<'all' | Platform>('all');

  const filtered = (tab === 'all' ? PROJECTS : PROJECTS.filter((p) => p.platform === tab)) as Project[];
  // Pinned projects surface first, same as a GitHub profile's repo list.
  const sorted = [...filtered].sort((a, b) => Number(b.featured) - Number(a.featured));

  return (
    <section id={id} className="py-24 px-4">
      <div ref={ref} className="max-w-7xl mx-auto">

        <SectionHeader
          kicker="Projects"
          title="Featured work"
          description="Production apps and research projects built across Germany, UAE, and Bangladesh."
          meta={`${PROJECTS.length} repos`}
          inView={inView}
        />

        {/* Platform filter, styled like the Skills category tabs */}
        <div className={`flex flex-wrap gap-2 mb-10 font-mono text-sm ${inView ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
          {TABS.map((t) => {
            const count = t.key === 'all' ? PROJECTS.length : PROJECTS.filter((p) => p.platform === t.key).length;
            const active = tab === t.key;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setTab(t.key)}
                aria-pressed={active}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded border transition-all duration-200
                  ${active
                    ? 'bg-surface-2 border-keyword text-text-primary'
                    : 'bg-surface border-border text-text-secondary hover:border-border-strong hover:text-text-primary'}`}
              >
                {t.key !== 'all' && <PlatformIcon platform={t.key} className="w-3.5 h-3.5 flex-shrink-0" />}
                {t.label}
                <span className="text-text-muted">[{count}]</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sorted.map((p, i) => (
            <RepoCard key={p.name} p={p} delay={i * 70} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
