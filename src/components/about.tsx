'use client';

import React from 'react';
import { useInView } from '../hooks/useInView';
import SectionHeader from './section-header';

const META = [
  { label: 'Location',    value: 'Dresden, Germany' },
  { label: 'Visa',        value: '18G – Open to roles across Germany' },
  { label: 'Degree',      value: "M.Sc. Web Engineering (2021–2026)" },
  { label: 'University',  value: 'TU Chemnitz, Germany' },
  { label: 'Languages',   value: 'English (B2) · German (A2-B1) · Bengali (Native)' },
  { label: 'Nationality', value: 'Bangladeshi' },
  { label: 'Availability', value: 'Open to full-time roles & freelance projects' },
];

const EXPERTISE = [
  { accent: 'bg-keyword',    title: 'Flutter & Mobile',   desc: 'Production iOS & Android apps, CI/CD, platform channels' },
  { accent: 'bg-type',       title: 'Full-Stack Web',     desc: 'Next.js, Node.js, FastAPI, REST APIs' },
  { accent: 'bg-const',      title: 'AI Engineering',     desc: 'RAG, LLMs, LangChain, vector databases, AI agents' },
  { accent: 'bg-string',     title: 'M.Sc. Thesis',       desc: '"Learning Buddy" – AI teaching assistant using LLMs & RAG' },
];

const AboutSection = ({ id }: { id: string }) => {
  const { ref, inView } = useInView();

  return (
    <section id={id} className="py-24 px-4">
      <div ref={ref} className="max-w-7xl mx-auto">

        <SectionHeader kicker="About" title="Building the future, one line at a time" inView={inView} />

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Bio */}
          <div className={inView ? 'animate-fade-in-left delay-200' : 'opacity-0'}>
            <p className="text-lg text-text-secondary leading-relaxed mb-5">
              I&apos;m a <strong className="text-text-primary font-medium">Flutter & Full-Stack Developer and AI Engineer</strong> based
              in <strong className="text-text-primary font-medium">Dresden, Germany</strong>, with 4+ years of experience
              delivering production-ready software for companies in Germany, UAE, and Bangladesh.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              My M.Sc. thesis at TU Chemnitz is on{' '}
              <strong className="text-text-primary font-medium">&ldquo;Learning Buddy: An On-Demand AI Teaching Assistant&rdquo;</strong>{' '}
              — an intelligent system built on LLMs, RAG pipelines, and vector databases.
              I hold visa 18G and am open to roles across Germany.
            </p>

            <dl className="card p-5 font-mono text-sm space-y-2">
              {META.map((m) => (
                <div key={m.label} className="flex flex-col sm:flex-row sm:gap-2">
                  <dt className="text-type flex-shrink-0 w-full sm:w-36">{m.label.toLowerCase().replace(/\s+/g, '_')}:</dt>
                  <dd className="text-text-secondary">
                    <span className="text-string">&quot;{m.value}&quot;</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Expertise cards */}
          <div className={`grid grid-cols-2 gap-4 ${inView ? 'animate-fade-in-right delay-300' : 'opacity-0'}`}>
            {EXPERTISE.map((e) => (
              <div key={e.title} className="card p-6">
                <div className={`w-1 h-8 ${e.accent} rounded-full mb-4`} />
                <h3 className="font-medium text-text-primary mb-1">{e.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{e.desc}</p>
              </div>
            ))}

            <div className="col-span-2 card p-6">
              <h3 className="font-medium text-text-primary mb-1">Currently</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Building AI-powered SaaS products and open to consulting engagements in Flutter, AI, and full-stack development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
