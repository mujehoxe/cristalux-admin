<script>
	import ProductCard from './ProductCard.svelte';

	/** @type {import('./$types').PageServerLoad} */
	export let data;
	/** @type {[]}*/
	let { products } = data;
	let [pageProducts, totalProductsLenght] = products;
</script>

{#if pageProducts !== undefined}
	<section aria-labelledby="related-heading">
		<h2 id="related-heading" class="text-lg font-medium text-gray-900">
			Products
		</h2>
		<div class="flex flex-wrap justify-evenly justify-items-start gap-4 mt-4">
			{#each pageProducts as product}
				<ProductCard {product} showModal={openModal} />
			{/each}
		</div>
	</section>
{:else}
	<p>Loading...</p>
{/if}
