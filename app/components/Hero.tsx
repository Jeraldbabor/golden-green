import Image from "next/image";

function Leaf({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M32 4C16 12 8 24 8 40c0 11 9 20 20 20 16 0 28-14 28-32 0-12-10-22-24-24Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M22 46c8-12 18-20 30-26"
        stroke="rgba(0,0,0,0.25)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Droplet({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M32 6c-10 14-18 24-18 34 0 10 8 18 18 18s18-8 18-18C50 30 42 20 32 6Z"
        fill="currentColor"
      />
      <ellipse cx="26" cy="38" rx="4" ry="6" fill="rgba(255,255,255,0.55)" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      {/* Background gradient + soft glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-cream via-cream to-forest-50"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 mx-auto h-[600px] max-w-5xl bg-gradient-radial from-gold-200/40 via-gold-100/20 to-transparent blur-3xl glow-pulse"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(255,210,77,0.35), rgba(255,238,179,0.15) 40%, transparent 70%)",
        }}
      />

      {/* Floating decorations */}
      <Leaf className="absolute left-[6%] top-[18%] -z-10 hidden h-20 w-20 text-forest-400/60 float-slow md:block" />
      <Leaf className="absolute right-[8%] top-[22%] -z-10 hidden h-14 w-14 text-forest-500/50 float-medium md:block" />
      <Droplet className="absolute left-[12%] bottom-[14%] -z-10 hidden h-10 w-10 text-gold-400/70 float-medium md:block" />
      <Droplet className="absolute right-[15%] bottom-[24%] -z-10 hidden h-8 w-8 text-gold-300/70 float-slow md:block" />
      <Leaf className="absolute left-[40%] top-[8%] -z-10 hidden h-6 w-6 text-forest-300/50 float-drift lg:block" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:px-10">
        <div className="max-w-xl">
          <span className="reveal-fade inline-flex items-center gap-2 rounded-full border border-forest-200 bg-cream/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-forest-700 shadow-sm backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold-400" />
            Plant-based · Refillable · Non-toxic
          </span>

          <h1 className="reveal-up mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-forest-900 sm:text-6xl lg:text-7xl">
            Correct <span className="italic text-gold-600">fast</span> that
            will <span className="relative inline-block">
              last
              <svg
                viewBox="0 0 180 16"
                className="absolute -bottom-2 left-0 h-3 w-full text-gold-400"
                aria-hidden
              >
                <path
                  d="M2 12 C 40 2, 90 2, 178 10"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>.
          </h1>

          <p className="reveal-up mt-8 max-w-lg text-lg leading-8 text-forest-800/85" style={{ animationDelay: "60ms" }}>
            Crafting a seamless blend of sustainability and function, the{" "}
            <strong className="font-semibold text-forest-900">
              Golden Green Yellow Liquid Eraser
            </strong>{" "}
            transforms natural plant pigments into a professional, eco-friendly
            solution that preserves the aesthetic of yellow pad paper while
            eliminating plastic waste.
          </p>

          <div className="reveal-up mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: "120ms" }}>
            <a
              href="#about"
              className="group inline-flex items-center gap-2 rounded-full bg-forest-700 px-7 py-3.5 text-sm font-semibold text-cream shadow-lg shadow-forest-800/20 transition hover:bg-forest-800 hover:shadow-xl"
            >
              Discover the story
              <span aria-hidden className="transition group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-forest-700/20 bg-cream/60 px-7 py-3.5 text-sm font-semibold text-forest-800 backdrop-blur transition hover:border-forest-700/50 hover:bg-cream"
            >
              See the product
            </a>
          </div>

          <dl className="reveal-fade mt-12 grid max-w-md grid-cols-3 gap-6" style={{ animationDelay: "200ms" }}>
            {[
              { k: "15 mL", v: "glass bottle" },
              { k: "100%", v: "plant-based" },
              { k: "0%", v: "plastic waste" },
            ].map((s) => (
              <div key={s.v} className="border-l-2 border-gold-400 pl-3">
                <dt className="font-display text-2xl font-semibold text-forest-900">
                  {s.k}
                </dt>
                <dd className="text-xs uppercase tracking-wider text-forest-700/70">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Product visual */}
        <div className="reveal-zoom relative mx-auto w-full max-w-md">
          <div className="hero-drift relative">
            {/* Halo */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-gold-300/50 via-gold-200/20 to-forest-200/0 blur-2xl"
            />
            {/* Bottle image */}
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm">
              <Image
                src="/hero/bottle.png"
                alt="Golden Green Yellow Liquid Eraser bottle with bamboo cap"
                fill
                priority
                sizes="(min-width: 1024px) 28rem, 80vw"
                className="object-contain drop-shadow-2xl"
              />
            </div>
            {/* Floating chips */}
            <div className="absolute -left-2 top-[22%] hidden rounded-2xl border border-forest-100 bg-cream/95 px-4 py-3 shadow-xl backdrop-blur sm:flex items-center gap-3 float-medium">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold-100">
                <span className="text-gold-600" aria-hidden>🌿</span>
              </span>
              <div className="leading-tight">
                <div className="text-xs uppercase tracking-wider text-forest-700/70">
                  Bamboo cap
                </div>
                <div className="text-sm font-semibold text-forest-900">
                  Sustainable
                </div>
              </div>
            </div>
            <div className="absolute -right-2 bottom-[18%] hidden rounded-2xl border border-forest-100 bg-cream/95 px-4 py-3 shadow-xl backdrop-blur sm:flex items-center gap-3 float-slow">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-forest-100">
                <span className="text-forest-700" aria-hidden>♻</span>
              </span>
              <div className="leading-tight">
                <div className="text-xs uppercase tracking-wider text-forest-700/70">
                  Refillable
                </div>
                <div className="text-sm font-semibold text-forest-900">
                  Zero waste
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="reveal-fade mx-auto mt-16 flex w-fit flex-col items-center gap-2 text-forest-700/70" style={{ animationDelay: "260ms" }}>
        <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <span className="block h-8 w-px animate-pulse bg-forest-500/50" />
      </div>
    </section>
  );
}
