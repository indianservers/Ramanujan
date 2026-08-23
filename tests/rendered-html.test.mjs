import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Ramanujan homepage", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /The Ramanujan Universe/i);
  assert.match(html, /Srinivasa Ramanujan/i);
  assert.match(html, /An Infinite Legacy/i);
  assert.match(html, /hero-srinivasa-ramanujan\.png/i);
  assert.match(html, /namagiri-devi-shrine\.png/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});

test("server-renders Phase 1, Phase 2 and Phase 3 route families", async () => {
  for (const path of [
    "/discoveries",
    "/discoveries/category/partition-theory",
    "/discoveries/partition-congruences",
    "/discoveries/ramanujan-one-over-pi-series",
    "/formulas",
    "/formulas/ramanujan-one-over-pi-series-formula",
    "/named-concepts",
    "/named-concepts/ramanujan-sums",
    "/life",
    "/resources",
    "/notebooks",
    "/notebooks/three-notebooks",
    "/notebooks/lost-notebook",
    "/letters",
    "/letters/ramanujan-to-hardy-1913",
    "/letters/final-letter-to-hardy",
    "/timeline",
    "/life/namagiri-devi-and-faith",
    "/life/gh-hardy",
    "/life/janaki-ammal",
    "/life/cambridge-years",
    "/life/return-to-india",
    "/legacy",
    "/resources/published-papers",
    "/resources/references",
    "/resources/further-reading",
    "/about",
    "/my-notebook",
    "/search?q=mock",
  ]) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.match(html, /The Ramanujan Universe/i, path);
    assert.doesNotMatch(html, /Coming soon|Your site is taking shape/i, path);
  }
});
