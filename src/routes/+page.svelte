<script>
	import Dashboard from './Dashboard.svelte';
</script>

<div class="md:pl-64 flex flex-col flex-1">
	<main class="flex-1">
		<Dashboard />
	</main>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
