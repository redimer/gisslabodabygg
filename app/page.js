import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FacebookFeed from "@/components/FacebookFeed";
import ProjectCard from "@/components/ProjectCard";
import QuoteCarousel from "@/components/QuoteCarousel";
import { projects } from "@/data/projects";

const VALUES = [
  {
    n: "01",
    title: "Personlig kontakt",
    body: "Du pratar direkt med den som håller i verktygen — inga mellanhänder, inga otydliga besked.",
  },
  {
    n: "02",
    title: "Tydliga offerter",
    body: "Du vet vad som ingår och vad det kostar innan vi kör igång.",
  },
  {
    n: "03",
    title: "Kvalitet i varje skarv",
    body: "Högst kvalitet i alla delar från första kontakt till färdigt projekt är A och O.",
  },
  {
    n: "04",
    title: "Lokal förankring",
    body: "Vi verkar i Lönsboda och närområdet och värnar om de relationer vi skapar med våra kunder.",
  },
];

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <Header transparent />
      <main>
        <Hero />

        {/* Om oss */}
        <section id="om-oss" className="py-24 md:py-32 px-6 md:px-10">
          <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-rust-500 font-semibold tracking-[0.25em] text-xs uppercase mb-4">
                Om oss
              </p>
              <h2 className="font-display italic text-4xl md:text-5xl leading-tight mb-7 text-balance">
                Byggt med hjärta i Lönsboda.
              </h2>
              <p className="text-ink/75 text-lg leading-relaxed mb-5 max-w-lg">
                Gisslaboda Bygg AB är ett lokalt byggföretag baserat i
                Lönsboda. Vi tar oss an allt från nybyggnation och
                tillbyggnader till renoveringar och attefallshus — och är med
                hela vägen, från första spadtag till sista handtag.
              </p>
              <p className="text-ink/75 text-lg leading-relaxed max-w-lg">
                Vi tror på hantverk utfört med noggrannhet, raka besked och en
                fast hand. Varje projekt, stort som litet, får samma omsorg om
                detaljerna.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex mt-9 items-center gap-2 rounded-full border border-ink/20 hover:border-forest-700 hover:bg-forest-700 hover:text-cream px-6 py-3.5 font-semibold transition-colors"
              >
                Prata med oss om ditt projekt
              </Link>
            </div>

            <div className="relative h-[420px] md:h-[500px]">
              <div className="absolute top-0 right-4 w-[72%] h-[78%] rounded-2xl overflow-hidden ring-1 ring-ink/10 shadow-xl rotate-[2deg]">
                <Image
                  src="/images/projects/nybygge-1.jpg"
                  alt="Nybyggnation av fritidshus"
                  fill
                  sizes="(min-width: 768px) 40vw, 80vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-[58%] h-[52%] rounded-2xl overflow-hidden ring-1 ring-ink/10 shadow-xl -rotate-[3deg] bg-cream">
                <Image
                  src="/images/projects/attefallshus-1.jpg"
                  alt="Nyckelfärdigt attefallshus"
                  fill
                  sizes="(min-width: 768px) 30vw, 60vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Så jobbar vi / Standarder */}
        <section id="standard" className="py-24 md:py-28 bg-forest-800 text-cream grain">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="max-w-xl mb-16">
              <p className="text-rust-400 font-semibold tracking-[0.25em] text-xs uppercase mb-4">
                Så jobbar vi
              </p>
              <h2 className="font-display italic text-4xl md:text-5xl leading-tight text-balance">
                Standarder vi aldrig kompromissar med.
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {VALUES.map((v) => (
                <div key={v.n} className="border-t border-cream/20 pt-6">
                  <span className="font-display italic text-rust-400 text-3xl">
                    {v.n}
                  </span>
                  <h3 className="font-display text-xl font-semibold mt-4 mb-3">
                    {v.title}
                  </h3>
                  <p className="text-cream/70 leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projekt teaser */}
        <section id="projekt-teaser" className="py-24 md:py-32 px-6 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
              <div>
                <p className="text-rust-500 font-semibold tracking-[0.25em] text-xs uppercase mb-4">
                  Vårt arbete
                </p>
                <h2 className="font-display italic text-4xl md:text-5xl leading-tight text-balance">
                  Utvalda projekt.
                </h2>
              </div>
              <Link
                href="/projekt"
                className="inline-flex items-center gap-2 font-semibold text-forest-700 hover:text-rust-500 transition-colors"
              >
                Se alla projekt <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featured.map((p, i) => (
                <ProjectCard key={p.slug} project={p} tilt={i % 2 === 1} priority={i === 0} />
              ))}
            </div>
          </div>
        </section>

        <QuoteCarousel items={projects.filter((p) => p.quote)} />

        <FacebookFeed />
      </main>
      <Footer />
    </>
  );
}
