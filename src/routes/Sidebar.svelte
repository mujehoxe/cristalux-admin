<script>
	import SidebarLink from './SidebarLink.svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	function handleLogout() {
		document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
		goto(`${base}/login`);
	}
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
		<div class="flex-shrink-0 flex bg-gray-700 p-4">
			<button 
				on:click={handleLogout}
				class="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
			>
				Logout
			</button>
		</div>
	</div>
</aside>
