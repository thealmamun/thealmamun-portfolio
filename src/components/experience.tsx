'use client';

import React from 'react';
import { useInView } from '../hooks/useInView';

const EXPERIENCES = [
  {
    company: 'Enloc AG',
    location: 'Dresden, Germany',
    role: 'Software Engineer',
    type: 'Full-time',
    duration: 'May 2023 – Apr 2026',
    achievements: [
      'Led Flutter development on EN.Tab, a digital property management platform serving real-estate clients across Germany',
      'Architected real-time data sync and offline-first local database integration, improving reliability for field users',
      'Owned CI/CD pipeline using Fastlane and Azure DevOps, enabling reliable weekly releases to App Store and Google Play',
      'Consumed C# and Node.js backend services via REST APIs for scalable cloud-based data management',
      'Implemented native Java SDK integrations using Flutter platform channels for Android-specific hardware',
    ],
    technologies: ['Flutter', 'Dart', 'Java', 'C#', 'REST APIs', 'Fastlane', 'Azure DevOps', 'CI/CD'],
    impact: 'Production app serving real-estate clients across Germany',
    gradientFrom: 'from-indigo-500',
    gradientTo: 'to-violet-500',
  },
  {
    company: 'App-Concept GmbH',
    location: 'Germany',
    role: 'Software Engineer',
    type: 'Werkstudent',
    duration: 'Oct 2021 – Apr 2023',
    achievements: [
      'Built and scaled JobsNavi, a skill-based talent-matching platform, from prototype to live product',
      'Delivered cross-platform Flutter apps for multiple clients across healthcare, recruitment, and other industries',
      'Transformed Figma designs into pixel-perfect Flutter apps, owning full journey from UI handoff to App Store deployment',
      'Integrated Google Cloud Functions and Node.js serverless backend for scalable, cost-efficient architecture',
    ],
    technologies: ['Flutter', 'Firebase', 'Google Cloud', 'Node.js', 'REST APIs', 'Google Maps SDK', 'Figma'],
    impact: 'Delivered JobsNavi from prototype to live product on App Store and Google Play',
    gradientFrom: 'from-sky-500',
    gradientTo: 'to-indigo-500',
  },
  {
    company: 'Royex Technologies',
    location: 'Bangladesh (UAE-based)',
    role: 'Jr. Software Engineer – Mobile',
    type: 'Full-time',
    duration: 'Jul 2020 – Jan 2021',
    achievements: [
      'Built Alaasaq, a Magento-backed e-commerce app with full product, cart, and checkout flows in Flutter',
      'Developed Swalifna, a live video streaming app using Agora.io SDK for real-time multi-user broadcast',
      'Converted Adobe XD designs for Taddreb school management app into a fully functional Flutter codebase',
    ],
    technologies: ['Flutter', 'Dart', 'Agora.io', 'Magento APIs', 'Firebase', 'Adobe XD'],
    impact: 'Delivered 3 commercial Flutter apps for clients in UAE and Bangladesh',
    gradientFrom: 'from-violet-500',
    gradientTo: 'to-purple-500',
  },
  {
    company: 'Fiverr & Freelance',
    location: 'Remote – International clients',
    role: 'Freelance Mobile & Web Developer',
    type: 'Freelance',
    duration: '2019 – 2020',
    achievements: [
      'Delivered 20+ web and mobile development projects for international clients through Fiverr',
      'Built web applications with React and JavaScript for small businesses and startups worldwide',
      'Developed early Flutter and React Native mobile apps, building deep expertise before mainstream adoption',
      'Maintained consistent positive client ratings through quality delivery and communication',
    ],
    technologies: ['React', 'JavaScript', 'Flutter', 'React Native', 'Firebase', 'PHP'],
    impact: 'Established client reputation with 20+ delivered projects across multiple countries',
    gradientFrom: 'from-green-500',
    gradientTo: 'to-emerald-500',
  },
];

const ExperienceSection = ({ id }: { id: string }) => {
  const { ref, inView } = useInView();

  return (
    <section id={id} className="py-24 px-4 bg-surface">
      <div ref={ref} className="max-w-4xl mx-auto">

        <div className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="section-tag">Experience</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
            Where I&apos;ve <span className="gradient-text">Worked</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-primary-accent via-secondary-accent to-transparent hidden md:block" />

          <div className="space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <div
                key={exp.company}
                className={`relative flex gap-5 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="hidden md:flex flex-shrink-0 pt-5">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${exp.gradientFrom} ${exp.gradientTo} flex items-center justify-center shadow-md
                                    transition-transform duration-300 hover:scale-110 hover:rotate-3`}>
                    <span className="text-white text-base font-bold">{exp.company[0]}</span>
                  </div>
                </div>

                <div className="group flex-1 card p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl font-bold">{exp.company}</h3>
                        <span className="px-2 py-0.5 text-xs font-bold bg-surface border border-border text-text-secondary rounded-full">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-primary-accent font-semibold">{exp.role}</p>
                      <p className="text-xs text-text-secondary mt-0.5">{exp.location}</p>
                    </div>
                    <span className="text-sm text-text-secondary font-medium whitespace-nowrap">{exp.duration}</span>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.achievements.map((a, ai) => (
                      <li key={ai} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="text-primary-accent flex-shrink-0 mt-0.5 font-bold">→</span>
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 bg-surface border border-border text-xs font-medium rounded-lg text-text-secondary
                                   transition-all duration-200 hover:border-primary-accent hover:text-primary-accent hover:-translate-y-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm font-semibold text-success">{exp.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
