# Motion & Accessibility

## Motion

첨부 스타일에는 사용자의 reduced motion 설정을 존중하는 규칙이 포함되어 있습니다.

```css
@media (prefers-reduced-motion: reduce), (update: slow) {
  *, :before, :after {
    scroll-behavior: auto !important;
    transition-duration: 1ms !important;
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

## 적용 원칙

- 중요한 상태 변화는 애니메이션에만 의존하지 않는다.
- Loading, Handoff Success, Handoff Error는 텍스트 상태를 반드시 함께 표시한다.
- 확장/접기 애니메이션은 150-200ms 범위의 짧은 움직임으로 제한한다.
- 사용자가 reduced motion을 설정하면 전환 효과를 사실상 제거한다.

## 접근성 기준

| 항목 | 기준 |
|---|---|
| Touch Target | 최소 44x44px |
| Focus | 키보드 포커스가 시각적으로 보여야 함 |
| 색상 의존성 | 색상만으로 상태를 전달하지 않음 |
| 긴 텍스트 | 한국어/영문 긴 제목에서 줄바꿈 가능 |
| 상태 안내 | Loading/Error/Permission/Empty는 텍스트로 설명 |
| 금융 문구 | 매수/매도/보유 추천으로 읽히지 않음 |

## 상태별 접근성 문구 후보

| 상태 | 안내 문구 성격 |
|---|---|
| Loading | 정보를 불러오는 중임을 알림 |
| Empty Evidence | 근거가 없는 것이 아니라 현재 표시 가능한 근거가 없음을 알림 |
| Stale Data | 마지막 업데이트 시점을 함께 알림 |
| Permission | 기능 제한과 가능한 다음 행동을 구분 |
| Handoff Error | 실패 원인과 재시도 가능성을 안내 |
