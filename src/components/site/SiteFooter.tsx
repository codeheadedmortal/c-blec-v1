import { Link } from "@tanstack/react-router";
import footerLogo from "../../assets/only logo.svg";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer style={{ background: "#0A0A0A", borderTop: "1px solid #2C596D" }}>
      <div className="mx-auto max-w-[1200px] px-6 py-20 grid gap-12 md:grid-cols-3">
        <div className="pt-1">
          <img
            src={footerLogo}
            alt="C-BLEC"
            className="block w-auto"
            style={{
              height: "clamp(42px, 7vw, 56px)",
              filter: "invert(1)",
            }}
          />
          <div className="font-body mt-3" style={{ fontWeight: 300, fontSize: 12, color: "rgba(247,243,238,0.4)" }}>
            Record &amp; Relax
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="footer-link"
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 300,
                fontSize: 13,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "rgba(247,243,238,0.55)",
                transition: "all 0.35s var(--ease-flow)",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          {["thejo@cblec.com", "shameem@cblec.com"].map((e) => (
            <a
              key={e}
              href={`mailto:${e}`}
              className="footer-link"
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 300,
                fontSize: 13,
                color: "rgba(247,243,238,0.55)",
                transition: "all 0.35s var(--ease-flow)",
              }}
            >
              {e}
            </a>
          ))}
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(247,243,238,0.08)" }}>
        <div
          className="mx-auto max-w-[1200px] px-6 py-6 text-center"
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontWeight: 300,
            fontSize: 11,
            color: "rgba(247,243,238,0.25)",
          }}
        >
          © 2025 C-BLEC. All rights reserved.
        </div>
        <div
          className="mx-auto max-w-[1200px] px-6 pb-6 text-center"
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontWeight: 400,
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(247,243,238,0.38)",
          }}
        >
          Strictly Confidential
        </div>
      </div>

      <style>{`
        .footer-link:hover {
          color: #F7F3EE !important;
          text-shadow: 0 0 12px rgba(201, 168, 76, 0.4);
        }
      `}</style>
    </footer>
  );
}
