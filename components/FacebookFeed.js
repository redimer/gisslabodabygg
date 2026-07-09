"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const FB_PAGE_URL =
  "https://www.facebook.com/profile.php?id=61588328794630";

const FALLBACK_TIMEOUT_MS = 7000;

export default function FacebookFeed() {
  const containerRef = useRef(null);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasRendered = containerRef.current?.querySelector("iframe");
      if (!hasRendered) setShowFallback(true);
    }, FALLBACK_TIMEOUT_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-cream-dim/60 py-24 px-6 md:px-10">
      <div id="fb-root" />
      <Script
        src="https://connect.facebook.net/sv_SE/sdk.js#xfbml=1&version=v19.0"
        strategy="lazyOnload"
        onLoad={() => window.FB?.XFBML?.parse()}
      />

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

        <div
          ref={containerRef}
          className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-ink/10 bg-white flex justify-center items-center min-h-[400px] p-4"
        >
          {showFallback ? (
            <div className="text-center py-10 px-6">
              <p className="font-display italic text-2xl mb-3">
                Facebook-flödet kunde inte laddas
              </p>
              <p className="text-ink/60 mb-6 max-w-xs mx-auto">
                Det kan bero på en annonsblockerare i din webbläsare. Besök
                sidan direkt istället.
              </p>
              <a
                href={FB_PAGE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-forest-700 hover:bg-forest-600 text-cream px-6 py-3 font-semibold transition-colors"
              >
                Öppna Facebook-sidan →
              </a>
            </div>
          ) : (
            <div
              className="fb-page"
              data-href={FB_PAGE_URL}
              data-tabs="timeline"
              data-width="500"
              data-height="650"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            >
              <blockquote cite={FB_PAGE_URL} className="fb-xfbml-parse-ignore">
                <a href={FB_PAGE_URL}>Gisslaboda Bygg AB</a>
              </blockquote>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
