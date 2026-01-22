"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { Locale } from "../content";
import { getCopy } from "../content";

type Props = {
  locale: Locale;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
};

const easePremium: [number, number, number, number] = [0.2, 0.8, 0.2, 1];

// --- UPDATED COMPONENT: MiniDashboardMock ---
// Perubahan: Menambahkan animasi "Floating" dan shadow yang lebih lembut (soft diffuse)
function MiniDashboardMock({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[1100px]"
      initial={reducedMotion ? undefined : { y: 20, opacity: 0 }}
      animate={reducedMotion ? undefined : { y: 0, opacity: 1 }}
      // Animasi floating (naik turun perlahan) untuk kesan elegan/hidup
      whileInView={
        reducedMotion
          ? undefined
          : {
              y: [0, -15, 0],
              transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }
      }
      transition={{ duration: 0.8, ease: easePremium }}
    >
      {/* Container Gambar dengan Border Halus & Shadow Premium */}
      <div className="group relative overflow-hidden rounded-2xl bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
        <Image
          src="/arah-ai.png"
          alt="Arah AI Dashboard Interface"
          width={1296}
          height={830}
          className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          priority
          quality={95}
        />

        {/* Inner Glow / Sheen Effect (Sangat halus) */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50 mix-blend-overlay" />
      </div>

      {/* Dekorasi: Glow di belakang gambar (Ambient light) */}
      <div className="absolute -inset-4 -z-10 scale-95 blur-3xl opacity-40 bg-gradient-to-t from-gray-200 to-transparent" />
    </motion.div>
  );
}

export function Hero({ locale, onPrimaryAction, onSecondaryAction }: Props) {
  const copy = getCopy(locale);
  const reducedMotion = useReducedMotion() ?? false;

  // Stagger animation yang lebih lambat dan elegan
  const parent = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easePremium },
    },
  };

  return (
    <section className="relative isolate overflow-hidden bg-white pb-16 pt-14 sm:pb-20">
      {/* --- BACKGROUND ELEGAN --- */}
      {/* Grid Pattern Halus: Memberikan kesan "Struktur/Akademik" */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Radial Gradient lembut di atas */}
      <div className="absolute left-0 top-0 -z-10 h-[500px] w-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={parent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-12 lg:items-center"
        >
          {/* --- LEFT CONTENT --- */}
          <div className="lg:col-span-6 lg:pr-8">
            {/* Badge Kecil di atas Judul (Opsional, menambah detail) */}
            <motion.div variants={item} className="mb-6 flex">
              <div className="relative rounded-full px-3 py-1 text-xs font-medium leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Layanan Akademik Generasi Baru
              </div>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-balance text-5xl font-semibold tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl"
            >
              Strategi Akademik, <br />
              <span className="text-gray-500">Ternavigasi Otomatis.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 text-lg leading-8 text-gray-600 font-light"
            >
              Hubungkan SIAKAD. Biarkan <strong>arah.ai</strong> menyusun KRS tanpa bentrok, 
              menyelaraskan mata kuliah dengan karier, dan memantau risiko akademik Anda.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex items-center gap-x-6"
            >
              {/* Primary Button: Minimalist Solid */}
              <button
                type="button"
                onClick={onPrimaryAction}
                className="group relative flex h-11 items-center justify-center rounded-full bg-neutral-900 px-8 text-sm font-medium text-white transition-all hover:bg-neutral-800 hover:ring-2 hover:ring-neutral-900 hover:ring-offset-2"
              >
                Minta Akses
                <svg
                  className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              {/* Secondary Button: Clean Text/Ghost */}
              <button
                type="button"
                onClick={onSecondaryAction}
                className="text-sm font-semibold leading-6 text-gray-900 transition-colors hover:text-gray-600"
              >
                Lihat Cara Kerja <span aria-hidden="true">→</span>
              </button>
            </motion.div>

            {/* Social Proof / Footer Text */}
            <motion.div
              variants={item}
              className="mt-10 border-t border-gray-100 pt-8"
            >
            </motion.div>
          </div>

          {/* --- RIGHT MOCKUP --- */}
          <div className="lg:col-span-6 lg:pt-8">
             <MiniDashboardMock reducedMotion={reducedMotion} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}