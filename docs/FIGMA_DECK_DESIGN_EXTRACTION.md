# Figma / Deck Design Extraction

Last Updated: 2026-09-06 13:01 KST
Last Updated By: Codex / GPT-5

## Purpose

This document extracts a Figma/deck-ready presentation system from the approved `Portfolio-aware Event Triage` repository artifacts.

It is a presentation and design-transfer guide. It does not replace `docs/DESIGN.md`, revise Product policy, change the locked IA, add outcomes, or upgrade any Production gate.

## Source Boundary

| Source Type | Files | Use |
|---|---|---|
| Product / policy / IA | `docs/DESIGN.md`, `docs/DESIGN_QA.md`, `docs/CURRENT_STATE.md`, `docs/WORKLOG.md` | Define what the screen means and which claims remain blocked. |
| Visual reference | `design-system/`, `design-system/tokens/valley-reference-tokens.css`, `design-system/components/`, `design-system/patterns/`, `design-system/checklists/mobile-design-qa.md` | Define reusable color, typography, surface, badge, evidence, feedback, CTA, and QA patterns. |
| Composition | `prototype/high-fidelity/index.html`, `portfolio/case-study/index.html`, `artifacts/high-fidelity/*.png` | Provide responsive service frame, external state selector, case-study layout, and screenshot evidence. |

## Current Gate To Carry Into Figma / Deck

```text
HIGH-FIDELITY DESIGN: PASS
STATIC QA: PASS
RESPONSIVE / VISUAL QA: PASS based on existing Chromium evidence; updated shell/deck-trigger rerun passed in GitHub Actions
ACCESSIBILITY VISUAL QA: PASS FOR VISUAL REQUIREMENTS
SCREEN READER: NOT_TESTED
REAL APP/WEB BACK: NOT_TESTED
PRODUCTION: BLOCKED
```

## Design-system Files Read

| Layer | File | Extraction |
|---|---|---|
| Boundary | `design-system/README.md` | Use as a Valley-style reference system, not an official Production library. |
| Tokens | `design-system/tokens/valley-reference-tokens.css` | Primary token source for page, surface, text, border, type, spacing, radius, shadow, layout, and outcome surfaces. |
| Components | `design-system/components/buttons-and-cta.md` | Primary CTA, secondary action, retry, disabled state, and concept Web handoff treatment. |
| Components | `design-system/components/cards-and-surfaces.md` | Page surface, secondary cards, evidence card, feedback surface, and low-shadow card treatment. |
| Components | `design-system/components/badges-tabs-filters.md` | Relationship badge, event badge, outcome badge, data state badge, and external state selector chip behavior. |
| Components | `design-system/components/data-and-evidence.md` | Evidence summary, source, timestamp, system summary distinction, related asset, and data state. |
| Components | `design-system/components/feedback-states.md` | Loading, empty evidence, stale, portfolio unconnected, permission, error, and handoff failure patterns. |
| Patterns | `design-system/patterns/portfolio-aware-event-triage.md` | Reused for relationship/state framing, adapted because the latest Product IA puts Evidence before Outcome. |
| Patterns | `design-system/patterns/trust-and-data-state.md` | Reused for source, timestamp, missing evidence, stale, permission, mock, and unknown-state visibility. |
| Patterns | `design-system/patterns/investment-analysis-screen.md` | Reused for Mobile Triage Layer vs Web Analysis Workspace separation. |
| QA | `design-system/checklists/mobile-design-qa.md` | Applied to scope, relationship, outcome, evidence, interaction, accessibility, and financial-safety checks. |

## Extracted Token System

