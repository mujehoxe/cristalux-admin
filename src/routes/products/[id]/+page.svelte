<script>
	import ProductForm from '../ProductForm.svelte';
	import { goto } from '$app/navigation';
	import { toastStore } from '$lib/toastStore.js';

	/** @type {import('./$types').PageServerData} */
	export let data;
	let { product, categories } = data;

	function showError(message) {
		toastStore.addToast(message, 'error');
	}

	async function handleDelete() {
		try {
			const response = await fetch(`/api/v1/products/${product.id}`, {
				method: 'DELETE'
			});

			if (!response.ok) {
				showError('Failed to delete product');
			}

			goto('/products');
		} catch (error) {
			showError(error.message);
			console.error(error.message);
		}
	}
</script>

<ProductForm {product} {categories} action="update" />

<div class="py-2 ml-auto w-fit">
	<button
		class="py-2 px-4 bg-red-500 text-white text-center rounded-lg font-semibold hover:bg-red-700 transition-colors"
		on:click={handleDelete}
	>
		Suprimer
	</button>
</div>
