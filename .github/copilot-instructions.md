
# Copilot: AI Coding Agent Instructions for gpugarden-site

This repo is a SvelteKit v5 site styled with Tailwind CSS v4, deployed on Cloudflare using `@sveltejs/adapter-cloudflare`. Follow these instructions for productive, idiomatic changes:

## Architecture & Routing
- **SvelteKit 5**: Uses `$props()` and `{@render ...}` in layouts (see `src/routes/+layout.svelte`).
- **File-based routing**: Pages live in `src/routes/`. The root (`+page.svelte`) composes UI from `$lib/components/*`. Additional routes follow the pattern: `src/routes/<slug>/+page.svelte`.
- **Components**: Shared UI in `src/lib/components/` (e.g., `Header.svelte`, `Footer.svelte`, section components). Import via `$lib` alias.
- **Global HTML shell**: `src/app.html` sets up fonts, meta, manifest, and Font Awesome (for icons).

## Styling & Conventions
- **Tailwind v4**: Activated via CSS only (`src/app.css`), not JS config. Use utility classes and project-level classes: `.card-glass`, `.btn-primary`, `.gradient-text`, `.title-font`, `.accent-link`.
- **Brand colors**: CSS variables under `:root` (`--primary`, `--secondary`, `--accent`).
- **Links**: Default to yellow accent; button links opt-out via `.btn-primary` or explicit classes.
- **Typography**: Use `.prose` for rich content (via `@tailwindcss/typography`).

## Theming & Client Behaviors
- **Dark mode**: Toggles `class="dark"` on `<html>`, managed by `src/lib/stores/theme.ts` (`darkMode`, `toggleTheme`, `initializeTheme`). Use `browser` guard or `onMount` for DOM access.
- **Client-only effects**: Smooth scrolling/back-to-top logic in `src/routes/+page.svelte` (inside `onMount`). Follow this pattern for new DOM effects.

## Build, Dev, & Quality
- **Package manager**: pnpm.
- **Scripts** (see `package.json`):
  - `pnpm dev` – local dev server
  - `pnpm build` – production build
  - `pnpm preview` – preview build output
  - `pnpm check` – Svelte/TS diagnostics
  - `pnpm lint` / `pnpm format` – ESLint 9 + Prettier (with Tailwind plugin)

## Cloudflare Deployment
- **Adapter**: `@sveltejs/adapter-cloudflare` (see `svelte.config.js`). No `wrangler.toml`.
- **Node version**: Pin to `20.18.1` (see `.node-version`). Set `NODE_VERSION=20.18.1` in Cloudflare Pages env vars if needed.

## Adding/Modifying Pages & Components
- **New page**: Create `src/routes/<slug>/+page.svelte`, compose from existing sections/components, or add to `src/lib/components/`.
- **Section pattern**: Follow examples like `HeroSection.svelte`, `WelcomeSection.svelte`, `RulesSection.svelte`. Use `.card-glass` and `.btn-primary` for UI consistency.

## Assets & References
- **Static assets**: In `static/` (e.g., `static/images/*`, `static/favicon.png`). Reference with absolute paths (`/images/...`).
- **Fonts & icons**: Fonts loaded in `src/app.html`. Font Awesome is globally linked; if needed on new pages, add `<link>` or promote to shared location.
- **Project docs**: https://docs.gpu.garden/

## Project-Specific Patterns & Gotchas
- **No direct DOM access** outside `onMount` or without `browser` checks.
- **Tailwind class order**: Prettier + Tailwind plugin enforce sorting (`pnpm format`).
- **Use `$lib` alias** for imports from `src/lib`.
- **Prefer CSS variables/utility classes** before adding new colors.

## Examples
- To add a new section, create a Svelte component in `src/lib/components/` and import it in the relevant page under `src/routes/`.
- For dark mode toggling, use the store in `src/lib/stores/theme.ts` and update `<html>` class.

---
If any section is unclear or incomplete, request feedback to iterate and improve these instructions.
