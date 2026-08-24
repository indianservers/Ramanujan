import { notFound } from "next/navigation";
import { getRamanujanTopic, ramanujanTopics } from "../../data/ramanujan-topics";
import { PageTools } from "../../shared/PageTools";
import { SiteFooter } from "../../shared/SiteFooter";
import { SiteHeader } from "../../shared/SiteHeader";

export function generateStaticParams() {
  return ramanujanTopics.map((topic) => ({ topicSlug: topic.slug }));
}

export default async function RamanujanTopicPage({ params }: { params: Promise<{ topicSlug: string }> }) {
  const { topicSlug } = await params;
  const topic = getRamanujanTopic(topicSlug);
  if (!topic) notFound();
  const related = ramanujanTopics.filter((item) => item.category === topic.category && item.slug !== topic.slug).slice(0, 4);

  return (
    <>
      <SiteHeader active="Ramanujan" />
      <main className="editorial-page">
        <section className="detail-page context-detail-page">
          <article className="detail-article">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="/ramanujan">Ramanujan</a> / <span>{topic.title}</span>
            </nav>
            <p className="detail-meta">{topic.category} | {topic.eyebrow}</p>
            <h1>{topic.title}</h1>
            <p className="subtitle">{topic.summary}</p>
            <PageTools id={`ramanujan:${topic.slug}`} label={topic.title} citation="Editorial context page; exact primary-source claims require cited specialist sources." />
            {topic.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
            <section className="detail-study-panel parchment sacred-card">
              <h2>How to Use This Topic</h2>
              <p>Use this page as a bridge into the existing archive. Follow the links below to compare biography, notebooks, discoveries, formulas, letters and references.</p>
            </section>
          </article>
          <aside className="detail-sidebar">
            <div className="sidebar-box">
              <h2>Related Links</h2>
              {topic.links.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
            </div>
            {related.length ? (
              <div className="sidebar-box">
                <h2>Nearby Topics</h2>
                {related.map((item) => <a href={`/ramanujan/${item.slug}`} key={item.slug}>{item.title}</a>)}
              </div>
            ) : null}
          </aside>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
