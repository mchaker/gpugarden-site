<script lang="ts">
	// Import the global stylesheet so that its classes and base styles
	// are available to every element rendered by this component.
	import '../app.css';

	// `$props()` is a Svelte 5 helper that gives you the props passed in
	// from the parent component. Here we immediately destructure `children`,
	// which is expected to be a function that returns markup (see below).
	let { children } = $props();
</script>

<!--
	The `{@render ...}` block evaluates a function and renders the
	returned markup directly into the component’s output.  
	In this case, we call the `children` function received from
	the parent component, making this file a very lightweight
	“layout shell” that merely forwards rendering to its children.
-->
{@render children()}