# Opportunity Revalidation Plan

Status: `READY_FOR_EVIDENCE_COLLECTION`

Product workstream: `Portfolio-aware Event Relevance`

Evidence collection: `NOT_STARTED`

This is a minimal opportunity-validation plan. It does not replace the PRD or `docs/DESIGN.md`, invalidate the existing high-fidelity execution, or unlock Production. No participant results have been collected at the time of writing.

## 1. Audit Trigger

The high-fidelity concept, static QA, Chromium visual QA, case-study page, and portfolio deck are complete. Those artifacts establish execution quality, state coverage, and visual safety; they do not establish that the opportunity is frequent, that Event-first is the best entry model, or that a check-status Outcome improves user decisions.

Further Figma, deck, and UI polish is paused until evidence addresses those product-validity questions.

The working hypothesis is therefore temporarily reframed from `Portfolio-aware Event Triage` to `Portfolio-aware Event Relevance`:

> A user who encounters a market event benefits from seeing Event, Asset relationship, Personal / Portfolio context, and Evidence with data limits before deciding whether to continue deeper analysis.

Existing prototypes, screenshots, QA reports, and deck materials remain valid as controlled validation stimuli. They are not user-validation evidence.

## 2. Hypotheses Under Revalidation

| ID | Hypothesis | Current status | Evidence needed |
|---|---|---|---|
| H1 | Investors encounter market events often enough, and connecting them to personal assets is costly enough, to justify a product opportunity. | `UNVALIDATED` | Recent-behavior episodes, frequency, workaround cost, and missed-context consequence. |
| H2 | Event-first is a better primary entry than Portfolio-first for the same event and portfolio context. | `UNVALIDATED` | Natural entry choice, task completion, comprehension, unnecessary information, and preference rationale. |
| H3 | A Relevance Outcome adds decision value beyond Event, Asset, Portfolio Context, Evidence, and Context Summary. | `UNVALIDATED` | Interpretation accuracy, advisory misunderstanding, confidence, usefulness, next action, and appropriate decision change. |
| H4 | Portfolio-aware relationship is useful when the relationship and data limits are visible. | `SUPPORTED_HYPOTHESIS` | Confirmation or contradiction across all three tests. |

The following are test variables, not locked requirements in this workstream:

- `Event-first`
- Mobile as `Triage-only` rather than Monitoring or Lightweight Analysis
- `CHECK_FURTHER`, `NO_IMMEDIATE_CHECK_NEEDED`, and `INSUFFICIENT_DATA` as a required Outcome layer

## 3. What Remains Valid

- Valley has adjacent Portfolio, major-holding event, Live News / Narratives, Financials, and Risk product assets.
- Holding, Watchlist, Related-only, and Unconnected remain semantically distinct.
- Source, timestamp, stale, partial, unavailable, and insufficient-data states remain necessary trust treatments.
- Mobile must not reproduce the full Web analysis workspace.
- Existing prototype, screenshots, QA evidence, case-study page, and deck remain reusable validation stimuli.
- Financial-safety rules remain unchanged: no investment recommendation, directional prediction, or unsupported personal-impact claim.
- Production remains `BLOCKED`.

## 4. Test 1 Protocol

### Recent Behavior / Frequency

**Purpose**

Determine whether target investors actually encounter market events and need to connect those events to their own assets often enough for the opportunity to matter.

**Participants**

- Five target investors who currently manage or actively monitor a self-directed investment portfolio.
- Use anonymized participant IDs (`P01`–`P05`); do not record account identifiers, balances, exact holdings, or other unnecessary personal financial data.

**Method**

- Conduct a 30–40 minute moderated interview per participant.
- Start with unaided recall of the most recent relevant event within the last 30 days.
- Ask for additional distinct episodes in that period. If none can be recalled, extend recall to 90 days and mark the different window explicitly.
- Do not show the concept, prototype, outcomes, or competitor examples before episode recall.
- Reconstruct what the participant actually did, in chronological order, rather than asking whether they would like the proposed product.

**Prompt sequence**

