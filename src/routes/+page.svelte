<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import WelcomeSection from '$lib/components/WelcomeSection.svelte';
	import RulesSection from '$lib/components/RulesSection.svelte';
	import SupportSection from '$lib/components/SupportSection.svelte';
	import ServicesSection from '$lib/components/ServicesSection.svelte';
	import { lenisStore } from '$lib/stores/lenis';

	// Initial Animation
	let isLoaded = false;
	let contentWrapper: HTMLElement;

	onMount(() => {
		const backToTopButton = document.getElementById('backToTop') as HTMLButtonElement | null;
		const footer = document.querySelector('footer') as HTMLElement | null;

		// Subscribe to store to get instance when available
		const unsubscribeLenis = lenisStore.subscribe((lenis) => {
			if (lenis && contentWrapper) {
				lenis.stop();
				window.scrollTo(0, 0);

				// Wait a tick to ensure styles are applied
				setTimeout(() => {
					isLoaded = true;

					// Enable scroll after animation
					setTimeout(() => {
						lenis.start();
					}, 1200); // 1s duration + 200ms buffer
				}, 100);
			}
		});

		if (backToTopButton && footer) {
			const setHidden = (hidden: boolean) => {
				backToTopButton.setAttribute('aria-hidden', hidden ? 'true' : 'false');
				backToTopButton.tabIndex = hidden ? -1 : 0;
			};

			// initialize as hidden
			setHidden(true);

			const updateButtonPosition = () => {
				const footerRect = footer.getBoundingClientRect();
				if (window.pageYOffset > 300) {
					backToTopButton.classList.remove('opacity-0', 'invisible');
					backToTopButton.classList.add('opacity-100', 'visible');
					setHidden(false);

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
					setHidden(true);
				}
			};

			window.addEventListener('scroll', updateButtonPosition);
			window.addEventListener('resize', updateButtonPosition);

			backToTopButton.addEventListener('click', () => {
				window.scrollTo({
					top: 0,
					behavior: 'smooth'
				});
				// prevent focus leaving the button in a weird state
				backToTopButton.blur();
			});
		}

		document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
			anchor.addEventListener('click', (e) => {
				const el = e.currentTarget as HTMLAnchorElement | null;
				const href = el?.getAttribute('href');
				if (!href || href === '#') return;

				const targetElement = document.querySelector(href);
				if (targetElement) {
					e.preventDefault();
					targetElement.scrollIntoView({ behavior: 'smooth' });
				}
			});
		});

		return () => {
			unsubscribeLenis();
		};
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
</svelte:head>

<div class="flex min-h-screen flex-col overflow-x-hidden">
	<Header />

	<div
		bind:this={contentWrapper}
		class="origin-bottom will-change-transform {isLoaded ? 'animate-complete' : 'animate-start'}"
	>
		<div class="origin-top will-change-transform">
			<HeroSection />
		</div>

		<!-- Main Content -->
		<main id="main-content" class="w-full">
			<div class="origin-center will-change-transform">
				<WelcomeSection />
			</div>
			<div class="origin-center will-change-transform">
				<RulesSection />
			</div>
			<div class="origin-center will-change-transform">
				<SupportSection />
			</div>
			<div class="origin-center will-change-transform">
				<ServicesSection />
			</div>
		</main>

		<Footer />
	</div>

	<style>
		.animate-start {
			opacity: 0;
			transform: scaleY(0.9) translateY(40px);
			transition:
				transform 1.2s cubic-bezier(0.16, 1, 0.3, 1),
				opacity 1s ease-out;
		}

		.animate-complete {
			opacity: 1;
			transform: scaleY(1) translateY(0);
			transition:
				transform 1.2s cubic-bezier(0.16, 1, 0.3, 1),
				opacity 1s ease-out;
		}
	</style>

	<!-- Back to Top Button -->
	<button
		id="backToTop"
		class="invisible fixed right-4 bottom-20 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 text-black opacity-0 shadow-[0_0_20px_rgba(234,179,8,0.3)] shadow-lg transition hover:scale-110 hover:bg-yellow-400 md:right-8 md:h-12 md:w-12"
		aria-label="Back to top"
		aria-hidden="true"
		tabindex="-1"
	>
		<i class="fas fa-arrow-up text-sm md:text-base"></i>
	</button>
</div>
