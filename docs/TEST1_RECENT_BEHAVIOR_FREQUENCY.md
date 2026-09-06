# Test 1 — Recent Behavior / Frequency

Last Updated: 2026-09-07 02:02 KST
Status: `READY_FOR_RECRUITMENT`
Evidence Collection: `NOT_STARTED`
Test Gate: `NOT_EVALUABLE`

This document is the execution packet and result shell for Test 1 in `docs/OPPORTUNITY_REVALIDATION_PLAN.md`.

It does not contain participant evidence yet. Do not convert blank fields, researcher expectations, prototype behavior, competitor patterns, or existing QA results into findings.

## 1. Test Boundary

### Purpose

Verify whether target investors actually encounter market events and need to connect them to their own assets often enough for the opportunity to matter.

### Fixed sample

Exactly five eligible target investors:

```text
P01
P02
P03
P04
P05
```

Participant identities, contact details, account numbers, balances, and exact holdings must not be stored in this repository.

### Current safeguards

- Use 30-day unaided recall first.
- Extend to 31–90 days only when no qualifying 30-day episode can be recalled; record the extended window.
- Reconstruct actual chronology rather than hypothetical preference.
- Do not show or describe the prototype, Event-first, Portfolio-first, Outcomes, competitor examples, or working solution hypothesis before recall is complete.
- Do not turn a participant comment directly into a Product requirement.
- Separate participant evidence and moderator observation from researcher interpretation.
- Do not change the predeclared signal thresholds after reviewing evidence.
- Do not claim market prevalence from five participants.

## 2. Recruitment Eligibility

A participant is eligible only when all required criteria are satisfied.

| Criterion | Required answer |
|---|---|
| Age and legal capacity to consent | Adult and able to consent |
| Portfolio behavior | Currently manages or actively monitors a self-directed investment portfolio |
| Recent monitoring behavior | Personally checks portfolio assets, watchlist assets, or market information rather than delegating all activity |
| Session availability | Can complete a 30–40 minute moderated session |
| Recall participation | Will discuss behavior without disclosing account credentials, balances, or exact holdings |
| Research independence | Is not being recruited to provide a preferred answer or evaluate visual polish |

Exclude a candidate when they:

- do not currently manage or monitor a self-directed portfolio;
- can participate only by revealing sensitive financial or account information;
- have already been shown the working prototype or Outcome definitions specifically for this study;
- cannot consent to research note-taking;
- are being counted only to fill the sample despite failing eligibility.

### Neutral screener questions

Ask before assigning a participant ID:

1. “현재 본인이 직접 관리하거나 정기적으로 확인하는 투자 포트폴리오가 있나요?”
2. “투자 관련 정보나 자산 상태를 보통 어느 정도 주기로 직접 확인하나요?”
3. “투자 판단을 전부 다른 사람에게 위임한 상태인가요, 아니면 본인이 일부라도 직접 확인하나요?”
4. “30–40분 동안 최근 실제 정보 확인 과정을 이야기하는 인터뷰에 참여할 수 있나요?”
5. “계좌번호, 잔액, 정확한 보유 종목·수량을 공개하지 않는 조건으로 참여하는 데 동의하나요?”

Do not ask whether the candidate wants event alerts, portfolio relevance, a Triage feature, or a check-status Outcome.

## 3. Neutral Recruitment Message

> 개인 투자자가 최근 시장 정보를 확인했던 실제 과정을 알아보기 위한 30–40분 인터뷰를 진행합니다. 특정 투자 서비스나 화면을 평가하는 조사가 아니며, 최근 실제로 어떤 정보를 어디서 접하고 어떻게 확인했는지 여쭙습니다. 계좌번호, 잔액, 정확한 보유 종목·수량 등 민감한 금융정보는 요청하거나 기록하지 않습니다. 현재 직접 투자 포트폴리오를 관리하거나 꾸준히 모니터링하고 계시다면 참여 가능 여부를 알려주세요.

