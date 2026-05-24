"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          onAnimationComplete={() => {
            if (!loading) document.body.style.overflow = 'auto';
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo - Canlı ve Parlayan */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <motion.img
                src="/logo.png"
                alt="68 Riders Logo"
                className="w-48 md:w-64 h-auto"
                animate={{ 
                  filter: [
                    "drop-shadow(0 0 30px rgba(255,0,51,0.8))",
                    "drop-shadow(0 0 50px rgba(255,0,51,1))",
                    "drop-shadow(0 0 30px rgba(255,0,51,0.8))"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-display font-bold tracking-widest text-white mb-8"
            >
              68 <span className="text-primary">RIDERS</span>
            </motion.h1>
            
            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                onAnimationComplete={() => setLoading(false)}
                className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_15px_#ff0033]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
