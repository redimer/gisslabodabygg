import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects, getProject } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} – Gisslaboda Bygg AB`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const [cover, ...rest] = project.images;
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative h-[62vh] min-h-[440px] w-full overflow-hidden">
          <Image
            src={cover}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/30 to-forest-900/40" />
          <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-10 pb-16 mx-auto max-w-7xl">
            <Link
              href="/projekt"
              className="text-cream/80 hover:text-cream text-sm font-semibold mb-6 inline-flex items-center gap-2 w-fit"
            >
              ← Alla projekt
            </Link>
            <span className="rounded-full bg-cream/90 text-ink text-xs font-semibold px-3 py-1.5 w-fit mb-5">
              {project.tag}
            </span>
            <h1 className="font-display italic text-4xl md:text-6xl text-white leading-tight text-balance max-w-3xl">
              {project.title}
            </h1>
            <p className="mt-4 text-cream/80 text-lg">{project.location}</p>
          </div>
        </section>

        <section className="py-20 px-6 md:px-10">
          <div className="mx-auto max-w-3xl">
            {project.description.map((p, i) => (
              <p
                key={i}
                className="text-ink/75 text-lg leading-relaxed mb-5 last:mb-0"
              >
                {p}
              </p>
            ))}
          </div>

          {rest.length > 0 && (
            <div className="mx-auto max-w-6xl mt-16 grid sm:grid-cols-2 gap-6">
              {rest.map((src, i) => (
                <div
                  key={src}
                  className={`relative rounded-2xl overflow-hidden ring-1 ring-ink/10 shadow-sm ${
                    rest.length === 1 ? "sm:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`${project.title} – bild ${i + 2}`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="mx-auto max-w-3xl mt-16">
            {project.quote ? (
              <blockquote className="relative rounded-2xl bg-forest-800 text-cream p-10 md:p-12">
                <span className="font-display text-6xl text-rust-400 leading-none">
                  &ldquo;
                </span>
                <p className="font-display italic text-2xl md:text-3xl leading-snug mt-2 mb-6 text-balance">
                  {project.quote.text}
                </p>
                <footer className="text-cream/70 font-medium">
                  — {project.quote.author}
                </footer>
              </blockquote>
            ) : (
              <div className="rounded-2xl border border-dashed border-ink/25 p-10 md:p-12 text-center">
                <p className="font-display italic text-xl text-ink/50">
                  Kundomdöme för det här projektet läggs till inom kort.
                </p>
              </div>
            )}
          </div>
        </section>

        {others.length > 0 && (
          <section className="py-16 px-6 md:px-10 bg-cream-dim/60">
            <div className="mx-auto max-w-7xl">
              <h2 className="font-display italic text-3xl mb-10">
                Fler projekt
              </h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {others.map((p) => (
                  <ProjectCard key={p.slug} project={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
