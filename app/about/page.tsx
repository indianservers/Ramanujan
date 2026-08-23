import { discoveries, formulas } from "../data/archive";
import { PageTools } from "../shared/PageTools";
import { SiteFooter } from "../shared/SiteFooter";
import { SiteHeader } from "../shared/SiteHeader";

export default function AboutPage() {
  return (
    <>
      <SiteHeader active="About" />
      <main className="editorial-page">
        <section className="page-heading">
          <h1>About The Ramanujan Universe</h1>
          <p>An educational and scholarly presentation of Ramanujan&apos;s life, mathematics, notebooks, correspondence and legacy.</p>
          <PageTools id="page:about" label="About" citation="Ramanujan Universe editorial policy." />
        </section>
        <article className="parchment policy-page">
          <section><h2>Purpose and Scope</h2><p>The site presents a curated mathematical catalogue of {discoveries.length} discovery records and {formulas.length} formula records. It does not claim to transcribe or verify every one of the approximately 3,900 recorded results attributed to Ramanujan&apos;s notebooks.</p></section>
          <section><h2>Editorial Principles</h2><p>Historical attribution is qualified where a concept was collaborative, rediscovered independently, named later or primarily developed after Ramanujan.</p></section>
          <section><h2>Notation Policy</h2><p>Formulas use LaTeX and KaTeX rendering. Regularised summations, conjectures and later interpretations are labelled rather than flattened into unsupported claims.</p></section>
          <section><h2>Source Policy</h2><p>Citations are based on stored source records. Missing exact page references are not invented.</p></section>
          <section><h2>Accessibility</h2><p>The site uses semantic landmarks, labelled controls, accessible formula labels, keyboard-friendly links and responsive layouts.</p></section>
          <section><h2>Limitations and Corrections</h2><p>The website is an educational and scholarly presentation. It should not be read as a claim that every individual notebook entry has been independently transcribed or verified.</p></section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
