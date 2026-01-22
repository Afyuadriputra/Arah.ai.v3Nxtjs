"use client";

import { motion, useReducedMotion } from "framer-motion";
import { 
  CheckCircle2, 
  RefreshCw, 
  Search, 
  User, 
  MoreHorizontal,
  Send
} from "lucide-react";
import type { Locale } from "../content";
import { getCopy } from "../content";

type Props = {
  locale: Locale;
};

// --- ANIMASI HELPER ---
function reveal(reducedMotion: boolean, delay = 0) {
  return {
    initial: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: reducedMotion
      ? { duration: 0 }
      : { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }
  } as const;
}

// --- KOMPONEN MOCKUP UI ---

// 1. Mockup Sync Data (Layar Profil)
const MockupSync = () => (
  <div className="relative flex h-full w-full flex-col justify-center px-6">
    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
    
    {/* Profile Card */}
    <div className="relative overflow-hidden rounded-2xl border border-neutral-100 bg-white p-4 shadow-sm transition-shadow group-hover:shadow-md">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
          <User className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <div className="h-2.5 w-24 rounded-full bg-neutral-200" />
          <div className="mt-1.5 h-2 w-16 rounded-full bg-neutral-100" />
        </div>
        <div className="flex h-8 w-8 animate-spin items-center justify-center rounded-full bg-neutral-50 text-neutral-400">
           <RefreshCw className="h-4 w-4" />
        </div>
      </div>
      
      {/* Sync Status */}
      <div className="mt-4 flex items-center justify-between rounded-lg bg-neutral-50 px-3 py-2">
        <div className="flex items-center gap-2">
           <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
           <span className="text-[10px] font-medium text-neutral-500">SIAKAD Connected</span>
        </div>
        <span className="text-[10px] text-neutral-400">100%</span>
      </div>
    </div>
  </div>
);

// 2. Mockup RAG Analysis (Layar Scanning/Checking)
const MockupAnalyze = () => (
  <div className="relative flex h-full w-full flex-col justify-center px-6">
    {/* List Rules */}
    <div className="space-y-3">
      {[
        { text: "Cek Prasyarat Kelulusan", color: "text-emerald-600", bg: "bg-emerald-500" },
        { text: "Validasi Beban SKS", color: "text-emerald-600", bg: "bg-emerald-500" },
        { text: "Analisis Jalur Karir", color: "text-neutral-400", bg: "bg-neutral-300" }, // Pending
      ].map((item, i) => (
        <div key={i} className="flex items-center justify-between rounded-xl border border-neutral-100 bg-white px-3 py-3 shadow-sm">
           <span className="text-xs font-medium text-neutral-600">{item.text}</span>
           <div className={`flex h-4 w-4 items-center justify-center rounded-full ${i < 2 ? 'bg-emerald-100' : 'bg-neutral-100'}`}>
              {i < 2 ? (
                <CheckCircle2 className={`h-3 w-3 ${item.color}`} />
              ) : (
                <div className="h-1.5 w-1.5 rounded-full bg-neutral-300 animate-bounce" />
              )}
           </div>
        </div>
      ))}
    </div>
    
    {/* Scanning Line */}
    <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-50 blur-[1px]" />
  </div>
);

// 3. Mockup Chat (Layar Chatbot)
const MockupChat = () => (
  <div className="relative flex h-full w-full flex-col justify-end px-5 pb-5">
    {/* Bubble User */}
    <div className="mb-3 flex justify-end">
       <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-neutral-900 px-3 py-2 text-[11px] text-white shadow-md">
         Ambil Skripsi semester ini aman?
       </div>
    </div>

    {/* Bubble AI (Typing & Answer) */}
    <div className="flex justify-start">
       <div className="max-w-[90%] rounded-2xl rounded-tl-sm border border-neutral-200 bg-white px-3 py-2 shadow-sm">
         <div className="mb-1 flex items-center gap-1">
            <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-400">arah.ai</span>
            <div className="h-1 w-1 rounded-full bg-emerald-500" />
         </div>
         <p className="text-[11px] leading-relaxed text-neutral-700">
           <span className="font-semibold text-emerald-600">Aman.</span> Anda sudah lulus Metode Penelitian (B). Sisa SKS cukup.
         </p>
       </div>
    </div>

    {/* Input Bar Fake */}
    <div className="mt-4 flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-2">
       <div className="h-1.5 w-16 rounded-full bg-neutral-200" />
       <div className="ml-auto rounded-full bg-neutral-900 p-1">
          <Send className="h-2.5 w-2.5 text-white" />
       </div>
    </div>
  </div>
);


export function HowItWorks({ locale }: Props) {
  const copy = getCopy(locale);
  const reducedMotion = useReducedMotion() ?? false;

  // Mapping index ke komponen visual
  const Visuals = [MockupSync, MockupAnalyze, MockupChat];

  return (
    <section id="how" className="relative overflow-hidden bg-neutral-50/50 py-24 sm:py-32">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>

      <div className="container-px mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div {...reveal(reducedMotion, 0)} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            {copy.how.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            {copy.how.subtitle}
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {copy.how.steps.map((step, i) => {
            const VisualComponent = Visuals[i] || MockupSync;
            
            return (
              <motion.div
                key={step.title}
                {...reveal(reducedMotion, 0.1 + i * 0.1)}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-neutral-200 transition-all hover:shadow-lg hover:ring-neutral-300"
              >
                {/* --- VISUAL MOCKUP AREA (Phone Screen Concept) --- */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-50 border-b border-neutral-100">
                   {/* Background Glow */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-neutral-100/50 to-white/20" />
                   
                   {/* Render UI Component */}
                   <div className="absolute inset-4 rounded-xl bg-white shadow-sm ring-1 ring-black/5 overflow-hidden">
                      <VisualComponent />
                   </div>
                </div>

                {/* --- CONTENT AREA --- */}
                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900 text-[10px] font-bold text-white">
                      {i + 1}
                    </span>
                    <div className="h-px flex-1 bg-neutral-100" />
                  </div>

                  <h3 className="text-xl font-bold leading-8 text-neutral-900 group-hover:text-emerald-600 transition-colors">
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
      </div>
    </section>
  );
}