import { notebooks } from "../../data/archive";
import { EditorialPage } from "../../shared/EditorialPage";

export default function LostNotebookPage() {
  const record = notebooks.find((item) => item.slug === "lost-notebook")!;
  return (
    <EditorialPage
      active="Notebooks"
      eyebrow="Lost Notebook"
      title={record.title}
      subtitle={record.subtitle}
      image={record.image}
      imageAlt="Lost notebook"
      summary={record.summary}
      sections={[
        ...record.sections,
        { heading: "What Makes It Different", body: "The Lost Notebook feels different from a polished publication because it preserves late-stage mathematical notes: dense formulas, q-series behavior and suggestive identities that later readers had to place into a broader theory." },
        { heading: "Mock Theta Functions", body: "The Lost Notebook is inseparable from the modern study of mock theta functions and q-series. This page links those topics without turning them into visualisations." },
        { heading: "Partial and False Theta Functions", body: "Related partial and false theta functions appear in the surrounding q-series landscape and remain important to modern interpretation." },
        { heading: "Partition Identities", body: "Some surrounding Lost Notebook material belongs to the partition-theoretic world: generating functions, dissections and identities that connect counting problems with q-series structure." },
        { heading: "A Reader's Route", body: "Begin with the final letter to Hardy, continue to mock theta functions, then branch into q-series, partial theta functions, false theta functions and harmonic Maass form context." },
        { heading: "Modern Research", body: "Later work connected mock theta functions to mock modular forms and harmonic Maass forms, a development after Ramanujan rather than terminology he used." },
        { heading: "Editorial Note", body: "This page describes the Lost Notebook as a historical and mathematical cluster. Exact manuscript ordering, transcription and proof status are left to specialist editions and source references." },
      ]}
      citation="Lost Notebook historical account; exact manuscript-level claims require source verification."
      saveId="notebook:lost-notebook"
      relatedDiscoverySlugs={record.relatedDiscoverySlugs}
      links={[
        { label: "Final Letter to Hardy", href: "/letters/final-letter-to-hardy" },
        { label: "Mock Theta Functions", href: "/discoveries/mock-theta-functions" },
        { label: "q-Series", href: "/discoveries/category/q-series-basic-hypergeometric-series" },
        { label: "Partial Theta Functions", href: "/discoveries/partial-theta-functions" },
        { label: "False Theta Functions", href: "/discoveries/false-theta-functions" },
        { label: "Lost Notebook Partition Identities", href: "/discoveries/lost-notebook-partition-identities" },
      ]}
    />
  );
}
