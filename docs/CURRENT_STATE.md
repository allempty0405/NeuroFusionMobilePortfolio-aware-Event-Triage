# CURRENT PROJECT STATE

Last Updated: 2026-09-07 01:49 KST
Last Updated By: Codex / GPT-5

## Project

NeuroFusion / Valley AI Mobile Product Improvement Project

## Current Target

`Portfolio-aware Event Relevance`

This is the opportunity-revalidation workstream for the existing `Portfolio-aware Event Triage` concept. Existing Product and design artifacts remain preserved.

## Current Phase

Opportunity revalidation planning is complete. Additional Figma, deck, and UI polish is paused pending behavioral evidence.

## Current Gate

```text
OPPORTUNITY: UNDER REVALIDATION
PORTFOLIO-AWARE RELEVANCE: SUPPORTED HYPOTHESIS
EVENT-FIRST: UNVALIDATED
TRIAGE OUTCOME: UNVALIDATED
HIGH-FIDELITY EXECUTION: PASS
PRODUCTION: BLOCKED
```

Unchanged test status:

```text
SCREEN READER: NOT_TESTED
REAL APP/WEB BACK: NOT_TESTED
```

## Current Task

Execute the three-test plan in `docs/OPPORTUNITY_REVALIDATION_PLAN.md`. Do not resume UI/Figma/deck polish or treat Prototype/QA evidence as user validation.

## Completed Since Previous Checkpoint

- Created `docs/OPPORTUNITY_REVALIDATION_PLAN.md` with exactly three tests:
  1. Recent Behavior / Frequency
  2. Event-first versus Portfolio-first Entry Model Comparison
  3. Outcome Incremental Value
- Added an anonymized evidence-capture schema, predeclared interpretation rules, and four exclusive post-evidence gates.
- Reframed only the validation workstream from `Portfolio-aware Event Triage` to `Portfolio-aware Event Relevance`.
- Marked Event-first, Mobile as Triage-only, and the current Outcome layer as test variables.
- Preserved the PRD, `docs/DESIGN.md`, prototype, screenshots, QA reports, case-study page, and deck unchanged.

## Locked Decisions

- Holding, Watchlist, Related-only, and Unconnected remain semantically distinct.
- Source, timestamp, stale, partial, unavailable, and insufficient-data trust treatments remain valid.
- Mobile must not reproduce the full Web analysis workspace.
- Existing Outcome semantics remain financially non-advisory while tested; no new Outcome is introduced.
- Existing Prototype, screenshots, QA reports, case-study page, and deck remain reusable validation stimuli, not user-validation evidence.
- Financial-safety constraints remain unchanged.
- Production remains `BLOCKED`.

## Active Design Hypotheses

- `SUPPORTED_HYPOTHESIS`: A user who encounters a market event benefits from seeing Event, Asset relationship, Personal / Portfolio context, and Evidence with data limits before deciding whether to continue deeper analysis.
- `UNDER_REVALIDATION`: `Portfolio-aware Event Triage` as the strongest Valley Mobile opportunity.
- `UNVALIDATED`: Event-first as the best primary entry; compare against Portfolio-first.
- `UNVALIDATED`: Mobile as Triage-only rather than Monitoring or Lightweight Analysis.
- `UNVALIDATED`: The current Relevance Outcome as a required layer; compare against Context Summary without Outcome.
- `UNVALIDATED`: Opportunity frequency and current-workaround cost.

## Production Blockers

- Phase 5.5 Production Data Contract
- Production Field definition
- Production Outcome Logic
- Source Freshness SLA
- Production Web Handoff Payload
- Actual API Integration
- Real User Validation
- Screen Reader Manual Test
- Production Acceptance Criteria

## Open Issues

- `NOT_STARTED`: Five target investors have not been recruited or interviewed.
- `NOT_STARTED`: Test 1, Test 2, and Test 3 evidence collection.
- `PAUSED`: Additional Figma, deck, and UI polish.
- `NOT_TESTED`: Screen reader manual reading order.
- `NOT_TESTED`: Real App/Web Back behavior.
- `BLOCKED`: Production contracts and integration.

## Files Changed

- `docs/OPPORTUNITY_REVALIDATION_PLAN.md`
- `docs/CURRENT_STATE.md`
- `docs/WORKLOG.md`

## Files To Read Next

1. `docs/CURRENT_STATE.md`
2. `docs/WORKLOG.md`
3. `docs/OPPORTUNITY_REVALIDATION_PLAN.md`
4. `docs/DESIGN.md` only when validation-stimulus meaning needs verification
5. `prototype/high-fidelity/index.html` only when preparing validation stimuli

## Next Exact Action

Recruit five target investors, prepare anonymized evidence-capture sheets from Section 7 of `docs/OPPORTUNITY_REVALIDATION_PLAN.md`, and run Test 1 with unaided recent-event recall before exposing any prototype or entry/outcome condition.

## Last Verification

- The validation plan contains all ten required sections and exactly three participant tests.
- Test 1 uses recent behavior rather than hypothetical preference.
- Test 2 compares equivalent Event-first and Portfolio-first conditions with counterbalanced order.
- Test 3 isolates Outcome incremental value through an A→B reveal while rotating fixture order.
- No participant result or user-validation claim is present; evidence collection is `NOT_STARTED`.
- Only the validation plan and recovery documents changed.
- Existing high-fidelity execution remains `PASS`; Production remains `BLOCKED`.
- `git diff --check`: `PASS`.

## Recovery Note

If a new chat starts, read this file first, then `docs/WORKLOG.md`, then `docs/OPPORTUNITY_REVALIDATION_PLAN.md`. Do not resume UI/Figma/deck polish before evidence changes the opportunity gate.
