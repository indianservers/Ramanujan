import { ramanujanTopics } from "./ramanujan-topics";

export type ResultType = "theorem" | "identity" | "formula" | "conjecture" | "method" | "function" | "continued-fraction" | "series" | "approximation" | "equation" | "concept" | "contribution-family";
export type Difficulty = "Accessible" | "Intermediate" | "Advanced";
export type ReviewStatus = "verified" | "source-supplied" | "needs-review";
export type ContentSection = { heading: string; body: string };
export type FormulaEntry = { slug: string; title: string; latex: string; displayMode: boolean; plainLanguageMeaning?: string; conditions?: string[]; sourceCitation?: string; discoverySlug: string; category: string; resultType: ResultType; difficulty: Difficulty; sourceType: string; tags?: string[] };
export type CategoryRecord = { slug: string; title: string; parentSlug?: string; summary: string; icon?: string };
export type Discovery = {
  slug: string;
  title: string;
  alternateNames?: string[];
  category: string;
  categorySlug: string;
  subcategory?: string;
  resultType: ResultType;
  year?: string;
  collaborators?: string[];
  attribution?: string;
  historicalQualification?: string;
  summary: string;
  introduction: string;
  formulaSlugs: string[];
  keyResults?: ContentSection[];
  explanation?: ContentSection[];
  historicalContext?: ContentSection[];
  laterDevelopments?: ContentSection[];
  sourceType: string;
  sourceTitle?: string;
  sourceCitation?: string;
  sourceUrl?: string;
  notebookReference?: string;
  relatedDiscoverySlugs?: string[];
  relatedFormulaSlugs?: string[];
  featured?: boolean;
  difficulty: Difficulty;
  reviewStatus: ReviewStatus;
};
export type NamedConcept = { slug: string; title: string; categorySlug: string; status: "personally formulated" | "collaborative" | "independently rediscovered" | "named later" | "historically associated"; summary: string; discoverySlug?: string; formulaSlug?: string; reviewStatus: ReviewStatus };
export type NotebookRecord = { slug: string; title: string; subtitle: string; image: string; summary: string; sections: ContentSection[]; relatedDiscoverySlugs: string[]; reviewStatus: ReviewStatus };
export type LetterRecord = { slug: string; title: string; date: string; sender: string; recipient: string; image: string; context: string; significance: string; citation: string; relatedDiscoverySlugs: string[]; relatedLinks: { label: string; href: string }[]; reviewStatus: ReviewStatus };
export type LifeProfile = { slug: string; title: string; subtitle: string; image: string; alt: string; summary: string; sections: ContentSection[]; relatedLinks: { label: string; href: string }[]; citation: string; reviewStatus: ReviewStatus };
export type TimelineEvent = { slug: string; date: string; title: string; location: string; relatedPerson?: string; relatedDiscoverySlug?: string; relatedSource?: string; image?: string; text: string };
export type PaperRecord = { slug: string; title: string; year: string; journal: string; volumePages?: string; collaborators: string[]; subjects: string[]; relatedDiscoverySlugs: string[]; externalSource?: string; reviewStatus: ReviewStatus };
export type ReferenceRecord = { slug: string; title: string; author: string; type: string; group: string; description: string; externalLink?: string; accessStatus: string; reviewStatus: ReviewStatus };
export type ReadingRecord = { slug: string; title: string; audience: string; author: string; description: string; accessStatus: string; externalLink?: string };

export const asset = (name: string) => `/assets/${name}`;
const slugify = (value: string) => value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const categoryRows = [
  ["partition-theory", "Partition Theory", "Partition generating functions, congruences, asymptotics and identities.", "math-icons/icon-math-partitions.svg"],
  ["mock-theta-functions", "Mock Theta Functions", "Ramanujan's final q-series and their later harmonic-Maass-form interpretation.", "math-icons/icon-math-theta-yantra.svg"],
  ["pi-formulas", "Formulas for pi", "Rapidly convergent reciprocal-pi series arising from modular and elliptic methods.", "math-icons/icon-math-pi-temple.svg"],
  ["ramanujan-theta-functions", "Ramanujan Theta Functions", "General theta functions, special theta functions and representation formulas.", "math-icons/icon-math-theta-yantra.svg"],
  ["modular-equations-elliptic-functions", "Modular Equations and Elliptic Functions", "Modular equations, singular moduli, class invariants and elliptic transformations.", "math-icons/icon-math-theta-yantra.svg"],
  ["rogers-ramanujan-identities", "Rogers-Ramanujan Identities", "The celebrated identities, partition interpretations and modular meaning.", "math-icons/icon-math-partitions.svg"],
  ["rogers-ramanujan-continued-fraction", "Rogers-Ramanujan Continued Fraction", "A continued fraction tied to q-products and modular equations.", "math-icons/icon-math-infinity-kolam.svg"],
  ["other-continued-fractions", "Other Continued Fractions", "Cubic, gamma-ratio, theta-quotient and modular-equation continued fractions.", "math-icons/icon-math-infinity-kolam.svg"],
  ["q-series-basic-hypergeometric-series", "q-Series and Basic Hypergeometric Series", "Bilateral series, q-binomial identities, partial theta functions and dissections.", "math-icons/icon-math-summation-diya.svg"],
  ["ramanujan-tau-function", "Ramanujan's Tau Function", "The tau function, discriminant modular form, congruences and later conjectures.", "math-icons/icon-math-tau-chakra.svg"],
  ["ramanujan-sums", "Ramanujan Sums", "Finite trigonometric sums and Ramanujan expansions in arithmetic analysis.", "math-icons/icon-math-summation-diya.svg"],
  ["highly-composite-numbers", "Highly Composite Numbers", "Highly composite and superior highly composite numbers.", "math-icons/icon-math-number-mandala.svg"],
  ["ramanujan-master-theorem", "Ramanujan's Master Theorem", "A theorem connecting formal coefficients with Mellin transforms.", "math-icons/icon-math-palm-theorem.svg"],
  ["infinite-series", "Infinite Series", "Ramanujan's broad work on convergent and transformed infinite series.", "math-icons/icon-math-infinity-kolam.svg"],
  ["infinite-products", "Infinite Products", "Eta products, q-products and transformations of infinite products.", "math-icons/icon-math-infinity-kolam.svg"],
  ["definite-integrals-integral-transforms", "Definite Integrals and Integral Transforms", "Definite integrals, Mellin transforms and special-function evaluations.", "math-icons/icon-math-palm-theorem.svg"],
  ["gamma-function-identities", "Gamma-Function Identities", "Gamma transformations, ratios and continued fractions.", "math-icons/icon-math-palm-theorem.svg"],
  ["factorial-approximation", "Ramanujan's Factorial Approximation", "Ramanujan's refinement of Stirling-type factorial approximation.", "math-icons/icon-math-number-mandala.svg"],
  ["summation-divergent-series", "Ramanujan Summation of Divergent Series", "Regularised summation methods, distinct from ordinary summation.", "math-icons/icon-math-summation-diya.svg"],
  ["bernoulli-numbers", "Bernoulli Numbers", "Identities and congruences involving Bernoulli numbers.", "math-icons/icon-math-summation-diya.svg"],
  ["divisor-functions", "Divisor Functions", "Divisor sums, convolution identities and arithmetic functions.", "math-icons/icon-math-number-mandala.svg"],
  ["quadratic-forms", "Representation of Integers by Quadratic Forms", "Representations by squares, triangular numbers and quadratic forms.", "math-icons/icon-math-number-mandala.svg"],
  ["prime-number-theory", "Prime-Number Theory", "Ramanujan primes and theorems related to prime distribution.", "math-icons/icon-math-number-mandala.svg"],
  ["prime-counting-approximation", "Approximation to the Prime-Counting Function", "Approximations and inequalities for prime-counting functions.", "math-icons/icon-math-number-mandala.svg"],
  ["diophantine-equations", "Diophantine Equations", "Integer equations including the Ramanujan-Nagell equation.", "math-icons/icon-math-number-mandala.svg"],
  ["nested-radicals", "Nested Radicals", "Infinite radicals and related identities.", "math-icons/icon-math-infinity-kolam.svg"],
  ["approximations-to-constants", "Approximations to Constants", "Striking approximations and near-integer phenomena.", "math-icons/icon-math-pi-temple.svg"],
  ["asymptotic-expansions", "Asymptotic Expansions", "Asymptotic formulas and expansion methods.", "math-icons/icon-math-infinity-kolam.svg"],
  ["ramanujan-polynomials", "Ramanujan Polynomials", "Polynomials associated with Ramanujan's transformations and identities.", "math-icons/icon-math-number-mandala.svg"],
  ["odd-zeta-values", "Odd Zeta Values", "Transformations and formulas involving odd zeta values.", "math-icons/icon-math-summation-diya.svg"],
  ["eisenstein-modular-series", "Eisenstein and Modular Series", "Eisenstein series, modular series and differential equations.", "math-icons/icon-math-tau-chakra.svg"],
  ["singular-moduli-class-invariants", "Singular Moduli and Class Invariants", "Singular moduli and class invariant evaluations.", "math-icons/icon-math-theta-yantra.svg"],
  ["near-integer-phenomena", "Near-Integer Phenomena", "Near integers such as e^(pi sqrt 163) and their modular explanation.", "math-icons/icon-math-pi-temple.svg"],
  ["combinatorial-identities", "Combinatorial Identities", "Partition, q-series and finite combinatorial identities.", "math-icons/icon-math-partitions.svg"],
  ["magic-squares", "Magic Squares", "Ramanujan's recreational arithmetic constructions.", "math-icons/icon-math-number-mandala.svg"],
  ["named-constants", "Named Constants Connected with Ramanujan", "Constants associated with Ramanujan, sometimes named later or historically adjacent.", "math-icons/icon-math-pi-temple.svg"],
  ["broader-named-concepts", "Broader Named Concepts Resulting from His Work", "Concepts named for Ramanujan or developed from his conjectures and influence.", "math-icons/icon-math-palm-theorem.svg"],
] as const;

export const categories: CategoryRecord[] = categoryRows.map(([slug, title, summary, icon]) => ({ slug, title, summary, icon: asset(icon) }));
export const taxonomy = categories.map((category) => category.title);

export const categoryHighlights = [
  { name: "Number Theory", href: "/discoveries/category/prime-number-theory", icon: asset("math-icons/icon-math-number-mandala.svg"), formula: "\\tau(n)=\\sum_{d\\mid n}1", description: "The deep mysteries of numbers and their hidden patterns." },
  { name: "Infinite Series", href: "/discoveries/category/infinite-series", icon: asset("math-icons/icon-math-infinity-kolam.svg"), formula: "1+\\frac{1}{1}+\\frac{1}{2}+\\frac{1}{3}+\\cdots", description: "Endless sums that unfold unexpected truths." },
  { name: "Continued Fractions", href: "/discoveries/category/other-continued-fractions", icon: asset("math-icons/icon-math-infinity-kolam.svg"), formula: "K=\\cfrac{1}{1+\\cfrac{1}{1+\\cfrac{1}{1+\\cdots}}}", description: "Beautiful expansions that continue without end." },
  { name: "Partitions", href: "/discoveries/category/partition-theory", icon: asset("math-icons/icon-math-partitions.svg"), formula: "p(5)=7", description: "Counting the ways numbers can be decomposed." },
  { name: "Mock Theta Functions", href: "/discoveries/category/mock-theta-functions", icon: asset("math-icons/icon-math-theta-yantra.svg"), formula: "f(q)=1+\\sum q^{n^2}", description: "Mysterious functions that puzzled and inspired." },
  { name: "Modular Forms", href: "/discoveries/category/eisenstein-modular-series", icon: asset("math-icons/icon-math-tau-chakra.svg"), formula: "f(\\tau+1)=f(\\tau)", description: "Symmetries that connect mathematics at the highest level." },
];

