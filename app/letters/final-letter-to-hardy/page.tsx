import { letters } from "../../data/archive";
import { BlockMath } from "../../shared/Math";
import { EditorialPage } from "../../shared/EditorialPage";

export default function FinalLetterPage() {
  const letter = letters.find((item) => item.slug === "final-letter-to-hardy")!;
  return (
    <>
      <EditorialPage active="Life" eyebrow="Final Correspondence" title={letter.title} subtitle="Mock theta functions enter mathematical history." image={letter.image} imageAlt="Ramanujan correspondence" summary={letter.context} citation={letter.citation} saveId={`letter:${letter.slug}`} relatedDiscoverySlugs={letter.relatedDiscoverySlugs} links={letter.relatedLinks} sections={[
        { heading: "Period", body: "The letter belongs to Ramanujan's final period after his return to India." },
        { heading: "Mock Theta Functions", body: "Ramanujan introduced a class of q-series he called mock theta functions, whose transformation behaviour resisted immediate classification." },
        { heading: "Later Interpretation", body: "Mathematicians later connected these functions to mock modular forms and harmonic Maass forms." },
        { heading: "Continued Importance", body: "The subject remains important in number theory, combinatorics and mathematical physics." },
      ]} />
      <main className="editorial-page editorial-followup">
        <section className="formula-panel parchment">
          <h2>Example Mock Theta Notation</h2>
          <BlockMath math="f(q)=\sum_{n=0}^{\infty}\frac{q^{n^2}}{(-q;q)_n^2}" label="Mock theta function example" />
        </section>
      </main>
    </>
  );
}
