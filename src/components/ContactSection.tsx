import { useRef, useState } from "react";
import { AlertCircle, ArrowRight, Calendar, Mail } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const CALENDLY = "https://calendly.com/dignangetz";
const EMAIL = "dignang3tz@gmail.com";

const FIELD_LABELS = {
  name: "Name",
  email: "Email",
  message: "Message",
} as const;

type FieldKey = keyof typeof FIELD_LABELS;

export default function ContactSection() {
  const ref = useScrollFadeIn();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const summaryRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Required";
    setErrors(e);
    if (Object.keys(e).length) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    const subject = encodeURIComponent(`Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-32 border-t border-border bg-background overflow-hidden">
      <div ref={ref} className="fade-in-section relative container mx-auto px-6 max-w-5xl">
        <p className="label-eyebrow text-accent mb-6 text-center">Start a Conversation</p>
        <h2 className="font-heading font-light text-3xl sm:text-4xl text-center text-foreground mb-6 tracking-tight">
          Two ways in. <span className="text-gradient-blue">Both reach the founder.</span>
        </h2>
        <p className="font-body text-base text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Book the 15-minute Free Walkthrough, or send a note and we'll come to you.
        </p>

        <div className="grid md:grid-cols-2 gap-px bg-border border border-border mb-16">
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background p-10 group hover:bg-secondary/50 transition-colors duration-500"
          >
            <Calendar className="text-accent mb-6" size={28} strokeWidth={1.25} />
            <h3 className="font-heading text-xl text-foreground mb-3">Book a Free Walkthrough</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
              A free 15-minute call. We listen, ask the right questions, and tell you whether
              Stoa Intelligence is the right fit for what you need.
            </p>
            <span className="inline-flex items-center gap-2 font-body text-xs tracking-widest uppercase text-accent group-hover:gap-3 transition-all">
              Open Calendly <ArrowRight size={14} />
            </span>
          </a>

          <a
            href={`mailto:${EMAIL}?subject=Stoa Intelligence%20Inquiry`}
            className="bg-background p-10 group hover:bg-secondary/50 transition-colors duration-500"
          >
            <Mail className="text-accent mb-6" size={28} strokeWidth={1.25} />
            <h3 className="font-heading text-xl text-foreground mb-3">Email the Founder</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
              Prefer to write it out? Send us the situation and we'll come back inside two business
              days with next steps.
            </p>
            <span className="inline-flex items-center gap-2 font-body text-xs tracking-widest uppercase text-accent group-hover:gap-3 transition-all">
              {EMAIL} <ArrowRight size={14} />
            </span>
          </a>
        </div>

        <div className="max-w-2xl mx-auto bg-background border border-border p-10">
          <p className="label-eyebrow mb-6">Or send a quick note</p>

          {submitted ? (
            <div className="text-center py-8">
              <h3 className="font-heading text-xl text-foreground mb-3">Thank you.</h3>
              <p className="font-body text-muted-foreground mb-4">
                Your mail client should have opened addressed to{" "}
                <a href={`mailto:${EMAIL}`} className="text-accent">{EMAIL}</a>.
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Want to skip the wait?{" "}
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-4 hover:underline"
                >
                  Book a 15-minute call →
                </a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate aria-describedby="contact-error-summary">
              <div
                id="contact-error-summary"
                ref={summaryRef}
                tabIndex={-1}
                role="alert"
                aria-live="polite"
                className={
                  Object.keys(errors).length > 0
                    ? "border border-destructive/60 bg-destructive/10 text-destructive p-4 flex gap-3 items-start focus:outline-none"
                    : "sr-only"
                }
              >
                {Object.keys(errors).length > 0 && (
                  <>
                    <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                    <div className="font-body text-sm">
                      <p className="font-semibold mb-1">Please fix the following before sending:</p>
                      <ul className="list-disc list-inside space-y-0.5">
                        {(Object.keys(errors) as FieldKey[]).map((k) => (
                          <li key={k}>
                            <span className="font-medium">{FIELD_LABELS[k]}:</span> {errors[k]}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className="block label-eyebrow mb-2">Name</label>
                  <input
                    id="contact-name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    className={`w-full bg-transparent border-b px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none transition-colors duration-500 ${
                      errors.name ? "border-destructive focus:border-destructive" : "border-border focus:border-foreground"
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p id="contact-name-error" className="mt-2 font-body text-sm text-destructive font-medium">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-email" className="block label-eyebrow mb-2">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    className={`w-full bg-transparent border-b px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none transition-colors duration-500 ${
                      errors.email ? "border-destructive focus:border-destructive" : "border-border focus:border-foreground"
                    }`}
                    placeholder="you@company.com"
                  />
                  {errors.email && (
                    <p id="contact-email-error" className="mt-2 font-body text-sm text-destructive font-medium">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block label-eyebrow mb-2">Message</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  className={`w-full bg-transparent border-b px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none transition-colors duration-500 resize-none ${
                    errors.message ? "border-destructive focus:border-destructive" : "border-border focus:border-foreground"
                  }`}
                  placeholder="Where do you need precision?"
                />
                {errors.message && (
                  <p id="contact-message-error" className="mt-2 font-body text-sm text-destructive font-medium">{errors.message}</p>
                )}
              </div>

              <div className="flex items-center justify-between gap-4 pt-2">
                <p className="font-body text-xs text-muted-foreground">
                  Opens your email app — we don't store anything ourselves.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-6 py-3 font-body text-xs tracking-widest uppercase border border-foreground text-foreground hover:border-accent hover:text-accent transition-all duration-500"
                >
                  Send <ArrowRight size={14} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