type Seed = [string, string, string, ResultType, string?, string?, string?, string?, string?];
const seedRows: Seed[] = [
  ["partition-generating-function", "Partition Generating Function", "partition-theory", "formula", "\\sum_{n=0}^{\\infty}p(n)q^n=\\prod_{m=1}^{\\infty}\\frac{1}{1-q^m}", "Euler knew the generating function; Ramanujan revealed extraordinary arithmetic properties of its coefficients.", "Intermediate"],
  ["partition-congruences", "Ramanujan's Partition Congruences", "partition-theory", "theorem", "p(5n+4)\\equiv0\\pmod 5", "Ramanujan discovered striking congruence properties of partition numbers.", "Intermediate", "1919", "Published Papers"],
  ["higher-power-partition-congruences", "Higher-Power Partition Congruences", "partition-theory", "contribution-family", "p(5^k n+\\delta_k)\\equiv0\\pmod {5^k}"],
  ["hardy-ramanujan-asymptotic-formula", "Hardy-Ramanujan Asymptotic Formula", "partition-theory", "formula", "p(n)\\sim\\frac{1}{4n\\sqrt3}e^{\\pi\\sqrt{2n/3}}", "A collaboration with G. H. Hardy giving the growth of p(n).", "Advanced", "1918", "Hardy-Ramanujan"],
  ["hardy-ramanujan-circle-method", "Hardy-Ramanujan Circle Method", "partition-theory", "method"],
  ["restricted-partition-identities", "Restricted Partition Identities", "partition-theory", "identity"],
  ["partition-rank-and-crank-context", "Partition Rank and Crank Context", "partition-theory", "concept", undefined, "Rank and crank interpretations were developed later to explain partition congruences combinatorially."],
  ["lost-notebook-partition-identities", "Partition Identities from the Lost Notebook", "partition-theory", "contribution-family", undefined, undefined, "Advanced", undefined, "Lost Notebook"],
  ["mock-theta-functions", "Mock Theta Functions", "mock-theta-functions", "function", "f(q)=\\sum_{n=0}^{\\infty}\\frac{q^{n^2}}{(-q;q)_n^2}", "Their modern harmonic-Maass-form interpretation came much later.", "Advanced", "1919-1920", "Lost Notebook"],
  ["third-order-mock-theta-functions", "Third-Order Mock Theta Functions", "mock-theta-functions", "function", "f(q)=1+\\sum_{n=1}^{\\infty}\\frac{q^{n^2}}{(1+q)^2\\cdots(1+q^n)^2}"],
  ["fifth-order-mock-theta-functions", "Fifth-Order Mock Theta Functions", "mock-theta-functions", "function"],
  ["seventh-order-mock-theta-functions", "Seventh-Order Mock Theta Functions", "mock-theta-functions", "function"],
  ["tenth-order-mock-theta-functions", "Tenth-Order Mock Theta Functions", "mock-theta-functions", "function"],
  ["radial-limit-behaviour", "Radial-Limit Behaviour", "mock-theta-functions", "concept"],
  ["connection-with-harmonic-maass-forms", "Connection with Harmonic Maass Forms", "mock-theta-functions", "concept", undefined, "This is a modern interpretation of Ramanujan's mock theta functions, not terminology he used."],
  ["ramanujan-one-over-pi-series", "Ramanujan's 1/pi Series", "pi-formulas", "series", "\\frac{1}{\\pi}=\\frac{2\\sqrt2}{9801}\\sum_{n=0}^{\\infty}\\frac{(4n)!(1103+26390n)}{(n!)^4 396^{4n}}", undefined, "Advanced", "1914", "Published Papers"],
  ["family-of-seventeen-one-over-pi-series", "Family of Seventeen 1/pi Series", "pi-formulas", "contribution-family"],
  ["ramanujan-sato-series-context", "Ramanujan-Sato Series Context", "pi-formulas", "concept", undefined, "Ramanujan-Sato series are later developments influenced by Ramanujan's 1/pi series."],
  ["modular-equation-methods-for-one-over-pi", "Modular-Equation Methods for 1/pi", "pi-formulas", "method"],
  ["ramanujan-general-theta-function", "Ramanujan's General Theta Function", "ramanujan-theta-functions", "function", "f(a,b)=\\sum_{n=-\\infty}^{\\infty}a^{n(n+1)/2}b^{n(n-1)/2}"],
  ["phi-of-q", "phi(q)", "ramanujan-theta-functions", "function", "\\varphi(q)=\\sum_{n=-\\infty}^{\\infty}q^{n^2}"],
  ["psi-of-q", "psi(q)", "ramanujan-theta-functions", "function", "\\psi(q)=\\sum_{n=0}^{\\infty}q^{n(n+1)/2}"],
  ["f-minus-q", "f(-q)", "ramanujan-theta-functions", "function", "f(-q)=\\prod_{n=1}^{\\infty}(1-q^n)"],
  ["theta-addition-subtraction-formulas", "Theta Addition and Subtraction Formulas", "ramanujan-theta-functions", "identity"],
  ["theta-product-representations", "Theta Product Representations", "ramanujan-theta-functions", "identity", "f(a,b)=(-a;ab)_\\infty(-b;ab)_\\infty(ab;ab)_\\infty"],
  ["theta-dissection-formulas", "Theta Dissection Formulas", "ramanujan-theta-functions", "method"],
  ["theta-function-quotients", "Theta-Function Quotients", "ramanujan-theta-functions", "formula"],
  ["representations-by-squares", "Representations by Squares", "quadratic-forms", "formula", "r_2(n)=4\\sum_{d\\mid n}\\chi(d)"],
  ["representations-by-triangular-numbers", "Representations by Triangular Numbers", "quadratic-forms", "formula"],
  ["first-rogers-ramanujan-identity", "First Rogers-Ramanujan Identity", "rogers-ramanujan-identities", "identity", "\\sum_{n=0}^{\\infty}\\frac{q^{n^2}}{(q;q)_n}=\\frac{1}{(q;q^5)_\\infty(q^4;q^5)_\\infty}", "Rogers discovered the identities earlier; Ramanujan independently rediscovered them and deepened their significance."],
  ["second-rogers-ramanujan-identity", "Second Rogers-Ramanujan Identity", "rogers-ramanujan-identities", "identity", "\\sum_{n=0}^{\\infty}\\frac{q^{n(n+1)}}{(q;q)_n}=\\frac{1}{(q^2;q^5)_\\infty(q^3;q^5)_\\infty}", "Rogers discovered the identities earlier; Ramanujan independently rediscovered them."],
  ["partition-interpretations", "Partition Interpretations", "rogers-ramanujan-identities", "concept"],
  ["rogers-ramanujan-identities", "Rogers-Ramanujan Identities", "rogers-ramanujan-identities", "contribution-family", undefined, "Historically connected to Rogers, Ramanujan and later Schur."],
  ["rogers-ramanujan-continued-fraction", "Rogers-Ramanujan Continued Fraction", "rogers-ramanujan-continued-fraction", "continued-fraction", "R(q)=q^{1/5}\\cfrac{1}{1+\\cfrac{q}{1+\\cfrac{q^2}{1+\\cdots}}}", "The continued fraction has historical connections to Rogers and Schur as well as Ramanujan."],
  ["product-form-continued-fraction", "Product Form of the Continued Fraction", "rogers-ramanujan-continued-fraction", "formula", "R(q)=q^{1/5}\\frac{(q;q^5)_\\infty(q^4;q^5)_\\infty}{(q^2;q^5)_\\infty(q^3;q^5)_\\infty}"],
  ["exact-values-modular-equations", "Exact Values and Modular Equations", "rogers-ramanujan-continued-fraction", "formula"],
  ["golden-ratio-connections", "Golden-Ratio Connections", "rogers-ramanujan-continued-fraction", "concept", "R(e^{-2\\pi})=\\sqrt{\\frac{5+\\sqrt5}{2}}-\\frac{1+\\sqrt5}{2}"],
  ["ramanujan-cubic-continued-fraction", "Ramanujan's Cubic Continued Fraction", "other-continued-fractions", "continued-fraction", "G(q)=\\cfrac{q^{1/3}}{1+\\cfrac{q+q^2}{1+\\cfrac{q^2+q^4}{1+\\cdots}}}"],
  ["ramanujan-gollnitz-gordon-continued-fraction", "Ramanujan-Gollnitz-Gordon Continued Fraction", "other-continued-fractions", "continued-fraction"],
  ["continued-fractions-gamma-ratios", "Continued Fractions for Gamma Ratios", "gamma-function-identities", "continued-fraction"],
  ["continued-fractions-theta-quotients", "Continued Fractions for Theta Quotients", "other-continued-fractions", "continued-fraction"],
  ["modular-equation-continued-fractions", "Continued Fractions Associated with Modular Equations", "other-continued-fractions", "continued-fraction"],
  ["exponential-trigonometric-continued-fractions", "Continued Fractions for Exponential and Trigonometric Functions", "other-continued-fractions", "continued-fraction"],
  ["ramanujan-one-psi-one-summation", "Ramanujan's 1 psi 1 Summation", "q-series-basic-hypergeometric-series", "theorem", "{}_1\\psi_1(a;b;q,z)=\\sum_{n=-\\infty}^{\\infty}\\frac{(a;q)_n}{(b;q)_n}z^n"],
  ["bilateral-basic-hypergeometric-series", "Bilateral Basic Hypergeometric Series", "q-series-basic-hypergeometric-series", "series"],
  ["partial-theta-functions", "Partial Theta Functions", "q-series-basic-hypergeometric-series", "function"],
  ["false-theta-functions", "False Theta Functions", "q-series-basic-hypergeometric-series", "function"],
  ["q-binomial-identities", "q-Binomial Identities", "q-series-basic-hypergeometric-series", "identity", "\\frac{1}{(z;q)_\\infty}=\\sum_{n=0}^{\\infty}\\frac{z^n}{(q;q)_n}"],
  ["q-series-dissections", "q-Series Dissections", "q-series-basic-hypergeometric-series", "method"],
  ["root-of-unity-identities", "Root-of-Unity Identities", "q-series-basic-hypergeometric-series", "identity"],
  ["infinite-product-transformations", "Infinite-Product Transformations", "infinite-products", "identity", "(a;q)_\\infty=\\prod_{k=0}^{\\infty}(1-aq^k)"],
  ["ramanujan-tau-function", "Ramanujan's Tau Function", "ramanujan-tau-function", "function", "\\Delta(q)=q\\prod_{n=1}^{\\infty}(1-q^n)^{24}=\\sum_{n=1}^{\\infty}\\tau(n)q^n", undefined, "Advanced", "1916", "Published Papers"],
  ["tau-multiplicativity", "Tau Multiplicativity", "ramanujan-tau-function", "conjecture", "\\tau(mn)=\\tau(m)\\tau(n)\\quad((m,n)=1)"],
  ["tau-prime-power-recurrence", "Tau Prime-Power Recurrence", "ramanujan-tau-function", "formula", "\\tau(p^{r+1})=\\tau(p)\\tau(p^r)-p^{11}\\tau(p^{r-1})"],
  ["ramanujan-petersson-conjecture", "Ramanujan-Petersson Conjecture", "ramanujan-tau-function", "conjecture", "|\\tau(p)|\\le 2p^{11/2}", "The modern theorem and naming developed after Ramanujan's original conjectural bounds."],
  ["tau-function-congruences", "Tau-Function Congruences", "ramanujan-tau-function", "formula", "\\tau(n)\\equiv\\sigma_{11}(n)\\pmod {691}"],
  ["ramanujan-sums", "Ramanujan Sums", "ramanujan-sums", "formula", "c_q(n)=\\sum_{\\substack{1\\le a\\le q\\\\(a,q)=1}}e^{2\\pi ian/q}"],
  ["ramanujan-expansions", "Ramanujan Expansions", "ramanujan-sums", "method", "f(n)\\sim\\sum_{q=1}^{\\infty}a_q c_q(n)"],
  ["highly-composite-numbers", "Highly Composite Numbers", "highly-composite-numbers", "concept", "m<n\\Rightarrow d(m)<d(n)", undefined, "Intermediate", "1915", "Published Papers"],
  ["superior-highly-composite-numbers", "Superior Highly Composite Numbers", "highly-composite-numbers", "concept"],
  ["divisor-functions", "Divisor Functions", "divisor-functions", "function", "\\sigma_k(n)=\\sum_{d\\mid n}d^k"],
  ["divisor-sum-convolution-identities", "Divisor-Sum Convolution Identities", "divisor-functions", "identity"],
  ["ramanujan-primes", "Ramanujan Primes", "prime-number-theory", "concept", "\\pi(x)-\\pi(x/2)\\ge n", "The term Ramanujan prime was introduced later and is based on Ramanujan's theorem.", "Intermediate", "1919"],
  ["prime-counting-approximations", "Prime-Counting Approximations", "prime-counting-approximation", "approximation", "\\pi(x)\\sim\\operatorname{Li}(x)"],
  ["ramanujan-master-theorem", "Ramanujan's Master Theorem", "ramanujan-master-theorem", "theorem", "\\int_0^\\infty x^{s-1}\\{\\lambda(0)-x\\lambda(1)+\\cdots\\}\\,dx=\\frac{\\pi}{\\sin\\pi s}\\lambda(-s)", undefined, "Advanced", "1918"],
  ["ramanujan-factorial-approximation", "Ramanujan's Factorial Approximation", "factorial-approximation", "approximation", "n!\\sim\\sqrt{\\pi}\\left(\\frac{n}{e}\\right)^n\\sqrt[6]{8n^3+4n^2+n+\\frac{1}{30}}"],
  ["ramanujan-summation", "Ramanujan Summation", "summation-divergent-series", "method", "1+2+3+\\cdots=-\\frac{1}{12}", "This is not an ordinary sum; it belongs only in regularisation or summation-method contexts."],
  ["gamma-function-identities", "Gamma-Function Identities", "gamma-function-identities", "identity", "\\Gamma(z+1)=z\\Gamma(z)"],
  ["definite-integrals", "Definite Integrals", "definite-integrals-integral-transforms", "formula"],
  ["mellin-transforms", "Mellin Transforms", "definite-integrals-integral-transforms", "method", "\\mathcal{M}\\{f\\}(s)=\\int_0^\\infty f(x)x^{s-1}\\,dx"],
  ["asymptotic-expansions", "Asymptotic Expansions", "asymptotic-expansions", "method"],
  ["odd-zeta-value-transformations", "Odd Zeta-Value Transformations", "odd-zeta-values", "formula"],
  ["formula-for-zeta-3", "Formula for zeta(3)", "odd-zeta-values", "formula", "\\zeta(3)=\\sum_{n=1}^{\\infty}\\frac{1}{n^3}"],
  ["bernoulli-number-identities", "Bernoulli-Number Identities", "bernoulli-numbers", "identity", "\\frac{x}{e^x-1}=\\sum_{n=0}^{\\infty}B_n\\frac{x^n}{n!}"],
  ["ramanujan-polynomials", "Ramanujan Polynomials", "ramanujan-polynomials", "concept"],
  ["ramanujan-nagell-equation", "Ramanujan-Nagell Equation", "diophantine-equations", "equation", "x^2+7=2^n", "Ramanujan conjectured the equation's solutions; Trygve Nagell later proved the result.", "Intermediate", "1913"],
  ["hardy-ramanujan-number-1729", "Hardy-Ramanujan Number 1729", "named-constants", "concept", "1729=1^3+12^3=9^3+10^3", "Ramanujan did not discover 1729 during the taxi conversation; he immediately recognized its special property.", "Accessible"],
  ["infinite-nested-radical", "Infinite Nested Radical", "nested-radicals", "formula", "\\sqrt{1+2\\sqrt{1+3\\sqrt{1+\\cdots}}}=3"],
  ["general-nested-radical-identities", "General Nested-Radical Identities", "nested-radicals", "contribution-family"],
  ["sums-of-squares", "Sums of Squares", "quadratic-forms", "formula"],
  ["quadratic-forms", "Quadratic Forms", "quadratic-forms", "contribution-family"],
  ["landau-ramanujan-constant", "Landau-Ramanujan Constant", "named-constants", "concept", "K=\\frac{1}{\\sqrt2}\\prod_{p\\equiv3\\ (4)}\\left(1-p^{-2}\\right)^{-1/2}", "The Landau-Ramanujan theorem is primarily due to Landau, while Ramanujan obtained related ideas."],
  ["ramanujan-soldner-constant", "Ramanujan-Soldner Constant", "named-constants", "concept", undefined, "The constant was first discovered by Soldner; its Ramanujan association is historical and nomenclatural."],
  ["near-integer-e-pi-sqrt-163", "Near-Integer e^(pi sqrt 163)", "near-integer-phenomena", "approximation", "e^{\\pi\\sqrt{163}}\\approx 262537412640768743.99999999999925", "This near-integer is also historically associated with Charles Hermite."],
  ["ramanujan-magic-square", "Ramanujan's Magic Square", "magic-squares", "concept", "22+12+18+87=139", undefined, "Accessible"],
  ["eisenstein-series-e2", "Eisenstein Series E2", "eisenstein-modular-series", "series", "E_2(q)=1-24\\sum_{n=1}^{\\infty}\\sigma_1(n)q^n"],
  ["eisenstein-series-e4", "Eisenstein Series E4", "eisenstein-modular-series", "series", "E_4(q)=1+240\\sum_{n=1}^{\\infty}\\sigma_3(n)q^n"],
  ["eisenstein-series-e6", "Eisenstein Series E6", "eisenstein-modular-series", "series", "E_6(q)=1-504\\sum_{n=1}^{\\infty}\\sigma_5(n)q^n"],
  ["ramanujan-differential-equations", "Ramanujan Differential Equations", "eisenstein-modular-series", "formula", "q\\frac{dE_2}{dq}=\\frac{E_2^2-E_4}{12}"],
  ["singular-modulus-evaluations", "Singular Modulus Evaluations", "singular-moduli-class-invariants", "formula"],
  ["singular-moduli", "Singular Moduli", "singular-moduli-class-invariants", "concept"],
  ["class-invariants", "Class Invariants", "singular-moduli-class-invariants", "concept"],
  ["eta-quotients", "Eta Quotients", "infinite-products", "formula", "\\eta(\\tau)=q^{1/24}\\prod_{n=1}^{\\infty}(1-q^n)"],
  ["modular-transformations", "Modular Transformations", "modular-equations-elliptic-functions", "method", "\\tau\\mapsto\\frac{a\\tau+b}{c\\tau+d}"],
  ["ramanujan-graphs", "Ramanujan Graphs", "broader-named-concepts", "concept", undefined, "Ramanujan graphs were developed after his death and named through their connection with the Ramanujan conjecture."],
  ["ramanujan-complexes", "Ramanujan Complexes", "broader-named-concepts", "concept", undefined, "Ramanujan complexes are later mathematical structures named by analogy with Ramanujan graphs."],
  ["combinatorial-identities", "Combinatorial Identities", "combinatorial-identities", "identity"],
  ["approximations-to-constants", "Approximations to Constants", "approximations-to-constants", "approximation"],
  ["infinite-series-transformations", "Infinite Series Transformations", "infinite-series", "series"],
  ["infinite-products", "Infinite Products", "infinite-products", "contribution-family"],
  ["partition-dissection-formulas", "Partition Dissection Formulas", "partition-theory", "method", undefined, "Dissections of generating functions are a recurring tool in partition congruence work."],
  ["partition-generating-function-dissections", "5-, 7-, and 11-Dissections of Partition Series", "partition-theory", "contribution-family"],
  ["partition-congruence-modulo-powers", "Partition Congruences Modulo Prime Powers", "partition-theory", "contribution-family", "p(25n+24)\\equiv0\\pmod {25}"],
  ["ramanujan-q-series-for-partitions", "q-Series for Partition Identities", "partition-theory", "series"],
  ["partition-asymptotic-refinements", "Refinements of Partition Asymptotics", "partition-theory", "contribution-family"],
  ["mock-theta-function-f0", "Mock Theta Function f_0(q)", "mock-theta-functions", "function"],
  ["mock-theta-function-f1", "Mock Theta Function f_1(q)", "mock-theta-functions", "function"],
  ["mock-theta-function-omega", "Mock Theta Function omega(q)", "mock-theta-functions", "function"],
  ["mock-theta-function-nu", "Mock Theta Function nu(q)", "mock-theta-functions", "function"],
  ["mock-theta-transformation-behaviour", "Transformation Behaviour of Mock Theta Functions", "mock-theta-functions", "concept", undefined, "The modular meaning of this behaviour was clarified only much later."],
  ["mock-theta-asymptotics", "Asymptotics of Mock Theta Functions", "mock-theta-functions", "contribution-family"],
  ["elliptic-integral-modular-parameters", "Elliptic-Integral Modular Parameters", "modular-equations-elliptic-functions", "concept"],
  ["modular-equations-of-degree-three", "Modular Equations of Degree 3", "modular-equations-elliptic-functions", "identity"],
  ["modular-equations-of-degree-five", "Modular Equations of Degree 5", "modular-equations-elliptic-functions", "identity"],
  ["modular-equations-of-degree-seven", "Modular Equations of Degree 7", "modular-equations-elliptic-functions", "identity"],
  ["alpha-beta-modular-relations", "Alpha-Beta Modular Relations", "modular-equations-elliptic-functions", "formula"],
  ["elliptic-function-transformations", "Elliptic-Function Transformations", "modular-equations-elliptic-functions", "method"],
  ["elliptic-modular-approximations-to-pi", "Elliptic-Modular Approximations to pi", "pi-formulas", "method"],
  ["chudnovsky-ramanujan-pi-context", "Chudnovsky-Ramanujan pi Context", "pi-formulas", "concept", undefined, "Later algorithms for pi build on the modular world opened by Ramanujan's 1/pi series rather than being his own work."],
  ["ramanujan-class-invariants-for-pi", "Class Invariants in 1/pi Series", "pi-formulas", "concept"],
  ["ramanujan-theta-identities", "Ramanujan Theta Identities", "ramanujan-theta-functions", "identity"],
  ["theta-function-modular-transformations", "Theta-Function Modular Transformations", "ramanujan-theta-functions", "method"],
  ["theta-function-representation-formulas", "Theta-Function Representation Formulas", "ramanujan-theta-functions", "formula"],
  ["jacobi-triple-product-context", "Jacobi Triple Product Context", "ramanujan-theta-functions", "concept", "f(a,b)=(-a;ab)_\\infty(-b;ab)_\\infty(ab;ab)_\\infty", "Ramanujan used and transformed theta-product ideas in his own notation; the classical theorem predates him."],
  ["schur-partition-theorem-context", "Schur Partition Theorem Context", "rogers-ramanujan-identities", "concept", undefined, "Schur later gave partition-theoretic interpretations connected with Rogers-Ramanujan identities."],
  ["rogers-ramanujan-product-identities", "Rogers-Ramanujan Product Identities", "rogers-ramanujan-identities", "identity"],
  ["rogers-ramanujan-modular-relations", "Rogers-Ramanujan Modular Relations", "rogers-ramanujan-identities", "identity"],
  ["ramanujan-selberg-continued-fractions", "Ramanujan-Selberg Continued Fractions", "other-continued-fractions", "continued-fraction", undefined, "This is a historically associated named continued-fraction family; exact attribution needs source review."],
  ["continued-fractions-for-eulerian-functions", "Continued Fractions for Eulerian Functions", "other-continued-fractions", "continued-fraction"],
  ["continued-fraction-exact-values", "Exact Values of Ramanujan Continued Fractions", "other-continued-fractions", "formula"],
  ["q-pochhammer-products", "q-Pochhammer Product Formulas", "q-series-basic-hypergeometric-series", "formula", "(a;q)_n=\\prod_{k=0}^{n-1}(1-aq^k)"],
  ["basic-hypergeometric-transformations", "Basic Hypergeometric Transformations", "q-series-basic-hypergeometric-series", "method"],
  ["bilateral-series-transformations", "Bilateral Series Transformations", "q-series-basic-hypergeometric-series", "method"],
  ["ramanujan-q-continued-fractions", "q-Continued Fractions", "q-series-basic-hypergeometric-series", "continued-fraction"],
  ["partial-theta-identities", "Partial Theta Identities", "q-series-basic-hypergeometric-series", "identity"],
  ["false-theta-identities", "False Theta Identities", "q-series-basic-hypergeometric-series", "identity"],
  ["tau-generating-function", "Generating Function for tau(n)", "ramanujan-tau-function", "formula", "\\Delta(q)=q\\prod_{n=1}^{\\infty}(1-q^n)^{24}"],
  ["tau-mod-691-congruence", "Tau Congruence Modulo 691", "ramanujan-tau-function", "formula", "\\tau(n)\\equiv\\sigma_{11}(n)\\pmod {691}"],
  ["tau-ramanujan-congruences", "Further Tau Congruences", "ramanujan-tau-function", "contribution-family"],
  ["ramanujan-divisor-congruences", "Divisor-Function Congruences", "divisor-functions", "identity"],
  ["sum-of-powers-identities", "Sums of Powers and Divisor Sums", "divisor-functions", "identity"],
  ["sigma-function-identities", "Sigma-Function Identities", "divisor-functions", "identity", "\\sigma_k(n)=\\sum_{d\\mid n}d^k"],
  ["prime-interval-theorem", "Ramanujan's Prime-Interval Theorem", "prime-number-theory", "theorem", undefined, "The later term Ramanujan prime grows out of Ramanujan's theorem on primes in intervals."],
  ["prime-counting-inequalities", "Prime-Counting Inequalities", "prime-counting-approximation", "contribution-family"],
  ["logarithmic-integral-corrections", "Logarithmic-Integral Corrections", "prime-counting-approximation", "approximation"],
  ["master-theorem-mellin-context", "Mellin-Transform Context of the Master Theorem", "ramanujan-master-theorem", "method"],
  ["ramanujan-integral-evaluations", "Ramanujan Integral Evaluations", "definite-integrals-integral-transforms", "contribution-family"],
  ["frullani-type-integrals", "Frullani-Type Integral Evaluations", "definite-integrals-integral-transforms", "formula"],
  ["gamma-beta-integral-identities", "Gamma and Beta Integral Identities", "gamma-function-identities", "identity"],
  ["gamma-ratio-identities", "Gamma-Ratio Identities", "gamma-function-identities", "identity"],
  ["stirling-series-refinements", "Stirling-Series Refinements", "factorial-approximation", "approximation"],
  ["ramanujan-constant-in-factorial-formula", "Ramanujan Constant in Factorial Approximation", "factorial-approximation", "concept"],
  ["ramanujan-summation-formula", "Ramanujan Summation Formula", "summation-divergent-series", "method"],
  ["regularized-series-values", "Regularized Series Values", "summation-divergent-series", "contribution-family"],
  ["bernoulli-congruences", "Bernoulli-Number Congruences", "bernoulli-numbers", "identity"],
  ["bernoulli-polynomial-identities", "Bernoulli-Polynomial Identities", "bernoulli-numbers", "identity"],
  ["zeta-transformation-formulas", "Zeta-Function Transformation Formulas", "odd-zeta-values", "formula"],
  ["odd-zeta-modular-relations", "Odd-Zeta Modular Relations", "odd-zeta-values", "concept"],
  ["ramanujan-polynomial-identities", "Ramanujan Polynomial Identities", "ramanujan-polynomials", "identity"],
  ["ramanujan-polynomial-recurrences", "Ramanujan Polynomial Recurrences", "ramanujan-polynomials", "formula"],
  ["diophantine-equation-families", "Diophantine Equation Families", "diophantine-equations", "contribution-family"],
  ["taxicab-number-context", "Taxicab Number Context", "named-constants", "concept", "1729=1^3+12^3=9^3+10^3"],
  ["nested-radical-continued-forms", "Nested Radical Continued Forms", "nested-radicals", "formula"],
  ["near-integer-modular-explanation", "Modular Explanation of Near-Integer Phenomena", "near-integer-phenomena", "concept"],
  ["ramanujan-class-number-near-integers", "Class-Number Near Integers", "near-integer-phenomena", "concept"],
  ["ramanujan-combinatorial-sums", "Combinatorial Sums", "combinatorial-identities", "identity"],
  ["finite-combinatorial-identities", "Finite Combinatorial Identities", "combinatorial-identities", "identity"],
  ["magic-square-birthday-construction", "Birthday Magic Square Construction", "magic-squares", "concept", "22+12+18+87=139"],
  ["eisenstein-series-congruences", "Eisenstein-Series Congruences", "eisenstein-modular-series", "identity"],
  ["quasimodular-e2-transformations", "Quasimodular Transformations of E2", "eisenstein-modular-series", "concept"],
  ["modular-differential-system", "Ramanujan's Modular Differential System", "eisenstein-modular-series", "formula", "q\\frac{dE_4}{dq}=\\frac{E_2E_4-E_6}{3}"],
  ["singular-moduli-class-equations", "Class Equations for Singular Moduli", "singular-moduli-class-invariants", "contribution-family"],
  ["ramanujan-invariants-g-and-g", "Ramanujan Class Invariants G_n and g_n", "singular-moduli-class-invariants", "concept"],
  ["eta-product-identities", "Eta-Product Identities", "infinite-products", "identity"],
  ["eta-transformation-formulas", "Eta-Transformation Formulas", "infinite-products", "formula"],
  ["ramanujan-moonshine-context", "Ramanujan-Moonshine Context", "broader-named-concepts", "concept", undefined, "Moonshine is a later field; the connection belongs to the afterlife of modular forms, not Ramanujan's own terminology."],
  ["quantum-modular-forms-context", "Quantum Modular Forms Context", "broader-named-concepts", "concept", undefined, "Quantum modular forms are a modern development influenced by q-series and mock modular themes."],
];

