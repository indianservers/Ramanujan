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
        <DiscoveryArchive />
      </main>
      <SiteFooter />
    </>
  );
}
