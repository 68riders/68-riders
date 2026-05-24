import { Instagram, Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-dark pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">JOIN THE <br/><span className="text-primary">RANKS</span></h2>
          <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
            Ready to ride beyond limits? Drop us a message. We are always looking for dedicated riders to join the brotherhood.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors duration-300">
              <Instagram size={20} />
            </a>
            <a href="mailto:68Riders@protonmail.com" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors duration-300">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col justify-center">
          <a href="#" className="group flex items-center justify-between border-b border-white/20 py-6 hover:border-primary transition-colors">
            <span className="text-xl md:text-3xl font-light tracking-wide uppercase">@68_riders</span>
            <ArrowRight className="group-hover:text-primary transition-colors" />
          </a>
          <a href="mailto:68Riders@protonmail.com" className="group flex items-center justify-between border-b border-white/20 py-6 hover:border-primary transition-colors">
            <span className="text-xl md:text-3xl font-light tracking-wide uppercase">68Riders@protonmail.com</span>
            <ArrowRight className="group-hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
      
      <div className="text-center text-gray-600 text-sm tracking-widest font-mono uppercase">
        © 2026 68 RIDERS. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}