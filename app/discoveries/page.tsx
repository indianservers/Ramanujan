import { DiscoveryArchive } from "./DiscoveryArchive";
import { SiteFooter } from "../shared/SiteFooter";
import { SiteHeader } from "../shared/SiteHeader";

export default function DiscoveriesPage() {
  return (
    <>
      <SiteHeader active="Discoveries" />
      <main className="archive-page">
        <section className="page-heading">
          <h1>Every Discovery. One Living Archive.</h1>
          <p>Explore Ramanujan&apos;s identities, theorems, conjectures, formulas, and notebook entries.</p>
        </section>
        <section className="archive-intro-grid" aria-label="Discovery archive guide">
          <article className="sacred-card">
            <strong>Complete Catalogue</strong>
            <p>Browse 177 discovery and contribution-family records grouped by field, source, result type and difficulty.</p>
          </article>
          <article className="sacred-card">
            <strong>Source-Aware Notes</strong>
            <p>Each entry distinguishes published papers, notebooks, later names, collaborations and records still needing exact citation review.</p>
          </article>
          <article className="sacred-card">
            <strong>Study Path</strong>
            <p>Use search, category filters, related discoveries and formula permalinks to move from readable summaries into the mathematics.</p>
          </article>
        </section>
        <DiscoveryArchive />
      </main>
      <SiteFooter />
    </>
  );
}
