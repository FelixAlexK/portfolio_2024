# Learning Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a "Learning" section to the portfolio that shows Felix's roadmap.sh machine-learning progress card, theme-aware and linked to the roadmap.

**Architecture:** One new Vue SFC (`learning-component.vue`) mounted in `app.vue` between Tech Stack and Work Experience, plus a nav link. The component hotlinks the roadmap.sh SVG card and swaps `?variant=dark` / `?variant=light` via a local `isDark` ref synced to the `<html>` class attribute with a `MutationObserver` (the site's theme toggle lives in `nav-component.vue` as a private ref; no refactor).

**Tech Stack:** Vue 3 `<script setup>` + TypeScript, Tailwind CSS v4 (custom theme — see spec), ESLint (antfu). No tests exist in this repo by design; verification is `pnpm run lint` + `pnpm run build` (typecheck) + a manual visual checklist.

**Spec:** `docs/superpowers/specs/2026-10-13-learning-section-design.md`

**Critical conventions (from `agents.md`):**
- Spacing scale is wiped — only `0, 2, 4, 8, 12, 16, 20, 28, 40, 60, 100, 160, 240` exist (`max-w-240` = 15rem; `p-4`/`text-xl` silently do nothing)
- Double quotes, semicolons, 2-space indent; imports must stay sorted (perfectionist)
- Kebab-case filenames; one component per section in `src/components/`
- Conventional commits
- Package manager: pnpm

---

### Task 1: Create the Learning component

**Files:**
- Create: `src/components/learning-component.vue`

- [ ] **Step 1: Write the component**

Create `src/components/learning-component.vue`:

```vue
<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const CARD_URL = "https://roadmap.sh/card/tall/65bb887a0c5481228374d7ee";

const isDark = ref(document.documentElement.classList.contains("dark"));

const cardUrl = computed(
  () => `${CARD_URL}?variant=${isDark.value ? "dark" : "light"}`,
);

const themeObserver = new MutationObserver(() => {
  isDark.value = document.documentElement.classList.contains("dark");
});

onMounted(() => {
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
});

onBeforeUnmount(() => {
  themeObserver.disconnect();
});
</script>

<template>
  <section id="learning" v-reveal>
    <h2 class="font-bold text-lg tracking-widest font-rubik uppercase mb-40">
      Learning
    </h2>
    <div class="flex flex-col w-full gap-20">
      <p class="font-lato text-base dark:text-dark-text-muted text-light-text-muted">
        Currently following the machine learning roadmap on roadmap.sh.
      </p>
      <a
        data-s-event="Learning roadmap click"
        target="_blank"
        rel="noopener noreferrer"
        href="https://roadmap.sh/machine-learning"
        class="lift flex w-full flex-col items-center gap-16 rounded-lg border border-light-border border-t-light-border-muted bg-linear-to-b from-light-bg to-light-bg-dark p-20 hover:-translate-y-4 dark:border-dark-border dark:border-t-dark-highlight dark:from-dark-bg dark:to-dark-bg-dark"
      >
        <img
          :src="cardUrl"
          alt="Felix's machine learning roadmap progress on roadmap.sh"
          loading="lazy"
          class="rounded-lg w-full max-w-240 h-auto"
        />
      </a>
    </div>
  </section>
</template>
```

Notes:
- The `.lift` class + `hover:-translate-y-4` is the canonical card pattern (copied verbatim from `education-component.vue:10`).
- `max-w-240` = 15rem, centered via `items-center` on the card flex column.
- `data-s-event` follows the analytics convention used in `home-component.vue`.

- [ ] **Step 2: Lint the new file**

Run: `pnpm exec eslint src/components/learning-component.vue`
Expected: no output (exit 0). If it reports issues, run `pnpm run lint:fix` and re-lint until clean.

- [ ] **Step 3: Commit the component**

```bash
git add src/components/learning-component.vue
git commit -m "feat: add learning section component with roadmap.sh card"
```

---

### Task 2: Mount the section and add the nav link

**Files:**
- Modify: `src/app.vue` (imports + template)
- Modify: `src/components/nav-component.vue:16-20` (navLinks array)

- [ ] **Step 1: Import and mount in `src/app.vue`**

Add the import after `home-component.vue` (imports are alphabetically sorted):

```ts
import HomeComponent from "./components/home-component.vue";
import LearningComponent from "./components/learning-component.vue";
import NavComponent from "./components/nav-component.vue";
```

Mount it in `<main>` between Tech Stack and Work Experience:

```vue
      <TechStackComponent />
      <LearningComponent />
      <WorkExperienceComponent />
```

- [ ] **Step 2: Add the nav link**

In `src/components/nav-component.vue`, change `navLinks` to:

```ts
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Learning", href: "#learning" },
  { label: "Work Experience", href: "#work-experience" },
  { label: "Contact", href: "#contact" },
];
```

(This array drives both the desktop nav and the mobile modal menu.)

- [ ] **Step 3: Lint**

Run: `pnpm run lint`
Expected: exit 0, no output. If issues, `pnpm run lint:fix` then re-run.

- [ ] **Step 4: Typecheck via build**

Run: `pnpm run build`
Expected: `vue-tsc -b` passes, Vite build succeeds (build output shows `dist/` assets).

- [ ] **Step 5: Commit**

```bash
git add src/app.vue src/components/nav-component.vue
git commit -m "feat: mount learning section and add nav link"
```

---

### Task 3: Verification

**Files:** none modified (verification only)

- [ ] **Step 1: Full lint (mirrors CI)**

Run: `pnpm run lint`
Expected: exit 0.

- [ ] **Step 2: Start dev server**

Run: `pnpm run dev` (leave running, note the printed local URL, default `http://localhost:5173`)

- [ ] **Step 3: Manual visual checklist**

Open the local URL and verify:
- [ ] "Learning" section appears between Tech Stack and Work Experience
- [ ] The roadmap.sh card image renders inside a `.lift` card (~15rem wide, centered)
- [ ] Toggling dark mode in the nav swaps the card image (dark ↔ light variant)
- [ ] "Learning" link appears in the desktop nav and in the mobile modal menu (resize window)
- [ ] Clicking the card opens `https://roadmap.sh/machine-learning` in a new tab
- [ ] Card image loads with `loading="lazy"` (check devtools network tab)

- [ ] **Step 4: Wrap up**

Stop the dev server (`Ctrl+C`). If any visual fixes were needed, lint + build again and commit with a `fix:` conventional commit message.

Report the checklist results to the user.
