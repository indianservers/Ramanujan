"use client";

import { useMemo, useState } from "react";
import { categories, discoveries } from "../../data/archive";

export function SubjectIndex() {
  const [query, setQuery] = useState("");
  const [difficulty, setDifficulty] = useState("All");
  const [categorySlug, setCategorySlug] = useState("All");
  const results = useMemo(() => {
    const needle = query.toLowerCase().trim();
    return discoveries.filter((item) => {
      const haystack = [item.title, item.category, item.resultType, item.summary].join(" ").toLowerCase();
      return (!needle || haystack.includes(needle)) && (difficulty === "All" || item.difficulty === difficulty) && (categorySlug === "All" || item.categorySlug === categorySlug);
    }).slice(0, 36);
  }, [categorySlug, difficulty, query]);

  return (
    <section className="subject-index parchment" id="subject-index">
      <h2>Searchable Subject Index</h2>
      <p>Search the discovery catalogue as a notebook reading aid. Use it to move from a manuscript theme into related formulas, source notes and later mathematical developments.</p>
      <p className="citation">Notebook attribution not confirmed in the supplied source.</p>
      <div className="formula-filter-bar">
        <input aria-label="Search notebook subject index" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Topic, result type, formula family..." />
        <select aria-label="Difficulty filter" value={difficulty} onChange={(event) => setDifficulty(event.target.value)}>
          {["All", "Accessible", "Intermediate", "Advanced"].map((item) => <option key={item}>{item}</option>)}
        </select>
        <select aria-label="Subject category filter" value={categorySlug} onChange={(event) => setCategorySlug(event.target.value)}>
          <option value="All">All categories</option>
          {categories.map((category) => <option key={category.slug} value={category.slug}>{category.title}</option>)}
        </select>
      </div>
      <p className="result-count" aria-live="polite">{results.length} related subjects shown</p>
      <div className="related-link-grid">
        {results.map((item) => <a href={`/discoveries/${item.slug}`} key={item.slug}>{item.title}</a>)}
      </div>
    </section>
  );
}
