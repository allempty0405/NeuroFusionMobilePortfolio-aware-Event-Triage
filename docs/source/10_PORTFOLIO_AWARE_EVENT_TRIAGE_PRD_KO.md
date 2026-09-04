# Portfolio-aware Event Triage 제품 요구사항 정의서

문서 ID: `PRD-PAET-001`  
버전: `v1.1-targeted-revision`  
작성일: 2026-09-04  
대상 제품: Valley AI Mobile  
대상 범위: `Portfolio-aware Event Triage` 상세 화면 및 이를 성립시키는 최소 사용자 흐름  
문서 상태: `CONCEPT / DESIGN SOURCE READY AFTER TARGETED REVISION / PRODUCTION BLOCKED`  
최종 Gate: `CONDITIONAL PASS`

---

## 0. 문서 목적과 사용 범위

이 문서는 Portfolio-aware Event Triage 작업의 상위 제품 PRD다. 제품·디자인·개발·QA가 같은 문제, 범위, 우선순위, 상태 모델과 제약을 공유하도록 한다.

이 문서가 결정하는 것:

- 해결할 사용자 문제와 제품 역할
- 대상 사용자와 핵심 사용자 여정
- Concept 범위의 기능·상태·콘텐츠·비기능 요구사항
- 디자인과 개발이 의존할 요구사항 ID 및 수용 기준
- 분석 가설, 검증 계획, 단계별 일정과 Gate
- Concept과 Production 사이의 경계 및 Production Blocker

이 문서가 결정하지 않는 것:

- 실제 Valley 운영 데이터 필드
- Portfolio Relevance 산식과 Outcome 판정 로직
- 실제 계좌 연결·동의·권한 정책
- 확정 Deep Link 또는 Handoff Payload Schema
- 운영 데이터의 최신성 SLA
- 프로덕션 출시일과 인력 배정
- 매수·매도·보유 판단 또는 투자 추천

### 0.1 상태 정의

| 상태 | 의미 |
|---|---|
| `LOCKED` | 현재 Concept 및 후속 디자인이 의존해도 되는 결정 |
| `LOCKED_FOR_CONCEPT` | Concept 및 DESIGN.md가 의존 가능하지만 Production 요구사항은 아님 |
| `DESIGN_HYPOTHESIS` | 하이파이에서 표현·배치·문구를 탐색하고 검증해야 하는 가설 |
| `VERIFIED` | 직접 Evidence 또는 완료된 QA로 확인된 사실 |
| `PROPOSED` | 후속 검토·검증을 전제로 한 요구사항 |
| `MOCK_ONLY` | Concept Prototype에서만 사용하는 데이터·동작 |
| `UNKNOWN` | 현재 자료로 확인할 수 없음 |
| `BLOCKED` | 필수 입력 또는 정책 결정이 없어 Production 확정 불가 |
| `REJECTED` | 검토했으나 채택하지 않은 방향 |

### 0.2 현재 승인 범위

| 산출물/단계 | 판정 | 사용 가능 범위 |
|---|---|---|
| 문제 정의·제품 전략 | `PASS` | 기획·디자인의 근거로 사용 가능 |
| Concept PRD 및 UX 구조 | `PASS AFTER TARGETED REVISION` | 하이파이 설계와 Mock 구현에 사용 가능 |
| 로컬 Prototype | `CONDITIONAL PASS` | Concept Review와 Portfolio Refinement에 사용 가능 |
| Case Study | `CONDITIONAL PASS` | Public-prep Review 가능, 최종 공개 전 별도 감사 필요 |
| Production PRD | `BLOCKED` | Data Contract 및 정책 결정 전 승인 불가 |
| Production Readiness | `BLOCKED` | 실제 API·사용자·접근성·Handoff 검증 전 출시 불가 |

---

# 1. 제품 개요: 요약과 배경

## 1.1 한 문장 정의

Portfolio-aware Event Triage는 투자자가 시장 이벤트를 열었을 때, 그 이벤트가 자신의 보유·관심·관련 자산과 어떤 관계인지와 추가 확인 필요성을 근거와 함께 빠르게 판단하도록 돕는 모바일 상세 화면이다.

## 1.2 배경

현재 Valley Web에는 Portfolio Dashboard, 주요 이벤트, Live News, Search, Asset Detail과 분석 탭 등 필요한 정보 재료가 존재한다. 그러나 관찰된 흐름에서는 이벤트 사실, 관련 자산, Portfolio/Watchlist 관계, 근거, 상세 분석 목적지가 여러 화면과 탭에 분산돼 있다.

확인된 주요 문제는 다음과 같다.

- Portfolio 주요 이벤트에서 Asset Detail로 이동할 수 있으나, 도착 화면에 Portfolio에서 출발했다는 맥락이 명확히 유지되지 않는다.
- Live News는 인라인 확장 방식이며 선택한 이벤트 상태가 URL에 표현되지 않아 이동 뒤 재탐색 가능성이 있다.
- Portfolio와 Watchlist는 Web Shell에서 구분되지만, 이벤트 상세에서 사용자의 관계 이유가 일관되게 설명된다는 근거는 없다.
- 경쟁 서비스는 보유 업데이트, 이벤트 알림, 출처 기반 리서치 중 일부에는 강하지만, 개인 관계·근거·비권유 Outcome을 한 모바일 상세 화면에서 함께 제공한다는 직접 근거는 제한적이다.
- Phase 5.5 Data Contract 원문이 없어 실제 필드, 판정 로직과 Handoff Payload를 Production 요구사항으로 확정할 수 없다.

## 1.3 사용자 문제

투자자는 보유 또는 관심 자산과 관련된 이벤트를 발견해도 다음 질문에 답하기 위해 여러 화면을 오가거나 다시 검색해야 한다.

1. 무슨 일이 발생했는가?
2. 어떤 자산과 관련되는가?
3. 해당 자산은 내가 보유한 것인가, 관심 종목인가, 간접 관련 자산인가?
4. 왜 이 이벤트가 나에게 노출됐는가?
5. 지금 추가 확인할 가치가 있는가?
6. 그 판단을 뒷받침하는 근거와 한계는 무엇인가?
7. 더 깊게 확인하려면 어디로 이동해야 하는가?

### 통합 문제 정의

> 시장 이벤트 정보와 개인 관계·근거·분석 목적지가 분산되어 있어, 사용자는 짧은 모바일 세션 안에 “이 이벤트를 지금 더 확인해야 하는가?”를 신뢰할 수 있게 판단하기 어렵다.

## 1.4 왜 지금 해결하는가

- Valley Web에 Portfolio·Event·Asset·Analysis 기반 기능이 이미 있어 Mobile Triage Layer의 선행 재료가 존재한다.
- 기존 Concept Prototype이 12개 필수 경로를 구현했고 자동 QA를 통과해, 다음 디자인·개발 논의에 사용할 수 있는 기준점이 있다.
- Handoff 과장, 투자 권유 문구, Mock/Production 혼동 같은 주요 Concept 위험을 사전 감사에서 식별하고 보정했다.
- Production Data Contract 부재를 명시적으로 격리하면, Production 사실을 발명하지 않고도 UI 구조와 상태 경험을 검증할 수 있다.

## 1.5 제품 역할

| 채널 | 역할 | 담당하는 판단 | 담당하지 않는 것 |
|---|---|---|---|
| Mobile | `Triage Layer` | 이벤트와 개인 관계 이해, 근거 확인, 추가 확인 필요성 판단 | 전체 재무 분석, 원문 전체 탐색, 투자 의사결정 |
| Web | `Analysis Workspace` | 종목·공시·실적·전망·문서의 심층 분석 | 모바일 순간 판단을 대신하는 최초 진입 경험 |

## 1.6 핵심 사용자 결정

> “지금 더 확인할 필요가 있는가, 그리고 어떤 근거가 그렇게 말하는가?”

다음 판단은 제품 범위가 아니다.

- 매수·매도·보유 여부
- 자산의 안전성 또는 투자 위험 등급
- 이벤트가 수익률에 긍정적·부정적인지에 대한 확정 판단
- 특정 종목에 대한 추천

## 1.7 가치 제안

Valley Mobile은 Web에 분산된 분석 재료를 다음 순서의 개인 관련성 확인 경험으로 압축한다.

```text
Event Context
→ Asset Relationship
→ Attention Context
→ Portfolio Context
→ Relationship Evidence
→ Relevance Outcome
→ Web Handoff
```

