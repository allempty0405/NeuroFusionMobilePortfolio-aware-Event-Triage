# Phase 4 - Concept PRD

## Phase Goal

Translate the accepted strategy into a concept PRD for one mobile detail screen. This is not a production PRD.

## Product Scope

Product: Valley AI Mobile concept  
Screen: Portfolio-aware Event Triage detail  
Data mode: `MOCK_ONLY`  
Production status: `BLOCKED` for fields, logic, API, handoff payload, acceptance criteria

Targeted revision note, 2026-09-04: requirement status now separates `LOCKED_FOR_CONCEPT`, `DESIGN_HYPOTHESIS`, `MOCK_ONLY`, and `BLOCKED`. Prototype implementation is not used as proof that a product requirement is locked.

## User Story

As an investor who sees a market event related to my holdings or watchlist, I want to quickly understand why this event is relevant to me, what evidence supports it, and whether I should open deeper Web analysis, so I can avoid unnecessary re-searching or overreacting to noisy information.

## Requirement Candidates

| REQ_ID | Requirement Candidate | Type | Status | Evidence / Decision Source |
|---|---|---|---|---|
| REQ-001 | Show event type, title, and event time before any definitive outcome. | Must for concept | LOCKED_FOR_CONCEPT | Locked Primary Journey |
| REQ-002 | Show related asset identity and ticker. | Must for concept | LOCKED_FOR_CONCEPT | Valley route evidence; asset relationship needed before triage |
| REQ-003 | Show relationship label: `보유`, `관심`, `관련만`, or `데이터 부족`. | Must for concept | LOCKED_FOR_CONCEPT | Valley Watchlist/Portfolio distinction; DEC-001/002 |
| REQ-004 | Show only safe triage outcomes: `CHECK_FURTHER`, `NO_IMMEDIATE_CHECK_NEEDED`, `INSUFFICIENT_DATA`. | Must for concept | LOCKED_FOR_CONCEPT / MOCK_ONLY | User-locked allowed outcomes; production logic blocked |
| REQ-005 | Explain the outcome with relationship, attention signal, and evidence/data limitation without investment advice. | Must for concept | LOCKED_FOR_CONCEPT for explanatory linkage; DESIGN_HYPOTHESIS for exact copy/placement | False-certainty risk; trust requirement trace |
| REQ-006 | Show evidence cards with source type, timestamp, and mock/original distinction. | Must for concept | LOCKED_FOR_CONCEPT | Valley-specific trust risk; competitor sources are supporting patterns only |
| REQ-007 | Keep detailed transcript/document/table/chart in expanded area or Web handoff. | Must for concept | LOCKED_FOR_CONCEPT | Mobile/Web role split |
| REQ-008 | Provide Web handoff CTA with visible carried context summary. | Should for concept | DESIGN_HYPOTHESIS / MOCK_ONLY | Valley route instances only; production payload blocked |
| REQ-009 | Preserve stale/partial/source-unavailable/portfolio-unavailable states in downstream UI mapping. | Must for concept | LOCKED_FOR_CONCEPT | State/trust precedence; production rules blocked |
| REQ-010 | Mark the prototype as using mock data. | Must | LOCKED_FOR_CONCEPT | Concept boundary |

## DESIGN.md Dependency Classification

| Requirement | DESIGN.md Use | Production Use |
|---|---|---|
| REQ-001~004 | May be used as concept source of truth. | Blocked where real fields or outcome logic are required. |
| REQ-005 | May design visible reason/evidence linkage, but exact wording remains testable. | Blocked until outcome policy and compliance review. |
| REQ-006~007 | May define concept evidence/trust UI and progressive disclosure. | Blocked until source/freshness contract. |
| REQ-008 | May design concept handoff affordance and context summary. | Blocked until route/payload/auth contract. |
| REQ-009 | Must preserve state distinctions in design matrix. | Blocked until production state rules and API behavior. |
| REQ-010 | Must remain visible in concept/prototype. | Not applicable to production UI except test-data environments. |

## Non-Functional Requirements

| NFR_ID | Requirement | Status |
|---|---|---|
| NFR-001 | Do not use buy/sell/hold recommendation wording. | LOCKED |
| NFR-002 | Do not show real portfolio values from Valley evidence. | LOCKED |
| NFR-003 | Do not imply production model accuracy. | LOCKED |
| NFR-004 | Use color plus text/icon labels for states. | LOCKED_FOR_CONCEPT |
| NFR-005 | Prototype must be locally runnable. | MOCK DEVELOPMENT |
| NFR-006 | Prototype must include required concept states from the state matrix. | MOCK DEVELOPMENT |

## Data Model - Mock Only

| Field | Purpose | Status | Production Dependency |
|---|---|---|---|
| `event.id` | Demo event switching | MOCK_ONLY | Unknown |
| `event.type` | Event context | MOCK_ONLY | Data Contract required |
| `event.title` | Event identity | MOCK_ONLY | Data Contract required |
| `event.time` | Trust/context | MOCK_ONLY | Data Contract required |
| `asset.ticker` | Asset relationship | MOCK_ONLY | Data Contract required |
| `relationship.kind` | Holding/watchlist/related/data missing | MOCK_ONLY | Data Contract required |
| `attention.signal` | New/upcoming/stale | MOCK_ONLY | Data Contract required |
| `outcome.code` | Triage state | MOCK_ONLY | Outcome logic required |
| `evidence[]` | Source cards | MOCK_ONLY | Source contract required |
| `handoff.destination` | Simulated Web destination | MOCK_ONLY | Route/payload contract required |

