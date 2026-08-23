"use client";

import { useState } from "react";

type SaveButtonProps = {
  id: string;
  label: string;
  compact?: boolean;
};

const storageKey = "ramanujan-universe-saved";

function readSavedItems() {
  if (typeof window === "undefined") return [];
  try {
    const stored = JSON.parse(window.localStorage.getItem(storageKey) ?? "[]") as string[];
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

export function SaveButton({ id, label, compact = false }: SaveButtonProps) {
  const [saved, setSaved] = useState(() => readSavedItems().includes(id));

  function toggleSaved() {
    const savedItems = readSavedItems();
    const next = savedItems.includes(id) ? savedItems.filter((item) => item !== id) : [...savedItems, id];
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(next));
      setSaved(next.includes(id));
    } catch {
      setSaved(false);
    }
  }

  return (
    <button
      type="button"
      className={compact ? "bookmark" : undefined}
      onClick={toggleSaved}
      aria-label={`${saved ? "Remove" : "Save"} ${label} ${saved ? "from" : "to"} notebook`}
      aria-pressed={saved}
    >
      {compact ? (saved ? "Saved" : "Save") : saved ? "Saved to Notebook" : "Save to Notebook"}
    </button>
  );
}
