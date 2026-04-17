import { T as jsxRuntimeExports } from "./worker-entry-B3tQJJRR.js";
import { P as PageHero } from "./PageHero-CmY-Vu2X.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const steps = [{
  n: "01",
  h: "Record",
  d: "Phone or camera — doesn't matter. Send raw footage."
}, {
  n: "02",
  h: "Send",
  d: "Drop the file in your shared Google Drive folder."
}, {
  n: "03",
  h: "We Handle It",
  d: "Editing, captions, thumbnail, scheduling — within 24 to 72 hours."
}, {
  n: "04",
  h: "It's Live",
  d: "Posted on schedule. You get a notification. Done."
}];
function HowItWorksPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "The Process", title: "Four steps. That's it.", subtitle: "Simple by design." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: {
      background: "var(--bg)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1000px] px-6 pb-24 md:pb-28", children: [
      steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[52px_1fr] gap-8 py-10 md:grid-cols-[60px_1fr] md:py-12", style: {
        borderTop: i === 0 ? "none" : "1px solid var(--border-faint)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display", style: {
          fontSize: 40,
          fontWeight: 300,
          color: "rgba(44,89,109,0.5)"
        }, children: s.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "h-display-3", style: {
            fontWeight: 500
          }, children: s.h }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3", style: {
            color: "var(--text-muted)",
            fontSize: 16
          }, children: s.d })
        ] })
      ] }, s.n)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 p-8 md:mt-16 md:p-10", style: {
        border: "1px solid var(--border-faint)",
        transition: "all 0.3s var(--ease-flow)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "label-eyebrow", style: {
          color: "#2C596D"
        }, children: "Platforms" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3", style: {
          color: "var(--text-primary)",
          fontSize: 16
        }, children: "YouTube, LinkedIn, Instagram, X. Tell us your platform." })
      ] })
    ] }) })
  ] });
}
export {
  HowItWorksPage as component
};
