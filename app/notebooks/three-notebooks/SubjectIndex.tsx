"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { discoveries } from "../../data/archive";

export function SubjectIndex() {
  const [query, setQuery] = useState("");
  const [difficulty, setDifficulty] = useState("All");
  const results = useMemo(() => {
    const needle = query.toLowerCase().trim();
    return discoveries.filter((item) => {
      const haystack = [item.title, item.category, item.resultType, item.summary].join(" ").toLowerCase();
      return (!needle || haystack.includes(needle)) && (difficulty === "All" || item.difficulty === difficulty);
    }).slice(0, 36);
  }, [difficulty, query]);

  return (
    <section className="subject-index parchment">
      <h2>Searchable Subject Index</h2>
      <p className="citation">Notebook attribution not confirmed in the supplied source.</p>
      <div className="formula-filter-bar">
        <input aria-label="Search notebook subject index" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Topic, result type, formula family..." />
        <select aria-label="Difficulty filter" value={difficulty} onChange={(event) => setDifficulty(event.target.value)}>
          {["All", "Accessible", "Intermediate", "Advanced"].map((item) => <option key={item}>{item}</option>)}
        </select>
      </div>
      <div className="related-link-grid">
        {results.map((item) => <Link prefetch={false} href={`/discoveries/${item.slug}`} key={item.slug}>{item.title}</Link>)}
      </div>
    </section>
  );
}
