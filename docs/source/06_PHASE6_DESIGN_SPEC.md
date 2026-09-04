# Phase 6 - Visual Design & Interactive Prototype

## Phase Goal

Create a high-fidelity local concept prototype for one Portfolio-aware Event Triage detail screen, with required state variants and mock disclosure.

## Prototype Path

- Prototype: `prototype/index.html`
- QA script: `prototype/qa-check.js`
- QA result: `prototype/screenshots/qa-results.json`
- Screenshots:
  - `prototype/screenshots/mobile-check-further.png`
  - `prototype/screenshots/mobile-insufficient-data.png`
  - `prototype/screenshots/mobile-handoff-error.png`
  - `prototype/screenshots/desktop-prototype.png`

## Design Rationale

The prototype remains valid for mock development review, but DESIGN.md must follow the revised concept IA: Event Context -> Asset Relationship -> Portfolio/Attention Context -> Relationship Evidence -> Relevance Outcome -> Web Handoff. A visible outcome preview may be explored only as a constrained design hypothesis and must not read as investment advice, urgency, impact score, or production logic.

## High-Fidelity Screen Structure

```text
Mobile Detail
├── Mock Disclosure
├── Event Context
├── Asset Relationship
├── Portfolio / Attention Context
├── Relationship Evidence + Trust State
├── Relevance Outcome
└── Web Handoff
```

## State Variants

| State | Implemented | Notes |
|---|---|---|
| CHECK_FURTHER | Yes | Holding event with Web analysis CTA |
| NO_IMMEDIATE_CHECK_NEEDED | Yes | Watchlist-only upcoming event |
| INSUFFICIENT_DATA | Yes | Unknown relationship/evidence |
| Portfolio Connected | Yes | `보유` label |
| Watchlist Only | Yes | `관심` label |
| Multiple Related Assets | Yes | Multi-asset relation state |
| Loading | Yes | Skeleton cards |
| Empty Evidence | Yes | Evidence card empty state |
| Stale Data | Yes | Stale portfolio timestamp warning |
| Handoff Error | Yes | Error keeps event context |

## Component Inventory

| Component | Purpose |
|---|---|
| Mock banner | Prevent confusion with production data |
| Relationship badge | Distinguish holding/watchlist/related/data missing |
| Outcome card | Non-advisory check status after context/evidence; exact placement is design-gated |
| Event metadata chips | Event type and time |
| Asset card | Asset identity and relationship label |
| Reason list | Explain why outcome appears |
| Evidence card | Source type, timestamp, summary |
| Details disclosure | Progressive evidence depth |
| Handoff CTA | Simulated Web analysis entry |
| Scenario control | QA/demo state switcher |

## Token Usage

- Palette: neutral surface with distinct state accents. Green/red/amber must not imply good investment, danger/sell, or portfolio impact; text labels carry meaning.
- Radius: 8px for cards and controls, except phone frame.
- Typography: system sans-serif, no viewport-scaled type.
- State communication: text + color + labels.

## Responsive Rules

- Desktop: control panel, phone preview, rationale panel.
- Mobile viewport: prototype screen only; external control panels hidden.
- Text wraps within cards and buttons.
- Touch targets are at least 44px.

## Accessibility Notes

- Buttons have accessible labels.
- Outcome states include text, not color alone.
- Focus visible outline is defined.
- Evidence sections use headings.
- Handoff disabled state is visually and functionally disabled.

## Interaction Spec

| Interaction | Result |
|---|---|
| Scenario button | Switches prototype state |
| Evidence details | Expands extra source note |
| Web analysis button | Shows simulated handoff or error |
| Disabled handoff | Prevents action in insufficient/empty states |

## DESIGN.md Guardrails

