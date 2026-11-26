import { home, media, company } from "../content/site";
import { studies, featuredFinding } from "../content/research";
import { Arrow, Kicker, type LinkTo } from "./Layout";
import { StudyList } from "./Research";

export function Hero({ to }: { to: LinkTo }) {
  const { hero } = home;
  return (
    <section className="hero-journey" aria-labelledby="hero-title" data-hero>
      <div className="hero-stage">
        <div className="portrait">
          <img
            id="portrait"
            src={to(media.raven.src)}
            srcSet={
              to(media.raven.small) + " 768w, " + to(media.raven.src) + " 1536w"
            }
            sizes="(max-width: 700px) 100vw, 75vw"
            alt={media.raven.alt}
            fetchPriority="high"
            width="1536"
            height="1024"
            data-eye={media.raven.eye.join(",")}
          />
          {media.raven.eyeDetail && (
            <img
              className="eye-detail"
              src={to(media.raven.eyeDetail)}
              alt=""
              width="1536"
              height="1024"
              loading="lazy"
            />
          )}
        </div>
        <div className="hero-shade" />
        <div className="hero-portal" aria-hidden="true">
          <img
            src={to(media.world[0].src)}
            alt=""
            width="1200"
            height="650"
            loading="lazy"
          />
        </div>
        <div className="shell hero-inner">
          <div className="hero-copy">
            <Kicker>{hero.label}</Kicker>
            <h1 id="hero-title">
              {hero.title}
              <br />
              <span className="hero-emphasis">{hero.emphasis}</span>
            </h1>
            <p>{hero.intro}</p>
            <div className="actions">
              <a className="button primary" href={to("research/")}>
                {hero.primary}
                <Arrow />
              </a>
              <a className="button secondary" href="#experiments">
                {hero.secondary}
                <Arrow diagonal />
              </a>
            </div>
          </div>
        </div>
        <div className="shell hero-foot">
          <a href="#perception">
            <span className="scroll-stem" aria-hidden="true">
              ↓
            </span>{" "}
            Scroll to explore
          </a>
          <span className="species">
            <i aria-hidden="true" /> Corvus corax
          </span>
        </div>
      </div>
    </section>
  );
}

export function Perception({ to }: { to: LinkTo }) {
  return (
    <section
      id="perception"
      className="section-light pad-section"
      aria-labelledby="problem-title"
    >
      <div className="shell">
        <Kicker>{home.problem.label}</Kicker>
        <div className="section-intro">
          <h2 id="problem-title">{home.problem.title}</h2>
          <p>{home.problem.text}</p>
        </div>
        <div className="scene-journey" data-world>
          <figure className="scene">
            <div className="scene-images">
              {media.world.map((state, index) => (
                <img
                  key={state.label}
                  src={to(state.src)}
                  width="1200"
                  height="650"
                  loading="lazy"
                  alt={state.alt}
                  className={index === 0 ? "current" : ""}
                  aria-hidden={index !== 0}
                  data-layer={index}
                />
              ))}
            </div>
            <figcaption>
              <span>Illustrative terrain study</span>
              <div
                className="scene-controls"
                role="group"
                aria-label="Terrain representation"
              >
                {media.world.map((state, index) => (
                  <button
                    key={state.label}
                    type="button"
                    aria-pressed={index === 0}
                    data-state={index}
                  >
                    {state.label}
                  </button>
                ))}
              </div>
            </figcaption>
            <noscript>
              <p className="fallback-views">
                View the layers:{" "}
                {media.world.map((state, index) => (
                  <span key={state.label}>
                    {index > 0 && " · "}
                    <a href={to(state.src)}>{state.label}</a>
                  </span>
                ))}
              </p>
            </noscript>
          </figure>
        </div>
        <p className="figure-note">{home.problem.caption}</p>
      </div>
    </section>
  );
}
export function Focus() {
  return (
    <section
      id="technology"
      className="focus section-light"
      aria-label="Research focus"
    >
      <div className="shell">
        <h2 className="focus-heading">
          <Kicker>Research focus</Kicker>
        </h2>
        <div className="focus-grid">
          {home.focus.map(({ status, title, text }) => (
            <div key={title}>
              <span className="focus-status">{status}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function ResearchDemo({ to }: { to: LinkTo }) {
  const study = studies.find((entry) => entry.slug === home.demo.studySlug)!;
  const poster = to((media.demo.poster || study.figure?.src || "media/research/system-architecture.svg").replace(/^\//, ""));
  return (
    <section id="experiments" className="demo pad-section">
      <div className="shell demo-grid">
        <div>
          <Kicker>{home.demo.label}</Kicker>
          <h2>{home.demo.title}</h2>
          <p>{home.demo.text}</p>
          <a className="text-link" href={to("research/" + study.slug + "/")}>
            Read the research study <Arrow />
          </a>
        </div>
        <figure className="demo-frame">
          {media.demo.video ? (
            <video
              controls
              playsInline
              preload="none"
              poster={poster}
              aria-label="Simulation demonstration"
            >
              <source src={to(media.demo.video)} />
            </video>
          ) : (
            <img
              src={poster}
              alt={media.demo.alt || study.figure?.alt || "Experimental spatial intelligence architecture diagram"}
              width="1440"
              height="760"
              loading="lazy"
            />
          )}
          <figcaption>
            {media.demo.caption ||
              (media.demo.video ? "Simulation recording" : study.figure?.caption || "Experimental system architecture")}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
export function Evidence({ to }: { to: LinkTo }) {
  return (
    <section className="section-light pad-section">
      <div className="shell">
        <Kicker>{home.evidence.label}</Kicker>
        <div className="section-intro">
          <h2>{home.evidence.title}</h2>
          <p>{home.evidence.text}</p>
        </div>
        <aside className="study-finding">
          <h3>{featuredFinding.title}</h3>
          <p>{featuredFinding.text}</p>
        </aside>
        <StudyList to={to} limit={3} />
      </div>
    </section>
  );
}
export function Outlook() {
  return (
    <section className="outlook pad-section">
      <div className="shell">
        <Kicker>{home.outlook.label}</Kicker>
        <div className="section-intro">
          <h2>{home.outlook.title}</h2>
          <div>
            <h3>Potential applications</h3>
            <p>{home.outlook.applications}</p>
            <h3>Longer-term research</h3>
            <p>{home.outlook.future}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export function About() {
  return (
    <section id="about" className="section-light pad-section">
      <div className="shell">
        <Kicker>{home.about.label}</Kicker>
        <div className="section-intro">
          <h2>{home.about.title}</h2>
          <div>
            <p>{home.about.text}</p>
            {company.founder && <p>{company.founder}</p>}
            {company.officialDetails && <p>{company.officialDetails}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
export function Home({ to }: { to: LinkTo }) {
  return (
    <>
      <Hero to={to} />
      <Perception to={to} />
      <Focus />
      <ResearchDemo to={to} />
      <Evidence to={to} />
      <Outlook />
      <About />
    </>
  );
}
