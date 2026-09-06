# Portfolio Presentation Structure

Last Updated: 2026-09-06 13:01 KST
Last Updated By: Codex / GPT-5

## Purpose

This document packages the approved `Portfolio-aware Event Triage` high-fidelity work into a portfolio/Figma presentation structure.

It does not replace `docs/DESIGN.md`, change Product policy, or upgrade any Production gate. Claims stay bounded to concept, mock fixture, high-fidelity frame, and visual QA evidence.

## Source Boundary

| Area | Source | How To Use |
|---|---|---|
| Product logic | `docs/DESIGN.md` | Primary source for screen purpose, IA, state rules, outcome semantics, and handoff boundary. |
| QA evidence | `docs/DESIGN_QA.md` | Source for high-fidelity QA result, viewport coverage, state coverage, and remaining limits. |
| Rendered frames | `artifacts/high-fidelity/*.png` | Visual evidence for portfolio slides and Figma pages. |
| Prototype | `prototype/high-fidelity/index.html` | Reference implementation for state variants only; do not treat as Production evidence. |
| QA reports | `artifacts/high-fidelity/static-qa-report.json`, `artifacts/high-fidelity/visual-qa-report.json` | Machine-readable evidence for static and Chromium visual QA. |
| Design extraction | `docs/FIGMA_DECK_DESIGN_EXTRACTION.md` | Page-by-page Figma/deck transfer guide with token, component, and screenshot mapping. |
| Native deck | `portfolio/deck/portfolio-aware-event-triage-case-study.pptx` | Portfolio-ready 12-slide deck assembled from this structure and verified screenshots. |

## Current Gate To Present

```text
HIGH-FIDELITY DESIGN: PASS
STATIC QA: PASS
RESPONSIVE / VISUAL QA: PASS
ACCESSIBILITY VISUAL QA: PASS FOR VISUAL REQUIREMENTS
SCREEN READER: NOT_TESTED
REAL APP/WEB BACK: NOT_TESTED
PRODUCTION: BLOCKED
```

## Portfolio Story Arc

| Step | Portfolio Question | Core Message | Evidence |
|---|---|---|---|
| 1 | What problem is being solved? | Mobile users need a bounded triage view that explains whether an event is personally relevant enough to inspect further. | `docs/DESIGN.md` Screen Purpose |
| 2 | Why split Mobile and Web? | Mobile stays a Triage Layer; Web remains the Analysis Workspace for deeper research. | `docs/DESIGN.md` Source & Boundary |
| 3 | What was locked? | The screen reads Event -> Asset -> Context -> Evidence -> Outcome -> Handoff. | `docs/DESIGN.md` Locked Information Hierarchy |
| 4 | What did the high-fidelity frame solve? | It turns approved logic into compact mobile sections with visible source, freshness, limitation, and handoff cues. | `prototype/high-fidelity/index.html` |
| 5 | How are states handled? | The design covers normal, outcome, relationship, evidence, access, loading, and handoff variants. | `artifacts/high-fidelity/*.png` |
| 6 | How is financial safety protected? | Outcomes are copy-led check-statuses, not investment advice, risk scoring, or portfolio impact scoring. | `docs/DESIGN_QA.md` |
| 7 | How was it verified? | Chromium visual QA passed across 34 persisted screenshots. | `visual-qa-report.json` |
| 8 | What remains unresolved? | Screen reader, real App/Web back behavior, and Production contracts remain separate unresolved work. | `docs/CURRENT_STATE.md` |

## Recommended Slide / Figma Page Outline

