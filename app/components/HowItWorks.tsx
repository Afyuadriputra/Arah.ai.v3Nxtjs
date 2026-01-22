"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Link2, ScanSearch, Sparkles } from "lucide-react";
import type { Locale } from "../content";
import { getCopy } from "../content";

type Props = {
  locale: Locale;
};

const icons = [Link2, ScanSearch, Sparkles] as const;

function reveal(reducedMotion: boolean, delay = 0) {
  return {
    initial: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: reducedMotion
      ? { duration: 0 }
      : { duration: 0.6, delay, ease: [0.2, 0.8, 0.2, 1] }
  } as const;
}

export function HowItWorks({ locale }: Props) {
  const copy = getCopy(locale);
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <section id="how" className="container-px mx-auto max-w-7xl py-16 sm:py-20">
      <motion.div {...reveal(reducedMotion, 0)} className="mx-auto max-w-3xl text-center">
        <div className="text-xs font-medium tracking-wide text-neutral-600">
          {copy.how.eyebrow}
        </div>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.03em] text-black sm:text-4xl">
          {copy.how.title}
        </h2>
        <p className="mt-3 text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg">
          {copy.how.subtitle}
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {copy.how.steps.map((step, i) => {
          const Icon = icons[i] ?? Sparkles;
          return (
            <motion.div
              key={step.title}
              {...reveal(reducedMotion, 0.05 + i * 0.05)}
              className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white p-6 shadow-soft"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0)_60%)] blur-2xl" />
              </div>

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-black/10 bg-[color:var(--panel)] shadow-soft">
                    <Icon className="h-5 w-5 text-black" />
                  </div>
                  <div className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-neutral-700">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>

                <h3 className="mt-5 text-lg font-semibold tracking-tight text-black">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-neutral-600">
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
