import { notebooks } from "../../data/archive";
import { PageTools } from "../../shared/PageTools";
import { SiteFooter } from "../../shared/SiteFooter";
import { SiteHeader } from "../../shared/SiteHeader";
import { SubjectIndex } from "./SubjectIndex";

export default function ThreeNotebooksPage() {
  const record = notebooks.find((item) => item.slug === "three-notebooks")!;
  const studyRoutes = [
    { title: "Start with formulas", text: "Browse canonical expressions first, then return to the notebook page for historical context.", href: "/formulas" },
    { title: "Follow q-series", text: "Move through theta functions, q-series and continued fractions to see recurring notebook techniques.", href: "/discoveries/category/q-series-basic-hypergeometric-series" },
    { title: "Compare with papers", text: "Use the published papers section to see how selected ideas entered formal mathematical literature.", href: "/resources/published-papers" },
  ];
  const facts = [
    ["Form", "Manuscript notebooks"],
    ["Style", "Compressed formulas and identities"],
    ["Use", "Orientation, study and source-aware navigation"],
    ["Caution", "Not a page-by-page critical edition"],
  ];
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
              <h2>Common Subject Clusters</h2>
              <p>Readers repeatedly encounter families of infinite series, modular equations, continued fractions, special-function identities, asymptotic approximations and arithmetic functions. The categories below organize the archive around those clusters rather than around manuscript page numbers.</p>
            </section>
            <section>
              <h2>From Entry to Understanding</h2>
              <p>A useful reading habit is to treat each entry as a prompt: identify the notation, look for a related formula, check whether a proof is known from later work, and then compare nearby discoveries in the same category.</p>
            </section>
            <section>
              <h2>Source and Edition Information</h2>
              <p className="citation">Notebook attribution not confirmed in the supplied source. Exact edition-level page references are not asserted here.</p>
            </section>
          </article>
          <aside className="sidebar-box">
            <h2>Reading Guidance</h2>
            <p>Use the subject index to browse existing catalogue records by topic and difficulty.</p>
            <dl className="notebook-facts">
              {facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
            </dl>
          </aside>
        </section>
        <section className="notebook-route-grid" aria-label="Notebook study routes">
          {studyRoutes.map((route) => (
            <a className="sacred-card" href={route.href} key={route.title}>
              <strong>{route.title}</strong>
              <span>{route.text}</span>
            </a>
          ))}
        </section>
        <SubjectIndex />
      </main>
      <SiteFooter />
    </>
  );
}
