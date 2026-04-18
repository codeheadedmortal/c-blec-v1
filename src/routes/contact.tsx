import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

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
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        style={{
          fontFamily: "DM Sans",
          fontWeight: 500,
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: "0.22em",
          color: "rgba(10, 10, 10, 0.6)",
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
  background: "rgba(255, 255, 255, 0.3)",
  border: "1px solid rgba(255, 255, 255, 0.5)",
  borderRadius: 12,
  padding: "11px 17px",
  fontFamily: "DM Sans",
  fontWeight: 400,
  fontSize: 13,
  color: "#0A0A0A",
  outline: "none",
  transition: "border-color 0.3s var(--ease-flow), box-shadow 0.3s var(--ease-flow), background-color 0.3s var(--ease-flow)",
};

function ContactPage() {
  const [vals, setVals] = useState({
    name: "",
    email: "",
    company: "",
    platform: "",
    message: "",
  });
  const [focus, setFocus] = useState<string>("");

  const set = (k: keyof typeof vals) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setVals({ ...vals, [k]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:thejo@cblec.com?subject=Free Month — ${encodeURIComponent(
      vals.name
    )}&body=${encodeURIComponent(
      `Name: ${vals.name}\nEmail: ${vals.email}\nCompany/Role: ${vals.company}\nPlatform: ${vals.platform}\n\n${vals.message}`
    )}`;
  };

  const focusStyle = (k: string): React.CSSProperties =>
    focus === k
      ? {
          borderColor: "#D4AF37",
          boxShadow: "0 0 10px rgba(212, 175, 55, 0.12)",
          background: "rgba(255, 255, 255, 0.38)",
        }
      : {};

  return (
    <>
      <section className="contact-liquid-shell">
        <div className="contact-liquid-mesh" aria-hidden="true" />
        <div className="mx-auto px-6 py-16 md:py-20" style={{ maxWidth: 1200 }}>
          <div className="contact-layout">
            <div className="contact-intro-block">
              <div className="label-eyebrow mb-6">Get In Touch</div>
              <h1 className="contact-intro-title">Strategic Inquiry.</h1>
              <p className="contact-intro-copy">
                Brief us on your vision. Our team is currently active in US timezones.
              </p>
            </div>

            <div className="contact-liquid-panel">
              <form onSubmit={onSubmit} className="flex flex-col gap-5">
              <Field label="Full Name">
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

              <Field label="Email Address">
                <input
                  type="email"
                  style={{ ...baseInput, ...focusStyle("email") }}
                  value={vals.email}
                  onChange={set("email")}
                  onFocus={() => setFocus("email")}
                  onBlur={() => setFocus("")}
                  inputMode="email"
                  autoComplete="email"
                  pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
                  title="Please enter a valid email address (example: name@company.com)."
                  required
                />
              </Field>

              <Field label="Company / Role">
                <input
                  type="text"
                  style={{ ...baseInput, ...focusStyle("company") }}
                  value={vals.company}
                  onChange={set("company")}
                  onFocus={() => setFocus("company")}
                  onBlur={() => setFocus("")}
                />
              </Field>

              <Field label="Platform">
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
                      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'><path d='M1 1L6 6L11 1' stroke='%238A6E1D' stroke-width='1.2' stroke-linecap='round'/></svg>\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 18px center",
                    paddingRight: 48,
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

              <Field label="Anything Else">
                <textarea
                  style={{ ...baseInput, ...focusStyle("message"), minHeight: 92, resize: "vertical" }}
                  value={vals.message}
                  onChange={set("message") as never}
                  onFocus={() => setFocus("message")}
                  onBlur={() => setFocus("")}
                />
              </Field>

              <button type="submit" className="contact-obsidian-cta">
                <span>SUBMIT INQUIRY →</span>
              </button>
              </form>
            </div>
          </div>

          <style>{`
            .contact-liquid-shell {
              position: relative;
              overflow: hidden;
              background: var(--bg);
            }

            .contact-liquid-mesh {
              position: absolute;
              inset: 0;
              pointer-events: none;
              background:
                radial-gradient(38% 34% at 16% 20%, rgba(212, 175, 55, 0.1), rgba(212, 175, 55, 0) 68%),
                radial-gradient(32% 30% at 82% 24%, rgba(44, 89, 109, 0.08), rgba(44, 89, 109, 0) 74%),
                radial-gradient(42% 38% at 54% 82%, rgba(212, 175, 55, 0.08), rgba(212, 175, 55, 0) 72%);
              animation: contactMeshFloat 24s ease-in-out infinite alternate;
              z-index: 0;
            }

            .contact-liquid-panel {
              position: relative;
              z-index: 1;
              background: rgba(255, 255, 255, 0.2);
              backdrop-filter: blur(25px);
              -webkit-backdrop-filter: blur(25px);
              border: 1px solid rgba(255, 255, 255, 0.4);
              border-radius: 32px !important;
              padding: 46px 44px;
              box-shadow: 0 16px 30px rgba(17, 18, 20, 0.09), inset 0 1px 0 rgba(255, 255, 255, 0.22);
            }

            .contact-layout {
              position: relative;
              z-index: 1;
              display: grid;
              grid-template-columns: minmax(320px, 0.92fr) minmax(420px, 1.08fr);
              gap: clamp(28px, 4.8vw, 64px);
              align-items: start;
            }

            .contact-intro-block {
              padding-top: clamp(10px, 1.2vw, 20px);
            }

            .contact-intro-title {
              font-family: "Cormorant Garamond", serif;
              font-weight: 300;
              font-size: clamp(52px, 6.6vw, 96px);
              line-height: 1.02;
              letter-spacing: -0.02em;
              color: #0A0A0A;
              margin: 0;
            }

            .contact-intro-copy {
              margin-top: 18px;
              max-width: 46ch;
              font-family: "DM Sans", sans-serif;
              font-size: 16px;
              line-height: 1.7;
              color: rgba(10, 10, 10, 0.6);
            }

            .contact-obsidian-cta {
              position: relative;
              overflow: hidden;
              isolation: isolate;
              width: 100%;
              height: 50px;
              margin-top: 6px;
              border: 1px solid rgba(255, 255, 255, 0.18);
              border-radius: 12px !important;
              background: #0A0A0A;
              color: #ffffff;
              font-family: "DM Sans", sans-serif;
              font-weight: 500;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 0.18em;
              transition: transform 0.35s var(--ease-flow), box-shadow 0.35s var(--ease-flow);
              cursor: pointer;
            }

            .contact-obsidian-cta span {
              position: relative;
              z-index: 2;
            }

            .contact-obsidian-cta::before {
              content: "";
              position: absolute;
              top: -140%;
              left: -48%;
              width: 42%;
              height: 380%;
              transform: rotate(20deg) translateX(0);
              background: linear-gradient(
                90deg,
                rgba(212, 175, 55, 0) 0%,
                rgba(212, 175, 55, 0.08) 30%,
                rgba(212, 175, 55, 0.34) 50%,
                rgba(212, 175, 55, 0.08) 70%,
                rgba(212, 175, 55, 0) 100%
              );
              opacity: 0;
            }

            .contact-obsidian-cta:hover {
              transform: translateY(-1px);
              box-shadow: 0 0 12px rgba(212, 175, 55, 0.1);
            }

            .contact-obsidian-cta:hover::before {
              opacity: 1;
              animation: contactButtonGlint 1.2s var(--ease-flow) forwards;
            }

            @keyframes contactButtonGlint {
              0% {
                transform: rotate(20deg) translateX(0);
              }
              100% {
                transform: rotate(20deg) translateX(360%);
              }
            }

            @keyframes contactMeshFloat {
              0% {
                transform: translate3d(-1.8%, 0, 0) scale(1);
              }
              100% {
                transform: translate3d(1.8%, -2.4%, 0) scale(1.03);
              }
            }

            @media (max-width: 900px) {
              .contact-layout {
                grid-template-columns: 1fr;
              }

              .contact-intro-title {
                font-size: clamp(42px, 12vw, 72px);
              }

              .contact-intro-copy {
                max-width: none;
                margin-bottom: 6px;
              }

              .contact-liquid-panel {
                padding: 32px 22px;
              }
            }
          `}</style>
        </div>
      </section>
    </>
  );
}