const categoryBySlug = new Map(categories.map((category) => [category.slug, category]));
const featured = new Set(["partition-congruences", "hardy-ramanujan-asymptotic-formula", "mock-theta-functions", "ramanujan-one-over-pi-series", "rogers-ramanujan-identities", "rogers-ramanujan-continued-fraction", "ramanujan-tau-function", "ramanujan-sums", "highly-composite-numbers", "ramanujan-master-theorem", "ramanujan-differential-equations"]);
const sourceProfiles: Record<string, { title: string; citation: string; url?: string }> = {
  "Published Papers": {
    title: "Collected Papers of Srinivasa Ramanujan",
    citation: "Printed paper record cross-linked with the published works index and the Collected Papers of Srinivasa Ramanujan.",
    url: "https://archive.org/details/collectedpaperso033642mbp",
  },
  "Lost Notebook": {
    title: "Ramanujan's Lost Notebook",
    citation: "Lost Notebook family entry; exact page-level annotation should be checked against Andrews-Berndt before quotation.",
  },
  "Hardy-Ramanujan": {
    title: "Hardy-Ramanujan collaboration record",
    citation: "Collaborative Hardy-Ramanujan result, cross-linked with the published-paper and Cambridge-period archive.",
  },
  "Source catalogue": {
    title: "Ramanujan Universe contribution catalogue",
    citation: "Editorial catalogue entry derived from the contribution taxonomy; flagged for source review when no primary paper or notebook pointer is attached.",
  },
};

