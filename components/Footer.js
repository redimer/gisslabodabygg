import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="kontakt" className="relative bg-forest-900 text-cream grain">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 grid gap-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="mb-6">
            <Image
              src="/images/logo-wide.png"
              alt="Gisslaboda Bygg AB"
              width={900}
              height={252}
              className="h-14 w-auto brightness-0 invert opacity-90"
            />
          </div>
          <p className="text-cream/70 max-w-sm leading-relaxed">
            Snickeri &amp; byggtjänster i Lönsboda med omnejd. Nybyggnation,
            tillbyggnad, renovering och attefallshus — hantverk med omsorg om
            varje detalj.
          </p>
        </div>

        <div>
          <h3 className="font-display italic text-lg mb-4 text-rust-400">
            Kontakt
          </h3>
          <ul className="space-y-3 text-cream/85">
            <li>
              <a
                href="mailto:gisslabodabygg@gmail.com"
                className="hover:text-rust-400 transition-colors"
              >
                gisslabodabygg@gmail.com
              </a>
            </li>
            <li className="text-cream/70">
              Södra Gränsgatan 45
              <br />
              Lönsboda, Sverige
            </li>
            <li>
              <Link href="/kontakt" className="hover:text-rust-400 transition-colors">
                Fyll i offertformulär →
              </Link>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61588328794630"
                target="_blank"
                rel="noreferrer"
                className="hover:text-rust-400 transition-colors"
              >
                Följ oss på Facebook →
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display italic text-lg mb-4 text-rust-400">
            Hitta hit
          </h3>
          <div className="rounded-xl overflow-hidden ring-1 ring-white/15 h-44">
            <iframe
              title="Karta till Gisslaboda Bygg AB"
              src="https://www.google.com/maps?q=S%C3%B6dra+Gr%C3%A4nsgatan+45,+L%C3%B6nsboda,+Sverige&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-cream/50">
          <p>© {new Date().getFullYear()} Gisslaboda Bygg AB. Alla rättigheter förbehållna.</p>
          <p>Orgnr: 559571-0293</p>
        </div>
      </div>
    </footer>
  );
}
