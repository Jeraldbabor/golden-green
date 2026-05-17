const goals = [
  "Provide a yellow liquid eraser specifically designed for yellow pad paper using natural ingredients such as turmeric.",
  "Make corrections less visible on yellow pad paper by matching the paper tone.",
  "Offer an eco-friendly alternative to white correction fluid, which is highly visible on yellow paper.",
  "Help create neater and more presentable notes and documents on yellow pad paper.",
  "Reduce the strong contrast caused by white correction fluid on yellow paper.",
  "Allow smoother writing over corrected areas on yellow pad paper while using a sustainable bamboo material cap.",
];

export default function Goals() {
  return (
    <section
      id="goals"
      className="relative overflow-hidden bg-gradient-to-b from-cream via-cream-dark/40 to-cream py-24 lg:py-32"
    >
      {/* Decorative dots */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(37,89,42,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal-fade max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold-700">
            <span className="h-px w-8 bg-gold-500" /> Goals
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-forest-900 sm:text-5xl">
            Six clear targets we&apos;re{" "}
            <span className="italic text-gold-600">writing toward</span>.
          </h2>
        </div>

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {goals.map((g, i) => (
            <li
              key={i}
              className="reveal-up group relative overflow-hidden rounded-2xl border border-forest-100 bg-cream p-7 lift"
            >
              {/* Big watermark number */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-4 font-display text-[7rem] font-semibold leading-none text-gold-100 transition-colors group-hover:text-gold-200"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="relative inline-flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-forest-700 text-cream text-sm font-semibold shadow-md">
                  {i + 1}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-forest-700/70">
                  Goal
                </span>
              </span>

              <p className="relative mt-5 text-base leading-7 text-forest-900/90">
                {g}
              </p>

              <span
                aria-hidden
                className="mt-6 block h-px w-12 bg-gradient-to-r from-gold-400 to-transparent transition-all group-hover:w-24"
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
