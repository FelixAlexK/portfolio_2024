# Learning Section with roadmap.sh Progress Card — Design

**Date:** 2026-10-13
**Status:** Approved

## Goal

Show Felix's machine learning learning progress on his portfolio site using the
roadmap.sh share card, in a place that fits the site's existing structure.

## Decisions (confirmed with user)

| Decision        | Choice                                                                       |
| --------------- | ---------------------------------------------------------------------------- |
| Placement       | New dedicated "Learning" section between Tech Stack and Work Experience      |
| Image source    | Hotlink the roadmap.sh URL (always reflects latest progress, no maintenance) |
| Theme handling  | Switch card variant with the site's light/dark toggle                        |
| Nav             | Add a "Learning" link to the top navigation                                  |
| Section content | Heading + one-line intro + `.lift` card linking to the roadmap               |

## Card image URLs (verified 200, `image/svg+xml`, distinct palettes)

- Dark: `https://roadmap.sh/card/tall/65bb887a0c5481228374d7ee?variant=dark`
- Light: `https://roadmap.sh/card/tall/65bb887a0c5481228374d7ee?variant=light`
- SVG viewBox `0 0 300 392` (portrait ~3:4); default URL equals the dark variant.

## Architecture

One new component, two one-line edits. No changes to existing logic beyond the
nav link array.

### 1. New component: `src/components/learning-component.vue`

- `<section id="learning" v-reveal>` following the section pattern in
  `personal-tech-stack-component.vue`.
- Heading: `<h2 class="font-bold text-lg tracking-widest font-rubik uppercase mb-40">Learning</h2>`.
- Intro line: "Currently following the machine learning roadmap on roadmap.sh."
  in `font-lato text-base dark:text-dark-text-muted text-light-text-muted`.
- One `.lift` card (exact class pattern from work-experience/education cards)
  rendered as an `<a>`:
  - `href="https://roadmap.sh/machine-learning"`
  - `target="_blank" rel="noopener noreferrer"`
  - `data-s-event` attribute matching the existing analytics convention.
- Inside the card: centered `<img>` of the card SVG:
  - `:src` computed from theme state (dark vs light variant URL)
  - `loading="lazy"`, descriptive `alt`
  - `width="300" height="392"` (matches the SVG's intrinsic size; reserves the
    aspect box so the lazy third-party load doesn't shift layout)
  - `rounded-lg w-full max-w-240 h-auto` (15rem per the site's theme
    spacing scale; centered by the card's `items-center`; adjust only if
    visual check shows it too small/large)

### 2. Theme switching (isolated, no nav refactor)

The site's theme toggle lives in `nav-component.vue` as a local ref, so the
Learning component syncs independently:

- Local `isDark` ref initialized from
  `document.documentElement.classList.contains("dark")`.
- A `MutationObserver` on `document.documentElement` watching the `class`
  attribute updates `isDark` when the nav toggles the theme.
- Observer disconnected on component unmount.
- Chosen over extracting a shared `useTheme` composable to avoid touching the
  working theme toggle in `nav-component.vue`.

### 3. Integration edits

- `src/app.vue`: import `LearningComponent`; mount it after
  `<TechStackComponent />` and before `<WorkExperienceComponent />`.
- `src/components/nav-component.vue`: add
  `{ label: "Learning", href: "#learning" }` between About and Work Experience
  (nav link array is shared by desktop nav and mobile modal).

## Error handling / degradation

- If roadmap.sh is unreachable, the `<img>` fails silently inside the card;
  the link and text still work. No fallback logic needed.
- `prefers-reduced-motion` is already honored by the `v-reveal` directive.

## Out of scope

- No manually maintained topic list (would go stale vs. the hotlinked card).
- No composable/theme refactor.
- No tests (repo has none by design; CI runs lint only).

## Verification

1. `pnpm lint` passes.
2. `pnpm dev` visual check:
   - Section renders between Tech Stack and Work Experience.
   - Toggling dark mode swaps the card image variant.
   - Card links to `roadmap.sh/machine-learning` in a new tab.
   - "Learning" appears in desktop nav and mobile menu.
