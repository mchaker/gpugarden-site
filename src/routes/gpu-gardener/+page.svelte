<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>The GPU Gardener - gpu.garden</title>
	<meta
		name="description"
		content="Meet the GPU gardener, lovingly tending to the GPUs in the digital garden of gpu.garden."
	/>
	<meta property="og:title" content="The GPU Gardener - gpu.garden" />
	<meta
		property="og:description"
		content="Meet the GPU gardener, lovingly tending to the GPUs in the digital garden of gpu.garden."
	/>
	<meta property="og:image" content="/images/gpu-gardener.webp" />
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
	/>
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />

	<!-- Main Content -->
	<main id="main-content" class="flex-grow bg-black px-4 py-12 sm:px-6 lg:px-8">
		<div class="container mx-auto">
			<div class="mb-8 flex items-center justify-center">
				<div
					class="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-black"
				>
					<i class="fas fa-seedling"></i>
				</div>
				<h1 class="title-font gradient-text text-center text-3xl font-bold">The GPU Gardener</h1>
			</div>

			<div class="card-base p-4 sm:p-8">
				<div class="flex justify-center">
					<div class="relative max-w-full">
						<img
							src="/images/gpu-gardener.webp"
							alt="The GPU gardener lovingly tending to the GPUs in the digital garden"
							class="max-h-[60vh] w-auto rounded-xl border border-neutral-800 object-contain shadow-2xl"
						/>
					</div>
				</div>

				<div class="prose prose-invert mt-6 max-w-none text-center">
					<p class="text-sm text-gray-400 sm:text-base">
						Meet the <span class="font-semibold text-yellow-500">GPU gardener</span> - lovingly tending
						to the digital garden where AI creativity blooms.
					</p>
					<div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
						<a
							href="/"
							class="inline-flex items-center justify-center rounded-lg border border-neutral-700 bg-neutral-800 px-6 py-3 font-semibold text-white transition-all hover:border-yellow-500/50 hover:bg-neutral-700"
						>
							<i class="fas fa-arrow-left mr-2" aria-hidden="true"></i>Back to Home
						</a>
						<a
							href="https://swarmui.gpu.garden/"
							target="_blank"
							rel="noopener noreferrer"
							class="btn-primary px-6 py-3"
						>
							Start Creating <i class="fas fa-palette ml-2" aria-hidden="true"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	</main>

	<Footer />
</div>
