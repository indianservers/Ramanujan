import { discoveries, type ContentSection } from "../data/archive";
import { DiscoveryCard } from "./DiscoveryCard";
import { PageTools } from "./PageTools";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type EditorialPageProps = {
  active: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  image?: string;
  imageAlt?: string;
  summary?: string;
  sections: ContentSection[];
  citation?: string;
  saveId: string;
  relatedDiscoverySlugs?: string[];
  links?: { label: string; href: string }[];
};

export function EditorialPage({ active, eyebrow, title, subtitle, image, imageAlt, summary, sections, citation, saveId, relatedDiscoverySlugs = [], links = [] }: EditorialPageProps) {
  const related = discoveries.filter((item) => relatedDiscoverySlugs.includes(item.slug)).slice(0, 6);

  return (
    <>
      <SiteHeader active={active} />
      <main className="editorial-page">
        <section className="editorial-hero">
          <div>
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h1>{title}</h1>
            <p className="subtitle">{subtitle}</p>
            {summary ? <p>{summary}</p> : null}
            <PageTools id={saveId} label={title} citation={citation} />
          </div>
          {image ? <img src={image} alt={imageAlt ?? ""} /> : null}
        </section>
        <section className="editorial-body">
          <article className="parchment">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
            {citation ? (
              <section>
                <h2>Source Note</h2>
                <p className="citation">{citation}</p>
              </section>
            ) : null}
          </article>
          <aside className="sidebar-box">
            <h2>Related</h2>
            {links.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
            {related.map((item) => <a href={`/discoveries/${item.slug}`} key={item.slug}>{item.title}</a>)}
          </aside>
        </section>
        {related.length ? (
          <section>
            <h2 className="related-title">Related Discoveries</h2>
            <div className="related-grid">
              {related.slice(0, 3).map((item) => <DiscoveryCard discovery={item} key={item.slug} />)}
            </div>
          </section>
        ) : null}
      </main>
      <SiteFooter />
    </>
  );
}
