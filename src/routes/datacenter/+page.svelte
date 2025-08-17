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
	<main class="flex-grow px-4 py-12 sm:px-6 lg:px-8">
		<div class="container mx-auto">
			<div class="mb-8 flex items-center justify-center">
				<div class="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500">
					<i class="fas fa-server text-white"></i>
				</div>
				<h1 class="title-font gradient-text text-center text-3xl font-bold">
					The Fartcore Datacenter
				</h1>
			</div>

			<div class="card-glass p-4 sm:p-8">
				<div class="flex justify-center">
					<div class="relative max-w-full">
						<img
							src="/images/fartcore_datacenter.jpg"
							alt="The legendary fartcore datacenter that powers gpu.garden"
							class="max-h-[60vh] w-auto rounded-xl object-contain shadow-2xl"
						/>
					</div>
				</div>

				<div class="prose prose-invert mt-6 max-w-none text-center">
					<p class="text-sm text-gray-300 sm:text-base">
						Behold, the legendary <span class="gradient-text font-semibold"
							>fartcore datacenter</span
						> - the powerhouse behind gpu.garden's free AI playground.
					</p>
					<div class="mt-4 flex justify-center space-x-4">
						<a
							href="/"
							class="hover:bg-opacity-10 rounded-full border border-yellow-500 px-4 py-2 text-center text-sm font-medium text-yellow-500 transition hover:bg-yellow-500 sm:px-6 sm:py-3 sm:text-base"
						>
							<i class="fas fa-arrow-left mr-2" aria-hidden="true"></i>Back to Home
						</a>
						<a
							href="https://swarmui.gpu.garden/"
							target="_blank"
							rel="noopener noreferrer"
							class="btn-primary rounded-full px-4 py-2 text-center text-sm font-medium sm:px-6 sm:py-3 sm:text-base"
						>
							Try SwarmUI <i class="fas fa-arrow-right ml-2" aria-hidden="true"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	</main>

	<Footer />
</div>
