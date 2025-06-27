<!--
  A modernized header component that matches the card-based design.
  Includes sticky positioning, better mobile responsiveness, and dark mode toggle.
-->

<script lang="ts">
    import { onMount } from 'svelte';
    import { darkMode, initializeTheme, toggleTheme } from '$lib/stores/theme';
    
    let mobileMenuOpen = false;

    onMount(() => {
        console.log('Header mounted, initializing theme...'); // Debug log
        return initializeTheme();
    });

    // Add debug function
    function handleToggle() {
        console.log('Toggle button clicked, current darkMode:', $darkMode); // Debug log
        toggleTheme();
    }
</script>

<header class="bg-white dark:bg-zinc-900 shadow-sm sticky top-0 z-50 border-b border-zinc-200 dark:border-zinc-700">
    <div class="container mx-auto px-4 py-3">
        <!-- Main header content -->
        <div class="flex justify-between items-center">
            <!-- Logo section -->
            <div class="flex items-center space-x-2">
                <img src="/favicon.png" alt="gpu.garden logo" class="h-8 w-8" />
                <h1 class="text-xl font-bold gradient-text">gpu.garden</h1>
            </div>
            
            <!-- Desktop navigation and controls -->
            <div class="hidden md:flex items-center space-x-6">
                <nav class="flex space-x-6">
                    <a href="/" class="hover:text-green-500 transition flex items-center space-x-1 text-sm">
                        <span>🪴</span>
                        <span>Home</span>
                    </a>
                    <a href="https://swarmui.gpu.garden/" target="_blank" rel="noopener noreferrer" class="hover:text-blue-500 transition flex items-center space-x-1 text-sm">
                        <span>🖼️</span>
                        <span>SwarmUI</span>
                    </a>
                    <a href="https://oui.gpu.garden/" target="_blank" rel="noopener noreferrer" class="hover:text-purple-500 transition flex items-center space-x-1 text-sm">
                        <span>📝</span>
                        <span>Open WebUI</span>
                    </a>
                    <a href="https://status.gpu.garden/" target="_blank" rel="noopener noreferrer" class="hover:text-red-500 transition flex items-center space-x-1 text-sm">
                        <span>🩺</span>
                        <span>Status</span>
                    </a>
                </nav>
                
                <!-- Dark mode toggle -->
                <button 
                    on:click={handleToggle}
                    class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
                    aria-label="Toggle dark mode"
                >
                    {#if $darkMode}
                        <i class="fas fa-sun text-yellow-400"></i>
                    {:else}
                        <i class="fas fa-moon text-zinc-600"></i>
                    {/if}
                </button>
            </div>
            
            <!-- Mobile controls -->
            <div class="md:hidden flex items-center space-x-2">
                <!-- Mobile dark mode toggle -->
                <button 
                    on:click={handleToggle}
                    class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
                    aria-label="Toggle dark mode"
                >
                    {#if $darkMode}
                        <i class="fas fa-sun text-yellow-400"></i>
                    {:else}
                        <i class="fas fa-moon text-zinc-600"></i>
                    {/if}
                </button>
                
                <!-- Mobile menu button -->
                <button 
                    class="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800 transition" 
                    on:click={() => mobileMenuOpen = !mobileMenuOpen}
                    aria-label="Toggle mobile menu"
                >
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </div>
    </div>
    
    <!-- Mobile menu -->
    <div class={`md:hidden bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-700 transition-all duration-300 ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div class="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <a href="/" class="hover:text-green-500 transition flex items-center space-x-2 py-2 text-sm">
                <span>🪴</span>
                <span>Home</span>
            </a>
            <a href="https://swarmui.gpu.garden/" target="_blank" rel="noopener noreferrer" class="hover:text-blue-500 transition flex items-center space-x-2 py-2 text-sm">
                <span>🖼️</span>
                <span>SwarmUI</span>
            </a>
            <a href="https://oui.gpu.garden/" target="_blank" rel="noopener noreferrer" class="hover:text-purple-500 transition flex items-center space-x-2 py-2 text-sm">
                <span>📝</span>
                <span>Open WebUI</span>
            </a>
            <a href="https://status.gpu.garden/" target="_blank" rel="noopener noreferrer" class="hover:text-red-500 transition flex items-center space-x-2 py-2 text-sm">
                <span>🩺</span>
                <span>Status</span>
            </a>
        </div>
    </div>
</header>

<style>
    .gradient-text {
        background: linear-gradient(45deg, #4ade80, #3b82f6, #a855f7);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }
</style>
