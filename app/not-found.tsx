import { SiteFooter } from "./shared/SiteFooter";
import { SiteHeader } from "./shared/SiteHeader";

export default function NotFound() {
  return (
    <>
      <SiteHeader active="" />
      <main className="placeholder-page">
        <section className="parchment">
          <h1>This Page Has Vanished into Infinity</h1>
          <p>The archive could not find this route. Try one of the main collections below.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="/">Homepage</a>
            <a className="button button-secondary" href="/discoveries">Discoveries</a>
            <a className="button button-secondary" href="/formulas">Formula Archive</a>
            <a className="button button-secondary" href="/life">Biography</a>
            <a className="button button-secondary" href="/search">Search</a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