export const formulas: FormulaEntry[] = seedRows.filter((row) => row[4]).map(([slug, title, categorySlug, resultType, latex, note, difficulty, , sourceType]) => {
  const category = categoryBySlug.get(categorySlug);
  return {
    slug: `${slug}-formula`,
    title: `${title} formula`,
    latex: latex ?? "",
    displayMode: true,
    plainLanguageMeaning: note ?? `A central formula or notation associated with ${title}.`,
    conditions: slug === "ramanujan-summation" ? ["Regularised summation only; not an ordinary convergent sum."] : undefined,
    discoverySlug: slug,
    category: category?.title ?? categorySlug,
    resultType,
    difficulty: (difficulty as Difficulty) ?? "Advanced",
    sourceType: sourceType ?? "Source catalogue",
    tags: [resultType, category?.title ?? categorySlug, title],
  };
});

const relatedMap: Record<string, string[]> = {
  "partition-congruences": ["partition-generating-function", "hardy-ramanujan-asymptotic-formula", "hardy-ramanujan-circle-method", "mock-theta-functions", "tau-function-congruences"],
  "ramanujan-one-over-pi-series": ["modular-equation-methods-for-one-over-pi", "singular-modulus-evaluations", "class-invariants", "ramanujan-sato-series-context"],
  "rogers-ramanujan-identities": ["partition-interpretations", "q-binomial-identities", "rogers-ramanujan-continued-fraction", "infinite-product-transformations"],
  "ramanujan-tau-function": ["tau-multiplicativity", "tau-prime-power-recurrence", "ramanujan-petersson-conjecture", "tau-function-congruences"],
  "mock-theta-functions": ["third-order-mock-theta-functions", "fifth-order-mock-theta-functions", "connection-with-harmonic-maass-forms"],
};

