"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Megaphone,
  Search,
  Instagram,
  BarChart3,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { FadeIn, Stagger, staggerItemVariants } from "@/components/motion/fade-in";

const services = [
  {
    icon: Globe,
    title: "Websites, die verkaufen",
    description:
      "Moderne, schnelle Websites mit klarer Struktur. Optimiert für Google, mobil perfekt – und so gebaut, dass Kunden anrufen.",
    bullets: ["Conversion-fokussiert", "Mobil & schnell", "SEO-optimiert"],
    featured: true,
  },
  {
    icon: Megaphone,
    title: "Google & Meta Ads",
    description:
      "Werbekampagnen, die nicht nur Klicks bringen, sondern echte Aufträge. Wir messen, optimieren, skalieren.",
    bullets: ["Performance-Tracking", "A/B Testing", "Wöchentliches Reporting"],
  },
  {
    icon: Search,
    title: "Lokale SEO",
    description:
      "Top-Platzierungen in deiner Region – bei Google Maps und in der organischen Suche.",
    bullets: ["Google Business Profil", "Keyword-Recherche", "Backlink-Aufbau"],
  },
  {
    icon: Instagram,
    title: "Social Media",
    description:
      "Instagram, TikTok und Facebook strategisch genutzt, um Vertrauen aufzubauen und Mitarbeiter zu gewinnen.",
    bullets: ["Content-Plan", "Recruiting-Posts", "Community-Management"],
  },
  {
    icon: Sparkles,
    title: "Branding & Design",
    description:
      "Logo, Farben, Bildsprache – wir machen aus deinem Betrieb eine Marke, an die man sich erinnert.",
    bullets: ["Logo & CI", "Fahrzeug-Design", "Print & Visitenkarten"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Strategie",
    description:
      "Wir messen alles. Du bekommst klare Zahlen, was funktioniert – und ein Quartalsplan, wie wir wachsen.",
    bullets: ["Tracking-Setup", "Monatliche Reports", "Wachstums-Strategie"],
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 bg-white py-24 sm:py-32"
    >
      <div className="container mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-black/60">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Unsere Dienstleistungen
          </span>
          <h2 className="mt-5 font-display text-4xl font-black tracking-tight text-black sm:text-5xl">
            Alles, was dein Betrieb online <br className="hidden sm:block" />
            <span className="text-brand-500">braucht.</span>
          </h2>
          <p className="mt-5 text-lg text-black/65">
            Vom ersten Klick bis zum unterschriebenen Angebot – wir kümmern uns um
            jeden Schritt deiner digitalen Präsenz.
          </p>
        </FadeIn>

        <Stagger
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          staggerChildren={0.08}
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isFeatured = service.featured;
            return (
              <motion.article
                key={service.title}
                variants={staggerItemVariants}
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 transition-all duration-300 cursor-default ${
                  isFeatured
                    ? "border-transparent bg-black text-white sm:col-span-2 lg:col-span-1 lg:row-span-1"
                    : "border-black/10 bg-white text-black hover:border-brand-500/40 hover:shadow-[0_20px_60px_-20px_rgba(249,115,22,0.25)]"
                }`}
              >
                {isFeatured && (
                  <div
                    aria-hidden
                    className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-500/30 blur-3xl"
                  />
                )}

                <div className="relative flex items-center justify-between">
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-2xl transition-colors ${
                      isFeatured
                        ? "bg-brand-500 text-white"
                        : "bg-neutral-100 text-black group-hover:bg-brand-500 group-hover:text-white"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all ${
                      isFeatured
                        ? "border-white/20 text-white/70 group-hover:border-white/60 group-hover:text-white"
                        : "border-black/10 text-black/40 group-hover:border-black group-hover:text-black"
                    }`}
                  >
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" />
                  </span>
                </div>

                <h3
                  className={`relative mt-6 font-display text-2xl font-bold leading-tight tracking-tight ${
                    isFeatured ? "text-white" : "text-black"
                  }`}
                >
                  {service.title}
                </h3>

                <p
                  className={`relative mt-3 text-[15px] leading-relaxed ${
                    isFeatured ? "text-white/75" : "text-black/65"
                  }`}
                >
                  {service.description}
                </p>

                <ul
                  className={`relative mt-6 space-y-2 border-t pt-5 text-sm ${
                    isFeatured ? "border-white/15" : "border-black/10"
                  }`}
                >
                  {service.bullets.map((b) => (
                    <li
                      key={b}
                      className={`flex items-center gap-2 ${
                        isFeatured ? "text-white/80" : "text-black/70"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          isFeatured ? "bg-brand-500" : "bg-black/40"
                        }`}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
