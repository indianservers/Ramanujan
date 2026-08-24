import { ramanujanTopics } from "../data/ramanujan-topics";
import { HeritageIcon } from "../shared/HeritageIcon";
import { PageTools } from "../shared/PageTools";
import { SiteFooter } from "../shared/SiteFooter";
import { SiteHeader } from "../shared/SiteHeader";

const categories = Array.from(new Set(ramanujanTopics.map((topic) => topic.category)));

export default function RamanujanHubPage() {
  return (
    <>
      <SiteHeader active="Ramanujan" />
      <main className="editorial-page ramanujan-hub">
        <section className="page-heading archive-operational-heading">
          <p className="eyebrow">Complete Ramanujan</p>
          <h1>The Missing Context</h1>
          <p>Biographical, historical, cultural and learning pathways that complete the mathematical archive.</p>
          <PageTools id="page:ramanujan-context" label="Ramanujan Context Hub" citation="Editorial context hub for the Ramanujan Universe." />
        </section>
        <section className="context-summary-grid" aria-label="Ramanujan context summary">
          <article><strong>{ramanujanTopics.length}</strong><span>new context topics</span></article>
          <article><strong>{categories.length}</strong><span>coverage areas</span></article>
          <article><strong>Life + Math</strong><span>connected reading paths</span></article>
        </section>
        <section className="context-section-list">
          {categories.map((category) => {
            const topics = ramanujanTopics.filter((topic) => topic.category === category);
            return (
              <section className="context-topic-group" key={category}>
                <div className="section-kicker">
                  <p>{category}</p>
                  <span>{topics.length} topics</span>
                </div>
                <div className="formula-grid">
                  {topics.map((topic) => (
                    <article className="formula-card sacred-card" key={topic.slug}>
                      <h2><HeritageIcon name="mandala" /> {topic.title}</h2>
                      <p>{topic.summary}</p>
                      <div className="formula-card-tags"><span>{topic.eyebrow}</span><span>{topic.category}</span></div>
                      <a href={`/ramanujan/${topic.slug}`}>Open Topic</a>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
