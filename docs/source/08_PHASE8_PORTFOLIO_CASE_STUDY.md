# Phase 8 - Portfolio Case Study Draft

Updated: 2026-08-27 KST  
Status: `PORTFOLIO_DRAFT_READY / PUBLIC_REVIEW_REQUIRED`  
Production status: `BLOCKED`

## 1. Project Overview

I explored how Valley AI Mobile could support one high-value moment: when an investor sees a market event and needs to decide whether it deserves further checking now. The output is a mock-only concept prototype for a single `Portfolio-aware Event Triage` detail screen, plus a traceable case-study narrative.

This is not a shipped product, production PRD, or financial recommendation system.

## 2. Why This Problem

Valley Web already has deep analysis surfaces: Portfolio Dashboard, major events, Live News, Asset tabs, financial analysis, and Expert-dependent analysis depth. The core mobile problem was not a lack of information. It was that event fact, asset relationship, portfolio/watchlist context, evidence, and next analysis destination were distributed across screens.

The design question became:

```text
Can a mobile detail screen help the user understand why an event matters to them before sending them into Web analysis?
```

## 3. Existing Valley Context

Observation:

- Portfolio Dashboard and major events exist in the Web evidence baseline.
- Portfolio and Watchlist are distinct Dashboard Shell contexts.
- Observed Portfolio major-event clicks can route to Asset detail tabs.
- Live News expands inline and does not preserve selected event state in URL.
- Asset Detail does not visibly preserve Portfolio origin in the observed flow.

Interpretation:

Valley Web behaves like an analysis workspace. It can support depth, but the current evidence does not prove that Web alone carries personal event context through every transition.

## 4. Evidence and Current Journey

The working current-state journey was:

```text
Portfolio / Live News
→ event or update
→ related asset or tab
→ Web analysis surface
```

The evidence supported the existence of useful ingredients, but not a complete mobile-ready triage journey.

Key evidence references:

- `EV-VLY-001` Valley Web current-state baseline.
- `EV-VLY-002` conservative handoff route table.
- `EV-COMP-002` competitor mobile UI evidence pack.
- `EV-COMP-004` competitor information hierarchy reverse engineering.
- `EV-POST-001` post-phase consistency audit.

## 5. Core Gap

The gap was not "more analysis." It was the missing connection between:

```text
Cause
→ Personal relevance
→ Evidence
→ Next check decision
→ Web continuation
```

Without this bridge, a user may need to mentally stitch together whether an event is only market noise, watchlist-only information, a holding-related update, or a case where data is insufficient.

## 6. Product Role Definition

Mobile role:

```text
Triage Layer
```

Mobile should translate market events into personal context and decide whether the user needs to check further. It should not become a miniature version of Valley Web.

Web role:

```text
Analysis Workspace
```

Web remains the place for full financial tables, transcripts, documents, forecasts, IR materials, and deeper investigation.

## 7. Design Principles

| Principle | Why | Status |
|---|---|---|
| Personal relevance before depth | The user first needs to know why this event is shown to them. | CONCEPT_ACCEPTED |
| Keep Event identity compact but visible | Personal context without event fact becomes untrustworthy. | CONCEPT_ACCEPTED |
| Separate holding, watchlist, related-only, and unknown | Portfolio and attention context must not be merged. | CONCEPT_ACCEPTED |
| Use non-advisory outcomes | Outcomes describe checking need, not investment action. | LOCKED |
| Show evidence and trust state | AI/source/data-state ambiguity is a trust risk. | CONCEPT_ACCEPTED |
| Send dense analysis to Web | Transcript, documents, tables, and charts are Web-only depth. | CONCEPT_ACCEPTED |
| Preserve unknowns | Missing Data Contract blocks production field and logic claims. | LOCKED |

## 8. Competitive Pattern Synthesis

Competitor evidence was used as planning input, not as production truth.

- Simply Wall St supports portfolio updates, event-type filtering, and new/unread cues in official help material.
- AlphaSense iOS separates fast answer modes from deeper research and uses citations/document jumps in official help material.
- Quartr and AlphaSense informed source/document separation.
- Portfolio/account products informed data availability and access-state treatment.

