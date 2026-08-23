import Link from "next/link";
import { formulas, type Discovery } from "../data/archive";
import { BlockMath } from "./Math";
import { SaveButton } from "./SaveButton";
import { HeritageIcon } from "./HeritageIcon";

const cardFormula: Record<string, string> = {
  "partition-congruences": "p(5n+4)\\equiv0\\pmod 5",
  "hardy-ramanujan-asymptotic-formula": "p(n)\\sim\\frac{e^{\\pi\\sqrt{2n/3}}}{4n\\sqrt3}",
  "ramanujan-one-over-pi-series": "\\frac1\\pi=\\frac{2\\sqrt2}{9801}\\sum\\cdots",
  "rogers-ramanujan-identities": "\\sum\\frac{q^{n^2}}{(q;q)_n}=\\frac1{(q,q^4;q^5)_\\infty}",
  "ramanujan-tau-function": "\\Delta(q)=\\sum_{n=1}^{\\infty}\\tau(n)q^n",
  "ramanujan-master-theorem": "\\int_0^\\infty x^{s-1}\\phi(x)\\,dx=\\frac{\\pi}{\\sin\\pi s}\\phi(-s)",
};

export function DiscoveryCard({ discovery }: { discovery: Discovery }) {
  const canonical = formulas.find((formulaEntry) => formulaEntry.slug === discovery.formulaSlugs[0]);
  const formula = cardFormula[discovery.slug] ?? canonical?.latex;

  return (
    <article className="discovery-card sacred-card" id={discovery.categorySlug}>
      <div className="discovery-card-head">
        <p>
          <HeritageIcon name="yantra" />{" "}
          {discovery.category} {discovery.year ? `| ${discovery.year}` : ""}
        </p>
        <SaveButton id={`discovery:${discovery.slug}`} label={discovery.title} compact />
      </div>
      <h3>{discovery.title}</h3>
      {formula ? <BlockMath math={formula} label={canonical?.title ?? `${discovery.title} formula`} /> : <p className="formula-placeholder">Contribution family</p>}
      <p>{discovery.summary}</p>
      <dl className="discovery-card-facts">
        <div><dt>Level</dt><dd>{discovery.difficulty}</dd></div>
        <div><dt>Source</dt><dd>{discovery.sourceType}</dd></div>
        <div><dt>Status</dt><dd>{discovery.reviewStatus}</dd></div>
      </dl>
      <p className="card-study-line">
        Open the entry for context, source notes, related formulas, and later mathematical developments.
      </p>
      <Link prefetch={false} href={`/discoveries/${discovery.slug}`}>
        Read Discovery
      </Link>
    </article>
  );
}
