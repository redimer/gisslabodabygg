const FB_PAGE_URL =
  "https://www.facebook.com/profile.php?id=61588328794630";

export default function FacebookFeed() {
  const src = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
    FB_PAGE_URL
  )}&tabs=timeline&width=500&height=650&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`;

  return (
    <section className="bg-cream-dim/60 py-24 px-6 md:px-10">
      <div className="mx-auto max-w-7xl grid md:grid-cols-[1fr_1.1fr] gap-14 items-center">
        <div>
          <p className="text-rust-500 font-semibold tracking-[0.25em] text-xs uppercase mb-4">
            Senaste nytt
          </p>
          <h2 className="font-display italic text-4xl md:text-5xl leading-tight mb-6 text-balance">
            Följ jobbet, dag för dag.
          </h2>
          <p className="text-ink/70 text-lg leading-relaxed max-w-md mb-8">
            Vi delar bilder och uppdateringar från våra byggen på Facebook —
            allt från nya grunder till färdiga hem. Följ oss för att se vad vi
            snickrar på just nu.
          </p>
          <a
            href={FB_PAGE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-forest-700 hover:bg-forest-600 text-cream px-6 py-3.5 font-semibold transition-colors"
          >
            Besök vår Facebooksida
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-ink/10 bg-white flex justify-center">
          <iframe
            title="Gisslaboda Bygg AB Facebook-flöde"
            src={src}
            width="500"
            height="650"
            style={{ border: "none", overflow: "hidden", maxWidth: "100%" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>
      </div>
    </section>
  );
}
