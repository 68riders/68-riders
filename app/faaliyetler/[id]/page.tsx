"use client";

import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { Calendar, MapPin, Users, ArrowLeft, Navigation } from "lucide-react";
import { useState } from "react";
import { useData } from "@/contexts/DataContext";

export default function EventDetail() {
  const params = useParams();
  const router = useRouter();
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  const { events } = useData();

  // ID'yi sayıya çevir ve etkinliği bul
  const eventId = parseInt(params.id as string);
  const event = events.find(e => e.id === eventId);

  if (!event) {
    return (
      <main className="relative min-h-screen pt-32 pb-20 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">ETKİNLİK BULUNAMADI</h1>
          <button
            onClick={() => router.push("/faaliyetler")}
            className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-white hover:text-dark transition-colors"
          >
            Geri Dön
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen pt-20 pb-20">
      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[60vh] w-full overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark z-10" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={event.image || event.photos?.[0] || "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2000&auto=format&fit=crop"}
          alt={event.title}
          className="object-cover w-full h-full"
        />
        
        {/* Geri Butonu - Hero üzerinde */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.push("/faaliyetler")}
          className="absolute top-8 left-8 z-20 flex items-center gap-2 text-white hover:text-primary transition-colors bg-dark/50 backdrop-blur-xl px-4 py-2 rounded-full"
        >
          <ArrowLeft size={20} />
          Faaliyetlere Dön
        </motion.button>

        {/* Başlık - Hero üzerinde */}
        <div className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-7xl font-display font-bold mb-6 text-white drop-shadow-2xl">
                {event.title}
              </h1>
              <div className="flex flex-wrap gap-6 mb-4">
                <div className="flex items-center gap-2 bg-dark/50 backdrop-blur-xl px-4 py-2 rounded-full">
                  <Calendar size={20} className="text-primary" />
                  <span className="text-white font-bold">{event.date}</span>
                </div>
                <div className="flex items-center gap-2 bg-dark/50 backdrop-blur-xl px-4 py-2 rounded-full">
                  <MapPin size={20} className="text-primary" />
                  <span className="text-white font-bold">{event.location}</span>
                </div>
                <div className="flex items-center gap-2 bg-dark/50 backdrop-blur-xl px-4 py-2 rounded-full">
                  <Users size={20} className="text-primary" />
                  <span className="text-white font-bold">{event.participants} Rider</span>
                </div>
                <div className="flex items-center gap-2 bg-dark/50 backdrop-blur-xl px-4 py-2 rounded-full">
                  <Navigation size={20} className="text-primary" />
                  <span className="text-white font-bold">{event.distance}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 -mt-8 relative z-20">

        {/* Açıklama */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-panel p-8 rounded-xl mb-12"
        >
          <p className="text-lg text-gray-300 leading-relaxed">{event.description}</p>
        </motion.div>

        {/* Rota */}
        {event.route && event.route.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass-panel p-8 rounded-xl mb-12"
          >
            <h2 className="text-3xl font-display font-bold mb-6">ROTA</h2>
            <div className="space-y-4">
              {event.route.map((stop: string, index: number) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-300 pt-1">{stop}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Öne Çıkanlar */}
        {event.highlights && event.highlights.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-panel p-8 rounded-xl mb-12"
          >
            <h2 className="text-3xl font-display font-bold mb-6">ÖNE ÇIKANLAR</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {event.highlights.map((highlight: string, index: number) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <p className="text-gray-300">{highlight}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tavsiyeler & Gezilecek Yerler */}
        {event.recommendations && event.recommendations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="glass-panel p-8 rounded-xl mb-12 border-primary/30"
          >
            <h2 className="text-3xl font-display font-bold mb-2 text-primary">📍 TAVSİYELER & GEZİLECEK YERLER</h2>
            <p className="text-gray-400 mb-6">Bu rotada mutlaka dikkat etmeniz gerekenler</p>
            <div className="space-y-4">
              {event.recommendations.map((tip: string, index: number) => (
                <div key={index} className="flex items-start gap-4 bg-primary/5 p-4 rounded-lg hover:bg-primary/10 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-200 leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Fotoğraflar */}
        {event.photos && event.photos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-display font-bold mb-6">FOTOĞRAFLAR</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {event.photos.map((photo: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative aspect-video overflow-hidden rounded-xl group cursor-pointer"
                  onClick={() => setSelectedMedia(photo)}
                >
                  <div className="absolute inset-0 bg-dark/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo}
                    alt={`${event.title} - Fotoğraf ${index + 1}`}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <p className="text-white font-bold text-sm">Fotoğraf {index + 1}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Lightbox */}
        {selectedMedia && event.photos && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedMedia(null)}
          >
            {/* Kapat Butonu */}
            <button
              className="absolute top-8 right-8 text-white text-4xl hover:text-primary transition-colors z-50"
              onClick={() => setSelectedMedia(null)}
            >
              ×
            </button>

            {/* Önceki Buton */}
            {event.photos.indexOf(selectedMedia) > 0 && (
              <button
                className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white text-2xl transition-all z-50"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = event.photos!.indexOf(selectedMedia);
                  setSelectedMedia(event.photos![currentIndex - 1]);
                }}
              >
                ‹
              </button>
            )}

            {/* Sonraki Buton */}
            {event.photos.indexOf(selectedMedia) < event.photos.length - 1 && (
              <button
                className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white text-2xl transition-all z-50"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = event.photos!.indexOf(selectedMedia);
                  setSelectedMedia(event.photos![currentIndex + 1]);
                }}
              >
                ›
              </button>
            )}

            {/* Fotoğraf */}
            <div className="relative max-w-7xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedMedia}
                alt="Selected"
                className="max-w-full max-h-[90vh] object-contain rounded-xl"
              />
              {/* Fotoğraf Sayacı */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-dark/80 backdrop-blur-xl px-4 py-2 rounded-full">
                <p className="text-white font-bold text-sm">
                  {event.photos.indexOf(selectedMedia) + 1} / {event.photos.length}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}
