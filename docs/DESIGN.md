# Portfolio-aware Event Triage DESIGN.md

Status: `PASS FOR HIGH-FIDELITY DESIGN / PRODUCTION BLOCKED`  
Last Updated: 2026-09-05 02:10 KST

## 1. Source & Boundary

### Product Source of Truth

| Priority | Source |
|---:|---|
| 1 | `docs/source/10_PORTFOLIO_AWARE_EVENT_TRIAGE_PRD_KO.md` |
| 2 | `docs/source/09_POST_PHASE_CONSISTENCY_AUDIT.md` |
| 3 | `docs/source/05_PHASE5_UX_ARCHITECTURE.md` |
| 4 | `docs/source/06_PHASE6_DESIGN_SPEC.md` |
| 5 | `docs/source/07_PHASE7_PROTOTYPE_QA.md` |
| 6 | `docs/source/04_PHASE4_PRD.md` |
| 7 | `docs/source/FINAL_EXECUTIVE_REPORT.md` |
| 8 | `docs/source/08_PHASE8_PORTFOLIO_CASE_STUDY.md` |

### Design Reference

This repository's `design-system/` is a Valley-style mobile reference layer. It is not an official Valley AI production design system.

| Area | Source |
|---|---|
| Boundary | `design-system/README.md`, `design-system/foundations/00-source-and-boundary.md` |
| Foundations | `01-colors.md`, `02-typography.md`, `03-spacing-radius-shadow.md`, `04-motion-accessibility.md` |
| Tokens | `design-system/tokens/token-map.md`, `design-system/tokens/valley-reference-tokens.css` |
| Components | `buttons-and-cta.md`, `cards-and-surfaces.md`, `badges-tabs-filters.md`, `data-and-evidence.md`, `feedback-states.md` |
| Patterns | `portfolio-aware-event-triage.md`, `trust-and-data-state.md`, `investment-analysis-screen.md` |
| Checklist | `design-system/checklists/mobile-design-qa.md` |

### Prototype Reference

The existing prototype is valid for mock scenario coverage, but its previous first viewport order is superseded for this design spec.

### Production Blockers

Production Data Contract, field policy, Outcome logic, freshness SLA, Web handoff payload, API integration, real user validation, screen reader manual test, and production acceptance criteria remain `BLOCKED` or `NOT_TESTED`.

## 2. Screen Purpose

The screen answers:

```text
이 이벤트가 내 보유/관심/관련 자산과 어떤 관계가 있고,
현재 확인 가능한 근거 기준에서 더 확인해야 하는가?
```

It must not answer:

```text
사야 하는가 / 팔아야 하는가 / 안전한가 / 위험한가 / 수익 가능성이 큰가
```

## 3. Locked Information Hierarchy

```text
Event Context
-> Asset Relationship
-> Portfolio / Attention Context
-> Relationship Evidence + Trust
-> Relevance Outcome
-> Web Handoff
```

Outcome can be visually prominent after Evidence, but it must not appear as a system conclusion before the user can see source/data limits.

## 4. Screen Anatomy

