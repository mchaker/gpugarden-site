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
		const backToTopButton = document.getElementById('backToTop') as HTMLButtonElement | null;
		const footer = document.querySelector('footer') as HTMLElement | null;

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

		// Scroll animation for sections
		const sections = document.querySelectorAll('.scroll-section');
		let animationFrame: number;

		function animateSections() {
			sections.forEach((section) => {
				const rect = section.getBoundingClientRect();
				const top = rect.top;
				const height = rect.height;

				// Animate as it leaves the top of the viewport
				if (top <= 0) {
					// Calculate progress: 0 at top, 1 when fully scrolled out
					const progress = Math.abs(top) / height;

					// Shrink to 80% and fade out
					const scale = Math.max(0.8, 1 - progress * 0.2);
					const opacity = Math.max(0, 1 - progress * 1.5);

					(section as HTMLElement).style.transform = `scale(${scale})`;
					(section as HTMLElement).style.opacity = `${opacity}`;
				} else {
					// Reset
					(section as HTMLElement).style.transform = 'scale(1)';
					(section as HTMLElement).style.opacity = '1';
				}
			});

			animationFrame = requestAnimationFrame(animateSections);
		}

		animateSections();

		return () => {
			if (animationFrame) cancelAnimationFrame(animationFrame);
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

<div class="flex min-h-screen flex-col">
	<Header />

	<div class="scroll-section origin-top will-change-transform">
		<HeroSection />
	</div>

	<!-- Main Content -->
	<main id="main-content" class="px-4 py-12 sm:px-6 lg:px-8">
		<div class="container mx-auto space-y-24">
			<div class="scroll-section origin-center will-change-transform">
				<WelcomeSection />
			</div>
			<div class="scroll-section origin-center will-change-transform">
				<RulesSection />
			</div>
			<div class="scroll-section origin-center will-change-transform">
				<SupportSection />
			</div>
			<div class="scroll-section origin-center will-change-transform">
				<ServicesSection />
			</div>
		</div>
	</main>

	<Footer />

	<!-- Back to Top Button -->
	<button
		id="backToTop"
		class="invisible fixed right-4 bottom-20 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-amber-500 text-white opacity-0 shadow-lg transition hover:scale-110 hover:animate-pulse md:right-8 md:h-12 md:w-12"
		aria-label="Back to top"
		aria-hidden="true"
		tabindex="-1"
	>
		<i class="fas fa-arrow-up text-sm md:text-base"></i>
	</button>
</div>
