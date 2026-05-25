import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const primary = [
  "General Contractors",
  "HVAC & Plumbing",
  "Electrical Trades",
  "Landscaping & Excavation",
  "Roofing & Exteriors",
  "Painting & Finish",
  "Auto Repair & Body Shops",
  "Dental & Specialty Practices",
];

const secondary = [
  "Med Spas & Aesthetics",
  "Veterinary Clinics",
  "Boutique Law & Accounting",
  "Real Estate Teams",
  "Gyms & Fitness",
  "E-commerce & DTC",
];

export default function IndustriesSection() {
  const ref = useScrollFadeIn();

  return (
    <section id="industries" className="relative py-32 border-t border-border bg-card overflow-hidden">
      <div ref={ref} className="fade-in-section relative container mx-auto px-6 max-w-5xl">
        <p className="label-eyebrow text-accent mb-6 text-center">Who We Work With</p>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-center text-foreground mb-6 tracking-tight">
          When ambition <span className="text-gradient-blue">outpaces infrastructure.</span>
        </h2>
        <p className="font-body text-base text-muted-foreground text-center max-w-2xl mx-auto mb-16 leading-relaxed">
          Stoa Intelligence works with smaller businesses and fast-growing operators who've started running
          into the limits of how they got here. We anchor in owner-operated trades and small
          practices, and extend the same precision to a curated set of professional and consumer
          SMBs.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="label-eyebrow mb-6">Primary — Trades &amp; Practices</p>
            <ul className="space-y-3 border-t border-border pt-6">
              {primary.map((item) => (
                <li
                  key={item}
                  className="font-heading text-lg text-foreground border-b border-border/60 pb-3 flex justify-between items-baseline"
                >
                  <span>{item}</span>
                  <span aria-hidden className="text-accent text-xs">·</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label-eyebrow mb-6">Also Welcomed</p>
            <ul className="space-y-3 border-t border-border pt-6">
              {secondary.map((item) => (
                <li
                  key={item}
                  className="font-body text-base text-muted-foreground border-b border-border/60 pb-3 flex justify-between items-baseline"
                >
                  <span>{item}</span>
                  <span aria-hidden className="text-accent/60 text-xs">·</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
