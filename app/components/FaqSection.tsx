"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { Locale } from "../content";
import { getCopy } from "../content";

type Props = {
  locale: Locale;
};

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

export function FaqSection({ locale }: Props) {
  const copy = getCopy(locale);
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <section id="faq" className="container-px mx-auto max-w-7xl py-16 sm:py-20">
      <motion.div {...reveal(reducedMotion, 0)} className="mx-auto max-w-3xl text-center">
        <div className="text-xs font-medium tracking-wide text-neutral-600">
          {copy.faq.eyebrow}
        </div>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.03em] text-black sm:text-4xl">
          {copy.faq.title}
        </h2>
        <p className="mt-3 text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg">
          {copy.faq.subtitle}
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-4">
        {copy.faq.items.map((item, idx) => (
          <motion.details
            key={item.q}
            {...reveal(reducedMotion, 0.05 + idx * 0.03)}
            className="group rounded-3xl border border-black/10 bg-white p-6 shadow-soft"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <span className="text-base font-semibold tracking-tight text-black">
                {item.q}
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl border border-black/10 bg-[color:var(--panel)]">
                <ChevronDown className="h-4 w-4 text-black transition group-open:rotate-180" />
              </span>
            </summary>
            <div className="mt-3 text-base leading-relaxed text-neutral-600">
              {item.a}
            </div>
          </motion.details>
        ))}
      </div>
    </section>
  );
}
