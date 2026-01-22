"use client";

import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Bot,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Sparkles,
  Send,
  MoreHorizontal,
  History,
  AlertTriangle,
  GraduationCap
} from "lucide-react";
import type { Locale } from "../content";
import { getCopy } from "../content";

type Props = {
  locale: Locale;
};

// --- DATA PERCAKAPAN ---
const CONVERSATIONS = [
  {
    id: 1,
    user: "Kak, kalau aku ambil 24 SKS semester ini berat banget gak ya?",
    ai: "Berdasarkan riwayat nilaimu, 24 SKS masih aman. Tapi ingat, kamu ada 3 mata kuliah dengan praktikum berat. Pastikan manajemen waktu oke ya!",
    chips: [
      { label: "IPS Lalu: 3.85", icon: History, color: "text-neutral-600", bg: "bg-neutral-50", border: "border-neutral-200" },
      { label: "3 Praktikum", icon: AlertTriangle, color: "text-red-600", bg: "bg-red-50", border: "border-red-200" }
    ]
  },
  {
    id: 2,
    user: "Pak, apa saya sudah bisa ambil Skripsi semester depan?",
    ai: "Cek dulu ya... Hmm, kamu belum lulus mata kuliah 'Metode Penelitian' (D). Itu prasyarat wajib. Kamu harus mengulang itu dulu sebelum Skripsi.",
    chips: [
      { label: "Prasyarat Gagal", icon: AlertTriangle, color: "text-red-600", bg: "bg-red-50", border: "border-red-200" },
      { label: "Sisa SKS: 14", icon: GraduationCap, color: "text-neutral-600", bg: "bg-neutral-50", border: "border-neutral-200" }
    ]
  },
  {
    id: 3,
    user: "Aku mau fokus jadi Data Scientist, ambil elektif apa ya?",
    ai: "Pilihan bagus! Saya sarankan ambil 'Machine Learning' dan 'Big Data Analytics'. Keduanya relevan dengan jalur karirmu dan tersedia di semester ini.",
    chips: [
      { label: "Relevansi Karir: 95%", icon: Sparkles, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200" },
      { label: "Elektif Pilihan", icon: Settings, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200" }
    ]
  }
];

// --- HOOK TYPEWRITER (FIXED & STABLE) ---
function useTypewriter(text: string, speedMs = 30) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Reset state saat teks berubah
    setDisplayedText("");
    setIsDone(false);
    
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        // Menggunakan functional update agar selalu mendapat char yang benar
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        setIsDone(true);
        clearInterval(timer);
      }
    }, speedMs);

    return () => clearInterval(timer);
  }, [text, speedMs]);

  return { displayedText, isDone };
}

