import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Våra projekt – Gisslaboda Bygg AB",
  description:
    "Se exempel på nybyggnation, tillbyggnad, renovering och attefallshus utförda av Gisslaboda Bygg AB i Lönsboda.",
};

export default function ProjektPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-forest-800 text-cream grain pt-36 pb-20 px-6 md:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="text-rust-400 font-semibold tracking-[0.25em] text-xs uppercase mb-4">
              Vårt arbete
            </p>
            <h1 className="font-display italic text-5xl md:text-6xl leading-tight text-balance max-w-2xl">
              Projekt vi är stolta över.
            </h1>
            <p className="mt-6 text-cream/75 text-lg max-w-xl">
              Ett urval av byggen från Lönsboda med omnejd — från gjuten grund
              till nyckelfärdigt hem.
            </p>
          </div>
        </section>

        <section className="py-20 px-6 md:px-10">
          <div className="mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} tilt={i % 2 === 1} priority={i < 2} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
