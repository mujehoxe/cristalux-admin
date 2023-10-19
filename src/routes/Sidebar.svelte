<script>
	import Fa from 'svelte-fa';
	import SidebarLink from './SidebarLink.svelte';
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	let isSidebarOpen = false;
</script>

<div class="md:hidden p-4 bg-slate-800">
	<button
		class="flex flex-row items-center gap-2"
		on:click={() => (isSidebarOpen = !isSidebarOpen)}
	>
		<Fa icon={faBars} />
		<h3>Menu</h3>
	</button>
</div>

<aside
	class={`${
		isSidebarOpen ? 'flex' : 'hidden'
	} md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 transition-all`}
>
	<div class="flex-1 flex flex-col min-h-0 bg-gray-800">
		<div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
			<a href="/" class="flex items-center gap-4 flex-shrink-0 px-4">
				<img class="h-8 w-auto" src="/favicon.png" alt="Workflow" />
				<span class="uppercase text-[#fcf38b] font-bold text-2xl">
					cristalux
				</span>
			</a>
			<nav class="mt-5 flex flex-col px-2 space-y-1 gap-2">
				{#each ['Products', 'Orders'] as name}
					<SidebarLink {name} />
				{/each}
			</nav>
		</div>
	</div>
</aside>
