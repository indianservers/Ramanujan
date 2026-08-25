"use client";

import { useMemo, useState } from "react";
import { discoveries, papers } from "../../data/archive";
import { SaveButton } from "../../shared/SaveButton";

export function PublishedPapers() {
  const [year, setYear] = useState("All");
  const [subject, setSubject] = useState("All");
  const [collaborator, setCollaborator] = useState("All");
  const [sort, setSort] = useState("Chronological");
  const years = ["All", ...Array.from(new Set(papers.map((item) => item.year))).sort()];
  const subjects = ["All", ...Array.from(new Set(papers.flatMap((item) => item.subjects))).sort((a, b) => a.localeCompare(b))];
  const collaborators = ["All", ...Array.from(new Set(papers.flatMap((item) => item.collaborators.length ? item.collaborators : ["Solo"]))).sort((a, b) => a.localeCompare(b))];
  const discoveryBySlug = useMemo(() => new Map(discoveries.map((item) => [item.slug, item])), []);
  const stats = useMemo(() => {
    const yearNumbers = papers.map((item) => Number.parseInt(item.year, 10));
    return {
      yearRange: `${Math.min(...yearNumbers)}-${Math.max(...yearNumbers)}`,
      journals: new Set(papers.map((item) => item.journal)).size,
      solo: papers.filter((item) => !item.collaborators.length).length,
      linked: papers.filter((item) => item.relatedDiscoverySlugs.length).length,
    };
  }, []);
  const visible = useMemo(() => {
    const results = papers.filter((item) => (year === "All" || item.year === year) && (subject === "All" || item.subjects.includes(subject)) && (collaborator === "All" || (collaborator === "Solo" ? !item.collaborators.length : item.collaborators.includes(collaborator))));
    return [...results].sort((a, b) => {
      if (sort === "A-Z") return a.title.localeCompare(b.title);
      if (sort === "Journal") return a.journal.localeCompare(b.journal) || a.title.localeCompare(b.title);
      if (sort === "Linked discoveries") return b.relatedDiscoverySlugs.length - a.relatedDiscoverySlugs.length || a.title.localeCompare(b.title);
      return Number.parseInt(a.year, 10) - Number.parseInt(b.year, 10) || a.title.localeCompare(b.title);
    });
  }, [collaborator, sort, subject, year]);
  const activeFilters = [
    year !== "All" ? { label: "Year", value: year, clear: () => setYear("All") } : null,
    subject !== "All" ? { label: "Subject", value: subject, clear: () => setSubject("All") } : null,
    collaborator !== "All" ? { label: "Author", value: collaborator, clear: () => setCollaborator("All") } : null,
  ].filter(Boolean) as { label: string; value: string; clear: () => void }[];
  const clearFilters = () => {
    setYear("All");
    setSubject("All");
    setCollaborator("All");
  };

  return (
    <section>
      <div className="paper-strength-panel">
        <article>
          <strong>{stats.yearRange}</strong>
          <span>publication span</span>
        </article>
        <article>
          <strong>{stats.journals}</strong>
          <span>journals and proceedings</span>
        </article>
        <article>
          <strong>{stats.solo}</strong>
          <span>solo-authored records</span>
        </article>
        <article>
          <strong>{stats.linked}</strong>
          <span>linked to discovery entries</span>
        </article>
      </div>
      <div className="formula-filter-bar">
        <select aria-label="Year filter" value={year} onChange={(event) => setYear(event.target.value)}>{years.map((item) => <option key={item}>{item}</option>)}</select>
        <select aria-label="Subject filter" value={subject} onChange={(event) => setSubject(event.target.value)}>{subjects.map((item) => <option key={item}>{item}</option>)}</select>
        <select aria-label="Collaborator filter" value={collaborator} onChange={(event) => setCollaborator(event.target.value)}>{collaborators.map((item) => <option key={item}>{item}</option>)}</select>
        <select aria-label="Sort papers" value={sort} onChange={(event) => setSort(event.target.value)}>{["Chronological", "A-Z", "Journal", "Linked discoveries"].map((item) => <option key={item}>{item}</option>)}</select>
      </div>
      {activeFilters.length ? <div className="active-filter-chips paper-active-filters">{activeFilters.map((item) => <button key={item.label} type="button" onClick={item.clear} aria-label={`Remove ${item.label} filter`}>{item.label}: <span>{item.value}</span> <span aria-hidden="true">x</span></button>)}<button type="button" onClick={clearFilters}>Clear all</button></div> : null}
      <p className="result-count" aria-live="polite">{visible.length} papers shown from {papers.length} indexed records.</p>
      <div className="formula-grid">
        {visible.map((paper) => {
          const related = paper.relatedDiscoverySlugs.map((slug) => discoveryBySlug.get(slug)).filter(Boolean);
          return <article className="formula-card paper-card" key={paper.slug}><p className="detail-meta">{paper.year} | {paper.journal}</p><h2>{paper.title}</h2><p className="paper-biblio">{paper.volumePages ?? "Bibliographic details incomplete."}</p><div className="formula-card-tags">{paper.subjects.map((item) => <span key={item}>{item}</span>)}</div><p>{paper.collaborators.length ? `With ${paper.collaborators.join(", ")}` : "Solo paper by Srinivasa Ramanujan"}</p>{related.length ? <div className="paper-related-links"><strong>Related discoveries</strong>{related.map((item) => item ? <a key={item.slug} href={`/discoveries/${item.slug}`}>{item.title}</a> : null)}</div> : null}<p className="citation">{paper.externalSource ?? "Collected-paper reference"} | {paper.reviewStatus}</p><a href={`/resources/published-papers/${paper.slug}`}>Open Paper</a><SaveButton id={`paper:${paper.slug}`} label={paper.title} /></article>;
        })}
      </div>
    </section>
  );
}
