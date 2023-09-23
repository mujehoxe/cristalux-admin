<script>
	import ProductCard from './ProductCard.svelte';

	/** @type {import('./$types').PageServerLoad} */
	export let data;
	/** @type {[]}*/
	let { products } = data;
	let [pageProducts, totalProductsLenght] = products;
</script>

{#if pageProducts !== undefined}
	<div class="md:pl-64 flex flex-col flex-1">
		<main class="flex-col">
			<section aria-labelledby="related-heading" class="mt-16 sm:mt-24">
				<h2 id="related-heading" class="text-lg font-medium text-gray-900">
					Products
				</h2>
				<div class="flex flex-wrap justify-evenly justify-items-start gap-4">
					{#each pageProducts as product}
						<ProductCard {product} />
					{/each}
				</div>
			</section>
		</main>
	</div>
{:else}
	<p>Loading...</p>
{/if}
