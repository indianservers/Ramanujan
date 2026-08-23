"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { categories, discoveries } from "../data/archive";
import { DiscoveryCard } from "../shared/DiscoveryCard";

const sourceFilters = ["All", "Source catalogue", "Published Papers", "Lost Notebook", "Hardy-Ramanujan"];
const typeFilters = ["All", "theorem", "identity", "formula", "conjecture", "method", "function", "continued-fraction", "series", "approximation", "equation", "concept", "contribution-family"];

export function DiscoveryArchive({ initialCategorySlug }: { initialCategorySlug?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? "");
  const source = params.get("source") ?? "All";
  const resultType = params.get("type") ?? "All";
  const categorySlug = initialCategorySlug ?? params.get("category") ?? "All";

  useEffect(() => {
    const handle = window.setTimeout(() => {
      const next = new URLSearchParams(params.toString());
      if (query) next.set("q", query);
      else next.delete("q");
      router.replace(`${pathname}${next.toString() ? `?${next}` : ""}`, { scroll: false });
    }, 250);
    return () => window.clearTimeout(handle);
  }, [params, pathname, query, router]);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return discoveries.filter((discovery) => {
      const categoryMatch = categorySlug === "All" || discovery.categorySlug === categorySlug;
      const sourceMatch = source === "All" || discovery.sourceType === source;
      const typeMatch = resultType === "All" || discovery.resultType === resultType;
      const haystack = [
        discovery.title,
        discovery.alternateNames?.join(" "),
        discovery.category,
        discovery.subcategory,
        discovery.summary,
        discovery.resultType,
        discovery.sourceType,
        discovery.notebookReference,
        discovery.collaborators?.join(" "),
        discovery.attribution,
        discovery.historicalQualification,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return categoryMatch && sourceMatch && typeMatch && (!needle || haystack.includes(needle));
    });
  }, [categorySlug, query, resultType, source]);

  const updateParam = (key: string, value: string) => {
    const next = new URLSearchParams(params.toString());
    if (value === "All") next.delete(key);
    else next.set(key, value);
    router.replace(`${pathname}${next.toString() ? `?${next}` : ""}`, { scroll: false });
  };

  return (
    <div className="archive-layout">
      <aside className="taxonomy-panel">
        <h2>All Contributions</h2>
        <Link prefetch={false} className={categorySlug === "All" ? "active-filter" : ""} href="/discoveries">
          <span>All Categories</span>
          <b>{discoveries.length}</b>
        </Link>
        {categories.map((category) => {
          const count = discoveries.filter((item) => item.categorySlug === category.slug).length;
          return (
            <Link prefetch={false} className={categorySlug === category.slug ? "active-filter" : ""} href={`/discoveries/category/${category.slug}`} key={category.slug}>
              <span>{category.title}</span>
              <b>{count || ""}</b>
            </Link>
          );
        })}
      </aside>

      <section className="archive-main" aria-label="Discovery results">
        <label className="search-box">
          <span>Search discoveries</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by formula, theorem, topic, or notebook..." type="search" />
        </label>
        <p className="result-count" aria-live="polite">
          {results.length} entries shown from {discoveries.length} detailed discovery and contribution-family records.
        </p>
        <div className="filter-row" role="group" aria-label="Discovery filters">
          {sourceFilters.map((item) => (
            <button className={source === item ? "active" : ""} key={item} onClick={() => updateParam("source", item)} type="button" aria-pressed={source === item}>
              {item}
            </button>
          ))}
        </div>
        <div className="filter-row compact" role="group" aria-label="Result type filters">
          {typeFilters.map((item) => (
            <button className={resultType === item ? "active" : ""} key={item} onClick={() => updateParam("type", item)} type="button" aria-pressed={resultType === item}>
              {item === "All" ? "All Types" : item}
            </button>
          ))}
          <button type="button" onClick={() => { setQuery(""); router.replace(pathname, { scroll: false }); }}>
            Clear filters
          </button>
        </div>
        {results.length ? (
          <div className="discovery-grid">
            {results.map((discovery) => (
              <DiscoveryCard discovery={discovery} key={discovery.slug} />
            ))}
          </div>
        ) : (
          <div className="empty-state parchment">
            <h2>No matching entries</h2>
            <p>Clear filters or search for another theorem, formula, source, collaborator or category.</p>
          </div>
        )}
      </section>

      <aside className="browse-panel">
        <h2>Browse the Archive</h2>
        <Link prefetch={false} href="/formulas"><strong>Formula Archive</strong><span>Search canonical formulas</span></Link>
        <Link prefetch={false} href="/named-concepts"><strong>Named Concepts</strong><span>Historically qualified names</span></Link>
        <Link prefetch={false} href="/discoveries?type=theorem"><strong>Theorems</strong><span>Proven and conjectural contexts</span></Link>
        <Link prefetch={false} href="/discoveries?type=identity"><strong>Identities</strong><span>Series, products and q-identities</span></Link>
        <Link prefetch={false} href="/discoveries?type=conjecture"><strong>Conjectures</strong><span>Original and later formulations</span></Link>
      </aside>
    </div>
  );
}
