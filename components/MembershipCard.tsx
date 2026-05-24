"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function MembershipCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative z-10 py-32 px-4 flex flex-col items-center justify-center min-h-screen">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold">THE <span className="text-primary">BLACK</span> CARD</h2>
        <p className="text-gray-400 mt-4 tracking-widest uppercase">Your key to the brotherhood</p>
      </div>

      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="w-full max-w-[400px] aspect-[1.586/1] rounded-2xl p-1 relative cursor-pointer group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-dark to-charcoal rounded-2xl opacity-50 blur-md" />
        
        <div 
          style={{ transform: "translateZ(50px)" }}
          className="absolute inset-0 glass-panel rounded-2xl flex flex-col justify-between p-8 bg-gradient-to-br from-white/10 to-white/0 overflow-hidden"
        >
          {/* Shine effect */}
          <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent -rotate-45 translate-x-[-50%] group-hover:translate-x-[150%] transition-transform duration-1000" />
          
          <div className="flex justify-between items-start">
            <h3 className="font-display font-bold text-2xl tracking-widest">68 <span className="text-primary">R</span></h3>
            <div className="w-10 h-10 border border-white/20 rounded-md p-1">
              <div className="w-full h-full bg-white/80 grid grid-cols-2 gap-0.5 p-0.5">
                <div className="bg-dark rounded-sm"></div>
                <div className="bg-dark rounded-sm"></div>
                <div className="bg-dark rounded-sm"></div>
                <div className="bg-primary rounded-sm"></div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[10px] text-gray-400 tracking-[0.2em] uppercase mb-1">Official Member</p>
            <p className="font-mono text-xl tracking-widest text-white/90">JOHN DOE</p>
            <p className="font-mono text-xs tracking-widest text-primary mt-2">ID: 68-001</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}