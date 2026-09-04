# Source & Boundary

## 참고 Source

사용자가 제공한 Valley AI 웹 개발자도구 CSS 덤프를 주요 참고 자료로 사용했습니다.

확인된 대표 토큰군:

- `--definitive-*`: 원시 색상 팔레트
- `--semantic-*`: 의미 기반 색상
- `--bg-*`: 배경 상태 색상
- `--border-*`: 경계선 상태 색상
- `--text-*`: 텍스트 상태 색상
- `--global-*`: 대시보드, 카드, 드롭다운 같은 전역 표면 색상
- `--chart-*`: 차트 색상
- `--membership-*`: 플랜/멤버십 표현용 그라디언트
- `--text-*`, `--font-weight-*`: 타이포그래피
- `--radius-*`, `--shadow-card`: 형태와 깊이
- `--valley-*`: 내비게이션과 viewport 관련 레이아웃 값

## 이 디자인 시스템의 범위

이 자료는 `Portfolio-aware Event Triage` 모바일 상세 화면 제작을 위한 참고 디자인 시스템입니다.

포함:

- 모바일 투자분석 화면용 색상 토큰
- 한국어 중심 타이포그래피 기준
- 카드, 버튼, 배지, 탭, 상태 UI의 사용 원칙
- Event, Asset, Portfolio, Evidence, Handoff 정보 구조
- Mock/Production 경계와 금융 Trust 체크리스트

제외:

- Valley AI 전체 제품 디자인 시스템
- Valley 원본 UI의 1:1 복제
- 실제 API 또는 데이터 계약
- 투자 판단 로직
- 매수/매도/보유 추천 문구
- 실제 포트폴리오 값 표시 정책

## Production 사용 전 필요한 검토

| 항목 | 현재 상태 | 필요한 검토 |
|---|---|---|
| 실제 데이터 필드 | 미확정 | Phase 5.5 Data Contract 확인 |
| Outcome 로직 | 미확정 | Product/Data/Compliance 검토 |
| Handoff payload | 미확정 | Web/Frontend/Backend 계약 |
| 개인정보 표시 | 미확정 | Privacy/Masking 정책 |
| 접근성 | 초안 | 모바일 실기기 및 Screen Reader 검증 |
