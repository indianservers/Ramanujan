"use client";

import { useMemo, useState } from "react";
import { categories, formulas } from "../data/archive";
import { CopyLatexButton } from "../shared/CopyLatexButton";
import { BlockMath } from "../shared/Math";
import { HeritageIcon } from "../shared/HeritageIcon";
import { SaveButton } from "../shared/SaveButton";

const allTypes = ["All", ...Array.from(new Set(formulas.map((formula) => formula.resultType)))];
const allSources = ["All", ...Array.from(new Set(formulas.map((formula) => formula.sourceType)))];
const allDifficulties = ["All", "Accessible", "Intermediate", "Advanced"];

export function FormulaArchive() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");
  const [source, setSource] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const [sort, setSort] = useState("title");

  const results = useMemo(() => {
    const needle = query.toLowerCase().trim();
    return formulas
      .filter((formula) => {
        const haystack = [formula.title, formula.latex, formula.category, formula.resultType, formula.sourceType, formula.tags?.join(" ")].join(" ").toLowerCase();
        return (!needle || haystack.includes(needle)) && (category === "All" || formula.category === category) && (type === "All" || formula.resultType === type) && (source === "All" || formula.sourceType === source) && (difficulty === "All" || formula.difficulty === difficulty);
      })
      .sort((a, b) => sort === "category" ? a.category.localeCompare(b.category) : a.title.localeCompare(b.title));
  }, [category, difficulty, query, sort, source, type]);

  return (
    <section className="formula-archive">
      <label className="search-box"><span>Search formulas</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search equations, identities, categories or sources..." /></label>
      <p className="result-count" aria-live="polite">{results.length} formulas indexed</p>
      <div className="formula-filter-bar">
        <select aria-label="Category filter" value={category} onChange={(event) => setCategory(event.target.value)}><option>All</option>{categories.map((item) => <option key={item.slug}>{item.title}</option>)}</select>
        <select aria-label="Result type filter" value={type} onChange={(event) => setType(event.target.value)}>{allTypes.map((item) => <option key={item}>{item}</option>)}</select>
        <select aria-label="Source filter" value={source} onChange={(event) => setSource(event.target.value)}>{allSources.map((item) => <option key={item}>{item}</option>)}</select>
        <select aria-label="Difficulty filter" value={difficulty} onChange={(event) => setDifficulty(event.target.value)}>{allDifficulties.map((item) => <option key={item}>{item}</option>)}</select>
        <select aria-label="Sort formulas" value={sort} onChange={(event) => setSort(event.target.value)}><option value="title">Sort by title</option><option value="category">Sort by category</option></select>
        <button type="button" onClick={() => { setQuery(""); setCategory("All"); setType("All"); setSource("All"); setDifficulty("All"); }}>Clear all</button>
      </div>
      <div className="formula-grid">
        {results.map((formula) => (
          <article className="formula-card sacred-card" key={formula.slug}>
            <h2><HeritageIcon name="leaf" /> {formula.title}</h2>
            <BlockMath math={formula.latex} label={formula.title} />
            <p>{formula.plainLanguageMeaning}</p>
            <div><span>{formula.category}</span><span>{formula.resultType}</span><span>{formula.sourceType}</span></div>
            <a href={`/formulas/${formula.slug}`}>Open Formula</a>
            <CopyLatexButton latex={formula.latex} label={formula.title} />
            <SaveButton id={`formula:${formula.slug}`} label={formula.title} />
          </article>
        ))}
      </div>
    </section>
  );
}
