import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Boxes, Mail, Lock, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  // If already logged in, redirect
  if (currentUser) {
    if (currentUser.role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/dashboard');
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Get role from firestore
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        if (userData.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/dashboard');
        }
      } else {
        setError('User record not found.');
      }
    } catch (err: any) {
      setError(err.message || 'Gagal masuk. Periksa kembali email dan sandi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#111827] flex justify-center font-sans relative overflow-x-hidden overflow-y-auto px-4 py-12 md:py-20 lg:py-24">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-[500px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md mx-auto"
        >
          {/* Back navigation / Logo */}
          <div className="flex justify-center mb-16">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center group-hover:bg-gray-700 transition-colors shadow-lg">
                <span className="text-white font-bold text-3xl font-serif leading-none">水</span>
              </div>
              <span className="font-bold text-3xl text-white tracking-tight">
                Mizustore
              </span>
            </Link>
          </div>

          <div className="mb-12 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Selamat Datang Kembali
            </h1>
            <p className="text-gray-400 text-lg">
              Masuk ke akunmu untuk mengelola unduhan, license, dan invoice.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-xl flex items-center gap-3 text-sm">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                {error}
              </div>
            )}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">
                Alamat Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-gray-500" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="nama@email.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <label className="text-sm font-medium text-gray-300">
                  Kata Sandi
                </label>
                <Link
                  to="#"
                  className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Lupa sandi?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5 text-gray-500" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full relative group overflow-hidden bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-lg py-3.5 rounded-xl transition-all h-[56px]"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? "Menghubungkan..." : "Masuk ke Dasbor"}{" "}
                {!loading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </span>
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-800 flex items-center justify-center">
            <p className="text-gray-400">
              Belum punya akun?{" "}
              <Link
                to="/register"
                className="font-semibold text-white hover:text-indigo-400 transition-colors"
              >
                Daftar Gratis Sekarang
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
