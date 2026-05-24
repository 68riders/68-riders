"use client";

import LoadingScreen from "@/components/LoadingScreen";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Video'yu başlat (sessiz)
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log("Video autoplay error:", err));
    }

    // Kullanıcı ilk etkileşiminde sesi aç
    const handleFirstInteraction = () => {
      if (!hasInteracted && videoRef.current) {
        videoRef.current.muted = false;
        setIsMuted(false);
        setHasInteracted(true);
      }
    };

    // Tüm etkileşim olaylarını dinle
    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };
  }, [hasInteracted]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      setHasInteracted(true);
    }
  };

  return (
    <main className="fixed inset-0 w-full h-full overflow-hidden bg-dark">
      <LoadingScreen />
      
      {/* Video Container - Ortalanmış */}
      <div className="absolute inset-0 flex items-center justify-center">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          className="w-full h-full object-cover md:w-auto md:h-full md:max-w-[80vh] md:object-contain"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* İlk Etkileşim Uyarısı */}
      {!hasInteracted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="fixed inset-0 z-20 flex items-center justify-center pointer-events-none"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="glass-panel px-8 py-4 rounded-full"
          >
            <p className="text-white font-bold tracking-wider flex items-center gap-3">
              <Volume2 size={24} className="text-primary" />
              Sesi açmak için herhangi bir yere tıklayın
            </p>
          </motion.div>
        </motion.div>
      )}

      {/* Ses Kontrol Butonu - Sağ Alt Köşe */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={toggleMute}
        className="fixed bottom-8 right-8 z-30 w-14 h-14 glass-panel rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
        title={isMuted ? "Sesi Aç" : "Sesi Kapat"}
      >
        {isMuted ? (
          <VolumeX size={24} className="text-white group-hover:scale-110 transition-transform" />
        ) : (
          <Volume2 size={24} className="text-primary group-hover:text-white group-hover:scale-110 transition-all" />
        )}
      </motion.button>
    </main>
  );
}