| Page | Title | Goal | Primary Visual | Presenter Notes |
|---:|---|---|---|---|
| 1 | Portfolio-aware Event Triage | Establish project, target user moment, and bounded status. | `artifacts/high-fidelity/390x844-normal.png` | Say this is a high-fidelity concept/mock frame set verified by Chromium screenshots. |
| 2 | Problem Context | Explain why event relevance is difficult on mobile without personal context and evidence limits. | Small cropped callouts from Event, Asset, Evidence sections | Keep the framing around triage clarity, not complete investment analysis. |
| 3 | Product Role Split | Show Mobile as Triage Layer and Web as Analysis Workspace. | Two-column role diagram or simple labeled blocks | Do not present Web handoff as an implemented Production route. |
| 4 | Locked IA | Show the exact visual reading order. | Annotated `390x844-normal.png` | Use numbered callouts: Event, Asset, Context, Evidence, Outcome, Handoff. |
| 5 | Canonical Screen Anatomy | Explain key sections and why Outcome appears after evidence/trust. | `360x800-normal.png` | Emphasize evidence-before-outcome and source/freshness visibility. |
| 6 | Outcome Model | Present the three allowed non-advisory outcomes. | `360x800-normal.png`, `360x800-watchlist.png`, `360x800-insufficient.png` | Explain meaning through copy and hierarchy before color. |
| 7 | Portfolio Context Variants | Separate Holding, Watchlist, Related-only, and Unconnected. | `360x800-normal.png`, `360x800-watchlist.png`, `360x800-related.png`, `360x800-unconnected.png` | Avoid implying Watchlist is a holding or exposure. |
| 8 | Trust / Evidence States | Show partial, empty, stale, source unavailable, permission, and error handling. | State grid using 360 screenshots | The design reveals uncertainty instead of hiding it. |
| 9 | Responsive QA Evidence | Demonstrate 320, 360, and 390 viewport coverage. | `320x800-normal.png`, `360x800-normal.png`, `390x844-normal.png` | Explain that 320 is stress coverage, while 360/390 cover all 15 states. |
| 10 | Visual QA Result | Summarize Chromium QA results and issue severity. | QA result table plus artifact paths | State BLOCKER and MAJOR were not found in screenshot review. |
| 11 | Design-system Mapping | Show how the Git reference system informs the final visual treatment. | Token/component mapping table | Keep the design system framed as a reference layer, not Product policy or official Production system. |
| 12 | Remaining Limits | Make unresolved work explicit. | Boundary checklist | Keep Screen Reader `NOT_TESTED`, real App/Web Back `NOT_TESTED`, Production `BLOCKED`. |

## Screenshot Selection

| Use | Recommended Files | Why |
|---|---|---|
| Hero/canonical frame | `artifacts/high-fidelity/390x844-normal.png` | Best balanced mobile viewport for the normal Holding + `CHECK_FURTHER` frame. |
| Compact mobile proof | `artifacts/high-fidelity/360x800-normal.png` | Shows the same canonical state at common narrow mobile size. |
| Stress proof | `artifacts/high-fidelity/320x800-normal.png` | Validates title/badge/source wrapping and sticky CTA behavior at 320px. |
| Outcome comparison | `360x800-normal.png`, `360x800-watchlist.png`, `360x800-insufficient.png` | Shows all three allowed outcome meanings without changing the model. |
| Portfolio context comparison | `360x800-normal.png`, `360x800-watchlist.png`, `360x800-related.png`, `360x800-unconnected.png` | Separates holding, interest, related-only, and unavailable personal context. |
| Trust/failure grid | `360x800-partial.png`, `360x800-empty.png`, `360x800-stale.png`, `360x800-source.png`, `360x800-permission.png`, `360x800-error.png` | Shows evidence limits, access limits, and system failure without inventing certainty. |
| Handoff story | `360x800-handoffFail.png`, `360x800-handoffSuccess.png` | Shows concept handoff states while keeping Production payload unresolved. |
| Loading | `360x800-loading.png` | Shows that loading does not expose a definitive outcome. |

## Key Screen Anatomy Callouts

| Section | Callout Message | Evidence |
|---|---|---|
| Event Context | The first decision is understanding what happened and when. | Event badge, title, event metadata. |
| Asset Relationship | The screen identifies which asset is linked and whether the relation is personal or general. | Asset name, ticker, relationship badge. |
| Portfolio / Attention Context | Portfolio, Watchlist, Related-only, and Unconnected are visually separated. | Relationship copy and data-state badge. |
| Relationship Evidence + Trust | Source, timestamp, and AI/system summary distinction are shown before the outcome. | Evidence card metadata. |
| Relevance Outcome | Outcome is a bounded check-status supported by visible context and evidence. | Outcome label, reason list, limitation copy. |
| Web Handoff | Mobile gives a path to deeper review without claiming a completed Production payload. | CTA label and concept handoff note. |

## State Coverage For Presentation

