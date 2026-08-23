import assert from "node:assert/strict";
import test from "node:test";
import katex from "katex";
import { allPublicRoutes, categories, discoveries, formulas, furtherReading, letters, lifeProfiles, namedConcepts, notebooks, papers, references, timelineEvents } from "../app/data/archive";

const unique = (values: string[]) => new Set(values).size === values.length;

test("Phase 2 catalogue has unique slugs and complete taxonomy", () => {
  assert.equal(categories.length, 37);
  assert.ok(unique(categories.map((item) => item.slug)));
  assert.ok(unique(discoveries.map((item) => item.slug)));
  assert.ok(unique(formulas.map((item) => item.slug)));
  assert.ok(unique(namedConcepts.map((item) => item.slug)));
});

test("discovery, formula and concept references are valid", () => {
  const categorySlugs = new Set(categories.map((item) => item.slug));
  const discoverySlugs = new Set(discoveries.map((item) => item.slug));
  const formulaSlugs = new Set(formulas.map((item) => item.slug));

  for (const discovery of discoveries) {
    assert.ok(discovery.title);
    assert.ok(discovery.summary);
    assert.ok(categorySlugs.has(discovery.categorySlug), discovery.slug);
    for (const formulaSlug of discovery.formulaSlugs) assert.ok(formulaSlugs.has(formulaSlug), formulaSlug);
    for (const relatedSlug of discovery.relatedDiscoverySlugs ?? []) assert.ok(discoverySlugs.has(relatedSlug), relatedSlug);
  }

  for (const formula of formulas) {
    assert.ok(discoverySlugs.has(formula.discoverySlug), formula.slug);
  }

  for (const concept of namedConcepts) {
    assert.ok(categorySlugs.has(concept.categorySlug), concept.slug);
    if (concept.discoverySlug) assert.ok(discoverySlugs.has(concept.discoverySlug), concept.slug);
    if (concept.formulaSlug) assert.ok(formulaSlugs.has(concept.formulaSlug), concept.slug);
  }
});

test("every stored formula parses with KaTeX", () => {
  for (const formula of formulas) {
    assert.doesNotThrow(() => {
      katex.renderToString(formula.latex, { displayMode: true, throwOnError: true, strict: "ignore" });
    }, formula.slug);
    assert.doesNotMatch(formula.latex, /\$\$|```|\\begin\{markdown\}/, formula.slug);
  }
});

test("Phase 3 records have valid references and no unsupported empty records", () => {
  const discoverySlugs = new Set(discoveries.map((item) => item.slug));
  const required = [...notebooks, ...letters, ...lifeProfiles, ...papers, ...references, ...furtherReading, ...timelineEvents];
  for (const item of required) {
    assert.ok(item.slug);
    assert.ok(item.title);
  }
  for (const notebook of notebooks) for (const slug of notebook.relatedDiscoverySlugs) assert.ok(discoverySlugs.has(slug), slug);
  for (const letter of letters) for (const slug of letter.relatedDiscoverySlugs) assert.ok(discoverySlugs.has(slug), slug);
  for (const paper of papers) for (const slug of paper.relatedDiscoverySlugs) assert.ok(discoverySlugs.has(slug), slug);
  for (const event of timelineEvents) if (event.relatedDiscoverySlug) assert.ok(discoverySlugs.has(event.relatedDiscoverySlug), event.slug);
  assert.ok(unique(allPublicRoutes));
  assert.doesNotThrow(() => new URL(references.find((item) => item.externalLink)?.externalLink ?? "https://example.com"));
});

test("review list is explicit for incomplete historical or bibliographic material", () => {
  const needsReview = [
    ...discoveries.filter((item) => item.reviewStatus === "needs-review"),
    ...references.filter((item) => item.reviewStatus === "needs-review"),
    ...papers.filter((item) => item.reviewStatus === "needs-review"),
  ];
  assert.ok(needsReview.length > 0);
  assert.ok(references.every((item) => item.accessStatus));
});
