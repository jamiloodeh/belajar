import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X, Search, Zap, Boxes, User } from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const location = useLocation();

  const { currentUser, isAdmin } = useAuth();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Kategori", path: "/categories" },
    { name: "Bundle", path: "/bundle" },
    { name: "Best Seller", path: "/shop?sort=popular" },
    { name: "Promo", path: "/promo" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header className="w-full sticky top-0 z-[100] flex flex-col shadow-md bg-[#111827]">
      {showBanner && (
        <div className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] px-4 py-2.5 flex items-center justify-center gap-2 text-white font-medium text-sm relative">
          <Zap className="w-4 h-4 fill-white flex-shrink-0" />
          <span className="text-center">
            Ramadan Sale — Diskon 70% untuk semua bundle! Gunakan kode:{" "}
            <strong>RAMADAN70</strong>
          </span>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-4 p-1 rounded-md hover:bg-white/20 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <div
        className="border-b border-gray-800 w-full overflow-x-auto py-3 md:py-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="w-[1200px] xl:max-w-[1600px] xl:w-full mx-auto px-4 md:px-6 xl:px-8">
          <div className="flex justify-between items-center h-12 md:h-16 gap-6">
            <div className="flex items-center gap-6 xl:gap-10">
              {/* Logo */}
              <Link to="/" className="flex-shrink-0 flex items-center gap-3">
                <div className="w-8 h-8 md:w-9 md:h-9 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg font-bold font-serif leading-none">
                    水
                  </span>
                </div>
                <span className="font-bold text-lg md:text-xl text-white tracking-tight">
                  Mizustore
                </span>
              </Link>

              {/* Nav */}
              <nav className="flex items-center space-x-1 lg:space-x-2">
                {navLinks.map((link) => {
                  const isActive =
                    location.pathname === link.path && link.name === "Home";
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 whitespace-nowrap ${isActive ? "bg-[#1F2937] text-white" : "text-gray-300 hover:text-white hover:bg-[#1F2937]"}`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Right actions */}
            <div className="flex items-center space-x-3">
              <div className="relative group flex-shrink-0">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400 group-focus-within:text-white transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder="Cari template..."
                  className="block w-48 lg:w-64 xl:w-72 pl-9 pr-3 py-2 border border-[#374151] rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-[#1F2937] transition-all"
                />
              </div>

              <Link
                to="/cart"
                className="relative flex items-center gap-2 border border-[#374151] hover:bg-[#1F2937] text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors flex-shrink-0 whitespace-nowrap"
              >
                <ShoppingCart className="w-4 h-4 text-gray-300" />
                <span>Keranjang</span>
                <span className="absolute -top-2 -right-2 w-5 h-5 text-[10px] font-bold text-white bg-red-500 rounded-full flex items-center justify-center border-2 border-[#111827]">
                  3
                </span>
              </Link>

              {currentUser ? (
                <>
                  <Link
                    to={isAdmin ? "/admin" : "/dashboard"}
                    className="flex items-center gap-2 border border-[#374151] hover:bg-[#1F2937] text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors flex-shrink-0 whitespace-nowrap"
                  >
                    <User className="w-4 h-4 text-gray-300" />
                    <span className="max-w-[100px] truncate">{currentUser.name}</span>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="border border-[#374151] hover:bg-[#1F2937] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex-shrink-0 whitespace-nowrap"
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    className="bg-[#4F46E5] hover:bg-[#4338CA] text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm transition-all whitespace-nowrap flex-shrink-0"
                  >
                    Daftar Gratis
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
