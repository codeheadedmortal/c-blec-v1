import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import footerLogo from "../../assets/only logo.svg";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const executiveContacts = ["thejo@cblec.com", "shameem@cblec.com"] as const;

function formatTime(timeZone: string) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(new Date());
}

export function SiteFooter() {
  const [times, setTimes] = useState(() => ({
    newYork: formatTime("America/New_York"),
    losAngeles: formatTime("America/Los_Angeles"),
  }));

  useEffect(() => {
    const updateTimes = () => {
      setTimes({
        newYork: formatTime("America/New_York"),
        losAngeles: formatTime("America/Los_Angeles"),
      });
    };

    updateTimes();
    const interval = window.setInterval(updateTimes, 1000);
    return () => window.clearInterval(interval);
  }, []);

  const clockRows = useMemo(
    () => [
      { city: "New York (EST)", time: times.newYork },
      { city: "Los Angeles (PST)", time: times.losAngeles },
    ],
    [times],
  );

  return (
    <footer
      className="site-footer-shell"
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(140deg, rgba(24,24,24,0.58) 0%, rgba(10,10,10,0.66) 48%, rgba(3,3,3,0.76) 100%)",
        backdropFilter: "blur(25px) saturate(150%)",
        WebkitBackdropFilter: "blur(25px) saturate(150%)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        borderTopLeftRadius: "44px",
        borderTopRightRadius: "44px",
        boxShadow:
          "0 -20px 60px rgba(0, 0, 0, 0.28), inset 0 1px 1px rgba(255, 255, 255, 0.1), inset 0 2px 10px rgba(255, 255, 255, 0.08), inset 0 -24px 50px rgba(0, 0, 0, 0.24)",
      }}
    >
      <div className="footer-black-liquid" aria-hidden="true" />
      <div className="footer-border-glint" />

      <div className="footer-main-grid mx-auto grid max-w-[1200px] gap-14 px-6 py-16 md:grid-cols-2 xl:grid-cols-4 xl:gap-10">
        <div className="pt-1">
          <img
            src={footerLogo}
            alt="C-BLEC"
            className="block w-auto"
            style={{
              height: "clamp(42px, 7vw, 54px)",
              filter: "invert(1)",
            }}
          />
          <div
            className="font-body mt-4"
            style={{ fontWeight: 400, fontSize: 12, letterSpacing: "0.12em", color: "rgba(226, 226, 226, 0.64)" }}
          >
            Record &amp; Relax
          </div>
          <div
            className="font-body mt-2"
            style={{ fontWeight: 300, fontSize: 11, letterSpacing: "0.16em", color: "rgba(255, 255, 255, 0.34)" }}
          >
            Est. 2025
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="footer-kicker">Agency</div>
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="footer-link footer-nav-link"
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 400,
                fontSize: 13,
                letterSpacing: "0.02em",
                color: "rgba(247,243,238,0.7)",
                transition: "all 0.35s var(--ease-flow)",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <div className="footer-kicker">US Operations</div>
          <div className="flex flex-col gap-3">
            {clockRows.map((clock) => (
              <div key={clock.city} className="flex items-baseline justify-between gap-4 border-b border-white/8 pb-3">
                <span
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontWeight: 400,
                    fontSize: 12,
                    color: "rgba(255,255,255,0.66)",
                  }}
                >
                  {clock.city}
                </span>
                <span
                  style={{
                    fontFamily: '"SFMono-Regular", "Roboto Mono", "DM Sans", monospace',
                    fontWeight: 500,
                    fontSize: 12,
                    letterSpacing: "0.08em",
                    color: "rgba(255,255,255,0.92)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {clock.time}
                </span>
              </div>
            ))}
          </div>
          <div className="footer-pulse-row">
            <span className="footer-pulse-dot" aria-hidden="true" />
            <span>Currently accepting 2 new pilots.</span>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="footer-kicker">Direct Lines</div>
          {executiveContacts.map((e) => (
            <a
              key={e}
              href={`mailto:${e}`}
              className="footer-link footer-mail-link"
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 400,
                fontSize: 13,
                color: "rgba(247,243,238,0.76)",
                transition: "all 0.35s var(--ease-flow)",
              }}
            >
              {e}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-subbar-wrap" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div
          className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row"
        >
          <div
            className="footer-subtle-copy"
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 300,
              fontSize: 11,
              color: "rgba(247,243,238,0.25)",
            }}
          >
            © 2026 C-BLEC. All rights reserved.
          </div>
          <div className="confidential-badge">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M8 10V7.5C8 5.01472 10.0147 3 12.5 3C14.9853 3 17 5.01472 17 7.5V10M7 10H18C18.5523 10 19 10.4477 19 11V19C19 19.5523 18.5523 20 18 20H7C6.44772 20 6 19.5523 6 19V11C6 10.4477 6.44772 10 7 10Z"
                stroke="#D4AF37"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Strictly Confidential</span>
          </div>
        </div>
      </div>

      <style>{`
        .site-footer-shell::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 14% 14%, rgba(255, 255, 255, 0.08), transparent 30%),
            radial-gradient(circle at 76% 10%, rgba(212, 175, 55, 0.1), transparent 26%),
            linear-gradient(180deg, rgba(255,255,255,0.04), rgba(0,0,0,0.18));
          mix-blend-mode: screen;
          opacity: 0.78;
          z-index: 1;
        }

        .site-footer-shell::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          pointer-events: none;
          background:
            radial-gradient(circle at 0% 50%, rgba(255,255,255,0.55), rgba(255,255,255,0) 38%),
            radial-gradient(circle at 100% 50%, rgba(255,255,255,0.55), rgba(255,255,255,0) 38%),
            linear-gradient(90deg, rgba(255,255,255,0.08), rgba(255,255,255,0.34), rgba(255,255,255,0.08));
          opacity: 0.85;
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.16);
          z-index: 3;
        }

        .footer-black-liquid {
          position: absolute;
          inset: -8% -5% 0 -5%;
          pointer-events: none;
          z-index: 1;
          opacity: 0.72;
          background:
            radial-gradient(50% 42% at 16% 22%, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 76%),
            radial-gradient(44% 40% at 85% 16%, rgba(0, 0, 0, 0.24), rgba(0, 0, 0, 0) 78%),
            radial-gradient(68% 52% at 52% 108%, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 74%),
            linear-gradient(180deg, rgba(255,255,255,0.055), rgba(255,255,255,0.012) 22%, rgba(0,0,0,0.22) 100%);
          backdrop-filter: blur(10px) saturate(120%);
          -webkit-backdrop-filter: blur(10px) saturate(120%);
          mix-blend-mode: multiply;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.09), inset 0 18px 30px rgba(255,255,255,0.04);
          animation: liquidGlassShift 14s ease-in-out infinite alternate;
        }

        .footer-border-glint {
          position: absolute;
          top: 0;
          left: -28%;
          width: 28%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.7), rgba(212,175,55,0.9), transparent);
          box-shadow: 0 0 14px rgba(212, 175, 55, 0.3);
          opacity: 0;
          animation: footerGlint 12s ease-in-out infinite;
          pointer-events: none;
          z-index: 4;
        }

        .footer-main-grid,
        .footer-subbar-wrap {
          position: relative;
          z-index: 2;
        }

        .footer-kicker {
          font-family: "DM Sans", sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.42);
        }

        .footer-link {
          width: fit-content;
        }

        .footer-nav-link:hover {
          color: #D4AF37 !important;
          text-shadow: 0 0 2px rgba(212, 175, 55, 0.42), 0 0 10px rgba(212, 175, 55, 0.16);
        }

        .footer-mail-link {
          position: relative;
          padding-bottom: 6px;
        }

        .footer-mail-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.18);
          transform: scaleX(0.2);
          transform-origin: left center;
          transition: transform 0.35s var(--ease-flow), background-color 0.35s var(--ease-flow);
        }

        .footer-mail-link:hover {
          color: #ffffff !important;
        }

        .footer-mail-link:hover::after {
          transform: scaleX(1);
          background: rgba(212, 175, 55, 0.72);
        }

        .footer-pulse-row {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: "DM Sans", sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: rgba(247,243,238,0.78);
        }

        .footer-pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px !important;
          background: #D4AF37;
          box-shadow: 0 0 0 rgba(212, 175, 55, 0.45);
          animation: footerPulse 2.8s ease-in-out infinite;
          flex-shrink: 0;
        }

        .confidential-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 999px !important;
          background: rgba(255,255,255,0.03);
          color: rgba(255,255,255,0.78);
          font-family: "DM Sans", sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 0 18px rgba(212,175,55,0.08);
        }

        @keyframes footerPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.28);
            opacity: 0.92;
          }
          50% {
            transform: scale(1.08);
            box-shadow: 0 0 0 6px rgba(212, 175, 55, 0);
            opacity: 1;
          }
        }

        @keyframes footerGlint {
          0%, 70%, 100% {
            transform: translateX(0);
            opacity: 0;
          }
          76% {
            opacity: 0.7;
          }
          88% {
            transform: translateX(460%);
            opacity: 0.9;
          }
          92% {
            opacity: 0;
          }
        }

        @keyframes liquidGlassShift {
          0% {
            transform: translateX(-1.2%) translateY(0);
          }
          100% {
            transform: translateX(1.2%) translateY(-1.4%);
          }
        }

        @media (max-width: 767px) {
          .footer-subtle-copy {
            order: 2;
            text-align: center;
          }
        }
      `}</style>
      
    </footer>
  );
}
