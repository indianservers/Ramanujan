import { categoryHighlights } from "./data/archive";
import { HeritageIcon } from "./shared/HeritageIcon";
import { SiteFooter } from "./shared/SiteFooter";
import { SiteHeader } from "./shared/SiteHeader";

const homeFormulas: Record<string, string> = {
  "Number Theory": "tau(n) = sum d^11",
  "Infinite Series": "1 + 1/1 + 1/2 + 1/3 + ...",
  "Continued Fractions": "K = 1 / (1 + 1/(1 + ...))",
  Partitions: "p(5) = 7",
  "Mock Theta Functions": "f(q) = 1 + sum q^(n^2)",
  "Modular Forms": "f(tau + 1) = f(tau)",
};

export default function Home() {
  return (
    <>
      <SiteHeader active="Home" />
      <main className="home-page">
        <section className="hero">
          <div className="scripture-bg" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow">The Ramanujan Universe</p>
            <h1>Srinivasa Ramanujan</h1>
            <h2>The Man Who Knew Infinity</h2>
            <p className="hero-lede">
              His life, his faith, and the mathematics that changed the world.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="/discoveries">
                Explore Every Discovery
              </a>
              <a className="button button-secondary" href="/life">
                Know His Story
              </a>
            </div>
          </div>
          <img
            className="hero-portrait"
            src="/assets/hero-srinivasa-ramanujan.png"
            alt="Portrait of Srinivasa Ramanujan"
          />
          <figure className="devi-shrine">
            <img src="/assets/namagiri-devi-shrine.png" alt="Namagiri Devi shrine" />
          </figure>
        </section>

        <section className="student-story-section" aria-labelledby="student-story-title">
          <div className="student-story-copy">
            <p className="eyebrow">Begin With Wonder</p>
            <h2 id="student-story-title">A Boy Who Saw Patterns Everywhere</h2>
            <p>
              Srinivasa Ramanujan did not begin with a grand laboratory, a famous teacher, or a clear road into the mathematical world. He began with curiosity. In the streets and temples of South India, in school notebooks and borrowed books, numbers became companions. A sum was not just a sum. A fraction was not just a fraction. Each one seemed to hide a door.
            </p>
            <p>
              As a student, he copied results, tested them, changed them, and chased them until they became his own. He filled notebooks with formulas that looked impossible at first glance: partitions, infinite series, continued fractions, modular equations, and strange functions that later generations would spend decades understanding.
            </p>
            <p>
              Ramanujan&apos;s story tells students something powerful: mathematics is not only about getting the answer at the back of the book. It is about noticing, wondering, trying again, and trusting that a pattern may be waiting where everyone else sees only symbols.
            </p>
            <div className="student-story-actions">
              <a className="button button-primary" href="/ramanujan">Read His Journey</a>
              <a className="button button-secondary" href="/discoveries">Find a Pattern</a>
            </div>
          </div>
          <div className="student-story-steps" aria-label="Student inspiration path">
            <article>
              <HeritageIcon name="book" />
              <strong>Start Small</strong>
              <span>One borrowed book opened a world of identities, theorems, and questions.</span>
            </article>
            <article>
              <HeritageIcon name="lamp" />
              <strong>Follow Curiosity</strong>
              <span>He explored patterns because they felt alive, not because a syllabus demanded them.</span>
            </article>
            <article>
              <HeritageIcon name="yantra" />
              <strong>Make Connections</strong>
              <span>His formulas linked arithmetic, infinity, geometry, and symmetry in unexpected ways.</span>
            </article>
            <article>
              <HeritageIcon name="leaf" />
              <strong>Keep Wondering</strong>
              <span>The best mathematics begins with a question that refuses to leave you alone.</span>
            </article>
          </div>
        </section>

        <section className="legacy-section" aria-labelledby="legacy-title">
          <div className="ornamental-title">
            <span aria-hidden="true" />
            <h2 id="legacy-title">An Infinite Legacy</h2>
            <span aria-hidden="true" />
          </div>
          <div className="legacy-grid">
            <div className="category-grid">
              {categoryHighlights.map((category) => (
                <a className="category-card parchment sacred-card" href={category.href} key={category.name}>
                  <img src={category.icon} alt="" aria-hidden="true" />
                  <h3>{category.name}</h3>
                  <p className="home-formula" aria-label={`${category.name} formula`}>
                    {homeFormulas[category.name] ?? category.formula}
                  </p>
                  <p>{category.description}</p>
                </a>
              ))}
            </div>
            <aside className="quote-panel parchment">
              <blockquote>
                An equation for me has no meaning unless it expresses a thought of God.
              </blockquote>
              <figcaption>- Srinivasa Ramanujan</figcaption>
            </aside>
          </div>
          <div className="archive-facts" aria-label="Archive facts">
            <div>
              <strong>3,900+</strong>
              <span>recorded results</span>
            </div>
            <div>
              <strong>Three</strong>
              <span>Notebooks</span>
            </div>
            <div>
              <strong>The Lost</strong>
              <span>Notebook</span>
            </div>
            <div>
              <strong>A legacy</strong>
              <span>still unfolding</span>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
