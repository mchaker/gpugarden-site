# AGENTS.md

## Project snapshot
- Next.js App Router site with a single route in `app/page.tsx`.
- Server-side data loading happens in `app/page.tsx`, which calls `getServiceGroups()` from `lib/services.ts` and passes grouped data into the client component in `components/HomePageClient.tsx`.
- `app/services.toml` is the content source for the service directory shown on the homepage. `services.txt` exists as legacy/reference content, but the running code reads the TOML file in `app/`.

## Essential commands
- Install dependencies: `npm install`
- Start local dev server: `npm run dev`
- Production build: `npm run build`
- Start production server: `npm run start`
- Lint: `npm run lint`

Run build only when asked, you can suggest to run it.
Don't run lint right now. 

## Important gotchas
- Build uses `next build --webpack` (`package.json`), so do not assume the default Turbopack production pipeline.
- There is no test suite configured right now; the only observed validation command is `npm run lint`.
- `package.json` defines `npm run clean` as `next clean`. Keep this only if you verify the command still exists in the installed Next.js version before relying on it.
- `lib/services.ts` reads `app/services.toml` via `readFile(join(process.cwd(), "app", "services.toml"), "utf8")`. Changes to service listings belong in that TOML file, not in the React component.
- `getServiceGroups()` silently skips malformed TOML entries and returns an empty array if `services` is missing or not an array. UI changes that depend on the list should account for the empty-state possibility.
- Category ordering on the page currently follows insertion order from `app/services.toml` because grouping is built with a `Map` and then converted directly to arrays. Reordering entries in TOML changes rendered section order.
- Existing working tree already includes uncommitted revamp-related changes (`app/page.tsx`, `components/`, `lib/`). Be careful not to overwrite in-progress work when editing.

## Code organization
- `app/layout.tsx`: root layout, global metadata, font setup, and page background.
- `app/page.tsx`: async server component that loads service data and renders the homepage client component.
- `app/services.toml`: service catalog consumed by the homepage loader.
- `components/HomePageClient.tsx`: primary UI for the landing page, including hero, service listings, rules, footer, and image lightbox.
- `lib/services.ts`: TOML parsing and grouping logic for services.
- `app/globals.css`: very small global stylesheet; Tailwind is brought in via `@import "tailwindcss"`.
- `public/`: static assets referenced directly by path.

## Architecture and control flow
1. Request hits the App Router page in `app/page.tsx`.
2. The page runs on the server and awaits `getServiceGroups()`.
3. `getServiceGroups()` reads and parses `app/services.toml` with `smol-toml`, validates each entry with `isServiceLink()`, and groups valid services by `category`.
4. The grouped data is passed as props to `HomePageClient`.
5. `HomePageClient` handles only presentation and local UI state (`lightboxOpen`), while service content stays data-driven from TOML.

## Observed style and conventions
- TypeScript is strict (`tsconfig.json` has `strict: true`) and uses `moduleResolution: "bundler"` with `noEmit`.
- Imports in the current files use relative paths (`../components/HomePageClient`, `../lib/services`) rather than path aliases.
- Components and types use explicit exported types (`ServiceLink`, `ServiceGroup`, prop types) instead of loose objects.
- Styling is utility-first with Tailwind classes inline in JSX; custom reusable styling is limited to local constants such as `cardClass` in `components/HomePageClient.tsx`.
- The client/server split matters: interactive state lives in `components/HomePageClient.tsx` behind a top-level `"use client"`, while file-system access stays in server code.
- The project currently uses plain `<img>` tags, not `next/image`, for both inline and lightbox images.

## Tailwind and CSS notes
- Tailwind v4 is wired through PostCSS in `postcss.config.mjs` using `@tailwindcss/postcss`.
- Global CSS is intentionally minimal; most visual work is done directly in component class strings.
- `app/layout.tsx` applies the overall dark radial-gradient background on the `<body>`, so page-level backgrounds should be added carefully to avoid fighting the root styling.

## Content/data patterns
- A valid service entry in `app/services.toml` must have `category`, `name`, and `href` as strings; `description` is optional.
- Service links are rendered with `title={service.description}`, so descriptions currently surface as hover text rather than visible copy.
- The homepage includes hard-coded rule cards and hardware information inside `HomePageClient.tsx`; only the service listing is data-driven today.

## Testing and validation
- For data-file edits, run `npm run build` if the change could affect server-side parsing or rendering, since there are no automated tests covering `app/services.toml` parsing.
- Do not rely on `npm run lint` right now; at inspection time it is broken because ESLint 9 is installed without an `eslint.config.*` file.

## Repo-specific context from observed files
- No `.cursor` rules, `.cursorrules`, `claude.md`, `.github/copilot-instructions.md`, or existing `AGENTS.md` were present during inspection.
- `.github/workflows/` exists but was empty at inspection time, so no CI commands or deployment workflow could be documented from the repository itself.