## 1.8 범위

### In Scope — 이번 Concept/디자인·개발 준비 범위

- Portfolio-aware Event Triage 모바일 상세 화면 1개
- Event·Asset·Relationship·Attention·Evidence·Trust·Outcome의 정보 구조
- `보유`, `관심`, `관련만`, `관계 미확정/데이터 부족`의 명시적 구분
- 3개 비권유 Outcome
- 정상·부족·미연결·권한·오래된 데이터·Handoff 오류 상태
- Progressive Disclosure와 Web Handoff 진입점
- Mock Data와 Production 제한의 명시
- 접근성, 반응형, 콘텐츠 안전 기준
- 분석 이벤트 후보와 검증 계획
- Git 연결 코드베이스에서 구현할 수 있는 UI Vertical Slice 준비

### Out of Scope

- 전체 Valley Mobile 앱 재설계
- 주문·체결·호가·매매 CTA
- 계좌 개설, 실제 증권계좌·MTS·MyData 연결
- Portfolio 생성·가져오기 전체 UX
- 전체 종목 상세, 차트, 스크리너 또는 리포트 생성
- 실제 Outcome 엔진 및 금융 예측
- 실제 알림 정책·발송 시스템
- 실제 구독·결제·권한 변경
- Production API와 운영 배포
- Web Analysis Workspace 재설계

## 1.9 성공과 실패의 정의

### 성공

- 사용자가 화면에서 이벤트, 자산, 개인 관계, 근거 상태와 다음 행동을 구분할 수 있다.
- Portfolio와 Watchlist가 시각적·언어적으로 혼동되지 않는다.
- 3개 Outcome이 투자 추천으로 읽히지 않는다.
- 데이터 부족·오래됨·미연결이 숨겨진 오류가 아니라 설명 가능한 상태로 보인다.
- 상세 분석은 Web으로 분리되며 Mobile 첫 화면이 분석 Workspace처럼 과밀해지지 않는다.
- Mock와 Production 한계가 명확하다.

### 실패

- 사용자가 `CHECK_FURTHER`를 매도·위험 신호로 오해한다.
- `NO_IMMEDIATE_CHECK_NEEDED`를 “안전하다” 또는 “무시해도 된다”로 해석한다.
- Watchlist 항목이 실제 보유로 보인다.
- 근거와 출처 없이 AI Summary 또는 Outcome만 제시한다.
- 오래된 Portfolio 데이터를 최신 개인 관계처럼 표현한다.
- Web 이동 후 사용자가 이벤트를 다시 찾아야 하지만 이를 제품이 해결했다고 주장한다.

---

# 2. 비즈니스 목표와 성공 지표

## 2.1 비즈니스 목적

현재 단계의 비즈니스 목적은 매출이나 투자 성과를 직접 높이는 것이 아니라, Valley의 Web 분석 자산을 Mobile에서 신뢰 가능한 개인 관련성 경험으로 연결할 제품 가설을 검증하는 것이다.

| 목표 ID | 비즈니스/제품 목표 | 기대 효과 | 상태 |
|---|---|---|---|
| OBJ-001 | 이벤트 발견 이후의 재검색·맥락 복구 부담을 줄인다. | Mobile-to-Web 연결 경험 개선 | `PROPOSED` |
| OBJ-002 | Portfolio·Watchlist 관계를 명시해 개인화 신뢰를 높인다. | 개인화의 이유 설명 가능 | `PROPOSED` |
| OBJ-003 | 근거와 데이터 상태를 Outcome과 함께 제공한다. | AI/금융 정보의 오해 위험 감소 | `LOCKED_FOR_CONCEPT` |
| OBJ-004 | Mobile과 Web의 역할을 분리한다. | 모바일 과밀화 방지, Web 분석 자산 활용 | `LOCKED` |
| OBJ-005 | Production 의존성을 조기에 드러낸다. | 개발 재작업과 정책 누락 위험 감소 | `LOCKED` |

## 2.2 North-star 가설

> 적격 이벤트 상세 진입 중, 사용자가 개인 관계와 근거를 확인한 뒤 자신의 의도에 맞는 다음 행동(닫기·근거 펼치기·Web 분석 열기)을 완료한 비율.

현재 실제 계측과 기준선은 없다. 이 지표는 Instrumentation과 Data Contract 승인 후에만 Production KPI로 승격한다.

## 2.3 Concept Validation 지표

아래 수치는 제품 성과의 확정 목표가 아니라 다음 검증 라운드의 제안 기준이다.

| KPI ID | 지표 | 측정 방법 | 제안 기준 | 상태 |
|---|---|---|---:|---|
| CV-001 | 핵심 정보 식별 성공률 | 과업 후 Event·Asset·Relationship·Outcome 질문 | 참여자의 80% 이상이 4개 모두 정확히 응답 | `PROPOSED` |
| CV-002 | 보유/관심 구분 정확도 | 상태별 분류 과업 | 90% 이상 | `PROPOSED` |
| CV-003 | 투자 추천 오해율 | “이 화면이 투자 행동을 추천하는가?” 질문 | 10% 이하 | `PROPOSED / GUARDRAIL` |
| CV-004 | 1차 Triage 완료 시간 | 화면 진입부터 다음 행동 선택까지 | 중앙값 15초 이하 | `PROPOSED` |
| CV-005 | 데이터 부족 상태 이해도 | 부족·오래됨·미연결 상태별 설명 과업 | 80% 이상 | `PROPOSED` |
| CV-006 | Handoff 목적지 예측 정확도 | CTA 실행 전 도착 내용을 설명 | 80% 이상 | `PROPOSED` |
| CV-007 | 근거 발견 성공률 | Source·시점·데이터 상태 찾기 | 90% 이상 | `PROPOSED` |

샘플 규모, 모집 기준과 통계적 유의성은 UX Research Plan에서 확정한다. 소규모 사용성 테스트 결과를 전체 사용자 성과로 일반화하지 않는다.

## 2.4 Production KPI 후보

| KPI ID | 후보 지표 | 필요한 이벤트/분모 | 현재 상태 |
|---|---|---|---|
| PKPI-001 | Event Detail 진입 대비 Triage 행동 완료율 | `event_detail_view` → close/evidence/handoff | `BLOCKED: instrumentation 미정` |
| PKPI-002 | 근거 확인률 | `evidence_expand` / 적격 detail view | `BLOCKED` |
| PKPI-003 | 의도 있는 Web Handoff율 | `handoff_start` / 적격 detail view | `BLOCKED` |
| PKPI-004 | Handoff 성공률 | `handoff_success` / `handoff_start` | `BLOCKED: payload/route 미정` |
| PKPI-005 | Handoff 후 재탐색률 | Web 도착 후 검색·Portfolio 복귀 행동 | `UNKNOWN` |
| PKPI-006 | Outcome/관계 정정·불만율 | Feedback/VOC 분류 | `BLOCKED` |

## 2.5 Guardrail 지표

- 투자 추천으로 해석됐다는 사용자 피드백
- 잘못된 보유/관심 관계 노출률
- Stale 또는 Unknown 데이터에서 확정 Outcome이 노출된 비율
- 출처·기준 시점이 없는 Evidence 노출률
- 권한 없는 Portfolio 정보 노출 건수
- Handoff 실패 후 이벤트 Context 유실률

Production 목표치는 Data Contract, 이벤트 설계, 법무·컴플라이언스 검토 후 확정한다.

---

# 3. 핵심 고객과 사용자 정의

## 3.1 Primary User

| 항목 | 정의 |
|---|---|
| 사용자 | 보유 종목과 관심 종목의 이벤트를 확인하는 개인 투자자 |
| 상황 | 알림·Portfolio·Watchlist·Live News·검색에서 특정 이벤트를 연 직후 |
| 제약 | 이동 중이거나 짧은 시간만 있으며, 전체 분석 문서를 읽기 어렵다 |
| 핵심 Job | 이 이벤트를 지금 더 확인할 가치가 있는지 근거와 함께 판단한다 |
| 필요한 신뢰 | 왜 노출됐는지, 어떤 데이터인지, 언제 기준인지, 무엇이 부족한지 |
| 원하지 않는 것 | 매수·매도 권유, 근거 없는 점수, 불필요한 Portfolio 금액 노출 |

## 3.2 사용자 상태 세분화

