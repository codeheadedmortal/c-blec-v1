import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — C-BLEC" },
      { name: "description", content: "Tell us about your content goals. We typically respond within 24 hours." },
      { property: "og:title", content: "Contact — C-BLEC" },
      { property: "og:description", content: "Get in touch with C-BLEC's post-production team." },
    ],
  }),
  component: ContactPage,
});

function Field({
  label,
  children,
  active,
}: {
  label: string;
  children: React.ReactNode;
  active: boolean;
}) {
  return (
    <div className="relative pt-6">
      <label
        style={{
          position: "absolute",
          left: 0,
          top: active ? 0 : 28,
          fontFamily: "DM Sans",
          fontWeight: 300,
          fontSize: active ? 10 : 12,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: active ? "#2C596D" : "var(--text-muted)",
          transition: "all 0.3s var(--ease-flow)",
          pointerEvents: "none",
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

const baseInput: React.CSSProperties = {
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid var(--border-faint)",
  padding: "14px 0",
  fontFamily: "DM Sans",
  fontWeight: 300,
  fontSize: 16,
  color: "#0A0A0A",
  outline: "none",
  transition: "all 0.3s var(--ease-flow)",
};

function ContactPage() {
  const [vals, setVals] = useState({
    name: "",
    email: "",
    company: "",
    platform: "",
    cadence: "",
    message: "",
  });
  const [focus, setFocus] = useState<string>("");

  const set = (k: keyof typeof vals) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setVals({ ...vals, [k]: e.target.value });

  const isActive = (k: keyof typeof vals) => focus === k || vals[k].length > 0;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:thejo@cblec.com?subject=Free Month — ${encodeURIComponent(
      vals.name
    )}&body=${encodeURIComponent(
      `Name: ${vals.name}\nEmail: ${vals.email}\nCompany/Role: ${vals.company}\nPlatform: ${vals.platform}\nCadence: ${vals.cadence}\n\n${vals.message}`
    )}`;
  };

  const focusStyle = (k: string): React.CSSProperties =>
    focus === k
      ? { borderBottom: "1px solid #2C596D", boxShadow: "0 4px 16px var(--gold-glow)" }
      : {};

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's talk."
        subtitle="Tell us about your content goals and we'll take it from there."
        height="40vh"
      />

      <section style={{ background: "var(--bg)" }}>
        <div className="mx-auto px-6 py-24 md:py-28" style={{ maxWidth: 720 }}>
          <form onSubmit={onSubmit} className="flex flex-col gap-8">
            <Field label="Full Name" active={isActive("name")}>
              <input
                type="text"
                style={{ ...baseInput, ...focusStyle("name") }}
                value={vals.name}
                onChange={set("name")}
                onFocus={() => setFocus("name")}
                onBlur={() => setFocus("")}
                required
              />
            </Field>

            <Field label="Email Address" active={isActive("email")}>
              <input
                type="email"
                style={{ ...baseInput, ...focusStyle("email") }}
                value={vals.email}
                onChange={set("email")}
                onFocus={() => setFocus("email")}
                onBlur={() => setFocus("")}
                required
              />
            </Field>

            <Field label="Company / Role" active={isActive("company")}>
              <input
                type="text"
                style={{ ...baseInput, ...focusStyle("company") }}
                value={vals.company}
                onChange={set("company")}
                onFocus={() => setFocus("company")}
                onBlur={() => setFocus("")}
              />
            </Field>

            <Field label="Platform" active={isActive("platform")}>
              <select
                value={vals.platform}
                onChange={set("platform") as never}
                onFocus={() => setFocus("platform")}
                onBlur={() => setFocus("")}
                style={{
                  ...baseInput,
                  ...focusStyle("platform"),
                  appearance: "none",
                  WebkitAppearance: "none",
                  backgroundImage:
                    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'><path d='M1 1L6 6L11 1' stroke='%232C596D' stroke-width='1'/></svg>\")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 4px center",
                  paddingRight: 24,
                }}
              >
                <option value=""></option>
                <option>YouTube</option>
                <option>LinkedIn</option>
                <option>Instagram</option>
                <option>X</option>
                <option>Multiple</option>
              </select>
            </Field>

            <Field label="How often do you post?" active={isActive("cadence")}>
              <select
                value={vals.cadence}
                onChange={set("cadence") as never}
                onFocus={() => setFocus("cadence")}
                onBlur={() => setFocus("")}
                style={{
                  ...baseInput,
                  ...focusStyle("cadence"),
                  appearance: "none",
                  WebkitAppearance: "none",
                  backgroundImage:
                    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'><path d='M1 1L6 6L11 1' stroke='%232C596D' stroke-width='1'/></svg>\")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 4px center",
                  paddingRight: 24,
                }}
              >
                <option value=""></option>
                <option>Never</option>
                <option>Rarely</option>
                <option>1–2x per month</option>
                <option>Weekly or more</option>
              </select>
            </Field>

            <Field label="Anything else" active={isActive("message")}>
              <textarea
                style={{ ...baseInput, ...focusStyle("message"), minHeight: 120, resize: "vertical" }}
                value={vals.message}
                onChange={set("message") as never}
                onFocus={() => setFocus("message")}
                onBlur={() => setFocus("")}
              />
            </Field>

            <button
              type="submit"
              className="btn-primary"
              style={{ width: "100%", height: 56, justifyContent: "center", letterSpacing: "0.15em" }}
            >
              Send It →
            </button>
          </form>

          <div className="hairline mt-16" />
          <div className="mt-10 text-center">
            <a
              href="mailto:thejo@cblec.com"
              className="font-display mail-link"
              style={{
                fontWeight: 300,
                fontSize: 24,
                color: "#0A0A0A",
                transition: "all 0.35s var(--ease-flow)",
              }}
            >
              thejo@cblec.com
            </a>
            <div className="mt-3" style={{ fontWeight: 300, fontSize: 13, color: "var(--text-muted)" }}>
              We typically respond within 24 hours.
            </div>
          </div>
          <style>{`
            .mail-link:hover {
              color: #2C596D !important;
              text-shadow: 0 2px 12px var(--gold-glow);
            }
          `}</style>
        </div>
      </section>
    </>
  );
}
