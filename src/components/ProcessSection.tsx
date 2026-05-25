import type { CSSProperties } from "react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const phases = [
  {
    numeral: "01",
    title: "Survey",
    body: "Two weeks inside your books, your tools, and a day with your team to map every leak, manual step, and missed lead.",
    deliverable: "Findings memo · system map · prioritized punch list",
  },
  {
    numeral: "02",
    title: "Blueprint",
    body: "A single document showing exactly what we will build, in what order, and what it will return. No surprises, no scope creep, no jargon.",
    deliverable: "Signed scope · 90-day plan · pricing locked",
  },
  {
    numeral: "03",
    title: "Build",
    body: "Heads-down implementation in working sessions, not invoices. Each system is built, tested, and handed over with full documentation.",
    deliverable: "Live systems · documented · trained-in",
  },
  {
    numeral: "04",
    title: "Refine",
    body: "Systems are kept honest. We monitor, tune, and extend the build as your business grows — under a fixed monthly engagement, not surprise bills.",
    deliverable: "Monthly reviews · quarterly audit · evolving roadmap",
  },
];

const numeralStyle: CSSProperties = {
  background: "linear-gradient(135deg, hsl(36 70% 75%) 0%, hsl(32 44% 46%) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const cardBase: CSSProperties = {
  background: "hsl(217 36% 11% / 0.8)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  border: "1px solid hsl(32 42% 52% / 0.12)",
  boxShadow: "0 4px 24px -8px hsl(217 60% 4% / 0.4)",
};

const cardHover: CSSProperties = {
  border: "1px solid hsl(32 42% 52% / 0.35)",
  boxShadow: "0 8px 40px -8px hsl(32 42% 20% / 0.3)",
};

export default function ProcessSection() {
  const ref = useScrollFadeIn();

  return (
    <section id="process" className="relative py-32 border-t border-border overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 100%, hsl(32 42% 28% / 0.06) 0%, transparent 55%)" }}
      />
      <div ref={ref} className="fade-in-section relative container mx-auto px-6 max-w-6xl">
        <p className="label-eyebrow mb-6 text-center">The Method</p>
        <h2 className="font-heading font-normal text-3xl sm:text-4xl text-center text-foreground mb-4">
          Survey · Blueprint · Build · <span className="text-accent">Refine</span>
        </h2>
        <p className="font-body text-base text-muted-foreground text-center max-w-2xl mx-auto mb-20">
          Four phases. Borrowed from architecture because building a business is the same discipline.
        </p>

        <div className="grid md:grid-cols-4 gap-5">
          {phases.map((p, i) => (
            <div
              key={p.title}
              className="group relative p-8 flex flex-col transition-all duration-500 hover:-translate-y-1"
              style={cardBase}
              onMouseEnter={(e) => Object.assign((e.currentTarget as HTMLElement).style, cardHover)}
              onMouseLeave={(e) => Object.assign((e.currentTarget as HTMLElement).style, cardBase)}
            >
              {i < phases.length - 1 && (
                <div aria-hidden
                  className="hidden md:block absolute -right-2.5 top-9 w-5 h-px z-10"
                  style={{ background: "linear-gradient(to right, hsl(32 42% 52% / 0.35), transparent)" }}
                />
              )}
              <span className="font-body text-4xl font-light mb-6 leading-none block" style={numeralStyle}>
                {p.numeral}
              </span>
              <h3 className="font-heading text-xl text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                {p.title}
              </h3>
              <div className="hairline mb-5" />
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{p.body}</p>
              <p className="label-eyebrow mb-1" style={{ color: "hsl(32 42% 52% / 0.7)" }}>Deliverable</p>
              <p className="font-body text-xs leading-relaxed" style={{ color: "hsl(36 32% 90% / 0.65)" }}>
                {p.deliverable}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}