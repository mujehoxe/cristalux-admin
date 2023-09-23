<script>
	import Fa from 'svelte-fa';
	import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
	let isMoreShown = false;
	export let productId;
</script>

<div class="absolute top-2 right-2 z-10">
	<div class="relative inline-block text-left">
		<div>
			<button
				type="button"
				class="bg-gray-100 w-6 h-6 rounded-full flex justify-center items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
				id="menu-button"
				aria-expanded="true"
				aria-haspopup="true"
				on:click={() => (isMoreShown = !isMoreShown)}
			>
				<span class="sr-only">Open options</span>
				<Fa icon={faEllipsisVertical} />
			</button>
		</div>

		{#if isMoreShown}
			<div
				class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
				role="menu"
				aria-orientation="vertical"
				aria-labelledby="menu-button"
				tabindex="-1"
			>
				<div class="py-1" role="none">
					<!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
					{#each ['update', 'delete'] as action}
						<a
							href={`/products/${productId}`}
							class="text-gray-700 block px-4 py-2 text-sm"
							role="menuitem"
							tabindex="-1"
							id="menu-item-0"
						>
							{action[0].toUpperCase() + action.substring(1).toLowerCase()}
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</div>
