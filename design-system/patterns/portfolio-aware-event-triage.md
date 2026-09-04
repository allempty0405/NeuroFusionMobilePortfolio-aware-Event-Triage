# Portfolio-aware Event Triage Pattern

## 화면 목적

사용자가 시장 Event를 봤을 때 다음 질문에 빠르게 답하게 한다.

```text
이 Event가 내 보유/관심 자산과 어떤 관계가 있고,
지금 더 확인해야 하는가?
```

## 정보 순서

권장 첫 viewport:

```text
Mock / Data Disclosure
→ Personal Relationship
→ Relevance Outcome
→ Event / Asset Identity
→ Short Reason
→ Primary Handoff CTA
```

확장 영역:

```text
Relationship Evidence
→ Source / Timestamp
→ Related Assets
→ Data State
→ Web-only Deep Analysis
```

## Relationship 분리

| 관계 | 의미 | 표시 원칙 |
|---|---|---|
| Holding | 사용자가 보유한 자산과 관련 | 가장 명시적으로 표시 |
| Watchlist | 관심종목과 관련 | 보유처럼 보이지 않게 분리 |
| Related-only | 관련 종목이지만 개인 관계 없음 | 개인화로 과장하지 않음 |
| Multiple | 여러 자산이 관련 | 대표 자산과 나머지를 분리 |
| Unconnected | Portfolio 연결 없음 | 판단 한계를 설명 |
| Unknown | 관계를 확인할 수 없음 | 추론하지 않음 |

## Outcome

| Outcome | 사용자에게 답하는 질문 |
|---|---|
| `CHECK_FURTHER` | 지금 추가 확인할 가치가 있는가? |
| `NO_IMMEDIATE_CHECK_NEEDED` | 지금 당장 확인하지 않아도 되는가? |
| `INSUFFICIENT_DATA` | 판단을 보류해야 하는가? |

Outcome은 거래 행동이 아닙니다.

## Web Handoff

Mobile은 모든 분석을 끝내지 않습니다. 다음 정보는 Web으로 넘기는 후보입니다.

- 전체 재무 분석
- 실적 및 전망
- 긴 원문
- 어닝콜 전문
- 기업 이벤트 스크립트
- 복잡한 차트와 표
- Portfolio Analysis

Handoff 전에 모바일에서 유지해야 할 Context:

- Event Type
- Event Title
- Related Asset
- Relationship 상태
- Outcome
- Evidence 요약
- Source / Timestamp

Production Handoff Payload는 아직 확정하지 않습니다.
