<script lang="ts">
	let showDatacenterModal = false;
	let modalPosition: { x: number; y: number } = { x: 0, y: 0 };

	function handleDatacenterMouseEnter(event: MouseEvent) {
		showDatacenterModal = true;
		updateModalPosition(event);
	}

	function handleDatacenterMouseLeave() {
		showDatacenterModal = false;
	}

	function handleDatacenterMouseMove(event: MouseEvent) {
		if (showDatacenterModal) {
			updateModalPosition(event);
		}
	}

	function handleDatacenterFocus() {
		showDatacenterModal = true;
		// Place tooltip near the link when focused
		modalPosition = { x: 20, y: 20 };
	}

	function handleDatacenterBlur() {
		showDatacenterModal = false;
	}

	function updateModalPosition(event: MouseEvent) {
		modalPosition = {
			x: event.clientX + 10,
			y: event.clientY - 20 // position above cursor
		};
	}
</script>

<section class="flex-grow px-4 py-16 sm:px-6 sm:py-20 md:py-32 lg:px-8">
	<div class="container mx-auto flex flex-col items-center justify-between lg:flex-row">
		<div class="mb-8 text-stone-900 sm:mb-10 lg:mb-0 lg:w-1/2 dark:text-white">
			<h2
				class="title-font mb-4 text-2xl font-bold text-stone-900 sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl dark:text-white"
			>
				Who would've known
				<span class="gradient-text drop-shadow sm:drop-shadow-md dark:drop-shadow-none"
					>AI image gen</span
				>
				could be free ???
			</h2>
			<p class="mb-6 text-sm text-stone-900 sm:mb-8 sm:text-base dark:text-zinc-300">
				A beautiful little corner of the web for AI enthusiasts, powered by the
				<a
					href="/datacenter"
					class="text-stone-900 underline decoration-red-500 hover:text-black dark:text-red-400 dark:hover:text-red-300"
					on:mouseenter={handleDatacenterMouseEnter}
					on:mouseleave={handleDatacenterMouseLeave}
					on:mousemove={handleDatacenterMouseMove}
					on:focus={handleDatacenterFocus}
					on:blur={handleDatacenterBlur}
					aria-describedby="datacenter-tooltip">fartcore datacenter</a
				>.
				<span class="sr-only" id="new-tab-note">(opens in a new tab)</span>
			</p>
			<div class="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
				<a
					href="https://swarmui.gpu.garden/"
					target="_blank"
					rel="noopener noreferrer"
					aria-describedby="new-tab-note"
					class="btn-primary rounded-full px-4 py-2 text-center text-sm font-medium sm:px-6 sm:py-3 sm:text-base"
				>
					Explore SwarmUI <i class="fas fa-arrow-right ml-2" aria-hidden="true"></i>
				</a>
				<a
					href="https://discord.gg/yw4HGWC2wm"
					target="_blank"
					rel="noopener noreferrer"
					aria-describedby="new-tab-note"
					class="rounded-full border border-zinc-200 bg-white px-4 py-2 text-center text-sm font-semibold text-zinc-900 shadow-sm transition-all hover:bg-zinc-50 hover:text-red-600 hover:shadow sm:px-6 sm:py-3 sm:text-base dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800 dark:hover:text-red-400"
				>
					Join Discord <i class="fab fa-discord ml-2" aria-hidden="true"></i>
				</a>
			</div>
		</div>
		<div class="flex justify-center lg:w-1/2">
			<div class="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
				<div
					class="absolute -top-6 -left-6 h-20 w-20 rounded-full bg-red-500 opacity-20 blur-2xl sm:-top-8 sm:-left-8 sm:h-24 sm:w-24 md:-top-10 md:-left-10 md:h-32 md:w-32 md:blur-3xl"
				></div>
				<div
					class="absolute -right-6 -bottom-6 h-20 w-20 rounded-full bg-amber-400 opacity-20 blur-2xl sm:-right-8 sm:-bottom-8 sm:h-24 sm:w-24 md:-right-10 md:-bottom-10 md:h-32 md:w-32 md:blur-3xl"
				></div>
				<a href="/gpu-gardener">
					<img
						src="/images/gpu-gardener.webp"
						alt="The GPU gardener tending to the GPUs in the garden"
						class="floating relative z-10 h-auto w-full cursor-pointer rounded-xl object-cover shadow-xl transition-transform hover:scale-105 sm:rounded-2xl sm:shadow-2xl"
					/>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Datacenter Hover Modal -->
{#if showDatacenterModal}
	<div
		class="pointer-events-none fixed z-[9999]"
		style="left: {modalPosition.x}px; top: {modalPosition.y}px;"
		role="tooltip"
		id="datacenter-tooltip"
		aria-hidden={showDatacenterModal ? 'false' : 'true'}
	>
		<div class="modal-image-container">
			<img
				src="/images/fartcore_datacenter.jpg"
				alt="The fartcore datacenter"
				class="max-h-64 max-w-xs rounded-lg border-2 border-red-400/50 shadow-2xl"
			/>
		</div>
	</div>
{/if}

<style>
	.modal-image-container {
		animation: modalFadeIn 0.2s ease-out;
		transform: translate(-50%, -100%);
	}

	@keyframes modalFadeIn {
		from {
			opacity: 0;
			transform: translate(-50%, -100%) scale(0.8);
		}
		to {
			opacity: 1;
			transform: translate(-50%, -100%) scale(1);
		}
	}
</style>
