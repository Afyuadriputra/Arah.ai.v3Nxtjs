export type Locale = "en" | "id";

export const locales = {
  en: {
    nav: {
      brand: "arah.ai",
      tagline: "Autonomous academic agent",
      languageLabel: "Language",
      ctaPrimary: "Request Access"
    },
    hero: {
      headline: "The Future of Academic Strategy, Navigated.",
      subheadline:
        "Connect it to SIAKAD. arah.ai builds a conflict‑free plan, aligns your electives to your target role, and watches for risk—before it turns into a bad semester.",
      cta: "Request Access",
      secondary: "See How It Works",
      cards: [
        {
          label: "SIAKAD",
          value: "Sync → Plan → Monitor"
        },
        {
          label: "Semester",
          value: "Engineered for speed. Zero conflicts."
        },
        {
          label: "Risk",
          value: "Signals early. Actions earlier."
        }
      ]
    },

    problem: {
      eyebrow: "The Problem",
      title: "Why arah.ai?",
      subtitle:
        "Manual planning looks harmless—until one wrong choice costs you a semester.",
      statement: "Stop gambling with your GPA.",
      statementSub:
        "Manual planning is risky. arah.ai reduces uncertainty with checks, constraints, and proactive monitoring.",
      left: {
        title: "Manual planning",
        subtitle: "Feels fine. Breaks quietly.",
        items: [
          "Schedule conflicts you notice too late",
          "Electives that don't match your target role",
          "Heavy weeks stacked back-to-back",
          "One prerequisite mistake → delayed graduation"
        ]
      },
      right: {
        title: "arah.ai",
        subtitle: "Clean plan. Clear outcomes.",
        items: [
          "Conflict-free schedule, automatically",
          "Electives prioritized for your career",
          "Balanced course load for consistency",
          "Early warnings via campus email"
        ]
      }
    },

    how: {
      eyebrow: "How It Works",
      title: "Three steps. One plan.",
      subtitle:
        "Connect your data, let the system reason, then deploy a semester plan in one click.",
      steps: [
        {
          title: "Connect",
          description: "Securely link your SIAKAD account. Import courses, credits, and constraints."
        },
        {
          title: "Analyze",
          description:
            "Our AI scans prerequisites, graduation rules, and your career target to choose the best path."
        },
        {
          title: "Deploy",
          description:
            "Get the most efficient study plan—ready to execute, with fallback options when classes fill up."
        }
      ]
    },
    features: {
      eyebrow: "Core Functions",
      title: "A strategic navigator for your semester.",
      subtitle:
        "It plans like a strategist. It checks like a system. You just focus on doing the work.",
      items: {
        scheduler: {
          title: "Automated Scheduler",
          description:
            "It brute-checks thousands of class combinations against the master timetable to produce one clean, conflict‑free semester."
        },
        career: {
          title: "Career Alignment",
          description:
            "Tell it the role. It prioritizes the electives that move the needle (Data Scientist, Accountant, and more) while keeping graduation on track."
        },
        load: {
          title: "Cognitive Load",
          description:
            "Spreads heavy courses so one week doesn't crush you. Balance = consistency = better results."
        },
        warning: {
          title: "Early Warning System",
          description:
            "Monitors attendance, grades, and patterns. If you're trending toward failure, it alerts you (and advisors) via campus email."
        }
      },
      schedulerBadges: ["+10k combos", "No clashes", "Minutes"],
      careerChips: [
        { role: "Data Scientist", hint: "Electives prioritized" },
        { role: "Accountant", hint: "Electives prioritized" }
      ],
      loadLegend: "Balanced load map",
      warningPanel: {
        label: "Risk score",
        level: "High",
        footer: "Email alerts → student + advisor"
      },
      more: {
        reschedule: {
          title: "Fast Rescheduling",
          description:
            "If a class fills up, arah.ai finds the next-best alternative in seconds—without breaking prerequisites.",
          badges: ["Seconds", "No prerequisites broken", "Keeps your plan intact"]
        },
        graduation: {
          title: "Graduation Risk Guard",
          description:
            "Flags courses that can delay graduation and suggests safer sequences before you commit.",
          bullets: [
            "Detects prerequisite traps",
            "Highlights credit bottlenecks",
            "Keeps you on-time"
          ]
        }
      }
    },
    chat: {
      eyebrow: "Chat",
      badge: "Coming Soon",
      title: "A terminal-like study companion.",
      subtitle:
        "A minimal interface for planning, checks, and fast guidance—without the noise.",
      prompt:
        "Hello, I am arah.ai. How can I optimize your study plan today?",
      previewNote: "Preview interface. Chat ships soon."
    },
    footer: {
      note:
        "Built for universities. Designed for students. Monochrome by intent."
    },

    faq: {
      eyebrow: "FAQ",
      title: "Questions, answered.",
      subtitle: "The practical stuff—security, legality, and campus coverage.",
      items: [
        {
          q: "Is this safe for my SIAKAD account?",
          a: "arah.ai is designed with least-privilege access and secure handling of credentials and data. Exact integration details depend on each campus—always review what is connected and what permissions are granted."
        },
        {
          q: "What if my campus isn't listed yet?",
          a: "You can request onboarding. We'll validate the integration path and notify you when support is available."
        },
        {
          q: "Is this legal?",
          a: "arah.ai is built to work within campus policies and applicable regulations. Availability depends on institutional approval and permitted integration methods."
        }
      ]
    }
  },
  id: {
    nav: {
      brand: "arah.ai",
      tagline: "Agen akademik otonom",
      languageLabel: "Bahasa",
      ctaPrimary: "Minta Akses"
    },
    hero: {
      headline: "Masa Depan Strategi Akademik, Ternavigasi.",
      subheadline:
        "Hubungkan ke SIAKAD. arah.ai susun rencana KRS yang rapi (tanpa bentrok), selaraskan mata kuliah pilihan ke target karier, lalu pantau risiko—sebelum telat.",
      cta: "Minta Akses",
      secondary: "Lihat Cara Kerja",
      cards: [
        {
          label: "SIAKAD",
          value: "Sinkron → Susun → Pantau"
        },
        {
          label: "Semester",
          value: "Dioptimalkan untuk cepat. Tanpa bentrok."
        },
        {
          label: "Risiko",
          value: "Terdeteksi cepat. Ditangani lebih cepat."
        }
      ]
    },

    problem: {
      eyebrow: "Masalahnya",
      title: "Kenapa arah.ai?",
      subtitle:
        "Perencanaan manual terlihat aman—sampai satu pilihan salah bikin semester berantakan.",
      statement: "Stop berjudi dengan IPK.",
      statementSub:
        "Perencanaan manual itu berisiko. arah.ai mengurangi ketidakpastian dengan pengecekan, constraint, dan monitoring proaktif.",
      left: {
        title: "Manual",
        subtitle: "Kelihatan rapi. Rusaknya pelan-pelan.",
        items: [
          "Bentrok jadwal yang baru ketahuan belakangan",
          "Salah ambil elektif yang tidak relevan",
          "Minggu berat numpuk",
          "Salah prasyarat → kelulusan molor"
        ]
      },
      right: {
        title: "arah.ai",
        subtitle: "Rencana rapi. Konsekuensi jelas.",
        items: [
          "Jadwal tanpa bentrok, otomatis",
          "Elektif diprioritaskan untuk karier",
          "Beban seimbang biar stabil",
          "Peringatan dini via email kampus"
        ]
      }
    },

    how: {
      eyebrow: "Cara Kerja",
      title: "Tiga langkah. Satu rencana.",
      subtitle:
        "Sambungkan data, biarkan sistem menganalisis, lalu deploy rencana semester dalam satu klik.",
      steps: [
        {
          title: "Connect",
          description: "Sambungkan akun SIAKAD-mu secara aman. Impor mata kuliah, SKS, dan constraint."
        },
        {
          title: "Analyze",
          description:
            "AI memindai prasyarat, aturan kelulusan, dan target kariermu untuk memilih jalur terbaik."
        },
        {
          title: "Deploy",
          description:
            "Dapatkan rencana studi paling efisien—siap dipakai, dengan opsi cadangan kalau kelas penuh."
        }
      ]
    },
    features: {
      eyebrow: "Fungsi Inti",
      title: "Navigator strategis untuk semester Anda.",
      subtitle:
        "Rasanya simpel. Tapi di belakangnya: perencanaan, pengecekan, balancing, dan monitoring otomatis.",
      items: {
        scheduler: {
          title: "Penjadwal Otomatis",
          description:
            "Menguji ribuan kombinasi kelas dari jadwal master untuk menghasilkan satu semester yang bersih—tanpa tabrakan jadwal."
        },
        career: {
          title: "Penyelarasan Karier",
          description:
            "Sebut target peran. arah.ai prioritaskan elektif yang relevan (Data Scientist, Akuntan, dan lainnya) tanpa bikin kelulusan jadi molor."
        },
        load: {
          title: "Beban Kognitif",
          description:
            "Menyebar mata kuliah berat supaya satu minggu tidak \"overload\". Lebih stabil, lebih konsisten, hasil lebih bagus."
        },
        warning: {
          title: "Sistem Peringatan Dini",
          description:
            "Pantau presensi, nilai, dan pola belajar. Kalau tren mengarah ke gagal, sistem kirim peringatan ke mahasiswa dan dosen wali via email kampus."
        }
      },
      schedulerBadges: ["+10k kombinasi", "Tanpa bentrok", "Hitungan menit"],
      careerChips: [
        { role: "Data Scientist", hint: "Elektif diprioritaskan" },
        { role: "Akuntan", hint: "Elektif diprioritaskan" }
      ],
      loadLegend: "Peta beban seimbang",
      warningPanel: {
        label: "Skor risiko",
        level: "Tinggi",
        footer: "Email peringatan → mahasiswa + dosen wali"
      },
      more: {
        reschedule: {
          title: "Reschedule Cepat",
          description:
            "Kalau kelas tiba-tiba penuh, arah.ai cari alternatif terbaik dalam hitungan detik—tanpa merusak prasyarat.",
          badges: ["Detik", "Prasyarat aman", "Rencana tetap utuh"]
        },
        graduation: {
          title: "Penjaga Risiko Kelulusan",
          description:
            "Menandai mata kuliah yang bisa bikin telat lulus dan menyarankan urutan yang lebih aman sebelum kamu commit.",
          bullets: [
            "Deteksi jebakan prasyarat",
            "Sorot bottleneck SKS",
            "Jaga on-time"
          ]
        }
      }
    },
    chat: {
      eyebrow: "Chat",
      badge: "Segera Hadir",
      title: "Sahabat studi bergaya terminal.",
      subtitle:
        "Antarmuka minimal untuk rencana, cek cepat, dan arahan akademik—tanpa distraksi.",
      prompt:
        "Halo, saya arah.ai. Bagaimana saya bisa mengoptimalkan rencana studi Anda hari ini?",
      previewNote: "Tampilan preview. Chat segera hadir."
    },
    footer: {
      note:
        "Dibangun untuk kampus. Dirancang untuk mahasiswa. Monokrom secara sengaja."
    },

    faq: {
      eyebrow: "FAQ",
      title: "Pertanyaan umum.",
      subtitle: "Hal-hal praktis—keamanan, legalitas, dan dukungan kampus.",
      items: [
        {
          q: "Aman buat akun SIAKAD gue?",
          a: "arah.ai dirancang dengan prinsip least-privilege dan penanganan data yang aman. Detail integrasi bisa berbeda per kampus—kamu selalu bisa cek apa saja yang terhubung dan izin apa yang diberikan."
        },
        {
          q: "Kalau kampus gue belum terdaftar?",
          a: "Kamu bisa request onboarding. Kami akan validasi jalur integrasinya dan kabari saat sudah tersedia."
        },
        {
          q: "Ini legal?",
          a: "arah.ai dibuat untuk bekerja sesuai kebijakan kampus dan regulasi yang berlaku. Ketersediaan bergantung pada persetujuan institusi dan metode integrasi yang diizinkan."
        }
      ]
    }
  }
} as const;

export function getCopy(locale: Locale) {
  return locales[locale];
}