| 사용자 상태 | 화면이 답해야 하는 것 | 금지되는 추론 |
|---|---|---|
| 보유 자산 관련 | 보유 관계와 이벤트 근거 | 보유 비중이 크므로 중요하다고 자동 단정 |
| Watchlist 관련 | 관심 관계이며 미보유임을 명시 | 관심을 보유로 표현 |
| 관련 자산만 존재 | 직접 보유·관심이 아닌 관계 이유 | 간접 관련을 개인 Exposure로 단정 |
| Portfolio 미연결 | 개인 관계 판단이 제한됨 | 연결되지 않았으므로 이벤트가 중요하지 않다고 단정 |
| 데이터 부족/오래됨 | 확정 판단을 보류하고 부족한 정보를 설명 | 부족 상태에서 확정 Outcome 표시 |
| 권한/유료 제한 | 접근 불가 이유와 가능한 다음 단계 | 기능 부재 또는 부정 이벤트처럼 표현 |

## 3.3 비대상 사용자

- 초단타 주문 실행이 목적이며 호가·체결 중심 기능을 원하는 사용자
- 전문 리서치 문서 전체를 모바일에서 분석하려는 기관 사용자
- 투자 추천 또는 자동매매 결정을 요구하는 사용자
- 실제 계좌 연결·자산관리 전체 과정을 수행하려는 사용자

---

# 4. 핵심 사용자 여정(CUJ)과 사용자 스토리

## 4.1 Primary CUJ

| 단계 | 사용자 질문 | 시스템 책임 | 완료 조건 |
|---:|---|---|---|
| 1. 진입 | 무슨 이벤트인가? | 이벤트 유형·제목·시점 표시 | 이벤트 정체 파악 |
| 2. 관계 확인 | 왜 나에게 보이는가? | Asset과 보유/관심/관련/미확정 표시 | 개인 관계를 정확히 구분 |
| 3. 주목 맥락 | 무엇이 새롭거나 예정됐는가? | Attention Signal과 기준 시점 표시 | 단순 가격 변화와 구분 |
| 4. 근거 확인 | 왜 이런 판단인가? | 이유·Source·Timestamp·데이터 상태 표시 | 근거와 한계 파악 |
| 5. Triage | 지금 더 확인해야 하는가? | 비권유 Outcome 표시 | 세 Outcome 중 상태 이해 |
| 6. 다음 행동 | 더 깊게 볼 필요가 있는가? | 근거 펼치기·닫기·Web Handoff 제공 | 의도에 맞는 행동 선택 |
| 7. 실패 회복 | 이동이 실패하면? | 현재 Context 유지·재시도 | 재검색 없이 복구 |

## 4.2 Primary User Story

> 보유 또는 관심 자산과 관련된 시장 이벤트를 본 투자자로서, 나는 왜 이 이벤트가 나와 관련되는지, 어떤 근거가 있는지, 지금 추가 확인할 필요가 있는지를 빠르게 이해하고 싶다. 그래야 잡음에 과도하게 반응하거나 같은 정보를 다시 검색하지 않고 다음 행동을 선택할 수 있다.

## 4.3 보조 User Stories

| US ID | 사용자 스토리 | 우선순위 |
|---|---|---|
| US-001 | 보유자산 사용자로서 이벤트가 실제 보유 종목과 연결된 이유를 보고 싶다. | Must |
| US-002 | Watchlist 사용자로서 관심 종목이 보유 종목처럼 표현되지 않기를 원한다. | Must |
| US-003 | 데이터가 부족한 사용자로서 무엇이 부족해 판단이 보류됐는지 알고 싶다. | Must |
| US-004 | 근거를 확인하려는 사용자로서 Summary와 원본 Source를 구분하고 싶다. | Must |
| US-005 | 심층 분석이 필요한 사용자로서 Event·Asset 맥락을 알고 Web 분석으로 이동하고 싶다. | Should |
| US-006 | Web 연결이 실패한 사용자로서 현재 이벤트 내용을 잃지 않고 재시도하고 싶다. | Must |
| US-007 | 보조기술 사용자로서 색상만이 아니라 텍스트·구조로 상태를 이해하고 싶다. | Must |

## 4.4 Entry Point

Concept에서 허용하는 진입 후보:

- Portfolio Update 또는 주요 이벤트 목록
- Watchlist Event Feed
- Live News 항목
- Search Result
- 향후 Mobile Notification
- 공유 링크 또는 Web Handoff 복귀

각 Entry Point의 실제 Production 지원 여부와 Deep Link 규칙은 별도 Contract가 필요하다.

---

# 5. 기능적 요구사항

## 5.1 Outcome 및 관계 모델

### 허용 Outcome

| 코드 | 한국어 표현 원칙 | 의미 | 금지 해석 |
|---|---|---|---|
| `CHECK_FURTHER` | 추가 확인이 필요합니다 | 근거를 더 확인할 가치가 있음 | 매도·위험·부정 추천 |
| `NO_IMMEDIATE_CHECK_NEEDED` | 지금 바로 확인할 필요는 낮습니다 | 현재 확인 가능한 정보 범위에서는 추가 확인 우선성을 높일 충분한 근거가 확인되지 않음 | 영향 없음·안전·무시 가능·투자 유지 추천 |
| `INSUFFICIENT_DATA` | 판단을 보류합니다 | 개인 관련성 또는 Evidence를 판단하기 위한 데이터가 충분하지 않음 | 이벤트가 중요하지 않음·관계 없음·부정 판단 |

Outcome 로직은 `MOCK_ONLY`; Production 계산은 `BLOCKED`다.

### Outcome 의미 계약

| Outcome | Intended Meaning | Forbidden Interpretation | Required Reason / Evidence |
|---|---|---|---|
| `CHECK_FURTHER` | 현재 확인된 개인 관련성 또는 Evidence 기준에서 추가로 확인할 정보가 존재한다. | 위험하다, 중요하다, 매도해야 한다, 즉시 대응해야 한다. | Event/Asset 관계, 보유/관심/관련 Context, 확인 가능한 Evidence 또는 데이터 한계. |
| `NO_IMMEDIATE_CHECK_NEEDED` | 현재 확인 가능한 정보 범위에서는 추가 확인 우선성을 높일 충분한 근거가 확인되지 않았다. | 영향이 없다, 안전하다, 중요하지 않다, 무시해도 된다. | 기준 시점, Watchlist/Related-only 등 관계 범위, 새 근거 변화가 제한적이라는 설명. |
| `INSUFFICIENT_DATA` | 개인 관련성 또는 Evidence를 판단하기 위한 데이터가 충분하지 않다. | Event가 중요하지 않다, 관계가 없다, 시스템이 부정적 판단을 했다. | 부족한 데이터 종류, 확인 불가 이유, 제한된 CTA 또는 복구 행동. |

### 관계 유형

| 코드 후보 | 사용자 표시 | 설명 | 상태 |
|---|---|---|---|
| `HOLDING` | 보유 | Portfolio 보유 관계 | Concept `LOCKED`, Production Field `BLOCKED` |
| `WATCHLIST` | 관심 | Watchlist 포함, 보유 아님 | Concept `LOCKED`, Production Field `BLOCKED` |
| `RELATED_ONLY` | 관련 | 직접 보유·관심 외 관계 | `PROPOSED` |
| `UNRESOLVED` | 관계 미확정 | Asset 또는 Portfolio 관계를 확정하지 못함 | `PROPOSED` |

## 5.2 요구사항 우선순위

