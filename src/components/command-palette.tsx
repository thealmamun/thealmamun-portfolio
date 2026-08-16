'use client';

import React, { useEffect, useRef, useState } from 'react';

type Command = {
  id: string;
  label: string;
  hint: string;
  action: () => void;
};

const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

/**
 * ⌘K / Ctrl+K quick-command menu. Dispatch a window `open-command-palette`
 * event (e.g. from a nav button) to open it programmatically too.
 */
const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: Command[] = [
    ...SECTIONS.map((s) => ({
      id: `go-${s.id}`,
      label: `Go to ${s.label}`,
      hint: 'Navigate',
      action: () => goTo(s.id),
    })),
    {
      id: 'view-resume',
      label: 'View resume',
      hint: 'PDF viewer',
      action: () => window.dispatchEvent(new CustomEvent('open-resume-viewer')),
    },
    {
      id: 'download-resume',
      label: 'Download resume',
      hint: '.pdf',
      action: () => {
        const a = document.createElement('a');
        a.href = '/Al-Mamun-FullStack-CV.pdf';
        a.download = 'Al-Mamun-FullStack-CV.pdf';
        a.click();
      },
    },
    {
      id: 'email',
      label: 'Email Al Mamun',
      hint: 'mailto',
      action: () => { window.location.assign('mailto:thealmamun1@gmail.com'); },
    },
    {
      id: 'copy-email',
      label: 'Copy email address',
      hint: 'Clipboard',
      action: () => {
        navigator.clipboard?.writeText('thealmamun1@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
    },
    {
      id: 'github',
      label: 'Open GitHub profile',
      hint: '↗ github.com',
      action: () => window.open('https://github.com/thealmamun', '_blank', 'noopener,noreferrer'),
    },
    {
      id: 'linkedin',
      label: 'Open LinkedIn profile',
      hint: '↗ linkedin.com',
      action: () => window.open('https://linkedin.com/in/thealmamun', '_blank', 'noopener,noreferrer'),
    },
    {
      id: 'call',
      label: 'Book a call',
      hint: 'Calendly',
      action: () => window.open('https://calendly.com/thealmamun', '_blank', 'noopener,noreferrer'),
    },
  ];

  const filtered = commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()));

  const close = () => {
    setOpen(false);
    setQuery('');
    setActive(0);
  };

  const run = (cmd: Command) => {
    cmd.action();
    if (cmd.id !== 'copy-email') close();
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === 'Escape') {
        close();
      }
    };
    const onOpenEvent = () => setOpen(true);
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('open-command-palette', onOpenEvent);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('open-command-palette', onOpenEvent);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) setTimeout(() => inputRef.current?.focus(), 10);
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const onInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[active]) run(filtered[active]);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-24 sm:pt-32 px-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in"
      onClick={close}
    >
      <div
        className="w-full max-w-lg card p-0 overflow-hidden shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
          <svg className="w-4 h-4 text-text-muted flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => { setQuery(e.target.value); setActive(0); }}
            onKeyDown={onInputKeyDown}
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent outline-none text-sm text-text-primary placeholder:text-text-muted"
          />
          <kbd className="hidden sm:inline text-[10px] font-semibold text-text-muted border border-border rounded px-1.5 py-0.5">Esc</kbd>
        </div>

        <div className="max-h-80 overflow-y-auto py-2">
          {filtered.length === 0 && (
            <p className="px-4 py-6 text-sm text-text-muted text-center">No matching commands</p>
          )}
          {filtered.map((cmd, i) => (
            <button
              key={cmd.id}
              onMouseEnter={() => setActive(i)}
              onClick={() => run(cmd)}
              className={`w-full flex items-center justify-between px-4 py-2.5 text-sm text-left transition-colors duration-100 ${
                i === active ? 'bg-primary-light text-primary-accent' : 'text-text-primary'
              }`}
            >
              <span className="font-medium">{cmd.id === 'copy-email' && copied ? 'Copied to clipboard ✓' : cmd.label}</span>
              <span className="text-xs text-text-muted">{cmd.hint}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
