<script>
	import Image from '$lib/Image.svelte';
	export let product;
</script>

<a
	href={`/products/${product.id}`}
	class="bg-slate-300 w-full md:w-80 min-h-[24rem] relative rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform"
>
	<div
		class="w-full aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75"
	>
		<Image image={'/' + product.thumbnail} />
	</div>
	<div class="flex flex-col justify-between p-2">
		<div class="w-full flex flex-col justify-between items-start mb-2">
			<h3 class="text-sm text-gray-700">
				<span aria-hidden="true" class="absolute inset-0" />
				{product.name.toUpperCase()}
			</h3>
			<p class="text-sm min-h-[2.5rem] text-gray-500 line-clamp-2">
				{#if product.description}
					{product.description}
				{/if}
			</p>
		</div>
		<p class="text-sm text-right font-medium text-gray-900">
			{#if product.description}
				{product.price} DZD
			{/if}
		</p>
	</div>
</a>
