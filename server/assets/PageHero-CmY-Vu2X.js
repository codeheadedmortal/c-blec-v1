import { T as jsxRuntimeExports } from "./worker-entry-B3tQJJRR.js";
function PageHero({
  eyebrow,
  title,
  subtitle,
  height = "50vh"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "flex items-center",
      style: { minHeight: height, background: "var(--bg)" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-[1100px] px-6 py-20 md:py-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hairline-strong w-12 mb-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "label-eyebrow mb-6", children: eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "h-display-1 max-w-4xl", children: title }),
        subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl", style: { color: "var(--text-muted)", fontSize: 17 }, children: subtitle })
      ] })
    }
  );
}
export {
  PageHero as P
};
