import { discoveries } from "../../data/archive";
import { BlockMath, InlineMath } from "../../shared/Math";
import { DiscoveryCard } from "../../shared/DiscoveryCard";
import { SaveButton } from "../../shared/SaveButton";
import { SiteFooter } from "../../shared/SiteFooter";
import { SiteHeader } from "../../shared/SiteHeader";

const related = discoveries.filter((item) =>
  ["hardy-ramanujan-asymptotic-formula", "rogers-ramanujan-identities", "ramanujan-tau-function"].includes(item.slug),
);

export default function PartitionCongruencesPage() {
  return (
    <>
      <SiteHeader active="Discoveries" />
      <main className="detail-page">
        <article className="detail-article">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/discoveries">Discoveries</a> / <a href="/discoveries?category=Partitions">Partitions</a> / <span>Partition Congruences</span>
          </nav>
          <p className="detail-meta">Partitions | 1919</p>
          <h1>The Partition Congruences</h1>
          <p className="subtitle">Unexpected patterns hidden inside the ways integers can be partitioned.</p>
          <section className="formula-panel parchment" aria-label="Partition congruence formulas">
            <BlockMath math="p(5n+4)\\equiv0\\pmod 5" label="p of 5 n plus 4 is congruent to zero modulo 5" />
            <BlockMath math="p(7n+5)\\equiv0\\pmod 7" label="p of 7 n plus 5 is congruent to zero modulo 7" />
            <BlockMath math="p(11n+6)\\equiv0\\pmod {11}" label="p of 11 n plus 6 is congruent to zero modulo 11" />
          </section>
          <section>
            <h2>What Ramanujan Discovered</h2>
            <p>Ramanujan discovered striking congruence properties satisfied by the partition function <InlineMath math="p(n)" label="p of n" />. For every nonnegative integer <InlineMath math="n" label="n" />, the number of partitions of <InlineMath math="5n+4" label="5 n plus 4" /> is divisible by 5, the number of partitions of <InlineMath math="7n+5" label="7 n plus 5" /> is divisible by 7, and the number of partitions of <InlineMath math="11n+6" label="11 n plus 6" /> is divisible by 11.</p>
          </section>
          <section>
            <h2>Understanding <InlineMath math="p(n)" label="p of n" /></h2>
            <p>The partition function <InlineMath math="p(n)" label="p of n" /> counts the number of ways of writing <InlineMath math="n" label="n" /> as a sum of positive integers, where order does not matter. For example, <InlineMath math="p(4)=5" label="p of 4 equals 5" />, corresponding to the five partitions:</p>
            <div className="partition-example" aria-label="Partitions of 4">
              <span>4</span><span>3 + 1</span><span>2 + 2</span><span>2 + 1 + 1</span><span>1 + 1 + 1 + 1</span>
            </div>
          </section>
          <section>
            <h2>Why These Congruences Matter</h2>
            <p>Partition congruences revealed deep arithmetic structure within a function defined by pure combinatorics. They connect partition theory to modular forms and number theory, showing that <InlineMath math="p(n)" label="p of n" /> carries hidden regularities when viewed modulo small integers.</p>
          </section>
          <section>
            <h2>Proof and Later Developments</h2>
            <p>Ramanujan announced proofs in his original notebook. Later mathematicians proved these congruences by studying the generating function of <InlineMath math="p(n)" label="p of n" />, a modular form of weight <InlineMath math="-\\frac{1}{2}" label="negative one half" />. This led to further congruences, including those modulo 13, 17, 19, and beyond.</p>
          </section>
          <section>
            <h2>Original Source</h2>
            <div className="source-strip parchment">
              <BlockMath math="p(5n+4)\\equiv0\\pmod 5,\\quad p(7n+5)\\equiv0\\pmod 7,\\quad p(11n+6)\\equiv0\\pmod {11}" label="Original partition congruence group" />
            </div>
            <p className="citation">S. Ramanujan, Notebook entry dated 1919. Published in Proceedings of the Cambridge Philosophical Society, Vol. 19 (1919), pp. 207-210.</p>
          </section>
          <section className="detail-study-panel parchment sacred-card">
            <h2>How to Study This Entry</h2>
            <p>First read the three congruences as divisibility statements about the partition function. Then compare the examples of <InlineMath math="p(4)" label="p of 4" /> with the formula panel above to see how counting problems can reveal modular arithmetic structure.</p>
            <p>For a deeper path, continue into the Hardy-Ramanujan asymptotic formula, Rogers-Ramanujan identities, and Ramanujan&apos;s tau function. Together they show how partition theory, q-series, and modular forms illuminate one another.</p>
          </section>
          <section>
            <h2 className="related-title">Related Discoveries</h2>
            <div className="related-grid">
              {related.map((item) => <DiscoveryCard discovery={item} key={item.slug} />)}
            </div>
          </section>
        </article>
        <aside className="detail-sidebar">
          <div className="sidebar-box">
            <h2>At a Glance</h2>
            <dl>
              <dt>Field</dt><dd>Number Theory</dd>
              <dt>First published</dt><dd>1919</dd>
              <dt>Difficulty</dt><dd>Intermediate</dd>
              <dt>Source</dt><dd><em>Proceedings of the Cambridge Philosophical Society</em></dd>
            </dl>
          </div>
          <div className="sidebar-box">
            <h2>Contents</h2>
            {["Discovery", "Definition", "Examples", "Congruences", "Proof History", "Legacy"].map((item) => <button type="button" key={item}>{item}</button>)}
          </div>
          <div className="sidebar-box">
            <h2>Actions</h2>
            <a href="/discoveries">Previous Discovery</a>
            <a href="/discoveries">Next Discovery</a>
            <SaveButton id="discovery:partition-congruences" label="The Partition Congruences" />
          </div>
        </aside>
      </main>
      <SiteFooter />
    </>
  );
}
