# Phase 5 - UX Architecture

## Phase Goal

Convert the concept PRD into a single-screen information architecture and interaction structure.

Targeted revision note, 2026-09-04: this architecture is aligned to the locked Primary Journey. Outcome is not treated as the first proof-bearing element; it appears after event, relationship/context, and evidence cues.

## User Question Hierarchy

| Rank | User Question | Screen Responsibility |
|---:|---|---|
| 1 | What happened? | Event summary |
| 2 | Which asset is related? | Asset chip/card |
| 3 | Why am I seeing this event? | Relationship/context section |
| 4 | What evidence supports this relationship? | Evidence stack |
| 5 | Do I need to check further now? | Non-advisory triage outcome |
| 6 | Is the data sufficient and fresh? | Trust row/state |
| 7 | Where can I investigate more? | Web handoff |

## Entry Points

- Future mobile notification.
- Portfolio update feed.
- Watchlist event feed.
- Live News item.
- Search result.
- Web handoff return or shared link.

## Task Flow

```text
Open Event
→ Read event context
→ Identify related asset
→ Review portfolio/watchlist/attention context
→ Check relationship evidence/trust
→ Review non-advisory outcome
→ Expand evidence if needed
→ Open Web analysis or close
```

## Information Architecture

```text
Portfolio-aware Event Triage Detail
├── Mock / Trust Banner
├── Event Summary
│   ├── Event Type
│   ├── Title
│   ├── Event Time
│   └── Affected Asset
├── Asset Relationship
│   ├── Relationship Label
│   ├── Relationship Reason
│   └── Related Asset Count
├── Portfolio / Attention Context
│   ├── Holding / Watchlist / Related-only
│   ├── Data Freshness
│   ├── Attention Signal
│   └── Conditional Exposure Summary
├── Evidence Stack
│   ├── Source Cards
│   ├── AI Summary Label
│   └── Source Timestamp
├── Triage Outcome
│   ├── Outcome Status
│   ├── Reason Summary
│   └── Data Sufficiency Note
├── Web Handoff
│   ├── Destination
│   ├── Context Carried
│   └── Error Recovery
└── Optional Details
    ├── More Evidence
    ├── Related Assets
    └── Prototype Notes
```

## Above-The-Fold Definition

Must establish within the first viewport:

- Event identity: type, title, time.
- Asset identity: company/ticker.
- Relationship: holding/watchlist/related/data missing.
- Attention/data cue: new/upcoming/stale/insufficient.
- Trust cue: source/time/mock disclosure.

The outcome may be previewed only if it is visually and semantically constrained as a non-advisory check-status summary. It must not replace Event Context, Asset Relationship, or Relationship Evidence.

## Screen Blueprint

| Section | Purpose | Evidence | State Variants |
|---|---|---|---|
| Mock Banner | Prevent real-data confusion | Concept boundary | Always visible |
| Event Summary | Preserve event fact | Stock Events/SWS/NH | All outcomes |
| Asset Relationship | Explain why this asset is related | Valley portfolio/watchlist evidence | Holding, watchlist, related, insufficient |
| Portfolio / Attention Context | Clarify personal relation and current signal | Valley gap, SWS portfolio update pattern | Current, stale, unavailable |
| Evidence Stack | Support trust before outcome interpretation | Valley-specific false-certainty risk; AlphaSense/Quartr as support only | Populated, empty, stale, partial |
| Triage Outcome | Show non-advisory check status after context/evidence | Locked outcome model | 3 outcomes |
| Web Handoff | Keep Web depth separate | Valley route evidence | Available, disabled, error |
| Optional Details | Prevent first-view overload | Quartr/AlphaSense web-only depth | Expanded/collapsed |

## Interaction Rules

- Tapping evidence expands details in place.
- Handoff opens a simulated destination panel or link area.
- Handoff error keeps current event context visible.
- Switching scenario in prototype changes state without implying production logic.
- Watchlist-only state never uses holding language.
- Insufficient-data state disables definitive check recommendation.

## State Flow

```text
Loading
→ Populated
   ├── Event + Asset
   ├── Relationship / Portfolio / Attention
   ├── Evidence / Trust
   └── Outcome
→ Expanded Evidence
→ Web Handoff Attempt
   ├── Success / simulated
   └── Error with retry
```

## Handoff Flow

```text
Mobile Detail
→ Handoff CTA
→ Context Summary
→ Simulated Web Destination
```

Context to preserve conceptually:

- Event title/type/time.
- Asset ticker.
- Relationship label.
- Evidence IDs.
- Outcome code.

Production payload: `UNKNOWN / BLOCKED`.

## Context Retention Matrix

| Transition | Event | Asset | Portfolio | Watchlist | Evidence | Status |
|---|---|---|---|---|---|---|
| Detail -> expanded evidence | Preserved | Preserved | Preserved | Preserved | Preserved | CONCEPT |
| Detail -> handoff success | Preserved in visible summary | Preserved | Relationship shown in summary | Relationship shown in summary | Evidence count shown | MOCK_ONLY |
| Detail -> handoff error | Preserved | Preserved | Preserved | Preserved | Preserved | REQUIRED |
| Scenario switch | Replaced | Replaced | Replaced | Replaced | Replaced | PROTOTYPE_CONTROL |

## Downstream State Mapping

