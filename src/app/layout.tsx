import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Al Mamun | Flutter Developer & AI Consultant in Dresden, Germany",
  description: "Flutter developer, AI engineer, AI consultant, and full-stack developer based in Dresden, Germany. Building production-ready mobile apps, RAG/LLM systems, and scalable SaaS platforms for clients in Germany and worldwide.",
  keywords: [
    "Al Mamun",
    "Flutter Developer Dresden",
    "Flutter Developer Germany",
    "AI Consultant Dresden",
    "AI Consultant Germany",
    "AI Engineer Dresden",
    "AI Engineer Germany",
    "Full-Stack Developer Dresden",
    "Full-Stack Developer Germany",
    "RAG Developer",
    "Mobile App Developer Germany"
  ],
  authors: [{ name: "Al Mamun" }],
  creator: "Al Mamun",
  publisher: "Al Mamun",
  robots: "index, follow",
  openGraph: {
    title: "Al Mamun | Flutter Developer & AI Consultant in Dresden, Germany",
    description: "Flutter developer, AI engineer, AI consultant, and full-stack developer based in Dresden, Germany. Building production-ready mobile apps, RAG/LLM systems, and scalable SaaS platforms for clients in Germany and worldwide.",
    url: "https://thealmamun.com",
    siteName: "Al Mamun",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Al Mamun - Flutter Developer & AI Consultant in Dresden, Germany"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Mamun | Flutter Developer & AI Consultant in Dresden, Germany",
    description: "Flutter developer, AI engineer, AI consultant, and full-stack developer based in Dresden, Germany. Building production-ready mobile apps, RAG/LLM systems, and scalable SaaS platforms for clients in Germany and worldwide.",
    images: ["/og-image.jpg"],
    creator: "@thealmamun"
  },
  alternates: {
    canonical: "https://thealmamun.com"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      data-theme="dark"
    >
      <body className="min-h-screen flex flex-col bg-background text-text-primary">
        {children}
      </body>
    </html>
  );
}
