import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — C-BLEC" },
      { name: "description", content: "Four steps from recording to live." },
      { property: "og:title", content: "How It Works — C-BLEC" },
      { property: "og:description", content: "Record. Send. We handle it. Live." },
    ],
  }),
  component: HowItWorksPage,
});

const steps = [
  { n: "01", h: "Record", d: "Phone or camera — doesn't matter. Send raw footage." },
  { n: "02", h: "Send", d: "Drop the file in your shared Google Drive folder." },
  { n: "03", h: "We Handle It", d: "Editing, captions, thumbnail, scheduling — within 24 to 72 hours." },
  { n: "04", h: "It's Live", d: "Posted on schedule. You get a notification. Done." },
];

function HowItWorksPage() {
  return (
    <div>
      <PageHero
        eyebrow="The Process"
        title="Four steps. That's it."
        subtitle="Simple by design."
      />

      <section style={{ background: "var(--bg)" }}>
        <div className="mx-auto max-w-[1000px] px-6 pb-24 md:pb-28">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="grid grid-cols-[52px_1fr] gap-8 py-10 md:grid-cols-[60px_1fr] md:py-12"
              style={{ borderTop: i === 0 ? "none" : "1px solid var(--border-faint)" }}
            >
              <div className="font-display" style={{ fontSize: 40, fontWeight: 300, color: "rgba(44,89,109,0.5)" }}>
                {s.n}
              </div>
              <div>
                <h3 className="h-display-3" style={{ fontWeight: 500 }}>{s.h}</h3>
                <p className="mt-3" style={{ color: "var(--text-muted)", fontSize: 16 }}>{s.d}</p>
              </div>
            </div>
          ))}

          <div
            className="mt-14 p-8 md:mt-16 md:p-10"
            style={{ border: "1px solid var(--border-faint)", transition: "all 0.3s var(--ease-flow)" }}
          >
            <div className="label-eyebrow" style={{ color: "#2C596D" }}>Platforms</div>
            <p className="mt-3" style={{ color: "var(--text-primary)", fontSize: 16 }}>
              YouTube, LinkedIn, Instagram, X. Tell us your platform.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
