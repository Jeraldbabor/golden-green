"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#vision", label: "Vision & Mission" },
  { href: "#plans", label: "Plans" },
  { href: "#goals", label: "Goals" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Close on resize past desktop breakpoint
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 nav-condense">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
        <a
          href="#top"
          onClick={close}
          className="group flex items-center gap-3"
        >
          <span className="relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full ring-2 ring-gold-300 ring-offset-2 ring-offset-cream transition-transform group-hover:rotate-6">
            <Image
              src="/logo/logo1.png"
              alt="Golden Green logo"
              width={88}
              height={88}
              className="h-full w-full object-cover"
              priority
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold text-forest-800">
              Golden <span className="text-gold-600">Green</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-forest-600/80">
              Yellow Liquid Eraser
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="inline-block rounded-full px-4 py-2 text-sm font-medium text-forest-800 transition-colors hover:bg-gold-200/60 hover:text-forest-950"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-forest-700 px-5 py-2 text-sm font-semibold text-cream shadow-sm transition hover:bg-forest-800 hover:shadow-md"
            >
              Get in touch
              <span aria-hidden>→</span>
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          data-open={open ? "true" : "false"}
          className="nav-toggle relative z-50 flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full border border-forest-200 bg-cream/80 backdrop-blur md:hidden"
        >
          <span className="nav-line nav-line-1" />
          <span className="nav-line nav-line-2" />
          <span className="nav-line nav-line-3" />
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div
        onClick={close}
        aria-hidden
        className={`fixed inset-0 -z-10 bg-forest-950/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        id="mobile-nav"
        className={`absolute left-3 right-3 top-full origin-top transition-all duration-300 md:hidden ${
          open
            ? "pointer-events-auto translate-y-2 scale-100 opacity-100"
            : "pointer-events-none translate-y-0 scale-95 opacity-0"
        }`}
      >
        <ul className="rounded-2xl border border-forest-100 bg-cream/98 p-3 shadow-2xl backdrop-blur">
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={close}
                style={{ transitionDelay: open ? `${i * 30}ms` : "0ms" }}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-forest-800 transition hover:bg-gold-100 active:bg-gold-200"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-1 border-t border-forest-100 pt-2">
            <a
              href="#contact"
              onClick={close}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest-700 px-5 py-3 text-sm font-semibold text-cream"
            >
              Get in touch <span aria-hidden>→</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
