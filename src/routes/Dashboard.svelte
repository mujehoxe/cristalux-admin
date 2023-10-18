<script>
	import {
		faDollarSign,
		faShoppingCart,
		faWarehouse
	} from '@fortawesome/free-solid-svg-icons';

	import Fa from 'svelte-fa';

	export let data;

	const { productCount } = data;
</script>

<div class="max-w-7xl mx-auto p-4">
	<h1 class="text-2xl font-semibold text-gray-900 mb-4">Dashboard</h1>
	<div class="space-y-4">
		<div class="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
			<div class="flex items-center mb-4">
				<i class="fas fa-dollar-sign text-green-500 text-lg mr-2" />
				<Fa icon={faDollarSign} class="mr-2 text-green-500" />
				<h2 class="text-xl font-semibold text-gray-900">Sales Data</h2>
			</div>
			<ul class="text-gray-700">
				<li class="mb-2">Total Sales: DA12,345</li>
				<li class="mb-2">Today's Sales: DA789</li>
				<li>Monthly Sales: DA3,456</li>
			</ul>
		</div>
		<div class="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
			<div class="flex items-center mb-4">
				<Fa icon={faShoppingCart} class="mr-2 text-blue-500" />
				<h2 class="text-xl font-semibold text-gray-900">Recent Orders</h2>
			</div>
			<ul class="text-gray-700">
				<li class="mb-2">Order #12345 - $89.90</li>
				<li class="mb-2">Order #12344 - $45.67</li>
				<li>Order #12343 - $23.45</li>
			</ul>
		</div>
		<div class="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
			<div class="flex items-center mb-4">
				<Fa icon={faWarehouse} class="mr-2 text-orange-500" />
				<h2 class="text-xl font-semibold text-gray-900">Product Inventory</h2>
			</div>
			<ul class="text-gray-700">
				<li class="mb-2">Products in Stock: {productCount}</li>
				<li class="mb-2">Products Sold: 456</li>
				<li>Products Returned: 12</li>
			</ul>
		</div>
	</div>
</div>
