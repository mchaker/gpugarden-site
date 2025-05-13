<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />

<main
	class="prose dark:prose-invert mx-auto my-8 max-w-3xl rounded-xl border border-zinc-800 bg-zinc-950 p-6 text-white"
>
	<h1>Welcome</h1>
	<p>
		Welcome to <strong>gpu.garden</strong> — a beautiful little corner of the web, lovingly hosted
		in the
		<a
			href="/fartcore_datacenter.jpg"
			target="_blank"
			class="font-medium text-[#f22b00] hover:text-[#ff6747]">fartcore datacenter</a
		>, built for members of <strong>TouhouAI</strong>.
	</p>

	<ul>
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
					class="font-medium text-[#f22b00] hover:text-[#ff6747]">Discord</a
				>
				(<code>astromahdi</code>).
			</em>
		</li>
		<li>
			<b>Want access to SwarmUI?</b>
			<em>
				Just ask in the
				<a
					href="https://discord.com/invite/touhouai"
					target="_blank"
					class="font-medium text-[#f22b00] hover:text-[#ff6747]">TouhouAI Discord</a
				>. Anyone with the <code>fartcore</code> role can grant you access. We’re pretty chill.
			</em>
		</li>
	</ul>

	<h2>Rules</h2>
	<details class="rounded border border-zinc-700 bg-zinc-900 p-4 text-sm">
		<summary class="cursor-pointer font-bold">Click to reveal</summary>
		<ol class="mt-2 list-decimal pl-4">
			<li>No porn-specific models or illegal content (we follow U.S. law)</li>
			<li>No saving that content on the server</li>
			<li>No bypassing filters or restrictions</li>
		</ol>
		<p class="mt-2 italic">Yes yes this is literally 1984</p>
	</details>

	<h2>Links</h2>
	<ul class="space-y-2 text-sm">
		<li>
			🪴 <a href="/" class="font-medium text-[#f22b00] hover:text-[#ff6747]">gpu.garden</a> – homepage
			(this beautiful page!)
		</li>
		<li>
			🖼️ <a
				href="https://swarmui.gpu.garden/"
				target="_blank"
				class="font-medium text-[#f22b00] hover:text-[#ff6747]">swarmui.gpu.garden</a
			> – image generation AI
		</li>
		<li>
			📝 <a
				href="https://oui.gpu.garden/"
				target="_blank"
				class="font-medium text-[#f22b00] hover:text-[#ff6747]">oui.gpu.garden</a
			> – chat AI
		</li>
		<li>
			🧐 <a
				href="https://prompts.gpu.garden/"
				target="_blank"
				class="font-medium text-[#f22b00] hover:text-[#ff6747]">prompts.gpu.garden</a
			> – prompt history from the people
		</li>
		<li>
			📈 <a
				href="https://stats.gpu.garden/"
				target="_blank"
				class="font-medium text-[#f22b00] hover:text-[#ff6747]">stats.gpu.garden</a
			> – witness the prompting
		</li>
		<li>
			🩺 <a
				href="https://status.gpu.garden/"
				target="_blank"
				class="font-medium text-[#f22b00] hover:text-[#ff6747]">status.gpu.garden</a
			> – system health (subscribe for alerts!)
		</li>
	</ul>
</main>

<Footer />
