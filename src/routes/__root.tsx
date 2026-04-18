import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import logoFavicon from "../assets/only logo.svg?url";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4" style={{ background: "var(--bg)" }}>
      <div className="max-w-md text-center">
        <div className="label-eyebrow mb-6">Error 404</div>
        <h1 className="h-display-1">Lost in the cut.</h1>
        <p className="mt-4" style={{ color: "var(--text-muted)" }}>
          This page doesn't exist — or it's still on the timeline.
        </p>
        <div className="mt-8">
          <Link to="/" className="btn-outline">Return Home →</Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "C-BLEC — Record & Relax | Premium Video Post-Production" },
      {
        name: "description",
        content:
          "C-BLEC is a premium video post-production agency. You record. We handle editing, thumbnails, captions, and scheduling — delivered in 24 to 72 hours.",
      },
      { name: "author", content: "C-BLEC" },
      { property: "og:title", content: "C-BLEC — Record & Relax" },
      {
        property: "og:description",
        content: "Premium video post-production for professionals. Editing, thumbnails, captions, scheduling — handled.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: logoFavicon },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;500&family=DM+Sans:wght@300;400&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <SiteHeader />
      <main className="pt-[68px]">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
