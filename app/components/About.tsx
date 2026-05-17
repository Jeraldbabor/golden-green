import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10">
        {/* Image side */}
        <div className="reveal-left relative lg:col-span-5">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[2rem] bg-gradient-to-br from-gold-200/60 via-cream-dark to-forest-100">
            <Image
              src="/ingredients/turmeric.png"
              alt="Turmeric root and powder — the natural pigment behind Golden Green"
              fill
              sizes="(min-width: 1024px) 28rem, 80vw"
              className="object-contain p-8"
            />
            {/* Decorative ring */}
            <div className="absolute inset-4 rounded-[1.75rem] ring-1 ring-forest-700/10" />
          </div>

          {/* Caption card */}
          <div className="absolute -bottom-6 -right-2 hidden max-w-[14rem] rounded-2xl border border-forest-100 bg-cream/95 p-4 shadow-xl backdrop-blur md:block float-slow">
            <div className="text-xs font-semibold uppercase tracking-wider text-gold-700">
              Turmeric extract
            </div>
            <p className="mt-1 text-sm leading-snug text-forest-800">
              The natural plant pigment that matches yellow pad paper tone.
            </p>
          </div>
        </div>

        {/* Text side */}
        <div className="reveal-right lg:col-span-7">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold-700">
            <span className="h-px w-8 bg-gold-500" /> About Golden Green
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-forest-900 sm:text-5xl">
            A correction fluid in harmony with{" "}
            <span className="italic text-gold-600">nature</span> — and with
            the paper you write on.
          </h2>

          <div className="mt-8 space-y-6 text-base leading-7 text-forest-800/90 sm:text-lg sm:leading-8">
            <p>
              The Golden Green Yellow Liquid Eraser is a{" "}
              <strong className="font-semibold text-forest-900">
                plant-based, refillable correction fluid
              </strong>{" "}
              specifically designed to match yellow pad paper. Packaged in a
              glass bottle with a bamboo cap, this non-toxic, water-based
              formula provides a seamless alternative to whiteout while
              eliminating plastic waste.
            </p>
            <p>
              The name <em className="text-forest-900">Golden Green</em> is the
              combination of sustainability found in the liquid eraser. The{" "}
              <span className="font-semibold text-gold-700">Golden</span> means
              it&apos;s a liquid plant-based formula that leaves an aromatic
              scent when a swash dries. The{" "}
              <span className="font-semibold text-forest-700">Green</span>{" "}
              simply means sustainability — shown in a packaging cap made from
              bamboo. The company supports the{" "}
              <strong className="font-semibold text-forest-900">
                United Nations Sustainable Development Goal 3: Good Health and
                Well-being
              </strong>{" "}
              by carrying a gentle, medicinal scent in the liquid eraser.
            </p>
          </div>

          {/* Pillars */}
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Plant-based", desc: "Turmeric pigment" },
              { label: "Refillable", desc: "Glass + bamboo" },
              { label: "Non-toxic", desc: "Odor-free" },
            ].map((p, i) => (
              <li
                key={p.label}
                className="reveal-up rounded-xl border border-forest-100 bg-cream-dark/40 p-4 lift"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="font-display text-lg font-semibold text-forest-900">
                  {p.label}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-forest-700/80">
                  {p.desc}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
