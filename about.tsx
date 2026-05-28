"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Target, HeartHandshake, Zap, Compass } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";

const values = [
  {
    icon: Target,
    title: "Fokus auf Ergebnisse",
    text: "Keine Marketing-Buzzwords. Wir messen, was zählt: Anfragen, Termine, Umsatz.",
  },
  {
    icon: HeartHandshake,
    title: "Augenhöhe mit Handwerkern",
    text: "Wir sprechen deine Sprache. Statt Agentur-Bla bekommst du klare Antworten.",
  },
  {
    icon: Zap,
    title: "Schnell & verbindlich",
    text: "Antworten in 24 Stunden. Klare Deadlines. Was wir versprechen, halten wir.",
  },
  {
    icon: Compass,
    title: "Strategisch statt zufällig",
    text: "Wir bauen einen Plan, der zu deinem Betrieb passt – nicht von der Stange.",
  },
];

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString("de-DE"));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration: 1.8,
        ease: [0.22, 1, 0.36, 1],
      });
      return controls.stop;
    }
  }, [inView, to, count]);

  return (
    <span className="inline-flex items-baseline">
      <motion.span ref={ref}>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

const stats: { value: number; suffix: string; label: string }[] = [
  { value: 100, suffix: "%", label: "Spezialisiert auf Handwerk" },
  { value: 24, suffix: "h", label: "Antwort-Zeit garantiert" },
  { value: 7, suffix: "+", label: "Jahre Marketing-Erfahrung" },
  { value: 1, suffix: ":1", label: "Direkter Ansprechpartner" },
];

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden bg-black py-24 text-white sm:py-32"
    >
      <div aria-hidden className="absolute inset-0 bg-noise opacity-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full bg-brand-500/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -bottom-32 h-[360px] w-[360px] rounded-full bg-brand-500/15 blur-3xl"
      />

      <div className="container relative mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <FadeIn>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/70 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                Über uns
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Aus Handwerks-Familie. <br />
                Für das{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-black">Handwerk.</span>
                  <span className="absolute inset-x-[-0.1em] inset-y-[0.05em] -z-0 rounded-2xl bg-brand-500" />
                </span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-white/75">
                <p>
                  Skalero wurde gegründet, weil wir genau wissen, wie es im Betrieb läuft –
                  und wo digitales Marketing für Handwerksbetriebe oft schief geht.
                  Generische Agenturen kennen die Baustelle nicht. Wir schon.
                </p>
                <p>
                  Wir sind ein junges, fokussiertes Team mit Wurzeln im Handwerk und
                  jahrelanger Erfahrung im Performance-Marketing. Unsere Mission:
                  Inhaberinnen und Inhaber wieder zu Aufträgen verhelfen – ohne Werbung
                  zu schalten, die niemand braucht.
                </p>
                <p className="font-medium text-white">
                  Du bekommst keinen Account-Manager, der dich an drei Teams weiterreicht.
                  Du bekommst uns. Direkt.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-600 cursor-pointer"
                >
                  Lass uns reden
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
                <a
                  href="#services"
                  className="text-sm font-semibold text-white/70 underline-offset-4 hover:text-white hover:underline"
                >
                  Mehr zu unseren Leistungen
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-6">
            <FadeIn direction="left" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.2 + idx * 0.08, duration: 0.6 }}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
                  >
                    <div className="font-display text-5xl font-black tracking-tight text-white sm:text-6xl">
                      <Counter to={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="mt-2 text-sm leading-snug text-white/60">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.4} className="mt-6">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">
                  Unsere Versprechen
                </p>
                <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                  {values.map((v) => {
                    const Icon = v.icon;
                    return (
                      <li key={v.title} className="flex gap-3">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-500/15 text-brand-300">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {v.title}
                          </p>
                          <p className="mt-0.5 text-xs leading-relaxed text-white/60">
                            {v.text}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
