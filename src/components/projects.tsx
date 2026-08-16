'use client';

import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';

const GITHUB_PROFILE = 'https://github.com/thealmamun';

const PROJECTS = [
  {
    initials: 'LB',
    name: 'Learning Buddy',
    category: 'M.Sc. Thesis',
    platform: 'web',
    description: 'On-demand AI teaching assistant built on LLMs, RAG pipelines, and vector databases for personalised learning with real-time conversational AI and document-based knowledge retrieval.',
    tech: ['Python', 'LangChain', 'RAG', 'Qdrant', 'FastAPI', 'LLMs'],
    achievement: 'M.Sc. thesis project at TU Chemnitz',
    gradientFrom: 'from-indigo-500',
    gradientTo: 'to-violet-500',
    featured: true,
    link: 'https://vsr.informatik.tu-chemnitz.de/edu/studentprojects/2025/046/',
    github: GITHUB_PROFILE,
  },
  {
    initials: 'ET',
    name: 'EN.Tab',
    category: 'Enloc AG',
    platform: 'mobile',
    description: 'Digital property management platform for real-estate clients across Germany. Offline-first Flutter app with real-time data sync, CI/CD via Fastlane, and native Android SDK integrations.',
    tech: ['Flutter', 'Dart', 'Java', 'C#', 'REST APIs', 'Fastlane', 'Azure DevOps'],
    achievement: 'Production app serving real-estate clients across Germany',
    gradientFrom: 'from-sky-500',
    gradientTo: 'to-indigo-500',
    featured: true,
    link: 'https://apps.apple.com/us/app/en-tab/id6739490777',
    github: GITHUB_PROFILE,
  },
  {
    initials: 'JN',
    name: 'JobsNavi',
    category: 'App-Concept GmbH',
    platform: 'mobile',
    description: 'Skill-based talent-matching platform with intelligent job matching by location and skills. Built from prototype to live product with Google Cloud Functions serverless backend.',
    tech: ['Flutter', 'Firebase', 'Google Cloud', 'Node.js', 'Google Maps SDK'],
    achievement: 'Delivered prototype to live App Store product',
    gradientFrom: 'from-violet-500',
    gradientTo: 'to-pink-500',
    featured: false,
    link: 'https://jobsnavi.de/',
    github: GITHUB_PROFILE,
  },
  {
    initials: 'AL',
    name: 'Alaasaq',
    category: 'Royex Technologies',
    platform: 'mobile',
    description: 'Magento-backed e-commerce Flutter app with full product catalogue, cart, checkout flows, and payment integration for UAE retail market.',
    tech: ['Flutter', 'Kotlin', 'Dart', 'Magento APIs', 'REST APIs', 'Firebase'],
    achievement: 'Live e-commerce app for UAE retail market',
    gradientFrom: 'from-emerald-500',
    gradientTo: 'to-teal-500',
    featured: false,
    link: 'https://www.royex.ae/',
    github: GITHUB_PROFILE,
  },
  {
    initials: 'SW',
    name: 'Swalifna',
    category: 'Royex Technologies',
    platform: 'mobile',
    description: 'Live video streaming app using Agora.io SDK for real-time multi-user broadcast sessions. Built for the Middle East market with Flutter.',
    tech: ['Flutter', 'Kotlin', 'Agora.io', 'REST APIs', 'Firebase', 'Dart'],
    achievement: 'Real-time multi-user live streaming for Middle East',
    gradientFrom: 'from-amber-500',
    gradientTo: 'to-orange-500',
    featured: false,
    link: 'https://www.royex.ae/',
    github: GITHUB_PROFILE,
  },
  {
    initials: 'TD',
    name: 'Taddreb',
    category: 'Royex Technologies',
    platform: 'mobile',
    description: 'Converted Adobe XD designs into a fully functional Flutter tutor-booking app — student/tutor profiles, session scheduling, and secure payments consuming REST APIs.',
    tech: ['Flutter', 'Dart', 'Adobe XD', 'REST APIs', 'Firebase'],
    achievement: 'Design-to-code delivery for UAE education platform',
    gradientFrom: 'from-cyan-500',
    gradientTo: 'to-blue-500',
    featured: false,
    link: 'https://www.royex.ae/portfolio/tdreeb-educational-tutor-booking-app/',
    github: GITHUB_PROFILE,
  },
  {
    initials: 'FS',
    name: 'Fuel Solution',
    category: 'Fuel Solution',
    platform: 'mobile',
    description: 'Flutter customer app automating bulk-fuel and CNG pump ordering for a South African distributor — paperless ordering, real-time order tracking, and spending reports for 1,000+ customers.',
    tech: ['Flutter', 'Dart', 'REST APIs', 'Firebase'],
    achievement: 'Automated ordering for 1,000+ fuel & CNG customers',
    gradientFrom: 'from-red-500',
    gradientTo: 'to-rose-600',
    featured: false,
    link: 'https://fuelsolution.co.za/',
    github: GITHUB_PROFILE,
  },
  {
    initials: 'MA',
    name: 'MyAppointment',
    category: 'MyAppointment',
    platform: 'mobile',
    description: 'Flutter appointment-booking app connecting customers with registered businesses across South Africa for hassle-free scheduling, with a dedicated business-side dashboard to manage bookings.',
    tech: ['Flutter', 'Dart', 'REST APIs', 'Firebase'],
    achievement: '10,000+ downloads on Google Play',
    gradientFrom: 'from-fuchsia-500',
    gradientTo: 'to-purple-600',
    featured: false,
    link: 'https://play.google.com/store/apps/details?id=uth.redi.myappointment.app&hl=en_IN',
    github: GITHUB_PROFILE,
  },
  {
    initials: 'WB',
    name: 'WritingBuddy',
    category: 'Softaar Technologies',
    platform: 'web',
    description: 'AI thesis and research-paper writing assistant — auto-generates APA/IEEE/Harvard citations, builds outlines, and exports to PDF/DOCX/LaTeX.',
    tech: ['Flutter', 'Firebase', 'Riverpod', 'Stripe'],
    achievement: 'Founder product, Softaar Technologies — live SaaS',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-cyan-500',
    featured: false,
    link: 'https://writingbuddy.ai',
    github: GITHUB_PROFILE,
  },
  {
    initials: 'ZA',
    name: 'ZeroApply',
    category: 'Softaar Technologies',
    platform: 'web',
    description: 'AI-powered resume builder and auto-apply platform — generates tailored resumes and cover letters, then applies to jobs automatically.',
    tech: ['Next.js', 'Firebase', 'OpenAI', 'Stripe'],
    achievement: 'Founder product, Softaar Technologies — live SaaS',
    gradientFrom: 'from-green-500',
    gradientTo: 'to-emerald-600',
    featured: false,
    link: 'https://zeroapply.ai',
    github: GITHUB_PROFILE,
  },
  {
    initials: 'TS',
    name: 'TrueStore',
    category: 'Softaar Technologies',
    platform: 'web',
    description: 'AI App Store Optimization tool — generates high-converting screenshots, app icons, keyword research, and listing copy for iOS & Android apps.',
    tech: ['Next.js', 'Firebase', 'Stripe'],
    achievement: 'Founder product, Softaar Technologies — live SaaS with active billing',
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-indigo-600',
    featured: false,
    link: 'https://truestore.ai',
    github: GITHUB_PROFILE,
  },
  {
    initials: 'ZS',
    name: 'ZeroSEO',
    category: 'Softaar Technologies',
    platform: 'web',
    description: 'AI SEO autopilot — researches competitors, writes and publishes an SEO-optimized article daily, and builds real backlinks with zero manual work.',
    tech: ['Next.js', 'Firebase', 'OpenAI', 'Stripe'],
    achievement: 'Founder product, Softaar Technologies — live SaaS',
    gradientFrom: 'from-yellow-500',
    gradientTo: 'to-lime-500',
    featured: false,
    link: 'https://zeroseo.ai',
    github: GITHUB_PROFILE,
  },
  {
    initials: 'SL',
    name: 'SoLangu',
    category: 'Softaar Technologies',
    platform: 'mobile',
    description: 'Real-time language-exchange app — matches users for live voice practice via WebRTC, with an AI voice tutor fallback when no partner is available.',
    tech: ['Flutter', 'WebRTC', 'LiveKit', 'Firebase', 'RevenueCat'],
    achievement: 'Founder product, Softaar Technologies — published on App Store & Play Store',
    gradientFrom: 'from-pink-500',
    gradientTo: 'to-rose-500',
    featured: false,
    link: 'https://apps.apple.com/us/app/solangu-ai-speaking-practice/id6762832986',
    github: GITHUB_PROFILE,
  },
  {
    initials: 'DM',
    name: 'DailyMe',
    category: 'Softaar Technologies',
    platform: 'mobile',
    description: 'Meditation and sleep app — guided sessions, breathing exercises, daily affirmations, and sleep sounds to help build healthier daily habits.',
    tech: ['Flutter', 'Firebase', 'RevenueCat', 'Riverpod'],
    achievement: 'Founder product, Softaar Technologies — published on the App Store',
    gradientFrom: 'from-slate-500',
    gradientTo: 'to-indigo-600',
    featured: false,
    link: 'https://apps.apple.com/at/app/dailyme-meditation-sleep/id6774474854',
    github: GITHUB_PROFILE,
  },
] as const;

