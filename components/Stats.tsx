export default function Stats() {
  const stats = [
    { value: "68+", label: "Elite Riders" },
    { value: "12+", label: "Annual Events" },
    { value: "1000+", label: "Kilometers" },
    { value: "1", label: "Brotherhood" },
  ];

  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="glass-panel p-8 text-center flex flex-col gap-2 rounded-xl group hover:border-primary/50 transition-colors duration-500">
            <h3 className="text-4xl md:text-6xl font-display font-bold text-white group-hover:text-primary transition-colors duration-500">
              {stat.value}
            </h3>
            <p className="text-gray-400 tracking-widest text-sm uppercase">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}