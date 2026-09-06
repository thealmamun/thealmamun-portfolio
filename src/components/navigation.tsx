'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Sections as "open files" in an editor tab strip — the site's actual
// information architecture, just named the way a project's file tree would.
const tabs = [
  { name: 'about.tsx',        href: '#about' },
  { name: 'experience.log',   href: '#experience' },
  { name: 'projects/',        href: '#projects' },
  { name: 'skills.json',      href: '#skills' },
  { name: 'certs.yml',        href: '#certificates' },
  { name: 'reviews.md',       href: '#testimonials' },
  { name: 'faq.md',           href: '#faq' },
  { name: 'contact.sh',       href: '#contact' },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#about');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = tabs.map((t) => t.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHref(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-sm border-b border-border' : 'bg-background/70 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center h-14 gap-1">

          {/* Window dots — this bar is the "title bar" of the editor */}
          <div className="hidden sm:flex items-center gap-1.5 pr-3 mr-1 border-r border-border flex-shrink-0">
            <span className="win-dot bg-[#FF5F56]" />
            <span className="win-dot bg-[#FFBD2E]" />
            <span className="win-dot bg-[#27C93F]" />
          </div>

          <Link
            href="/"
            className="font-mono text-sm font-medium text-text-primary tracking-tight flex-shrink-0 mr-2 hidden md:inline-flex items-center gap-1.5 hover:text-keyword transition-colors"
          >
            <span className="text-type">~/</span>
            <span className="gradient-text font-semibold">al-mamun</span>
          </Link>

          {/* Desktop tab strip — scrolls when tabs overrun the width, faded
              at the edge rather than clipped mid-label. */}
          <div
            className="hidden md:flex items-stretch flex-1 min-w-0 overflow-x-auto"
            style={{ maskImage: 'linear-gradient(to right, black calc(100% - 24px), transparent)', WebkitMaskImage: 'linear-gradient(to right, black calc(100% - 24px), transparent)' }}
          >
            {tabs.map((tab) => {
              const active = activeHref === tab.href;
              return (
                <Link
                  key={tab.name}
                  href={tab.href}
                  className={`group relative flex items-center gap-1.5 px-2.5 h-14 font-mono text-xs whitespace-nowrap border-r border-border transition-colors duration-150
                    ${active ? 'text-text-primary bg-surface' : 'text-text-secondary hover:text-text-primary hover:bg-surface/60'}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${active ? 'bg-keyword' : 'bg-border-strong'}`} />
                  {tab.name}
                  <span
                    className={`absolute inset-x-0 -bottom-px h-[2px] transition-transform duration-200 origin-left gradient-bg
                      ${active ? 'scale-x-100' : 'scale-x-0'}`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-1 pl-2 flex-shrink-0 ml-auto">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-resume-viewer'))}
              className="px-3 py-1.5 rounded text-xs font-mono text-text-secondary hover:text-type transition-colors duration-150"
            >
              resume.pdf
            </button>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-command-palette'))}
              aria-label="Open command menu"
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-border text-xs font-mono
                         text-text-secondary transition-all duration-150 hover:border-keyword hover:text-keyword"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
              </svg>
              <kbd className="text-[10px] font-semibold border border-border rounded px-1 py-0.5 bg-surface">⌘K</kbd>
            </button>
            <a
              href="https://www.fiverr.com/users/mrhmamun99/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-3.5 py-1.5 rounded text-xs font-mono font-medium text-background bg-keyword
                         transition-all duration-150 hover:opacity-90"
            >
              $ hire --me
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden ml-auto p-2 rounded text-text-secondary hover:text-keyword transition-all"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu — a file-tree explorer panel */}
      {open && (
        <div className="md:hidden glass border-t border-border">
          <div className="px-3 py-3 space-y-0.5 font-mono text-sm">
            {tabs.map((tab) => {
              const active = activeHref === tab.href;
              return (
                <Link
                  key={tab.name}
                  href={tab.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded transition-all
                    ${active ? 'text-text-primary bg-surface' : 'text-text-secondary hover:text-keyword hover:bg-surface/60'}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${active ? 'bg-keyword' : 'bg-border-strong'}`} />
                  {tab.name}
                </Link>
              );
            })}
            <button
              onClick={() => {
                setOpen(false);
                window.dispatchEvent(new CustomEvent('open-resume-viewer'));
              }}
              className="block w-full text-left px-3 py-2.5 rounded text-text-secondary hover:text-keyword hover:bg-surface/60 transition-all"
            >
              resume.pdf
            </button>
            <a
              href="https://www.fiverr.com/users/mrhmamun99/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block mt-2 px-3 py-2.5 rounded text-sm font-semibold text-background bg-keyword text-center"
            >
              $ hire --me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