type Platform = 'web' | 'mobile';

const TABS: { key: 'all' | Platform; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web' },
  { key: 'mobile', label: 'Mobile' },
];

const handleTiltMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const rotateX = ((y - rect.height / 2) / rect.height) * -6;
  const rotateY = ((x - rect.width / 2) / rect.width) * 6;
  card.style.transition = 'none';
  card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  card.style.setProperty('--spot-x', `${x}px`);
  card.style.setProperty('--spot-y', `${y}px`);
};

const handleTiltLeave = (e: React.MouseEvent<HTMLDivElement>) => {
  const card = e.currentTarget;
  card.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1)';
  card.style.transform = '';
};

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
    className="px-2.5 py-1 bg-surface border border-border text-xs font-medium rounded-lg text-text-secondary
               transition-all duration-200 hover:border-primary-accent hover:text-primary-accent hover:-translate-y-0.5"
  >
    {label}
  </span>
);

const ProjectLinks = ({ link, github, compact }: { link: string; github: string; compact?: boolean }) => (
  <div className="flex gap-2 mt-auto pt-1">
    <a
      href={link}
      className={`flex-1 text-center rounded-xl font-semibold text-white gradient-bg
                 transition-all duration-200 hover:opacity-90 hover:shadow-md hover:-translate-y-0.5
                 ${compact ? 'py-1.5 text-xs' : 'py-2 text-sm'}`}
    >
      View
    </a>
    <a
      href={github}
      className={`flex-1 text-center rounded-xl font-semibold border border-border
                 transition-all duration-200 hover:border-primary-accent hover:text-primary-accent hover:-translate-y-0.5
                 ${compact ? 'py-1.5 text-xs' : 'py-2 text-sm'}`}
    >
      GitHub
    </a>
  </div>
);

