<script>
	import { FlatToast, ToastContainer } from 'svelte-toasts';
	import '../app.css';
	import Sidebar from './Sidebar.svelte';
	import { page } from '$app/stores';

/** @type {import('./$types').LayoutData} */
export let data;

$: isLoginPage = $page.url.pathname.includes('/login');
</script>

{#if data.isAuthenticated && !isLoginPage}
	<Sidebar />
	<div class="md:pl-64 flex flex-col flex-1">
		<div class="py-6 px-4 sm:px-6 lg:px-8">
			<main class="flex-col">
				<ToastContainer placement="bottom-right" let:data>
					<FlatToast {data} />
				</ToastContainer>
				<slot />
			</main>
		</div>
	</div>
{:else}
	<div class="min-h-screen bg-gray-100 flex flex-col justify-center">
		<ToastContainer placement="bottom-right" let:data>
			<FlatToast {data} />
		</ToastContainer>
		<slot />
	</div>
{/if}
