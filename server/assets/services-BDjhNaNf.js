import { T as jsxRuntimeExports } from "./worker-entry-B3tQJJRR.js";
import { L as Link } from "./router-JpFBccO9.js";
import { P as PageHero } from "./PageHero-CmY-Vu2X.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const services = [{
  n: "01",
  name: "Video Editing",
  desc: "Cuts, color grading, pacing, polish.",
  inc: ["Cut & assembly", "Color correction", "Sound design", "Text overlays"]
}, {
  n: "02",
  name: "Thumbnail Design",
  desc: "The first thing they see. Designed to earn the click.",
  inc: ["Custom per video", "A/B variants", "Brand-consistent"]
}, {
  n: "03",
  name: "Captions & Subtitles",
  desc: "Accurate, well-timed captions for silent scrollers.",
  inc: ["Transcription + QA", "Styled to brand", "SRT files"]
}, {
  n: "04",
  name: "Posting & Scheduling",
  desc: "Upload, description, tags, timing — all handled.",
  inc: ["YouTube", "LinkedIn", "Instagram", "X"]
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Our Services", title: "Everything after the recording.", subtitle: "Nothing left on your plate." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: {
      background: "var(--bg)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1000px] px-6 pb-24 md:pb-28", children: [
      services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 py-10 md:grid-cols-[80px_1fr_1fr] md:py-12", style: {
        borderTop: i === 0 ? "none" : "1px solid var(--border-faint)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display", style: {
          fontSize: 36,
          fontWeight: 300,
          color: "rgba(44,89,109,0.4)"
        }, children: s.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "h-display-3", style: {
            fontWeight: 500
          }, children: s.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3", style: {
            color: "var(--text-muted)",
            fontSize: 16
          }, children: s.desc })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 md:pt-2", children: s.inc.map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { style: {
          fontFamily: "DM Sans",
          fontWeight: 300,
          fontSize: 14,
          color: "#2C596D"
        }, children: [
          "→ ",
          x
        ] }, x)) })
      ] }, s.n)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 text-center md:mt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "btn-primary", children: "Start Your Free Month →" }) })
    ] }) })
  ] });
}
export {
  ServicesPage as component
};