| REQ ID | 요구사항 | 우선순위 | 상태 | 근거/의존성 |
|---|---|---|---|---|
| FR-001 | 첫 화면에 이벤트 유형·제목·발생/예정 시점과 기준 시점을 표시한다. | Must | `LOCKED_FOR_CONCEPT` | Event identity |
| FR-002 | 관련 Asset 이름·Ticker를 표시한다. | Must | `LOCKED_FOR_CONCEPT` | Valley route/competitor card pattern |
| FR-003 | 보유·관심·관련·미확정 관계를 텍스트로 구분한다. | Must | `LOCKED_FOR_CONCEPT` | Portfolio/Watchlist separation |
| FR-004 | 허용된 3개 Outcome 중 하나만 비권유 check-status로 표시한다. | Must | `LOCKED_FOR_CONCEPT / MOCK_ONLY` | User-locked allowed outcomes; production logic blocked |
| FR-005 | Outcome은 관계·주목 신호·근거/데이터 한계와 연결해 설명한다. | Must | `LOCKED_FOR_CONCEPT` for linkage; `DESIGN_HYPOTHESIS` for exact copy/placement | False-certainty risk |
| FR-006 | Evidence마다 Source Type·Source Name·기준 시점·요약/원문 구분을 표시한다. | Must | `LOCKED_FOR_CONCEPT` | Valley-specific trust risk; competitor patterns supporting only |
| FR-007 | 데이터 부족·오래됨·미연결·권한 제한을 독립 상태로 표시한다. | Must | `LOCKED_FOR_CONCEPT` | Honest state handling |
| FR-008 | 상세 근거는 화면 내 펼치기 또는 Web Handoff로 단계적으로 제공한다. | Must | `LOCKED_FOR_CONCEPT` | Mobile/Web role split |
| FR-009 | Web Handoff CTA에 이동 목적지를 설명한다. | Should | `DESIGN_HYPOTHESIS / MOCK_ONLY` | Route instances only |
| FR-010 | Handoff 오류 시 Event·Asset·Relationship·Outcome을 현재 화면에 유지하고 재시도를 제공한다. | Must | `LOCKED_FOR_CONCEPT / PRODUCTION BLOCKED` | Concept error recovery; payload unknown |
| FR-011 | 여러 관련 자산이 있는 경우 대표 자산과 추가 관련 자산을 구분한다. | Must | `DESIGN_HYPOTHESIS / MOCK_ONLY` | Primary asset rule unknown |
| FR-012 | Portfolio 미연결 상태에서는 개인 관련성 확정 표현을 사용하지 않는다. | Must | `LOCKED_FOR_CONCEPT` | Privacy/trust |
| FR-013 | 데이터가 충분하지 않으면 확정적 표현과 Evidence-dependent Handoff를 제한한다. | Must | `LOCKED_FOR_CONCEPT`; exact precedence `BLOCKED` | False certainty and state precedence |
| FR-014 | 모든 화면 상태에서 Mock 사용 여부를 명확히 표시한다. | Must | `LOCKED_FOR_CONCEPT` | Concept boundary |
| FR-015 | 사용자는 Event Detail을 닫거나 이전 Context로 돌아갈 수 있어야 한다. | Must | `DESIGN_HYPOTHESIS / NOT_TESTED` | Visual control allowed; real back behavior blocked |
| FR-016 | 이벤트 저장·읽음·보류 처리는 지원 가능성이 있으나 이번 Slice에는 포함하지 않는다. | Could | `DEFERRED` | Policy/instrumentation needed |
| FR-017 | 숫자형 Portfolio Exposure·평가액·수익률은 승인 필드가 있을 때만 노출한다. | Could | `BLOCKED` | Data Contract/privacy |
| FR-018 | 전체 Transcript·공시 Viewer·재무표·고급 차트는 Web에서 제공한다. | Won't for Mobile | `LOCKED` | Web-only depth |
| FR-019 | 주문·매수·매도 CTA 또는 점수·등급을 Outcome으로 제공하지 않는다. | Won't | `LOCKED / REJECTED` | Advice risk |

## 5.3 정보 구조

```text
Mock / Data Disclosure
→ Event Context
→ Asset Relationship
→ Portfolio / Attention Context
→ Relationship Evidence + Trust
→ Relevance Outcome
→ Web Handoff
→ Optional Details
```

첫 Viewport는 최소한 Event, Asset, Relationship, Portfolio/Watchlist 여부 또는 미확정 상태, Attention/Data cue와 Trust Cue를 제공해야 한다. Outcome은 Relationship Evidence와 데이터 한계가 확인 가능한 흐름 뒤에 배치한다. 단, 하이파이에서 제한적 Outcome preview를 탐색하려면 `DESIGN_HYPOTHESIS`로 두고 투자 추천·긴급도·중요도 점수처럼 읽히지 않는지 별도 검증한다.

## 5.4 필수 상태와 상태 전이

| STATE ID | 상태 | 진입 조건(Concept) | 필수 UI 반응 | Production 상태 |
|---|---|---|---|---|
| ST-001 | `CHECK_FURTHER` | Mock scenario 선택 | 비권유 Outcome, 이유, Evidence, Handoff | Logic `BLOCKED` |
| ST-002 | `NO_IMMEDIATE_CHECK_NEEDED` | Mock scenario 선택 | 제한적 표현, 기준 시점, 근거 | Logic `BLOCKED` |
| ST-003 | `INSUFFICIENT_DATA` | 관계/근거 부족 | 판단 보류, 부족 이유, 제한된 CTA | Rule `BLOCKED` |
| ST-004 | Portfolio Connected | Mock holding | `보유` 관계 | Field `BLOCKED` |
| ST-005 | Watchlist Only | Mock watchlist | `관심` 및 미보유 의미 | Field `BLOCKED` |
| ST-006 | Related-only | Mock related asset | `관련`, Portfolio Exposure 미표시 | Rule `PROPOSED` |
| ST-007 | Multiple Related Assets | 여러 Mock asset | 대표/추가 자산 분리 | Rule `PROPOSED` |
| ST-008 | Loading | 초기 로드 | Skeleton/진행 상태, 확정 Outcome 미표시 | API `UNKNOWN` |
| ST-009 | Empty Evidence | Source 없음 | Empty 설명, 근거 발명 금지 | Rule `BLOCKED` |
| ST-010 | Stale Data | Mock timestamp 오래됨 | 오래됨 경고, 확정성 낮춤 | SLA `BLOCKED` |
| ST-011 | Portfolio Unconnected | 관계 데이터 없음 | 연결되지 않음, 개인정보 입력 유도 금지 | Account flow out of scope |
| ST-012 | Permission / Access 제한 | Mock access 제한 | 제한 이유와 대체 행동 | Auth policy `BLOCKED` |
| ST-013 | Handoff Error | 이동 실패 | 현재 Context 유지, 재시도 | Error contract `PROPOSED` |
| ST-014 | Handoff Success | Mock destination 표시 | Concept simulation임을 유지 | Production `NOT VERIFIED` |

Prototype QA의 “12개 경로”는 11개 화면 상태와 Handoff Success 동작 1개로 구성됐다. 이 표는 설계 완전성을 위해 Outcome과 관계 상태를 분리해 14개 상태 항목으로 정규화한다.

### 5.4.1 Downstream State Matrix

| Source State | UI State Mapping | Trigger | User Message | Outcome Behavior | Handoff | Recovery |
|---|---|---|---|---|---|---|
| `CURRENT` | Populated normal | Event/Asset/Relationship/Evidence가 현재 Mock 기준으로 존재 | 현재 기준 시점이 보인다. | 3개 Concept Outcome 중 하나 가능. | Concept CTA 가능. | Evidence 확장 또는 Web simulation. |
| `PARTIAL` | Partial Evidence / `INSUFFICIENT_DATA` | 일부 관계·근거 입력만 존재 | 일부 정보는 있으나 판단을 완료하기 부족하다. | 확정적 check-status 억제, 한계 설명 우선. | 비활성 또는 제한적 안내. | 부족한 입력을 표시하고 재시도. |
| `SOURCE_UNAVAILABLE` | Empty Evidence | Source 카드 또는 원문 근거를 확인할 수 없음 | 근거 출처를 확인할 수 없다. | Source-backed Outcome 금지. | Evidence-dependent Handoff 비활성. | Source 재시도 또는 닫기. |
| `PORTFOLIO_UNAVAILABLE` | Portfolio Unconnected | 보유/관심 관계를 확인할 수 없음 | 개인 Portfolio 관계를 확인할 수 없다. | 보유·노출·영향 단정 금지, 데이터 한계 표시. | Portfolio-aware Handoff claim 금지. | Portfolio 연결/확인은 별도 Flow. |
| `STALE` | Stale Data | Portfolio 또는 Evidence 기준 시점이 오래됨 | 데이터가 최신이 아닐 수 있다. | 확정 표현 제한, 기준 시점 노출. | Stale 경고와 함께 Concept CTA만 가능. | 최신 데이터 확인. |
| `UNCERTAIN` | `INSUFFICIENT_DATA` | 관계 후보는 있으나 검증된 관계가 아님 | 관계가 확정되지 않았다. | `CHECK_FURTHER`/`NO_IMMEDIATE_CHECK_NEEDED` 단정 금지. | 제한 또는 비활성. | 후보 관계와 필요한 근거 표시. |
| `NO_VERIFIED_RELATIONSHIP` | Related-only 또는 `INSUFFICIENT_DATA` | 이벤트와 자산 관계는 있으나 개인 관계 검증 없음 | 보유/관심 관계로 확정하지 않는다. | 개인화 Outcome으로 과장 금지. | Asset-level handoff만 제한적으로 표시 가능. | 관계 근거 확인. |
| `UNAVAILABLE` / Generic Error | Error | 서비스·라우트·렌더링 실패 | 정보를 불러올 수 없다. | Outcome 미표시 또는 판단 불가. | 재시도만 가능. | Retry/Close. |
| Permission / Access | Permission / Access 제한 | Source 또는 destination 권한 없음 | 접근 제한으로 확인할 수 없다. | 숨겨진 데이터 기반 Outcome 금지. | 비활성 또는 오류 복구. | 로그인/권한 확인은 별도 Flow. |

