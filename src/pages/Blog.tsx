import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

const featuredPost = {
  id: 1,
  title: "Masa Depan Desain UI: Tren yang Harus Anda Ketahui di Tahun 2026",
  excerpt:
    "Eksplorasi mendalam mengenai evolusi antarmuka pengguna, mulai dari adaptasi AI hingga kebangkitan skeuomorfisme modern.",
  category: "Tren Desain",
  author: "Budi Santoso",
  date: "20 Jun 2026",
  image:
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  readTime: "5 min read",
};

const blogPosts = [
  {
    id: 2,
    title: "Panduan Lengkap Menggunakan Sistem Desain untuk Tim Skala Besar",
    excerpt:
      "Pelajari bagaimana menerapkan sistem desain yang skalabel dan efisien untuk kolaborasi tim yang lancar.",
    category: "Tutorial",
    author: "Siti Aminah",
    date: "18 Jun 2026",
    image:
      "https://images.unsplash.com/photo-1542744094-24638ea0b3b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "10 Komponen UI yang Sering Diabaikan Namun Penting",
    excerpt:
      "Jangan biarkan detail kecil merusak UX Anda. Berikut komponen-komponen yang perlu mendapat perhatian lebih.",
    category: "Tips & Trik",
    author: "Wahyu Hidayat",
    date: "15 Jun 2026",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readTime: "4 min read",
  },
  {
    id: 4,
    title: "Mengapa Desain Responsif Lebih Penting dari Sebelumnya",
    excerpt:
      "Dengan beragamnya perangkat saat ini, memastikan desain Anda terlihat sempurna di semua layar adalah sebuah keharusan.",
    category: "UX Design",
    author: "Diana Putri",
    date: "12 Jun 2026",
    image:
      "https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "Tips Memilih Typografi yang Tepat untuk Proyek Web Anda",
    excerpt:
      "Panduan singkat tentang cara memasangkan font yang dapat meningkatkan keterbacaan dan estetika situs Anda.",
    category: "Desain Visual",
    author: "Reza Fahlevi",
    date: "10 Jun 2026",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readTime: "5 min read",
  },
  {
    id: 6,
    title: "Peran Micro-Interactions dalam Meningkatkan User Experience",
    excerpt:
      "Bagaimana animasi kecil dan feedback visual membuat aplikasi Anda terasa hidup dan intuitif.",
    category: "UX Design",
    author: "Budi Santoso",
    date: "05 Jun 2026",
    image:
      "https://images.unsplash.com/photo-1527334919515-b800a221f7fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readTime: "7 min read",
  },
  {
    id: 7,
    title: "Membedah Anatomi Landing Page yang Menghasilkan Konversi Tinggi",
    excerpt:
      "Rahasia di balik struktur halaman arahan yang tidak hanya cantik, tetapi juga efektif secara bisnis.",
    category: "Marketing",
    author: "Siti Aminah",
    date: "02 Jun 2026",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readTime: "9 min read",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Blog Header */}
      <section className="bg-white border-b border-gray-200 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
                Wawasan & Cerita
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Temukan artikel terbaru seputar desain antarmuka, tren
                teknologi, studi kasus, dan berbagai sumber daya yang dapat
                membantu proyek kreatif Anda.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 group cursor-pointer"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="h-64 lg:h-full min-h-[400px] overflow-hidden relative">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6 text-sm">
                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 font-semibold rounded-full uppercase tracking-wider text-xs">
                  {featuredPost.category}
                </span>
                <span className="flex items-center text-gray-500 font-medium">
                  {featuredPost.readTime}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-indigo-600 transition-colors">
                <Link to="/blog/1">{featuredPost.title}</Link>
              </h2>
              <p className="text-gray-600 text-lg mb-8 line-clamp-3">
                {featuredPost.excerpt}
              </p>

              <div className="flex justify-between items-center mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <User className="w-5 h-5 text-gray-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {featuredPost.author}
                    </p>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {featuredPost.date}
                    </p>
                  </div>
                </div>

                <Link
                  to="/blog/1"
                  className="inline-flex items-center gap-1 text-indigo-600 font-semibold text-sm group-hover:gap-2 transition-all"
                >
                  Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-gray-900">Artikel Terbaru</h3>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-lg transition-all group"
            >
              <Link
                to={`/blog/${post.id}`}
                className="block h-52 overflow-hidden relative"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold rounded-full shadow-sm uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </Link>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-indigo-600 transition-colors line-clamp-2">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <User className="w-4 h-4 text-gray-500" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-900">
                        {post.author}
                      </p>
                      <p className="text-[10px] text-gray-500">{post.date}</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-md">
                    {post.readTime}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pagination Dummy */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-1 bg-white border border-gray-200 rounded-lg p-1 shadow-sm">
            <button
              className="px-3 py-2 rounded-md hover:bg-gray-50 text-gray-400 disabled:opacity-50"
              disabled
            >
              Prev
            </button>
            <button className="w-10 h-10 rounded-md bg-indigo-50 text-indigo-600 font-semibold flex items-center justify-center">
              1
            </button>
            <button className="w-10 h-10 rounded-md hover:bg-gray-50 text-gray-700 font-medium flex items-center justify-center">
              2
            </button>
            <button className="w-10 h-10 rounded-md hover:bg-gray-50 text-gray-700 font-medium flex items-center justify-center">
              3
            </button>
            <span className="px-2 text-gray-400">...</span>
            <button className="px-3 py-2 rounded-md hover:bg-gray-50 text-gray-700 font-medium">
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-900 py-16 mt-12 border-t-4 border-indigo-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Jangan Ketinggalan Informasi
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
            Dapatkan artikel terbaru, tips desain, dan studi kasus menarik
            langsung ke inbox Anda setiap minggu.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Alamat email Anda"
              className="flex-grow px-4 py-3 rounded-xl border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white font-semibold rounded-xl transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4">
            Kami menghargai privasi Anda. Tidak ada spam.
          </p>
        </div>
      </section>
    </div>
  );
}
