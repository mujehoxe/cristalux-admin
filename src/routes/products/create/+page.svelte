<script>
	import ProductForm from '../ProductForm.svelte';

	/** @type {import('./$types').PageServerData} */
	export let data;
	let { categories } = data;

	let product = {
		name: '',
		description: '',
		price: 0,
		percentage: null,
		quantity: 0,
		thumbnail: null,
		images: [],
		category: null
	};
</script>

<ProductForm {product} {categories} action="create" />
