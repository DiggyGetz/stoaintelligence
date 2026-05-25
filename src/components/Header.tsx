import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-clean.png";

const navLinks = [
  { label: "Approach", href: "#approach" },
  { label: "Packages", href: "#packages" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Process", href: "#process" },
  { label: "Founder", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const CALENDLY = "https://calendly.com/dignangetz";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      {!scrolled && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/50 to-transparent"
        />
      )}
      <div className="container mx-auto relative flex items-center justify-between py-4 px-6 gap-6">
        <a
          href="#top"
          className={`flex items-center gap-2.5 font-heading font-normal text-base lg:text-lg tracking-tight whitespace-nowrap ${
            scrolled ? "text-foreground" : "text-white"
          }`}
          style={!scrolled ? { textShadow: "0 1px 8px rgba(10,15,30,0.85)" } : undefined}
        >
          <img
            src={logo}
            alt="Stoa Intelligence — Discobolus mark"
            width={32}
            height={32}
            className="h-8 w-8 object-contain shrink-0"
          />
          Stoa Intelligence
        </a>

        <nav className="hidden md:flex items-center gap-5 lg:gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-xs font-body font-medium tracking-widest uppercase transition-colors duration-300 ${
                scrolled
                  ? "text-muted-foreground hover:text-accent"
                  : "text-white/85 hover:text-white"
              }`}
              style={!scrolled ? { textShadow: "0 1px 6px rgba(10,15,30,0.8)" } : undefined}
            >
              {l.label}
            </a>
          ))}
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-body font-semibold tracking-widest uppercase bg-accent text-white px-4 py-2 rounded-md hover:bg-accent/90 transition-all duration-300 whitespace-nowrap shadow-[0_4px_14px_-4px_rgba(59,130,246,0.5)]"
          >
            Book a Free Walkthrough
          </a>
        </nav>

        <button
          className={`md:hidden ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-b border-border px-6 pb-6 space-y-5">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block text-xs font-body font-medium tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="block text-xs font-body font-semibold tracking-widest uppercase text-accent"
          >
            Book a Free Walkthrough →
          </a>
        </div>
      )}
    </header>
  );
}
