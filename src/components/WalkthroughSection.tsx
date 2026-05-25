import { useRef, useState } from "react";
import { AlertCircle, ArrowRight, ExternalLink } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const CALENDLY = "https://calendly.com/dignangetz";
const EMAIL = "dignang3tz@gmail.com";

type FormState = {
  name: string;
  email: string;
  company: string;
  industry: string;
  revenue: string;
  hoursLost: string;
  biggestLeak: string;
  notes: string;
};

const INITIAL: FormState = {
  name: "",
  email: "",
  company: "",
  industry: "",
  revenue: "",
  hoursLost: "",
  biggestLeak: "",
  notes: "",
};

const revenueBands = [
  "Early-stage",
  "Growing",
  "Established",
  "Multi-location",
  "Enterprise-sized",
];

const leakOptions = [
  "Books are messy or behind",
  "Leads slip through the cracks",
  "Quoting / estimating eats my week",
  "AR / invoicing is too manual",
  "No real visibility into the numbers",
  "Tools don't talk to each other",
];

const FIELD_LABELS: Record<keyof FormState, string> = {
  name: "Name",
  email: "Email",
  company: "Company",
  industry: "Industry / Trade",
  revenue: "Annual Revenue",
  hoursLost: "Hours lost / week",
  biggestLeak: "Biggest leak right now",
  notes: "Notes",
};

