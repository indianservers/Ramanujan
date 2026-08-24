import { notFound } from "next/navigation";
import { categories, discoveries, getCategory } from "../../../data/archive";
import { DiscoveryArchive } from "../../DiscoveryArchive";
import { SiteFooter } from "../../../shared/SiteFooter";
import { SiteHeader } from "../../../shared/SiteHeader";

const categoryGuides: Record<string, { themes: string[]; notation: string; firstRead: string }> = {
  "partition-theory": {
    themes: ["Partition congruences", "Generating functions", "Asymptotic growth"],
    notation: "p(n), q-products, congruences modulo 5, 7 and 11",
    firstRead: "Ramanujan's Partition Congruences",
  },
  "mock-theta-functions": {
    themes: ["Late q-series", "Mock modular behavior", "Lost Notebook material"],
    notation: "f(q), q-Pochhammer symbols, radial limits",
    firstRead: "Mock Theta Functions",
  },
  "pi-formulas": {
    themes: ["Rapid convergence", "Modular equations", "Class invariant methods"],
    notation: "1/pi series, factorial quotients, powers such as 396^(4n)",
    firstRead: "Ramanujan's 1/pi Series",
  },
  "ramanujan-tau-function": {
    themes: ["Modular forms", "Tau congruences", "Prime-power recurrences"],
    notation: "Delta(q), tau(n), sigma_k(n), congruences modulo 691",
    firstRead: "Ramanujan's Tau Function",
  },
  "rogers-ramanujan-identities": {
    themes: ["q-series identities", "Infinite products", "Partition interpretations"],
    notation: "(q;q)_n, infinite products, mod 5 product classes",
    firstRead: "Rogers-Ramanujan Identities",
  },
  "other-continued-fractions": {
    themes: ["Nested fractions", "Exact values", "Theta and gamma quotients"],
    notation: "continued fractions with q, gamma ratios and theta quotients",
    firstRead: "Ramanujan's Cubic Continued Fraction",
  },
};

export function generateStaticParams() {
  return categories.map((category) => ({ categorySlug: category.slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ categorySlug: string }> }) {
  const { categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) notFound();
  const categoryDiscoveries = discoveries.filter((discovery) => discovery.categorySlug === category.slug);
  const count = categoryDiscoveries.length;
  const guide = categoryGuides[category.slug] ?? {
    themes: Array.from(new Set(categoryDiscoveries.map((discovery) => discovery.resultType.replace("-", " ")))).slice(0, 3),
    notation: categoryDiscoveries.find((discovery) => discovery.formulaSlugs.length)?.title ?? "Named results, formulas and contribution families",
    firstRead: categoryDiscoveries.find((discovery) => discovery.featured)?.title ?? categoryDiscoveries[0]?.title ?? category.title,
  };
  const notable = categoryDiscoveries.filter((discovery) => discovery.featured).slice(0, 3);
  const notableEntries = notable.length ? notable : categoryDiscoveries.slice(0, 3);
  const firstRead = categoryDiscoveries.find((discovery) => discovery.title === guide.firstRead) ?? notableEntries[0];
  return (
    <>
      <SiteHeader active="Discoveries" />
      <main className="archive-page">
        <section className="category-heading">
          {category.icon ? <img src={category.icon} alt="" aria-hidden="true" /> : null}
          <div>
            <p className="eyebrow">Contribution Category</p>
            <h1>{category.title}</h1>
            <p>{category.summary}</p>
            <span>{count} catalogue entries</span>
          </div>
        </section>
        <section className="category-guide-grid" aria-label={`${category.title} study guide`}>
          <article>
            <h2>Key Themes</h2>
            <ul>
              {guide.themes.map((theme) => <li key={theme}>{theme}</li>)}
            </ul>
          </article>
          <article>
            <h2>Typical Notation</h2>
            <p>{guide.notation}</p>
          </article>
          <article>
            <h2>Notable Entries</h2>
            <ul>
              {notableEntries.map((discovery) => <li key={discovery.slug}><a href={`/discoveries/${discovery.slug}`}>{discovery.title}</a></li>)}
            </ul>
          </article>
          <article>
            <h2>Recommended First Read</h2>
            <p>{firstRead ? <a href={`/discoveries/${firstRead.slug}`}>{firstRead.title}</a> : guide.firstRead}</p>
          </article>
        </section>
        <DiscoveryArchive initialCategorySlug={category.slug} />
      </main>
      <SiteFooter />
    </>
  );
}
