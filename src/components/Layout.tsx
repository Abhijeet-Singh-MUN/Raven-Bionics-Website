import type { ReactNode } from "react";
import { company, home, navigation } from "../content/site";

export function urlFrom(route: string) {
  const depth = route.split("/").filter(Boolean).length;
  const root = depth ? "../".repeat(depth) : "./";
  return (target: string) =>
    !depth && target.startsWith("#") ? target : root + target;
}
export type LinkTo = ReturnType<typeof urlFrom>;

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg className="arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <g
        transform={diagonal ? "rotate(-45 12 12)" : undefined}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 12h15m-6-6 6 6-6 6" />
      </g>
    </svg>
  );
}

export function Wordmark({ to }: { to: LinkTo }) {
  return (
    <a className="brand" href={to("")} aria-label="Raven Bionics home">
      <img src={to("media/identity/mark.svg")} width="38" height="35" alt="" />
      <span>Raven Bionics</span>
    </a>
  );
}
export function Layout({
  route,
  children,
}: {
  route: string;
  children: ReactNode;
}) {
  const to = urlFrom(route);
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="masthead">
        <div className="shell mast-inner">
          <Wordmark to={to} />
          <button
            type="button"
            className="menu-toggle"
            aria-controls="site-nav"
            aria-expanded="false"
            hidden
          >
            Menu <span aria-hidden="true">☰</span>
          </button>
          <nav aria-label="Main navigation" id="site-nav">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={to(item.to)}
                aria-current={route === item.to ? "page" : undefined}
                className={item.label === "Contact" ? "contact-nav" : ""}
              >
                {item.label}
                {item.label === "Contact" && <Arrow diagonal />}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <footer id="contact">
        <div className="shell">
          <div className="footer-head">
            <div>
              <span className="eyebrow">Contact</span>
              <h2>{home.contact.title}</h2>
            </div>
            <div className="footer-copy">
              <p>
                {company.email
                  ? "Get in touch about engineering questions and research collaboration."
                  : home.contact.text}
              </p>
              <a
                className="text-link"
                href={
                  company.email ? "mailto:" + company.email : company.contactUrl
                }
              >
                {company.email || company.contactLabel}
                <Arrow diagonal />
              </a>
            </div>
          </div>
          <div className="footer-base">
            <Wordmark to={to} />
            <span>Independent research &amp; development</span>
            <a href="#main">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}
export function Kicker({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}
