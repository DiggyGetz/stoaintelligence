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
  background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

export default function ProcessSection() {
  const ref = useScrollFadeIn();

  return (
    <section
      id="process"
      className="relative py-32 overflow-hidden"
      style={{ background: "#f8fafc" }}
    >
      <div ref={ref} className="fade-in-section relative container mx-auto px-6 max-w-6xl">
        <p className="label-eyebrow text-accent mb-6 text-center">The Method</p>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-center text-foreground mb-4 tracking-tight">
          Survey · Blueprint · Build · <span style={numeralStyle}>Refine</span>
        </h2>
        <p className="font-body text-base text-muted-foreground text-center max-w-2xl mx-auto mb-20">
          Four phases. Borrowed from architecture because building a business is the same discipline.
        </p>

        <div className="grid md:grid-cols-4 gap-5">
          {phases.map((p, i) => (
            <div
              key={p.title}
              className="group relative p-8 flex flex-col bg-white border border-border rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_12px_32px_-12px_rgba(59,130,246,0.25)]"
              style={{ boxShadow: "0 4px 16px -4px rgba(15,23,42,0.06)" }}
            >
              {i < phases.length - 1 && (
                <div
                  aria-hidden
                  className="hidden md:block absolute -right-3 top-9 w-6 h-px z-10"
                  style={{
                    background: "linear-gradient(to right, rgba(59,130,246,0.4), transparent)",
                  }}
                />
              )}
              <span
                className="font-heading text-4xl font-light mb-6 leading-none block"
                style={numeralStyle}
              >
                {p.numeral}
              </span>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                {p.title}
              </h3>
              <div className="h-px w-12 bg-accent/60 mb-5" />
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {p.body}
              </p>
              <p className="label-eyebrow mb-1 text-accent/80">Deliverable</p>
              <p className="font-body text-xs leading-relaxed text-muted-foreground">
                {p.deliverable}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
