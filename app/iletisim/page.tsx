"use client";

import { motion } from "framer-motion";
import { Mail, Instagram, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Iletisim() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus("success");
        e.currentTarget.reset();
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 text-center">
            İLETİŞİM
          </h1>
          <div className="w-32 h-1 bg-primary mx-auto mb-16" />
          <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Bizimle iletişime geçin, 68 Riders ailesinin bir parçası olun
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* İletişim Bilgileri */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-panel p-8 rounded-xl">
              <h2 className="text-2xl font-display font-bold mb-6">
                İLETİŞİM BİLGİLERİ
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-bold mb-1">E-posta</h3>
                    <a
                      href="mailto:68Riders@protonmail.com"
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      68Riders@protonmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Instagram className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-bold mb-1">Instagram</h3>
                    <a
                      href="https://instagram.com/68_riders"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      @68_riders
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-bold mb-1">Telefon</h3>
                    <a
                      href="tel:+905XXXXXXXXX"
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      +90 5XX XXX XX XX
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-bold mb-1">Adres</h3>
                    <p className="text-gray-400">
                      68 Riders Merkez
                      <br />
                      İstanbul, Türkiye
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-xl">
              <h2 className="text-2xl font-display font-bold mb-4">
                SOSYAL MEDYA
              </h2>
              <p className="text-gray-400 mb-6">
                Bizi sosyal medyada takip edin, etkinliklerden haberdar olun!
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/68_riders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors duration-300"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-xl bg-primary/10 border-primary/30">
              <h3 className="text-xl font-display font-bold mb-3 text-primary">
                ÜYELİK BAŞVURUSU
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                68 Riders ailesine katılmak istiyorsanız, formu doldurun. 
                Başvurunuz değerlendirildikten sonra sizinle iletişime geçeceğiz.
              </p>
            </div>
          </motion.div>

          {/* Üyelik Başvuru Formu */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-xl space-y-6">
              <input type="hidden" name="access_key" value="02c6973c-02be-4582-bcad-c6d80a4e6dd4" />
              <input type="hidden" name="subject" value="Yeni Üyelik Başvurusu - 68 Riders" />
              <input type="hidden" name="from_name" value="68 Riders Web Sitesi" />
              
              <h2 className="text-2xl font-display font-bold mb-6">
                ÜYELİK BAŞVURU FORMU
              </h2>

              {submitStatus === "success" && (
                <div className="bg-green-600/20 border border-green-600 rounded-lg p-4 flex items-center gap-3">
                  <CheckCircle className="text-green-600" size={24} />
                  <div>
                    <p className="font-bold text-green-600">Başvurunuz Alındı!</p>
                    <p className="text-sm text-gray-300">En kısa sürede size dönüş yapacağız.</p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-600/20 border border-red-600 rounded-lg p-4">
                  <p className="font-bold text-red-600">Bir hata oluştu!</p>
                  <p className="text-sm text-gray-300">Lütfen daha sonra tekrar deneyin.</p>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-bold mb-2">
                  Adınız Soyadınız *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-dark/50 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  placeholder="Adınız Soyadınız"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold mb-2">
                  E-posta *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-dark/50 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  placeholder="ornek@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 bg-dark/50 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  placeholder="+90 5XX XXX XX XX"
                />
              </div>

              <div>
                <label htmlFor="motorcycle" className="block text-sm font-bold mb-2">
                  Motosiklet Marka/Model *
                </label>
                <input
                  type="text"
                  id="motorcycle"
                  name="motorcycle"
                  required
                  className="w-full px-4 py-3 bg-dark/50 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  placeholder="Örn: Yamaha R6, Honda CBR"
                />
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-bold mb-2">
                  Sürüş Deneyimi *
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  className="w-full px-4 py-3 bg-dark/50 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="">Seçiniz</option>
                  <option value="0-1 Yıl">0-1 Yıl</option>
                  <option value="1-3 Yıl">1-3 Yıl</option>
                  <option value="3-5 Yıl">3-5 Yıl</option>
                  <option value="5+ Yıl">5+ Yıl</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold mb-2">
                  Neden 68 Riders'a Katılmak İstiyorsunuz? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark/50 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Kendinizden ve neden katılmak istediğinizden bahsedin..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 bg-primary text-white font-bold tracking-wider transition-colors duration-300 flex items-center justify-center gap-3 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-white hover:text-dark"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    GÖNDERİLİYOR...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    BAŞVURU GÖNDER
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                * Tüm alanlar zorunludur. Başvurunuz değerlendirildikten sonra sizinle iletişime geçeceğiz.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
