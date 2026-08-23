export type HeritagePlace = {
  id: string;
  name: string;
  label: string;
  region: string;
  years: string;
  description: string;
  x: number;
  y: number;
  kind: "birth" | "home" | "work" | "journey" | "study";
};

export const heritagePlaces: HeritagePlace[] = [
  {
    id: "erode",
    name: "Erode",
    label: "Birthplace",
    region: "Tamil Nadu, India",
    years: "1887",
    description: "Ramanujan was born in Erode before being raised primarily in Kumbakonam.",
    x: 48,
    y: 78,
    kind: "birth",
  },
  {
    id: "kumbakonam",
    name: "Kumbakonam",
    label: "Home and school",
    region: "Tamil Nadu, India",
    years: "1888-1904, 1919-1920",
    description: "The temple town of his childhood, schooling, notebooks, marriage, return, and final days.",
    x: 58,
    y: 84,
    kind: "home",
  },
  {
    id: "madras",
    name: "Madras",
    label: "Patrons and work",
    region: "Chennai, India",
    years: "1910-1914",
    description: "The city where supporters helped bring his work to wider attention before Cambridge.",
    x: 64,
    y: 76,
    kind: "work",
  },
  {
    id: "namakkal",
    name: "Namakkal",
    label: "Namagiri shrine",
    region: "Tamil Nadu, India",
    years: "Family devotion",
    description: "Associated with Namagiri Devi, a key presence in Ramanujan's spiritual imagination.",
    x: 45,
    y: 75,
    kind: "journey",
  },
  {
    id: "bombay",
    name: "Bombay",
    label: "Voyage departure",
    region: "Mumbai, India",
    years: "1914",
    description: "Ramanujan sailed from India to England in 1914, beginning his Cambridge years.",
    x: 27,
    y: 55,
    kind: "journey",
  },
  {
    id: "cambridge",
    name: "Cambridge",
    label: "Trinity College",
    region: "England",
    years: "1914-1919",
    description: "The site of Ramanujan's collaboration with G. H. Hardy and his election to the Royal Society.",
    x: 83,
    y: 24,
    kind: "study",
  },
];

