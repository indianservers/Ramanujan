import { notebooks } from "../data/archive";
import { EditorialPage } from "../shared/EditorialPage";

export default function NotebooksPage() {
  const sections = [
    { heading: "The Three Notebooks", body: "The notebooks contain a vast collection of identities, formulas and results, many recorded without proofs. This site treats them as a preserved mathematical archive rather than a fully transcribed edition." },
    { heading: "The Lost Notebook", body: "The Lost Notebook is connected with Ramanujan's final period and later rediscovery. It is especially important for mock theta functions, q-series and continuing research." },
    { heading: "What the Notebooks Contain", body: "Infinite series, infinite products, continued fractions, theta functions, modular equations, q-series, gamma-function identities, definite integrals, partition identities, mock theta functions, approximations and asymptotic expansions all appear in this archive's subject map." },
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
        { label: "Mock Theta Functions", href: "/discoveries/category/mock-theta-functions" },
        { label: "Continued Fractions", href: "/discoveries/category/other-continued-fractions" },
      ]}
      relatedDiscoverySlugs={notebooks.flatMap((item) => item.relatedDiscoverySlugs).slice(0, 6)}
    />
  );
}
