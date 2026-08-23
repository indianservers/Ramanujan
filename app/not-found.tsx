import Link from "next/link";
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
            <Link prefetch={false} className="button button-primary" href="/">Homepage</Link>
            <Link prefetch={false} className="button button-secondary" href="/discoveries">Discoveries</Link>
            <Link prefetch={false} className="button button-secondary" href="/formulas">Formula Archive</Link>
            <Link prefetch={false} className="button button-secondary" href="/life">Biography</Link>
            <Link prefetch={false} className="button button-secondary" href="/search">Search</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
