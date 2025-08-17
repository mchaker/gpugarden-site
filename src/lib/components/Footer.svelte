<script lang="ts">
	// darkMode store import removed
</script>

<!-- Footer with top margin to push it away from preceding content -->
<footer class="border-t border-yellow-500/30 bg-black/70 px-4 py-8 sm:px-6 lg:px-8">
	<div class="container mx-auto">
		<div class="flex flex-col items-center justify-between md:flex-row">
			<div class="mb-6 flex items-center space-x-2 md:mb-0">
				<img src="/favicon.png" alt="gpu.garden logo" class="h-12 w-12" />
				<span class="title-font gradient-text text-xl font-bold">gpu.garden</span>
			</div>
			<div class="mb-6 flex space-x-6 md:mb-0">
				<a
					href="https://github.com/mchaker/gpugarden-site"
					target="_blank"
					rel="noopener noreferrer"
					class="text-red-600 transition hover:text-red-800 dark:text-gray-400 dark:hover:text-white"
					aria-label="GitHub"
				>
					<i class="fab fa-github text-xl" aria-hidden="true"></i>
				</a>
				<a
					href="https://discord.gg/yw4HGWC2wm"
					target="_blank"
					rel="noopener noreferrer"
					class="text-red-600 transition hover:text-red-800 dark:text-gray-400 dark:hover:text-white"
					aria-label="Discord"
				>
					<i class="fab fa-discord text-xl" aria-hidden="true"></i>
				</a>
				<a
					href="https://buymeacoffee.com/astromahdi"
					target="_blank"
					rel="noopener noreferrer"
					class="text-red-600 transition hover:text-red-800 dark:text-gray-400 dark:hover:text-white"
					aria-label="Buy Me A Coffee"
				>
					<i class="fas fa-coffee text-xl" aria-hidden="true"></i>
				</a>
			</div>
			<div class="text-center text-red-700 md:text-right dark:text-gray-400">
				<p class="text-sm">
					This homepage is built with <a
						href="https://kit.svelte.dev/"
						target="_blank"
						rel="noopener noreferrer"
						class="text-red-600 hover:underline dark:text-yellow-400">SvelteKit</a
					>
					and
					<a
						href="https://tailwindcss.com/"
						target="_blank"
						rel="noopener noreferrer"
						class="text-red-600 hover:underline dark:text-yellow-400">Tailwind CSS</a
					>
					.
				</p>
				<p class="mt-1 text-sm">
					Designed and rebuilt by <a
						href="https://mooshieblob.com/"
						target="_blank"
						rel="noopener noreferrer"
						class="text-red-600 hover:underline dark:text-yellow-400">blob</a
					>
					. gpu.garden is owned and managed by
					<a
						href="https://fartcore.ai/"
						target="_blank"
						rel="noopener noreferrer"
						class="text-red-600 hover:underline dark:text-yellow-400">fartcore</a
					>
					.
				</p>
				<p class="mt-2 text-xs text-red-600 dark:text-gray-500">
					© 2024-2025 gpu.garden | All rights reserved
				</p>
			</div>
		</div>
	</div>
</footer>

<style>
	.gradient-text {
		background: linear-gradient(90deg, #ff5f1f, #ff1d58, #f9cb40);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		background-size: 300% 300%;
		animation: gradient 4s ease-in-out infinite;
	}

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		25% {
			background-position: 100% 50%;
		}
		50% {
			background-position: 200% 50%;
		}
		75% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
