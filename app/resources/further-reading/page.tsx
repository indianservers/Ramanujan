import { furtherReading } from "../../data/archive";
import { PageTools } from "../../shared/PageTools";
import { SiteFooter } from "../../shared/SiteFooter";
import { SiteHeader } from "../../shared/SiteHeader";

export default function FurtherReadingPage() {
  const audiences = Array.from(new Set(furtherReading.map((item) => item.audience)));
  return <><SiteHeader active="Resources" /><main className="editorial-page"><section className="page-heading"><h1>Further Reading</h1><p>Reliable reading paths for general readers, students and researchers.</p><PageTools id="resource:further-reading" label="Further Reading" citation="Ramanujan Universe further-reading index." /></section>{audiences.map((audience) => <section className="reference-group parchment" key={audience}><h2>{audience}</h2>{furtherReading.filter((item) => item.audience === audience).map((item) => <article key={item.slug}><h3>{item.title}</h3><p>{item.author}</p><p>{item.description}</p><p className="citation">{item.accessStatus}</p>{item.externalLink ? <a href={item.externalLink} target="_blank" rel="noopener noreferrer">External source</a> : null}</article>)}</section>)}</main><SiteFooter /></>;
}
