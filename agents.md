# AGENTS.md

Single-page Vue 3 + TypeScript + Vite portfolio (Tailwind CSS v4, pnpm). No tests exist — don't add a test script.

## Commands

- `pnpm run dev` — dev server
- `pnpm run build` — `vue-tsc -b && vite build`; typechecking is part of build, there is no separate typecheck script
- `pnpm run lint` / `pnpm run lint:fix`
- pnpm is required (lockfile is `pnpm-lock.yaml`, `pnpm-workspace.yaml` allows esbuild's build script); CI runs `pnpm install && pnpm run lint`

## Tailwind v4 custom theme (`src/style.css`)

- Default color and spacing scales are wiped (`--color-*: initial`, `--spacing-*: initial`). Only custom tokens apply:
  - Colors: `dark-*` / `light-*` (e.g. `dark-bg-dark`, `light-text-muted`, `dark-primary`)
  - Fonts: `font-rubik`, `font-lato`
  - Spacing: only 0, 2, 4, 8, 12, 16, 20, 28, 40, 60, 100, 160, 240 (e.g. `p-28`, `space-y-100`, `size-20`) — defaults like `p-4` or `text-xl` silently produce nothing
- Dark mode is class-based (`@custom-variant dark`): use `dark:` variants under a `.dark` ancestor, light-mode colors unprefixed. Very large spacing (mb-40, space-y-100) is intentional.

## Style & lint (antfu eslint-config)

- Prettier is disabled; eslint is the only formatter (format-on-save via eslint, `.vscode/settings.json`)
- Double quotes, semicolons, 2-space indent
- `unicorn/filename-case` enforces kebab-case filenames (components: `home-component.vue`)
- `perfectionist/sort-imports` enforced — keep imports sorted

## Architecture

- Vue 3 `<script setup>` SFCs. `src/main.ts` mounts `src/app.vue` directly; vue-router is installed but unused — nav uses anchor links (`#work-experience`, `#about`, `#contact`)
- One kebab-case component per page section in `src/components/`, composed in `src/app.vue`
- `vite-plugin-md` is configured in `vite.config.ts` but no `.md` files exist in `src/` — markdown components are vestigial
- Section scroll-reveals use the `v-reveal` directive registered in `src/main.ts` (adds `.reveal` / `.is-visible` classes defined in `style.css`; honors `prefers-reduced-motion`)
- `index.html` has an inline script that applies `.dark` from localStorage (defaults to dark) before paint; toggling is done in `nav-component.vue`

## Repo notes

- CI (`.github/workflows/ci.yml`) runs lint only, on push to `master`
- Conventional commit style (`fix:`, `feat:`) per git history
- `repomix-output.xml` in the root is a repo-export artifact — ignore
