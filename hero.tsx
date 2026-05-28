"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, CheckCircle2, Hammer, Wrench, PaintBucket } from "lucide-react";
import { Button } from "@/components/ui/button";

const headlineWords = ["Wir", "skalieren", "Handwerks-", "betriebe."];

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.15 + i * 0.1,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const bullets = [
  "Websites, die Anfragen bringen",
  "Werbekampagnen, die rentieren",
  "Online sichtbar in deiner Region",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-36 pb-24 sm:pt-40 sm:pb-32 lg:pt-44 lg:pb-40"
    >
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-brand-500/35 blur-3xl animate-blob-pulse"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-20 -z-10 h-[420px] w-[420px] rounded-full bg-brand-300/40 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-white"
      />

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-1.5 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
          </span>
          <span className="text-xs font-medium tracking-wide text-black/70">
            Digital-Agentur für das Handwerk
          </span>
        </motion.div>

        <h1 className="mx-auto max-w-5xl text-center font-display text-5xl font-black leading-[0.95] tracking-tight text-black sm:text-6xl md:text-7xl lg:text-[88px]">
          <span className="block">
            {headlineWords.slice(0, 2).map((word, i) => (
              <motion.span
                key={word}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className="mr-3 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </span>
          <span className="block">
            {headlineWords.slice(2).map((word, i) => (
              <motion.span
                key={word}
                custom={i + 2}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className="mr-3 inline-block"
              >
                {i === 1 ? (
                  <span className="relative inline-block">
                    <span className="relative z-10 text-white">{word}</span>
                    <motion.span
                      aria-hidden
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      style={{ originX: 0 }}
                      className="absolute inset-x-[-0.1em] inset-y-[0.05em] -z-0 rounded-2xl bg-brand-500"
                    />
                  </span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
          className="mx-auto mt-8 max-w-2xl text-balance text-center text-lg text-black/65 sm:text-xl"
        >
          Website, Werbung, Sichtbarkeit. Wir bringen deinen Betrieb online dahin,
          wo deine Kunden ihn finden – und sorgen dafür, dass sie anrufen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <Button asChild size="lg" className="group w-full sm:w-auto">
            <a href="#contact">
              Kostenlose Erstberatung
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <a href="#services">Unsere Leistungen</a>
          </Button>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-3"
        >
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-2 text-sm text-black/70">
              <CheckCircle2 className="h-4 w-4 text-brand-500" />
              {b}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35, duration: 0.7 }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          <div className="absolute inset-x-8 -top-6 -z-10 h-12 rounded-full bg-brand-500/20 blur-2xl" />
          <div className="relative grid grid-cols-1 gap-4 rounded-3xl border border-black/10 bg-white p-3 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] sm:grid-cols-3">
            {[
              { icon: Hammer, title: "Zimmerer & Dachdecker", text: "Mehr regionale Anfragen" },
              { icon: Wrench, title: "SHK & Elektro", text: "Notfall-Aufträge online" },
              { icon: PaintBucket, title: "Maler & Bodenleger", text: "Premium-Kunden gewinnen" },
            ].map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + i * 0.1, duration: 0.5 }}
                className="group flex items-center gap-4 rounded-2xl bg-neutral-50 p-5 transition-colors hover:bg-brand-50"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-black text-white transition-colors group-hover:bg-brand-500">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="text-left">
                  <p className="font-semibold text-black">{title}</p>
                  <p className="text-sm text-black/60">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
