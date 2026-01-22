"use client";

import { motion, useReducedMotion } from "framer-motion";
import { 
  AlertCircle, 
  CheckCircle2, 
  X, 
  Check, 
  ArrowRight 
} from "lucide-react";
import type { Locale } from "../content";
import { getCopy } from "../content";

type Props = {
  locale: Locale;
};

// Animasi reveal
function reveal(reducedMotion: boolean, delay = 0) {
  return {
    initial: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: reducedMotion
      ? { duration: 0 }
      : { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }
  } as const;
}

export function ProblemSection({ locale }: Props) {
  const copy = getCopy(locale);
  const reducedMotion = useReducedMotion() ?? false;

  return (
    // PERUBAHAN: 
    // 1. Menghapus 'bg-white' agar transparan
    // 2. Menghapus div background pattern internal
    <section id="problem" className="relative py-24 sm:py-32">
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* --- HEADER SECTION --- */}
        <motion.div 
          {...reveal(reducedMotion)} 
          className="mx-auto max-w-2xl text-center"
        >
          {/* Badge Ping */}
          <div className="inline-flex items-center rounded-full border border-neutral-200/60 bg-white/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-neutral-600 shadow-sm mb-6">
             <span className="mr-1.5 flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
             </span>
             {copy.problem.eyebrow}
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            {copy.problem.title}
          </h2>
          
          <p className="mt-6 text-lg leading-8 text-neutral-600 font-light">
            {copy.problem.subtitle}
          </p>
        </motion.div>

        {/* --- COMPARISON CARDS --- */}
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
          
          {/* LEFT CARD: MANUAL (Masalah) */}
          <motion.div
            {...reveal(reducedMotion, 0.1)}
            // bg-white/60 + backdrop-blur agar background mesh di belakang tetap terlihat samar-samar (Glassmorphism)
            className="group relative flex flex-col overflow-hidden rounded-3xl bg-white/60 backdrop-blur-md ring-1 ring-neutral-200 transition-all hover:bg-white/80 hover:shadow-lg hover:ring-neutral-300"
          >
            <div className="p-8 sm:p-10">
              <div className="flex items-center gap-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200">
                  <AlertCircle className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold leading-7 text-neutral-900">
                    {copy.problem.left.title}
                  </h3>
                  <p className="text-sm font-medium leading-6 text-red-600">
                    {copy.problem.left.subtitle}
                  </p>
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                {copy.problem.left.items.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 text-neutral-600 transition-colors group-hover:text-neutral-900"
                  >
                    <X className="mt-1 h-5 w-5 flex-none text-red-400 opacity-70" aria-hidden="true" />
                    <span className="text-sm leading-6">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Footer Card */}
            <div className="mt-auto bg-neutral-50/50 p-6 text-center text-xs text-neutral-400 italic border-t border-neutral-100/50">
              "Resiko tinggi, hasil tidak pasti."
            </div>
          </motion.div>

          {/* RIGHT CARD: SOLUSI (arah.ai) */}
          <motion.div
            {...reveal(reducedMotion, 0.2)}
            // Tetap solid dark agar kontras dan menonjol sebagai solusi utama
            className="group relative flex flex-col overflow-hidden rounded-3xl bg-[#0A0A0A] shadow-2xl ring-1 ring-white/10 lg:scale-[1.02] transition-transform duration-500"
          >
            {/* Subtle Gradient Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-neutral-800/50 via-transparent to-transparent opacity-60"></div>
            
            <div className="relative p-8 sm:p-10 flex-1">
              <div className="flex items-center gap-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur-sm">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold leading-7 text-white">
                    {copy.problem.right.title}
                  </h3>
                  <p className="text-sm font-medium leading-6 text-emerald-400">
                    {copy.problem.right.subtitle}
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {copy.problem.right.items.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 text-neutral-300"
                  >
                    <Check className="mt-1 h-5 w-5 flex-none text-emerald-400" aria-hidden="true" />
                    <span className="text-sm leading-6">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mini CTA */}
            <div className="relative border-t border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10 cursor-pointer">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-white">
                    {copy.problem.statement}
                  </p>
                  <p className="mt-0.5 text-xs text-neutral-400 line-clamp-1">
                    {copy.problem.statementSub}
                  </p>
                </div>
                <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-white text-black transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}