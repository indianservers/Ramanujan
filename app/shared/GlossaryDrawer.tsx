"use client";

import { useMemo, useState } from "react";
import { glossaryEntries, type GlossaryGroup } from "../data/glossary";
import { HeritageIcon } from "./HeritageIcon";

const groups: Array<GlossaryGroup | "All"> = ["All", "Language", "Mathematics", "People", "Places", "Concepts"];

export function GlossaryDrawer() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<GlossaryGroup | "All">("All");

  const entries = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return glossaryEntries.filter((entry) => {
      const groupMatch = group === "All" || entry.group === group;
      const text = [entry.term, entry.group, entry.definition, entry.related].filter(Boolean).join(" ").toLowerCase();
      return groupMatch && (!needle || text.includes(needle));
    });
  }, [group, query]);

  return (
    <>
      <button className="glossary-trigger" type="button" onClick={() => setOpen(true)} aria-haspopup="dialog">
        <HeritageIcon name="book" />
        Glossary
      </button>
      <div className={`glossary-layer ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <button className="glossary-scrim" type="button" aria-label="Dismiss glossary overlay" onClick={() => setOpen(false)} />
        <aside className="glossary-drawer" role="dialog" aria-modal="true" aria-label="Glossary">
          <div className="glossary-head">
            <div>
              <p className="eyebrow">Archive Companion</p>
              <h2>Glossary</h2>
            </div>
            <button className="glossary-close" type="button" onClick={() => setOpen(false)} aria-label="Close glossary">
              x
            </button>
          </div>
          <label className="search-box glossary-search">
            <span>Search glossary</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search terms, places, people..." />
          </label>
          <div className="glossary-tabs" role="group" aria-label="Glossary categories">
            {groups.map((item) => (
              <button type="button" className={group === item ? "active" : ""} key={item} onClick={() => setGroup(item)}>
                {item}
              </button>
            ))}
          </div>
          <div className="glossary-results">
            {entries.map((entry) => (
              <article className="glossary-entry sacred-card" key={entry.term}>
                <div>
                  <strong>{entry.term}</strong>
                  <span>{entry.group}</span>
                </div>
                <p>{entry.definition}</p>
                {entry.related ? <small>{entry.related}</small> : null}
              </article>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
}