| Source State | UI State Mapping | Trigger | User Message | Outcome Behavior | Handoff | Recovery |
|---|---|---|---|---|---|---|
| CURRENT | Populated normal | Current event, relationship, and evidence are available in concept fixture | Current basis shown. | Concept outcome allowed. | Concept CTA allowed. | Evidence expansion or Web simulation. |
| PARTIAL | Partial Evidence / Insufficient Data | Some relationship or source inputs are incomplete | Some information is available, but not enough for a confident check-status. | Prefer limitation copy or `INSUFFICIENT_DATA`; do not imply importance score. | Disabled or clearly caveated. | Show missing input and retry where possible. |
| SOURCE_UNAVAILABLE | Empty Evidence | Source cards cannot be loaded or verified | Evidence source is unavailable. | No source-backed confident outcome. | Disabled for evidence-dependent handoff. | Retry source load or close. |
| PORTFOLIO_UNAVAILABLE | Portfolio Unconnected | Holding/watchlist relationship cannot be confirmed | Portfolio relationship cannot be confirmed. | No holding/exposure claim; use data limitation. | No portfolio-aware handoff claim. | Connect/check portfolio outside this slice. |
| STALE | Stale Data | Portfolio/evidence timestamp is old in mock scenario | Data may be outdated. | Avoid definitive wording and expose timestamp. | Allowed only with stale warning in concept. | Refresh/check latest data. |
| UNAVAILABLE / Generic Error | Error | Service/route failure | This information cannot be loaded. | No definitive outcome. | Retry/error recovery only. | Retry or close. |
| Permission / Access | Permission / Access 제한 | Source or destination is restricted | Access limits what can be verified. | No outcome based on hidden data. | Disabled or error recovery. | Sign in/request access outside this slice. |

## Accessibility Requirements

- Outcome must use text and icon, not color alone.
- Buttons require visible labels.
- Evidence cards must have clear headings.
- Focus state required for interactive controls.
- Minimum touch target: 44px.
- Long ticker/event text wraps without overlap.
- Trust warnings use readable contrast.

## Requirement-To-UI Traceability

| Requirement | UI Section |
|---|---|
| REQ-001 | Event Summary |
| REQ-002 | Event Summary / Asset chip |
| REQ-003 | Asset Relationship / Portfolio-Attention Context |
| REQ-004 | Triage Outcome |
| REQ-005 | Triage Outcome / Evidence Stack |
| REQ-006 | Evidence Stack |
| REQ-007 | Optional Details / Web Handoff |
| REQ-008 | Web Handoff |
| REQ-009 | Downstream State Mapping / Evidence State |
| REQ-010 | Mock Banner |

## Patterns Adopted

- Holdings update card.
- Relationship label separation.
- AI summary + source evidence separation.
- Progressive disclosure.
- Mobile summary -> Web depth.

## Patterns Rejected

- Buy/Sell/ratings as outcome.
- Full transcript in first viewport.
- Generic quote handoff without context.
- Account connection as primary CTA.

## Gate 5

```json
{
  "phase": "5",
  "decision": "PASS",
  "score": "12/12",
  "criteria": [
    {"criterion": "LOCKED Primary Journey와 충돌하지 않는가", "result": "PASS", "evidence": "Task Flow/IA", "reason": "Event/Asset/Context/Evidence precede Outcome"},
    {"criterion": "Event Context보다 Portfolio 손익이 과도하게 강조되지 않는가", "result": "PASS", "evidence": "Personal Context", "reason": "Numeric details conditional"},
    {"criterion": "Asset Relationship이 단순 종목 태그에 머물지 않는가", "result": "PASS", "evidence": "Asset Relationship", "reason": "Relationship reason included"},
    {"criterion": "Attention의 이유가 설명되는가", "result": "PASS", "evidence": "Portfolio / Attention Context", "reason": "Attention signal included"},
    {"criterion": "Relationship Evidence가 Outcome보다 먼저 확인 가능한가", "result": "PASS", "evidence": "Evidence Stack/Triage Outcome", "reason": "Evidence cue precedes outcome interpretation"},
    {"criterion": "Source·시점·불확실성이 확인 가능한가", "result": "PASS", "evidence": "Evidence Stack / Downstream State Mapping", "reason": "Trust cues required"},
    {"criterion": "모든 상태가 동일한 IA 안에서 처리되는가", "result": "PASS", "evidence": "State Flow", "reason": "Required states mapped"},
    {"criterion": "Handoff 전에 Mobile에서 필요한 판단이 완료되는가", "result": "PASS", "evidence": "Task Flow", "reason": "Handoff after triage"},
    {"criterion": "Handoff 후 Event와 Asset Context가 유지되는가", "result": "PASS", "evidence": "Context Retention Matrix", "reason": "Concept summary preserves context; production payload unknown"},
    {"criterion": "Desktop Workspace를 축소한 화면이 아닌가", "result": "PASS", "evidence": "Patterns Rejected", "reason": "Dense depth excluded"},
    {"criterion": "불필요한 섹션을 제거했는가", "result": "PASS", "evidence": "IA", "reason": "Only target-screen sections"},
    {"criterion": "요구사항 ID와 화면 요소가 추적되는가", "result": "PASS", "evidence": "Traceability table", "reason": "REQ-to-section mapping"}
  ],
  "critical_issues": [],
  "unsupported_claims": [],
  "scope_violations": [],
  "unknowns": ["Production handoff payload", "Production data fields"],
  "targeted_fixes": ["TJ-001 Primary Journey alignment", "TJ-003 State mapping"],
  "revision_count": 1,
  "questions_for_user": [],
  "next_action": "Proceed to Phase 6",
  "confidence": 0.8
}
```
