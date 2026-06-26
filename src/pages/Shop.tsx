import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../data';
import { Filter, Check, Search, SlidersHorizontal, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get('category');
  const [searchQuery, setSearchQuery] = useState('');
  
  const [sortBy, setSortBy] = useState('newest');

  let filteredProducts = currentCategory 
    ? PRODUCTS.filter(p => CATEGORIES.find(c => c.slug === currentCategory)?.id === p.category_id)
    : PRODUCTS;

  if (searchQuery) {
    filteredProducts = filteredProducts.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()));
  }

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'popular') return b.sales - a.sales;
    return 0; // 'newest'
  });

  return (
    <div className="bg-[#FDFDFD] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14 md:mb-20 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-4 h-4" /> Katalog Produk
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
            {currentCategory 
              ? CATEGORIES.find(c => c.slug === currentCategory)?.name 
              : 'Semua Produk Digital'
            }
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            Jelajahi koleksi premium kami untuk mempercepat pekerjaan desainmu.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 sticky top-28">
              
              <div className="mb-8">
                <label className="text-sm font-bold text-gray-900 mb-3 block">Cari Produk</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Ketik nama produk..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-gray-50 transition-all font-medium" 
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 font-bold text-lg border-b border-gray-100 pb-4 mb-4 text-dark select-none">
                <SlidersHorizontal className="w-5 h-5 text-primary" />
                Kategori
              </div>
              
              <div className="space-y-1.5">
                <button 
                  onClick={() => setSearchParams({})}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${!currentCategory ? 'bg-primary text-white shadow-md shadow-primary/20' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  Semua Produk
                </button>
                {CATEGORIES.map(category => (
                  <button 
                    key={category.id}
                    onClick={() => { setSearchQuery(''); setSearchParams({ category: category.slug }) }}
                    className={`w-full text-left flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${currentCategory === category.slug ? 'bg-primary text-white shadow-md shadow-primary/20' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
                  >
                    <span>{category.name}</span>
                    {currentCategory === category.slug && <Check className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 px-2">
              <div className="text-gray-500 text-sm font-medium">
                Menampilkan <span className="font-bold text-dark bg-gray-100 px-2 py-0.5 rounded-md">{sortedProducts.length}</span> hasil
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-gray-700">Urutkan:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-gray-200 text-gray-700 text-sm rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary block w-48 p-2.5 font-semibold appearance-none cursor-pointer shadow-sm focus:outline-none transition-all"
                >
                  <option value="newest">Paling Baru</option>
                  <option value="popular">Paling Populer</option>
                  <option value="price-low">Termurah</option>
                  <option value="price-high">Termahal</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
               <div className="bg-white p-16 rounded-[2rem] border border-gray-100 text-center shadow-sm">
                <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-gray-300" />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-3 tracking-tight">Produk tidak ditemukan</h3>
                <p className="text-gray-500 font-light">Coba ubah filter kategori atau cari dengan kata kunci yang berbeda.</p>
                <button 
                  onClick={() => { setSearchQuery(''); setSearchParams({}); }}
                  className="mt-6 px-6 py-3 bg-gray-50 hover:bg-gray-100 text-dark font-medium rounded-full transition-colors border border-gray-200"
                >
                  Reset Filter
                </button>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
}
