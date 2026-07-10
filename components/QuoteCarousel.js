"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const AUTO_ADVANCE_MS = 7000;

export default function QuoteCarousel({ items }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const count = items.length;

  const goTo = useCallback(
    (i) => setIndex(((i % count) + count) % count),
    [count]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    timerRef.current = setTimeout(next, AUTO_ADVANCE_MS);
    return () => clearTimeout(timerRef.current);
  }, [index, next]);

  if (count === 0) return null;
  const item = items[index];

  return (
    <section className="py-24 md:py-28 px-6 md:px-10 bg-forest-900 text-cream grain overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-rust-400 font-semibold tracking-[0.25em] text-xs uppercase mb-4">
              Röster från kunder
            </p>
            <h2 className="font-display italic text-4xl md:text-5xl leading-tight text-balance">
              Vad våra beställare säger.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Föregående citat"
              className="h-12 w-12 rounded-full border border-cream/30 hover:border-cream hover:bg-cream hover:text-forest-900 flex items-center justify-center text-xl transition-colors"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Nästa citat"
              className="h-12 w-12 rounded-full border border-cream/30 hover:border-cream hover:bg-cream hover:text-forest-900 flex items-center justify-center text-xl transition-colors"
            >
              →
            </button>
          </div>
        </div>

        <Link
          href={`/projekt/${item.slug}`}
          className="group grid md:grid-cols-[1fr_1.3fr] gap-10 md:gap-16 items-center"
        >
          <div
            key={`img-${item.slug}`}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-cream/15 shadow-2xl animate-fade-up"
          >
            <Image
              src={item.images[0]}
              alt={item.title}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            />
          </div>

          <div key={`quote-${item.slug}`} className="animate-fade-up">
            <span className="font-display text-7xl text-rust-400 leading-none block mb-2">
              &ldquo;
            </span>
            <blockquote className="font-display italic text-2xl md:text-3xl lg:text-4xl leading-snug text-balance mb-6">
              {item.quote.text}
            </blockquote>
            <p className="text-cream/60 font-medium mb-6">
              — {item.quote.author}
            </p>
            <p className="text-cream/75 leading-relaxed max-w-md mb-5">
              {item.summary}
            </p>
            <span className="inline-flex items-center gap-2 font-semibold text-rust-400 group-hover:text-rust-500 transition-colors">
              Läs mer om projektet
              <span
                className="inline-block group-hover:translate-x-1 transition-transform"
                aria-hidden
              >
                →
              </span>
            </span>
          </div>
        </Link>

        <div className="flex justify-center gap-2.5 mt-14">
          {items.map((it, i) => (
            <button
              key={it.slug}
              onClick={() => goTo(i)}
              aria-label={`Visa citat ${i + 1}`}
              aria-current={i === index}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-rust-400"
                  : "w-2.5 bg-cream/30 hover:bg-cream/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
