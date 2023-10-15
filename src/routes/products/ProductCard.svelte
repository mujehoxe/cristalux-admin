<script>
	import Image from '$lib/Image.svelte';

	export let product;
</script>

<a
	href={`/products/${product.id}`}
	class="bg-slate-300 w-80 h-96 relative rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform"
>
	<div
		class="w-full aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75"
	>
		<Image image={'https://cristalux.store/' + product.thumbnail} />
	</div>
	<div class="flex flex-row justify-between p-2">
		<div class="w-full flex flex-col justify-between items-start">
			<h3 class="text-sm text-gray-700">
				<span aria-hidden="true" class="absolute inset-0" />
				{product.name.toUpperCase()}
			</h3>
			{#if product.description}
				<p class="text-sm text-gray-500 text-ellipsis overflow-hidden w-64">
					{product.description}
				</p>
			{/if}
		</div>
		<p class="text-sm font-medium text-gray-900">{product.price} DZD</p>
	</div>
</a>
