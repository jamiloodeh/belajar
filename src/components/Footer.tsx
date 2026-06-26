import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1C] text-gray-400 pt-20 pb-10 border-t border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-2 mb-4 inline-flex">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl font-serif leading-none">水</span>
              </div>
              <span className="font-bold text-2xl text-white tracking-tight">
                Mizustore
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Platform marketplace produk digital premium. Kami menyediakan
              template Canva, Preset Lightroom, UI Kit, dan assets digital
              berkualitas tinggi untuk kebutuhan kreatif Anda.
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:scale-110"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:scale-110"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:scale-110"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:scale-110"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-6">
            <h3 className="text-white font-semibold mb-6 tracking-wide">
              Kategori Populer
            </h3>
            <ul className="space-y-4">
              {[
                "Canva Templates",
                "PSD Templates",
                "Lightroom Presets",
                "UI Kits",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={`/shop`}
                    className="hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-primary transition-colors"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-6 tracking-wide">
              Informasi
            </h3>
            <ul className="space-y-4">
              {[
                "Tentang Kami",
                "Cara Pembelian",
                "Syarat & Ketentuan",
                "FAQ",
              ].map((item) => {
                let to = "#";
                if (item === "Tentang Kami") to = "/about";
                if (item === "Cara Pembelian") to = "/how-to-buy";
                if (item === "Syarat & Ketentuan") to = "/terms";
                if (item === "FAQ") to = "/faq";

                return (
                  <li key={item}>
                    <Link
                      to={to}
                      className="hover:text-white transition-colors text-sm flex items-center gap-1 group"
                    >
                      {item}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-6 tracking-wide">
              Hubungi Kami
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@mizudesign.com"
                  className="hover:text-white transition-colors text-sm flex items-center gap-3"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  hello@mizudesign.com
                </a>
              </li>
              <li>
                <span className="text-sm flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary" />
                  +62 812 3456 7890
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Mizu Design. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {["MIDTRANS", "QRIS", "GOPAY", "SHOPEEPAY", "VA BCA"].map(
              (method) => (
                <div
                  key={method}
                  className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-md text-xs font-semibold tracking-wider text-gray-400"
                >
                  {method}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
