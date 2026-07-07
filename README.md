# gpu.garden

The homepage for [gpu.garden](https://gpu.garden) — a community hub of free,
self-hosted AI services (image generation, LLMs, notebooks, file sharing, and
more) running on the fartcore datacenter.

It's a single-page site that shows what the datacenter offers: a hero intro, a
hardware summary, a directory of the hosted services, and the community usage
rules. The service directory is data-driven from a TOML file, so adding or
changing a service is a content edit, not a code change.

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS v4** (via PostCSS)
- **TypeScript** (strict)
- **next/image** for optimized, responsive images (`sharp` at build/runtime)
- **smol-toml** to parse the service catalog
- **lucide-react** for icons

## Getting started

**Prerequisites:** Node.js >= 20.9.0

```bash
npm install     # install dependencies
npm run dev     # local dev server (http://localhost:3000)
npm run build   # production build (uses webpack: `next build --webpack`)
npm run start   # serve the production build
```

## Project structure

```
app/
  layout.tsx        Root layout: metadata, fonts, background, <GravityGrid />
  page.tsx          Server component: loads services, renders the client UI
  globals.css       Minimal global styles; Tailwind is imported here
  services.toml     Content source for the service directory
components/
  HomePageClient.tsx  The landing-page UI (hero, hardware, services, rules,
                      footer, and the image lightbox)
  GravityGrid.tsx     Animated particle-field background (canvas)
lib/
  services.ts       Reads and groups services.toml into typed data
public/             Static assets (images, service icons, favicons)
```

## Editing content

The service directory is driven entirely by [`app/services.toml`](app/services.toml).
Each entry looks like:

```toml
[[services]]
category = "ai"          # one of: ai, services, tools, other
name = "SwarmUI"
href = "https://swarmui.gpu.garden/"
description = "Image generation in a convenient interface with ComfyUI"
```

Notes:
- `category`, `name`, and `href` are required; `description` is optional (it's
  shown as hover text).
- Sections on the page render in the order categories first appear in the file.
- The `other` category is rendered as icon links in the footer rather than in
  the main directory.
- Malformed entries are skipped rather than breaking the build.
- To give a service an icon, drop the file in `public/icons/` and map its name
  in the `serviceIcons` object in `components/HomePageClient.tsx`.

## Notes

- Keep images in `public/` reasonably sized — they're served through
  `next/image`, which generates responsive derivatives, but oversized source
  files still bloat decode memory. (See the git history for why this matters.)
- The build is pinned to webpack via `next build --webpack` rather than the
  default Turbopack production pipeline.
</content>
</invoke>
