# Phase 7 - Integrated QA & Validation

Updated: 2026-08-27 KST

Targeted revision note, 2026-09-04: QA remains valid for mock rendering and scenario coverage. It must not be read as proof that the previous visual hierarchy is the design source of truth; DESIGN.md should follow the revised IA in Phase 5 and Korean PRD v1.1.

## Phase Goal

Validate that the single mobile `Portfolio-aware Event Triage` concept, prototype, and documentation are coherent enough for portfolio concept review without overstating production readiness.

## QA Environment

| Item | Value |
|---|---|
| Prototype | `prototype/index.html` |
| QA script | `prototype/qa-check.js` |
| Runtime | Bundled Node + local Chrome |
| Viewports | 360x800, 390x844, 1440x1000 |
| Result | `QA_PASS` |
| Result file | `prototype/screenshots/qa-results.json` |
| Date | 2026-08-27 KST |

## Requirement Coverage

| Requirement | Implemented | Evidence | Result |
|---|---|---|---|
| REQ-001 Event type/title/time | Yes | Prototype UI | PASS |
| REQ-002 Asset identity/ticker | Yes | Prototype UI | PASS |
| REQ-003 Relationship label | Yes | 보유/관심/관련만/관련 다중/포트폴리오 미연결/접근 제한/데이터 부족 variants | PASS |
| REQ-004 Three outcomes | Yes | QA results | PASS |
| REQ-005 Short non-advisory reason | Yes | Why section | PASS FOR MOCK RENDERING; exact copy/placement DESIGN_HYPOTHESIS |
| REQ-006 Evidence cards | Yes | Evidence section | PASS |
| REQ-007 Web-only depth separated | Yes | Details + Web handoff | PASS |
| REQ-008 Handoff CTA/context | Yes | Web section | PASS FOR CONCEPT SIMULATION / PRODUCTION NOT VERIFIED |
| REQ-009 Insufficient/stale/empty/access states | Yes | Scenarios | PASS FOR CONCEPT |
| REQ-010 Mock disclosure | Yes | QA results | PASS |

## Scenario Results

| Scenario | Starting State | Expected Result | Actual Result | Evidence | Result |
|---|---|---|---|---|---|
| Holding event needing check | CHECK_FURTHER | Shows holding, event, reason, evidence, Web CTA | Rendered and captured | `mobile-check-further.png`, `mobile-360-check-further.png` | PASS |
| Watchlist event | NO_IMMEDIATE_CHECK_NEEDED | Shows watchlist-only and no immediate check copy | Rendered and captured | `mobile-no-immediate-check.png` | PASS |
| Related-only | Related-only | Does not promote asset tag into holding/watchlist relevance | Rendered in QA | `qa-results.json` | PASS |
| Multiple related assets | Multiple Related Assets | Separates representative/related assets | Rendered in QA | `qa-results.json` | PASS |
| Insufficient data | INSUFFICIENT_DATA | Shows judgment deferred and disables handoff | Rendered and captured | `mobile-insufficient-data.png` | PASS |
| Stale data | Stale Data | Shows old portfolio timestamp warning | Rendered and captured | `mobile-stale-data.png` | PASS |
| Empty evidence | Empty Evidence | Shows no source/evidence available without inventing a conclusion | Rendered in QA | `qa-results.json` | PASS |
| Portfolio unconnected | Portfolio Unconnected | Shows that personal relevance cannot be completed without portfolio context | Rendered in QA | `qa-results.json` | PASS |
| Permission/access restriction | Permission / Access 제한 | Shows access limitation as data/access state, not negative event | Rendered in QA | `qa-results.json` | PASS |
| Loading | Loading | Shows skeleton/loading with mock disclosure | Rendered in QA | `qa-results.json` | PASS |
| Handoff success simulation | CHECK_FURTHER + Web 분석 열기 | Shows simulated Web destination | Rendered and captured | `mobile-handoff-success.png` | PASS FOR CONCEPT SIMULATION / PRODUCTION NOT VERIFIED |
| Handoff failure | Handoff Error + Web 분석 열기 | Shows error while preserving local event/asset context | Rendered and captured | `mobile-handoff-error.png` | PASS FOR CONCEPT SIMULATION |
| Return/back | Browser/back app behavior | Verify return context after leaving Web | Not tested | N/A | NOT_TESTED |

