<script>
	import CreateProduct from './CreateProduct.svelte';
	import Pagination from './Pagination.svelte';
	import ProductCard from './ProductCard.svelte';

	/** @type {import('./$types').PageServerLoad} */
	export let data;
	let { products } = data;
	let [pageProducts, totalRows] = products;
	let perPage = pageProducts.length;
	let currentPage = 0;

	import { PUBLIC_BASE_URL } from '$env/static/public'

	async function handleProductDelete(productId) {
		// Remove the product from the current page products
		pageProducts = pageProducts.filter(p => p.id !== productId);
		totalRows -= 1;
		
		// If page is empty and we're not on first page, go to previous page
		if (pageProducts.length === 0 && currentPage > 0) {
			currentPage -= 1;
			await loadPage();
		}
	}

	export async function loadPage() {
		console.log(PUBLIC_BASE_URL, "*****")
		const res = await fetch(
			`${PUBLIC_BASE_URL}/api/v1/products?page=${currentPage + 1}&pageSize=9`
		);
		[pageProducts, totalRows] = await res.json();
		return { products };
	}
</script>

{#if pageProducts !== undefined}
	<section aria-labelledby="related-heading">
		<h2 id="related-heading" class="text-lg font-medium text-gray-900">
			Products
		</h2>
		<CreateProduct />
		<div class="p-6">
			<Pagination {totalRows} {perPage} bind:currentPage {loadPage} />
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
			{#key pageProducts}
				{#each pageProducts as product}
					<ProductCard {product} onDelete={handleProductDelete} />
				{/each}
			{/key}
		</div>
		<div class="p-6">
			<Pagination {totalRows} {perPage} bind:currentPage {loadPage} />
		</div>
	</section>
{:else}
	<p>Loading...</p>
{/if}
