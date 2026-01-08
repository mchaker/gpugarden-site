<!--
  A modernized header component that matches the card-based design.
  Includes sticky positioning, better mobile responsiveness, and dark mode toggle.
-->

<script lang="ts">
	import { browser } from '$app/environment';
	import { darkMode, themeMode, toggleTheme } from '$lib/stores/theme';

	let mobileMenuOpen = false;
	let headerEl: HTMLElement;
	let firstMobileLink: HTMLAnchorElement | null = null;

	function toggleLocalMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	// Close on outside click
	const handleWindowClick = (e: MouseEvent) => {
		if (!mobileMenuOpen) return;
		const target = e.target as Node | null;
		if (target && headerEl && !headerEl.contains(target)) {
			mobileMenuOpen = false;
		}
	};

	// Move focus into the menu when it opens
	$: if (mobileMenuOpen && browser) {
		queueMicrotask(() => firstMobileLink?.focus());
	}
</script>

<a href="#main-content" class="skip-link">Skip to main content</a>

<header
	class="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 px-4 py-4 shadow-sm backdrop-blur-lg transition-colors duration-300 sm:px-6 lg:px-8 dark:border-zinc-800 dark:bg-zinc-950/90"
	bind:this={headerEl}
>
	<div class="container mx-auto flex items-center justify-between">
		<div class="flex items-center space-x-2">
			<img src="/favicon.png" alt="gpu.garden logo" class="h-12 w-12" />
			<div class="title-font gradient-text text-2xl font-bold">gpu.garden</div>
		</div>

		<!-- Group navigation and mobile menu button to right-align them -->
		<div class="flex items-center gap-4">
			<nav id="primary-nav" aria-label="Primary" class="hidden space-x-6 md:flex">
				<a
					href="/#welcome"
					class="text-zinc-600 transition hover:text-red-600 dark:text-zinc-300 dark:hover:text-red-400"
					>Welcome</a
				>
				<a
					href="/#rules"
					class="text-zinc-600 transition hover:text-red-600 dark:text-zinc-300 dark:hover:text-red-400"
					>Rules</a
				>
				<a
					href="/#support"
					class="text-zinc-600 transition hover:text-red-600 dark:text-zinc-300 dark:hover:text-red-400"
					>Support</a
				>
				<a
					href="/#services"
					class="text-zinc-600 transition hover:text-red-600 dark:text-zinc-300 dark:hover:text-red-400"
					>Services</a
				>
			</nav>
			<button
				on:click={toggleLocalMenu}
				class="text-zinc-600 hover:text-red-600 md:hidden dark:text-zinc-300 dark:hover:text-white"
				aria-label="Toggle mobile menu"
				aria-haspopup="true"
				aria-expanded={mobileMenuOpen}
				aria-controls="primary-nav"
			>
				<i class="fas fa-bars text-2xl"></i>
			</button>

			<!-- Dark mode toggle -->
			<button
				class="ml-2 rounded p-2 text-zinc-600 hover:text-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 dark:text-zinc-300 dark:hover:text-red-400"
				aria-label="Toggle color theme"
				aria-pressed={$darkMode}
				on:click={toggleTheme}
				title={$themeMode === 'system'
					? 'System theme'
					: $themeMode === 'dark'
						? 'Dark mode'
						: 'Light mode'}
			>
				{#if $themeMode === 'system'}
					<i class="fas fa-desktop" aria-hidden="true"></i>
				{:else if $themeMode === 'dark'}
					<i class="fas fa-moon" aria-hidden="true"></i>
				{:else}
					<i class="fas fa-sun" aria-hidden="true"></i>
				{/if}
			</button>
		</div>
	</div>

	{#if mobileMenuOpen}
		<!-- Right-align the mobile menu links -->
		<div class="mt-4 md:hidden">
			<a
				href="/#welcome"
				bind:this={firstMobileLink}
				on:click={() => (mobileMenuOpen = false)}
				class="block py-2 text-right text-zinc-600 transition hover:text-red-600 dark:text-zinc-300 dark:hover:text-red-400"
				>Welcome</a
			>
			<a
				href="/#rules"
				on:click={() => (mobileMenuOpen = false)}
				class="block py-2 text-right text-zinc-600 transition hover:text-red-600 dark:text-zinc-300 dark:hover:text-red-400"
				>Rules</a
			>
			<a
				href="/#support"
				on:click={() => (mobileMenuOpen = false)}
				class="block py-2 text-right text-zinc-600 transition hover:text-red-600 dark:text-zinc-300 dark:hover:text-red-400"
				>Support</a
			>
			<a
				href="/#services"
				on:click={() => (mobileMenuOpen = false)}
				class="block py-2 text-right text-zinc-600 transition hover:text-red-600 dark:text-zinc-300 dark:hover:text-red-400"
				>Services</a
			>
		</div>
	{/if}
</header>

<svelte:window
	on:click={handleWindowClick}
	on:keydown={(e) => {
		if (e.key === 'Escape' && mobileMenuOpen) mobileMenuOpen = false;
	}}
/>
