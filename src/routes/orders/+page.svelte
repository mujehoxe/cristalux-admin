<script>
	import Order from './Order.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	let { orders } = data;

	let archived = false;

	export async function reloadOrders() {
		const res = await fetch(`api/v1/orders?archived=${archived}`);
		orders = await res.json();
	}
</script>

<div class="flex flex-col gap-4 px-4 sm:px-6 lg:px-8">
	<div class="sm:flex sm:items-center">
		<div class="sm:flex-auto">
			<h1 class="text-xl font-semibold text-gray-900">Orders</h1>
		</div>
	</div>

	<form class="">
		<label for="archived">Archivé</label>
		<input
			id="archived"
			type="checkbox"
			class="ml-2"
			on:change={() => {
				archived = !archived;
				reloadOrders();
			}}
		/>
	</form>

	<table class="table-auto min-w-full divide-y divide-gray-300 w-full h-full">
		<thead class="bg-gray-50 w-10">
			<tr>
				<th
					scope="col"
					class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
				>
					Client
				</th>
				<th
					scope="col"
					class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
				>
					Produits
				</th>
				<th
					scope="col"
					class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
				>
					Quantité (DEM/DISP)
				</th>
				<th
					scope="col"
					class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
				>
					Prix Totale (DA)
				</th>
				<th
					scope="col"
					class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
				>
					Status
				</th>
				<th
					scope="col"
					class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
				>
					Confirmation
				</th>
			</tr>
		</thead>
		<tbody class="divide-y divide-gray-200 bg-white">
			{#key orders}
				{#each orders as order}
					<Order {order} />
				{/each}
			{/key}
		</tbody>
	</table>
</div>