| Area | Token(s) | Deck / Figma Usage |
|---|---|---|
| Mobile service background | `--nf-surface-dashboard-mobile` | Phone/service frame background. |
| Desktop / presentation canvas | `--nf-surface-dashboard-desktop` | Portfolio page or Figma section canvas. |
| Card surfaces | `--nf-surface-card`, `--nf-surface-card-muted`, `--nf-surface-skeleton` | Event, asset, context, evidence, feedback, and loading states. |
| Text hierarchy | `--nf-text-title`, `--nf-text-strong`, `--nf-text-body`, `--nf-text-muted`, `--nf-text-disabled` | Title, section heading, body, metadata, disabled copy. |
| Status text | `--nf-text-primary`, `--nf-text-info`, `--nf-text-warning`, `--nf-text-error` | CTA emphasis, info badge, limitation, error state. |
| Borders | `--nf-border-subtle`, `--nf-border-default`, `--nf-border-strong`, `--nf-border-focus`, `--nf-border-warning`, `--nf-border-error` | Card boundary, dividers, focus ring, warning/error edge. |
| Typography | `--nf-font-sans`, `--nf-font-mono`, `--nf-text-2xs` through `--nf-text-xl`, `--nf-weight-*` | Korean-first interface type and ticker/source metadata. |
| Spacing | `--nf-space-1` through `--nf-space-8` | Section spacing, card padding, badge gaps, callout rhythm. |
| Radius / shadow | `--nf-radius-sm` through `--nf-radius-2xl`, `--nf-shadow-card` | Cards, badges, phone shell, low-shadow surfaces. |
| Mobile layout | `--nf-mobile-page-padding`, `--nf-mobile-card-padding`, `--nf-min-touch-target`, `--nf-gnb-height-reference` | Responsive phone frame, touch targets, top navigation. |
| Outcome surfaces | `--nf-outcome-check-bg`, `--nf-outcome-check-border`, `--nf-outcome-no-check-bg`, `--nf-outcome-no-check-border`, `--nf-outcome-insufficient-bg`, `--nf-outcome-insufficient-border` | Outcome block surface only; meaning must remain copy-led. |

## Extracted Component System

| Product Need | Reference Component | Figma / Deck Treatment | Reuse Status |
|---|---|---|---|
| Final mobile service frame | Page surface + top bar + stacked cards | One responsive phone frame; no fixed-width duplicate designs. | REUSE / ADAPT |
| External case selector | Tabs/chips | Put selector outside the phone frame as review tooling. | ADAPT |
| Event identity | Secondary Card + Event Type Badge | Event title, type, and timestamp appear before relationship evidence. | REUSE |
| Asset relationship | Secondary Card + Relationship Badge | Asset name, ticker, relationship copy, and badge. | REUSE |
| Portfolio / attention context | Secondary Card + Data State Badge | Holding, Watchlist, Related-only, and Unconnected meanings stay separate. | EXTEND |
| Evidence / trust | Evidence Card + Source/Timestamp | Summary, source, timestamp, system summary label, and data state. | REUSE |
| Outcome block | Outcome Badge / Feedback Surface | Three non-advisory check-status outcomes placed after evidence/trust. | ADAPT |
| Web handoff | Primary CTA / Disabled CTA / Retry CTA | Concept destination label with route/payload boundary copy. | REUSE |
| Failure states | Feedback Surface | Partial, Empty, Stale, Source Unavailable, Permission, Error, Handoff Failure. | ADAPT |

New components: `NONE`.

## Locked Service Screen Structure

Inside the phone/service frame, present only the real product UI:

```text
Top navigation
Mock / Data disclosure
Event Context
Asset Relationship
Portfolio / Attention Context
Relationship Evidence + Trust
Relevance Outcome
Web Handoff
```

Outside the phone/service frame, presentation tooling may include:

```text
External state selector
Viewport note
QA evidence label
Presenter annotation
```

## Figma / Deck Frame Plan

| Page | Section | Main Visual | Core Message | Evidence |
|---:|---|---|---|---|
| 01 | Cover / Gate Summary | `390x844-normal.png` | High-fidelity concept screen passed visual QA, while Production remains blocked. | QA reports and gate text. |
| 02 | Problem Context | Cropped Event / Asset / Evidence callouts | Mobile needs personal relevance and evidence limits before deeper analysis. | `docs/DESIGN.md` screen purpose. |
| 03 | Mobile vs Web | Two role blocks | Mobile is Triage Layer; Web is Analysis Workspace. | `investment-analysis-screen.md`. |
| 04 | Locked IA | Numbered anatomy over canonical frame | Reading order is Event -> Asset -> Context -> Evidence -> Outcome -> Handoff. | `docs/DESIGN.md`. |
| 05 | Final Service Screen Anatomy | `360x800-normal.png` plus six callouts | The phone frame is the final service UI, not a QA/debug panel. | `prototype/high-fidelity/index.html`. |
| 06 | Outcome Model | Three screenshot comparison | Outcomes are check-statuses, not investment advice or scores. | `360x800-normal.png`, `watchlist`, `insufficient`. |
| 07 | Portfolio Context Variants | Four screenshot grid | Holding, Watchlist, Related-only, and Unconnected are separate. | `normal`, `watchlist`, `related`, `unconnected`. |
| 08 | Trust / Evidence / Failure States | Six screenshot grid | Data limits are visible and differentiated. | `partial`, `empty`, `stale`, `source`, `permission`, `error`. |
| 09 | Responsive QA Evidence | 320 / 360 / 390 comparison | Screenshot QA checked hierarchy, wrapping, and sticky CTA overlap. | `320x800-normal.png`, `360x800-normal.png`, `390x844-normal.png`. |
| 10 | Visual QA Result | QA result table | 34 Chromium screenshots, 0 blockers in existing evidence. | `visual-qa-report.json`. |
| 11 | Design-system Mapping | Token/component mapping table | The design uses the Git reference system instead of inventing a new visual language. | `design-system/`. |
| 12 | Remaining Limits | Boundary checklist | Screen Reader and real App/Web Back remain not manually tested; Production stays blocked. | `docs/CURRENT_STATE.md`. |

