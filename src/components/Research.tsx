import {
  metrics,
  studies,
  researchArchive,
  researchCategories,
  type Study,
} from "../content/research";
import { Arrow, Kicker, type LinkTo } from "./Layout";

export function StudyList({
  to,
  group,
  featured = false,
}: {
  to: LinkTo;
  group?: Study["group"];
  featured?: boolean;
}) {
  const visible = studies
    .filter((study) =>
      (!group || study.group === group) && (!featured || study.featured),
    )
    .sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""));
  return (
    <div className="study-list">
      {visible.map((study) => (
        <article key={study.slug}>
          <a href={to("research/" + study.slug + "/")} className="study-row">
            <div className="study-id">
              <span className="study-category">{study.category}</span>
              <time className="study-date" dateTime={study.publishedAt}>{study.date}</time>
            </div>
            <div>
              <h3>{study.title}</h3>
              <p>{study.summary}</p>
            </div>
            <span className="round-arrow">
              <Arrow diagonal />
            </span>
          </a>
        </article>
      ))}
    </div>
  );
}
export function ResearchIndex({ to }: { to: LinkTo }) {
  return (
    <div className="section-light archive pad-section">
      <div className="shell">
        <Kicker>Research archive</Kicker>
        <div className="section-intro">
          <h1>Research.</h1>
          <p>{researchArchive.description}</p>
        </div>
        <nav className="research-categories" aria-label="Research categories">
          {researchCategories.map(({ id, label }) => (
            <a key={id} href={"#" + id}>{label}</a>
          ))}
        </nav>
        {researchCategories.map(({ id, label }) => (
          <section key={id} id={id} aria-labelledby={id + "-title"} className="archive-group">
            <h2 id={id + "-title"} className="archive-group-title">{label}</h2>
            <StudyList to={to} group={id} />
          </section>
        ))}
      </div>
    </div>
  );
}
function ResultsTable() {
  return (
    <div className="table-wrap">
      <table>
        <caption>Recorded workload measurements</caption>
        <thead>
          <tr>
            <th scope="col">Metric</th>
            <th scope="col">Baseline</th>
            <th scope="col">Final</th>
          </tr>
        </thead>
        <tbody>
          {metrics.map((metric) => (
            <tr key={metric.label}>
              <th scope="row">
                {metric.label} <small>({metric.unit})</small>
              </th>
              <td>{metric.before}</td>
              <td>{metric.after}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export function Article({ study, to }: { study: Study; to: LinkTo }) {
  return (
    <article className="article section-light">
      <div className="shell">
        <a className="back-link" href={to("research/")}>
          ← All research
        </a>
        <header className="article-heading">
          <Kicker>{study.category}</Kicker>
          <h1>{study.title}</h1>
          <p>{study.summary}</p>
          <time className="meta" dateTime={study.publishedAt}>{study.date}</time>
        </header>
        {study.figure && (
          <figure className="article-figure">
            <img
              src={to(study.figure.src.replace(/^\//, ""))}
              alt={study.figure.alt}
              width="1200"
              height="640"
            />
            <figcaption>{study.figure.caption}</figcaption>
          </figure>
        )}
        <div className="article-body">
          {study.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </section>
          ))}
          {study.resultsTable && <ResultsTable />}
          {study.originalUrl && (
            <p className="original-publication">
              Based on an earlier publication by the founder.
              {" "}
              <a href={study.originalUrl} target="_blank" rel="noopener noreferrer">
                Read the original on LinkedIn ↗
              </a>
            </p>
          )}
          <a href={to("research/")} className="text-link">
            Return to research <Arrow />
          </a>
        </div>
      </div>
    </article>
  );
}
