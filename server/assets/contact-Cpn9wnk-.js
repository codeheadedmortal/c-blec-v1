import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-B3tQJJRR.js";
import { P as PageHero } from "./PageHero-CmY-Vu2X.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Field({
  label,
  children,
  active
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pt-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: {
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
      pointerEvents: "none"
    }, children: label }),
    children
  ] });
}
const baseInput = {
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
  transition: "all 0.3s var(--ease-flow)"
};
function ContactPage() {
  const [vals, setVals] = reactExports.useState({
    name: "",
    email: "",
    company: "",
    platform: "",
    cadence: "",
    message: ""
  });
  const [focus, setFocus] = reactExports.useState("");
  const set = (k) => (e) => setVals({
    ...vals,
    [k]: e.target.value
  });
  const isActive = (k) => focus === k || vals[k].length > 0;
  const onSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:thejo@cblec.com?subject=Free Month — ${encodeURIComponent(vals.name)}&body=${encodeURIComponent(`Name: ${vals.name}
Email: ${vals.email}
Company/Role: ${vals.company}
Platform: ${vals.platform}
Cadence: ${vals.cadence}

${vals.message}`)}`;
  };
  const focusStyle = (k) => focus === k ? {
    borderBottom: "1px solid #2C596D",
    boxShadow: "0 4px 16px var(--gold-glow)"
  } : {};
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Get In Touch", title: "Let's talk.", subtitle: "Tell us about your content goals and we'll take it from there.", height: "40vh" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: {
      background: "var(--bg)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto px-6 py-24 md:py-28", style: {
      maxWidth: 720
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "flex flex-col gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full Name", active: isActive("name"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", style: {
          ...baseInput,
          ...focusStyle("name")
        }, value: vals.name, onChange: set("name"), onFocus: () => setFocus("name"), onBlur: () => setFocus(""), required: true }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email Address", active: isActive("email"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", style: {
          ...baseInput,
          ...focusStyle("email")
        }, value: vals.email, onChange: set("email"), onFocus: () => setFocus("email"), onBlur: () => setFocus(""), required: true }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company / Role", active: isActive("company"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", style: {
          ...baseInput,
          ...focusStyle("company")
        }, value: vals.company, onChange: set("company"), onFocus: () => setFocus("company"), onBlur: () => setFocus("") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Platform", active: isActive("platform"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: vals.platform, onChange: set("platform"), onFocus: () => setFocus("platform"), onBlur: () => setFocus(""), style: {
          ...baseInput,
          ...focusStyle("platform"),
          appearance: "none",
          WebkitAppearance: "none",
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'><path d='M1 1L6 6L11 1' stroke='%232C596D' stroke-width='1'/></svg>")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 4px center",
          paddingRight: 24
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "YouTube" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "LinkedIn" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Instagram" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "X" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Multiple" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "How often do you post?", active: isActive("cadence"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: vals.cadence, onChange: set("cadence"), onFocus: () => setFocus("cadence"), onBlur: () => setFocus(""), style: {
          ...baseInput,
          ...focusStyle("cadence"),
          appearance: "none",
          WebkitAppearance: "none",
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'><path d='M1 1L6 6L11 1' stroke='%232C596D' stroke-width='1'/></svg>")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 4px center",
          paddingRight: 24
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Never" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Rarely" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "1–2x per month" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Weekly or more" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Anything else", active: isActive("message"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { style: {
          ...baseInput,
          ...focusStyle("message"),
          minHeight: 120,
          resize: "vertical"
        }, value: vals.message, onChange: set("message"), onFocus: () => setFocus("message"), onBlur: () => setFocus("") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "btn-primary", style: {
          width: "100%",
          height: 56,
          justifyContent: "center",
          letterSpacing: "0.15em"
        }, children: "Send It →" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hairline mt-16" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:thejo@cblec.com", className: "font-display mail-link", style: {
          fontWeight: 300,
          fontSize: 24,
          color: "#0A0A0A",
          transition: "all 0.35s var(--ease-flow)"
        }, children: "thejo@cblec.com" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3", style: {
          fontWeight: 300,
          fontSize: 13,
          color: "var(--text-muted)"
        }, children: "We typically respond within 24 hours." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
            .mail-link:hover {
              color: #2C596D !important;
              text-shadow: 0 2px 12px var(--gold-glow);
            }
          ` })
    ] }) })
  ] });
}
export {
  ContactPage as component
};
