"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#services", label: "Leistungen" },
  { href: "#about", label: "Über uns" },
  { href: "#contact", label: "Kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-50 mx-auto flex justify-center px-4"
    >
      <nav
        className={cn(
          "flex w-full max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 sm:px-6",
          scrolled
            ? "border-black/10 bg-white/85 backdrop-blur-lg shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)]"
            : "border-transparent bg-white/60 backdrop-blur"
        )}
      >
        <a
          href="#top"
          className="flex items-center gap-2 group"
          aria-label="Skalero Startseite"
        >
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-black">
            <span className="absolute inset-1 rounded-lg bg-brand-500" />
            <span className="relative font-display text-sm font-black text-white">
              S
            </span>
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-black">
            Skalero
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-black/70 transition-colors hover:text-black"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <a href="#contact">Jetzt starten</a>
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü"
          className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-black/10 bg-white text-black md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-4 right-4 top-[68px] z-40 rounded-2xl border border-black/10 bg-white/95 p-4 shadow-xl backdrop-blur md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-black hover:bg-black/5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <Button asChild className="w-full">
                  <a href="#contact" onClick={() => setOpen(false)}>
                    Jetzt starten
                  </a>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
