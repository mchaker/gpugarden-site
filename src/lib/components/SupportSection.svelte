<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		// Initialize feather icons if available
		if (typeof feather !== 'undefined') {
			feather.replace();
		}
	});
</script>

<section id="support" class="bg-neutral-900 py-24">
	<div class="container mx-auto px-6 text-center">
		<div
			class="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-yellow-500/20 bg-black/50 p-10"
		>
			<div
				class="absolute top-0 left-0 h-2 w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
			></div>
			<i data-feather="coffee" class="mx-auto mb-6 h-16 w-16 text-yellow-500 opacity-80"></i>
			<h2 class="mb-4 text-3xl font-bold text-white">Help keep the GPUs running!</h2>
			<p class="mb-8 text-lg text-gray-400">
				Your support helps us maintain and expand our AI playground. Every contribution goes
				directly towards hardware upgrades, maintenance, and keeping the services free for everyone.
			</p>
			<a
				href="https://buymeacoffee.com/astromahdi"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex transform items-center justify-center rounded-full bg-yellow-500 px-8 py-3 font-bold text-black transition-all hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-[0_0_30px_rgba(234,179,8,0.4)]"
			>
				Buy Me a Coffee <i data-feather="external-link" class="ml-2 h-4 w-4"></i>
			</a>
		</div>
	</div>
</section>
