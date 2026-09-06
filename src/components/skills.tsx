'use client';

import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import SectionHeader from './section-header';

const CATEGORIES = [
  {
    accent: 'bg-const',
    key: 'ai-engineering',
    name: 'AI Engineering',
    skills: ['LangChain', 'RAG', 'LLMs', 'OpenAI API', 'Gemini', 'BERT', 'NLP', 'Pinecone', 'Qdrant', 'Prompt Engineering', 'LoRA', 'MCP', 'n8n'],
  },
  {
    accent: 'bg-type',
    key: 'flutter-mobile',
    name: 'Flutter & Mobile',
    skills: ['Flutter', 'Dart', 'Android', 'iOS', 'Kotlin', 'Java', 'Swift', 'BLoC', 'Riverpod', 'Provider', 'Clean Architecture', 'Platform Channels'],
  },
  {
    accent: 'bg-keyword',
    key: 'frontend',
    name: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'UI/UX'],
  },
  {
    accent: 'bg-string',
    key: 'backend',
    name: 'Backend',
    skills: ['Node.js', 'FastAPI', 'Python', 'REST APIs', 'Firebase Functions', 'GraphQL'],
  },
  {
    accent: 'bg-type',
    key: 'cloud',
    name: 'Cloud',
    skills: ['Google Cloud', 'Azure Cloud', 'Firebase', 'DigitalOcean', 'Vertex AI'],
  },
  {
    accent: 'bg-const',
    key: 'devops-tools',
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

        <SectionHeader kicker="Skills" title="My tech stack" meta={`${CATEGORIES.length} groups`} inView={inView} />

        {/* Category tabs, styled like package.json script names */}
        <div className={`flex flex-wrap gap-2 mb-8 font-mono text-sm ${inView ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
          {CATEGORIES.map((cat, i) => {
            const isActive = i === active;
            return (
              <button
                key={cat.name}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className={`group flex items-center gap-2 px-3.5 py-2 rounded border transition-all duration-200
                  ${isActive
                    ? 'bg-surface-2 border-keyword text-text-primary'
                    : 'bg-surface border-border text-text-secondary hover:border-border-strong hover:text-text-primary'}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-opacity duration-200 ${cat.accent} ${isActive ? '' : 'opacity-50'}`} />
                {cat.key}
                <span className="text-text-muted">[{cat.skills.length}]</span>
              </button>
            );
          })}
        </div>

        {/* Active category panel, styled as a package.json dependency block */}
        <div
          key={activeCategory.name}
          className={`card p-0 overflow-hidden animate-scale-in ${inView ? '' : 'opacity-0'}`}
        >
          <div className="flex items-center gap-2.5 px-6 sm:px-8 py-4 border-b border-border bg-surface-2">
            <span className={`w-2 h-2 rounded-full flex-shrink-0 ${activeCategory.accent}`} />
            <h3 className="font-mono text-sm text-text-primary">
              <span className="text-type">&quot;{activeCategory.key}&quot;</span>
              <span className="text-text-muted">: {'{'}</span>
            </h3>
            <span className="ml-auto font-mono text-xs text-text-muted">{activeCategory.skills.length} deps</span>
          </div>

          <div className="flex flex-wrap gap-2.5 p-6 sm:p-8">
            {activeCategory.skills.map((skill, i) => (
              <span
                key={skill}
                className="px-3.5 py-1.5 bg-surface border border-border text-sm font-mono rounded
                           text-text-secondary hover:border-keyword hover:text-keyword
                           transition-all duration-200 cursor-default
                           animate-fade-in-up"
                style={{ animationDelay: `${i * 35}ms` }}
              >
                <span className="text-const">&quot;{skill}&quot;</span>
              </span>
            ))}
          </div>
          <div className="px-6 sm:px-8 pb-4 -mt-2 font-mono text-sm text-text-muted">{'}'}</div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
