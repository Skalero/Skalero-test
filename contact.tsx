"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Globe,
  Megaphone,
  Users,
  TrendingUp,
  Calendar,
  Sparkles,
  PartyPopper,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn } from "@/components/motion/fade-in";

type Step = 0 | 1 | 2 | 3;

const goalOptions = [
  {
    id: "website",
    icon: Globe,
    title: "Neue Website",
    description: "Moderner Auftritt, der Anfragen bringt",
  },
  {
    id: "ads",
    icon: Megaphone,
    title: "Werbekampagnen",
    description: "Google & Meta Ads, die rentieren",
  },
  {
    id: "seo",
    icon: TrendingUp,
    title: "Mehr Sichtbarkeit",
    description: "SEO & Google Business Profil",
  },
  {
    id: "recruiting",
    icon: Users,
    title: "Mitarbeiter finden",
    description: "Social Recruiting & Employer Branding",
  },
  {
    id: "rebrand",
    icon: Sparkles,
    title: "Marken-Auffrischung",
    description: "Logo, Design & Bildsprache",
  },
  {
    id: "complete",
    icon: PartyPopper,
    title: "Komplett-Paket",
    description: "Alles aus einer Hand",
  },
];

const timelineOptions = [
  { id: "now", label: "Sofort", description: "In den nächsten 2 Wochen" },
  { id: "month", label: "Diesen Monat", description: "Innerhalb 4 Wochen" },
  { id: "quarter", label: "Dieses Quartal", description: "In 1–3 Monaten" },
  { id: "later", label: "Später / Erstberatung", description: "Noch kein fester Plan" },
];

const sizeOptions = [
  { id: "solo", label: "1–4 Mitarbeiter" },
  { id: "small", label: "5–15 Mitarbeiter" },
  { id: "medium", label: "16–50 Mitarbeiter" },
  { id: "large", label: "50+ Mitarbeiter" },
];

const stepperLabels = ["Ziel", "Zeitraum", "Größe", "Kontakt"];

