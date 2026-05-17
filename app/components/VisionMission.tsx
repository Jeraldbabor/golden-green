function MissionIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
      <path d="M22 2 12 12" />
    </svg>
  );
}

function VisionIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
      aria-hidden
    >
      <path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export default function VisionMission() {
  return (
    <section
      id="vision"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* Background pattern */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-forest-800 via-forest-900 to-forest-950" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,210,77,0.6), transparent 40%), radial-gradient(circle at 80% 80%, rgba(143,199,143,0.5), transparent 45%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal-fade mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
            <span className="h-px w-8 bg-gold-400" /> Vision &amp; Mission{" "}
            <span className="h-px w-8 bg-gold-400" />
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-cream sm:text-5xl">
            Building a quieter,{" "}
            <span className="italic text-gold-300">greener</span> kind of
            stationery.
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Mission */}
          <article className="reveal-left group relative overflow-hidden rounded-[2rem] border border-forest-700/60 bg-forest-800/40 p-8 backdrop-blur lift hover:border-gold-400/40 sm:p-10">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold-400/10 blur-3xl" />
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-400/15 text-gold-300">
                <MissionIcon />
              </span>
              <h3 className="font-display text-3xl font-semibold text-cream">
                Mission
              </h3>
            </div>
            <p className="mt-6 text-base leading-7 text-cream/85 sm:text-lg sm:leading-8">
              To revolutionize the academic and professional supplies industry
              by providing sustainable, innovative correction solutions that
              empower users to maintain neatness and confidence in their written
              work. We are committed to utilizing renewable plant-based
              materials and local resources, minimizing environmental impact
              while creating products that harmonize with standard yellow pad
              paper.
            </p>
          </article>

          {/* Vision */}
          <article className="reveal-right group relative overflow-hidden rounded-[2rem] border border-forest-700/60 bg-forest-800/40 p-8 backdrop-blur lift hover:border-gold-400/40 sm:p-10">
            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-forest-400/10 blur-3xl" />
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-400/15 text-forest-200">
                <VisionIcon />
              </span>
              <h3 className="font-display text-3xl font-semibold text-cream">
                Vision
              </h3>
            </div>
            <p className="mt-6 text-base leading-7 text-cream/85 sm:text-lg sm:leading-8">
              To become the leading global brand for eco-friendly and practical
              stationery, setting a new standard for sustainability and design.
              We envision a future where all academic and office materials are
              circular, non-toxic, and sourced in harmony with nature —
              supporting a greener and more mindful community of learners and
              professionals.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
