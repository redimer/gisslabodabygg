export default function Hero() {
  return (
    <section className="relative h-[100vh] min-h-[640px] w-full overflow-hidden grain">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/video/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/projects/tillbyggnad-3.jpg"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-900/70 via-forest-900/40 to-forest-900/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

      <div className="relative z-10 h-full flex flex-col justify-end md:justify-center px-6 md:px-10 pb-24 md:pb-0 mx-auto max-w-7xl">
        <p className="animate-fade-up text-rust-400 font-semibold tracking-[0.25em] text-xs md:text-sm uppercase mb-5">
          Snickeri &amp; byggtjänster i Lönsboda
        </p>
        <h1
          className="animate-fade-up font-display text-white text-balance leading-[0.98] font-medium italic text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] max-w-4xl"
          style={{ animationDelay: "0.1s" }}
        >
          Hantverk du kan lita på.
        </h1>
        <p
          className="animate-fade-up mt-6 text-white/85 text-lg md:text-xl max-w-xl font-light"
          style={{ animationDelay: "0.25s" }}
        >
          Gisslaboda Bygg AB bygger, renoverar och tillbygger i Lönsboda med
          omnejd — från grund till nyckelfärdigt hem.
        </p>
        <div
          className="animate-fade-up mt-9 flex flex-wrap gap-4"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="/projekt"
            className="rounded-full bg-rust-500 hover:bg-rust-600 text-cream px-7 py-3.5 font-semibold transition-colors"
          >
            Se våra projekt
          </a>
          <a
            href="/kontakt"
            className="rounded-full border border-white/40 hover:border-white/80 text-white px-7 py-3.5 font-semibold transition-colors"
          >
            Få en offert
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/70 z-10">
        <span className="text-xs uppercase tracking-[0.2em]">Skrolla</span>
        <span className="h-9 w-px bg-white/50" />
      </div>
    </section>
  );
}
