"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
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

export function ProblemSection({ locale }: Props) {
  const copy = getCopy(locale);
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <section id="problem" className="container-px mx-auto max-w-7xl py-16 sm:py-20">
      <motion.div {...reveal(reducedMotion, 0)} className="mx-auto max-w-3xl text-center">
        <div className="text-xs font-medium tracking-wide text-neutral-600">
          {copy.problem.eyebrow}
        </div>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.03em] text-black sm:text-4xl">
          {copy.problem.title}
        </h2>
        <p className="mt-3 text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg">
          {copy.problem.subtitle}
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-12">
        <motion.div
          {...reveal(reducedMotion, 0.05)}
          className="group relative overflow-hidden rounded-3xl border border-black/10 bg-[color:var(--panel)] p-6 shadow-soft md:col-span-6"
        >
          <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0)_60%)] blur-2xl" />
          </div>
          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-black/10 bg-white shadow-soft">
                <AlertTriangle className="h-5 w-5 text-black" />
              </div>
              <div>
                <div className="text-xs font-medium text-neutral-600">{copy.problem.left.title}</div>
                <div className="mt-1 text-sm font-semibold tracking-tight text-black">
                  {copy.problem.left.subtitle}
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              {copy.problem.left.items.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 rounded-2xl border border-black/10 bg-white px-4 py-3"
                >
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-black/70" />
                  <div className="text-sm leading-relaxed text-neutral-700">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          {...reveal(reducedMotion, 0.1)}
          className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white p-6 shadow-soft md:col-span-6"
        >
          <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
            <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0)_62%)] blur-2xl" />
          </div>
          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-black/10 bg-[color:var(--panel)] shadow-soft">
                <CheckCircle2 className="h-5 w-5 text-black" />
              </div>
              <div>
                <div className="text-xs font-medium text-neutral-600">{copy.problem.right.title}</div>
                <div className="mt-1 text-sm font-semibold tracking-tight text-black">
                  {copy.problem.right.subtitle}
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              {copy.problem.right.items.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 rounded-2xl border border-black/10 bg-[color:var(--panel)] px-4 py-3"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-black" />
                  <div className="text-sm leading-relaxed text-neutral-700">{item}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-black/10 bg-black px-5 py-4 text-white shadow-glow">
              <div className="text-sm font-semibold tracking-tight">
                {copy.problem.statement}
              </div>
              <div className="mt-2 text-xs leading-relaxed text-neutral-200">
                {copy.problem.statementSub}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
