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

## 📄 Pages

- `/` — Homepage with usage instructions, rules, and links
- External links to:
  - [SwarmUI](https://swarmui.gpu.garden/)
  - [Open WebUI](https://oui.gpu.garden/)
  - [Prompt History](https://prompts.gpu.garden/)
  - [Stats](https://stats.gpu.garden/)
  - [Status](https://status.gpu.garden/)

---

## 🧹 Cleanup

- Removed all legacy HTML files (`index.html`, `classic.html`, etc.)
- Removed outdated favicons and meta image assets

---

## 🧪 Developing Locally

```bash
pnpm install
pnpm run dev

---

## 📚 Project Structure Guide

### 📁 Key Project Directories
- `/src` - Main source code
  - `/src/routes` - All SvelteKit pages (follows file-based routing)
  - `/src/lib` - Reusable components and utilities
  - `/src/lib/components` - UI components like Header and Footer
- `/static` - Public assets (images, fonts, etc.)

### 🗂️ Configuration Files
- `svelte.config.js` - SvelteKit configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `vite.config.ts` - Vite bundler configuration
- `package.json` - Project dependencies and scripts
- `tsconfig.json` - TypeScript configuration

---

## 🎨 Styling Guide

This project uses Tailwind CSS v4 for styling. Key styling concepts include:

### CSS Structure (`app.css`)
- **Base Layer**: Contains fundamental styles for HTML elements
- **Components Layer**: Reusable UI patterns (e.g., `.accent-link`, `.section-box`)
- **Dark Mode Support**: Automatically switches based on user's system preference
- **Typography**: Using the `@tailwindcss/typography` plugin for content-rich areas

### Tailwind Utility Classes
Example of utility classes from our components:
- `mt-12` - Margin-top of 3rem (12 * 0.25rem)
- `py-6` - Padding of 1.5rem on Y-axis (top and bottom)
- `text-center` - Center-aligned text
- `rounded-lg` - Large border radius
- `text-zinc-500` - Gray text (500 = medium tone)

### Brand Colors
- Primary accent: `#ff6747` (coral/orange)
- Hover accent: `#f22b00` (deeper orange/red)

---

## 🛠️ Component Guide

### Header Component
The Header component (`src/lib/components/Header.svelte`) provides the site navigation bar. 

To modify:
- Update the logo or site title
- Add or remove navigation links
- Customize the appearance using Tailwind classes

### Footer Component 
The Footer component (`src/lib/components/Footer.svelte`) contains site credits and links.

To modify:
- Update attribution links
- Change styling with Tailwind classes
- Add additional information or links

---

## 📄 Page Structure

SvelteKit uses file-based routing in the `/src/routes` directory:

- `/src/routes/+page.svelte` - Homepage
- `/src/routes/+layout.svelte` - Main layout wrapper (includes Header/Footer)
- `/src/routes/+page.ts` - Data loading (if needed)

To add a new page:
1. Create a file like `/src/routes/about/+page.svelte`
2. This will be accessible at `/about`

---

## ⚙️ How to Modify

### Adding New Pages
1. Create a new `.svelte` file in the `/src/routes` directory
2. Follow SvelteKit's file-based routing convention:
   - `/src/routes/new-page/+page.svelte` → `/new-page`
   - `/src/routes/tools/resource/+page.svelte` → `/tools/resource`

### Adding New Components
1. Create a `.svelte` file in `/src/lib/components`
2. Import it in your pages:
   ```svelte
   <script>
     import MyComponent from '$lib/components/MyComponent.svelte';
   </script>
   ```

### Customizing Styles
1. Global styles: Modify `/src/app.css`
2. Component-specific styles: Use Svelte's built-in `<style>` tag or Tailwind classes
3. Theming: Update Tailwind configuration in `tailwind.config.js`

### Deploying to Cloudflare
This project uses `@sveltejs/adapter-cloudflare` for seamless deployment.
1. Connect your repository to Cloudflare Pages
2. Set build command: `pnpm build`
3. Set build output directory: `.svelte-kit/cloudflare`

---

## 🤝 Contributing

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Start the development server: `pnpm run dev`
4. Make your changes
5. Run `pnpm run check` to validate TypeScript
6. Submit a pull request