export type GlossaryGroup = "Language" | "Mathematics" | "People" | "Places" | "Concepts";

export type GlossaryEntry = {
  term: string;
  group: GlossaryGroup;
  pronunciation?: string;
  definition: string;
  related?: string;
};

export const glossaryEntries: GlossaryEntry[] = [
  {
    term: "Namagiri Devi",
    group: "Language",
    definition:
      "The family deity Ramanujan revered. In the site, the term marks the devotional context he associated with mathematical insight.",
    related: "Faith, Namakkal, goddess tradition",
  },
  {
    term: "Kumbakonam",
    group: "Places",
    definition:
      "The Tamil Nadu temple town where Ramanujan was raised, educated, married, and later died in 1920.",
    related: "Town High School, notebooks, final years",
  },
  {
    term: "Erode",
    group: "Places",
    definition:
      "Ramanujan's birthplace in present-day Tamil Nadu. He was born there on 22 December 1887.",
    related: "Birthplace",
  },
  {
    term: "Madras",
    group: "Places",
    definition:
      "The colonial-era name for Chennai. Ramanujan worked around Madras before his Cambridge journey and had patrons there.",
    related: "University of Madras, Port Trust",
  },
  {
    term: "Cambridge",
    group: "Places",
    definition:
      "The English university city where Ramanujan worked with G. H. Hardy at Trinity College from 1914 to 1919.",
    related: "Hardy, Littlewood, Royal Society",
  },
  {
    term: "Partition",
    group: "Mathematics",
    definition:
      "A way of writing a positive integer as a sum of positive integers where order is not counted separately.",
    related: "p(n), congruences, asymptotic formula",
  },
  {
    term: "Congruence",
    group: "Mathematics",
    definition:
      "A modular arithmetic relation saying two quantities leave the same remainder after division by a chosen modulus.",
    related: "Partition congruences",
  },
  {
    term: "Mock Theta Function",
    group: "Mathematics",
    definition:
      "A mysterious q-series family from Ramanujan's final work, later understood through mock modular forms.",
    related: "Lost Notebook, final letter",
  },
  {
    term: "q-Series",
    group: "Mathematics",
    definition:
      "A power series in the variable q. Ramanujan used q-series throughout his work on theta functions, products, and partitions.",
    related: "Rogers-Ramanujan identities",
  },
  {
    term: "Modular Form",
    group: "Mathematics",
    definition:
      "A highly symmetric complex analytic function. Many later proofs of Ramanujan's results use modular forms.",
    related: "Tau function, eta products",
  },
  {
    term: "Srinivasa Ramanujan",
    group: "People",
    definition:
      "Indian mathematician whose notebooks, formulas, and conjectures reshaped number theory, analysis, partitions, and q-series.",
    related: "1887-1920",
  },
  {
    term: "G. H. Hardy",
    group: "People",
    definition:
      "Cambridge mathematician who recognized Ramanujan's genius, invited him to England, and collaborated with him.",
    related: "Hardy-Ramanujan asymptotic formula",
  },
  {
    term: "Janaki Ammal",
    group: "People",
    definition:
      "Ramanujan's wife, whose life intersected with his poverty, illness, separation during Cambridge years, and posthumous legacy.",
    related: "Biography",
  },
  {
    term: "Notebook",
    group: "Concepts",
    definition:
      "Ramanujan's handwritten collections of results, often stated without proofs and later studied by many mathematicians.",
    related: "Three Notebooks, Lost Notebook",
  },
  {
    term: "Lost Notebook",
    group: "Concepts",
    definition:
      "A manuscript collection rediscovered after Ramanujan's death, containing important late material including mock theta functions.",
    related: "George Andrews, 1976 rediscovery",
  },
  {
    term: "Yantra",
    group: "Language",
    definition:
      "A sacred geometric diagram. Here it informs a restrained design vocabulary for mathematical symmetry and order.",
    related: "Sacred geometry, mandala",
  },
];

