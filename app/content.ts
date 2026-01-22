export type Locale = "en" | "id";

export const locales = {
  en: {
    nav: {
      brand: "arah.ai",
      tagline: "Autonomous Academic Agent",
      languageLabel: "Language",
      ctaPrimary: "Request Access"
    },
    hero: {
      headline: "The Future of Academic Strategy, Navigated.",
      subheadline:
        "Connect to SIAKAD. arah.ai builds a conflict‑free plan, aligns electives to your target career, and monitors academic risk—before it becomes a bad semester.",
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
        "Manual planning feels safe—until one missing prerequisite delays your graduation.",
      statement: "Stop gambling with your GPA.",
      statementSub:
        "Manual planning is risky. arah.ai eliminates uncertainty with strict constraints, RAG validation, and proactive monitoring.",
      left: {
        title: "Manual Planning",
        subtitle: "Looks fine. Breaks quietly.",
        items: [
          "Schedule conflicts noticed too late",
          "Electives irrelevant to your career path",
          "Heavy workload weeks stacked back-to-back",
          "Missed prerequisite → Delayed graduation"
        ]
      },
      right: {
        title: "arah.ai",
        subtitle: "Clean plan. Clear outcomes.",
        items: [
          "Conflict-free schedule, generated automatically",
          "Electives prioritized for your specific career",
          "Balanced cognitive load for consistency",
          "Early warnings via campus email"
        ]
      }
    },

    how: {
      eyebrow: "Workflow",
      title: "From Data to Decision.",
      subtitle:
        "Complex academic rules processed in seconds. Here is how arah.ai turns your transcript into a strategy.",
      steps: [
        {
          title: "Sync & Profile",
          description: "Register with your Student ID (NIM). The system automatically builds your profile, calculates GPA, and maps your completed transcript history."
        },
        {
          title: "RAG Analysis",
          description: "Our AI retrieves specific curriculum rules, prerequisites, and career paths to ensure every recommendation is valid and compliant."
        },
        {
          title: "Plan & Consult",
          description: "Get an instant, conflict-free study plan (KRS). Still confused? Chat with the assistant to refine your strategy based on career goals."
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
            "Brute-checks thousands of class combinations against the master timetable to produce one clean, conflict‑free semester."
        },
        career: {
          title: "Career Alignment",
          description:
            "Define your target role. It prioritizes electives that move the needle (Data Scientist, Accountant, etc.) while keeping graduation on track."
        },
        load: {
          title: "Cognitive Load",
          description:
            "Distributes heavy courses to prevent burnout. Balance = consistency = better results."
        },
        warning: {
          title: "Early Warning System",
          description:
            "Monitors attendance, grades, and patterns. If you trend toward failure, it alerts you (and advisors) via campus email."
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
            "Class full? arah.ai finds the next-best alternative in seconds—without breaking prerequisites.",
          badges: ["Seconds", "No broken prereqs", "Plan intact"]
        },
        graduation: {
          title: "Graduation Risk Guard",
          description:
            "Flags courses that could delay graduation and suggests safer sequences before you commit.",
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
          a: "arah.ai is designed with least-privilege access. We only read what's necessary to build your plan. Credentials are encrypted and never exposed."
        },
        {
          q: "What if my campus isn't listed yet?",
          a: "You can request onboarding. We validate integration paths with university IT departments before going live."
        },
        {
          q: "Is this legal?",
          a: "Yes. arah.ai operates within campus policies. Availability depends on institutional approval and API access."
        }
      ]
    }
  },

  id: {
    nav: {
      brand: "arah.ai",
      tagline: "Agen Akademik Otonom",
      languageLabel: "Bahasa",
      ctaPrimary: "Minta Akses"
    },
    hero: {
      headline: "Masa Depan Strategi Akademik, Ternavigasi.",
      subheadline:
        "Hubungkan ke SIAKAD. arah.ai menyusun rencana KRS rapi (tanpa bentrok), menyelaraskan mata kuliah ke target karier, dan memantau risiko—sebelum semester Anda berantakan.",
      cta: "Minta Akses",
      secondary: "Lihat Cara Kerja",
      cards: [
        {
          label: "SIAKAD",
          value: "Sinkron → Susun → Pantau"
        },
        {
          label: "Semester",
          value: "Optimasi Cepat. Tanpa Bentrok."
        },
        {
          label: "Risiko",
          value: "Deteksi Dini. Tindakan Cepat."
        }
      ]
    },

    problem: {
      eyebrow: "Masalahnya",
      title: "Kenapa arah.ai?",
      subtitle:
        "Perencanaan manual terlihat aman—sampai satu mata kuliah yang salah membuat kelulusan tertunda.",
      statement: "Berhenti bertaruh dengan IPK.",
      statementSub:
        "Manual itu berisiko. arah.ai mengurangi ketidakpastian dengan validasi aturan, constraint ketat, dan monitoring proaktif.",
      left: {
        title: "Perencanaan Manual",
        subtitle: "Terlihat rapi. Rusak diam-diam.",
        items: [
          "Jadwal bentrok baru ketahuan belakangan",
          "Mengambil elektif yang tidak relevan dengan karier",
          "Tugas menumpuk di satu minggu (burnout)",
          "Salah prasyarat → Skripsi tertunda"
        ]
      },
      right: {
        title: "arah.ai",
        subtitle: "Rencana Rapi. Hasil Jelas.",
        items: [
          "Jadwal bebas bentrok, otomatis",
          "Elektif diprioritaskan untuk target karier",
          "Beban kuliah seimbang (Cognitive Load)",
          "Peringatan dini via email kampus"
        ]
      }
    },

    how: {
      eyebrow: "Cara Kerja",
      title: "Dari Data Jadi Keputusan.",
      subtitle:
        "Aturan akademik rumit diproses dalam hitungan detik. Begini cara arah.ai mengubah transkrip Anda menjadi strategi.",
      steps: [
        {
          title: "Sinkronisasi & Profil",
          description: "Daftar dengan NIM. Sistem otomatis membangun profil, menghitung IPK, dan memetakan riwayat transkrip yang sudah Anda ambil."
        },
        {
          title: "Analisis Cerdas (RAG)",
          description: "AI membaca dokumen kurikulum dan aturan prasyarat yang relevan untuk Anda. Memastikan setiap saran valid dan sesuai aturan kampus."
        },
        {
          title: "Rencana & Konsultasi",
          description: "Dapatkan draft KRS instan yang bebas bentrok. Masih bingung? Chat asisten untuk menyesuaikan rencana dengan target karir Anda."
        }
      ]
    },
    features: {
      eyebrow: "Fungsi Inti",
      title: "Navigator strategis untuk semester Anda.",
      subtitle:
        "Terasa simpel di depan. Namun di belakangnya: perencanaan, validasi, penyeimbangan beban, dan monitoring otomatis.",
      items: {
        scheduler: {
          title: "Penjadwal Otomatis",
          description:
            "Menguji ribuan kombinasi kelas dari jadwal master untuk menghasilkan satu semester yang bersih—dijamin tanpa tabrakan jadwal."
        },
        career: {
          title: "Penyelarasan Karier",
          description:
            "Tentukan target peran (misal: Data Scientist). arah.ai memprioritaskan mata kuliah yang relevan tanpa mengganggu jalur kelulusan."
        },
        load: {
          title: "Beban Kognitif",
          description:
            "Menyebar mata kuliah berat agar tugas tidak menumpuk di satu waktu. Keseimbangan = konsistensi = nilai lebih baik."
        },
        warning: {
          title: "Sistem Peringatan Dini",
          description:
            "Memantau presensi, nilai, dan pola belajar. Jika tren mengarah ke kegagalan, sistem mengirim peringatan ke mahasiswa dan Dosen Wali."
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
            "Kelas penuh? arah.ai mencarikan alternatif terbaik dalam hitungan detik—tanpa melanggar prasyarat mata kuliah.",
          badges: ["Detik", "Prasyarat aman", "Rencana utuh"]
        },
        graduation: {
          title: "Penjaga Risiko Kelulusan",
          description:
            "Menandai mata kuliah yang berpotensi menghambat kelulusan dan menyarankan urutan pengambilan yang lebih aman.",
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
        "Antarmuka minimalis untuk perencanaan, pengecekan, dan panduan akademik cepat—tanpa gangguan.",
      prompt:
        "Halo, saya arah.ai. Bagaimana saya bisa mengoptimalkan rencana studi Anda hari ini?",
      previewNote: "Tampilan preview. Chat segera rilis."
    },
    footer: {
      note:
        "Dibangun untuk universitas. Dirancang untuk mahasiswa. Monokrom secara sengaja."
    },

    faq: {
      eyebrow: "FAQ",
      title: "Pertanyaan umum.",
      subtitle: "Hal praktis seputar keamanan, legalitas, dan dukungan kampus.",
      items: [
        {
          q: "Apakah aman untuk akun SIAKAD saya?",
          a: "arah.ai dirancang dengan prinsip akses minimal (least-privilege). Kami hanya membaca data yang diperlukan untuk menyusun rencana. Kredensial dienkripsi dan tidak disebar."
        },
        {
          q: "Bagaimana jika kampus saya belum terdaftar?",
          a: "Anda bisa mengajukan request. Kami akan memvalidasi jalur integrasi dengan tim IT kampus sebelum layanan dibuka."
        },
        {
          q: "Apakah ini legal?",
          a: "Ya. arah.ai beroperasi sesuai kebijakan kampus. Ketersediaan layanan bergantung pada persetujuan institusi dan akses API yang diberikan."
        }
      ]
    }
  }
} as const;

export function getCopy(locale: Locale) {
  return locales[locale];
}