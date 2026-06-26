import { Link } from "react-router-dom";
import {
  ArrowRight,
  Tag,
  Clock,
  Zap,
  Percent,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";

const promoItems = [
  {
    id: 1,
    title: "Ramadan Mega Bundle",
    description:
      "Dapatkan 50+ UI Kits premium dengan harga spesial menyambut bulan Ramadan. Terbatas!",
    discount: "70% OFF",
    code: "RAMADAN70",
    validUntil: "15 April 2026",
    image:
      "https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "SaaS Template Starter",
    description:
      "Beli 1 gratis 1 untuk semua template SaaS kategori Admin Dashboard.",
    discount: "Buy 1 Get 1",
    code: "SAASBOGO",
    validUntil: "30 Mei 2026",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "E-commerce Kit Pro",
    description:
      "Potongan harga khusus untuk pembelian E-commerce Kit Pro minggu ini.",
    discount: "50% OFF",
    code: "ECOM50",
    validUntil: "Event Terbatas",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export default function Promo() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden bg-[#111827]">
        <div className="absolute inset-0 max-w-full overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6"
            >
              <Zap className="w-4 h-4" />
              Promo Spesial Hari Ini
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
            >
              Penawaran Terbaik <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
                Untuk Kelas Desainmu
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
            >
              Tingkatkan kualitas desainmu dengan harga yang lebih terjangkau.
              Gunakan kode promo di bawah ini saat checkout.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 z-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promoItems.map((promo, index) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl hover:border-indigo-100 transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-lg">
                    {promo.discount}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {promo.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6 flex-grow">
                  {promo.description}
                </p>

                <div className="bg-gray-50 rounded-xl p-4 mb-4 border border-gray-100 border-dashed relative overflow-hidden">
                  <div className="absolute left-0 top-1/2 -mt-3 -ml-3 w-6 h-6 bg-white rounded-full border-r border-gray-200"></div>
                  <div className="absolute right-0 top-1/2 -mt-3 -mr-3 w-6 h-6 bg-white rounded-full border-l border-gray-200"></div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wider">
                        Kode Promo
                      </p>
                      <p className="text-lg font-bold text-indigo-600 font-mono tracking-widest">
                        {promo.code}
                      </p>
                    </div>
                    <button
                      onClick={() => navigator.clipboard.writeText(promo.code)}
                      className="p-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-lg transition-colors group/btn"
                    >
                      <Tag className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>Berlaku s/d: {promo.validUntil}</span>
                  </div>
                  <Link
                    to={`/shop?promo=${promo.code}`}
                    className="font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
                  >
                    Gunakan <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-indigo-600 py-16 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ingin Update Promo Terbaru?
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Berlangganan newsletter kami dan dapatkan informasi eksklusif
            mengenai produk rilis terbaru dan diskon spesial langsung di kotak
            masukmu.
          </p>
          <form className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Masukkan email kamu"
              className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors whitespace-nowrap"
            >
              Berlangganan
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
