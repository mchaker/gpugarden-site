## Copilot: Project instructions for gpugarden-site

This repo is a SvelteKit (Svelte 5) site styled with Tailwind CSS v4, deployed on Cloudflare (adapter-cloudflare). Keep changes small, idiomatic to SvelteKit, and aligned with existing styles/components.

### Architecture and routing

- Svelte 5 is used (see `src/routes/+layout.svelte` using `$props()` and `{@render ...}`).
- File-based routing lives in `src/routes`:
  - Root page at `src/routes/+page.svelte` composes UI from `$lib/components/*`.
  - Additional routes: `src/routes/datacenter/+page.svelte`, `src/routes/gpu-gardener/+page.svelte` (pattern to follow for new pages).
- Shared components in `src/lib/components` (Header, Footer, sections). Import via `$lib` alias.
- Global head and html shell are in `src/app.html` (fonts, meta). The home page adds Font Awesome in its own `<svelte:head>`.

### Styling conventions (Tailwind v4 + custom CSS)

- Tailwind v4 is activated via CSS, not a JS config: see `src/app.css` with `@import 'tailwindcss'` and `@plugin '@tailwindcss/typography'`.
- Prefer utility classes. Project-level component classes defined in `src/app.css`:
  - `.card-glass`, `.btn-primary`, `.gradient-text`, `.title-font`, `.accent-link`.
  - Brand colors are CSS variables under `:root` (`--primary`, `--secondary`, `--accent`).
- Links default to yellow accent via a global selector; keep button links opt-out (`btn-primary`, or explicit classes) to avoid underlines.

### Theming and client-only behaviors

- Dark mode toggles `class="dark"` on `<html>` and is initialized via `src/lib/stores/theme.ts` (`darkMode`, `toggleTheme`, `initializeTheme`).
  - Use `browser` guard or `onMount` for any DOM access.
- Smooth scrolling and back-to-top button logic in `src/routes/+page.svelte` runs inside `onMount`. Follow this pattern for new DOM effects.

### Build, dev, and quality checks

- Package manager: pnpm.
- Scripts (see `package.json`):
  - `pnpm dev` – local dev server.
  - `pnpm build` – production build (adapter-cloudflare).
  - `pnpm preview` – preview build output.
  - `pnpm check` – runs `svelte-check` (TS + Svelte diagnostics).
  - `pnpm lint` / `pnpm format` – ESLint 9 + Prettier (with Tailwind plugin) enforce style and class ordering.

### Cloudflare deployment specifics

- Adapter: `@sveltejs/adapter-cloudflare` (see `svelte.config.js`). No `wrangler.toml` is present.
- Node version matters for the toolchain (e.g., `wrangler` → `undici`): pin Node >= 20.18.1.
  - `.node-version` at repo root should be `20.18.1`.
  - Optionally set `NODE_VERSION=20.18.1` in Cloudflare Pages env vars.

### Adding or modifying pages/components

- New page: create `src/routes/<slug>/+page.svelte` and compose existing sections or add a new component under `src/lib/components`.
- Follow existing section patterns (`HeroSection.svelte`, `WelcomeSection.svelte`, `RulesSection.svelte`, etc.). Reuse `.card-glass` and `.btn-primary` for consistent UI.
- Global typography and prose styles come via `@tailwindcss/typography`; wrap rich content in a `.prose` container when appropriate.

### Assets and references

- Public assets live in `static/` (e.g., `static/images/*`, `static/favicon.png`). Reference with absolute paths (`/images/...`).
- Fonts are loaded in `src/app.html`. Font Awesome is linked in the home page head; if you create additional pages relying on FA icons, add the same `<link>` or promote it to a shared location if needed.

### Gotchas and patterns to respect

- Avoid accessing `window/document` outside `onMount` or without `browser` checks.
- Keep Tailwind class order tidy (Prettier + Tailwind plugin handles sorting; run `pnpm format`).
- Use the `$lib` alias for imports from `src/lib`.
- Prefer CSS variables and existing utility classes before adding new colors.

If any of the above seems off or you need more detail (tests, data loading, or deployment settings), ask to refine this doc and we’ll update it.
