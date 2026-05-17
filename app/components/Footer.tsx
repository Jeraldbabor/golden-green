import Image from "next/image";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#vision", label: "Vision & Mission" },
  { href: "#plans", label: "Plans" },
  { href: "#goals", label: "Goals" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-forest-200 bg-cream-dark/40">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#top" className="inline-flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full ring-2 ring-gold-300 ring-offset-2 ring-offset-cream-dark">
                <Image
                  src="/logo/logo1.png"
                  alt="Golden Green logo"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl font-semibold text-forest-800">
                  Golden <span className="text-gold-600">Green</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-forest-700/70">
                  Yellow Liquid Eraser
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-md text-sm leading-7 text-forest-800/80">
              <em>&ldquo;Correct fast that will last.&rdquo;</em> A plant-based,
              refillable correction fluid crafted for yellow pad paper and a
              quieter footprint.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-700">
              Explore
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-forest-800 transition hover:text-gold-700"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-700">
              Reach us
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-forest-800">
              <li>
                <a className="hover:text-gold-700" href="tel:+639604561078">
                  +63 960 456 1078
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gold-700"
                  href="mailto:goldengreenph@gmail.com"
                >
                  goldengreenph@gmail.com
                </a>
              </li>
              <li className="text-forest-800/80">
                Phase 3, Block 3, Lot 31 FBR<br />
                General Mariano Alvarez, Cavite, Philippines
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-forest-200 pt-6 text-xs text-forest-700/80 sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} Golden Green. Crafted with care in the
            Philippines.
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold-500" />
            Supporting UN SDG 3 — Good Health &amp; Well-being
          </span>
        </div>
      </div>
    </footer>
  );
}
