# Buttons & CTA

## 역할

모바일 투자분석 화면의 버튼은 사용자가 다음 행동을 선택하게 돕습니다. 투자 행동을 유도하지 않습니다.

## Button Types

| 유형 | 용도 | 예 |
|---|---|---|
| Primary CTA | Web 분석으로 이동 | `Web에서 자세히 보기` |
| Secondary CTA | 근거 확장, 원문 보기 | `근거 보기`, `출처 확인` |
| Tertiary CTA | 닫기, 나중에 보기 | `지금은 확인하지 않기` |
| Retry CTA | 실패 회복 | `다시 시도` |
| Disabled CTA | 권한/데이터 부족 | `권한 필요`, `데이터 부족` |

## Handoff CTA

권장 문구:

- `Web에서 자세히 보기`
- `실적 및 전망으로 이동`
- `관련 종목 분석 보기`

피해야 할 문구:

- `매수 기회 확인`
- `지금 투자하기`
- `위험 종목 보기`
- `수익 가능성 확인`

## 상태

| 상태 | 규칙 |
|---|---|
| Default | 목적지가 명확해야 함 |
| Loading | 버튼 내부 또는 인접 영역에 진행 상태 표시 |
| Disabled | 왜 사용할 수 없는지 설명 |
| Error | Retry와 오류 이유를 함께 제공 |
| Success Simulation | Concept 시뮬레이션임을 숨기지 않음 |

## 크기

- 최소 터치 영역: 44x44px
- 모바일 주요 CTA는 화면 하단 sticky 사용 가능
- Sticky CTA가 Evidence 또는 Source 정보를 가리지 않도록 하단 여백 확보
