import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project, tilt = false, priority = false }) {
  return (
    <Link
      href={`/projekt/${project.slug}`}
      className={`group block ${tilt ? "md:rotate-[-1.2deg] md:hover:rotate-0" : ""} transition-transform duration-500`}
    >
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-ink/10 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          priority={priority}
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
        <span className="absolute top-4 left-4 rounded-full bg-cream/90 text-ink text-xs font-semibold px-3 py-1.5 tracking-wide">
          {project.tag}
        </span>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-display italic text-2xl text-white leading-snug">
            {project.title}
          </h3>
          <p className="mt-2 text-white/80 text-sm flex items-center gap-2">
            {project.location}
            <span className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform" aria-hidden>
              →
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}
