import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import dignanImg from "@/assets/dignan-getz-clean.jpg";
import discobolus from "@/assets/discobolus-museum.jpg";
import logo from "@/assets/logo-clean.png";

export default function AboutSection() {
  const ref = useScrollFadeIn();

  return (
    <section id="about" className="relative py-32 border-t border-border overflow-hidden bg-background">
      <div
        aria-hidden
        className="absolute right-0 top-0 bottom-0 w-1/2 bg-cover bg-no-repeat opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: `url(${discobolus})`, backgroundPosition: "right center" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.95) 75%, #ffffff 100%)",
        }}
      />
      <div ref={ref} className="fade-in-section relative container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <div className="mb-6">
              <img src={logo} alt="Stoa Intelligence Discobolus mark" width={32} height={32} className="h-8 w-8 object-contain" />
            </div>
            <p className="label-eyebrow text-accent mb-6">Why Stoa Intelligence</p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-8 leading-snug tracking-tight">
              Precision is a <span className="text-gradient-blue">discipline</span>, not a personality trait.
            </h2>
            <div className="space-y-5 font-body text-base text-muted-foreground leading-relaxed">
              <p>
                The <span className="text-foreground font-medium">Stoa</span> (στοά) was the covered
                colonnade where Greek philosophers taught discipline, reason, and steady judgment —
                the standard a craftsman holds himself to before anyone else asks him to.
              </p>
              <p>
                Our mark is the <span className="text-foreground font-medium">Discobolus</span> —
                Myron's discus thrower, perfectly balanced at the moment of release. It is what we
                build toward: tension and form held in working order, every part of the structure
                doing exactly what it was set there to do.
              </p>
              <p>
                We work with our names on it, in plain English, and with the assumption that the
                people we serve are building something they intend to keep.
              </p>
            </div>
          </div>

          <aside className="border-l border-border pl-10 space-y-6">
            <p className="label-eyebrow">What you can expect</p>
            <ul className="space-y-4">
              {[
                "The founder, in the room. No account-manager middlemen.",
                "Clear scope. We tell you what we're building before you ask.",
                "Documentation and training, every time. We don't trap you.",
                "Plain English. If we said it, you should be able to repeat it.",
              ].map((line) => (
                <li
                  key={line}
                  className="font-body text-sm text-foreground/85 leading-relaxed flex gap-3"
                >
                  <span aria-hidden className="text-accent mt-2 h-px w-3 bg-accent flex-shrink-0" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="border-t border-border pt-20">
          <p className="label-eyebrow text-accent mb-6 text-center">The Founder</p>

          <div className="max-w-2xl mx-auto text-center">
            <div className="relative w-44 h-44 mx-auto mb-8">
              <div
                aria-hidden
                className="absolute -inset-2 rounded-full bg-accent/10 blur-xl"
              />
              <div className="relative w-44 h-44 rounded-full overflow-hidden ring-1 ring-accent/30 grayscale hover:grayscale-0 transition-all duration-700 shadow-[0_15px_45px_-15px_hsl(217_60%_4%/0.8)]">
                <img
                  src={dignanImg}
                  alt="Portrait of Dignan Getz, founder of Stoa Intelligence"
                  width={176}
                  height={176}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="font-heading text-2xl text-foreground mb-1">
              Dignan Getz <span className="text-accent">·</span>
            </h3>
            <p className="font-body text-xs tracking-widest uppercase text-accent/80 mb-8">Founder</p>
            <p className="font-body text-base text-muted-foreground leading-relaxed text-left sm:text-center">
              Dignan grew up in Washington, D.C., the oldest of four brothers — a position that
              teaches you early how to set the tone, hold the standard, and build something the
              people behind you can rely on. He studies accounting at Brigham Young University, and
              outside the practice you'll find him on the tennis or pickleball court or training
              MMA. Stoa Intelligence is the practice he built to do for other businesses what he was raised
              to do for the people around him — set the foundation, hold the line, and make sure
              what gets built is built to last.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
