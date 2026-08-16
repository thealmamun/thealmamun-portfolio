'use client';

import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';

const CATEGORIES = [
  {
    accent: 'bg-indigo-500',
    text: 'text-indigo-500',
    ring: 'ring-indigo-500',
    name: 'AI Engineering',
    skills: ['LangChain', 'RAG', 'LLMs', 'OpenAI API', 'Gemini', 'BERT', 'NLP', 'Pinecone', 'Qdrant', 'Prompt Engineering', 'LoRA', 'MCP', 'n8n'],
  },
  {
    accent: 'bg-sky-500',
    text: 'text-sky-500',
    ring: 'ring-sky-500',
    name: 'Flutter & Mobile',
    skills: ['Flutter', 'Dart', 'Android', 'iOS', 'Kotlin', 'Java', 'Swift', 'BLoC', 'Riverpod', 'Provider', 'Clean Architecture', 'Platform Channels'],
  },
  {
    accent: 'bg-violet-500',
    text: 'text-violet-500',
    ring: 'ring-violet-500',
    name: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'UI/UX'],
  },
  {
    accent: 'bg-emerald-500',
    text: 'text-emerald-500',
    ring: 'ring-emerald-500',
    name: 'Backend',
    skills: ['Node.js', 'FastAPI', 'Python', 'REST APIs', 'Firebase Functions', 'GraphQL'],
  },
  {
    accent: 'bg-amber-500',
    text: 'text-amber-500',
    ring: 'ring-amber-500',
    name: 'Cloud',
    skills: ['Google Cloud', 'Azure Cloud', 'Firebase', 'DigitalOcean', 'Vertex AI'],
  },
  {
    accent: 'bg-slate-500',
    text: 'text-slate-500',
    ring: 'ring-slate-500',
    name: 'DevOps & Tools',
    skills: ['Fastlane', 'Azure DevOps', 'CI/CD', 'Git', 'GitHub Actions', 'Docker', 'Jira', 'Agile', 'Scrum'],
  },
];

const SkillsSection = ({ id }: { id: string }) => {
  const { ref, inView } = useInView();
  const [active, setActive] = useState(0);
  const activeCategory = CATEGORIES[active];

  return (
    <section id={id} className="py-24 px-4">
      <div ref={ref} className="max-w-5xl mx-auto">

        <div className={`text-center mb-12 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="section-tag">Skills</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
        </div>

        {/* Category tabs */}
        <div className={`flex flex-wrap justify-center gap-2.5 mb-8 ${inView ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
          {CATEGORIES.map((cat, i) => {
            const isActive = i === active;
            return (
              <button
                key={cat.name}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className={`group flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-semibold transition-all duration-200
                  ${isActive
                    ? 'bg-text-primary border-text-primary text-background shadow-md'
                    : 'bg-surface border-border text-text-secondary hover:border-primary-accent hover:text-primary-accent hover:-translate-y-0.5'}`}
              >
                <span
                  className={`w-2 h-2 rounded-full flex-shrink-0 transition-colors duration-200 ${isActive ? cat.accent : `${cat.accent} opacity-60`}`}
                />
                {cat.name}
                <span
                  className={`text-xs font-bold rounded-full px-1.5 py-0.5 leading-none
                    ${isActive ? 'bg-background/20 text-background' : 'bg-background text-text-muted'}`}
                >
                  {cat.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active category panel */}
        <div
          key={activeCategory.name}
          className={`card p-8 md:p-10 animate-scale-in ${inView ? '' : 'opacity-0'}`}
        >
          <div className="flex items-center gap-3 mb-7">
            <div className={`w-1.5 h-9 ${activeCategory.accent} rounded-full flex-shrink-0`} />
            <div>
              <h3 className="text-xl font-extrabold text-text-primary">{activeCategory.name}</h3>
              <p className="text-xs text-text-muted font-medium">{activeCategory.skills.length} skills & tools</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {activeCategory.skills.map((skill, i) => (
              <span
                key={skill}
                className="px-4 py-2 bg-surface border border-border text-sm font-semibold rounded-xl
                           text-text-secondary hover:border-primary-accent hover:text-primary-accent
                           hover:bg-primary-light hover:-translate-y-0.5 transition-all duration-200 cursor-default
                           animate-fade-in-up"
                style={{ animationDelay: `${i * 35}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