| Section | Purpose | Information | Priority | Component | Interaction | State | Accessibility |
|---|---|---|---|---|---|---|---|
| Top Bar | Preserve navigation control | Back/close, page title | High | Existing tertiary button / icon button | Close or return visual affordance | Normal, loading, error | 44px target, visible label or aria-label |
| Mock / Data Disclosure | Prevent production overclaim | Mock-only or data state note | High | Feedback state surface / Data State Badge | None or details disclosure | All states | Text visible; not color-only |
| Event Context | Identify the event first | Event type, title, occurred/scheduled time, as-of | High | Secondary Card + Event Type Badge | Title can wrap; optional details expand | Normal, loading, stale, error | Logical reading order starts here after top bar |
| Asset Relationship | Explain related asset | Asset name/ticker, relationship reason | High | Secondary Card + Relationship Badge | Related asset list expand when multiple | Holding, watchlist, related-only, unresolved | Watchlist copy says interest, not holding |
| Portfolio / Attention Context | Clarify personal context and attention cue | Holding/watchlist/related/unconnected, attention signal, data limitation | High | Secondary Card + Data State Badge | Portfolio unconnected/access action is explanatory only | Connected, unconnected, permission, stale, partial | No portfolio amount/exposure without contract |
| Relationship Evidence + Trust | Show why the relation/outcome is bounded | Evidence type, summary, source, timestamp, AI/system summary distinction, data state | High | Evidence Card | Expand/collapse evidence; source/Web detail CTA | Normal, partial, empty, source unavailable, stale | Source and timestamp remain readable |
| Relevance Outcome | Present non-advisory check-status | One of 3 outcomes, reason, limitation | High | Adapted Outcome Badge + Feedback Surface | No trading CTA; may link back to evidence | Three outcomes, insufficient, partial | Label/copy/icon convey meaning before color |
| Web Handoff | Move deep analysis to Web | CTA label, expected destination, context summary, disabled/error reason | Medium | Primary CTA / Disabled CTA / Retry CTA | Open concept destination, retry on failure | Available, disabled, failure, success simulation | Destination described in text |

## 5. Design System Mapping

| Product Need | Reference File | Token / Component / Pattern | Reuse Status | Note |
|---|---|---|---|---|
| Mobile page background | `tokens/valley-reference-tokens.css` | `--nf-surface-dashboard-mobile` | REUSE | Bright dashboard background. |
| Card surfaces | `cards-and-surfaces.md` | `--nf-surface-card`, `--nf-surface-card-muted`, `--nf-border-default`, `--nf-shadow-card` | REUSE | Use cards sparingly; avoid nested cards. |
| Typography | `02-typography.md` | `--nf-font-sans`, `--nf-text-xs` to `--nf-text-xl`, `--nf-weight-medium`, `--nf-weight-semibold` | REUSE | Event title: `text-lg`/semibold; source: `text-xs`. |
| Spacing | `03-spacing-radius-shadow.md` | `--nf-mobile-page-padding`, `--nf-mobile-card-padding`, `--nf-space-2/3/4/6` | REUSE | Dense but breathable mobile layout. |
| Radius | `03-spacing-radius-shadow.md` | `--nf-radius-lg`, limited `--nf-radius-xl` | REUSE | Repeated cards use 8px; primary summary may use 12px. |
| Relationship labels | `badges-tabs-filters.md` | Relationship Badge | REUSE | Text distinction required. |
| Evidence | `data-and-evidence.md` | Evidence Card, Source, Timestamp, Data State | REUSE | Evidence is limitation/provenance, not blind support for Outcome. |
| Feedback states | `feedback-states.md` | Loading, Empty Evidence, Stale, Permission, Handoff Error | REUSE | Add explicit `PARTIAL` mapping in this spec. |
| Outcome | `badges-tabs-filters.md`, `feedback-states.md` | Outcome Badge, `--nf-outcome-*` tokens | ADAPT | Placement follows Product SoT, not old pattern. |
| Web handoff | `buttons-and-cta.md`, `investment-analysis-screen.md` | Primary CTA, Disabled CTA, Retry CTA | REUSE | Concept affordance only. |
| Trust pattern | `trust-and-data-state.md` | Mock/Data Disclosure, source/timestamp, limitations | REUSE | Must be visible before definitive Outcome interpretation. |
| Triage pattern | `portfolio-aware-event-triage.md` | Relationship, Outcome, Evidence, Handoff pattern | ADAPT | Product SoT overrides first viewport ordering. |

## 6. Component Inventory

