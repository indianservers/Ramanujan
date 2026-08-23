"use client";

import { useState } from "react";
import { SaveButton } from "./SaveButton";

type PageToolsProps = {
  id: string;
  label: string;
  citation?: string;
};

export function PageTools({ id, label, citation }: PageToolsProps) {
  const [status, setStatus] = useState("");

  async function copyText(text: string, message: string) {
    await navigator.clipboard.writeText(text);
    setStatus(message);
    window.setTimeout(() => setStatus(""), 1800);
  }

  return (
    <div className="page-tools" aria-live="polite">
      <SaveButton id={id} label={label} />
      <button type="button" onClick={() => copyText(window.location.href, "Page link copied")}>Copy Page Link</button>
      {citation ? <button type="button" onClick={() => copyText(citation, "Citation copied")}>Copy Citation</button> : null}
      <button type="button" onClick={() => window.print()}>Print</button>
      {status ? <span>{status}</span> : null}
    </div>
  );
}
