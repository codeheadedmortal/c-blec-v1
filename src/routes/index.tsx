import { createFileRoute, Link } from "@tanstack/react-router";
import type { PointerEvent } from "react";
import onlyLogo from "../assets/only logo.svg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "C-BLEC — Record & Relax | Premium Video Post-Production" },
      {
        name: "description",
        content:
          "You record. We handle editing, thumbnails, captions, and scheduling — delivered in 24 to 72 hours.",
      },
      { property: "og:title", content: "C-BLEC — Record & Relax" },
      {
        property: "og:description",
        content: "Premium post-production for high-value professionals. Record once. We handle the rest.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    n: "01",
    tone: "editing",
    name: "Editing",
    desc: "Cuts, color, pacing, polish.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="16" cy="16" r="3.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10.8 10.8L13.2 13.2M18.5 5.5L5.5 18.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: "02",
    tone: "thumbnails",
    name: "Thumbnails",
    desc: "Designed to earn the click.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3.5" y="5" width="17" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8.5 14L11 11.5L13.5 14L16.5 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="8.2" cy="9.2" r="1.2" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    n: "03",
    tone: "captions",
    name: "Captions",
    desc: "Accurate, on-brand subtitles.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3.5" y="5" width="17" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7 11.2H17M7 14.2H13.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: "04",
    tone: "scheduling",
    name: "Scheduling",
    desc: "We post. You just record.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4.5" y="5.5" width="15" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 3.8V7M16 3.8V7M7.5 11.5H16.5M12 11.5V16.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

type CardMotionState = {
  raf: number | null;
  currentX: number;
  currentY: number;
  currentX2: number;
  currentY2: number;
  velocityX: number;
  velocityY: number;
  targetX: number;
  targetY: number;
};

const cardMotion = new WeakMap<HTMLDivElement, CardMotionState>();

const clampPercent = (value: number) => Math.max(8, Math.min(92, value));

const getCardMotionState = (card: HTMLDivElement) => {
  const existing = cardMotion.get(card);
  if (existing) {
    return existing;
  }

  const state: CardMotionState = {
    raf: null,
    currentX: 52,
    currentY: 58,
    currentX2: 48,
    currentY2: 54,
    velocityX: 0,
    velocityY: 0,
    targetX: 52,
    targetY: 58,
  };
  cardMotion.set(card, state);
  return state;
};

const startCardMotion = (card: HTMLDivElement, state: CardMotionState) => {
  if (state.raf !== null) {
    return;
  }

  const tick = () => {
    const dx = state.targetX - state.currentX;
    const dy = state.targetY - state.currentY;
    const hasSettled =
      Math.abs(dx) < 0.04 &&
      Math.abs(dy) < 0.04 &&
      Math.abs(state.velocityX) < 0.02 &&
      Math.abs(state.velocityY) < 0.02;

    if (hasSettled) {
      state.currentX = state.targetX;
      state.currentY = state.targetY;
      state.currentX2 += (state.currentX - state.currentX2) * 0.12;
      state.currentY2 += (state.currentY - state.currentY2) * 0.12;
      state.velocityX = 0;
      state.velocityY = 0;
      card.style.setProperty("--mx", `${state.currentX.toFixed(2)}%`);
      card.style.setProperty("--my", `${state.currentY.toFixed(2)}%`);
      card.style.setProperty("--mx2", `${state.currentX2.toFixed(2)}%`);
      card.style.setProperty("--my2", `${state.currentY2.toFixed(2)}%`);
      state.raf = null;
      return;
    }

    // Honey-like viscosity: low stiffness + high damping + layered lag.
    const spring = 0.05;
    const damping = 0.84;
    state.velocityX = (state.velocityX + dx * spring) * damping;
    state.velocityY = (state.velocityY + dy * spring) * damping;
    state.currentX += state.velocityX;
    state.currentY += state.velocityY;

    // Secondary blob trails with extra lag so color does not move as one mass.
    state.currentX2 += (state.currentX - state.currentX2) * 0.055;
    state.currentY2 += (state.currentY - state.currentY2) * 0.055;

    state.currentX = clampPercent(state.currentX);
    state.currentY = clampPercent(state.currentY);
    state.currentX2 = clampPercent(state.currentX2);
    state.currentY2 = clampPercent(state.currentY2);

    card.style.setProperty("--mx", `${state.currentX.toFixed(2)}%`);
    card.style.setProperty("--my", `${state.currentY.toFixed(2)}%`);
    card.style.setProperty("--mx2", `${state.currentX2.toFixed(2)}%`);
    card.style.setProperty("--my2", `${state.currentY2.toFixed(2)}%`);
    state.raf = window.requestAnimationFrame(tick);
  };

  state.raf = window.requestAnimationFrame(tick);
};

const setServiceCardPointer = (event: PointerEvent<HTMLDivElement>) => {
  if (event.pointerType === "touch") {
    return;
  }

  const card = event.currentTarget;
  const state = getCardMotionState(card);
  const bounds = card.getBoundingClientRect();
  const x = event.clientX - bounds.left;
  const y = event.clientY - bounds.top;
  const cursorX = (x / bounds.width) * 100;
  const cursorY = (y / bounds.height) * 100;
  const repelStrength = 0.28;
  const repelledX = 50 + (50 - cursorX) * repelStrength;
  const repelledY = 50 + (50 - cursorY) * repelStrength;

  state.targetX = clampPercent(repelledX);
  state.targetY = clampPercent(repelledY);
  startCardMotion(card, state);
};

const resetServiceCardPointer = (event: PointerEvent<HTMLDivElement>) => {
  const card = event.currentTarget;
  const state = getCardMotionState(card);
  state.targetX = 52;
  state.targetY = 58;
  startCardMotion(card, state);
};

const setLiquidButtonPointer = (event: PointerEvent<HTMLAnchorElement>) => {
  if (event.pointerType === "touch") {
    return;
  }

  const button = event.currentTarget;
  const bounds = button.getBoundingClientRect();
  const x = event.clientX - bounds.left;
  const y = event.clientY - bounds.top;
  const px = (x / bounds.width) * 100;
  const py = (y / bounds.height) * 100;

  button.style.setProperty("--bx", `${px.toFixed(2)}%`);
  button.style.setProperty("--by", `${py.toFixed(2)}%`);
};

const resetLiquidButtonPointer = (event: PointerEvent<HTMLAnchorElement>) => {
  const button = event.currentTarget;
  button.style.setProperty("--bx", "52%");
  button.style.setProperty("--by", "50%");
};

function HomePage() {
  return (
    <>
      {/* HERO — minimal, no animation noise */}
      <section
        className="relative flex items-center justify-center"
        style={{ minHeight: "calc(100vh - 68px)", background: "var(--bg)" }}
      >
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <div className="hairline-strong w-12 mx-auto mb-6" />
          <div className="label-eyebrow mb-8">Post-Production Agency</div>
          <h1 className="h-display-1">
            You Record.
            <br />
            We Handle the Rest.
          </h1>
          <p
            className="mt-8 mx-auto"
            style={{ color: "var(--text-muted)", fontSize: 17, maxWidth: 480, lineHeight: 1.7 }}
          >
            We scale your personal brand on autopilot while you focus on your business.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="btn-liquid-cta"
              onPointerMove={setLiquidButtonPointer}
              onPointerLeave={resetLiquidButtonPointer}
            >
              Apply for a Pilot
            </Link>
            <Link
              to="/how-it-works"
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 400,
                fontSize: 13,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--text-primary)",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section style={{ background: "var(--bg)", borderTop: "1px solid var(--border-faint)" }}>
        <div className="mx-auto grid max-w-[1100px] gap-14 px-6 py-24 md:grid-cols-2 md:gap-16 md:py-28">
          <div>
            <div className="label-eyebrow mb-5">The Problem</div>
            <h2 className="h-display-2">Your time is too valuable to spend in the weeds of post-production.</h2>
            <p className="mt-6" style={{ color: "var(--text-muted)" }}>
              The people with the most to say have the least time to edit.
            </p>
          </div>
          <div className="md:border-l md:border-[var(--border-faint)] md:pl-16">
            <div className="label-eyebrow mb-5">The Solution</div>
            <h2 className="h-display-2">Record. Send. Done.</h2>
            <p className="mt-6" style={{ color: "var(--text-muted)" }}>
              We handle everything after the recording. One fixed process. 24–72 hour turnaround.
            </p>
            <p
              className="mt-4"
              style={{ color: "#2C596D", fontSize: 14, fontWeight: 400, lineHeight: 1.65 }}
            >
              Drop raw files in a secure portal. We handle the rest. No complex software, no managing freelancers.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES — clean static grid */}
      <section style={{ background: "var(--bg-subtle)" }}>
        <div className="mx-auto max-w-[1100px] px-6 py-24 md:py-28">
          <div className="text-center mb-16">
            <div className="label-eyebrow mb-5">What We Do</div>
            <h2 className="h-display-2">Four services. Everything handled.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.n}
                className={`service-card service-card--${s.tone}`}
                onPointerMove={setServiceCardPointer}
                onPointerLeave={resetServiceCardPointer}
                style={{
                  padding: "48px",
                }}
              >
                <div className="font-display service-number" style={{ fontSize: 28, fontWeight: 300 }}>
                  {s.n}
                </div>
                <div className="mt-4 service-icon">
                  {s.icon}
                </div>
                <h3 className="font-display mt-4 service-title" style={{ fontWeight: 500, fontSize: 24 }}>{s.name}</h3>
                <p className="mt-3 service-description" style={{ fontSize: 14, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-glass">All Services →</Link>
          </div>
        </div>
      </section>

      {/* FOUNDERS PHILOSOPHY */}
      <section style={{ background: "var(--bg)", borderTop: "1px solid var(--border-faint)" }}>
        <div className="mx-auto max-w-[900px] px-6 py-24 text-center md:py-28">
          <div className="label-eyebrow mb-6">Founder's Philosophy</div>
          <h2 className="h-display-2">Why C-BLEC Exists.</h2>
          <p className="mx-auto mt-7" style={{ color: "var(--text-muted)", fontSize: 17, lineHeight: 1.85, maxWidth: 760 }}>
            Most agencies focus on making videos look flashy. We focus on protecting your time and translating your
            existing authority into digital leverage. You shouldn't be managing editors; you should be recording your
            thoughts and moving on. Complete discretion. Zero friction.
          </p>
        </div>
      </section>

      {/* SECURITY / DISCRETION */}
      <section style={{ background: "var(--bg-subtle)", borderTop: "1px solid var(--border-faint)" }}>
        <div className="mx-auto max-w-[1100px] px-6 py-10">
          <div className="grid gap-px md:grid-cols-3" style={{ background: "var(--border-faint)" }}>
            {[
              "Strict NDAs available.",
              "Secure, private file handling.",
              "Seamless asynchronous communication aligned with US timezones.",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center px-6 py-6 text-center"
                style={{ background: "var(--bg)", minHeight: 86 }}
              >
                <span style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 13, letterSpacing: "0.06em" }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.14) 0%, rgba(212, 175, 55, 0.07) 30%, rgba(247, 243, 238, 0.95) 62%, var(--bg) 82%)",
          paddingBlock: "clamp(100px, 12vw, 140px)",
        }}
      >
        <div className="mx-auto max-w-[800px] px-6">
          <div className="offer-card-platinum text-center">
            <div className="offer-card-inner">
              <img src={onlyLogo} alt="C-BLEC logo" className="offer-logo-platinum" />
              <div className="label-eyebrow offer-eyebrow" style={{ color: "rgba(32, 38, 48, 0.72)" }}>The Offer</div>
              <h2 className="h-display-1 offer-title" style={{ color: "#1f2630" }}>
                Risk-Free Pilot. No Lock-in.
              </h2>
              <p
                className="offer-copy mx-auto"
                style={{ color: "#333333", fontWeight: 400, maxWidth: 580 }}
              >
                We're confident enough in our work to give you a full month before you pay.
              </p>
              <div className="offer-cta-wrap">
                <Link to="/contact" className="btn-platinum-cta">Apply for a Pilot →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: "var(--bg-subtle)", borderTop: "1px solid var(--border-faint)" }}>
        <div className="mx-auto max-w-[800px] px-6 py-24 text-center md:py-28">
          <h2 className="h-display-2">Ready to show up consistently?</h2>
          <div className="mt-8">
            <Link
              to="/contact"
              className="btn-liquid-cta"
              onPointerMove={setLiquidButtonPointer}
              onPointerLeave={resetLiquidButtonPointer}
            >
              Book a Free Call →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
