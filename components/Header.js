"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/#projekt-teaser", label: "Projekt" },
  { href: "/#om-oss", label: "Om oss" },
  { href: "/#standard", label: "Så jobbar vi" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Header({ transparent = false }) {
  const [scrolled, setScrolled] = useState(!transparent);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-cream/95 backdrop-blur-md border-b border-ink/10"
          : "bg-transparent border-b border-white/0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-20 flex items-center justify-between">
        <Link href="/" aria-label="Gisslaboda Bygg AB – startsida" className="group">
          <Image
            src="/images/logo-wide.png"
            alt="Gisslaboda Bygg AB"
            width={900}
            height={252}
            priority
            className={`h-11 md:h-12 w-auto transition-[filter] duration-500 ${
              solid ? "" : "brightness-0 invert"
            }`}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[15px] font-medium tracking-wide transition-colors hover:text-rust-500 ${
                solid ? "text-ink/80" : "text-white/90"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="rounded-full bg-rust-500 hover:bg-rust-600 text-cream px-5 py-2.5 text-[15px] font-semibold transition-colors"
          >
            Få en offert
          </Link>
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Öppna meny"
          aria-expanded={open}
          className="md:hidden relative h-10 w-10 flex flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`block h-0.5 w-6 rounded transition-all duration-300 ${
              solid ? "bg-ink" : "bg-white"
            } ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 rounded transition-all duration-300 ${
              solid ? "bg-ink" : "bg-white"
            } ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream border-t border-ink/10 px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            onClick={() => setOpen(false)}
            className="rounded-full bg-rust-500 text-cream px-5 py-3 text-center font-semibold"
          >
            Få en offert
          </Link>
        </div>
      )}
    </header>
  );
}
