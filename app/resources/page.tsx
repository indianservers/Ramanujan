import Link from "next/link";
import { PageTools } from "../shared/PageTools";
import { SiteFooter } from "../shared/SiteFooter";
import { SiteHeader } from "../shared/SiteHeader";

const links = [
  ["Published Papers", "/resources/published-papers", "Verified papers currently indexed with bibliographic details where available."],
  ["References", "/resources/references", "Primary sources, notebooks, letters, surveys and reliable online archives."],
  ["Further Reading", "/resources/further-reading", "Reading paths for general readers, students and researchers."],
  ["Formula Archive", "/formulas", "Rendered formula records from the mathematical catalogue."],
  ["Named Concepts", "/named-concepts", "Attribution-aware concepts connected with Ramanujan."],
];

export default function ResourcesPage() {
  return (
    <>
      <SiteHeader active="Resources" />
      <main className="editorial-page">
        <section className="page-heading">
          <h1>Resources and Sources</h1>
          <p>Scholarly pathways into Ramanujan&apos;s papers, notebooks, letters and modern interpretation.</p>
          <PageTools id="page:resources" label="Resources" citation="Ramanujan Universe resources index." />
        </section>
        <div className="formula-grid">
          {links.map(([title, href, text]) => <article className="formula-card" key={href}><h2>{title}</h2><p>{text}</p><Link prefetch={false} href={href}>Open</Link></article>)}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