| Component | Classification | Reason |
|---|---|---|
| Top Bar / Close Control | REUSE | Standard navigation affordance; real return behavior remains not tested. |
| Mock / Data Disclosure | REUSE | Existing trust/data-state pattern covers mock boundary. |
| Event Context Card | REUSE | Existing secondary card and badge patterns cover identity. |
| Asset Relationship Card | REUSE | Existing card + relationship badge covers relationship explanation. |
| Portfolio / Attention Context Card | EXTEND | Existing relationship/data-state patterns need combined context treatment. |
| Evidence Card | REUSE | Existing data/evidence component fits source, timestamp, summary. |
| Outcome Block | EXTEND | Existing badge/surface exists; placement and copy must follow revised IA. |
| Web Handoff CTA | REUSE | Existing CTA rules cover destination explanation and disabled/error states. |
| State Feedback Surface | EXTEND | Existing states cover most cases; `PARTIAL` and `SOURCE_UNAVAILABLE` must be named explicitly. |

NEW components: `NONE`.

## 7. State Matrix

| State | Trigger | Message | Outcome Behavior | Action | Recovery | Handoff Behavior |
|---|---|---|---|---|---|---|
| Normal | Event, asset, relationship, evidence available | 현재 기준으로 관계와 근거를 확인할 수 있음 | One of 3 concept outcomes may show after evidence | Evidence expand, Web CTA | Close/back visual affordance | Concept CTA available |
| Loading | Initial load | 정보를 불러오는 중 | No definitive outcome | Skeleton + loading text | Wait or close | Disabled |
| Partial | Some relationship/evidence fields missing | 일부 정보는 있으나 판단을 완료하기 부족함 | Prefer limitation or `INSUFFICIENT_DATA` | Show missing fields | Retry if available | Disabled or caveated |
| Empty Evidence | No displayable evidence | 표시 가능한 근거가 없음 | Do not invent source-backed outcome | Explain lack of evidence | Retry/source check | Evidence-dependent handoff disabled |
| Insufficient Data | Required relation/evidence not enough | 판단을 보류함 | Show `INSUFFICIENT_DATA` only | Show missing data type | Retry/check source | Limited or disabled |
| Stale | Portfolio/evidence timestamp old in mock | 최신 정보가 아닐 수 있음 | Avoid definitive wording; show as-of | Show timestamp | Refresh/check latest | Concept CTA only with stale warning |
| Source Unavailable | Source cannot load/verify | 근거 출처를 확인할 수 없음 | Source-backed outcome prohibited | Source retry | Retry/close | Disabled for evidence-dependent destination |
| Portfolio Unconnected | Portfolio/watchlist unavailable | 개인 Portfolio 관계를 확인할 수 없음 | No holding/exposure/impact claim | Explain boundary | Portfolio connection outside scope | No portfolio-aware handoff claim |
| Permission / Access | Source/destination restricted | 접근 제한으로 확인할 수 없음 | No hidden-data-based outcome | Explain limitation | Login/permission outside scope | Disabled or retry after access |
| Generic Error | Service/render failure | 정보를 불러올 수 없음 | Outcome hidden or judgment unavailable | Retry, close | Preserve known context if available | Disabled |
| Handoff Failure | Web handoff simulation fails | Web 분석으로 이동하지 못함 | Preserve local event/asset/relationship/outcome visible | Retry CTA | Stay on detail screen | Retry only; no payload claim |

## 8. Outcome Presentation Rules

| Outcome | Intended Meaning | Visual Treatment | Required Supporting Evidence | Forbidden Interpretation |
|---|---|---|---|---|
| `CHECK_FURTHER` | 확인된 관계 또는 Evidence 기준에서 추가로 확인할 정보가 있음 | Text-first outcome block, warning/info surface, icon/shape cue, reason list | Event/Asset relation, relationship context, evidence or data limit | Risk, urgency, sell, buy, major impact |
| `NO_IMMEDIATE_CHECK_NEEDED` | 현재 정보 범위에서 추가 확인 우선성을 높일 충분한 근거가 없음 | Neutral/basic surface, muted icon/shape, clear scope copy | As-of, relationship scope, limited new evidence explanation | Safe, no impact, ignore, hold recommendation |
| `INSUFFICIENT_DATA` | 판단에 필요한 개인 관련성 또는 evidence가 부족함 | Warning-toned limitation block, missing-data checklist | Missing source/relation/data type and recovery action | No relationship, negative event, unimportant |

