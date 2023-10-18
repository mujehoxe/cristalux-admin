<script>
	import Dashboard from './Dashboard.svelte';

	/** @type {import('./$types').PageServerLoad} */
	export let data;
</script>

<Dashboard {data} />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
