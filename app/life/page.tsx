import { peopleCards, timeline } from "../data/archive";
import { HeritageMap } from "../shared/HeritageMap";
import { SiteFooter } from "../shared/SiteFooter";
import { SiteHeader } from "../shared/SiteHeader";

export default function LifePage() {
  return (
    <>
      <SiteHeader active="Life" />
      <main className="life-page">
        <section className="life-hero">
          <img src="/assets/hero-srinivasa-ramanujan.png" alt="Srinivasa Ramanujan portrait" />
          <div>
            <h1>The Life Behind the Numbers</h1>
            <p className="subtitle">From Kumbakonam to Cambridge: the extraordinary journey of Srinivasa Ramanujan.</p>
            <p>Srinivasa Ramanujan&apos;s life was brief, but his impact is eternal. With little formal training and no access to the world of mathematics, he followed an inner calling that led him to Cambridge and changed the course of modern mathematics.</p>
          </div>
          <aside className="facts-panel">
            <p><strong>Born:</strong> 22 December 1887, Erode</p>
            <p><strong>Died:</strong> 26 April 1920, Kumbakonam</p>
            <p><strong>Known for:</strong> Number theory, infinite series and continued fractions</p>
            <p><strong>FRS:</strong> Elected 1918</p>
          </aside>
        </section>
        <HeritageMap />
        <section className="life-grid">
          <div className="timeline parchment">
            {timeline.map(([years, title, text]) => (
              <article key={years}>
                <span>{years}</span>
                <div>
                  <h2>{title}</h2>
                  <p>{text}</p>
                </div>
              </article>
            ))}
            <div className="letter-card">
              <img src="/assets/ramanujan-letter-to-hardy.png" alt="Ramanujan's letter to G. H. Hardy" />
              <a className="button button-primary" href="/letters">
                Read Ramanujan&apos;s Letter to Hardy
              </a>
            </div>
          </div>
          <aside className="people-stack">
            {peopleCards.map((card) => (
              <article className="person-card parchment sacred-card" key={card.title}>
                <img src={card.image} alt={card.alt} />
                <div>
                  <h2>{card.title}</h2>
                  <p>{card.text}</p>
                </div>
              </article>
            ))}
          </aside>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
