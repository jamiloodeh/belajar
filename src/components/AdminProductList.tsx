import React, { useState, useEffect } from 'react';
import { 
  Plus, Search, MoreVertical, Edit2, Trash2, ExternalLink, 
  ChevronLeft, ChevronRight, X, Upload, Save
} from 'lucide-react';
import { collection, query, onSnapshot, doc, addDoc, updateDoc, deleteDoc, serverTimestamp, orderBy } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Product, Category } from '../types';
import { formatCurrency } from '../lib/utils';
import { CATEGORIES } from '../data';

export const AdminProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Form State
  const [formData, setFormData] = useState<Partial<Product>>({
    title: '',
    category_id: CATEGORIES[0].id,
    price: 0,
    discount: 0,
    description: '',
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    slug: '',
    rating: 5,
    sales: 0
  });

  useEffect(() => {
    const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const prods = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Product[];
      setProducts(prods);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const handleOpenModal = (product?: Product) => {
    if (product) {
      setEditingProduct(product);
      setFormData(product);
    } else {
      setEditingProduct(null);
      setFormData({
        title: '',
        category_id: CATEGORIES[0].id,
        price: 0,
        discount: 0,
        description: '',
        thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
        slug: '',
        rating: 5,
        sales: 0
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const dataToSave = {
        ...formData,
        slug: formData.title?.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
        updatedAt: serverTimestamp(),
      };

      if (editingProduct) {
        await updateDoc(doc(db, 'products', editingProduct.id), dataToSave);
      } else {
        await addDoc(collection(db, 'products'), {
          ...dataToSave,
          createdAt: serverTimestamp(),
          sales: 0,
          rating: 5
        });
      }
      handleCloseModal();
    } catch (error) {
      console.error("Error saving product: ", error);
      alert("Gagal menyimpan produk.");
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Yakin ingin menghapus produk ini?')) {
      try {
        await deleteDoc(doc(db, 'products', id));
      } catch (error) {
        console.error("Error deleting product: ", error);
      }
    }
  };

  const filteredProducts = products.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Katalog Produk</h2>
          <p className="text-gray-500 text-sm mt-1">Kelola semua produk digital yang Anda jual.</p>
        </div>
        <button 
          onClick={() => handleOpenModal()}
          className="bg-blue-600 text-white font-bold py-2.5 px-5 rounded-xl flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 text-sm"
        >
          <Plus className="w-4 h-4" /> Tambah Produk
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] overflow-hidden">
        <div className="p-4 border-b border-gray-50 flex items-center gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Cari produk..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-50 border-none rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-600/20 text-gray-900 outline-none font-medium" 
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-50/50 text-gray-500 font-bold text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Produk</th>
                <th className="px-6 py-4">Kategori</th>
                <th className="px-6 py-4">Harga</th>
                <th className="px-6 py-4">Terjual</th>
                <th className="px-6 py-4">Rating</th>
                <th className="px-6 py-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-gray-600 font-medium">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-400">Memuat produk...</td>
                </tr>
              ) : filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-400">Tidak ada produk ditemukan.</td>
                </tr>
              ) : (
                filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden border border-gray-100 flex-shrink-0">
                          <img src={product.thumbnail} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="max-w-[200px]">
                          <p className="font-bold text-gray-900 truncate">{product.title}</p>
                          <p className="text-xs text-gray-400 truncate">{product.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-blue-50 text-blue-600 px-2.5 py-1 rounded-md text-xs font-bold border border-blue-100">
                        {CATEGORIES.find(c => c.id === product.category_id)?.name || 'Uncategorized'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-bold text-gray-900">{formatCurrency(product.price)}</p>
                      {product.discount > 0 && <p className="text-[10px] text-red-500 font-black">-{product.discount}% OFF</p>}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        <ShoppingBag className="w-3.5 h-3.5 text-gray-400" />
                        {product.sales}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 font-bold text-yellow-500">
                        {product.rating.toFixed(1)}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button 
                          onClick={() => handleOpenModal(product)}
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(product.id)}
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleCloseModal}></div>
          <div className="relative bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
              <h3 className="text-xl font-bold text-gray-900">{editingProduct ? 'Edit Produk' : 'Tambah Produk Baru'}</h3>
              <button onClick={handleCloseModal} className="p-2 text-gray-400 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-gray-700">Nama Produk</label>
                <input 
                  type="text" 
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full bg-gray-50 border-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600/20 text-gray-900 font-medium transition-all"
                  placeholder="Contoh: Social Media Kit Canva"
                  required 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-gray-700">Kategori</label>
                  <select 
                    value={formData.category_id}
                    onChange={(e) => setFormData({...formData, category_id: e.target.value})}
                    className="w-full bg-gray-50 border-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600/20 text-gray-900 font-medium transition-all"
                  >
                    {CATEGORIES.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-gray-700">Harga (Rp)</label>
                  <input 
                    type="number" 
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: Number(e.target.value)})}
                    className="w-full bg-gray-50 border-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600/20 text-gray-900 font-medium transition-all"
                    required 
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-gray-700">Diskon (%)</label>
                  <input 
                    type="number" 
                    value={formData.discount}
                    onChange={(e) => setFormData({...formData, discount: Number(e.target.value)})}
                    className="w-full bg-gray-50 border-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600/20 text-gray-900 font-medium transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-gray-700">Skor Rating (1-5)</label>
                  <input 
                    type="number" 
                    step="0.1"
                    max="5"
                    value={formData.rating}
                    onChange={(e) => setFormData({...formData, rating: Number(e.target.value)})}
                    className="w-full bg-gray-50 border-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600/20 text-gray-900 font-medium transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-gray-700">Thumbnail URL</label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={formData.thumbnail}
                    onChange={(e) => setFormData({...formData, thumbnail: e.target.value})}
                    className="flex-1 bg-gray-50 border-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600/20 text-gray-900 font-medium transition-all"
                    placeholder="https://images.unsplash.com/..."
                    required 
                  />
                  <div className="w-12 h-12 rounded-xl border-2 border-dashed border-gray-100 flex items-center justify-center bg-gray-50 overflow-hidden">
                    {formData.thumbnail ? <img src={formData.thumbnail} alt="" className="w-full h-full object-cover" /> : <Upload className="w-4 h-4 text-gray-400" />}
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-gray-700">Deskripsi Produk</label>
                <textarea 
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows={4}
                  className="w-full bg-gray-50 border-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600/20 text-gray-900 font-medium transition-all resize-none"
                  required
                ></textarea>
              </div>

              <div className="pt-4 flex gap-3">
                <button 
                  type="button" 
                  onClick={handleCloseModal}
                  className="flex-1 px-6 py-3.5 border border-gray-100 text-gray-700 font-bold rounded-2xl hover:bg-gray-50 transition-all shadow-sm"
                >
                  Batal
                </button>
                <button 
                  type="submit"
                  className="flex-1 px-6 py-3.5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
                >
                  <Save className="w-5 h-5" />
                  {editingProduct ? 'Simpan Perubahan' : 'Terbitkan Produk'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
