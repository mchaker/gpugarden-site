<script lang="ts">
	/*****************************************************************
	 *  Imports                                                       *
	 *****************************************************************/

	/**
	 * Custom header and footer components that live in
	 * src/lib/components/Header.svelte and Footer.svelte.
	 *
	 * `$lib` is a SvelteKit alias that always points at `src/lib`.
	 * You can therefore move these components without adjusting
	 * any relative import paths.
	 */
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	/**
	 * `onMount` is one of Svelte’s lifecycle functions.
	 * Code inside the callback only runs in the browser
	 * (never during server-side rendering) and *after*
	 * the component has been first rendered to the DOM.
	 */
	import { onMount } from 'svelte';

	/*****************************************************************
	 *  Lifecycle: update the <meta name="theme-color"> tag           *
	 *****************************************************************/
	onMount(() => {
		/**
		 * Ask the browser if the user’s operating-system / browser
		 * prefers a dark colour scheme (`true` = dark mode enabled).
		 */
		const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;

		/** Grab the existing <meta name="theme-color"> element. */
		const themeMeta = document.querySelector('meta[name="theme-color"]');

		/** If the tag is present, update it based on the colour scheme. */
		if (themeMeta) {
			// `setAttribute` overwrites the current content value
			// so the browser chrome (address bar on mobile, etc.)
			// adopts the correct colour without a refresh.
			themeMeta.setAttribute('content', dark ? '#0c0a09' : '#ffffff');
		}
	});
</script>

<!--
  ────────────────────────────────────────────────────────────────
  <svelte:head>
  This special element lets you inject anything you want into the
  document’s <head>. A SvelteKit route can therefore set its own
  title, meta description, Open Graph tags, etc.
  ────────────────────────────────────────────────────────────────
-->
<svelte:head>
	<!-- Title that shows in the browser tab -->
	<title>gpu.garden — TouhouAI's Fartcore Datacenter</title>

	<!-- Short description for search engines -->
	<meta
		name="description"
		content="gpu.garden is a cozy AI playground hosted in the fartcore datacenter, made for members of TouhouAI."
	/>

	<!-- Mobile responsiveness -->
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<!-- Character set → always recommended -->
	<meta charset="UTF-8" />

	<!-- Open-Graph tags (nice previews on Twitter, Discord, etc.) -->
	<meta property="og:title" content="gpu.garden" />
	<meta
		property="og:description"
		content="Built for TouhouAI — welcome to our beautifully weird little corner of the web."
	/>
	<meta property="og:image" content="/fartcore_datacenter.jpg" />

	<!-- Default theme colour (overwritten by onMount if needed) -->
	<meta name="theme-color" content="#ffffff" />
</svelte:head>

<!--
  We now start rendering visible HTML (and child components).
  Components are used exactly like custom HTML tags.
-->
<Header />

<!--
  MAIN CONTENT
  ✧───────────────────────────────────────────────────────────────✧
  Tailwind CSS utility classes are applied directly in class=""
  attributes.  Dark-mode-specific utilities are prefixed with
  `dark:` – they activate only when the `dark` class is present on
  <html> (handled automatically by many frameworks / user plugins).
-->
<main
	class="prose dark:prose-invert sm:prose-lg
     mx-auto max-w-3xl
     rounded-xl border
     bg-white px-4 py-6 leading-relaxed text-black
     sm:px-8 sm:py-10

     dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
