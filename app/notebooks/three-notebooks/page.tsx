import { notebooks } from "../../data/archive";
import { PageTools } from "../../shared/PageTools";
import { SiteFooter } from "../../shared/SiteFooter";
import { SiteHeader } from "../../shared/SiteHeader";
import { SubjectIndex } from "./SubjectIndex";

export default function ThreeNotebooksPage() {
  const record = notebooks.find((item) => item.slug === "three-notebooks")!;
  return (
    <>
      <SiteHeader active="Notebooks" />
      <main className="editorial-page">
        <section className="editorial-hero">
          <div>
            <p className="eyebrow">Three Notebooks</p>
            <h1>{record.title}</h1>
            <p className="subtitle">{record.subtitle}</p>
            <p>{record.summary}</p>
            <PageTools id="notebook:three-notebooks" label={record.title} citation="Notebook attribution not confirmed in the supplied source unless explicitly stated." />
          </div>
          <img src={record.image} alt="Three notebooks" />
        </section>
        <section className="editorial-body">
          <article className="parchment">
            {record.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></section>)}
            <section>
              <h2>Source and Edition Information</h2>
              <p className="citation">Notebook attribution not confirmed in the supplied source. Exact edition-level page references are not asserted here.</p>
            </section>
          </article>
          <aside className="sidebar-box">
            <h2>Reading Guidance</h2>
            <p>Use the subject index to browse existing catalogue records by topic and difficulty.</p>
          </aside>
        </section>
        <SubjectIndex />
      </main>
      <SiteFooter />
    </>
  );
}
