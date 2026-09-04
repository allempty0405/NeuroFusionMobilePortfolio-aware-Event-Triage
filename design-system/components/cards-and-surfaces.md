# Cards & Surfaces

## Surface Hierarchy

| 레벨 | 역할 | 권장 토큰 |
|---|---|---|
| Page | 전체 배경 | `--nf-surface-dashboard-mobile` |
| Primary Card | Relationship + Outcome 요약 | `--nf-surface-card` |
| Secondary Card | Event / Asset 정보 | `--nf-surface-card` |
| Evidence Card | 근거와 출처 | `--nf-surface-card-muted` |
| Feedback Surface | Loading, Empty, Error | 상태별 semantic surface |

## 카드 사용 원칙

- 카드 안에 카드를 과도하게 중첩하지 않는다.
- 첫 화면에서는 핵심 판단 카드 수를 줄인다.
- 정보가 같은 중요도라면 같은 surface level을 사용한다.
- Relationship, Outcome, Event Identity가 서로 경쟁하지 않게 배치한다.

## Portfolio-aware Event Triage 요약 카드

포함 권장:

1. Mock 또는 Data State 표시
2. Portfolio / Watchlist / Related-only 관계
3. Outcome
4. 짧은 이유
5. 핵심 관련 Asset

포함 금지:

- 실제 보유 금액
- 실제 수익률
- 매수/매도 암시
- 근거 없는 중요도 점수

## Dense Data

차트, 긴 표, 전문 원문, transcript는 모바일 첫 화면에 넣지 않고 확장 영역 또는 Web Handoff로 분리합니다.