export function Contact() {
  const [step, setStep] = useState<Step>(0);
  const [goals, setGoals] = useState<string[]>([]);
  const [timeline, setTimeline] = useState<string | null>(null);
  const [size, setSize] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const toggleGoal = (id: string) =>
    setGoals((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );

  const canContinue =
    (step === 0 && goals.length > 0) ||
    (step === 1 && timeline !== null) ||
    (step === 2 && size !== null);

  const next = () => setStep((s) => Math.min(3, (s + 1) as Step));
  const back = () => setStep((s) => Math.max(0, (s - 1) as Step));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 bg-neutral-50 py-24 sm:py-32"
    >
      <div aria-hidden className="absolute inset-0 bg-grid opacity-50" />

      <div className="container relative mx-auto max-w-5xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-black/60">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Kostenlose Erstberatung
          </span>
          <h2 className="mt-5 font-display text-4xl font-black tracking-tight text-black sm:text-5xl">
            In 60 Sekunden zum <span className="text-brand-500">Strategie&shy;gespräch.</span>
          </h2>
          <p className="mt-5 text-lg text-black/65">
            Sag uns kurz, was du brauchst – wir melden uns innerhalb von 24 Stunden
            mit einem konkreten Vorschlag bei dir.
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.2)] sm:p-10">
            {!submitted && (
              <>
                <div className="mb-8">
                  <div className="flex items-center justify-between">
                    {stepperLabels.map((label, i) => {
                      const isDone = i < step;
                      const isActive = i === step;
                      return (
                        <div key={label} className="flex flex-1 items-center">
                          <div className="flex flex-col items-center gap-2">
                            <div
                              className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-bold transition-colors ${
                                isDone
                                  ? "border-brand-500 bg-brand-500 text-white"
                                  : isActive
                                  ? "border-black bg-black text-white"
                                  : "border-black/15 bg-white text-black/40"
                              }`}
                            >
                              {isDone ? <Check className="h-4 w-4" /> : i + 1}
                            </div>
                            <span
                              className={`hidden text-xs font-semibold sm:block ${
                                isActive || isDone ? "text-black" : "text-black/40"
                              }`}
                            >
                              {label}
                            </span>
                          </div>
                          {i < stepperLabels.length - 1 && (
                            <div className="relative mx-2 h-px flex-1 bg-black/10">
                              <motion.div
                                initial={false}
                                animate={{ scaleX: i < step ? 1 : 0 }}
                                transition={{ duration: 0.4 }}
                                style={{ originX: 0 }}
                                className="absolute inset-0 bg-brand-500"
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {step === 0 && (
                    <motion.div
                      key="step-0"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="font-display text-2xl font-bold text-black sm:text-3xl">
                        Was ist dein Ziel?
                      </h3>
                      <p className="mt-2 text-sm text-black/60">
                        Mehrfachauswahl möglich. Wir gehen im Gespräch ins Detail.
                      </p>
                      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {goalOptions.map((opt) => {
                          const Icon = opt.icon;
                          const active = goals.includes(opt.id);
                          return (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => toggleGoal(opt.id)}
                              className={`group flex items-start gap-4 rounded-2xl border p-4 text-left transition-all cursor-pointer ${
                                active
                                  ? "border-brand-500 bg-brand-50 ring-2 ring-brand-500/30"
                                  : "border-black/10 bg-white hover:border-black/30"
                              }`}
                            >
                              <span
                                className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-colors ${
                                  active
                                    ? "bg-brand-500 text-white"
                                    : "bg-neutral-100 text-black group-hover:bg-black group-hover:text-white"
                                }`}
                              >
                                <Icon className="h-5 w-5" />
                              </span>
                              <div className="flex-1">
                                <p className="font-semibold text-black">
                                  {opt.title}
                                </p>
                                <p className="mt-0.5 text-sm text-black/60">
                                  {opt.description}
                                </p>
                              </div>
                              <span
                                className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                                  active
                                    ? "border-brand-500 bg-brand-500 text-white"
                                    : "border-black/20 bg-white"
                                }`}
                              >
                                {active && <Check className="h-3.5 w-3.5" />}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {step === 1 && (
                    <motion.div
                      key="step-1"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="font-display text-2xl font-bold text-black sm:text-3xl">
                        Wann möchtest du starten?
                      </h3>
                      <p className="mt-2 text-sm text-black/60">
                        Damit wir realistisch planen können.
                      </p>
                      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {timelineOptions.map((opt) => {
                          const active = timeline === opt.id;
                          return (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => setTimeline(opt.id)}
                              className={`flex items-center gap-4 rounded-2xl border p-5 text-left transition-all cursor-pointer ${
                                active
                                  ? "border-brand-500 bg-brand-50 ring-2 ring-brand-500/30"
                                  : "border-black/10 bg-white hover:border-black/30"
                              }`}
                            >
                              <Calendar
                                className={`h-6 w-6 ${
                                  active ? "text-brand-500" : "text-black/50"
                                }`}
                              />
                              <div>
                                <p className="font-semibold text-black">
                                  {opt.label}
                                </p>
                                <p className="text-sm text-black/60">
                                  {opt.description}
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step-2"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="font-display text-2xl font-bold text-black sm:text-3xl">
                        Wie groß ist dein Betrieb?
                      </h3>
                      <p className="mt-2 text-sm text-black/60">
                        Hilft uns, das passende Paket zu schnüren.
                      </p>
                      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {sizeOptions.map((opt) => {
                          const active = size === opt.id;
                          return (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => setSize(opt.id)}
                              className={`flex items-center justify-between gap-4 rounded-2xl border p-5 text-left transition-all cursor-pointer ${
                                active
                                  ? "border-brand-500 bg-brand-50 ring-2 ring-brand-500/30"
                                  : "border-black/10 bg-white hover:border-black/30"
                              }`}
                            >
                              <span className="font-semibold text-black">
                                {opt.label}
                              </span>
                              <span
                                className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                                  active
                                    ? "border-brand-500"
                                    : "border-black/20"
                                }`}
                              >
                                {active && (
                                  <span className="h-3 w-3 rounded-full bg-brand-500" />
                                )}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.form
                      key="step-3"
                      onSubmit={submit}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="font-display text-2xl font-bold text-black sm:text-3xl">
                        Fast geschafft. Wohin melden wir uns?
                      </h3>
                      <p className="mt-2 text-sm text-black/60">
                        Antwort innerhalb von 24 Stunden – versprochen.
                      </p>

                      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Dein Name *</Label>
                          <Input
                            id="name"
                            required
                            placeholder="Max Mustermann"
                            value={form.name}
                            onChange={(e) =>
                              setForm({ ...form, name: e.target.value })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Betrieb / Firma *</Label>
                          <Input
                            id="company"
                            required
                            placeholder="Mustermann Bau GmbH"
                            value={form.company}
                            onChange={(e) =>
                              setForm({ ...form, company: e.target.value })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">E-Mail *</Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            placeholder="max@mustermann-bau.de"
                            value={form.email}
                            onChange={(e) =>
                              setForm({ ...form, email: e.target.value })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefon (optional)</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+49 170 1234567"
                            value={form.phone}
                            onChange={(e) =>
                              setForm({ ...form, phone: e.target.value })
                            }
                          />
                        </div>
                        <div className="sm:col-span-2 space-y-2">
                          <Label htmlFor="message">Worum geht's konkret?</Label>
                          <Textarea
                            id="message"
                            placeholder="Erzähl uns kurz, was du erreichen willst..."
                            value={form.message}
                            onChange={(e) =>
                              setForm({ ...form, message: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      <p className="mt-4 text-xs text-black/50">
                        Mit dem Absenden stimmst du zu, dass wir dich zur Beantwortung
                        deiner Anfrage kontaktieren dürfen. Keine Newsletter, keine Spam.
                      </p>

                      <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <Button
                          type="button"
                          variant="ghost"
                          onClick={back}
                          className="w-full sm:w-auto"
                        >
                          <ArrowLeft className="h-4 w-4" /> Zurück
                        </Button>
                        <Button type="submit" size="lg" className="w-full sm:w-auto">
                          Anfrage absenden <ArrowRight className="h-5 w-5" />
                        </Button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>

                {step < 3 && (
                  <div className="mt-10 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={back}
                      disabled={step === 0}
                      className="w-full sm:w-auto"
                    >
                      <ArrowLeft className="h-4 w-4" /> Zurück
                    </Button>
                    <Button
                      type="button"
                      onClick={next}
                      disabled={!canContinue}
                      size="lg"
                      className="w-full sm:w-auto"
                    >
                      Weiter <ArrowRight className="h-5 w-5" />
                    </Button>
                  </div>
                )}
              </>
            )}

            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="py-10 text-center"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.15, type: "spring", stiffness: 220 }}
                  className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-brand-500 text-white"
                >
                  <Check className="h-10 w-10" />
                </motion.span>
                <h3 className="mt-6 font-display text-3xl font-black tracking-tight text-black sm:text-4xl">
                  Danke, {form.name.split(" ")[0] || "Chef"}!
                </h3>
                <p className="mx-auto mt-3 max-w-md text-black/65">
                  Wir haben deine Anfrage erhalten und melden uns innerhalb von 24
                  Stunden bei dir. Wenn's brennt: ruf uns einfach an.
                </p>
                <a
                  href="tel:+49"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-black hover:text-white cursor-pointer transition-colors"
                >
                  Direkt anrufen
                </a>
              </motion.div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
