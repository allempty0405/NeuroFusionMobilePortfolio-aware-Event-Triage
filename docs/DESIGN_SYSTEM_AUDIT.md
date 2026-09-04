# DESIGN SYSTEM AUDIT

Audit timestamp: 2026-09-04 16:35 KST
Scope: Existing `design-system/` repository files only.

## Audit Result

```text
DESIGN SYSTEM INVENTORY: PASS FOR REFERENCE INVENTORY
DESIGN SYSTEM ALIGNMENT TO FINAL PRODUCT IA: REQUIRES CANONICAL PRODUCT SOURCE VERIFICATION
READY TO DRAFT DESIGN.md: NO — Canonical product files missing
```

## Boundary

- FACT: The design-system folder defines itself as a reference system derived from observed Valley AI web style structure.
- FACT: It is not an official Valley AI production design system.
- FACT: It excludes actual API/data contract, investment judgment logic, buy/sell/hold recommendations, and actual portfolio value display policy.

## Product Need → Reference Matrix

| Product Need | Reference File | Existing Token / Component / Pattern | Reuse Status | Gap |
|---|---|---|---|---|
| Mobile dashboard background | `design-system/tokens/valley-reference-tokens.css` | `--nf-surface-dashboard-mobile` | REUSE | None for reference design. |
| Card surfaces | `tokens/valley-reference-tokens.css`, `components/cards-and-surfaces.md` | `--nf-surface-card`, `--nf-surface-card-muted`, `--nf-shadow-card`, `--nf-radius-lg`, `--nf-radius-xl` | REUSE | Final density must be checked in high-fidelity. |
| Event identity | `components/cards-and-surfaces.md`, `components/badges-tabs-filters.md` | Secondary Card, Event Type Badge | REUSE | Exact title wrapping must be tested at 360px. |
| Asset identity | `components/cards-and-surfaces.md`, `patterns/investment-analysis-screen.md` | Secondary Card, Asset identity within mobile triage | REUSE | Production asset fields remain blocked. |
| Portfolio vs Watchlist relationship | `patterns/portfolio-aware-event-triage.md`, `components/badges-tabs-filters.md` | Relationship Badge: Holding / Watchlist / Related-only / Unconnected | REUSE | Must preserve Watchlist ≠ Holding; no exposure/holding amount for Watchlist. |
| Relationship Evidence | `components/data-and-evidence.md`, `patterns/trust-and-data-state.md` | Evidence Card, Source, Timestamp, Data State | REUSE | Requires restored Product SoT to determine exact evidence hierarchy. |
| Source provenance | `components/data-and-evidence.md`, `patterns/trust-and-data-state.md` | Source / Timestamp / Source Missing pattern | REUSE | Source-unavailable copy must be aligned to PRD state matrix. |
| Freshness visibility | `components/data-and-evidence.md`, `components/feedback-states.md`, `patterns/trust-and-data-state.md` | Timestamp, Stale Data, Data State Badge | REUSE | Freshness SLA remains production-blocked. |
| AI summary distinction | `components/data-and-evidence.md` | AI/system summary separated from evidence card/source | REUSE | Must not imply source text was AI-generated or vice versa. |
| Outcome presentation | `foundations/01-colors.md`, `tokens/valley-reference-tokens.css`, `components/badges-tabs-filters.md`, `components/feedback-states.md` | `--nf-outcome-check-*`, `--nf-outcome-no-check-*`, `--nf-outcome-insufficient-*`, Outcome Badge | ADAPT | Outcome must appear after evidence/trust if Canonical SoT confirms revised IA. Avoid strong red/green signal mapping. |
| Outcome semantic safety | `foundations/01-colors.md`, `components/buttons-and-cta.md`, `components/feedback-states.md`, `checklists/mobile-design-qa.md` | Neutral/warning/info treatment, forbidden copy lists | REUSE | Must run production-claim and recommendation-risk search after `DESIGN.md`. |
| Loading state | `components/feedback-states.md`, `foundations/04-motion-accessibility.md` | Skeleton + text rule, reduced motion rule | REUSE | Loading copy to be defined in `DESIGN.md`. |
| Partial state | `components/feedback-states.md`, `patterns/trust-and-data-state.md` | Data State pattern | ADAPT | `PARTIAL` is not named exactly in current reference; must be explicitly represented in `DESIGN.md`. |
| Empty Evidence | `components/feedback-states.md`, `components/data-and-evidence.md` | Empty Evidence, Missing Evidence | REUSE | Must avoid implying event is unimportant. |
| Insufficient Data | `foundations/01-colors.md`, `components/feedback-states.md` | Warning-oriented non-negative state tone | REUSE | Outcome behavior must follow Product SoT. |
| Stale | `components/feedback-states.md`, `patterns/trust-and-data-state.md` | Stale Data, timestamp requirement | REUSE | Production SLA blocked. |
| Source Unavailable | `components/data-and-evidence.md`, `patterns/trust-and-data-state.md` | Source Missing pattern | ADAPT | Current Product state name must be preserved as `SOURCE_UNAVAILABLE`. |
| Portfolio Unconnected | `components/feedback-states.md`, `patterns/portfolio-aware-event-triage.md` | Portfolio Unconnected / Unconnected relationship | REUSE | Must separate connection CTA from outcome judgment. |
| Permission / Access | `components/feedback-states.md`, `patterns/trust-and-data-state.md`, `components/buttons-and-cta.md` | Permission Restricted, Disabled CTA | REUSE | Must avoid making permission state look like event importance. |
| Generic Error | `components/feedback-states.md` | Error copy principles | ADAPT | Generic Error state must be explicit in `DESIGN.md`. |
| Handoff Failure | `components/buttons-and-cta.md`, `components/feedback-states.md` | Retry CTA, Handoff Error, context retention | REUSE | Production payload remains blocked. |
| Web Handoff affordance | `components/buttons-and-cta.md`, `patterns/investment-analysis-screen.md`, `patterns/portfolio-aware-event-triage.md` | Primary CTA, Web-only Deep Analysis list | REUSE | Concept affordance only; no production payload claim. |
| Accessibility | `foundations/04-motion-accessibility.md`, `tokens/valley-reference-tokens.css`, `checklists/mobile-design-qa.md` | `--nf-min-touch-target`, visible focus, non-color cue, reduced motion | REUSE | Screen Reader Manual Test remains NOT_TESTED. |
| Responsive mobile portrait | `foundations/03-spacing-radius-shadow.md`, `tokens/valley-reference-tokens.css`, `checklists/mobile-design-qa.md` | `--nf-mobile-page-padding`, `--nf-mobile-card-padding`, 360x800/390x844 checklist | REUSE | Hi-fi viewport validation still required. |

