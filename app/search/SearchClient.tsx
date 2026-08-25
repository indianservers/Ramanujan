"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { categories, discoveries, formulas, letters, lifeProfiles, notebooks, papers, references, timelineEvents, namedConcepts } from "../data/archive";
import { ramanujanTopics } from "../data/ramanujan-topics";

const records = [
  ...discoveries.map((item) => ({ type: "Discoveries", title: item.title, href: `/discoveries/${item.slug}`, text: item.summary, category: item.category })),
  ...formulas.map((item) => ({ type: "Formulas", title: item.title, href: `/formulas/${item.slug}`, text: item.plainLanguageMeaning ?? item.category, category: item.category })),
  ...categories.map((item) => ({ type: "Categories", title: item.title, href: `/discoveries/category/${item.slug}`, text: item.summary, category: item.title })),
  ...namedConcepts.map((item) => ({ type: "Named Concepts", title: item.title, href: `/named-concepts/${item.slug}`, text: item.summary, category: item.categorySlug })),
  ...notebooks.map((item) => ({ type: "Notebooks", title: item.title, href: `/notebooks/${item.slug}`, text: item.summary, category: "Notebooks" })),
  ...letters.map((item) => ({ type: "Letters", title: item.title, href: `/letters/${item.slug}`, text: item.significance, category: "Letters" })),
  ...lifeProfiles.map((item) => ({ type: "People", title: item.title, href: `/life/${item.slug}`, text: item.summary, category: "Life" })),
  ...ramanujanTopics.map((item) => ({ type: "Ramanujan Context", title: item.title, href: `/ramanujan/${item.slug}`, text: item.summary, category: item.category })),
  ...timelineEvents.map((item) => ({ type: "Timeline", title: item.title, href: "/timeline", text: item.text, category: item.location })),
  ...papers.map((item) => ({ type: "Papers", title: item.title, href: `/resources/published-papers/${item.slug}`, text: `${item.year} ${item.journal} ${item.subjects.join(" ")}`, category: item.subjects[0] })),
  ...references.map((item) => ({ type: "References", title: item.title, href: "/resources/references", text: item.description, category: item.group })),
];

const typeOrder = ["Discoveries", "Formulas", "Papers", "Ramanujan Context", "Named Concepts", "Notebooks", "Letters", "People", "Timeline", "References", "Categories"];

function score(item: (typeof records)[number], query: string) {
  const needle = query.toLowerCase();
  const title = item.title.toLowerCase();
  const category = item.category.toLowerCase();
  let value = 0;
  if (title === needle) value += 80;
  if (title.startsWith(needle)) value += 45;
  if (title.includes(needle)) value += 25;
  if (category.includes(needle)) value += 12;
  if (item.text.toLowerCase().includes(needle)) value += 8;
  value += Math.max(0, 10 - typeOrder.indexOf(item.type));
  return value;
}

function highlight(text: string, query: string) {
  if (!query.trim()) return text;
  const index = text.toLowerCase().indexOf(query.toLowerCase());
  if (index < 0) return text;
  return <>{text.slice(0, index)}<mark>{text.slice(index, index + query.length)}</mark>{text.slice(index + query.length)}</>;
}

export function SearchClient() {
  const params = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? "");
  const [typeFilter, setTypeFilter] = useState("All");
  const [limit, setLimit] = useState(24);
  const results = useMemo(() => {
    const needle = query.toLowerCase().trim();
    if (!needle) return [];
    return records
      .filter((item) => (typeFilter === "All" || item.type === typeFilter) && [item.title, item.text, item.category, item.type].join(" ").toLowerCase().includes(needle))
      .sort((a, b) => score(b, needle) - score(a, needle) || a.title.localeCompare(b.title));
  }, [query, typeFilter]);
  const groups = Array.from(new Set(results.map((item) => item.type)));
  const suggestions = Array.from(new Set(results.map((item) => item.category))).slice(0, 6);
  const visibleGroups = groups.map((group) => ({ group, items: results.filter((item) => item.type === group).slice(0, limit) })).filter((item) => item.items.length);

  return (
    <section className="search-results" aria-live="polite">
      <form className="search-box" action="/search">
        <span>Search the site</span>
        <input name="q" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search discoveries, formulas, people, notebooks, letters..." />
      </form>
      <div className="formula-filter-bar">
        <select aria-label="Search result type" value={typeFilter} onChange={(event) => { setTypeFilter(event.target.value); setLimit(24); }}>
          <option>All</option>
          {typeOrder.filter((item) => records.some((record) => record.type === item)).map((item) => <option key={item}>{item}</option>)}
        </select>
        <button type="button" onClick={() => { setQuery(""); setTypeFilter("All"); setLimit(24); }}>Clear search</button>
      </div>
      <p className="result-count">{query ? `${results.length} results for "${query}"` : "Enter a query to search the archive."}</p>
      {visibleGroups.map(({ group, items }) => (
        <section className="reference-group parchment" key={group}>
          <h2>{group}</h2>
          {items.map((item) => (
            <article key={`${item.type}:${item.href}:${item.title}`}>
              <h3><a href={item.href}>{highlight(item.title, query)}</a></h3>
              <p>{highlight(item.text, query)}</p>
              <p className="detail-meta">{item.type} | {item.category}</p>
            </article>
          ))}
        </section>
      ))}
      {results.length > visibleGroups.reduce((sum, item) => sum + item.items.length, 0) ? <button className="button button-secondary" type="button" onClick={() => setLimit((value) => value + 24)}>Show more results</button> : null}
      {query && !results.length ? <div className="empty-state parchment"><h2>No matching records</h2><p>Try a subject such as partitions, mock theta, Hardy, notebooks or tau.</p></div> : null}
      {suggestions.length ? <p className="result-count">Related categories: {suggestions.join(", ")}</p> : null}
    </section>
  );
}
