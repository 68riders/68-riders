"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  Calendar, 
  Image as ImageIcon, 
  Mail, 
  Plus, 
  Trash2, 
  Edit,
  Home,
  Info,
  Users as UsersIcon,
  Settings,
  Eye,
  Save,
  X,
  Shield,
  AlertTriangle
} from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if already authenticated
    const auth = sessionStorage.getItem("admin_auth_68riders");
    if (auth === "authenticated") {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Şifre kontrolü - Environment variable'dan gelecek
    const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "Aksaray6878.";
    
    if (password === correctPassword) {
      sessionStorage.setItem("admin_auth_68riders", "authenticated");
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Yanlış şifre! Tekrar deneyin.");
      setPassword("");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_auth_68riders");
    setIsAuthenticated(false);
    setPassword("");
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-dark flex items-center justify-center">
        <div className="text-white text-xl">Yükleniyor...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 bg-dark flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-panel p-8 rounded-xl max-w-md w-full"
        >
          <div className="text-center mb-8">
            <Shield size={48} className="text-primary mx-auto mb-4" />
            <h1 className="text-3xl font-display font-bold mb-2">Admin Paneli</h1>
            <p className="text-gray-400">Devam etmek için şifrenizi girin</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2">Şifre</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-dark/50 border border-white/10 rounded-lg focus:border-primary focus:outline-none"
                placeholder="Şifrenizi girin"
                autoFocus
              />
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-500 rounded-lg p-3 text-sm text-red-500">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-white hover:text-dark transition-colors"
            >
              GİRİŞ YAP
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => router.push("/")}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              ← Ana Sayfaya Dön
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // Admin panel içeriği buraya gelecek - şimdilik import edelim
  return (
    <div className="min-h-screen bg-dark pt-20 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-display font-bold">Admin Paneli</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Çıkış Yap
          </button>
        </div>
        
        <div className="glass-panel p-8 rounded-xl text-center">
          <p className="text-xl mb-4">Admin paneli yükleniyor...</p>
          <p className="text-gray-400">Lütfen bekleyin, sayfa yeniden yüklenecek.</p>
        </div>
      </div>
    </div>
  );
}
