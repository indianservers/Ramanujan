import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDiscovery, getFormula, getNamedConcept, namedConcepts } from "../../data/archive";
import { BlockMath } from "../../shared/Math";
import { SiteFooter } from "../../shared/SiteFooter";
import { SiteHeader } from "../../shared/SiteHeader";

export function generateStaticParams() {
  return namedConcepts.map((concept) => ({ conceptSlug: concept.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ conceptSlug: string }> }): Promise<Metadata> {
  const { conceptSlug } = await params;
  const concept = getNamedConcept(conceptSlug);
  if (!concept) return {};
  return {
    title: concept.title,
    description: concept.summary,
    openGraph: {
      title: `${concept.title} | The Ramanujan Universe`,
      description: concept.summary,
      images: [],
    },
    twitter: {
      title: `${concept.title} | The Ramanujan Universe`,
      description: concept.summary,
      images: [],
    },
  };
}

export default async function NamedConceptPage({ params }: { params: Promise<{ conceptSlug: string }> }) {
  const { conceptSlug } = await params;
  const concept = getNamedConcept(conceptSlug);
  if (!concept) notFound();
  const discovery = concept.discoverySlug ? getDiscovery(concept.discoverySlug) : undefined;
  const formula = concept.formulaSlug ? getFormula(concept.formulaSlug) : undefined;
  return (
    <>
      <SiteHeader active="Named Concepts" />
      <main className="formula-detail">
        <article className="parchment">
          <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/named-concepts">Named Concepts</a> / <span>{concept.title}</span></nav>
          <p className="detail-meta">{concept.status}</p>
          <h1>{concept.title}</h1>
          <p>{concept.summary}</p>
          {formula ? <BlockMath math={formula.latex} label={formula.title} /> : null}
          <dl>
            <dt>Historical status</dt><dd>{concept.status}</dd>
            <dt>Review status</dt><dd>{concept.reviewStatus}</dd>
            <dt>Discovery</dt><dd>{discovery ? <a href={`/discoveries/${discovery.slug}`}>{discovery.title}</a> : "Not linked"}</dd>
          </dl>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
