import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — C-BLEC" },
      { name: "description", content: "End-to-end post-production: editing, thumbnails, captions, posting." },
      { property: "og:title", content: "Services — C-BLEC" },
      { property: "og:description", content: "Everything after the recording. Handled." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    n: "01",
    name: "Video Editing",
    desc: "Cuts, color grading, pacing, polish.",
    inc: ["Cut & assembly", "Color correction", "Sound design", "Text overlays"],
  },
  {
    n: "02",
    name: "Thumbnail Design",
    desc: "The first thing they see. Designed to earn the click.",
    inc: ["Custom per video", "A/B variants", "Brand-consistent"],
  },
  {
    n: "03",
    name: "Captions & Subtitles",
    desc: "Accurate, well-timed captions for silent scrollers.",
    inc: ["Transcription + QA", "Styled to brand", "SRT files"],
  },
  {
    n: "04",
    name: "Posting & Scheduling",
    desc: "Upload, description, tags, timing — all handled.",
    inc: ["YouTube", "LinkedIn", "Instagram", "X"],
  },
];

function ServicesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Our Services"
        title="Everything after the recording."
        subtitle="Nothing left on your plate."
      />

      <section style={{ background: "var(--bg)" }}>
        <div className="mx-auto max-w-[1000px] px-6 pb-24 md:pb-28">
          {services.map((s, i) => (
            <div
              key={s.n}
              className="grid gap-8 py-10 md:grid-cols-[80px_1fr_1fr] md:py-12"
              style={{ borderTop: i === 0 ? "none" : "1px solid var(--border-faint)" }}
            >
              <div className="font-display" style={{ fontSize: 36, fontWeight: 300, color: "rgba(44,89,109,0.4)" }}>
                {s.n}
              </div>
              <div>
                <h2 className="h-display-3" style={{ fontWeight: 500 }}>{s.name}</h2>
                <p className="mt-3" style={{ color: "var(--text-muted)", fontSize: 16 }}>{s.desc}</p>
              </div>
              <ul className="space-y-2 md:pt-2">
                {s.inc.map((x) => (
                  <li
                    key={x}
                    style={{
                      fontFamily: "DM Sans",
                      fontWeight: 300,
                      fontSize: 14,
                      color: "#2C596D",
                    }}
                  >
                    → {x}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="mt-14 text-center md:mt-16">
            <Link to="/contact" className="btn-primary">Start Your Free Month →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
