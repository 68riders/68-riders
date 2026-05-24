export default function Events() {
  const events = [
    { date: "OCT 12", title: "NIGHT RIDE VOL.4", location: "Downtown Core" },
    { date: "NOV 05", title: "TRACK DAY TRAINING", location: "Grand Prix Circuit" },
    { date: "NOV 22", title: "THE LONG ROAD", location: "Coastal Highway" },
    { date: "DEC 10", title: "END OF YEAR MEETUP", location: "68 HQ" },
  ];

  return (
    <section className="relative z-10 py-32 px-4 bg-charcoal/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">UPCOMING <span className="text-primary">RIDES</span></h2>
        <div className="flex flex-col">
          {events.map((e, i) => (
            <div key={i} className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-white/10 hover:border-primary/50 hover:bg-white/5 transition-all duration-300 px-6 cursor-pointer group">
              <div className="text-primary font-display font-bold text-xl md:text-2xl w-32 mb-4 md:mb-0">
                {e.date}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-wide group-hover:translate-x-2 transition-transform duration-300">{e.title}</h3>
                <p className="text-gray-500 mt-2 tracking-widest">{e.location}</p>
              </div>
              <button className="mt-6 md:mt-0 px-6 py-2 border border-white/20 rounded-full hover:bg-white hover:text-dark transition-colors">
                RSVP
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}