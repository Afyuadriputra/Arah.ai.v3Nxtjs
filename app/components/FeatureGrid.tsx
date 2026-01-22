"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Brain,
  CalendarDays,
  GraduationCap,
  ShieldAlert,
  Shuffle,
  Target
} from "lucide-react";
import type { ReactNode } from "react";
import type { Locale } from "../content";
import { getCopy } from "../content";

type Props = {
  locale: Locale;
};

function cardMotion(reducedMotion: boolean, delay = 0) {
  return {
    initial: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: reducedMotion
      ? { duration: 0 }
      : { duration: 0.6, delay, ease: [0.2, 0.8, 0.2, 1] }
  } as const;
}

function IconFrame({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-black/10 bg-white shadow-soft">
      {children}
    </div>
  );
}

export function FeatureGrid({ locale }: Props) {
  const copy = getCopy(locale);
  const items = copy.features.items;
  const more = copy.features.more;
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <section className="container-px mx-auto max-w-7xl py-16 sm:py-20">
      <motion.div
        {...cardMotion(reducedMotion, 0)}
        className="mx-auto max-w-3xl text-center"
      >
        <div className="text-xs font-medium tracking-wide text-neutral-600">
          {copy.features.eyebrow}
        </div>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.03em] text-black sm:text-4xl">
          {copy.features.title}
        </h2>
        <p className="mt-3 text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg">
          {copy.features.subtitle}
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-12">
        <motion.div
          {...cardMotion(reducedMotion, 0.05)}
          className="group relative overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white p-7 shadow-soft md:col-span-7 before:pointer-events-none before:absolute before:inset-0 before:rounded-3xl before:opacity-0 before:shadow-[0_0_0_1px_rgba(0,0,0,0.18),0_18px_60px_rgba(0,0,0,0.08)] before:transition group-hover:before:opacity-100"
        >
          <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0)_60%)] blur-2xl" />
          </div>
          <div className="relative">
            <div className="flex items-start gap-4">
              <IconFrame>
                <CalendarDays className="h-5 w-5 text-black" />
              </IconFrame>
              <div>
                <h3 className="text-base font-semibold tracking-tight">
                  {items.scheduler.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {items.scheduler.description}
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-black/10 bg-[color:var(--panel)] p-4">
              <div className="grid grid-cols-3 gap-2 text-xs text-neutral-700">
                {copy.features.schedulerBadges.map((badge) => (
                  <div
                    key={badge}
                    className="rounded-xl border border-black/10 bg-white px-3 py-2"
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          {...cardMotion(reducedMotion, 0.1)}
          className="group relative overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white p-7 shadow-soft md:col-span-5 before:pointer-events-none before:absolute before:inset-0 before:rounded-3xl before:opacity-0 before:shadow-[0_0_0_1px_rgba(0,0,0,0.18),0_18px_60px_rgba(0,0,0,0.08)] before:transition group-hover:before:opacity-100"
        >
          <div className="flex items-start gap-4">
            <IconFrame>
              <Target className="h-5 w-5 text-black" />
            </IconFrame>
            <div>
              <h3 className="text-base font-semibold tracking-tight">
                {items.career.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {items.career.description}
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-2 text-xs text-neutral-700">
            {copy.features.careerChips.map((chip) => (
              <div
                key={chip.role}
                className="flex items-center justify-between rounded-2xl border border-black/10 bg-[color:var(--panel)] px-4 py-3"
              >
                <span className="font-medium">{chip.role}</span>
                <span className="text-neutral-600">{chip.hint}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          {...cardMotion(reducedMotion, 0.15)}
          className="group relative overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white p-7 shadow-soft md:col-span-5 before:pointer-events-none before:absolute before:inset-0 before:rounded-3xl before:opacity-0 before:shadow-[0_0_0_1px_rgba(0,0,0,0.18),0_18px_60px_rgba(0,0,0,0.08)] before:transition group-hover:before:opacity-100"
        >
          <div className="flex items-start gap-4">
            <IconFrame>
              <Brain className="h-5 w-5 text-black" />
            </IconFrame>
            <div>
              <h3 className="text-base font-semibold tracking-tight">
                {items.load.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {items.load.description}
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-7 gap-1">
            {Array.from({ length: 21 }).map((_, i) => {
              const level = (i % 7) + 1;
              const shade =
                level <= 2
                  ? "bg-neutral-100"
                  : level <= 4
                    ? "bg-neutral-200"
                    : level <= 6
                      ? "bg-neutral-300"
                      : "bg-neutral-800";
              return (
                <div
                  key={i}
                  className={`h-3 w-full rounded ${shade} border border-black/5`}
                />
              );
            })}
          </div>
          <div className="mt-2 text-xs text-neutral-500">{copy.features.loadLegend}</div>
        </motion.div>

        <motion.div
          {...cardMotion(reducedMotion, 0.2)}
          className="group relative overflow-hidden rounded-3xl border border-[color:var(--border)] bg-black p-7 text-white shadow-glow md:col-span-7"
        >
          <div className="absolute inset-0 opacity-80">
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0)_60%)] blur-2xl" />
          </div>
          <div className="relative">
            <div className="flex items-start gap-4">
              <IconFrame>
                <ShieldAlert className="h-5 w-5 text-black" />
              </IconFrame>
              <div>
                <h3 className="text-base font-semibold tracking-tight">
                  {items.warning.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-200">
                  {items.warning.description}
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between text-xs text-neutral-200">
                <span>{copy.features.warningPanel.label}</span>
                <span className="font-medium">{copy.features.warningPanel.level}</span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-3/4 rounded-full bg-white/80" />
              </div>
              <div className="mt-3 text-xs text-neutral-300">
                {copy.features.warningPanel.footer}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          {...cardMotion(reducedMotion, 0.25)}
          className="group relative overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white p-7 shadow-soft md:col-span-6 before:pointer-events-none before:absolute before:inset-0 before:rounded-3xl before:opacity-0 before:shadow-[0_0_0_1px_rgba(0,0,0,0.18),0_18px_60px_rgba(0,0,0,0.08)] before:transition group-hover:before:opacity-100"
        >
          <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0)_60%)] blur-2xl" />
          </div>
          <div className="relative">
            <div className="flex items-start gap-4">
              <IconFrame>
                <Shuffle className="h-5 w-5 text-black" />
              </IconFrame>
              <div>
                <h3 className="text-base font-semibold tracking-tight">
                  {more.reschedule.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {more.reschedule.description}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {more.reschedule.badges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center rounded-full border border-black/10 bg-[color:var(--panel)] px-3 py-1 text-xs font-medium text-neutral-700"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          {...cardMotion(reducedMotion, 0.3)}
          className="group relative overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white p-7 shadow-soft md:col-span-6 before:pointer-events-none before:absolute before:inset-0 before:rounded-3xl before:opacity-0 before:shadow-[0_0_0_1px_rgba(0,0,0,0.18),0_18px_60px_rgba(0,0,0,0.08)] before:transition group-hover:before:opacity-100"
        >
          <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0)_62%)] blur-2xl" />
          </div>
          <div className="relative">
            <div className="flex items-start gap-4">
              <IconFrame>
                <GraduationCap className="h-5 w-5 text-black" />
              </IconFrame>
              <div>
                <h3 className="text-base font-semibold tracking-tight">
                  {more.graduation.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {more.graduation.description}
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              {more.graduation.bullets.map((b) => (
                <div
                  key={b}
                  className="flex items-center justify-between rounded-2xl border border-black/10 bg-[color:var(--panel)] px-4 py-3 text-xs text-neutral-700"
                >
                  <span className="font-medium">{b}</span>
                  <span className="text-neutral-500">✓</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
