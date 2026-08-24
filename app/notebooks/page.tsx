import { notebooks } from "../data/archive";
import { EditorialPage } from "../shared/EditorialPage";

export default function NotebooksPage() {
  const sections = [
    { heading: "What the Notebooks Are", body: "Ramanujan's notebooks are manuscript records of formulas, identities, transformations and conjectural patterns. Many entries are written in compressed form, often without the surrounding proof, motivation or range of validity that a modern article would supply." },
    { heading: "The Three Notebooks", body: "The three notebooks contain a vast collection of results from Ramanujan's earlier and middle mathematical life. This site treats them as a preserved mathematical archive rather than a fully transcribed critical edition." },
    { heading: "The Lost Notebook", body: "The Lost Notebook is connected with Ramanujan's final period and later rediscovery. It is especially important for mock theta functions, q-series, partial theta functions and continuing research." },
    { heading: "What the Notebooks Contain", body: "Infinite series, infinite products, continued fractions, theta functions, modular equations, q-series, gamma-function identities, definite integrals, partition identities, mock theta functions, approximations and asymptotic expansions all appear in this archive's subject map." },
    { heading: "How to Read This Section", body: "Begin with a broad notebook page, then follow the related discoveries into formulas and source notes. The notebook pages are designed as orientation maps: they explain subject clusters, historical caution and mathematical pathways without pretending to reproduce every manuscript entry." },
    { heading: "Editorial Principle", body: "Notebook material is presented with care. A result may be historically connected with Ramanujan while still requiring precise source verification, later proof, or clarification about whether the modern name was introduced after him." },
  ];

  return (
    <EditorialPage
      active="Notebooks"
      eyebrow="Manuscript Archive"
      title="The Notebooks of Srinivasa Ramanujan"
      subtitle="Thousands of formulas, identities and conjectures recorded with astonishing intuition."
      image="/assets/ramanujan-three-notebooks.png"
      imageAlt="Ramanujan notebook image"
      saveId="notebook:overview"
      sections={sections}
      links={[
        { label: "Three Notebooks", href: "/notebooks/three-notebooks" },
        { label: "Lost Notebook", href: "/notebooks/lost-notebook" },
        { label: "Formula Archive", href: "/formulas" },
        { label: "Published Papers", href: "/resources/published-papers" },
        { label: "Sources and References", href: "/resources/references" },
        { label: "Subject Search", href: "/notebooks/three-notebooks#subject-index" },
        { label: "Mock Theta Functions", href: "/discoveries/category/mock-theta-functions" },
        { label: "Continued Fractions", href: "/discoveries/category/other-continued-fractions" },
        { label: "Theta Functions", href: "/discoveries/category/ramanujan-theta-functions" },
        { label: "Partition Theory", href: "/discoveries/category/partition-theory" },
      ]}
      relatedDiscoverySlugs={notebooks.flatMap((item) => item.relatedDiscoverySlugs).slice(0, 6)}
    />
  );
}
