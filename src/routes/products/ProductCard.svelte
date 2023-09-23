<script>
	import ShowMoreButton from './ShowMoreButton.svelte';
	export let product;
</script>

<div class="bg-slate-300 w-80 relative rounded-xl">
	<div
		class="w-full bg-red-300 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
	>
		<img
			src={`http://localhost:3000/${product.thumbnail}`}
			alt={product.name}
			class="w-full h-full object-center object-cover"
		/>
		<ShowMoreButton productId={product.id} />
	</div>
	<div class="mt-4 flex justify-between p-2">
		<div>
			<h3 class="text-sm text-gray-700">
				<span aria-hidden="true" class="absolute inset-0" />
				{product.name.toUpperCase()}
			</h3>
			{#if product.description}
				<p class="mt-1 text-sm text-gray-500">{product.description}</p>
			{/if}
		</div>
		<p class="text-sm font-medium text-gray-900">$35</p>
	</div>
</div>
