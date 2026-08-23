import { namedConcepts } from "../data/archive";
import { SiteFooter } from "../shared/SiteFooter";
import { SiteHeader } from "../shared/SiteHeader";

export default function NamedConceptsPage() {
  return (
    <>
      <SiteHeader active="Named Concepts" />
      <main className="archive-page">
        <section className="page-heading">
          <h1>Named Concepts</h1>
          <p>Historically qualified concepts personally formulated, rediscovered, collaboratively developed, or named for Ramanujan later.</p>
        </section>
        <section className="concept-grid">
          {namedConcepts.map((concept) => (
            <a className="concept-card" href={`/named-concepts/${concept.slug}`} key={concept.slug}>
              <span>{concept.status}</span>
              <h2>{concept.title}</h2>
              <p>{concept.summary}</p>
            </a>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