export function ChatSection({ locale }: Props) {
  const copy = getCopy(locale);
  const reducedMotion = useReducedMotion() ?? false;

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentChat = CONVERSATIONS[currentIndex];

  // Gunakan key unik agar hook ter-reset sempurna saat index berubah
  const { displayedText, isDone } = useTypewriter(currentChat.ai, 25);

  // Logic Looping
  useEffect(() => {
    if (isDone) {
      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % CONVERSATIONS.length);
      }, 5000); // Jeda 5 detik agar user sempat baca
      return () => clearTimeout(timeout);
    }
  }, [isDone]);

  // Kursor berkedip
  const [blink, setBlink] = useState(true);
  useEffect(() => {
    const id = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(id);
  }, []);

  const revealMotion = {
    initial: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: reducedMotion
      ? { duration: 0 }
      : { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  };

  return (
    <section id="chat" className="relative overflow-hidden py-24 sm:py-32 bg-neutral-50/50">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>

      <div className="container-px mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* HEADER */}
        <motion.div {...revealMotion} className="mx-auto max-w-2xl text-center mb-16">
           <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-600 shadow-sm mb-4">
            <Sparkles className="h-3.5 w-3.5 text-emerald-500 fill-emerald-500" />
            <span>{copy.chat.eyebrow}</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            {copy.chat.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            {copy.chat.subtitle}
          </p>
        </motion.div>

        {/* DASHBOARD MOCKUP */}
        <motion.div
          {...revealMotion}
          transition={{ ...revealMotion.transition, delay: 0.2 }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-white shadow-2xl ring-1 ring-neutral-200"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-neutral-100 bg-white px-6 py-4">
             <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400/80" />
                <div className="h-3 w-3 rounded-full bg-amber-400/80" />
                <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
             </div>
             <div className="flex items-center gap-2 rounded-full bg-neutral-50 px-4 py-1.5 text-xs font-medium text-neutral-500 border border-neutral-100">
                <Bot className="h-4 w-4" />
                <span>arah.ai Assistant</span>
             </div>
             <div className="w-12" />
          </div>

          <div className="flex h-[600px] bg-neutral-50">
             
             {/* LEFT SIDEBAR */}
             <div className="hidden w-20 flex-col items-center border-r border-neutral-200 bg-white py-6 md:flex">
                <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-white">
                   <span className="font-bold">K</span>
                </div>
                <nav className="flex flex-1 flex-col items-center gap-4">
                   <button className="rounded-xl p-3 text-neutral-400 hover:bg-neutral-50 hover:text-neutral-900"><LayoutDashboard className="h-6 w-6" /></button>
                   <button className="rounded-xl bg-neutral-100 p-3 text-neutral-900 shadow-sm"><MessageSquare className="h-6 w-6" /></button>
                   <button className="rounded-xl p-3 text-neutral-400 hover:bg-neutral-50 hover:text-neutral-900"><GraduationCap className="h-6 w-6" /></button>
                   <button className="rounded-xl p-3 text-neutral-400 hover:bg-neutral-50 hover:text-neutral-900 mt-auto"><Settings className="h-6 w-6" /></button>
                </nav>
             </div>

             {/* CENTER CHAT */}
             <div className="flex flex-1 flex-col bg-white">
                <div className="flex items-center justify-between border-b border-neutral-100 px-6 py-4">
                   <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 rounded-full bg-neutral-100 overflow-hidden flex items-center justify-center">
                         <Bot className="h-6 w-6 text-neutral-600" />
                         <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                      </div>
                      <div>
                         <h3 className="text-sm font-bold text-neutral-900">Dosen Wali AI</h3>
                         <p className="text-[10px] text-emerald-600 font-medium">Online • Mengetik...</p>
                      </div>
                   </div>
                   <MoreHorizontal className="h-5 w-5 text-neutral-400" />
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-neutral-50/30 scrollbar-hide">
                   
                   {/* Gunakan AnimatePresence agar pergantian chat halus */}
                   <AnimatePresence mode="wait">
                     <motion.div
                       key={currentIndex} // PENTING: Key ini memaksa re-render total saat ganti chat
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
                       className="space-y-6"
                     >
                       {/* USER BUBBLE */}
                       <div className="flex justify-end">
                          <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-neutral-900 px-5 py-3 text-sm text-white shadow-md">
                             {currentChat.user}
                          </div>
                       </div>

                       {/* AI BUBBLE */}
                       <div className="flex justify-start">
                          <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-neutral-200 bg-white p-5 shadow-sm">
                             <div className="mb-3 flex items-center gap-2">
                                <Sparkles className="h-4 w-4 text-emerald-500" />
                                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Reasoning AI</span>
                             </div>
                             
                             {/* Text Area */}
                             <p className="text-sm leading-relaxed text-neutral-800 min-h-[3rem]">
                                {displayedText}
                                {!isDone && <span className={`${blink ? 'opacity-100' : 'opacity-0'} ml-0.5 font-light text-emerald-500`}>|</span>}
                             </p>

                             {/* Chips muncul setelah selesai mengetik */}
                             {isDone && (
                               <motion.div 
                                  initial={{ opacity: 0, y: 5 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className="mt-4 flex flex-wrap gap-2"
                               >
                                  {currentChat.chips.map((chip, idx) => (
                                    <span key={idx} className={`inline-flex items-center gap-1.5 rounded-md border ${chip.border} ${chip.bg} px-2.5 py-1.5 text-xs font-medium ${chip.color}`}>
                                       <chip.icon className="h-3 w-3" />
                                       {chip.label}
                                    </span>
                                  ))}
                               </motion.div>
                             )}
                          </div>
                       </div>
                     </motion.div>
                   </AnimatePresence>

                </div>

                <div className="border-t border-neutral-100 bg-white p-4">
                   <div className="relative flex items-center">
                      <input type="text" placeholder="Tanya asisten..." className="w-full rounded-full border border-neutral-200 bg-neutral-50 py-3 pl-5 pr-12 text-sm focus:outline-none" disabled />
                      <div className="absolute right-2 rounded-full bg-neutral-900 p-2 text-white"><Send className="h-4 w-4" /></div>
                   </div>
                </div>
             </div>

             {/* RIGHT SIDEBAR (Static) */}
             <div className="hidden w-80 border-l border-neutral-200 bg-neutral-50/50 p-6 lg:block">
                <div className="mb-6 flex items-center gap-2 text-sm font-bold text-neutral-900">
                   <LayoutDashboard className="h-4 w-4 text-neutral-500" />
                   ANALISIS AKADEMIK
                </div>
                <div className="space-y-6 opacity-70 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                   <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
                      <h4 className="mb-4 text-sm font-bold text-neutral-900">Rekomendasi KRS</h4>
                      <div className="flex items-center justify-between">
                         <span className="font-medium text-neutral-900">Metode Penelitian</span>
                         <span className="rounded-md bg-neutral-900 px-2 py-1 text-xs font-bold text-white">3 SKS</span>
                      </div>
                   </div>
                   <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
                      <h4 className="mb-4 text-sm font-bold text-neutral-900">Progress Studi</h4>
                      <div className="mb-2 flex justify-between text-xs">
                         <span>SKS Tempuh</span><span className="font-bold">110 / 144</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-neutral-100"><div className="h-full w-[76%] bg-neutral-900 rounded-full" /></div>
                   </div>
                </div>
             </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}