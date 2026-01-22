"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  CalendarCheck2,
  Briefcase,
  BrainCircuit,
  ShieldAlert,
  Zap,
  Clock,
  GraduationCap,
  CheckCircle2
} from "lucide-react";
import type { Locale } from "../content";
import { getCopy } from "../content";

type Props = {
  locale: Locale;
};

// --- ANIMASI ---
function cardMotion(reducedMotion: boolean, delay = 0) {
  return {
    initial: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: reducedMotion
      ? { duration: 0 }
      : { duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] }
  } as const;
}

export function FeatureGrid({ locale }: Props) {
  const copy = getCopy(locale);
  const items = copy.features.items;
  const more = copy.features.more;
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <section className="relative py-24 sm:py-32 bg-neutral-50/50 overflow-hidden">
      <div className="container-px mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* --- HEADER --- */}
        <motion.div
          {...cardMotion(reducedMotion, 0)}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-600 shadow-sm mb-4">
            <Zap className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
            <span>{copy.features.eyebrow}</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            {copy.features.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            {copy.features.subtitle}
          </p>
        </motion.div>

        {/* --- BENTO GRID SYSTEM --- */}
        {/* Grid 3 Kolom yang Stabil */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto">
          
          {/* 1. SCHEDULER (Lebar: Span 2) */}
          <motion.div
            {...cardMotion(reducedMotion, 0.1)}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-neutral-200 transition-all hover:shadow-xl hover:ring-neutral-300 md:col-span-2"
          >
            <div className="relative z-10 max-w-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <CalendarCheck2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">{items.scheduler.title}</h3>
              <p className="mt-3 text-sm text-neutral-500 leading-relaxed">
                {items.scheduler.description}
              </p>
              
              {/* Badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                {copy.features.schedulerBadges.map((badge, i) => (
                  <span key={i} className="inline-flex items-center rounded-lg border border-neutral-100 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-600">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual: Timeline yang muncul dari kanan */}
            <div className="absolute right-0 top-1/2 w-1/3 -translate-y-1/2 translate-x-4 opacity-50 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 hidden sm:block">
               <div className="space-y-2">
                  <div className="h-2 w-3/4 rounded-full bg-indigo-100" />
                  <div className="h-2 w-full rounded-full bg-indigo-200" />
                  <div className="h-2 w-1/2 rounded-full bg-indigo-100" />
               </div>
            </div>
          </motion.div>

          {/* 2. CAREER (Standard: Span 1, Dark Mode) */}
          <motion.div
            {...cardMotion(reducedMotion, 0.2)}
            className="group relative flex flex-col overflow-hidden rounded-3xl bg-neutral-900 p-8 shadow-md ring-1 ring-neutral-900 transition-transform hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 -mr-8 -mt-8 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 opacity-20 blur-3xl group-hover:opacity-30 transition-opacity" />
            
            <div className="relative z-10 flex-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-sm">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">{items.career.title}</h3>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                {items.career.description}
              </p>
            </div>

            {/* Visual: Career Match Bar */}
            <div className="relative z-10 mt-8">
               <div className="flex justify-between text-xs text-neutral-300 mb-2">
                  <span>Match</span>
                  <span className="text-emerald-400">92%</span>
               </div>
               <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[92%] bg-gradient-to-r from-indigo-500 to-emerald-400 rounded-full" />
               </div>
            </div>
          </motion.div>

          {/* 3. COGNITIVE LOAD (Standard: Span 1) */}
          <motion.div
            {...cardMotion(reducedMotion, 0.3)}
            className="group relative flex flex-col overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-neutral-200 transition-all hover:shadow-lg hover:ring-neutral-300"
          >
             <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                <BrainCircuit className="h-6 w-6" />
             </div>
             <h3 className="text-xl font-bold text-neutral-900">{items.load.title}</h3>
             <p className="mt-3 text-sm text-neutral-500 leading-relaxed">
                {items.load.description}
             </p>

             {/* Visual: Load Bars */}
             <div className="mt-auto pt-8 flex items-end justify-between gap-1 h-24">
                {[30, 50, 40, 80, 60, 20].map((h, i) => (
                   <div key={i} className="flex-1 bg-neutral-100 rounded-t-sm relative group/bar overflow-hidden">
                      <div 
                        style={{ height: `${h}%` }} 
                        className={`absolute bottom-0 w-full rounded-t-sm transition-all duration-500 ease-out group-hover:h-full ${h > 70 ? 'bg-orange-400' : 'bg-neutral-300'}`} 
                      />
                   </div>
                ))}
             </div>
          </motion.div>

          {/* 4. WARNING SYSTEM (Lebar: Span 2) */}
          <motion.div
            {...cardMotion(reducedMotion, 0.4)}
            className="group relative flex flex-col md:flex-row items-center justify-between overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-neutral-200 transition-all hover:shadow-xl hover:ring-neutral-300 md:col-span-2"
          >
             <div className="relative z-10 max-w-sm mb-6 md:mb-0">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                   <ShieldAlert className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">{items.warning.title}</h3>
                <p className="mt-3 text-sm text-neutral-500 leading-relaxed">
                   {items.warning.description}
                </p>
             </div>

             {/* Visual: Notification Toast Mockup */}
             <div className="relative z-10 w-full max-w-xs transform transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="rounded-xl border border-neutral-100 bg-white p-4 shadow-lg ring-1 ring-black/5">
                   <div className="flex items-start gap-3">
                      <div className="h-2 w-2 mt-1.5 rounded-full bg-red-500 animate-pulse shrink-0" />
                      <div>
                         <p className="text-xs font-semibold text-neutral-900">Peringatan Dini</p>
                         <p className="mt-1 text-[11px] text-neutral-500 leading-relaxed">
                            Nilai D di Prasyarat Skripsi terdeteksi. Disarankan perbaikan segera.
                         </p>
                      </div>
                   </div>
                   <div className="mt-3 flex gap-2">
                      <div className="h-6 w-16 rounded-md bg-neutral-100" />
                      <div className="h-6 w-10 rounded-md bg-red-50" />
                   </div>
                </div>
             </div>
             
             {/* Decor BG */}
             <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-red-50/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </motion.div>

          {/* 5. RESCHEDULE (Standard: Span 1) */}
          <motion.div
            {...cardMotion(reducedMotion, 0.5)}
            className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-neutral-200 transition-all hover:shadow-lg hover:ring-neutral-300"
          >
             <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Clock className="h-6 w-6" />
             </div>
             <h3 className="text-lg font-bold text-neutral-900">{more.reschedule.title}</h3>
             <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                {more.reschedule.description}
             </p>
             <div className="mt-6 flex flex-wrap gap-2">
                {more.reschedule.badges.map((b) => (
                   <span key={b} className="text-[10px] uppercase tracking-wider font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {b}
                   </span>
                ))}
             </div>
          </motion.div>

          {/* 6. GRADUATION GUARD (Lebar: Span 2) */}
          <motion.div
            {...cardMotion(reducedMotion, 0.6)}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-neutral-200 transition-all hover:shadow-xl hover:ring-neutral-300 md:col-span-2"
          >
             <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="max-w-md">
                   <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                      <GraduationCap className="h-6 w-6" />
                   </div>
                   <h3 className="text-xl font-bold text-neutral-900">{more.graduation.title}</h3>
                   <p className="mt-3 text-sm text-neutral-500 leading-relaxed">
                      {more.graduation.description}
                   </p>
                </div>

                {/* Visual: Checklist */}
                <div className="w-full md:w-auto bg-neutral-50 rounded-2xl p-4 border border-neutral-100">
                   <div className="space-y-3">
                      {more.graduation.bullets.map((b, i) => (
                         <div key={i} className="flex items-center gap-3 text-xs font-medium text-neutral-600">
                            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                            <span>{b}</span>
                         </div>
                      ))}
                   </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}