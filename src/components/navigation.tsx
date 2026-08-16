'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const navItems = [
  { name: 'About',        href: '#about' },
  { name: 'Experience',   href: '#experience' },
  { name: 'Projects',     href: '#projects' },
  { name: 'Skills',       href: '#skills' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ',          href: '#faq' },
  { name: 'Contact',      href: '#contact' },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <Link
            href="/"
            className="text-xl font-extrabold gradient-text tracking-tight transition-transform duration-200 hover:scale-105"
          >
            Al Mamun
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative px-3 py-2 rounded-lg text-sm font-medium text-text-secondary
                           hover:text-primary-accent hover:bg-primary-light transition-all duration-200"
              >
                {item.name}
                <span
                  className="absolute left-3 right-3 -bottom-0 h-0.5 gradient-bg rounded-full origin-left
                             scale-x-0 group-hover:scale-x-100 transition-transform duration-200"
                />
              </Link>
            ))}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-resume-viewer'))}
              className="ml-2 px-3 py-2 rounded-lg text-sm font-medium text-text-secondary
                         hover:text-primary-accent hover:bg-primary-light transition-all duration-200"
            >
              Resume
            </button>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-command-palette'))}
              aria-label="Open command menu"
              className="ml-2 hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs font-medium
                         text-text-secondary transition-all duration-200 hover:border-primary-accent hover:text-primary-accent"
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
              className="ml-3 px-5 py-2 rounded-xl text-sm font-semibold text-white gradient-bg shadow-md shadow-orange-100
                         transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-primary-accent hover:bg-primary-light transition-all"
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

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-border">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-sm font-medium text-text-secondary hover:text-primary-accent hover:bg-primary-light transition-all"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                window.dispatchEvent(new CustomEvent('open-resume-viewer'));
              }}
              className="block w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-text-secondary hover:text-primary-accent hover:bg-primary-light transition-all"
            >
              Resume
            </button>
            <a
              href="https://www.fiverr.com/users/mrhmamun99/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block mt-2 px-3 py-2.5 rounded-xl text-sm font-semibold text-white gradient-bg text-center"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
