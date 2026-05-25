import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import discobolus from "@/assets/discobolus-museum.jpg";
import logo from "@/assets/logo-clean.png";

export default function PhilosophySection() {
  const ref = useScrollFadeIn();

  return (
    <section id="approach" className="relative py-32 border-t border-border overflow-hidden bg-background">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center opacity-[0.05]"
        style={{ backgroundImage: `url(${discobolus})` }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.95) 65%, #ffffff 100%)",
        }}
      />
      <div ref={ref} className="fade-in-section relative container mx-auto px-6 max-w-3xl">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Stoa Intelligence Discobolus mark" width={32} height={32} className="h-8 w-8 object-contain" />
        </div>
        <p className="label-eyebrow text-accent mb-6 text-center">The Architect's Approach</p>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-center text-foreground leading-snug mb-10 tracking-tight">
          A sculpture is only as good as <span className="text-gradient-blue">what holds it up.</span>
        </h2>
        <div className="space-y-6 text-center">
          <p className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Nothing stands without a base. Most small businesses try to build height before they
            have anything underneath — more leads, more software, more headcount layered on top of
            books and operations that were never set straight.
          </p>
          <p className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Stoa Intelligence builds the foundation first, then everything that sits on top of it. The
            financial backbone, the operational spine, the AI where it actually earns its keep —
            measured, structural, and meant to outlast the moment it was built.
          </p>
          <p className="font-body text-base text-foreground leading-relaxed max-w-2xl mx-auto">
            We do not ship features. We set foundations.
          </p>
        </div>
      </div>
    </section>
  );
}
