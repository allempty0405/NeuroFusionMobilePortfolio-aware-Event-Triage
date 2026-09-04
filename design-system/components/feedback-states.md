# Feedback States

## 필수 상태

| 상태 | 화면 목적 | 주의 |
|---|---|---|
| Loading | 데이터를 불러오는 중임을 표시 | Skeleton만 두지 말고 텍스트 안내 |
| Empty Evidence | 표시할 근거가 없음을 설명 | Event가 중요하지 않다는 뜻으로 오해 금지 |
| Stale Data | 기준 시점이 오래됐음을 표시 | 마지막 업데이트 시점 필요 |
| Portfolio Unconnected | 개인 관련성 판단 한계를 설명 | 연결 유도와 판단 불가를 분리 |
| Permission Restricted | 권한/플랜 제한을 설명 | Event 중요도와 혼동 금지 |
| Handoff Error | Web 이동 실패와 재시도 안내 | 로컬 Context 유지 필요 |

## Outcome별 상태 톤

| Outcome | 상태 톤 |
|---|---|
| `CHECK_FURTHER` | 긴급 경보가 아니라 추가 확인 권유 |
| `NO_IMMEDIATE_CHECK_NEEDED` | 안전 선언이 아니라 즉시 확인 필요성이 낮음 |
| `INSUFFICIENT_DATA` | 부정적 신호가 아니라 판단 보류 |

## Error Copy 원칙

좋은 문구:

- `Web 분석으로 이동하지 못했습니다. 현재 Event와 관련 종목 정보는 유지됩니다.`
- `표시 가능한 근거가 부족해 추가 확인 여부를 판단할 수 없습니다.`
- `마지막 업데이트 이후 시간이 지나 최신 정보가 아닐 수 있습니다.`

피해야 할 문구:

- `위험합니다`
- `안전합니다`
- `지금 매수하세요`
- `문제없는 이벤트입니다`
