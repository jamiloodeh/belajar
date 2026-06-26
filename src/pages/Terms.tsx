import { motion } from "motion/react";
import { Shield, FileText, AlertCircle, RefreshCcw } from "lucide-react";

export default function Terms() {
  const sections = [
    {
      icon: FileText,
      title: "1. Penggunaan Lisensi",
      content:
        "Setiap produk yang Anda beli di DesignStore dilengkapi dengan Lisensi Standar atau Lisensi Ekstensif. Lisensi Standar memperbolehkan Anda menggunakan produk untuk proyek personal dan komersial dengan batas jumlah cetak/tayang tertentu. Anda tidak diperkenankan menjual ulang, mendistribusikan ulang, atau menyewakan produk asli (source file) kepada pihak ketiga dalam bentuk apapun.",
    },
    {
      icon: RefreshCcw,
      title: "2. Kebijakan Pengembalian Dana",
      content:
        "Karena sifat produk berupa barang digital yang dapat diunduh (downloadable digital goods), kami pada umumnya tidak menawarkan pengembalian dana (refund) setelah produk berhasil diunduh. Pengecualian dapat diberikan jika file produk terbukti rusak (corrupt) dan tim support kami tidak dapat memberikan file pengganti yang berfungsi dalam waktu 48 jam.",
    },
    {
      icon: Shield,
      title: "3. Hak Kekayaan Intelektual",
      content:
        "Kreator asli (seller) tetap memegang seluruh Hak Cipta atas produk yang mereka jual di platform ini. Pembelian yang Anda lakukan adalah pembelian hak guna (lisensi), bukan transfer kepemilikan. Anda tidak diizinkan untuk mengklaim karya-karya dari DesignStore sebagai buatan Anda sendiri.",
    },
    {
      icon: AlertCircle,
      title: "4. Perubahan Layanan",
      content:
        "DesignStore berhak untuk mengubah, menangguhkan, atau menghentikan layanan (atau bagian atau konten di dalamnya) kapan saja dengan atau tanpa pemberitahuan kepada Anda. Kami tidak akan bertanggung jawab kepada Anda atau pihak ketiga mana pun atas modifikasi, perubahan harga, penangguhan, atau penghentian Layanan.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100 mb-6">
            <Shield className="w-10 h-10 text-indigo-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Syarat & Ketentuan
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Harap baca syarat dan ketentuan ini dengan saksama sebelum
            menggunakan layanan kami.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Pembaruan Terakhir: 15 Oktober 2023
          </p>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-50 rounded-xl shrink-0 mt-1">
                  <section.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gray-900 text-white rounded-3xl text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Masih memiliki pertanyaan?
          </h3>
          <p className="text-gray-400 mb-6">
            Jika Anda memiliki pertanyaan terkait syarat dan ketentuan layanan
            kami, jangan ragu untuk menghubungi tim bantuan kami.
          </p>
          <a
            href="mailto:support@designstore.com"
            className="inline-flex px-6 py-3 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-colors"
          >
            Hubungi Support
          </a>
        </motion.div>
      </div>
    </div>
  );
}
