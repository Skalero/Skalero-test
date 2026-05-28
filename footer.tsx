"use client";

import { Mail, Phone, MapPin, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";

const linkGroups = [
  {
    title: "Leistungen",
    links: [
      { label: "Websites", href: "#services" },
      { label: "Google & Meta Ads", href: "#services" },
      { label: "Lokale SEO", href: "#services" },
      { label: "Social Media", href: "#services" },
      { label: "Branding", href: "#services" },
    ],
  },
  {
    title: "Unternehmen",
    links: [
      { label: "Über uns", href: "#about" },
      { label: "Kontakt", href: "#contact" },
      { label: "Karriere", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { label: "Impressum", href: "#" },
      { label: "Datenschutz", href: "#" },
      { label: "AGB", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div aria-hidden className="absolute inset-0 bg-noise opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl"
      />

      <div className="relative container mx-auto max-w-6xl py-20">
        <FadeIn>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <a href="#top" className="inline-flex items-center gap-3" aria-label="Skalero">
                <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-white">
                  <span className="absolute inset-1 rounded-lg bg-brand-500" />
                  <span className="relative font-display text-base font-black text-black">
                    S
                  </span>
                </span>
                <span className="font-display text-2xl font-bold tracking-tight">
                  Skalero
                </span>
              </a>

              <p className="mt-6 max-w-md text-white/65">
                Wir bringen Handwerksbetriebe digital nach vorn. Mit Websites,
                die verkaufen, Werbekampagnen, die rentieren – und einer Strategie,
                die zu deinem Betrieb passt.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href="mailto:hello@skalero.de"
                  className="group flex items-center gap-3 text-sm text-white/75 hover:text-white"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 group-hover:bg-brand-500">
                    <Mail className="h-4 w-4" />
                  </span>
                  hello@skalero.de
                </a>
                <a
                  href="tel:+49"
                  className="group flex items-center gap-3 text-sm text-white/75 hover:text-white"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 group-hover:bg-brand-500">
                    <Phone className="h-4 w-4" />
                  </span>
                  +49 (0) 123 456 78 90
                </a>
                <p className="group flex items-center gap-3 text-sm text-white/75">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/5">
                    <MapPin className="h-4 w-4" />
                  </span>
                  Deutschland · Remote-first
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
              {linkGroups.map((group) => (
                <div key={group.title}>
                  <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                    {group.title}
                  </h4>
                  <ul className="mt-4 space-y-3">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-sm text-white/65 transition-colors hover:text-white"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} Skalero. Alle Rechte vorbehalten.
            </p>

            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:border-brand-500 hover:bg-brand-500 hover:text-white cursor-pointer"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
              <a
                href="#contact"
                className="group ml-2 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition-all hover:border-brand-500 hover:bg-brand-500 cursor-pointer"
              >
                Projekt starten
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </a>
            </div>
          </div>
        </FadeIn>

        <div
          aria-hidden
          className="pointer-events-none mt-12 select-none overflow-hidden"
        >
          <p className="font-display text-[18vw] font-black leading-none tracking-tighter text-white/[0.04]">
            SKALERO
          </p>
        </div>
      </div>
    </footer>
  );
}
