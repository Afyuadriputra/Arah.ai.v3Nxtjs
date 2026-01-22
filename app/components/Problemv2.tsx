"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image"; // Import Image dari Next.js
import { ArrowDownRight } from "lucide-react";

type Props = {
  locale?: string;
};

// Data Masalah (Updated dengan path GIF)
const problems = [
  {
    // Menggunakan path file yang ada di folder public
    gifSrc: "/Analog_clock_animation.gif", 
    title: "Jadwal Bentrok",
    desc: "Pusing mengatur jadwal manual agar tidak ada kelas yang bertabrakan di jam yang sama.",
    delay: 0.1,
  },
  {
    gifSrc: "/9710146.png",
    title: "Syarat Rumit",
    desc: "Lelah mengecek puluhan prasyarat mata kuliah yang berbelit-belit di buku pedoman.",
    delay: 0.2,
  },
  {
    gifSrc: "/pngtree-complicated-bubbles-png-image_9051144.png",
    title: "Takut Salah Ambil",
    desc: "Khawatir mengambil mata kuliah yang terlalu sulit atau tidak relevan dengan jalur karir.",
    delay: 0.3,
  },
];

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

export function Problemv2({ locale }: Props) {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Background Pattern Halus */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* --- HEADLINE --- */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 
            {...reveal(reducedMotion)}
            className="text-balance text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl"
          >
            Kenapa memilih mata kuliah terasa sesulit <span className="text-neutral-400">memilih masa depan?</span>
          </motion.h2>
          
          <motion.div 
            {...reveal(reducedMotion, 0.1)}
            className="mt-6 flex justify-center"
          >
             <ArrowDownRight className="h-6 w-6 text-neutral-300" />
          </motion.div>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {problems.map((item, index) => (
            <motion.div
              key={item.title}
              {...reveal(reducedMotion, item.delay)}
              className="group relative flex flex-col items-start overflow-hidden rounded-3xl border border-neutral-200 bg-white/60 p-8 backdrop-blur-sm transition-all hover:border-neutral-300 hover:bg-white hover:shadow-xl hover:shadow-neutral-900/5"
            >
              {/* GIF Container */}
              {/* Kami menghapus background hitam saat hover agar GIF tetap terlihat jelas warnanya */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-50 border border-neutral-100 shadow-sm transition-transform duration-300 group-hover:scale-110">
                <div className="relative h-10 w-10 overflow-hidden">
                   <Image 
                     src={item.gifSrc}
                     alt={item.title}
                     fill
                     className="object-contain" // Pastikan GIF tidak terpotong (stretch)
                     unoptimized // Wajib true untuk GIF agar animasinya jalan di Next.js
                   />
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-lg font-bold leading-8 text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-neutral-500 group-hover:text-neutral-600">
                {item.desc}
              </p>

              {/* Decorative Corner Gradient */}
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-neutral-200/50 to-transparent blur-2xl transition-all group-hover:from-neutral-200" />
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}