"use client";

import { useMemo, useState } from "react";
import { papers } from "../../data/archive";
import { SaveButton } from "../../shared/SaveButton";

export function PublishedPapers() {
  const [year, setYear] = useState("All");
  const [subject, setSubject] = useState("All");
  const [collaborator, setCollaborator] = useState("All");
  const years = ["All", ...Array.from(new Set(papers.map((item) => item.year)))];
  const subjects = ["All", ...Array.from(new Set(papers.flatMap((item) => item.subjects)))];
  const collaborators = ["All", ...Array.from(new Set(papers.flatMap((item) => item.collaborators.length ? item.collaborators : ["Solo"])))];
  const visible = useMemo(() => papers.filter((item) => (year === "All" || item.year === year) && (subject === "All" || item.subjects.includes(subject)) && (collaborator === "All" || (collaborator === "Solo" ? !item.collaborators.length : item.collaborators.includes(collaborator)))), [collaborator, subject, year]);

  return (
    <section>
      <div className="formula-filter-bar">
        <select aria-label="Year filter" value={year} onChange={(event) => setYear(event.target.value)}>{years.map((item) => <option key={item}>{item}</option>)}</select>
        <select aria-label="Subject filter" value={subject} onChange={(event) => setSubject(event.target.value)}>{subjects.map((item) => <option key={item}>{item}</option>)}</select>
        <select aria-label="Collaborator filter" value={collaborator} onChange={(event) => setCollaborator(event.target.value)}>{collaborators.map((item) => <option key={item}>{item}</option>)}</select>
      </div>
      <p className="result-count" aria-live="polite">{visible.length} papers shown from {papers.length} indexed records.</p>
      <div className="formula-grid">
        {visible.map((paper) => <article className="formula-card" key={paper.slug}><p className="detail-meta">{paper.year} | {paper.journal}</p><h2>{paper.title}</h2><p>{paper.volumePages ?? "Bibliographic details incomplete."}</p><p>{paper.subjects.join(", ")}</p>{paper.relatedDiscoverySlugs[0] ? <a href={`/discoveries/${paper.relatedDiscoverySlugs[0]}`}>Related Discovery</a> : null}<SaveButton id={`paper:${paper.slug}`} label={paper.title} /></article>)}
      </div>
    </section>
  );
}
