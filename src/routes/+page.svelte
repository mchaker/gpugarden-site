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

	// State for interactive elements
	let rulesOpen = false;

	// Remove the theme detection from here since it's now handled by the store
	onMount(() => {
		// Any other initialization code can go here
	});

	// Function to open image in new tab
	function openImage(src: string) {
		window.open(src, '_blank');
	}
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

	<!-- Add Font Awesome for icons -->
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
	/>
</svelte:head>

<!-- Keep existing Header component -->
<Header />

<!-- Hero Section -->
<section
	class="bg-gradient-to-br from-green-50 to-blue-50 py-12 dark:from-gray-800 dark:to-gray-700"
>
	<div class="fade-in container mx-auto px-4 text-center">
		<h2 class="gradient-text mb-6 text-4xl font-bold md:text-5xl">
			Who would've known AI image gen could be free ???
		</h2>
		<div class="mx-auto max-w-3xl">
			<img
				src="/images/gpu-gardener.webp"
				alt="The GPU gardener tending to the GPUs in the garden"
				class="mx-auto w-full max-w-md cursor-pointer rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
				on:click={() => openImage('/images/gpu-gardener.webp')}
			/>
		</div>
	</div>
</section>

<!-- Main Content -->
<main class="container mx-auto space-y-12 px-4 py-12">
	<!-- Welcome Section -->
	<section class="fade-in rounded-xl bg-white p-6 shadow-md md:p-8 dark:bg-zinc-900">
		<h2 class="mb-6 flex items-center text-2xl font-bold text-green-600 dark:text-green-400">
			<span class="mr-2">🌱</span> Welcome
		</h2>
		<p class="mb-6 text-lg dark:text-zinc-200">
			Welcome to <span class="font-bold text-green-600 dark:text-green-400">gpu.garden</span> — a
			beautiful little corner of the web, lovingly hosted in the
			<a
				href="/images/fartcore_datacenter.jpg"
				class="text-blue-500 hover:underline"
				target="_blank"
				rel="noopener noreferrer">fartcore datacenter</a
			>, built for members of
			<span class="font-bold text-purple-600 dark:text-purple-400">TouhouAI</span>.
		</p>

		<div class="mt-8 grid gap-6 md:grid-cols-2">
			<div class="card-hover rounded-lg bg-green-50 p-6 dark:bg-gray-800">
				<h3 class="mb-3 flex items-center text-lg font-bold dark:text-zinc-200">
					<span class="mr-2">📝</span> Want to use Open WebUI?
				</h3>
				<p class="mb-4 dark:text-zinc-300">
					Feel free to sign up! Once you do, reach out to astro to activate your account.
				</p>
				<div class="flex flex-wrap gap-3">
					<a
						href="mailto:astromahdi@astromahdi.com"
						class="flex items-center rounded-md bg-green-500 px-4 py-2 text-white transition hover:bg-green-600"
					>
						<i class="fas fa-envelope mr-2"></i> Email
					</a>
					<a
						href="https://discord.com/users/448287828821016587"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center rounded-md bg-indigo-500 px-4 py-2 text-white transition hover:bg-indigo-600"
					>
						<i class="fab fa-discord mr-2"></i> Discord
					</a>
				</div>
			</div>

			<div class="card-hover rounded-lg bg-blue-50 p-6 dark:bg-gray-800">
				<h3 class="mb-3 flex items-center text-lg font-bold dark:text-zinc-200">
					<span class="mr-2">🖼️</span> Want access to SwarmUI?
				</h3>
				<p class="mb-4 dark:text-zinc-300">
					Just ask in the TouhouAI Discord. Anyone with the <code
						class="rounded bg-gray-200 px-2 py-1 dark:bg-zinc-700 dark:text-zinc-200">fartcore</code
					> role can grant you access. We're pretty chill.
				</p>
				<a
					href="https://discord.com/invite/touhouai"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center rounded-md bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
				>
					<i class="fab fa-discord mr-2"></i> Join Discord
				</a>
			</div>
		</div>
	</section>

	<!-- Rules Section -->
	<section class="fade-in rounded-xl bg-white p-6 shadow-md md:p-8 dark:bg-zinc-900">
		<h2 class="mb-6 flex items-center text-2xl font-bold text-red-500 dark:text-red-400">
			<span class="mr-2">📜</span> Rules
		</h2>

		<button
			on:click={() => (rulesOpen = !rulesOpen)}
			class="mb-4 inline-flex cursor-pointer items-center rounded-md bg-red-500 px-4 py-2 text-white transition hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700"
		>
			<span class="mr-2">Click to reveal</span>
			<i class="fas fa-chevron-down transition-transform duration-300" class:rotate-180={rulesOpen}
			></i>
		</button>

		<div
			class="overflow-hidden rounded-md bg-red-50 transition-all duration-300 dark:bg-red-900/30"
			style={`max-height: ${rulesOpen ? '500px' : '0'}; opacity: ${rulesOpen ? '1' : '0'}; padding: ${rulesOpen ? '1rem' : '0 1rem'}`}
		>
			<ol class="list-decimal space-y-3 pl-5 dark:text-zinc-200">
				<li>No porn-specific models or illegal content (we follow U.S. law)</li>
				<li>No saving that content on the server</li>
				<li>No bypassing filters or restrictions</li>
			</ol>
			<p class="mt-4 text-gray-600 italic dark:text-gray-400">Yes yes this is literally 1984</p>
		</div>
	</section>

	<!-- Links Section -->
	<section class="fade-in">
		<h2 class="mb-6 flex items-center text-2xl font-bold text-purple-600 dark:text-purple-400">
			<span class="mr-2">🔗</span> Links
		</h2>

		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			<a
				href="/"
				class="card-hover flex items-center space-x-3 rounded-lg bg-white p-4 shadow transition hover:bg-gray-50 dark:bg-zinc-800 dark:hover:bg-zinc-700"
			>
				<span class="text-2xl">🪴</span>
				<div>
					<h3 class="font-bold dark:text-zinc-200">gpu.garden</h3>
					<p class="text-sm text-gray-500 dark:text-gray-400">homepage</p>
				</div>
			</a>

			<a
				href="https://swarmui.gpu.garden/"
				target="_blank"
				rel="noopener noreferrer"
				class="card-hover flex items-center space-x-3 rounded-lg bg-white p-4 shadow transition hover:bg-gray-50 dark:bg-zinc-800 dark:hover:bg-zinc-700"
			>
				<span class="text-2xl">🖼️</span>
				<div>
					<h3 class="font-bold dark:text-zinc-200">swarmui.gpu.garden</h3>
					<p class="text-sm text-gray-500 dark:text-gray-400">image generation AI</p>
				</div>
			</a>

			<a
				href="https://swarmui.gpu.garden/ComfyBackendDirect"
				target="_blank"
				rel="noopener noreferrer"
				class="card-hover flex items-center space-x-3 rounded-lg bg-white p-4 shadow transition hover:bg-gray-50 dark:bg-zinc-800 dark:hover:bg-zinc-700"
			>
				<span class="text-2xl">🤖</span>
				<div>
					<h3 class="font-bold dark:text-zinc-200">ComfyBackendDirect</h3>
					<p class="text-sm text-gray-500 dark:text-gray-400">
						bare-bones ComfyUI (⚠️ requires login)
					</p>
				</div>
			</a>

			<a
				href="https://oui.gpu.garden/"
				target="_blank"
				rel="noopener noreferrer"
				class="card-hover flex items-center space-x-3 rounded-lg bg-white p-4 shadow transition hover:bg-gray-50 dark:bg-zinc-800 dark:hover:bg-zinc-700"
			>
				<span class="text-2xl">📝</span>
				<div>
					<h3 class="font-bold dark:text-zinc-200">oui.gpu.garden</h3>
					<p class="text-sm text-gray-500 dark:text-gray-400">text/chat AI</p>
				</div>
			</a>

			<a
				href="https://fartgram.gpu.garden/"
				target="_blank"
				rel="noopener noreferrer"
				class="card-hover flex items-center space-x-3 rounded-lg bg-white p-4 shadow transition hover:bg-gray-50 dark:bg-zinc-800 dark:hover:bg-zinc-700"
			>
				<span class="text-2xl">🖼️</span>
				<div>
					<h3 class="font-bold dark:text-zinc-200">fartgram.gpu.garden</h3>
					<p class="text-sm text-gray-500 dark:text-gray-400">
						A place to fart images onto the internet
					</p>
				</div>
			</a>

			<a
				href="https://prompts.gpu.garden/"
				target="_blank"
				rel="noopener noreferrer"
				class="card-hover flex items-center space-x-3 rounded-lg bg-white p-4 shadow transition hover:bg-gray-50 dark:bg-zinc-800 dark:hover:bg-zinc-700"
			>
				<span class="text-2xl">🧐</span>
				<div>
					<h3 class="font-bold dark:text-zinc-200">prompts.gpu.garden</h3>
					<p class="text-sm text-gray-500 dark:text-gray-400">prompt history</p>
				</div>
			</a>

			<a
				href="https://stats.gpu.garden/"
				target="_blank"
				rel="noopener noreferrer"
				class="card-hover flex items-center space-x-3 rounded-lg bg-white p-4 shadow transition hover:bg-gray-50 dark:bg-zinc-800 dark:hover:bg-zinc-700"
			>
				<span class="text-2xl">📈</span>
				<div>
					<h3 class="font-bold dark:text-zinc-200">stats.gpu.garden</h3>
					<p class="text-sm text-gray-500 dark:text-gray-400">usage stats</p>
				</div>
			</a>

			<a
				href="https://status.gpu.garden/"
				target="_blank"
				rel="noopener noreferrer"
				class="card-hover flex items-center space-x-3 rounded-lg bg-white p-4 shadow transition hover:bg-gray-50 dark:bg-zinc-800 dark:hover:bg-zinc-700"
			>
				<span class="text-2xl">🩺</span>
				<div>
					<h3 class="font-bold dark:text-zinc-200">status.gpu.garden</h3>
					<p class="text-sm text-gray-500 dark:text-gray-400">system health</p>
				</div>
			</a>
		</div>
	</section>

	<!-- Support Section -->
	<section class="fade-in rounded-xl bg-white p-6 shadow-md md:p-8 dark:bg-zinc-900">
		<h2 class="mb-6 flex items-center text-2xl font-bold text-yellow-600 dark:text-yellow-400">
			<span class="mr-2">💖</span> Support
		</h2>

		<p class="mb-6 dark:text-zinc-200">
			Help keep the GPUs running! Your support helps us maintain and expand our AI playground.
		</p>

		<div class="mt-4 mb-6 flex justify-center">
			<script
				type="text/javascript"
				src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
				data-name="bmc-button"
				data-slug="astromahdi"
				data-color="#5F7FFF"
				data-emoji="🖥️"
				data-font="Comic"
				data-text="help buy share server parts"
				data-outline-color="#000000"
				data-font-color="#ffffff"
				data-coffee-color="#FFDD00"
			>
			</script>
		</div>
	</section>
</main>

<!-- Keep existing Footer component -->
<Footer />

<style>
    .fade-in {
        animation: fadeIn 1s ease-in-out;
    }
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    .gradient-text {
        background: linear-gradient(45deg, #4ade80, #3b82f6, #a855f7);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }
    .card-hover:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
    }
    
    /* Override the global link color for buttons with text stroke */
    a.bg-green-500,
    a.bg-indigo-500,
    a.bg-blue-500 {
        color: white !important;
        text-decoration: none;
        text-shadow: 
            -1px -1px 0 #000,
            1px -1px 0 #000,
            -1px 1px 0 #000,
            1px 1px 0 #000;
        font-weight: 600; /* Make text slightly bolder for better visibility */
    }
    
    a.bg-green-500:hover,
    a.bg-indigo-500:hover,
    a.bg-blue-500:hover {
        color: white !important;
        text-decoration: none;
        text-shadow: 
            -1px -1px 0 #000,
            1px -1px 0 #000,
            -1px 1px 0 #000,
            1px 1px 0 #000;
    }
</style>
