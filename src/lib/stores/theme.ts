import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Create a writable store for the theme
export const darkMode = writable(false);

// Apply theme to document
function applyTheme(isDark: boolean) {
	if (!browser) return;

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
	if (!browser) return () => {};

	const savedTheme = localStorage.getItem('theme');
	const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

	// Logic matches the inline script in app.html
	const isDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);

	darkMode.set(isDark);
	// Ensure DOM is in sync (e.g. if script didn't run or logic drifted)
	applyTheme(isDark);

	// Listen for system theme changes
	const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
	const handleSystemChange = (e: MediaQueryListEvent) => {
		// Only respect system preference if no user override is set
		if (!localStorage.getItem('theme')) {
			darkMode.set(e.matches);
			applyTheme(e.matches);
		}
	};
	mediaQuery.addEventListener('change', handleSystemChange);

	// Listen for storage changes (sync across tabs)
	const handleStorageChange = (e: StorageEvent) => {
		if (e.key === 'theme') {
			const newIsDark = e.newValue === 'dark';
			darkMode.set(newIsDark);
			applyTheme(newIsDark);
		}
	};
	window.addEventListener('storage', handleStorageChange);

	return () => {
		mediaQuery.removeEventListener('change', handleSystemChange);
		window.removeEventListener('storage', handleStorageChange);
	};
}
