import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Skalero — Digitales Marketing für Handwerksbetriebe",
  description:
    "Skalero baut Websites, schaltet Werbekampagnen und verbessert Online-Auftritte – damit Handwerksbetriebe planbar wachsen.",
  keywords: [
    "Handwerker Marketing",
    "Website für Handwerker",
    "Google Ads Handwerk",
    "SEO Handwerk",
    "Digitales Marketing",
    "Skalero",
  ],
  openGraph: {
    title: "Skalero — Digitales Marketing für Handwerksbetriebe",
    description:
      "Mehr Anfragen, bessere Aufträge, sichtbarer Betrieb. Skalero macht Handwerksbetriebe digital sichtbar.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${display.variable}`}>
      <body className="bg-white text-black antialiased">{children}</body>
    </html>
  );
}
