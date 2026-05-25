import type { CSSProperties } from "react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import logo from "@/assets/logo-clean.png";

const CALENDLY = "https://calendly.com/dignangetz";

const gradientText: CSSProperties = {
  background: "linear-gradient(135deg, #60a5fa 0%, #22d3ee 100%)",
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
      className="relative py-32 overflow-hidden"
      style={{ background: "#0a0f1e" }}
    >
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-20 -left-20 w-[520px] h-[520px] rounded-full"
          style={{ background: "rgba(59,130,246,0.15)", filter: "blur(110px)" }}
        />
        <div
          className="absolute -bottom-20 -right-20 w-[420px] h-[420px] rounded-full"
          style={{ background: "rgba(6,182,212,0.12)", filter: "blur(100px)" }}
        />
      </div>

      <div ref={ref} className="fade-in-section relative container mx-auto px-6 max-w-4xl text-center">
        <div className="flex justify-center mb-8">
          <img
            src={logo}
            alt="Stoa Intelligence mark"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
            style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
          />
        </div>
        <p className="font-body text-xs tracking-widest uppercase text-[#60a5fa] font-semibold mb-6">
          Founding Clients
        </p>
        <h2 className="font-heading font-bold text-4xl sm:text-5xl leading-tight mb-6 text-white tracking-tight">
          Three commissions open <span style={gradientText}>this quarter.</span>
        </h2>
        <p className="font-body text-base leading-relaxed max-w-xl mx-auto mb-14 text-white/70">
          Locked pricing for 12 months and the founder's direct attention — when the three are
          signed, founding pricing closes permanently.
        </p>

        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          {stats.map(({ stat, label }) => (
            <div
              key={label}
              className="p-8 text-center rounded-xl transition-all duration-500 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(96,165,250,0.18)",
                boxShadow: "0 20px 60px -20px rgba(0,0,0,0.6)",
              }}
            >
              <p className="font-heading font-bold text-5xl mb-3" style={gradientText}>
                {stat}
              </p>
              <p className="font-body text-xs tracking-widest uppercase text-white/55 font-medium">
                {label}
              </p>
            </div>
          ))}
        </div>

        <a
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 text-sm font-body font-semibold tracking-widest uppercase bg-accent text-white hover:bg-accent/90 transition-all duration-500 rounded-md"
          style={{ boxShadow: "0 8px 40px -8px rgba(59,130,246,0.7)" }}
        >
          Claim a Founding Slot
        </a>
      </div>
    </section>
  );
}
