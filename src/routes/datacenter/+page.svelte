<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Fartcore Datacenter - gpu.garden</title>
	<meta
		name="description"
		content="The legendary fartcore datacenter that powers gpu.garden's AI playground."
	/>
	<meta property="og:title" content="Fartcore Datacenter - gpu.garden" />
	<meta
		property="og:description"
		content="The legendary fartcore datacenter that powers gpu.garden's AI playground."
	/>
	<meta property="og:image" content="/images/fartcore_datacenter.jpg" />
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
					<i class="fas fa-server"></i>
				</div>
				<h1 class="title-font gradient-text text-center text-3xl font-bold">
					The Fartcore Datacenter
				</h1>
			</div>

			<div class="card-base p-4 sm:p-8">
				<div class="flex justify-center">
					<div class="relative max-w-full">
						<img
							src="/images/fartcore_datacenter.jpg"
							alt="The legendary fartcore datacenter that powers gpu.garden"
							class="max-h-[60vh] w-auto rounded-xl border border-neutral-800 object-contain shadow-2xl"
						/>
					</div>
				</div>

				<div class="prose prose-invert mt-6 max-w-none text-center">
					<p class="text-sm text-gray-400 sm:text-base">
						Behold, the legendary <span class="font-semibold text-yellow-500"
							>fartcore datacenter</span
						> - the powerhouse behind gpu.garden's free AI playground.
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
							Try SwarmUI <i class="fas fa-arrow-right ml-2" aria-hidden="true"></i>
						</a>
						<a
							href="https://docs.gpu.garden/"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center justify-center rounded-lg border border-neutral-700 bg-neutral-800 px-6 py-3 font-semibold text-white transition-all hover:border-yellow-500/50 hover:bg-neutral-700"
						>
							<i class="fas fa-book mr-2" aria-hidden="true"></i>Read Docs
						</a>
					</div>
				</div>
			</div>
		</div>
	</main>

	<Footer />
</div>