## 5.5 상호작용 요구사항

| INT ID | Trigger | 시스템 반응 | 실패/경계 |
|---|---|---|---|
| INT-001 | Event Detail 진입 | Loading 후 적절한 상태 렌더링 | 오류 시 확정 Outcome 금지 |
| INT-002 | Evidence 펼치기 | 현재 Context를 유지한 채 추가 Source 정보 표시 | Source가 없으면 Empty 상태 |
| INT-003 | Web 분석 열기 | 목적지와 전달 예정 Context를 고지한 뒤 이동 | Production route/payload `BLOCKED` |
| INT-004 | Handoff 실패 | 현재 화면 유지, 실패 이유·재시도 제공 | Event 재검색을 요구하지 않음 |
| INT-005 | 뒤로가기/닫기 | 이전 Feed/List의 위치와 선택 상태 복원을 목표로 함 | 실제 동작 `NOT_TESTED` |
| INT-006 | 여러 자산 선택 | 선택 Asset의 관계·근거로 Context 갱신 | 대표 Asset 선정 규칙 `UNKNOWN` |

## 5.6 콘텐츠 계약

### 필수 콘텐츠

- Event Type, Title, Event Time 또는 Scheduled Time
- Asset Name, Ticker
- Relationship Label
- Outcome Label 및 안전한 설명
- 이유: 관계, Attention, Evidence 상태를 구분
- Source Name/Type, 기준 시점, 요약/원문/AI 구분
- Data State: 충분/부족/오래됨/권한 제한
- Handoff 목적지 또는 비활성 이유
- Mock/Production Disclosure

### 문구 원칙

- “확인 필요성”을 말하고 투자 행동을 지시하지 않는다.
- “중요”, “위험”, “안전”은 계산 근거와 승인 정책 없이는 사용하지 않는다.
- `NO_IMMEDIATE_CHECK_NEEDED`에도 기준 시점과 정보 범위를 명시한다.
- `INSUFFICIENT_DATA`는 시스템 오류와 구분하며 무엇이 부족한지 말한다.
- AI Summary가 있다면 AI 생성 사실과 원본 Source를 분리한다.
- Watchlist에는 `보유`, `내 자산`, `Portfolio Exposure` 표현을 사용하지 않는다.
- 색상은 상태 보조 단서일 뿐 의미의 유일한 전달 수단이 아니다. Green/Red/Amber가 각각 좋은 투자, 위험/매도, 투자 경고로 해석되지 않도록 텍스트와 구조를 우선한다.

### 금지 문구

- 매수, 매도, 보유 추천
- 지금 사야 합니다 / 팔아야 합니다
- 안전합니다 / 무시해도 됩니다
- 확정 수익·손실 또는 검증되지 않은 위험 점수
- “AI가 판단했습니다”만으로 근거를 대체하는 표현

## 5.7 Concept 데이터 모델

아래는 UI와 Mock 구현의 대화용 모델이며 Production Schema가 아니다.

| 객체 | 필드 후보 | 용도 | Production 의존성 |
|---|---|---|---|
| Event | `id`, `type`, `title`, `occurredAt/scheduledAt`, `asOf` | Event Context | Data Contract |
| Asset | `id`, `name`, `ticker`, `market` | Asset Identity | Data Contract |
| Relationship | `kind`, `reason`, `portfolioAsOf` | 보유/관심/관련/미확정 | Privacy + Data Contract |
| Attention | `signal`, `label`, `asOf` | 새 이벤트/예정/오래됨 | 정책 + Data Contract |
| Outcome | `code`, `summary`, `reasonIds` | Triage 상태 | Outcome Logic |
| Evidence | `id`, `type`, `sourceName`, `publishedAt`, `summary`, `originalUrl`, `isAiGenerated` | 근거·Trust | Source Contract |
| Handoff | `destinationLabel`, `route`, `contextSummary`, `status` | Web 연결 | Route/Payload Contract |

## 5.8 Analytics 이벤트 후보

| EVENT ID | 발생 시점 | 최소 속성 후보 | 주의 |
|---|---|---|---|
| AN-001 `event_detail_view` | 상세 렌더 완료 | event type, relationship kind, data state | 실제 ID/개인정보 정책 필요 |
| AN-002 `evidence_expand` | 근거 펼침 | evidence type/count | Source ID 정책 필요 |
| AN-003 `handoff_start` | CTA 선택 | destination type, current state | Payload 자체를 로그에 복제 금지 |
| AN-004 `handoff_success` | Web 도착 확인 | destination type | App↔Web attribution 설계 필요 |
| AN-005 `handoff_error` | 이동 실패 | error category | 민감 URL/Token 로그 금지 |
| AN-006 `detail_exit` | 닫기/뒤로 | dwell bucket, last section | 과도한 행동 추적 금지 |

이벤트명·속성·보존기간·동의 범위는 Analytics/Privacy 검토 전 `PROPOSED`다.

---

# 6. 비기능 요구사항과 개발 고려사항

## 6.1 접근성

| NFR ID | 요구사항 | Concept AC | Production 상태 |
|---|---|---|---|
| NFR-001 | 상태를 색상만으로 전달하지 않는다. | 텍스트 Label과 구조 동시 제공 | `READY` |
| NFR-002 | 모든 버튼에 인지 가능한 이름을 제공한다. | Visible label 또는 accessible name 존재 | `READY` |
| NFR-003 | Interactive target은 최소 44×44px을 목표로 한다. | 디자인/구현 검사 | `PROPOSED` |
| NFR-004 | Keyboard Focus를 명확히 표시한다. | Focus-visible 확인 | `READY FOR WEB PROTOTYPE` |
| NFR-005 | Screen Reader 읽기 순서가 시각적 순서와 일치한다. | 수동 테스트 필요 | `NOT_TESTED` |
| NFR-006 | 긴 한글·영문 Event/Asset 문자열이 겹치지 않는다. | 320/360/390 폭 및 큰 글자 검사 | `PARTIAL` |

## 6.2 반응형과 레이아웃

- 우선 대상은 Mobile Portrait다.
- 기준 검토 폭: 360×800, 390×844. 추가로 320px 폭과 OS 큰 글자 설정을 검증한다.
- 첫 Viewport에 모든 상세 근거를 강제로 넣지 않는다.
- 긴 Event Title·Ticker·Source 이름은 줄바꿈되며 핵심 CTA를 가리지 않아야 한다.
- Desktop 화면은 Demo/Review Shell일 수 있으나 Production Mobile 요구사항이 아니다.

## 6.3 성능

실제 API와 기술 스택이 없어 수치 SLA는 확정하지 않는다. 다음은 개발 Gate에서 계측해야 할 후보다.

- Loading Placeholder가 즉시 표시될 것
- 첫 핵심 콘텐츠 렌더 시간
- Evidence 확장 응답 시간
- Handoff 시작 및 성공/오류 확인 시간
- 느린 네트워크·오프라인·부분 응답 상태

## 6.4 신뢰성 및 오류 처리

- 부분 데이터 응답 시 존재하지 않는 관계·Outcome을 합성하지 않는다.
- Stale 기준은 승인된 Freshness Policy에서만 판정한다.
- Handoff Error가 Event Detail 전체를 초기화하지 않는다.
- Retry는 중복 Navigation과 중복 Analytics를 방지해야 한다.
- Unknown, Empty, Permission, Service Error를 하나의 “데이터 부족”으로 뭉개지 않는다.

## 6.4.1 Trust Decision Trace

