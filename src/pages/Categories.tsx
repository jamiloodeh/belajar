import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  Palette,
  Monitor,
  Layout,
  Component,
  PenTool,
  Type,
  Gem,
  Box,
  ArrowRight,
} from "lucide-react";

export default function Categories() {
  const categories = [
    {
      id: "ui-kits",
      name: "UI Kits",
      description:
        "Komponen UI berkualitas tinggi untuk desain website dan aplikasi mobile yang modern.",
      icon: Layout,
      color: "bg-blue-50 text-blue-600",
      count: "240+ Aset",
      bgImage:
        "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "templates",
      name: "Web Templates",
      description:
        "Template website responsif yang siap digunakan, dari landing page hingga dashboard analitik.",
      icon: Monitor,
      color: "bg-indigo-50 text-indigo-600",
      count: "180+ Aset",
      bgImage:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "illustrations",
      name: "Ilustrasi",
      description:
        "Koleksi ilustrasi vektor yang menakjubkan untuk memperindah proyek dan presentasi Anda.",
      icon: PenTool,
      color: "bg-emerald-50 text-emerald-600",
      count: "320+ Aset",
      bgImage:
        "https://images.unsplash.com/photo-1626908013351-800ddd734b8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "icons",
      name: "Ikon Web",
      description:
        "Ribuan ikon dalam berbagai gaya (linier, solid, duotone) yang dirancang secara presisi.",
      icon: Component,
      color: "bg-amber-50 text-amber-600",
      count: "500+ Aset",
      bgImage:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "fonts",
      name: "Tipografi",
      description:
        "Variasi font premium mulai dari serif editorial yang elegan hingga sans-serif yang bersih.",
      icon: Type,
      color: "bg-rose-50 text-rose-600",
      count: "150+ Aset",
      bgImage:
        "https://images.unsplash.com/photo-1600869009498-8d429f88d4f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "graphics",
      name: "Elemen Grafis",
      description:
        "Bentuk geometris, latar belakang abstrak, dan elemen grafis untuk kebutuhan visual Anda.",
      icon: Palette,
      color: "bg-purple-50 text-purple-600",
      count: "420+ Aset",
      bgImage:
        "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "3d-assets",
      name: "Aset 3D",
      description:
        "Objek 3D berkualitas tinggi yang dapat diputar dan disesuaikan untuk desain futuristik.",
      icon: Box,
      color: "bg-cyan-50 text-cyan-600",
      count: "200+ Aset",
      bgImage:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "presentation",
      name: "Presentasi",
      description:
        "Template slide profesional untuk pitch deck, laporan tahunan, dan proposal bisnis.",
      icon: Gem,
      color: "bg-orange-50 text-orange-600",
      count: "110+ Aset",
      bgImage:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Eksplorasi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Kategori
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Temukan aset digital premium yang dikategorikan secara rapi untuk
            mempercepat alur kerja kreatif dan pengembangan proyek Anda.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <Link
                to={`/shop?category=${category.id}`}
                className="group block h-full bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative"
              >
                {/* Image Background (mostly visible on hover or as top banner) */}
                <div className="h-32 w-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/10 transition-colors z-10"></div>
                  <img
                    src={category.bgImage}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div
                    className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-bold bg-white shadow-sm text-gray-900`}
                  >
                    {category.count}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  <div
                    className={`w-14 h-14 ${category.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm -mt-12 relative z-20 border-4 border-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {category.description}
                  </p>

                  <div className="flex items-center text-indigo-600 font-semibold text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Eksplorasi <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-10 bg-gray-900 text-white rounded-3xl text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(#4F46E5_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Butuh Rekomendasi?</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
              Jelajahi koleksi bundel eksklusif kami yang berisi kumpulan aset
              premium dari berbagai kategori dengan harga lebih hemat.
            </p>
            <Link
              to="/bundle"
              className="inline-flex px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-500/30"
            >
              Lihat Bundel Premium
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
