<script lang="ts">
	import { onMount } from 'svelte';

	let showDatacenterModal = false;
	let modalPosition: { x: number; y: number } = { x: 0, y: 0 };
	let scrollY = 0;

	onMount(() => {
		// Initialize feather icons if available
		if (typeof feather !== 'undefined') {
			feather.replace();
		}
	});

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

<svelte:window bind:scrollY />

<section class="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden">
	<!-- Background Gradients/Effects -->
	<div class="absolute inset-0 z-0">
		<div
			class="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-yellow-600 opacity-20 mix-blend-screen blur-[100px] filter"
		></div>
		<div
			class="absolute right-[-10%] bottom-[-10%] h-[500px] w-[500px] rounded-full bg-purple-600 opacity-10 mix-blend-screen blur-[100px] filter"
		></div>
	</div>

	<div
		class="relative z-10 container mx-auto flex flex-col items-center gap-8 px-6 pt-12 lg:flex-row lg:gap-12 lg:pt-0"
	>
		<!-- Text Content -->
		<div class="flex-1 space-y-6 text-center lg:text-left">
			<div
				class="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-xs font-medium tracking-wide text-yellow-400 uppercase sm:text-sm"
			>
				<span class="h-2 w-2 rounded-full bg-yellow-500"></span>
				AI Playground
			</div>

			<h1 class="text-4xl leading-tight font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
				Who would've known <br />
				<span class="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
					>AI image gen</span
				> could be free?
			</h1>

			<p class="mx-auto max-w-2xl text-lg text-gray-400 sm:text-xl lg:mx-0">
				A beautiful little corner of the web for AI enthusiasts, powered by the <a
					href="/datacenter"
					on:mouseenter={handleDatacenterMouseEnter}
					on:mouseleave={handleDatacenterMouseLeave}
					on:mousemove={handleDatacenterMouseMove}
					on:focus={handleDatacenterFocus}
					on:blur={handleDatacenterBlur}
					class="text-yellow-500 underline underline-offset-4 transition-colors hover:text-yellow-400"
					>fartcore datacenter</a
				>.
			</p>

			<div class="flex flex-col justify-center gap-4 pt-2 sm:flex-row sm:pt-4 lg:justify-start">
				<a
					href="https://swarmui.gpu.garden/"
					target="_blank"
					rel="noopener noreferrer"
					class="group relative overflow-hidden rounded-lg bg-yellow-500 px-6 py-3 font-bold text-black shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all hover:scale-105 hover:bg-yellow-400 sm:px-8 sm:py-4"
				>
					<span class="relative z-10 flex items-center justify-center gap-2">
						Explore SwarmUI <i
							data-feather="arrow-right"
							class="h-4 w-4 transition-transform group-hover:translate-x-1"
						></i>
					</span>
				</a>
				<a
					href="https://discord.gg/yw4HGWC2wm"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center justify-center gap-2 rounded-lg border border-neutral-700 bg-neutral-800 px-6 py-3 font-semibold text-white transition-all hover:border-yellow-500/50 hover:bg-neutral-700 sm:px-8 sm:py-4"
				>
					<i data-feather="message-circle" class="h-4 w-4"></i> Join Discord
				</a>
			</div>
		</div>

		<!-- Hero Image -->
		<div class="relative flex w-full flex-1 justify-center lg:justify-end">
			<div class="relative w-full max-w-sm lg:max-w-md">
				<div
					class="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-500/20 to-purple-500/20 blur-3xl"
				></div>
				<a
					href="/gpu-gardener"
					class="group block cursor-pointer"
					aria-label="Meet the GPU Gardener"
				>
					<img
						src="/images/gpu-gardener.webp"
						alt="The GPU gardener tending to the GPUs in the garden"
						class="relative h-auto w-full rounded-2xl border border-neutral-800 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-yellow-500/50 hover:shadow-yellow-500/20"
					/>
				</a>
			</div>
		</div>
	</div>

	<!-- Scroll Indicator -->
	<div
		class="pointer-events-none fixed bottom-8 left-1/2 z-40 -translate-x-1/2 transform transition-opacity duration-300"
		style="opacity: {Math.max(0, 1 - scrollY / 300)}"
		aria-hidden="true"
	>
		<i class="fas fa-chevron-down animate-bounce text-4xl text-yellow-500"></i>
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
