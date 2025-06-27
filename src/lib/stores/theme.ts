import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Create a writable store for the theme
export const darkMode = writable(false);

// Initialize theme on client side
export function initializeTheme() {
    if (!browser) return;
    
    console.log('Initializing theme...'); // Debug log
    
    // Check if user has a saved preference, otherwise use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const isDark = savedTheme ? savedTheme === 'dark' : systemPrefersDark;
    
    console.log('Theme state:', { savedTheme, systemPrefersDark, isDark }); // Debug log
    
    darkMode.set(isDark);
    applyTheme(isDark);
    
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

// Toggle theme and save preference
export function toggleTheme() {
    console.log('Toggle theme clicked!'); // Debug log
    
    darkMode.update(current => {
        const newTheme = !current;
        console.log('Switching theme from', current, 'to', newTheme); // Debug log
        
        if (browser) {
            localStorage.setItem('theme', newTheme ? 'dark' : 'light');
            applyTheme(newTheme);
        }
        return newTheme;
    });
}

// Apply theme to document
function applyTheme(isDark: boolean) {
    if (!browser) return;
    
    console.log('Applying theme:', isDark ? 'dark' : 'light'); // Debug log
    
    if (isDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    
    // Update theme-color meta tag
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) {
        themeMeta.setAttribute('content', isDark ? '#18181b' : '#ffffff');
    }
}