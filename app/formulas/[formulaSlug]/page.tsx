import Link from "next/link";
import { notFound } from "next/navigation";
import { formulas, getDiscovery, getFormula } from "../../data/archive";
import { CopyLatexButton } from "../../shared/CopyLatexButton";
import { BlockMath } from "../../shared/Math";
import { SiteFooter } from "../../shared/SiteFooter";
import { SiteHeader } from "../../shared/SiteHeader";
import { SaveButton } from "../../shared/SaveButton";

export function generateStaticParams() {
  return formulas.map((formula) => ({ formulaSlug: formula.slug }));
}

export default async function FormulaPage({ params }: { params: Promise<{ formulaSlug: string }> }) {
  const { formulaSlug } = await params;
  const formula = getFormula(formulaSlug);
  if (!formula) notFound();
  const discovery = getDiscovery(formula.discoverySlug);
  const index = formulas.findIndex((item) => item.slug === formula.slug);
  return (
    <>
      <SiteHeader active="Formulas" />
      <main className="formula-detail">
        <article className="parchment">
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link prefetch={false} href="/formulas">Formulas</Link> / <span>{formula.title}</span></nav>
          <h1>{formula.title}</h1>
          <BlockMath math={formula.latex} label={formula.title} />
          <p>{formula.plainLanguageMeaning}</p>
          {formula.conditions?.map((condition) => <p className="citation" key={condition}>{condition}</p>)}
          <dl>
            <dt>Category</dt><dd>{formula.category}</dd>
            <dt>Result type</dt><dd>{formula.resultType}</dd>
            <dt>Source</dt><dd>{formula.sourceType}</dd>
            <dt>Associated discovery</dt><dd>{discovery ? <Link prefetch={false} href={`/discoveries/${discovery.slug}`}>{discovery.title}</Link> : "Not linked"}</dd>
          </dl>
          <div className="formula-tools">
            {formulas[index - 1] ? <Link prefetch={false} href={`/formulas/${formulas[index - 1].slug}`}>Previous Formula</Link> : null}
            {formulas[index + 1] ? <Link prefetch={false} href={`/formulas/${formulas[index + 1].slug}`}>Next Formula</Link> : null}
            <CopyLatexButton latex={formula.latex} label={formula.title} />
            <SaveButton id={`formula:${formula.slug}`} label={formula.title} />
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