| Trust Requirement | Evidence | Interpretation | Valley-specific Risk | Product Implication | Decision |
|---|---|---|---|---|---|
| Source identity 표시 | Valley evidence shows context split; competitor source patterns support this direction. | 사용자는 이벤트와 자산 관계의 근거를 화면 안에서 확인해야 한다. | 출처 없는 Outcome은 AI/시스템의 확정 판단처럼 읽힐 수 있다. | Concept에서는 Source Type/Name 또는 Source unavailable 상태를 노출한다. | `LOCKED_FOR_CONCEPT`, production source contract `BLOCKED` |
| 기준 시점/Freshness 표시 | Valley route and source evidence are partial; Phase 5.5 Data Contract is absent. | 데이터 최신성 없이는 개인 관련성 판단의 신뢰 범위를 알 수 없다. | 오래된 Portfolio/Evidence가 현재 관련성처럼 보일 수 있다. | Stale/As-of cue를 Concept State Matrix에 보존한다. | `LOCKED_FOR_CONCEPT`, freshness SLA `BLOCKED` |
| AI Summary와 원문/Source 분리 | AlphaSense/Quartr-like patterns are supporting references only. | 요약은 근거가 아니라 근거에 대한 표현 계층이다. | AI 요약이 원문 사실 또는 투자 판단을 대체하는 것처럼 보일 수 있다. | AI 표시와 원본 Source 접근/부족 상태를 분리한다. | `LOCKED_FOR_CONCEPT`, production AI policy `BLOCKED` |
| Data insufficiency 노출 | Phase 5.5 Data Contract search log confirms missing production contract. | 부족 상태를 숨기면 사용자가 관계/영향을 확정으로 오해한다. | `NO_IMMEDIATE_CHECK_NEEDED`가 “영향 없음/안전”으로 오해될 수 있다. | 부족·부분·권한·미연결을 별도 UI state로 보존한다. | `LOCKED_FOR_CONCEPT`, exact precedence `BLOCKED` |

## 6.5 개인정보·보안·컴플라이언스

- Concept과 Portfolio 산출물에는 실제 계정·평가액·수익률·개인 식별 정보를 사용하지 않는다.
- Production에서 보유 여부를 노출하려면 동의, 권한, 최소 표시 원칙과 마스킹 정책이 필요하다.
- Analytics에 Portfolio ID, 계좌번호, Auth Token, 전체 Handoff URL을 기록하지 않는다.
- 외부 Web 이동에는 허용 도메인, 인증 Context, Session 만료와 Deep Link 검증이 필요하다.
- 금융 관련 문구는 법무·컴플라이언스 검토 없이는 Production에 반영하지 않는다.

## 6.6 기술 의존성

| DEP ID | 의존성 | 필요한 결정/산출물 | 영향 | 상태 |
|---|---|---|---|---|
| DEP-001 | Phase 5.5 Data Contract | 실제 Event/Asset/Portfolio/Evidence 필드 | API·모델·AC | `BLOCKED` |
| DEP-002 | Outcome Policy/Logic | 상태 판정 조건, 우선순위, Fallback | FR-004/005/013 | `BLOCKED` |
| DEP-003 | Mobile Field Visibility | 표시 가능 Portfolio 정보와 마스킹 | FR-003/017 | `BLOCKED` |
| DEP-004 | Source/Freshness Contract | 출처, 업데이트, Stale 기준 | FR-006/007 | `BLOCKED` |
| DEP-005 | Web Route/Payload Contract | Destination, Context Parameter, Auth | FR-009/010/015 | `BLOCKED` |
| DEP-006 | Mobile Codebase/Stack | iOS/Android/Cross-platform 및 컴포넌트 체계 | 구현 계획 | `UNKNOWN` |
| DEP-007 | Analytics/Privacy Plan | 이벤트 속성·동의·보존 | KPI 계측 | `BLOCKED` |
| DEP-008 | Accessibility Test Setup | Screen Reader·큰 글자·키보드 환경 | Release Gate | `NOT_TESTED` |

---

# 7. 수용 기준

## 7.1 Concept/하이파이 수용 기준

| AC ID | Given | When | Then | 상태 |
|---|---|---|---|---|
| CAC-001 | 사용자가 Event Detail을 연다 | 정상 데이터가 표시된다 | Event Type·Title·Time·Asset·Relationship·Outcome을 구분할 수 있다 | `PASS IN PROTOTYPE` |
| CAC-002 | 보유 상태와 관심 상태가 있다 | 두 화면을 비교한다 | 관계 Label과 문구가 명시적으로 다르고 관심 상태에 보유 표현이 없다 | `PASS IN PROTOTYPE` |
| CAC-003 | Outcome 3개가 있다 | 각 상태를 본다 | 매수·매도·보유 추천 없이 추가 확인 필요성만 표현한다 | `PASS IN PROTOTYPE` |
| CAC-004 | Evidence가 있다 | Evidence 영역을 본다 | Source 또는 기준 시점과 Mock/요약 구분을 찾을 수 있다 | `PASS IN PROTOTYPE` |
| CAC-005 | 관계 또는 근거가 부족하다 | 상세 화면이 렌더링된다 | 확정 판단 대신 판단 보류와 부족 이유를 표시한다 | `PASS IN PROTOTYPE` |
| CAC-006 | Portfolio 데이터가 오래됐다 | 상세 화면이 렌더링된다 | 오래됨과 기준 시점을 표시하고 최신 개인 관계처럼 단정하지 않는다 | `PASS IN PROTOTYPE` |
| CAC-007 | Handoff가 실패한다 | 오류가 반환된다 | 현재 Event·Asset·Relationship·Outcome은 남고 재시도가 가능하다 | `PASS FOR CONCEPT SIMULATION` |
| CAC-008 | 화면 폭이 360 또는 390px이다 | 대표 상태가 렌더링된다 | 핵심 콘텐츠의 명백한 겹침·잘림이 없다 | `PASS IN CAPTURE` |
| CAC-009 | 키보드 또는 보조기술을 사용한다 | 전체 주요 Flow를 수행한다 | 초점·이름·읽기 순서가 이해 가능하다 | `PARTIAL / SCREEN READER NOT_TESTED` |
| CAC-010 | 사용자가 Web 분석을 연다 | 성공 상태가 표시된다 | 목적지 Simulation이 보이되 Production Handoff 검증으로 주장하지 않는다 | `PASS FOR CONCEPT SIMULATION` |

## 7.2 개발 Vertical Slice 수용 기준

다음 기준은 실제 데이터 통합이 아닌 Mock/Fixture 기반 UI Slice에 적용한다.

- 모든 Must UI Requirement가 REQ/STATE ID에 연결돼 있다.
- 동일 Component가 정상·Loading·Empty·Stale·Permission·Error를 처리한다.
- Fixture로 3개 Outcome과 관계 상태를 재현할 수 있다.
- 금지 문구 정적 검사 또는 Content QA가 존재한다.
- Handoff Error 후 로컬 UI Context가 유지된다.
- 접근 가능한 이름, Focus, Touch Target을 자동/수동으로 검사한다.
- 실제 Valley 계좌·Portfolio 데이터가 Fixture나 Screenshot에 포함되지 않는다.
- Production Endpoint나 Route Pattern을 임의로 하드코딩하지 않는다.

## 7.3 Production 수용 기준

Production AC는 다음 입력 전까지 `BLOCKED`다.

- Phase 5.5 Data Contract 원문
- Outcome Logic 및 정책 승인
- Mobile Field/Privacy 승인
- Source/Freshness SLA
- Handoff Route/Payload/Auth Contract
- Analytics/Consent Plan
- 실제 사용자 검증 및 Screen Reader 수동 검증

이 문서의 Concept AC를 Production AC로 복사해 사용하면 안 된다.

---

# 8. 프로젝트 일정과 배포 계획

실제 일정·인력·기술 스택이 확정되지 않았으므로 날짜를 발명하지 않는다. 아래는 선후행 관계가 있는 단계 계획이다.

