import { chromium } from "playwright";

const sizes = [
  ["desktop", 1536, 1024],
  ["laptop", 1366, 768],
  ["tablet", 900, 1024],
  ["mobile", 390, 844],
];

const routes = [
  "/",
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
  "/notebooks/lost-notebook",
  "/letters",
  "/letters/final-letter-to-hardy",
  "/timeline",
  "/life/gh-hardy",
  "/legacy",
  "/resources/published-papers",
  "/resources/published-papers/modular-equations-pi-paper",
  "/resources/references",
  "/about",
  "/my-notebook",
  "/search?q=mock",
];
const findings = [];
const browser = await chromium.launch({ headless: true });

for (const [label, width, height] of sizes) {
  const page = await browser.newPage({ viewport: { width, height } });
  const errors = [];
  const failed = [];

  page.on("console", (message) => {
    if (["error", "warning"].includes(message.type())) {
      errors.push(`${message.type()}: ${message.text()}`);
    }
  });
  page.on("requestfailed", (request) => {
    const errorText = request.failure()?.errorText ?? "";
    if (request.url().includes("_rsc") && errorText.includes("ERR_ABORTED")) return;
    failed.push(`${request.url()} ${errorText}`);
  });

  for (const route of routes) {
    const response = await page.goto(`http://localhost:3000${route}`, {
      waitUntil: "networkidle",
      timeout: 30000,
    });
    const body = await page.locator("body").innerText({ timeout: 10000 });
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2,
    );
    const overflowElements = overflow
      ? await page.evaluate(() =>
          Array.from(document.querySelectorAll("body *"))
            .map((element) => {
              const rect = element.getBoundingClientRect();
              return { tag: element.tagName, className: element.className, width: rect.width, right: rect.right };
            })
            .filter((item) => item.right > document.documentElement.clientWidth + 2)
            .slice(0, 8),
        )
      : [];

    findings.push({
      label,
      route,
      status: response?.status(),
      hasBrand: /Ramanujan Universe/i.test(body),
      overflow,
      overflowElements,
    });

    if (route === "/" && label === "desktop") {
      const portrait = await page.locator(".hero-portrait").boundingBox();
      const devi = await page.locator(".devi-shrine").boundingBox();
      findings.push({
        check: "hero-image-scale",
        portrait,
        devi,
        deviRatio: devi && portrait ? Number((devi.width / portrait.width).toFixed(2)) : null,
      });
    }

    if (route === "/discoveries" && label === "desktop") {
      await page.getByPlaceholder("Search by formula, theorem, topic, or notebook...").fill("tau");
      await page.waitForTimeout(250);
      const tauVisible = await page.getByText("Ramanujan's Tau Function").count();
      await page.getByPlaceholder("Search by formula, theorem, topic, or notebook...").fill("");
      await page.waitForTimeout(250);
      await page.getByRole("button", { name: "Lost Notebook", exact: true }).click();
      await page.waitForTimeout(250);
      const lostVisible = await page.getByText("Mock Theta Functions").count();
      findings.push({ check: "search-filter", tauVisible, lostVisible });
    }

    if (route === "/formulas" && label === "desktop") {
      await page.getByPlaceholder("Search equations, identities, categories or sources...").fill("zeta");
      await page.waitForTimeout(250);
      const zetaVisible = await page.getByText("Formula for zeta(3) formula").count();
      findings.push({ check: "formula-search", zetaVisible });
    }

    if (route === "/" && label === "mobile") {
      await page.locator("button.nav-toggle-label").click();
      await page.waitForTimeout(250);
      const navDisplay = await page.locator(".main-nav").evaluate((element) => getComputedStyle(element).display);
      findings.push({ check: "mobile-nav", navDisplay });
    }

    if (route === "/search?q=mock" && label === "desktop") {
      const mockVisible = await page.getByText("Mock Theta Functions").count();
      findings.push({ check: "unified-search", mockVisible });
    }

    if (route === "/my-notebook" && label === "desktop") {
      const emptyVisible = await page.getByText("No saved items yet").count();
      findings.push({ check: "saved-notebook-empty", emptyVisible });
    }
  }

  if (errors.length || failed.length) {
    findings.push({ label, errors, failed });
  }
  await page.close();
}

await browser.close();
console.log(JSON.stringify(findings, null, 2));
