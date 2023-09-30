<script>
	import { faCubes, faPlus } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
</script>

<a
	href="products/create"
	type="button"
	class="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
>
	<Fa
		class="mx-auto text-4xl text-indigo-600"
		icon={faCubes}
		stroke="currentColor"
		aria-hidden="true"
	/>
	<div class="flex flex-row justify-center items-center">
		<span class="mt-2 block text-sm font-medium text-gray-900">
			Create a new product
		</span>
		<Fa icon={faPlus} class="text-center text-xl text-indigo-600" />
	</div>
</a>
