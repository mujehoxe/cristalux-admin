<script>
	import ProductForm from '../ProductForm.svelte';

	/** @type {import('./$types').PageServerData} */
	export let data;
	let { product, categories } = data;
</script>

<ProductForm {product} {categories} action="update" />
