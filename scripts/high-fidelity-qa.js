const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const states = [
  "normal",
  "watchlist",
  "insufficient",
  "related",
  "multiple",
  "unconnected",
  "partial",
  "empty",
  "stale",
  "source",
  "permission",
  "error",
  "loading",
  "handoffFail",
  "handoffSuccess"
];

const viewports = [
  { name: "360x800", width: 360, height: 800, states },
  { name: "390x844", width: 390, height: 844, states },
  { name: "320x800", width: 320, height: 800, states: ["normal", "watchlist", "insufficient", "handoffFail"] }
];

const root = path.resolve(__dirname, "..");
const outputDir = path.join(root, "artifacts", "high-fidelity");
const reportPath = path.join(outputDir, "visual-qa-report.json");
const fileUrl = `file://${path.join(root, "prototype", "high-fidelity", "index.html")}`;

function fail(message) {
  throw new Error(message);
}

(async () => {
  fs.mkdirSync(outputDir, { recursive: true });
  let browser;
  try {
    browser = await chromium.launch();
  } catch (error) {
    const report = {
      status: "BLOCKED",
      generatedAt: new Date().toISOString(),
      reason: "Playwright Chromium browser binary unavailable",
      error: error.message,
      attemptedCommand: "node scripts/high-fidelity-qa.js",
      recoveryCommand: "npx playwright install chromium --only-shell",
      screenshots: 0
    };
    fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
    console.log(JSON.stringify(report, null, 2));
    process.exitCode = 2;
    return;
  }
  const results = [];

  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height }, deviceScaleFactor: 1 });

    for (const state of viewport.states) {
      await page.goto(`${fileUrl}?state=${state}&capture=1`, { waitUntil: "networkidle" });
      await page.screenshot({ path: path.join(outputDir, `${viewport.name}-${state}.png`), fullPage: true });

      const result = await page.evaluate(() => {
        const body = document.body;
        const requiredLabels = [
          "Event Context",
          "Asset Relationship",
          "Portfolio / Attention Context",
          "Relationship Evidence + Trust",
          "Relevance Outcome"
        ];
        const text = body.innerText;
        const missingLabels = requiredLabels.filter((label) => !text.includes(label));
        const controls = Array.from(document.querySelectorAll("button"));
        const undersizedControls = controls
          .map((control) => {
            const rect = control.getBoundingClientRect();
            return { label: control.innerText || control.getAttribute("aria-label"), width: rect.width, height: rect.height };
          })
          .filter((item) => item.width < 36 || item.height < 36);
        const horizontalOverflow = document.documentElement.scrollWidth > window.innerWidth + 1;
        const sticky = document.querySelector(".sticky-area");
        const evidence = Array.from(document.querySelectorAll(".card")).find((card) => card.innerText.includes("Relationship Evidence + Trust"));
        const stickyRect = sticky.getBoundingClientRect();
        const evidenceRect = evidence ? evidence.getBoundingClientRect() : null;
        const stickyCoversEvidence = Boolean(evidenceRect && stickyRect.top < evidenceRect.bottom && evidenceRect.top < window.innerHeight);
        return {
          missingLabels,
          undersizedControls,
          horizontalOverflow,
          stickyCoversEvidence,
          scrollWidth: document.documentElement.scrollWidth,
          innerWidth: window.innerWidth
        };
      });

      results.push({ viewport: viewport.name, state, ...result });
    }

    await page.close();
  }

  await browser.close();

  const blockers = results.filter((result) => {
    return result.missingLabels.length || result.horizontalOverflow || result.stickyCoversEvidence;
  });

  const report = {
    status: blockers.length ? "REVISE" : "PASS",
    generatedAt: new Date().toISOString(),
    screenshots: results.length,
    results
  };

  fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
  console.log(JSON.stringify(report, null, 2));

  if (blockers.length) {
    fail(`High-fidelity QA failed with ${blockers.length} blocker(s).`);
  }
})();