## Corrected Handoff Verdict

The previous global Handoff preservation statement was too broad.

| Handoff Area | Correct Verdict | Reason |
|---|---|---|
| Local error-state context retention | PASS FOR CONCEPT SIMULATION | Error scenario keeps event, asset, relationship, and outcome visible in the mobile concept. |
| Successful handoff destination display | PASS FOR CONCEPT SIMULATION / PRODUCTION NOT VERIFIED | Prototype shows a simulated destination and now has a success screenshot. It does not verify a production Web handoff. |
| Browser/App Back behavior | NOT_TESTED | The standalone prototype has no real route history or Web app return flow. |
| Production Web handoff payload | UNKNOWN / BLOCKED | No production payload contract or Phase 5.5 Data Contract is available. |

## Visual QA

| Check | Result | Notes |
|---|---|---|
| First viewport from existing prototype reads Mock Disclosure -> Relationship -> Outcome -> Event/Asset -> Short Reason | DOCUMENTED_ONLY / SUPERSEDED FOR DESIGN.md | Representative captures exist, but revised source IA is Event -> Asset -> Context -> Evidence -> Outcome -> Handoff. |
| Text overlap or clipping | PASS | No obvious overlap in generated representative states. |
| One-note palette avoided | PASS | Neutral + green/blue/amber/red/violet. |
| Dense Web content kept out of first view | PASS | Transcript/document/table/chart remain collapsed or Web handoff. |
| Mobile screenshot excludes desktop control panels | PASS | Narrow viewport hides panels. |
| Desktop demo usable | PASS | `desktop-prototype.png`. |
| Long Korean/English title stress | PARTIAL | Representative long titles wrap; exhaustive text scaling not tested. |

## Accessibility QA

| Check | Result | Notes |
|---|---|---|
| Buttons have labels | PASS | Back/save labels via aria-label; CTA has visible label. |
| State uses text, not color alone | PASS | Badges and outcome copy are textual. |
| Focus visible | PASS | CSS focus-visible defined. |
| Touch target size | PASS | Buttons min-height 44px. |
| Keyboard full scenario coverage | PARTIAL | Buttons are focusable; full keyboard path was not exhaustively audited. |
| Screen reader reading order | NOT_TESTED | Requires assistive technology/manual audit. |

## Trust QA

| Check | Result | Notes |
|---|---|---|
| Mock data disclosed | PASS | Present in each scenario and QA checked. |
| No buy/sell/hold or investment-recommendation wording in prototype UI | PASS | QA regex check and copy review passed. |
| Source/evidence separated | PASS FOR MOCK RENDERING | Evidence cards section; DESIGN.md must preserve evidence before definitive outcome interpretation. |
| Source/timestamp present | PASS | QA checked source or time cues across states. |
| Data insufficient state | PASS | Dedicated scenario. |
| Stale data state | PASS | Dedicated scenario. |
| Empty evidence state | PASS | Dedicated scenario. |
| Permission/access state | PASS | Dedicated scenario. |
| Production limitations visible in docs | PASS | Phase 4/6/7 docs. |
| Real account data avoided | PASS | Mock-only. |

## Defect List

| DEFECT_ID | Severity | Finding | Status |
|---|---|---|---|
| QA-001 | MINOR | Initial mobile screenshot captured desktop control panels. | FIXED |
| QA-002 | MINOR | Handoff error representative capture preserved mid-page scroll. | FIXED |
| QA-003 | MINOR | Successful handoff result lacked separate screenshot. | FIXED |
| QA-004 | MINOR | Required scenario set did not explicitly include Related-only, Portfolio Unconnected, and Permission/access. | FIXED |
| QA-005 | MINOR | Prototype copy used prohibited recommendation wording inside a disclaimer. | FIXED |
| QA-006 | MINOR | Screen reader flow not tested with assistive technology. | NOT_TESTED |

