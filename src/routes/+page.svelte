<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>gpu.garden — TouhouAI's Fartcore Datacenter</title>
	<meta
		name="description"
		content="gpu.garden is a cozy AI playground hosted in the fartcore datacenter, made for members of TouhouAI."
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta charset="UTF-8" />
	<meta property="og:title" content="gpu.garden" />
	<meta
		property="og:description"
		content="Built for TouhouAI — welcome to our beautifully weird little corner of the web."
	/>
	<meta property="og:image" content="/fartcore_datacenter.jpg" />
	<meta name="theme-color" content="#0c0a09" />
</svelte:head>

<Header />

<main
	class="prose prose-lg dark:prose-invert mx-auto max-w-3xl rounded-xl border border-zinc-800 bg-zinc-950 px-8 py-10 leading-relaxed text-white"
>
	<h1>Welcome</h1>

	<p>
		Welcome to <strong>gpu.garden</strong> — a beautiful little corner of the web, lovingly hosted
		in the
		<a
			href="/fartcore_datacenter.jpg"
			target="_blank"
			rel="noopener noreferrer"
			class="font-medium text-[#f22b00] hover:text-[#ff6747]">fartcore datacenter</a
		>, built for members of <strong>TouhouAI</strong>.
	</p>

	<ul class="mt-2">
		<li>
			<b>Want to use Open WebUI?</b>
			<em>
				Feel free to sign up! Once you do, reach out to astro to activate your account — contact
				them via
				<a
					href="mailto:astromahdi@astromahdi.com"
					class="font-medium text-[#f22b00] hover:text-[#ff6747]">email</a
				>
				or
				<a
					href="https://discord.com/users/448287828821016587"
					target="_blank"
					rel="noopener noreferrer"
					class="font-medium text-[#f22b00] hover:text-[#ff6747]">Discord</a
				>
				<code class="rounded bg-zinc-900 px-2 py-1 font-mono text-sm text-zinc-100">astromahdi</code
				>.
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
					class="font-medium text-[#f22b00] hover:text-[#ff6747]">TouhouAI Discord</a
				>. Anyone with the
				<code class="rounded bg-zinc-900 px-2 py-1 font-mono text-sm text-zinc-100">fartcore</code>
				role can grant you access. We’re pretty chill.
			</em>
		</li>
	</ul>

	<h2 class="mt-3 mb-0">Rules</h2>

	<details class="mt-1 rounded border border-zinc-700 bg-zinc-900 p-5 text-sm">
		<summary class="cursor-pointer font-bold">Click to reveal</summary>
		<ol class="list-decimal space-y-2 pl-5">
			<li>No porn-specific models or illegal content (we follow U.S. law)</li>
			<li>No saving that content on the server</li>
			<li>No bypassing filters or restrictions</li>
		</ol>
		<p class="italic">Yes yes this is literally 1984</p>
	</details>

	<h2 class="mt-3 mb-0">Links</h2>

	<ul class="mt-1 space-y-3 text-sm">
		<li>
			🪴 <a href="/" class="font-medium text-[#f22b00] hover:text-[#ff6747]">gpu.garden</a> – homepage
		</li>
		<li>
			🖼️ <a
				href="https://swarmui.gpu.garden/"
				target="_blank"
				rel="noopener noreferrer"
				class="font-medium text-[#f22b00] hover:text-[#ff6747]">swarmui.gpu.garden</a
			> – image generation AI
		</li>
		<li>
			📝 <a
				href="https://oui.gpu.garden/"
				target="_blank"
				rel="noopener noreferrer"
				class="font-medium text-[#f22b00] hover:text-[#ff6747]">oui.gpu.garden</a
			> – text/chat AI
		</li>
		<li>
			🧐 <a
				href="https://prompts.gpu.garden/"
				target="_blank"
				rel="noopener noreferrer"
				class="font-medium text-[#f22b00] hover:text-[#ff6747]">prompts.gpu.garden</a
			> – prompt history
		</li>
		<li>
			📈 <a
				href="https://stats.gpu.garden/"
				target="_blank"
				rel="noopener noreferrer"
				class="font-medium text-[#f22b00] hover:text-[#ff6747]">stats.gpu.garden</a
			> – usage stats
		</li>
		<li>
			🩺 <a
				href="https://status.gpu.garden/"
				target="_blank"
				rel="noopener noreferrer"
				class="font-medium text-[#f22b00] hover:text-[#ff6747]">status.gpu.garden</a
			> – system health
		</li>
	</ul>
</main>

<Footer />
