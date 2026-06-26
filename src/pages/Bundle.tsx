import { Link } from "react-router-dom";
import { ShoppingCart, Check, Zap, Layers, Star, Hexagon } from "lucide-react";
import { motion } from "motion/react";

const bundles = [
  {
    id: 1,
    title: "Starter Toolkit",
    description:
      "Paket esensial untuk memulai proyek desain antarmuka dengan komponen dasar kelas atas.",
    price: 49,
    originalPrice: 120,
    features: [
      "UI Kit Dasar (50+ Komponen)",
      "100+ Icon Vektor Esensial",
      "3 Template Halaman Landing",
      "Akses Update 6 Bulan",
    ],
    highlight: false,
    color: "from-blue-500 to-cyan-400",
    icon: <Layers className="text-[#3B82F6] w-7 h-7" />,
    iconBg: "bg-[#EFF6FF] border border-[#DBEAFE]",
  },
  {
    id: 2,
    title: "Pro Creative Bundle",
    description:
      "Koleksi lengkap untuk desainer profesional yang membutuhkan fleksibilitas dan kecepatan.",
    price: 99,
    originalPrice: 350,
    features: [
      "UI Kit Lengkap (250+ Komponen)",
      "Semua Kategori Template (Admin, E-commerce, SaaS)",
      "1000+ Icon Premium Custom",
      "Akses Update Seumur Hidup",
      "Dukungan Prioritas 24/7",
    ],
    highlight: true,
    badge: "TERPOPULER",
    color: "from-indigo-600 to-purple-600",
    icon: <Zap className="text-[#6366F1] w-7 h-7 fill-transparent" />,
    iconBg: "bg-[#EEF2FF] border border-[#E0E7FF]",
  },
  {
    id: 3,
    title: "Agency Masterpack",
    description:
      "Solusi tak terbatas untuk agensi dan tim desain besar. Semua produk kami, selamanya.",
    price: 249,
    originalPrice: 900,
    features: [
      "Akses ke Semua Produk Saat Ini & Mendatang",
      "Lisensi Multi-User (Hingga 10 Anggota)",
      "File Resource Mentah (Figma, Sketch, XD)",
      "Sesi Konsultasi Desain (1x / Bulan)",
      "Request Template Custom",
    ],
    highlight: false,
    color: "from-orange-500 to-pink-500",
    icon: <Hexagon className="text-[#F97316] w-7 h-7" />,
    iconBg: "bg-[#FFF7ED] border border-[#FFEDD5]",
  },
];

export default function Bundle() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans">
      {/* Hero Section */}
      <section className="relative pt-24 pb-48 overflow-hidden bg-[#0A0B14]">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 max-w-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#3B0764]/20 rounded-full blur-[140px] mix-blend-screen"></div>
          <div className="absolute top-40 -left-40 w-[600px] h-[600px] bg-[#1E3A8A]/20 rounded-full blur-[140px] mix-blend-screen"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1E293B]/50 border border-white/5 text-slate-300 text-sm font-semibold mb-8 backdrop-blur-sm"
          >
            <Star className="w-4 h-4 fill-[#A78BFA] text-[#A78BFA]" />
            Bundle Spesial
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight"
          >
            Hemat Lebih Banyak dengan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] to-[#06B6D4] drop-shadow-md">
              Paket Bundle Premium
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            Dapatkan koleksi aset desain terbaik kami dalam satu paket.
            <br className="hidden md:block" />
            Cocok untuk freelancer, startup, hingga agensi ternama.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-36 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-start px-2">
          {bundles.map((bundle, index) => (
            <motion.div
              key={bundle.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl border ${
                bundle.highlight
                  ? "border-transparent ring-8 ring-white/10 md:-mt-6"
                  : "border-slate-100"
              } flex flex-col h-full overflow-visible`}
            >
              {bundle.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
                  <span className="bg-[#4F46E5] text-white text-xs font-bold uppercase tracking-wider py-2.5 px-6 rounded-full shadow-lg border-2 border-white">
                    {bundle.badge}
                  </span>
                </div>
              )}

              <div className="mb-8 relative z-10 pt-2">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${bundle.iconBg || "bg-slate-50 border border-slate-100"}`}
                >
                  {bundle.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {bundle.title}
                </h3>
                <p className="text-slate-500 text-sm h-12">
                  {bundle.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-end gap-2 text-slate-400 line-through font-semibold mb-1">
                  ${bundle.originalPrice}
                </div>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-extrabold text-slate-900">
                    ${bundle.price}
                  </span>
                  <span className="text-slate-500 font-medium pb-1">
                    / lifetime
                  </span>
                </div>
              </div>

              <button
                className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-lg mb-8 transition-all duration-300 ${
                  bundle.highlight
                    ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-500 hover:to-blue-500 hover:shadow-lg hover:shadow-indigo-500/30"
                    : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                Pilih Paket Ini
              </button>

              <div className="space-y-4 flex-grow">
                {bundle.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-emerald-600 font-bold" />
                    </div>
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-white py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">
            Dipercaya oleh ribuan desainer dari tim hebat
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale filter">
            {/* Dummy Logos */}
            <div className="text-2xl font-black font-serif italic text-slate-800">
              Acme Corp
            </div>
            <div className="text-2xl font-black text-slate-800">GLOBEX</div>
            <div className="text-2xl font-black font-mono text-slate-800">
              SOYUZ
            </div>
            <div className="text-2xl font-black text-slate-800 tracking-tighter">
              Initech
            </div>
            <div className="text-2xl font-black font-serif text-slate-800">
              Umbrella
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
