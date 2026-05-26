import type { CSSProperties } from "react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const CALENDLY = "https://calendly.com/dignangetz";

type Package = {
  name: string;
  tagline: string;
  pain: string;
  includes: string[];
  emphasis?: boolean;
};

const packages: Package[] = [
  {
    name: "Foundation",
    tagline: "Stop the bleeding.",
    pain: "You're losing hours a week to manual entry, missed invoices, and a phone that never stops ringing while you're on the job.",
    includes: [
      "Bookkeeping cleanup & chart of accounts",
      "Lead intake form + auto-routing to your phone",
      "One operations automation (quoting, scheduling, or follow-up)",
      "Monthly cash-flow snapshot",
    ],
  },
  {
    name: "Structure",
    tagline: "Build the load-bearing walls.",
    pain: "Revenue is up but the back office is breaking. You need real systems before the next hire — not after.",
    includes: [
      "Everything in Foundation",
      "Custom dashboard: revenue, jobs, AR/AP, lead pipeline",
      "AI-assisted quoting, follow-up, or review-collection workflow",
      "QuickBooks / job-cost integration",
      "Bi-weekly working sessions with the founder",
    ],
    emphasis: true,
  },
  {
    name: "Stature",
    tagline: "Architecture for scale.",
    pain: "You're past the scrappy phase. Multiple crews, multiple locations, or a thesis worth defending — and the systems need to look the part.",
    includes: [
      "Everything in Structure",
      "Bespoke internal tooling or client portal",
      "Multi-entity financial reporting",
      "AI implementation across sales, ops, and finance",
      "Quarterly business-review with full system audit",
      "Priority response and on-call architecture",
    ],
  },
];

const gradientTextStyle: CSSProperties = {
  background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

export default function PackagesSection() {
  const ref = useScrollFadeIn();

  return (
    <section id="packages" className="relative py-32 bg-background overflow-hidden">
      <div ref={ref} className="fade-in-section relative container mx-auto px-6">
        <p className="label-eyebrow text-accent mb-6 text-center">Engagements</p>
        <h2 className="font-heading font-light text-3xl sm:text-4xl text-center text-foreground mb-4 tracking-tight">
          Three commissions. <span style={gradientTextStyle}>Built to your scale.</span>
        </h2>
        <p className="font-body text-base text-muted-foreground text-center max-w-2xl mx-auto mb-20">
          Productized engagements with clear scope. Most operators land in Foundation or Structure;
          Stature is reserved for businesses ready to operate like an institution.
        </p>

        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {packages.map((p) => (
            <article
              key={p.name}
              className="group relative flex flex-col p-10 rounded-xl transition-all duration-500 hover:-translate-y-1"
              style={{
                background: "#ffffff",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: "1px solid hsl(214 32% 91%)",
                boxShadow: "0 4px 24px -8px rgba(15,23,42,0.08)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "#eff6ff";
                el.style.border = "1px solid #3b82f6";
                el.style.boxShadow =
                  "0 0 0 1px rgba(59,130,246,0.15), 0 24px 60px -20px rgba(59,130,246,0.35)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "#ffffff";
                el.style.border = "1px solid hsl(214 32% 91%)";
                el.style.boxShadow = "0 4px 24px -8px rgba(15,23,42,0.08)";
              }}
            >
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-32 rounded-t-xl pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.18) 0%, transparent 70%)",
                }}
              />
              <header className="relative mb-6">
                <p className="label-eyebrow text-accent mb-3">{p.tagline}</p>
                <h3
                  className="font-heading font-light text-2xl mb-2 tracking-tight transition-colors duration-500"
                  style={{ color: "hsl(222 47% 11%)" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)";
                    el.style.webkitBackgroundClip = "text";
                    el.style.backgroundClip = "text";
                    el.style.webkitTextFillColor = "transparent";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "";
                    el.style.webkitBackgroundClip = "";
                    el.style.backgroundClip = "";
                    el.style.webkitTextFillColor = "";
                    el.style.color = "hsl(222 47% 11%)";
                  }}
                >
                  {p.name}
                </h3>
                <div className="h-px w-12 bg-accent/70 mt-3" />
              </header>
              <p className="relative font-body text-sm text-muted-foreground leading-relaxed mb-6">
                {p.pain}
              </p>
              <ul className="relative space-y-3 mb-8 flex-1">
                {p.includes.map((line) => (
                  <li
                    key={line}
                    className="font-body text-sm text-foreground leading-relaxed flex gap-3"
                  >
                    <span aria-hidden className="text-accent mt-1.5 h-px w-3 bg-accent flex-shrink-0" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block text-center px-6 py-3 text-xs font-body font-semibold tracking-widest uppercase rounded-md transition-all duration-300 border border-accent text-accent hover:bg-accent hover:text-white"
              >
                Discuss the Engagement
              </a>
            </article>
          ))}
        </div>
        <p className="font-body text-xs tracking-widest uppercase text-muted-foreground text-center mt-10">
          Engagements are scoped to fit. Pricing is shared on the first call.
        </p>
      </div>
    </section>
  );
}
