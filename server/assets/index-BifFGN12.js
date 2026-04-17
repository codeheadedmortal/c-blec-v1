import { T as jsxRuntimeExports } from "./worker-entry-B3tQJJRR.js";
import { L as Link, o as onlyLogo } from "./router-JpFBccO9.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const services = [{
  n: "01",
  tone: "editing",
  name: "Editing",
  desc: "Cuts, color, pacing, polish.",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "8", cy: "8", r: "3.5", stroke: "currentColor", strokeWidth: "1.4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "16", cy: "16", r: "3.5", stroke: "currentColor", strokeWidth: "1.4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10.8 10.8L13.2 13.2M18.5 5.5L5.5 18.5", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" })
  ] })
}, {
  n: "02",
  tone: "thumbnails",
  name: "Thumbnails",
  desc: "Designed to earn the click.",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "3.5", y: "5", width: "17", height: "14", rx: "1.5", stroke: "currentColor", strokeWidth: "1.4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8.5 14L11 11.5L13.5 14L16.5 11", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "8.2", cy: "9.2", r: "1.2", stroke: "currentColor", strokeWidth: "1.2" })
  ] })
}, {
  n: "03",
  tone: "captions",
  name: "Captions",
  desc: "Accurate, on-brand subtitles.",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "3.5", y: "5", width: "17", height: "14", rx: "1.5", stroke: "currentColor", strokeWidth: "1.4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7 11.2H17M7 14.2H13.8", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" })
  ] })
}, {
  n: "04",
  tone: "scheduling",
  name: "Scheduling",
  desc: "We post. You just record.",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "4.5", y: "5.5", width: "15", height: "14", rx: "1.5", stroke: "currentColor", strokeWidth: "1.4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 3.8V7M16 3.8V7M7.5 11.5H16.5M12 11.5V16.2", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" })
  ] })
}];
const cardMotion = /* @__PURE__ */ new WeakMap();
const clampPercent = (value) => Math.max(8, Math.min(92, value));
const getCardMotionState = (card) => {
  const existing = cardMotion.get(card);
  if (existing) {
    return existing;
  }
  const state = {
    raf: null,
    currentX: 52,
    currentY: 58,
    currentX2: 48,
    currentY2: 54,
    velocityX: 0,
    velocityY: 0,
    targetX: 52,
    targetY: 58
  };
  cardMotion.set(card, state);
  return state;
};
const startCardMotion = (card, state) => {
  if (state.raf !== null) {
    return;
  }
  const tick = () => {
    const dx = state.targetX - state.currentX;
    const dy = state.targetY - state.currentY;
    const hasSettled = Math.abs(dx) < 0.04 && Math.abs(dy) < 0.04 && Math.abs(state.velocityX) < 0.02 && Math.abs(state.velocityY) < 0.02;
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
    const spring = 0.05;
    const damping = 0.84;
    state.velocityX = (state.velocityX + dx * spring) * damping;
    state.velocityY = (state.velocityY + dy * spring) * damping;
    state.currentX += state.velocityX;
    state.currentY += state.velocityY;
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
const setServiceCardPointer = (event) => {
  if (event.pointerType === "touch") {
    return;
  }
  const card = event.currentTarget;
  const state = getCardMotionState(card);
  const bounds = card.getBoundingClientRect();
  const x = event.clientX - bounds.left;
  const y = event.clientY - bounds.top;
  const cursorX = x / bounds.width * 100;
  const cursorY = y / bounds.height * 100;
  const repelStrength = 0.28;
  const repelledX = 50 + (50 - cursorX) * repelStrength;
  const repelledY = 50 + (50 - cursorY) * repelStrength;
  state.targetX = clampPercent(repelledX);
  state.targetY = clampPercent(repelledY);
  startCardMotion(card, state);
};
const resetServiceCardPointer = (event) => {
  const card = event.currentTarget;
  const state = getCardMotionState(card);
  state.targetX = 52;
  state.targetY = 58;
  startCardMotion(card, state);
};
const setLiquidButtonPointer = (event) => {
  if (event.pointerType === "touch") {
    return;
  }
  const button = event.currentTarget;
  const bounds = button.getBoundingClientRect();
  const x = event.clientX - bounds.left;
  const y = event.clientY - bounds.top;
  const px = x / bounds.width * 100;
  const py = y / bounds.height * 100;
  button.style.setProperty("--bx", `${px.toFixed(2)}%`);
  button.style.setProperty("--by", `${py.toFixed(2)}%`);
};
const resetLiquidButtonPointer = (event) => {
  const button = event.currentTarget;
  button.style.setProperty("--bx", "52%");
  button.style.setProperty("--by", "50%");
};
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative flex items-center justify-center", style: {
      minHeight: "calc(100vh - 68px)",
      background: "var(--bg)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center px-6 max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hairline-strong w-12 mx-auto mb-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "label-eyebrow mb-8", children: "Post-Production Agency" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "h-display-1", children: [
        "You Record.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "We Handle the Rest."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 mx-auto", style: {
        color: "var(--text-muted)",
        fontSize: 17,
        maxWidth: 480,
        lineHeight: 1.7
      }, children: "We scale your personal brand on autopilot while you focus on your business." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "btn-liquid-cta", onPointerMove: setLiquidButtonPointer, onPointerLeave: resetLiquidButtonPointer, children: "Apply for a Pilot" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/how-it-works", style: {
          fontFamily: "DM Sans, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "var(--text-primary)",
          textDecoration: "underline",
          textUnderlineOffset: "4px"
        }, children: "How It Works" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: {
      background: "var(--bg)",
      borderTop: "1px solid var(--border-faint)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-[1100px] gap-14 px-6 py-24 md:grid-cols-2 md:gap-16 md:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "label-eyebrow mb-5", children: "The Problem" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "h-display-2", children: "Your time is too valuable to spend in the weeds of post-production." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6", style: {
          color: "var(--text-muted)"
        }, children: "The people with the most to say have the least time to edit." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:border-l md:border-[var(--border-faint)] md:pl-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "label-eyebrow mb-5", children: "The Solution" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "h-display-2", children: "Record. Send. Done." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6", style: {
          color: "var(--text-muted)"
        }, children: "We handle everything after the recording. One fixed process. 24–72 hour turnaround." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4", style: {
          color: "#2C596D",
          fontSize: 14,
          fontWeight: 400,
          lineHeight: 1.65
        }, children: "Drop raw files in a secure portal. We handle the rest. No complex software, no managing freelancers." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: {
      background: "var(--bg-subtle)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1100px] px-6 py-24 md:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "label-eyebrow mb-5", children: "What We Do" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "h-display-2", children: "Four services. Everything handled." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `service-card service-card--${s.tone}`, onPointerMove: setServiceCardPointer, onPointerLeave: resetServiceCardPointer, style: {
        padding: "48px"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display service-number", style: {
          fontSize: 28,
          fontWeight: 300
        }, children: s.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 service-icon", children: s.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-4 service-title", style: {
          fontWeight: 500,
          fontSize: 24
        }, children: s.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 service-description", style: {
          fontSize: 14,
          lineHeight: 1.7
        }, children: s.desc })
      ] }, s.n)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "btn-glass", children: "All Services →" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: {
      background: "var(--bg)",
      borderTop: "1px solid var(--border-faint)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[900px] px-6 py-24 text-center md:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "label-eyebrow mb-6", children: "Founder's Philosophy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "h-display-2", children: "Why C-BLEC Exists." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-7", style: {
        color: "var(--text-muted)",
        fontSize: 17,
        lineHeight: 1.85,
        maxWidth: 760
      }, children: "Most agencies focus on making videos look flashy. We focus on protecting your time and translating your existing authority into digital leverage. You shouldn't be managing editors; you should be recording your thoughts and moving on. Complete discretion. Zero friction." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: {
      background: "var(--bg-subtle)",
      borderTop: "1px solid var(--border-faint)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1100px] px-6 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-px md:grid-cols-3", style: {
      background: "var(--border-faint)"
    }, children: ["Strict NDAs available.", "Secure, private file handling.", "Seamless asynchronous communication aligned with US timezones."].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center px-6 py-6 text-center", style: {
      background: "var(--bg)",
      minHeight: 86
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
      fontFamily: "DM Sans, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      letterSpacing: "0.06em"
    }, children: item }) }, item)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: {
      background: "radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.14) 0%, rgba(212, 175, 55, 0.07) 30%, rgba(247, 243, 238, 0.95) 62%, var(--bg) 82%)",
      paddingBlock: "clamp(100px, 12vw, 140px)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[800px] px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "offer-card-platinum text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "offer-card-inner", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: onlyLogo, alt: "C-BLEC logo", className: "offer-logo-platinum" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "label-eyebrow offer-eyebrow", style: {
        color: "rgba(32, 38, 48, 0.72)"
      }, children: "The Offer" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "h-display-1 offer-title", style: {
        color: "#1f2630"
      }, children: "Risk-Free Pilot. No Lock-in." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "offer-copy mx-auto", style: {
        color: "#333333",
        fontWeight: 400,
        maxWidth: 580
      }, children: "We're confident enough in our work to give you a full month before you pay." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "offer-cta-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "btn-platinum-cta", children: "Apply for a Pilot →" }) })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: {
      background: "var(--bg-subtle)",
      borderTop: "1px solid var(--border-faint)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[800px] px-6 py-24 text-center md:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "h-display-2", children: "Ready to show up consistently?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "btn-liquid-cta", onPointerMove: setLiquidButtonPointer, onPointerLeave: resetLiquidButtonPointer, children: "Book a Free Call →" }) })
    ] }) })
  ] });
}
export {
  HomePage as component
};
