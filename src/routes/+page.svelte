<!-- 
  This is the main homepage component for gpu.garden.
  It uses Svelte, a component framework that compiles your code to efficient JavaScript.
  The page layout consists of a Header, main content, and Footer.
-->

<script lang="ts">
	// Import necessary components from the lib directory
	// Header will appear at the top of the page
	import Header from '$lib/components/Header.svelte';
	// Footer will appear at the bottom of the page
	import Footer from '$lib/components/Footer.svelte';

	// Define a TypeScript type for navigation links
	// This creates a strict structure that all navigation links must follow
	type NavigationLink = {
		emoji: string;       // The emoji icon shown before the link
		href: string;        // The URL the link points to
		label: string;       // The visible text of the link
		description: string; // A short description of what the link leads to
		external?: boolean;  // Optional: marks if the link opens an external site (the ? means optional)
	};

	// Create an array of navigation links using the type defined above
	// This data structure will be used to dynamically generate the links section
	const navigationLinks: NavigationLink[] = [
		// Homepage link (internal link since no external property is set)
		{ emoji: '🪴', href: '/', label: 'gpu.garden', description: 'homepage' },
		// External links to different services (marked with external: true)
		{
			emoji: '🖼️',
			href: 'https://swarmui.gpu.garden/',
			label: 'swarmui.gpu.garden',
			description: 'image generation AI',
			external: true  // This will open in a new tab
		},
		{
			emoji: '📝',
			href: 'https://oui.gpu.garden/',
			label: 'oui.gpu.garden',
			description: 'text/chat AI',
			external: true
		},
		{
			emoji: '🧐',
			href: 'https://prompts.gpu.garden/',
			label: 'prompts.gpu.garden',
			description: 'prompt history',
			external: true
		},
		{
			emoji: '📈',
			href: 'https://stats.gpu.garden/',
			label: 'stats.gpu.garden',
			description: 'usage stats',
			external: true
		},
		{
			emoji: '🩺',
			href: 'https://status.gpu.garden/',
			label: 'status.gpu.garden',
			description: 'system health',
			external: true
		}
	];
</script>

<!-- 
  svelte:head is a special Svelte element that adds content to the <head> of the HTML document
  This section controls metadata for the page, which is important for:
  - Browser tab title and appearance
  - SEO (Search Engine Optimization)
  - How the page appears when shared on social media (Open Graph tags)
-->
<svelte:head>
	<!-- Sets the page title shown in the browser tab -->
	<title>gpu.garden — TouhouAI's Fartcore Datacenter</title>
	<!-- Character encoding for the document -->
	<meta charset="UTF-8" />
	<!-- Makes the page responsive on mobile devices -->
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<!-- Page description for search engines -->
	<meta
		name="description"
		content="gpu.garden is a cozy AI playground hosted in the fartcore datacenter, made for members of TouhouAI."
	/>
	<!-- Open Graph tags - control how the site appears when shared on social media -->
	<meta property="og:title" content="gpu.garden" />
	<meta
		property="og:description"
		content="Built for TouhouAI — welcome to our beautifully weird little corner of the web."
	/>
	<meta property="og:image" content="/fartcore_datacenter.jpg" />
	<!-- Theme color affects the browser UI on some mobile devices -->
	<meta name="theme-color" content="#0c0a09" />
</svelte:head>

<!-- 
  Add the Header component at the top of the page
  This component is imported at the top of the file
-->
<Header />

<!-- 
  Main content area of the page
  The classes used here are from Tailwind CSS, a utility-first CSS framework:
  - prose: Provides good typography defaults for content
  - prose-lg: Makes the text slightly larger
  - dark:prose-invert: Inverts colors for dark mode
  - mx-auto: Centers the content horizontally with auto margins
  - max-w-3xl: Sets maximum width to 3xl (48rem/768px)
  - rounded-xl: Rounds the corners of the container
  - border border-zinc-800: Adds a dark border
  - bg-zinc-950: Sets a very dark background color
  - px-8 py-10: Adds padding (x=horizontal, y=vertical)
  - leading-relaxed: Sets comfortable line height
  - text-white: Makes the text white
