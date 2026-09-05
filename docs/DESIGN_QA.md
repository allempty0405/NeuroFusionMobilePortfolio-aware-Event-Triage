# DESIGN QA

Date: 2026-09-05 02:10 KST
Target: `docs/DESIGN.md`
Checklist Source: `design-system/checklists/mobile-design-qa.md`

## QA Result

```text
DESIGN SPEC: PASS
DESIGN SYSTEM ALIGNMENT: PASS WITH ADAPTATION
READY FOR HIGH-FIDELITY DESIGN: YES
MOCK / FIXTURE DEVELOPMENT: PASS FOR CONCEPT
PRODUCTION: BLOCKED
```

## Independent Design QA

| Check | Result | Evidence / Note |
|---|---|---|
| Product SoT alignment | PASS | Uses restored Korean PRD and Phase 5 IA. |
| Primary Journey | PASS | `Event -> Asset -> Context -> Evidence -> Outcome -> Handoff`. |
| Information hierarchy | PASS | Outcome appears after Evidence/Trust in the committed anatomy. |
| Portfolio vs Watchlist | PASS | Holding, Watchlist, Related-only, Unconnected are separated. |
| Evidence-before-definitive-outcome | PASS | Evidence/Trust section precedes Relevance Outcome. |
| Outcome recommendation risk | PASS | Outcome rules include forbidden interpretations and no trading CTA. |
| State completeness | PASS | Required states are included in State Matrix and Prototype Paths. |
| Source / freshness visibility | PASS | Evidence/Trust requires source, timestamp, and unknown/stale handling. |
| Mock / Production boundary | PASS | Production contract and blockers are preserved. |
| Design-system reuse | PASS | Existing tokens/components are reused or extended. |
| Unnecessary new components | PASS | New components: `NONE`. |
| Accessibility | PARTIAL | Requirements documented; screen reader manual test remains `NOT_TESTED`. |
| Responsive behavior | PARTIAL | 320/360/390 rules documented; visual frame validation remains next step. |
| Handoff boundary | PASS | Concept affordance and production contract are separated. |
| Requirement traceability | PASS | Traceability matrix maps FRs to sections/components/states/references. |

## Mobile Design Checklist Run

| Checklist Area | Result | Notes |
|---|---|---|
| Scope | PASS | Single mobile detail screen; Web remains Analysis Workspace. |
| First Viewport | PASS WITH ADAPTATION | Reference checklist expected Relationship/Outcome early; Product SoT requires Event/Evidence before Outcome. |
| Relationship | PASS | Holding/Watchlist/Related-only/Unconnected distinctions preserved. |
| Outcome | PASS | No buy/sell/hold, safety, urgency, risk, or impact-score semantics. |
| Evidence & Trust | PASS | Source, timestamp, mock, stale, permission, empty evidence covered. |
| Interaction | PASS FOR CONCEPT | Expand/collapse and handoff states specified; production back behavior not tested. |
| Accessibility | PARTIAL | Touch/focus/non-color/dynamic text rules specified; manual screen reader test not performed. |
| Financial Safety | PASS | No production requirement elevation or portfolio value exposure. |

## Design-system Usage Report

| Area | Reference File | Token / Component / Pattern | Used / Adapted / Rejected | Reason |
|---|---|---|---|---|
| Background | `tokens/valley-reference-tokens.css` | `--nf-surface-dashboard-mobile` | Used | Matches mobile dashboard surface. |
| Cards | `components/cards-and-surfaces.md` | Secondary Card, Evidence Card, `--nf-surface-card`, `--nf-surface-card-muted` | Used | Covers Event, Asset, Context, Evidence. |
| Outcome | `tokens/valley-reference-tokens.css`, `feedback-states.md` | `--nf-outcome-*`, Outcome Badge | Adapted | Outcome placement follows Product SoT and color is secondary. |
| Relationship | `badges-tabs-filters.md` | Relationship Badge | Used | Separates Holding, Watchlist, Related-only, Unconnected. |
| Evidence | `data-and-evidence.md` | Evidence Card, Source, Timestamp, Data State | Used | Supports trust and limitation display. |
| Feedback | `feedback-states.md` | Loading, Empty, Stale, Permission, Error | Adapted | Adds explicit `PARTIAL` and `SOURCE_UNAVAILABLE` naming. |
| Handoff | `buttons-and-cta.md` | Primary CTA, Disabled CTA, Retry CTA | Used | Supports concept handoff and error recovery. |
| Pattern | `portfolio-aware-event-triage.md` | First viewport sequence | Adapted | Original ordering conflicts with revised IA. |
| Accessibility | `04-motion-accessibility.md` | `--nf-min-touch-target`, reduced motion, non-color cue | Used | Sets hi-fi validation requirements. |

