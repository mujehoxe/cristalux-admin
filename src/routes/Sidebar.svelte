<script>
	import SidebarLink from './SidebarLink.svelte';
</script>

<aside class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
	<div class="flex-1 flex flex-col min-h-0 bg-gray-800">
		<div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
			<div class="flex items-center flex-shrink-0 px-4">
				<img
					class="h-8 w-auto"
					src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
					alt="Workflow"
				/>
			</div>
			<nav class="mt-5 flex flex-col px-2 space-y-1 gap-2">
				{#each ['Products', 'Orders'] as name}
					<SidebarLink {name} />
				{/each}
			</nav>
		</div>
	</div>
</aside>
