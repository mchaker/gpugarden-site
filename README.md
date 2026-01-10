# gpu.garden

**gpu.garden** is a cozy AI playground hosted in the fartcore datacenter, lovingly built for members of **TouhouAI**.

> 🌱 Live at: [https://gpu.garden](https://gpu.garden)

---

## 🛠 Tech Stack

- [SvelteKit](https://kit.svelte.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- Hosted on [Cloudflare](https://cloudflare.com)

---

## 📦 Features

- ⚡ **Rebuilt with SvelteKit** for modern SSR/SPA performance
- 🎨 **Custom theme + typography** with `Geist` font from Vercel
- 🖼️ Clean layout with `Header` and `Footer` components
- 🧠 SEO + Social meta tags (Open Graph + Twitter cards)
- 🔗 Hyperlink styling: `#ff6747` with hover effects
- 💬 Support for AI tools like SwarmUI and Open WebUI

---

## 📄 Pages & Services

- `/` — Homepage with usage instructions, rules, and links
- **Primary AI Services**:
  - [SwarmUI](https://swarmui.gpu.garden/) — Image generation AI
  - [NovelAI](https://novel.gpu.garden/) — Chat / roleplay / storytelling AI (SillyTavern-like)
  - [Tagger](https://tagger.gpu.garden/) — Danbooru / Natural Language image interrogator
  - [ComfyBackendDirect](https://swarmui.gpu.garden/ComfyBackendDirect) — Bare-bones ComfyUI (⚠️ requires login)
  - [OpenWebUI](https://oui.gpu.garden/) — Text/chat AI
- **Utilities & Tools**:
  - [Docs](https://docs.gpu.garden/) — Project documentation
  - [CyberChef](https://cc.gpu.garden/) — CyberChef (The Cyber Swiss Army Knife)
  - [Start Page](https://start.gpu.garden/) — Simplified links & stats start page
  - [Prompts](https://prompts.gpu.garden/) — Prompt history
  - [Fartgram](https://fartgram.gpu.garden/) — A place to fart images onto the internet
- **Monitoring**:
  - [Stream](https://stream.gpu.garden/) — Livestream of the shareservers
  - [Stats](https://stats.gpu.garden/) — Usage stats
  - [Status](https://status.gpu.garden/) — System health

---

## 🧹 Cleanup

- Removed all legacy HTML files (`index.html`, `classic.html`, etc.)
- Removed outdated favicons and meta image assets

---

## 🧪 Developing Locally

To recreate or develop this project locally, follow these steps:

### 1. Prerequisites: Strict Versioning

This project enforces **specific** versions to:

1.  **Match the Cloudflare Pages deployment environment**: We must use the exact same Node.js version locally as in production to avoid hydration mismatch errors or deployment failures.
2.  **Prevent Lockfile Drift**: different pnpm versions calculate the lockfile differently. Using the strict version ensures everyone generates the exact same `pnpm-lock.yaml`.

- **Node.js**: `20.18.1` (Exact version required)
- **pnpm**: `10.18.3` (Exact version required)

**How to handle version conflicts:**
If your global Node/pnpm versions differ, do not try to force them. Instead, use "multiple instances" via a version manager:

- **Use `fnm` or `nvm`**: These tools let you install and switch to Node `20.18.1` specifically for this folder, without affecting your other projects.
- **Corepack**: This project uses configured package manager settings. If enabled, Node will try to use the correct `pnpm` version automatically.

### 2. Installation

Clone the repository and set up the environment:

```bash
# 1. Switch to the correct Node version
# (fnm will automatically detect .node-version if configured)
fnm install 20.18.1
fnm use 20.18.1

# 2. Ensure the correct pnpm is available
# If pnpm is missing or wrong version:
npm install -g pnpm@10.18.3

# 3. Install dependencies
pnpm install

# 4. Verify everything is correct
pnpm check
```

### 3. Running Development Server

Start the local development server with hot module replacement:

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Building for Production

To create a production build (generating the Cloudflare Pages output in `.svelte-kit/cloudflare`):

```bash
pnpm build
```

To preview the production build locally:

```bash
# Install wrangler if needed for previewing cloudflare adapter output
pnpm preview
```

---

## 🎨 Implementation Details

### Smooth Scrolling & Effects

The site features custom-built smooth scrolling and interaction effects located primarily in [`src/routes/+page.svelte`](src/routes/+page.svelte). This provides a more controlled experience than standard CSS scrolling.

**Recreation Steps (How it works):**

1.  **Anchor Links**: A script intercepts clicks on all internal links (`a[href^="#"]`). Instead of the default jump, it calls `targetElement.scrollIntoView({ behavior: 'smooth' })`.
2.  **Back-to-Top Button**:
    - A floating button (`#backToTop`) is hidden by default.
    - A scroll event listener toggles visibility when `window.pageYOffset > 300`.
    - It uses dynamic positioning logic to ensure it stops before hitting the footer (`footerRect.top < window.innerHeight`).
    - Clicking it triggers `window.scrollTo({ top: 0, behavior: 'smooth' })`.
3.  **Scroll Animations**:
    - A `requestAnimationFrame` loop monitors elements with the `.scroll-section` class.
    - As a section scrolls out of the viewport (top < 0), logic calculates a `progress` value.
    - This drives a CSS transform (`scale`) and `opacity` fade, creating a visual "stacking" effect as you scroll past sections.

### Dark Mode

Theme toggling is managed by `src/lib/stores/theme.ts`. It acts as a single source of truth:

- Checks LocalStorage definition first.
- Falls back to `window.matchMedia('(prefers-color-scheme: dark)')`.
- Toggles the `class="dark"` on the `<html>` element, enabling Tailwind's `dark:` modifiers throughout the site.

### Styling System (Tailwind v4)

- **Configuration**: Managed via standard CSS using `@theme` in `src/app.css` (Tailwind v4 style).
- **Typography**: Uses the `@tailwindcss/typography` plugin for rich text sections (`.prose`).
- **Custom Classes**: Reusable utility classes like `.card-glass`, `.gradient-text`, and `.title-font` are defined in `src/app.css` for consistency.

---

## 📚 Project Structure Guide

### 📁 Key Project Directories

- `/src` - Main source code
  - `/src/routes` - All SvelteKit pages (follows file-based routing)
    - `+page.svelte` contains the smooth scrolling logic and `onMount` handlers.
  - `/src/lib` - Reusable components and utilities
  - `/src/lib/components` - UI components (Header, Footer, ServicesSection, etc.)
  - `/src/lib/stores` - Svelte stores (theme management)
- `/static` - Public assets (images, fonts, etc.)

---

## 🤝 Contributing & Modification

1. **Add Pages**: Create new directories in `src/routes/` (e.g., `src/routes/about/+page.svelte`).
2. **Add Components**: Create `.svelte` files in `src/lib/components/` and import them via `$lib/components/...`.
3. **Deploy**: The project is configured with `@sveltejs/adapter-cloudflare`. Simply push to a repository connected to Cloudflare Pages, and set the build command to `pnpm build`.
