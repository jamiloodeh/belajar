import { motion } from "motion/react";
import { Sparkles, Users, Award, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-gray-50 rounded-b-[3rem] z-10 border-b border-gray-100">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-indigo-100/50 to-purple-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 opacity-70 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-100/50 to-teal-100/50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 opacity-70 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-semibold mb-6 ring-1 ring-indigo-500/20">
                <Sparkles className="w-4 h-4" /> Mengubah Ide Menjadi Karya
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                Misi kami memberdayakan{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  kreator dunia
                </span>
                .
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-10">
                DesignStore adalah platform terdepan yang menyediakan aset
                digital premium, mulai dari UI kit, presentasi, hingga elemen
                grafis berkualitas tinggi untuk mempercepat alur kerja Anda.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/shop"
                  className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl transition-all shadow-xl shadow-gray-900/20 flex items-center gap-2 group"
                >
                  Eksplorasi Aset{" "}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/promo"
                  className="px-8 py-4 bg-white text-gray-900 font-bold rounded-xl border-2 border-gray-100 hover:border-gray-200 transition-all flex items-center gap-2"
                >
                  Lihat Promo
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 -mt-20 relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Value 1 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                <Target className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Kualitas Pertama
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Setiap aset yang kami publikasikan telah melewati kurasi ketat
                untuk memastikan standar kualitas terbaik yang siap digunakan
                dalam proyek profesional.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                <Users className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Fokus pada Pengguna
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Dirancang agar mudah dipahami, disesuaikan, dan
                diimplementasikan. Kami senantiasa memprioritaskan efisiensi
                desain dari sudut pandang pengguna.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors">
                <Award className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Selalu Diperbarui
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tren desain terus berkembang. Kami secara konsisten menambahkan
                koleksi dan memperbarui aset lama agar selalu relevan dengan
                standar industri.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#4F46E5_1px,transparent_1px)] [background-size:32px_32px] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "Total Aset", value: "15K+" },
              { label: "Pengguna Aktif", value: "50K+" },
              { label: "Desainer Global", value: "120+" },
              { label: "Tahun Beroperasi", value: "5+" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                  Kisah Di Balik DesignStore
                </h2>
                <div className="space-y-6 text-lg text-gray-600">
                  <p>
                    Semuanya dimulai pada tahun 2019 ketika sekelompok desainer
                    UI/UX merasa frustrasi dengan betapa banyak waktu yang
                    terbuang untuk mendesain komponen dasar dan tata letak
                    berulang kali. Kami ingin menciptakan sebuah solusi di mana
                    kualitas dan kecepatan bisa berjalan beriringan.
                  </p>
                  <p>
                    Maka lahirlah DesignStore. Awalnya sebagai perpustakaan
                    komponen kecil, dan kini berkembang menjadi sumber utama
                    bagi puluhan ribu desainer, arsitek perangkat lunak, dan
                    pemasar kreatif di seluruh dunia yang ingin meningkatkan
                    kualitas pekerjaan mereka ke level berikutnya tanpa memulai
                    dari awal.
                  </p>
                  <p className="font-semibold text-gray-900 border-l-4 border-indigo-600 pl-4 py-2">
                    "Kami percaya bahwa desainer harus menghabiskan waktu mereka
                    pada inovasi layar sentuh, bukan menyusun ulang struktur
                    dropdown yang sama."
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                  alt="Tim DesignStore"
                  className="rounded-3xl shadow-2xl object-cover w-full h-[500px]"
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <Target className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">
                        Berpusat di
                      </p>
                      <p className="font-bold text-gray-900">
                        Jakarta, Indonesia
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
