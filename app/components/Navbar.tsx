import Image from "next/image";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#vision", label: "Vision & Mission" },
  { href: "#plans", label: "Plans" },
  { href: "#goals", label: "Goals" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 nav-condense">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-forest-700 ring-2 ring-gold-300 ring-offset-2 ring-offset-cream transition-transform group-hover:rotate-6">
            <Image
              src="/logo.png"
              alt=""
              width={28}
              height={28}
              className="object-contain"
            />
            <span className="absolute inset-0 rounded-full bg-gold-300/0 transition group-hover:bg-gold-300/10" />
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

        <input id="nav-toggle" type="checkbox" className="peer hidden" aria-hidden="true" />

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative inline-block rounded-full px-4 py-2 text-sm font-medium text-forest-800 transition-colors hover:text-forest-950"
              >
                <span className="relative z-10">{l.label}</span>
                <span className="absolute inset-0 -z-0 rounded-full bg-gold-200/0 transition group-hover:bg-gold-200 hover:bg-gold-200/60" />
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

        <label
          htmlFor="nav-toggle"
          aria-label="Toggle navigation"
          className="md:hidden flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full border border-forest-200 bg-cream/70 backdrop-blur"
        >
          <span className="nav-line nav-line-1" />
          <span className="nav-line nav-line-2" />
          <span className="nav-line nav-line-3" />
        </label>

        <ul className="absolute left-0 right-0 top-full mx-4 mt-2 hidden flex-col rounded-2xl border border-forest-100 bg-cream/95 p-4 shadow-xl backdrop-blur peer-checked:flex md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-forest-800 hover:bg-gold-100"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest-700 px-5 py-3 text-sm font-semibold text-cream"
            >
              Get in touch →
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
