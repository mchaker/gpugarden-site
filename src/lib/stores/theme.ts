import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Create a writable store for the theme
export const darkMode = writable(false);

// Apply theme to document
function applyTheme(isDark: boolean) {
	if (!browser) return;

	// Use requestAnimationFrame to ensure DOM is ready
	requestAnimationFrame(() => {
		if (isDark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}

		// Update theme-color meta tag
		const themeMeta = document.querySelector('meta[name="theme-color"]');
		if (themeMeta) {
			themeMeta.setAttribute('content', isDark ? '#000000' : '#fef2f2');
		}
	});
}

// Toggle theme and save preference
export function toggleTheme() {
	darkMode.update((current) => {
		const newTheme = !current;
		if (browser) {
			localStorage.setItem('theme', newTheme ? 'dark' : 'light');
			applyTheme(newTheme);
		}
		return newTheme;
	});
}

// Initialize theme on client side
export function initializeTheme() {
	if (!browser) return;

	// Don't override if already set by app.html script
	const hasExistingTheme = document.documentElement.classList.contains('dark');
	const savedTheme = localStorage.getItem('theme');
	const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

	const isDark = savedTheme ? savedTheme === 'dark' : systemPrefersDark;

	// Only update store, don't re-apply theme if already applied
	darkMode.set(isDark);

	// If no theme class exists yet, apply the resolved preference now
	if (!hasExistingTheme) {
		applyTheme(isDark);
	}

	// Listen for system theme changes
	const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
	const handleChange = (e: MediaQueryListEvent) => {
		if (!localStorage.getItem('theme')) {
			darkMode.set(e.matches);
			applyTheme(e.matches);
		}
	};
	mediaQuery.addEventListener('change', handleChange);

	return () => mediaQuery.removeEventListener('change', handleChange);
}
