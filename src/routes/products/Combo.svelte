<script>
	import { faCheck, faSearch } from '@fortawesome/free-solid-svg-icons';
	import { onMount } from 'svelte';
	import Fa from 'svelte-fa';

	export let selectedItem;
	let query = selectedItem?.name;
	export let items;

	let filteredItems = [];

	const updateFilteredItems = () => {
		filteredItems =
			query === ''
				? []
				: items.filter((item) => {
						return item.name.toLowerCase().includes(query?.toLowerCase());
				  });
	};

	onMount(updateFilteredItems);
	onMount(() => selectItem(selectedItem));

	$: updateFilteredItems();

	function handleInputChange(event) {
		query = event.target.value;
		updateFilteredItems();
	}

	function selectItem(item) {
		selectedItem = item;
		query = item?.name;
		filteredItems = [];
	}

	function isItemSelected(item) {
		return item?.name === selectedItem?.name;
	}
</script>

<div class="space-y-4">
	<div class="relative mt-1">
		<input
			type="text"
			class="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
			value={query ? query : ''}
			on:input={handleInputChange}
			placeholder="Search or select an item"
		/>
		<div
			class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"
		>
			<Fa icon={faSearch} class="h-5 w-5 text-gray-400" aria-hidden="true" />
		</div>
		{#if filteredItems.length > 0}
			<ul
				class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
			>
				{#each filteredItems as item (item.id)}
					<li
						class="relative cursor-pointer select-none py-2 pl-8 pr-4"
						class:bg-indigo-700={isItemSelected(item)}
						on:click={() => selectItem(item)}
					>
						<span class:font-semibold={isItemSelected(item)}>
							{item.name}
						</span>
						{#if isItemSelected(item)}
							<Fa
								icon={faCheck}
								class="absolute m-auto inset-y-0 left-0 flex items-center pl-1.5"
								aria-hidden="true"
							/>
						{/if}
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>