>
	<!-- =============  HERO / INTRO  ============= -->
	<h1>Welcome</h1>

	<p>
		<img
			src="/images/gpu-gardener.webp"
			alt="The GPU gardener tending to the GPUs in the garden"
			class="mx-auto block h-auto w-[max(60vw,120px)] max-w-full sm:w-[max(15vw,120px)]"
		/>
	</p>

	<p>
		Welcome to <strong>gpu.garden</strong> — a beautiful little corner of the web, lovingly hosted
		in the
		<a
			href="/images/fartcore_datacenter.jpg"
			target="_blank"
			rel="noopener noreferrer"
			class="font-medium text-[#f22b00] hover:text-[#ff6747]"
		>
			fartcore datacenter
		</a>, built for members of <strong>TouhouAI</strong>.
	</p>

	<!-- =============  FEATURE LIST  ============= -->
	<ul class="mt-2">
		<!-- Each <li> is a feature / announcement. -->
		<li>
			<b>Want to use Open WebUI?</b>
			<em>
				Feel free to sign up! Once you do, reach out to astro to activate your account — contact
				them via
				<a
					href="mailto:astromahdi@astromahdi.com"
					class="font-medium text-[#f22b00] hover:text-[#ff6747]"
				>
					email
				</a>
				or
				<a
					href="https://discord.com/users/448287828821016587"
					target="_blank"
					rel="noopener noreferrer"
					class="font-medium text-[#f22b00] hover:text-[#ff6747]"
				>
					Discord
				</a>
				<code class="rounded bg-zinc-900 px-2 py-1 font-mono text-sm text-zinc-100">
					astromahdi
				</code>.
			</em>
		</li>

		<li>
			<b>Want access to SwarmUI?</b>
			<em>
				Just ask in the
				<a
					href="https://discord.com/invite/touhouai"
					target="_blank"
					rel="noopener noreferrer"
					class="font-medium text-[#f22b00] hover:text-[#ff6747]"
				>
					TouhouAI Discord
				</a>. Anyone with the
				<code class="rounded bg-zinc-900 px-2 py-1 font-mono text-sm text-zinc-100">
					fartcore
				</code>
				role can grant you access. We’re pretty chill.
			</em>
		</li>
	</ul>

	<!-- =============  RULES  ============= -->
	<h2 class="mt-3 mb-0">Rules</h2>

	<!--
  <details> elements provide a native “accordion”.
  <summary> is always visible; content is revealed on click.
  -->
	<details
		class="mt-1 rounded border bg-zinc-100 p-5 text-sm text-black
       dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
	>
		<summary class="cursor-pointer font-bold">Click to reveal</summary>
		<ol class="list-decimal space-y-2 pl-5">
			<li>No porn-specific models or illegal content (we follow U.S. law)</li>
			<li>No saving that content on the server</li>
			<li>No bypassing filters or restrictions</li>
		</ol>
		<p class="italic">Yes yes this is literally 1984</p>
	</details>

	<!-- =============  LINKS  ============= -->
	<h2 class="mt-3 mb-0">Links</h2>

	<ul class="mt-1 space-y-3 text-sm">
		<!-- 🪴 HOME -->
		<li>
			🪴
			<a href="/" class="font-medium text-[#f22b00] hover:text-[#ff6747]"> gpu.garden </a>
			– homepage
		</li>

		<!-- 🖼️ IMAGE GEN -->
		<li>
			🖼️
			<a
				href="https://swarmui.gpu.garden/"
				target="_blank"
				rel="noopener noreferrer"
				class="font-medium text-[#f22b00] hover:text-[#ff6747]"
			>
				swarmui.gpu.garden
			</a>
			– image generation AI
		</li>

		<!-- 🤖 COMFY BACKEND -->
		<li>
			🤖
			<a
				href="https://swarmui.gpu.garden/ComfyBackendDirect"
				target="_blank"
				rel="noopener noreferrer"
				class="font-medium text-[#f22b00] hover:text-[#ff6747]"
			>
				ComfyBackendDirect
			</a>
			– bare-bones ComfyUI (no SwarmUI) (⚠️ requires login on swarmui.gpu.garden first)
		</li>

		<!-- 📝 TEXT / CHAT -->
		<li>
			📝
			<a
				href="https://oui.gpu.garden/"
				target="_blank"
				rel="noopener noreferrer"
				class="font-medium text-[#f22b00] hover:text-[#ff6747]"
			>
				oui.gpu.garden
			</a>
			– text/chat AI
		</li>

		<!-- Fartgram -->
		<li>
			🖼️
			<a
				href="https://fartgram.gpu.garden/"
				target="_blank"
				rel="noopener noreferrer"
				class="font-medium text-[#f22b00] hover:text-[#ff6747]"
			>
				fartgram.gpu.garden
			</a>
			– A place to fart images onto the internet
		</li>

		<!-- 🧐 PROMPT HISTORY -->
		<li>
			🧐
			<a
				href="https://prompts.gpu.garden/"
				target="_blank"
				rel="noopener noreferrer"
				class="font-medium text-[#f22b00] hover:text-[#ff6747]"
			>
				prompts.gpu.garden
			</a>
			– prompt history
		</li>

		<!-- 📈 USAGE STATS -->
		<li>
			📈
			<a
				href="https://stats.gpu.garden/"
				target="_blank"
				rel="noopener noreferrer"
				class="font-medium text-[#f22b00] hover:text-[#ff6747]"
			>
				stats.gpu.garden
			</a>
			– usage stats
		</li>

		<!-- 🩺 SYSTEM HEALTH -->
		<li>
			🩺
			<a
				href="https://status.gpu.garden/"
				target="_blank"
				rel="noopener noreferrer"
				class="font-medium text-[#f22b00] hover:text-[#ff6747]"
			>
				status.gpu.garden
			</a>
			– system health
		</li>
	</ul>
	<!-- =============  SUPPORT  ============= -->
	<h2 class="mt-3 mb-0">Support</h2>
	<p class="text-sm text-zinc-600 dark:text-zinc-400">
		Help keep the GPUs running! Your support helps us maintain and expand our AI playground.
	</p>

	<div class="mt-4 flex justify-center">
		<script type="text/javascript" src="https://storage.ko-fi.com/cdn/widget/Widget_2.js"></script>
		<script type="text/javascript">
			kofiwidget2.init('Donate for more GPUs', '#72a4f2', 'I2I21FSIGW');
			kofiwidget2.draw();
		</script>
	</div>
</main>

<!-- Footer rendered below the main content -->
<Footer />
