import { motion } from "motion/react";
import {
  Search,
  ShoppingCart,
  CreditCard,
  Download,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function HowToBuy() {
  const steps = [
    {
      icon: Search,
      title: "Cari & Pilih Aset",
      desc: "Jelajahi berbagai kategori produk kami atau gunakan fitur pencarian untuk menemukan aset digital yang sesuai dengan kebutuhan proyek desain Anda.",
    },
    {
      icon: ShoppingCart,
      title: "Tambahkan ke Keranjang",
      desc: 'Setelah menemukan aset yang cocok, klik tombol "Tambah ke Keranjang". Anda dapat melanjutkan berbelanja atau langsung menuju ke halaman checkout.',
    },
    {
      icon: CreditCard,
      title: "Checkout & Pembayaran",
      desc: "Isi detail informasi yang diperlukan dan pilih metode pembayaran favorit Anda. Kami mendukung berbagai opsi pembayaran yang aman dan nyaman.",
    },
    {
      icon: Download,
      title: "Unduh Seketika",
      desc: "Setelah pembayaran berhasil dikonfirmasi, tautan resi dan file produk akan langsung dikirimkan ke email Anda dan dapat diunduh melalui dashboard akun.",
    },
  ];

  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Cara Pembelian
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Mendapatkan aset digital premium di DesignStore sangatlah mudah dan
            cepat. Ikuti panduan empat langkah sederhana di bawah ini.
          </p>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-12 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-indigo-200 before:to-transparent">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-white border border-gray-100 shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 mx-auto group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600">
                  <step.icon className="w-8 h-8" />
                </div>
              </div>

              <div className="w-[calc(100%-6rem)] md:w-[calc(50%-3rem)] p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group-hover:border-indigo-100 mt-8 md:mt-0">
                <div className="text-indigo-600 font-bold mb-2 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-sm">
                    {idx + 1}
                  </span>
                  Langkah {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="p-8 bg-indigo-50 rounded-3xl border border-indigo-100">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">
              Siap untuk memulai proyek Anda?
            </h3>
            <p className="text-indigo-700 mb-6 max-w-xl mx-auto">
              Jelajahi ribuan aset digital premium dan percepat alur kerja
              desain Anda hari ini.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-indigo-500/30"
            >
              Mulai Belanja <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
