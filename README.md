# gpu.garden-site

A tiny landing page for [gpu.garden](https://gpu.garden). It links to SwarmUI, Open WebUI and other services running in the "fartcore" datacenter for members of the TouhouAI community. The site is built with **SvelteKit**, styled with **Tailwind CSS**, and prepared for deployment on **Cloudflare** using `@sveltejs/adapter-cloudflare`.

## Getting started

Install dependencies with `pnpm` and launch the dev server:

```bash
pnpm install
pnpm run dev
```

Use `pnpm run dev -- --open` to automatically open the browser.

## Building

Create an optimized production build:

```bash
pnpm run build
```

Preview the build locally with:

```bash
pnpm run preview
```

## Deployment

After building, deploy the output directory generated for Cloudflare. A typical workflow with [wrangler](https://developers.cloudflare.com/workers/wrangler/) is:

```bash
pnpm run build
npx wrangler pages deploy .svelte-kit/cloudflare
```

Adjust the deployment command to suit your Cloudflare setup. Refer to the SvelteKit documentation for other hosting options.
