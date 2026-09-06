'use client';

import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { FAQS } from '../data/faqs';
import SectionHeader from './section-header';

const FaqSection = ({ id }: { id: string }) => {
  const { ref, inView } = useInView();
  const [open, setOpen] = useState<string | null>(`${FAQS[0].category}-0`);

  return (
    <section id={id} className="py-24 px-4">
      <div ref={ref} className="max-w-4xl mx-auto">

        <SectionHeader
          kicker="FAQ"
          title="Frequently asked questions"
          description="Common questions about hiring a Flutter developer, AI consultant, or full-stack developer based in Dresden, Germany."
          inView={inView}
        />

        <div className="space-y-10">
          {FAQS.map((group, gi) => (
            <div
              key={group.category}
              className={inView ? 'animate-fade-in-up' : 'opacity-0'}
              style={{ animationDelay: `${gi * 120}ms` }}
            >
              <h3 className="font-mono text-xs text-type mb-4">
                # {group.category}
              </h3>

              <div className="space-y-3">
                {group.items.map((item, ii) => {
                  const key = `${group.category}-${ii}`;
                  const isOpen = open === key;
                  return (
                    <div
                      key={key}
                      className="card overflow-hidden"
                    >
                      <h4 className="m-0">
                        <button
                          type="button"
                          onClick={() => setOpen(isOpen ? null : key)}
                          aria-expanded={isOpen}
                          className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left
                                     font-semibold text-text-primary transition-colors duration-200 hover:text-primary-accent"
                        >
                          {item.q}
                          <svg
                            className={`w-4 h-4 flex-shrink-0 text-text-muted transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                        </button>
                      </h4>
                      <div
                        className="grid transition-all duration-300 ease-out"
                        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                      >
                        <div className="overflow-hidden">
                          <p className="px-5 pb-4 text-sm text-text-secondary leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
