<script>
import Image from '$lib/Image.svelte';
import { base } from '$app/paths';

export let product;
export let onDelete = () => {};

import { PUBLIC_BASE_URL } from '$env/static/public'

function constructImageUrl(thumbnail) {
	if (!thumbnail) return '/placeholder.jpg';
	if (thumbnail.startsWith('http')) return thumbnail;
	if (PUBLIC_BASE_URL && PUBLIC_BASE_URL.trim() !== '') {
		return `${PUBLIC_BASE_URL}/${thumbnail}`;
	}
	return `/${thumbnail}`;
}

async function handleDelete() {
	if (confirm(`Are you sure you want to delete "${product.name}"?`)) {
		try {
			// Make request to backend API through our proxy
			const response = await fetch(`/api/v1/products/${product.id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			
			if (response.ok) {
				onDelete(product.id);
				alert('Product deleted successfully!');
			} else {
				const errorText = await response.text();
				console.error('Delete failed:', response.status, errorText);
				alert(`Failed to delete product: ${response.status} ${response.statusText}`);
			}
		} catch (error) {
			console.error('Error deleting product:', error);
			alert('Network error while deleting product');
		}
	}
}

</script>

<div class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group relative">
	<!-- Product Image -->
	<div class="relative h-64 overflow-hidden">
		<Image 
			image={constructImageUrl(product.thumbnail)} 
			class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
		/>
		<div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
		
		<!-- Action Buttons -->
		<div class="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
			<a 
				href={`${base}/products/${product.id}`} 
				class="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-lg transition-colors duration-200"
				title="Edit Product"
			>
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
				</svg>
			</a>
			<button 
				on:click={handleDelete}
				class="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transition-colors duration-200"
				title="Delete Product"
			>
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
				</svg>
			</button>
		</div>
		
		<!-- Category Badge -->
		{#if product.category}
			<div class="absolute top-3 left-3">
				<span class="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
					{product.category.name}
				</span>
			</div>
		{/if}
	</div>
	
	<!-- Product Info -->
	<div class="p-6">
		<div class="flex justify-between items-start mb-3">
			<h3 class="font-semibold text-lg text-gray-900 line-clamp-2 flex-1 mr-3">
				{product.name}
			</h3>
			<div class="text-right">
				<p class="text-2xl font-bold text-green-600">{product.price} DZD</p>
				{#if product.percentage}
					<span class="text-sm text-red-500 font-medium">-{product.percentage}%</span>
				{/if}
			</div>
		</div>
		
		{#if product.description}
			<p class="text-gray-600 text-sm line-clamp-3 mb-4">
				{product.description}
			</p>
		{/if}
		
		<!-- Stock Info -->
		<div class="flex items-center justify-between pt-3 border-t border-gray-100">
			<div class="flex items-center gap-2">
				<div class="w-2 h-2 rounded-full {product.quantity > 10 ? 'bg-green-500' : product.quantity > 0 ? 'bg-yellow-500' : 'bg-red-500'}"></div>
				<span class="text-sm text-gray-600">
					{product.quantity > 0 ? `${product.quantity} in stock` : 'Out of stock'}
				</span>
			</div>
			<a 
				href={`${base}/products/${product.id}`} 
				class="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
			>
				View Details →
			</a>
		</div>
	</div>
</div>