No competitor was treated as a complete answer to Valley's target question. Patterns were selected only when they supported Valley's locked Mobile Triage role.

## 9. Information Priority

The chosen prototype hierarchy:

```text
Mock Disclosure
→ Event Context
→ Asset Relationship
→ Portfolio / Attention Context
→ Relationship Evidence + Trust
→ Relevance Outcome
→ Web Handoff
→ Optional Details
```

Trade-off:

- Event-first was safer but weaker at answering "why me?"
- Outcome-first was fast but risked sounding like a recommendation without production logic and is not the current IA.
- Event + Personal Relevance + Evidence before Outcome best matched the locked journey while keeping the mobile role focused.

## 10. UX Architecture

The screen has one responsibility:

```text
Help the user decide whether this event needs further checking now.
```

It does this by assembling:

- Event Context.
- Asset Relationship.
- Attention Context.
- Portfolio Context.
- Relationship Evidence.
- Relevance Outcome.
- Web Handoff.

All production data fields remain blocked until the missing Phase 5.5 Data Contract is supplied.

## 11. Key Design Decisions

| Decision | Accepted | Rejected Alternative | Reason |
|---|---|---|---|
| Event, relationship/context, and evidence appear before definitive outcome interpretation | Yes | Outcome-first alert | Avoids score/recommendation interpretation and follows the locked journey. |
| Event/asset identity stays in first viewport | Yes | Outcome-only alert | Would weaken trust and context. |
| Evidence appears as source cards | Yes | AI summary alone | Source ambiguity is unsafe in finance. |
| Numeric portfolio values are not shown | Yes | Expose holdings value/return/basis | Data Contract and privacy rules are missing. |
| Handoff is simulated only | Yes | Claim production deep link payload | Payload contract is unknown. |
| Error and insufficient states are valid states | Yes | Hide failures behind generic empty UI | Users need to know when judgment is unavailable. |

## 12. Outcome and Trust States

Implemented concept outcomes:

- `CHECK_FURTHER`
- `NO_IMMEDIATE_CHECK_NEEDED`
- `INSUFFICIENT_DATA`

Implemented relationship/data/access states:

- Holding.
- Watchlist only.
- Related-only.
- Multiple related assets.
- Portfolio unconnected.
- Stale data.
- Empty evidence.
- Loading.
- Permission/access restriction.
- Handoff success simulation.
- Handoff error.

These are mock-only states. They do not define production calculations.

## 13. Prototype Scenarios

The prototype is available at `prototype/index.html`.

Representative evidence:

- `prototype/screenshots/mobile-check-further.png`
- `prototype/screenshots/mobile-no-immediate-check.png`
- `prototype/screenshots/mobile-insufficient-data.png`
- `prototype/screenshots/mobile-stale-data.png`
- `prototype/screenshots/mobile-handoff-success.png`
- `prototype/screenshots/mobile-handoff-error.png`
- `prototype/screenshots/portfolio-state-comparison.png`
- `prototype/screenshots/desktop-prototype.png`

## 14. QA and Iteration

Automated local QA passed with 12 required paths represented. The QA confirms mock disclosure, outcome presence, relationship-state separation, source/timestamp cues, insufficient/stale/empty/access states, handoff error, required screenshots, and absence of prohibited advice-like wording in the prototype UI.

Important limitation:

- Automated QA is not user validation.
- Screen reader manual testing is not tested.
- Production Web handoff is unknown/blocked.
- Browser/App Back behavior after a real Web handoff is not tested.

The Handoff verdict was corrected after review:

```text
Concept local context retention: PASS FOR CONCEPT SIMULATION
Successful handoff result: PASS FOR CONCEPT SIMULATION / PRODUCTION NOT VERIFIED
Back navigation: NOT_TESTED
Production payload: UNKNOWN / BLOCKED
```

## 15. Limitations

