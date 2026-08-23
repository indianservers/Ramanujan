import { references } from "../../data/archive";
import { PageTools } from "../../shared/PageTools";
import { SiteFooter } from "../../shared/SiteFooter";
import { SiteHeader } from "../../shared/SiteHeader";

export default function ReferencesPage() {
  const groups = Array.from(new Set(references.map((item) => item.group)));
  return <><SiteHeader active="Resources" /><main className="editorial-page"><section className="page-heading"><h1>References</h1><p>Primary sources, notebooks, letters, academic surveys and reliable archives.</p><PageTools id="resource:references" label="References" citation="Ramanujan Universe reference index." /></section>{groups.map((group) => <section className="reference-group parchment" key={group}><h2>{group}</h2>{references.filter((item) => item.group === group).map((item) => <article key={item.slug}><h3>{item.title}</h3><p>{item.author} | {item.type}</p><p>{item.description}</p><p className="citation">{item.accessStatus} | {item.reviewStatus}</p>{item.externalLink ? <a href={item.externalLink} target="_blank" rel="noopener noreferrer">External source</a> : null}</article>)}</section>)}</main><SiteFooter /></>;
}
