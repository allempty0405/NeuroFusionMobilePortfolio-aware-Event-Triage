# Spacing, Radius, Shadow

## Spacing

Valley 스타일은 Tailwind와 유사한 `0.25rem` 기반 spacing을 포함합니다.

| 토큰 | 값 | 사용 |
|---|---:|---|
| `space-1` | 4px | 아이콘과 텍스트 사이 |
| `space-2` | 8px | 작은 요소 간격 |
| `space-3` | 12px | 카드 내부 보조 간격 |
| `space-4` | 16px | 카드 padding, 섹션 간 기본 |
| `space-5` | 20px | 모바일 화면 좌우 여백 후보 |
| `space-6` | 24px | 큰 섹션 간격 |
| `space-8` | 32px | 화면 주요 구획 |

## Radius

Valley 스타일에는 작은 반경부터 큰 반경까지 존재하지만, 제품성 있는 투자분석 UI에서는 과도하게 둥근 장식보다 명확한 정보 구획이 중요합니다.

| 토큰 | 값 | 사용 |
|---|---:|---|
| `radius-base` | 3px | 작은 chip, 입력 내부 |
| `radius-sm` | 4px | badge, 작은 버튼 |
| `radius-md` | 6px | input, filter |
| `radius-lg` | 8px | 주요 card, bottom sheet |
| `radius-xl` | 12px | 화면 대표 card |
| `radius-2xl` | 16px | modal, 큰 grouped surface |

권장:

- 반복 카드: 8px 이하 우선.
- 모바일 상세의 가장 중요한 summary card만 12px까지 허용.
- 카드 안에 카드를 반복 중첩하지 않는다.

## Shadow

Valley 스타일의 대표 카드 그림자:

```css
--shadow-card: 0px 3px 5px #0000000a;
```

사용 원칙:

- 정보 구획은 그림자보다 배경, 경계, 간격으로 구분한다.
- Shadow는 floating CTA, sheet, popover처럼 실제 elevation이 필요한 곳에만 쓴다.
- 금융 정보 화면에서는 강한 그림자와 장식적 glow를 피한다.

## Layout

| 토큰 | 값 | 의미 |
|---|---:|---|
| `valley-gnb-bar-height` | 54px | 상단 내비게이션 높이 참고 |
| `valley-lnb-width` | 240px | 데스크톱 사이드바 참고 |
| `valley-lnb-mobile-width` | 334px | 모바일 내비게이션 패널 참고 |

모바일 화면에서는 첫 viewport 안에 다음 순서가 들어와야 합니다.

```text
Mock/Trust Disclosure
→ Relationship
→ Outcome
→ Event / Asset Identity
→ Short Reason
```
