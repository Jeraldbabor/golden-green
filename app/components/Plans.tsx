type Plan = {
  range: string;
  label: string;
  title: string;
  body: string;
  accent: "forest" | "gold";
};

const plans: Plan[] = [
  {
    range: "2026",
    label: "Short-term plan",
    title: "Launch the yellow correction fluid that matches the page.",
    body: "To provide students and professionals with a high-quality, plant-based yellow correction fluid that perfectly matches yellow pad paper and eliminates bright white marks.",
    accent: "gold",
  },
  {
    range: "2027 – 2030",
    label: "Long-term plan",
    title: "A full line of refillable, toxic-free stationery.",
    body: "Golden Green plans to reduce plastic waste in the school and office supply industry by creating a full line of refillable, toxic-free stationery products that harmonize daily work with environmental care.",
    accent: "forest",
  },
];

export default function Plans() {
  return (
    <section id="plans" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal-fade max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold-700">
            <span className="h-px w-8 bg-gold-500" /> Roadmap
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-forest-900 sm:text-5xl">
            Plans for{" "}
            <span className="italic text-gold-600">today</span> — and the
            decade ahead.
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Vertical gold line */}
          <div
            aria-hidden
            className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold-300 via-gold-400 to-forest-500 lg:left-1/2 lg:-translate-x-1/2"
          />

          <ul className="space-y-12 lg:space-y-20">
            {plans.map((p, i) => {
              const isEven = i % 2 === 1;
              return (
                <li
                  key={p.range}
                  className={`relative grid gap-6 lg:grid-cols-2 lg:gap-12 ${
                    isEven ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Node */}
                  <div
                    aria-hidden
                    className="absolute left-4 sm:left-6 top-6 -translate-x-1/2 lg:left-1/2"
                  >
                    <span className="relative flex h-5 w-5 items-center justify-center">
                      <span
                        className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-50 ${
                          p.accent === "gold" ? "bg-gold-400" : "bg-forest-500"
                        }`}
                      />
                      <span
                        className={`relative inline-flex h-3 w-3 rounded-full ${
                          p.accent === "gold"
                            ? "bg-gold-500 ring-4 ring-gold-200"
                            : "bg-forest-600 ring-4 ring-forest-200"
                        }`}
                      />
                    </span>
                  </div>

                  {/* Year side */}
                  <div
                    className={`reveal-${isEven ? "right" : "left"} pl-12 sm:pl-16 lg:pl-0 ${
                      isEven ? "lg:text-left lg:pl-20" : "lg:text-right lg:pr-20"
                    }`}
                  >
                    <div className="inline-flex items-center gap-2 rounded-full border border-forest-200 bg-cream px-3 py-1 text-xs font-semibold uppercase tracking-wider text-forest-700">
                      <span
                        className={`inline-block h-1.5 w-1.5 rounded-full ${
                          p.accent === "gold" ? "bg-gold-500" : "bg-forest-500"
                        }`}
                      />
                      {p.label}
                    </div>
                    <div className="mt-4 font-display text-6xl font-semibold leading-none text-forest-900 sm:text-7xl">
                      {p.range}
                    </div>
                  </div>

                  {/* Card side */}
                  <div className={`reveal-${isEven ? "left" : "right"} pl-12 sm:pl-16 lg:pl-0`}>
                    <article
                      className={`rounded-2xl border bg-cream p-7 lift sm:p-8 ${
                        p.accent === "gold"
                          ? "border-gold-300/60 shadow-lg shadow-gold-400/10"
                          : "border-forest-200 shadow-lg shadow-forest-700/10"
                      }`}
                    >
                      <h3 className="font-display text-2xl font-semibold leading-snug text-forest-900 sm:text-3xl">
                        {p.title}
                      </h3>
                      <p className="mt-4 text-base leading-7 text-forest-800/85">
                        {p.body}
                      </p>
                    </article>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