export default function WalkthroughSection() {
  const ref = useScrollFadeIn();
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const summaryRef = useRef<HTMLDivElement>(null);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.company.trim()) e.company = "Required";
    if (!form.industry.trim()) e.industry = "Required";
    if (!form.biggestLeak) e.biggestLeak = "Pick one";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    const subject = encodeURIComponent(`Free Walkthrough — ${form.company}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Company: ${form.company}`,
        `Industry: ${form.industry}`,
        `Revenue band: ${form.revenue || "—"}`,
        `Hours lost / week: ${form.hoursLost || "—"}`,
        `Biggest leak: ${form.biggestLeak}`,
        "",
        "Notes:",
        form.notes || "—",
      ].join("\n"),
    );
    const mailto = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <section id="audit" className="relative py-32 border-t border-border overflow-hidden bg-card">
      <div ref={ref} className="fade-in-section relative container mx-auto px-6 max-w-3xl">
        <p className="label-eyebrow text-accent mb-6 text-center">Free Walkthrough</p>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-center text-foreground mb-4 tracking-tight">
          Tell us where it hurts. <span className="text-gradient-blue">We'll tell you where to cut.</span>
        </h2>
        <p className="font-body text-base text-muted-foreground text-center max-w-2xl mx-auto mb-12 leading-relaxed">
          Answer seven short questions and we'll send back a personalized opportunity report — what
          to fix first, what it would take, and whether Stoa Intelligence is the right fit. Or skip the form
          and book a 15-minute call.
        </p>

        <div className="flex justify-center mb-12">
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-body font-semibold tracking-widest uppercase bg-accent text-white hover:bg-accent/90 transition-all duration-300 rounded-md shadow-[0_8px_24px_-8px_rgba(59,130,246,0.5)]"
          >
            Book a Free Walkthrough <ExternalLink size={14} />
          </a>
        </div>

        {submitted ? (
          <div className="text-center py-12 border border-border p-10 bg-secondary/40">
            <h3 className="font-heading text-2xl text-foreground mb-3">Thank you.</h3>
            <p className="font-body text-muted-foreground max-w-lg mx-auto mb-6">
              Your mail client should have opened with your answers ready to send to{" "}
              <a href={`mailto:${EMAIL}`} className="text-accent">{EMAIL}</a>. Send it and we'll
              return a personalized opportunity report within two business days.
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
          <form onSubmit={handleSubmit} className="space-y-8" noValidate aria-describedby="audit-error-summary">
            <div
              id="audit-error-summary"
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
                      {(Object.keys(errors) as (keyof FormState)[]).map((k) => (
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
              <Field
                label="Name"
                htmlFor="audit-name"
                error={errors.name}
                input={
                  <input
                    id="audit-name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    required
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "audit-name-error" : undefined}
                    className={`w-full bg-transparent border-b px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none transition-colors duration-500 ${
                      errors.name ? "border-destructive focus:border-destructive" : "border-border focus:border-foreground"
                    }`}
                    placeholder="Your full name"
                  />
                }
              />
              <Field
                label="Email"
                htmlFor="audit-email"
                error={errors.email}
                input={
                  <input
                    id="audit-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    required
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "audit-email-error" : undefined}
                    className={`w-full bg-transparent border-b px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none transition-colors duration-500 ${
                      errors.email ? "border-destructive focus:border-destructive" : "border-border focus:border-foreground"
                    }`}
                    placeholder="you@yourcompany.com"
                  />
                }
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <Field
                label="Company"
                htmlFor="audit-company"
                error={errors.company}
                input={
                  <input
                    id="audit-company"
                    value={form.company}
                    onChange={(e) => update("company", e.target.value)}
                    required
                    autoComplete="organization"
                    aria-invalid={!!errors.company}
                    aria-describedby={errors.company ? "audit-company-error" : undefined}
                    className={`w-full bg-transparent border-b px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none transition-colors duration-500 ${
                      errors.company ? "border-destructive focus:border-destructive" : "border-border focus:border-foreground"
                    }`}
                    placeholder="Acme Plumbing"
                  />
                }
              />
              <Field
                label="Industry / Trade"
                htmlFor="audit-industry"
                error={errors.industry}
                input={
                  <input
                    id="audit-industry"
                    value={form.industry}
                    onChange={(e) => update("industry", e.target.value)}
                    required
                    aria-invalid={!!errors.industry}
                    aria-describedby={errors.industry ? "audit-industry-error" : undefined}
                    className={`w-full bg-transparent border-b px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none transition-colors duration-500 ${
                      errors.industry ? "border-destructive focus:border-destructive" : "border-border focus:border-foreground"
                    }`}
                    placeholder="Plumbing, dental, HVAC..."
                  />
                }
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <Field
                label="Annual Revenue"
                input={
                  <select
                    value={form.revenue}
                    onChange={(e) => update("revenue", e.target.value)}
                    className="w-full bg-transparent border-b border-border px-0 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors duration-500"
                  >
                    <option value="">Select a band…</option>
                    {revenueBands.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                }
              />
              <Field
                label="Hours lost to manual ops / week"
                input={
                  <input
                    inputMode="numeric"
                    value={form.hoursLost}
                    onChange={(e) => update("hoursLost", e.target.value)}
                    className="w-full bg-transparent border-b border-border px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors duration-500"
                    placeholder="e.g. 10"
                  />
                }
              />
            </div>

            <div>
              <label className="block label-eyebrow mb-4">
                Biggest leak right now
              </label>
              <div
                role="radiogroup"
                aria-invalid={!!errors.biggestLeak}
                aria-describedby={errors.biggestLeak ? "audit-biggestLeak-error" : undefined}
                className={`grid sm:grid-cols-2 gap-3 ${errors.biggestLeak ? "p-3 -m-3 border border-destructive/60" : ""}`}
              >
                {leakOptions.map((item) => (
                  <button
                    key={item}
                    type="button"
                    role="radio"
                    aria-checked={form.biggestLeak === item}
                    onClick={() => update("biggestLeak", item)}
                    className={`text-left px-4 py-3 border text-sm font-body transition-all duration-300 ${
                      form.biggestLeak === item
                        ? "border-accent bg-accent text-accent-foreground"
                        : "border-border text-foreground/80 hover:border-foreground/60"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              {errors.biggestLeak && (
                <p id="audit-biggestLeak-error" className="mt-2 font-body text-sm text-destructive font-medium">
                  {errors.biggestLeak}
                </p>
              )}
            </div>

            <Field
              label="Anything else we should know?"
              input={
                <textarea
                  rows={4}
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  className="w-full bg-transparent border-b border-border px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors duration-500 resize-none"
                  placeholder="Goals, constraints, deadlines, current tools..."
                />
              }
            />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4">
              <p className="font-body text-xs text-muted-foreground">
                Submitting opens your mail client addressed to <a href={`mailto:${EMAIL}`} className="text-accent">{EMAIL}</a>. We don't store anything ourselves.
              </p>
              <button
                type="submit"
                className="inline-flex items-center gap-3 px-6 py-3 font-body text-xs tracking-widest uppercase border border-accent bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-500"
              >
                Send the Walkthrough
                <ArrowRight size={14} />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  input,
  error,
  htmlFor,
}: {
  label: string;
  input: React.ReactNode;
  error?: string;
  htmlFor?: string;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block label-eyebrow mb-2">
        {label}
      </label>
      {input}
      {error && (
        <p
          id={htmlFor ? `${htmlFor}-error` : undefined}
          className="mt-2 font-body text-sm text-destructive font-medium"
        >
          {error}
        </p>
      )}
    </div>
  );
}
