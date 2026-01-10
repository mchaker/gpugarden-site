<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		// Initialize feather icons if available
		// @ts-ignore
		if (typeof feather !== 'undefined') {
			// @ts-ignore
			feather.replace();
		}
	});
</script>

<section id="rules" class="bg-black py-24">
	<div class="container mx-auto px-6">
		<div class="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
			<div class="max-w-xl">
				<h2 class="mb-4 text-3xl font-bold text-white md:text-4xl">Garden Rules</h2>
				<p class="text-gray-400">
					Please respect these guidelines to keep our community safe and enjoyable for everyone.
				</p>
			</div>
			<div class="hidden text-yellow-500 md:block">
				<i data-feather="shield" class="h-12 w-12 opacity-50"></i>
			</div>
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
			<!-- Rule 1 -->
			<div
				class="rounded-xl border-l-4 border-red-500 bg-neutral-900/50 p-6 transition-colors hover:bg-neutral-900"
			>
				<h4 class="mb-2 flex items-center gap-2 text-lg font-bold text-white">
					<i data-feather="eye-off" class="h-4 w-4 text-red-500"></i> No NSFW Models
				</h4>
				<p class="text-sm text-gray-400">
					We don't condone any activity that is primarily for NSFW purposes. No illegal content (we
					follow U.S. law).
				</p>
			</div>

			<!-- Rule 2 -->
			<div
				class="rounded-xl border-l-4 border-yellow-500 bg-neutral-900/50 p-6 transition-colors hover:bg-neutral-900"
			>
				<h4 class="mb-2 flex items-center gap-2 text-lg font-bold text-white">
					<i data-feather="heart" class="h-4 w-4 text-yellow-500"></i> Be Respectful
				</h4>
				<p class="text-sm text-gray-400">
					Treat others with kindness. No harassment or hate speech. We are here to have fun.
				</p>
			</div>

			<!-- Rule 3 -->
			<div
				class="rounded-xl border-l-4 border-blue-500 bg-neutral-900/50 p-6 transition-colors hover:bg-neutral-900"
			>
				<h4 class="mb-2 flex items-center gap-2 text-lg font-bold text-white">
					<i data-feather="activity" class="h-4 w-4 text-blue-500"></i> Resource Limits
				</h4>
				<p class="text-sm text-gray-400">
					Be mindful of GPU usage. Don't hog resources or bypass filters. Share the garden.
				</p>
			</div>

			<!-- Rule 4 -->
			<div
				class="rounded-xl border-l-4 border-green-500 bg-neutral-900/50 p-6 transition-colors hover:bg-neutral-900"
			>
				<h4 class="mb-2 flex items-center gap-2 text-lg font-bold text-white">
					<i data-feather="copyright" class="h-4 w-4 text-green-500"></i> Creative Commons
				</h4>
				<p class="text-sm text-gray-400">
					Respect copyright. Do not save generated content on the server. Download your art.
				</p>
			</div>
		</div>
	</div>
</section>
