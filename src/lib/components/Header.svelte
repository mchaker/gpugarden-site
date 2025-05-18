<!--
  A very small, self-contained header component.

  It does not import anything; everything lives in this single file.
  SvelteKit will treat the <script>, markup, and <style> sections
  similarly to plain Svelte – there is no extra boilerplate.
-->

<!--
  Outer <header>
  --------------
  • bg-white  / dark:bg-black   – Tailwind utility classes
    switch background colours automatically when the
    'dark' class is present on <html>.
  • p-2                       – 0.5 rem padding on all sides.
  • text-zinc-900 / dark:text-zinc-100 – text colour for light & dark.
-->
<header class="bg-white p-2 text-zinc-900 dark:bg-black dark:text-zinc-100">
	<!--
	  The overflow-hidden container prevents the “wiggle” animation
	  from showing scrollbars when it moves past the header edges.
	-->
	<div class="overflow-hidden">
		<!-- Flex helps us centre the logo horizontally. -->
		<div class="flex justify-center">
			<!--
			  animate-wiggle – we define this class below in <style>.
			  flex items-center gap-2 – put the image & text on one row
			  and give them a small gap.
			  text-2xl font-bold – Tailwind for font size / weight.
			-->
			<div class="animate-wiggle flex items-center gap-2 text-2xl font-bold">
				<!--
				  The favicon placed next to the brand name.
				  SvelteKit will copy /favicon.png as-is to the final build.
				-->
				<img src="/favicon.png" alt="gpu.garden logo" class="h-11 w-11" />
				<span>gpu.garden</span>
			</div>
		</div>
	</div>

	<!--
	  A tagline.
	  mt-1 – margin-top: 0.25 rem
	  text-center – centre-aligned text.
	  text-sm – small font size.
	-->
	<p class="mt-1 text-center text-sm text-zinc-500 dark:text-zinc-400">
		Who would've known AI image gen could be free ???
	</p>

	<!--
	  Navigation
	  ----------
	  flex flex-wrap justify-center – put links on one row, allow wrap
	  on narrow screens, and centre them.
	  gap-4 – 1 rem gap between each link.
	-->
	<nav class="mt-4 flex flex-wrap justify-center gap-4 text-sm">
		<!--
		  All <a> tags get hover:underline to show a subtle underline
		  only on hover.
		-->
		<a href="/" class="hover:underline">🪴 Home</a>
		<!--
		  External links open in a new tab (target="_blank").
		  ⚠️ Consider also adding rel="noopener noreferrer" for security.
		-->
		<a href="https://swarmui.gpu.garden/" target="_blank" class="hover:underline"
			>🖼️ SwarmUI</a
		>
		<a href="https://oui.gpu.garden/" target="_blank" class="hover:underline"
			>📝 Open WebUI</a
		>
		<a href="https://status.gpu.garden/" target="_blank" class="hover:underline"
			>🩺 Status</a
		>
	</nav>
</header>

<style>
	/* -----------------------------------------------------------
	   Animation
	   -----------------------------------------------------------
	   Plain CSS keyframes; Svelte will automatically scope the
	   class names so they don't leak outside this component.
	*/
	@keyframes wiggle {
		from {
			/* Move 5 vw to the left (viewport-width units). */
			transform: translateX(-5vw);
		}
		to {
			/* Move 5 vw to the right. */
			transform: translateX(5vw);
		}
	}

	/* Apply the keyframes declared above. */
	.animate-wiggle {
		/* total duration 2 s, eas-in-out, infinite loop,
		   alternate – reverse direction each iteration. */
		animation: wiggle 2s ease-in-out infinite alternate;
	}
</style>