<script>
	export let stats = {
		productsCount: 0,
		categoriesCount: 0,
		ordersCount: 0,
		totalRevenue: '0.00',
		lowStockCount: 0
	};
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
	<div class="mb-8">
		<h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
		<p class="mt-2 text-sm text-gray-600">Welcome to your ecommerce admin panel</p>
	</div>

	<!-- Stats Grid -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
		<!-- Products Count -->
		<div class="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
			<div class="p-6">
				<div class="flex items-center">
					<div class="flex-shrink-0">
						<div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
							</svg>
						</div>
					</div>
					<div class="ml-4">
						<p class="text-sm font-medium text-gray-500">Total Products</p>
						<p class="text-2xl font-bold text-gray-900">{stats.productsCount}</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Categories Count -->
		<div class="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
			<div class="p-6">
				<div class="flex items-center">
					<div class="flex-shrink-0">
						<div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14-7H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
							</svg>
						</div>
					</div>
					<div class="ml-4">
						<p class="text-sm font-medium text-gray-500">Categories</p>
						<p class="text-2xl font-bold text-gray-900">{stats.categoriesCount}</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Orders Count -->
		<div class="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
			<div class="p-6">
				<div class="flex items-center">
					<div class="flex-shrink-0">
						<div class="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
							</svg>
						</div>
					</div>
					<div class="ml-4">
						<p class="text-sm font-medium text-gray-500">Total Orders</p>
						<p class="text-2xl font-bold text-gray-900">{stats.ordersCount}</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Revenue -->
		<div class="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
			<div class="p-6">
				<div class="flex items-center">
					<div class="flex-shrink-0">
						<div class="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
							</svg>
						</div>
					</div>
					<div class="ml-4">
						<p class="text-sm font-medium text-gray-500">Total Revenue</p>
						<p class="text-2xl font-bold text-gray-900">{stats.totalRevenue} DZD</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Additional Stats Row -->
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
		<!-- Low Stock Alert -->
		<div class="bg-white overflow-hidden shadow-lg rounded-lg">
			<div class="p-6">
				<div class="flex items-center justify-between">
					<div>
						<h3 class="text-lg font-medium text-gray-900">Low Stock Alert</h3>
						<p class="text-sm text-gray-500 mt-1">Products with less than 10 items in stock</p>
					</div>
					<div class="flex items-center">
						{#if stats.lowStockCount > 0}
							<div class="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
								<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.856-.833-2.828 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
								</svg>
							</div>
						{:else}
							<div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
								<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
						{/if}
						<div class="ml-4 text-right">
							<p class="text-2xl font-bold {stats.lowStockCount > 0 ? 'text-red-600' : 'text-green-600'}">{stats.lowStockCount}</p>
							<p class="text-sm text-gray-500">{stats.lowStockCount > 0 ? 'Need Restock' : 'All Good'}</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Quick Actions -->
		<div class="bg-white overflow-hidden shadow-lg rounded-lg">
			<div class="p-6">
				<h3 class="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
				<div class="space-y-3">
					<a href="/admin/products/create" class="flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
						<span class="text-blue-700 font-medium">Add New Product</span>
						<svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
						</svg>
					</a>
					<a href="/admin/categories" class="flex items-center justify-between p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200">
						<span class="text-green-700 font-medium">Manage Categories</span>
						<svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14-7H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
						</svg>
					</a>
					<a href="/admin/orders" class="flex items-center justify-between p-3 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors duration-200">
						<span class="text-yellow-700 font-medium">View Orders</span>
						<svg class="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Recent Activity placeholder -->
	<div class="bg-white shadow-lg rounded-lg">
		<div class="px-6 py-4 border-b border-gray-200">
			<h3 class="text-lg font-medium text-gray-900">System Status</h3>
		</div>
		<div class="px-6 py-4">
			<div class="flex items-center justify-between py-3">
				<div class="flex items-center">
					<div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
					<span class="text-sm text-gray-600">Backend API</span>
				</div>
				<span class="text-sm font-medium text-green-600">Online</span>
			</div>
			<div class="flex items-center justify-between py-3">
				<div class="flex items-center">
					<div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
					<span class="text-sm text-gray-600">Database</span>
				</div>
				<span class="text-sm font-medium text-green-600">Connected</span>
			</div>
			<div class="flex items-center justify-between py-3">
				<div class="flex items-center">
					<div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
					<span class="text-sm text-gray-600">Admin Panel</span>
				</div>
				<span class="text-sm font-medium text-green-600">Running</span>
			</div>
		</div>
	</div>
</div>
