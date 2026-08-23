"use client";

import { useState } from "react";

export function CopyLatexButton({ latex, label }: { latex: string; label: string }) {
  const [copied, setCopied] = useState(false);

  async function copyLatex() {
    await navigator.clipboard.writeText(latex);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <button type="button" onClick={copyLatex} aria-label={`Copy LaTeX for ${label}`}>
      {copied ? "Copied" : "Copy LaTeX"}
    </button>
  );
}