-->
<main
	class="prose prose-lg dark:prose-invert mx-auto max-w-3xl rounded-xl border border-zinc-800 bg-zinc-950 px-8 py-10 leading-relaxed text-white">
	<!-- Main heading -->
	<h1>Welcome</h1>
	
	<!-- 
	  Introductory paragraph with styled elements:
	  - <strong> makes text bold
	  - The link includes attributes for security and styling:
	    - target="_blank" opens the link in a new tab
	    - rel="noopener noreferrer" prevents the new page from accessing the window.opener property 
	      (security best practice for external links)
	    - class="accent-link" applies custom styling to the link
	-->
	<p>
		Welcome to <strong>gpu.garden</strong> — a beautiful little corner of the web, lovingly hosted
		in the
		<a
			href="/fartcore_datacenter.jpg"
			target="_blank"
			rel="noopener noreferrer"
			class="accent-link">fartcore datacenter</a
		>, built for members of <strong>TouhouAI</strong>.
	</p>

	<!-- 
	  Unordered list with information about accessing services
	  - mt-2: adds margin to the top (Tailwind utility)
	  - <b> makes text bold (same as <strong> but with different semantic meaning)
	  - <em> makes text italic, traditionally used for emphasis
	  - <code> formats text as code/monospace
	-->
	<ul class="mt-2">
		<li>
			<b>Want to use Open WebUI?</b>
			<em>
				Feel free to sign up! Once you do, reach out to astro to activate your account — contact
				them via
				<a href="mailto:astromahdi@astromahdi.com" class="accent-link">email</a>
				or
				<a
					href="https://discord.com/users/448287828821016587"
					target="_blank"
					rel="noopener noreferrer"
					class="accent-link">Discord</a
				>
				<code>astromahdi</code>.
			</em>
		</li>
		<li>
			<b>Want access to SwarmUI?</b>
			<em>
				Just ask in the
				<a
					href="https://discord.com/invite/touhouai"
					target="_blank"
					rel="noopener noreferrer"
					class="accent-link">TouhouAI Discord</a
				>. Anyone with the
				<code>fartcore</code>
				role can grant you access. We're pretty chill.
			</em>
		</li>
	</ul>

	<!-- 
	  Rules section with collapsible details
	  - mt-3 mb-0: margin top 3 units, margin bottom 0
	  - <details> creates a collapsible section (HTML5 element)
	  - <summary> is the visible part when details are collapsed
	-->
	<h2 class="mt-3 mb-0">Rules</h2>
	<details class="mt-1 rounded border border-zinc-700 bg-zinc-900 p-5 text-sm">
		<summary class="cursor-pointer font-bold">Click to reveal</summary>
		<!-- 
		  Ordered list of rules
		  - list-decimal: shows numbers instead of bullets
		  - space-y-2: adds vertical spacing between items
		  - pl-5: padding-left 5 units to indent the list
		-->
		<ol class="list-decimal space-y-2 pl-5">
			<li>No porn-specific models or illegal content (we follow U.S. law)</li>
			<li>No saving that content on the server</li>
			<li>No bypassing filters or restrictions</li>
		</ol>
		<p class="italic">Yes yes this is literally 1984</p>
	</details>

	<!-- 
	  Links section - this uses the navigationLinks data defined in the script
	  - mt-3 mb-0: margin top 3 units, margin bottom 0
	-->
	<h2 class="mt-3 mb-0">Links</h2>
	<ul class="mt-1 space-y-3 text-sm">
		<!-- 
		  This is a Svelte each block - it loops through each item in the navigationLinks array
		  and creates a list item for each one. The curly braces destructure each item into its properties.
		  
		  Syntax explanation:
		  {#each navigationLinks as { emoji, href, label, description, external }}
		    - Begins a loop through navigationLinks
		    - Destructures each object to access its properties directly
		-->
		{#each navigationLinks as { emoji, href, label, description, external }}
			<li>
				{emoji} <!-- Display the emoji -->
				<!-- 
				  Conditional rendering with if/else block
				  If the link is external, add target and rel attributes for security
				  If not external, render a regular link
				-->
				{#if external}
					<a
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						class="accent-link">{label}</a>
				{:else}
					<a href={href} class="accent-link">{label}</a>
				{/if}
				– {description} <!-- Display the description -->
			</li>
		{/each}
		<!-- End of the each block -->
	</ul>
</main>

<!-- Add the Footer component at the bottom of the page -->
<Footer />