const ProjectsSection = ({ id }: { id: string }) => {
  const { ref, inView } = useInView();
  const [tab, setTab] = useState<'all' | Platform>('all');

  const filtered = tab === 'all' ? PROJECTS : PROJECTS.filter((p) => p.platform === tab);
  const featured = filtered.filter((p) => p.featured);
  const others = filtered.filter((p) => !p.featured);

  return (
    <section id={id} className="py-24 px-4">
      <div ref={ref} className="max-w-7xl mx-auto">

        <div className={`text-center mb-10 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="section-tag">Projects</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            Production apps and research projects built across Germany, UAE, and Bangladesh.
          </p>
        </div>

        {/* Platform tab switcher */}
        <div className={`flex justify-center mb-12 ${inView ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
          <div className="inline-flex p-1 gap-1 bg-surface border border-border rounded-2xl">
            {TABS.map((t) => {
              const count = t.key === 'all' ? PROJECTS.length : PROJECTS.filter((p) => p.platform === t.key).length;
              const active = tab === t.key;
              return (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setTab(t.key)}
                  className={`flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-xl text-sm font-semibold
                              transition-all duration-200
                              ${active
                                ? 'gradient-bg text-white shadow-sm'
                                : 'text-text-secondary hover:text-primary-accent'}`}
                >
                  {t.key !== 'all' && <PlatformIcon platform={t.key} className="w-3.5 h-3.5 flex-shrink-0" />}
                  {t.label}
                  <span className={active ? 'text-white/75' : 'text-text-muted'}>{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured spotlight row */}
        <div
          className={`grid grid-cols-1 gap-6 mb-6 ${
            featured.length > 1 ? 'lg:grid-cols-2' : 'lg:max-w-2xl lg:mx-auto'
          }`}
          style={{ perspective: '1200px' }}
        >
          {featured.map((p, i) => (
            <div
              key={p.name}
              className={`h-full ${inView ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div
                className="card group relative overflow-hidden h-full flex flex-col sm:flex-row"
                style={{ transformStyle: 'preserve-3d' }}
                onMouseMove={handleTiltMove}
                onMouseLeave={handleTiltLeave}
              >
                <div className="tilt-spotlight" />

                <div className={`relative sm:w-[40%] min-h-[180px] bg-gradient-to-br ${p.gradientFrom} ${p.gradientTo} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-110">
                    <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/10" />
                    <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-white/10" />
                  </div>
                  <span className="text-5xl font-extrabold text-white/90 tracking-tight relative z-10 select-none
                                    transition-transform duration-500 ease-out group-hover:scale-110">
                    {p.initials}
                  </span>
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1 px-2.5 py-0.5 bg-white/20 backdrop-blur-sm
                                    text-white text-[11px] font-bold rounded-full border border-white/30 uppercase tracking-wide">
                    ★ Featured
                  </span>
                  <span className="absolute top-4 right-4 inline-flex items-center justify-center w-6 h-6 rounded-full
                                    bg-black/20 backdrop-blur-sm text-white/90 border border-white/20">
                    <PlatformIcon platform={p.platform} className="w-3.5 h-3.5" />
                  </span>
                  <span className="absolute bottom-4 left-4 px-2 py-0.5 bg-black/20 backdrop-blur-sm text-white/80 text-xs rounded-full">
                    {p.category}
                  </span>
                </div>

                <div className="flex-1 p-6 sm:p-7 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 transition-colors duration-200 group-hover:text-primary-accent">{p.name}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">{p.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tech.map((t) => <TechChip key={t} label={t} />)}
                  </div>

                  <p className="text-sm font-semibold text-primary-accent mb-5 flex items-center gap-1.5">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {p.achievement}
                  </p>

                  <ProjectLinks link={p.link} github={p.github} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compact grid for the rest */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" style={{ perspective: '1200px' }}>
          {others.map((p, i) => (
            <div
              key={p.name}
              className={`h-full ${inView ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${(featured.length + i) * 90}ms` }}
            >
              <div
                className="card group relative overflow-hidden h-full flex flex-col p-5"
                style={{ transformStyle: 'preserve-3d' }}
                onMouseMove={handleTiltMove}
                onMouseLeave={handleTiltLeave}
              >
                <div className="tilt-spotlight" />

                <div className="flex items-start gap-3 mb-3">
                  <div
                    className={`w-11 h-11 flex-shrink-0 rounded-xl bg-gradient-to-br ${p.gradientFrom} ${p.gradientTo}
                                flex items-center justify-center text-white font-bold text-sm shadow-sm
                                transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-3`}
                  >
                    {p.initials}
                  </div>
                  <div className="min-w-0 pt-0.5 flex-1">
                    <h3 className="font-bold text-sm leading-tight truncate transition-colors duration-200 group-hover:text-primary-accent">
                      {p.name}
                    </h3>
                    <p className="text-xs text-text-muted truncate">{p.category}</p>
                  </div>
                  <span className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-lg
                                    bg-surface border border-border text-text-muted">
                    <PlatformIcon platform={p.platform} className="w-3.5 h-3.5" />
                  </span>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed mb-3 line-clamp-3">{p.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tech.slice(0, 3).map((t) => <TechChip key={t} label={t} />)}
                  {p.tech.length > 3 && (
                    <span className="px-2 py-1 text-xs font-medium text-text-muted">+{p.tech.length - 3}</span>
                  )}
                </div>

                <p className="text-xs font-semibold text-primary-accent mb-4">{p.achievement}</p>

                <ProjectLinks link={p.link} github={p.github} compact />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
