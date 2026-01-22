"use client";

import { useEffect, useMemo, useState } from "react";
import type { Locale } from "./content";
import { getCopy } from "./content";
import { AcademicBackground } from "./components/AcademicBackground";
import { BackgroundMesh } from "./components/BackgroundMesh";
import { Hero } from "./components/Hero";
import { ProblemSection } from "./components/ProblemSection";
import { HowItWorks } from "./components/HowItWorks";
import { FeatureGrid } from "./components/FeatureGrid";
import { ChatSection } from "./components/ChatSection";
import { FaqSection } from "./components/FaqSection";

const STORAGE_KEY = "arah.ai:locale";

function isLocale(value: unknown): value is Locale {
  return value === "en" || value === "id";
}

export default function Page() {
  const [locale, setLocale] = useState<Locale>("en");
  const copy = useMemo(() => getCopy(locale), [locale]);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) setLocale(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-white via-[#F5F5F7] to-[#0A0A0A] bg-fixed">
      <AcademicBackground />
      <BackgroundMesh />
      <div className="relative z-10">
        <a
          href="#modules"
          className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-50 focus:rounded-full focus:bg-black focus:px-4 focus:py-2 focus:text-xs focus:font-medium focus:text-white"
        >
          Skip to content
        </a>

        <header className="container-px mx-auto max-w-7xl py-8">
          <div className="grid grid-cols-[1fr_auto] items-center gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.svg"
                alt="arah.ai"
                className="h-9 w-auto"
                width={40}
                height={40}
              />
              <div className="leading-tight">
                <div className="text-base font-semibold tracking-tight text-black">
                  {copy.nav.brand}
                </div>
                <div className="mt-0.5 hidden text-sm text-neutral-500 sm:block">
                  {copy.nav.tagline}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2">
              <div
                className="rounded-full border border-[color:var(--border)] bg-white p-1 shadow-soft"
                role="group"
                aria-label={copy.nav.languageLabel}
              >
                <button
                  type="button"
                  onClick={() => setLocale("en")}
                  className={`rounded-full px-3 py-1 text-sm font-medium transition ${
                    locale === "en"
                      ? "bg-black text-white"
                      : "text-neutral-700 hover:bg-[color:var(--panel)]"
                  }`}
                  aria-pressed={locale === "en"}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLocale("id")}
                  className={`rounded-full px-3 py-1 text-sm font-medium transition ${
                    locale === "id"
                      ? "bg-black text-white"
                      : "text-neutral-700 hover:bg-[color:var(--panel)]"
                  }`}
                  aria-pressed={locale === "id"}
                >
                  ID
                </button>
              </div>

              <button
                type="button"
                onClick={() => scrollToId("chat")}
                className="hidden rounded-full bg-black px-4 py-2 text-sm font-medium text-white shadow-glow transition hover:bg-neutral-900 sm:inline-flex"
              >
                {copy.nav.ctaPrimary}
              </button>
            </div>
          </div>
        </header>

        <Hero
          locale={locale}
          onPrimaryAction={() => scrollToId("chat")}
          onSecondaryAction={() => scrollToId("how")}
        />

        <ProblemSection locale={locale} />

        <HowItWorks locale={locale} />

        <div id="modules">
          <FeatureGrid locale={locale} />
        </div>

        <div id="chat">
          <ChatSection locale={locale} />
        </div>

        <FaqSection locale={locale} />

        <footer className="border-t border-[color:var(--border)] bg-white">
          <div className="container-px mx-auto max-w-7xl py-12">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <div className="flex items-center gap-2">
                  <img
                    src="/logo.svg"
                    alt="arah.ai"
                    className="h-8 w-auto"
                    width={36}
                    height={36}
                  />
                  <div className="text-base font-semibold tracking-tight text-black">
                    {copy.nav.brand}
                  </div>
                </div>
                <div className="mt-1 text-sm text-neutral-500">
                  {copy.footer.note}
                </div>
              </div>
              <div className="text-sm text-neutral-500">© {new Date().getFullYear()} arah.ai</div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
