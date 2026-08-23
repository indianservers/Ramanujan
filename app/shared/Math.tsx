import katex from "katex";

type MathProps = {
  math: string;
  label: string;
};

function renderMath(math: string, displayMode: boolean) {
  return {
    __html: katex.renderToString(math, {
      displayMode,
      output: "html",
      strict: "ignore",
      throwOnError: false,
    }),
  };
}

export function InlineMath({ math, label }: MathProps) {
  return (
    <span
      aria-label={label}
      className="math-inline"
      dangerouslySetInnerHTML={renderMath(math, false)}
    />
  );
}

export function BlockMath({ math, label }: MathProps) {
  return (
    <div
      aria-label={label}
      className="math-block"
      dangerouslySetInnerHTML={renderMath(math, true)}
      role="img"
    />
  );
}
