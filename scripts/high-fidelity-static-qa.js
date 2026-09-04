const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const htmlPath = path.join(root, "prototype", "high-fidelity", "index.html");
const outputDir = path.join(root, "artifacts", "high-fidelity");
const reportPath = path.join(outputDir, "static-qa-report.json");
const html = fs.readFileSync(htmlPath, "utf8");

fs.mkdirSync(outputDir, { recursive: true });

const requiredStates = [
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

const requiredTokens = [
  "--nf-surface-dashboard-mobile",
  "--nf-surface-card",
  "--nf-surface-card-muted",
  "--nf-border-default",
  "--nf-shadow-card",
  "--nf-font-sans",
  "--nf-text-xs",
  "--nf-text-sm",
  "--nf-text-base",
  "--nf-text-lg",
  "--nf-text-xl",
  "--nf-mobile-page-padding",
  "--nf-mobile-card-padding",
  "--nf-min-touch-target",
  "--nf-border-focus",
  "--nf-outcome-check-bg",
  "--nf-outcome-no-check-bg",
  "--nf-outcome-insufficient-bg"
];

const requiredLabels = [
  "Event Context",
  "Asset Relationship",
  "Portfolio / Attention Context",
  "Relationship Evidence + Trust",
  "Relevance Outcome",
  "Web에서 자세히 보기",
  "Source / Timestamp / Summary distinction"
];

const forbiddenUiPatterns = [
  /지금 투자/,
  /매수 기회/,
  /위험 종목/,
  /수익 보장/,
  /안전합니다/,
  /문제없는 이벤트/
];

const missingStates = requiredStates.filter((state) => !html.includes(`${state}: {`));
const missingTokens = requiredTokens.filter((token) => !html.includes(token));
const missingLabels = requiredLabels.filter((label) => !html.includes(label));
const forbiddenMatches = forbiddenUiPatterns
  .map((pattern) => ({ pattern: pattern.toString(), matched: pattern.test(html) }))
  .filter((item) => item.matched);

const checks = {
  stateCoverage: missingStates.length === 0,
  tokenReuse: missingTokens.length === 0,
  informationHierarchyLabels: missingLabels.length === 0,
  captureMode: html.includes("capture=1") || html.includes("body.capture"),
  noForbiddenUiCopy: forbiddenMatches.length === 0,
  productionBoundaryCopy: /Production/i.test(html) && /(BLOCKED|blocked|미확정|미검증|확정하지)/.test(html),
  accessibilityHooks: html.includes("aria-label") && html.includes(":focus-visible") && html.includes("--nf-min-touch-target")
};

const report = {
  status: Object.values(checks).every(Boolean) ? "PASS" : "REVISE",
  generatedAt: new Date().toISOString(),
  checks,
  missingStates,
  missingTokens,
  missingLabels,
  forbiddenMatches,
  browserVisualQa: "BLOCKED: Playwright browser binary unavailable in current environment",
  nextVisualCommand: "node scripts/high-fidelity-qa.js"
};

fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));

if (report.status !== "PASS") {
  process.exitCode = 1;
}