| 단계 | 주요 작업 | 산출물 | Entry Gate | Exit Gate |
|---|---|---|---|---|
| M0 PRD 승인 | 본 PRD 리뷰, 범위·우선순위·Blocker 확인 | 승인 PRD, Decision Log | Phase 0~9 Evidence | `CONDITIONAL PASS` |
| M1 Design Reference Audit | 기존 Figma Mobile 화면의 Token·Pattern·Component 추출 | `DESIGN.md` | PRD 승인 | Design Reference Gate |
| M2 High-fidelity Design | 핵심 화면과 필수 상태 설계 | Figma Frames/Prototype | DESIGN.md | Design Gate |
| M3 Dev Discovery | Git Repo·기술 스택·기존 Component/API 조사 | Implementation Plan | PRD+Design PASS | Technical Gate |
| M4 UI Vertical Slice | Fixture 기반 단일 화면 및 상태 구현 | Code, Tests, Story/Preview | Technical Gate | Slice Gate |
| M5 Concept Validation | 사용성·접근성·문구·상태 검증 | Research/QA Report | 하이파이/Vertical Slice | Concept Validation Gate |
| M6 Production Contracting | Data·Outcome·Privacy·Handoff 계약 | Production Addendum | 관련 Owner 참여 | Production PRD Gate |
| M7 Production Integration | 실제 API·Analytics·Auth 연동 | Release Candidate | Production PRD PASS | RC Gate |
| M8 Release | 제한 배포·모니터링·Rollback | Release Notes | RC PASS | Release Gate |

## 8.1 역할과 승인자 후보

| 영역 | Responsible 후보 | Required Reviewer |
|---|---|---|
| Product Scope/KPI | PM/Product Owner | Design, Engineering, Data |
| UX/Content | Product Designer/UX Writer | PM, Research, Compliance |
| Data/Outcome | Data/Product/Backend | Compliance, QA |
| Handoff | Mobile + Web Engineering | Security, Product |
| Privacy/Analytics | Data/Privacy Owner | Legal/Compliance |
| Accessibility | Design + Frontend/Mobile | QA, Accessibility Reviewer |

실제 담당자와 승인 권한은 `TBD`다.

## 8.2 출시 전략 후보

Production 계약이 확보된 경우에도 다음 순서를 권장한다.

1. 내부 Fixture Review
2. 비식별 테스트 데이터 기반 Dogfood
3. 제한된 Event Type·관계 상태의 Feature Flag
4. Guardrail과 Handoff 오류 모니터링
5. 조건 충족 시 범위 확대

Rollback 조건 후보:

- 관계 오표시 또는 권한 없는 Portfolio 정보 노출
- Stale/Unknown 상태에서 확정 Outcome 대량 노출
- 투자 추천으로 오인되는 문구 문제
- Handoff 오류율 급증 또는 Context 유실
- Source/기준 시점 누락

---

# 9. 대안, Trade-off와 의사결정

| 대안 | 판정 | 이유 |
|---|---|---|
| Mobile에 Web 분석 전체를 축소 | `REJECTED` | 과밀하고 Triage 역할이 사라짐 |
| Event-first만 사용 | `REJECTED AS PRIMARY` | Valley의 개인 관련성 차별점이 약해짐 |
| Outcome-first만 사용 | `REJECTED AS CURRENT IA` | LOCKED Primary Journey와 충돌하며 Production Outcome Logic이 없어 과도한 확정성 위험 |
| Personal Relevance-first + Compact Event | `ACCEPTED` | “왜 나에게?”와 “무슨 일?”을 함께 해결 |
| Buy/Sell/Rating을 Outcome으로 사용 | `REJECTED` | 투자 권유·오해 위험 |
| 숫자형 Exposure를 첫 Viewport에 표시 | `BLOCKED` | 승인 Field·Privacy·Freshness 없음 |
| Source 없이 AI Summary만 표시 | `REJECTED` | Trust와 검증 가능성 부족 |
| Handoff로 바로 보내기 | `REJECTED AS PRIMARY` | Mobile에서 핵심 판단이 끝나지 않음 |
| Data Contract가 올 때까지 모든 Concept 중지 | `REJECTED` | Mock 경계를 지키면 UI 가설 검증 가능 |

핵심 Trade-off:

- 속도 대 깊이: 첫 화면은 Triage, 깊이는 펼치기/Web로 분리한다.
- 개인화 대 Privacy: 관계 Label은 핵심이지만 숫자 Exposure는 승인 전 제외한다.
- 간결함 대 Trust: 근거를 제거하지 않고 한 문장 이유+Source Metadata로 압축한다.
- 확정성 대 정직함: 부족·오래됨 상태에서는 결론보다 한계를 우선한다.

---

# 10. 리스크와 대응

| RISK ID | 리스크 | 가능성 | 영향 | 대응 | Owner |
|---|---|---:|---:|---|---|
| R-001 | Outcome이 투자 추천으로 오해됨 | 중 | 높음 | 비권유 문구, 근거·한계, 사용자 테스트 | Product/Content |
| R-002 | Watchlist가 보유로 오표시됨 | 중 | 높음 | 관계 Enum 분리, Fixture/Contract Test | Data/Engineering |
| R-003 | Stale 데이터로 확정 판단 | 중 | 높음 | Freshness Policy, Stale State, Fail-safe | Data/Product |
| R-004 | AI Summary에 Source가 없음 | 중 | 높음 | Source 필수성, Empty 처리 | Product/Data |
| R-005 | Handoff가 Context를 잃음 | 높음 | 중 | Context Summary, Payload Contract, Back Test | Mobile/Web |
| R-006 | Mobile이 정보 과밀해짐 | 중 | 중 | Progressive Disclosure, First-view Gate | Design |
| R-007 | 실제 Portfolio 정보가 Portfolio 산출물에 노출됨 | 낮음 | 높음 | Mock only, Screenshot audit | All |
| R-008 | Concept QA를 Production Proof로 오해 | 중 | 높음 | Gate와 상태 라벨 분리 | PM/QA |
| R-009 | 접근성 수동 검증 누락 | 중 | 중 | Release Gate에 Screen Reader Test 포함 | QA |

---

# 11. 요구사항 추적성

| 사용자 문제 | 목표 | 요구사항 | 상태/AC | 근거 |
|---|---|---|---|---|
| 이벤트 맥락 분산 | OBJ-001 | FR-001, FR-002 | CAC-001 | Valley Web evidence |
| 개인 관계 불명확 | OBJ-002 | FR-003, FR-011, FR-012 | CAC-002 | Portfolio/Watchlist evidence |
| 근거 없는 판단 위험 | OBJ-003 | FR-005, FR-006, FR-007 | CAC-004~006 | Valley-specific false-certainty risk; competitor trust patterns are supporting only |
| Mobile 과밀 | OBJ-004 | FR-008, FR-018 | Design Gate | Mobile/Web role lock |
| Handoff Context 유실 | OBJ-001/004 | FR-009, FR-010, FR-015 | CAC-007/010 | Route audit/post-audit; production payload blocked |
| 권유 오해 | Guardrail | FR-004, FR-019 | CAC-003 | Product principle/QA |

---

# 12. 검증 계획

## 12.1 완료된 검증

- 로컬 자동 QA: `QA_PASS`
- 필수 경로: 12개
- 실패: 0
- Concept BLOCKER: 0
- MAJOR: 0
- 남은 MINOR: 0
- 360×800, 390×844, 1440×1000 대표 캡처 확인
- Mock/Production 구분 확인
- 투자 추천 문구 회피 확인
- Handoff Error의 로컬 Context 유지 확인
- Handoff Success는 Concept Simulation만 확인

## 12.2 미완료 검증

- 실제 사용자 대상 Triage 과업
- Screen Reader 수동 Flow
- 전체 Keyboard Flow
- 큰 글자·320px·다국어/초장문 Stress Test
- 실제 App↔Web Handoff와 Back Navigation
- 실제 API의 Partial/Empty/Stale/Error
- Outcome Logic의 정확성·안전성
- Analytics Event 전달 및 개인정보 감사

## 12.3 다음 검증 우선순위

1. 하이파이에서 관계/Outcome 오해 테스트
2. `NO_IMMEDIATE_CHECK_NEEDED`와 `INSUFFICIENT_DATA` 문구 테스트
3. Source·기준 시점 발견성 테스트
4. 320px·큰 글자·Screen Reader 접근성 테스트
5. Git Repo에서 Fixture 기반 State Regression Test
6. Contract 확보 후 실제 Handoff/Back Test

---

# 13. Production Blocker와 Open Questions

## 13.1 Production Blocker

