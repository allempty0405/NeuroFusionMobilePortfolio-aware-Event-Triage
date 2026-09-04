# Mobile Design QA Checklist

## Scope

- [ ] 단일 `Portfolio-aware Event Triage` 상세 화면 범위를 유지한다.
- [ ] Mobile은 Triage Layer, Web은 Analysis Workspace로 분리한다.
- [ ] Web 화면을 모바일에 그대로 축소하지 않는다.

## First Viewport

- [ ] Mock 또는 Data State 표시가 보인다.
- [ ] Relationship이 보인다.
- [ ] Outcome이 보인다.
- [ ] Event / Asset Identity가 보인다.
- [ ] Short Reason이 보인다.
- [ ] 긴 Evidence를 읽기 전 1차 판단이 가능하다.

## Relationship

- [ ] Holding과 Watchlist가 구분된다.
- [ ] Related-only를 개인 보유처럼 표현하지 않는다.
- [ ] Multiple Asset 상태에서 대표 자산과 추가 자산이 구분된다.
- [ ] Portfolio Unconnected 상태에서 판단 한계가 보인다.

## Outcome

- [ ] `CHECK_FURTHER`가 투자 행동 권유로 보이지 않는다.
- [ ] `NO_IMMEDIATE_CHECK_NEEDED`가 안전/무위험으로 보이지 않는다.
- [ ] `INSUFFICIENT_DATA`가 부정적 Event로 보이지 않는다.
- [ ] Outcome 이유와 한계가 함께 보인다.

## Evidence & Trust

- [ ] Source가 있다.
- [ ] Timestamp 또는 Unknown 상태가 있다.
- [ ] Evidence가 없을 때 근거를 발명하지 않는다.
- [ ] Stale Data 상태가 설명된다.
- [ ] Permission 상태가 설명된다.
- [ ] Mock Data임이 유지된다.

## Interaction

- [ ] Evidence 확장/접기가 가능하다.
- [ ] Optional Detail 확장/접기가 가능하다.
- [ ] Handoff CTA 목적지가 문구로 설명된다.
- [ ] Handoff Error에서 Retry가 가능하다.
- [ ] Error 이후 Event/Asset/Relationship Context가 유지된다.

## Accessibility

- [ ] 터치 영역이 최소 44x44px이다.
- [ ] 색상만으로 상태를 전달하지 않는다.
- [ ] Focus 표시가 있다.
- [ ] 긴 한국어/영문 제목이 잘리지 않는다.
- [ ] 360x800, 390x844에서 핵심 정보가 겹치지 않는다.
- [ ] Reduced Motion 설정을 존중한다.

## Financial Safety

- [ ] 매수/매도/보유 추천 문구가 없다.
- [ ] 수익 보장 또는 가격 방향 단정이 없다.
- [ ] 실제 Portfolio 금액/수량/계좌 정보가 없다.
- [ ] 경쟁사 패턴을 Production Requirement로 승격하지 않는다.
