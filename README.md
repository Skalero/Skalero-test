# Skalero — Landingpage

Digitales Marketing für Handwerksbetriebe. Komplette Next.js Landingpage mit Tailwind CSS, Framer Motion und shadcn/ui Pattern.

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** + tailwind-merge + cva
- **Framer Motion** für alle Scroll-Animationen
- **shadcn/ui** Pattern (Button, Input, Textarea, Label)
- **Lucide React** Icons
- **TypeScript**
- **Google Fonts**: Inter + Space Grotesk

## Quickstart

```bash
cd /Users/angelo/Projects/skalero
npm install
npm run dev
```

Öffne dann [http://localhost:3000](http://localhost:3000).

## Aufbau

```
app/
├── layout.tsx          Root-Layout mit Fonts + Metadata (DE)
├── page.tsx            Setzt alle Sektionen zusammen
└── globals.css         Tailwind + CSS-Variablen + Utilities

components/
├── motion/
│   └── fade-in.tsx     Reusable FadeIn + Stagger Wrapper
├── sections/
│   ├── navbar.tsx      Sticky/Floating Navbar mit Mobile-Menu
│   ├── hero.tsx        Animierte Headline + CTA + Trust-Cards
│   ├── services.tsx    6 Leistungen mit Icons, Featured-Card
│   ├── about.tsx       Über uns + animierte Stats (Counter)
│   ├── contact.tsx     4-Step Survey: Ziel → Zeitraum → Größe → Kontakt
│   └── footer.tsx      Multi-Column Footer mit Links + Social
└── ui/                 shadcn-Style Komponenten
    ├── button.tsx
    ├── input.tsx
    ├── textarea.tsx
    └── label.tsx

lib/utils.ts            cn() Helper (clsx + tailwind-merge)
```

## Design-System

- **Brand-Farbe:** Orange `#F97316` (Tailwind `brand-500`)
- **Hintergrund:** Pure White / Pure Black (alternierend für Sektionen)
- **Typografie:** Space Grotesk (Display, fett) + Inter (Body)
- **Radius:** Großzügig (1rem default), `rounded-full` für CTAs
- **Schatten:** Sehr weich, orange-getönt bei Primary-Buttons

## Sektionen — Was passiert beim Scrollen

1. **Hero** — Wörter erscheinen einzeln mit Blur-Reveal, CTA fadet ein, Trust-Cards staggern hoch.
2. **Services** — Header fade-up, Cards staggern mit 80ms-Versatz. Featured-Card (Websites) in Schwarz.
3. **About** — Linke Spalte fade-up, Stats-Counter zählen sich beim In-View hoch, rechte Box slidet von rechts.
4. **Contact** — Multi-Step-Formular mit horizontalem Slide zwischen den Steps. Stepper-Progress animiert.
5. **Footer** — Sanftes Fade-In. Riesiges "SKALERO" Outline-Wordmark unten.

Alle Animationen respektieren `prefers-reduced-motion`.

## Anpassen

- **Brand-Farbe:** `tailwind.config.ts` → `colors.brand` und `app/globals.css` → `--primary`.
- **Texte:** Direkt in den Sektions-Komponenten unter `components/sections/`.
- **Services:** Array in `components/sections/services.tsx`.
- **Survey-Optionen:** Arrays oben in `components/sections/contact.tsx` (`goalOptions`, `timelineOptions`, `sizeOptions`).
- **Links/Kontakt:** `components/sections/footer.tsx` und `components/sections/contact.tsx`.

## Hinweise

- Das Kontaktformular ist clientseitig — submit() müsste mit einem Endpunkt verbunden werden (z.B. Resend, Formspree, eigene Route-Handler).
- Logo ist textuell + Block-S — bei Bedarf durch echtes SVG ersetzen.
- Bilder/Fotos kannst du in `public/` ablegen und im Hero einbinden.