## New / Extended Components

New components: `NONE`.

Extended components:

| Component | Extension | Reason |
|---|---|---|
| Portfolio / Attention Context Card | Combines relationship badge, attention cue, and data state | Needed to preserve personal context without exposing unapproved portfolio fields. |
| Outcome Block | Uses existing badge/surface but moves after Evidence/Trust | Required by Targeted Revision IA. |
| State Feedback Surface | Names `PARTIAL` and `SOURCE_UNAVAILABLE` explicitly | Required by downstream state mapping. |

## State Coverage

| State | Covered | Note |
|---|---|---|
| Normal | YES | Full concept content. |
| Loading | YES | Skeleton + text; no outcome. |
| Partial | YES | Limitation-first behavior. |
| Empty Evidence | YES | No invented conclusion. |
| Insufficient Data | YES | Judgment deferred. |
| Stale | YES | Timestamp and limitation. |
| Source Unavailable | YES | Source-backed outcome prohibited. |
| Portfolio Unconnected | YES | No holding/exposure claim. |
| Permission / Access | YES | Limitation separate from event importance. |
| Generic Error | YES | Outcome hidden or unavailable. |
| Handoff Failure | YES | Local context retained; retry. |

## Production Claim Check

Forbidden claims checked:

| Claim | Result |
|---|---|
| Production Ready | PASS: not claimed |
| API Integrated | PASS: not claimed |
| Real Portfolio Connected | PASS: not claimed |
| Outcome Logic Validated | PASS: not claimed |
| Production Handoff Complete | PASS: not claimed |
| Real User Validated | PASS: not claimed |
| Accessibility Validated | PASS: not claimed |

## Remaining Issues

| Issue | Status | Next Action |
|---|---|---|
| Exact Outcome copy/placement | DESIGN_HYPOTHESIS | Validate in high-fidelity review. |
| Long title wrapping | PARTIAL | Test 320/360/390px frames. |
| Screen reader manual test | NOT_TESTED | Run with assistive tech before production. |
| Real App/Web back navigation | NOT_TESTED | Requires integrated route environment. |
| Production data/logic/handoff | BLOCKED | Requires owner-approved contracts. |

## Final Decision

`docs/DESIGN.md` is ready to guide high-fidelity wireframe/design and mock fixture implementation. It is not a production release spec.

---

## High-fidelity QA Addendum

Date: 2026-09-05 02:30 KST
Target: `prototype/high-fidelity/index.html`

### Frame Inventory

| Frame / Variant | Status | Note |
|---|---|---|
| 01 Normal — `CHECK_FURTHER` / Holding | CREATED | Canonical frame target. |
| 02 `NO_IMMEDIATE_CHECK_NEEDED` / Watchlist | CREATED | Watchlist is not expressed as holding. |
| 03 `INSUFFICIENT_DATA` | CREATED | Judgment deferred. |
| 04 Related-only | CREATED | Personal portfolio claim avoided. |
| 05 Multiple Related Assets | CREATED | Representative asset and related assets separated in copy. |
| 06 Portfolio Unconnected | CREATED | Personal context limitation shown. |
| 07 Partial | CREATED | Limitation-first treatment. |
| 08 Empty Evidence | CREATED | No source-backed conclusion. |
| 09 Stale | CREATED | Timestamp/as-of limitation shown. |
| 10 Source Unavailable | CREATED | Source unavailable distinct from empty evidence. |
| 11 Permission / Access | CREATED | Access limitation separate from event importance. |
| 12 Generic Error | CREATED | Retry/close behavior represented. |
| 13 Loading | CREATED | Skeleton + text; no outcome. |
| 14 Handoff Failure | CREATED | Local context retained in UI. |
| 15 Handoff Success Simulation | CREATED | Concept simulation only; production handoff not verified. |

### Viewport Coverage

| Viewport | Result | Evidence |
|---|---|---|
| 360x800 | BLOCKED | Playwright package exists, but Chromium binary is unavailable in this environment. |
| 390x844 | BLOCKED | Same browser binary blocker. |
| 320x800 stress | BLOCKED | Same browser binary blocker. |

### Static QA

Command:

```text
node scripts/high-fidelity-static-qa.js
```

Result:

```text
PASS
```

Evidence:

