import { Suspense } from "react";
import { SiteFooter } from "../shared/SiteFooter";
import { SiteHeader } from "../shared/SiteHeader";
import { SearchClient } from "./SearchClient";

export default function SearchPage() {
  return (
    <>
      <SiteHeader active="Resources" />
      <main className="editorial-page">
        <section className="page-heading">
          <h1>Search the Ramanujan Universe</h1>
          <p>Search across discoveries, formulas, categories, named concepts, people, timeline events, notebooks, letters, papers and references.</p>
        </section>
        <Suspense fallback={<p className="result-count">Loading search...</p>}>
          <SearchClient />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  );
}
