import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data';
import { formatCurrency } from '../lib/utils';
import { Trash2, ShieldCheck, ArrowRight, Lock, CreditCard, CheckCircle2, ChevronRight, X } from 'lucide-react';

export default function Cart() {
  const [showPayment, setShowPayment] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Mock cart items based on the first two products
  const cartItems = [
    { product: PRODUCTS[0], quantity: 1 },
    { product: PRODUCTS[1], quantity: 1 },
  ];

  const subtotal = cartItems.reduce((acc, item) => {
    const finalPrice = item.product.price - (item.product.price * (item.product.discount / 100));
    return acc + finalPrice * item.quantity;
  }, 0);
  
  const tax = subtotal * 0.11; // 11% PPN
  const total = subtotal + tax;

  const handleCheckout = () => {
    setShowPayment(true);
  };

  const handleSimulatePayment = () => {
    setTimeout(() => {
      setPaymentSuccess(true);
    }, 1500);
  };

  return (
    <div className="bg-[#FDFDFD] min-h-[80vh] py-12 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-4xl font-bold text-dark mb-10 tracking-tight">Checkout</h1>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Cart Items List */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden">
              <div className="p-8 border-b border-gray-100 hidden sm:grid grid-cols-12 gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                <div className="col-span-8">Detail Produk Digital</div>
                <div className="col-span-4 text-right">Harga</div>
              </div>

              <div className="divide-y divide-gray-50">
                {cartItems.map((item) => {
                  const finalPrice = item.product.price - (item.product.price * (item.product.discount / 100));
                  return (
                    <div key={item.product.id} className="p-8 flex flex-col sm:grid sm:grid-cols-12 gap-6 items-center hover:bg-gray-50/50 transition-colors">
                      <div className="col-span-8 flex gap-5 w-full items-center">
                        <Link to={`/product/${item.product.slug}`} className="w-28 h-28 p-2 rounded-2xl overflow-hidden flex-shrink-0 bg-white border border-gray-100 shadow-sm">
                          <img src={item.product.thumbnail} alt={item.product.title} className="w-full h-full object-cover rounded-xl" />
                        </Link>
                        <div className="flex flex-col justify-center flex-grow">
                          <Link to={`/product/${item.product.slug}`}>
                            <h3 className="font-bold text-lg text-dark hover:text-primary transition-colors line-clamp-2 mb-2 leading-snug">{item.product.title}</h3>
                          </Link>
                          <span className="text-xs font-bold text-green-700 bg-green-100/80 w-max px-3 py-1 rounded-full mb-3 uppercase tracking-wider">Lisensi Personal</span>
                          <button className="text-sm font-semibold text-red-500 hover:text-red-700 flex items-center gap-1.5 w-max transition-colors">
                            <Trash2 className="w-4 h-4" /> Hapus
                          </button>
                        </div>
                      </div>
                      <div className="col-span-4 text-right w-full sm:w-auto">
                        <div className="font-extrabold text-xl text-dark tracking-tight">{formatCurrency(finalPrice)}</div>
                        {item.product.discount > 0 && (
                          <div className="text-xs font-semibold text-gray-400 line-through mt-1">{formatCurrency(item.product.price)}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <Link to="/shop" className="inline-flex items-center gap-2 text-dark font-bold hover:text-primary transition-colors mt-8 bg-white border border-gray-200 px-6 py-3 rounded-full shadow-sm hover:shadow-md">
              ← Kembali Belanja
            </Link>
          </div>

          {/* Checkout Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-[2rem] shadow-[0_20px_40px_rgb(0,0,0,0.06)] border border-gray-100 p-8 sticky top-28 auto-rows-max">
              <h2 className="font-bold text-2xl text-dark mb-6 tracking-tight">Ringkasan</h2>
              
              <div className="mb-6">
                <div className="flex">
                  <input type="text" placeholder="Kode Promo" className="flex-1 bg-gray-50 border border-gray-200 rounded-l-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm font-medium" />
                  <button className="bg-dark text-white px-6 py-3 rounded-r-xl text-sm font-bold hover:bg-gray-800 transition-colors">Terapkan</button>
                </div>
              </div>

              <div className="space-y-4 mb-6 text-gray-600 font-medium p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-dark">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>PPN (11%)</span>
                  <span className="font-bold text-dark">{formatCurrency(tax)}</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between items-center mt-2">
                  <span className="font-bold text-lg text-dark">Total</span>
                  <span className="font-extrabold text-3xl text-primary tracking-tight">{formatCurrency(total)}</span>
                </div>
              </div>

              <button 
                onClick={handleCheckout}
                className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary/90 hover:shadow-[0_8px_20px_rgb(37,99,235,0.3)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 mb-4"
              >
                Bayar Sekarang <ArrowRight className="w-5 h-5 ml-1" />
              </button>
              
              <div className="flex items-center justify-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-widest mt-6">
                <Lock className="w-4 h-4 text-gray-400" />
                <span>SSL Encrypted Payment</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Midtrans Simulation Modal */}
      {showPayment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-dark/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl w-full max-w-[420px] overflow-hidden shadow-2xl flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
            
            {paymentSuccess ? (
              <div className="p-10 text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-2">Pembayaran Berhasil!</h3>
                <p className="text-gray-500 mb-8 font-light">Link download telah dikirim ke email Anda dan tersedia di Dashboard.</p>
                <Link to="/dashboard" className="w-full bg-dark text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors">
                  Ke Dashboard Saya
                </Link>
              </div>
            ) : (
              <>
                <div className="bg-gray-50/80 p-5 px-6 border-b border-gray-100 flex justify-between items-center sticky top-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded text-white flex items-center justify-center font-bold text-sm">M</div>
                    <div>
                      <div className="text-sm font-bold text-dark">Mizu Design</div>
                      <div className="text-xs text-gray-500 font-mono">Order ID: #{Math.floor(Math.random() * 100000)}</div>
                    </div>
                  </div>
                  <button onClick={() => setShowPayment(false)} className="text-gray-400 hover:text-gray-700 bg-white p-1 rounded-full border border-gray-200 shadow-sm">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="overflow-y-auto p-6 bg-[#F9FAFB] flex-grow">
                  <div className="text-center mb-8">
                     <div className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-2">Total Pembayaran</div>
                     <div className="text-4xl font-black text-dark tracking-tighter">{formatCurrency(total)}</div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1 mb-2">Metode Pembayaran</div>
                    
                    <button onClick={handleSimulatePayment} className="w-full bg-white border border-gray-200 p-4 rounded-2xl flex items-center justify-between hover:border-primary hover:shadow-md transition-all group">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-8 bg-indigo-50 rounded flex items-center justify-center border border-indigo-100">
                           <CreditCard className="w-5 h-5 text-indigo-500" />
                        </div>
                        <span className="font-bold text-dark text-sm">Kartu Kredit / Debit</span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
                    </button>
                    
                    <button onClick={handleSimulatePayment} className="w-full bg-white border border-gray-200 p-4 rounded-2xl flex items-center justify-between hover:border-primary hover:shadow-md transition-all group">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-8 bg-blue-50 rounded flex items-center justify-center border border-blue-100 font-bold text-blue-600 text-sm">
                           VA
                        </div>
                        <span className="font-bold text-dark text-sm">Transfer Bank (VA)</span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
                    </button>
                    
                    <button onClick={handleSimulatePayment} className="w-full bg-white border border-gray-200 p-4 rounded-2xl flex items-center justify-between hover:border-primary hover:shadow-md transition-all group">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-8 bg-emerald-50 rounded flex items-center justify-center border border-emerald-100 font-bold text-emerald-600 text-xs text-center leading-none">
                           QRIS
                        </div>
                        <span className="font-bold text-dark text-sm">GoPay / ShopeePay / QRIS</span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
                    </button>
                  </div>
                </div>
                
                <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-center gap-2">
                   <ShieldCheck className="w-4 h-4 text-green-500" />
                   <span className="text-xs font-semibold text-gray-500">Secured Checkout by Midtrans</span>
                </div>
              </>
            )}

          </div>
        </div>
      )}
    </div>
  );
}
