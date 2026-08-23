"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { categories, discoveries, formulas, letters, lifeProfiles, notebooks, papers } from "../data/archive";

const savedKey = "ramanujan-universe-saved";

const records = [
  ...discoveries.map((item) => ({ id: `discovery:${item.slug}`, type: "Discovery", title: item.title, href: `/discoveries/${item.slug}`, summary: item.summary })),
  ...formulas.map((item) => ({ id: `formula:${item.slug}`, type: "Formula", title: item.title, href: `/formulas/${item.slug}`, summary: item.plainLanguageMeaning ?? item.category })),
  ...categories.map((item) => ({ id: `category:${item.slug}`, type: "Category", title: item.title, href: `/discoveries/category/${item.slug}`, summary: item.summary })),
  ...notebooks.map((item) => ({ id: `notebook:${item.slug}`, type: "Notebook", title: item.title, href: `/notebooks/${item.slug}`, summary: item.summary })),
  ...letters.map((item) => ({ id: `letter:${item.slug}`, type: "Letter", title: item.title, href: `/letters/${item.slug}`, summary: item.significance })),
  ...lifeProfiles.map((item) => ({ id: `life:${item.slug}`, type: "Biography", title: item.title, href: `/life/${item.slug}`, summary: item.summary })),
  ...papers.map((item) => ({ id: `paper:${item.slug}`, type: "Paper", title: item.title, href: "/resources/published-papers", summary: `${item.year} | ${item.journal}` })),
];

function readSaved() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(savedKey) ?? "[]") as string[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function SavedNotebook() {
  const [saved, setSaved] = useState<string[]>(() => readSaved());
  const [filter, setFilter] = useState("All");
  const [message, setMessage] = useState("");
  const types = ["All", ...Array.from(new Set(records.map((item) => item.type)))];
  const visible = useMemo(() => records.filter((item) => saved.includes(item.id) && (filter === "All" || item.type === filter)), [filter, saved]);

  function persist(next: string[], text: string) {
    window.localStorage.setItem(savedKey, JSON.stringify(next));
    setSaved(next);
    setMessage(text);
  }

  return (
    <section className="saved-notebook" aria-live="polite">
      <div className="formula-filter-bar">
        <select aria-label="Filter saved items" value={filter} onChange={(event) => setFilter(event.target.value)}>
          {types.map((item) => <option key={item}>{item}</option>)}
        </select>
        <button type="button" onClick={() => window.confirm("Clear all saved items?") ? persist([], "Saved notebook cleared") : undefined}>Clear all</button>
      </div>
      {message ? <p className="result-count">{message}</p> : null}
      {visible.length ? (
        <div className="formula-grid">
          {visible.map((item) => (
            <article className="formula-card" key={item.id}>
              <p className="detail-meta">{item.type}</p>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
              <Link prefetch={false} href={item.href}>Open</Link>
              <button type="button" onClick={() => persist(saved.filter((savedId) => savedId !== item.id), `${item.title} removed`)}>Remove</button>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state parchment">
          <h2>No saved items yet</h2>
          <p>Save discoveries, formulas, letters and biography pages as you explore.</p>
          <Link prefetch={false} className="button button-primary" href="/discoveries">Browse Discoveries</Link>
        </div>
      )}
    </section>
  );
}