Do not add language that reveals the Portfolio-aware Event Relevance hypothesis, promises a new feature, or asks whether the participant wants the proposed solution.

## 4. Participant Recruitment Tracker

| Participant ID | Recruitment status | Eligibility verified | Consent recorded | Session status | Notes |
|---|---|---|---|---|---|
| `P01` | `NOT_RECRUITED` | `NOT_CHECKED` | `NO` | `NOT_SCHEDULED` | — |
| `P02` | `NOT_RECRUITED` | `NOT_CHECKED` | `NO` | `NOT_SCHEDULED` | — |
| `P03` | `NOT_RECRUITED` | `NOT_CHECKED` | `NO` | `NOT_SCHEDULED` | — |
| `P04` | `NOT_RECRUITED` | `NOT_CHECKED` | `NO` | `NOT_SCHEDULED` | — |
| `P05` | `NOT_RECRUITED` | `NOT_CHECKED` | `NO` | `NOT_SCHEDULED` | — |

Allowed recruitment states:

```text
NOT_RECRUITED
CONTACTED
SCREENING
ELIGIBLE
INELIGIBLE
SCHEDULED
COMPLETED
WITHDREW
NO_SHOW
```

Only five eligible participants may be assigned `P01`–`P05`. Replacements inherit the vacant anonymized ID; document the replacement without retaining the excluded person’s identity in Git.

## 5. Pre-session Checklist

Complete before every session:

- [ ] Participant meets every eligibility criterion.
- [ ] Participant is assigned one anonymized ID from `P01`–`P05`.
- [ ] Consent for the session and note-taking is recorded outside sensitive account data.
- [ ] Moderator has not sent the prototype, stimuli, Outcome labels, competitor examples, or solution explanation.
- [ ] Participant has been told not to disclose account credentials, balances, exact holdings, or exact quantities.
- [ ] `docs/TEST1_EVIDENCE_CAPTURE.csv` is ready with the correct participant ID.
- [ ] Moderator understands the 30-day-first and 90-day-fallback rule.
- [ ] Moderator will label `OBSERVATION` and `INTERPRETATION` separately.

## 6. Moderator Script

### Opening

> 오늘은 특정 화면이나 서비스를 평가하지 않습니다. 최근 시장 정보를 실제로 접하고 확인했던 과정을 시간 순서대로 이해하려고 합니다. 기억나지 않는 부분은 추측하지 말고 기억나지 않는다고 말씀해 주세요. 계좌번호, 잔액, 정확한 종목·수량 같은 민감한 정보는 말씀하지 않으셔도 되고 기록하지 않습니다.

### Unaided recent-event recall

Ask first, without examples:

> 최근 30일 안에 투자 판단이나 추가 확인 행동을 유발한 시장 이벤트가 있었나요? 가장 최근 사례부터 이야기해 주세요.

If the participant cannot recall a qualifying 30-day episode:

> 최근 30일에는 떠오르는 사례가 없는 것으로 기록하겠습니다. 범위를 최근 90일까지 넓히면 기억나는 사례가 있나요?

Mark any resulting episode `31_TO_90_DAYS`; do not recode it as 30-day evidence.

### Chronology reconstruction

Use neutral probes in this order:

1. “처음 무엇을 보거나 들어서 확인을 시작했나요?”
2. “그 정보는 어디에서 접했나요?”
3. “그다음 실제로 무엇을 했나요?”
4. “관련 자산을 확인하는 과정이 있었다면 언제, 왜 했나요?”
5. “어떤 앱, 화면, 검색, 문서를 거쳤나요?”
6. “각 단계에서 무엇을 이해하려고 했나요?”
7. “전체 과정은 대략 얼마나 걸렸나요?”
8. “정보가 부족하거나 맥락을 놓쳐 생긴 결과가 있었나요?”
9. “비슷한 일이 최근 30일 동안 대략 몇 번 있었나요?”
10. “그 과정에서 본인 자산과의 관계 확인이 필요하지 않았던 부분도 있었나요?”

