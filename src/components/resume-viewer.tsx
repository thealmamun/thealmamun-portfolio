'use client';

import React, { useEffect, useState } from 'react';

const RESUME_PATH = '/Al-Mamun-FullStack-CV.pdf';
const RESUME_FILENAME = 'Al-Mamun-FullStack-CV.pdf';

/**
 * Full-screen PDF viewer for the resume. Dispatch a window `open-resume-viewer`
 * event (e.g. from the hero/nav "Resume" links or the command palette) to open it.
 */
const ResumeViewer = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpenEvent = () => setOpen(true);
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('open-resume-viewer', onOpenEvent);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('open-resume-viewer', onOpenEvent);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-4xl h-full max-h-[92vh] card p-0 overflow-hidden shadow-2xl flex flex-col animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3 border-b border-border">
          <div className="min-w-0">
            <p className="text-sm font-bold text-text-primary truncate">Al Mamun — Full-Stack CV</p>
            <p className="text-xs text-text-muted">Flutter &amp; Full-Stack Developer | AI Engineer</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={RESUME_PATH}
              download={RESUME_FILENAME}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white gradient-bg
                         transition-all duration-200 hover:opacity-90 hover:shadow-md hover:-translate-y-0.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download
            </a>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close resume viewer"
              className="p-1.5 rounded-lg text-text-secondary transition-colors duration-200 hover:text-primary-accent hover:bg-primary-light"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex-1 bg-surface min-h-0">
          <iframe
            src={`${RESUME_PATH}#toolbar=1`}
            title="Al Mamun — Full-Stack CV"
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeViewer;
