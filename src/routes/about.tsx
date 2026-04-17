import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — C-BLEC" },
      { name: "description", content: "Built for people who don't have time to edit." },
      { property: "og:title", content: "About — C-BLEC" },
      { property: "og:description", content: "The team behind C-BLEC." },
    ],
  }),
  component: AboutPage,
});

const founders = [
  {
    name: "Thejo",
    title: "Your Production Lead",
    line: "I've spent three years watching post-production workflows fall apart. Everything I've built at C-BLEC exists so that none of that chaos ever touches your end of the table.",
  },
  {
    name: "Shameem",
    title: "Your Growth Partner",
    line: "I'm not here to pitch you a package. Tell me what you're trying to build, and I'll tell you honestly whether we're the right fit - and if we are, we'll make it simple from there.",
  },
];

const values = [
  { n: "01", name: "Speed", d: "24 to 72 hour turnaround. No exceptions." },
  { n: "02", name: "Quality", d: "We don't ship work we wouldn't be proud of." },
  { n: "03", name: "Discretion", d: "Your strategy is yours. We work in the background." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About C-BLEC"
        title="Built for people who don't have time to edit."
      />

      <section style={{ background: "var(--bg)" }}>
        <div className="mx-auto max-w-[900px] px-6 py-24 md:py-28">
          <p style={{ color: "var(--text-muted)", fontSize: 17, lineHeight: 1.85 }}>
            C-BLEC was built around a simple observation: the people with the most valuable things to say are also
            the ones with the least time to say them well.
          </p>
          <p className="mt-5" style={{ color: "var(--text-muted)", fontSize: 17, lineHeight: 1.85 }}>
            We set up the infrastructure so all you have to do is show up on camera. Everything after that is ours.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--bg-subtle)", borderTop: "1px solid var(--border-faint)" }}>
        <div className="mx-auto max-w-[1000px] px-6 py-24 md:py-28">
          <div className="label-eyebrow text-center mb-12">The Founders</div>
          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            {founders.map((f) => (
              <div key={f.name}>
                <h3 className="font-display" style={{ fontWeight: 500, fontSize: 28 }}>{f.name}</h3>
                <div
                  className="mt-2"
                  style={{
                    fontFamily: "DM Sans",
                    fontWeight: 300,
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "#2C596D",
                  }}
                >
                  {f.title}
                </div>
                <p className="mt-4" style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.75 }}>{f.line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg)", borderTop: "1px solid var(--border-faint)" }}>
        <div className="mx-auto max-w-[1000px] px-6 py-24 md:py-28">
          <div className="label-eyebrow text-center mb-12">Values</div>
          <div className="grid md:grid-cols-3 gap-10">
            {values.map((v) => (
              <div key={v.n}>
                <div className="font-display" style={{ fontWeight: 300, fontSize: 40, color: "rgba(44,89,109,0.3)" }}>
                  {v.n}
                </div>
                <div
                  className="mt-3"
                  style={{
                    fontFamily: "DM Sans",
                    fontWeight: 400,
                    fontSize: 13,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "#2C596D",
                  }}
                >
                  {v.name}
                </div>
                <p className="mt-3" style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.7 }}>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