| Blocker | 차단 범위 | 해제 조건 |
|---|---|---|
| Phase 5.5 Data Contract 없음 | Field, API, Error, Production AC | 원문과 Owner 승인 |
| Outcome Logic 없음 | 3개 Outcome의 실제 노출 | 계산·우선순위·Fallback 승인 |
| Mobile Field/Privacy 정책 없음 | 보유·비중·평가액 표시 | 최소 필드·권한·마스킹 승인 |
| Source/Freshness 계약 없음 | Evidence 신뢰·Stale | Source Type, 시점, SLA 승인 |
| Handoff Payload 없음 | Event/Asset/Portfolio Context 전달 | Mobile↔Web Contract 및 Auth 승인 |
| Back Navigation 미검증 | 복귀 경험 | 실제 App/Web 통합 테스트 |
| 실제 사용자 검증 없음 | 이해도·권유 오해 | UX Research 완료 |
| 접근성 수동 검증 없음 | Release Gate | Screen Reader·큰 글자 테스트 |

## 13.2 Open Questions

- 실제 Event Type Taxonomy와 각 유형별 필수 Evidence는 무엇인가?
- 여러 Asset 관련 이벤트의 Primary Asset은 누가, 어떤 규칙으로 정하는가?
- `NO_IMMEDIATE_CHECK_NEEDED`를 생성할 최소 데이터 조건은 무엇인가?
- Stale의 시간 임계치는 데이터 유형별로 다른가?
- Watchlist와 Portfolio가 동시에 해당되면 어떤 관계를 우선 노출하는가?
- Permission, Paywall, Account Unconnected를 어떤 UI/정책으로 구분하는가?
- Web Handoff가 Event ID를 받을 수 있는가, Asset/Tab만 받을 수 있는가?
- 복귀 시 원래 Feed 위치·Filter·읽음 상태를 어디에서 보존하는가?
- AI Summary가 사용되는 경우 Model/Source/생성 시점을 어떻게 표시하는가?
- Production 문구에 필요한 법무·컴플라이언스 Review 수준은 무엇인가?

---

# 14. 참고 문서

## 14.1 내부 산출물

- `00_PHASE0_SCOPE_LOCK.md`
- `01_PHASE1_PROBLEM_DEFINITION.md`
- `02_PHASE2_EVIDENCE_SYNTHESIS.md`
- `03_PHASE3_PRODUCT_STRATEGY.md`
- `04_PHASE4_PRD.md`
- `05_PHASE5_UX_ARCHITECTURE.md`
- `06_PHASE6_DESIGN_SPEC.md`
- `07_PHASE7_PROTOTYPE_QA.md`
- `08_PHASE8_PORTFOLIO_CASE_STUDY.md`
- `09_POST_PHASE_CONSISTENCY_AUDIT.md`
- `EVIDENCE_LEDGER.md`
- `DECISION_LOG.md`
- `UNKNOWN_CONFLICT_LEDGER.md`
- `FINAL_EXECUTIVE_REPORT.md`
- `valley-mobile-investment-evidence-baseline.md`
- `valley-web-handoff-route-table.md`
- `phase55-data-contract-search-log.md`
- `prototype/index.html`
- `prototype/qa-check.js`
- `prototype/screenshots/qa-results.json`

## 14.2 디자인 참고

- Valley AI Figma, Mobile 화면: https://www.figma.com/design/ZlRIE9lh0Him54e2F7s3LM/Valley-AI?node-id=30-76&p=f&t=w49tUuIEbqgaDlW7-11

Figma는 후속 `DESIGN.md` 작성 시 시각 언어와 기존 패턴의 Evidence로 사용한다. 이 PRD에서 픽셀·색상·Typography·Component Spec을 확정하지 않는다.

## 14.3 외부 보조 Evidence

- 재확인일: 2026-09-04
- Simply Wall St Portfolio Updates: https://support.simplywall.st/hc/en-us/articles/7894830045199-What-s-New
- AlphaSense on iOS: https://help.alpha-sense.com/hc/en-us/articles/42253345516435-AlphaSense-on-iOS

외부 사례는 Pattern 참고일 뿐 Valley Production 요구사항의 근거 계약이 아니다.

---

# 15. 변경 관리와 이해관계자 리뷰

## 15.1 필수 리뷰

- Product: 문제·범위·우선순위·KPI 가설
- Design: 정보 계층·상태·콘텐츠·접근성
- Mobile/Web Engineering: State Model·Handoff·Back·기술 의존성
- Data/Backend: Data Contract·Freshness·Outcome
- QA: AC·Fixture·Regression·Failure State
- Privacy/Legal/Compliance: Portfolio Field·Analytics·금융 문구

## 15.2 변경 규칙

- `LOCKED` 항목 변경은 Decision Log에 변경 이유와 영향 범위를 기록한다.
- 요구사항 변경 시 REQ→Design→Code→Test 추적성을 함께 갱신한다.
- 새로운 Production Field나 산식은 이 PRD에 먼저 추가하지 않고 승인된 Contract를 Source로 연결한다.
- Scope, Outcome 의미, 개인정보, Handoff Contract 변경은 사용자/Owner 승인이 필요하다.
- 개발 중 일정 압박으로 범위를 줄일 때 Must State, Trust Cue, Mock/Production 경계는 제거하지 않는다.

---

# 16. PRD Gate

| Gate 기준 | 결과 | 근거 |
|---|---|---|
| 제품 목적과 해결할 문제가 명확하다 | `PASS` | §1 |
| 비즈니스 목표와 검증 지표가 구분된다 | `PASS` | §2 |
| 근거 없는 Baseline/목표 수치를 사실로 만들지 않았다 | `PASS` | KPI 상태 표기 |
| 핵심 사용자와 비대상 사용자가 정의됐다 | `PASS` | §3 |
| CUJ와 User Story가 문제 중심으로 작성됐다 | `PASS` | §4 |
| Must/Should/Could/Won't가 구분됐다 | `PASS` | §5.2 |
| 정상·부족·오류·권한·미연결 상태가 정의됐다 | `PASS` | §5.4 |
| 디자인이 의존할 정보·콘텐츠 요구사항이 있다 | `PASS` | §5.3, §5.6 |
| 개발이 의존할 상태·상호작용·데이터 후보가 있다 | `PASS` | §5.4, §5.5, §5.7 |
| 비기능·접근성·Privacy 요구사항이 있다 | `PASS` | §6 |
| Concept AC와 Production AC가 분리됐다 | `PASS` | §7 |
| 일정이 날짜를 발명하지 않고 Gate로 정의됐다 | `PASS` | §8 |
| 대안과 Trade-off가 보존됐다 | `PASS` | §9 |
| 요구사항 추적성이 있다 | `PASS` | §11 |
| 완료·미완료 검증이 분리됐다 | `PASS` | §12 |
| Production Blocker가 보존됐다 | `PASS` | §13 |
| Figma와 DESIGN.md의 역할이 PRD와 중복되지 않는다 | `PASS` | §14.2 |
| LOCKED Primary Journey와 IA가 충돌하지 않는다 | `PASS` | §5.3 |
| Requirement 상태가 DESIGN.md 사용 가능성과 Production 사용 가능성을 분리한다 | `PASS` | §5.2 |
| 주요 Trust/Data State가 downstream matrix에 보존된다 | `PASS` | §5.4.1 |
| Trust Requirement가 Valley-specific Product Logic에 연결된다 | `PASS` | §6.4.1 |

## 최종 판정

```text
DECISION: CONDITIONAL PASS AFTER TARGETED REVISION
CONFIDENCE: MEDIUM-HIGH

PRD USE:
- Product planning: READY
- High-fidelity design: READY WITH DESIGN REFERENCE AUDIT
- Mock/Fixture UI development: READY AFTER REPO DISCOVERY
- Production data integration: BLOCKED
- Production release: BLOCKED

NEXT ACTION:
기존 Figma Mobile 화면을 감사해 시각 토큰·컴포넌트·레이아웃 규칙을 추출하고,
이 PRD의 REQ/STATE/AC와 연결한 별도 DESIGN.md를 작성한다.
```

판정 이유:

- 디자인과 Mock 기반 UI 개발이 시작할 만큼 문제·범위·상태·요구사항·수용 기준이 구체적이다.
- 기존 Prototype과 QA가 핵심 Concept 경로의 구현 가능성을 보여준다.
- 그러나 Production Data Contract, Outcome Logic, Field/Privacy, Freshness와 Handoff Contract가 없어 실제 데이터 통합과 출시 승인은 불가능하다.
