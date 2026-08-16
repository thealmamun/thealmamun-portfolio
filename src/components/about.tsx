'use client';

import React from 'react';
import { useInView } from '../hooks/useInView';

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
  { accent: 'bg-sky-500',    title: 'Flutter & Mobile',   desc: 'Production iOS & Android apps, CI/CD, platform channels' },
  { accent: 'bg-violet-500', title: 'Full-Stack Web',     desc: 'Next.js, Node.js, FastAPI, REST APIs' },
  { accent: 'bg-indigo-500', title: 'AI Engineering',     desc: 'RAG, LLMs, LangChain, vector databases, AI agents' },
  { accent: 'bg-emerald-500',title: 'M.Sc. Thesis',       desc: '"Learning Buddy" – AI teaching assistant using LLMs & RAG' },
];

const AboutSection = ({ id }: { id: string }) => {
  const { ref, inView } = useInView();

  return (
    <section id={id} className="py-24 px-4">
      <div ref={ref} className="max-w-7xl mx-auto">

        <div className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="section-tag">About Me</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
            Building the Future, <span className="gradient-text">One Line at a Time</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Bio */}
          <div className={inView ? 'animate-fade-in-left delay-200' : 'opacity-0'}>
            <p className="text-lg text-text-secondary leading-relaxed mb-5">
              I&apos;m a <strong className="text-text-primary font-semibold">Flutter & Full-Stack Developer and AI Engineer</strong> based
              in <strong className="text-text-primary font-semibold">Dresden, Germany</strong>, with 4+ years of experience
              delivering production-ready software for companies in Germany, UAE, and Bangladesh.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              My M.Sc. thesis at TU Chemnitz is on{' '}
              <strong className="text-text-primary font-semibold">&ldquo;Learning Buddy: An On-Demand AI Teaching Assistant&rdquo;</strong>{' '}
              — an intelligent system built on LLMs, RAG pipelines, and vector databases.
              I hold visa 18G and am open to roles across Germany.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {META.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl p-4 bg-surface border border-border transition-all duration-200
                             hover:border-primary-accent hover:shadow-sm hover:-translate-y-0.5"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-1">{m.label}</p>
                  <p className="text-sm font-semibold text-text-primary">{m.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise cards */}
          <div className={`grid grid-cols-2 gap-4 ${inView ? 'animate-fade-in-right delay-300' : 'opacity-0'}`}>
            {EXPERTISE.map((e) => (
              <div key={e.title} className="group card p-6">
                <div className={`w-1 h-8 ${e.accent} rounded-full mb-4 transition-all duration-300 group-hover:h-10`} />
                <h3 className="font-bold text-text-primary mb-1">{e.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{e.desc}</p>
              </div>
            ))}

            <div className="col-span-2 card p-6">
              <h3 className="font-bold text-text-primary mb-1">Currently</h3>
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
