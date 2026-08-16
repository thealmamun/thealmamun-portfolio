'use client';

import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';

const LINKS = [
  { label: 'Email',       value: 'thealmamun1@gmail.com',       href: 'mailto:thealmamun1@gmail.com' },
  { label: 'Phone',       value: '+49 157 5017 2244',            href: 'tel:+4915750172244' },
  { label: 'LinkedIn',    value: 'linkedin.com/in/thealmamun',   href: 'https://linkedin.com/in/thealmamun' },
  { label: 'GitHub',      value: 'github.com/thealmamun',        href: 'https://github.com/thealmamun' },
  { label: 'Fiverr',      value: 'Hire Me on Fiverr',             href: 'https://www.fiverr.com/users/mrhmamun99/' },
  { label: 'Book a Call', value: 'calendly.com/thealmamun',      href: 'https://calendly.com/thealmamun' },
];

const INPUT =
  'w-full px-4 py-3 bg-surface border border-border rounded-xl text-text-primary placeholder:text-text-muted ' +
  'focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent transition-all duration-200';

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

        <div className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="section-tag">Contact</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
            Let&apos;s Build Something <span className="gradient-text">Great Together</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s talk and see how I can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">

          {/* Form */}
          <div className={`card p-8 h-full ${inView ? 'animate-fade-in-left delay-200' : 'opacity-0'}`}>
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Message Sent</h3>
                <p className="text-text-secondary">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-1.5">Name *</label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" className={INPUT} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-1.5">Email *</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@company.com" className={INPUT} />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold mb-1.5">Company</label>
                  <input id="company" name="company" type="text" value={form.company} onChange={handleChange} placeholder="Your company (optional)" className={INPUT} />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-1.5">Message *</label>
                  <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell me about your project..." className={`${INPUT} resize-none`} />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-white font-semibold gradient-bg shadow-lg shadow-orange-100
                             transition-all duration-200 hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className={`h-full ${inView ? 'animate-fade-in-right delay-300' : 'opacity-0'}`}>
            <div className="card p-6 h-full flex flex-col">
              <h3 className="font-bold text-lg mb-5">Get in Touch</h3>
              <div className="space-y-1 flex-1 flex flex-col justify-center">
                {LINKS.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith('http') ? '_blank' : undefined}
                    rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center justify-between p-3 rounded-xl hover:bg-surface hover:translate-x-1 transition-all duration-200"
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-text-muted w-24 flex-shrink-0">{l.label}</span>
                    <span className="flex items-center gap-1.5 text-sm font-semibold text-text-primary group-hover:text-primary-accent transition-colors truncate">
                      {l.value}
                      <span aria-hidden className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">→</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
