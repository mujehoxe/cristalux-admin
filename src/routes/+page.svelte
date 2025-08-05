<script>
	import Dashboard from './Dashboard.svelte';
	
	/** @type {import('./$types').PageServerData} */
	export let data;
</script>

<Dashboard stats={data.stats} />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
