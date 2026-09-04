# Valley AI 참고 디자인 시스템

이 폴더는 Valley AI 웹 개발자도구에서 확인한 스타일 토큰을 참고해, `NeuroFusionMobilePractice`의 모바일 투자분석 화면 설계에 사용할 디자인 시스템 초안을 정리한 곳입니다.

원본 Valley 스타일을 그대로 복제하기보다, 모바일 `Portfolio-aware Event Triage` 화면에 필요한 구조적 원칙과 재사용 가능한 토큰으로 재구성했습니다.

## 빠른 탐색

| 폴더 | 내용 | 먼저 볼 파일 |
|---|---|---|
| `foundations/` | 색상, 타이포그래피, 간격, 모션, 접근성 같은 기본 규칙 | [01-colors.md](foundations/01-colors.md) |
| `tokens/` | 실제 화면 제작에서 가져다 쓸 수 있는 CSS 변수 | [valley-reference-tokens.css](tokens/valley-reference-tokens.css) |
| `components/` | 버튼, 카드, 배지, 탭, 데이터 표시, 상태 UI 규칙 | [README.md](components/README.md) |
| `patterns/` | 투자분석 화면에서 반복될 정보 구조와 화면 패턴 | [portfolio-aware-event-triage.md](patterns/portfolio-aware-event-triage.md) |
| `checklists/` | 디자인/구현 전 검수 체크리스트 | [mobile-design-qa.md](checklists/mobile-design-qa.md) |

## 사용 원칙

1. `tokens/valley-reference-tokens.css`를 먼저 읽고 색상, 글꼴, 반경, 그림자 기준을 확인한다.
2. 화면의 정보 구조는 `patterns/portfolio-aware-event-triage.md`를 우선 따른다.
3. 컴포넌트 형태는 `components/` 문서의 역할과 상태 규칙을 참고한다.
4. 디자인 또는 구현 후 `checklists/mobile-design-qa.md`로 과장된 투자 판단 표현, 개인정보 노출, 상태 누락을 확인한다.

## Valley 스타일에서 확인한 큰 방향

- 기본 배경은 밝은 회색 계열의 대시보드 톤이다.
- 카드는 흰색 또는 매우 옅은 회색 표면 위에 낮은 그림자와 얇은 경계로 구분된다.
- Primary 색은 green 계열, 보조 정보는 teal/sky/blue 계열을 사용한다.
- Error, Warning, Success, Info처럼 의미 기반 색상군이 분리되어 있다.
- Pretendard Variable을 중심으로 한 한국어 친화 타이포그래피를 사용한다.
- 모바일/데스크톱 배경 토큰이 분리되어 있어 화면 크기에 따라 표면 밀도를 조절할 수 있다.

## 주의 사항

- 이 문서는 Valley AI 공식 디자인 시스템이 아니다.
- 첨부된 CSS 덤프의 모든 변수를 옮기지 않았다. 현재 모바일 화면 제작에 필요한 대표 토큰만 선별했다.
- 투자 추천, 수익 예측, 매수/매도/보유 판단을 만드는 데 사용하지 않는다.
- 실제 Production 적용 전에는 접근성, 법무/컴플라이언스, 데이터 표시 정책 검토가 필요하다.
