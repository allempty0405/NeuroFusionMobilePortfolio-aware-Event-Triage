# Data & Evidence

## Evidence Card

Evidence Card는 Outcome을 신뢰하게 만들기 위한 장치가 아니라, 사용자가 판단 근거와 한계를 확인하게 하는 장치입니다.

## 기본 필드

| 필드 | 목적 | 상태 |
|---|---|---|
| Evidence Type | 뉴스, 공시, 실적, 어닝콜 등 근거 성격 구분 | Concept 가능 |
| Source | 원문 또는 데이터 출처 | 필요 |
| Timestamp | 발생/발행/업데이트 시점 | 필요 |
| Summary | 근거 요약 | Concept 가능 |
| Related Asset | 어떤 종목과 연결되는지 | Concept 가능 |
| Data State | 충분/부족/오래됨/권한 제한 | 필요 |

## Source와 AI Summary 분리

권장 구조:

```text
AI 또는 시스템 요약
→ 근거 카드
→ Source / Timestamp
→ 원문 또는 Web 분석
```

주의:

- AI 요약을 원문처럼 보이게 하지 않는다.
- Source 없는 요약은 `INSUFFICIENT_DATA` 또는 `Source Missing` 상태를 제공한다.
- Source/Timestamp가 없는 정보를 확정적 판단처럼 표현하지 않는다.

## 실제 Portfolio Field

다음 필드는 Production Data Contract 확인 전까지 실제 화면 필수값으로 확정하지 않습니다.

- 보유 수량
- 매입 단가
- 평가금액
- 손익
- Portfolio 비중
- Exposure
- 계좌 정보
