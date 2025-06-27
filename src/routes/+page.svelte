<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	onMount(() => {
		const backToTopButton = document.getElementById('backToTop');
		const footer = document.querySelector('footer');

		if (backToTopButton && footer) {
			const updateButtonPosition = () => {
				const footerRect = footer.getBoundingClientRect();
				if (window.pageYOffset > 300) {
					backToTopButton.classList.remove('opacity-0', 'invisible');
					backToTopButton.classList.add('opacity-100', 'visible');

					if (footerRect.top < window.innerHeight) {
						const buttonBottom = window.innerHeight - footerRect.top + 20;
						backToTopButton.style.bottom = `${buttonBottom}px`;
					} else {
						backToTopButton.style.bottom = '1.5rem';
					}
				} else {
					backToTopButton.classList.remove('opacity-100', 'visible');
					backToTopButton.classList.add('opacity-0', 'invisible');
					backToTopButton.style.bottom = '1.5rem';
				}
			};

			window.addEventListener('scroll', updateButtonPosition);
			window.addEventListener('resize', updateButtonPosition);

			backToTopButton.addEventListener('click', () => {
				window.scrollTo({
					top: 0,
					behavior: 'smooth'
				});
			});
		}

		document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
			anchor.addEventListener('click', function (e) {
				const href = (this as HTMLAnchorElement).getAttribute('href');
				if (!href || href === '#') return;

				const targetElement = document.querySelector(href);
				if (targetElement) {
					e.preventDefault();
					targetElement.scrollIntoView({
						behavior: 'smooth'
					});
				}
			});
		});
	});
</script>

