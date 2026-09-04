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
