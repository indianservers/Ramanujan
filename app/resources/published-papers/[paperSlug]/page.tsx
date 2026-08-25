import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { discoveries, papers } from "../../../data/archive";
import { PageTools } from "../../../shared/PageTools";
import { SiteFooter } from "../../../shared/SiteFooter";
import { SiteHeader } from "../../../shared/SiteHeader";

export function generateStaticParams() {
  return papers.map((paper) => ({ paperSlug: paper.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ paperSlug: string }> }): Promise<Metadata> {
  const { paperSlug } = await params;
  const paper = papers.find((item) => item.slug === paperSlug);
  if (!paper) return {};
  return {
    title: paper.title,
    description: `${paper.year} paper in ${paper.journal}. ${paper.subjects.join(", ")}.`,
    openGraph: {
      title: `${paper.title} | The Ramanujan Universe`,
      description: `${paper.year} paper in ${paper.journal}. ${paper.subjects.join(", ")}.`,
      images: [],
    },
    twitter: {
      title: `${paper.title} | The Ramanujan Universe`,
      description: `${paper.year} paper in ${paper.journal}. ${paper.subjects.join(", ")}.`,
      images: [],
    },
  };
}

export default async function PublishedPaperPage({ params }: { params: Promise<{ paperSlug: string }> }) {
  const { paperSlug } = await params;
  const paper = papers.find((item) => item.slug === paperSlug);
  if (!paper) notFound();
  const related = paper.relatedDiscoverySlugs.map((slug) => discoveries.find((item) => item.slug === slug)).filter(Boolean);

  return (
    <>
      <SiteHeader active="Resources" />
      <main className="formula-detail">
        <article className="parchment">
          <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/resources">Resources</a> / <a href="/resources/published-papers">Published Papers</a> / <span>{paper.title}</span></nav>
          <p className="detail-meta">{paper.year} | {paper.journal}</p>
          <h1>{paper.title}</h1>
          <p className="subtitle">{paper.volumePages ?? "Bibliographic details incomplete."}</p>
          <PageTools id={`paper:${paper.slug}`} label={paper.title} citation={`${paper.title}. ${paper.journal}, ${paper.year}. ${paper.volumePages ?? ""}`} />
          <dl>
            <dt>Year</dt><dd>{paper.year}</dd>
            <dt>Journal</dt><dd>{paper.journal}</dd>
            <dt>Pages</dt><dd>{paper.volumePages ?? "Not recorded"}</dd>
            <dt>Authors</dt><dd>{paper.collaborators.length ? `S. Ramanujan with ${paper.collaborators.join(", ")}` : "S. Ramanujan"}</dd>
            <dt>Subjects</dt><dd>{paper.subjects.join(", ")}</dd>
            <dt>Index status</dt><dd>{paper.reviewStatus}</dd>
          </dl>
          <section>
            <h2>Why This Paper Matters</h2>
            <p>This record connects a printed Ramanujan paper to the site&apos;s discovery catalogue. Use it as a bibliographic anchor before moving into formulas, explanations, and related topic pages.</p>
          </section>
          <section>
            <h2>Source Note</h2>
            <p className="citation">{paper.externalSource ?? "Collected Papers of Srinivasa Ramanujan"}</p>
          </section>
          {related.length ? (
            <section>
              <h2>Related Discoveries</h2>
              <div className="related-link-grid">
                {related.map((item) => item ? <a className="parchment" href={`/discoveries/${item.slug}`} key={item.slug}>{item.title}</a> : null)}
              </div>
            </section>
          ) : null}
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
