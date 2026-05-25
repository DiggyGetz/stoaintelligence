import type { CSSProperties } from "react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import logo from "@/assets/logo-clean.png";

const CALENDLY = "https://calendly.com/dignangetz";

const gradientText: CSSProperties = {
  background: "linear-gradient(135deg, hsl(36 70% 78%) 0%, hsl(32 48% 52%) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const stats = [
  { stat: "3", label: "Commissions Reserved" },
  { stat: "12", label: "Months Locked Pricing" },
  { stat: "1", label: "Founder, In the Room" },
];

export default function ProofSection() {
  const ref = useScrollFadeIn();

  return (
    <section
      id="founding"
      className="relative py-32 border-t border-border overflow-hidden"
      style={{ background: "hsl(217 42% 8%)" }}
    >
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[480px] h-[480px] rounded-full"
          style={{ background: "hsl(32 42% 40% / 0.07)", filter: "blur(100px)" }} />
        <div className="absolute bottom-0 right-1/3 w-[360px] h-[360px] rounded-full"
          style={{ background: "hsl(32 42% 35% / 0.05)", filter: "blur(80px)" }} />
      </div>
      <div aria-hidden className="absolute left-1/2 top-0 -translate-x-1/2 h-px w-24"
        style={{ background: "hsl(32 42% 52% / 0.6)" }} />

      <div ref={ref} className="fade-in-section relative container mx-auto px-6 max-w-4xl text-center">
        <div className="flex justify-center mb-8">
          <img src={logo} alt="Stoa Intelligence mark" width={40} height={40}
            className="h-10 w-10 object-contain" style={{ opacity: 0.8 }} />
        </div>
        <p className="label-eyebrow text-accent mb-6">Founding Clients</p>
        <h2 className="font-heading font-normal text-4xl sm:text-5xl leading-tight mb-6 text-foreground">
          Three commissions open{" "}
          <span style={gradientText}>this quarter.</span>
        </h2>
        <p className="font-body text-base leading-relaxed max-w-xl mx-auto mb-14"
          style={{ color: "hsl(36 32% 90% / 0.65)" }}>
          Locked pricing for 12 months. The founder's direct attention. A public case-study credit
          if you choose to give one. When the three are signed, founding pricing closes permanently.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {stats.map(({ stat, label }) => (
            <div
              key={label}
              className="p-8 text-center transition-all duration-500"
              style={{
                background: "hsl(217 38% 11% / 0.75)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid hsl(32 42% 52% / 0.18)",
                boxShadow: "0 20px 60px -20px hsl(217 60% 4% / 0.6)",
              }}
            >
              <p className="font-heading text-5xl mb-3" style={gradientText}>{stat}</p>
              <p className="label-eyebrow" style={{ color: "hsl(36 32% 90% / 0.55)" }}>{label}</p>
            </div>
          ))}
        </div>

        <a
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 text-sm font-body tracking-widest uppercase bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-500"
          style={{ boxShadow: "0 8px 40px -8px hsl(32 42% 30% / 0.55)" }}
        >
          Claim a Founding Slot
        </a>
      </div>
    </section>
  );
}