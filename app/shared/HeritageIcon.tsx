type HeritageIconName = "lotus" | "veena" | "lamp" | "book" | "conch" | "yantra" | "leaf" | "mandala" | "map";

const glyphs: Record<HeritageIconName, string> = {
  lotus: "padma",
  veena: "veena",
  lamp: "deepa",
  book: "pustaka",
  conch: "shankha",
  yantra: "yantra",
  leaf: "palm",
  mandala: "mandala",
  map: "desa",
};

export function HeritageIcon({
  name,
  label,
  className = "",
}: {
  name: HeritageIconName;
  label?: string;
  className?: string;
}) {
  return (
    <span className={`heritage-icon heritage-icon-${name} ${className}`} aria-label={label} aria-hidden={label ? undefined : true}>
      <span className="heritage-icon-core" />
      <span className="heritage-icon-mark">{glyphs[name]}</span>
    </span>
  );
}

