'use client';

import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import SectionHeader from './section-header';

const LINKS = [
  { label: 'Email',       value: 'thealmamun1@gmail.com',       href: 'mailto:thealmamun1@gmail.com' },
  { label: 'Phone',       value: '+49 157 5017 2244',            href: 'tel:+4915750172244' },
  { label: 'LinkedIn',    value: 'linkedin.com/in/thealmamun',   href: 'https://linkedin.com/in/thealmamun' },
  { label: 'GitHub',      value: 'github.com/thealmamun',        href: 'https://github.com/thealmamun' },
  { label: 'Fiverr',      value: 'Hire Me on Fiverr',             href: 'https://www.fiverr.com/users/mrhmamun99/' },
  { label: 'Book a Call', value: 'calendly.com/thealmamun',      href: 'https://calendly.com/thealmamun' },
];

const INPUT =
  'w-full px-4 py-3 bg-surface border border-border rounded text-text-primary placeholder:text-text-muted font-mono text-sm ' +
  'focus:outline-none focus:ring-2 focus:ring-keyword focus:border-transparent transition-all duration-200';

const ContactSection = ({ id }: { id: string }) => {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form:', form);
    setSent(true);
  };

  return (
    <section id={id} className="py-24 px-4 bg-surface">
      <div ref={ref} className="max-w-7xl mx-auto">

        <SectionHeader
          kicker="Contact"
          title="Let's build something great together"
          description="Have a project in mind? I'd love to hear about it. Let's talk and see how I can help."
          inView={inView}
        />

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">

          {/* Form */}
          <div className={`card p-0 overflow-hidden h-full ${inView ? 'animate-fade-in-left delay-200' : 'opacity-0'}`}>
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border bg-surface-2">
              <span className="win-dot bg-[#FF5F56]" />
              <span className="win-dot bg-[#FFBD2E]" />
              <span className="win-dot bg-[#27C93F]" />
              <span className="ml-3 font-mono text-xs text-text-muted">contact.sh</span>
            </div>
            <div className="p-6 sm:p-8">
              {sent ? (
                <div className="text-center py-12 font-mono">
                  <p className="text-string text-sm mb-3">$ ./send-message --status</p>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">✓ 200 OK — Message sent</h3>
                  <p className="text-text-secondary text-sm">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block font-mono text-xs text-type mb-1.5">--name *</label>
                      <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" className={INPUT} />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-mono text-xs text-type mb-1.5">--email *</label>
                      <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@company.com" className={INPUT} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block font-mono text-xs text-type mb-1.5">--company</label>
                    <input id="company" name="company" type="text" value={form.company} onChange={handleChange} placeholder="Your company (optional)" className={INPUT} />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-mono text-xs text-type mb-1.5">--message *</label>
                    <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell me about your project..." className={`${INPUT} resize-none`} />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded font-mono text-sm text-background font-medium gradient-bg
                               transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                  >
                    $ ./send-message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Info */}
          <div className={`h-full ${inView ? 'animate-fade-in-right delay-300' : 'opacity-0'}`}>
            <div className="card p-0 overflow-hidden h-full flex flex-col">
              <div className="flex items-center gap-2.5 px-6 py-4 border-b border-border bg-surface-2">
                <h3 className="font-mono text-sm text-type">&quot;links&quot;: {'{'}</h3>
              </div>
              <div className="space-y-0.5 flex-1 flex flex-col justify-center p-3">
                {LINKS.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith('http') ? '_blank' : undefined}
                    rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center justify-between p-3 rounded font-mono text-sm hover:bg-surface-2 transition-colors duration-200"
                  >
                    <span className="text-const flex-shrink-0">&quot;{l.label.toLowerCase().replace(/\s+/g, '_')}&quot;:</span>
                    <span className="text-text-secondary group-hover:text-keyword transition-colors truncate ml-3">
                      &quot;{l.value}&quot;
                    </span>
                  </a>
                ))}
              </div>
              <div className="px-6 pb-4 font-mono text-sm text-type">{'}'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
