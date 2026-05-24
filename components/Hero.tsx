"use client";

export default function Hero() {
  return (
    <section className="fixed inset-0 w-full h-screen overflow-hidden z-0">
      {/* Sadece Video - Tam Ekran */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
