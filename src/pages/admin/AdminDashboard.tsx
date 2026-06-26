import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, ChevronDown, Bell
} from 'lucide-react';
import { PRODUCTS } from '../../data';
import { formatCurrency } from '../../lib/utils';
import { BarChart, Bar, XAxis, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';
import { AdminSidebar } from '../../components/AdminSidebar';
import { AdminProductList } from '../../components/AdminProductList';
import { AdminBlogList } from '../../components/AdminBlogList';
import { useAuth } from '../../contexts/AuthContext';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const { currentUser } = useAuth();
  
  const stats = [
    { label: 'Total Pendapatan', value: formatCurrency(24500000), trend: '+12.5%', isUp: true },
    { label: 'Pesanan Sukses', value: '342', trend: '+8.2%', isUp: true },
    { label: 'Total Produk', value: '45', trend: '0%', isUp: true },
    { label: 'User Aktif', value: '1,204', trend: '+18.1%', isUp: true },
  ];

  const chartData = [
    { name: 'Jan', total: 4000 },
    { name: 'Feb', total: 3000 },
    { name: 'Mar', total: 2000 },
    { name: 'Apr', total: 2780 },
    { name: 'May', total: 1890 },
    { name: 'Jun', total: 2390 },
    { name: 'Jul', total: 3490 },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'products':
        return <AdminProductList />;
      case 'blog':
        return <AdminBlogList />;
      case 'dashboard':
      default:
        return (
          <>
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Overview Bisnis</h2>
                <p className="text-gray-500 text-sm mt-1">Ringkasan performa penjualan hari ini.</p>
              </div>
            </div>

            {/* KPI Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-50 to-white rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
                  <p className="text-sm font-semibold text-gray-500 mb-2 relative z-10">{stat.label}</p>
                  <h3 className="text-3xl font-black text-gray-900 tracking-tight relative z-10">{stat.value}</h3>
                  <div className={`mt-3 text-xs font-bold px-2 py-1 rounded inline-flex ${stat.isUp ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                    {stat.trend} dari bulan lalu
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Chart Area */}
              <div className="lg:col-span-2 bg-white rounded-2xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-gray-100 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg text-gray-900">Grafik Penjualan</h3>
                  <select className="bg-gray-50 border border-gray-200 text-gray-700 text-xs font-bold rounded-lg p-2 outline-none">
                    <option>7 Hari Terakhir</option>
                    <option>30 Hari Terakhir</option>
                    <option>Tahun Ini</option>
                  </select>
                </div>
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12, fontWeight: 600}} dy={10} />
                      <RechartsTooltip 
                        cursor={{fill: '#F3F4F6'}}
                        contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', fontWeight: 'bold'}}
                      />
                      <Bar dataKey="total" fill="#2563EB" radius={[4, 4, 0, 0]} barSize={30} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Quick Actions & Top Products */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-gray-100 p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-5 border-b border-gray-50 pb-4">Top Produk</h3>
                  <div className="space-y-4">
                    {PRODUCTS.slice(0, 4).map((product, i) => (
                      <div key={product.id} className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-gray-50 border border-gray-100 p-1">
                          <img src={product.thumbnail} alt="" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-gray-900 truncate group-hover:text-blue-600 transition-colors">{product.title}</p>
                          <p className="text-xs font-medium text-gray-500 mt-0.5">{product.sales} Terjual</p>
                        </div>
                        <div className="font-bold text-sm text-gray-900 bg-gray-50 px-2 py-1 rounded">
                          #{i+1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-sans overflow-hidden text-gray-900">
      
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Area */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        
        {/* Header */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 flex justify-between items-center px-8 flex-shrink-0 sticky top-0 z-10 w-full">
          <div className="relative w-64 hidden md:block">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Cari invoice, email..." className="w-full bg-gray-50 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-600/20 text-gray-900 outline-none font-medium" />
          </div>
          
          <div className="flex items-center gap-5 ml-auto">
            <button className="relative p-2 text-gray-500 hover:bg-gray-50 rounded-full transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-sm">
                 {currentUser?.name?.[0] || 'A'}
              </div>
              <div className="hidden md:block text-sm">
                <p className="font-bold text-gray-900 leading-none">{currentUser?.name || 'Admin Utama'}</p>
                <p className="text-gray-500 text-xs capitalize">{currentUser?.role || 'Super Admin'}</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar pb-24">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
