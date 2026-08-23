import Link from "next/link";
import { discoveries, formulas, type Discovery } from "../data/archive";
import { CopyLatexButton } from "./CopyLatexButton";
import { BlockMath } from "./Math";
import { SaveButton } from "./SaveButton";

export function DiscoveryDetail({ discovery }: { discovery: Discovery }) {
  const attachedFormulas = formulas.filter((formula) => discovery.formulaSlugs.includes(formula.slug));
  const related = discoveries.filter((item) => discovery.relatedDiscoverySlugs?.includes(item.slug));
  const index = discoveries.findIndex((item) => item.slug === discovery.slug);
  const previous = discoveries[index - 1];
  const next = discoveries[index + 1];

  return (
    <main className="detail-page">
      <article className="detail-article">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link prefetch={false} href="/discoveries">Discoveries</Link> / <Link prefetch={false} href={`/discoveries/category/${discovery.categorySlug}`}>{discovery.category}</Link> / <span>{discovery.title}</span>
        </nav>
        <p className="detail-meta">{discovery.category} | {discovery.resultType}{discovery.year ? ` | ${discovery.year}` : ""}</p>
        <h1>{discovery.title}</h1>
        <p className="subtitle">{discovery.summary}</p>
        {attachedFormulas.length ? (
          <section className="formula-panel parchment" aria-label={`${discovery.title} formulas`}>
            {attachedFormulas.map((formula) => (
              <div key={formula.slug}>
                <BlockMath math={formula.latex} label={formula.title} />
                <div className="formula-tools">
                  <Link prefetch={false} href={`/formulas/${formula.slug}`}>Formula permalink</Link>
                  <CopyLatexButton latex={formula.latex} label={formula.title} />
                </div>
              </div>
            ))}
          </section>
        ) : (
          <section className="formula-panel parchment"><p>This is a contribution-family entry; no single canonical formula is asserted here.</p></section>
        )}
        <section>
          <h2>What Ramanujan Discovered</h2>
          <p>{discovery.introduction}</p>
        </section>
        {discovery.keyResults?.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </section>
        ))}
        {discovery.explanation?.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </section>
        ))}
        {discovery.historicalContext?.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </section>
        ))}
        {discovery.laterDevelopments?.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </section>
        ))}
        <section className="detail-study-panel parchment sacred-card">
          <h2>How to Study This Entry</h2>
          <p>
            Start with the statement above, then compare its category with nearby entries in the archive. Use the formula permalink when a canonical expression is available, and follow related discoveries to see how the idea connects with partitions, q-series, modular forms, continued fractions, or number theory.
          </p>
          <p>
            Difficulty is marked as {discovery.difficulty.toLowerCase()}, and the editorial status is {discovery.reviewStatus}. Records marked for review preserve the contribution but await tighter primary-source citation.
          </p>
        </section>
        <section>
          <h2>Original Source</h2>
          <p className="citation">{discovery.sourceCitation ?? discovery.sourceTitle ?? discovery.sourceType}. Entries marked for review await the unavailable primary markdown catalogue for exact citation detail.</p>
        </section>
        {related.length ? (
          <section>
            <h2 className="related-title">Related Discoveries</h2>
            <div className="related-link-grid">
              {related.map((item) => <Link prefetch={false} className="parchment" href={`/discoveries/${item.slug}`} key={item.slug}>{item.title}</Link>)}
            </div>
          </section>
        ) : null}
      </article>
      <aside className="detail-sidebar">
        <div className="sidebar-box">
          <h2>At a Glance</h2>
          <dl>
            <dt>Field</dt><dd>{discovery.category}</dd>
            <dt>Result type</dt><dd>{discovery.resultType}</dd>
            <dt>Year</dt><dd>{discovery.year ?? "Not specified"}</dd>
            <dt>Difficulty</dt><dd>{discovery.difficulty}</dd>
            <dt>Source</dt><dd>{discovery.sourceType}</dd>
            <dt>Review</dt><dd>{discovery.reviewStatus}</dd>
          </dl>
        </div>
        <div className="sidebar-box">
          <h2>Actions</h2>
          {previous ? <Link prefetch={false} href={`/discoveries/${previous.slug}`}>Previous Discovery</Link> : null}
          {next ? <Link prefetch={false} href={`/discoveries/${next.slug}`}>Next Discovery</Link> : null}
          <SaveButton id={`discovery:${discovery.slug}`} label={discovery.title} />
        </div>
      </aside>
    </main>
  );
}