- `artifacts/high-fidelity/static-qa-report.json`
- Required 15 state keys present.
- Required reference tokens present.
- Required hierarchy labels present.
- Capture mode exists for screenshot generation.
- Forbidden investment-action UI copy not found.
- Production boundary copy present.
- Accessibility hooks present.

### Browser Visual QA

Command attempted:

```text
node scripts/high-fidelity-qa.js
```

Result:

```text
BLOCKED: Playwright Chromium binary unavailable.
```

Persistent evidence:

- `artifacts/high-fidelity/visual-qa-report.json`

Install attempt:

```text
npx playwright install chromium
```

Result:

```text
BLOCKED: download timed out repeatedly.
```

### Design-system Reuse

| Area | Reference | Result |
|---|---|---|
| Background | `--nf-surface-dashboard-mobile` | REUSE |
| Card surfaces | `--nf-surface-card`, `--nf-surface-card-muted`, `--nf-border-default`, `--nf-shadow-card` | REUSE |
| Typography | `--nf-font-sans`, `--nf-text-*`, `--nf-weight-*` | REUSE |
| Spacing | `--nf-mobile-page-padding`, `--nf-mobile-card-padding`, `--nf-space-*` | REUSE |
| Touch target | `--nf-min-touch-target` | REUSE |
| Focus | `--nf-border-focus` and `:focus-visible` | REUSE |
| Outcome surfaces | `--nf-outcome-*` | ADAPT: color is secondary cue |

### Issues

| Severity | Issue | Status | Required Fix |
|---|---|---|---|
| BLOCKER | Browser visual QA could not run in current environment. | OPEN | Run `node scripts/high-fidelity-qa.js` where Playwright Chromium is installed. |
| MAJOR | 360/390/320 screenshot verification not completed. | OPEN | Generate screenshots and inspect first viewport, wrapping, and sticky CTA overlap. |
| MINOR | Exact visual polish of outcome prominence remains unreviewed. | OPEN | Review after screenshots or Figma frames. |

### High-fidelity Gate

```text
HIGH-FIDELITY FRAME SET: CREATED
HIGH-FIDELITY DESIGN: REVISE — visual QA blocked
DESIGN SYSTEM ALIGNMENT: PASS
RESPONSIVE QA: BLOCKED — browser screenshot unavailable
ACCESSIBILITY VISUAL QA: PARTIAL
MOCK PROTOTYPE: PASS FOR STATIC STRUCTURE
PRODUCTION: BLOCKED
```

---

## High-fidelity Visual QA Continuation

Date: 2026-09-05 13:46 KST
Target: `prototype/high-fidelity/index.html`

### Browser Environment

| Item | Result | Evidence |
|---|---|---|
| Playwright package | AVAILABLE | `require("playwright/package.json")` returned `1.62.1`. |
| Project-local Playwright dependency | NOT_PRESENT | `npm ls playwright --depth=0` returned empty project dependency tree. |
| System Chromium / Chrome | NOT_FOUND | No executable found under `/workspace`, Codex primary runtime, `/usr`, or `/opt`. |
| Browser install attempt | BLOCKED | `npx playwright install chromium --only-shell` timed out repeatedly. |
| Extended-timeout install attempt | BLOCKED | `PLAYWRIGHT_DOWNLOAD_CONNECTION_TIMEOUT=120000 npx playwright install chromium --only-shell` received truncated zip / `502 Bad Gateway` responses. |
| Full Chromium install attempt | BLOCKED | `PLAYWRIGHT_DOWNLOAD_CONNECTION_TIMEOUT=120000 npx playwright install chromium` received `0 MiB` / truncated zip responses. |
| System package route | BLOCKED | `apt-get update` failed without sandbox override; `apt-get -o APT::Sandbox::User=root update` completed, but `chromium` had no deb candidate and `chromium-browser` was only a snap transitional package. |
| Temporary Playwright 1.63 route | BLOCKED | `npx` tried Playwright `1.63.0` and Chromium headless shell `v1243`; CDN still returned `0 MiB` / truncated zip responses. |

### Screenshot Count

```text
0
```

No PNG screenshot evidence was generated in this environment.

### Viewport Coverage

| Viewport | Result | Note |
|---|---|---|
| 360x800 | BLOCKED | Chromium rendering unavailable. |
| 390x844 | BLOCKED | Chromium rendering unavailable. |
| 320x800 stress | BLOCKED | Chromium rendering unavailable. |

### State Coverage

| State Set | Result | Note |
|---|---|---|
| 15 high-fidelity variants | STATIC PASS | HTML contains required state keys. |
| 360/390 browser-rendered variants | BLOCKED | No Chromium screenshot evidence. |
| 320 stress browser-rendered variants | BLOCKED | No Chromium screenshot evidence. |

