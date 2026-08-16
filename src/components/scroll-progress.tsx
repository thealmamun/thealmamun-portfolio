'use client';

import React from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';

/** Thin gradient bar pinned to the very top of the viewport, filling as the reader scrolls. */
const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 inset-x-0 z-[60] h-[3px] pointer-events-none">
      <div
        className="h-full gradient-bg transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
