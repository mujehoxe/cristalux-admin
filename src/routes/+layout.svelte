<script>
	import '../app.css';
	import Sidebar from './Sidebar.svelte';
</script>

<Sidebar />
<div class="md:pl-64 flex flex-col flex-1">
	<div class="py-6 px-4 sm:px-6 lg:px-8">
		<main class="flex-col">
			<slot />
		</main>
	</div>
</div>