1. “최근 투자 판단이나 확인 행동을 유발한 시장 이벤트를 떠올려 주세요. 가장 최근 사례는 무엇이었나요?”
2. “그 이벤트를 처음 어디에서 봤나요?”
3. “내가 보유하거나 관심 있는 자산과 관련 있는지 어떻게 확인했나요?”
4. “확인 과정에서 어떤 앱, 화면, 검색 또는 문서를 거쳤나요?”
5. “대략 얼마나 걸렸고, 가장 번거롭거나 불확실했던 부분은 무엇이었나요?”
6. “맥락을 놓쳤거나 늦게 확인해서 생긴 결과가 있었나요?”
7. “이런 상황이 최근 30일 동안 몇 번 정도 있었나요?”

**Capture for each participant**

- Recent trigger
- Source / channel
- Asset relationship
- Current workaround
- Number of tools / screens used
- Time / effort
- Consequence of missing context
- Approximate frequency

**Measures**

- Number of recalled qualifying episodes in 30 days
- Number of tools / screens per episode
- Approximate elapsed time per episode
- Presence and severity of missed-context consequence
- Whether personal asset relationship was a required step in the actual behavior

**Test 1 interpretation rule**

- `STRONG_SIGNAL`: At least three of five participants recall two or more qualifying 30-day episodes, and at least three participants show material workaround cost: two or more tools/screens, more than approximately five minutes, or a concrete missed-context consequence.
- `MIXED_SIGNAL`: The behavior exists for at least three participants but frequency or cost is inconsistent.
- `WEAK_SIGNAL`: Fewer than three participants recall a qualifying 30-day episode, or personal asset relationship is rarely part of the real task.

These thresholds are directional for a five-person discovery study and do not estimate market prevalence.

## 5. Test 2 Protocol

### Entry Model Comparison

**Purpose**

Compare Event-first and Portfolio-first using the same event and portfolio fixture.

**Conditions**

- **A — Event-first:** The participant enters through an event and then sees asset relationship, personal context, evidence, and data limits.
- **B — Portfolio-first:** The participant enters through a portfolio or watchlist context and then sees the same event, relationship, evidence, and data limits.

Both conditions must contain equivalent facts, labels, evidence, data limitations, and depth. Only the entry and initial framing may differ. Use minimal validation stimuli derived from existing artifacts; do not produce new high-fidelity polish.

**Method**

- Run a within-participant comparison with the same five participants after Test 1.
- Counterbalance order: odd participant IDs see A then B; even participant IDs see B then A.
- Before revealing both conditions, give the neutral task: “이 이벤트가 내가 보유하거나 관심 있는 자산과 어떤 관련이 있는지 확인하고, 더 깊게 볼지 결정해 주세요.”
- First offer neutral entry choices without explaining the research hypothesis; record which route the participant chooses naturally.
- After each condition, ask the participant to explain the event, asset relationship, personal context, evidence limitation, and intended next step in their own words.
- After both conditions, ask which entry they prefer and what unnecessary information or friction each condition introduced.

**Measures**

- Natural entry choice
- Task completion without moderator rescue
- Context comprehension: Event, Asset relationship, Personal context, Evidence / limitation
- Perceived unnecessary information
- Reason for preferred entry
- Time to a stated “continue deeper / stop for now / cannot decide” choice, used descriptively rather than as a speed target

**Test 2 interpretation rule**

- `EVENT_FIRST_SUPPORTED`: At least three of five naturally choose or prefer Event-first, with no material comprehension or completion disadvantage.
- `PORTFOLIO_FIRST_SUPPORTED`: At least three of five naturally choose or prefer Portfolio-first, and Event-first adds avoidable search or context-reconstruction effort.
- `ENTRY_DEPENDS_ON_TRIGGER`: Preference follows the participant’s actual trigger source or task; neither entry is generally superior.
- `INCONCLUSIVE`: Preference is split and observed comprehension/completion differences are not meaningful.

## 6. Test 3 Protocol

### Outcome Incremental Value

**Purpose**

Determine whether the current Relevance Outcome adds useful, correctly interpreted decision support beyond the visible relationship, evidence, and context summary.

**Conditions**

- **A — Context Summary only:** Event → Asset → Portfolio Context → Evidence → Context Summary.
- **B — Context Summary plus Outcome:** The same content plus one of `CHECK_FURTHER`, `NO_IMMEDIATE_CHECK_NEEDED`, or `INSUFFICIENT_DATA`.

