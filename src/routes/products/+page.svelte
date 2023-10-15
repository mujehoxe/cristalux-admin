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

	export async function loadPage() {
		const res = await fetch(
			`api/v1/products?page=${currentPage + 1}&pageSize=9`
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
		<div class="flex flex-wrap justify-evenly justify-items-start gap-4 mt-4">
			{#key pageProducts}
				{#each pageProducts as product}
					<ProductCard {product} />
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
