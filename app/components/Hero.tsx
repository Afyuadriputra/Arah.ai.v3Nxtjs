"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Locale } from "../content";
import { getCopy } from "../content";

type Props = {
  locale: Locale;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
};

export function Hero({ locale, onPrimaryAction, onSecondaryAction }: Props) {
  const copy = getCopy(locale);
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-120px] h-[380px] w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0)_60%)] blur-2xl" />
        <div className="absolute bottom-[-160px] right-[-120px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0)_62%)] blur-2xl" />
      </div>

      <div className="container-px mx-auto max-w-7xl pt-16 sm:pt-20 md:pt-24">
        <motion.div
          initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          whileInView={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={
            reducedMotion
              ? { duration: 0 }
              : { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }
          }
          className="mx-auto max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-3 py-1 text-xs text-neutral-600 shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-black" />
            <span className="font-medium tracking-tight">{copy.nav.tagline}</span>
          </div>

          <h1 className="mt-6 text-balance text-5xl font-semibold tracking-[-0.05em] text-black sm:text-6xl md:text-7xl">
            <span className="bg-gradient-to-b from-black to-neutral-500 bg-clip-text text-transparent">
              {copy.hero.headline}
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-neutral-600 sm:text-xl">
            {copy.hero.subheadline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={onPrimaryAction}
              className="inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-medium text-white shadow-glow transition hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-black/20"
            >
              {copy.hero.cta}
            </button>
            <button
              type="button"
              onClick={onSecondaryAction}
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-white px-5 py-3 text-sm font-medium text-black shadow-soft transition hover:bg-[color:var(--panel)] focus:outline-none focus:ring-2 focus:ring-black/10"
            >
              {copy.hero.secondary}
            </button>
          </div>

          <div className="mt-12 rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-5 shadow-soft sm:p-7">
            <div className="grid gap-4 sm:grid-cols-3">
              {copy.hero.cards.map((card) => (
                <div key={card.label} className="rounded-2xl border border-black/10 bg-white p-5">
                  <div className="text-xs font-medium text-neutral-600">{card.label}</div>
                  <div className="mt-2 text-sm font-semibold tracking-tight">{card.value}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
