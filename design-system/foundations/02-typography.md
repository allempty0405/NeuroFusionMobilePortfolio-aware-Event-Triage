# Typography

## Font Family

Valley 스타일은 Pretendard Variable을 기본 글꼴로 사용합니다.

권장:

```css
font-family: "Pretendard Variable", Pretendard, ui-sans-serif, system-ui, sans-serif;
```

Fallback:

```css
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

## Type Scale

| 토큰 | 크기 | 행간 | 권장 용도 |
|---|---:|---:|---|
| `text-2xs` | 10px | 16px | 보조 메타, 캡션 |
| `text-xs` | 12px | 16px | Badge, Timestamp, Source |
| `text-sm` | 14px | 20px | 기본 설명, 카드 보조 텍스트 |
| `text-base` | 16px | 24px | 본문, 주요 설명 |
| `text-lg` | 18px | 28px | 화면 내 소제목 |
| `text-xl` | 20px | 28px | 모바일 상세 화면 제목 |
| `text-2xl` | 24px | 32px | 핵심 Outcome 또는 Section Header |

## Weight

| 토큰 | 값 | 사용 |
|---|---:|---|
| `font-weight-normal` | 400 | 긴 설명, 메타 |
| `font-weight-medium` | 500 | 기본 UI 텍스트 |
| `font-weight-semibold` | 600 | 카드 제목, 버튼 |
| `font-weight-bold` | 700 | 핵심 판단 문구 |

## 모바일 투자분석 화면 적용

| 정보 | 권장 강조 |
|---|---|
| Relationship | `text-sm` 또는 `text-base` + medium |
| Outcome | `text-xl` 또는 `text-2xl` + bold |
| Event Title | `text-base` 또는 `text-lg` + semibold |
| Short Reason | `text-sm` + medium |
| Evidence Summary | `text-sm` |
| Source / Timestamp | `text-xs` |

## 문장 규칙

- Outcome은 짧고 비추천성 문장으로 쓴다.
- Event 제목이 길면 2줄까지 허용하고, 3줄 이상은 상세 영역으로 넘긴다.
- Source와 Timestamp는 작게 두되 숨기지 않는다.
- 숫자 또는 상태의 의미가 불명확하면 Tooltip 또는 보조 문장을 붙인다.
