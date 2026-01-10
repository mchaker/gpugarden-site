<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		// Initialize feather icons if available
		if (typeof feather !== 'undefined') {
			feather.replace();
		}
	});
</script>

<section id="welcome" class="relative bg-neutral-950 py-24">
	<div class="container mx-auto px-6">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-3xl font-bold text-white md:text-4xl">Welcome to the Garden</h2>
			<div class="mx-auto h-1 w-20 rounded-full bg-yellow-500"></div>
		</div>

		<div class="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
			<!-- Open WebUI Card -->
			<div
				class="group relative rounded-2xl border border-neutral-800 bg-neutral-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500/50"
			>
				<div
					class="absolute top-0 right-0 p-4 opacity-10 transition-opacity group-hover:opacity-20"
				>
					<i data-feather="user" class="h-24 w-24 text-yellow-500"></i>
				</div>
				<div
					class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-800 text-yellow-500 transition-colors group-hover:bg-yellow-500 group-hover:text-black"
				>
					<i data-feather="log-in" class="h-6 w-6"></i>
				</div>
				<h3 class="mb-3 text-2xl font-bold text-white">Open WebUI</h3>
				<p class="mb-6 leading-relaxed text-gray-400">
					Feel free to sign up! Once you do, reach out to astro to activate your account. Unleash
					your creativity with our open interface.
				</p>
				<a
					href="https://swarmui.gpu.garden/"
					class="inline-flex items-center font-semibold text-yellow-500 transition-colors hover:text-yellow-400"
				>
					Sign Up Now <i data-feather="chevron-right" class="ml-1 h-4 w-4"></i>
				</a>
			</div>

			<!-- SwarmUI Card -->
			<div
				class="group relative rounded-2xl border border-neutral-800 bg-neutral-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500/50"
			>
				<div
					class="absolute top-0 right-0 p-4 opacity-10 transition-opacity group-hover:opacity-20"
				>
					<i data-feather="layers" class="h-24 w-24 text-yellow-500"></i>
				</div>
				<div
					class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-800 text-yellow-500 transition-colors group-hover:bg-yellow-500 group-hover:text-black"
				>
					<i data-feather="lock" class="h-6 w-6"></i>
				</div>
				<h3 class="mb-3 text-2xl font-bold text-white">SwarmUI</h3>
				<p class="mb-6 leading-relaxed text-gray-400">
					Just ask in the TouhouAI Discord. Anyone with the <span class="font-bold text-yellow-500"
						>fartcore</span
					> role can grant you access. We're pretty chill.
				</p>
				<a
					href="https://discord.gg/yw4HGWC2wm"
					class="inline-flex items-center font-semibold text-yellow-500 transition-colors hover:text-yellow-400"
				>
					Get Access <i data-feather="chevron-right" class="ml-1 h-4 w-4"></i>
				</a>
			</div>
		</div>
	</div>
</section>
