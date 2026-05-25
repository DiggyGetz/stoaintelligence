import logo from "@/assets/logo-clean.png";
import { Mail, Calendar } from "lucide-react";

const CALENDLY = "https://calendly.com/dignangetz";
const EMAIL = "dignang3tz@gmail.com";

const sitemap = [
  { label: "Approach", href: "#approach" },
  { label: "Packages", href: "#packages" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "Founder", href: "#about" },
  { label: "Free Walkthrough", href: "#audit" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      className="relative pt-20 pb-10 overflow-hidden text-white"
      style={{ background: "#0a0f1e" }}
    >
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -translate-x-1/2 h-px w-24"
        style={{ background: "rgba(96,165,250,0.6)" }}
      />
      <div className="relative container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <span className="flex items-center gap-2.5 font-heading font-semibold text-lg mb-6">
              <img
                src={logo}
                alt="Stoa Intelligence logo"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
                style={{ filter: "brightness(0) invert(1)", opacity: 0.9 }}
              />
              Stoa Intelligence
            </span>
            <p className="font-body text-sm text-white/70 leading-relaxed max-w-md mb-6">
              Stoa Intelligence builds the financial, AI, and operational systems your business is
              supposed to stand on — measured, structural, and meant to last.
            </p>
            <p className="font-body text-xs text-white/50 italic">
              Stoa (στοά) — the colonnade where discipline and reason were taught.
            </p>
          </div>

          <div>
            <p className="font-body text-xs tracking-widest uppercase text-white/50 font-medium mb-5">
              Sitemap
            </p>
            <ul className="space-y-3">
              {sitemap.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-body text-sm text-white/80 hover:text-[#60a5fa] transition-colors duration-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-xs tracking-widest uppercase text-white/50 font-medium mb-5">
              Contact
            </p>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 font-body text-sm text-white/80 hover:text-[#60a5fa] transition-colors duration-300"
                >
                  <Mail size={14} /> {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm text-white/80 hover:text-[#60a5fa] transition-colors duration-300"
                >
                  <Calendar size={14} /> Book a Free Walkthrough
                </a>
              </li>
              <li className="font-body text-sm text-white/60">US-based · remote engagements</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-body text-xs text-white/50">
            © {new Date().getFullYear()} Stoa Intelligence.
          </p>
          <p className="font-body text-xs text-white/50">
            Privacy and terms available on request — write us at{" "}
            <a href={`mailto:${EMAIL}`} className="text-[#60a5fa]">
              {EMAIL}
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