export const discoveries: Discovery[] = seedRows.map(([slug, title, categorySlug, resultType, , note, difficulty, year, sourceType]) => {
  const category = categoryBySlug.get(categorySlug);
  const formulaSlug = formulas.find((formula) => formula.discoverySlug === slug)?.slug;
  const isHistorical = Boolean(note?.includes("later") || note?.includes("not") || note?.includes("Rogers") || note?.includes("Landau") || note?.includes("Soldner") || note?.includes("Hermite") || note?.includes("Nagell"));
  const sourceProfile = sourceProfiles[sourceType ?? "Source catalogue"];
  return {
    slug,
    title,
    alternateNames: title.includes("1/pi") ? ["Ramanujan's reciprocal pi series", "1/pi series"] : undefined,
    category: category?.title ?? categorySlug,
    categorySlug,
    resultType,
    year,
    attribution: isHistorical ? note : undefined,
    historicalQualification: isHistorical ? note : undefined,
    summary: note && !isHistorical ? note : `${title} is catalogued as a ${resultType.replace("-", " ")} in ${category?.title ?? categorySlug}.`,
    introduction: `${title} belongs to the Phase 2 contribution catalogue of major Ramanujan discoveries, named results and formula families. The entry avoids claiming that all 3,900 notebook results are individually transcribed.`,
    formulaSlugs: formulaSlug ? [formulaSlug] : [],
    keyResults: [{ heading: "Catalogue Position", body: `This entry sits in ${category?.title ?? categorySlug}, one of the 37 Phase 2 contribution areas.` }],
    explanation: [{ heading: "Reading the Entry", body: "Formula panels show canonical notation where available. Broad families are grouped editorially rather than expanded into unsupported individual notebook entries." }],
    historicalContext: isHistorical ? [{ heading: "Historical Qualification", body: note ?? "" }] : undefined,
    sourceType: sourceType ?? "Source catalogue",
    sourceTitle: sourceProfile.title,
    sourceCitation: sourceProfile.citation,
    sourceUrl: sourceProfile.url,
    notebookReference: sourceType === "Lost Notebook" ? "Lost Notebook" : undefined,
    relatedDiscoverySlugs: relatedMap[slug] ?? [],
    relatedFormulaSlugs: formulaSlug ? [formulaSlug] : [],
    featured: featured.has(slug),
    difficulty: (difficulty as Difficulty) ?? "Advanced",
    reviewStatus: sourceType ? "source-supplied" : "needs-review",
  };
});

const conceptRows = [
  ["ramanujan-sums", "Ramanujan Sums", "personally formulated"],
  ["ramanujan-expansions", "Ramanujan Expansions", "personally formulated"],
  ["ramanujan-primes", "Ramanujan Primes", "named later"],
  ["ramanujan-graphs", "Ramanujan Graphs", "named later"],
  ["ramanujan-complexes", "Ramanujan Complexes", "named later"],
  ["ramanujan-general-theta-function", "Ramanujan Theta Function", "personally formulated"],
  ["ramanujan-tau-function", "Ramanujan Tau Function", "personally formulated"],
  ["ramanujan-petersson-conjecture", "Ramanujan Conjecture", "named later"],
  ["ramanujan-petersson-conjecture", "Ramanujan-Petersson Conjecture", "collaborative"],
  ["ramanujan-differential-equations", "Ramanujan Differential Equations", "personally formulated"],
  ["ramanujan-master-theorem", "Ramanujan's Master Theorem", "personally formulated"],
  ["ramanujan-summation", "Ramanujan Summation", "personally formulated"],
  ["ramanujan-nagell-equation", "Ramanujan-Nagell Equation", "historically associated"],
  ["ramanujan-sato-series-context", "Ramanujan-Sato Series", "named later"],
  ["ramanujan-gollnitz-gordon-continued-fraction", "Ramanujan-Gollnitz-Gordon Continued Fraction", "historically associated"],
  ["rogers-ramanujan-identities", "Rogers-Ramanujan Identities", "independently rediscovered"],
  ["rogers-ramanujan-continued-fraction", "Rogers-Ramanujan Continued Fraction", "historically associated"],
  ["hardy-ramanujan-asymptotic-formula", "Hardy-Ramanujan Asymptotic Formula", "collaborative"],
  ["hardy-ramanujan-asymptotic-formula", "Hardy-Ramanujan Theorem", "collaborative"],
  ["hardy-ramanujan-circle-method", "Hardy-Ramanujan Circle Method", "collaborative"],
  ["hardy-ramanujan-number-1729", "Hardy-Ramanujan Number", "historically associated"],
  ["landau-ramanujan-constant", "Landau-Ramanujan Constant", "historically associated"],
  ["ramanujan-soldner-constant", "Ramanujan-Soldner Constant", "historically associated"],
  ["ramanujan-polynomials", "Ramanujan Polynomials", "named later"],
  ["ramanujan-factorial-approximation", "Ramanujan's Factorial Approximation", "personally formulated"],
  ["definite-integrals", "Ramanujan's Integral", "historically associated"],
  ["partition-congruences", "Ramanujan Congruences", "personally formulated"],
  ["modular-equation-methods-for-one-over-pi", "Ramanujan Modular Equations", "personally formulated"],
  ["ramanujan-one-psi-one-summation", "Ramanujan's 1 psi 1 Summation", "personally formulated"],
  ["infinite-nested-radical", "Ramanujan's Nested-Radical Identities", "personally formulated"],
  ["ramanujan-selberg-continued-fractions", "Ramanujan-Selberg Continued Fractions", "historically associated"],
  ["tau-generating-function", "Ramanujan Discriminant Function", "personally formulated"],
  ["prime-interval-theorem", "Ramanujan Prime-Interval Theorem", "personally formulated"],
  ["q-pochhammer-products", "Ramanujan q-Series Products", "historically associated"],
  ["ramanujan-invariants-g-and-g", "Ramanujan Class Invariants", "personally formulated"],
  ["ramanujan-moonshine-context", "Ramanujan Moonshine Context", "named later"],
  ["quantum-modular-forms-context", "Quantum Modular Forms Context", "named later"],
] as const;

export const namedConcepts: NamedConcept[] = conceptRows.map(([discoverySlug, title, status]) => {
  const discovery = discoveries.find((item) => item.slug === discoverySlug);
  return {
    slug: slugify(title),
    title,
    categorySlug: discovery?.categorySlug ?? "broader-named-concepts",
    status,
    summary: discovery?.historicalQualification ?? discovery?.summary ?? `${title} is a named concept connected with Ramanujan's work.`,
    discoverySlug,
    formulaSlug: discovery?.formulaSlugs[0],
    reviewStatus: discovery?.reviewStatus ?? "needs-review",
  };
});

export function getDiscovery(slug: string) {
  return discoveries.find((discovery) => discovery.slug === slug);
}
export function getFormula(slug: string) {
  return formulas.find((formula) => formula.slug === slug);
}
export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
export function getNamedConcept(slug: string) {
  return namedConcepts.find((concept) => concept.slug === slug);
}

export const peopleCards = [
  { title: "Namagiri Devi and His Faith", image: asset("namagiri-devi-shrine.png"), alt: "Namagiri Devi shrine image", text: "Ramanujan was deeply spiritual and connected his mathematical inspiration with Namagiri Devi." },
  { title: "G. H. Hardy", image: asset("gh-hardy-portrait.png"), alt: "Portrait of G. H. Hardy", text: "The Cambridge mathematician who recognized Ramanujan's genius and championed his work." },
  { title: "Janaki Ammal", image: asset("janaki-ammal-portrait.png"), alt: "Portrait of Janaki Ammal", text: "Ramanujan's wife, who stood by him through poverty, separation, illness and glory." },
  { title: "The Notebooks", image: asset("ramanujan-three-notebooks.png"), alt: "Ramanujan notebooks", text: "Three notebooks filled with thousands of original results that continue to inspire research." },
  { title: "The Lost Notebook", image: asset("ramanujan-lost-notebook.png"), alt: "The lost notebook", text: "A notebook from his final illness whose pages still shape modern mathematics." },
];

export const timeline = [
  ["1887-1903", "A Gift Revealed", "Born in Erode and raised in Kumbakonam, Ramanujan showed extraordinary ability in mathematics from a young age."],
  ["1903-1912", "Years of Struggle", "Financial hardship, limited formal education, and personal challenges marked this period. Mathematics remained his refuge and purpose."],
  ["1913", "The Letter That Changed Everything", "Ramanujan wrote to G. H. Hardy at Cambridge, enclosing results from his notebooks. Hardy recognized the brilliance within."],
  ["1914-1919", "Cambridge and Hardy", "At Cambridge, Ramanujan collaborated with Hardy and produced pathbreaking work on number theory, infinite series, partitions and continued fractions."],
  ["1918", "Fellow of the Royal Society", "In recognition of his extraordinary contributions, Ramanujan was elected Fellow of the Royal Society."],
  ["1919-1920", "Return to India", "Ailing and worn by years of illness, Ramanujan returned to India in 1919 and died on 26 April 1920 in Kumbakonam."],
  ["After 1920", "An Immortal Legacy", "Though his life was short, his ideas transformed mathematics and continue to shape research."],
];

export const notebooks: NotebookRecord[] = [
  {
    slug: "three-notebooks",
    title: "The Three Notebooks",
    subtitle: "A manuscript archive of formulas, identities and conjectures recorded with astonishing compression.",
    image: asset("ramanujan-three-notebooks.png"),
    summary: "Ramanujan's three notebooks contain a vast body of results, many written without the formal proofs expected in printed papers. They preserve the working trace of a mind moving rapidly through identities, transformations, approximations and number-theoretic patterns.",
    relatedDiscoverySlugs: ["partition-congruences", "ramanujan-general-theta-function", "ramanujan-master-theorem", "rogers-ramanujan-continued-fraction", "gamma-function-identities", "infinite-nested-radical"],
    reviewStatus: "source-supplied",
    sections: [
      { heading: "Recorded Results and Proofs", body: "The notebooks preserve results in a compact form. This site distinguishes a recorded result from a proof and does not claim exact notebook attribution unless the supplied source confirms it." },
      { heading: "Mathematical Scope", body: "The notebooks range across infinite series, infinite products, continued fractions, modular equations, gamma-function identities, definite integrals, partition identities and asymptotic expansions." },
      { heading: "Later Editing and Study", body: "Editors and mathematicians after Ramanujan worked to verify, annotate and place many notebook entries into the language of modern mathematics." },
      { heading: "How to Read Them", body: "A notebook entry often functions like a compressed research signal: a formula, identity or transformation appears with little explanation, leaving later readers to reconstruct hypotheses, domains of validity and proofs." },
      { heading: "Why They Matter", body: "The notebooks are not only a list of isolated formulas. They show recurring methods, preferred transformations and deep connections among q-series, modular equations, continued fractions and arithmetic functions." },
      { heading: "Editorial Caution", body: "This archive treats the notebooks as a guide to Ramanujan's mathematical world while avoiding page-level or manuscript-level claims that are not directly supported by the supplied source material." },
    ],
  },
  {
    slug: "lost-notebook",
    title: "The Lost Notebook",
    subtitle: "Ramanujan's final mathematical ideas, and a legacy rediscovered.",
    image: asset("ramanujan-lost-notebook.png"),
    summary: "The Lost Notebook is associated with Ramanujan's final period and contains material that later became central to mock theta functions, q-series and related modern research. Its afterlife shows how a manuscript can keep generating mathematics long after its author is gone.",
    relatedDiscoverySlugs: ["mock-theta-functions", "third-order-mock-theta-functions", "partial-theta-functions", "false-theta-functions", "lost-notebook-partition-identities", "connection-with-harmonic-maass-forms"],
    reviewStatus: "source-supplied",
    sections: [
      { heading: "Final Period", body: "The material is connected with Ramanujan's last years, including the work he described to Hardy shortly before his death." },
      { heading: "Rediscovery", body: "George Andrews found the manuscript material in the 1970s, bringing renewed attention to Ramanujan's final q-series work." },
      { heading: "Mathematical Importance", body: "Mock theta functions, partial theta functions, false theta functions, continued fractions and partition identities from this circle of ideas continue to influence research." },
      { heading: "A Late Style", body: "The Lost Notebook is especially associated with q-series phenomena whose modular meaning was not fully visible in Ramanujan's own terminology. That gap between notation and later theory is part of its fascination." },
      { heading: "From Manuscript to Modern Theory", body: "Modern work connected parts of this material with mock modular forms and harmonic Maass forms. This site marks those connections as later interpretation, not as language Ramanujan himself used." },
      { heading: "Research Pathway", body: "A good route through this material is to begin with mock theta functions, then compare partial theta functions, false theta functions and the surrounding q-series identities." },
    ],
  },
];

