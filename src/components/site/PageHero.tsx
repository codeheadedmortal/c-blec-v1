import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  height = "50vh",
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  height?: string;
}) {
  return (
    <section
      className="flex items-center"
      style={{ minHeight: height, background: "var(--bg)" }}
    >
      <div className="mx-auto w-full max-w-[1100px] px-6 py-20 md:py-24">
        <div className="hairline-strong w-12 mb-6" />
        <div className="label-eyebrow mb-6">{eyebrow}</div>
        <h1 className="h-display-1 max-w-4xl">{title}</h1>
        {subtitle && (
          <p className="mt-6 max-w-xl" style={{ color: "var(--text-muted)", fontSize: 17 }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
