import { Shield, Calendar, Image as ImageIcon, BookOpen } from "lucide-react";

export default function Features() {
  const features = [
    { icon: <Shield size={32} />, title: "Membership", desc: "Exclusive access to the 68 Riders inner circle." },
    { icon: <Calendar size={32} />, title: "Events", desc: "Private track days, night rides, and meetups." },
    { icon: <ImageIcon size={32} />, title: "Gallery", desc: "Cinematic documentation of our journeys." },
    { icon: <BookOpen size={32} />, title: "Education", desc: "Advanced riding techniques and mechanical workshops." },
  ];

  return (
    <section className="relative z-10 py-32 px-4 bg-charcoal/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">THE <span className="text-primary">ECHO</span> SYSTEM</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <div className="text-primary mb-6">{f.icon}</div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}