## Screenshot Evidence Mapping

| Evidence Group | Files | Use In Presentation |
|---|---|---|
| Canonical state | `390x844-normal.png`, `360x800-normal.png`, `320x800-normal.png` | Cover, anatomy, responsive proof. |
| Outcome states | `360x800-normal.png`, `360x800-watchlist.png`, `360x800-insufficient.png` | Outcome comparison page. |
| Relationship variants | `360x800-normal.png`, `360x800-watchlist.png`, `360x800-related.png`, `360x800-multiple.png`, `360x800-unconnected.png` | Portfolio context page. |
| Evidence / trust variants | `360x800-partial.png`, `360x800-empty.png`, `360x800-stale.png`, `360x800-source.png` | Trust state page. |
| Access / system variants | `360x800-permission.png`, `360x800-error.png`, `360x800-loading.png` | Failure and loading page. |
| Handoff variants | `360x800-handoffFail.png`, `360x800-handoffSuccess.png` | Handoff boundary page. |
| Full coverage | All 34 PNG files | Appendix or review backup. |

## Presentation Copy Rules

| Topic | Use | Avoid |
|---|---|---|
| Outcome | Check-status, reason, limitation, visible evidence. | Trading-action or score-like language. |
| Color | Secondary cue after label, copy, hierarchy, and evidence. | Directional meaning from green/red/orange alone. |
| Watchlist | Interest context. | Holding, exposure, amount, or personal asset implication. |
| Insufficient data | Missing relationship/evidence data. | Irrelevance or negative event. |
| Handoff | Concept destination and expected deeper workspace. | Exact route, payload, session, or return contract. |
| QA | Chromium-rendered high-fidelity evidence. | Real-user validation or manual screen-reader validation. |

## Mobile Visual Treatment

| Layer | Treatment |
|---|---|
| Background | Light dashboard tone using `--nf-surface-dashboard-mobile`. |
| Cards | White or muted surfaces with thin border, low shadow, and compact padding. |
| Typography | Pretendard-based Korean-first scale, no negative letter spacing, long title wrapping. |
| Badges | Text-led labels with relationship/data-state colors as supporting cues. |
| Outcome | Surface and border treatment supports the copy; color does not carry the meaning alone. |
| CTA | Green primary CTA only for allowed concept handoff; disabled/retry states explain why. |
| Accessibility | 44px minimum touch target, visible focus, non-color cue, and readable hierarchy. |

## QA Carryover

| Check | Status | Note |
|---|---|---|
| Static QA | PASS | `artifacts/high-fidelity/static-qa-report.json`. |
| Existing Chromium visual QA | PASS | `artifacts/high-fidelity/visual-qa-report.json`, 34 screenshots. |
| Updated external-selector shell / deck-trigger visual rerun | PASS | GitHub Actions run `34010094421` completed successfully at remote commit `6991749c2dc40591eaedf43dbc948ac1e4b8201c`. |
| Screen reader manual test | NOT_TESTED | Do not upgrade from visual accessibility checks. |
| Real App/Web Back | NOT_TESTED | Requires integrated route environment. |
| Production | BLOCKED | Requires separate data, field, logic, freshness, handoff, API, validation, and acceptance contracts. |

## Next Exact Action

Use this extraction document, `portfolio/case-study/index.html`, `portfolio/deck/portfolio-aware-event-triage-case-study.pptx`, and `artifacts/high-fidelity/*.png` to continue final portfolio review or transfer the presentation into a target Figma file.
