import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Package, ShoppingBag, Users, Settings, 
  TrendingUp, CreditCard, LogOut
} from 'lucide-react';
import { auth } from '../lib/firebase';
import { signOut } from 'firebase/auth';

interface AdminSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({ activeTab, setActiveTab }) => {
  const location = useLocation();

  const handleLogout = () => {
    signOut(auth);
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, category: 'Analytics & Store' },
    { id: 'orders', label: 'Pesanan', icon: ShoppingBag, category: 'Analytics & Store' },
    { id: 'products', label: 'Katalog Produk', icon: Package, category: 'Analytics & Store' },
    { id: 'blog', label: 'Konten Blog', icon: LayoutDashboard, category: 'Analytics & Store' },
    { id: 'users', label: 'Customers', icon: Users, category: 'Analytics & Store' },
    { id: 'transactions', label: 'Transaksi', icon: CreditCard, category: 'Finansial & Setelan' },
    { id: 'reports', label: 'Laporan PDF/CSV', icon: TrendingUp, category: 'Finansial & Setelan' },
    { id: 'settings', label: 'Pengaturan Sistem', icon: Settings, category: 'Finansial & Setelan' },
  ];

  const categories = Array.from(new Set(navItems.map(item => item.category)));

  return (
    <div className="w-64 bg-white border-r border-gray-100 flex-shrink-0 flex flex-col z-20 shadow-[4px_0_24px_rgb(0,0,0,0.02)]">
      <div className="h-20 flex items-center px-6 border-b border-gray-50">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center shadow-md">
            <span className="font-bold text-white text-lg">M</span>
          </div>
          <span className="font-bold text-xl text-black tracking-tight">Admin<span className="text-blue-600 font-normal">Panel</span></span>
        </Link>
      </div>
      
      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-4 custom-scrollbar">
        {categories.map(category => (
          <div key={category} className="space-y-1">
            <div className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-3 px-3">{category}</div>
            {navItems.filter(item => item.category === category).map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
                  activeTab === item.id 
                    ? 'bg-gray-50 text-black font-bold' 
                    : 'text-gray-500 font-medium hover:bg-gray-50 hover:text-black'
                }`}
              >
                <item.icon className={`w-5 h-5 ${activeTab === item.id ? 'text-blue-600' : ''}`} /> 
                {item.label}
              </button>
            ))}
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-50">
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-red-500 font-medium hover:bg-red-50 transition-all"
        >
          <LogOut className="w-5 h-5" /> Keluar
        </button>
      </div>
    </div>
  );
};