Rules:

- Color is secondary. Copy, label, hierarchy, icon/shape, and evidence carry meaning.
- Do not map outcomes to red/green investment safety.
- Outcome reason must cite relationship/evidence/data limitation IDs or visible sections in high-fidelity annotations.

## 9. Evidence / Trust

Evidence design must show:

- Source provenance: source type and source name when available.
- Freshness: occurred/published/updated/as-of timestamp or explicit unknown state.
- AI/system summary distinction: summary is separate from original evidence/source.
- Data limitation: partial, stale, source unavailable, permission/access, or portfolio unconnected state.

Evidence must not:

- make source-free summaries appear definitive;
- hide insufficient data behind a confident outcome;
- upgrade competitor patterns into Valley production requirements;
- expose real account, holding quantity, evaluation amount, profit/loss, or portfolio exposure.

## 10. Portfolio Context

| Context | Meaning | UI Rule | Forbidden |
|---|---|---|---|
| Holding | User holds the asset | Use `보유` label and relationship reason; no amount unless approved | Exposure, P/L, account detail without contract |
| Watchlist | User follows the asset but does not hold it | Use `관심` label and copy that says it is not holding | `보유`, `내 자산 영향`, `Portfolio Impact` |
| Related-only | Asset is related but not personal portfolio/watchlist | Use `관련` or `관련만` style copy | Personalization overclaim |
| Unconnected | Personal portfolio context unavailable | Show limitation and separate account flow boundary | Treat as low importance or no relation |

## 11. Web Handoff

### Concept Affordance

The CTA can show destination label, expected destination category, context summary, and disabled/error reason when blocked.

Examples:

- `Web에서 자세히 보기`
- `실적 및 전망으로 이동`
- `관련 종목 분석 보기`

### Production Contract

The following remain blocked: exact URL, event ID contract, portfolio ID, payload fields, serialization, authentication/session behavior, back/resume contract, and failure API.

## 12. Accessibility

- Touch targets at least `--nf-min-touch-target` / 44px.
- Visible labels for primary actions; icon-only controls need accessible names.
- Focus order follows visual order: Top Bar -> Event -> Asset -> Context -> Evidence -> Outcome -> Handoff.
- Focus indicator uses `--nf-border-focus` or equivalent visible treatment.
- State is never color-only.
- Text contrast must be checked in high-fidelity against chosen surfaces.
- Dynamic text: long Korean/English event titles wrap without overlap.
- Reduced motion follows `prefers-reduced-motion`.
- Screen reader labels are required, but Screen Reader Manual Test remains `NOT_TESTED`.

## 13. Responsive Rules

| Viewport | Rule |
|---|---|
| 320px | Critical stress target; no horizontal scroll, title wraps. |
| 360x800 | Required QA viewport. |
| 390x844 | Required QA viewport. |
| Desktop preview | May show centered mobile shell only; do not turn into Web workspace. |

Layout:

- Use `--nf-mobile-page-padding`.
- Keep sticky CTA from covering evidence/source text.
- Prefer stacked sections over side-by-side cards.
- Avoid dense tables/charts in mobile detail.

## 14. Prototype Paths

High-fidelity must cover:

1. `CHECK_FURTHER` + Holding + evidence + available concept handoff.
2. `NO_IMMEDIATE_CHECK_NEEDED` + Watchlist only.
3. `INSUFFICIENT_DATA`.
4. Related-only.
5. Multiple related assets.
6. Empty Evidence.
7. Partial.
8. Stale.
9. Source Unavailable.
10. Portfolio Unconnected.
11. Permission / Access.
12. Generic Error.
13. Handoff Failure with local context retained.
14. Handoff Success Simulation with production disclosure.

