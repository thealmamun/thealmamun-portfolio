'use client';

import React from 'react';
import { useInView } from '../hooks/useInView';

const CERTS = [
  {
    name: 'Build with AI: Scaling Multi-Agent Apps',
    issuer: 'Google Developer Group',
    detail: 'GDG Build with AI 2026 – Multi-agent orchestration, Gemini, Vertex AI, ADK agents on Cloud Run',
    date: 'May 2026',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-indigo-600',
    credentialLink: '#',
  },
  {
    name: 'MCP Hands-on: AI Agents & API Integration',
    issuer: 'Dev Day 2026, Dresden',
    detail: 'Telekom MMS · esveo · Cloud&Heat · NETWAYS – Model Context Protocol, agentic workflows, enterprise AI',
    date: 'May 2026',
    gradientFrom: 'from-violet-500',
    gradientTo: 'to-purple-600',
    credentialLink: '#',
  },
  {
    name: 'Google AI Professional Certificate',
    issuer: 'Coursera · Google Career Certificates',
    detail: '7-course series: AI fundamentals, prompt engineering, Gemini, NotebookLM, AI app building',
    date: '2026',
    gradientFrom: 'from-emerald-500',
    gradientTo: 'to-teal-500',
    credentialLink: '#',
  },
  {
    name: 'Microsoft Azure AI Essentials',
    issuer: 'LinkedIn Learning · Microsoft Azure',
    detail: 'Azure AI services, ML workloads, foundation models, cognitive services, responsible AI',
    date: '2025',
    gradientFrom: 'from-sky-500',
    gradientTo: 'to-cyan-500',
    credentialLink: '#',
  },
  {
    name: 'The Complete Flutter Bootcamp with Dart',
    issuer: 'Udemy · Dr. Angela Yu',
    detail: 'Flutter & Dart fundamentals, state management, Firebase, REST APIs, app deployment',
    date: 'Jan – Mar 2020',
    gradientFrom: 'from-amber-500',
    gradientTo: 'to-orange-500',
    credentialLink: '#',
  },
  {
    name: 'Android & iOS App Development with Flutter',
    issuer: 'BASIS Institute of Technology (BITM), Bangladesh',
    detail: 'Hands-on training in cross-platform mobile development, widget architecture, and deployment',
    date: 'Oct – Dec 2019',
    gradientFrom: 'from-rose-500',
    gradientTo: 'to-pink-500',
    credentialLink: '#',
  },
];

const CertificatesSection = ({ id }: { id: string }) => {
  const { ref, inView } = useInView();

  return (
    <section id={id} className="py-24 px-4 bg-surface">
      <div ref={ref} className="max-w-7xl mx-auto">

        <div className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="section-tag">Certifications</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {CERTS.map((cert, i) => (
            <div
              key={cert.name}
              className={`group card overflow-hidden flex items-stretch ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className={`w-2 flex-shrink-0 bg-gradient-to-b ${cert.gradientFrom} ${cert.gradientTo} transition-all duration-300 group-hover:w-3`} />

              <div className="p-5">
                <h3 className="font-bold text-text-primary leading-tight mb-1">{cert.name}</h3>
                <p className="text-sm font-semibold text-primary-accent mb-1">{cert.issuer}</p>
                <p className="text-xs text-text-secondary mb-2 leading-relaxed">{cert.detail}</p>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-text-muted">Issued {cert.date}</span>
                  <a
                    href={cert.credentialLink}
                    className="group/link inline-flex items-center gap-1 text-xs font-semibold text-primary-accent hover:underline"
                  >
                    View
                    <span aria-hidden className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
