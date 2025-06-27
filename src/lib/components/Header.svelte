<!--
  A modernized header component that matches the card-based design.
  Includes sticky positioning, better mobile responsiveness, and dark mode toggle.
-->

<script lang="ts">
	let mobileMenuOpen = false;

	function toggleLocalMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<header
	class="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 px-4 py-4 shadow-sm backdrop-blur-lg transition-colors duration-300 sm:px-6 lg:px-8"
>
	<div class="container mx-auto flex items-center justify-between">
		<div class="flex items-center space-x-2">
			<img src="/favicon.png" alt="gpu.garden logo" class="h12 w-12" />
			<h1 class="title-font gradient-text text-2xl font-bold">gpu.garden</h1>
		</div>

		<!-- Group navigation and mobile menu button to right-align them -->
		<div class="flex items-center gap-4">
			<nav class="hidden space-x-6 md:flex">
				<a href="#welcome" class="text-zinc-300 transition hover:text-white">Welcome</a>
				<a href="#rules" class="text-zinc-300 transition hover:text-white">Rules</a>
				<a href="#support" class="text-zinc-300 transition hover:text-white">Support</a>
				<a href="#services" class="text-zinc-300 transition hover:text-white">Services</a>
			</nav>
			<button
				on:click={toggleLocalMenu}
				class="text-zinc-300 hover:text-white md:hidden"
				aria-label="Toggle mobile menu"
			>
				<i class="fas fa-bars text-2xl"></i>
			</button>
		</div>
	</div>

	{#if mobileMenuOpen}
		<!-- Right-align the mobile menu links -->
		<div class="mt-4 md:hidden">
			<a
				href="#welcome"
				on:click={() => (mobileMenuOpen = false)}
				class="block py-2 text-right text-zinc-300 transition hover:text-white">Welcome</a
			>
			<a
				href="#rules"
				on:click={() => (mobileMenuOpen = false)}
				class="block py-2 text-right text-zinc-300 transition hover:text-white">Rules</a
			>
			<a
				href="#support"
				on:click={() => (mobileMenuOpen = false)}
				class="block py-2 text-right text-zinc-300 transition hover:text-white">Support</a
			>
			<a
				href="#services"
				on:click={() => (mobileMenuOpen = false)}
				class="block py-2 text-right text-zinc-300 transition hover:text-white">Services</a
			>
		</div>
	{/if}
</header>

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