## 15. Traceability Matrix

| Requirement / Decision | Screen Section | Component | State | Design Reference |
|---|---|---|---|---|
| FR-001 Event identity | Event Context | Secondary Card + Event Type Badge | Normal, loading, stale | `cards-and-surfaces.md`, `badges-tabs-filters.md` |
| FR-002 Asset identity | Asset Relationship | Secondary Card | Normal, multiple, unresolved | `cards-and-surfaces.md` |
| FR-003 Relationship separation | Asset / Portfolio Context | Relationship Badge | Holding, watchlist, related, unconnected | `badges-tabs-filters.md`, `portfolio-aware-event-triage.md` |
| FR-004 Three outcomes only | Relevance Outcome | Outcome Block | 3 outcomes | `feedback-states.md`, outcome tokens |
| FR-005 Outcome reason linkage | Evidence + Outcome | Evidence Card + Outcome Block | Normal, partial, insufficient | `data-and-evidence.md` |
| FR-006 Source/freshness | Evidence + Trust | Evidence Card | Normal, stale, source unavailable | `data-and-evidence.md`, `trust-and-data-state.md` |
| FR-007 Data states | Disclosure / Evidence / Outcome | Feedback Surface | Required state matrix | `feedback-states.md` |
| FR-008 Progressive evidence | Evidence | Evidence Card | Normal, empty, partial | `data-and-evidence.md` |
| FR-009 Handoff destination copy | Web Handoff | Primary CTA | Available, disabled | `buttons-and-cta.md` |
| FR-010 Handoff error retention | Web Handoff | Retry CTA + Error Surface | Handoff Failure | `buttons-and-cta.md`, `feedback-states.md` |
| FR-011 Multiple assets | Asset Relationship | Extended related asset list | Multiple | `portfolio-aware-event-triage.md` |
| FR-012 Portfolio unconnected | Portfolio Context | Data State Badge | Portfolio Unconnected | `feedback-states.md` |
| FR-013 Insufficient data restriction | Outcome / Handoff | Disabled CTA + limitation block | Insufficient, partial | `feedback-states.md` |
| FR-015 Back/return visual | Top Bar | Tertiary/Icon Button | All | `buttons-and-cta.md` |
| FR-018 Web-only depth | Web Handoff | CTA and collapsed detail | All | `investment-analysis-screen.md` |
| FR-019 No advice CTA/score | Outcome / CTA | Text rules | All | `mobile-design-qa.md` |

## 16. Design System Deviations

### Deviation 1: First Viewport Order

Reference: `design-system/patterns/portfolio-aware-event-triage.md` and `foundations/03-spacing-radius-shadow.md` place Relationship and Outcome before Event/Evidence.

Required change:

```text
Event Context
-> Asset Relationship
-> Portfolio / Attention Context
-> Relationship Evidence + Trust
-> Relevance Outcome
-> Web Handoff
```

Reason: Product SoT after Targeted Revision rejects outcome-first as the current IA.

Scope: Portfolio-aware Event Triage only.

### Deviation 2: Outcome Color Use

Reference: `--nf-outcome-*` tokens exist.

Required change: Use tokens as secondary treatment only; copy, label, icon/shape, and evidence linkage define meaning.

Reason: Financial color safety and recommendation-risk prevention.

Scope: Outcome block and data-state variants.

## Final Gate

```text
DESIGN SPEC: PASS
DESIGN SYSTEM ALIGNMENT: PASS WITH ADAPTATION
READY FOR HIGH-FIDELITY DESIGN: YES
MOCK / FIXTURE DEVELOPMENT: PASS FOR CONCEPT
PRODUCTION: BLOCKED
```
