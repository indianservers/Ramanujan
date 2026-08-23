import { notFound } from "next/navigation";
import { categories, discoveries, getCategory } from "../../../data/archive";
import { DiscoveryArchive } from "../../DiscoveryArchive";
import { SiteFooter } from "../../../shared/SiteFooter";
import { SiteHeader } from "../../../shared/SiteHeader";

export function generateStaticParams() {
  return categories.map((category) => ({ categorySlug: category.slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ categorySlug: string }> }) {
  const { categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) notFound();
  const count = discoveries.filter((discovery) => discovery.categorySlug === category.slug).length;
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
        <DiscoveryArchive initialCategorySlug={category.slug} />
      </main>
      <SiteFooter />
    </>
  );
}
