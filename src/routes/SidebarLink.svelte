<script>
	/** @type {string} */
	export let name;
</script>

<a
	href={'/' + name.toLowerCase()}
	class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
>
	{name}
</a>
