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
        { heading: "Mock Theta Functions", body: "The Lost Notebook is inseparable from the modern study of mock theta functions and q-series. This page links those topics without turning them into visualisations." },
        { heading: "Partial and False Theta Functions", body: "Related partial and false theta functions appear in the surrounding q-series landscape and remain important to modern interpretation." },
        { heading: "Modern Research", body: "Later work connected mock theta functions to mock modular forms and harmonic Maass forms, a development after Ramanujan rather than terminology he used." },
      ]}
      citation="Lost Notebook historical account; exact manuscript-level claims require source verification."
      saveId="notebook:lost-notebook"
      relatedDiscoverySlugs={record.relatedDiscoverySlugs}
      links={[{ label: "Final Letter to Hardy", href: "/letters/final-letter-to-hardy" }, { label: "Mock Theta Functions", href: "/discoveries/mock-theta-functions" }, { label: "q-Series", href: "/discoveries/category/q-series-basic-hypergeometric-series" }]}
    />
  );
}
