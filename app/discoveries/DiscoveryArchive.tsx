"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { categories, discoveries } from "../data/archive";
import { DiscoveryCard } from "../shared/DiscoveryCard";

const sourceFilters = ["All", "Source catalogue", "Published Papers", "Lost Notebook", "Hardy-Ramanujan"];
const typeFilters = ["All", "theorem", "identity", "formula", "conjecture", "method", "function", "continued-fraction", "series", "approximation", "equation", "concept", "contribution-family"];
const sortOptions = [
  ["featured", "Featured"],
  ["year", "Year"],
  ["difficulty", "Difficulty"],
  ["title", "A-Z"],
  ["status", "Source status"],
] as const;
const viewOptions = [
  ["grid", "Grid"],
  ["list", "List"],
] as const;
const difficultyRank = { Accessible: 1, Intermediate: 2, Advanced: 3 };

function formatLabel(value: string) {
  if (value === "All") return "All";
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function latestYear(value?: string) {
  const matches = value?.match(/\d{4}/g);
  return matches?.length ? Number(matches[matches.length - 1]) : 0;
}

export function DiscoveryArchive({ initialCategorySlug }: { initialCategorySlug?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? "");
  const source = params.get("source") ?? "All";
  const resultType = params.get("type") ?? "All";
  const sort = params.get("sort") ?? "featured";
  const view = params.get("view") ?? "grid";
  const categorySlug = initialCategorySlug ?? params.get("category") ?? "All";
  const category = categories.find((item) => item.slug === categorySlug);

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
    return discoveries
      .filter((discovery) => {
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
      })
      .sort((a, b) => {
        if (sort === "year") return latestYear(b.year) - latestYear(a.year) || a.title.localeCompare(b.title);
        if (sort === "difficulty") return difficultyRank[a.difficulty] - difficultyRank[b.difficulty] || a.title.localeCompare(b.title);
        if (sort === "title") return a.title.localeCompare(b.title);
        if (sort === "status") return a.reviewStatus.localeCompare(b.reviewStatus) || a.title.localeCompare(b.title);
        return Number(b.featured) - Number(a.featured) || a.category.localeCompare(b.category) || a.title.localeCompare(b.title);
      });
  }, [categorySlug, query, resultType, sort, source]);

  const featuredResults = results.filter((discovery) => discovery.featured).slice(0, 6);

  const updateParam = (key: string, value: string) => {
    const next = new URLSearchParams(params.toString());
    if (value === "All" || (key === "sort" && value === "featured") || (key === "view" && value === "grid")) next.delete(key);
    else next.set(key, value);
    router.replace(`${pathname}${next.toString() ? `?${next}` : ""}`, { scroll: false });
  };

  const clearAll = () => {
    setQuery("");
    router.replace(pathname, { scroll: false });
  };

  const chips = [
    categorySlug !== "All" ? { key: "category", label: `Category: ${category?.title ?? formatLabel(categorySlug)}`, onRemove: () => router.push("/discoveries") } : null,
    source !== "All" ? { key: "source", label: `Source: ${source}`, onRemove: () => updateParam("source", "All") } : null,
    resultType !== "All" ? { key: "type", label: `Type: ${formatLabel(resultType)}`, onRemove: () => updateParam("type", "All") } : null,
    query ? { key: "q", label: `Search: ${query}`, onRemove: () => setQuery("") } : null,
  ].filter(Boolean) as { key: string; label: string; onRemove: () => void }[];

  return (
    <div className="archive-layout">
      <aside className="taxonomy-panel">
        <h2>All Contributions</h2>
        <a className={categorySlug === "All" ? "active-filter" : ""} href="/discoveries">
          <span>All Categories</span>
          <b className="count-badge">{discoveries.length}</b>
        </a>
        {categories.map((category) => {
          const count = discoveries.filter((item) => item.categorySlug === category.slug).length;
          return (
            <a className={categorySlug === category.slug ? "active-filter" : ""} href={`/discoveries/category/${category.slug}`} key={category.slug}>
              <span>{category.title}</span>
              <b className="count-badge">{count || ""}</b>
            </a>
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
        {chips.length ? (
          <div className="active-filter-chips" aria-label="Active discovery filters">
            {chips.map((chip) => (
              <button key={chip.key} type="button" onClick={chip.onRemove}>
                {chip.label}<span aria-hidden="true">x</span>
              </button>
            ))}
            <button type="button" onClick={clearAll}>Clear all</button>
          </div>
        ) : null}
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
              {item === "All" ? "All Types" : formatLabel(item)}
            </button>
          ))}
          <button type="button" onClick={clearAll}>
            Clear filters
          </button>
        </div>
        <div className="mobile-filter-selects">
          <label>
            <span>Source</span>
            <select value={source} onChange={(event) => updateParam("source", event.target.value)}>
              {sourceFilters.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label>
            <span>Result type</span>
            <select value={resultType} onChange={(event) => updateParam("type", event.target.value)}>
              {typeFilters.map((item) => <option key={item} value={item}>{item === "All" ? "All Types" : formatLabel(item)}</option>)}
            </select>
          </label>
        </div>
        <div className="archive-control-bar">
          <label>
            <span>Sort</span>
            <select value={sort} onChange={(event) => updateParam("sort", event.target.value)}>
              {sortOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
            </select>
          </label>
          <div className="view-toggle" role="group" aria-label="Discovery view">
            {viewOptions.map(([value, label]) => (
              <button className={view === value ? "active" : ""} key={value} onClick={() => updateParam("view", value)} type="button" aria-pressed={view === value}>
                {label}
              </button>
            ))}
          </div>
        </div>
        {results.length ? (
          <>
            {featuredResults.length ? (
              <section className="featured-discoveries" aria-label="Featured discoveries">
                <div className="section-kicker">
                  <p>Featured discoveries</p>
                  <span>Start with the archive's most connected entries.</span>
                </div>
                <div className="featured-discovery-strip">
                  {featuredResults.map((discovery) => (
                    <a href={`/discoveries/${discovery.slug}`} key={discovery.slug}>
                      <strong>{discovery.title}</strong>
                      <span>{discovery.category} {discovery.year ? `| ${discovery.year}` : ""}</span>
                    </a>
                  ))}
                </div>
              </section>
            ) : null}
            <div className={`discovery-grid ${view === "list" ? "discovery-list" : ""}`}>
              {results.map((discovery) => (
                <DiscoveryCard discovery={discovery} key={discovery.slug} />
              ))}
            </div>
          </>
        ) : (
          <div className="empty-state parchment">
            <h2>No matching entries</h2>
            <p>Clear filters or search for another theorem, formula, source, collaborator or category.</p>
          </div>
        )}
      </section>

      <aside className="browse-panel">
        <h2>Browse the Archive</h2>
        <a href="/formulas"><strong>Formula Archive</strong><span>Search canonical formulas</span></a>
        <a href="/named-concepts"><strong>Named Concepts</strong><span>Historically qualified names</span></a>
        <a href="/discoveries?type=theorem"><strong>Theorems</strong><span>Proven and conjectural contexts</span></a>
        <a href="/discoveries?type=identity"><strong>Identities</strong><span>Series, products and q-identities</span></a>
        <a href="/discoveries?type=conjecture"><strong>Conjectures</strong><span>Original and later formulations</span></a>
      </aside>
    </div>
  );
}
