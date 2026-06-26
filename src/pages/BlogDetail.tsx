import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
} from "lucide-react";

export default function BlogDetail() {
  const { id } = useParams();

  // Simulated article data
  const post = {
    id: id,
    title: "Masa Depan Desain UI: Tren yang Harus Anda Ketahui di Tahun 2026",
    excerpt:
      "Eksplorasi mendalam mengenai evolusi antarmuka pengguna, mulai dari adaptasi AI hingga kebangkitan skeuomorfisme modern.",
    category: "Tren Desain",
    author: "Budi Santoso",
    role: "Senior UI/UX Designer",
    date: "20 Jun 2026",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    readTime: "5 min read",
    content: `
      <p>Dalam dunia desain yang dinamis, antarmuka pengguna (UI) terus mengalami transformasi yang signifikan. Seiring dengan masuknya tahun 2026, kita menyaksikan kolaborasi yang semakin mendalam antara kreativitas desainer dan kemampuan kecerdasan buatan (AI). Pergeseran ini tidak hanya mengubah cara kita bekerja, tetapi juga mendefinisikan ulang standar pengalaman pengguna (UX) secara keseluruhan.</p>
      
      <h3>1. Hyper-Personalization melalui AI</h3>
      <p>Tidak ada lagi desain \"satu ukuran untuk semua\". Pada tahun 2026, antarmuka pengguna diharapkan dapat beradaptasi secara real-time berdasarkan preferensi, perilaku, dan konteks penggunaan setiap individu. Model AI generatif memungkinkan UI untuk menyesuaikan palet warna, tipografi, dan bahkan tata letak komponen dalam hitungan milidetik. Hal ini memberikan setiap pengguna rasa kepemilikan yang mendalam terhadap setiap produk yang mereka gunakan.</p>
      
      <blockquote>\"Masa depan desain bukanlah tentang apa yang bisa diciptakan oleh alat, melainkan tentang bagaimana kita bisa berkolaborasi dengan mesin untuk meningkatkan potensi kreativitas manusia.\" - Jane Doe, Design Thinker</blockquote>
      
      <h3>2. Kebangkitan Skeuomorfisme Modern (Neumorphism 2.0)</h3>
      <p>Setelah bertahun-tahun didominasi oleh desain datar (flat design) dan elemen UI yang minimalis, kita kembali melihat munculnya tekstur, kedalaman, dan elemen yang menyerupai objek di dunia nyata. Namun kali ini, pendekatannya lebih tersembunyi dan menggabungkan material digital yang menyatu (seperti glassmorphism). Pengguna mulai mencari interaksi yang terasa taktil dan memuaskan pada layar mereka.</p>
      
      <p>Beberapa contoh penerapan tren ini meliputi:</p>
      <ul>
        <li>Tombol yang memiliki simulasi pantulan cahaya realistis saat ditekan.</li>
        <li>Kartu (Cards) yang menggunakan tekstur material buram (frosted) untuk memberikan efek lapisan pada UI.</li>
        <li>Transisi micro-interactions berbasis fisika yang membuat navigasi terasa lebih hidup.</li>
      </ul>
      
      <h3>3. Integrasi Suara dan Gerakan (Voice and Gesture UI)</h3>
      <p>Layar sentuh tidak lagi menjadi satu-satunya media interaksi. Antarmuka suara yang semakin canggih telah memungkinkan kontrol hands-free secara efektif, didukung oleh pemahaman bahasa alami yang jauh lebih matang. Di saat yang bersamaan, perangkat wearable membuka jalan bagi kontrol berbasis gestur gerakan spasial tubuh, memungkinkan manipulasi elemen 3D dalam ruang mixed reality (XR).</p>

      <h3>Kesimpulan</h3>
      <p>Mempersiapkan diri untuk masa depan desain UI bukan berarti melupakan prinsip dasar seperti aksesibilitas dan kemudahan penggunaan. Sebaliknya, tren-tren ini ada untuk memperkuat nilai-nilai fundamental tersebut, menciptakan ruang digital yang lebih adaptif, ekspresif, dan berpusat pada manusia. Oleh karena itu, mari bereksperimen, belajar, dan merangkul perubahan untuk menciptakan esok yang lebih inspiratif.</p>
    `,
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-20 pb-24 font-sans">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8 pt-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-indigo-600 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Kembali ke Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full uppercase tracking-wider">
                {post.category}
              </span>
              <span className="flex items-center text-gray-500 text-sm gap-1">
                <Clock className="w-4 h-4" /> {post.readTime}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>

            {/* Author & Meta */}
            <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center overflow-hidden">
                  <User className="w-7 h-7 text-indigo-500" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">
                    {post.author}
                  </p>
                  <p className="text-sm text-gray-500">{post.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{post.date}</span>
                </div>

                {/* Social Share (Desktop logic) */}
                <div className="hidden md:flex items-center gap-3 border-l border-gray-200 pl-6">
                  <span className="text-sm font-medium text-gray-500 mr-2 flex items-center gap-1">
                    <Share2 className="w-4 h-4" /> Bagikan:
                  </span>
                  <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                    <Facebook className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </header>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 rounded-3xl overflow-hidden shadow-2xl relative"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto object-cover max-h-[600px] hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        </motion.div>

        {/* Content Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-lg prose-indigo max-w-none text-gray-700
           prose-headings:font-bold prose-headings:text-gray-900 prose-headings:tracking-tight
           prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
           prose-p:leading-relaxed prose-p:mb-6
           prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline
           prose-blockquote:border-l-4 prose-blockquote:border-indigo-500 prose-blockquote:bg-indigo-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:text-indigo-900 prose-blockquote:font-medium prose-blockquote:italic
           prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
           bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer Actions / Mobile Share */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-4 w-full md:w-auto md:hidden">
            <span className="text-sm font-medium text-gray-500">Bagikan:</span>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100">
                <Facebook className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <span className="text-sm font-medium text-gray-600">
              Terbantu dengan artikel ini?
            </span>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg transition-colors ml-auto md:ml-0">
              <Copy className="w-4 h-4" /> Salin Tautan
            </button>
          </div>
        </div>
      </article>

      {/* Newsletter Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 mix-blend-overlay"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Mulai Dapatkan Insight Desain
            </h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Tingkatkan wawasan dan kualitas desain Anda. Berlangganan
              newsletter kami untuk insight mingguan langsung di kotak masuk
              Anda.
            </p>
            <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-3">
              <input
                type="email"
                placeholder="Masukkan alamat email.."
                className="flex-1 px-5 py-4 bg-gray-800/50 border border-gray-700 text-white rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-indigo-500/30 whitespace-nowrap"
              >
                Berlangganan
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