## Interaction Requirements

| INT_ID | Interaction | Expected Concept Behavior | Status |
|---|---|---|---|
| INT-001 | Switch outcome demo state | Screen updates relationship reason, evidence, and CTA state | MOCK_ONLY |
| INT-002 | Expand evidence | Shows additional source details without leaving screen | DESIGN_HYPOTHESIS |
| INT-003 | Web handoff CTA | Shows context summary and simulated destination | MOCK_ONLY |
| INT-004 | Handoff error state | Shows recovery action and preserves event summary | LOCKED_FOR_CONCEPT / PRODUCTION BLOCKED |
| INT-005 | Back/resume | Visual affordance may be designed; real return behavior is not tested | DESIGN_HYPOTHESIS / NOT_TESTED |

## State Requirements

| STATE_ID | State | Required? | Notes |
|---|---|---|---|
| ST-001 | CHECK_FURTHER | Yes | Non-advisory further-check outcome; not urgency/risk/investment action |
| ST-002 | NO_IMMEDIATE_CHECK_NEEDED | Yes | Must avoid “safe/ignore” language |
| ST-003 | INSUFFICIENT_DATA | Yes | Data limitation as valid state |
| ST-004 | Portfolio Connected | Yes | Relationship: holding |
| ST-005 | Watchlist Only | Yes | Relationship: watchlist, not holding |
| ST-006 | Multiple Related Assets | Yes | Shows list and primary affected asset |
| ST-007 | Loading | Yes | Skeleton or loading state |
| ST-008 | Empty Evidence | Yes | No evidence available |
| ST-009 | Stale Data | Yes | Timestamp warning |
| ST-010 | Handoff Error | Yes | Context preserved in error |

## Downstream State Mapping

| Source State | UI State Mapping | Trigger | User Message | Outcome Behavior | Handoff | Recovery |
|---|---|---|---|---|---|---|
| CURRENT | Populated normal | Current event, relationship, and evidence are present in mock fixture | Current basis is visible. | One of three concept outcomes may be shown. | Concept CTA may be shown. | Open evidence or Web simulation. |
| PARTIAL | Insufficient Data or Partial Evidence | Some event/asset/evidence inputs exist but relationship confidence is incomplete | Some information is available, but not enough to complete the judgment. | Suppress confident outcome; prefer `INSUFFICIENT_DATA` or limitation copy. | Disable or lower-confidence concept handoff. | Show what is missing; allow evidence review. |
| SOURCE_UNAVAILABLE | Empty Evidence | Event/asset relation exists but source cards are unavailable | Source evidence is unavailable. | Do not invent evidence-backed outcome. | Disable evidence-dependent handoff. | Retry/load source or open generic asset destination only if clearly labeled. |
| PORTFOLIO_UNAVAILABLE | Portfolio Unconnected | Portfolio/holding context cannot be confirmed | Personal portfolio relationship cannot be confirmed. | Do not claim holding impact; use `INSUFFICIENT_DATA` or non-personal context. | No portfolio-aware handoff claim. | Connect/check portfolio outside this slice. |
| STALE | Stale Data | Portfolio or evidence timestamp is older than allowed by mock scenario | Data may be outdated. | Avoid definitive language; show limitation. | Allow only with stale warning in concept. | Refresh/check latest data. |
| UNAVAILABLE / Generic Error | Error | Service or route failure | The screen cannot load enough information. | No definitive outcome. | Retry only; production behavior blocked. | Retry or close. |
| Permission / Access | Permission / Access 제한 | User lacks access to source or destination | Access limits what can be verified. | No definitive outcome from hidden data. | Disabled or error recovery. | Sign in/request access outside this slice. |

## Acceptance Criteria Status

Production acceptance criteria are `BLOCKED`. Concept QA criteria may verify mock state rendering and copy safety, but they do not lock production requirements or production behavior.

## Gate 4

```json
{
  "phase": "4",
  "decision": "PASS",
  "score": "PASS_FOR_CONCEPT",
  "criteria": [
    {"criterion": "PRD scope is single screen", "result": "PASS", "evidence": "Product Scope", "reason": "One detail screen"},
    {"criterion": "Requirements are traceable to evidence", "result": "PASS", "evidence": "Requirement Candidates", "reason": "Each candidate has evidence source"},
    {"criterion": "Production fields are not invented", "result": "PASS", "evidence": "Data Model - Mock Only", "reason": "All fields marked mock/dependent"},
    {"criterion": "Outcome is non-advisory", "result": "PASS", "evidence": "REQ-004/NFR-001", "reason": "Check need only"},
    {"criterion": "Required states are listed", "result": "PASS", "evidence": "State Requirements", "reason": "Prompt states covered"},
    {"criterion": "Acceptance criteria are not falsely locked", "result": "PASS", "evidence": "Acceptance Criteria Status", "reason": "Production criteria blocked"}
  ],
  "critical_issues": [],
  "unsupported_claims": [],
  "scope_violations": [],
  "unknowns": ["Production data model", "Outcome logic", "Handoff payload"],
  "targeted_fixes": [],
  "revision_count": 0,
  "questions_for_user": [],
  "next_action": "Proceed to Phase 5",
  "confidence": 0.78
}
```
