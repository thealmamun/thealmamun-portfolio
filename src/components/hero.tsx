'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const BADGES = [
  '4+ Years Experience', 'Dresden, Germany', 'Flutter Expert', 'Full-Stack Developer', 'AI Engineer', 'AI Consultant', 'SaaS Founder',
];

const HeroSection = ({ id }: { id: string }) => {
  const [loaded, setLoaded] = useState(false);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  const vis = (extra = '') =>
    loaded ? `animate-fade-in-up ${extra}` : 'opacity-0';

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = spotlightRef.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(249,115,22,0.12), transparent 45%)`;
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

      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div
          className="absolute -top-48 -right-48 w-[500px] h-[500px] rounded-full
                     bg-gradient-to-br from-orange-200/50 to-amber-200/50 blur-3xl animate-blob"
        />
        <div
          className="absolute top-1/3 -left-48 w-96 h-96 rounded-full
                     bg-gradient-to-br from-amber-200/40 to-orange-200/40 blur-3xl animate-blob"
          style={{ animationDelay: '3.5s' }}
        />
        <div
          className="absolute -bottom-24 right-1/3 w-80 h-80 rounded-full
                     bg-gradient-to-br from-orange-200/35 to-red-200/35 blur-3xl animate-blob"
          style={{ animationDelay: '7s' }}
        />
        <svg className="absolute inset-0 h-full w-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#F97316" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
        {/* Cursor-reactive glow (desktop pointer only) */}
        <div ref={spotlightRef} className="absolute inset-0 transition-[background] duration-150 ease-out hidden md:block" />
      </div>

      {/* Hero content */}
      <div className="relative flex-1 flex items-center px-4 pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

            {/* Left: copy */}
            <div className="flex-1 text-center lg:text-left">

              <div className={loaded ? 'animate-fade-in' : 'opacity-0'}>
                <span className="section-tag">Available for new projects</span>
              </div>

              <h1 className={`mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.12] tracking-tight ${vis('delay-100')}`}>
                Flutter &amp; Full&#8209;Stack Developer&nbsp;<br className="hidden sm:block" />
                <span className="text-text-secondary font-bold">|</span> AI Engineer
                <span className="block mt-2 gradient-text-animated">
                  Building Production&#8209;Ready Software
                </span>
              </h1>

              <p className={`mt-6 text-lg md:text-xl text-text-secondary max-w-xl mx-auto lg:mx-0 leading-relaxed ${vis('delay-200')}`}>
                As an AI consultant and full-stack developer based in Dresden, Germany,
                I help startups and businesses build AI systems, SaaS platforms,
                mobile applications, and automation solutions that scale.
              </p>

              <div className={`mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-5 justify-center lg:justify-start ${vis('delay-300')}`}>
                <a
                  href="https://www.fiverr.com/users/mrhmamun99/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-xl text-white font-semibold gradient-bg shadow-lg shadow-orange-100
                             transition-all duration-300 hover:opacity-90 hover:shadow-xl hover:shadow-orange-200 hover:-translate-y-0.5"
                >
                  Hire Me
                </a>
                <a
                  href="#projects"
                  className="px-7 py-3.5 rounded-xl font-semibold text-text-primary bg-white border border-border
                             transition-all duration-300 hover:border-primary-accent hover:text-primary-accent hover:-translate-y-0.5 hover:shadow-md"
                >
                  View Projects
                </a>
                <a
                  href="/Al-Mamun-FullStack-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(new CustomEvent('open-resume-viewer'));
                  }}
                  className="group px-2 py-3.5 font-semibold text-text-secondary
                             inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-primary-accent"
                >
                  Resume
                  <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">↓</span>
                </a>
              </div>

              <div className={`mt-8 flex flex-wrap gap-2 justify-center lg:justify-start ${vis('delay-400')}`}>
                {BADGES.map((b) => (
                  <span
                    key={b}
                    className="px-3.5 py-1.5 text-sm font-medium bg-white border border-border
                               rounded-full text-text-secondary shadow-sm"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: avatar */}
            <div className={`flex-shrink-0 ${loaded ? 'animate-fade-in-right delay-200' : 'opacity-0'}`}>
              <div className="group relative">
                <div className="absolute inset-0 rounded-full gradient-bg blur-2xl opacity-20 scale-110 animate-blob transition-opacity duration-500 group-hover:opacity-30" />
                <div
                  className="relative w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden
                              border-4 border-white shadow-2xl shadow-orange-100 transition-transform duration-500 ease-out
                              group-hover:scale-[1.03]"
                >
                  <Image
                    src="/al-mamun-photo.jpg"
                    alt="Al Mamun — Flutter & Full-Stack Developer | AI Engineer"
                    fill
                    preload
                    sizes="(min-width: 768px) 320px, 240px"
                    className="object-cover"
                  />
                </div>

                {/* Floating available badge */}
                <div
                  className="absolute -bottom-3 -right-3 bg-white border border-border
                              rounded-2xl px-4 py-2 shadow-xl animate-float transition-transform duration-300
                              group-hover:scale-105"
                >
                  <p className="text-xs text-text-secondary leading-none mb-0.5">Status</p>
                  <p className="text-sm font-bold text-success">● Available</p>
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
