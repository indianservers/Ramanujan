import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { allPublicRoutes, discoveries, papers } from "../app/data/archive";

test("site metadata points at the deployed host", () => {
  const layout = readFileSync("app/layout.tsx", "utf8");
  assert.match(layout, /metadataBase:\s*new URL\("https:\/\/ramanujan-discoveries\.sai355897\.chatgpt\.site"\)/);
});

test("sitemap includes every public route with absolute URLs", () => {
  const sitemap = readFileSync("public/sitemap.xml", "utf8");
  for (const route of allPublicRoutes) {
    assert.match(sitemap, new RegExp(`<loc>https://ramanujan-discoveries\\.sai355897\\.chatgpt\\.site${route === "/" ? "/" : route}</loc>`), route);
  }
});

test("catalogue entries expose source notes and paper deep links", () => {
  assert.equal(discoveries.filter((item) => !item.sourceCitation && !item.sourceTitle).length, 0);
  assert.equal(papers.filter((item) => !allPublicRoutes.includes(`/resources/published-papers/${item.slug}`)).length, 0);
});