### Visual Audit Result

| Check | Result | Note |
|---|---|---|
| First viewport | NOT_TESTED | Requires screenshots. |
| Visual hierarchy | NOT_TESTED | DOM/static structure is present; visual emphasis not verified. |
| Title wrapping | NOT_TESTED | Requires 320/360/390 screenshots. |
| Badge wrapping | NOT_TESTED | Requires screenshots. |
| Source wrapping | NOT_TESTED | Requires screenshots. |
| Sticky CTA overlap | NOT_TESTED | Requires browser geometry and screenshots. |
| Financial safety visual interpretation | NOT_TESTED | Requires visual review of rendered frames. |
| Accessibility visual result | PARTIAL | Static hooks present; visual QA blocked. |

### Regression Result

```text
node scripts/high-fidelity-qa.js
Result: BLOCKED
Screenshots: 0

node scripts/high-fidelity-static-qa.js
Result: PASS
```

Latest execution:

```text
visual_exit=2
static_exit=0
```

### Issues

| Severity | Issue | Status | Required Fix |
|---|---|---|---|
| BLOCKER | Playwright Chromium binary cannot be installed or located in this environment. | OPEN | Run QA in an environment where Chromium binary download or system browser access works. |
| MAJOR | Responsive visual QA for 320/360/390 remains incomplete. | OPEN | Generate screenshots and inspect wrapping, hierarchy, and sticky CTA overlap. |
| MINOR | Visual polish of Outcome prominence remains unreviewed. | OPEN | Review after screenshot evidence exists. |

### Fixes Applied

```text
NONE
```

No HTML design changes were made because no rendered screenshot defect was observed.

### NOT_TESTED

- Screen reader manual test.
- Real App/Web Back behavior.
- Browser-rendered financial safety interpretation.
- Browser-rendered sticky CTA overlap.

### Production Blockers

Production Data Contract, Production Field definition, Production Outcome Logic, Source Freshness SLA, Production Web Handoff Payload, Actual API Integration, Real User Validation, Screen Reader Manual Test, and Production Acceptance Criteria remain `BLOCKED` or `NOT_TESTED`.

---

## High-fidelity Visual QA CI Path

Date: 2026-09-05 16:09 KST
Target: `.github/workflows/high-fidelity-visual-qa.yml`

### Purpose

Provide a Chromium-capable execution path for the existing high-fidelity QA scripts without changing Product policy, `docs/DESIGN.md`, or `prototype/high-fidelity/index.html`.

### Workflow Coverage

| Step | Command / Action | Result |
|---|---|---|
| Checkout | `actions/checkout@v4` | CONFIGURED |
| Node setup | `actions/setup-node@v4`, Node `22` | CONFIGURED |
| Playwright package | `npm install --no-save playwright@1.62.1` | CONFIGURED |
| Static QA | `node scripts/high-fidelity-static-qa.js` | CONFIGURED |
| Chromium shell | `npx playwright install chromium --only-shell` | CONFIGURED |
| Browser visual QA | `node scripts/high-fidelity-qa.js` | CONFIGURED |
| Artifact upload | `artifacts/high-fidelity/*.png`, `static-qa-report.json`, `visual-qa-report.json` | CONFIGURED |

### Local Regression

```text
node scripts/high-fidelity-static-qa.js
Result: PASS
```

### Current Visual QA Status

```text
RESPONSIVE / VISUAL QA: BLOCKED
```

No screenshot evidence has been generated yet. The workflow is an execution path for the required browser QA, not a substitute for visual inspection.

### Next Review Requirement

After the workflow generates the `high-fidelity-visual-qa` artifact, inspect PNGs for:

- 360x800, 390x844, and 320x800 stress coverage.
- First viewport hierarchy.
- `Event -> Asset -> Context -> Evidence -> Outcome -> Handoff` visual order.
- Title, ticker, badge, source, and timestamp wrapping.
- Sticky CTA overlap.
- Financial safety interpretation.
- Non-color accessibility cues.

### First CI Run Result

Date: 2026-09-05 16:18 KST
Run: `33951946027`
Head SHA: `934ac062b9268881c22e849a09407a6447a79f86`
Artifact: `9965108437`