### Verbatim capture

- Capture only short excerpts that preserve the participant’s meaning.
- Do not rewrite interpretation as a quote.
- When exact wording is uncertain, record a paraphrase and label it `OBSERVATION`, not verbatim evidence.

### Closing

> 오늘 말씀해 주신 내용은 실제 행동과 확인 과정에 대한 조사에만 사용합니다. 이후 다른 비교 테스트를 제안할 수 있지만, 오늘 인터뷰 결과만으로 기능이나 요구사항이 확정되지는 않습니다.

Do not show Test 2 or Test 3 stimuli until the Test 1 session notes for that participant are complete.

## 7. Evidence Capture Instructions

Use `docs/TEST1_EVIDENCE_CAPTURE.csv` as the canonical row-level capture sheet.

- Keep the header unchanged after the first session begins.
- Add one row per distinct episode and repeat only the anonymized participant metadata needed for analysis.
- Quote CSV cells that contain commas or line breaks.

Create one row per distinct episode. If a participant recalls no episode, retain one row with:

```text
episode_id = NONE
recall_window = NO_QUALIFYING_EPISODE
recent_trigger = NONE_RECALLED
```

### Required fields

- Participant ID
- Session date
- Eligibility and consent status
- Experience band and broad monitoring pattern
- Episode ID and recall window
- Recent trigger
- Source / channel
- Asset relationship
- Whether personal asset relationship was part of the task
- Actual workaround chronology
- Number of tools / screens
- Approximate elapsed effort
- Missed-context consequence
- Approximate 30-day frequency
- Short verbatim evidence
- Moderator observation
- Researcher interpretation
- Contradicting evidence
- Recall limitation

### Evidence labels

```text
FACT
= session metadata or direct participant-provided fact

OBSERVATION
= what the participant said or did, without causal inference

INTERPRETATION
= researcher synthesis that must remain separate from evidence

UNKNOWN
= missing or unrecalled information
```

## 8. Participant-by-participant Episode Summary

Do not complete these summaries until the corresponding session evidence is captured.

### P01

```text
SESSION STATUS: NOT_STARTED
30-DAY QUALIFYING EPISODES: UNKNOWN
90-DAY FALLBACK USED: UNKNOWN
PERSONAL ASSET RELATIONSHIP PART OF TASK: UNKNOWN
WORKAROUND COST: UNKNOWN
MISSED-CONTEXT CONSEQUENCE: UNKNOWN
CONTRADICTING EVIDENCE: UNKNOWN
RECALL LIMITATION: UNKNOWN
```

### P02

```text
SESSION STATUS: NOT_STARTED
30-DAY QUALIFYING EPISODES: UNKNOWN
90-DAY FALLBACK USED: UNKNOWN
PERSONAL ASSET RELATIONSHIP PART OF TASK: UNKNOWN
WORKAROUND COST: UNKNOWN
MISSED-CONTEXT CONSEQUENCE: UNKNOWN
CONTRADICTING EVIDENCE: UNKNOWN
RECALL LIMITATION: UNKNOWN
```

### P03

```text
SESSION STATUS: NOT_STARTED
30-DAY QUALIFYING EPISODES: UNKNOWN
90-DAY FALLBACK USED: UNKNOWN
PERSONAL ASSET RELATIONSHIP PART OF TASK: UNKNOWN
WORKAROUND COST: UNKNOWN
MISSED-CONTEXT CONSEQUENCE: UNKNOWN
CONTRADICTING EVIDENCE: UNKNOWN
RECALL LIMITATION: UNKNOWN
```

### P04

```text
SESSION STATUS: NOT_STARTED
30-DAY QUALIFYING EPISODES: UNKNOWN
90-DAY FALLBACK USED: UNKNOWN
PERSONAL ASSET RELATIONSHIP PART OF TASK: UNKNOWN
WORKAROUND COST: UNKNOWN
MISSED-CONTEXT CONSEQUENCE: UNKNOWN
CONTRADICTING EVIDENCE: UNKNOWN
RECALL LIMITATION: UNKNOWN
```

