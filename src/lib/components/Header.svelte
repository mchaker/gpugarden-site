<!--
  A very small, self-contained header component.

  It does not import anything; everything lives in this single file.
  SvelteKit will treat the <script>, markup, and <style> sections
  similarly to plain Svelte – there is no extra boilerplate.
-->

<header class="bg-white p-2 text-zinc-900 dark:bg-black dark:text-zinc-100">
	<div class="overflow-hidden">
		<div class="flex justify-center">
			<div class="animate-wiggle flex items-center gap-2 text-2xl font-bold">
				<img src="/favicon.png" alt="gpu.garden logo" class="h-11 w-11" />
				<span>gpu.garden</span>
			</div>
		</div>
	</div>

	<p class="mt-1 text-center text-sm text-zinc-500 dark:text-zinc-400">
		Who would've known AI image gen could be free ???
	</p>

	<nav class="mt-4 flex flex-wrap justify-center gap-4 text-sm">
		<a href="/" class="hover:underline">🪴 Home</a>
		<a
			href="https://swarmui.gpu.garden/"
			target="_blank"
			rel="noopener noreferrer"
			class="hover:underline">🖼️ SwarmUI</a
		>
		<a
			href="https://oui.gpu.garden/"
			target="_blank"
			rel="noopener noreferrer"
			class="hover:underline">📝 Open WebUI</a
		>
		<a
			href="https://status.gpu.garden/"
			target="_blank"
			rel="noopener noreferrer"
			class="hover:underline">🩺 Status</a
		>
	</nav>
</header>

<style>
	@keyframes wiggle {
		from {
			transform: translateX(-5vw);
		}
		to {
			transform: translateX(5vw);
		}
	}

	.animate-wiggle {
		animation: wiggle 2s ease-in-out infinite alternate;
	}
</style>
