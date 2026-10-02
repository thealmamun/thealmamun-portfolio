'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const BADGES = [
  '4+ Years Experience', 'Dresden, Germany', 'Flutter Expert', 'Full-Stack Developer', 'AI Engineer', 'AI Consultant', 'SaaS Founder',
];

const STACK = ['flutter', 'nextjs', 'fastapi', 'langchain', 'firebase'];

/** Types one character at a time; calls onDone once, then stays. */
function useTypewriter(text: string, start: boolean, speed = 28) {
  const [out, setOut] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!start) return;
    setOut('');
    setDone(false);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, text]);

  return { out, done };
}

const HeroSection = ({ id }: { id: string }) => {
  const [loaded, setLoaded] = useState(false);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const cmd = useTypewriter('whoami', loaded, 55);
  const line1 = useTypewriter('Al Mamun — Flutter & Full-Stack Developer, AI Engineer', cmd.done, 12);
  const line2 = useTypewriter('Dresden, DE · 4+ yrs · building production software', line1.done, 12);
  const line3 = useTypewriter(`const stack = [${STACK.map((s) => `'${s}'`).join(', ')}];`, line2.done, 10);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 250);
    return () => clearTimeout(t);
  }, []);

  const restVisible = line3.done;
  const vis = (extra = '') => (restVisible ? `animate-fade-in-up ${extra}` : 'opacity-0');

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = spotlightRef.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,123,114,0.07), transparent 45%)`;
  };

  const handleMouseLeave = () => {
    const el = spotlightRef.current;
    if (el) el.style.background = 'transparent';
  };

  return (
    <section
      id={id}
      className="relative flex flex-col overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >

      {/* Background texture — a static engineering-grid, no morphing shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <svg className="absolute inset-0 h-full w-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#79C0FF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
        {/* Cursor-reactive glow — the one motion cue that responds to the visitor, not the scroll */}
        <div ref={spotlightRef} className="absolute inset-0 transition-[background] duration-150 ease-out hidden md:block" />
      </div>

      {/* Hero content */}
      <div className="relative flex-1 flex items-center px-4 pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

            {/* Left: terminal boot + copy */}
            <div className="flex-1 w-full text-left">

              {/* Terminal window — the one orchestrated moment on the page */}
              <div className={`card overflow-hidden max-w-xl ${loaded ? 'animate-scale-in' : 'opacity-0'}`}>
                <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border bg-surface-2">
                  <span className="win-dot bg-[#FF5F56]" />
                  <span className="win-dot bg-[#FFBD2E]" />
                  <span className="win-dot bg-[#27C93F]" />
                  <span className="ml-3 font-mono text-xs text-text-muted">bash — al-mamun</span>
                </div>
                <div className="px-5 py-5 font-mono text-[13px] sm:text-sm leading-relaxed min-h-[132px]">
                  <p className="text-text-secondary">
                    <span className="text-string">$</span> {cmd.out}
                    {!cmd.done && <span className="terminal-caret" />}
                  </p>
                  {cmd.done && (
                    <>
                      <p className="text-text-primary mt-1">
                        <span className="text-keyword">&gt;</span> {line1.out}
                        {!line1.done && <span className="terminal-caret" />}
                      </p>
                      {line1.done && (
                        <p className="text-text-secondary">
                          <span className="text-keyword">&gt;</span> {line2.out}
                          {!line2.done && <span className="terminal-caret" />}
                        </p>
                      )}
                      {line2.done && (
                        <p className="mt-2 text-const">
                          {line3.out}
                          {!line3.done && <span className="terminal-caret" />}
                        </p>
                      )}
                    </>
                  )}
                </div>
              </div>

              <h1 className={`mt-8 font-display text-3xl sm:text-4xl lg:text-[3.1rem] font-medium leading-[1.14] tracking-tight text-text-primary ${vis('delay-100')}`}>
                Flutter &amp; Full&#8209;Stack Developer&nbsp;<br className="hidden sm:block" />
                <span className="text-text-secondary font-medium">|</span> AI Engineer
                <span className="block mt-2">
                  Building Production&#8209;Ready Software
                </span>
              </h1>

              <p className={`mt-6 text-lg md:text-xl text-text-secondary max-w-xl leading-relaxed ${vis('delay-200')}`}>
                As an AI consultant and full-stack developer based in Dresden, Germany,
                I help startups and businesses build AI systems, SaaS platforms,
                mobile applications, and automation solutions that scale.
              </p>

              <div className={`mt-8 flex flex-col sm:flex-row items-center sm:items-stretch gap-3 sm:gap-5 justify-start ${vis('delay-300')}`}>
                <a
                  href="https://www.fiverr.com/users/mrhmamun99/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded font-mono text-sm font-medium text-background gradient-bg
                             transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
                >
                  $ hire --me
                </a>
                <a
                  href="#projects"
                  className="px-7 py-3.5 rounded font-mono text-sm font-medium text-text-primary bg-surface border border-border
                             transition-all duration-300 hover:border-keyword hover:text-keyword hover:-translate-y-0.5"
                >
                  cd ./projects
                </a>
                <a
                  href="/Al-Mamun-FullStack-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(new CustomEvent('open-resume-viewer'));
                  }}
                  className="group px-2 py-3.5 font-mono text-sm font-medium text-text-secondary
                             inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-keyword"
                >
                  resume.pdf
                  <span aria-hidden className="transition-transform duration-200 group-hover:translate-y-0.5">↓</span>
                </a>
              </div>

              <div className={`mt-8 flex flex-wrap gap-2 justify-start ${vis('delay-400')}`}>
                {BADGES.map((b) => (
                  <span
                    key={b}
                    className="px-3.5 py-1.5 text-xs font-mono bg-surface border border-border
                               rounded text-text-secondary"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: avatar */}
            <div className={`flex-shrink-0 ${loaded ? 'animate-fade-in-right delay-200' : 'opacity-0'}`}>
              <div className="group relative">
                <div className="absolute inset-0 rounded-full gradient-bg blur-3xl opacity-20 scale-110 transition-opacity duration-500 group-hover:opacity-30" />
                {/* Solid ring separates the photo's light background from the dark page cleanly */}
                <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full bg-background p-2 transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                  <div className="relative w-full h-full rounded-full overflow-hidden border border-border-strong">
                    <Image
                      src="/al-mamun-photo.jpg"
                      alt="Al Mamun — Flutter & Full-Stack Developer | AI Engineer"
                      fill
                      preload
                      sizes="(min-width: 768px) 288px, 224px"
                      className="object-cover object-[50%_20%]"
                    />
                  </div>
                </div>

                {/* Floating available badge */}
                <div
                  className="absolute -bottom-3 -right-3 card px-4 py-2 animate-float transition-transform duration-300
                              group-hover:scale-105"
                >
                  <p className="text-[10px] font-mono text-text-muted leading-none mb-1">status:</p>
                  <p className="text-sm font-mono font-medium text-string flex items-center gap-1.5">
                    <span className="relative flex w-1.5 h-1.5">
                      <span className="absolute inline-flex w-full h-full rounded-full bg-string animate-pulse-dot" />
                      <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-string" />
                    </span>
                    available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
