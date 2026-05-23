# GPU Garden Services

This file preserves the current `gpu.garden` service inventory and the service-related copy that exists in the site today.

## Overview

`gpu.garden` is described in the site metadata as:

> a cozy AI playground built for TouhouAI.

The home page also frames it as a free AI playground powered by the **fartcore datacenter**.

## Primary links

- Homepage: `https://gpu.garden/`
- Documentation: `https://docs.gpu.garden/`
- Discord: `https://discord.gg/yw4HGWC2wm`

## Services

| Service | Purpose | URL | Notes |
|---|---|---|---|
| SwarmUI | Image Generation AI | `https://swarmui.gpu.garden/` | Current site copy says to ask in the TouhouAI Discord for access; anyone with the `fartcore` role can grant access. |
| MooshieUI | User-friendly image generation alternative | `https://mooshieui.gpu.garden/` | Current site copy says it is still a work in progress and asks users to leave feedback in Discord. |
| SillyTavern | Chat / Roleplay AI | `https://novel.gpu.garden/` | Listed in the services grid. |
| Farterrogator | Danbooru Interrogator | `https://tagger.gpu.garden/` | Listed in the services grid. |
| Open WebUI | Text / Chat AI | `https://oui.gpu.garden/` | Current site copy says users can sign up, then reach out to `astro` to activate the account. |
| Outline Docs | Project Documentation | `https://docs.gpu.garden/` | Listed in the services grid. |
| Fartgram | Image sharing | `https://fartgram.gpu.garden/` | Listed in the services grid. |
| Prompts | Prompt History | `https://prompts.gpu.garden/` | Listed in the services grid. |
| CyberChef | Data conversion | `https://cc.gpu.garden/` | Listed in the services grid. |
| Grafana Stats | Usage Statistics | `https://stats.gpu.garden/` | Listed in the services grid. |
| Uptime Kuma | System Health | `https://status.gpu.garden/` | Listed in the services grid. |
| Copyparty | File hosting | `https://copy.gpu.garden/` | Listed in the services grid. |
| Hedgedoc | Markdown pastebin | `https://rentry.gpu.garden/` | Current site copy notes that the subdomain is a joke. |
| JupyterHub | Jupyter Notebooks | `https://jupyterhub.gpu.garden/` | Listed in the services grid. |
| Reserve | GPU Library | `https://reserve.gpu.garden/` | Listed in the services grid. |

## Current featured / emphasized services

The current home page specifically emphasizes these services:

1. **SwarmUI**
   - CTA: “Explore SwarmUI”
   - Positioning: core image generation entry point
2. **MooshieUI**
   - CTA: “Try MooshieUI”
   - Positioning: a more user-friendly image generation alternative
3. **Open WebUI**
   - Positioning: account-based text/chat interface

## Extra context currently present on the site

- The site references a themed infrastructure page: **The Fartcore Datacenter**.
- The site also references a mascot/character page: **The GPU Gardener**.
- Footer copy says: `gpu.garden is a fartcore service`.

## Source summary

This markdown was compiled from the current site content in:

- `src/lib/components/ServicesSection.svelte`
- `src/lib/components/WelcomeSection.svelte`
- `src/lib/components/HeroSection.svelte`
- `src/routes/datacenter/+page.svelte`
- `src/app.html`
