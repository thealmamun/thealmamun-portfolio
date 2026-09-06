import React from 'react';

type SectionHeaderProps = {
  kicker: string;
  title: string;
  description?: string;
  /** Right-aligned meta, e.g. a real count or date range — only ever real data, never a decorative index. */
  meta?: string;
  inView?: boolean;
};

/**
 * Left-aligned header used at the top of every section, styled as a
 * commented-out code line introducing the block below it — one consistent
 * shape so sections read as one file, not each inventing its own eyebrow.
 */
const SectionHeader = ({ kicker, title, description, meta, inView = true }: SectionHeaderProps) => (
  <div className={`mb-12 md:mb-14 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
    <p className="font-mono text-sm text-text-muted mb-3">
      <span className="text-border-strong">//</span> {kicker}
    </p>
    <div className="flex items-end justify-between gap-6 border-b border-border pb-5">
      <h2 className="font-display text-2xl md:text-[2.1rem] font-medium tracking-tight text-text-primary leading-tight">
        {title}
      </h2>
      {meta && (
        <p className="hidden sm:block font-mono text-xs text-text-muted whitespace-nowrap pb-1.5">{meta}</p>
      )}
    </div>
    {description && (
      <p className="mt-5 text-text-secondary max-w-xl leading-relaxed">{description}</p>
    )}
  </div>
);

export default SectionHeader;