### P05

```text
SESSION STATUS: NOT_STARTED
30-DAY QUALIFYING EPISODES: UNKNOWN
90-DAY FALLBACK USED: UNKNOWN
PERSONAL ASSET RELATIONSHIP PART OF TASK: UNKNOWN
WORKAROUND COST: UNKNOWN
MISSED-CONTEXT CONSEQUENCE: UNKNOWN
CONTRADICTING EVIDENCE: UNKNOWN
RECALL LIMITATION: UNKNOWN
```

## 9. Cross-participant Evidence Tables

### Anonymized Test 1 evidence summary

| Participant | Qualifying 30-day episodes | 90-day fallback | Relationship part of task | Tools/screens | Effort | Consequence | Approx. frequency | Status |
|---|---:|---|---|---:|---|---|---|---|
| `P01` | `UNKNOWN` | `UNKNOWN` | `UNKNOWN` | `UNKNOWN` | `UNKNOWN` | `UNKNOWN` | `UNKNOWN` | `NOT_STARTED` |
| `P02` | `UNKNOWN` | `UNKNOWN` | `UNKNOWN` | `UNKNOWN` | `UNKNOWN` | `UNKNOWN` | `UNKNOWN` | `NOT_STARTED` |
| `P03` | `UNKNOWN` | `UNKNOWN` | `UNKNOWN` | `UNKNOWN` | `UNKNOWN` | `UNKNOWN` | `UNKNOWN` | `NOT_STARTED` |
| `P04` | `UNKNOWN` | `UNKNOWN` | `UNKNOWN` | `UNKNOWN` | `UNKNOWN` | `UNKNOWN` | `UNKNOWN` | `NOT_STARTED` |
| `P05` | `UNKNOWN` | `UNKNOWN` | `UNKNOWN` | `UNKNOWN` | `UNKNOWN` | `UNKNOWN` | `UNKNOWN` | `NOT_STARTED` |

### Contradicting evidence

| Participant | Observation that weakens the hypothesis | Evidence reference | Researcher interpretation |
|---|---|---|---|
| — | `NOT_COLLECTED` | — | — |

### Personal relationship not part of task

| Participant | Episode | What the participant actually needed | Evidence reference |
|---|---|---|---|
| — | — | `NOT_COLLECTED` | — |

### Recall limitations

| Participant | Limitation | Effect on interpretation |
|---|---|---|
| — | `NOT_COLLECTED` | — |

## 10. Test 1 Gate Evaluation

Do not change these thresholds after evidence collection begins.

```text
STRONG_SIGNAL
= at least 3/5 participants recall at least two qualifying 30-day episodes
AND at least 3/5 show material workaround cost:
   - two or more tools/screens, OR
   - more than approximately five minutes, OR
   - a concrete missed-context consequence

MIXED_SIGNAL
= the behavior exists for at least 3/5 participants
BUT frequency or cost is inconsistent

WEAK_SIGNAL
= fewer than 3/5 recall a qualifying 30-day episode
OR personal asset relationship is rarely part of the real task
```

Current evaluation:

```text
TEST 1 GATE: NOT_EVALUABLE
REASON: 0/5 sessions completed; no participant evidence exists.
```

This sample provides directional discovery evidence only. It does not estimate market prevalence.

## 11. Implication For Test 2 And Test 3

Current implication:

```text
TEST 2: HOLD
TEST 3: HOLD
```

After all five Test 1 sessions:

- `STRONG_SIGNAL`: Proceed to Test 2 and Test 3 as planned.
- `MIXED_SIGNAL`: Proceed only to distinguish entry/outcome value from an inconsistent-frequency opportunity; carry the uncertainty forward.
- `WEAK_SIGNAL`: Do not automatically proceed. Review whether Test 2/3 can answer a remaining decision or would only polish a weak opportunity. Record a stop/reframe recommendation before exposing more stimuli.

No Test 1 result changes the Production gate.
