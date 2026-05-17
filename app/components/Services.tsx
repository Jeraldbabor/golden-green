import Image from "next/image";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const features: Feature[] = [
  {
    title: "Specialized Yellow Color",
    description:
      "Colored naturally with plant extracts like turmeric to blend seamlessly with yellow legal pads and paper.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
        <circle cx="12" cy="12" r="5" fill="currentColor" stroke="none" />
        <g strokeLinecap="round">
          <path d="M12 2v3" />
          <path d="M12 19v3" />
          <path d="M2 12h3" />
          <path d="M19 12h3" />
          <path d="m4.9 4.9 2.1 2.1" />
          <path d="m17 17 2.1 2.1" />
          <path d="m4.9 19.1 2.1-2.1" />
          <path d="m17 7 2.1-2.1" />
        </g>
      </svg>
    ),
  },
  {
    title: "Sustainable Packaging",
    description:
      "A 15 mL recyclable glass bottle with a durable, aesthetic bamboo screw cap — beautiful in any pencil case.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6v3a2 2 0 0 1-1 1.732V10l2 2v8a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-8l2-2V7.732A2 2 0 0 1 9 6V3Z" />
        <path d="M10 14h4" />
        <path d="M10 17h4" />
      </svg>
    ),
  },
  {
    title: "Non-Toxic Formula",
    description:
      "A safe, water-based liquid that dries quickly and doesn't carry the harsh chemical smells found in standard correction fluids.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-6 8-13a8 8 0 1 0-16 0c0 7 8 13 8 13Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Refill Service",
    description:
      "Instead of buying a new bottle, customers can purchase liquid refill pouches to top up the existing glass bottle — less plastic, less cost.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 1 1-3-6.7" />
        <path d="M21 4v5h-5" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-cream via-cream-dark/50 to-cream py-24 lg:py-32"
    >
      {/* Decorative wave divider */}
      <svg
        aria-hidden
        viewBox="0 0 1440 80"
        className="absolute -top-px left-0 w-full text-cream"
        preserveAspectRatio="none"
      >
        <path d="M0 40 C 240 80, 480 0, 720 40 C 960 80, 1200 0, 1440 40 L1440 0 L0 0 Z" fill="currentColor" />
      </svg>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <div>
            <span className="reveal-fade inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold-700">
              <span className="h-px w-8 bg-gold-500" /> Our Services
            </span>
            <h2 className="reveal-up mt-4 font-display text-4xl font-semibold leading-tight text-forest-900 sm:text-5xl">
              The product that{" "}
              <span className="italic text-gold-600">does the work</span>.
            </h2>
          </div>
          <p className="reveal-up max-w-xl text-base leading-7 text-forest-800/90 sm:text-lg sm:leading-8">
            Our company&apos;s main product is the{" "}
            <strong className="font-semibold text-forest-900">
              Golden Green Yellow Liquid Eraser
            </strong>{" "}
            — a water-based correction fluid designed specifically for yellow
            pad paper.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          {/* Product visual */}
          <div className="reveal-left relative lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-forest-900/10">
              <Image
                src="/images/2.png"
                alt="Golden Green Yellow Liquid Eraser bottle with its retail box packaging"
                fill
                sizes="(min-width: 1024px) 32rem, 80vw"
                className="object-cover"
              />
              {/* Sparkles overlay */}
              <div aria-hidden className="pointer-events-none absolute inset-0 opacity-60">
                <div className="absolute left-[15%] top-[12%] h-1 w-1 rounded-full bg-gold-200" />
                <div className="absolute right-[18%] top-[22%] h-1.5 w-1.5 rounded-full bg-gold-300" />
                <div className="absolute left-[22%] bottom-[34%] h-1 w-1 rounded-full bg-gold-200" />
                <div className="absolute right-[12%] bottom-[42%] h-1.5 w-1.5 rounded-full bg-gold-300" />
              </div>
              {/* Bottom gradient for label legibility */}
              <div aria-hidden className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-forest-950/85 via-forest-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-cream/90">
                <div>
                  <div className="text-xs uppercase tracking-wider text-gold-300/80">
                    15 mL
                  </div>
                  <div className="font-display text-2xl font-semibold">
                    Liquid Eraser
                  </div>
                </div>
                <div className="rounded-full bg-gold-400 px-3 py-1 text-xs font-semibold text-forest-900">
                  Refillable
                </div>
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {features.map((f, i) => (
              <li
                key={f.title}
                className="reveal-up group relative rounded-2xl border border-forest-100 bg-cream p-6 lift"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100 text-gold-700 transition group-hover:bg-gold-200 group-hover:text-gold-800">
                  {f.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-forest-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-forest-800/85">
                  {f.description}
                </p>
                <span className="absolute right-6 top-6 text-xs font-semibold text-gold-600/0 transition group-hover:text-gold-600">
                  0{i + 1}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
