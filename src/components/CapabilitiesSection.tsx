import { Calculator, Brain, LineChart, Hammer } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const capabilities = [
  {
    icon: Calculator,
    title: "Financial Systems Automation",
    body: "Books that close themselves, dashboards that don't lie, and cash-flow you can read at a glance.",
    examples: [
      "Invoice, payment, and reconciliation flows wired between QuickBooks and the field",
      "Document processing for receipts, statements, and insurance EOBs",
      "Monthly reporting packets that build themselves the morning of the meeting",
    ],
  },
  {
    icon: Brain,
    title: "AI Implementation",
    body: "Practical AI placed exactly where it earns its keep — never as a shiny object.",
    examples: [
      "Voice agents and AI receptionists that answer, qualify, and book after hours",
      "Knowledge assistants trained on your SOPs, pricebooks, and past jobs",
      "Lead follow-up sequences that text, email, and route by intent",
    ],
  },
  {
    icon: LineChart,
    title: "Predictive & Analytics AI",
    body: "Numbers that look forward, not just back — so the next quarter isn't a guess.",
    examples: [
      "Sales and booking forecasts grounded in your own seasonal history",
      "Job-cost and margin dashboards that flag the work bleeding money",
      "Demand and capacity planning for crews, chairs, or appointment slots",
    ],
  },
  {
    icon: Hammer,
    title: "Intelligent Systems Build",
    body: "When off-the-shelf won't fit, we draft and build the exact tool your business needs.",
    examples: [
      "Custom internal tools for estimators, schedulers, and office managers",
      "Client portals with AI-assisted quoting, intake, and project status",
      "Decision dashboards that connect CRM, scheduling, and invoicing in one view",
    ],
  },
];

export default function CapabilitiesSection() {
  const ref = useScrollFadeIn();

  return (
    <section id="capabilities" className="relative py-32 border-t border-border overflow-hidden bg-card">
      <div ref={ref} className="fade-in-section relative container mx-auto px-6">
        <p className="label-eyebrow text-accent mb-6 text-center">Core Capabilities</p>
        <h2 className="font-heading font-light text-3xl sm:text-4xl text-center text-foreground mb-4 tracking-tight">
          What we build, <span className="text-gradient-blue">in plain terms.</span>
        </h2>
        <p className="font-body text-base text-muted-foreground text-center max-w-2xl mx-auto mb-20">
          Four disciplines, one practice. Engagements typically blend two or three.
        </p>

        <div className="grid md:grid-cols-2 gap-5 max-w-6xl mx-auto">
          {capabilities.map((c) => (
            <article
              key={c.title}
              className="bg-white p-10 rounded-xl border border-border transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_12px_32px_-12px_rgba(59,130,246,0.25)]"
              style={{ boxShadow: "0 4px 16px -4px rgba(15,23,42,0.06)" }}
            >
              <c.icon className="text-accent mb-6" size={28} strokeWidth={1.5} />
              <h3 className="font-heading font-normal text-xl text-foreground mb-3 tracking-tight">{c.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">{c.body}</p>
              <p className="label-eyebrow mb-3 text-accent/80">For example</p>
              <ul className="space-y-2">
                {c.examples.map((ex) => (
                  <li
                    key={ex}
                    className="font-body text-sm text-foreground/85 leading-relaxed flex gap-3"
                  >
                    <span aria-hidden className="text-accent mt-1.5 h-px w-3 bg-accent flex-shrink-0" />
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