export const letters: LetterRecord[] = [
  {
    slug: "ramanujan-to-hardy-1913",
    title: "Ramanujan's 1913 Letter to G. H. Hardy",
    date: "16 January 1913",
    sender: "Srinivasa Ramanujan",
    recipient: "G. H. Hardy",
    image: asset("ramanujan-letter-to-hardy.png"),
    context: "From Madras, Ramanujan contacted Hardy with a selection of striking results from his notebooks after earlier attempts to find support had brought limited success.",
    significance: "Hardy's recognition of the letter changed Ramanujan's life and led to the Cambridge collaboration.",
    citation: "Historical correspondence between S. Ramanujan and G. H. Hardy, 1913.",
    relatedDiscoverySlugs: ["hardy-ramanujan-asymptotic-formula", "hardy-ramanujan-circle-method", "partition-congruences", "ramanujan-one-over-pi-series"],
    relatedLinks: [{ label: "G. H. Hardy", href: "/life/gh-hardy" }, { label: "Cambridge Years", href: "/life/cambridge-years" }, { label: "Biography", href: "/life" }],
    reviewStatus: "source-supplied",
  },
  {
    slug: "final-letter-to-hardy",
    title: "Final Letter to Hardy on Mock Theta Functions",
    date: "January 1920",
    sender: "Srinivasa Ramanujan",
    recipient: "G. H. Hardy",
    image: asset("ramanujan-letter-to-hardy.png"),
    context: "During his final period in India, Ramanujan wrote to Hardy about functions he called mock theta functions.",
    significance: "The letter announced a mysterious class of q-series whose full modern interpretation emerged much later through mock modular and harmonic Maass form theory.",
    citation: "S. Ramanujan's final correspondence with G. H. Hardy concerning mock theta functions, 1920.",
    relatedDiscoverySlugs: ["mock-theta-functions", "third-order-mock-theta-functions", "partial-theta-functions", "false-theta-functions", "connection-with-harmonic-maass-forms"],
    relatedLinks: [{ label: "Lost Notebook", href: "/notebooks/lost-notebook" }, { label: "Return to India", href: "/life/return-to-india" }, { label: "q-Series", href: "/discoveries/category/q-series-basic-hypergeometric-series" }],
    reviewStatus: "source-supplied",
  },
];

export const lifeProfiles: LifeProfile[] = [
  {
    slug: "namagiri-devi-and-faith",
    title: "Namagiri Devi and His Faith",
    subtitle: "Devotion, intuition and the limits of historical evidence.",
    image: asset("namagiri-devi-shrine.png"),
    alt: "Namagiri Devi shrine image",
    summary: "Ramanujan was deeply devotional and associated his mathematical inspiration with Namagiri Thayar, his family deity. This page treats that tradition respectfully while separating personal belief from verifiable mathematical method.",
    citation: "Biographical accounts of Srinivasa Ramanujan and Namagiri Thayar devotional traditions.",
    reviewStatus: "source-supplied",
    relatedLinks: [{ label: "Biography", href: "/life" }, { label: "Notebooks", href: "/notebooks" }],
    sections: [
      { heading: "Devotional Context", body: "Ramanujan's Hindu faith was part of his intellectual life, family world and self-understanding." },
      { heading: "Intuition and Work", body: "The historical record supports his extraordinary intuition, but the site does not claim that every formula was literally delivered through supernatural means." },
      { heading: "Historical Limits", body: "Devotional statements are presented as belief and biographical tradition, not as independently verifiable mathematical procedure." },
    ],
  },
  {
    slug: "gh-hardy",
    title: "G. H. Hardy",
    subtitle: "The Cambridge mathematician who recognized Ramanujan's genius.",
    image: asset("gh-hardy-portrait.png"),
    alt: "Portrait of G. H. Hardy",
    summary: "Hardy brought rigorous analytic number theory, institutional support and deep mathematical companionship to Ramanujan's Cambridge years.",
    citation: "Historical biographies and collected accounts of Hardy and Ramanujan.",
    reviewStatus: "source-supplied",
    relatedLinks: [{ label: "1913 Letter", href: "/letters/ramanujan-to-hardy-1913" }, { label: "Cambridge Years", href: "/life/cambridge-years" }, { label: "Hardy-Ramanujan Formula", href: "/discoveries/hardy-ramanujan-asymptotic-formula" }],
    sections: [
      { heading: "Recognition", body: "Hardy recognized that the 1913 letter contained work of exceptional originality." },
      { heading: "Collaboration", body: "Their collaboration connected Ramanujan's intuitive discoveries with Cambridge mathematical culture and rigorous publication." },
      { heading: "Style", body: "Hardy valued proof and structure; Ramanujan often arrived at results by an intense, compressed intuition." },
    ],
  },
  {
    slug: "janaki-ammal",
    title: "Janaki Ammal",
    subtitle: "Ramanujan's wife and a witness to his later legacy.",
    image: asset("janaki-ammal-portrait.png"),
    alt: "Portrait of Janaki Ammal",
    summary: "Janaki Ammal's life intersected with Ramanujan's poverty, separation during the Cambridge years, his return to India and the preservation of his memory.",
    citation: "Biographical accounts of Janaki Ammal and Srinivasa Ramanujan.",
    reviewStatus: "needs-review",
    relatedLinks: [{ label: "Return to India", href: "/life/return-to-india" }, { label: "Biography", href: "/life" }],
    sections: [
      { heading: "Marriage and Separation", body: "She married Ramanujan when both were young, and their life was marked by long periods apart while he worked in Cambridge." },
      { heading: "Return and Legacy", body: "After Ramanujan returned to India, Janaki was part of his final domestic world and later remained connected with his public memory." },
    ],
  },
  {
    slug: "cambridge-years",
    title: "Cambridge Years",
    subtitle: "Collaboration, publication, illness and recognition.",
    image: asset("kumbakonam-heritage.png"),
    alt: "Historic institutional building",
    summary: "Ramanujan arrived in England in 1914, worked with Hardy and Littlewood, published major mathematics, and received rare recognition before returning to India in 1919.",
    citation: "Biographical timelines of Ramanujan's Cambridge period.",
    reviewStatus: "source-supplied",
    relatedLinks: [{ label: "G. H. Hardy", href: "/life/gh-hardy" }, { label: "Partition Formula", href: "/discoveries/hardy-ramanujan-asymptotic-formula" }, { label: "Timeline", href: "/timeline" }],
    sections: [
      { heading: "Arrival and Trinity", body: "Ramanujan reached England in 1914 and worked in the Cambridge mathematical world during wartime." },
      { heading: "Mathematical Output", body: "His work from this period includes major publications on partitions, highly composite numbers, tau, modular forms and infinite series." },
      { heading: "Recognition", body: "He was elected Fellow of the Royal Society in 1918 and became a Fellow of Trinity College in 1918." },
      { heading: "Health", body: "Illness and cultural hardship shadowed his Cambridge years and shaped his return to India." },
    ],
  },
  {
    slug: "return-to-india",
    title: "Return to India",
    subtitle: "Final work, final correspondence and an enduring legacy.",
    image: asset("ramanujan-lost-notebook.png"),
    alt: "Ramanujan lost notebook",
    summary: "Ramanujan returned to India in 1919. During his final period he continued to work, wrote about mock theta functions, and died in Kumbakonam on 26 April 1920.",
    citation: "Biographical timelines and final correspondence of Srinivasa Ramanujan.",
    reviewStatus: "source-supplied",
    relatedLinks: [{ label: "Final Letter", href: "/letters/final-letter-to-hardy" }, { label: "Lost Notebook", href: "/notebooks/lost-notebook" }, { label: "Mock Theta Functions", href: "/discoveries/mock-theta-functions" }],
    sections: [
      { heading: "Return in 1919", body: "Ramanujan came back to India in poor health but continued mathematical work." },
      { heading: "Mock Theta Functions", body: "His final correspondence described mock theta functions, among the most influential ideas associated with his last period." },
      { heading: "Death and Afterlife of the Work", body: "He died on 26 April 1920 in Kumbakonam. Later publication, annotation and rediscovery turned his papers and notebooks into a living research source." },
    ],
  },
];

export const timelineEvents: TimelineEvent[] = [
  { slug: "born-erode", date: "22 December 1887", title: "Born in Erode", location: "Erode", relatedPerson: "Srinivasa Ramanujan", relatedSource: "Biographical records", image: asset("hero-srinivasa-ramanujan.png"), text: "Srinivasa Ramanujan was born in Erode and raised mainly in Kumbakonam." },
  { slug: "childhood-kumbakonam", date: "1890s", title: "Childhood in Kumbakonam", location: "Kumbakonam", relatedPerson: "Srinivasa Ramanujan", text: "His early life in Kumbakonam placed him in the educational and devotional setting that shaped his youth." },
  { slug: "carr-synopsis", date: "Early 1900s", title: "Encounter with Carr's Synopsis", location: "Kumbakonam", relatedSource: "G. S. Carr, Synopsis", text: "Carr's book became a catalyst for Ramanujan's independent mathematical development." },
  { slug: "scholarship-loss", date: "1900s", title: "Formal Study Falters", location: "South India", text: "His intense focus on mathematics contributed to academic setbacks outside mathematics." },
  { slug: "marriage-janaki", date: "1909", title: "Marriage to Janaki Ammal", location: "India", relatedPerson: "Janaki Ammal", text: "Ramanujan married Janaki Ammal, whose life remained intertwined with his memory and legacy." },
  { slug: "madras-port-trust", date: "1912", title: "Madras Port Trust Employment", location: "Madras", text: "Employment at the Madras Port Trust gave Ramanujan some stability while supporters helped bring his mathematics to wider attention." },
  { slug: "letter-to-hardy", date: "16 January 1913", title: "Letter to Hardy", location: "Madras to Cambridge", relatedPerson: "G. H. Hardy", relatedSource: "1913 correspondence", relatedDiscoverySlug: "hardy-ramanujan-asymptotic-formula", text: "Ramanujan wrote to Hardy with extraordinary formulas and results, initiating the connection that changed his career." },
  { slug: "journey-england", date: "1914", title: "Journey to England", location: "Cambridge", relatedPerson: "G. H. Hardy", text: "Ramanujan travelled to England and entered the Cambridge mathematical world." },
  { slug: "cambridge-work", date: "1914-1919", title: "Work at Cambridge", location: "Cambridge", relatedDiscoverySlug: "ramanujan-tau-function", text: "He worked with Hardy and Littlewood and produced major publications under difficult wartime and health conditions." },
  { slug: "frs", date: "1918", title: "Fellow of the Royal Society", location: "London", text: "Ramanujan was elected Fellow of the Royal Society in recognition of his mathematical contributions." },
  { slug: "trinity-fellow", date: "1918", title: "Fellow of Trinity College", location: "Cambridge", text: "He became a Fellow of Trinity College, a rare honour for an Indian mathematician of the period." },
  { slug: "return-india", date: "1919", title: "Return to India", location: "India", text: "Ill health brought Ramanujan back to India, where he continued to work." },
  { slug: "mock-theta-letter", date: "January 1920", title: "Final Letter on Mock Theta Functions", location: "India to Cambridge", relatedDiscoverySlug: "mock-theta-functions", relatedSource: "Final letter to Hardy", text: "Ramanujan described mock theta functions to Hardy, opening a problem that would influence mathematics for decades." },
  { slug: "death-kumbakonam", date: "26 April 1920", title: "Death in Kumbakonam", location: "Kumbakonam", text: "Ramanujan died at age 32, leaving notebooks, papers and correspondence that continued to unfold." },
  { slug: "lost-notebook-rediscovered", date: "1976", title: "Lost Notebook Rediscovered", location: "Cambridge", relatedPerson: "George Andrews", relatedDiscoverySlug: "mock-theta-functions", text: "George Andrews found manuscript material later known as the Lost Notebook." },
];

