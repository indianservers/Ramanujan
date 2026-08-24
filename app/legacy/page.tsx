import { legacyTopics, namedConcepts } from "../data/archive";
import { PageTools } from "../shared/PageTools";
import { SiteFooter } from "../shared/SiteFooter";
import { SiteHeader } from "../shared/SiteHeader";

export default function LegacyPage() {
  return (
    <>
      <SiteHeader active="Legacy" />
      <main className="editorial-page">
        <section className="editorial-hero">
          <div>
            <p className="eyebrow">Legacy</p>
            <h1>A Legacy Beyond Infinity</h1>
            <p className="subtitle">Ramanujan&apos;s ideas still shape number theory, modular forms, q-series and modern mathematics.</p>
            <PageTools id="page:legacy" label="Legacy" citation="Educational legacy summary based on project catalogue records." />
          </div>
          <img src="/assets/hero-srinivasa-ramanujan.png" alt="Srinivasa Ramanujan portrait" />
        </section>
        <section className="editorial-body">
          <article className="parchment">
            {legacyTopics.map((topic) => <section key={topic.title}><h2>{topic.title}</h2><p>{topic.body}</p></section>)}
            <section>
              <h2>Influence Areas</h2>
              <p>Number theory, partition theory, modular forms, mock modular forms, q-series, continued fractions, combinatorics, representation theory, mathematical physics, black-hole entropy research, moonshine, quantum modular forms and modern computation of pi all contain threads connected to Ramanujan&apos;s work or its afterlife.</p>
            </section>
          </article>
          <aside className="sidebar-box">
            <h2>Named in His Honour</h2>
            <a href="/ramanujan/modern-impact">Modern Impact</a>
            <a href="/ramanujan/institutions-and-prizes">Institutions and Prizes</a>
            <a href="/ramanujan/popular-culture">Popular Culture</a>
            <a href="/ramanujan/myths-vs-facts">Myths vs Facts</a>
            {namedConcepts.slice(0, 14).map((item) => <a href={`/named-concepts/${item.slug}`} key={item.slug}>{item.title}</a>)}
          </aside>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
