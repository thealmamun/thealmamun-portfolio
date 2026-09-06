'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import SectionHeader from './section-header';

const FIVERR_GIG_URL =
  'https://www.fiverr.com/mrhmamun99/develop-ios-and-android-apps-using-flutter-cross-platform';

// Real client reviews, pulled directly from Al Mamun's Fiverr gig (4.9★, 45 reviews).
const TESTIMONIALS = [
  {
    name: 'properfit',
    initials: 'PF',
    location: 'United States',
    repeatClient: true,
    gradient: 'from-indigo-500 to-violet-500',
    review:
      'Amazing work! Great customer service! Hands down the best app developer we have worked with!',
    rating: 5,
  },
  {
    name: 'jsgamelab',
    initials: 'JG',
    location: 'United States',
    repeatClient: false,
    gradient: 'from-sky-500 to-indigo-500',
    review: 'Very quick work and clean modern design.',
    rating: 5,
  },
  {
    name: 'amabowilli',
    initials: 'AB',
    location: 'United States',
    repeatClient: true,
    gradient: 'from-violet-500 to-pink-500',
    review:
      'My experience with this seller is interesting. I must say he understands your requirements and he develops bug free code. My application which in my opinion was complicated, he was able to bring the dream to life and we are still about to upload the app to the app stores. I will recommend him every time.',
    rating: 5,
  },
  {
    name: 'joannecoopersa',
    initials: 'JC',
    location: 'South Africa',
    repeatClient: false,
    gradient: 'from-emerald-500 to-teal-500',
    review:
      'The seller did very well with this rather complicated development. He was quick to help sort out any issues that I had and helped to resolve them. I will be ordering again in the future. Thank you!',
    rating: 4,
  },
  {
    name: 'gmailich',
    initials: 'GM',
    location: 'South Africa',
    repeatClient: true,
    gradient: 'from-amber-500 to-orange-500',
    review:
      'Third project together and still very happy. Excellent work ethic, great understanding of the requirements and will definitely use for future work. Thank you',
    rating: 5,
  },
  {
    name: 'properfit',
    initials: 'PF',
    location: 'United States',
    repeatClient: true,
    gradient: 'from-rose-500 to-red-500',
    review: 'Great work! Very quick and quality. Exactly what I was looking for :)',
    rating: 5,
  },
];

const TestimonialsSection = ({ id }: { id: string }) => {
  const { ref, inView } = useInView();
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = useCallback((next: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(next);
      setAnimating(false);
    }, 250);
  }, [animating]);

  const prev = useCallback(() => go((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), [current, go]);
  const next = useCallback(() => go((current + 1) % TESTIMONIALS.length), [current, go]);

  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next, paused]);

  // Swipe support
  const touchX = React.useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchX.current;
    if (delta > 50) prev();
    else if (delta < -50) next();
    touchX.current = null;
  };

  const t = TESTIMONIALS[current];

  return (
    <section id={id} className="py-24 px-4">
      <div ref={ref} className="max-w-4xl mx-auto">

        <SectionHeader kicker="Testimonials" title="What clients say" meta="4.9★ · 45 reviews on Fiverr" inView={inView} />

        <div
          className={inView ? 'animate-scale-in delay-200' : 'opacity-0'}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >

          {/* Main card */}
          <div className="card p-8 md:p-12 relative overflow-hidden min-h-[280px]">
            <span className="absolute top-4 right-8 text-[8rem] font-serif leading-none text-border/60 select-none">
              &#8220;
            </span>

            <div
              style={{
                opacity: animating ? 0 : 1,
                transform: animating ? 'translateY(10px)' : 'translateY(0)',
                transition: 'opacity 0.25s ease, transform 0.25s ease',
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-lg md:text-xl text-text-primary font-medium leading-relaxed mb-8 relative z-10">
                &ldquo;{t.review}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.gradient}
                                flex items-center justify-center flex-shrink-0 shadow-md`}
                  >
                    <span className="text-sm font-bold text-white select-none">{t.initials}</span>
                  </div>
                  <div>
                    <p className="font-medium text-text-primary">{t.name}</p>
                    <p className="font-mono text-xs text-text-secondary mt-0.5">
                      // {t.repeatClient ? 'repeat client' : 'verified buyer'} · {t.location}
                    </p>
                  </div>
                </div>
                <a
                  href={FIVERR_GIG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-text-secondary hover:text-primary-accent transition-colors"
                >
                  Verified on Fiverr ↗
                </a>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-end gap-2 mt-6 px-1">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-border hover:border-primary-accent
                         hover:text-primary-accent hover:-translate-y-0.5 transition-all flex items-center justify-center
                         text-text-secondary font-bold"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full gradient-bg text-white hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5
                         transition-all flex items-center justify-center font-bold shadow-md"
            >
              →
            </button>
          </div>

          {/* Thumbnail row — doubles as pagination */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
            {TESTIMONIALS.map((t2, i) => (
              <button
                key={`${t2.name}-${i}`}
                onClick={() => go(i)}
                aria-label={`Go to ${t2.name}'s testimonial`}
                aria-current={i === current}
                className={`p-3 rounded-xl border text-left transition-all duration-200 hover:-translate-y-0.5 ${
                  i === current
                    ? 'border-keyword bg-primary-light shadow-sm'
                    : 'border-border bg-surface hover:border-border-strong hover:shadow-sm'
                }`}
              >
                <p className="text-xs font-bold text-text-primary truncate">{t2.name}</p>
                <p className="text-xs text-text-secondary truncate">{t2.location}</p>
              </button>
            ))}
          </div>

          <p className="text-center text-sm text-text-secondary mt-6">
            Real reviews from{' '}
            <a
              href={FIVERR_GIG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary-accent hover:underline"
            >
              my Fiverr gig
            </a>{' '}
            — 4.9★ from 45 reviews.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