## Regression Results

- QA script re-run after scenario, copy, and screenshot fixes.
- Result: `QA_PASS`.
- Failures: 0.
- Scenario count: 12 required paths, including 11 screen states and 1 handoff success action.
- Representative screenshots regenerated.

## Screenshot Evidence

- `prototype/screenshots/mobile-check-further.png`
- `prototype/screenshots/mobile-360-check-further.png`
- `prototype/screenshots/mobile-no-immediate-check.png`
- `prototype/screenshots/mobile-insufficient-data.png`
- `prototype/screenshots/mobile-stale-data.png`
- `prototype/screenshots/mobile-handoff-error.png`
- `prototype/screenshots/mobile-handoff-success.png`
- `prototype/screenshots/desktop-prototype.png`
- `prototype/screenshots/portfolio-state-comparison.png`

## Known Limitations

- No real Valley API.
- No real Phase 5.5 Data Contract.
- No real user testing.
- No assistive technology manual test.
- No production Web handoff payload.
- No production back navigation or app-to-Web return behavior.
- No external browser/deployment.

## Release Candidate Verdict

`CONCEPT_DEMO_READY WITH LIMITATIONS`

The prototype is suitable for portfolio concept demonstration and internal critique. It is not suitable for production PRD lock or release.

## Gate 7

```json
{
  "phase": "7",
  "decision": "CONDITIONAL PASS",
  "score": "PASS_FOR_CONCEPT_WITH_PRODUCTION_HANDOFF_BLOCKED",
  "criteria": [
    {"criterion": "BLOCKER 또는 MAJOR가 1개 이상 남지 않음", "result": "PASS", "evidence": "Defect List", "reason": "Only fixed or disclosed minor limitations"},
    {"criterion": "Mock rendering requirements are represented", "result": "PASS", "evidence": "Requirement Coverage", "reason": "Concept states implemented; product requirement lock follows Phase 4 statuses"},
    {"criterion": "CHECK_FURTHER만 시연되지 않음", "result": "PASS", "evidence": "Scenario Results", "reason": "Three outcomes and required relationship states included"},
    {"criterion": "Portfolio와 Watchlist가 시각적으로 구분됨", "result": "PASS", "evidence": "Relationship variants", "reason": "보유/관심 labels separate"},
    {"criterion": "Source·시점·데이터 부족 상태가 검증됨", "result": "PASS", "evidence": "Trust QA", "reason": "Evidence/time/insufficient/stale/empty/access scenarios"},
    {"criterion": "Handoff Context 판정이 과장되지 않음", "result": "PASS", "evidence": "Corrected Handoff Verdict", "reason": "Concept simulation, production payload, and back behavior are separated"},
    {"criterion": "Mock가 실제 데이터처럼 보이지 않음", "result": "PASS", "evidence": "Mock disclosure", "reason": "Visible and QA checked"},
    {"criterion": "투자 조언 또는 권유 오해 가능성이 관리됨", "result": "PASS", "evidence": "Trust QA", "reason": "No prohibited copy in prototype UI"},
    {"criterion": "테스트하지 않은 항목을 통과로 표시하지 않음", "result": "PASS", "evidence": "Known Limitations", "reason": "Screen reader, production handoff, and back route remain disclosed"}
  ],
  "critical_issues": [],
  "unsupported_claims": ["Production handoff context preservation"],
  "scope_violations": [],
  "unknowns": ["Screen reader manual result", "Production handoff payload", "Real user validation", "Production back navigation"],
  "targeted_fixes": ["QA-003", "QA-004", "QA-005"],
  "revision_count": 2,
  "questions_for_user": [],
  "next_action": "Use as concept/portfolio input only",
  "confidence": 0.8
}
```