- Missing Phase 5.5 Data Contract.
- No production data field approval.
- No outcome calculation logic.
- No production handoff payload.
- No real Valley mobile API.
- No real user testing.
- No assistive technology audit.
- No launch-readiness claim.
- Public case-study version must mask or avoid real Valley portfolio values and sensitive captures.
- Competitor screenshots require source attribution and cautious public use.

## 16. What I Would Validate Next

1. Review Phase 5.5 Data Contract and approve which fields can be used in Mobile.
2. Test whether target users understand the difference between checking need and investment advice.
3. Validate real Web handoff routes, payload, and Back behavior.
4. Run manual accessibility review with assistive technology.
5. Review public portfolio assets for privacy, copyright, and data-sensitivity risk.

## 17. My Contribution

My contribution:

- Narrowed a broad mobile improvement space into one testable detail screen.
- Preserved Valley's existing Web depth while defining a separate Mobile Triage role.
- Audited evidence quality and separated observed facts from planning hypotheses.
- Chose a Personal Relevance-first hierarchy and documented trade-offs.
- Protected the concept from production overclaims by preserving Data Contract blockers.

AI-assisted work:

- Evidence organization and comparison tables.
- Competitive pattern synthesis drafts.
- Prototype implementation support.
- Repeatable QA script and screenshot regeneration.
- Consistency review prompts and unsupported-claim surfacing.

Final product decisions, scope boundaries, risk handling, and trade-offs remain designer-owned judgments.

## 18. Portfolio Summary

This project demonstrates an evidence-led product design process: current-state audit, competitor pattern filtering, role definition, information architecture, mock prototype, QA, and critical correction of overclaims. The strongest output is not a finished product, but a defensible concept showing how Valley Mobile could help investors triage portfolio-related events without becoming a compressed Web analysis workspace or an investment-advice screen.

## Final Gate

| Category | Critical Criteria | Result |
|---|---|---|
| Product Logic | Problem/solution, single screen, non-advisory outcome, portfolio context role | PASS |
| Evidence | Claims have evidence, observation/interpretation separated, limitations preserved | PASS |
| UX / Design | First-view hierarchy, states, trust, handoff boundary | PASS |
| Prototype / QA | Core flow demo, traceability, mock separation, no blocker/major | PASS |
| Portfolio | Why/how visible, AI role disclosed, concept not overstated | PASS |
| Production | Production fields, logic, API, handoff payload | BLOCKED |

```json
{
  "phase": "8",
  "decision": "CONDITIONAL PASS",
  "score": "Portfolio concept usable; production blocked",
  "criteria": [
    {"criterion": "문제와 해결책이 직접 연결된다", "result": "PASS", "evidence": "Core Gap / UX Architecture", "reason": "Proposal answers context assembly gap"},
    {"criterion": "단일 화면 선택 이유가 설명된다", "result": "PASS", "evidence": "Why This Problem", "reason": "Smallest surface for triage"},
    {"criterion": "Outcome이 투자 조언 또는 권유로 읽히지 않는다", "result": "PASS", "evidence": "Outcome and Trust States", "reason": "Check need only"},
    {"criterion": "핵심 주장마다 근거가 있다", "result": "PASS", "evidence": "Evidence and Current Journey", "reason": "Evidence IDs mapped"},
    {"criterion": "Mock와 Production이 구분된다", "result": "PASS", "evidence": "Limitations", "reason": "Production blockers explicit"},
    {"criterion": "Concept Project를 실제 출시처럼 과장하지 않는다", "result": "PASS", "evidence": "Project overview/limitations", "reason": "No release or KPI claim"},
    {"criterion": "Handoff QA가 과장되지 않는다", "result": "PASS", "evidence": "QA and Iteration", "reason": "Concept, production, and Back behavior separated"}
  ],
  "critical_issues": [],
  "unsupported_claims": [],
  "scope_violations": [],
  "unknowns": ["Real user validation", "Phase 5.5 Data Contract", "Production handoff payload", "Back navigation after real Web handoff"],
  "targeted_fixes": ["Handoff verdict", "Scenario coverage", "Case study narrative"],
  "revision_count": 1,
  "questions_for_user": [],
  "next_action": "Public portfolio polish and Data Contract review",
  "confidence": 0.81
}
```
