import { ChevronDown } from "lucide-react";
import discobolus from "@/assets/discobolus-museum.jpg";

const CALENDLY = "https://calendly.com/dignangetz";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-24 overflow-hidden bg-[#0a0f1e]"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-cover [background-position:65%_22%] sm:[background-position:60%_28%]"
        style={{ backgroundImage: `url(${discobolus})` }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e]/40 via-transparent to-[#0a0f1e]/70 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none"
      />

      <div
        className="relative max-w-4xl text-center"
        style={{ textShadow: "0 2px 18px rgba(10,15,30,0.85), 0 1px 3px rgba(10,15,30,0.7)" }}
      >
        <p
          className="font-body text-xs tracking-widest uppercase text-[#7dd3fc] font-semibold mb-8"
          style={{ textShadow: "0 1px 2px rgba(10,15,30,0.95), 0 2px 12px rgba(10,15,30,0.85)" }}
        >
          ​
        </p>
        <h1 className="font-heading font-light text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-white mb-10 tracking-tight">
          Nothing stands without a foundation.
        </h1>
        <p className="font-body text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-6">
          We build the financial, AI, and operational systems your business is supposed to stand on
          — so it actually does.
        </p>
        <p className="font-body text-sm text-white/80 max-w-2xl mx-auto leading-relaxed mb-14">​</p>

        <div className="flex justify-center mb-12">
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 text-sm font-body font-semibold tracking-widest uppercase bg-accent text-white hover:bg-accent/90 transition-all duration-500 rounded-md shadow-[0_8px_30px_-8px_rgba(59,130,246,0.6)]"
          >
            Book a Free Walkthrough
          </a>
        </div>

        <a
          href="#approach"
          className="inline-flex items-center gap-2 text-xs font-body tracking-widest uppercase text-white/70 hover:text-white transition-colors duration-500"
        >
          Explore the work
          <ChevronDown size={16} className="animate-bounce" style={{ animationDuration: "2s" }} />
        </a>
      </div>
    </section>
  );
}
