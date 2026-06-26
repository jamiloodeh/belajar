import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, ShieldCheck, Star } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { PRODUCTS, CATEGORIES } from "../data";
import * as Icons from "lucide-react";
import { motion } from "motion/react";

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD]">
      {/* Hero Section */}
      <section className="relative pt-24 pb-40 overflow-hidden bg-white rounded-b-[3rem] shadow-[0_4px_40px_rgb(0,0,0,0.02)] border-b border-gray-100 z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-white to-white"></div>
        <div className="absolute left-0 bottom-0 translate-y-1/3 -translate-x-1/3">
          <div className="w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-gray-200/60 shadow-sm mb-8 animate-in slide-in-from-bottom-4 duration-700">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-gray-800 tracking-wide uppercase">
              Platform Aset Digital Premium
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-dark mb-8 leading-[1.1] animate-in slide-in-from-bottom-8 duration-700 delay-150">
            Berkreasi Lebih Cepat <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Tanpa Batas
            </span>
          </h1>

          <p className="mt-4 text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-12 leading-relaxed animate-in slide-in-from-bottom-8 duration-700 delay-300 font-light">
            Ribuan template Canva, preset Lightroom, UI Kit, dan aset digital
            siap pakai untuk mendongkrak kualitas visual brand Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom-8 duration-700 delay-500">
            <Link
              to="/shop"
              className="px-10 py-4 bg-dark text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all hover:shadow-[0_8px_30px_rgb(20,20,30,0.3)] hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Eksplorasi Katalog
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/dashboard"
              className="px-10 py-4 bg-white text-dark rounded-full font-semibold text-lg border border-gray-200 hover:border-primary hover:text-primary transition-all hover:bg-gray-50 flex items-center justify-center"
            >
              Daftar Gratis
            </Link>
          </div>

          <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-medium text-gray-500 animate-in fade-in duration-1000 delay-700">
            <div className="flex -space-x-3">
              <img
                className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                src="https://i.pravatar.cc/100?img=1"
                alt="User"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                src="https://i.pravatar.cc/100?img=2"
                alt="User"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                src="https://i.pravatar.cc/100?img=3"
                alt="User"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                src="https://i.pravatar.cc/100?img=4"
                alt="User"
              />
              <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center shadow-sm relative z-10 font-bold text-xs">
                +
              </div>
            </div>
            <p className="text-base">
              Dipercaya oleh{" "}
              <strong className="text-dark font-bold">10,000+</strong> kreator
              lokal Indonesia
            </p>
          </div>
        </div>
      </section>

      {/* Categories Bento Grid */}
      <section className="py-24 relative z-0 -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-dark mb-4 tracking-tight">
                Eksplorasi Kategori
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                Temukan aset digital yang dirancang khusus untuk mempermudah
                pekerjaan Anda.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[160px] md:auto-rows-[200px]">
            {CATEGORIES.map((category, idx) => {
              const Icon = (Icons as any)[category.icon];

              const bentoStyles = [
                "col-span-2 lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-indigo-500 to-purple-600 text-white ring-1 ring-indigo-500/20",
                "col-span-2 lg:col-span-2 lg:row-span-1 bg-white text-gray-900 border border-gray-100",
                "col-span-1 lg:col-span-1 lg:row-span-1 bg-white text-gray-900 border border-gray-100",
                "col-span-1 lg:col-span-1 lg:row-span-1 bg-gradient-to-br from-blue-50 to-indigo-50 text-indigo-900 border border-indigo-100",
                "col-span-2 lg:col-span-2 lg:row-span-1 bg-white text-gray-900 border border-gray-100",
                "col-span-2 lg:col-span-2 lg:row-span-1 bg-gray-900 text-white border border-gray-800",
              ];

              const style = bentoStyles[idx] || bentoStyles[1];
              const isDark = idx === 0 || idx === 5;
              const isPrimaryLight = idx === 3;

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={
                    style +
                    " rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative group"
                  }
                >
                  <Link
                    to={`/shop?category=${category.slug}`}
                    className="absolute inset-0 p-6 md:p-8 flex flex-col items-start justify-between"
                  >
                    {/* Decorative Background Elements */}
                    {idx === 0 && (
                      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    )}
                    {idx === 5 && (
                      <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl"></div>
                    )}

                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-sm relative z-10 ${
                        isDark
                          ? "bg-white/10 backdrop-blur-md text-white"
                          : isPrimaryLight
                            ? "bg-white text-indigo-600 shadow-indigo-100"
                            : "bg-gray-50 text-gray-700"
                      }`}
                    >
                      {Icon && <Icon className="w-7 h-7" />}
                    </div>

                    <div className="relative z-10 w-full flex items-end justify-between">
                      <div>
                        <h3
                          className={`font-bold text-xl md:text-2xl mb-1 ${isDark ? "text-white" : "text-gray-900"}`}
                        >
                          {category.name}
                        </h3>
                        <p
                          className={`text-sm md:text-base font-medium opacity-80 ${isDark ? "text-white/80" : "text-gray-500"}`}
                        >
                          Jelajahi Koleksi &rarr;
                        </p>
                      </div>

                      {idx === 0 && (
                        <div className="hidden sm:flex px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-semibold">
                          Populer
                        </div>
                      )}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white rounded-t-[3rem] shadow-[0_-4px_40px_rgb(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 text-primary font-bold tracking-wider text-sm mb-3 uppercase bg-primary/10 w-max px-3 py-1 rounded-full">
                <Star className="w-4 h-4 fill-primary" /> Pilihan Teratas
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-dark tracking-tight">
                Rekomendasi Minggu Ini
              </h2>
            </div>
            <Link
              to="/shop"
              className="group hidden sm:flex items-center gap-2 text-dark font-bold hover:text-primary transition-colors bg-gray-50 border border-gray-100 px-6 py-3 rounded-full hover:bg-white hover:shadow-md hover:-translate-y-1"
            >
              Lihat Katalog{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 sm:hidden text-center z-10">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-dark font-bold bg-white border border-gray-200 px-8 py-4 rounded-full shadow-sm"
            >
              Lihat Semua Katalog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Proof / Feature Highlight */}
      <section className="py-32 bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Kenapa Belanja di Mizu?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
              Kami membangun ekosistem marketplace yang aman, instan, dan
              memprioritaskan kualitas di setiap pikselnya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/30">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Akses Instan 24/7</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                Link download otomatis masuk ke dashboard detik itu juga setelah
                pembayaran terkonfirmasi oleh Midtrans.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 bg-green-500/20 text-green-400 rounded-2xl flex items-center justify-center mb-6 border border-green-500/30">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">100% Bebas Virus</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                Setiap file ZIP dan aset telah melalui proses pemindaian
                keamanan sebelum dipublikasikan ke katalog.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/30">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Kurasi Eksklusif</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                Hanya menyajikan desain premium yang relevan dengan tren visual
                terkini di industri kreatif.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
