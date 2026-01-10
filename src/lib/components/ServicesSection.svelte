<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		// Initialize feather icons if available
		if (typeof feather !== 'undefined') {
			feather.replace();
		}
	});

	const services = [
		{
			title: 'gpu.garden',
			desc: 'Homepage',
			url: '/',
			icon: 'home',
			color: 'text-yellow-500' // Using yellow for all as per test.html aesthetic, though individual colors were in attributes
		},
		{
			title: 'SwarmUI',
			desc: 'Image Generation AI',
			url: 'https://swarmui.gpu.garden/',
			icon: 'image',
			color: 'text-purple-500'
		},
		{
			title: 'Novel',
			desc: 'Chat / Roleplay AI',
			url: 'https://novel.gpu.garden/',
			icon: 'book-open',
			color: 'text-blue-500'
		},
		{
			title: 'Tagger',
			desc: 'Danbooru Interrogator',
			url: 'https://tagger.gpu.garden/',
			icon: 'tag',
			color: 'text-green-500'
		},
		{
			title: 'ComfyBackend',
			desc: 'Bare-bones ComfyUI',
			url: 'https://swarmui.gpu.garden/ComfyBackendDirect',
			icon: 'box',
			color: 'text-orange-500'
		},
		{
			title: 'Oui',
			desc: 'Text / Chat AI',
			url: 'https://oui.gpu.garden/',
			icon: 'message-square',
			color: 'text-cyan-500'
		},
		{
			title: 'Docs',
			desc: 'Project Documentation',
			url: 'https://docs.gpu.garden/',
			icon: 'file-text',
			color: 'text-gray-500'
		},
		{
			title: 'Stream',
			desc: 'Livestream of shareservers',
			url: 'https://stream.gpu.garden/',
			icon: 'cast',
			color: 'text-red-500'
		},
		{
			title: 'Fartgram',
			desc: 'Image sharing',
			url: 'https://fartgram.gpu.garden/',
			icon: 'instagram',
			color: 'text-pink-500'
		},
		{
			title: 'Prompts',
			desc: 'Prompt History',
			url: 'https://prompts.gpu.garden/',
			icon: 'terminal',
			color: 'text-indigo-500'
		},
		{
			title: 'CyberChef',
			desc: 'Data conversion',
			url: 'https://cc.gpu.garden/',
			icon: 'hash', // chef-hat not in feather, using hash or similiar
			color: 'text-emerald-500'
		},
		{
			title: 'Start',
			desc: 'Links & Stats',
			url: 'https://start.gpu.garden/',
			icon: 'compass',
			color: 'text-teal-500'
		},
		{
			title: 'Stats',
			desc: 'Usage Statistics',
			url: 'https://stats.gpu.garden/',
			icon: 'bar-chart-2',
			color: 'text-violet-500'
		},
		{
			title: 'Status',
			desc: 'System Health',
			url: 'https://status.gpu.garden/',
			icon: 'activity',
			color: 'text-lime-500'
		},
		{
			title: 'Copy',
			desc: 'Copy Party instance',
			url: 'https://copy.gpu.garden/',
			icon: 'copy',
			color: 'text-sky-500'
		},
		{
			title: 'Rentry',
			desc: 'Markdown Pastebin',
			url: 'https://rentry.gpu.garden/',
			icon: 'file-plus',
			color: 'text-fuchsia-500'
		},
		{
			title: 'Jupyter',
			desc: 'Jupyter Notebooks',
			url: 'https://jupyterhub.gpu.garden/',
			icon: 'code',
			color: 'text-orange-500'
		},
		{
			title: 'Reserve',
			desc: 'GPU Library',
			url: 'https://reserve.gpu.garden/',
			icon: 'database',
			color: 'text-slate-500'
		}
	];
</script>

<section id="services" class="bg-black py-12 md:py-24">
	<div class="container mx-auto px-6">
		<div class="mb-12 text-center md:mb-16">
			<h2 class="mb-4 text-3xl font-bold text-white md:text-4xl">Our Services</h2>
			<p class="text-gray-400">Explore the different tools available in the garden.</p>
		</div>

		<!-- Grid for Services -->
		<div
			class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
			id="services-grid"
		>
			{#each services as service (service.title)}
				<a
					href={service.url}
					target={service.url.startsWith('/') ? '' : '_blank'}
					class="group block"
				>
					<div
						class="h-full rounded-2xl border border-neutral-800 bg-neutral-900 p-6 transition-all hover:-translate-y-1 hover:border-yellow-500/50"
					>
						<div
							class="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-800 {service.color.replace(
								'text-',
								'text-'
							)} mb-4 transition-colors group-hover:bg-yellow-500 group-hover:text-black"
						>
							<i data-feather={service.icon} class="h-6 w-6"></i>
						</div>
						<h3 class="mb-1 text-xl font-bold text-white">{service.title}</h3>
						<p class="text-sm text-gray-400">{service.desc}</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
