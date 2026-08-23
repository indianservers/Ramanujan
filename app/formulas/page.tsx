import { FormulaArchive } from "./FormulaArchive";
import { SiteFooter } from "../shared/SiteFooter";
import { SiteHeader } from "../shared/SiteHeader";

export default function FormulasPage() {
  return (
    <>
      <SiteHeader active="Formulas" />
      <main className="archive-page">
        <section className="page-heading">
          <h1>The Formula Archive</h1>
          <p>A searchable collection of Ramanujan&apos;s equations, identities, series and mathematical transformations.</p>
        </section>
        <FormulaArchive />
      </main>
      <SiteFooter />
    </>
  );
}
