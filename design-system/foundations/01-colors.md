# Colors

Valley 스타일은 `definitive → semantic → component state`의 3단 구조로 읽는 것이 가장 자연스럽습니다.

## 1. Primitive Color

`definitive-*`는 색상 원본 팔레트입니다. 화면에서는 직접 사용하기보다 semantic token을 통해 사용하는 것을 권장합니다.

| 역할 | 대표 토큰 | 용도 |
|---|---|---|
| Neutral | `definitive-zinc-*` | 배경, 텍스트, 경계, Skeleton |
| Primary | `definitive-green-*` | 핵심 액션, 긍정/활성 상태 |
| Secondary | `definitive-teal-*` | 보조 강조, 관계 정보 |
| Tertiary | `definitive-sky-*` | 정보성 강조 |
| Warning | `definitive-orange-*` | 주의, 오래된 데이터, 제한 |
| Error | `definitive-red-*` | 오류, 실패, 위험 상태 |
| Info | `definitive-blue-*` | 안내, 링크, 보조 설명 |

## 2. Semantic Color

| Semantic | Valley 계열 | 모바일 투자분석 사용 |
|---|---|---|
| `semantic-basic` | Zinc | 기본 배경, 텍스트, 경계 |
| `semantic-primary` | Green | 주요 CTA, CHECK_FURTHER가 아닌 일반 primary action |
| `semantic-secondary` | Teal | Portfolio/relationship 보조 강조 |
| `semantic-tertiary` | Sky | 정보 안내, Web handoff 보조 맥락 |
| `semantic-success` | Green | 성공 상태. 투자 수익 의미로 오해되지 않게 주의 |
| `semantic-warning` | Orange | Stale, insufficient, access-limited 같은 주의 상태 |
| `semantic-error` | Red | Handoff error, loading failure |
| `semantic-info` | Blue | Source, 도움말, 기준 시점 안내 |

## 3. Surface

| 토큰 | 값의 의미 | 사용 위치 |
|---|---|---|
| `global-dashboard-mobile` | 모바일 대시보드 배경 | 화면 전체 배경 |
| `global-dashboard-desktop` | 데스크톱 대시보드 배경 | 데스크톱 미리보기 Shell |
| `global-card-10` | 기본 카드 | Event/Asset/Relationship Card |
| `global-card-20` | 보조 카드 | Evidence, 상태 설명 |
| `global-dropdown` | Dropdown / Popover | 필터, 메뉴 |
| `global-skeleton` | Skeleton | 로딩 상태 |

## 4. Outcome 색상 원칙

Allowed Outcomes는 투자 추천이 아니므로 색상 의미를 조심해서 써야 합니다.

| Outcome | 권장 색상 | 이유 |
|---|---|---|
| `CHECK_FURTHER` | `warning` 또는 `info` 중심 | 추가 확인 필요. 매수/매도 신호로 보이지 않게 함 |
| `NO_IMMEDIATE_CHECK_NEEDED` | `basic` 또는 낮은 `success` | 안전/무위험처럼 보이지 않게 강한 green 사용 자제 |
| `INSUFFICIENT_DATA` | `warning` 중심 | 부정적 사건이 아니라 판단 보류 상태 |

## 5. 금지 사용

- 빨강/초록만으로 손익, 위험, 행동을 암시하지 않는다.
- `NO_IMMEDIATE_CHECK_NEEDED`에 강한 성공 색을 쓰지 않는다.
- `CHECK_FURTHER`를 위험 등급처럼 보이게 하지 않는다.
- 실제 데이터 부족 상태를 오류처럼 과장하지 않는다.