The conditions must be identical except for the Outcome layer. The Outcome remains after Evidence. Each participant sees matched fixtures covering all three existing Outcome labels. For each fixture, A is shown before B so the study measures the incremental effect of adding Outcome; rotate the order of the three Outcome fixtures across participants.

**Method**

- Use the same five participants after Test 2.
- For each matched fixture, show A and collect an initial next-action choice and confidence before revealing B.
- Show condition B and collect interpretation, next-action choice, confidence, and perceived usefulness again.
- Ask open-ended interpretation before showing any predefined answer choices.
- Probe explicitly for recommendation-like, danger/safety, urgency, or importance interpretations without suggesting that one answer is preferred.
- Record whether the Outcome changes the next action and whether that change is supported by the visible evidence and limitation.

**Measures**

- Interpretation accuracy for each Outcome
- Recommendation-like misunderstanding
- Confidence before and after Outcome exposure
- Perceived usefulness on a 1–5 scale, followed by rationale
- Next-action choice before and after Outcome exposure
- Whether any changed decision is appropriate to the visible evidence and data limits

**Interpretation anchors**

- `CHECK_FURTHER`: More information is worth checking based on the visible relationship or evidence; it does not mean danger, urgency, or an investment action.
- `NO_IMMEDIATE_CHECK_NEEDED`: Current visible evidence does not raise immediate check priority; it does not mean safe, no risk, or ignore.
- `INSUFFICIENT_DATA`: Relationship or evidence data is insufficient for the check-status judgment; it does not mean irrelevant or negative.

**Test 3 interpretation rule**

- `OUTCOME_SUPPORTED`: At least four of five participants interpret all encountered labels within the anchors, no participant forms a strong investment-action or safety conclusion from the Outcome, and at least three participants report useful, evidence-consistent decision support.
- `OUTCOME_NEEDS_REFRAME`: The layer adds useful orientation, but wording, hierarchy, or the check-status model causes one or more material misinterpretations.
- `SUMMARY_PREFERRED`: Context Summary performs as well as or better than the Outcome condition for comprehension and next action, while Outcome adds little value or unnecessary certainty.
- `OUTCOME_UNSAFE`: A recommendation-like, danger/safety, or false-certainty reading persists after neutral probing and cannot be attributed to a correctable presentation detail.

## 7. Evidence Capture Schema

Store research evidence in anonymized rows. Separate observation from interpretation and do not enter inferred production requirements.

### Participant table

| Field | Format / values |
|---|---|
| `participant_id` | `P01`–`P05` |
| `session_date` | ISO date |
| `experience_band` | Participant-provided broad band |
| `portfolio_monitoring_pattern` | Participant description; no account value or exact holdings |
| `consent_recorded` | `YES` / `NO` |
| `moderator` | Initials or role |

### Test 1 episode table

| Field | Format / values |
|---|---|
| `participant_id` | Participant key |
| `episode_id` | Participant-scoped ID |
| `recall_window` | `30_DAYS` / `31_TO_90_DAYS` |
| `recent_trigger` | Verbatim summary |
| `source_channel` | Observed channel |
| `asset_relationship` | `HOLDING` / `WATCHLIST` / `RELATED_ONLY` / `UNCONNECTED` / `UNKNOWN` |
| `current_workaround` | Ordered observed steps |
| `tools_screens_count` | Approximate integer |
| `elapsed_time` | Participant estimate |
| `missed_context_consequence` | `NONE` / `LOW` / `MATERIAL` + note |
| `approximate_frequency_30d` | Participant estimate or `UNKNOWN` |
| `verbatim_quote` | Short relevant excerpt |
| `evidence_type` | `FACT` / `OBSERVATION` / `INTERPRETATION` |

### Test 2 trial table

| Field | Format / values |
|---|---|
| `participant_id` | Participant key |
| `condition_order` | `A_B` / `B_A` |
| `natural_entry` | `EVENT_FIRST` / `PORTFOLIO_FIRST` / `NO_CLEAR_CHOICE` |
| `task_completion_a_b` | `COMPLETE` / `PARTIAL` / `FAILED` per condition |
| `moderator_rescue_a_b` | Count or note |
| `comprehension_a_b` | Event / Asset / Context / Evidence-limit fields |
| `unnecessary_information_a_b` | Participant response |
| `preferred_entry` | `EVENT_FIRST` / `PORTFOLIO_FIRST` / `DEPENDS` / `NONE` |
| `preference_reason` | Verbatim summary |
| `decision_time_a_b` | Descriptive elapsed time |

