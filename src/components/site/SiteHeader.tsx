import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import brandLogo from "../../assets/logo 2.svg";

const links = [
  { to: "/", label: "Home" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className="fixed top-3 left-0 right-0 z-[300] px-3 md:px-6 pointer-events-none"
        style={{
          position: "fixed",
          height: 72,
          transition: "all 0.4s var(--ease-flow)",
        }}
      >
        <div
          className="site-header-glass pointer-events-auto mx-auto flex h-full max-w-[1200px] items-center justify-between px-6"
          style={{
            background: scrolled ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.065)",
            backdropFilter: scrolled ? "blur(28px) saturate(190%)" : "blur(26px) saturate(175%)",
            WebkitBackdropFilter: scrolled ? "blur(28px) saturate(190%)" : "blur(26px) saturate(175%)",
            border: scrolled ? "1px solid rgba(255,255,255,0.34)" : "1px solid rgba(255,255,255,0.24)",
            boxShadow: scrolled
              ? "inset 0 0 18px rgba(255,255,255,0.22), inset 0 1px 0 rgba(255,255,255,0.6), 0 22px 44px rgba(15, 23, 42, 0.16)"
              : "inset 0 0 14px rgba(255,255,255,0.18), inset 0 1px 0 rgba(255,255,255,0.5), 0 16px 34px rgba(15, 23, 42, 0.12)",
          }}
        >
          <Link
            to="/"
            className="group flex items-center"
            style={{ height: 42 }}
            aria-label="C-BLEC home"
          >
            <img
              src={brandLogo}
              alt="C-BLEC"
              className="block w-auto"
              style={{
                height: "clamp(28px, 5vw, 34px)",
                marginTop: 2,
                transition: "transform 0.35s var(--ease-flow)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-1px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="nav-link">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link to="/contact" className="btn-nav">
              Free Month →
            </Link>
          </div>

          <button
            aria-label="Open menu"
            className="md:hidden flex flex-col gap-[6px] p-2"
            onClick={() => setOpen(true)}
          >
            <span className="block w-6 h-px bg-[#0A0A0A]" />
            <span className="block w-6 h-px bg-[#0A0A0A]" />
            <span className="block w-6 h-px bg-[#0A0A0A]" />
          </button>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
          style={{ background: "var(--bg)" }}
        >
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute top-5 right-6 w-8 h-8 flex items-center justify-center"
          >
            <span className="block w-6 h-px bg-[#2C596D] rotate-45 absolute" />
            <span className="block w-6 h-px bg-[#2C596D] -rotate-45 absolute" />
          </button>
          <nav className="flex flex-col items-center gap-8">
            {links.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-display"
                style={{
                  fontWeight: 300,
                  fontSize: 48,
                  color: "#0A0A0A",
                  animation: `fadeUpMobile 0.6s var(--ease-flow) ${0.1 + i * 0.08}s both`,
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <style>{`@keyframes fadeUpMobile { from { opacity: 0; transform: translateY(20px);} to { opacity: 1; transform: translateY(0);} }`}</style>
        </div>
      )}
    </>
  );
}