## Component Inventory Classification

| Component / Pattern | Classification | Reason |
|---|---|---|
| Primary Web Handoff CTA | REUSE | Existing CTA guidance covers Web analysis movement and forbidden investment language. |
| Secondary Evidence CTA | REUSE | Existing button guidance covers evidence/source expansion. |
| Retry CTA | REUSE | Existing button guidance covers retry/error. |
| Event / Asset Card | REUSE | Existing card/surface guidance covers Event/Asset information. |
| Evidence Card | REUSE | Existing data/evidence guidance covers source/timestamp/summary. |
| Relationship Badge | REUSE | Existing badge and pattern guidance covers Holding/Watchlist/Related-only/Unconnected. |
| Outcome Badge | ADAPT | Existing outcome badge exists, but final placement must follow Product SoT and evidence-before-definitive-outcome rule. |
| Data State Badge | ADAPT | Existing badge/state guidance exists, but Product state names like `PARTIAL` and `SOURCE_UNAVAILABLE` must be preserved explicitly. |
| Trust Disclosure | REUSE | Existing trust/data-state pattern covers Mock/Data Disclosure and source limitations. |
| Sticky CTA shell | REUSE | Existing CTA guidance permits sticky CTA with bottom spacing. |
| High-fidelity custom visual language | NEW_REQUIRED? NO | Existing reference system is sufficient; no new visual language should be introduced without a specific product/accessibility gap. |

## Potential Conflict / Adaptation Required

| Item | Observation | Risk | Required Handling |
|---|---|---|---|
| First viewport pattern | `patterns/portfolio-aware-event-triage.md` recommends `Mock/Data Disclosure → Personal Relationship → Relevance Outcome → Event / Asset Identity → Short Reason → CTA`. | May recreate the earlier Outcome-first problem if used blindly. | In `DESIGN.md`, adapt the pattern to the restored Canonical IA. Outcome can be previewed only as `DESIGN_HYPOTHESIS` unless evidence/trust hierarchy is preserved. |
| Primary card naming | `cards-and-surfaces.md` names `Relationship + Outcome` as the Primary Card. | May over-emphasize outcome before evidence. | Reuse surface tokens but rename/anatomize according to Product SoT after Canonical verification. |
| Outcome color tokens | CSS contains outcome-specific warning/basic tokens. | Could still be over-read as risk/safety if copy and hierarchy are weak. | Use copy, labels, icon/shape, and evidence before color. Color remains secondary. |

## QA Checklist Availability

`design-system/checklists/mobile-design-qa.md` is available and must be executed after `docs/DESIGN.md` is drafted.

Current QA status:

```text
DESIGN QA: NOT_TESTED
SCREEN READER MANUAL TEST: NOT_TESTED
RESPONSIVE HI-FI VALIDATION: NOT_TESTED
PRODUCTION CLAIM CHECK: NOT_TESTED
```

## Design-system Audit Decision

```text
REFERENCE INVENTORY: PASS
REUSE READINESS: PASS WITH ADAPTATION
PATTERN ALIGNMENT: REVISE AFTER CANONICAL SOURCE RESTORE
READY FOR DESIGN.md: NO
PRODUCTION: BLOCKED
```
