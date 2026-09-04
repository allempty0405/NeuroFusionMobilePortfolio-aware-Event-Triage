# Trust & Data State Pattern

## Trust 정보의 위치

Trust 정보는 숨겨진 약관이 아니라, 사용자가 Outcome을 해석하기 전에 확인 가능한 보조 정보여야 합니다.

권장 위치:

1. 화면 상단 Mock/Data Disclosure
2. Outcome 근처의 짧은 상태 라벨
3. Evidence Card 하단 Source/Timestamp
4. 확장 영역의 데이터 한계 설명

## 상태 모델

| 상태 | 표시해야 할 것 |
|---|---|
| Fresh | 기준 시점 또는 업데이트 시점 |
| Stale | 마지막 업데이트 시점과 최신성 한계 |
| Missing Evidence | 근거 부족 이유 |
| Source Missing | 출처 미확인 상태 |
| Permission Restricted | 권한 제한과 가능한 다음 행동 |
| Mock Only | 실제 투자 데이터가 아님 |
| Unknown | 확인할 수 없는 필드를 추론하지 않음 |

## 금지

- 출처 없는 요약을 확정 정보처럼 표시하지 않는다.
- 오래된 데이터를 최신 데이터처럼 표시하지 않는다.
- 데이터 부족을 악재처럼 표현하지 않는다.
- 권한 제한을 Event 중요도처럼 보이게 하지 않는다.
- Mock 데이터를 실제 Portfolio 값처럼 보이게 하지 않는다.
