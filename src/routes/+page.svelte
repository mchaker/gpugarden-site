<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import WelcomeSection from '$lib/components/WelcomeSection.svelte';
	import RulesSection from '$lib/components/RulesSection.svelte';
	import SupportSection from '$lib/components/SupportSection.svelte';
	import ServicesSection from '$lib/components/ServicesSection.svelte';

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
	<meta property="og:image" content="/favicon.png" />
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
	/>
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />

	<HeroSection />

	<!-- Main Content -->
	<main class="px-4 py-12 sm:px-6 lg:px-8">
		<div class="container mx-auto">
			<WelcomeSection />
			<RulesSection />
			<SupportSection />
			<ServicesSection />
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
