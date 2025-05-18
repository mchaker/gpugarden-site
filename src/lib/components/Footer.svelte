<!-- Footer with top margin to push it away from preceding content -->
<footer
  class="mt-12 border-t border-zinc-200 py-6 text-center text-xs text-zinc-500 dark:border-zinc-700 dark:text-zinc-400"
>
  <!-- 
    - border-t: thin border at the top
    - border-zinc-200: light gray border in light mode
    - py-6: vertical padding (y axis)
    - text-center: center-align all text inside
    - text-xs: extra-small font size
    - text-zinc-500: medium-gray text in light mode
    - dark:border-zinc-700: darker border when the browser/OS is in dark mode
    - dark:text-zinc-400: lighter gray text for dark mode
  -->
  
  <!-- Using a single <p> keeps the text grouped while remaining semantically correct. -->
  <p>
    <!-- 
      "This homepage is built with …"  
      Each tool mentioned is wrapped in an <a> so that users can easily learn more.
    -->
    This homepage is built with
    <a
      href="https://kit.svelte.dev"
      target="_blank"
      rel="noopener noreferrer"
      class="text-blue-600 hover:underline dark:text-blue-400"
    >SvelteKit</a> <!-- official site for SvelteKit -->
    and
    <a
      href="https://tailwindcss.com"
      target="_blank" 
      rel="noopener noreferrer"
      class="text-blue-600 hover:underline dark:text-blue-400"
    >Tailwind&nbsp;CSS</a> <!-- official site for Tailwind CSS -->
    .

    <!-- Attribution text — feel free to adapt to your own name/URL -->
    Designed and rebuilt by
    <a
      href="https://mooshieblob.com"
      target="_blank"
      rel="noopener noreferrer"
      class="font-semibold text-blue-600 hover:underline dark:text-blue-400"
    >blob</a>.

    <!-- Site ownership meta info -->
    gpu.garden is owned and managed by
    <a
      href="https://fartcore.ai"
      target="_blank"
      rel="noopener noreferrer"
      class="font-semibold text-blue-600 hover:underline dark:text-blue-400"
    >fartcore</a>.
  </p>
</footer>