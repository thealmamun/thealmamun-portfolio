'use client';

import React, { useEffect } from 'react';
import Navigation from '../components/navigation';
import StructuredData from '../components/structured-data';
import PerformanceOptimization from '../components/performance-optimization';
import ScrollProgress from '../components/scroll-progress';
import BackToTop from '../components/back-to-top';
import CommandPalette from '../components/command-palette';
import ResumeViewer from '../components/resume-viewer';

import HeroSection from '../components/hero';
import AboutSection from '../components/about';
import ExperienceSection from '../components/experience';
import ProjectsSection from '../components/projects';
import SkillsSection from '../components/skills';
import CertificatesSection from '../components/certificates';
import TestimonialsSection from '../components/testimonials';
import FaqSection from '../components/faq';
import ContactSection from '../components/contact';

export default function Home() {
  useEffect(() => {
    console.log('%c👋 Hey, fellow developer!', 'font-size:16px;font-weight:bold;color:#F97316;');
    console.log(
      '%cLike what you see under the hood? Let\'s build something together → thealmamun1@gmail.com\nTip: press ⌘K (or Ctrl+K) anywhere on this page.',
      'font-size:12px;color:#64748B;'
    );
  }, []);

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <StructuredData />
      <PerformanceOptimization />
      <ScrollProgress />
      <Navigation />
      <CommandPalette />
      <ResumeViewer />
      <BackToTop />

      <main>
        <HeroSection id="hero" />
        <AboutSection id="about" />
        <ExperienceSection id="experience" />
        <ProjectsSection id="projects" />
        <SkillsSection id="skills" />
        <CertificatesSection id="certificates" />
        <TestimonialsSection id="testimonials" />
        <FaqSection id="faq" />
        <ContactSection id="contact" />
      </main>

      <footer className="py-10 border-t border-border bg-surface">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-text-secondary">
          <p>
            © 2026 <span className="font-semibold gradient-text">Al Mamun</span> · Flutter & Full-Stack Developer | AI Engineer
          </p>
        </div>
      </footer>
    </div>
  );
}