<svelte:head>
	<title>gpu.garden - A Beautiful AI Playground</title>
	<meta
		name="description"
		content="A beautiful little corner of the web for AI enthusiasts, powered by the fartcore datacenter."
	/>
	<meta property="og:title" content="gpu.garden - A Beautiful AI Playground" />
	<meta
		property="og:description"
		content="A beautiful little corner of the web for AI enthusiasts, powered by the fartcore datacenter."
	/>
	<meta property="og:image" content="/images/gpu-gardener.webp" />
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
	/>
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />

	<!-- Hero Section -->
	<section class="flex-grow px-4 py-16 sm:px-6 lg:px-8">
		<div class="container mx-auto flex flex-col items-center justify-between lg:flex-row">
			<div class="mb-12 lg:mb-0 lg:w-1/2">
				<h2 class="title-font mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
					Who would've known <span class="gradient-text">AI image gen</span> could be free ???
				</h2>
				<p class="mb-8 text-gray-300">
					A beautiful little corner of the web for AI enthusiasts, powered by the fartcore
					datacenter.
				</p>
				<div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
					<a
						href="https://swarmui.gpu.garden/"
						target="_blank"
						class="btn-primary rounded-full px-6 py-3 text-center font-medium"
					>
						Explore SwarmUI <i class="fas fa-arrow-right ml-2"></i>
					</a>
					<a
						href="https://discord.com/invite/touhouai"
						target="_blank"
						class="hover:bg-opacity-10 rounded-full border border-yellow-500 px-6 py-3 text-center font-medium text-yellow-500 transition hover:bg-yellow-500"
					>
						Join Discord <i class="fab fa-discord ml-2"></i>
					</a>
				</div>
			</div>
			<div class="flex justify-center lg:w-1/2">
				<div class="relative w-full max-w-md">
					<div
						class="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-red-500 opacity-20 blur-3xl"
					></div>
					<div
						class="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-yellow-500 opacity-20 blur-3xl"
					></div>
					<img
						src="/images/gpu-gardener.webp"
						alt="The GPU gardener tending to the GPUs in the garden"
						class="floating relative z-10 h-auto w-full rounded-2xl object-cover shadow-2xl"
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- Main Content -->
	<main class="px-4 py-12 sm:px-6 lg:px-8">
		<div class="container mx-auto">
			<!-- Welcome Section -->
			<section id="welcome" class="mb-20">
				<div class="mb-8 flex items-center">
					<div class="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400">
						<i class="fas fa-seedling text-white"></i>
					</div>
					<h2 class="title-font gradient-text text-3xl font-bold">Welcome</h2>
				</div>
				<div class="grid gap-8 md:grid-cols-2">
					<div class="card-glass p-8">
						<div class="mb-4 flex items-center">
							<div class="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-600">
								<i class="fas fa-laptop-code text-yellow-200"></i>
							</div>
							<h3 class="title-font text-xl font-bold text-white">Open WebUI</h3>
						</div>
						<p class="mb-6 text-gray-300">
							Feel free to sign up! Once you do, reach out to astro to activate your account.
						</p>
						<a
							href="https://oui.gpu.garden/"
							target="_blank"
							class="btn-primary rounded-full px-4 py-2 text-sm font-medium"
						>
							Sign Up <i class="fas fa-user-plus ml-2"></i>
						</a>
					</div>
					<div class="card-glass p-8">
						<div class="mb-4 flex items-center">
							<div
								class="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500"
							>
								<i class="fas fa-paint-brush text-white"></i>
							</div>
							<h3 class="title-font text-xl font-bold text-white">SwarmUI</h3>
						</div>
						<p class="mb-6 text-gray-300">
							Just ask in the TouhouAI Discord. Anyone with the <span class="text-emerald-300"
								>fartcore</span
							> role can grant you access. We're pretty chill.
						</p>
						<a
							href="https://discord.com/invite/touhouai"
							target="_blank"
							class="hover:bg-opacity-10 inline-block rounded-full border border-purple-400 px-4 py-2 text-sm font-medium text-purple-400 transition hover:bg-purple-400"
						>
							Get Access <i class="fab fa-discord ml-2"></i>
						</a>
					</div>
				</div>
			</section>

			<!-- Rules Section -->
			<section id="rules" class="mb-20">
				<div class="mb-8 flex items-center">
					<div class="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-amber-400">
						<i class="fas fa-scroll text-white"></i>
					</div>
					<h2 class="title-font gradient-text text-3xl font-bold">Rules</h2>
				</div>
				<div class="card-glass p-8">
					<div class="grid gap-6 md:grid-cols-2">
						<div class="flex items-start">
							<div
								class="mt-1 mr-4 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500"
							>
								<i class="fas fa-ban text-xs text-white"></i>
							</div>
							<div>
								<h3 class="mb-2 text-lg font-bold text-white">No NSFW Content</h3>
								<p class="text-gray-300">
									No porn-specific models or illegal content (we follow U.S. law).
								</p>
							</div>
						</div>
						<div class="flex items-start">
							<div
								class="mt-1 mr-4 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500"
							>
								<i class="fas fa-users text-xs text-white"></i>
							</div>
							<div>
								<h3 class="mb-2 text-lg font-bold text-white">Be Respectful</h3>
								<p class="text-gray-300">
									Treat others with kindness. No harassment or hate speech.
								</p>
							</div>
						</div>
						<div class="flex items-start">
							<div
								class="mt-1 mr-4 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-500"
							>
								<i class="fas fa-bolt text-xs text-white"></i>
							</div>
							<div>
								<h3 class="mb-2 text-lg font-bold text-white">Resource Limits</h3>
								<p class="text-gray-300">
									Be mindful of GPU usage. Don't hog resources or bypass filters.
								</p>
							</div>
						</div>
						<div class="flex items-start">
							<div
								class="mt-1 mr-4 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500"
							>
								<i class="fas fa-lightbulb text-xs text-white"></i>
							</div>
							<div>
								<h3 class="mb-2 text-lg font-bold text-white">Creative Commons</h3>
								<p class="text-gray-300">
									Respect copyright. Do not save generated content on the server.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- Support Section -->
			<section id="support" class="mb-28">
				<div class="mb-8 flex items-center">
					<div class="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-pink-500">
						<i class="fas fa-heart text-white"></i>
					</div>
					<h2 class="title-font gradient-text text-3xl font-bold">Support</h2>
				</div>
				<div class="card-glass p-8">
					<div class="mx-auto max-w-3xl text-center">
						<h3 class="title-font mb-4 text-2xl font-bold text-white">
							Help keep the GPUs running!
						</h3>
						<p class="mb-6 text-gray-300">
							Your support helps us maintain and expand our AI playground. Every contribution goes
							directly towards hardware upgrades, maintenance, and keeping the services free for
							everyone.
						</p>
						<div class="flex flex-wrap justify-center gap-4">
							<a
								href="https://patreon.com/fartcore"
								target="_blank"
								class="btn-primary rounded-full px-6 py-3 font-medium"
							>
								Donate <i class="fas fa-hand-holding-usd ml-2"></i>
							</a>
							<a
								href="https://buymeacoffee.com/astromahdi"
								target="_blank"
								class="hover:bg-opacity-10 rounded-full border border-yellow-400 px-6 py-3 font-medium text-yellow-400 transition hover:bg-yellow-400"
							>
								Buy Me a Coffee <i class="fas fa-coffee ml-2"></i>
							</a>
						</div>
					</div>
				</div>
			</section>

			<!-- Links Section -->
			<section id="services" class="fade-in mb-20">
				<div class="mb-8 flex items-center">
					<div class="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-purple-500">
						<i class="fas fa-link text-white"></i>
					</div>
					<h2 class="title-font gradient-text text-3xl font-bold">Services</h2>
				</div>
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					<a href="/" class="card-glass flex items-center space-x-3 p-4">
						<span class="text-2xl">🪴</span>
						<div>
							<h3 class="font-bold text-white">gpu.garden</h3>
							<p class="text-sm text-gray-400">homepage</p>
						</div>
					</a>
					<a
						href="https://swarmui.gpu.garden/"
						target="_blank"
						rel="noopener noreferrer"
						class="card-glass flex items-center space-x-3 p-4"
					>
						<span class="text-2xl">🖼️</span>
						<div>
							<h3 class="font-bold text-white">swarmui.gpu.garden</h3>
							<p class="text-sm text-gray-400">image generation AI</p>
						</div>
					</a>
					<a
						href="https://swarmui.gpu.garden/ComfyBackendDirect"
						target="_blank"
						rel="noopener noreferrer"
						class="card-glass flex items-center space-x-3 p-4"
					>
						<span class="text-2xl">🤖</span>
						<div>
							<h3 class="font-bold text-white">ComfyBackendDirect</h3>
							<p class="text-sm text-gray-400">bare-bones ComfyUI (⚠️ requires login)</p>
						</div>
					</a>
					<a
						href="https://oui.gpu.garden/"
						target="_blank"
						rel="noopener noreferrer"
						class="card-glass flex items-center space-x-3 p-4"
					>
						<span class="text-2xl">📝</span>
						<div>
							<h3 class="font-bold text-white">oui.gpu.garden</h3>
							<p class="text-sm text-gray-400">text/chat AI</p>
						</div>
					</a>
					<a
						href="https://fartgram.gpu.garden/"
						target="_blank"
						rel="noopener noreferrer"
						class="card-glass flex items-center space-x-3 p-4"
					>
						<span class="text-2xl">🖼️</span>
						<div>
							<h3 class="font-bold text-white">fartgram.gpu.garden</h3>
							<p class="text-sm text-gray-400">A place to fart images onto the internet</p>
						</div>
					</a>
					<a
						href="https://prompts.gpu.garden/"
						target="_blank"
						rel="noopener noreferrer"
						class="card-glass flex items-center space-x-3 p-4"
					>
						<span class="text-2xl">🧐</span>
						<div>
							<h3 class="font-bold text-white">prompts.gpu.garden</h3>
							<p class="text-sm text-gray-400">prompt history</p>
						</div>
					</a>
					<a
						href="https://stats.gpu.garden/"
						target="_blank"
						rel="noopener noreferrer"
						class="card-glass flex items-center space-x-3 p-4"
					>
						<span class="text-2xl">📈</span>
						<div>
							<h3 class="font-bold text-white">stats.gpu.garden</h3>
							<p class="text-sm text-gray-400">usage stats</p>
						</div>
					</a>
					<a
						href="https://status.gpu.garden/"
						target="_blank"
						rel="noopener noreferrer"
						class="card-glass flex items-center space-x-3 p-4"
					>
						<span class="text-2xl">🩺</span>
						<div>
							<h3 class="font-bold text-white">status.gpu.garden</h3>
							<p class="text-sm text-gray-400">system health</p>
						</div>
					</a>
				</div>
			</section>
		</div>
	</main>

	<Footer />

	<!-- Back to Top Button -->
	<button
		id="backToTop"
		class="invisible fixed right-4 bottom-20 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-yellow-400 text-white opacity-0 shadow-lg transition hover:scale-110 hover:animate-pulse md:right-8 md:h-12 md:w-12"
		aria-label="Back to top"
	>
		<i class="fas fa-arrow-up text-sm md:text-base"></i>
	</button>
</div>

<div class="flex items-center space-x-2">
	<div
		class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-yellow-500"
	>
		<i class="fas fa-leaf text-white"></i>
	</div>
	<h1 class="title-font gradient-text text-2xl font-bold">gpu.garden</h1>
</div>

<style>
	.fade-in {
		animation: fadeIn 1s ease-in-out;
	}
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	.gradient-text {
		background: linear-gradient(45deg, #4ade80, #3b82f6, #a855f7);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}
	.card-hover:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease;
	}

	/* Override the global link color for buttons with text stroke */
	a.bg-green-500,
	a.bg-indigo-500,
	a.bg-blue-500 {
		color: white !important;
		text-decoration: none;
		text-shadow:
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
		font-weight: 600; /* Make text slightly bolder for better visibility */
	}

	a.bg-green-500:hover,
	a.bg-indigo-500:hover,
	a.bg-blue-500:hover {
		color: white !important;
		text-decoration: none;
		text-shadow:
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
	}
</style>
