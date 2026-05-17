type Method = {
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
};

const methods: Method[] = [
  {
    label: "Phone",
    value: "+63 960 456 1078",
    href: "tel:+639604561078",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.73 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.36 1.85.6 2.81.73A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
  },
  {
    label: "Address",
    value: "Phase 3, Block 3, Lot 31 FBR, General Mariano Alvarez, Cavite, Philippines",
    href: "https://www.google.com/maps/search/?api=1&query=General+Mariano+Alvarez+Cavite+Philippines",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 22s-8-7.58-8-13a8 8 0 1 1 16 0c0 5.42-8 13-8 13Z" />
        <circle cx="12" cy="9" r="3" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "goldengreenph@gmail.com",
    href: "mailto:goldengreenph@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 7 9-7" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-forest-700 via-forest-800 to-forest-900" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(255,210,77,0.5), transparent 35%), radial-gradient(circle at 20% 80%, rgba(143,199,143,0.4), transparent 45%)",
        }}
      />
      {/* Floating accent shapes */}
      <div aria-hidden className="pointer-events-none absolute -left-12 top-12 h-32 w-32 rounded-full bg-gold-400/20 blur-3xl float-slow" />
      <div aria-hidden className="pointer-events-none absolute -right-10 bottom-12 h-40 w-40 rounded-full bg-forest-400/20 blur-3xl float-medium" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal-fade mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
            <span className="h-px w-8 bg-gold-400" /> Get in touch{" "}
            <span className="h-px w-8 bg-gold-400" />
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-cream sm:text-5xl">
            Let&apos;s build a quieter,{" "}
            <span className="italic text-gold-300">greener</span> desk
            together.
          </h2>
          <p className="mt-5 text-base leading-7 text-cream/80">
            Questions, partnerships, or refill orders — we&apos;re a message
            away.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {methods.map((m, i) => (
            <li
              key={m.label}
              className="reveal-up"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <a
                href={m.href}
                target={m.href.startsWith("http") ? "_blank" : undefined}
                rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex h-full flex-col rounded-2xl border border-forest-700/60 bg-forest-800/40 p-7 backdrop-blur transition hover:-translate-y-1 hover:border-gold-400/50 hover:bg-forest-800/60"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-400/15 text-gold-300 transition group-hover:bg-gold-400/25 group-hover:text-gold-200">
                    {m.icon}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300/80">
                    {m.label}
                  </span>
                </div>
                <div className="mt-5 text-base leading-7 text-cream group-hover:text-gold-100">
                  {m.value}
                </div>
                <span className="mt-auto pt-6 text-xs font-semibold uppercase tracking-wider text-gold-300/70 transition group-hover:text-gold-300">
                  Reach out →
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* CTA card */}
        <div className="reveal-zoom mt-14 overflow-hidden rounded-[2rem] border border-gold-400/30 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 p-px shadow-2xl">
          <div className="rounded-[1.95rem] bg-forest-900/95 px-8 py-10 sm:px-12 sm:py-12">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-display text-3xl font-semibold text-cream">
                  Ready for a quieter correction?
                </h3>
                <p className="mt-2 text-cream/80">
                  Email us — we reply within one working day.
                </p>
              </div>
              <a
                href="mailto:goldengreenph@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-semibold text-forest-900 shadow-lg transition hover:bg-gold-300"
              >
                Email goldengreenph@gmail.com
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
