import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "Apa perbedaan antara Lisensi Standar dan Lisensi Ekstensif?",
      answer:
        "Lisensi Standar digunakan untuk proyek personal atau satu proyek klien (end-product) terbatas, sedangkan Lisensi Ekstensif memungkinkan Anda menggunakan aset untuk berbagai produk yang akan dijual ke publik (misalnya template website yang dijual ulang, desain kaos cetak massal).",
    },
    {
      question: "Bagaimana cara mendownload produk yang sudah saya beli?",
      answer:
        'Setelah pembayaran berhasil diverifikasi, Anda akan segera menerima email berisi link download. Anda juga dapat mengakses semua file yang Anda beli selamanya melalui menu "Akun Saya > Riwayat Pembelian" di dashboard website.',
    },
    {
      question: "Apakah produk ini sekali bayar atau berlangganan?",
      answer:
        "Saat ini, semua aset di platform kami merupakan pembelian sekali bayar (one-time payment). Anda tidak perlu membayar biaya bulanan atau tahunan, dan mendapatkan pembaruan gratis seumur hidup untuk produk spesifik tersebut.",
    },
    {
      question: "Metode pembayaran apa saja yang tersedia?",
      answer:
        "Kami menerima berbagai metode pembayaran termasuk Bank Transfer (BCA, Mandiri, BNI), E-Wallet (GoPay, OVO, Dana, ShopeePay), dan Kartu Kredit/Debit (Visa, Mastercard).",
    },
    {
      question: "Apakah saya bisa meminta dibuatkan custom desain?",
      answer:
        "DesignStore saat ini hanya fokus pada penyediaan aset digital siap pakai (ready-to-use). Kami tidak menerima pesanan desain custom, namun template kami dirancang agar sangat mudah untuk disesuaikan secara mandiri.",
    },
    {
      question: "Bagaimana jika file tidak bisa dibuka atau corrupt?",
      answer:
        "Jika mengalami kendala teknis seperti file corrupt atau link kadaluarsa, silakan lampirkan nomor invoice Anda dan hubungi tim support kami. Kami akan mengirimkan file baru selambat-lambatnya 1x24 jam kerja.",
    },
  ];

  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-4 bg-indigo-50 rounded-2xl mb-6 text-indigo-600">
            <HelpCircle className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Punya pertanyaan? Temukan jawaban untuk pertanyaan yang paling
            sering diajukan oleh pengguna kami di bawah ini.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              index={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-gray-100 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-6 text-left"
      >
        <h3 className="text-lg font-bold text-gray-900 pr-8">{question}</h3>
        <div
          className={`shrink-0 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-180 bg-indigo-50 text-indigo-600" : "text-gray-500"}`}
        >
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-50 mt-2">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