| Area | Design-ready Status | Notes |
|---|---|---|
| Primary IA | LOCKED_FOR_CONCEPT | Use Event -> Asset -> Context -> Evidence -> Outcome -> Handoff. |
| Outcome Preview | DESIGN_HYPOTHESIS | May be explored only if copy and hierarchy prevent recommendation/urgency interpretation. |
| Requirement Coverage | MIXED | Do not treat prototype implementation as requirement lock. Follow Phase 4 requirement statuses. |
| State Coverage | DESIGN MATRIX REQUIRED | Preserve partial/source unavailable/portfolio unavailable mappings. |
| Production Handoff | BLOCKED | Do not design exact payload, route schema, session transfer, or real back behavior as confirmed. |

## Mock Data Disclosure

The screen explicitly states: “Mock prototype. 실제 Valley AI 데이터, 계좌, 추천, 예측이 아닙니다.” This appears in every non-loading state and loading state.

## Implementation Notes

- Standalone HTML/CSS/JS.
- No production API.
- No account data.
- No external service writes.
- Uses local Chrome through Playwright for QA.

## Review Issues

| ISSUE_ID | Severity | Screen/State | Finding | Fix |
|---|---|---|---|---|
| DREV-001 | MINOR | Initial mobile screenshots | Control panels appeared above phone in mobile captures. | Hide panels at narrow viewport and re-run QA. |
| DREV-002 | MINOR | Handoff error screenshot | Scroll position produced mid-page representative capture. | Scroll to top before screenshot and re-run QA. |

## Fix History

| Fix | Result |
|---|---|
| Added mobile viewport panel hiding. | Mobile screenshots show prototype only. |
| Updated QA script to use installed Chrome. | QA can run without downloading Playwright browser. |
| Added scroll reset before representative screenshots. | Captures start at top. |

## Gate 6

```json
{
  "phase": "6",
  "decision": "PASS",
  "score": "PASS",
  "criteria": [
    {"criterion": "BLOCKER 0", "result": "PASS", "evidence": "Review Issues", "reason": "No blockers"},
    {"criterion": "MAJOR 0", "result": "PASS", "evidence": "Review Issues", "reason": "Only minor visual capture issues, fixed"},
    {"criterion": "Mock 개발 리뷰용 필수 요소 누락 0", "result": "PASS", "evidence": "State Variants/Components", "reason": "REQ sections represented in prototype, but product lock follows Phase 4 statuses"},
    {"criterion": "필수 상태 누락 0", "result": "PASS", "evidence": "State Variants", "reason": "10 required states included"},
    {"criterion": "Trust 정보 누락 0", "result": "PASS", "evidence": "Mock banner/Evidence card", "reason": "Mock/source/time/trust shown"},
    {"criterion": "핵심 Prototype Path 실행 가능", "result": "PASS", "evidence": "QA_PASS", "reason": "Local QA script passed"},
    {"criterion": "Mock와 Production 구분 명확", "result": "PASS", "evidence": "Mock banner", "reason": "Visible in UI"},
    {"criterion": "접근성 Critical Issue 없음", "result": "PASS", "evidence": "Accessibility notes", "reason": "Text labels/focus/touch sizes included"},
    {"criterion": "DESIGN.md 선행 조건이 분리됨", "result": "PASS", "evidence": "DESIGN.md Guardrails", "reason": "Revised IA/status/state constraints recorded"},
    {"criterion": "테스트하지 않은 사항을 PASS로 표시하지 않음", "result": "PASS", "evidence": "Phase 7 will list NOT_TESTED", "reason": "Production tests not claimed"}
  ],
  "critical_issues": [],
  "unsupported_claims": [],
  "scope_violations": [],
  "unknowns": ["Production handoff payload", "Real data fields", "Real user validation"],
  "targeted_fixes": ["DREV-001", "DREV-002", "TJ-001 Primary Journey alignment note", "TJ-002 Requirement status guardrail"],
  "revision_count": 2,
  "questions_for_user": [],
  "next_action": "Proceed to Phase 7",
  "confidence": 0.79
}
```
