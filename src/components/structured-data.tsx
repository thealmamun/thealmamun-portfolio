import React from 'react';
import { FAQS } from '../data/faqs';

const StructuredData = () => {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Al Mamun",
    "jobTitle": "Flutter Developer, AI Consultant & Full-Stack Developer",
    "url": "https://thealmamun.com",
    "sameAs": [
      "https://linkedin.com/in/thealmamun",
      "https://github.com/thealmamun"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dresden",
      "addressCountry": "Germany"
    },
    "knowsAbout": [
      "Flutter Development",
      "Full-Stack Development",
      "AI Engineering",
      "AI Consulting",
      "SaaS Development",
      "Mobile App Development"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Master's Degree in Web Engineering",
        "educationalLevel": "Masters"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Google Professional AI Engineer"
      }
    ]
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Al Mamun | Flutter Developer & AI Consultant in Dresden, Germany",
    "url": "https://thealmamun.com"
  };

  const professionalServiceData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Al Mamun - Flutter Developer & AI Consultant Services, Dresden",
    "description": "Flutter development, AI consulting, full-stack web development, and automation solutions for clients in Dresden, Germany and worldwide.",
    "provider": {
      "@type": "Person",
      "name": "Al Mamun"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Dresden"
      },
      {
        "@type": "Country",
        "name": "Germany"
      }
    ]
  };

  // Mirrors the visible FAQ section (`faq.tsx`) exactly — both read from `FAQS`
  // in `src/data/faqs.ts` so the schema never drifts from on-page content.
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.flatMap((group) =>
      group.items.map((item) => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    )
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  );
};

export default StructuredData;