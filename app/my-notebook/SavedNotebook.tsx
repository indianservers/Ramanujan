"use client";

import { useMemo, useState } from "react";
import { categories, discoveries, formulas, letters, lifeProfiles, notebooks, papers } from "../data/archive";

const savedKey = "ramanujan-universe-saved";
const notesKey = "ramanujan-universe-notes";

const records = [
  ...discoveries.map((item) => ({ id: `discovery:${item.slug}`, type: "Discovery", title: item.title, href: `/discoveries/${item.slug}`, summary: item.summary })),
  ...formulas.map((item) => ({ id: `formula:${item.slug}`, type: "Formula", title: item.title, href: `/formulas/${item.slug}`, summary: item.plainLanguageMeaning ?? item.category })),
  ...categories.map((item) => ({ id: `category:${item.slug}`, type: "Category", title: item.title, href: `/discoveries/category/${item.slug}`, summary: item.summary })),
  ...notebooks.map((item) => ({ id: `notebook:${item.slug}`, type: "Notebook", title: item.title, href: `/notebooks/${item.slug}`, summary: item.summary })),
  ...letters.map((item) => ({ id: `letter:${item.slug}`, type: "Letter", title: item.title, href: `/letters/${item.slug}`, summary: item.significance })),
  ...lifeProfiles.map((item) => ({ id: `life:${item.slug}`, type: "Biography", title: item.title, href: `/life/${item.slug}`, summary: item.summary })),
  ...papers.map((item) => ({ id: `paper:${item.slug}`, type: "Paper", title: item.title, href: `/resources/published-papers/${item.slug}`, summary: `${item.year} | ${item.journal}` })),
];

function readSaved() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(savedKey) ?? "[]") as string[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function readNotes() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(notesKey) ?? "{}") as Record<string, string>;
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

export function SavedNotebook() {
  const [saved, setSaved] = useState<string[]>(() => readSaved());
  const [notes, setNotes] = useState<Record<string, string>>(() => readNotes());
  const [filter, setFilter] = useState("All");
  const [message, setMessage] = useState("");
  const types = ["All", ...Array.from(new Set(records.map((item) => item.type)))];
  const visible = useMemo(() => records.filter((item) => saved.includes(item.id) && (filter === "All" || item.type === filter)), [filter, saved]);

  function persist(next: string[], text: string) {
    window.localStorage.setItem(savedKey, JSON.stringify(next));
    setSaved(next);
    setMessage(text);
  }

  function updateNote(id: string, value: string) {
    const next = { ...notes, [id]: value };
    if (!value.trim()) delete next[id];
    window.localStorage.setItem(notesKey, JSON.stringify(next));
    setNotes(next);
  }

  function exportNotebook() {
    const payload = JSON.stringify({ saved, notes, exportedAt: new Date().toISOString() }, null, 2);
    void navigator.clipboard.writeText(payload).then(() => setMessage("Notebook export copied"), () => setMessage("Export ready but clipboard was blocked"));
  }

  async function importNotebook(file: File | undefined) {
    if (!file) return;
    try {
      const parsed = JSON.parse(await file.text()) as { saved?: string[]; notes?: Record<string, string> };
      const validSaved = Array.isArray(parsed.saved) ? parsed.saved.filter((id) => records.some((item) => item.id === id)) : [];
      const validNotes = parsed.notes && typeof parsed.notes === "object" ? parsed.notes : {};
      window.localStorage.setItem(savedKey, JSON.stringify(validSaved));
      window.localStorage.setItem(notesKey, JSON.stringify(validNotes));
      setSaved(validSaved);
      setNotes(validNotes);
      setMessage("Notebook imported");
    } catch {
      setMessage("Import failed: choose a valid notebook JSON export");
    }
  }

  return (
    <section className="saved-notebook" aria-live="polite">
      <div className="formula-filter-bar">
        <select aria-label="Filter saved items" value={filter} onChange={(event) => setFilter(event.target.value)}>
          {types.map((item) => <option key={item}>{item}</option>)}
        </select>
        <button type="button" onClick={exportNotebook}>Copy export</button>
        <label className="file-import-button">
          <span>Import JSON</span>
          <input type="file" accept="application/json" onChange={(event) => void importNotebook(event.target.files?.[0])} />
        </label>
        <button type="button" onClick={() => window.confirm("Clear all saved items?") ? persist([], "Saved notebook cleared") : undefined}>Clear all</button>
      </div>
      <p className="result-count">{saved.length} saved items. Add notes to turn this into a study notebook.</p>
      {message ? <p className="result-count">{message}</p> : null}
      {visible.length ? (
        <div className="formula-grid">
          {visible.map((item) => (
            <article className="formula-card" key={item.id}>
              <p className="detail-meta">{item.type}</p>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
              <label className="notebook-note">
                <span>Study note</span>
                <textarea value={notes[item.id] ?? ""} onChange={(event) => updateNote(item.id, event.target.value)} placeholder="Why did this catch your attention?" />
              </label>
              <a href={item.href}>Open</a>
              <button type="button" onClick={() => persist(saved.filter((savedId) => savedId !== item.id), `${item.title} removed`)}>Remove</button>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state parchment">
          <h2>No saved items yet</h2>
          <p>Save discoveries, formulas, letters and biography pages as you explore.</p>
          <a className="button button-primary" href="/discoveries">Browse Discoveries</a>
        </div>
      )}
    </section>
  );
}