### Test 3 trial table

| Field | Format / values |
|---|---|
| `participant_id` | Participant key |
| `fixture_outcome` | One of the three existing labels |
| `fixture_order` | Rotated order of the three Outcome fixtures |
| `open_interpretation` | Verbatim response |
| `interpretation_accuracy` | `ACCURATE` / `PARTIAL` / `INACCURATE` |
| `misunderstanding_type` | `NONE` / `RECOMMENDATION` / `DANGER_SAFETY` / `URGENCY` / `IRRELEVANCE` / `OTHER` |
| `confidence_before_after` | Participant-rated scale with rationale |
| `usefulness_1_5` | Rating plus rationale |
| `next_action_before_after` | Observed choice |
| `decision_change` | `NONE` / `EVIDENCE_CONSISTENT` / `EVIDENCE_INCONSISTENT` |
| `verbatim_quote` | Short relevant excerpt |

### Session synthesis table

| Field | Format / values |
|---|---|
| `participant_id` | Participant key |
| `test_1_signal` | `STRONG` / `MIXED` / `WEAK` |
| `test_2_signal` | One Test 2 interpretation status |
| `test_3_signal` | One Test 3 interpretation status |
| `contradicting_evidence` | Observation that weakens the working hypothesis |
| `researcher_interpretation` | Clearly labeled interpretation |
| `open_question` | Unresolved issue |

## 8. Decision Rules

1. Evaluate each test against its declared rule before combining results.
2. Preserve raw observations and verbatim responses; do not replace them with synthesis.
3. Treat the five-person sample as directional discovery evidence, not frequency prevalence or market sizing.
4. Give observed recent behavior more weight than hypothetical preference.
5. Give comprehension and financial-safety failure more weight than preference or visual appeal.
6. Do not interpret Prototype QA, Chromium QA, or competitor patterns as user-demand evidence.
7. Do not re-lock Event-first or the Outcome layer when the result is `INCONCLUSIVE`, `ENTRY_DEPENDS_ON_TRIGGER`, `OUTCOME_NEEDS_REFRAME`, or `SUMMARY_PREFERRED`.
8. Record contradictory evidence explicitly. Do not average away a severe recommendation-like misunderstanding.
9. Choose exactly one post-evidence gate from the four options in Section 9.

## 9. Kill / Continue Criteria

| Post-evidence gate | Criteria |
|---|---|
| `CONTINUE` | Test 1 produces a strong opportunity signal; Event-first is supported or clearly appropriate for the observed trigger; and the Outcome is supported without material financial-safety misunderstanding. |
| `CONTINUE WITH REFRAME` | Portfolio-aware relevance has a strong or mixed real-behavior signal, but Portfolio-first, trigger-dependent entry, Context Summary, or a differently framed lightweight-analysis model performs better than the current Event-first triage model. |
| `VALID FOR PORTFOLIO, WEAK FOR PRODUCT` | Participants understand and value personal relationship context, but relevant events are too infrequent or low-cost, or neither entry/outcome condition creates enough incremental value to justify a standalone product direction. |
| `STOP / REPLACE` | Recent behavior does not support the problem, personal asset relationship is not a meaningful step, or the Outcome/entry model creates persistent false certainty or recommendation-like interpretation that cannot be safely corrected without replacing the concept. |

No result may unlock Production. A `CONTINUE` decision authorizes the next concept-validation step only.

## 10. Next Gate

Until participant evidence is collected:

```text
OPPORTUNITY: UNDER REVALIDATION
PORTFOLIO-AWARE RELEVANCE: SUPPORTED HYPOTHESIS
EVENT-FIRST: UNVALIDATED
TRIAGE OUTCOME: UNVALIDATED
HIGH-FIDELITY EXECUTION: PASS
PRODUCTION: BLOCKED
```

Immediate next action:

> Recruit five target investors, prepare anonymized evidence-capture sheets from Section 7, and run Test 1 using unaided recent-event recall before exposing any prototype or entry/outcome condition.

After all three tests are complete, choose exactly one:

```text
CONTINUE
CONTINUE WITH REFRAME
VALID FOR PORTFOLIO, WEAK FOR PRODUCT
STOP / REPLACE
```
