'use client';

import React from 'react';
import { useInView } from '../hooks/useInView';
import SectionHeader from './section-header';

const CERTS = [
  {
    name: 'Build with AI: Scaling Multi-Agent Apps',
    issuer: 'Google Developer Group',
    detail: 'GDG Build with AI 2026 – Multi-agent orchestration, Gemini, Vertex AI, ADK agents on Cloud Run',
    date: 'May 2026',
    dot: 'bg-type',
    credentialLink: '#',
  },
  {
    name: 'MCP Hands-on: AI Agents & API Integration',
    issuer: 'Dev Day 2026, Dresden',
    detail: 'Telekom MMS · esveo · Cloud&Heat · NETWAYS – Model Context Protocol, agentic workflows, enterprise AI',
    date: 'May 2026',
    dot: 'bg-const',
    credentialLink: '#',
  },
  {
    name: 'Google AI Professional Certificate',
    issuer: 'Coursera · Google Career Certificates',
    detail: '7-course series: AI fundamentals, prompt engineering, Gemini, NotebookLM, AI app building',
    date: '2026',
    dot: 'bg-string',
    credentialLink: '#',
  },
  {
    name: 'Microsoft Azure AI Essentials',
    issuer: 'LinkedIn Learning · Microsoft Azure',
    detail: 'Azure AI services, ML workloads, foundation models, cognitive services, responsible AI',
    date: '2025',
    dot: 'bg-type',
    credentialLink: '#',
  },
  {
    name: 'The Complete Flutter Bootcamp with Dart',
    issuer: 'Udemy · Dr. Angela Yu',
    detail: 'Flutter & Dart fundamentals, state management, Firebase, REST APIs, app deployment',
    date: 'Jan – Mar 2020',
    dot: 'bg-keyword',
    credentialLink: '#',
  },
  {
    name: 'Android & iOS App Development with Flutter',
    issuer: 'BASIS Institute of Technology (BITM), Bangladesh',
    detail: 'Hands-on training in cross-platform mobile development, widget architecture, and deployment',
    date: 'Oct – Dec 2019',
    dot: 'bg-keyword',
    credentialLink: '#',
  },
];

const CertificatesSection = ({ id }: { id: string }) => {
  const { ref, inView } = useInView();

  return (
    <section id={id} className="py-24 px-4 bg-surface">
      <div ref={ref} className="max-w-4xl mx-auto">

        <SectionHeader kicker="Certifications" title="Professional certifications" meta={`${CERTS.length} credentials`} inView={inView} />

        <div className="card divide-y divide-border overflow-hidden">
          {CERTS.map((cert, i) => (
            <a
              key={cert.name}
              href={cert.credentialLink}
              className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 px-5 sm:px-6 py-5
                          transition-colors duration-200 hover:bg-surface-2 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className={`hidden sm:block w-1.5 h-1.5 rounded-full flex-shrink-0 ${cert.dot}`} />

              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-text-primary leading-snug">{cert.name}</h3>
                <p className="text-sm text-text-secondary mt-0.5">{cert.issuer}</p>
                <p className="text-xs text-text-muted mt-1 leading-relaxed">{cert.detail}</p>
              </div>

              <div className="flex sm:flex-col sm:items-end items-center justify-between gap-1 sm:gap-0 flex-shrink-0 sm:text-right pt-1 sm:pt-0">
                <span className="font-mono text-xs text-text-muted">{cert.date}</span>
                <span className="font-mono text-xs font-medium text-keyword">view --credential</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
