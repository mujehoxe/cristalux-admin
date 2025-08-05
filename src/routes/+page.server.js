import { BACKEND_API_URL } from '$env/static/private';

export const load = async ({ fetch }) => {
	try {
		// Fetch products count
		const productsResponse = await fetch(`${BACKEND_API_URL}/products`);
		const products = productsResponse.ok ? await productsResponse.json() : [];
		const productsCount = Array.isArray(products) ? products.length : (products[1] || 0);

		// Fetch categories count
		const categoriesResponse = await fetch(`${BACKEND_API_URL}/categories`);
		const categories = categoriesResponse.ok ? await categoriesResponse.json() : [];
		const categoriesCount = Array.isArray(categories) ? categories.length : 0;

		// Fetch orders count
		const ordersResponse = await fetch(`${BACKEND_API_URL}/orders`);
		const orders = ordersResponse.ok ? await ordersResponse.json() : [];
		const ordersCount = Array.isArray(orders) ? orders.length : 0;

		// Calculate total revenue from orders
		let totalRevenue = 0;
		if (Array.isArray(orders)) {
			totalRevenue = orders.reduce((sum, order) => {
				return sum + (parseFloat(order.total) || 0);
			}, 0);
		}

		// Calculate low stock products (less than 10 in stock)
		let lowStockCount = 0;
		if (Array.isArray(products)) {
			lowStockCount = products.filter(product => product.quantity < 10).length;
		} else if (products[0]) {
			lowStockCount = products[0].filter(product => product.quantity < 10).length;
		}

		return {
			stats: {
				productsCount,
				categoriesCount,
				ordersCount,
				totalRevenue: totalRevenue.toFixed(2),
				lowStockCount
			}
		};
	} catch (error) {
		console.error('Error fetching dashboard stats:', error);
		return {
			stats: {
				productsCount: 0,
				categoriesCount: 0,
				ordersCount: 0,
				totalRevenue: '0.00',
				lowStockCount: 0
			}
		};
	}
};
