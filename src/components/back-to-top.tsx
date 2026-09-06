'use client';

import React from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';

const RADIUS = 20;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/** Floating scroll-to-top button whose ring visualises overall reading progress. */
const BackToTop = () => {
  const progress = useScrollProgress();
  const visible = progress > 4;
  const offset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-surface border border-border backdrop-blur-xl
                  flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-border-strong
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <svg className="absolute inset-0 w-12 h-12 -rotate-90" viewBox="0 0 48 48" aria-hidden>
        <circle cx="24" cy="24" r={RADIUS} fill="none" stroke="var(--color-border)" strokeWidth="2" />
        <circle
          cx="24" cy="24" r={RADIUS} fill="none"
          stroke="var(--color-primary-accent)" strokeWidth="2" strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.15s ease-out' }}
        />
      </svg>
      <svg className="w-4 h-4 text-text-primary relative" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default BackToTop;
