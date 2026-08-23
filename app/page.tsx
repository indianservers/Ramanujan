import Link from "next/link";
import { categoryHighlights } from "./data/archive";
import { SiteFooter } from "./shared/SiteFooter";
import { SiteHeader } from "./shared/SiteHeader";

const homeFormulas: Record<string, string> = {
  "Number Theory": "τ(n) = ∑ 1",
  "Infinite Series": "1 + 1/1 + 1/2 + 1/3 + ...",
  "Continued Fractions": "K = 1 / (1 + 1/(1 + ...))",
  Partitions: "p(5) = 7",
  "Mock Theta Functions": "f(q) = 1 + ∑ qⁿ² / (-q;q²)ₙ",
  "Modular Forms": "f(τ + k) = f(τ)",
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
              <Link prefetch={false} className="button button-primary" href="/discoveries">
                Explore Every Discovery
              </Link>
              <Link prefetch={false} className="button button-secondary" href="/life">
                Know His Story
              </Link>
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

        <section className="legacy-section" aria-labelledby="legacy-title">
          <div className="ornamental-title">
            <span aria-hidden="true" />
            <h2 id="legacy-title">An Infinite Legacy</h2>
            <span aria-hidden="true" />
          </div>
          <div className="legacy-grid">
            <div className="category-grid">
              {categoryHighlights.map((category) => (
                <Link prefetch={false} className="category-card parchment sacred-card" href={category.href} key={category.name}>
                  <img src={category.icon} alt="" aria-hidden="true" />
                  <h3>{category.name}</h3>
                  <p className="home-formula" aria-label={`${category.name} formula`}>
                    {homeFormulas[category.name] ?? category.formula}
                  </p>
                  <p>{category.description}</p>
                </Link>
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
