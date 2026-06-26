import React, { useState, useEffect } from 'react';
import { 
  Plus, Search, Edit2, Trash2, X, Save
} from 'lucide-react';
import { collection, query, onSnapshot, doc, addDoc, updateDoc, deleteDoc, serverTimestamp, orderBy } from 'firebase/firestore';
import { db } from '../lib/firebase';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  thumbnail: string;
  author: string;
  date: string;
  slug: string;
}

export const AdminBlogList: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: '',
    excerpt: '',
    content: '',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    author: 'Admin',
    date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
  });

  useEffect(() => {
    const q = query(collection(db, 'blogPosts'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as BlogPost[];
      setPosts(docs);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const handleOpenModal = (post?: BlogPost) => {
    if (post) {
      setEditingPost(post);
      setFormData(post);
    } else {
      setEditingPost(null);
      setFormData({
        title: '',
        excerpt: '',
        content: '',
        thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
        author: 'Admin',
        date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
      });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const dataToSave = {
        ...formData,
        slug: formData.title?.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
        updatedAt: serverTimestamp(),
      };

      if (editingPost) {
        await updateDoc(doc(db, 'blogPosts', editingPost.id), dataToSave);
      } else {
        await addDoc(collection(db, 'blogPosts'), {
          ...dataToSave,
          createdAt: serverTimestamp(),
        });
      }
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error saving post: ", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Hapus artikel ini?')) {
      await deleteDoc(doc(db, 'blogPosts', id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Manajemen Konten Blog</h2>
          <p className="text-gray-500 text-sm mt-1">Publikasikan update dan artikel terbaru.</p>
        </div>
        <button 
          onClick={() => handleOpenModal()}
          className="bg-blue-600 text-white font-bold py-2.5 px-5 rounded-xl flex items-center gap-2 hover:bg-blue-700 shadow-lg shadow-blue-600/20 text-sm"
        >
          <Plus className="w-4 h-4" /> Artikel Baru
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <p>Memuat konten...</p>
        ) : posts.map(post => (
          <div key={post.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group">
            <div className="relative h-48 overflow-hidden">
              <img src={post.thumbnail} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="text-[10px] font-bold text-white uppercase tracking-widest bg-blue-600 px-2 py-1 rounded">{post.date}</span>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2">{post.title}</h3>
              <p className="text-gray-500 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                <span className="text-xs font-bold text-gray-400">By {post.author}</span>
                <div className="flex gap-2">
                  <button onClick={() => handleOpenModal(post)} className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"><Edit2 className="w-4 h-4" /></button>
                  <button onClick={() => handleDelete(post.id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden">
             <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900">{editingPost ? 'Edit Artikel' : 'Tulis Artikel Baru'}</h3>
              <button onClick={() => setIsModalOpen(false)} className="p-2 text-gray-400 hover:bg-gray-100 rounded-full transition-colors"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              <input 
                type="text" 
                placeholder="Judul Artikel"
                value={formData.title}
                onChange={e => setFormData({...formData, title: e.target.value})}
                className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600/20 text-gray-900 font-bold text-lg"
                required
              />
              <input 
                type="text" 
                placeholder="Thumbnail URL"
                value={formData.thumbnail}
                onChange={e => setFormData({...formData, thumbnail: e.target.value})}
                className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600/20 text-gray-900"
              />
              <textarea 
                placeholder="Ringkasan singkat (excerpt)"
                value={formData.excerpt}
                onChange={e => setFormData({...formData, excerpt: e.target.value})}
                className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600/20 text-gray-900 resize-none"
                rows={2}
                required
              ></textarea>
              <textarea 
                placeholder="Isi konten lengkap..."
                value={formData.content}
                onChange={e => setFormData({...formData, content: e.target.value})}
                className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600/20 text-gray-900 resize-none"
                rows={8}
                required
              ></textarea>
              <div className="pt-4 flex gap-3">
                <button type="submit" className="flex-1 bg-blue-600 text-white font-bold py-4 rounded-2xl hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2">
                  <Save className="w-5 h-5" /> {editingPost ? 'Simpan' : 'Terbitkan Sekarang'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
