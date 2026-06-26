import { useParams, Link } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../data';
import { formatCurrency } from '../lib/utils';
import { ShoppingCart, Star, CheckCircle, Shield, DownloadCloud, FileText, ChevronRight } from 'lucide-react';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[#FDFDFD]">
        <div className="text-center bg-white p-12 rounded-3xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-dark mb-4 tracking-tight">Produk Tidak Ditemukan</h2>
          <p className="text-gray-500 mb-8">Maaf, aset digital yang Anda cari tidak tersedia.</p>
          <Link to="/shop" className="bg-dark text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">Eksplor Katalog</Link>
        </div>
      </div>
    );
  }

  const category = CATEGORIES.find(c => c.id === product.category_id);
  const finalPrice = product.price - (product.price * (product.discount / 100));

  return (
    <div className="bg-[#FDFDFD] min-h-screen py-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center flex-wrap text-sm text-gray-500 mb-10 font-medium">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-300" />
          <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
          {category && (
            <>
              <ChevronRight className="w-4 h-4 mx-2 text-gray-300" />
              <Link to={`/shop?category=${category.slug}`} className="hover:text-primary transition-colors">{category.name}</Link>
            </>
          )}
          <ChevronRight className="w-4 h-4 mx-2 text-gray-300" />
          <span className="text-gray-900 truncate font-semibold">{product.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Visuals (Left) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 aspect-[4/3] p-3">
               <div className="w-full h-full rounded-[1.5rem] overflow-hidden">
                 <img src={product.thumbnail} alt={product.title} className="w-full h-full object-cover" />
               </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden border-2 border-transparent hover:border-primary cursor-pointer transition-all opacity-80 hover:opacity-100 shadow-sm p-1 bg-white">
                    <img src={product.thumbnail} alt={`Preview ${i}`} className="w-full h-full object-cover rounded-xl" />
                </div>
              ))}
            </div>

            {/* Description Area */}
            <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 mt-10">
              <h3 className="text-xl font-bold text-dark mb-4">Deskripsi Produk</h3>
              <div className="prose prose-gray max-w-none text-gray-600 font-light leading-relaxed">
                <p>{product.description}</p>
                <p>Template ini sangat cocok untuk brand yang ingin tampil menonjol tanpa harus menghabiskan waktu berjam-jam untuk mendesain dari nol.</p>
                <ul className="mt-4 font-semibold text-gray-800">
                  <li>✔ File beresolusi tinggi</li>
                  <li>✔ Mudah diedit & disesuaikan</li>
                  <li>✔ Dokumentasi panduan lengkap</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar Info (Right) */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white rounded-[2rem] shadow-[0_20px_40px_rgb(0,0,0,0.06)] border border-gray-100 p-8 lg:p-10 sticky top-28">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="bg-primary/10 text-primary text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  {category?.name}
                </span>
                {product.discount > 0 && (
                  <span className="bg-red-500 text-white text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                    Hemat {formatCurrency(product.price - finalPrice)}
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-dark mb-6 leading-tight tracking-tight">
                {product.title}
              </h1>

              <div className="flex items-center gap-6 mb-8 border-b border-gray-100 pb-6">
                <div className="flex items-center gap-1.5 bg-yellow-50 border border-yellow-100 px-3 py-1.5 rounded-xl">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-extrabold text-yellow-700">{product.rating.toFixed(1)}</span>
                </div>
                <div className="text-gray-500 text-sm flex items-center gap-2 font-medium">
                  <ShoppingCart className="w-5 h-5 text-gray-400" />
                  <span className="text-dark font-bold">{product.sales}</span> Terjual
                </div>
              </div>

              <div className="mb-8 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="text-sm text-gray-500 font-semibold mb-2">Harga Lisensi Personal</div>
                {product.discount > 0 ? (
                  <div className="flex items-end gap-3">
                    <span className="text-4xl font-extrabold text-dark tracking-tight">{formatCurrency(finalPrice)}</span>
                    <span className="text-lg text-gray-400 line-through decoration-red-500 decoration-2 mb-1 font-medium">{formatCurrency(product.price)}</span>
                  </div>
                ) : (
                  <span className="text-4xl font-extrabold text-dark tracking-tight">{formatCurrency(product.price)}</span>
                )}
              </div>

              <div className="space-y-4">
                <button className="w-full bg-primary text-white py-4 px-6 rounded-2xl font-bold text-lg hover:bg-primary/90 hover:shadow-[0_8px_20px_rgb(37,99,235,0.3)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3">
                  <ShoppingCart className="w-6 h-6" />
                  Tambah ke Keranjang
                </button>
                <Link to="/cart" className="w-full bg-dark text-white py-4 px-6 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all flex items-center justify-center transform active:scale-95">
                  Beli Sekarang
                </Link>
                
                <div className="flex bg-green-50 text-green-700 p-4 rounded-xl items-center gap-3 text-sm font-semibold mt-6 border border-green-100">
                  <Shield className="w-5 h-5 flex-shrink-0" />
                  100% Aman. File asli bebas virus.
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Detail Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <FileText className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-bold text-xl mb-3 text-dark">Format Lengkap</h3>
            <p className="text-gray-500 leading-relaxed font-light">Download file terkompresi (.zip) yang mencakup file mentahan sesuai spesifikasi produk (AI, PSD, PDF Canva Link).</p>
          </div>
          <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
              <CheckCircle className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="font-bold text-xl mb-3 text-dark">Lisensi Komersial</h3>
            <p className="text-gray-500 leading-relaxed font-light">Bebas dipergunakan untuk keperluan project klien profesional Anda. (Perhatikan syarat resell).</p>
          </div>
          <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
             <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
              <DownloadCloud className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-bold text-xl mb-3 text-dark">Unduh Kapan Saja</h3>
            <p className="text-gray-500 leading-relaxed font-light">History pembelian tercatat otomatis, Anda bisa mengunduh ulang file dari Dashboard akun tanpa expired.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
