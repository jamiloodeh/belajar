import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Boxes, Mail, Lock, User as UserIcon, ArrowRight, AlertCircle } from "lucide-react";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../lib/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  if (currentUser) {
    navigate('/dashboard');
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError('Sandi tidak cocok.');
    }
    
    setLoading(true);
    setError('');

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      await updateProfile(user, { displayName: name });

      // Create user doc in firestore
      await setDoc(doc(db, 'users', user.uid), {
        id: user.uid,
        name,
        email,
        role: 'customer', // Default role
        photo: '',
        createdAt: serverTimestamp()
      });

      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Gagal mendaftar.');
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
          <div className="flex justify-center mb-10">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center group-hover:bg-gray-700 transition-colors shadow-lg">
                <span className="text-white font-bold text-3xl font-serif leading-none">水</span>
              </div>
              <span className="font-bold text-3xl text-white tracking-tight">
                Mizustore
              </span>
            </Link>
          </div>

          <div className="mb-10 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Buat Akun Baru
            </h1>
            <p className="text-gray-400 text-lg">
              Bergabunglah dengan ribuan desainer dan tingkatkan alur kerja Anda
              hari ini.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleRegister}>
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-xl flex items-center gap-3 text-sm">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                {error}
              </div>
            )}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">
                Nama Lengkap
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <UserIcon className="w-5 h-5 text-gray-500" />
                </div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

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
              <label className="text-sm font-medium text-gray-300 ml-1">
                Kata Sandi
              </label>
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

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">
                Konfirmasi Kata Sandi
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5 text-gray-500" />
                </div>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="flex items-start gap-3 mt-4 mb-2 ml-1">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  className="w-4 h-4 bg-gray-800 border-gray-600 rounded focus:ring-indigo-500 focus:ring-2 text-indigo-600"
                  required
                />
              </div>
              <div className="text-sm">
                <label htmlFor="terms" className="font-medium text-gray-400">
                  Saya menyetujui{" "}
                  <Link
                    to="#"
                    className="text-indigo-400 hover:text-indigo-300"
                  >
                    Syarat Ketentuan
                  </Link>{" "}
                  dan{" "}
                  <Link
                    to="#"
                    className="text-indigo-400 hover:text-indigo-300"
                  >
                    Kebijakan Privasi
                  </Link>
                  .
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full relative group overflow-hidden bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-lg py-3.5 rounded-xl transition-all h-[56px] mt-2"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? "Mendaftarkan..." : "Buat Akun Sekarang"}{" "}
                {!loading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </span>
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-800 flex items-center justify-center">
            <p className="text-gray-400">
              Sudah memiliki akun?{" "}
              <Link
                to="/login"
                className="font-semibold text-white hover:text-indigo-400 transition-colors"
              >
                Masuk di sini
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
