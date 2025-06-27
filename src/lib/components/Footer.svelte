<!-- Footer with top margin to push it away from preceding content -->
<footer class="bg-gray-800 dark:bg-zinc-950 text-white py-8 mt-12">
    <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
            <!-- Logo and description -->
            <div class="mb-4 md:mb-0 text-center md:text-left">
                <div class="flex items-center justify-center md:justify-start space-x-2 mb-2">
                    <span class="text-2xl">🪴</span>
                    <h2 class="text-xl font-bold gradient-text-footer">gpu.garden</h2>
                </div>
                <p class="text-gray-400 text-sm">A beautiful little corner of the web for AI</p>
            </div>
            
            <!-- Social links -->
            <div class="flex space-x-4 mb-4 md:mb-0">
                <a 
                    href="mailto:astromahdi@astromahdi.com" 
                    class="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-700"
                    aria-label="Email"
                >
                    <i class="fas fa-envelope fa-lg"></i>
                </a>
                <a 
                    href="https://discord.com/invite/touhouai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-700"
                    aria-label="Discord"
                >
                    <i class="fab fa-discord fa-lg"></i>
                </a>
                <a 
                    href="https://github.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-700"
                    aria-label="GitHub"
                >
                    <i class="fab fa-github fa-lg"></i>
                </a>
            </div>
        </div>
        
        <!-- Divider -->
        <div class="border-t border-gray-700 mt-6 pt-6">
            <!-- Attribution and links -->
            <div class="text-center text-gray-400 text-sm space-y-2">
                <p>
                    This homepage is built with 
                    <a href="https://kit.svelte.dev/" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 hover:underline transition">SvelteKit</a> 
                    and 
                    <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 hover:underline transition">Tailwind CSS</a>.
                </p>
                <p>
                    Designed and rebuilt by 
                    <a href="https://mooshieblob.com/" target="_blank" rel="noopener noreferrer" class="font-semibold text-blue-400 hover:text-blue-300 hover:underline transition">blob</a>. 
                    gpu.garden is owned and managed by 
                    <a href="https://fartcore.ai/" target="_blank" rel="noopener noreferrer" class="font-semibold text-blue-400 hover:text-blue-300 hover:underline transition">fartcore</a>.
                </p>
                <p class="text-xs mt-4">© 2024-2025 gpu.garden | All rights reserved</p>
            </div>
        </div>
    </div>
</footer>

<style>
    .gradient-text-footer {
        background: linear-gradient(45deg, #4ade80, #3b82f6, #a855f7);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }
</style>
