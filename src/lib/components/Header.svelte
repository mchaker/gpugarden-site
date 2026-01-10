<!--
  A modernized header component that matches the card-based design.
  Includes sticky positioning, better mobile responsiveness, and dark mode toggle.
-->

<script lang="ts">
	import { browser } from '$app/environment';
	import { fade, fly } from 'svelte/transition';

	let mobileMenuOpen = false;
	let headerEl: HTMLElement;
	let firstMobileLink: HTMLAnchorElement | null = null;

	function toggleLocalMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	// Move focus into the menu when it opens
	$: if (mobileMenuOpen && browser) {
		queueMicrotask(() => firstMobileLink?.focus());
	}
</script>

<header
	class="sticky top-0 z-50 border-b border-neutral-800 bg-black/90 px-4 py-4 shadow-sm backdrop-blur-lg transition-colors duration-300 sm:px-6 lg:px-8"
	bind:this={headerEl}
>
	<div class="container mx-auto flex items-center justify-between">
		<a href="/" class="flex items-center space-x-2 transition-opacity hover:opacity-80">
			<img src="/favicon.png" alt="gpu.garden logo" class="h-12 w-12" />
			<span class="title-font text-2xl font-bold text-white">gpu.garden</span>
		</a>

		<!-- Group navigation and mobile menu button to right-align them -->
		<div class="flex items-center gap-4">
			<nav id="primary-nav" aria-label="Primary" class="hidden space-x-6 md:flex">
				<a href="/#welcome" class="text-gray-400 transition hover:text-yellow-500">Welcome</a>
				<a href="/#rules" class="text-gray-400 transition hover:text-yellow-500">Rules</a>
				<a href="/#support" class="text-gray-400 transition hover:text-yellow-500">Support</a>
				<a href="/#services" class="text-gray-400 transition hover:text-yellow-500">Services</a>
			</nav>
			<button
				on:click={toggleLocalMenu}
				class="text-gray-400 hover:text-yellow-500 md:hidden"
				aria-label="Toggle mobile menu"
				aria-haspopup="true"
				aria-expanded={mobileMenuOpen}
				aria-controls="mobile-menu-drawer"
			>
				<i class="fas fa-bars text-2xl"></i>
			</button>
		</div>
	</div>
</header>

{#if mobileMenuOpen}
	<!-- Backdrop -->
	<div
		class="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm md:hidden"
		transition:fade={{ duration: 200 }}
		on:click={() => (mobileMenuOpen = false)}
		role="button"
		tabindex="-1"
		on:keydown={() => {}}
	></div>

	<!-- Slide-out Drawer -->
	<div
		id="mobile-menu-drawer"
		class="fixed top-0 right-0 z-[70] h-full w-[80%] max-w-sm border-l border-neutral-800 bg-neutral-900 p-6 shadow-2xl md:hidden"
		transition:fly={{ x: 300, duration: 300 }}
		aria-modal="true"
		role="dialog"
		aria-label="Mobile Navigation"
	>
		<div class="mb-8 flex items-center justify-between">
			<span class="text-lg font-bold text-white">Menu</span>
			<button
				on:click={() => (mobileMenuOpen = false)}
				class="rounded-lg p-2 text-gray-400 transition hover:bg-neutral-800 hover:text-yellow-500"
				aria-label="Close menu"
			>
				<i class="fas fa-times text-xl"></i>
			</button>
		</div>

		<nav class="flex flex-col space-y-2">
			<a
				href="/#welcome"
				bind:this={firstMobileLink}
				on:click={() => (mobileMenuOpen = false)}
				class="rounded-lg px-4 py-3 text-lg font-medium text-gray-300 transition hover:bg-neutral-800 hover:text-yellow-500"
				>Welcome</a
			>
			<a
				href="/#rules"
				on:click={() => (mobileMenuOpen = false)}
				class="rounded-lg px-4 py-3 text-lg font-medium text-gray-300 transition hover:bg-neutral-800 hover:text-yellow-500"
				>Rules</a
			>
			<a
				href="/#support"
				on:click={() => (mobileMenuOpen = false)}
				class="rounded-lg px-4 py-3 text-lg font-medium text-gray-300 transition hover:bg-neutral-800 hover:text-yellow-500"
				>Support</a
			>
			<a
				href="/#services"
				on:click={() => (mobileMenuOpen = false)}
				class="rounded-lg px-4 py-3 text-lg font-medium text-gray-300 transition hover:bg-neutral-800 hover:text-yellow-500"
				>Services</a
			>
		</nav>

		<div class="absolute right-6 bottom-8 left-6">
			<p class="text-center text-xs text-gray-600">gpu.garden mobile</p>
		</div>
	</div>
{/if}

<svelte:window
	on:keydown={(e) => {
		if (e.key === 'Escape' && mobileMenuOpen) mobileMenuOpen = false;
	}}
/>