| Area | Result | Evidence / Note |
|---|---|---|
| Chromium install | PASS | GitHub Actions installed Playwright Chromium shell. |
| Screenshot generation | PARTIAL | 34 PNG files were generated and uploaded. |
| Korean text rendering | REVISE | Screenshots showed missing glyph boxes for Korean text because CJK fonts were absent. |
| QA script result | REVISE | Loading states were treated as missing complete-state labels; hidden capture controls were measured as `0x0`. |
| Product HTML defects | NOT_CONFIRMED | No product UI fix was made because the first screenshot set was not valid for final visual judgment. |

### Infrastructure Fixes Applied

| File | Change | Reason |
|---|---|---|
| `.github/workflows/high-fidelity-visual-qa.yml` | Install `fonts-noto-cjk` before browser visual QA. | Required for Korean screenshot readability in GitHub Actions. |
| `scripts/high-fidelity-qa.js` | Ignore hidden controls when measuring button sizes. | Capture-mode review controls should not create false accessibility failures. |
| `scripts/high-fidelity-qa.js` | Use loading-state-specific required labels. | Loading intentionally avoids definitive Outcome presentation. |

### Regression After Infrastructure Fix

```text
node --check scripts/high-fidelity-qa.js
Result: PASS

node --check scripts/high-fidelity-static-qa.js
Result: PASS

node scripts/high-fidelity-static-qa.js
Result: PASS

node scripts/high-fidelity-qa.js
Result: BLOCKED locally because Chromium remains unavailable in this container.
```

---

## High-fidelity Visual QA Final Result

Date: 2026-09-05 17:28 KST
Run: `33952279661`
Head SHA: `3e15d812ead7573e0a967dd9cf01deb7cf3450fd`
Artifact: `9965214345`

### Browser Environment

| Area | Result | Evidence |
|---|---|---|
| GitHub Actions Chromium | PASS | Playwright Chromium shell installed and browser QA completed. |
| Korean font rendering | PASS | `fonts-noto-cjk` installed; screenshots render Korean text legibly. |
| Local Chromium | BLOCKED | Local container still lacks Playwright Chromium binary. |

### Screenshot Inventory

| Viewport | States | Screenshot Count | Result |
|---|---:|---:|---|
| 360x800 | 15 | 15 | PASS |
| 390x844 | 15 | 15 | PASS |
| 320x800 stress | 4 | 4 | PASS |
| Contact sheets | 3 | 3 | PASS |

Total persisted PNG evidence: `37` files.

### Automated QA Result

```text
node scripts/high-fidelity-static-qa.js
Result: PASS

node scripts/high-fidelity-qa.js
Result: PASS
Screenshots: 34
Blockers: 0
Undersized controls: 0
```

### Visual Review

| Check | Result | Note |
|---|---|---|
| First viewport | PASS | Event identity, asset identity, relationship, context, and trust cue are visible before Outcome. |
| Visual hierarchy | PASS | Screens read as `Event -> Asset -> Context -> Evidence -> Outcome -> Handoff`. |
| Title wrapping | PASS | 320/360/390 titles wrap without horizontal overflow or ticker collision. |
| Badge wrapping | PASS | Holding, Watchlist, Related, Source, Error, and data-state badges remain contained. |
| Source wrapping | PASS | Source, timestamp, and summary distinction remain legible. |
| Sticky CTA overlap | PASS | Automated geometry and screenshot review show no Evidence overlap. |
| Financial safety | PASS | Outcomes are copy-led and do not read as buy/sell/hold, danger, safety, or portfolio impact scoring. |
| Accessibility visual | PASS FOR VISUAL REQUIREMENTS | Touch targets, visible labels, disabled state, and non-color cues are visible. |

### Issues

| Severity | Issue | Status |
|---|---|---|
| BLOCKER | None found in CI screenshot review. | CLOSED |
| MAJOR | None found in CI screenshot review. | CLOSED |
| MINOR | Further visual polish can be handled during portfolio/Figma composition. | OPEN |

### Fixes Applied

- CI workflow now installs Korean font support before screenshot QA.
- Visual QA script ignores hidden capture-mode controls.
- Visual QA script uses loading-state-specific label expectations.
- `prototype/high-fidelity/index.html` was not changed.

### Final High-fidelity Gate

```text
HIGH-FIDELITY DESIGN: PASS
STATIC QA: PASS
RESPONSIVE / VISUAL QA: PASS
DESIGN SYSTEM ALIGNMENT: PASS
ACCESSIBILITY VISUAL QA: PASS FOR VISUAL REQUIREMENTS
FINANCIAL SAFETY: PASS
SCREEN READER: NOT_TESTED
REAL APP/WEB BACK: NOT_TESTED
PRODUCTION: BLOCKED
```
