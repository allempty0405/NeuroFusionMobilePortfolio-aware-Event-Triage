# Token Map

이 문서는 Valley 스타일 변수와 NeuroFusion 모바일 디자인 토큰의 대응 관계를 정리합니다.

## Naming

| Valley 계열 | NeuroFusion 토큰 | 의미 |
|---|---|---|
| `--definitive-*` | `--nf-*` primitive | 원시 색상 |
| `--semantic-*` | `--nf-semantic-*` | 의미 색상 |
| `--global-*` | `--nf-surface-*` | 화면 표면 |
| `--text-*` | `--nf-text-*` | 텍스트 역할 |
| `--border-*` | `--nf-border-*` | 경계 역할 |
| `--radius-*` | `--nf-radius-*` | 형태 |
| `--shadow-card` | `--nf-shadow-card` | 카드 깊이 |

## 핵심 매핑

| 사용 목적 | Valley 참고 | NeuroFusion 토큰 |
|---|---|---|
| 모바일 배경 | `--global-dashboard-mobile` | `--nf-surface-dashboard-mobile` |
| 데스크톱 배경 | `--global-dashboard-desktop` | `--nf-surface-dashboard-desktop` |
| 기본 카드 | `--global-card-10` | `--nf-surface-card` |
| 보조 카드 | `--global-card-20` | `--nf-surface-card-muted` |
| 기본 텍스트 | `--text-basic-default-120` | `--nf-text-strong` |
| 본문 텍스트 | `--text-basic-body-10` | `--nf-text-body` |
| 보조 텍스트 | `--text-basic-default-60` | `--nf-text-muted` |
| 기본 경계 | `--border-basic-default-40` | `--nf-border-default` |
| Focus 경계 | `--border-primary-focus-10` | `--nf-border-focus` |
| Primary | `--semantic-primary-*` | `--nf-semantic-primary-*` |
| Warning | `--semantic-warning-*` | `--nf-semantic-warning-*` |
| Error | `--semantic-error-*` | `--nf-semantic-error-*` |
| Info | `--semantic-info-*` | `--nf-semantic-info-*` |

## 사용 우선순위

1. 화면 제작에서는 `--nf-*` 토큰을 사용한다.
2. Valley 원본 변수명은 참고 문서에서만 언급한다.
3. 실제 코드에서 Valley 원본 변수명을 직접 사용하지 않는다.
4. 필요한 토큰이 없으면 새 토큰을 만들되 `source-and-boundary.md`에 이유를 남긴다.