export const papers: PaperRecord[] = [
  { slug: "bernoulli-numbers-paper", title: "Some Properties of Bernoulli's Numbers", year: "1911", journal: "Journal of the Indian Mathematical Society", volumePages: "Vol. 3, pp. 219-234", collaborators: [], subjects: ["Bernoulli Numbers", "Number Theory"], relatedDiscoverySlugs: ["bernoulli-number-identities"], externalSource: "Published works listing; Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "question-330-sanjana-paper", title: "On Question 330 of Professor Sanjana", year: "1912", journal: "Journal of the Indian Mathematical Society", volumePages: "Vol. 4, pp. 59-61", collaborators: [], subjects: ["Problem Note", "Number Theory"], relatedDiscoverySlugs: [], externalSource: "Published works listing; Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "simultaneous-equations-paper", title: "Note on a Set of Simultaneous Equations", year: "1912", journal: "Journal of the Indian Mathematical Society", volumePages: "Vol. 4, pp. 94-96", collaborators: [], subjects: ["Equations", "Algebra"], relatedDiscoverySlugs: ["diophantine-equation-families"], externalSource: "Published works listing; Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "irregular-numbers-paper", title: "Irregular Numbers", year: "1913", journal: "Journal of the Indian Mathematical Society", volumePages: "Vol. 5, pp. 105-106", collaborators: [], subjects: ["Number Theory", "Bernoulli Numbers"], relatedDiscoverySlugs: ["bernoulli-congruences"], externalSource: "Published works listing; Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "squaring-the-circle-paper", title: "Squaring the Circle", year: "1913", journal: "Journal of the Indian Mathematical Society", volumePages: "Vol. 5, p. 132", collaborators: [], subjects: ["Geometry", "Approximation"], relatedDiscoverySlugs: ["approximations-to-constants"], externalSource: "Published works listing; Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "modular-equations-pi-paper", title: "Modular Equations and Approximations to pi", year: "1914", journal: "Quarterly Journal of Mathematics", volumePages: "Vol. 45, pp. 350-372", collaborators: [], subjects: ["Pi", "Modular Equations"], relatedDiscoverySlugs: ["ramanujan-one-over-pi-series"], externalSource: "Published works listing; Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "arctangent-integral-paper", title: "On the Integral int_0^x tan^(-1)(t) / t dt", year: "1915", journal: "Journal of the Indian Mathematical Society", volumePages: "Vol. 7, pp. 93-96", collaborators: [], subjects: ["Definite Integrals", "Special Functions"], relatedDiscoverySlugs: ["definite-integrals"], externalSource: "Published works listing; Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "number-of-divisors-paper", title: "On the Number of Divisors of a Number", year: "1915", journal: "Journal of the Indian Mathematical Society", volumePages: "Vol. 7, pp. 131-133", collaborators: [], subjects: ["Divisor Functions", "Number Theory"], relatedDiscoverySlugs: ["divisor-functions"], externalSource: "Published works listing; Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "sum-square-roots-paper", title: "On the Sum of the Square Roots of the First n Natural Numbers", year: "1915", journal: "Journal of the Indian Mathematical Society", volumePages: "Vol. 7, pp. 173-175", collaborators: [], subjects: ["Series", "Approximation"], relatedDiscoverySlugs: ["asymptotic-expansions"], externalSource: "Published works listing; Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "infinite-product-cubic-paper", title: "On the Product prod from n=0 to infinity [1 + (x / (a + nd))^3]", year: "1915", journal: "Journal of the Indian Mathematical Society", volumePages: "Vol. 7, pp. 209-211", collaborators: [], subjects: ["Infinite Products", "Special Functions"], relatedDiscoverySlugs: ["infinite-products"], externalSource: "Published works listing; Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "definite-integrals-messenger-paper", title: "Some Definite Integrals", year: "1915", journal: "Messenger of Mathematics", volumePages: "Vol. 44, pp. 10-18", collaborators: [], subjects: ["Definite Integrals", "Integral Transforms"], relatedDiscoverySlugs: ["definite-integrals"], externalSource: "Published works listing; Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "gauss-sums-integrals-paper", title: "Some Definite Integrals Connected with Gauss's Sums", year: "1915", journal: "Messenger of Mathematics", volumePages: "Vol. 44, pp. 75-85", collaborators: [], subjects: ["Definite Integrals", "Gauss Sums"], relatedDiscoverySlugs: ["definite-integrals"], externalSource: "Published works listing; Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "summation-certain-series-paper", title: "Summation of a Certain Series", year: "1915", journal: "Messenger of Mathematics", volumePages: "Vol. 44, pp. 157-160", collaborators: [], subjects: ["Series", "Summation"], relatedDiscoverySlugs: ["ramanujan-summation"], externalSource: "Published works listing; Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "riemann-xi-functions-paper", title: "New Expressions for Riemann's Functions xi(s) and Xi(t)", year: "1915", journal: "Quarterly Journal of Mathematics", volumePages: "Vol. 46, pp. 253-260", collaborators: [], subjects: ["Riemann Functions", "Analytic Number Theory"], relatedDiscoverySlugs: ["odd-zeta-value-transformations"], externalSource: "Published works listing; Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "highly-composite-numbers-paper", title: "Highly Composite Numbers", year: "1915", journal: "Proceedings of the London Mathematical Society", volumePages: "Series 2, Vol. 14, pp. 347-409", collaborators: [], subjects: ["Highly Composite Numbers", "Number Theory"], relatedDiscoverySlugs: ["highly-composite-numbers"], externalSource: "Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "certain-infinite-series-paper", title: "On Certain Infinite Series", year: "1916", journal: "Messenger of Mathematics", volumePages: "Vol. 45, pp. 11-15", collaborators: [], subjects: ["Infinite Series", "Series Transformations"], relatedDiscoverySlugs: ["infinite-series-transformations"], externalSource: "Published works listing; Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "analytic-theory-numbers-formulas-paper", title: "Some Formulae in the Analytic Theory of Numbers", year: "1916", journal: "Messenger of Mathematics", volumePages: "Vol. 45, pp. 81-84", collaborators: [], subjects: ["Analytic Number Theory", "Divisor Functions"], relatedDiscoverySlugs: ["divisor-sum-convolution-identities"], externalSource: "Published works listing; Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "tau-modular-equations-paper", title: "On Certain Arithmetical Functions", year: "1916", journal: "Transactions of the Cambridge Philosophical Society", volumePages: "Vol. 22, pp. 159-184", collaborators: [], subjects: ["Tau Function", "Modular Forms"], relatedDiscoverySlugs: ["ramanujan-tau-function", "tau-function-congruences"], externalSource: "Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "euler-constant-series-paper", title: "A Series for Euler's Constant gamma", year: "1917", journal: "Messenger of Mathematics", volumePages: "Vol. 46, pp. 73-80", collaborators: [], subjects: ["Constants", "Series"], relatedDiscoverySlugs: ["approximations-to-constants"], externalSource: "Published works listing; Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "quadratic-form-four-variables-paper", title: "On the Expression of a Number in the Form ax^2 + by^2 + cz^2 + du^2", year: "1917", journal: "Proceedings of the Cambridge Philosophical Society", volumePages: "Vol. 19, pp. 11-21", collaborators: [], subjects: ["Quadratic Forms", "Number Theory"], relatedDiscoverySlugs: ["quadratic-forms"], externalSource: "Published works listing; Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "trigonometrical-sums-paper", title: "On Certain Trigonometrical Sums and Their Applications in the Theory of Numbers", year: "1918", journal: "Transactions of the Cambridge Philosophical Society", volumePages: "Vol. 22, No. 13, pp. 259-276", collaborators: [], subjects: ["Ramanujan Sums", "Number Theory"], relatedDiscoverySlugs: ["ramanujan-sums"], externalSource: "Published works listing; Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "definite-integrals-london-records-paper", title: "Some Definite Integrals", year: "1918", journal: "Proceedings of the London Mathematical Society", volumePages: "Series 2, Vol. 17, Records for 17 Jan. 1918", collaborators: [], subjects: ["Definite Integrals"], relatedDiscoverySlugs: ["definite-integrals"], externalSource: "Published works listing; Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "definite-integrals-jims-paper", title: "Some Definite Integrals", year: "1919", journal: "Journal of the Indian Mathematical Society", volumePages: "Vol. 11, pp. 81-87", collaborators: [], subjects: ["Definite Integrals"], relatedDiscoverySlugs: ["definite-integrals"], externalSource: "Published works listing; Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "bertrands-postulate-paper", title: "A Proof of Bertrand's Postulate", year: "1919", journal: "Journal of the Indian Mathematical Society", volumePages: "Vol. 11, pp. 181-182", collaborators: [], subjects: ["Prime Number Theory", "Number Theory"], relatedDiscoverySlugs: ["prime-interval-theorem"], externalSource: "Published works listing; Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "partitions-paper", title: "Some Properties of p(n), the Number of Partitions of n", year: "1919", journal: "Proceedings of the Cambridge Philosophical Society", volumePages: "Vol. 19, pp. 207-210", collaborators: [], subjects: ["Partition Theory"], relatedDiscoverySlugs: ["partition-congruences"], externalSource: "Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "combinatory-analysis-identities-proof-paper", title: "Proof of Certain Identities in Combinatory Analysis", year: "1919", journal: "Proceedings of the Cambridge Philosophical Society", volumePages: "Vol. 19, pp. 214-216", collaborators: [], subjects: ["Combinatory Analysis", "Partitions"], relatedDiscoverySlugs: ["combinatorial-identities"], externalSource: "Published works listing; Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "class-definite-integrals-paper", title: "A Class of Definite Integrals", year: "1920", journal: "Quarterly Journal of Mathematics", volumePages: "Vol. 48, pp. 294-310", collaborators: [], subjects: ["Definite Integrals", "Special Functions"], relatedDiscoverySlugs: ["definite-integrals"], externalSource: "Published works listing; Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "congruence-properties-partitions-lms-paper", title: "Congruence Properties of Partitions", year: "1920", journal: "Proceedings of the London Mathematical Society", volumePages: "Series 2, Vol. 18, Records for 13 March 1919", collaborators: [], subjects: ["Partitions", "Congruences"], relatedDiscoverySlugs: ["partition-congruences"], externalSource: "Published works listing; Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "infinite-products-algebraic-relations-paper", title: "Algebraic Relations Between Certain Infinite Products", year: "1920", journal: "Proceedings of the London Mathematical Society", volumePages: "Series 2, Vol. 18, Records for 13 March 1919", collaborators: [], subjects: ["Infinite Products", "Modular Forms"], relatedDiscoverySlugs: ["infinite-products"], externalSource: "Published works listing; Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "congruence-properties-partitions-mz-paper", title: "Congruence Properties of Partitions", year: "1921", journal: "Mathematische Zeitschrift", volumePages: "Vol. 9, pp. 147-153", collaborators: [], subjects: ["Partitions", "Congruences"], relatedDiscoverySlugs: ["partition-congruences"], externalSource: "Published works listing; Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "formule-asymptotique-partitions-paper", title: "Une Formule Asymptotique pour le Nombre des Partitions de n", year: "1917", journal: "Comptes Rendus", volumePages: "2 Jan. 1917", collaborators: ["G. H. Hardy"], subjects: ["Partitions", "Asymptotics"], relatedDiscoverySlugs: ["hardy-ramanujan-asymptotic-formula"], externalSource: "Published works listing; Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "almost-all-numbers-prime-factors-paper", title: "Proof that Almost All Numbers n Are Composed of About log log n Prime Factors", year: "1917", journal: "Proceedings of the London Mathematical Society", volumePages: "Series 2, Vol. 16, Records for 14 Dec. 1916", collaborators: ["G. H. Hardy"], subjects: ["Prime Factors", "Analytic Number Theory"], relatedDiscoverySlugs: ["prime-counting-inequalities"], externalSource: "Published works listing; Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "asymptotic-combinatory-analysis-records-paper", title: "Asymptotic Formulae in Combinatory Analysis", year: "1917", journal: "Proceedings of the London Mathematical Society", volumePages: "Series 2, Vol. 16, Records for 1 March 1917", collaborators: ["G. H. Hardy"], subjects: ["Partitions", "Combinatory Analysis"], relatedDiscoverySlugs: ["hardy-ramanujan-asymptotic-formula"], externalSource: "Published works listing; Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "distribution-integers-various-types-paper", title: "Asymptotic Formulae for the Distribution of Integers of Various Types", year: "1917", journal: "Proceedings of the London Mathematical Society", volumePages: "Series 2, Vol. 16, pp. 112-132", collaborators: ["G. H. Hardy"], subjects: ["Analytic Number Theory", "Integer Distribution"], relatedDiscoverySlugs: ["asymptotic-expansions"], externalSource: "Published works listing; Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "normal-number-prime-factors-paper", title: "The Normal Number of Prime Factors of a Number n", year: "1917", journal: "Quarterly Journal of Mathematics", volumePages: "Vol. 48, pp. 76-92", collaborators: ["G. H. Hardy"], subjects: ["Prime Factors", "Analytic Number Theory"], relatedDiscoverySlugs: ["prime-counting-inequalities"], externalSource: "Published works listing; Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "asymptotic-partitions-paper", title: "Asymptotic Formulae in Combinatory Analysis", year: "1918", journal: "Proceedings of the London Mathematical Society", volumePages: "Series 2, Vol. 17, pp. 75-115", collaborators: ["G. H. Hardy"], subjects: ["Partitions", "Circle Method"], relatedDiscoverySlugs: ["hardy-ramanujan-asymptotic-formula", "hardy-ramanujan-circle-method"], externalSource: "Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
  { slug: "coefficients-modular-functions-paper", title: "On the Coefficients in the Expansions of Certain Modular Functions", year: "1919", journal: "Proceedings of the Royal Society A", volumePages: "Vol. 95, pp. 144-155", collaborators: ["G. H. Hardy"], subjects: ["Modular Functions", "Tau Function"], relatedDiscoverySlugs: ["ramanujan-tau-function"], externalSource: "Published works listing; Collected Papers of Srinivasa Ramanujan", reviewStatus: "source-supplied" },
];

export const references: ReferenceRecord[] = [
  { slug: "collected-papers", title: "Collected Papers of Srinivasa Ramanujan", author: "S. Ramanujan; edited by G. H. Hardy, P. V. Seshu Aiyar and B. M. Wilson", type: "Primary and collected source", group: "Collected papers", description: "Collected published papers and editorial apparatus for Ramanujan's printed work.", externalLink: "https://archive.org/details/collectedpaperso033642mbp", accessStatus: "External archive", reviewStatus: "source-supplied" },
  { slug: "notebooks-berndt", title: "Ramanujan's Notebooks", author: "Bruce C. Berndt", type: "Edited notebooks", group: "Three Notebooks", description: "Multi-volume annotated study of Ramanujan's notebooks.", accessStatus: "Bibliographic reference", reviewStatus: "needs-review" },
  { slug: "lost-notebook-andrews-berndt", title: "Ramanujan's Lost Notebook", author: "George E. Andrews and Bruce C. Berndt", type: "Edited lost notebook", group: "Lost Notebook", description: "Annotated study of the Lost Notebook material.", accessStatus: "Bibliographic reference", reviewStatus: "needs-review" },
  { slug: "published-works-index", title: "Published Works of Srinivasa Ramanujan", author: "S. Ramanujan bibliography", type: "Published works index", group: "Collected papers", description: "Chronological list of Ramanujan's published works used to expand the 37-paper index.", externalLink: "https://ramanujan.sirinudi.org/html/published_papers.html", accessStatus: "External bibliography", reviewStatus: "source-supplied" },
  { slug: "carr-synopsis", title: "A Synopsis of Elementary Results in Pure and Applied Mathematics", author: "G. S. Carr", type: "Historical source", group: "Early influences", description: "The compendium that helped shape Ramanujan's early self-study habits and formula-driven style.", accessStatus: "Bibliographic reference", reviewStatus: "source-supplied" },
  { slug: "hardy-apology", title: "A Mathematician's Apology and Related Essays", author: "G. H. Hardy", type: "Historical commentary", group: "Academic surveys", description: "Context for Hardy's view of mathematical beauty and the Cambridge culture around Ramanujan.", accessStatus: "Bibliographic reference", reviewStatus: "needs-review" },
  { slug: "berndt-ramanujan-essays", title: "Number Theory in the Spirit of Ramanujan", author: "Bruce C. Berndt", type: "Academic exposition", group: "Academic surveys", description: "Expository path into Ramanujan's number-theoretic style for advanced students.", accessStatus: "Bibliographic reference", reviewStatus: "needs-review" },
  { slug: "indian-academy-ramanujan", title: "Ramanujan Materials", author: "Indian Academy of Sciences", type: "Online archive", group: "Reliable online archives", description: "Institutional material related to Ramanujan and Indian mathematics.", externalLink: "https://www.ias.ac.in/", accessStatus: "External site", reviewStatus: "needs-review" },
  { slug: "ams-feature-column", title: "AMS Notices and Feature Material on Ramanujan", author: "American Mathematical Society", type: "Academic commentary", group: "Academic surveys", description: "Survey and expository material on Ramanujan's influence.", externalLink: "https://www.ams.org/", accessStatus: "External site", reviewStatus: "needs-review" },
  { slug: "hardy-ramanujan-correspondence", title: "Hardy-Ramanujan Correspondence", author: "G. H. Hardy and S. Ramanujan", type: "Letters", group: "Letters", description: "Historical correspondence connecting Ramanujan's Indian work to Cambridge.", accessStatus: "Cited historical source", reviewStatus: "source-supplied" },
];

export const furtherReading: ReadingRecord[] = [
  { slug: "man-who-knew-infinity", title: "The Man Who Knew Infinity", audience: "General readers", author: "Robert Kanigel", description: "A widely read biography of Ramanujan for general audiences.", accessStatus: "Commercial book" },
  { slug: "ramanujan-mathematics-for-students", title: "Ramanujan: Essays and Surveys", audience: "General readers", author: "Collected expository authors", description: "Readable essays that connect Ramanujan's life with approachable mathematical themes.", accessStatus: "Bibliographic reference" },
  { slug: "partition-theory-introduction", title: "An Introduction to the Theory of Partitions", audience: "Undergraduate mathematics students", author: "George E. Andrews", description: "A student-friendly route into the partition ideas that make Ramanujan's congruences feel alive.", accessStatus: "Commercial book" },
  { slug: "ramanujan-twelve-lectures", title: "Ramanujan: Twelve Lectures on Subjects Suggested by His Life and Work", audience: "Advanced students", author: "G. H. Hardy", description: "Hardy's lectures on mathematical themes surrounding Ramanujan.", accessStatus: "Bibliographic reference" },
  { slug: "collected-papers-reading", title: "Collected Papers of Srinivasa Ramanujan", audience: "Researchers", author: "S. Ramanujan", description: "Primary published mathematical work.", accessStatus: "External archive", externalLink: "https://archive.org/details/collectedpaperso033642mbp" },
  { slug: "lost-notebook-reading", title: "Ramanujan's Lost Notebook", audience: "Researchers", author: "George E. Andrews and Bruce C. Berndt", description: "Detailed annotated study of the rediscovered material.", accessStatus: "Bibliographic reference" },
  { slug: "notebooks-reading", title: "Ramanujan's Notebooks", audience: "Undergraduate mathematics students", author: "Bruce C. Berndt", description: "Annotated volumes supporting deeper study of notebook entries.", accessStatus: "Bibliographic reference" },
];

export const legacyTopics = [
  { title: "Original Work", body: "Ramanujan's original work includes partition congruences, tau-function conjectures, theta-function identities, q-series, continued fractions, modular equations and striking approximations." },
  { title: "Later Fields Inspired by His Work", body: "Modern work in modular forms, mock modular forms, q-series, combinatorics, representation theory, mathematical physics, black-hole entropy research, moonshine and quantum modular forms draws on ideas connected to Ramanujan. These later fields should not be collapsed into his personal authorship." },
  { title: "What Was Proved Later", body: "Later mathematics clarified the Ramanujan-Petersson bound, the Ramanujan-Nagell equation, mock theta theory, many notebook identities and modern interpretations of modular and q-series results." },
  { title: "Named in His Honour", body: "Some concepts were formulated by Ramanujan, some were collaborative, and some were named later because of their relation to conjectures or influence. The named-concepts archive preserves those distinctions." },
];

export const allPublicRoutes = [
  "/", "/discoveries", "/formulas", "/named-concepts", "/notebooks", "/notebooks/three-notebooks", "/notebooks/lost-notebook", "/letters", "/letters/ramanujan-to-hardy-1913", "/letters/final-letter-to-hardy", "/timeline", "/life", "/life/namagiri-devi-and-faith", "/life/gh-hardy", "/life/janaki-ammal", "/life/cambridge-years", "/life/return-to-india", "/ramanujan", "/legacy", "/resources", "/resources/published-papers", "/resources/references", "/resources/further-reading", "/about", "/my-notebook", "/search",
  ...categories.map((item) => `/discoveries/category/${item.slug}`),
  ...discoveries.map((item) => `/discoveries/${item.slug}`),
  ...formulas.map((item) => `/formulas/${item.slug}`),
  ...namedConcepts.map((item) => `/named-concepts/${item.slug}`),
  ...papers.map((item) => `/resources/published-papers/${item.slug}`),
  ...ramanujanTopics.map((item) => `/ramanujan/${item.slug}`),
];