| Group | States | Presentation Treatment |
|---|---|---|
| Core outcomes | Normal, Watchlist, Insufficient | Show as a three-frame comparison. |
| Relationship variants | Related-only, Multiple Related Assets, Portfolio Unconnected | Show as a portfolio context grid. |
| Evidence / trust | Partial, Empty Evidence, Stale, Source Unavailable | Show how the screen makes limits visible. |
| Access / system | Permission / Access, Generic Error, Loading | Show disabled, retry, and no-definitive-outcome behavior. |
| Handoff | Handoff Failure, Handoff Success Simulation | Show local context retention and concept destination copy. |

## Visual QA Evidence To Cite

| Evidence | Result |
|---|---|
| `artifacts/high-fidelity/visual-qa-report.json` | `PASS`, 34 screenshots, 0 blockers, 0 undersized controls. |
| `artifacts/high-fidelity/static-qa-report.json` | `PASS`, required static checks passed. |
| `docs/DESIGN_QA.md` High-fidelity Visual QA Final Result | 360x800 full state coverage, 390x844 full state coverage, 320x800 stress coverage. |
| Persisted PNG screenshots | 15 states at 360x800, 15 states at 390x844, 4 stress states at 320x800. |

## Claim Boundaries

Use these phrases:

| Safe Phrase | Reason |
|---|---|
| High-fidelity frame set | Accurately describes the artifact. |
| Concept/mock fixture | Prevents Production field or integration claims. |
| Chromium-rendered screenshot QA | Ties visual claims to actual browser evidence. |
| Visual accessibility requirements | Limits accessibility claim to what was visually checked. |
| Production remains blocked | Preserves unresolved contract and validation boundaries. |

Avoid phrases that imply:

| Avoid Implying | Use Instead |
|---|---|
| The design is connected to real account data | The frames use mock fixtures. |
| Outcome logic is validated for live use | Outcome presentation is validated at high-fidelity level. |
| Handoff route or payload is complete | Handoff is concept-level with unresolved contract. |
| Screen reader behavior was verified | Screen reader manual test remains `NOT_TESTED`. |
| Web return behavior works in app | Real App/Web Back remains `NOT_TESTED`. |

## Financial Safety Presentation Rules

| Rule | Application |
|---|---|
| Outcome is a check-status | Explain whether there is enough reason to inspect further, not whether the user should take an investment action. |
| Copy leads color | Use the label, supporting copy, icon/shape, and evidence callouts before discussing color. |
| No directional scoring | Do not introduce risk, opportunity, impact, urgency, or confidence scores. |
| Watchlist is not holding | Describe Watchlist as interest context only. |
| Insufficient data is not irrelevance | Present it as lack of necessary relationship/evidence data. |

## Figma Packaging Guidance

| Layer | Guidance |
|---|---|
| Cover | Use one canonical mobile frame with project/gate summary. |
| Annotation | Add numbered callouts for the locked IA. |
| Evidence | Place QA report snippets next to screenshot grids, not as decoration. |
| State grids | Use 2x2 or 3x2 groups for state families; avoid shrinking screenshots until text is unreadable. |
| Design-system mapping | Use `docs/FIGMA_DECK_DESIGN_EXTRACTION.md` to place token/component mapping near the final service frame. |
| Visual hierarchy | Keep Event/Evidence explanations before Outcome explanation. |
| Boundary slide | End with unresolved tests and Production blockers so the case study stays honest. |

## Portfolio Copy Draft

Short version:

> Portfolio-aware Event Triage is a mobile triage concept for helping a user understand whether a market event has enough personal relationship and evidence to inspect further. The high-fidelity frame set preserves a locked Event -> Asset -> Context -> Evidence -> Outcome -> Handoff hierarchy, separates Portfolio from Watchlist and related-only context, and exposes source, timestamp, summary, and data limits before presenting a non-advisory outcome. Chromium visual QA passed across 34 persisted screenshots covering 320, 360, and 390 mobile viewports. Screen reader manual testing, real App/Web back behavior, and Production contracts remain unresolved.

## Next Exact Action

Review `portfolio/deck/portfolio-aware-event-triage-case-study.pptx` as the portfolio-ready deck, then transfer it into a target Figma file or final portfolio platform if needed. Keep the work in presentation composition unless a new manual validation track is explicitly started.
