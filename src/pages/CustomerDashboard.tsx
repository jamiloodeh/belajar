import { formatCurrency } from '../lib/utils';
import { Download, Package, Clock, LogOut, ExternalLink, Settings, Shield } from 'lucide-react';
import { PRODUCTS } from '../data';

export default function CustomerDashboard() {
  const purchasedProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="bg-[#FDFDFD] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden sticky top-28">
              <div className="p-8 text-center border-b border-gray-50 relative">
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
                <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center border-4 border-white shadow-md relative z-10 p-1">
                   <img src="https://i.pravatar.cc/150?u=budi" alt="Avatar" className="w-full h-full rounded-full object-cover" />
                </div>
                <h2 className="font-bold text-xl text-dark mt-4">Budi Santoso</h2>
                <div className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full mt-2">
                  <Shield className="w-3 h-3" /> Verified Member
                </div>
              </div>

              <div className="p-4 space-y-1">
                <a href="#" className="flex items-center gap-3 px-4 py-3.5 bg-primary text-white rounded-xl font-bold shadow-md shadow-primary/20 transition-all">
                  <Package className="w-5 h-5" /> Produk Saya (3)
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-dark hover:bg-gray-50 rounded-xl font-medium transition-colors">
                  <Clock className="w-5 h-5 opacity-70" /> Riwayat Transaksi
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-dark hover:bg-gray-50 rounded-xl font-medium transition-colors">
                  <Settings className="w-5 h-5 opacity-70" /> Pengaturan Akun
                </a>
                <div className="border-t border-gray-100 my-2 pt-2"></div>
                <a href="#" className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 hover:text-red-600 rounded-xl font-bold transition-colors">
                  <LogOut className="w-5 h-5" /> Keluar
                </a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <h1 className="text-3xl font-bold text-dark mb-8 tracking-tight">Koleksi Digital Saya</h1>
            
            <div className="space-y-6">
              {purchasedProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 p-6 sm:p-8 flex flex-col sm:flex-row gap-8 items-center md:items-start transition-all hover:shadow-md">
                  <div className="w-full sm:w-56 aspect-[4/3] rounded-2xl overflow-hidden flex-shrink-0 border border-gray-100 shadow-sm relative group p-2 bg-gray-50">
                    <img src={product.thumbnail} alt={product.title} className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  
                  <div className="flex-grow flex flex-col w-full h-full">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-2">
                        <span className="bg-green-100 text-green-700 text-xs font-black px-3 py-1 rounded-md uppercase tracking-wider">Lunas</span>
                        <span className="text-xs text-gray-400 font-mono font-medium">#INV-{Math.floor(Math.random() * 10000)}</span>
                      </div>
                      <span className="text-sm font-bold text-gray-500">2 hari lalu</span>
                    </div>
                    
                    <h3 className="font-bold text-xl text-dark mb-2 leading-snug">{product.title}</h3>
                    <p className="text-sm text-gray-500 mb-6 line-clamp-2 font-light leading-relaxed">{product.description}</p>
                    
                    <div className="mt-auto flex flex-wrap gap-3">
                      <button className="bg-primary text-white px-6 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-primary/90 hover:shadow-md transition-all active:scale-95">
                        <Download className="w-4 h-4" /> Download ZIP 
                      </button>
                      <button className="bg-white text-dark border border-gray-200 px-6 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-gray-50 hover:border-gray-300 transition-all">
                        <ExternalLink className="w-4 h-4 text-gray-400" /> Dokumentasi
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
